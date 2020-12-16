import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    userid: "用户标识",
    username: "用户全局名",
    personname: "姓名",
    usercode: "用户工号",
    domains: "区属",
    mdeptid: "主部门",
    mdeptcode: "主部门代码",
    mdeptname: "主部门名称",
    bcode: "业务编码",
    orgid: "单位",
    orgcode: "单位代码",
    orgname: "单位名称",
    nickname: "昵称别名",
    sex: "性别",
    phone: "联系方式",
    email: "邮件",
    avatar: "社交账号",
    addr: "地址",
    usericon: "照片",
    ipaddr: "ip地址",
    lang: "语言",
    memo: "备注",
    reserver: "保留",
    showorder: "排序",
    enable: "逻辑有效",
    createdate: "创建时间",
    updateman: "更新人",
    createman: "建立人",
    updatedate: "更新时间",
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
			caption: commonLogic.appcommonhandle("保存",null),
			tip: '保存',
		},
	},
};