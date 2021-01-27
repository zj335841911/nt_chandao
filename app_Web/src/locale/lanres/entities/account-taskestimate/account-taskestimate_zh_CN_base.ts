import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("用户工时统计", null),
		fields: {
			id: commonLogic.appcommonhandle("主键",null),
			project: commonLogic.appcommonhandle("项目标识",null),
			projectname: commonLogic.appcommonhandle("项目名称",null),
			year: commonLogic.appcommonhandle("年",null),
			month: commonLogic.appcommonhandle("月",null),
			account: commonLogic.appcommonhandle("用户",null),
			date: commonLogic.appcommonhandle("日期",null),
			consumed: commonLogic.appcommonhandle("工时",null),
			evaluationcost: commonLogic.appcommonhandle("评估成本",null),
			inputcost: commonLogic.appcommonhandle("投入成本",null),
			evaluationtime: commonLogic.appcommonhandle("评估工时",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;