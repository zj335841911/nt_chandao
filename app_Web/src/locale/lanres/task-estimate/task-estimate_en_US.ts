
export default {
  fields: {
    account: '用户',
    left: '预计剩余',
    consumed: '总计消耗',
    id: '编号',
    date: '日期',
    work: 'work',
    task: '任务',
    dates: '日期',
  },
	views: {
		optionview: {
			caption: "任务预计",
      title: '任务预计',
		},
		editgridview9: {
			caption: "工时",
      title: '工时',
		},
	},
	main_form: {
		details: {
			group1: "taskestimate基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "编号", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			date: "日期", 
			consumed: "工时", 
			left: "剩余", 
			work: "备注", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	mainedit_grid: {
		columns: {
			id: "ID",
			dates: "日期",
			consumed: "总计消耗",
			left: "预计剩余",
			work: "备注",
			uagridcolumn1: "操作",
		},
		uiactions: {
			edit: "编辑",
			remove: "Remove",
		},
	},
};