import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("项目日报", null),
		fields: {
			ibizproprojectdailyid: commonLogic.appcommonhandle("项目日报标识",null),
			ibizproprojectdailyname: commonLogic.appcommonhandle("项目日报名称",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			project: commonLogic.appcommonhandle("项目编号",null),
			projectname: commonLogic.appcommonhandle("项目名称",null),
			date: commonLogic.appcommonhandle("日期",null),
			tasks: commonLogic.appcommonhandle("任务",null),
			totalestimates: commonLogic.appcommonhandle("总工时",null),
			pm: commonLogic.appcommonhandle("项目负责人",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;