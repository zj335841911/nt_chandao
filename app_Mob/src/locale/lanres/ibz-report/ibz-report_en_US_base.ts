import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    updateDate: "更新时间",
    worktoday: "工作",
    todaytask: "完成任务",
    tomorrowplanstask: "计划任务",
    createMan: "建立人",
    reportto: "汇报给",
    createDate: "建立时间",
    date: "日期",
    issubmit: "是否提交",
    updateManName: "更新人名称",
    files: "附件",
    updateMan: "更新人",
    reportstatus: "状态",
    comment: "其他事项",
    mailto: "抄送给",
    ibzDailyId: "汇报标识",
    planstomorrow: "计划",
    account: "用户",
    createManName: "建立人名称",
    ibzDailyName: "汇报名称",
    type: "类型",
    dailycnt: "未读日报数",
    monthlyCnt: "未读月报数",
    submittime: "提交时间",
  },
	views: {
		mobmdview: {
			caption: 'commonLogic.appcommonhandle("我提交的",null)',
		},
		myremobmdview: {
			caption: 'commonLogic.appcommonhandle("我收到的",null)',
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: 'commonLogic.appcommonhandle("常规条件",null)', 
			n_type_eq: 'commonLogic.appcommonhandle("模板",null)', 
		},
		uiactions: {
		},
	},
};