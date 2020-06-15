
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
			caption: "任务模块",
      title: '实体表格视图',
		},
		treeexpview: {
			caption: "任务模块",
      title: '任务模块树导航视图',
		},
	},
	main_grid: {
		columns: {
			name: "名称",
			short: "简称",
		},
		uiactions: {
		},
	},
	maingridviewtoolbar_toolbar: {
		tbitem3: {
			caption: "New",
			tip: "New",
		},
		tbitem4: {
			caption: "Edit",
			tip: "Edit {0}",
		},
		tbitem6: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem24: {
			caption: "行编辑",
			tip: "行编辑",
		},
		tbitem25: {
			caption: "新建行",
			tip: "新建行",
		},
		tbitem26: {
			caption: "-",
			tip: "",
		},
		tbitem8: {
			caption: "Remove",
			tip: "Remove {0}",
		},
		tbitem9: {
			caption: "-",
			tip: "",
		},
		tbitem13: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
		tbitem10: {
			caption: "-",
			tip: "",
		},
		tbitem16: {
			caption: "其它",
			tip: "其它",
		},
		tbitem21: {
			caption: "Export Data Model",
			tip: "导出数据模型",
		},
		tbitem23: {
			caption: "数据导入",
			tip: "数据导入",
		},
		tbitem17: {
			caption: "-",
			tip: "",
		},
		tbitem18: {
			caption: "Help",
			tip: "Help",
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