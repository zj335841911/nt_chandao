import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("人员", null),
		fields: {
			userid: commonLogic.appcommonhandle("用户标识",null),
			username: commonLogic.appcommonhandle("用户全局名",null),
			personname: commonLogic.appcommonhandle("姓名",null),
			usercode: commonLogic.appcommonhandle("用户工号",null),
			domains: commonLogic.appcommonhandle("区属",null),
			mdeptid: commonLogic.appcommonhandle("主部门",null),
			mdeptcode: commonLogic.appcommonhandle("主部门代码",null),
			mdeptname: commonLogic.appcommonhandle("主部门名称",null),
			bcode: commonLogic.appcommonhandle("业务编码",null),
			orgid: commonLogic.appcommonhandle("单位",null),
			orgcode: commonLogic.appcommonhandle("单位代码",null),
			orgname: commonLogic.appcommonhandle("单位名称",null),
			nickname: commonLogic.appcommonhandle("昵称别名",null),
			sex: commonLogic.appcommonhandle("性别",null),
			phone: commonLogic.appcommonhandle("联系方式",null),
			email: commonLogic.appcommonhandle("邮件",null),
			avatar: commonLogic.appcommonhandle("社交账号",null),
			addr: commonLogic.appcommonhandle("地址",null),
			usericon: commonLogic.appcommonhandle("照片",null),
			ipaddr: commonLogic.appcommonhandle("ip地址",null),
			lang: commonLogic.appcommonhandle("语言",null),
			memo: commonLogic.appcommonhandle("备注",null),
			reserver: commonLogic.appcommonhandle("保留",null),
			showorder: commonLogic.appcommonhandle("排序",null),
			enable: commonLogic.appcommonhandle("逻辑有效",null),
			createdate: commonLogic.appcommonhandle("创建时间",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
		},
			views: {
				treeexpview: {
					caption: commonLogic.appcommonhandle("人员",null),
					title: commonLogic.appcommonhandle("人员树导航视图",null),
				},
			},
			emptree_treeview: {
				nodata:commonLogic.appcommonhandle("",null),
				nodes: {
					project: commonLogic.appcommonhandle("项目团队",null),
					team: commonLogic.appcommonhandle("团队",null),
					orgemp: commonLogic.appcommonhandle("组织人员",null),
					post: commonLogic.appcommonhandle("岗位",null),
					concatlist: commonLogic.appcommonhandle("联系人",null),
					root: commonLogic.appcommonhandle("默认根节点",null),
				},
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;