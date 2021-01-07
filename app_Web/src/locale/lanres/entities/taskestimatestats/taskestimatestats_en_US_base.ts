import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			account: commonLogic.appcommonhandle("用户",null),
			date: commonLogic.appcommonhandle("日期",null),
			taskcnt: commonLogic.appcommonhandle("任务数",null),
			consumed: commonLogic.appcommonhandle("消耗的工时",null),
			id: commonLogic.appcommonhandle("编号",null),
			name: commonLogic.appcommonhandle("项目名称",null),
		},
		};
		return data;
}

export default getLocaleResourceBase;