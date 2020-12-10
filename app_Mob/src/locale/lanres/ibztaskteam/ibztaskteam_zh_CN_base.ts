import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    role: {
		caption: "角色",
		rules: { 
		}
	},
    root: {
		caption: "编号",
		rules: { 
		}
	},
    limited: {
		caption: "受限用户",
		rules: { 
		}
	},
    total: {
		caption: "总计可用",
		rules: { 
		}
	},
    username: {
		caption: "用户",
		rules: { 
		}
	},
    order: {
		caption: "排序",
		rules: { 
		}
	},
    days: {
		caption: "可用工日",
		rules: { 
		}
	},
    type: {
		caption: "团队类型",
		rules: { 
		}
	},
    estimate: {
		caption: "最初预计",
		rules: { 
		}
	},
    account: {
		caption: "用户",
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
    join: {
		caption: "加盟日",
		rules: { 
		}
	},
    hours: {
		caption: "可用工时/天",
		rules: { 
		}
	},
    left: {
		caption: "预计剩余",
		rules: { 
		}
	},
  },
	views: {
		mobeditview9: {
			caption: commonLogic.appcommonhandle("任务团队",null),
		},
		mobmeditview9: {
			caption: commonLogic.appcommonhandle("任务团队",null),
		},
	},
	mobmain_form: {
		details: {
			group1: commonLogic.appcommonhandle("任务团队基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("用户",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			root: commonLogic.appcommonhandle("编号",null), 
			type: commonLogic.appcommonhandle("团队类型",null), 
			account: commonLogic.appcommonhandle("用户",null), 
			estimate: commonLogic.appcommonhandle("最初预计",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobeditview9righttoolbar_toolbar: {
	},
};