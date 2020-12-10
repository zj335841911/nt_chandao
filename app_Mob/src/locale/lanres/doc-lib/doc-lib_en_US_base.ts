import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    type: {
		caption: "文档类型",
		rules: { 
		}
	},
    collector: {
		caption: "收藏者",
		rules: { 
		}
	},
    acl: {
		caption: "权限",
		rules: { 
		}
	},
    deleted: {
		caption: "已删除",
		rules: { 
		}
	},
    groups: {
		caption: "分组",
		rules: { 
		}
	},
    id: {
		caption: "编号",
		rules: { 
		}
	},
    users: {
		caption: "用户",
		rules: { 
		}
	},
    main: {
		caption: "是否是主库",
		rules: { 
		}
	},
    name: {
		caption: "文档库名称",
		rules: { 
		}
	},
    order: {
		caption: "排序",
		rules: { 
		}
	},
    project: {
		caption: "项目库",
		rules: { 
		}
	},
    product: {
		caption: "产品库",
		rules: { 
		}
	},
    doccnt: {
		caption: "文档数量",
		rules: { 
		}
	},
    doclibtype: {
		caption: "文件库类型",
		rules: { 
		}
	},
    projectname: {
		caption: "所属项目",
		rules: { 
		}
	},
    productname: {
		caption: "所属产品",
		rules: { 
		}
	},
    isfavourites: {
		caption: "是否收藏",
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
    root: {
		caption: "Root",
		rules: { 
		}
	},
    modulecnt: {
		caption: "文件夹数",
		rules: { 
		}
	},
    openeddate: {
		caption: "创建时间",
		rules: { 
		}
	},
  },
	views: {
		mobproducttreeview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		projectdoclibmobtreeview: {
			caption: commonLogic.appcommonhandle("项目",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("文档库",null),
		},
	},
	mobmain_form: {
		details: {
			group1: commonLogic.appcommonhandle("文档库基本信息",null), 
			group2: commonLogic.appcommonhandle("操作信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("文档库名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			name: commonLogic.appcommonhandle("文档库名称",null), 
			id: commonLogic.appcommonhandle("编号",null), 
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