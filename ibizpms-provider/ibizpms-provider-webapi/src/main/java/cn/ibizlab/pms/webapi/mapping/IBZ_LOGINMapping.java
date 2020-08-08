package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.ibiz.domain.IBZ_LOGIN;
import cn.ibizlab.pms.webapi.dto.IBZ_LOGINDTO;
import cn.ibizlab.pms.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},implementationName="WebApiIBZ_LOGINMapping",
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface IBZ_LOGINMapping extends MappingBase<IBZ_LOGINDTO, IBZ_LOGIN> {


}

