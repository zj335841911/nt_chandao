import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    userId:  commonLogic.appcommonhandle("用户标识",null),
    userName:  commonLogic.appcommonhandle("用户全局名",null),
    personName:  commonLogic.appcommonhandle("姓名",null),
    userCode:  commonLogic.appcommonhandle("用户工号",null),
    domains:  commonLogic.appcommonhandle("区属",null),
    mdeptId:  commonLogic.appcommonhandle("主部门",null),
    mDeptCode:  commonLogic.appcommonhandle("主部门代码",null),
    mDeptName:  commonLogic.appcommonhandle("主部门名称",null),
    bCode:  commonLogic.appcommonhandle("业务编码",null),
    orgId:  commonLogic.appcommonhandle("单位",null),
    orgCode:  commonLogic.appcommonhandle("单位代码",null),
    orgName:  commonLogic.appcommonhandle("单位名称",null),
    nickName:  commonLogic.appcommonhandle("昵称别名",null),
    sex:  commonLogic.appcommonhandle("性别",null),
    phone:  commonLogic.appcommonhandle("联系方式",null),
    email:  commonLogic.appcommonhandle("邮件",null),
    avatar:  commonLogic.appcommonhandle("社交账号",null),
    addr:  commonLogic.appcommonhandle("地址",null),
    userIcon:  commonLogic.appcommonhandle("照片",null),
    iPAddr:  commonLogic.appcommonhandle("ip地址",null),
    lang:  commonLogic.appcommonhandle("语言",null),
    memo:  commonLogic.appcommonhandle("备注",null),
    reserver:  commonLogic.appcommonhandle("保留",null),
    showOrder:  commonLogic.appcommonhandle("排序",null),
    enable:  commonLogic.appcommonhandle("the workflow instance current processing step is invalid",null),
    createDate:  commonLogic.appcommonhandle("Print",null),
    updateMan:  commonLogic.appcommonhandle("更新人",null),
    createMan:  commonLogic.appcommonhandle("建立人",null),
    updateDate:  commonLogic.appcommonhandle("更新时间",null),
  },
	views: {
		mpkmobpickuptreeview: {
			caption: commonLogic.appcommonhandle("人员",null),
		},
		mobpickuptreeview: {
			caption: commonLogic.appcommonhandle("人员",null),
		},
		headportraitmobeditview: {
			caption: commonLogic.appcommonhandle("头像",null),
		},
		treemobpickupview: {
			caption: commonLogic.appcommonhandle("人员",null),
		},
		loginmobeditview: {
			caption: commonLogic.appcommonhandle("账号信息",null),
		},
		usertreemobmpickupview: {
			caption: commonLogic.appcommonhandle("人员",null),
		},
	},
	mobmain_form: {
		details: {
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("用户标识",null), 
			srfmajortext: commonLogic.appcommonhandle("姓名",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			usericon: commonLogic.appcommonhandle("头像",null), 
			userid: commonLogic.appcommonhandle("用户标识",null), 
		},
		uiactions: {
		},
	},
	headportraitmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("Save And Close",null),
			tip: 'tbitem1',
		},
	},
};