export default {
  fields: {
    qd: "测试负责人",
    acl: "访问控制",
    name: "产品名称",
    id: "编号",
    deleted: "已删除",
    whitelist: "分组白名单",
    rd: "发布负责人",
    order: "排序",
    type: "产品类型",
    po: "产品负责人",
    desc: "产品描述	",
    status: "状态",
    createdby: "由谁创建",
    createdversion: "当前系统版本",
    substatus: "子状态",
    code: "产品代号",
    createddate: "创建日期",
    linename: "产品线",
    line: "产品线",
    activebugcnt: "未解决Bug数",
    productplancnt: "计划总数",
    releasecnt: "发布总数",
    activestorycnt: "激活需求数",
    unconfirmbugcnt: "未确认Bug数",
    notclosedbugcnt: "未关闭Bug数",
  },
	views: {
		testtabexpview: {
			caption: "测试",
      		title: "产品主数据视图",
		},
		expeditview: {
			caption: "产品",
      		title: "产品编辑视图",
		},
		htmlview: {
			caption: "iBiz软件生产管理",
      		title: "iBiz软件生产管理",
		},
		testdashboardview: {
			caption: "产品",
      		title: "产品测试数据看板视图",
		},
		testgridview: {
			caption: "产品",
      		title: "product表格视图",
		},
		chartview: {
			caption: "产品",
      		title: "产品图表视图",
		},
		gridview_unclosed: {
			caption: "未关闭产品",
      		title: "产品表格视图",
		},
		storytreeexpview: {
			caption: "产品",
      		title: "产品需求导航视图",
		},
		casetreeexpview: {
			caption: "产品",
      		title: "产品需求导航视图",
		},
		maintabexpview: {
			caption: "产品",
      		title: "产品",
		},
		testleftsidebarlistview: {
			caption: "测试",
      		title: "所有产品",
		},
		gridview: {
			caption: "所有产品",
      		title: "所有产品",
		},
		pickupview: {
			caption: "产品",
      		title: "product数据选择视图",
		},
		leftsidebarlistview: {
			caption: "产品",
      		title: "所有产品",
		},
		pickupgridview: {
			caption: "产品",
      		title: "product选择表格视图",
		},
		dashboardinfomainview9: {
			caption: "产品",
      		title: "产品信息",
		},
		maindashboardview: {
			caption: "产品",
      		title: "产品数据看板视图",
		},
		testlistexpview: {
			caption: "测试统计",
      		title: "测试统计",
		},
		editview: {
			caption: "产品",
      		title: "product编辑视图",
		},
		listexpview: {
			caption: "产品统计",
      		title: "产品列表导航视图",
		},
		bugtreeexpview: {
			caption: "产品",
      		title: "产品需求导航视图",
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
			grouppanel1: "分组面板", 
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
	main2_grid: {
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
			caption: "编辑",
			tip: "编辑",
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
			caption: "导出数据模型",
			tip: "导出数据模型",
		},
	},
	testlistexpviewlistexpbar_list_quicktoolbar_toolbar: {
		deuiaction1: {
			caption: "新建",
			tip: "新建",
		},
	},
	testleftsidebarlistviewtoolbar_toolbar: {
		deuiaction3_testmanager: {
			caption: "管理",
			tip: "管理",
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
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction4: {
			caption: "删除",
			tip: "删除",
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
	leftsidebarlistviewtoolbar_toolbar: {
		deuiaction3_manager: {
			caption: "管理",
			tip: "管理",
		},
		seperator2: {
			caption: "",
			tip: "",
		},
		deuiaction1: {
			caption: "新建",
			tip: "新建",
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
	listexpviewlistexpbar_list_quicktoolbar_toolbar: {
		deuiaction1: {
			caption: "新建",
			tip: "新建",
		},
	},
};