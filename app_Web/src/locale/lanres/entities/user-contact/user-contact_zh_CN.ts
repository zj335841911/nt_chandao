export default {
  fields: {
    userlist: "userList",
    listname: "标题",
    id: "id",
    account: "account",
  },
	views: {
		editview: {
			caption: "用户联系方式",
      		title: "usercontact编辑视图",
		},
		treeexpview: {
			caption: "用户联系方式",
      		title: "用户联系方式树导航视图",
		},
		gridview: {
			caption: "用户联系方式",
      		title: "usercontact表格视图",
		},
	},
	main_form: {
		details: {
			group1: "usercontact基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			listname: "列表名称", 
			userlist: "选择用户", 
			id: "id", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			id: "编号",
			listname: "标题",
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
		deuiaction1: {
			caption: "新建",
			tip: "新建",
		},
		deuiaction4: {
			caption: "删除",
			tip: "删除",
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
		deuiaction5: {
			caption: "导出",
			tip: "导出",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存",
			tip: "保存",
		},
		deuiaction2: {
			caption: "删除",
			tip: "删除",
		},
	},
	concatlist_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
		},
	},
};