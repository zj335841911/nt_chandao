
export default {
  fields: {
    name: "名称",
    deleted: "已删除",
    id: "编号",
    order: "排序",
    product: "所属产品",
  },
	views: {
		pmgridview: {
			caption: "平台管理",
      		title: "平台管理",
		},
		pickupview: {
			caption: "产品的分支和平台信息",
      		title: "平台数据选择视图",
		},
		pmeditview: {
			caption: "产品的分支和平台信息",
      		title: "平台管理",
		},
		pminfoeditview: {
			caption: "产品的分支和平台信息",
      		title: "平台管理",
		},
		pickupgridview: {
			caption: "产品的分支和平台信息",
      		title: "平台选择表格视图",
		},
	},
	platformmanagement_form: {
		details: {
			group1: "产品的分支和平台信息基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "名称", 
			order: "排序", 
			id: "编号", 
		},
		uiactions: {
		},
	},
	platformmanagement_grid: {
		columns: {
			id: "编号",
			name: "名称",
			order: "排序",
			uagridcolumn1: "操作",
		},
		uiactions: {
        branch_edit: "编辑",
        branch_delete: "删除",
		},
	},
	main_grid: {
		columns: {
			name: "名称",
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
	pmeditviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	pmgridviewtoolbar_toolbar: {
		deuiaction3_create: {
			caption: "新建",
			tip: "新建",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
		deuiaction1: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
	},
	pminfoeditviewtoolbar_toolbar: {
	},
};