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
    isfavourites: "是否收藏",
  },
	views: {
		editview: {
			caption: "文档库分类",
      		title: "文档库分类编辑视图",
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
        remove: "Remove",
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
		tbitem7: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
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