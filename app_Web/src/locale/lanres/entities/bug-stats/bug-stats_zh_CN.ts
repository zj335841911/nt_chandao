export default {
  fields: {
    id: "标识",
    title: "名称",
    openedby: "由谁创建",
    bugwjj: "未解决",
    bugbydesign: "设计如此",
    bugduplicate: "重复Bug",
    bugexternal: "外部原因",
    bugfixed: "已解决",
    bugnotrepro: "无法重现",
    bugpostponed: "延期处理",
    bugwillnotfix: "不予解决",
    bugtostory: "转为需求",
    bugefficient: "有效率",
    bugtotal: "总计",
    product: "编号",
    productname: "产品名称",
    bugcnt: "Bug",
    assignedto: "指派给",
  },
	views: {
		editview: {
			caption: "Bug统计",
      		title: "Bug统计编辑视图",
		},
		gridview: {
			caption: "Bug创建表",
      		title: "Bug统计表格视图",
		},
		assigntogridview: {
			caption: "Bug指派表",
      		title: "Bug统计表格视图（Bug指派表）",
		},
	},
	main_form: {
		details: {
			group1: "Bug统计基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "标识", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "标识", 
		},
		uiactions: {
		},
	},
	bugassignedto_grid: {
		columns: {
			assignedto: "姓名",
			productname: "产品",
			bugcnt: "Bug",
			bugtotal: "总计",
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			openedby: "由谁创建",
			bugwjj: "未解决",
			bugbydesign: "设计如此",
			bugduplicate: "重复Bug",
			bugexternal: "外部原因",
			bugfixed: "已解决",
			bugnotrepro: "无法重现",
			bugpostponed: "延期处理",
			bugwillnotfix: "不予解决",
			bugtostory: "转为需求",
			bugefficient: "有效率",
			bugtotal: "总计",
		},
		uiactions: {
		},
	},
	assignedtobug_searchform: {
		details: {
			formpage1: "表单分页", 
			n_product_eq: "产品", 
			n_assignedto_eq: "指派给", 
		},
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			grouppanel1: "分组面板", 
			grouppanel2: "分组面板", 
			formpage1: "常规条件", 
			openeddatelt: "Bug创建时间", 
			openeddategt: "至", 
			producteq: "产品", 
			projecteq: "项目", 
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