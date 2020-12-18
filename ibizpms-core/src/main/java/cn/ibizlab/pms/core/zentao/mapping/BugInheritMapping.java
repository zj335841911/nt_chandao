

package cn.ibizlab.pms.core.zentao.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproIndex;
import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface BugInheritMapping {

    @Mappings({
        @Mapping(source ="id",target = "indexid"),
        @Mapping(source ="title",target = "indexname"),
        @Mapping(target ="focusNull",ignore = true),
    })
    IbizproIndex toIbizproindex(Bug bug);

    @Mappings({
        @Mapping(source ="indexid" ,target = "id"),
        @Mapping(source ="indexname" ,target = "title"),
        @Mapping(target ="focusNull",ignore = true),
    })
    Bug toBug(IbizproIndex ibizproindex);

    List<IbizproIndex> toIbizproindex(List<Bug> bug);

    List<Bug> toBug(List<IbizproIndex> ibizproindex);

}


