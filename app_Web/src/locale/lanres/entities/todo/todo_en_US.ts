
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
  },
	views: {
		assigntoview: {
			caption: "指派给",
      		title: "指派表单视图",
		},
		gridview: {
			caption: "待办事宜表",
      		title: "todo表格视图",
		},
		editview: {
			caption: "待办事宜表",
      		title: "todo编辑视图",
		},
	},
	assigntoform_form: {
		details: {
			group1: "指派给", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
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
	main_form: {
		details: {
			group1: "todo基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "待办名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "待办名称", 
			id: "编号", 
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
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem7: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
		},
		tbitem8: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "New",
			tip: "New",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem16: {
			caption: "-",
			tip: "",
		},
		tbitem23: {
			caption: "第一个记录",
			tip: "第一个记录",
		},
		tbitem24: {
			caption: "上一个记录",
			tip: "上一个记录",
		},
		tbitem25: {
			caption: "下一个记录",
			tip: "下一个记录",
		},
		tbitem26: {
			caption: "最后一个记录",
			tip: "最后一个记录",
		},
		tbitem21: {
			caption: "-",
			tip: "",
		},
		tbitem22: {
			caption: "Help",
			tip: "Help",
		},
	},
};