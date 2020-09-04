
export default {
  fields: {
    openedversion: "当前系统版本",
    begin: "开始时间",
    acl: "访问控制",
    deleted: "已删除",
    desc: "项目描述",
    pm: "项目负责人",
    id: "项目编号",
    name: "项目名称",
    substatus: "子状态",
    order: "项目排序",
    rd: "发布负责人",
    whitelist: "分组白名单",
    pri: "优先级",
    end: "结束日期",
    canceleddate: "取消日期",
    code: "项目代号",
    catid: "catID",
    statge: "statge",
    canceledby: "由谁取消",
    iscat: "isCat",
    openeddate: "创建日期",
    closedby: "由谁关闭",
    type: "项目类型",
    po: "产品负责人",
    status: "项目状态",
    days: "可用工作日",
    team: "团队名称",
    closeddate: "关闭日期",
    openedby: "由谁创建",
    qd: "测试负责人",
    parentname: "parent",
    parent: "父项目",
    taskcnt: "任务总数",
    bugcnt: "Bug总数",
    storycnt: "需求总数",
    products: "关联产品",
    branchs: "关联产品平台集合",
    plans: "关联计划",
    srfarray: "关联数据数组",
    comment: "备注",
    period: "时间段",
    account: "项目团队成员",
    join: "加盟日",
    hours: "可用工时/天",
    role: "角色",
    totalconsumed: "任务消耗总工时",
    totalwh: "总工时",
    totalleft: "任务预计剩余总工时",
    totalestimate: "任务最初预计总工时",
    totalhours: "可用工时",
    mobimage: "移动端图片",
    accounts: "项目团队相关成员",
    order1: "项目排序",
    istop: "是否置顶",
    dept: "选择部门",
    managemembers: "复制团队",
    buildcnt: "版本总数",
    teamcnt: "团队成员总数",
  },
	views: {
		storymeditview9: {
			caption: "需求相关",
      		title: "项目多表单编辑视图（需求相关）",
		},
		tasktreeexpview: {
			caption: "项目",
      		title: "项目任务导航视图",
		},
		mgeditview: {
			caption: "团队管理",
      		title: "项目编辑视图（团队管理）",
		},
		testtabexpview: {
			caption: "测试",
      		title: "项目分页导航视图（测试）",
		},
		editview_putoff: {
			caption: "项目",
      		title: "项目",
		},
		mainmygridview: {
			caption: "项目",
      		title: "项目",
		},
		planaddeditview: {
			caption: "项目",
      		title: "项目编辑视图（计划添加）",
		},
		burndownchartview: {
			caption: "项目",
      		title: "燃尽图",
		},
		listexpview: {
			caption: "项目",
      		title: "项目列表导航视图",
		},
		pickupgridview: {
			caption: "项目",
      		title: "项目选择表格视图",
		},
		editview_activate: {
			caption: "项目",
      		title: "项目",
		},
		curproductgridview: {
			caption: "项目",
      		title: "project表格视图",
		},
		pickupview: {
			caption: "项目",
      		title: "项目数据选择视图",
		},
		mainview_edit: {
			caption: "项目",
      		title: "项目编辑视图",
		},
		storyeditview9: {
			caption: "需求",
      		title: "项目编辑视图（需求相关）",
		},
		leftsidebarlistview: {
			caption: "项目",
      		title: "所有项目",
		},
		gridview: {
			caption: "项目",
      		title: "项目",
		},
		maindashboardview: {
			caption: "项目",
      		title: "项目数据看板视图",
		},
		editview_close: {
			caption: "项目",
      		title: "项目",
		},
		gridview9_unclosed: {
			caption: "未关闭的项目",
      		title: "项目表格视图",
		},
		editview_suspend: {
			caption: "项目",
      		title: "项目",
		},
		dashboardinfoview: {
			caption: "项目",
      		title: "项目信息",
		},
		editview: {
			caption: "项目",
      		title: "项目",
		},
		maintabexpview: {
			caption: "项目",
      		title: "项目",
		},
	},
	putoff_form: {
		details: {
			grouppanel2: "分组面板", 
			grouppanel1: "分组面板", 
			druipart1: "", 
			group1: "project基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "项目编号", 
			srfmajortext: "项目名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			begin: "开始时间", 
			end: "至", 
			period: "", 
			days: "可用工作日", 
			type: "项目类型", 
			comment: "备注", 
			id: "项目编号", 
		},
		uiactions: {
		},
	},
	suspendnclose_form: {
		details: {
			druipart1: "", 
			group1: "project基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "项目编号", 
			srfmajortext: "项目名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			comment: "备注", 
			id: "项目编号", 
		},
		uiactions: {
		},
	},
	activate_form: {
		details: {
			druipart1: "", 
			group1: "project基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "项目编号", 
			srfmajortext: "项目名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			formitem: "开始时间", 
			formitem1: "结束日期", 
			formitemex1: "起止时间", 
			comment: "备注", 
			id: "项目编号", 
		},
		uiactions: {
		},
	},
	main_edit_form: {
		details: {
			grouppanel3: "分组面板", 
			grouppanel2: "负责人", 
			grouppanel4: "分组面板", 
			grouppanel1: "分组面板", 
			group1: "project基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "项目编号", 
			srfmajortext: "项目名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "项目名称", 
			code: "项目代号", 
			begin: "起始日期", 
			end: "至", 
			period: "", 
			days: "可用工作日", 
			type: "项目类型", 
			team: "团队名称", 
			status: "项目状态", 
			po: "产品负责人", 
			pm: "项目负责人", 
			rd: "发布负责人", 
			qd: "测试负责人", 
			srfarray: "关联数据数组", 
			products: "关联产品", 
			branchs: "关联产品平台集合", 
			plans: "关联计划", 
			formitemex2: "", 
			desc: "项目描述", 
			acl: "访问控制", 
			id: "项目编号", 
		},
		uiactions: {
		},
	},
	dashboardinfo_form: {
		details: {
			group1: "project基本信息", 
			druipart1: "", 
			grouppanel6: "关联产品", 
			druipart2: "", 
			grouppanel7: "关联计划", 
			grouppanel2: "分组面板", 
			grouppanel3: "分组面板", 
			grouppanel1: "工时统计", 
			grouppanel4: "基本信息", 
			grouppanel5: "访问控制", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "项目编号", 
			srfmajortext: "项目名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "项目编号", 
			code: "项目代号", 
			name: "项目名称", 
			desc: "项目描述", 
			type: "项目类型", 
			status: "项目状态", 
			begin: "开始时间", 
			end: "结束日期", 
			days: "可用工作日", 
			totalhours: "可用工时", 
			formitem: "预计", 
			formitem1: "消耗", 
			formitem2: "剩余", 
			formitem3: "需求", 
			formitem4: "任务", 
			formitem5: "Bug", 
			acl: "访问控制", 
		},
		uiactions: {
		},
	},
	newplan_form: {
		details: {
			grouppanel2: "分组面板", 
			grouppanel1: "分组面板", 
			group1: "project基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "项目编号", 
			srfmajortext: "项目名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "项目名称", 
			code: "项目代号", 
			begin: "开始时间", 
			end: "至", 
			period: "", 
			days: "可用工作日", 
			team: "团队名称", 
			type: "项目类型", 
			srfarray: "关联数据数组", 
			products: "关联产品", 
			branchs: "关联产品平台集合", 
			plans: "关联计划", 
			formitemex2: "", 
			desc: "项目描述", 
			acl: "访问控制", 
			id: "项目编号", 
		},
		uiactions: {
		},
	},
	newform_form: {
		details: {
			grouppanel2: "分组面板", 
			grouppanel1: "分组面板", 
			group1: "project基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "项目编号", 
			srfmajortext: "项目名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "项目名称", 
			code: "项目代号", 
			begin: "开始时间", 
			end: "至", 
			period: "", 
			days: "可用工作日", 
			team: "团队名称", 
			type: "项目类型", 
			srfarray: "关联数据数组", 
			products: "关联产品", 
			branchs: "关联产品平台集合", 
			plans: "关联计划", 
			formitemex2: "", 
			desc: "项目描述", 
			acl: "访问控制", 
			id: "项目编号", 
		},
		uiactions: {
		},
	},
	projectmg_form: {
		details: {
			rawitem1: "", 
			druipart1: "", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "项目编号", 
			srfmajortext: "项目名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			dept: "选择部门", 
			managemembers: "复制团队", 
			id: "项目编号", 
		},
		uiactions: {
		},
	},
	storyproject_form: {
		details: {
			druipart1: "", 
			group1: "项目基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "项目编号", 
			srfmajortext: "项目名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			accounts: "", 
			id: "项目编号", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "ID",
			name: "项目名称",
			code: "项目代号",
			status: "项目状态",
			end: "结束日期",
		},
		uiactions: {
		},
	},
	mainmy_grid: {
		columns: {
			id: "ID",
			code: "项目代号",
			name: "项目名称",
			begin: "开始时间",
			end: "结束日期",
			status: "项目状态",
			role: "角色",
			join: "加盟日",
			hours: "可用工时/天",
		},
		uiactions: {
		},
	},
	main2_grid: {
		columns: {
			id: "ID",
			name: "项目名称",
			code: "项目代号",
			status: "项目状态",
			end: "结束日期",
		},
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
		},
		uiactions: {
		},
	},
	editview_putofftoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	editview_suspendtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	editview_activatetoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	editview_closetoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	mainview_edittoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	planaddeditviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	curproductgridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
		deuiaction1: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction3_create: {
			caption: "新建",
			tip: "新建",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
		deuiaction1: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	mainmygridviewtoolbar_toolbar: {
		deuiaction3_create: {
			caption: "新建",
			tip: "新建",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
		deuiaction1: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	leftsidebarlistviewtoolbar_toolbar: {
		deuiaction3_manager: {
			caption: "管理",
			tip: "管理",
		},
		deuiaction3_create: {
			caption: "新建",
			tip: "新建",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
	},
	leftsidebarlistviewlist_quicktoolbar_toolbar: {
		deuiaction1: {
			caption: "置顶",
			tip: "置顶",
		},
		deuiaction2: {
			caption: "取消置顶",
			tip: "取消置顶",
		},
	},
};