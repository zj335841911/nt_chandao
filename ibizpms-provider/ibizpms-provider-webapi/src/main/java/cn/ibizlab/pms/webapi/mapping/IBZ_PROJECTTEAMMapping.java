package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.ibiz.domain.IBZ_PROJECTTEAM;
import cn.ibizlab.pms.webapi.dto.IBZ_PROJECTTEAMDTO;
import cn.ibizlab.pms.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface IBZ_PROJECTTEAMMapping extends MappingBase<IBZ_PROJECTTEAMDTO, IBZ_PROJECTTEAM> {


}

