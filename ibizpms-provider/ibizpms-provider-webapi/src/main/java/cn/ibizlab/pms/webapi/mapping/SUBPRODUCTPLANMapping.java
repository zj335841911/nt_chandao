package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import cn.ibizlab.pms.webapi.dto.SUBPRODUCTPLANDTO;
import cn.ibizlab.pms.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface SUBPRODUCTPLANMapping extends MappingBase<SUBPRODUCTPLANDTO, ProductPlan> {


}

