import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("人员", null),
		fields: {
			userid: commonLogic.appcommonhandle("用户标识",null),
			username: commonLogic.appcommonhandle("用户全局名",null),
			personname: commonLogic.appcommonhandle("姓名",null),
			usercode: commonLogic.appcommonhandle("用户工号",null),
			loginname: commonLogic.appcommonhandle("登录名",null),
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
				usr3gridview: {
					caption: commonLogic.appcommonhandle("人员",null),
					title: commonLogic.appcommonhandle("人员表格视图",null),
				},
				usr2gridview: {
					caption: commonLogic.appcommonhandle("人员",null),
					title: commonLogic.appcommonhandle("人员表格视图人员实体表格视图(组织下所有人员)",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("人员",null),
					title: commonLogic.appcommonhandle("人员编辑视图",null),
				},
				treeexpview: {
					caption: commonLogic.appcommonhandle("人员",null),
					title: commonLogic.appcommonhandle("人员树导航视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("人员基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用户标识",null), 
					srfmajortext: commonLogic.appcommonhandle("姓名",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					userid: commonLogic.appcommonhandle("用户标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					userid: commonLogic.appcommonhandle("用户标识",null),
					sex: commonLogic.appcommonhandle("性别",null),
					mdeptname: commonLogic.appcommonhandle("主部门名称",null),
					personname: commonLogic.appcommonhandle("姓名",null),
					nickname: commonLogic.appcommonhandle("昵称别名",null),
					phone: commonLogic.appcommonhandle("联系方式",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			default_searchform: {
				details: {
					formpage1: commonLogic.appcommonhandle("常规条件",null), 
				},
				uiactions: {
				},
			},
			usr3gridviewtoolbar_toolbar: {
			},
			editviewtoolbar_toolbar: {
				tbitem3: {
					caption: commonLogic.appcommonhandle("保存",null),
					tip: commonLogic.appcommonhandle("保存",null),
				},
				tbitem4: {
					caption: commonLogic.appcommonhandle("保存并新建",null),
					tip: commonLogic.appcommonhandle("保存并新建",null),
				},
				tbitem5: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
				tbitem7: {
					caption: commonLogic.appcommonhandle("删除",null),
					tip: commonLogic.appcommonhandle("删除",null),
				},
			},
			usr2gridviewtoolbar_toolbar: {
			},
			emptreemenuzs_treeview: {
				nodata:commonLogic.appcommonhandle("",null),
				nodes: {
					root: commonLogic.appcommonhandle("默认根节点",null),
					orgemp: commonLogic.appcommonhandle("组织人员",null),
					concatlist: commonLogic.appcommonhandle("联系人",null),
					post: commonLogic.appcommonhandle("岗位",null),
					team: commonLogic.appcommonhandle("团队",null),
					project: commonLogic.appcommonhandle("项目团队",null),
				},
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;