export default {
  fields: {
    ibzweeklyname: "周报名称",
    ibzweeklyid: "周报标识",
    createman: "建立人",
    createdate: "建立时间",
    updateman: "更新人",
    updatedate: "更新时间",
    account: "用户",
    mailto: "抄送给",
    files: "附件",
    issubmit: "是否提交",
    reportto: "汇报给",
    comment: "其他事项",
    date: "日期",
    workthisweek: "本周工作",
    plannextweek: "下周计划",
    thisweektask: "本周完成任务",
    nextweektask: "下周计划任务",
  },
	views: {
		editview: {
			caption: "周报",
      		title: "实体2编辑视图",
		},
		usr2gridview: {
			caption: "周报",
      		title: "周报表格视图",
		},
		gridview: {
			caption: "周报",
      		title: "实体2表格视图",
		},
	},
	main_form: {
		details: {
			thisweektask: "", 
			formpage1: "基本信息", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "周报标识", 
			srfmajortext: "周报名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			workthisweek: "本周工作", 
			plannextweek: "下周计划", 
			comment: "其他事项", 
			files: "附件", 
			mailto: "抄送给", 
			reportto: "汇报给", 
			thisweektask1: "本周完成任务", 
			ibz_weeklyid: "周报标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			ibz_weeklyname: "周报名称",
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
	usr2gridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "New",
			tip: "New",
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
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
		seperator4: {
			caption: "",
			tip: "",
		},
		deuiaction5: {
			caption: "Filter",
			tip: "Filter",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
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
};