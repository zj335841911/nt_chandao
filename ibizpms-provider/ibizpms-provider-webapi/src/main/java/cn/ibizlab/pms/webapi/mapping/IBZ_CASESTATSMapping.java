package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.ibiz.domain.IBZ_CASESTATS;
import cn.ibizlab.pms.webapi.dto.IBZ_CASESTATSDTO;
import cn.ibizlab.pms.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "WebApiIBZ_CASESTATSMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface IBZ_CASESTATSMapping extends MappingBase<IBZ_CASESTATSDTO, IBZ_CASESTATS> {


}

