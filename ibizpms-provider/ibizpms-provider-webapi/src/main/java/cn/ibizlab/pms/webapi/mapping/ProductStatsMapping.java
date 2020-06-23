package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.ibiz.domain.ProductStats;
import cn.ibizlab.pms.webapi.dto.ProductStatsDTO;
import cn.ibizlab.pms.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProductStatsMapping extends MappingBase<ProductStatsDTO, ProductStats> {


}

