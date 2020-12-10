import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    stories: {
		caption: "完成的需求",
		rules: { 
		}
	},
    marker: {
		caption: "里程碑",
		rules: { 
		}
	},
    id: {
		caption: "ID",
		rules: { 
		}
	},
    leftbugs: {
		caption: "遗留的Bug",
		rules: { 
		}
	},
    bugs: {
		caption: "解决的Bug",
		rules: { 
		}
	},
    deleted: {
		caption: "已删除",
		rules: { 
		}
	},
    name: {
		caption: "发布名称",
		rules: { 
		}
	},
    date: {
		caption: "发布日期",
		rules: { 
		}
	},
    status: {
		caption: "状态",
		rules: { 
		}
	},
    substatus: {
		caption: "子状态",
		rules: { 
		}
	},
    desc: {
		caption: "描述",
		rules: { 
		}
	},
    buildname: {
		caption: "版本",
		rules: { 
		}
	},
    product: {
		caption: "产品",
		rules: { 
		}
	},
    build: {
		caption: "版本",
		rules: { 
		}
	},
    branch: {
		caption: "平台/分支",
		rules: { 
		}
	},
    productname: {
		caption: "产品名称",
		rules: { 
		}
	},
    files: {
		caption: "附件",
		rules: { 
		}
	},
    backgroundid: {
		caption: "后台体系",
		rules: { 
		}
	},
    sqlid: {
		caption: "运行数据库",
		rules: { 
		}
	},
    frontapplication: {
		caption: "系统应用",
		rules: { 
		}
	},
    rebuild: {
		caption: "重新构建",
		rules: { 
		}
	},
    releasetype: {
		caption: "运行模式",
		rules: { 
		}
	},
    builder: {
		caption: "构建者",
		rules: { 
		}
	},
    builddate: {
		caption: "打包日期",
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
		mobtabexpview: {
			caption: commonLogic.appcommonhandle("发布",null),
		},
		mobpickupview: {
			caption: commonLogic.appcommonhandle("发布",null),
		},
		editmobeditview: {
			caption: commonLogic.appcommonhandle("发布",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("发布",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("发布",null),
		},
		newmobeditview: {
			caption: commonLogic.appcommonhandle("发布",null),
		},
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("发布",null),
		},
	},
	mobmain_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("附件",null), 
			druipart2: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("历史记录",null), 
			group1: commonLogic.appcommonhandle("发布基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("ID",null), 
			srfmajortext: commonLogic.appcommonhandle("发布名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			name: commonLogic.appcommonhandle("发布名称",null), 
			date: commonLogic.appcommonhandle("发布日期",null), 
			buildname: commonLogic.appcommonhandle("版本",null), 
			marker: commonLogic.appcommonhandle("里程碑",null), 
			status: commonLogic.appcommonhandle("状态",null), 
			id: commonLogic.appcommonhandle("ID",null), 
		},
		uiactions: {
		},
	},
	mobeditform_form: {
		details: {
			grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
			group1: commonLogic.appcommonhandle("release基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("ID",null), 
			srfmajortext: commonLogic.appcommonhandle("发布名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			product: commonLogic.appcommonhandle("产品",null), 
			productname: commonLogic.appcommonhandle("产品名称",null), 
			name: commonLogic.appcommonhandle("发布名称",null), 
			marker: commonLogic.appcommonhandle("里程碑",null), 
			buildname: commonLogic.appcommonhandle("版本",null), 
			date: commonLogic.appcommonhandle("发布日期",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			files: commonLogic.appcommonhandle("附件",null), 
			id: commonLogic.appcommonhandle("ID",null), 
		},
		uiactions: {
		},
	},
	mobnewform_form: {
		details: {
			grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
			group1: commonLogic.appcommonhandle("release基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("ID",null), 
			srfmajortext: commonLogic.appcommonhandle("发布名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			product: commonLogic.appcommonhandle("产品",null), 
			productname: commonLogic.appcommonhandle("产品名称",null), 
			name: commonLogic.appcommonhandle("发布名称",null), 
			marker: commonLogic.appcommonhandle("里程碑",null), 
			buildname: commonLogic.appcommonhandle("版本",null), 
			date: commonLogic.appcommonhandle("发布日期",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			files: commonLogic.appcommonhandle("附件",null), 
			id: commonLogic.appcommonhandle("ID",null), 
		},
		uiactions: {
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("常规条件",null), 
			n_name_like: commonLogic.appcommonhandle("发布名称",null), 
			n_status_eq: commonLogic.appcommonhandle("状态",null), 
			n_date_ltandeq: commonLogic.appcommonhandle("发布日期",null), 
		},
		uiactions: {
		},
	},
	editmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("Save And Close",null),
			tip: 'tbitem1',
		},
	},
	mobeditviewrighttoolbar_toolbar: {
		deuiaction1_mobactive: {
			caption: commonLogic.appcommonhandle("激活",null),
			tip: 'deuiaction1_mobactive',
		},
		deuiaction1_mobterminal: {
			caption: commonLogic.appcommonhandle("停止维护",null),
			tip: 'deuiaction1_mobterminal',
		},
		deuiaction1_mobedit: {
			caption: commonLogic.appcommonhandle("编辑",null),
			tip: 'deuiaction1_mobedit',
		},
		deuiaction1_mobremove: {
			caption: commonLogic.appcommonhandle("删除",null),
			tip: 'deuiaction1_mobremove',
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
			caption: commonLogic.appcommonhandle("创建发布",null),
			tip: 'deuiaction1',
		},
	},
};