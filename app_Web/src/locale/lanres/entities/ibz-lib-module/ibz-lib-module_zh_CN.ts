export default {
  fields: {
    branch: "branch",
    ibizshort: "简称",
    grade: "grade",
    order: "排序值",
    type: "类型（story）",
    collector: "collector",
    id: "id",
    isleaf: "叶子模块",
    owner: "owner",
    name: "名称",
    deleted: "逻辑删除标志",
    path: "path",
    parent: "id",
    parentname: "上级模块",
    root: "编号",
  },
	views: {
		treeexpview: {
			caption: "模块维护",
      		title: "模块维护",
		},
		casetreeexpview: {
			caption: "用例",
      		title: "用例",
		},
		editview: {
			caption: "用例库模块",
      		title: "用例库模块编辑视图",
		},
		gridview: {
			caption: "用例库模块",
      		title: "用例库模块表格视图",
		},
	},
	main_form: {
		details: {
			group1: "用例库模块基本信息", 
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
	main_grid: {
		columns: {
			name: "名称",
			short: "简称",
			uagridcolumn1: "操作",
		},
		uiactions: {
			remove: "删除",
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
	treelibexp_treeview: {
		nodes: {
			all: "所有模板",
			root: "默认根节点",
		},
		uiactions: {
		},
	},
	treelibmodule_treeview: {
		nodes: {
			root: "默认根节点",
			all: "所有模板",
		},
		uiactions: {
		},
	},
};