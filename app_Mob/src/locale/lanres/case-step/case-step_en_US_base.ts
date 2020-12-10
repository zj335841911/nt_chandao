import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    type: {
		caption: "用例步骤类型",
		rules: { 
		}
	},
    id: {
		caption: "编号",
		rules: { 
		}
	},
    desc: {
		caption: "步骤",
		rules: { 
		}
	},
    expect: {
		caption: "预期",
		rules: { 
		}
	},
    version: {
		caption: "用例版本",
		rules: { 
		}
	},
    ibizcase: {
		caption: "用例",
		rules: { 
		}
	},
    parent: {
		caption: "分组用例步骤的组编号",
		rules: { 
		}
	},
    reals: {
		caption: "实际情况",
		rules: { 
		}
	},
    steps: {
		caption: "测试结果",
		rules: { 
		}
	},
    files: {
		caption: "附件",
		rules: { 
		}
	},
    runid: {
		caption: "执行编号",
		rules: { 
		}
	},
    casestepid: {
		caption: "用例步骤编号",
		rules: { 
		}
	},
  },
	views: {
		mobmdview9: {
			caption: commonLogic.appcommonhandle("用例步骤",null),
		},
	},
};