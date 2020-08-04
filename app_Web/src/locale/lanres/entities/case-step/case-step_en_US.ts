
export default {
  fields: {
    type: "用例步骤类型",
    id: "编号",
    desc: "步骤",
    expect: "预期",
    version: "用例版本",
    ibizcase: "用例",
    parent: "分组用例步骤的组编号",
    reals: "实际情况",
    steps: "测试结果",
    files: "附件",
  },
	views: {
		carryouteditmode: {
			caption: "用例步骤",
      		title: "用例步骤",
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
	main_rowedit_carryout_grid: {
		columns: {
			desc: "步骤",
			type: "类型",
			expect: "预期",
			steps: "测试结果",
			reals: "实际情况",
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
};