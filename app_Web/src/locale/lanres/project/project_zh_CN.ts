export default {
  fields: {
    openedversion: '当前系统版本',
    begin: '开始时间',
    acl: '访问控制',
    deleted: '已删除',
    desc: '项目描述',
    pm: '项目负责人',
    id: '项目编号',
    name: '项目名称',
    substatus: '子状态',
    order: '项目排序',
    rd: '发布负责人',
    whitelist: '分组白名单',
    pri: '优先级',
    end: '结束日期',
    canceleddate: '取消日期',
    code: '项目代号',
    catid: 'catID',
    statge: 'statge',
    canceledby: '由谁取消',
    iscat: 'isCat',
    openeddate: '创建日期',
    closedby: '由谁关闭',
    type: '项目类型',
    po: '产品负责人',
    status: '项目状态',
    days: '可用工作日',
    team: '团队名称',
    closeddate: '关闭日期',
    openedby: '由谁创建',
    qd: '测试负责人',
    parentname: 'parent',
    parent: '父项目',
  },
	views: {
		tasktreeexpview: {
			caption: '项目',
      title: '项目',
		},
		burndownchartview: {
			caption: '项目',
      title: '项目',
		},
		curproductgridview: {
			caption: '项目',
      title: '项目',
		},
		leftsidebarlistview: {
			caption: '项目',
      title: '项目',
		},
		gridview: {
			caption: '项目',
      title: '项目',
		},
		maindashboardview: {
			caption: '项目',
      title: '项目',
		},
		dashboardinfoview: {
			caption: '项目',
      title: '项目',
		},
		editview: {
			caption: '项目',
      title: '项目',
		},
		maintabexpview: {
			caption: '项目',
      title: '项目',
		},
	},
	dashboardinfo_form: {
		details: {
			group1: 'project基本信息', 
			druipart1: '', 
			grouppanel6: '关联产品', 
			druipart2: '', 
			grouppanel7: '关联计划', 
			grouppanel2: '分组面板', 
			grouppanel3: '分组面板', 
			grouppanel1: '工时统计', 
			grouppanel4: '基本信息', 
			grouppanel5: '访问控制', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: '项目编号', 
			srfmajortext: '项目名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			id: '项目编号', 
			code: '项目代号', 
			name: '项目名称', 
			desc: '项目描述', 
			type: '项目类型', 
			status: '项目状态', 
			begin: '开始时间', 
			end: '结束日期', 
			days: '可用工作日', 
			formitem: '预计', 
			formitem1: '消耗', 
			formitem2: '剩余', 
			formitem3: '需求', 
			formitem4: '任务', 
			formitem5: 'Bug', 
			acl: '访问控制', 
		},
		uiactions: {
		},
	},
	main_form: {
		details: {
			group1: 'project基本信息', 
			formpage1: '基本信息', 
			group2: '操作信息', 
			formpage2: '其它', 
			srforikey: '', 
			srfkey: '项目编号', 
			srfmajortext: '项目名称', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			name: '项目名称', 
			id: '项目编号', 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: 'ID',
			name: '项目名称',
			code: '项目代号',
			status: '项目状态',
			end: '结束日期',
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
	leftsidebarlistviewtoolbar_toolbar: {
		deuiaction1: {
			caption: '新建',
			tip: '新建',
		},
		seperator1: {
			caption: '',
			tip: '',
		},
		deuiaction2: {
			caption: '刷新',
			tip: '刷新',
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
	curproductgridviewtoolbar_toolbar: {
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
};