import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    createman: {
		caption: "建立人",
		rules: { 
		}
	},
    ibzfavoritesid: {
		caption: "收藏标识",
		rules: { 
		}
	},
    createdate: {
		caption: "建立时间",
		rules: { 
		}
	},
    ibzfavoritesname: {
		caption: "收藏名称",
		rules: { 
		}
	},
    updateman: {
		caption: "更新人",
		rules: { 
		}
	},
    updatedate: {
		caption: "更新时间",
		rules: { 
		}
	},
    objectid: {
		caption: "数据对象标识",
		rules: { 
		}
	},
    account: {
		caption: "收藏用户",
		rules: { 
		}
	},
    type: {
		caption: "类型",
		rules: { 
		}
	},
  },
	views: {
		mobtabexpview: {
			caption: commonLogic.appcommonhandle("收藏",null),
		},
	},
};