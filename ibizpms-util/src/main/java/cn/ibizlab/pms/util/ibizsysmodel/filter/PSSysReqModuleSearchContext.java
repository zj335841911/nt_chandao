package cn.ibizlab.pms.util.ibizsysmodel.filter;

import cn.ibizlab.pms.util.filter.SearchContextBase;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * ServiceApi数据实体[PSSysReqModule] 查询条件对象
 */
@Slf4j
@Data
public class PSSysReqModuleSearchContext extends SearchContextBase {
	private String n_pssysreqmodulename_like;//[系统需求模块名称]

	private String n_usercat_eq;//[用户分类]

	private String n_ppssysreqmodulename_eq;//[父需求模块]

	private String n_ppssysreqmodulename_like;//[父需求模块]

	private String n_ppssysreqmoduleid_eq;//[父需求模块]

}


