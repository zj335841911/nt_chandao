export default {
  fields: {
    stories: '完成的需求',
    marker: '里程碑',
    id: 'ID',
    leftbugs: '遗留的Bug',
    bugs: '解决的Bug',
    deleted: '已删除',
    name: '发布名称',
    date: '发布日期',
    status: '状态',
    substatus: '子状态',
    desc: '描述',
    buildname: '版本',
    product: '产品',
    build: '版本',
    branch: '平台/分支',
  },
	views: {
		gridview: {
			caption: '发布',
      title: '发布',
		},
		editview: {
			caption: '发布',
      title: '发布',
		},
	},
	main_form: {
		details: {
			group1: 'release基本信息', 
			formpage1: '基本信息', 
			group2: '操作信息', 
			formpage2: '其它', 
			srforikey: '', 
			srfkey: 'ID', 
			srfmajortext: '发布名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			name: '发布名称', 
			id: 'ID', 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: 'ID',
			name: '发布名称',
			buildname: '版本',
			status: '状态',
			date: '发布日期',
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
	gridviewtoolbar_toolbar: {
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
		tbitem19: {
			caption: '过滤',
			tip: '过滤',
		},
		tbitem18: {
			caption: '帮助',
			tip: '帮助',
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
			caption: '删除并关闭',
			tip: '删除并关闭',
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