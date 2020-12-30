import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("项目周报", null),
		fields: {
			projectweeklyname: commonLogic.appcommonhandle("项目周报名称",null),
			projectweeklyid: commonLogic.appcommonhandle("项目周报标识",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			pm: commonLogic.appcommonhandle("项目负责人",null),
			totalestimates: commonLogic.appcommonhandle("总工时",null),
			tasks: commonLogic.appcommonhandle("任务",null),
			date: commonLogic.appcommonhandle("日期",null),
			project: commonLogic.appcommonhandle("项目编号",null),
			projectname: commonLogic.appcommonhandle("项目名称",null),
			week: commonLogic.appcommonhandle("周",null),
			year: commonLogic.appcommonhandle("年",null),
			month: commonLogic.appcommonhandle("月",null),
		},
			views: {
				gridview: {
					caption: commonLogic.appcommonhandle("项目周报",null),
					title: commonLogic.appcommonhandle("项目周报表格视图",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("项目周报",null),
					title: commonLogic.appcommonhandle("项目周报编辑视图",null),
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
					druipart4: commonLogic.appcommonhandle("",null), 
					grouppanel4: commonLogic.appcommonhandle("研究",null), 
					druipart5: commonLogic.appcommonhandle("",null), 
					grouppanel9: commonLogic.appcommonhandle("讨论",null), 
					druipart6: commonLogic.appcommonhandle("",null), 
					grouppanel5: commonLogic.appcommonhandle("界面",null), 
					druipart7: commonLogic.appcommonhandle("",null), 
					grouppanel6: commonLogic.appcommonhandle("事务",null), 
					druipart8: commonLogic.appcommonhandle("",null), 
					grouppanel7: commonLogic.appcommonhandle("服务",null), 
					druipart9: commonLogic.appcommonhandle("",null), 
					grouppanel8: commonLogic.appcommonhandle("其他",null), 
					druipart10: commonLogic.appcommonhandle("",null), 
					grouppanel10: commonLogic.appcommonhandle("项目成员周报",null), 
					group1: commonLogic.appcommonhandle("项目周报基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目周报标识",null), 
					srfmajortext: commonLogic.appcommonhandle("项目周报名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					project: commonLogic.appcommonhandle("项目编号",null), 
					projectname: commonLogic.appcommonhandle("项目名称",null), 
					pm: commonLogic.appcommonhandle("项目负责人",null), 
					week: commonLogic.appcommonhandle("周",null), 
					totalestimates1: commonLogic.appcommonhandle("总工时",null), 
					tasks: commonLogic.appcommonhandle("任务",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					ibzpro_projectweeklyid: commonLogic.appcommonhandle("项目周报标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					ibzpro_projectweeklyname: commonLogic.appcommonhandle("项目周报名称",null),
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
			editviewtoolbar_toolbar: {
				tbitem3: {
					caption: commonLogic.appcommonhandle("保存",null),
					tip: commonLogic.appcommonhandle("保存",null),
				},
				tbitem4: {
					caption: commonLogic.appcommonhandle("保存并新建",null),
					tip: commonLogic.appcommonhandle("保存并新建",null),
				},
				tbitem5: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
				tbitem7: {
					caption: commonLogic.appcommonhandle("删除",null),
					tip: commonLogic.appcommonhandle("删除",null),
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;