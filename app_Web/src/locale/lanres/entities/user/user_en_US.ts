export default {
  fields: {
    password: "密码",
    address: "通讯地址",
    weixin: "微信",
    dingding: "钉钉",
    fails: "fails",
    slack: "slack",
    ranzhi: "ranzhi",
    account: "账户",
    locked: "locked",
    avatar: "avatar",
    scorelevel: "scoreLevel",
    realname: "真实姓名",
    zipcode: "zipcode",
    dept: "所属部门",
    commiter: "源代码账户",
    role: "职位",
    deleted: "逻辑删除标志",
    last: "最后登录",
    clientstatus: "clientStatus",
    skype: "skype",
    whatsapp: "whatsapp",
    score: "score",
    gender: "性别",
    mobile: "手机",
    clientlang: "clientLang",
    visits: "访问次数",
    join: "入职日期",
    email: "邮箱",
    ip: "ip",
    birthday: "birthday",
    nickname: "nickname",
    phone: "电话",
    id: "ID",
    qq: "QQ",
  },
	views: {
		pickupview: {
			caption: "用户",
      		title: "用户数据选择视图",
		},
		infoeditview: {
			caption: "用户信息",
      		title: "用户编辑视图",
		},
		editview: {
			caption: "用户信息",
      		title: "用户编辑视图",
		},
		pickupgridview: {
			caption: "用户",
      		title: "用户选择表格视图",
		},
		maingridview: {
			caption: "用户",
      		title: "用户表格视图",
		},
		treeexpview: {
			caption: "用户",
      		title: "用户",
		},
	},
	info_form: {
		details: {
			group1: "基本信息", 
			grouppanel1: "账号信息", 
			grouppanel2: "联系信息", 
			grouppanel3: "用户信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "ID", 
			srfmajortext: "真实姓名", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			realname: "真实姓名", 
			join: "入职日期", 
			dept: "所属部门", 
			role: "职位", 
			gender: "性别", 
			account: "账户", 
			email: "邮箱", 
			mobile: "手机", 
			phone: "电话", 
			qq: "QQ", 
			dingding: "钉钉", 
			weixin: "微信", 
			address: "通讯地址", 
			id: "ID", 
		},
		uiactions: {
		},
	},
	main_form: {
		details: {
			group1: "基本信息", 
			grouppanel1: "账号信息", 
			grouppanel2: "联系信息", 
			grouppanel3: "用户信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "ID", 
			srfmajortext: "真实姓名", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			realname: "真实姓名", 
			join: "入职日期", 
			dept: "所属部门", 
			role: "职位", 
			gender: "性别", 
			account: "账户", 
			email: "邮箱", 
			password: "密码", 
			mobile: "手机", 
			phone: "电话", 
			qq: "QQ", 
			dingding: "钉钉", 
			weixin: "微信", 
			address: "通讯地址", 
			id: "ID", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			id: "ID",
			realname: "真实姓名",
			account: "账户",
			role: "职位",
			email: "邮箱",
			gender: "性别",
			phone: "电话",
			qq: "QQ",
			address: "通讯地址",
			last: "最后登录",
			visits: "访问次数",
			uagridcolumn1: "操作",
		},
		uiactions: {
        user_edit: "编辑",
        user_delete: "删除",
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
		},
		uiactions: {
		},
	},
	infoeditviewtoolbar_toolbar: {
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	maingridviewtoolbar_toolbar: {
		deuiaction3_create: {
			caption: "新建",
			tip: "新建",
		},
		deuiaction3_syncaccount: {
			caption: "同步账号",
			tip: "同步账号",
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
	userexp_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
        refreshall: "刷新",
        company_editdept: "维护部门",
		},
	},
};