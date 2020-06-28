
export default {
  fields: {
    name: "名称编号",
    builder: "构建者",
    desc: "描述",
    id: "id",
    deleted: "已删除",
    scmpath: "源代码地址",
    filepath: "下载地址",
    stories: "完成的需求",
    bugs: "解决的Bug",
    date: "打包日期",
    product: "产品",
    branch: "平台/分支",
    project: "所属项目",
    productname: "产品名称",
  },
	views: {
		maingridview: {
			caption: "版本",
      		title: "build表格视图",
		},
		mainview: {
			caption: "版本",
      		title: "版本编辑视图",
		},
		editview: {
			caption: "版本",
      		title: "build编辑视图",
		},
		maintabexpview: {
			caption: "版本",
      		title: "版本分页导航视图",
		},
	},
	main_form: {
		details: {
			group1: "基本信息", 
			druipart1: "", 
			grouppanel1: "历史记录", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "名称编号", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			productname: "产品", 
			name: "名称编号", 
			builder: "构建者", 
			date: "打包日期", 
			scmpath: "源代码地址", 
			filepath: "下载地址", 
			desc: "描述", 
			id: "id", 
			product: "产品", 
		},
		uiactions: {
		},
	},
	quickcreate_form: {
		details: {
			grouppanel2: "分组面板", 
			group1: "基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "名称编号", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			productname: "产品", 
			name: "名称编号", 
			builder: "构建者", 
			date: "打包日期", 
			scmpath: "源代码地址", 
			filepath: "下载地址", 
			desc: "描述", 
			id: "id", 
			product: "产品", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "ID",
			productname: "产品名称",
			name: "名称编号",
			scmpath: "源代码地址",
			filepath: "下载地址",
			date: "打包日期",
			builder: "构建者",
			uagridcolumn1: "操作",
		},
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
		},
		uiactions: {
		},
	},
	maingridviewtoolbar_toolbar: {
		tbitem3: {
			caption: "New",
			tip: "New",
		},
		tbitem4: {
			caption: "Edit",
			tip: "Edit {0}",
		},
		tbitem6: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem8: {
			caption: "Remove",
			tip: "Remove {0}",
		},
		tbitem9: {
			caption: "-",
			tip: "",
		},
		tbitem13: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
		tbitem10: {
			caption: "-",
			tip: "",
		},
		tbitem16: {
			caption: "其它",
			tip: "其它",
		},
		tbitem21: {
			caption: "Export Data Model",
			tip: "导出数据模型",
		},
		tbitem23: {
			caption: "数据导入",
			tip: "数据导入",
		},
		tbitem17: {
			caption: "-",
			tip: "",
		},
		tbitem19: {
			caption: "Filter",
			tip: "Filter",
		},
		tbitem18: {
			caption: "Help",
			tip: "Help",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
};
