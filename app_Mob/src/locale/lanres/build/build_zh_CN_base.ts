import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    name: {
		caption: "名称编号",
		rules: { 
		}
	},
    builder: {
		caption: "构建者",
		rules: { 
		}
	},
    desc: {
		caption: "描述",
		rules: { 
		}
	},
    id: {
		caption: "id",
		rules: { 
		}
	},
    deleted: {
		caption: "已删除",
		rules: { 
		}
	},
    scmpath: {
		caption: "源代码地址",
		rules: { 
		}
	},
    filepath: {
		caption: "下载地址",
		rules: { 
		}
	},
    stories: {
		caption: "完成的需求",
		rules: { 
		}
	},
    bugs: {
		caption: "解决的Bug",
		rules: { 
		}
	},
    date: {
		caption: "打包日期",
		rules: { 
		}
	},
    product: {
		caption: "产品",
		rules: { 
		}
	},
    branch: {
		caption: "平台/分支",
		rules: { 
		}
	},
    project: {
		caption: "所属项目",
		rules: { 
		}
	},
    productname: {
		caption: "产品名称",
		rules: { 
		}
	},
    ids: {
		caption: "Bug版本健值",
		rules: { 
		}
	},
    files: {
		caption: "附件",
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
    frontapplication: {
		caption: "系统应用",
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
    createbugcnt: {
		caption: "产生的bug",
		rules: { 
		}
	},
    builderpk: {
		caption: "构建者（选择）",
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
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("版本",null),
		},
		logmobmdview: {
			caption: commonLogic.appcommonhandle("更新日志",null),
		},
		mobtabexpview: {
			caption: commonLogic.appcommonhandle("版本",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("版本",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("版本",null),
		},
		mobpickupview: {
			caption: commonLogic.appcommonhandle("版本",null),
		},
		editmobeditview: {
			caption: commonLogic.appcommonhandle("版本",null),
		},
		newmobeditview: {
			caption: commonLogic.appcommonhandle("版本",null),
		},
		logmobeditview: {
			caption: commonLogic.appcommonhandle("更新日志",null),
		},
		mobmpickupview: {
			caption: commonLogic.appcommonhandle("版本",null),
		},
	},
	mobeditform_form: {
		details: {
			grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
			group1: commonLogic.appcommonhandle("基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("id",null), 
			srfmajortext: commonLogic.appcommonhandle("名称编号",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			project: commonLogic.appcommonhandle("所属项目",null), 
			productname: commonLogic.appcommonhandle("产品",null), 
			name: commonLogic.appcommonhandle("名称编号",null), 
			builderpk: commonLogic.appcommonhandle("构建者",null), 
			date: commonLogic.appcommonhandle("打包日期",null), 
			scmpath: commonLogic.appcommonhandle("源代码地址",null), 
			filepath: commonLogic.appcommonhandle("下载地址",null), 
			files: commonLogic.appcommonhandle("上传发行包",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			id: commonLogic.appcommonhandle("id",null), 
			product: commonLogic.appcommonhandle("产品",null), 
			builder: commonLogic.appcommonhandle("构建者",null), 
		},
		uiactions: {
		},
	},
	mobnewform_form: {
		details: {
			grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
			grouppanel1: commonLogic.appcommonhandle("基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("id",null), 
			srfmajortext: commonLogic.appcommonhandle("名称编号",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			project: commonLogic.appcommonhandle("所属项目",null), 
			product: commonLogic.appcommonhandle("产品",null), 
			productname: commonLogic.appcommonhandle("产品名称",null), 
			name: commonLogic.appcommonhandle("名称编号",null), 
			builderpk: commonLogic.appcommonhandle("构建者",null), 
			date: commonLogic.appcommonhandle("打包日期",null), 
			scmpath: commonLogic.appcommonhandle("源代码地址",null), 
			filepath: commonLogic.appcommonhandle("下载地址",null), 
			files: commonLogic.appcommonhandle("上传发行包",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			id: commonLogic.appcommonhandle("id",null), 
			builder: commonLogic.appcommonhandle("构建者",null), 
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
			group1: commonLogic.appcommonhandle("版本基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("id",null), 
			srfmajortext: commonLogic.appcommonhandle("名称编号",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			name: commonLogic.appcommonhandle("名称编号",null), 
			date: commonLogic.appcommonhandle("打包日期",null), 
			builder: commonLogic.appcommonhandle("构建者",null), 
			scmpath: commonLogic.appcommonhandle("源代码地址",null), 
			filepath: commonLogic.appcommonhandle("下载地址",null), 
			desc: commonLogic.appcommonhandle("描述",null), 
			id: commonLogic.appcommonhandle("id",null), 
		},
		uiactions: {
		},
	},
	logmain_form: {
		details: {
			group1: commonLogic.appcommonhandle("版本基本信息",null), 
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("完成需求",null), 
			druipart2: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("解决Bug",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("id",null), 
			srfmajortext: commonLogic.appcommonhandle("名称编号",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			name: commonLogic.appcommonhandle("",null), 
			id: commonLogic.appcommonhandle("id",null), 
		},
		uiactions: {
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("常规条件",null), 
			n_name_like: commonLogic.appcommonhandle("名称编号",null), 
			n_productname_like: commonLogic.appcommonhandle("产品名称",null), 
			n_date_ltandeq: commonLogic.appcommonhandle("打包日期",null), 
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
			caption: commonLogic.appcommonhandle("创建版本",null),
			tip: '创建版本',
		},
	},
	mobeditviewrighttoolbar_toolbar: {
		deuiaction1_mobeditbuild: {
			caption: commonLogic.appcommonhandle("编辑版本",null),
			tip: '编辑版本',
		},
		deuiaction1_mobdelete: {
			caption: commonLogic.appcommonhandle("删除",null),
			tip: '删除',
		},
	},
};