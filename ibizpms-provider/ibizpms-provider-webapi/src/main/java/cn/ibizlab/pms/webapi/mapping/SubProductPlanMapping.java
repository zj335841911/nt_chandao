package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import cn.ibizlab.pms.webapi.dto.SubProductPlanDTO;
import cn.ibizlab.pms.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface SubProductPlanMapping extends MappingBase<SubProductPlanDTO, ProductPlan> {


}
