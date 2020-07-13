package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.webapi.dto.ActionDTO;
import cn.ibizlab.pms.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ActionMapping extends MappingBase<ActionDTO, Action> {


}

