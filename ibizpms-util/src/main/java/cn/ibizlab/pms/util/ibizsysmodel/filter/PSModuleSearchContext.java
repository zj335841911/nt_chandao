package cn.ibizlab.pms.util.ibizsysmodel.filter;

import cn.ibizlab.pms.util.filter.SearchContextBase;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * ServiceApi数据实体[PSModule] 查询条件对象
 */
@Slf4j
@Data
public class PSModuleSearchContext extends SearchContextBase {
	private String n_psmodulename_like;//[ 系统模块名称]

	private Integer n_lockflag_eq;//[模型锁模式]

	private Integer n_serviceapiflag_eq;//[服务API模式]

	private String n_sysreftype_eq;//[子系统类型]

	private String n_usercat_eq;//[用户分类]

}


