export default {
  fields: {
    manager: '负责人',
    grade: 'grade',
    function: 'function',
    order: 'order',
    path: 'path',
    position: 'position',
    id: 'id',
    name: '部门名称',
    parentname: '上级部门',
    parent: 'parent',
    isleaf: '无子部门',
  },
	views: {
		pickupview: {
			caption: '部门',
      title: '部门',
		},
		maingridview: {
			caption: '部门',
      title: '部门',
		},
		editview: {
			caption: '部门信息',
      title: '部门信息',
		},
		pickupgridview: {
			caption: '部门',
      title: '部门',
		},
	},
	main_form: {
		details: {
			group1: '基本信息', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: 'id', 
			srfmajortext: '部门名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			name: '部门名称', 
			parentname: '上级部门', 
			manager: '负责人', 
			id: 'id', 
			parent: 'parent', 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: 'ID',
			name: '部门',
			parentname: '上级部门',
			manager: '负责人',
			order: '排序值',
		},
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: '常规条件', 
		},
		uiactions: {
		},
	},
	maingridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: '新建',
			tip: '新建',
		},
		deuiaction4: {
			caption: '删除',
			tip: '删除',
		},
		seperator1: {
			caption: '',
			tip: '',
		},
		deuiaction2: {
			caption: '刷新',
			tip: '刷新',
		},
		seperator3: {
			caption: '',
			tip: '',
		},
		deuiaction5: {
			caption: '导出',
			tip: '导出',
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: '保存',
			tip: '保存',
		},
		tbitem4: {
			caption: '保存并新建',
			tip: '保存并新建',
		},
		tbitem5: {
			caption: '保存并关闭',
			tip: '保存并关闭',
		},
		tbitem6: {
			caption: '-',
			tip: '',
		},
		tbitem7: {
			caption: '删除',
			tip: '删除',
		},
		tbitem8: {
			caption: '-',
			tip: '',
		},
		tbitem12: {
			caption: '新建',
			tip: '新建',
		},
		tbitem13: {
			caption: '-',
			tip: '',
		},
		tbitem14: {
			caption: '拷贝',
			tip: '拷贝',
		},
		tbitem16: {
			caption: '-',
			tip: '',
		},
		tbitem23: {
			caption: '第一个记录',
			tip: '第一个记录',
		},
		tbitem24: {
			caption: '上一个记录',
			tip: '上一个记录',
		},
		tbitem25: {
			caption: '下一个记录',
			tip: '下一个记录',
		},
		tbitem26: {
			caption: '最后一个记录',
			tip: '最后一个记录',
		},
		tbitem21: {
			caption: '-',
			tip: '',
		},
		tbitem22: {
			caption: '帮助',
			tip: '帮助',
		},
	},
};