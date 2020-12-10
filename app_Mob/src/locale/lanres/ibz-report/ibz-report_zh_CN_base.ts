import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    updatedate: {
		caption: "更新时间",
		rules: { 
		}
	},
    worktoday: {
		caption: "工作",
		rules: { 
		}
	},
    todaytask: {
		caption: "完成任务",
		rules: { 
		}
	},
    tomorrowplanstask: {
		caption: "计划任务",
		rules: { 
		}
	},
    createman: {
		caption: "建立人",
		rules: { 
		}
	},
    reportto: {
		caption: "汇报给",
		rules: { 
		}
	},
    createdate: {
		caption: "建立时间",
		rules: { 
		}
	},
    date: {
		caption: "日期",
		rules: { 
		}
	},
    issubmit: {
		caption: "是否提交",
		rules: { 
		}
	},
    updatemanname: {
		caption: "更新人名称",
		rules: { 
		}
	},
    files: {
		caption: "附件",
		rules: { 
		}
	},
    updateman: {
		caption: "更新人",
		rules: { 
		}
	},
    reportstatus: {
		caption: "状态",
		rules: { 
		}
	},
    comment: {
		caption: "其他事项",
		rules: { 
		}
	},
    mailto: {
		caption: "抄送给",
		rules: { 
		}
	},
    ibzdailyid: {
		caption: "汇报标识",
		rules: { 
		}
	},
    planstomorrow: {
		caption: "计划",
		rules: { 
		}
	},
    account: {
		caption: "用户",
		rules: { 
		}
	},
    createmanname: {
		caption: "建立人名称",
		rules: { 
		}
	},
    ibzdailyname: {
		caption: "汇报名称",
		rules: { 
		}
	},
    type: {
		caption: "类型",
		rules: { 
		}
	},
    dailycnt: {
		caption: "未读日报数",
		rules: { 
		}
	},
    monthlycnt: {
		caption: "未读月报数",
		rules: { 
		}
	},
    submittime: {
		caption: "提交时间",
		rules: { 
		}
	},
    reportlycnt: {
		caption: "未读汇报数",
		rules: { 
		}
	},
  },
	views: {
		mobmdview: {
			caption: commonLogic.appcommonhandle("我提交的",null),
		},
		myremobmdview: {
			caption: commonLogic.appcommonhandle("我收到的",null),
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("常规条件",null), 
			n_type_eq: commonLogic.appcommonhandle("模板",null), 
		},
		uiactions: {
		},
	},
};