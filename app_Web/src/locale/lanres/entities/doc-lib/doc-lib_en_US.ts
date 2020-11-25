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
    root: "Root",
  },
	views: {
		projecttreeexpview: {
			caption: "项目文档库",
      		title: "文档库树导航视图（项目文档库）",
		},
		usr3treeview: {
			caption: "文档库",
      		title: "文档库树视图",
		},
		treeview: {
			caption: "文档库",
      		title: "文档库树视图",
		},
		producttreeexpview: {
			caption: "产品文档库",
      		title: "文档库树导航视图（产品文档库）",
		},
		pickupview: {
			caption: "文档库",
      		title: "doclib数据选择视图",
		},
		customtreeexpview: {
			caption: "自定义文档库",
      		title: "文档库树导航视图（自定义文档库）",
		},
		customdoclibchildtreeview: {
			caption: "自定义文档库-子目录",
      		title: "文档库树视图（自定义文档库-子目录）",
		},
		editview: {
			caption: "文档库",
      		title: "创建文档库",
		},
		productgridexpview: {
			caption: "产品文档库导航视图",
      		title: "文档库表格导航视图（产品文档库导航视图）",
		},
		pickupgridview: {
			caption: "文档库",
      		title: "doclib选择表格视图",
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
		customdoclibroottreeview: {
			caption: "自定义文档库-根目录",
      		title: "文档库树视图（自定义文档库-根目录）",
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
		byprojecttreeexpview: {
			caption: "项目下属文档库",
      		title: "文档库树导航视图（项目下属）",
		},
		byproducttreeexpview: {
			caption: "产品下属文档库",
      		title: "文档库树导航视图（产品下属）",
		},
		treeviewproductroot: {
			caption: "文档库",
      		title: "文档库树视图",
		},
		projecttreeview: {
			caption: "项目",
      		title: "文档库树视图",
		},
		producttreeviewcust: {
			caption: "自定义文档库",
      		title: "文档库树视图（自定义文档库）",
		},
		dashboardview: {
			caption: "文档主页",
      		title: "文档库数据看板视图",
		},
		usr2treeview: {
			caption: "文档库",
      		title: "文档库树视图",
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
	default_searchform: {
		details: {
			formpage1: "常规条件", 
		},
		uiactions: {
		},
	},
	usr2editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
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
	gridviewtoolbar_toolbar: {
		deuiaction1_togglefilter: {
			caption: "Filter",
			tip: "Filter",
		},
	},
	productgridviewtoolbar_toolbar: {
		deuiaction1_togglefilter: {
			caption: "Filter",
			tip: "Filter",
		},
	},
	childdoclibmoduletree_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
        doc_edit: "编辑",
        doc_onlycollectdoc: "收藏",
        doc_onlyuncollectdoc: "取消收藏",
        doclibmodule_edit: "编辑",
        doclibmodule_favorite: "收藏",
        doclibmodule_nfavorite: "取消收藏",
		},
	},
	doclibtreeproject_treeview: {
		nodes: {
			root: "默认根节点",
			files: "附件库",
		},
		uiactions: {
        doclib_editdoclib: "编辑",
        doclib_weihufenlei: "维护分类",
        doclib_uncollect: "取消收藏",
        doclib_collect: "收藏",
        file_look: "查看",
        file_ibzdownload: "下载",
        file_delete: "删除",
        doc_edit: "编辑",
        doc_onlycollectdoc: "收藏",
        doc_onlyuncollectdoc: "取消收藏",
        doclibmodule_edit: "编辑",
        doclibmodule_favorite: "收藏",
        doclibmodule_nfavorite: "取消收藏",
		},
	},
	rootdoclibprojecttreeveiw_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
        doclibmodule_edit: "编辑",
        doclibmodule_favorite: "收藏",
        doclibmodule_nfavorite: "取消收藏",
        doc_edit: "编辑",
        doc_onlycollectdoc: "收藏",
        doc_onlyuncollectdoc: "取消收藏",
		},
	},
	projectleftdoclibtree_treeview: {
		nodes: {
			root: "默认根节点",
			all: "所有文档库",
			files: "附件库",
		},
		uiactions: {
        refreshall: "刷新",
        doclib_editcustomdoclib: "编辑",
        doclib_weihufenlei: "维护分类",
		},
	},
	doclibchildtreeview_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
        doc_edit: "编辑",
        doc_onlycollectdoc: "收藏",
        doc_onlyuncollectdoc: "取消收藏",
        doclibmodule_edit: "编辑",
        doclibmodule_favorite: "收藏",
        doclibmodule_nfavorite: "取消收藏",
		},
	},
	docchildproducttreeview_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
        doc_edit: "编辑",
        doc_onlycollectdoc: "收藏",
        doc_onlyuncollectdoc: "取消收藏",
        doclibmodule_edit: "编辑",
        doclibmodule_favorite: "收藏",
        doclibmodule_nfavorite: "取消收藏",
		},
	},
	doclibtreeproduct_treeview: {
		nodes: {
			root: "默认根节点",
			files: "附件库",
		},
		uiactions: {
        file_look: "查看",
        file_ibzdownload: "下载",
        file_delete: "删除",
        doclib_editdoclib: "编辑",
        doclib_weihufenlei: "维护分类",
        doclib_uncollect: "取消收藏",
        doclib_collect: "收藏",
		},
	},
	productleftdoclibtree_treeview: {
		nodes: {
			root: "默认根节点",
			files: "附件库",
			all: "所有文档库",
		},
		uiactions: {
        doclib_editcustomdoclib: "编辑",
        refreshall: "刷新",
        doclib_weihufenlei: "维护分类",
		},
	},
	projectdoclibtree_treeview: {
		nodes: {
			root: "默认根节点",
			allproject: "所有项目",
			files: "附件库",
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
        doclib_editdoclib: "编辑",
        doclib_weihufenlei: "维护分类",
        doclib_uncollect: "取消收藏",
        doclib_collect: "收藏",
		},
	},
	doclibtreecustchild_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
        doclibmodule_edit: "编辑",
        doclibmodule_favorite: "收藏",
        doclibmodule_nfavorite: "取消收藏",
        doc_edit: "编辑",
        doc_onlycollectdoc: "收藏",
        doc_onlyuncollectdoc: "取消收藏",
		},
	},
	doclibtreecustroot_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
        doclibmodule_edit: "编辑",
        doclibmodule_favorite: "收藏",
        doclibmodule_nfavorite: "取消收藏",
        doc_edit: "编辑",
        doc_onlycollectdoc: "收藏",
        doc_onlyuncollectdoc: "取消收藏",
		},
	},
	doclibtreecust_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
        doclibmodule_edit: "编辑",
        doclibmodule_favorite: "收藏",
        doclibmodule_nfavorite: "取消收藏",
        doc_edit: "编辑",
        doc_onlycollectdoc: "收藏",
        doc_onlyuncollectdoc: "取消收藏",
        doclib_editdoclib: "编辑",
        doclib_weihufenlei: "维护分类",
        doclib_uncollect: "取消收藏",
        doclib_collect: "收藏",
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