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
			caption: '需求模块',
      title: '产品模块表格视图',
		},
		treeexpview: {
			caption: '需求模块',
      title: '需求模块树导航视图',
		},
		editview: {
			caption: '需求模块',
      title: '产品模块编辑视图',
		},
	},
	main_form: {
		details: {
			group1: '产品模块基本信息', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: 'id', 
			srfmajortext: '名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			name: '名称', 
			order: 'order', 
			id: 'id', 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			name: '名称',
			short: '简称',
		},
		uiactions: {
		},
	},
	gridviewtoolbar_toolbar: {
		tbitem24: {
			caption: '行编辑',
			tip: '行编辑',
		},
		tbitem25: {
			caption: '新建行',
			tip: '新建行',
		},
		tbitem26: {
			caption: '-',
			tip: '',
		},
		tbitem8: {
			caption: '删除',
			tip: '删除',
		},
		tbitem9: {
			caption: '-',
			tip: '',
		},
		tbitem16: {
			caption: '其它',
			tip: '其它',
		},
		tbitem21: {
			caption: '导出数据模型',
			tip: '导出数据模型',
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: '保存并关闭',
			tip: '保存并关闭',
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
	moduleexp_treeview: {
		nodes: {
			root: '默认根节点',
			branch: '平台',
			all: '所有模块',
		},
		uiactions: {
		},
	},
	bugexp_treeview: {
		nodes: {
			root: '默认根节点',
			all: '全部',
		},
		uiactions: {
		},
	},
	caseexp_treeview: {
		nodes: {
			all: '全部',
			root: '默认根节点',
		},
		uiactions: {
		},
	},
};