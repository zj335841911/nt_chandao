import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("测试用例统计", null),
		fields: {
			id: commonLogic.appcommonhandle("用例编号",null),
			title: commonLogic.appcommonhandle("用例标题",null),
			module: commonLogic.appcommonhandle("模块",null),
			modulename: commonLogic.appcommonhandle("模块名称",null),
			totalcase: commonLogic.appcommonhandle("总用例数",null),
			passcase: commonLogic.appcommonhandle("通过用例数",null),
			failcase: commonLogic.appcommonhandle("失败用例数",null),
			blockedcase: commonLogic.appcommonhandle("阻塞用例数",null),
			totalruncase: commonLogic.appcommonhandle("总执行数",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;