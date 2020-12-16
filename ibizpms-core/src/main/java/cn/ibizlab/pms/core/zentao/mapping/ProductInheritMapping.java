

package cn.ibizlab.pms.core.zentao.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface ProductInheritMapping {

    @Mappings({
        @Mapping(source ="id",target = "indexid"),
        @Mapping(source ="name",target = "indexname"),
        @Mapping(target ="focusNull",ignore = true),
    })
    IBIZPRO_INDEX toIbizproIndex(Product product);

    @Mappings({
        @Mapping(source ="indexid" ,target = "id"),
        @Mapping(source ="indexname" ,target = "name"),
        @Mapping(target ="focusNull",ignore = true),
    })
    Product toProduct(IBIZPRO_INDEX ibizpro_index);

    List<IBIZPRO_INDEX> toIbizproIndex(List<Product> product);

    List<Product> toProduct(List<IBIZPRO_INDEX> ibizpro_index);

}


