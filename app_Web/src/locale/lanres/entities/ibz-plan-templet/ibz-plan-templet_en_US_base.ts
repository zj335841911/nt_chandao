import commonLogic from '@/locale/logic/common/common-logic';

export default {
  fields: {
    ibzplantempletid: commonLogic.appcommonhandle("产品计划模板标识",null),
    ibzplantempletname: commonLogic.appcommonhandle("模板名称",null),
    createman: commonLogic.appcommonhandle("建立人",null),
    createdate: commonLogic.appcommonhandle("建立时间",null),
    updateman: commonLogic.appcommonhandle("更新人",null),
    updatedate: commonLogic.appcommonhandle("更新时间",null),
    plans: commonLogic.appcommonhandle("计划",null),
    product: commonLogic.appcommonhandle("产品",null),
  },
	views: {
		optionview: {
			caption: commonLogic.appcommonhandle("产品计划模板",null),
      		title: commonLogic.appcommonhandle("产品计划模板选项操作视图",null),
		},
	},
	main_form: {
		details: {
			group1: commonLogic.appcommonhandle("产品计划模板基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("产品计划模板标识",null), 
			srfmajortext: commonLogic.appcommonhandle("模板名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			ibz_plantempletname: commonLogic.appcommonhandle("模板名称",null), 
			plans: commonLogic.appcommonhandle("计划",null), 
			product: commonLogic.appcommonhandle("产品",null), 
			ibz_plantempletid: commonLogic.appcommonhandle("产品计划模板标识",null), 
		},
		uiactions: {
		},
	},
};