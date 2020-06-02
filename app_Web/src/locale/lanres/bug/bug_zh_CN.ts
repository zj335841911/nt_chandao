export default {
  fields: {
    severity: '严重程度',
    storyversion: '需求版本',
    linkbug: '相关Bug',
    activateddate: '激活日期',
    assignedto: '指派给',
    resolution: '解决方案',
    lastediteddate: '修改日期',
    result: 'result',
    keywords: '关键词',
    closedby: '由谁关闭',
    browser: '浏览器',
    steps: '重现步骤',
    v2: 'v2',
    confirmed: '是否确认',
    openedby: '由谁创建',
    activatedcount: '激活次数',
    openeddate: '创建日期',
    closeddate: '关闭日期',
    mailto: '抄送给',
    assigneddate: '指派日期',
    deadline: '截止日期',
    color: '标题颜色',
    resolveddate: '解决日期',
    type: 'Bug类型',
    status: 'Bug状态',
    openedbuild: '影响版本',
    v1: 'v1',
    deleted: '已删除',
    lines: 'lines',
    substatus: '子状态',
    id: 'Bug编号',
    found: 'found',
    resolvedby: '解决者',
    pri: '优先级',
    os: '操作系统',
    hardware: 'hardware',
    lasteditedby: '最后修改者',
    title: 'Bug标题',
    productname: '产品',
    projectname: '项目',
    storyname: '需求',
    caseversion: '用例版本',
    repotype: '代码类型',
    tostory: '转需求',
    entry: '应用',
    product: '所属产品',
    totask: '转任务',
    plan: '所属计划',
    module: '所属模块',
    branch: '平台/分支',
    duplicatebug: '重复ID',
    repo: '代码',
    story: '相关需求',
    ibizcase: '相关用例',
    project: '所属项目',
    task: '相关任务',
    testtask: '测试单',
    resolvedbuild: '解决版本',
  },
	views: {
		plansubgridview: {
			caption: 'Bug',
      title: 'Bug',
		},
		maindashboardview: {
			caption: 'Bug',
      title: 'Bug',
		},
		pickupgridview: {
			caption: 'Bug',
      title: 'Bug',
		},
		mpickupview: {
			caption: '关联Bug',
      title: '关联Bug',
		},
		editview: {
			caption: 'Bug',
      title: 'Bug',
		},
		gridview9_assignedtome: {
			caption: 'Bug',
      title: 'Bug',
		},
		gridview: {
			caption: 'Bug',
      title: 'Bug',
		},
	},
	main_form: {
		details: {
			group1: 'bug基本信息', 
			formpage1: '基本信息', 
			group2: '操作信息', 
			formpage2: '其它', 
			srfupdatedate: '修改日期', 
			srforikey: '', 
			srfkey: 'Bug编号', 
			srfmajortext: 'Bug标题', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			title: 'Bug标题', 
			id: 'Bug编号', 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: 'Bug编号',
			pri: 'P',
			confirmed: '是否确认',
			title: 'Bug标题',
			status: 'Bug状态',
			openedby: '由谁创建',
			openeddate: '创建日期',
			assignedto: '指派给',
			resolution: '方案',
			uagridcolumn1: '操作',
		},
		uiactions: {
		},
	},
	main_plansub_grid: {
		columns: {
			id: 'Bug编号',
			pri: 'P',
			confirmed: '是否确认',
			title: 'Bug标题',
			status: 'Bug状态',
			openedby: '由谁创建',
			openeddate: '创建日期',
			assignedto: '指派给',
		},
		uiactions: {
		},
	},
	pickupgird_grid: {
		columns: {
			id: 'Bug编号',
			pri: 'P',
			confirmed: '是否确认',
			title: 'Bug标题',
			status: 'Bug状态',
			openedby: '由谁创建',
			openeddate: '创建日期',
			assignedto: '指派给',
		},
		uiactions: {
		},
	},
	main2_grid: {
		columns: {
			id: 'ID',
			pri: '级别',
			title: 'Bug标题',
			status: '状态',
		},
		uiactions: {
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
	},
	plansubgridviewtoolbar_toolbar: {
		deuiaction3_planrelationbug: {
			caption: '关联Bug',
			tip: '关联Bug',
		},
		seperator2: {
			caption: '',
			tip: '',
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
	},
};