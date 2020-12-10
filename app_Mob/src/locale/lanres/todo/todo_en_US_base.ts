import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    id: {
		caption: "编号",
		rules: { 
		}
	},
    account: {
		caption: "所有者",
		rules: { 
		}
	},
    closeddate: {
		caption: "关闭时间",
		rules: { 
		}
	},
    closedby: {
		caption: "由谁关闭",
		rules: { 
		}
	},
    type: {
		caption: "类型",
		rules: { 
		}
	},
    end: {
		caption: "结束",
		rules: { 
		}
	},
    desc: {
		caption: "描述",
		rules: { 
		}
	},
    finishedby: {
		caption: "由谁完成",
		rules: { 
		}
	},
    begin: {
		caption: "开始",
		rules: { 
		}
	},
    idvalue: {
		caption: "关联编号",
		rules: { 
		}
	},
    assignedby: {
		caption: "由谁指派",
		rules: { 
		}
	},
    finisheddate: {
		caption: "完成时间",
		rules: { 
		}
	},
    cycle: {
		caption: "周期",
		rules: { 
		}
	},
    assignedto: {
		caption: "指派给",
		rules: { 
		}
	},
    status: {
		caption: "状态",
		rules: { 
		}
	},
    name: {
		caption: "待办名称",
		rules: { 
		}
	},
    assigneddate: {
		caption: "指派日期",
		rules: { 
		}
	},
    pri: {
		caption: "优先级",
		rules: { 
		}
	},
    date: {
		caption: "日期",
		rules: { 
		}
	},
    ibizprivate: {
		caption: "私人事务",
		rules: { 
		}
	},
    config: {
		caption: "config",
		rules: { 
		}
	},
    config_day: {
		caption: "间隔天数",
		rules: { 
		}
	},
    config_beforedays: {
		caption: "提前",
		rules: { 
		}
	},
    config_week: {
		caption: "周期设置周几",
		rules: { 
		}
	},
    config_month: {
		caption: "周期设置月",
		rules: { 
		}
	},
    config_type: {
		caption: "周期类型",
		rules: { 
		}
	},
    config_end: {
		caption: "过期时间",
		rules: { 
		}
	},
    bug: {
		caption: "待办名称",
		rules: { 
		}
	},
    task: {
		caption: "待办名称",
		rules: { 
		}
	},
    story: {
		caption: "待办名称",
		rules: { 
		}
	},
    date1: {
		caption: "日期",
		rules: { 
		}
	},
    date_disable: {
		caption: "待定",
		rules: { 
		}
	},
    assignedtopk: {
		caption: "指派给（选择）",
		rules: { 
		}
	},
    noticeusers: {
		caption: "消息通知用户",
		rules: { 
		}
	},
  },
	views: {
		newmobeditview: {
			caption: commonLogic.appcommonhandle("快速新建",null),
		},
		moblistview: {
			caption: commonLogic.appcommonhandle("待办",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("我的待办",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("待办",null),
		},
		moboptionview: {
			caption: commonLogic.appcommonhandle("待办",null),
		},
	},
	mobnew_form: {
		details: {
			group1: commonLogic.appcommonhandle("待办事宜表基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			name: commonLogic.appcommonhandle("待办名称",null), 
			pri: commonLogic.appcommonhandle("优先级",null), 
			date: commonLogic.appcommonhandle("日期",null), 
			begin: commonLogic.appcommonhandle("开始",null), 
			end: commonLogic.appcommonhandle("结束",null), 
			type: commonLogic.appcommonhandle("类型",null), 
			private: commonLogic.appcommonhandle("私人事务",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	assmob_form: {
		details: {
			group1: commonLogic.appcommonhandle("指派给",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			assignedto: commonLogic.appcommonhandle("指派给",null), 
			assignedtopk: commonLogic.appcommonhandle("指派给",null), 
			date: commonLogic.appcommonhandle("日期",null), 
			begin: commonLogic.appcommonhandle("开始时间",null), 
			end: commonLogic.appcommonhandle("结束时间",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobmain_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("历史记录",null), 
			group1: commonLogic.appcommonhandle("待办事宜表基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			name: commonLogic.appcommonhandle("待办名称",null), 
			pri: commonLogic.appcommonhandle("优先级",null), 
			date1: commonLogic.appcommonhandle("日期",null), 
			begin: commonLogic.appcommonhandle("开始",null), 
			end: commonLogic.appcommonhandle("结束",null), 
			type: commonLogic.appcommonhandle("类型",null), 
			status: commonLogic.appcommonhandle("状态",null), 
			assignedby: commonLogic.appcommonhandle("由谁指派",null), 
			assigneddate: commonLogic.appcommonhandle("指派日期",null), 
			assignedto: commonLogic.appcommonhandle("指派给",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	newmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("Save And Close",null),
			tip: 'tbitem1',
		},
	},
	mobmdviewrighttoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("新建",null),
			tip: 'deuiaction1',
		},
	},
	mobeditviewrighttoolbar_toolbar: {
	},
	moblistviewrighttoolbar_toolbar: {
	},
};