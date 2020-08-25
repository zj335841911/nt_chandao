export default {
  fields: {
    manager: "负责人",
    grade: "grade",
    function: "function",
    order: "order",
    path: "path",
    position: "position",
    id: "id",
    name: "部门名称",
    parentname: "上级部门",
    parent: "parent",
    isleaf: "无子部门",
  },
	views: {
		pickupview: {
			caption: "部门",
      		title: "部门数据选择视图",
		},
		maingridview: {
			caption: "部门",
      		title: "部门",
		},
		infoeditview: {
			caption: "部门信息",
      		title: "部门编辑视图",
		},
		editview: {
			caption: "部门信息",
      		title: "部门编辑视图",
		},
		pickupgridview: {
			caption: "部门",
      		title: "部门选择表格视图",
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
	info_form: {
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
			uagridcolumn1: "操作",
		},
		uiactions: {
			dept_delete: "删除",
			dept_edit: "编辑",
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
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
	maingridviewtoolbar_toolbar: {
		deuiaction3_create: {
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
		seperator2: {
			caption: "",
			tip: "",
		},
		deuiaction1: {
			caption: "导出",
			tip: "导出",
		},
	},
	infoeditviewtoolbar_toolbar: {
	},
};