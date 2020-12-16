import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			indextype: commonLogic.appcommonhandle("类型",null),
			indexid: commonLogic.appcommonhandle("主键",null),
			indexname: commonLogic.appcommonhandle("名称",null),
			deleted: commonLogic.appcommonhandle("逻辑标识",null),
			orgid: commonLogic.appcommonhandle("组织标识",null),
			mdeptid: commonLogic.appcommonhandle("部门标识",null),
		},
		};
		return data;
}

export default getLocaleResourceBase;