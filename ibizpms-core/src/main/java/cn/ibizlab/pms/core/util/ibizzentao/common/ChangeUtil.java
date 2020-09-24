package cn.ibizlab.pms.core.util.ibizzentao.common;

import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.util.domain.EntityMP;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
public class ChangeUtil {
    public static <T extends EntityMP> List<History> diff(T old, T sa){
        ArrayList<History> changes = new ArrayList<>();
        log.info("更新对比diff：未实现");
        History change = new History();
        change.setField("name");
        change.setOld("old value");
        change.setIbiznew("new value");
        change.setDiff("diff");
        changes.add(change) ;
        return changes ;
    }
}
