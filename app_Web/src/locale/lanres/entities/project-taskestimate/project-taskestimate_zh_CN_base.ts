import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("项目工时统计", null),
		fields: {
			projectname: commonLogic.appcommonhandle("项目名称",null),
			evaluationtime: commonLogic.appcommonhandle("评估工时",null),
			month: commonLogic.appcommonhandle("月",null),
			date: commonLogic.appcommonhandle("日期",null),
			evaluationcost: commonLogic.appcommonhandle("评估成本",null),
			inputcost: commonLogic.appcommonhandle("投入成本",null),
			consumed: commonLogic.appcommonhandle("工时",null),
			id: commonLogic.appcommonhandle("主键",null),
			project: commonLogic.appcommonhandle("项目标识",null),
			year: commonLogic.appcommonhandle("年",null),
			account: commonLogic.appcommonhandle("用户",null),
			otherconsumed: commonLogic.appcommonhandle("其他项目工时",null),
			otherevaluationtime: commonLogic.appcommonhandle("其他项目评估工时",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;