import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    projectname: commonLogic.appcommonhandle("项目名称",null),
    totalestimate: commonLogic.appcommonhandle("预计总工时",null),
    totalconsumed: commonLogic.appcommonhandle("消耗总工时",null),
    totalleft: commonLogic.appcommonhandle("剩余总工时",null),
    project: commonLogic.appcommonhandle("项目",null),
    id: commonLogic.appcommonhandle("编号",null),
    name: commonLogic.appcommonhandle("名称",null),
    finishedby: commonLogic.appcommonhandle("完成者",null),
    taskefficient: commonLogic.appcommonhandle("效率",null),
  },
	views: {
		userfinishtasksumgridview: {
			caption: commonLogic.appcommonhandle("用户完成任务汇总",null),
      		title: commonLogic.appcommonhandle("任务统计表格视图",null),
		},
	},
	userfinishtasksum_grid: {
		columns: {
			projectname: commonLogic.appcommonhandle("项目名称",null),
			finishedby: commonLogic.appcommonhandle("完成者",null),
			totalestimate: commonLogic.appcommonhandle("预计总工时",null),
			totalconsumed: commonLogic.appcommonhandle("消耗总工时",null),
			taskefficient: commonLogic.appcommonhandle("效率",null),
		},
		nodata:commonLogic.appcommonhandle("",null),
		uiactions: {
		},
	},
	userfinishtask_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("表单分页",null), 
			n_project_eq: commonLogic.appcommonhandle("项目",null), 
			n_finishedby_eq: commonLogic.appcommonhandle("完成者",null), 
		},
		uiactions: {
		},
	},
	userfinishtasksumgridviewtoolbar_toolbar: {
	},
};