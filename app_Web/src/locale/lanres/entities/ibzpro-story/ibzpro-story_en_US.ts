
export default {
  fields: {
    createdate: "建立时间",
    ibzprostoryname: "需求名称",
    ibzprostoryid: "需求标识",
    createman: "建立人",
    updateman: "更新人",
    updatedate: "更新时间",
    product: "产品（开发系统）标识",
    storymodule: "需求模块标识",
    pmsstory: "编号",
  },
	views: {
		gridview: {
			caption: "需求",
      		title: "需求表格视图",
		},
		editview: {
			caption: "需求",
      		title: "需求编辑视图",
		},
	},
	main_form: {
		details: {
			group1: "需求基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "需求标识", 
			srfmajortext: "需求名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			pmsstory: "编号", 
			product: "产品（开发系统）标识", 
			ibzpro_storyname: "需求名称", 
			storymodule: "需求模块标识", 
			ibzpro_storyid: "需求标识", 
			createman: "建立人", 
			createdate: "建立时间", 
			updateman: "更新人", 
			updatedate: "更新时间", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			product: "产品（开发系统）标识",
			pmsstory: "编号",
			storymodule: "需求模块标识",
			ibzpro_storyname: "需求名称",
			updateman: "更新人",
			updatedate: "更新时间",
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
	gridviewtoolbar_toolbar: {
		tbitem3: {
			caption: "New",
			tip: "New",
		},
		tbitem4: {
			caption: "Edit",
			tip: "Edit {0}",
		},
		tbitem6: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem8: {
			caption: "Remove",
			tip: "Remove {0}",
		},
		tbitem9: {
			caption: "-",
			tip: "",
		},
		tbitem13: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
		tbitem10: {
			caption: "-",
			tip: "",
		},
		tbitem16: {
			caption: "其它",
			tip: "其它",
		},
		tbitem21: {
			caption: "Export Data Model",
			tip: "导出数据模型",
		},
		tbitem23: {
			caption: "数据导入",
			tip: "数据导入",
		},
		tbitem17: {
			caption: "-",
			tip: "",
		},
		tbitem19: {
			caption: "Filter",
			tip: "Filter",
		},
		tbitem18: {
			caption: "Help",
			tip: "Help",
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
		tbitem7: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
		},
	},
};