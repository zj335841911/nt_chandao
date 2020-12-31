package cn.ibizlab.pms.core.search.mapping;

import cn.ibizlab.pms.core.ibizpro.domain.IbizproIndex;

import lombok.extern.slf4j.Slf4j;
import java.io.IOException;

@Slf4j
public class IbizproIndexMapping {

    /**
     * 映射关系：Bug --> IbizproIndex
     */
    public static IbizproIndex bug2Bug(cn.ibizlab.pms.core.zentao.domain.Bug srcET) {
        IbizproIndex indexET = new IbizproIndex();

        //添加类型信息
        indexET.setIndextype("bug");

        //添加doc主键、数据主键及主信息
        indexET.setDocid("bug:" + srcET.getId());
        indexET.setIndexid(srcET.getId());
        indexET.setIndexname(srcET.getTitle());

        //添加其他关系映射字段
        indexET.setIndexdesc(srcET.getSteps());

        return indexET;
    }
    /**
     * 映射关系：Case --> IbizproIndex
     */
    public static IbizproIndex case2Case(cn.ibizlab.pms.core.zentao.domain.Case srcET) {
        IbizproIndex indexET = new IbizproIndex();

        //添加类型信息
        indexET.setIndextype("case");

        //添加doc主键、数据主键及主信息
        indexET.setDocid("case:" + srcET.getId());
        indexET.setIndexid(srcET.getId());
        indexET.setIndexname(srcET.getTitle());

        //添加其他关系映射字段
        indexET.setIndexdesc(srcET.getPrecondition());

        return indexET;
    }
    /**
     * 映射关系：Product --> IbizproIndex
     */
    public static IbizproIndex product2Product(cn.ibizlab.pms.core.zentao.domain.Product srcET) {
        IbizproIndex indexET = new IbizproIndex();

        //添加类型信息
        indexET.setIndextype("product");

        //添加doc主键、数据主键及主信息
        indexET.setDocid("product:" + srcET.getId());
        indexET.setIndexid(srcET.getId());
        indexET.setIndexname(srcET.getName());

        //添加其他关系映射字段
        indexET.setIndexdesc(srcET.getDesc());

        return indexET;
    }
    /**
     * 映射关系：Project --> IbizproIndex
     */
    public static IbizproIndex project2Project(cn.ibizlab.pms.core.zentao.domain.Project srcET) {
        IbizproIndex indexET = new IbizproIndex();

        //添加类型信息
        indexET.setIndextype("project");

        //添加doc主键、数据主键及主信息
        indexET.setDocid("project:" + srcET.getId());
        indexET.setIndexid(srcET.getId());
        indexET.setIndexname(srcET.getName());

        //添加其他关系映射字段
        indexET.setIndexdesc(srcET.getDesc());

        return indexET;
    }
    /**
     * 映射关系：Story --> IbizproIndex
     */
    public static IbizproIndex story2Story(cn.ibizlab.pms.core.zentao.domain.Story srcET) {
        IbizproIndex indexET = new IbizproIndex();

        //添加类型信息
        indexET.setIndextype("story");

        //添加doc主键、数据主键及主信息
        indexET.setDocid("story:" + srcET.getId());
        indexET.setIndexid(srcET.getId());
        indexET.setIndexname(srcET.getTitle());

        //添加其他关系映射字段
        indexET.setIndexdesc(srcET.getSpec());

        return indexET;
    }
    /**
     * 映射关系：Task --> IbizproIndex
     */
    public static IbizproIndex task2Task(cn.ibizlab.pms.core.zentao.domain.Task srcET) {
        IbizproIndex indexET = new IbizproIndex();

        //添加类型信息
        indexET.setIndextype("task");

        //添加doc主键、数据主键及主信息
        indexET.setDocid("task:" + srcET.getId());
        indexET.setIndexid(srcET.getId());
        indexET.setIndexname(srcET.getName());

        //添加其他关系映射字段
        indexET.setIndexdesc(srcET.getDesc());

        return indexET;
    }
}




