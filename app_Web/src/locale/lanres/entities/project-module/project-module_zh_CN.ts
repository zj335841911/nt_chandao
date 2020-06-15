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
	},
	main_grid: {
		columns: {
			name: '名称',
			short: '简称',
		},
		uiactions: {
		},
	},
	maingridviewtoolbar_toolbar: {
		tbitem3: {
			caption: '新建',
			tip: '新建',
		},
		tbitem4: {
			caption: '编辑',
			tip: '编辑',
		},
		tbitem6: {
			caption: '拷贝',
			tip: '拷贝',
		},
		tbitem7: {
			caption: '-',
			tip: '',
		},
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
		tbitem13: {
			caption: '导出',
			tip: '导出',
		},
		tbitem10: {
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
		tbitem23: {
			caption: '数据导入',
			tip: '数据导入',
		},
		tbitem17: {
			caption: '-',
			tip: '',
		},
		tbitem18: {
			caption: '帮助',
			tip: '帮助',
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
};