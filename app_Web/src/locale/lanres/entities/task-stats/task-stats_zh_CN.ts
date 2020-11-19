export default {
  fields: {
    projectname: "项目名称",
    finshedby: "完成者",
    totalestimate: "预计总工时",
    totalconsumed: "消耗总工时",
    totalleft: "剩余总工时",
    project: "项目",
    id: "编号",
    name: "名称",
  },
	views: {
		userfinishtasksumgridview: {
			caption: "用户完成任务汇总",
      		title: "任务统计表格视图",
		},
	},
	userfinishtasksum_grid: {
		nodata: "",
		columns: {
			projectname: "项目名称",
			finshedby: "完成者",
			totalestimate: "预计总工时",
			totalconsumed: "消耗总工时",
			totalleft: "剩余总工时",
		},
		uiactions: {
		},
	},
	userfinishtask_searchform: {
		details: {
			formpage1: "表单分页", 
			n_project_eq: "项目", 
			n_finishedby_eq: "完成者", 
		},
		uiactions: {
		},
	},
	userfinishtasksumgridviewtoolbar_toolbar: {
	},
};