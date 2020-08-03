export default {
  fields: {
    account: "用户",
    left: "预计剩余",
    consumed: "总计消耗",
    id: "编号",
    date: "日期",
    work: "work",
    task: "任务",
  },
	views: {
		gridview: {
			caption: "任务预计",
      		title: "taskestimate表格视图",
		},
	},
	main_grid: {
		columns: {
			id: "ID",
			date: "日期",
			consumed: "总计消耗",
			left: "预计剩余",
			work: "备注",
		},
		uiactions: {
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "新建行",
			tip: "新建行",
		},
		deuiaction3: {
			caption: "保存行",
			tip: "保存行",
		},
	},
};