export default {
  fields: {
    name: "名称",
    addeddate: "创建时间",
    id: "编号",
    deleted: "已删除",
    lasteditedby: "最后编辑人",
    type: "类型",
    lastediteddate: "最后编辑时间",
    addedby: "由谁创建",
    desc: "描述",
    product: "所属产品",
  },
	views: {
		editview9: {
			caption: "测试套件",
      		title: "测试套件编辑视图",
		},
		editview: {
			caption: "测试套件",
      		title: "testsuite编辑视图",
		},
		gridview: {
			caption: "测试套件",
      		title: "testsuite表格视图",
		},
		maindashboardview: {
			caption: "测试套件",
      		title: "测试套件数据看板视图",
		},
	},
	main_form: {
		details: {
			group1: "testsuite基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "名称", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	maininfo_form: {
		details: {
			group1: "基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "名称", 
			desc: "描述", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "编号",
			name: "名称",
			desc: "描述",
			addedby: "由谁创建",
			addeddate: "创建时间",
			uagridcolumn1: "操作",
		},
		uiactions: {
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "新建",
			tip: "新建",
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
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
};