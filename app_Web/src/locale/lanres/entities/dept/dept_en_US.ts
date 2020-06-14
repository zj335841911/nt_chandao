
export default {
  fields: {
    manager: '负责人',
    grade: 'grade',
    function: 'function',
    order: 'order',
    path: 'path',
    position: 'position',
    id: 'id',
    name: '部门名称',
    parentname: '上级部门',
    parent: 'parent',
    isleaf: '无子部门',
  },
	views: {
		pickupview: {
			caption: "部门",
      title: 'dept数据选择视图',
		},
		maingridview: {
			caption: "部门",
      title: 'dept表格视图',
		},
		editview: {
			caption: "部门信息",
      title: 'dept编辑视图',
		},
		pickupgridview: {
			caption: "部门",
      title: 'dept选择表格视图',
		},
	},
	main_form: {
		details: {
			group1: "基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "部门名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "部门名称", 
			parentname: "上级部门", 
			manager: "负责人", 
			id: "id", 
			parent: "parent", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "ID",
			name: "部门",
			parentname: "上级部门",
			manager: "负责人",
			order: "排序值",
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
	maingridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "New",
			tip: "New",
		},
		deuiaction4: {
			caption: "Remove",
			tip: "Remove {0}",
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
		tbitem3: {
			caption: "Save",
			tip: "Save",
		},
		tbitem4: {
			caption: "Save And New",
			tip: "Save And New",
		},
		tbitem5: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem7: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
		},
		tbitem8: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "New",
			tip: "New",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem16: {
			caption: "-",
			tip: "",
		},
		tbitem23: {
			caption: "第一个记录",
			tip: "第一个记录",
		},
		tbitem24: {
			caption: "上一个记录",
			tip: "上一个记录",
		},
		tbitem25: {
			caption: "下一个记录",
			tip: "下一个记录",
		},
		tbitem26: {
			caption: "最后一个记录",
			tip: "最后一个记录",
		},
		tbitem21: {
			caption: "-",
			tip: "",
		},
		tbitem22: {
			caption: "Help",
			tip: "Help",
		},
	},
};