

package cn.ibizlab.pms.core.zentao.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.Story;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproIndex;
import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface StoryInheritMapping {

    @Mappings({
        @Mapping(source ="id",target = "indexid"),
        @Mapping(source ="title",target = "indexname"),
        @Mapping(target ="focusNull",ignore = true),
        @Mapping(source ="deleted",target = "deleted"),
    })
    IbizproIndex toIbizproindex(Story minorEntity);

    @Mappings({
        @Mapping(source ="indexid" ,target = "id"),
        @Mapping(source ="indexname" ,target = "title"),
        @Mapping(target ="focusNull",ignore = true),
    })
    Story toStory(IbizproIndex majorEntity);

    List<IbizproIndex> toIbizproindex(List<Story> minorEntities);

    List<Story> toStory(List<IbizproIndex> majorEntities);

}


