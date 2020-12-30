import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("产品周报", null),
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
					group1: commonLogic.appcommonhandle("产品周报基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					group2: commonLogic.appcommonhandle("操作信息",null), 
					formpage2: commonLogic.appcommonhandle("其它",null), 
					srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("产品周报标识",null), 
					srfmajortext: commonLogic.appcommonhandle("产品周报名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
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
			usr2gridviewtoolbar_toolbar: {
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