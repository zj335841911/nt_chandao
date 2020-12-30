import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
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
			views: {
				editview: {
					caption: commonLogic.appcommonhandle("项目日报",null),
					title: commonLogic.appcommonhandle("项目日报编辑视图",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("项目日报",null),
					title: commonLogic.appcommonhandle("项目日报表格视图",null),
				},
			},
			main_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("设计",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("开发",null), 
					druipart3: commonLogic.appcommonhandle("",null), 
					grouppanel3: commonLogic.appcommonhandle("测试",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目日报标识",null), 
					srfmajortext: commonLogic.appcommonhandle("项目日报名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					projectname: commonLogic.appcommonhandle("项目名称",null), 
					pm: commonLogic.appcommonhandle("项目负责人",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					totalestimates: commonLogic.appcommonhandle("总工时",null), 
					project: commonLogic.appcommonhandle("项目编号",null), 
					tasks: commonLogic.appcommonhandle("任务",null), 
					ibizpro_projectdailyid: commonLogic.appcommonhandle("项目日报标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					projectname: commonLogic.appcommonhandle("项目名称",null),
					pm: commonLogic.appcommonhandle("项目负责人",null),
					date: commonLogic.appcommonhandle("日期",null),
					totalestimates: commonLogic.appcommonhandle("总工时",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			default_searchform: {
				details: {
					formpage1: commonLogic.appcommonhandle("常规条件",null), 
				},
				uiactions: {
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;