import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    account: "用户",
    left: "预计剩余",
    consumed: "总计消耗",
    id: "编号",
    date: "日期",
    work: "work",
    task: "任务",
    dates: "日期",
    evaluationstatus: "评估状态",
    evaluationcost: "评估成本",
    evaluationtime: "评估工时",
    inputcost: "投入成本",
    evaluationdesc: "评估说明",
    taskname: "任务名称",
    project: "项目",
    projectname: "所属项目",
    taskspecies: "任务种别",
    type: "任务类型",
    year: "年",
    yearname: "年（显示）",
    month: "月",
    monthname: "月（显示）",
    monthorder: "月（排序）",
  },
	views: {
		moboptionview: {
			caption: commonLogic.appcommonhandle("任务预计",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("任务预计",null),
		},
		mobmdview9: {
			caption: commonLogic.appcommonhandle("任务预计",null),
		},
	},
	mobmain_form: {
		details: {
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("编号",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			dates: commonLogic.appcommonhandle("日期",null), 
			consumed: commonLogic.appcommonhandle("工时",null), 
			left: commonLogic.appcommonhandle("剩余",null), 
			work: commonLogic.appcommonhandle("备注",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
};