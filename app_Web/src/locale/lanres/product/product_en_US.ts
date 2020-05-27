
export default {
  fields: {
    qd: '测试负责人',
    acl: '访问控制',
    name: '产品名称',
    id: '编号',
    deleted: '已删除',
    whitelist: '分组白名单',
    rd: '发布负责人',
    order: '排序',
    type: '产品类型',
    po: '产品负责人',
    desc: '产品描述	',
    status: '状态',
    createdby: '由谁创建',
    createdversion: '当前系统版本',
    substatus: '子状态',
    code: '产品代号',
    createddate: '创建日期',
    linename: '产品线',
    line: '产品线',
  },
	views: {
		testtabexpview: {
			caption: "产品",
      title: '产品',
		},
		testdashboardview: {
			caption: "产品",
      title: '产品',
		},
		testgridview: {
			caption: "产品",
      title: '产品',
		},
		storytreeexpview: {
			caption: "产品",
      title: '产品',
		},
		maintabexpview: {
			caption: "产品",
      title: '产品',
		},
		gridview: {
			caption: "产品",
      title: '产品',
		},
		leftsidebarlistview: {
			caption: "产品",
      title: '产品',
		},
		dashboardinfomainview9: {
			caption: "产品",
      title: '产品',
		},
		maindashboardview: {
			caption: "产品",
      title: '产品',
		},
		editview: {
			caption: "产品",
      title: '产品',
		},
		bugtreeexpview: {
			caption: "产品",
      title: '产品',
		},
	},
	dashboardinfo_form: {
		details: {
			group1: "产品基本信息", 
			grouppanel2: "负责人", 
			grouppanel3: "产品信息", 
			grouppanel4: "其他信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "产品名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "名称", 
			po: "产品", 
			rd: "发布", 
			qd: "测试", 
			linename: "产品线", 
			createdby: "创建人", 
			createddate: "创建日期", 
			acl: "访问控制", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	main_form: {
		details: {
			group1: "product基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "产品名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "产品名称", 
			code: "产品代号", 
			line: "产品线", 
			linename: "产品线", 
			po: "产品负责人", 
			qd: "测试负责人", 
			rd: "发布负责人", 
			type: "产品类型", 
			desc: "产品描述	", 
			acl: "访问控制", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	test_grid: {
		columns: {
			name: "产品名称",
			code: "产品代号",
			status: "状态",
			type: "产品类型",
			linename: "产品线",
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			name: "产品名称",
			code: "产品代号",
			status: "状态",
			type: "产品类型",
			linename: "产品线",
		},
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
			n_acl_eq: "访问控制(等于(=))", 
			n_line_eq: "产品线(等于(=))", 
			n_linename_like: "产品线(文本包含(%))", 
			n_linename_eq: "产品线(等于(=))", 
			n_name_like: "产品名称(文本包含(%))", 
		},
		uiactions: {
		},
	},
	testgridviewtoolbar_toolbar: {
		tbitem4: {
			caption: "Edit",
			tip: "Edit {0}",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem16: {
			caption: "其它",
			tip: "其它",
		},
		tbitem21: {
			caption: "Export Data Model",
			tip: "导出数据模型",
		},
	},
	leftsidebarlistviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "New",
			tip: "New",
		},
		seperator1: {
			caption: "",
			tip: "",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "Save",
			tip: "Save",
		},
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	gridviewtoolbar_toolbar: {
		tbitem3: {
			caption: "New",
			tip: "New",
		},
		tbitem4: {
			caption: "Edit",
			tip: "Edit {0}",
		},
		tbitem6: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem8: {
			caption: "Remove",
			tip: "Remove {0}",
		},
		tbitem9: {
			caption: "-",
			tip: "",
		},
		tbitem13: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
		tbitem10: {
			caption: "-",
			tip: "",
		},
		tbitem16: {
			caption: "其它",
			tip: "其它",
		},
		tbitem21: {
			caption: "Export Data Model",
			tip: "导出数据模型",
		},
		tbitem23: {
			caption: "数据导入",
			tip: "数据导入",
		},
		tbitem17: {
			caption: "-",
			tip: "",
		},
		tbitem19: {
			caption: "Filter",
			tip: "Filter",
		},
		tbitem18: {
			caption: "Help",
			tip: "Help",
		},
	},
};