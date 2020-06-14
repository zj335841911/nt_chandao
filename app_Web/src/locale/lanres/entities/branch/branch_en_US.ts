
export default {
  fields: {
    name: '名称',
    deleted: '已删除',
    id: '编号',
    order: '排序',
    product: '所属产品',
  },
	views: {
		pmgridview: {
			caption: "平台管理",
      title: '平台管理',
		},
		pmeditview: {
			caption: "产品的分支和平台信息",
      title: '平台管理',
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
		},
		uiactions: {
		},
	},
	pmgridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "New",
			tip: "New",
		},
		seperator1: {
			caption: "",
			tip: "",
		},
		deuiaction2: {
			caption: "Edit",
			tip: "Edit {0}",
		},
	},
	pmeditviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
};