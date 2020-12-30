import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("产品日报", null),
		fields: {
			ibizproproductdailyname: commonLogic.appcommonhandle("产品日报名称",null),
			ibizproproductdailyid: commonLogic.appcommonhandle("产品日报标识",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			po: commonLogic.appcommonhandle("产品负责人",null),
			product: commonLogic.appcommonhandle("产品",null),
			date: commonLogic.appcommonhandle("日期",null),
			tasks: commonLogic.appcommonhandle("任务",null),
			totalestimates: commonLogic.appcommonhandle("总工时",null),
			productname: commonLogic.appcommonhandle("产品名称",null),
		},
			views: {
				editview: {
					caption: commonLogic.appcommonhandle("产品日报",null),
					title: commonLogic.appcommonhandle("产品日报编辑视图",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("产品日报",null),
					title: commonLogic.appcommonhandle("产品日报表格视图",null),
				},
			},
			maininfo_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("产品日报基本信息",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("设计",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel3: commonLogic.appcommonhandle("开发",null), 
					druipart3: commonLogic.appcommonhandle("",null), 
					grouppanel4: commonLogic.appcommonhandle("测试",null), 
					druipart4: commonLogic.appcommonhandle("",null), 
					grouppanel5: commonLogic.appcommonhandle("研究",null), 
					druipart5: commonLogic.appcommonhandle("",null), 
					grouppanel6: commonLogic.appcommonhandle("讨论",null), 
					druipart6: commonLogic.appcommonhandle("",null), 
					grouppanel7: commonLogic.appcommonhandle("界面",null), 
					druipart7: commonLogic.appcommonhandle("",null), 
					grouppanel8: commonLogic.appcommonhandle("事务",null), 
					druipart8: commonLogic.appcommonhandle("",null), 
					grouppanel9: commonLogic.appcommonhandle("服务",null), 
					druipart9: commonLogic.appcommonhandle("",null), 
					grouppanel10: commonLogic.appcommonhandle("其他",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("产品日报标识",null), 
					srfmajortext: commonLogic.appcommonhandle("产品日报名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					po: commonLogic.appcommonhandle("产品负责人",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					totalestimates: commonLogic.appcommonhandle("总工时",null), 
					product: commonLogic.appcommonhandle("产品",null), 
					tasks: commonLogic.appcommonhandle("任务",null), 
					ibizpro_productdailyid: commonLogic.appcommonhandle("产品日报标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					ibizpro_productdailyname: commonLogic.appcommonhandle("产品日报名称",null),
					po: commonLogic.appcommonhandle("产品负责人",null),
					date: commonLogic.appcommonhandle("日期",null),
					totalestimates: commonLogic.appcommonhandle("总工时",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;