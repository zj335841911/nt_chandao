import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    ibzreportlyid: commonLogic.appcommonhandle("汇报标识",null),
    ibzreportlyname: commonLogic.appcommonhandle("汇报名称",null),
    updateman: commonLogic.appcommonhandle("更新人",null),
    createdate: commonLogic.appcommonhandle("建立时间",null),
    createman: commonLogic.appcommonhandle("建立人",null),
    updatedate: commonLogic.appcommonhandle("更新时间",null),
    content: commonLogic.appcommonhandle("工作内容",null),
    files: commonLogic.appcommonhandle("附件",null),
    reportto: commonLogic.appcommonhandle("汇报给",null),
    mailto: commonLogic.appcommonhandle("抄送给",null),
    date: commonLogic.appcommonhandle("汇报日期",null),
    issubmit: commonLogic.appcommonhandle("是否提交",null),
    submittime: commonLogic.appcommonhandle("提交时间",null),
    account: commonLogic.appcommonhandle("用户",null),
    reportstatus: commonLogic.appcommonhandle("状态",null),
  },
	views: {
		reportlydetaileditview: {
			caption: commonLogic.appcommonhandle("汇报",null),
      		title: commonLogic.appcommonhandle("汇报编辑视图",null),
		},
		maingridview: {
			caption: commonLogic.appcommonhandle("汇报",null),
      		title: commonLogic.appcommonhandle("汇报表格视图",null),
		},
		createeditview: {
			caption: commonLogic.appcommonhandle("汇报",null),
      		title: commonLogic.appcommonhandle("汇报编辑视图",null),
		},
	},
	reportlydetail_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("附件",null), 
			druipart2: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("操作",null), 
			group1: commonLogic.appcommonhandle("汇报基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("汇报标识",null), 
			srfmajortext: commonLogic.appcommonhandle("汇报名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			ibz_reportlyname: commonLogic.appcommonhandle("汇报名称",null), 
			date: commonLogic.appcommonhandle("汇报日期",null), 
			content: commonLogic.appcommonhandle("工作内容",null), 
			reportto: commonLogic.appcommonhandle("汇报给",null), 
			mailto: commonLogic.appcommonhandle("抄送给",null), 
			ibz_reportlyid: commonLogic.appcommonhandle("汇报标识",null), 
			account: commonLogic.appcommonhandle("用户",null), 
			issubmit: commonLogic.appcommonhandle("是否提交",null), 
		},
		uiactions: {
		},
	},
	create_form: {
		details: {
			group1: commonLogic.appcommonhandle("汇报基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("汇报标识",null), 
			srfmajortext: commonLogic.appcommonhandle("汇报名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			ibz_reportlyname: commonLogic.appcommonhandle("汇报名称",null), 
			content: commonLogic.appcommonhandle("工作内容",null), 
			files: commonLogic.appcommonhandle("附件",null), 
			reportto: commonLogic.appcommonhandle("汇报给",null), 
			mailto: commonLogic.appcommonhandle("抄送给",null), 
			ibz_reportlyid: commonLogic.appcommonhandle("汇报标识",null), 
			date: commonLogic.appcommonhandle("汇报日期",null), 
			account: commonLogic.appcommonhandle("用户",null), 
			issubmit: commonLogic.appcommonhandle("是否提交",null), 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			ibz_reportlyid: commonLogic.appcommonhandle("汇报标识",null),
			ibz_reportlyname: commonLogic.appcommonhandle("汇报名称",null),
			reportto: commonLogic.appcommonhandle("汇报给",null),
			date: commonLogic.appcommonhandle("汇报日期",null),
			uagridcolumn1: commonLogic.appcommonhandle("操作",null),
		},
		nodata:commonLogic.appcommonhandle("",null),
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("常规条件",null), 
		},
		uiactions: {
		},
	},
	createeditviewtoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("保存并关闭",null),
			tip: commonLogic.appcommonhandle("保存并关闭",null),
		},
	},
	maingridviewtoolbar_toolbar: {
		deuiaction1_create: {
			caption: commonLogic.appcommonhandle("新建",null),
			tip: commonLogic.appcommonhandle("新建",null),
		},
		deuiaction7: {
			caption: commonLogic.appcommonhandle("导出",null),
			tip: commonLogic.appcommonhandle("导出",null),
		},
	},
};