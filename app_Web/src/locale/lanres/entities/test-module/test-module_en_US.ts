
export default {
  fields: {
    path: "path",
    deleted: "逻辑删除标志",
    name: "名称",
    order: "排序值",
    branch: "branch",
    ibizshort: "简称",
    grade: "grade",
    type: "类型（story）",
    owner: "owner",
    id: "id",
    isleaf: "叶子模块",
    collector: "collector",
    parent: "id",
    parentname: "上级模块",
    root: "编号",
    rootname: "测试",
  },
	views: {
		editview: {
			caption: "测试模块",
      		title: "测试模块编辑视图",
		},
		gridview: {
			caption: "测试模块",
      		title: "测试模块表格视图",
		},
		gridviewbranch: {
			caption: "测试模块",
      		title: "产品模块表格视图",
		},
		treeexpview: {
			caption: "测试模块",
      		title: "测试模块树导航视图",
		},
		quickcfgview: {
			caption: "测试模块",
      		title: "需求模块",
		},
	},
	main_form: {
		details: {
			group1: "测试模块基本信息", 
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
		},
		uiactions: {
		},
	},
	mainbranch_grid: {
		columns: {
			name: "名称",
			branch: "平台",
			short: "简称",
			uagridcolumn1: "操作",
		},
		uiactions: {
        remove: "Remove",
		},
	},
	main_grid: {
		columns: {
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
	gridviewbranchtoolbar_toolbar: {
		deuiaction2: {
			caption: "新建行",
			tip: "新建行",
		},
		deuiaction3: {
			caption: "保存行",
			tip: "保存行",
		},
	},
	gridviewtoolbar_toolbar: {
		tbitem3: {
			caption: "New",
			tip: "New",
		},
		tbitem4: {
			caption: "Edit",
			tip: "Edit {0}",
		},
		tbitem6: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem8: {
			caption: "Remove",
			tip: "Remove {0}",
		},
		tbitem9: {
			caption: "-",
			tip: "",
		},
		tbitem13: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
		tbitem10: {
			caption: "-",
			tip: "",
		},
		tbitem16: {
			caption: "其它",
			tip: "其它",
		},
		tbitem21: {
			caption: "Export Data Model",
			tip: "导出数据模型",
		},
		tbitem23: {
			caption: "数据导入",
			tip: "数据导入",
		},
		tbitem17: {
			caption: "-",
			tip: "",
		},
		tbitem19: {
			caption: "Filter",
			tip: "Filter",
		},
		tbitem18: {
			caption: "Help",
			tip: "Help",
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "Save",
			tip: "Save",
		},
		tbitem4: {
			caption: "Save And New",
			tip: "Save And New",
		},
		tbitem5: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem7: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
		},
		tbitem8: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "New",
			tip: "New",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem16: {
			caption: "-",
			tip: "",
		},
		tbitem23: {
			caption: "第一个记录",
			tip: "第一个记录",
		},
		tbitem24: {
			caption: "上一个记录",
			tip: "上一个记录",
		},
		tbitem25: {
			caption: "下一个记录",
			tip: "下一个记录",
		},
		tbitem26: {
			caption: "最后一个记录",
			tip: "最后一个记录",
		},
		tbitem21: {
			caption: "-",
			tip: "",
		},
		tbitem22: {
			caption: "Help",
			tip: "Help",
		},
	},
	moduleexp_treeview: {
		nodes: {
			root: "默认根节点",
			all: "所以模块",
			branch: "平台",
		},
		uiactions: {
        refreshparent: "刷新",
        testmodule_openquickcfgview: "编辑",
        refreshall: "刷新",
		},
	},
};