
export default {
  fields: {
    objectid: '所属对象',
    cases: '用例',
    members: '参与人员',
    bugs: '测试的Bug',
    createdby: '由谁创建',
    stories: '测试的需求',
    tasks: '测试单',
    title: '标题',
    begin: '开始时间',
    objecttype: '对象类型',
    end: '结束时间',
    builds: '版本信息',
    createddate: '创建时间',
    report: '总结',
    id: '编号',
    owner: '负责人',
    deleted: '已删除',
    product: '所属产品',
    project: '所属项目',
    productname: '所属产品',
    projectname: '所属项目',
    comment: '备注',
  },
	views: {
		gridview: {
			caption: "测试报告",
      title: 'testreport表格视图',
		},
		editview: {
			caption: "测试报告",
      title: 'testreport编辑视图',
		},
	},
	main_form: {
		details: {
			group1: "testreport基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			title: "标题", 
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
		deuiaction1: {
			caption: "New",
			tip: "New",
		},
		seperator1: {
			caption: "",
			tip: "",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
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