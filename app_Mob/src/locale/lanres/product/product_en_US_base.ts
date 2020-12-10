import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    qd: {
		caption: "测试负责人",
		rules: { 
		}
	},
    acl: {
		caption: "访问控制",
		rules: { 
		}
	},
    name: {
		caption: "产品名称",
		rules: { 
		}
	},
    id: {
		caption: "编号",
		rules: { 
		}
	},
    deleted: {
		caption: "已删除",
		rules: { 
		}
	},
    whitelist: {
		caption: "分组白名单",
		rules: { 
		}
	},
    rd: {
		caption: "发布负责人",
		rules: { 
		}
	},
    order: {
		caption: "排序",
		rules: { 
		}
	},
    type: {
		caption: "产品类型",
		rules: { 
		}
	},
    po: {
		caption: "产品负责人",
		rules: { 
		}
	},
    desc: {
		caption: "产品描述	",
		rules: { 
		}
	},
    status: {
		caption: "状态",
		rules: { 
		}
	},
    createdby: {
		caption: "由谁创建",
		rules: { 
		}
	},
    createdversion: {
		caption: "当前系统版本",
		rules: { 
		}
	},
    substatus: {
		caption: "子状态",
		rules: { 
		}
	},
    code: {
		caption: "产品代号",
		rules: { 
		}
	},
    createddate: {
		caption: "创建日期",
		rules: { 
		}
	},
    linename: {
		caption: "产品线",
		rules: { 
		}
	},
    line: {
		caption: "产品线",
		rules: { 
		}
	},
    activebugcnt: {
		caption: "未解决Bug数",
		rules: { 
		}
	},
    productplancnt: {
		caption: "计划总数",
		rules: { 
		}
	},
    releasecnt: {
		caption: "发布总数",
		rules: { 
		}
	},
    activestorycnt: {
		caption: "激活需求数",
		rules: { 
		}
	},
    unconfirmbugcnt: {
		caption: "未确认Bug数",
		rules: { 
		}
	},
    notclosedbugcnt: {
		caption: "未关闭Bug数",
		rules: { 
		}
	},
    comment: {
		caption: "备注",
		rules: { 
		}
	},
    relatedbugcnt: {
		caption: "相关Bug数",
		rules: { 
		}
	},
    changedstorycnt: {
		caption: "已变更需求",
		rules: { 
		}
	},
    draftstorycnt: {
		caption: "草稿需求",
		rules: { 
		}
	},
    closedstorycnt: {
		caption: "已关闭需求",
		rules: { 
		}
	},
    relatedprojects: {
		caption: "关联项目数",
		rules: { 
		}
	},
    doccnt: {
		caption: "文档数",
		rules: { 
		}
	},
    buildcnt: {
		caption: "BUILD数",
		rules: { 
		}
	},
    casecnt: {
		caption: "用例数",
		rules: { 
		}
	},
    srfcount: {
		caption: "属性",
		rules: { 
		}
	},
    mobimage: {
		caption: "移动端图片",
		rules: { 
		}
	},
    order1: {
		caption: "排序",
		rules: { 
		}
	},
    istop: {
		caption: "是否置顶",
		rules: { 
		}
	},
    testtaskcnt: {
		caption: "测试单数",
		rules: { 
		}
	},
    testsuitecnt: {
		caption: "套件数",
		rules: { 
		}
	},
    popk: {
		caption: "产品负责人（选择）",
		rules: { 
		}
	},
    qdpk: {
		caption: "测试负责人（选择）",
		rules: { 
		}
	},
    rdpk: {
		caption: "发布负责人（选择）",
		rules: { 
		}
	},
    noticeusers: {
		caption: "消息通知用户",
		rules: { 
		}
	},
    orgid: {
		caption: "组织标识",
		rules: { 
		}
	},
    mdeptid: {
		caption: "部门标识",
		rules: { 
		}
	},
    ibiz_id: {
		caption: "IBIZ标识",
		rules: { 
		}
	},
  },
	views: {
		prodmobtabexpview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		mobchartview9: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		mobtabexpview: {
			caption: commonLogic.appcommonhandle("测试",null),
		},
		mobpickupview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		testmobmdview: {
			caption: commonLogic.appcommonhandle("测试",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		mobchartview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		closemobeditview: {
			caption: commonLogic.appcommonhandle("关闭产品",null),
		},
		newmobeditview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
	},
	mobmain_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("历史记录",null), 
			group1: commonLogic.appcommonhandle("产品基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("产品名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			name: commonLogic.appcommonhandle("产品名称",null), 
			status: commonLogic.appcommonhandle("状态",null), 
			type: commonLogic.appcommonhandle("产品类型",null), 
			po: commonLogic.appcommonhandle("产品负责人",null), 
			qd: commonLogic.appcommonhandle("测试负责人",null), 
			rd: commonLogic.appcommonhandle("发布负责人",null), 
			productplancnt: commonLogic.appcommonhandle("计划总数",null), 
			activestorycnt: commonLogic.appcommonhandle("激活需求数",null), 
			buildcnt: commonLogic.appcommonhandle("BUILD数",null), 
			relatedbugcnt: commonLogic.appcommonhandle("相关Bug数",null), 
			unconfirmbugcnt: commonLogic.appcommonhandle("未确认Bug数",null), 
			activebugcnt: commonLogic.appcommonhandle("未解决Bug数",null), 
			notclosedbugcnt: commonLogic.appcommonhandle("未关闭Bug数",null), 
			casecnt: commonLogic.appcommonhandle("用例数",null), 
			desc: commonLogic.appcommonhandle("产品描述	",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobclose_form: {
		details: {
			group1: commonLogic.appcommonhandle("产品基本信息",null), 
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("历史记录",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("产品名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			comment: commonLogic.appcommonhandle("备注",null), 
			mobimage: commonLogic.appcommonhandle("",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobnewfrom_form: {
		details: {
			grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
			grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
			group1: commonLogic.appcommonhandle("product基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("产品名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			name: commonLogic.appcommonhandle("产品名称",null), 
			code: commonLogic.appcommonhandle("产品代号",null), 
			line: commonLogic.appcommonhandle("产品线",null), 
			linename: commonLogic.appcommonhandle("产品线",null), 
			popk: commonLogic.appcommonhandle("产品负责人",null), 
			qdpk: commonLogic.appcommonhandle("测试负责人",null), 
			rdpk: commonLogic.appcommonhandle("发布负责人",null), 
			type: commonLogic.appcommonhandle("产品类型",null), 
			desc: commonLogic.appcommonhandle("产品描述	",null), 
			acl: commonLogic.appcommonhandle("访问控制",null), 
			id: commonLogic.appcommonhandle("编号",null), 
			po: commonLogic.appcommonhandle("产品负责人",null), 
			rd: commonLogic.appcommonhandle("发布负责人",null), 
			qd: commonLogic.appcommonhandle("测试负责人",null), 
		},
		uiactions: {
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("常规条件",null), 
			n_name_like: commonLogic.appcommonhandle("产品名称",null), 
			n_status_eq: commonLogic.appcommonhandle("状态",null), 
			n_type_eq: commonLogic.appcommonhandle("产品类型",null), 
			n_linename_like: commonLogic.appcommonhandle("产品线",null), 
		},
		uiactions: {
		},
	},
	mobpickupmdviewmdctrl_batchtoolbar_toolbar: {
	},
	mobmdviewmdctrl_batchtoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("Remove",null),
			tip: 'deuiaction1',
		},
	},
	closemobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("Save And Close",null),
			tip: 'tbitem1',
		},
	},
	mobeditviewrighttoolbar_toolbar: {
		items1: {
			caption: commonLogic.appcommonhandle("更多",null),
			tip: 'items1',
		},
		deuiaction1: {
			caption: commonLogic.appcommonhandle("关闭",null),
			tip: 'deuiaction1',
		},
		deuiaction2: {
			caption: commonLogic.appcommonhandle("删除",null),
			tip: 'deuiaction2',
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
	testmobmdviewmdctrl_batchtoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("Remove",null),
			tip: 'deuiaction1',
		},
	},
};