import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    sysupdatelogid: {
		caption: "系统更新日志标识",
		rules: { 
		}
	},
    sysupdatelogname: {
		caption: "更新名称",
		rules: { 
		}
	},
    updateman: {
		caption: "更新人",
		rules: { 
		}
	},
    createman: {
		caption: "建立人",
		rules: { 
		}
	},
    createdate: {
		caption: "建立时间",
		rules: { 
		}
	},
    updatedate: {
		caption: "更新时间",
		rules: { 
		}
	},
    update: {
		caption: "更新日期",
		rules: { 
		}
	},
    updesc: {
		caption: "更新说明",
		rules: { 
		}
	},
    latestupdate: {
		caption: "最新更新",
		rules: { 
		}
	},
    updatefeatures: {
		caption: "更新功能列表详情",
		rules: { 
		}
	},
    updatebranch: {
		caption: "更新平台",
		rules: { 
		}
	},
  },
	views: {
		mobmdview: {
			caption: commonLogic.appcommonhandle("更新日志",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("更新日志",null),
		},
	},
	mobmain_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("功能增强",null), 
			druipart2: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("优化",null), 
			group1: commonLogic.appcommonhandle("系统更新日志基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("系统更新日志标识",null), 
			srfmajortext: commonLogic.appcommonhandle("更新名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			sys_update_logname: commonLogic.appcommonhandle("",null), 
			update: commonLogic.appcommonhandle("",null), 
			updesc: commonLogic.appcommonhandle("",null), 
			sys_update_logid: commonLogic.appcommonhandle("系统更新日志标识",null), 
		},
		uiactions: {
		},
	},
};