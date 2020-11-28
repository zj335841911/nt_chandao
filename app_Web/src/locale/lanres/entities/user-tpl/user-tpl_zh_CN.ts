export default {
  fields: {
    title: "模板标题",
    id: "id",
    content: "content",
    type: "type",
    account: "account",
    ibizpublic: "公开",
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
			srfmajortext: "模板标题", 
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
			public: "公开",
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
	},
};