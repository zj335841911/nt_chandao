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
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save",
			tip: "Save",
		},
		deuiaction2: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
		},
		deuiaction4: {
			caption: "New",
			tip: "New",
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