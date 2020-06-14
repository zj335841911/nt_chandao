
export default {
  fields: {
    end: '结束日期',
    begin: '开始日期',
    mailto: '抄送给',
    pri: '优先级',
    substatus: '子状态',
    report: 'report',
    desc: '描述',
    id: '编号',
    status: '当前状态',
    owner: '负责人',
    deleted: '已删除',
    auto: 'auto',
    name: '名称',
    product: '所属产品',
    build: '版本',
    project: '所属项目',
  },
	views: {
		gridview9_untested: {
			caption: "测试版本",
      title: '测试版本表格视图',
		},
		editview: {
			caption: "测试版本",
      title: 'testtask编辑视图',
		},
		gridview: {
			caption: "测试版本",
      title: 'testtask表格视图',
		},
	},
	main_form: {
		details: {
			group1: "testtask基本信息", 
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
	main_grid: {
		columns: {
			id: "ID",
			product: "所属产品",
			name: "名称",
			project: "所属项目",
			build: "版本",
			begin: "开始日期",
			end: "结束日期",
		},
		uiactions: {
		},
	},
	main2_grid: {
		columns: {
			id: "ID",
			product: "所属产品",
			name: "名称",
			project: "所属项目",
			build: "版本",
			begin: "开始日期",
			end: "结束日期",
		},
		uiactions: {
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "New",
			tip: "New",
		},
		deuiaction4: {
			caption: "Remove",
			tip: "Remove {0}",
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