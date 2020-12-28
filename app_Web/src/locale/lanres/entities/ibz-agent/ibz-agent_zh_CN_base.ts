import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("代理", null),
		fields: {
			ibzagentid: commonLogic.appcommonhandle("代理标识",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			ibzagentname: commonLogic.appcommonhandle("代理名称",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			agentuser: commonLogic.appcommonhandle("代理用户",null),
			agentbegin: commonLogic.appcommonhandle("代理开始日期",null),
			agentend: commonLogic.appcommonhandle("代理结束日期",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;