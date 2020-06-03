
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
      title: '公司',
		},
		deptusertreeexpview: {
			caption: "公司",
      title: '公司',
		},
		maintabexpview: {
			caption: "组织权限",
      title: '组织权限',
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