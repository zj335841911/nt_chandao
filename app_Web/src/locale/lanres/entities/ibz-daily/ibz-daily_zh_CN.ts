export default {
  fields: {
    createman: "建立人",
    ibzdailyid: "日报标识",
    ibzdailyname: "日报名称",
    updatedate: "更新时间",
    createdate: "建立时间",
    updateman: "更新人",
    date: "日期",
    account: "用户",
    worktoday: "今日工作",
    mailto: "抄送给",
    files: "附件",
    todaytask: "完成任务",
    issubmit: "是否提交",
    planstomorrow: "明日计划",
    tomorrowplanstask: "明日计划任务",
    reportto: "汇报给",
    comment: "其他事项",
    createmanname: "建立人名称",
    updatemanname: "更新人名称",
    reportstatus: "状态",
    submittime: "提交时间",
    reporttopk: "汇报给（选择）",
    mailtopk: "抄送给（选择）",
  },
	views: {
		dailyeditview: {
			caption: "日报",
      		title: "日报编辑视图",
		},
		maineditview: {
			caption: "日报",
      		title: "日报编辑视图（主数据）",
		},
		mymaineditview: {
			caption: "日报",
      		title: "日报编辑视图（主数据）",
		},
		dailygridview: {
			caption: "日报",
      		title: "日报表格视图",
		},
		dailyinfocalendareditview: {
			caption: "日报",
      		title: "日报编辑视图(日历显示)",
		},
		dailyinfoeditview: {
			caption: "日报",
      		title: "日报编辑视图(日报描述)",
		},
		mydailygridview: {
			caption: "日报",
      		title: "日报表格视图",
		},
	},
	maininfo_form: {
		details: {
			druipart3: "", 
			grouppanel4: "附件", 
			druipart4: "", 
			grouppanel5: "操作", 
			group1: "日报基本信息", 
			druipart1: "", 
			grouppanel2: "完成任务", 
			druipart2: "", 
			grouppanel3: "计划参与", 
			grouppanel1: "分组面板", 
			formpage1: "基本信息", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "日报标识", 
			srfmajortext: "日报名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			ibz_dailyname: "日报名称", 
			date: "日期", 
			worktoday: "今日工作", 
			planstomorrow: "明日计划", 
			comment: "其他事项", 
			reportto: "汇报给", 
			mailto: "抄送给", 
			todaytask: "完成任务", 
			tomorrowplanstask: "明日计划任务", 
			ibz_dailyid: "日报标识", 
			account: "用户", 
			issubmit: "是否提交", 
		},
		uiactions: {
		},
	},
	dailyedit_form: {
		details: {
			group1: "日报基本信息", 
			formpage1: "基本信息", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "日报标识", 
			srfmajortext: "日报名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			ibz_dailyname: "日报名称", 
			date: "日期", 
			todaytask: "完成任务", 
			worktoday: "今日工作", 
			tomorrowplanstask: "明日计划任务", 
			planstomorrow: "明日计划", 
			comment: "其他事项", 
			files: "附件", 
			reportto: "汇报给", 
			mailto: "抄送给", 
			ibz_dailyid: "日报标识", 
			account: "用户", 
			issubmit: "是否提交", 
		},
		uiactions: {
		},
	},
	dailyinfocalendar_form: {
		details: {
			group1: "日报基本信息", 
			button1: "修改", 
			button2: "提交", 
			druipart1: "", 
			formpage1: "基本信息", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "日报标识", 
			srfmajortext: "日报名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			ibz_dailyname: "", 
			ibz_dailyid: "日报标识", 
			issubmit: "是否提交", 
			worktoday: "今日工作", 
			planstomorrow: "明日计划", 
		},
		uiactions: {
			ibzdaily_edit: "修改",
			ibzdaily_submit: "提交",
		},
	},
	mymain_grid: {
		nodata: "",
		columns: {
			ibz_dailyid: "编号",
			ibz_dailyname: "日报名称",
			account: "用户",
			date: "日期",
			reportto: "汇报给",
			reportstatus: "状态",
		},
		uiactions: {
			ibzdaily_haveread: "已读",
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			ibz_dailyname: "日报名称",
			account: "用户",
			date: "日期",
			reportto: "汇报给",
			uagridcolumn1: "操作",
		},
		uiactions: {
			ibzdaily_edit: "修改",
			ibzdaily_submitcz: "提交",
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
		},
		uiactions: {
		},
	},
	dailyinfocalendareditviewtoolbar_toolbar: {
	},
	dailyinfoeditviewtoolbar_toolbar: {
	},
	dailyeditviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
	dailygridviewtoolbar_toolbar: {
		deuiaction1_createuserdaily: {
			caption: "生成日报",
			tip: "生成日报",
		},
		deuiaction2_create: {
			caption: "新建",
			tip: "新建",
		},
		deuiaction7: {
			caption: "导出",
			tip: "导出",
		},
	},
};