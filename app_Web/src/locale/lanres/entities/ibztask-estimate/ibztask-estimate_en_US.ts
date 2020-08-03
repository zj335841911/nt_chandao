
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
		gridview9: {
			caption: "工时",
      		title: "任务预计表格视图",
		},
	},
	main_grid: {
		columns: {
			date: "日期",
			consumed: "总计消耗",
			left: "预计剩余",
			work: "备注",
		},
		uiactions: {
		},
	},
	gridview9toolbar_toolbar: {
		deuiaction2: {
			caption: "新建行",
			tip: "新建行",
		},
	},
};