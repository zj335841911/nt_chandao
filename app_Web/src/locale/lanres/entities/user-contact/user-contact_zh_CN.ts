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