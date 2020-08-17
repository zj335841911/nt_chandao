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
      		title: "用例库模块树导航视图（模块维护）",
		},
		casetreeexpview: {
			caption: "用例",
      		title: "用例库模块树导航视图（用例）",
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
		tbitem3: {
			caption: "保存",
			tip: "保存",
		},
		tbitem4: {
			caption: "保存并新建",
			tip: "保存并新建",
		},
		tbitem5: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem7: {
			caption: "删除",
			tip: "删除",
		},
		tbitem8: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "新建",
			tip: "新建",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "拷贝",
			tip: "拷贝",
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
			caption: "帮助",
			tip: "帮助",
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
	treelibexp_treeview: {
		nodes: {
			all: "所有模板",
			root: "默认根节点",
		},
		uiactions: {
		},
	},
};