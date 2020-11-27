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
    modulecnt: "文件夹数",
    openeddate: "创建时间",
  },
	views: {
		mobproducttreeview: {
			caption: '产品',
		},
		mobeditview: {
			caption: '文档库',
		},
	},
	mobmain_form: {
		details: {
			group1: '文档库基本信息', 
			group2: '操作信息', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: '编号', 
			srfmajortext: '文档库名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			name: '文档库名称', 
			id: '编号', 
		},
		uiactions: {
		},
	},
	mobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: '保存',
			tip: '保存',
		},
	},
};