
export default {
  fields: {
    admins: 'admins',
    fax: '传真',
    deleted: '逻辑删除标志',
    website: '官网',
    id: 'id',
    zipcode: '邮政编码',
    address: '通讯地址',
    backyard: '内网',
    name: '公司名称',
    guest: '匿名登陆',
    phone: '联系电话',
  },
	views: {
		depttreeexpview: {
			caption: "公司",
      title: '组织部门树导航视图',
		},
		deptusertreeexpview: {
			caption: "公司",
      title: '组织部门人员树导航视图',
		},
		maintabexpview: {
			caption: "组织权限",
      title: '组织权限',
		},
		mainview: {
			caption: "公司信息",
      title: '公司数据看板视图',
		},
		editview: {
			caption: "公司信息",
      title: 'company编辑视图',
		},
		mainview9: {
			caption: "公司",
      title: '公司编辑视图',
		},
	},
	main_form: {
		details: {
			group1: "company基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "公司名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "公司名称", 
			phone: "联系电话", 
			fax: "传真", 
			address: "通讯地址", 
			zipcode: "邮政编码", 
			website: "官网", 
			backyard: "内网", 
			guest: "匿名登陆", 
			id: "id", 
		},
		uiactions: {
		},
	},
	main_edit_form: {
		details: {
			group1: "company基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "公司名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "公司名称", 
			phone: "联系电话", 
			fax: "传真", 
			address: "通讯地址", 
			zipcode: "邮政编码", 
			website: "官网", 
			backyard: "内网", 
			guest: "匿名登陆", 
			id: "id", 
		},
		uiactions: {
		},
	},
	deptexp_treeview: {
		nodes: {
			alldept: '所有部门',
			root: '默认根节点',
		},
		uiactions: {
		},
	},
	deptuserexp_treeview: {
		nodes: {
			alldept: '所有部门',
			root: '默认根节点',
		},
		uiactions: {
		},
	},
};