
export default {
  fields: {
    lastrunner: "最后执行人",
    stepresults: "步骤结果",
    caseresult: "测试结果",
    xml: "结果文件",
    duration: "持续时间",
    date: "测试时间",
    id: "编号",
    version: "用例版本",
    job: "构建任务",
    ibizcase: "用例",
    run: "测试执行",
    compile: "代码编译",
  },
	views: {
		editview: {
			caption: "测试结果",
      		title: "testresult编辑视图",
		},
		gridview9: {
			caption: "测试结果",
      		title: "测试结果表格视图",
		},
	},
	main_form: {
		details: {
			group1: "testresult基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "编号", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			caseresult: "测试结果",
			date: "测试时间",
			lastrunner: "最后执行人",
			run: "测试执行",
		},
		uiactions: {
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "Save",
			tip: "Save",
		},
		tbitem4: {
			caption: "Save And New",
			tip: "Save And New",
		},
		tbitem5: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem7: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
		},
		tbitem8: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "New",
			tip: "New",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem16: {
			caption: "-",
			tip: "",
		},
		tbitem23: {
			caption: "第一个记录",
			tip: "第一个记录",
		},
		tbitem24: {
			caption: "上一个记录",
			tip: "上一个记录",
		},
		tbitem25: {
			caption: "下一个记录",
			tip: "下一个记录",
		},
		tbitem26: {
			caption: "最后一个记录",
			tip: "最后一个记录",
		},
		tbitem21: {
			caption: "-",
			tip: "",
		},
		tbitem22: {
			caption: "Help",
			tip: "Help",
		},
	},
};