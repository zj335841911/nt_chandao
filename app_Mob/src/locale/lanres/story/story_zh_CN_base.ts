import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    assignedto: {
		caption: "指派给",
		rules: { 
		}
	},
    childstories: {
		caption: "细分需求",
		rules: { 
		}
	},
    plan: {
		caption: "所属计划",
		rules: { 
		}
	},
    version: {
		caption: "版本号",
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
    linkstories: {
		caption: "相关需求",
		rules: { 
		}
	},
    status: {
		caption: "当前状态",
		rules: { 
		}
	},
    estimate: {
		caption: "预计工时",
		rules: { 
		}
	},
    revieweddate: {
		caption: "评审时间",
		rules: { 
		}
	},
    title: {
		caption: "需求名称",
		rules: { 
		}
	},
    sourcenote: {
		caption: "来源备注",
		rules: { 
		}
	},
    reviewedby: {
		caption: "由谁评审",
		rules: { 
		}
	},
    substatus: {
		caption: "子状态",
		rules: { 
		}
	},
    stagedby: {
		caption: "设置阶段者",
		rules: { 
		}
	},
    openedby: {
		caption: "由谁创建",
		rules: { 
		}
	},
    openeddate: {
		caption: "创建日期",
		rules: { 
		}
	},
    id: {
		caption: "编号",
		rules: { 
		}
	},
    source: {
		caption: "需求来源",
		rules: { 
		}
	},
    closedreason: {
		caption: "关闭原因",
		rules: { 
		}
	},
    color: {
		caption: "标题颜色",
		rules: { 
		}
	},
    mailto: {
		caption: "抄送给",
		rules: { 
		}
	},
    deleted: {
		caption: "已删除",
		rules: { 
		}
	},
    keywords: {
		caption: "关键词",
		rules: { 
		}
	},
    lasteditedby: {
		caption: "最后修改",
		rules: { 
		}
	},
    stage: {
		caption: "所处阶段",
		rules: { 
		}
	},
    closeddate: {
		caption: "关闭日期	",
		rules: { 
		}
	},
    closedby: {
		caption: "由谁关闭",
		rules: { 
		}
	},
    type: {
		caption: "需求类型",
		rules: { 
		}
	},
    lastediteddate: {
		caption: "最后修改日期",
		rules: { 
		}
	},
    path: {
		caption: "模块路径",
		rules: { 
		}
	},
    parentname: {
		caption: "父需求名称",
		rules: { 
		}
	},
    modulename: {
		caption: "所属模块名称",
		rules: { 
		}
	},
    productname: {
		caption: "产品名称",
		rules: { 
		}
	},
    frombug: {
		caption: "来源Bug",
		rules: { 
		}
	},
    parent: {
		caption: "父需求",
		rules: { 
		}
	},
    module: {
		caption: "所属模块",
		rules: { 
		}
	},
    product: {
		caption: "所属产品",
		rules: { 
		}
	},
    duplicatestory: {
		caption: "重复需求ID",
		rules: { 
		}
	},
    branch: {
		caption: "平台/分支",
		rules: { 
		}
	},
    tobug: {
		caption: "转Bug",
		rules: { 
		}
	},
    spec: {
		caption: "需求描述",
		rules: { 
		}
	},
    verify: {
		caption: "验收标准",
		rules: { 
		}
	},
    result: {
		caption: "评审结果",
		rules: { 
		}
	},
    comment: {
		caption: "备注",
		rules: { 
		}
	},
    isleaf: {
		caption: "是否子需求",
		rules: { 
		}
	},
    files: {
		caption: "附件",
		rules: { 
		}
	},
    branchname: {
		caption: "平台/分支",
		rules: { 
		}
	},
    versionc: {
		caption: "版本号",
		rules: { 
		}
	},
    modulename1: {
		caption: "所属模块名称",
		rules: { 
		}
	},
    project: {
		caption: "项目",
		rules: { 
		}
	},
    preversion: {
		caption: "之前的版本",
		rules: { 
		}
	},
    neednotreview: {
		caption: "不需要评审",
		rules: { 
		}
	},
    isfavorites: {
		caption: "是否收藏",
		rules: { 
		}
	},
    ischild: {
		caption: "是否可以细分",
		rules: { 
		}
	},
    mailtoconact: {
		caption: "联系人",
		rules: { 
		}
	},
    mailtopk: {
		caption: "抄送给",
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
    ibiz_sourceobject: {
		caption: "来源对象",
		rules: { 
		}
	},
    sourceobject: {
		caption: "来源对象",
		rules: { 
		}
	},
    ibiz_id: {
		caption: "IBIZ标识",
		rules: { 
		}
	},
    sourcename: {
		caption: "来源对象名称",
		rules: { 
		}
	},
    sourceid: {
		caption: "来源对象标识",
		rules: { 
		}
	},
    ibiz_sourceid: {
		caption: "来源对象标识",
		rules: { 
		}
	},
    ibiz_sourcename: {
		caption: "来源对象名称",
		rules: { 
		}
	},
    storypoints: {
		caption: "故事点",
		rules: { 
		}
	},
  },
	views: {
		newmobeditview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		moblistview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		mobmdview9: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		usr2mobmdview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		editmobeditview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		rmoboptionview: {
			caption: commonLogic.appcommonhandle("评审",null),
		},
		mobmdviewcurproject: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		linkstorymobmpickupview: {
			caption: commonLogic.appcommonhandle("管理需求",null),
		},
		usr2mobmpickupbuildview: {
			caption: commonLogic.appcommonhandle("关联需求",null),
		},
		logmobmdview9: {
			caption: commonLogic.appcommonhandle("更新日志",null),
		},
		usr3mobmdview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		favoritemoremobmdview: {
			caption: commonLogic.appcommonhandle("我收藏的需求",null),
		},
		asmoboptionview: {
			caption: commonLogic.appcommonhandle("指派",null),
		},
		assmobmdview9: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		usr2mobmpickupview: {
			caption: commonLogic.appcommonhandle("关联需求",null),
		},
		favoritemobmdview9: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		usr2mobmdview_5219: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		cmoboptionview: {
			caption: commonLogic.appcommonhandle("关闭",null),
		},
		usr4mobmdview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		assmobmdview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		acmoboptionview: {
			caption: commonLogic.appcommonhandle("激活",null),
		},
		usr2mobpickupmdview: {
			caption: commonLogic.appcommonhandle("关联需求",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		assmoremobmdview: {
			caption: commonLogic.appcommonhandle("指派给我的需求",null),
		},
		favoritemobmdview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		changemoboptionview: {
			caption: commonLogic.appcommonhandle("变更",null),
		},
		linkstorymobpickupmdview: {
			caption: commonLogic.appcommonhandle("关联需求",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
		usr2mobpickupmdbuildview: {
			caption: commonLogic.appcommonhandle("关联需求",null),
		},
		mobpickupview: {
			caption: commonLogic.appcommonhandle("需求",null),
		},
	},
	mobnewform_form: {
		details: {
			group1: commonLogic.appcommonhandle("需求基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("最后修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("需求名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			product: commonLogic.appcommonhandle("所属产品",null), 
			module: commonLogic.appcommonhandle("所属模块",null), 
			prodoctname: commonLogic.appcommonhandle("所属产品",null), 
			branch: commonLogic.appcommonhandle("平台/分支",null), 
			modulename: commonLogic.appcommonhandle("所属模块",null), 
			plan: commonLogic.appcommonhandle("计划",null), 
			source: commonLogic.appcommonhandle("需求来源",null), 
			sourcenote: commonLogic.appcommonhandle("来源备注",null), 
			reviewedby: commonLogic.appcommonhandle("由谁评审",null), 
			assignedtopk: commonLogic.appcommonhandle("由谁评审",null), 
			neednotreview: commonLogic.appcommonhandle("",null), 
			title: commonLogic.appcommonhandle("需求名称",null), 
			pri: commonLogic.appcommonhandle("优先级",null), 
			storypoints: commonLogic.appcommonhandle("故事点",null), 
			estimate: commonLogic.appcommonhandle("预计",null), 
			spec: commonLogic.appcommonhandle("需求描述",null), 
			verify: commonLogic.appcommonhandle("验收标准",null), 
			mailto: commonLogic.appcommonhandle("抄送给",null), 
			mailtopk: commonLogic.appcommonhandle("抄送给",null), 
			keywords: commonLogic.appcommonhandle("关键词",null), 
			id: commonLogic.appcommonhandle("编号",null), 
			assignedto: commonLogic.appcommonhandle("指派给",null), 
		},
		uiactions: {
		},
	},
	mobmain_form: {
		details: {
			druipart2: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("附件",null), 
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("历史记录",null), 
			group1: commonLogic.appcommonhandle("需求基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("最后修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("需求名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			prodoctname: commonLogic.appcommonhandle("产品名称",null), 
			branch: commonLogic.appcommonhandle("平台/分支",null), 
			product: commonLogic.appcommonhandle("所属产品",null), 
			branchname: commonLogic.appcommonhandle("平台/分支",null), 
			modulename1: commonLogic.appcommonhandle("所属模块名称",null), 
			version: commonLogic.appcommonhandle("版本号",null), 
			title: commonLogic.appcommonhandle("需求名称",null), 
			type: commonLogic.appcommonhandle("需求类型",null), 
			pri: commonLogic.appcommonhandle("优先级",null), 
			storypoints: commonLogic.appcommonhandle("故事点",null), 
			status: commonLogic.appcommonhandle("当前状态",null), 
			assignedto: commonLogic.appcommonhandle("指派给",null), 
			assigneddate: commonLogic.appcommonhandle("指派日期",null), 
			source: commonLogic.appcommonhandle("需求来源",null), 
			sourcenote: commonLogic.appcommonhandle("来源备注",null), 
			stage: commonLogic.appcommonhandle("所处阶段",null), 
			closedby: commonLogic.appcommonhandle("由谁关闭",null), 
			closeddate: commonLogic.appcommonhandle("关闭日期	",null), 
			closedreason: commonLogic.appcommonhandle("关闭原因",null), 
			spec: commonLogic.appcommonhandle("需求描述",null), 
			verify: commonLogic.appcommonhandle("验收标准",null), 
			mailto: commonLogic.appcommonhandle("抄送给",null), 
			mailtopk: commonLogic.appcommonhandle("抄送给",null), 
			keywords: commonLogic.appcommonhandle("关键词",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobchageform_form: {
		details: {
			grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("历史记录",null), 
			group1: commonLogic.appcommonhandle("需求描述信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("最后修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("需求名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			id: commonLogic.appcommonhandle("编号",null), 
			status: commonLogic.appcommonhandle("当前状态",null), 
			version: commonLogic.appcommonhandle("版本#",null), 
			assignedtopk: commonLogic.appcommonhandle("由谁评审",null), 
			reviewedby: commonLogic.appcommonhandle("由谁评审",null), 
			neednotreview: commonLogic.appcommonhandle("需要评审",null), 
			title: commonLogic.appcommonhandle("需求名称",null), 
			spec: commonLogic.appcommonhandle("需求描述",null), 
			verify: commonLogic.appcommonhandle("验收标准",null), 
			comment: commonLogic.appcommonhandle("备注",null), 
			files: commonLogic.appcommonhandle("附件",null), 
			assignedto: commonLogic.appcommonhandle("指派给",null), 
		},
		uiactions: {
		},
	},
	assigntomob_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
			group1: commonLogic.appcommonhandle("需求描述信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("最后修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("需求名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			assignedto: commonLogic.appcommonhandle("指派给",null), 
			assignedtopk: commonLogic.appcommonhandle("指派给",null), 
			comment: commonLogic.appcommonhandle("备注",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	reviewmob_form: {
		details: {
			grouppanel2: commonLogic.appcommonhandle("评审通过",null), 
			grouppanel3: commonLogic.appcommonhandle("拒绝",null), 
			grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
			druipart1: commonLogic.appcommonhandle("",null), 
			group1: commonLogic.appcommonhandle("需求基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("最后修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("需求名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			title: commonLogic.appcommonhandle("需求名称",null), 
			revieweddate: commonLogic.appcommonhandle("评审时间",null), 
			result: commonLogic.appcommonhandle("评审结果",null), 
			pri: commonLogic.appcommonhandle("优先级",null), 
			estimate: commonLogic.appcommonhandle("预计工时",null), 
			preversion: commonLogic.appcommonhandle("之前版本",null), 
			closedreason: commonLogic.appcommonhandle("拒绝原因",null), 
			assignedtopk: commonLogic.appcommonhandle("指派给",null), 
			version: commonLogic.appcommonhandle("版本号",null), 
			reviewedby: commonLogic.appcommonhandle("由谁评审",null), 
			comment: commonLogic.appcommonhandle("备注",null), 
			id: commonLogic.appcommonhandle("编号",null), 
			assignedto: commonLogic.appcommonhandle("指派给",null), 
		},
		uiactions: {
		},
	},
	closemob_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
			group1: commonLogic.appcommonhandle("需求描述信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("最后修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("需求名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			closedreason: commonLogic.appcommonhandle("关闭原因",null), 
			comment: commonLogic.appcommonhandle("备注",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobmainedit_form: {
		details: {
			group1: commonLogic.appcommonhandle("需求基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("最后修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("需求名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			title: commonLogic.appcommonhandle("需求名称",null), 
			product: commonLogic.appcommonhandle("所属产品",null), 
			module: commonLogic.appcommonhandle("所属模块",null), 
			prodoctname: commonLogic.appcommonhandle("所属产品",null), 
			branch: commonLogic.appcommonhandle("平台/分支",null), 
			modulename: commonLogic.appcommonhandle("所属模块",null), 
			plan: commonLogic.appcommonhandle("计划",null), 
			source: commonLogic.appcommonhandle("需求来源",null), 
			sourcenote: commonLogic.appcommonhandle("来源备注",null), 
			reviewedby: commonLogic.appcommonhandle("由谁评审",null), 
			assignedtopk: commonLogic.appcommonhandle("由谁评审",null), 
			neednotreview: commonLogic.appcommonhandle("",null), 
			pri: commonLogic.appcommonhandle("优先级",null), 
			storypoints: commonLogic.appcommonhandle("故事点",null), 
			estimate: commonLogic.appcommonhandle("预计",null), 
			spec: commonLogic.appcommonhandle("需求描述",null), 
			verify: commonLogic.appcommonhandle("验收标准",null), 
			mailto: commonLogic.appcommonhandle("抄送给",null), 
			mailtopk: commonLogic.appcommonhandle("抄送给",null), 
			keywords: commonLogic.appcommonhandle("关键词",null), 
			id: commonLogic.appcommonhandle("编号",null), 
			assignedto: commonLogic.appcommonhandle("指派给",null), 
		},
		uiactions: {
		},
	},
	activitemob_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("历史记录",null), 
			group1: commonLogic.appcommonhandle("需求描述信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("最后修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("需求名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			assignedtopk: commonLogic.appcommonhandle("指派给",null), 
			comment: commonLogic.appcommonhandle("备注",null), 
			id: commonLogic.appcommonhandle("编号",null), 
			assignedto: commonLogic.appcommonhandle("指派给",null), 
		},
		uiactions: {
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("常规条件",null), 
			n_title_like: commonLogic.appcommonhandle("需求名",null), 
			n_status_eq: commonLogic.appcommonhandle("当前状态",null), 
			n_type_eq: commonLogic.appcommonhandle("需求类型",null), 
		},
		uiactions: {
		},
	},
	newmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("保存",null),
			tip: '保存',
		},
	},
	usr3mobmdviewrighttoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("关联需求",null),
			tip: '关联需求',
		},
	},
	editmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("保存",null),
			tip: '保存',
		},
	},
	mobeditviewrighttoolbar_toolbar: {
		deuiaction1_changestorydetailmob: {
			caption: commonLogic.appcommonhandle("变更",null),
			tip: '变更',
		},
		deuiaction1_assigntomob: {
			caption: commonLogic.appcommonhandle("指派",null),
			tip: '指派',
		},
		deuiaction1_reviewstorymob: {
			caption: commonLogic.appcommonhandle("评审",null),
			tip: '评审',
		},
		deuiaction1_closestorymob: {
			caption: commonLogic.appcommonhandle("关闭",null),
			tip: '关闭',
		},
		deuiaction1_openbaseinfoeditviewmob: {
			caption: commonLogic.appcommonhandle("编辑",null),
			tip: '编辑',
		},
		deuiaction1_deletemob: {
			caption: commonLogic.appcommonhandle("删除",null),
			tip: '删除',
		},
	},
	mobmdviewrighttoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("新建需求",null),
			tip: '新建需求',
		},
	},
	usr2mobmdview_5219righttoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("关联需求",null),
			tip: '关联需求',
		},
	},
	usr4mobmdviewrighttoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("关联需求",null),
			tip: '关联需求',
		},
	},
	mobmdviewcurprojectrighttoolbar_toolbar: {
	},
	usr2mobmdviewrighttoolbar_toolbar: {
	},
};