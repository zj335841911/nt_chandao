package cn.ibizlab.pms.core.util.zentao.bean;

import com.alibaba.fastjson.JSONObject;
import lombok.Data;

import java.math.BigInteger;
import java.util.List;

@Data
public class ZTResult {
    private boolean isSuccess;
    private BigInteger etId;
    private List<BigInteger> etIds;
    private String message;
    private JSONObject result;
}
