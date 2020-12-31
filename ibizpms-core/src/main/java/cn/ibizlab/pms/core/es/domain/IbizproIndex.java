package cn.ibizlab.pms.core.es.domain;

import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import org.springframework.data.annotation.Id;
import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;
import lombok.Data;

@Data
@Document(indexName = "pms", type = "_doc", shards = 5, replicas = 1)
public class IbizproIndex implements Serializable {

    private static final long serialVersionUID = 1L;

    @Field(type = FieldType.Text)
    private String indextype;
    @Field(type = FieldType.Long)
    private Long indexid;
    @Field(type = FieldType.Text)
    private String indexname;
    @Field(type = FieldType.Text)
    private String deleted;
    @Field(type = FieldType.Text)
    private String orgid;
    @Field(type = FieldType.Text)
    private String mdeptid;
    @Field(type = FieldType.Text)
    private String indexdesc;
    @Field(type = FieldType.Text)
    private String color;
    @Field(type = FieldType.Text)
    private String project;
    @Field(type = FieldType.Text)
    private String acllist;
    @Field(type = FieldType.Text)
    private String acl;
    @Field(type = FieldType.Text)
    private String docid;
}





