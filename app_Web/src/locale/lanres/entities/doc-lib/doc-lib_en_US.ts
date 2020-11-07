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
  },
	views: {
		editview: {
			caption: "文档库",
      		title: "doclib编辑视图",
		},
		gridview: {
			caption: "文档库",
      		title: "doclib表格视图",
		},
		productgridview: {
			caption: "文档库",
      		title: "doclib表格视图",
		},
	},
	main_form: {
		details: {
			group1: "doclib基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "文档库名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "文档库名称", 
			collector: "收藏者", 
			project: "项目库", 
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
};