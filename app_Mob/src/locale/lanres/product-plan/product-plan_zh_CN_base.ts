import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    title: {
		caption: "名称",
		rules: { 
		}
	},
    id: {
		caption: "编号",
		rules: { 
		}
	},
    begin: {
		caption: "开始日期",
		rules: { 
		}
	},
    desc: {
		caption: "描述",
		rules: { 
		}
	},
    end: {
		caption: "结束日期",
		rules: { 
		}
	},
    deleted: {
		caption: "已删除",
		rules: { 
		}
	},
    order: {
		caption: "排序",
		rules: { 
		}
	},
    parentname: {
		caption: "父计划名称",
		rules: { 
		}
	},
    branch: {
		caption: "平台/分支",
		rules: { 
		}
	},
    parent: {
		caption: "父计划",
		rules: { 
		}
	},
    product: {
		caption: "产品",
		rules: { 
		}
	},
    statuss: {
		caption: "状态",
		rules: { 
		}
	},
    future: {
		caption: "待定",
		rules: { 
		}
	},
    delta: {
		caption: "周期",
		rules: { 
		}
	},
    oldtitle: {
		caption: "上一次计划名称",
		rules: { 
		}
	},
    storycnt: {
		caption: "需求数",
		rules: { 
		}
	},
    bugcnt: {
		caption: "bug数",
		rules: { 
		}
	},
    isexpired: {
		caption: "是否过期",
		rules: { 
		}
	},
    estimatecnt: {
		caption: "工时数",
		rules: { 
		}
	},
    beginstr: {
		caption: "开始日期",
		rules: { 
		}
	},
    endstr: {
		caption: "结束日期",
		rules: { 
		}
	},
    plantemplet: {
		caption: "计划模板",
		rules: { 
		}
	},
  },
	views: {
		mobmdview: {
			caption: commonLogic.appcommonhandle("产品计划",null),
		},
		newmobeditview: {
			caption: commonLogic.appcommonhandle("产品计划",null),
		},
		mobtabexpview: {
			caption: commonLogic.appcommonhandle("产品计划",null),
		},
		editmobeditview: {
			caption: commonLogic.appcommonhandle("产品计划",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("产品计划",null),
		},
	},
	mobmaintable_form: {
		details: {
			grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
			grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
			group1: commonLogic.appcommonhandle("productplan基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			product: commonLogic.appcommonhandle("产品",null), 
			branch: commonLogic.appcommonhandle("平台/分支",null), 
			title: commonLogic.appcommonhandle("名称",null), 
			oldtitle: commonLogic.appcommonhandle("",null), 
			future: commonLogic.appcommonhandle("待定",null), 
			begin: commonLogic.appcommonhandle("开始日期",null), 
			delta: commonLogic.appcommonhandle("周期",null), 
			end: commonLogic.appcommonhandle("结束日期",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobnewform_form: {
		details: {
			grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
			grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
			group1: commonLogic.appcommonhandle("productplan基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			product: commonLogic.appcommonhandle("产品",null), 
			branch: commonLogic.appcommonhandle("平台/分支",null), 
			title: commonLogic.appcommonhandle("名称",null), 
			oldtitle: commonLogic.appcommonhandle("",null), 
			begin: commonLogic.appcommonhandle("开始日期",null), 
			future: commonLogic.appcommonhandle("",null), 
			end: commonLogic.appcommonhandle("结束日期",null), 
			delta: commonLogic.appcommonhandle("",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobmain_form: {
		details: {
			druipart3: commonLogic.appcommonhandle("",null), 
			grouppanel3: commonLogic.appcommonhandle("历史记录",null), 
			group1: commonLogic.appcommonhandle("产品计划基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			branch: commonLogic.appcommonhandle("平台/分支",null), 
			title: commonLogic.appcommonhandle("名称",null), 
			begin: commonLogic.appcommonhandle("开始日期",null), 
			end: commonLogic.appcommonhandle("结束日期",null), 
			storycnt: commonLogic.appcommonhandle("需求数",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("常规条件",null), 
			n_title_like: commonLogic.appcommonhandle("名称",null), 
			n_begin_gtandeq: commonLogic.appcommonhandle("开始日期",null), 
			n_end_ltandeq: commonLogic.appcommonhandle("结束日期",null), 
		},
		uiactions: {
		},
	},
	editmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("保存",null),
			tip: '保存',
		},
	},
	newmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("保存",null),
			tip: '保存',
		},
	},
	mobmdviewrighttoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("新建",null),
			tip: '新建',
		},
	},
	mobeditviewrighttoolbar_toolbar: {
		deuiaction1_mobmainedit: {
			caption: commonLogic.appcommonhandle("编辑",null),
			tip: '编辑',
		},
		deuiaction1_mobdelete: {
			caption: commonLogic.appcommonhandle("删除",null),
			tip: '删除',
		},
	},
};