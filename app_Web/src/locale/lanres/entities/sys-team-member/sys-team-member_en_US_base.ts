import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
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
			views: {
				editview: {
					caption: commonLogic.appcommonhandle("组成员",null),
					title: commonLogic.appcommonhandle("组成员编辑视图",null),
				},
				usr2gridview: {
					caption: commonLogic.appcommonhandle("组成员",null),
					title: commonLogic.appcommonhandle("组成员表格视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("组成员基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					group2: commonLogic.appcommonhandle("操作信息",null), 
					formpage2: commonLogic.appcommonhandle("其它",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("组成员标识",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					teammemberid: commonLogic.appcommonhandle("组成员标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					teamid: commonLogic.appcommonhandle("组标识",null),
					teamname: commonLogic.appcommonhandle("组名称",null),
					personname: commonLogic.appcommonhandle("姓名",null),
					username: commonLogic.appcommonhandle("账号",null),
					postname: commonLogic.appcommonhandle("岗位",null),
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
			editviewtoolbar_toolbar: {
				tbitem3: {
					caption: commonLogic.appcommonhandle("Save",null),
					tip: commonLogic.appcommonhandle("Save",null),
				},
				tbitem4: {
					caption: commonLogic.appcommonhandle("Save And New",null),
					tip: commonLogic.appcommonhandle("Save And New",null),
				},
				tbitem5: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
				tbitem7: {
					caption: commonLogic.appcommonhandle("Remove And Close",null),
					tip: commonLogic.appcommonhandle("Remove And Close Window",null),
				},
			},
			usr2gridviewtoolbar_toolbar: {
			},
		};
		return data;
}

export default getLocaleResourceBase;