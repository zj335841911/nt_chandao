export default {
  fields: {
    ibzprostorymodulename: "需求模块名称",
    ibzprostorymoduleid: "需求模块标识",
    updateman: "更新人",
    updatedate: "更新时间",
    createman: "建立人",
    createdate: "建立时间",
    product: "产品（开发系统）标识",
    pmsstorymodule: "id",
  },
	views: {
		editview: {
			caption: "需求模块",
      		title: "需求模块编辑视图",
		},
		gridview: {
			caption: "需求模块",
      		title: "需求模块表格视图",
		},
	},
	main_form: {
		details: {
			group1: "需求模块基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "需求模块标识", 
			srfmajortext: "需求模块名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			product: "产品（开发系统）标识", 
			pmsstorymodule: "id", 
			ibzpro_storymodulename: "需求模块名称", 
			createman: "建立人", 
			createdate: "建立时间", 
			updateman: "更新人", 
			updatedate: "更新时间", 
			ibzpro_storymoduleid: "需求模块标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			product: "产品（开发系统）标识",
			pmsstorymodule: "id",
			ibzpro_storymodulename: "需求模块名称",
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
		deuiaction3_push: {
			caption: "推送",
			tip: "推送",
		},
		seperator2: {
			caption: "",
			tip: "",
		},
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
		seperator3: {
			caption: "",
			tip: "",
		},
		deuiaction4: {
			caption: "导出",
			tip: "导出",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
};