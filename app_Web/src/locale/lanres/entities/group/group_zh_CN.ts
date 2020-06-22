export default {
  fields: {
    acl: "acl",
    desc: "分组描述",
    id: "ID",
    name: "分组名称",
    role: "role",
  },
	views: {
		maingridview: {
			caption: "群组",
      		title: "group表格视图",
		},
		editview: {
			caption: "分组信息",
      		title: "group编辑视图",
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
			edit: "编辑",
			remove: "删除",
		},
	},
	maingridviewtoolbar_toolbar: {
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
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
};