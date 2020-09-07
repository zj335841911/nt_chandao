export default {
  fields: {
    id: "编号",
    title: "需求名称",
    module: "id",
    product: "编号",
    ibizid: "IBIZ标识",
    source: "需求来源",
    sourcenote: "来源备注",
    ibiz_sourceobject: "来源对象",
    ibiz_sourcename: "来源对象名称",
    ibiz_sourceid: "来源对象标识",
    version: "版本号",
    estimate: "预计工时",
    keywords: "关键词",
    openeddate: "创建日期",
    lastediteddate: "最后修改日期",
    deleted: "已删除",
    openedby: "由谁创建",
    status: "状态",
    type: "需求类型",
    stage: "需求阶段",
    pri: "优先级",
    color: "颜色",
    project: "项目",
    stagedby: "设置阶段者",
    assignedto: "指派给",
    assigneddate: "指派日期",
    reviewedby: "由谁评审",
    revieweddate: "评审时间",
    branch: "平台",
    mailto: "抄送给",
    lasteditedby: "最后修改者",
    childstories: "需求细分",
    linkstories: "相关需求",
    closedby: "由谁关闭",
    substatus: "子状态",
    closeddate: "关闭日期	",
    closedreason: "关闭原因",
    tobug: "转Bug",
    duplicatestory: "重复需求",
    frombug: "来源Bug",
  },
	views: {
		gridview: {
			caption: "需求",
      		title: "需求表格视图",
		},
		editview: {
			caption: "需求",
      		title: "需求编辑视图",
		},
	},
	main_form: {
		details: {
			group1: "需求基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "编号", 
			srfmajortext: "需求名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "编号", 
			title: "需求名称", 
			ibiz_id: "IBIZ标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "编号",
			title: "需求名称",
			ibiz_id: "IBIZ标识",
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
	gridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "新建",
			tip: "新建",
		},
		seperator1: {
			caption: "",
			tip: "",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
		seperator3: {
			caption: "",
			tip: "",
		},
		deuiaction4: {
			caption: "导出",
			tip: "导出",
		},
	},
	editviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
	},
};