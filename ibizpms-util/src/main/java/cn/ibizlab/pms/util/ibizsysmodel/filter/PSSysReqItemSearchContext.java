package cn.ibizlab.pms.util.ibizsysmodel.filter;

import cn.ibizlab.pms.util.filter.SearchContextBase;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * ServiceApi数据实体[PSSysReqItem] 查询条件对象
 */
@Slf4j
@Data
public class PSSysReqItemSearchContext extends SearchContextBase {
	private String n_pssysreqitemname_like;//[系统需求项名称]

	private String n_itemtype_eq;//[项类型]

	private String n_usercat_eq;//[用户分类]

	private String n_pssysreqmodulename_eq;//[需求模块]

	private String n_pssysreqmodulename_like;//[需求模块]

	private String n_pssysreqmoduleid_eq;//[需求模块]

	private String n_ppssysreqitemname_eq;//[父需求项]

	private String n_ppssysreqitemname_like;//[父需求项]

	private String n_ppssysreqitemid_eq;//[父需求项]

}


