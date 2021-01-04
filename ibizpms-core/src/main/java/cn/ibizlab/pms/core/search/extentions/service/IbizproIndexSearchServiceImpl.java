package cn.ibizlab.pms.core.search.extentions.service;

import cn.ibizlab.pms.core.ibizpro.domain.IbizproIndex;
import cn.ibizlab.pms.core.search.extentions.query.IbizporIndexCondition;
import liquibase.pro.packaged.A;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.unit.TimeValue;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Slf4j
@Component
public class IbizproIndexSearchServiceImpl implements IbizproIndexSearchService {
    @Autowired
    private RestHighLevelClient rhlClient;
    @Autowired
    private IbizporIndexCondition ibizporIndexCondition;
    @Override
    public Page<IbizproIndex> search(String hitKey, int from, int size) {

        SearchSourceBuilder sourceBuilder = ibizporIndexCondition.buildQuery(hitKey);
        sourceBuilder.from(from);
        sourceBuilder.size(size);
        sourceBuilder.timeout(new TimeValue(60, TimeUnit.SECONDS));

        SearchRequest searchRequest = new SearchRequest(INDEX); //索引
        searchRequest.types(TYPE);
        searchRequest.source(sourceBuilder);

        SearchResponse response = null;
        try {
            response = rhlClient.search(searchRequest, RequestOptions.DEFAULT);
        } catch (IOException e) {
            e.printStackTrace();
            throw new InternalError();
        }
        SearchHits hits = response.getHits();  //SearchHits提供有关所有匹配的全局信息，例如总命中数或最高分数：
        SearchHit[] searchHits = hits.getHits();
        for (SearchHit hit : searchHits) {
            log.info("search -> {}", hit.getSourceAsString());
            Map<String, Object> source = hit.getSourceAsMap();
        }

        long total = hits.totalHits;
        long totalPages = total / size;

        //解析响应结果
        ArrayList<IbizproIndex> list = new ArrayList<>();
        for (SearchHit hit : searchHits) {
            Map<String, Object> source = hit.getSourceAsMap();
            IbizproIndex ibizproIndex = new IbizproIndex();
            ibizproIndex.setIndexid(Long.valueOf(source.get("indexid").toString()));
            ibizproIndex.setIndextype(source.get("indextype") == null ? null : source.get("indextype").toString());
            ibizproIndex.setIndexname(source.get("indexname") == null ? null : source.get("indexname").toString());
            ibizproIndex.setIndexdesc(source.get("indexdesc") == null ? null : source.get("indexdesc").toString());
            list.add(ibizproIndex);
        }

        return new PageImpl<>(list);
    }

}
