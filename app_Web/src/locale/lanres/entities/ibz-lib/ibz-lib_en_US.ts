
export default {
  fields: {
    desc: "描述",
    lastediteddate: "最后编辑时间",
    addeddate: "创建时间",
    id: "编号",
    deleted: "已删除",
    name: "名称",
    type: "类型",
    addedby: "由谁创建",
    lasteditedby: "最后编辑人",
  },
	views: {
		editview9: {
			caption: "用例库",
      		title: "用例库编辑视图",
		},
		openlibview: {
			caption: "用例库",
      		title: "用例库数据看板视图",
		},
		editview: {
			caption: "用例库",
      		title: "用例库编辑视图",
		},
		gridview: {
			caption: "用例库",
      		title: "用例库",
		},
		tabexpview: {
			caption: "用例库",
      		title: "用例库",
		},
	},
	desc_form: {
		details: {
			druipart1: "", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "", 
			name: "", 
			desc: "描述", 
		},
		uiactions: {
		},
	},
	main_form: {
		details: {
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "名称", 
			type: "类型", 
			desc: "描述", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "编号",
			name: "名称",
			uagridcolumn1: "操作",
		},
		uiactions: {
        ibzlib_editlib: "编辑",
        ibzlib_delete: "删除",
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
		},
		uiactions: {
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction3_create: {
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
		seperator2: {
			caption: "",
			tip: "",
		},
		deuiaction1: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
};