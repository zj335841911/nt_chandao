import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("产品团队", null),
		fields: {
			join: commonLogic.appcommonhandle("加盟日",null),
			hours: commonLogic.appcommonhandle("可用工时/天",null),
			id: commonLogic.appcommonhandle("编号",null),
			role: commonLogic.appcommonhandle("角色",null),
			type: commonLogic.appcommonhandle("团队类型",null),
			limited: commonLogic.appcommonhandle("受限用户",null),
			root: commonLogic.appcommonhandle("编号",null),
			account: commonLogic.appcommonhandle("用户",null),
			days: commonLogic.appcommonhandle("可用工日",null),
			order: commonLogic.appcommonhandle("排序",null),
			consumed: commonLogic.appcommonhandle("总计消耗",null),
			left: commonLogic.appcommonhandle("预计剩余",null),
			estimate: commonLogic.appcommonhandle("最初预计",null),
			total: commonLogic.appcommonhandle("总计可用",null),
			taskcnt: commonLogic.appcommonhandle("任务数",null),
		},
			views: {
				productteamlistview: {
					caption: commonLogic.appcommonhandle("产品团队",null),
					title: commonLogic.appcommonhandle("产品团队列表视图",null),
				},
			},
			productteam_list: {
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			productteamlistviewtoolbar_toolbar: {
			},
		};
		return data;
}
export default getLocaleResourceBase;