export default {
  fields: {
    pathname: "路径",
    objectid: "对象ID",
    deleted: "已删除",
    extension: "文件类型",
    objecttype: "对象类型",
    addedby: "由谁添加",
    title: "标题",
    addeddate: "添加时间",
    downloads: "下载次数",
    size: "大小",
    id: "id",
    extra: "备注",
  },
	views: {
		gridview: {
			caption: "附件",
      		title: "file表格视图",
		},
		listview9: {
			caption: "附件",
      		title: "附件",
		},
		editview: {
			caption: "附件",
      		title: "file编辑视图",
		},
	},
	main_form: {
		details: {
			group1: "file基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			title: "标题", 
			id: "id", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			title: "标题",
			uagridcolumn1: "操作",
		},
		uiactions: {
        file_delete: "删除",
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
	gridviewtoolbar_toolbar: {
		tbitem13: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	list_list: {
		nodata: "",
		uiactions: {
		},
	},
};