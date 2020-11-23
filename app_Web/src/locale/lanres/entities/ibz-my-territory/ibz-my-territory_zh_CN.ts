export default {
  fields: {
    fails: "fails",
    address: "通讯地址",
    password: "密码",
    weixin: "微信",
    dingding: "钉钉",
    account: "账户",
    ranzhi: "ranzhi",
    slack: "slack",
    realname: "真实姓名",
    locked: "locked",
    scorelevel: "scoreLevel",
    avatar: "avatar",
    zipcode: "zipcode",
    dept: "所属部门",
    commiter: "源代码账户",
    deleted: "逻辑删除标志",
    last: "最后登录",
    skype: "skype",
    score: "score",
    whatsapp: "whatsapp",
    visits: "访问次数",
    mobile: "手机",
    clientlang: "clientLang",
    join: "入职日期",
    ip: "ip",
    email: "邮箱",
    nickname: "nickname",
    phone: "电话",
    birthday: "birthday",
    id: "ID",
    qq: "QQ",
    gender: "男女",
    role: "职位",
    clientstatus: "clientStatus",
    mytasks: "我的任务",
    mybugs: "我的bugs",
    myebugs: "我的过期bug数",
    mystorys: "我的需求数",
    products: "未关闭产品数",
    eprojects: "过期项目数",
    projects: "未关闭项目数",
    myetasks: "我的过期任务数",
    mytodocnt: "我的待办数",
    myfavoritestorys: "我收藏的需求数",
    myfavoritebugs: "我收藏的bugs",
    myfavoritetasks: "我收藏的任务",
    myfavorites: "我的收藏",
    myterritorycnt: "我的地盘",
  },
	views: {
		tabexpview: {
			caption: "我的地盘",
      		title: "我的地盘",
		},
		editview: {
			caption: "我的地盘",
      		title: "我的地盘编辑视图",
		},
		calendarexpview: {
			caption: "我的地盘",
      		title: "我的地盘日历导航视图",
		},
		calendarview: {
			caption: "我的地盘",
      		title: "我的地盘日历视图",
		},
		usersumtreeexpview: {
			caption: "用户汇总表",
      		title: "我的地盘树导航视图",
		},
		usr3tabexpview: {
			caption: "我的地盘",
      		title: "我的地盘分页导航视图",
		},
		testtreeexpview: {
			caption: "测试统计",
      		title: "我的地盘树导航视图（测试统计）",
		},
		mywork: {
			caption: "我的工作",
      		title: "我的工作",
		},
		statstabexpview: {
			caption: "统计",
      		title: "我的地盘分页导航视图（统计）",
		},
		employtreeexpview: {
			caption: "员工负载",
      		title: "我的地盘树导航视图（员工负载计）",
		},
		dashboardview: {
			caption: "首页",
      		title: "首页",
		},
		productsumtreeexpview: {
			caption: "产品汇总表",
      		title: "我的地盘树导航视图（产品汇总表）",
		},
		listview: {
			caption: "欢迎",
      		title: "欢迎",
		},
		listview9: {
			caption: "我的工作",
      		title: "我的工作",
		},
		treeexpviewprojectstats: {
			caption: "项目汇总表",
      		title: "我的地盘我的地盘实体树导航视图（项目汇总表）导航视图",
		},
	},
	main_form: {
		details: {
			group1: "我的地盘基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "ID", 
			srfmajortext: "真实姓名", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "ID", 
		},
		uiactions: {
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "保存",
			tip: "保存",
		},
		tbitem4: {
			caption: "保存并新建",
			tip: "保存并新建",
		},
		tbitem5: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
		tbitem7: {
			caption: "删除",
			tip: "删除",
		},
	},
	productsum_treeview: {
		nodes: {
			storyhourssum: "需求工时汇总表",
			root: "默认根节点",
			productsum: "产品汇总表",
			productstorysum: "需求汇总表",
		},
		uiactions: {
		},
	},
	test_treeview: {
		nodes: {
			productbugstatussum: "产品Bug状态汇总表",
			bugassignedto: "Bug指派表",
			productbugresolutionstats: "产品Bug解决方案汇总表",
			bugopenendby: "Bug创建表",
			bugresolvedby: "Bug完成表",
			root: "默认根节点",
		},
		uiactions: {
		},
	},
	projectstats_treeview: {
		nodes: {
			bugresolutioncount: "bug解决方案统计",
			bugstatuscount: "bug状态统计",
			root: "默认根节点",
			taskstatuscount: "任务状态统计",
		},
		uiactions: {
		},
	},
	employeeload_treeview: {
		nodes: {
			employeeload: "员工负载表",
			root: "默认根节点",
		},
		uiactions: {
		},
	},
	usersum_treeview: {
		nodes: {
			userfinashtasksum: "用户完成任务汇总表",
			root: "默认根节点",
		},
		uiactions: {
		},
	},
	mywork_list: {
		nodata: "",
		uiactions: {
		},
	},
	welcome_list: {
		nodata: "",
		uiactions: {
		},
	},
	myworkpc_calendar: {
		nodata: "",
		uiactions: {
		},
	},
};