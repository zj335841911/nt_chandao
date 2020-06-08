
export default {
  fields: {
    path: 'path',
    deleted: '逻辑删除标志',
    name: '名称',
    branch: 'branch',
    ibizshort: '短名称',
    order: 'order',
    grade: 'grade',
    type: '类型（story）',
    owner: 'owner',
    isleaf: '叶子模块',
    id: 'id',
    collector: 'collector',
    root: '产品',
    parent: 'id',
  },
	views: {
		gridview: {
			caption: "需求模块",
      title: '需求模块',
		},
		editview: {
			caption: "需求模块",
      title: '需求模块',
		},
	},
	main_form: {
		details: {
			group1: "产品模块基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "名称", 
			order: "order", 
			id: "id", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			name: "名称",
			root: "产品",
			short: "短名称",
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
		seperator1: {
			caption: "",
			tip: "",
		},
		deuiaction2: {
			caption: "Edit",
			tip: "Edit {0}",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
	},
	featurecaseexp_treeview: {
		nodes: {
			all: '全部',
			root: '默认根节点',
		},
		uiactions: {
		},
	},
	exp_treeview: {
		nodes: {
			all: '所有模块',
			branch: '平台',
			root: '默认根节点',
		},
		uiactions: {
		},
	},
	taskexp_treeview: {
		nodes: {
			all: '所有模块',
			root: '默认根节点',
		},
		uiactions: {
		},
	},
};