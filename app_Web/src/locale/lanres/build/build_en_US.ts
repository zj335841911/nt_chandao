
export default {
  fields: {
    name: '名称编号',
    builder: '构建者',
    desc: '描述',
    id: 'id',
    deleted: '已删除',
    scmpath: '源代码地址',
    filepath: '下载地址',
    stories: '完成的需求',
    bugs: '解决的Bug',
    date: '打包日期',
    product: '产品',
    branch: '平台/分支',
    project: '所属项目',
    productname: '产品名称',
  },
	views: {
		maingridview: {
			caption: "版本",
      title: '版本',
		},
		mainview: {
			caption: "版本",
      title: '版本',
		},
		editview: {
			caption: "版本",
      title: '版本',
		},
		maintabexpview: {
			caption: "版本",
      title: '版本',
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
			project: "所属项目", 
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
			linkstories: "关联需求",
			submittotesting: "提交测试",
			viewbugs: "查看Bug",
			editbuild: "编辑版本",
			remove: "Remove",
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
		},
		uiactions: {
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	maingridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "New",
			tip: "New",
		},
	},
};