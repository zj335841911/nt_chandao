package cn.ibizlab.pms.core.search.config;

import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class ElasticSearchConfig {
    @Value("${ibiz.es.server}")
    public String address;

    @Bean
    public RestHighLevelClient restHighLevelClient() {

        // 拆分ip地址
        List<HttpHost> hostLists = new ArrayList<>();
        String[] hostList = address.split(",");
        for (String addr : hostList) {
            String host = addr.split(":")[0];
            String port = addr.split(":")[1];
            //参数1：IP，参数2：端口号，参数三：协议
//            hostLists.add(new HttpHost(host, Integer.parseInt(port), schema));
            hostLists.add(new HttpHost(host, Integer.parseInt(port)));
        }
        // 转换成 HttpHost 数组
        HttpHost[] httpHost = hostLists.toArray(new HttpHost[]{});
        // 构建连接对象
        RestClientBuilder builder = RestClient.builder(httpHost);

        // 异步连接延时配置
        //配置请求超时超时，分为 连接超时(默认1s) 和 套接字超时(默认30s)
        builder.setRequestConfigCallback(requestConfigBuilder -> {
//            requestConfigBuilder.setConnectTimeout(connectTimeout);//配置连接超时时间
//            requestConfigBuilder.setSocketTimeout(socketTimeout);//配置套接字超时时间
//            requestConfigBuilder.setConnectionRequestTimeout(connectionRequestTimeout);//获取连接的超时时间
            return requestConfigBuilder;
        });

        // 异步连接数配置
        builder.setHttpClientConfigCallback(httpClientBuilder -> {
//            httpClientBuilder.setMaxConnTotal(maxConnectNum);//配置最大连接数量
//            httpClientBuilder.setMaxConnPerRoute(maxConnectPerRoute);//配置最大的路由连接数
            return httpClientBuilder;
        });
        RestHighLevelClient client = new RestHighLevelClient(builder);


        return new RestHighLevelClient(builder);
    }
}