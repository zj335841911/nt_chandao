export default {
  fields: {
    title: "title",
    id: "id",
    content: "content",
    type: "type",
    account: "account",
    ibizpublic: "public",
  },
	views: {
		gridview: {
			caption: "用户模板",
      		title: "usertpl表格视图",
		},
		editview: {
			caption: "用户模板",
      		title: "usertpl编辑视图",
		},
	},
	main_form: {
		details: {
			group1: "usertpl基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "title", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			title: "模板标题", 
			type: "类型", 
			account: "所属用户", 
			content: "模板", 
			public: "公开", 
			id: "id", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			id: "编号",
			title: "模板标题",
			type: "类型",
			public: "权限",
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
			caption: "新建",
			tip: "新建",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
};