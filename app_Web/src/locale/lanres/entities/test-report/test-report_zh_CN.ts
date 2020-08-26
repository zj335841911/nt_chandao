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
      		title: "测试报告表格视图",
		},
		maintabexpview: {
			caption: "测试报告",
      		title: "测试报告分页导航视图",
		},
		editview: {
			caption: "测试报告",
      		title: "测试报告编辑视图",
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
		},
		uiactions: {
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
		deuiaction1: {
			caption: "导出",
			tip: "导出",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
};