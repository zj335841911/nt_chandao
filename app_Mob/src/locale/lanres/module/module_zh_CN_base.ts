import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    root: {
		caption: "所属根",
		rules: { 
		}
	},
    grade: {
		caption: "级别",
		rules: { 
		}
	},
    type: {
		caption: "类型",
		rules: { 
		}
	},
    name: {
		caption: "模块名称",
		rules: { 
		}
	},
    order: {
		caption: "排序",
		rules: { 
		}
	},
    owner: {
		caption: "负责人",
		rules: { 
		}
	},
    id: {
		caption: "id",
		rules: { 
		}
	},
    collector: {
		caption: "收藏者",
		rules: { 
		}
	},
    ibizshort: {
		caption: "简称",
		rules: { 
		}
	},
    path: {
		caption: "路径",
		rules: { 
		}
	},
    deleted: {
		caption: "已删除",
		rules: { 
		}
	},
    parentname: {
		caption: "上级模块",
		rules: { 
		}
	},
    branch: {
		caption: "平台/分支",
		rules: { 
		}
	},
    parent: {
		caption: "上级模块",
		rules: { 
		}
	},
    mdeptid: {
		caption: "部门标识",
		rules: { 
		}
	},
    orgid: {
		caption: "组织标识",
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
			caption: commonLogic.appcommonhandle("模块",null),
		},
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("模块",null),
		},
	},
};