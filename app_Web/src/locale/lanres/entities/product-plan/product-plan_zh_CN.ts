export default {
  fields: {
    title: "名称",
    id: "编号",
    begin: "开始日期",
    desc: "描述",
    end: "结束日期",
    deleted: "已删除",
    order: "排序",
    parentname: "父计划名称",
    branch: "平台/分支",
    parent: "父计划",
    product: "产品",
  },
	views: {
		maintabexp: {
			caption: "产品计划",
      		title: "计划",
		},
		maineditview: {
			caption: "产品计划",
      		title: "计划详情",
		},
		gridview: {
			caption: "产品计划",
      		title: "productplan表格视图",
		},
		editview: {
			caption: "产品计划",
      		title: "计划",
		},
	},
	main_form: {
		details: {
			grouppanel1: "分组面板", 
			group1: "productplan基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			product: "产品", 
			title: "名称", 
			begin: "开始日期", 
			end: "结束日期", 
			desc: "描述", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	info_form: {
		details: {
			grouppanel1: "分组面板", 
			group1: "基本信息", 
			druipart1: "", 
			grouppanel2: "历史记录", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			product: "产品", 
			title: "名称", 
			begin: "开始日期", 
			end: "结束日期", 
			desc: "描述", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "编号",
			title: "名称",
			begin: "开始日期",
			end: "结束日期",
			actions: "操作",
		},
		uiactions: {
			productplan_relationstory: "关联需求",
			productplan_relationbug: "关联Bug",
			productplan_mainedit: "编辑",
			productplan_newsubplan: "子计划",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "新建",
			tip: "新建",
		},
		deuiaction4: {
			caption: "删除",
			tip: "删除",
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
};