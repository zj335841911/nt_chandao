export default {
  fields: {
    isleaf: "叶子模块",
    name: "名称",
    ibizshort: "简称",
    grade: "grade",
    collector: "collector",
    branch: "branch",
    id: "id",
    order: "排序值",
    deleted: "逻辑删除标志",
    path: "path",
    owner: "owner",
    type: "类型",
    root: "编号",
    parent: "id",
    doclibname: "所属文档库",
    modulename: "上级模块",
    docqtype: "查询类型",
    isfavourites: "是否已收藏",
  },
	views: {
		mpickupview: {
			caption: "文档库分类",
      		title: "文档库分类数据多项选择视图",
		},
		editviewmain: {
			caption: "文档库分类",
      		title: "文档库分类编辑视图",
		},
		pickupview: {
			caption: "文档库分类",
      		title: "文档库分类数据选择视图",
		},
		editview: {
			caption: "文档库分类",
      		title: "文档库分类编辑视图",
		},
		gridview: {
			caption: "文档库分类",
      		title: "文档库分类表格视图",
		},
		pickupgridview: {
			caption: "文档库分类",
      		title: "文档库分类选择表格视图",
		},
		editview2: {
			caption: "文档库分类",
      		title: "文档库分类编辑视图",
		},
		redirectview: {
			caption: "文档库分类",
      		title: "文档库分类数据重定向视图",
		},
		usr2gridview: {
			caption: "文档库分类",
      		title: "文档库分类表格视图",
		},
		treeexpview: {
			caption: "文档库分类",
      		title: "文档库分类树导航视图",
		},
	},
	mainedit_form: {
		details: {
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "id", 
			name: "名称", 
			doclibname: "所属文档库", 
			docqtype: "查询类型", 
			isfavourites: "是否已收藏", 
			root: "编号", 
		},
		uiactions: {
		},
	},
	main_form: {
		details: {
			group1: "文档库分类基本信息", 
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
		nodata: "",
		columns: {
			name: "名称",
			short: "简称",
			order: "排序值",
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
	editviewmaintoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
	usr2gridviewtoolbar_toolbar: {
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
		tbitem7: {
			caption: "删除",
			tip: "删除",
		},
	},
	gridviewtoolbar_toolbar: {
		tbitem3: {
			caption: "新建",
			tip: "新建",
		},
		tbitem4: {
			caption: "编辑",
			tip: "编辑",
		},
		tbitem6: {
			caption: "拷贝",
			tip: "拷贝",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem8: {
			caption: "删除",
			tip: "删除",
		},
		tbitem9: {
			caption: "-",
			tip: "",
		},
		tbitem13: {
			caption: "导出",
			tip: "导出",
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
			caption: "导出数据模型",
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
			caption: "过滤",
			tip: "过滤",
		},
		tbitem18: {
			caption: "帮助",
			tip: "帮助",
		},
	},
	editview2toolbar_toolbar: {
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
		tbitem7: {
			caption: "删除",
			tip: "删除",
		},
	},
	treedoclib_treeview: {
		nodes: {
			allmodule: "所有分类",
			root: "默认根节点",
		},
		uiactions: {
			refreshall: "刷新",
		},
	},
};