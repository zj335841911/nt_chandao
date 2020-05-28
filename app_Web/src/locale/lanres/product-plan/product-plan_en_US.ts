
export default {
  fields: {
    title: '名称',
    id: '编号',
    begin: '开始日期',
    desc: '描述',
    end: '结束日期',
    deleted: '已删除',
    order: '排序',
    parentname: '父计划名称',
    branch: '平台/分支',
    parent: '父计划',
    product: '产品',
  },
	views: {
		maintabexp: {
			caption: "产品计划",
      title: '产品计划',
		},
		maineditview: {
			caption: "产品计划",
      title: '产品计划',
		},
		subplaneditview: {
			caption: "产品计划",
      title: '产品计划',
		},
		gridview: {
			caption: "产品计划",
      title: '产品计划',
		},
		editview: {
			caption: "产品计划",
      title: '产品计划',
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
	mainsubplan_form: {
		details: {
			grouppanel1: "分组面板", 
			group1: "productplan基本信息", 
			button2: "关闭", 
			button1: "Save And Close", 
			grouppanel3: "分组面板", 
			grouppanel2: "分组面板", 
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
			exit: "关闭",
			saveandexit: "Save And Close",
		},
	},
	main_grid: {
		columns: {
			id: "编号",
			title: "名称",
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
		deuiaction2: {
			caption: "Save",
			tip: "Save",
		},
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	maintabexptoolbar_toolbar: {
		deuiaction1_newsubplan: {
			caption: "子计划",
			tip: "子计划",
		},
		deuiaction1_mainedit: {
			caption: "编辑",
			tip: "编辑",
		},
		deuiaction1_remove: {
			caption: "Remove",
			tip: "Remove {0}",
		},
	},
};