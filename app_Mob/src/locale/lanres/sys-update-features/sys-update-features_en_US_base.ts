import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    sysupdatefeaturesname: {
		caption: "系统更新功能名称",
		rules: { 
		}
	},
    sysupdatefeaturesid: {
		caption: "系统更新功能标识",
		rules: { 
		}
	},
    createman: {
		caption: "建立人",
		rules: { 
		}
	},
    updateman: {
		caption: "更新人",
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
    sysupdatelogid: {
		caption: "系统更新日志标识",
		rules: { 
		}
	},
    sysupdatelogname: {
		caption: "所属更新",
		rules: { 
		}
	},
    upfeatures: {
		caption: "更新功能",
		rules: { 
		}
	},
    featuresdesc: {
		caption: "功能描述",
		rules: { 
		}
	},
    type: {
		caption: "更新类型",
		rules: { 
		}
	},
    displayorder: {
		caption: "展示顺序",
		rules: { 
		}
	},
  },
	views: {
		ymobmdview9: {
			caption: commonLogic.appcommonhandle("优化",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("功能增强",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("系统更新功能",null),
		},
		mobmdview9: {
			caption: commonLogic.appcommonhandle("功能增强",null),
		},
	},
	mobmain_form: {
		details: {
			group1: commonLogic.appcommonhandle("系统更新功能基本信息",null), 
			group2: commonLogic.appcommonhandle("操作信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("系统更新功能标识",null), 
			srfmajortext: commonLogic.appcommonhandle("系统更新功能名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			sys_update_featuresname: commonLogic.appcommonhandle("系统更新功能名称",null), 
			createman: commonLogic.appcommonhandle("建立人",null), 
			createdate: commonLogic.appcommonhandle("建立时间",null), 
			updateman: commonLogic.appcommonhandle("更新人",null), 
			updatedate: commonLogic.appcommonhandle("更新时间",null), 
			sys_update_featuresid: commonLogic.appcommonhandle("系统更新功能标识",null), 
		},
		uiactions: {
		},
	},
	mobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("Save And Close",null),
			tip: 'tbitem1',
		},
	},
};