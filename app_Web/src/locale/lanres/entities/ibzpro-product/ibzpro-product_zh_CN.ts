export default {
  fields: {
    ibzpro_productid: "产品（开发系统）标识",
    createdate: "建立时间",
    createman: "建立人",
    ibzpro_productname: "产品（开发系统）名称",
    updatedate: "更新时间",
    updateman: "更新人",
    pssystype: "生产体系类型",
    psobjectid: "生产对象标识",
    pmsproduct: "编号",
    productname: "产品",
  },
	views: {
		gridview: {
			caption: "产品（开发系统）",
      		title: "产品（开发系统）表格视图",
		},
		editview: {
			caption: "产品（开发系统）",
      		title: "产品（开发系统）编辑视图",
		},
	},
	main_form: {
		details: {
			group1: "产品（开发系统）基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "产品（开发系统）标识", 
			srfmajortext: "产品（开发系统）名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			ibzpro_productname: "产品（开发系统）名称", 
			productname: "产品", 
			pssystype: "生产体系类型", 
			pmsproduct: "编号", 
			ibzpro_productid: "产品（开发系统）标识", 
			psobjectid: "生产对象标识", 
			createman: "建立人", 
			createdate: "建立时间", 
			updateman: "更新人", 
			updatedate: "更新时间", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			pmsproduct: "编号",
			productname: "产品",
			ibzpro_productname: "产品（开发系统）名称",
			pssystype: "生产体系类型",
			updateman: "更新人",
			updatedate: "更新时间",
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
		seperator3: {
			caption: "",
			tip: "",
		},
		deuiaction4: {
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