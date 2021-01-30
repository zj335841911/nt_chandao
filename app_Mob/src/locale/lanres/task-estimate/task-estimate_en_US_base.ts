import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    account:  commonLogic.appcommonhandle("用户",null),
    left:  commonLogic.appcommonhandle("预计剩余",null),
    consumed:  commonLogic.appcommonhandle("总计消耗",null),
    id:  commonLogic.appcommonhandle("编号",null),
    date:  commonLogic.appcommonhandle("日期",null),
    work:  commonLogic.appcommonhandle("work",null),
    task:  commonLogic.appcommonhandle("任务",null),
    dates:  commonLogic.appcommonhandle("日期",null),
    evaluationstatus:  commonLogic.appcommonhandle("评估状态",null),
    evaluationcost:  commonLogic.appcommonhandle("评估成本",null),
    evaluationtime:  commonLogic.appcommonhandle("评估工时",null),
    inputcost:  commonLogic.appcommonhandle("投入成本",null),
    evaluationdesc:  commonLogic.appcommonhandle("评估说明",null),
    taskName:  commonLogic.appcommonhandle("任务名称",null),
    project:  commonLogic.appcommonhandle("项目",null),
    projectName:  commonLogic.appcommonhandle("所属项目",null),
    taskspecies:  commonLogic.appcommonhandle("任务种别",null),
    type:  commonLogic.appcommonhandle("任务类型",null),
    year:  commonLogic.appcommonhandle("年",null),
    yearname:  commonLogic.appcommonhandle("年（显示）",null),
    month:  commonLogic.appcommonhandle("月",null),
    monthname:  commonLogic.appcommonhandle("月（显示）",null),
    monthorder:  commonLogic.appcommonhandle("月（排序）",null),
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