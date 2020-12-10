import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    lastediteddate: {
		caption: "修改日期",
		rules: { 
		}
	},
    scripteddate: {
		caption: "scriptedDate",
		rules: { 
		}
	},
    color: {
		caption: "标题颜色",
		rules: { 
		}
	},
    path: {
		caption: "path",
		rules: { 
		}
	},
    openeddate: {
		caption: "创建日期",
		rules: { 
		}
	},
    lastrunresult: {
		caption: "结果",
		rules: { 
		}
	},
    linkcase: {
		caption: "相关用例",
		rules: { 
		}
	},
    order: {
		caption: "排序",
		rules: { 
		}
	},
    howrun: {
		caption: "howRun",
		rules: { 
		}
	},
    version: {
		caption: "用例版本",
		rules: { 
		}
	},
    scriptedby: {
		caption: "scriptedBy",
		rules: { 
		}
	},
    openedby: {
		caption: "由谁创建",
		rules: { 
		}
	},
    type: {
		caption: "用例类型",
		rules: { 
		}
	},
    status: {
		caption: "用例状态",
		rules: { 
		}
	},
    auto: {
		caption: "auto",
		rules: { 
		}
	},
    frequency: {
		caption: "frequency",
		rules: { 
		}
	},
    title: {
		caption: "用例标题",
		rules: { 
		}
	},
    lasteditedby: {
		caption: "最后修改者",
		rules: { 
		}
	},
    reviewedby: {
		caption: "由谁评审",
		rules: { 
		}
	},
    deleted: {
		caption: "已删除",
		rules: { 
		}
	},
    revieweddate: {
		caption: "评审时间",
		rules: { 
		}
	},
    pri: {
		caption: "优先级",
		rules: { 
		}
	},
    stage: {
		caption: "适用阶段",
		rules: { 
		}
	},
    scriptlocation: {
		caption: "scriptLocation",
		rules: { 
		}
	},
    lastrundate: {
		caption: "执行时间",
		rules: { 
		}
	},
    keywords: {
		caption: "关键词",
		rules: { 
		}
	},
    scriptstatus: {
		caption: "scriptStatus",
		rules: { 
		}
	},
    frame: {
		caption: "工具/框架",
		rules: { 
		}
	},
    substatus: {
		caption: "子状态",
		rules: { 
		}
	},
    id: {
		caption: "用例编号",
		rules: { 
		}
	},
    precondition: {
		caption: "前置条件",
		rules: { 
		}
	},
    lastrunner: {
		caption: "执行人",
		rules: { 
		}
	},
    fromcaseversion: {
		caption: "来源用例版本",
		rules: { 
		}
	},
    storyversion: {
		caption: "需求版本",
		rules: { 
		}
	},
    fromcaseid: {
		caption: "来源用例",
		rules: { 
		}
	},
    branch: {
		caption: "平台/分支",
		rules: { 
		}
	},
    frombug: {
		caption: "来源Bug",
		rules: { 
		}
	},
    story: {
		caption: "相关需求",
		rules: { 
		}
	},
    product: {
		caption: "所属产品",
		rules: { 
		}
	},
    lib: {
		caption: "所属库",
		rules: { 
		}
	},
    module: {
		caption: "所属模块",
		rules: { 
		}
	},
    modulename: {
		caption: "模块名称",
		rules: { 
		}
	},
    storyname: {
		caption: "需求名称",
		rules: { 
		}
	},
    productname: {
		caption: "产品名称",
		rules: { 
		}
	},
    casesteps: {
		caption: "用例步骤集合",
		rules: { 
		}
	},
    tobugcnt: {
		caption: "转bug数",
		rules: { 
		}
	},
    resultcnt: {
		caption: "测试结果数",
		rules: { 
		}
	},
    stepcnt: {
		caption: "用例步骤数",
		rules: { 
		}
	},
    comment: {
		caption: "备注",
		rules: { 
		}
	},
    resultfalicnt: {
		caption: "测试失败数",
		rules: { 
		}
	},
    status1: {
		caption: "用例状态",
		rules: { 
		}
	},
    assignedto: {
		caption: "指派给",
		rules: { 
		}
	},
    task: {
		caption: "属性",
		rules: { 
		}
	},
    libname: {
		caption: "用例库",
		rules: { 
		}
	},
    lastrunresult1: {
		caption: "测试用例结果",
		rules: { 
		}
	},
    isfavorites: {
		caption: "是否收藏",
		rules: { 
		}
	},
    modulename1: {
		caption: "模块名称",
		rules: { 
		}
	},
    files: {
		caption: "附件",
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
		mobmdview_testtask: {
			caption: commonLogic.appcommonhandle("测试用例",null),
		},
		mobmdview_testsuite: {
			caption: commonLogic.appcommonhandle("测试用例",null),
		},
		usr2mobmpickupview: {
			caption: commonLogic.appcommonhandle("关联用例",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("测试用例",null),
		},
		usr2mobpickupmdview: {
			caption: commonLogic.appcommonhandle("关联用例",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("测试用例",null),
		},
	},
	mobmain_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			druipart2: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("历史记录",null), 
			group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("用例编号",null), 
			srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			title: commonLogic.appcommonhandle("用例标题",null), 
			type: commonLogic.appcommonhandle("用例类型",null), 
			stage: commonLogic.appcommonhandle("适用阶段",null), 
			precondition: commonLogic.appcommonhandle("前置条件",null), 
			id: commonLogic.appcommonhandle("用例编号",null), 
			version: commonLogic.appcommonhandle("用例版本",null), 
			keywords: commonLogic.appcommonhandle("关键词",null), 
		},
		uiactions: {
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("常规条件",null), 
			n_title_like: commonLogic.appcommonhandle("用例标题",null), 
			n_type_eq: commonLogic.appcommonhandle("用例类型",null), 
			n_status_eq: commonLogic.appcommonhandle("用例状态",null), 
			n_modulename_eq: commonLogic.appcommonhandle("模块名称",null), 
		},
		uiactions: {
		},
	},
	mobmdview_testtaskrighttoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("关联需求",null),
			tip: '关联需求',
		},
	},
	mobeditviewrighttoolbar_toolbar: {
	},
	mobmdviewrighttoolbar_toolbar: {
	},
	mobmdview_testsuiterighttoolbar_toolbar: {
	},
};