export default {
  fields: {
    groups: "分组",
    editeddate: "更新时间",
    views: "views",
    version: "版本号",
    editedby: "由谁更新",
    id: "文档编号",
    title: "文档标题",
    deleted: "已删除",
    type: "文档类型",
    addeddate: "添加时间",
    acl: "权限",
    users: "用户",
    keywords: "关键字",
    collector: "收藏者",
    addedby: "由谁添加",
    lib: "所属文档库",
    project: "所属项目",
    product: "所属产品",
    module: "所属分类",
    projectname: "所属项目",
    productname: "所属产品",
    libname: "所属文档库",
    modulename: "模块分类",
    content: "文档正文",
    files: "附件",
    url: "文档链接",
    docqtype: "文档查询类型",
  },
	views: {
		basiceditview9: {
			caption: "基本信息",
      		title: "文档编辑视图（基本信息）",
		},
		mianbeditview9: {
			caption: "正文",
      		title: "文档编辑视图（正文）",
		},
		gridview10: {
			caption: "最近更新",
      		title: "文档表格视图",
		},
		dashboardview: {
			caption: "文档",
      		title: "文档数据看板视图",
		},
		gridview: {
			caption: "文档",
      		title: "doc表格视图",
		},
		mystargridview: {
			caption: "我的收藏",
      		title: "doc表格视图",
		},
		createeditview: {
			caption: "文档",
      		title: "创建文档",
		},
		recentmoregridview: {
			caption: "最近更新",
      		title: "doc表格视图",
		},
		docsumeditview9: {
			caption: "文档摘要",
      		title: "文档编辑视图（文档摘要）",
		},
		mymoregridview: {
			caption: "我的文档",
      		title: "doc表格视图",
		},
		editview: {
			caption: "文档",
      		title: "doc编辑视图",
		},
		gridview9: {
			caption: "最近更新",
      		title: "文档表格视图",
		},
		docmodulegridview: {
			caption: "文档",
      		title: "doc表格视图",
		},
		keditview9: {
			caption: "关键字",
      		title: "文档编辑视图（关键字）",
		},
		modulegridview: {
			caption: "文档",
      		title: "doc表格视图",
		},
	},
	createeditform_form: {
		details: {
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "文档编号", 
			srfmajortext: "文档标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			lib: "所属文档库", 
			libname: "所属文档库", 
			module: "所属分类", 
			modulename: "所属分类", 
			title: "文档标题", 
			keywords: "关键字", 
			type: "文档类型", 
			content: "文档正文", 
			url: "文档链接", 
			files: "附件", 
			acl: "权限", 
			id: "文档编号", 
		},
		uiactions: {
		},
	},
	mainbody_form: {
		details: {
			druipart1: "", 
			grouppanel1: "附件", 
			group1: "文档基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "文档编号", 
			srfmajortext: "文档标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "", 
			title: "", 
			version: "", 
			content: "", 
		},
		uiactions: {
		},
	},
	docsummary_form: {
		details: {
			grouppanel1: "文档摘要", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "文档编号", 
			srfmajortext: "文档标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "文档编号", 
		},
		uiactions: {
		},
	},
	keywords_form: {
		details: {
			grouppanel1: "关键字", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "文档编号", 
			srfmajortext: "文档标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			keywords: "", 
			id: "文档编号", 
		},
		uiactions: {
		},
	},
	main_form: {
		details: {
			group1: "doc基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "文档编号", 
			srfmajortext: "文档标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			projectname: "所属项目", 
			productname: "所属产品", 
			libname: "所属文档库", 
			modulename: "模块分类", 
			addeddate: "添加时间", 
			editedby: "由谁更新", 
			editeddate: "更新时间", 
			id: "文档编号", 
			product: "所属产品", 
			project: "所属项目", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			id: "文档编号",
			title: "文档标题",
			addedby: "由谁添加",
			addeddate: "添加时间",
			editedby: "由谁更新",
			editeddate: "更新时间",
			uagridcolumn1: "操作",
		},
		uiactions: {
        doc_look: "查看",
        doc_edit: "编辑",
        doc_delete: "删除",
		},
	},
	mydoc_grid: {
		nodata: "",
		columns: {
			title: "文档标题",
			addedby: "由谁添加",
			editeddate: "更新时间",
		},
		uiactions: {
		},
	},
	recentupdate_grid: {
		nodata: "",
		columns: {
			title: "文档标题",
			addedby: "由谁添加",
			editeddate: "更新时间",
		},
		uiactions: {
		},
	},
	morerecentupdate_grid: {
		nodata: "",
		columns: {
			id: "文档编号",
			title: "文档标题",
			addedby: "由谁添加",
			addeddate: "添加时间",
			editedby: "由谁更新",
			editeddate: "更新时间",
			uagridcolumn1: "操作",
		},
		uiactions: {
        doc_look: "查看",
        doc_edit: "编辑",
        doc_delete: "删除",
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
	docmodulegridviewtoolbar_toolbar: {
		deuiaction7: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction7: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	createeditviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	modulegridviewtoolbar_toolbar: {
		deuiaction7: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
};