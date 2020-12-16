

package cn.ibizlab.pms.core.zentao.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.Project;
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface ProjectInheritMapping {

    @Mappings({
        @Mapping(source ="id",target = "indexid"),
        @Mapping(source ="name",target = "indexname"),
        @Mapping(target ="focusNull",ignore = true),
    })
    IBIZPRO_INDEX toIbizproIndex(Project project);

    @Mappings({
        @Mapping(source ="indexid" ,target = "id"),
        @Mapping(source ="indexname" ,target = "name"),
        @Mapping(target ="focusNull",ignore = true),
    })
    Project toProject(IBIZPRO_INDEX ibizpro_index);

    List<IBIZPRO_INDEX> toIbizproIndex(List<Project> project);

    List<Project> toProject(List<IBIZPRO_INDEX> ibizpro_index);

}


