import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			totalestimates: commonLogic.appcommonhandle("总工时",null),
			tasks: commonLogic.appcommonhandle("任务",null),
			po: commonLogic.appcommonhandle("产品负责人",null),
			date: commonLogic.appcommonhandle("日期",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			ibizproproductweeklyname: commonLogic.appcommonhandle("产品周报名称",null),
			ibizpro_productweeklyid: commonLogic.appcommonhandle("产品周报标识",null),
			product: commonLogic.appcommonhandle("编号",null),
			productname: commonLogic.appcommonhandle("产品名称",null),
		},
			views: {
				editview: {
					caption: commonLogic.appcommonhandle("产品周报",null),
					title: commonLogic.appcommonhandle("产品周报编辑视图",null),
				},
				usr2gridview: {
					caption: commonLogic.appcommonhandle("产品周报",null),
					title: commonLogic.appcommonhandle("产品周报表格视图",null),
				},
			},
			main_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("设计",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel3: commonLogic.appcommonhandle("开发",null), 
					druipart3: commonLogic.appcommonhandle("",null), 
					grouppanel4: commonLogic.appcommonhandle("测试",null), 
					druipart4: commonLogic.appcommonhandle("",null), 
					grouppanel5: commonLogic.appcommonhandle("研究",null), 
					druipart5: commonLogic.appcommonhandle("",null), 
					grouppanel8: commonLogic.appcommonhandle("讨论",null), 
					druipart6: commonLogic.appcommonhandle("",null), 
					grouppanel9: commonLogic.appcommonhandle("界面",null), 
					druipart7: commonLogic.appcommonhandle("",null), 
					grouppanel7: commonLogic.appcommonhandle("事务",null), 
					druipart8: commonLogic.appcommonhandle("",null), 
					grouppanel10: commonLogic.appcommonhandle("服务",null), 
					druipart9: commonLogic.appcommonhandle("",null), 
					grouppanel6: commonLogic.appcommonhandle("其他",null), 
					druipart10: commonLogic.appcommonhandle("",null), 
					grouppanel11: commonLogic.appcommonhandle("产品成员周报",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("产品周报标识",null), 
					srfmajortext: commonLogic.appcommonhandle("产品周报名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					productname: commonLogic.appcommonhandle("产品名称",null), 
					po: commonLogic.appcommonhandle("产品负责人",null), 
					totalestimates: commonLogic.appcommonhandle("总工时",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					product: commonLogic.appcommonhandle("编号",null), 
					tasks: commonLogic.appcommonhandle("任务",null), 
					ibizpro_productweeklyid: commonLogic.appcommonhandle("产品周报标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					ibizpro_productdailyname: commonLogic.appcommonhandle("产品周报名称",null),
					productname: commonLogic.appcommonhandle("产品名称",null),
					po: commonLogic.appcommonhandle("产品负责人",null),
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
					caption: commonLogic.appcommonhandle("Save",null),
					tip: commonLogic.appcommonhandle("Save",null),
				},
				tbitem4: {
					caption: commonLogic.appcommonhandle("Save And New",null),
					tip: commonLogic.appcommonhandle("Save And New",null),
				},
				tbitem5: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
				tbitem7: {
					caption: commonLogic.appcommonhandle("Remove And Close",null),
					tip: commonLogic.appcommonhandle("Remove And Close Window",null),
				},
			},
			usr2gridviewtoolbar_toolbar: {
			},
		};
		return data;
}

export default getLocaleResourceBase;