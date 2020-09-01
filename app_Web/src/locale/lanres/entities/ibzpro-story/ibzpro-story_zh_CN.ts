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
			caption: "新建",
			tip: "新建",
		},
		tbitem4: {
			caption: "编辑",
			tip: "编辑",
		},
		tbitem6: {
			caption: "拷贝",
			tip: "拷贝",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem8: {
			caption: "删除",
			tip: "删除",
		},
		tbitem9: {
			caption: "-",
			tip: "",
		},
		tbitem13: {
			caption: "导出",
			tip: "导出",
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
			caption: "导出数据模型",
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
			caption: "过滤",
			tip: "过滤",
		},
		tbitem18: {
			caption: "帮助",
			tip: "帮助",
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
};