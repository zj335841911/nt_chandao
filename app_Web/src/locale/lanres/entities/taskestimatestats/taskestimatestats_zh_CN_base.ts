import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("任务工时统计", null),
		fields: {
			account: commonLogic.appcommonhandle("用户",null),
			date: commonLogic.appcommonhandle("日期",null),
			taskcnt: commonLogic.appcommonhandle("任务数",null),
			consumed: commonLogic.appcommonhandle("消耗的工时",null),
			id: commonLogic.appcommonhandle("编号",null),
			name: commonLogic.appcommonhandle("项目名称",null),
			inputcost: commonLogic.appcommonhandle("投入成本",null),
			evaluationtime: commonLogic.appcommonhandle("评估工时",null),
			evaluationcost: commonLogic.appcommonhandle("评估成本",null),
			evaluationstatus: commonLogic.appcommonhandle("评估状态",null),
			year: commonLogic.appcommonhandle("年",null),
			yearname: commonLogic.appcommonhandle("年（显示）",null),
			month: commonLogic.appcommonhandle("月",null),
			monthname: commonLogic.appcommonhandle("月（显示）",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;