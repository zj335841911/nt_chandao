import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    role: "角色",
    limited: "受限用户",
    total: "总计可用",
    username: "用户",
    days: "可用工日",
    exitdate: "退场时间",
    type: "团队类型",
    order: "排序",
    id: "编号",
    consumed: "总计消耗",
    account: "用户",
    estimate: "最初预计",
    join: "加盟日",
    hours: "可用工时/天",
    taskcnt: "任务数",
    left: "预计剩余",
    pm: "项目经理",
    projectname: "所属项目",
    root: "项目编号",
  },
	views: {
		projectteammobeditview: {
			caption: commonLogic.appcommonhandle("项目团队",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("项目团队",null),
		},
	},
	projectteammob_form: {
		details: {
			group1: commonLogic.appcommonhandle("项目团队基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("用户",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			account: commonLogic.appcommonhandle("用户",null), 
			role: commonLogic.appcommonhandle("角色",null), 
			join: commonLogic.appcommonhandle("加盟日",null), 
			days: commonLogic.appcommonhandle("可用工日",null), 
			hours: commonLogic.appcommonhandle("可用工时/天",null), 
			total: commonLogic.appcommonhandle("总计可用",null), 
			limited: commonLogic.appcommonhandle("受限用户",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	projectteammobeditviewrighttoolbar_toolbar: {
	},
	mobmdviewrighttoolbar_toolbar: {
	},
};