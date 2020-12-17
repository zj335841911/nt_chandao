import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("单位", null),
		fields: {
			orgid: commonLogic.appcommonhandle("单位标识",null),
			orgcode: commonLogic.appcommonhandle("单位代码",null),
			orgname: commonLogic.appcommonhandle("名称",null),
			parentorgid: commonLogic.appcommonhandle("上级单位",null),
			shortname: commonLogic.appcommonhandle("单位简称",null),
			orglevel: commonLogic.appcommonhandle("单位级别",null),
			showorder: commonLogic.appcommonhandle("访问审计",null),
			parentorgname: commonLogic.appcommonhandle("上级单位",null),
			domains: commonLogic.appcommonhandle("区属",null),
			enable: commonLogic.appcommonhandle("逻辑有效",null),
			createdate: commonLogic.appcommonhandle("创建时间",null),
			updatedate: commonLogic.appcommonhandle("最后修改时间",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;