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
    isfavourites: "是否收藏",
    orgid: "组织标识",
    mdeptid: "部门标识",
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
		productgridexpview: {
			caption: "产品文档库导航视图",
      		title: "文档库表格导航视图（产品文档库导航视图）",
		},
		gridview: {
			caption: "文档库",
      		title: "doclib表格视图",
		},
		undoneprojectgridview: {
			caption: "文档库",
      		title: "doclib表格视图",
		},
		producttreeview: {
			caption: "产品",
      		title: "文档库树视图（产品）",
		},
		productgridview: {
			caption: "文档库",
      		title: "doclib表格视图",
		},
		usr2editview: {
			caption: "文档库",
      		title: "文档库编辑视图",
		},
		libtabexpview: {
			caption: "文档库主页",
      		title: "文档库分页导航视图（文档）",
		},
		dashboardview: {
			caption: "文档主页",
      		title: "文档库数据看板视图",
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
        doclib_lookmainprojectdoclib: "查看",
        doclib_editprojectdoclib: "编辑",
        doclib_weihufenlei: "维护分类",
        doclib_collect: "收藏",
        doclib_uncollect: "取消收藏",
		},
	},
	expproductmain_grid: {
		nodata: "",
		columns: {
			name: "文档库名称",
		},
		uiactions: {
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
        doclib_lookmainproductdoclib: "查看",
        doclib_editdoclib: "编辑",
        doclib_weihufenlei: "维护分类",
        doclib_collect: "收藏",
        doclib_uncollect: "取消收藏",
		},
	},
	usr2editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction1_togglefilter: {
			caption: "Filter",
			tip: "Filter",
		},
	},
	undoneprojectgridviewtoolbar_toolbar: {
		deuiaction1_togglefilter: {
			caption: "Filter",
			tip: "Filter",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	libtabexpviewtoolbar_toolbar: {
		items1: {
			caption: "快速访问",
			tip: "快速访问",
		},
		deuiaction1: {
			caption: "最近更新",
			tip: "最近更新",
		},
		deuiaction2: {
			caption: "我的文档",
			tip: "我的文档",
		},
		deuiaction3: {
			caption: "我的收藏",
			tip: "我的收藏",
		},
		deuiaction4: {
			caption: "创建文档库",
			tip: "创建文档库",
		},
		deuiaction6: {
			caption: "创建文档",
			tip: "创建文档",
		},
	},
	productgridviewtoolbar_toolbar: {
		deuiaction1_togglefilter: {
			caption: "Filter",
			tip: "Filter",
		},
	},
	doclibtreeproduct_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
        doclib_editdoclib: "编辑",
        doclib_weihufenlei: "维护分类",
        doclib_uncollect: "取消收藏",
        doclib_collect: "收藏",
		},
	},
	looproductdoclibtree_treeview: {
		nodes: {
			root: "默认根节点",
			files: "附件库",
			allproduct: "所有产品",
		},
		uiactions: {
		},
	},
	projectdoclibtree_treeview: {
		nodes: {
			root: "默认根节点",
			allproject: "所有项目",
			files: "附件库",
		},
		uiactions: {
		},
	},
	customdoclibtree_treeview: {
		nodes: {
			root: "默认根节点",
			all: "所有文档库",
		},
		uiactions: {
        doclib_editcustomdoclib: "编辑",
        refreshall: "刷新",
        doclib_weihufenlei: "维护分类",
		},
	},
};