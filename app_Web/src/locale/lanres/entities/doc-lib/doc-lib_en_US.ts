export default {
  fields: {
    type: "文档类型",
    collector: "收藏者",
    acl: "权限",
    deleted: "已删除",
    groups: "分组",
    id: "编号",
    users: "用户",
    main: "是否是主库",
    name: "文档库名称",
    order: "排序",
    project: "项目库",
    product: "产品库",
    doccnt: "文档数量",
    doclibtype: "文件库类型",
    projectname: "所属项目",
    productname: "所属产品",
  },
	views: {
		projecttreeexpview: {
			caption: "项目文档库",
      		title: "文档库树导航视图（项目文档库）",
		},
		producttreeexpview: {
			caption: "产品文档库",
      		title: "文档库树导航视图（产品文档库）",
		},
		customtreeexpview: {
			caption: "自定义文档库",
      		title: "文档库树导航视图（自定义文档库）",
		},
		editview: {
			caption: "文档库",
      		title: "创建文档库",
		},
		gridview: {
			caption: "文档库",
      		title: "doclib表格视图",
		},
		productgridview: {
			caption: "文档库",
      		title: "doclib表格视图",
		},
		libtabexpview: {
			caption: "文档库主页",
      		title: "文档库分页导航视图（文档）",
		},
	},
	main_form: {
		details: {
			group1: "doclib基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "文档库名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			type: "文档类型", 
			projectname: "所属项目", 
			productname: "所属产品", 
			name: "文档库名称", 
			acl: "访问控制", 
			collector: "收藏者", 
			project: "项目库", 
			product: "产品库", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			name: "文档库名称",
			doccnt: "文档数量",
			uagridcolumn1: "操作",
		},
		uiactions: {
        doclib_lookfile: "查看",
        doclib_lookdoc: "查看",
		},
	},
	productmain_grid: {
		nodata: "",
		columns: {
			name: "文档库名称",
			doccnt: "文档数量",
			uagridcolumn1: "操作",
		},
		uiactions: {
        doclib_productlookdoc: "查看",
        doclib_productlookfile: "查看",
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
	},
	productgridviewtoolbar_toolbar: {
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	libtabexpviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "创建文档库",
			tip: "创建文档库",
		},
	},
	projectdoclibtree_treeview: {
		nodes: {
			root: "默认根节点",
			files: "附件库",
		},
		uiactions: {
		},
	},
	productdoclibtree_treeview: {
		nodes: {
			files: "附件库",
			root: "默认根节点",
		},
		uiactions: {
		},
	},
	customdoclibtree_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
		},
	},
};