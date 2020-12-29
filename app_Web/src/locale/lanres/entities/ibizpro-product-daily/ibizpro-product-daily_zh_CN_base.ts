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
			productname: commonLogic.appcommonhandle("产品名称",null),
			date: commonLogic.appcommonhandle("日期",null),
			tasks: commonLogic.appcommonhandle("任务",null),
			totalestimates: commonLogic.appcommonhandle("总工时",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;