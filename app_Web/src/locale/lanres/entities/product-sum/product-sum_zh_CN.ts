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
  },
	views: {
		gridview: {
			caption: "产品汇总表",
      		title: "产品汇总表表格视图",
		},
		editview: {
			caption: "产品汇总表",
      		title: "产品汇总表编辑视图",
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
	main_grid: {
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
	default_searchform: {
		details: {
			formpage1: "常规条件", 
			closed: "筛选条件", 
			expired: "", 
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
};