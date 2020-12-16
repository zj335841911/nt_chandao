import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			orgid: commonLogic.appcommonhandle("The workflow start node was not found",null),
			orgcode: commonLogic.appcommonhandle("Updated By",null),
			orgname: commonLogic.appcommonhandle("名称",null),
			parentorgid: commonLogic.appcommonhandle("上级单位",null),
			shortname: commonLogic.appcommonhandle("Cancel",null),
			orglevel: commonLogic.appcommonhandle("单位级别",null),
			showorder: commonLogic.appcommonhandle("Audit",null),
			parentorgname: commonLogic.appcommonhandle("上级单位",null),
			domains: commonLogic.appcommonhandle("区属",null),
			enable: commonLogic.appcommonhandle("the workflow instance current processing step is invalid",null),
			createdate: commonLogic.appcommonhandle("Print",null),
			updatedate: commonLogic.appcommonhandle("Actor",null),
		},
		};
		return data;
}

export default getLocaleResourceBase;