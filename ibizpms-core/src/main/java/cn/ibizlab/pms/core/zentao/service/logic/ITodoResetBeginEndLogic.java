package cn.ibizlab.pms.core.zentao.service.logic;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import cn.ibizlab.pms.core.zentao.domain.Todo;

/**
 * 关系型数据实体[ResetBeginEnd] 对象
 */
public interface ITodoResetBeginEndLogic {

    void execute(Todo et) ;

}
