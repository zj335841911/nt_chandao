import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
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
		};
		return data;
}

export default getLocaleResourceBase;