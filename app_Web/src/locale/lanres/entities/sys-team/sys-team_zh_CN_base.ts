import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("组", null),
		fields: {
			teamid: commonLogic.appcommonhandle("组标识",null),
			teamname: commonLogic.appcommonhandle("组名称",null),
			memo: commonLogic.appcommonhandle("备注",null),
			domains: commonLogic.appcommonhandle("区属",null),
		},
			views: {
				editview: {
					caption: commonLogic.appcommonhandle("组",null),
					title: commonLogic.appcommonhandle("组编辑视图",null),
				},
				usr2gridview: {
					caption: commonLogic.appcommonhandle("组",null),
					title: commonLogic.appcommonhandle("组表格视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("组基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					group2: commonLogic.appcommonhandle("操作信息",null), 
					formpage2: commonLogic.appcommonhandle("其它",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("组标识",null), 
					srfmajortext: commonLogic.appcommonhandle("组名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					teamid: commonLogic.appcommonhandle("组标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
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
		};
		return data;
}
export default getLocaleResourceBase;