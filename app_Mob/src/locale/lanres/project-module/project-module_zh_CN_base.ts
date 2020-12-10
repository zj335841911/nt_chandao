import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    type: {
		caption: "类型（task）",
		rules: { 
		}
	},
    collector: {
		caption: "collector",
		rules: { 
		}
	},
    id: {
		caption: "id",
		rules: { 
		}
	},
    deleted: {
		caption: "逻辑删除标志",
		rules: { 
		}
	},
    isleaf: {
		caption: "叶子模块",
		rules: { 
		}
	},
    path: {
		caption: "path",
		rules: { 
		}
	},
    owner: {
		caption: "owner",
		rules: { 
		}
	},
    ibizshort: {
		caption: "简称",
		rules: { 
		}
	},
    name: {
		caption: "名称",
		rules: { 
		}
	},
    grade: {
		caption: "grade",
		rules: { 
		}
	},
    order: {
		caption: "排序值",
		rules: { 
		}
	},
    branch: {
		caption: "branch",
		rules: { 
		}
	},
    parent: {
		caption: "id",
		rules: { 
		}
	},
    root: {
		caption: "项目",
		rules: { 
		}
	},
    rootname: {
		caption: "所属项目",
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
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("任务模块",null),
		},
		mobpickupview: {
			caption: commonLogic.appcommonhandle("任务模块",null),
		},
	},
};