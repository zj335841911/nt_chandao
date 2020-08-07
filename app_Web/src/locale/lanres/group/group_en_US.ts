
export default {
  fields: {
    acl: 'acl',
    desc: '分组描述',
    id: 'ID',
    name: '分组名称',
    role: 'role',
  },
	views: {
		maingridview: {
			caption: "群组",
      title: '群组',
		},
		editview: {
			caption: "分组信息",
      title: '分组信息',
		},
	},
	main_form: {
		details: {
			group1: "基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "ID", 
			srfmajortext: "分组名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "分组名称", 
			desc: "分组描述", 
			id: "ID", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "ID",
			name: "分组名称",
			desc: "分组描述",
			uagridcolumn1: "操作",
		},
		uiactions: {
			edit: "Edit",
			remove: "Remove",
		},
	},
	maingridviewtoolbar_toolbar: {
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
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
};