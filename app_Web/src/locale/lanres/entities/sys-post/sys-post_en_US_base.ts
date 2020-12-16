import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			postid: commonLogic.appcommonhandle("岗位标识",null),
			postcode: commonLogic.appcommonhandle("岗位编码",null),
			postname: commonLogic.appcommonhandle("岗位名称",null),
			domains: commonLogic.appcommonhandle("区属",null),
			memo: commonLogic.appcommonhandle("备注",null),
		},
		};
		return data;
}

export default getLocaleResourceBase;