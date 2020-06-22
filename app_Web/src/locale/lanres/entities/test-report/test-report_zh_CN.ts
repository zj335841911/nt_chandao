export default {
  fields: {
    objectid: "所属对象",
    cases: "用例",
    members: "参与人员",
    bugs: "测试的Bug",
    createdby: "由谁创建",
    stories: "测试的需求",
    tasks: "测试单",
    title: "标题",
    begin: "开始时间",
    objecttype: "对象类型",
    end: "结束时间",
    builds: "版本信息",
    createddate: "创建时间",
    report: "总结",
    id: "编号",
    owner: "负责人",
    deleted: "已删除",
    product: "所属产品",
    project: "所属项目",
    productname: "所属产品",
    projectname: "所属项目",
    comment: "备注",
  },
	views: {
		maininfoview: {
			caption: "测试报告",
      		title: "测试报告编辑视图",
		},
		gridview: {
			caption: "测试报告",
      		title: "testreport表格视图",
		},
		maintabexpview: {
			caption: "测试报告",
      		title: "测试报告分页导航视图",
		},
		editview: {
			caption: "测试报告",
      		title: "testreport编辑视图",
		},
		editview_testrange: {
			caption: "测试报告",
      		title: "测试报告编辑视图",
		},
	},
	main_form: {
		details: {
			group1: "基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			begin: "开始时间", 
			end: "结束时间", 
			formitemex1: "起止时间", 
			owner: "负责人", 
			members: "参与人员", 
			projectname: "所属项目", 
			report: "总结", 
			id: "编号", 
			project: "所属项目", 
		},
		uiactions: {
		},
	},
	testrange_form: {
		details: {
			druipart1: "", 
			druipart2: "", 
			group1: "基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "标题", 
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
			id: "ID",
			title: "标题",
			createdby: "创建",
			createddate: "创建时间",
			projectname: "所属项目",
			tasks: "测试版本",
			uagridcolumn1: "操作",
		},
		uiactions: {
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "保存",
			tip: "保存",
		},
		tbitem4: {
			caption: "保存并新建",
			tip: "保存并新建",
		},
		tbitem5: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem7: {
			caption: "删除",
			tip: "删除",
		},
		tbitem8: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "新建",
			tip: "新建",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "拷贝",
			tip: "拷贝",
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
			caption: "帮助",
			tip: "帮助",
		},
	},
};