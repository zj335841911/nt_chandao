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
    pmsstoryname: "需求",
    productname: "产品",
    storymodulename: "需求模块",
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
			productname: "产品", 
			storymodulename: "需求模块", 
			pmsstoryname: "需求", 
			ibzpro_storyname: "需求名称", 
			storymodule: "需求模块标识", 
			createman: "建立人", 
			createdate: "建立时间", 
			updateman: "更新人", 
			updatedate: "更新时间", 
			ibzpro_storyid: "需求标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			productname: "产品",
			pmsstory: "编号",
			storymodulename: "需求模块",
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