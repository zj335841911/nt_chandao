import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("组成员", null),
		fields: {
			teammemberid: commonLogic.appcommonhandle("组成员标识",null),
			teamname: commonLogic.appcommonhandle("组名称",null),
			postname: commonLogic.appcommonhandle("岗位",null),
			domains: commonLogic.appcommonhandle("区属",null),
			userid: commonLogic.appcommonhandle("用户标识",null),
			teamid: commonLogic.appcommonhandle("组标识",null),
			postid: commonLogic.appcommonhandle("岗位标识",null),
			personname: commonLogic.appcommonhandle("姓名",null),
			username: commonLogic.appcommonhandle("账号",null),
			usericon: commonLogic.appcommonhandle("头像",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;