export default {
  fields: {
    id: "id",
    name: "名称",
    root: "编号",
    ibizid: "IBIZ标识",
  },
	views: {
		editview: {
			caption: "需求模块",
      		title: "需求模块编辑视图",
		},
		gridview: {
			caption: "需求模块",
      		title: "需求模块表格视图",
		},
	},
	main_form: {
		details: {
			group1: "需求模块基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "id", 
			root: "编号", 
			ibiz_id: "IBIZ标识", 
			name: "名称", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "id",
			name: "名称",
			ibiz_id: "IBIZ标识",
			root: "编号",
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
		deuiaction3_syncfromibiz: {
			caption: "同步",
			tip: "同步",
		},
		seperator2: {
			caption: "",
			tip: "",
		},
		deuiaction1: {
			caption: "新建",
			tip: "新建",
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
		deuiaction4: {
			caption: "导出",
			tip: "导出",
		},
	},
	editviewtoolbar_toolbar: {
	},
};