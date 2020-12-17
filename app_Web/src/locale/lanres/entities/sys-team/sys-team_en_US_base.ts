import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			teamid: commonLogic.appcommonhandle("组标识",null),
			teamname: commonLogic.appcommonhandle("组名称",null),
			memo: commonLogic.appcommonhandle("备注",null),
			domains: commonLogic.appcommonhandle("区属",null),
		},
		};
		return data;
}

export default getLocaleResourceBase;