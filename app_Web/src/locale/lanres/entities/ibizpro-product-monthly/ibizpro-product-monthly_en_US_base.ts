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
		};
		return data;
}

export default getLocaleResourceBase;