package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStory;
import cn.ibizlab.pms.webapi.dto.IBZProStoryDTO;
import cn.ibizlab.pms.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},implementationName="WebApiIBZProStoryMapping",
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface IBZProStoryMapping extends MappingBase<IBZProStoryDTO, IBZProStory> {


}

