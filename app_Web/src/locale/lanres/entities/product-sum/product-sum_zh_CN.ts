export default {
  fields: {
    id: "主键标识",
    name: "产品名称",
    po: "产品负责人",
    plan: "计划",
    begin: "开始日期",
    end: "结束日期",
    waitstorycnt: "草稿",
    activestorycnt: "激活",
    changedstorycnt: "已变更",
    closedstorycnt: "已关闭",
    storycnt: "总计",
    bugcnt: "Bug数",
    waitstagestorycnt: "未开始阶段需求数量",
    planedstagestorycnt: "已计划阶段需求数量",
    projectedstagestorycnt: "已立项阶段需求数量",
    developingstagestorycnt: "研发中阶段需求数量",
    developedstagestorycnt: "研发完毕阶段需求数量",
    testingstagestorycnt: "测试中阶段需求数量",
    testedstagestorycnt: "测试完毕阶段需求数量",
    verifiedstagestorycnt: "已验收阶段需求数量",
    releasedstagestorycnt: "已发布阶段需求数量",
    closedstagestorycnt: "已关闭阶段需求数量",
    waitstagestoryhours: "未开始阶段需求工时",
    closedstagestoryhours: "已关闭阶段需求工时",
    releasedstagestoryhours: "已发布阶段需求工时",
    verifiedstagestoryhours: "已验收阶段需求工时",
    testedstagestoryhours: "测试完毕阶段需求工时",
    testingstagestoryhours: "测试中阶段需求工时",
    developedstagestoryhours: "研发完毕阶段需求工时",
    developingstagestoryhours: "研发中阶段需求工时",
    projectedstagestoryhours: "已立项阶段需求工时",
    planedstagestoryhours: "已计划阶段需求工时",
    totalhours: "总工时",
  },
	views: {
		storysumgridview: {
			caption: "需求汇总",
      		title: "产品汇总表表格视图",
		},
		pochartview9: {
			caption: "产品汇总表",
      		title: "产品汇总表图表视图",
		},
		gridview: {
			caption: "产品汇总表",
      		title: "产品汇总表表格视图",
		},
		usr2gridview: {
			caption: "产品汇总表",
      		title: "产品计划数和需求数实体表格视图",
		},
		editview: {
			caption: "产品汇总表",
      		title: "产品汇总表编辑视图",
		},
		qachartview9: {
			caption: "产品汇总表",
      		title: "产品汇总表图表视图",
		},
		usr3gridview: {
			caption: "产品汇总表",
      		title: "产品汇总表表格视图",
		},
	},
	main_form: {
		details: {
			group1: "产品汇总表基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "主键标识", 
			srfmajortext: "产品名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "主键标识", 
		},
		uiactions: {
		},
	},
	productplancntandstorycnt_po_grid: {
		nodata: "",
		columns: {
			name: "产品名称",
			plan: "计划数",
			storycnt: "需求数",
		},
		uiactions: {
		},
	},
	productbugcnt_qa_grid: {
		nodata: "",
		columns: {
			name: "产品名称",
			bugcnt: "创建bug数",
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			name: "产品名称",
			po: "产品负责人",
			plan: "计划",
			begin: "开始日期",
			end: "结束日期",
			waitstorycnt: "草稿",
			activestorycnt: "激活",
			changedstorycnt: "已变更",
			closedstorycnt: "已关闭",
			storycnt: "总计",
		},
		uiactions: {
		},
	},
	productstorysum_grid: {
		nodata: "",
		columns: {
			name: "产品名称",
			po: "产品负责人",
			waitstagestorycnt: "未开始",
			planedstagestorycnt: "已计划",
			projectedstagestorycnt: "已立项",
			developingstagestorycnt: "研发中",
			developedstagestorycnt: "研发完毕",
			testingstagestorycnt: "测试中",
			testedstagestorycnt: "测试完毕",
			verifiedstagestorycnt: "已验收",
			releasedstagestorycnt: "已发布",
			closedstagestorycnt: "已关闭",
			storycnt: "总计",
		},
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			rawitem1: "", 
			formpage1: "常规条件", 
			closed: "关闭产品", 
			expired: "过期计划", 
			n_id_eq: "产品", 
			n_plan_eq: "计划", 
		},
		uiactions: {
		},
	},
	productstorysum_searchform: {
		details: {
			rawitem1: "", 
			formpage1: "常规条件", 
			closed: "关闭产品", 
			n_id_eq: "产品", 
		},
		uiactions: {
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "保存",
			tip: "保存",
		},
		tbitem4: {
			caption: "保存并新建",
			tip: "保存并新建",
		},
		tbitem5: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
		tbitem7: {
			caption: "删除",
			tip: "删除",
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "导出",
			tip: "导出",
		},
	},
	storysumgridviewtoolbar_toolbar: {
		deuiaction2: {
			caption: "导出",
			tip: "导出",
		},
	},
	productcreatestory_po_chart: {
		nodata: "",
	},
	productbugcnt_qa_chart: {
		nodata: "",
	},
};