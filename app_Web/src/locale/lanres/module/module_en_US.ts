
export default {
  fields: {
    root: '所属根',
    grade: '级别',
    type: '类型',
    name: '模块名称',
    order: '排序',
    owner: '负责人',
    id: 'id',
    collector: '收藏者',
    ibizshort: '简称',
    path: '路径',
    deleted: '已删除',
    parentname: '上级模块',
    branch: '平台/分支',
    parent: '上级模块',
  },
	views: {
		editview: {
			caption: "模块",
      title: '模块',
		},
		treeexpview: {
			caption: "所有产品",
      title: '所有产品',
		},
		gridview: {
			caption: "模块",
      title: '模块',
		},
		linegridview: {
			caption: "产品线",
      title: '产品线',
		},
		pickupgridview: {
			caption: "模块",
      title: '模块',
		},
		pickupview: {
			caption: "模块",
      title: '模块',
		},
	},
	main_form: {
		details: {
			group1: "module基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "id", 
			srfmajortext: "模块名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "模块名称", 
			short: "简称", 
			parentname: "上级模块", 
			parent: "上级模块", 
			order: "排序", 
			id: "id", 
		},
		uiactions: {
		},
	},
	line_grid: {
		columns: {
			name: "名称",
			short: "简称",
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			name: "模块名称",
			parentname: "上级模块",
			grade: "级别",
			order: "排序",
			owner: "负责人",
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
	linegridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "新建行",
			tip: "新建行",
		},
		deuiaction3: {
			caption: "保存行",
			tip: "保存行",
		},
		deuiaction1: {
			caption: "Remove",
			tip: "Remove {0}",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
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
	productline_treeview: {
		nodes: {
			root: '默认根节点',
			all: '所有产品',
		},
		uiactions: {
			seline: "维护产品线",
			refreshall: "刷新",
		},
	},
};