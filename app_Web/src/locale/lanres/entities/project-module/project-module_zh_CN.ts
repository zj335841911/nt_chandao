export default {
  fields: {
    type: '类型（task）',
    collector: 'collector',
    id: 'id',
    deleted: '逻辑删除标志',
    isleaf: '叶子模块',
    path: 'path',
    owner: 'owner',
    ibizshort: '短名称',
    name: '名称',
    grade: 'grade',
    order: 'order',
    branch: 'branch',
    parent: 'id',
    root: '项目',
  },
	views: {
		maingridview: {
			caption: '任务模块',
      title: '实体表格视图',
		},
		treeexpview: {
			caption: '任务模块',
      title: '任务模块树导航视图',
		},
	},
	main_grid: {
		columns: {
			name: '名称',
			short: '简称',
			uagridcolumn1: '操作',
		},
		uiactions: {
			remove: '删除',
		},
	},
	maingridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: '新建行',
			tip: '新建行',
		},
		deuiaction3: {
			caption: '保存行',
			tip: '保存行',
		},
	},
	treeexpviewtreeexpbar_toolbar_toolbar: {
		deuiaction1: {
			caption: '修复',
			tip: '修复',
		},
		deuiaction2: {
			caption: '刷新',
			tip: '刷新',
		},
	},
	taskmoduleexp_treeview: {
		nodes: {
			all: '所有模块',
			root: '默认根节点',
		},
		uiactions: {
		},
	},
	moduleexp_treeview: {
		nodes: {
			all: '所有模块',
			root: '默认根节点',
		},
		uiactions: {
		},
	},
};