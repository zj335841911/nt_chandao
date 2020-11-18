export default {
  fields: {
    type: "类型",
    score: "总评分",
    commentcount: "总评论数",
    downloadcount: "总下载量",
    downloadurl: "最新版本下载地址",
    tag: "标签",
    keyword: "关键字",
    version: "版本",
    updatedate: "更新时间",
    ibizpropluginname: "系统插件名称",
    updateman: "更新人",
    createdate: "建立时间",
    ibizpropluginid: "系统插件标识",
    createman: "建立人",
  },
	views: {
		editview: {
			caption: "系统插件",
      		title: "系统插件编辑视图",
		},
		gridview: {
			caption: "系统插件",
      		title: "系统插件表格视图",
		},
	},
	main_form: {
		details: {
			group1: "系统插件基本信息", 
			formpage1: "基本信息", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "系统插件标识", 
			srfmajortext: "系统插件名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			ibizpro_pluginname: "插件名称", 
			version: "版本", 
			type: "类型", 
			downloadurl: "最新版本下载地址", 
			tag: "标签", 
			keyword: "关键字", 
			ibizpro_pluginid: "系统插件标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			ibizpro_pluginname: "插件名称",
			type: "类型",
			version: "版本",
			downloadurl: "最新版本下载地址",
			downloadcount: "总下载量",
			commentcount: "总评论数",
			score: "总评分",
			updatedate: "更新时间",
			updateman: "更新人",
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
		seperator3: {
			caption: "",
			tip: "",
		},
		deuiaction5: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
};