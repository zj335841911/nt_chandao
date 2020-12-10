import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    productlinename: {
		caption: "产品线名称",
		rules: { 
		}
	},
    productlineid: {
		caption: "产品线标识",
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
    createdate: {
		caption: "建立时间",
		rules: { 
		}
	},
    createman: {
		caption: "建立人",
		rules: { 
		}
	},
  },
	views: {
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("产品线",null),
		},
		mobpickupview: {
			caption: commonLogic.appcommonhandle("产品线",null),
		},
	},
};