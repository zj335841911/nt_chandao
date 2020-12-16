

package cn.ibizlab.pms.core.zentao.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface TaskInheritMapping {

    @Mappings({
        @Mapping(source ="id",target = "indexid"),
        @Mapping(source ="name",target = "indexname"),
        @Mapping(target ="focusNull",ignore = true),
    })
    IBIZPRO_INDEX toIbizproIndex(Task task);

    @Mappings({
        @Mapping(source ="indexid" ,target = "id"),
        @Mapping(source ="indexname" ,target = "name"),
        @Mapping(target ="focusNull",ignore = true),
    })
    Task toTask(IBIZPRO_INDEX ibizpro_index);

    List<IBIZPRO_INDEX> toIbizproIndex(List<Task> task);

    List<Task> toTask(List<IBIZPRO_INDEX> ibizpro_index);

}


