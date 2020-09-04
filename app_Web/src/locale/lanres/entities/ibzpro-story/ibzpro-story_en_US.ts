
export default {
  fields: {
    id: "编号",
    title: "需求名称",
    module: "id",
    product: "编号",
    ibizid: "IBIZ标识",
    source: "需求来源",
    sourcenote: "来源备注",
    sourceid: "来源对象标识",
    sourcename: "来源对象名称",
  },
	views: {
		gridview: {
			caption: "需求",
      		title: "需求表格视图",
		},
		editview: {
			caption: "需求",
      		title: "需求编辑视图",
		},
	},
	main_form: {
		details: {
			group1: "需求基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "需求名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "编号", 
			title: "需求名称", 
			ibiz_id: "IBIZ标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "编号",
			title: "需求名称",
			ibiz_id: "IBIZ标识",
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