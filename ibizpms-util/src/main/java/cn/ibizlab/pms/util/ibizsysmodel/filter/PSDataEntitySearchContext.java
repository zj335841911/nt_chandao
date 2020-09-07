package cn.ibizlab.pms.util.ibizsysmodel.filter;

import cn.ibizlab.pms.util.filter.SearchContextBase;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * ServiceApi数据实体[PSDataEntity] 查询条件对象
 */
@Slf4j
@Data
public class PSDataEntitySearchContext extends SearchContextBase {
	private String n_psdataentityname_like;//[实体名称]

	private String n_psmodulename_eq;//[系统模块]

	private String n_psmodulename_like;//[系统模块]

	private String n_psmoduleid_eq;//[系统模块]

	private String n_decat_eq;//[实体类别]

	private Integer n_dynamicmode_eq;//[扩展模式]

	private Integer n_detype_eq;//[实体类型]

	private String n_indexdetype_eq;//[索引类型]

	private Integer n_lockflag_eq;//[模型锁模式]

	private String n_usercat_eq;//[用户分类]

}


