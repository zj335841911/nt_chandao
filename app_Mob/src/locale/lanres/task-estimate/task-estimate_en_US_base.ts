import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    account: {
		caption: "用户",
		rules: { 
		}
	},
    left: {
		caption: "预计剩余",
		rules: { 
		}
	},
    consumed: {
		caption: "总计消耗",
		rules: { 
		}
	},
    id: {
		caption: "编号",
		rules: { 
		}
	},
    date: {
		caption: "日期",
		rules: { 
		}
	},
    work: {
		caption: "work",
		rules: { 
		}
	},
    task: {
		caption: "任务",
		rules: { 
		}
	},
    dates: {
		caption: "日期",
		rules: { 
		}
	},
  },
	views: {
		moboptionview: {
			caption: commonLogic.appcommonhandle("任务预计",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("任务预计",null),
		},
		mobmdview9: {
			caption: commonLogic.appcommonhandle("任务预计",null),
		},
	},
	mobmain_form: {
		details: {
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("编号",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			dates: commonLogic.appcommonhandle("日期",null), 
			consumed: commonLogic.appcommonhandle("工时",null), 
			left: commonLogic.appcommonhandle("剩余",null), 
			work: commonLogic.appcommonhandle("备注",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
};