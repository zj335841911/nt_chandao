

package cn.ibizlab.pms.core.zentao.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface BugInheritMapping {

    @Mappings({
        @Mapping(source ="id",target = "indexid"),
        @Mapping(source ="title",target = "indexname"),
        @Mapping(target ="focusNull",ignore = true),
    })
    IBIZPRO_INDEX toIbizproIndex(Bug bug);

    @Mappings({
        @Mapping(source ="indexid" ,target = "id"),
        @Mapping(source ="indexname" ,target = "title"),
        @Mapping(target ="focusNull",ignore = true),
    })
    Bug toBug(IBIZPRO_INDEX ibizpro_index);

    List<IBIZPRO_INDEX> toIbizproIndex(List<Bug> bug);

    List<Bug> toBug(List<IBIZPRO_INDEX> ibizpro_index);

}


