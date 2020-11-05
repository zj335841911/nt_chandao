export default {
  fields: {
    userlist: "userList",
    listname: "listName",
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
			srfmajortext: "listName", 
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
		deuiaction4: {
			caption: "Remove",
			tip: "Remove {0}",
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
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save",
			tip: "Save",
		},
		deuiaction2: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
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