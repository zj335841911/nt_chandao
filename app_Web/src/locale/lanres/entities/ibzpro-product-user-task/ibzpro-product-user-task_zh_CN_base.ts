import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("产品汇报用户任务", null),
		fields: {
			id: commonLogic.appcommonhandle("编号",null),
			account: commonLogic.appcommonhandle("用户",null),
			date: commonLogic.appcommonhandle("日期",null),
			consumed: commonLogic.appcommonhandle("总计消耗",null),
			left: commonLogic.appcommonhandle("预计剩余",null),
			task: commonLogic.appcommonhandle("任务",null),
			taskname: commonLogic.appcommonhandle("任务名称",null),
			tasktype: commonLogic.appcommonhandle("任务类型",null),
			progressrate: commonLogic.appcommonhandle("进度",null),
			delaydays: commonLogic.appcommonhandle("延期天数",null),
			eststarted: commonLogic.appcommonhandle("预计开始",null),
			deadline: commonLogic.appcommonhandle("截止日期",null),
		},
			views: {
				productpartgridviewproductweekly: {
					caption: commonLogic.appcommonhandle("产品日报",null),
					title: commonLogic.appcommonhandle("产品汇报用户任务表格视图",null),
				},
				productmonthlypartgridview: {
					caption: commonLogic.appcommonhandle("产品日报",null),
					title: commonLogic.appcommonhandle("产品汇报用户任务表格视图",null),
				},
				productdailypartgridview: {
					caption: commonLogic.appcommonhandle("产品日报",null),
					title: commonLogic.appcommonhandle("产品汇报用户任务表格视图",null),
				},
			},
			productdailygird_grid: {
				columns: {
					account: commonLogic.appcommonhandle("用户",null),
					taskname: commonLogic.appcommonhandle("任务名称",null),
					tasktype: commonLogic.appcommonhandle("任务类型",null),
					consumed: commonLogic.appcommonhandle("当天消耗",null),
					eststarted: commonLogic.appcommonhandle("预计开始",null),
					deadline: commonLogic.appcommonhandle("截止日期",null),
					date: commonLogic.appcommonhandle("日期",null),
					progressrate: commonLogic.appcommonhandle("进度",null),
					delaydays: commonLogic.appcommonhandle("延期天数",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			productweeklygird_grid: {
				columns: {
					account: commonLogic.appcommonhandle("用户",null),
					taskname: commonLogic.appcommonhandle("任务名称",null),
					tasktype: commonLogic.appcommonhandle("任务类型",null),
					consumed: commonLogic.appcommonhandle("本周消耗",null),
					eststarted: commonLogic.appcommonhandle("预计开始",null),
					deadline: commonLogic.appcommonhandle("截止日期",null),
					date: commonLogic.appcommonhandle("日期",null),
					progressrate: commonLogic.appcommonhandle("进度",null),
					delaydays: commonLogic.appcommonhandle("延期天数",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			productmonthlygird_grid: {
				columns: {
					account: commonLogic.appcommonhandle("用户",null),
					taskname: commonLogic.appcommonhandle("任务名称",null),
					tasktype: commonLogic.appcommonhandle("任务类型",null),
					consumed: commonLogic.appcommonhandle("当月消耗",null),
					eststarted: commonLogic.appcommonhandle("预计开始",null),
					deadline: commonLogic.appcommonhandle("截止日期",null),
					date: commonLogic.appcommonhandle("日期",null),
					progressrate: commonLogic.appcommonhandle("进度",null),
					delaydays: commonLogic.appcommonhandle("延期天数",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;