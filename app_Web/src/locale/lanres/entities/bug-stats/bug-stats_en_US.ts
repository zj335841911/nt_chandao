
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
	default_searchform: {
		details: {
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
			caption: "Save",
			tip: "Save",
		},
		tbitem4: {
			caption: "Save And New",
			tip: "Save And New",
		},
		tbitem5: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
		tbitem7: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
		},
	},
};