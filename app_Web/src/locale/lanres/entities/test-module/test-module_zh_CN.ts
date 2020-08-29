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
		pickupgridview: {
			caption: "测试模块",
      		title: "测试模块选择表格视图",
		},
		gridview: {
			caption: "测试模块",
      		title: "测试模块表格视图",
		},
		gridviewbranch: {
			caption: "测试模块",
      		title: "产品模块表格视图",
		},
		gridviewmain: {
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
		pickupview: {
			caption: "测试模块",
      		title: "测试模块数据选择视图",
		},
	},
	main_form: {
		details: {
			group1: "测试模块基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			rootname: "所属产品", 
			branch: "", 
			path: "path", 
			root: "编号", 
			parentname: "上级模块", 
			name: "名称", 
			short: "简称", 
			order: "排序值", 
			id: "id", 
			parent: "id", 
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
			remove: "删除",
		},
	},
	mainrow_grid: {
		columns: {
			name: "名称",
			branch: "平台",
			short: "简称",
			uagridcolumn1: "操作",
		},
		uiactions: {
			remove: "删除",
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
	gridviewmaintoolbar_toolbar: {
		deuiaction2: {
			caption: "新建行",
			tip: "新建行",
		},
		deuiaction3: {
			caption: "保存行",
			tip: "保存行",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "新建行",
			tip: "新建行",
		},
		deuiaction3: {
			caption: "保存行",
			tip: "保存行",
		},
	},
	moduleexp_treeview: {
		nodes: {
			root: "默认根节点",
			all: "所有模块",
			branch: "平台",
		},
		uiactions: {
			refreshparent: "刷新",
			testmodule_openquickcfgview: "编辑",
			refreshall: "刷新",
		},
	},
};