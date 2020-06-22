export default {
  fields: {
    type: "用例步骤类型",
    id: "编号",
    desc: "步骤",
    expect: "预期",
    version: "用例版本",
    ibizcase: "用例",
    parent: "分组用例步骤的组编号",
  },
	views: {
		maingridview9_editmode: {
			caption: "用例步骤",
      		title: "用例步骤",
		},
		gridview: {
			caption: "用例步骤",
      		title: "casestep表格视图",
		},
		maingridview9: {
			caption: "用例步骤",
      		title: "用例步骤",
		},
	},
	main_grid: {
		columns: {
			id: "编号",
			desc: "步骤",
			type: "类型",
			expect: "预期",
		},
		uiactions: {
		},
	},
	main_rowedit_grid: {
		columns: {
			id: "编号",
			desc: "步骤",
			type: "类型",
			expect: "预期",
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
	maingridview9toolbar_toolbar: {
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
	},
	maingridview9_editmodetoolbar_toolbar: {
		deuiaction2: {
			caption: "新建行",
			tip: "新建行",
		},
		deuiaction3: {
			caption: "保存行",
			tip: "保存行",
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
};