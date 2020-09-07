
export default {
  fields: {
    id: "id",
    name: "名称",
    root: "编号",
    ibizid: "IBIZ标识",
    type: "类型",
    grade: "级别",
    path: "路径",
    ibizshort: "简称",
    parent: "id",
    productname: "产品",
    owner: "owner",
    collector: "collector",
    deleted: "已删除",
    ibiz_storytype: "需求模块类型",
  },
	views: {
		editview: {
			caption: "需求模块",
      		title: "需求模块编辑视图",
		},
		optionview: {
			caption: "同步",
      		title: "需求模块选项操作视图同步",
		},
		gridview: {
			caption: "需求模块",
      		title: "需求模块表格视图",
		},
	},
	sycfromibz_form: {
		details: {
			group1: "需求模块基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			ibiz_id: "IBIZ标识", 
			productname: "产品", 
			root: "编号", 
			type: "类型", 
			id: "id", 
		},
		uiactions: {
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
			type: "类型", 
			grade: "级别", 
			short: "简称", 
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
	},
};