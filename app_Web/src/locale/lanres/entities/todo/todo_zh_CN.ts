export default {
  fields: {
    id: "编号",
    account: "所有者",
    closeddate: "关闭时间",
    closedby: "由谁关闭",
    type: "类型",
    end: "结束",
    desc: "描述",
    finishedby: "由谁完成",
    begin: "开始",
    idvalue: "关联编号",
    assignedby: "由谁指派",
    finisheddate: "完成时间",
    cycle: "周期",
    assignedto: "指派给",
    status: "状态",
    name: "待办名称",
    assigneddate: "指派日期",
    pri: "优先级",
    date: "日期",
    ibizprivate: "私人事务",
    config: "config",
    config_day: "间隔天数",
    config_beforedays: "提前生成待办天数",
    config_week: "周期设置周几",
    config_month: "周期设置月",
    config_type: "周期类型",
    config_end: "过期时间",
    bug: "bug",
    task: "项目任务",
    story: "项目需求",
  },
	views: {
		assigntoview: {
			caption: "指派给",
      		title: "指派表单视图",
		},
		todocreateview: {
			caption: "待办事宜表",
      		title: "添加待办",
		},
		gridview: {
			caption: "待办事宜表",
      		title: "todo表格视图",
		},
		editview: {
			caption: "待办事宜表",
      		title: "编辑待办",
		},
	},
	assigntoform_form: {
		details: {
			group1: "指派给", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "待办名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			assignto: "指派给", 
			date: "日期", 
			future: "", 
			begin: "起止时间", 
			end: "", 
			lbldisabledate: "", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	editform_form: {
		details: {
			group1: "编辑待办", 
			formpage1: "添加待办", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "待办名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			date: "日期", 
			type: "类型", 
			pri: "优先级", 
			name: "待办名称", 
			formitem: "描述", 
			status: "状态", 
			begin: "起止时间", 
			end: "", 
			formitem10: "", 
			private: "私人事务", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	main_form: {
		details: {
			tabpage1: "天", 
			tabpage2: "周", 
			tabpage3: "月", 
			tabpanel1: "", 
			grouppanel1: "分组面板", 
			group1: "", 
			formpage1: "添加待办", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "待办名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			date: "日期", 
			date_disable: "", 
			cycle_enable: "周期", 
			formitem3: "周期间隔(天)", 
			formitem4: "周期间隔", 
			formitem5: "周期间隔", 
			formitem2: "提前生成待办(天)", 
			formitem: "过期时间", 
			type: "类型", 
			pri: "优先级", 
			task: "项目任务", 
			story: "项目需求", 
			bug: "bug", 
			name: "待办名称", 
			formitem1: "描述", 
			status: "状态", 
			begin: "起止时间", 
			end: "结束", 
			formitem10: "", 
			private: "私人事务", 
			id: "编号", 
			idvalue: "关联编号", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "编号",
			date: "日期",
			type: "类型",
			pri: "优先级",
			name: "待办名称",
			begin: "开始",
			end: "结束",
			status: "状态",
			uagridcolumn1: "操作",
		},
		uiactions: {
			todo_assignto: "指派",
			todo_finish: "完成",
			todo_activate: "激活",
			todo_close: "关闭",
			todo_edit: "编辑",
			todo_delete: "删除",
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
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
	gridviewtoolbar_toolbar: {
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
	},
	todocreateviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
};