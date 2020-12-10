import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    path: {
		caption: "path",
		rules: { 
		}
	},
    deleted: {
		caption: "逻辑删除标志",
		rules: { 
		}
	},
    name: {
		caption: "名称",
		rules: { 
		}
	},
    branch: {
		caption: "branch",
		rules: { 
		}
	},
    ibizshort: {
		caption: "简称",
		rules: { 
		}
	},
    order: {
		caption: "排序值",
		rules: { 
		}
	},
    grade: {
		caption: "grade",
		rules: { 
		}
	},
    type: {
		caption: "类型（story）",
		rules: { 
		}
	},
    owner: {
		caption: "owner",
		rules: { 
		}
	},
    isleaf: {
		caption: "叶子模块",
		rules: { 
		}
	},
    id: {
		caption: "id",
		rules: { 
		}
	},
    collector: {
		caption: "collector",
		rules: { 
		}
	},
    root: {
		caption: "产品",
		rules: { 
		}
	},
    parent: {
		caption: "id",
		rules: { 
		}
	},
    rootname: {
		caption: "所属产品",
		rules: { 
		}
	},
    parentname: {
		caption: "上级模块",
		rules: { 
		}
	},
    orderpk: {
		caption: "数据选择排序",
		rules: { 
		}
	},
  },
	views: {
		mobpickupview: {
			caption: commonLogic.appcommonhandle("需求模块",null),
		},
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("需求模块",null),
		},
	},
};