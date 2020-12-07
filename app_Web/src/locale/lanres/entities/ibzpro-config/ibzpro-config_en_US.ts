export default {
  fields: {
    ibzproconfigname: "系统配置表名称",
    ibzproconfigid: "系统配置表标识",
    updateman: "更新人",
    updatedate: "更新时间",
    createdate: "建立时间",
    createman: "建立人",
    scope: "范围",
    vaild: "是否启用",
    memo: "描述",
    type: "类型",
    managementstatus: "管理现状",
  },
	views: {
		gridview: {
			caption: "系统配置表",
      		title: "系统配置表表格视图",
		},
		editview: {
			caption: "系统配置表",
      		title: "系统配置表编辑视图",
		},
	},
	main_form: {
		details: {
			group1: "系统配置表基本信息", 
			formpage1: "基本信息", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "系统配置表标识", 
			srfmajortext: "系统配置表名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			ibzpro_configname: "名称", 
			type: "类型", 
			scope: "范围", 
			managementstatus: "管理现状", 
			vaild: "是否启用", 
			memo: "描述", 
			ibzpro_configid: "系统配置表标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			ibzpro_configname: "名称",
			scope: "范围",
			type: "类型",
			vaild: "是否启用",
			managementstatus: "管理现状",
			memo: "描述",
		},
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
		},
		uiactions: {
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "New",
			tip: "New",
		},
		deuiaction4: {
			caption: "Remove",
			tip: "Remove {0}",
		},
		seperator1: {
			caption: "",
			tip: "",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
		seperator3: {
			caption: "",
			tip: "",
		},
		deuiaction5: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
};