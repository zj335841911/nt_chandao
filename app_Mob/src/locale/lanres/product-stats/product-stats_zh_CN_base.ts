import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    id: {
		caption: "产品编号",
		rules: { 
		}
	},
    deleted: {
		caption: "已删除",
		rules: { 
		}
	},
    storycnt: {
		caption: "需求总数",
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
    waitstorycnt: {
		caption: "未开始需求数",
		rules: { 
		}
	},
    plannedstorycnt: {
		caption: "已计划需求数",
		rules: { 
		}
	},
    developingstorycnt: {
		caption: "开发中需求数",
		rules: { 
		}
	},
    testingstorycnt: {
		caption: "测试中需求数",
		rules: { 
		}
	},
    releasedstorycnt: {
		caption: "已发布需求数",
		rules: { 
		}
	},
    unendproductplancnt: {
		caption: "未过期计划数",
		rules: { 
		}
	},
    resprojectcnt: {
		caption: "关联项目数",
		rules: { 
		}
	},
    undoneresprojectcnt: {
		caption: "未完成关联项目数",
		rules: { 
		}
	},
    normalreleasecnt: {
		caption: "维护中发布数",
		rules: { 
		}
	},
    activestorycnt: {
		caption: "激活需求数",
		rules: { 
		}
	},
    activebugcnt: {
		caption: "未解决Bug数",
		rules: { 
		}
	},
    name: {
		caption: "产品名称",
		rules: { 
		}
	},
    assigntomebugcnt: {
		caption: "指派给我的Bug数",
		rules: { 
		}
	},
    notclosedbugcnt: {
		caption: "未关闭Bug数",
		rules: { 
		}
	},
    bugcnt: {
		caption: "所有Bug数",
		rules: { 
		}
	},
    unconfirmbugcnt: {
		caption: "未确认Bug数",
		rules: { 
		}
	},
    yesterdayclosedbugcnt: {
		caption: "昨天关闭Bug数",
		rules: { 
		}
	},
    yesterdayconfirmbugcnt: {
		caption: "昨天确认Bug数",
		rules: { 
		}
	},
    yesterdayresolvedbugcnt: {
		caption: "昨天解决Bug数",
		rules: { 
		}
	},
    postponedprojectcnt: {
		caption: "已延期",
		rules: { 
		}
	},
    currproject: {
		caption: "当前项目",
		rules: { 
		}
	},
    status: {
		caption: "状态",
		rules: { 
		}
	},
    code: {
		caption: "产品代号",
		rules: { 
		}
	},
    type: {
		caption: "产品类型",
		rules: { 
		}
	},
    order1: {
		caption: "产品排序",
		rules: { 
		}
	},
    istop: {
		caption: "是否置顶",
		rules: { 
		}
	},
  },
	views: {
		mobmdview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		mobtabexpview: {
			caption: commonLogic.appcommonhandle("产品详情",null),
		},
		testmobmdview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
	},
	mobmdviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("新建",null),
			tip: '新建',
		},
	},
	testmobmdviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("新建",null),
			tip: '新建',
		},
	},
};