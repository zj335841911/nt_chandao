import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			ibizproprojectmonthlyid: commonLogic.appcommonhandle("项目月报标识",null),
			ibizproprojectmonthlyname: commonLogic.appcommonhandle("项目月报名称",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			project: commonLogic.appcommonhandle("项目编号",null),
			projectname: commonLogic.appcommonhandle("项目名称",null),
			pm: commonLogic.appcommonhandle("项目负责人",null),
			totalestimates: commonLogic.appcommonhandle("总工时",null),
			tasks: commonLogic.appcommonhandle("任务",null),
			date: commonLogic.appcommonhandle("日期",null),
			yearmonth: commonLogic.appcommonhandle("年月",null),
		},
		};
		return data;
}

export default getLocaleResourceBase;