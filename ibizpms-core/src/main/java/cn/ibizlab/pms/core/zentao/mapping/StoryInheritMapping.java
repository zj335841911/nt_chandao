

package cn.ibizlab.pms.core.zentao.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.Story;
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface StoryInheritMapping {

    @Mappings({
        @Mapping(source ="id",target = "indexid"),
        @Mapping(source ="title",target = "indexname"),
        @Mapping(target ="focusNull",ignore = true),
    })
    IBIZPRO_INDEX toIbizproIndex(Story story);

    @Mappings({
        @Mapping(source ="indexid" ,target = "id"),
        @Mapping(source ="indexname" ,target = "title"),
        @Mapping(target ="focusNull",ignore = true),
    })
    Story toStory(IBIZPRO_INDEX ibizpro_index);

    List<IBIZPRO_INDEX> toIbizproIndex(List<Story> story);

    List<Story> toStory(List<IBIZPRO_INDEX> ibizpro_index);

}


