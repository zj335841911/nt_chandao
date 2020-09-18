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
    statuss: "状态",
    future: "待定",
    delta: "周期",
    oldtitle: "上一次计划名称",
    storycnt: "需求数",
    bugcnt: "bug数",
    isexpired: "是否过期",
    estimatecnt: "工时数",
  },
	views: {
		subplancreateview: {
			caption: "产品计划",
      		title: "计划",
		},
		subplangridview: {
			caption: "产品计划",
      		title: "子计划",
		},
		subplaneditview: {
			caption: "子计划",
      		title: "子计划",
		},
	},
	mainsubplan_form: {
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
			parent: "父计划", 
			parentname: "父计划名称", 
			title: "名称", 
			begin: "开始日期", 
			end: "结束日期", 
			desc: "描述", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	mainsubplan_grid: {
		columns: {
			id: "编号",
			title: "名称",
			begin: "开始日期",
			end: "结束日期",
		},
		uiactions: {
		},
	},
	subplaneditviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
	subplangridviewtoolbar_toolbar: {
		deuiaction3_newsubplan: {
			caption: "子计划",
			tip: "子计划",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
		deuiaction1: {
			caption: "导出",
			tip: "导出",
		},
	},
	subplancreateviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
};