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
    alltaskcnt: "所有任务数",
    unclosetaskcnt: "未关闭任务数",
    asstomytaskcnt: "指派给我任务数",
    unstarttaskcnt: "未开始任务数",
    moretaskcnt: "更多任务数",
    ystarttaskcnt: "进行中任务数",
    uncompletetaskcnt: "未完成任务数",
    ycompletetaskcnt: "已完成任务数",
    mycompletetaskcnt: "我完成任务数",
    closetaskcnt: "关闭任务数",
    canceltaskcnt: "取消任务数",
    storychangecnt: "需求变更数",
  },
	views: {
		mobchartview: {
			caption: '项目',
		},
		newmobeditview: {
			caption: '项目',
		},
		mobeditview: {
			caption: '项目',
		},
		supmobeditview: {
			caption: '挂起',
		},
		mobtabexpview: {
			caption: '项目',
		},
		mobpickupmdview: {
			caption: '项目',
		},
		activitemobeditview: {
			caption: '激活',
		},
		mobpickupview: {
			caption: '项目',
		},
		closemobeditview: {
			caption: '关闭',
		},
		mobmdview: {
			caption: '项目',
		},
	},
	mobmain_form: {
		details: {
			druipart1: '', 
			grouppanel1: '历史记录', 
			group1: '项目基本信息', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: '项目编号', 
			srfmajortext: '项目名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			name: '项目名称', 
			code: '项目代号', 
			pm: '项目负责人', 
			po: '产品负责人', 
			qd: '测试负责人', 
			rd: '发布负责人', 
			begin: '开始时间', 
			end: '结束日期', 
			days: '可用工作日', 
			team: '团队名称', 
			status: '项目状态', 
			storycnt: '需求总数', 
			bugcnt: 'Bug总数', 
			taskcnt: '任务总数', 
			totalestimate: '任务最初预计总工时', 
			totalconsumed: '任务消耗总工时', 
			desc: '项目描述', 
			id: '项目编号', 
		},
		uiactions: {
		},
	},
	activitemob_form: {
		details: {
			druipart1: '', 
			grouppanel1: '历史记录', 
			group1: 'project基本信息', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: '项目编号', 
			srfmajortext: '项目名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			begin: '开始时间', 
			end: '结束日期', 
			comment: '备注', 
			mobimage: '移动端图片', 
			id: '项目编号', 
		},
		uiactions: {
		},
	},
	suspendnclosemob_form: {
		details: {
			druipart1: '', 
			grouppanel1: '历史记录', 
			group1: 'project基本信息', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: '项目编号', 
			srfmajortext: '项目名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			comment: '备注', 
			mobimage: '', 
			id: '项目编号', 
		},
		uiactions: {
		},
	},
	mobnewform_form: {
		details: {
			grouppanel2: '分组面板', 
			grouppanel1: '分组面板', 
			group1: 'project基本信息', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: '项目编号', 
			srfmajortext: '项目名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			name: '项目名称', 
			code: '项目代号', 
			begin: '开始时间', 
			period: '时间段', 
			end: '结束日期', 
			days: '可用工作日', 
			team: '团队名称', 
			type: '项目类型', 
			desc: '项目描述', 
			acl: '访问控制', 
			id: '项目编号', 
		},
		uiactions: {
		},
	},
	activitemobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: '保存',
			tip: '保存',
		},
	},
	supmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: '保存',
			tip: '保存',
		},
	},
	closemobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: '保存',
			tip: '保存',
		},
	},
	mobeditviewrighttoolbar_toolbar: {
		items1: {
			caption: '更多',
			tip: '更多',
		},
		deuiaction1: {
			caption: '激活',
			tip: '激活',
		},
		deuiaction2: {
			caption: '挂起',
			tip: '挂起',
		},
		deuiaction3: {
			caption: '关闭',
			tip: '关闭',
		},
		deuiaction4: {
			caption: '删除',
			tip: '删除',
		},
	},
	newmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: '保存',
			tip: '保存',
		},
	},
	mobmdviewrighttoolbar_toolbar: {
		deuiaction1: {
			caption: '新建',
			tip: '新建',
		},
	},
};