import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			ibizproproductmonthlyid: commonLogic.appcommonhandle("产品月报标识",null),
			ibizproproductmonthlyname: commonLogic.appcommonhandle("产品月报名称",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			product: commonLogic.appcommonhandle("产品编号",null),
			productname: commonLogic.appcommonhandle("产品名称",null),
			po: commonLogic.appcommonhandle("产品负责人",null),
			totalestimates: commonLogic.appcommonhandle("总工时",null),
			tasks: commonLogic.appcommonhandle("任务",null),
			date: commonLogic.appcommonhandle("日期",null),
			yearmonth: commonLogic.appcommonhandle("年月",null),
		},
			views: {
				editview: {
					caption: commonLogic.appcommonhandle("产品月报",null),
					title: commonLogic.appcommonhandle("产品月报编辑视图",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("产品月报",null),
					title: commonLogic.appcommonhandle("产品月报表格视图",null),
				},
			},
			maininfo_form: {
				details: {
					group1: commonLogic.appcommonhandle("产品月报基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("产品月报标识",null), 
					srfmajortext: commonLogic.appcommonhandle("产品月报名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					productname: commonLogic.appcommonhandle("产品名称",null), 
					po: commonLogic.appcommonhandle("产品负责人",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					totalestimates: commonLogic.appcommonhandle("总工时",null), 
					tasks: commonLogic.appcommonhandle("任务",null), 
					product: commonLogic.appcommonhandle("产品编号",null), 
					year_month: commonLogic.appcommonhandle("年月",null), 
					ibizpro_productmonthlyid: commonLogic.appcommonhandle("产品月报标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					ibizpro_productmonthlyname: commonLogic.appcommonhandle("产品月报名称",null),
					productname: commonLogic.appcommonhandle("产品名称",null),
					year_month: commonLogic.appcommonhandle("年月",null),
					date: commonLogic.appcommonhandle("日期",null),
					po: commonLogic.appcommonhandle("产品负责人",null),
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