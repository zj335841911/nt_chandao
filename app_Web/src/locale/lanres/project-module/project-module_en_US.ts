
export default {
  fields: {
    type: '类型（task）',
    collector: 'collector',
    id: 'id',
    deleted: '逻辑删除标志',
    isleaf: '叶子模块',
    path: 'path',
    owner: 'owner',
    ibizshort: '简称',
    name: '名称',
    grade: 'grade',
    order: '排序值',
    branch: 'branch',
    parent: 'id',
    root: '项目',
    rootname: '所属项目',
    parentname: '上级模块',
  },
	views: {
		quickcfgview: {
			caption: "任务模块",
      title: '任务模块',
		},
		maingridview: {
			caption: "任务模块",
      title: '任务模块',
		},
		treeexpview: {
			caption: "任务模块",
      title: '任务模块',
		},
	},
	main_form: {
		details: {
			group1: "模块信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			root: "所属项目", 
			parent: "上级模块", 
			rootname: "所属项目", 
			parentname: "上级模块", 
			name: "名称", 
			short: "简称", 
			order: "排序值", 
			id: "id", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			name: "名称",
			short: "简称",
			uagridcolumn1: "操作",
		},
		uiactions: {
			remove: "Remove",
		},
	},
	maingridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "新建行",
			tip: "新建行",
		},
		deuiaction3: {
			caption: "保存行",
			tip: "保存行",
		},
	},
	treeexpviewtreeexpbar_toolbar_toolbar: {
		deuiaction1: {
			caption: "修复",
			tip: "修复",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
	},
	taskmoduleexp_treeview: {
		nodes: {
			all: '所有模块',
			root: '默认根节点',
		},
		uiactions: {
			refreshparent: "刷新",
		},
	},
	moduleexp_treeview: {
		nodes: {
			all: '所有模块',
			root: '默认根节点',
		},
		uiactions: {
			openquickcfgview: "编辑",
			refreshall: "刷新",
			refreshparent: "刷新",
			openquickcfgview: "编辑",
		},
	},
};