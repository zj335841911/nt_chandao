
export default {
  fields: {
    admins: 'admins',
    fax: 'fax',
    deleted: '逻辑删除标志',
    website: 'website',
    id: 'id',
    zipcode: 'zipcode',
    address: 'address',
    backyard: 'backyard',
    name: 'name',
    guest: 'guest',
    phone: 'phone',
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
			caption: "公司",
      title: '公司',
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