import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("任务预计", null),
		fields: {
			account: commonLogic.appcommonhandle("用户",null),
			left: commonLogic.appcommonhandle("预计剩余",null),
			consumed: commonLogic.appcommonhandle("总计消耗",null),
			id: commonLogic.appcommonhandle("编号",null),
			date: commonLogic.appcommonhandle("日期",null),
			work: commonLogic.appcommonhandle("work",null),
			task: commonLogic.appcommonhandle("任务",null),
			dates: commonLogic.appcommonhandle("日期",null),
		},
			views: {
				gridview9: {
					caption: commonLogic.appcommonhandle("工时",null),
					title: commonLogic.appcommonhandle("任务预计表格视图",null),
				},
			},
			main_grid: {
				columns: {
					dates: commonLogic.appcommonhandle("日期",null),
					consumed: commonLogic.appcommonhandle("总计消耗",null),
					left: commonLogic.appcommonhandle("预计剩余",null),
					work: commonLogic.appcommonhandle("备注",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;