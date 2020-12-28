import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    fails:  commonLogic.appcommonhandle("fails",null),
    address:  commonLogic.appcommonhandle("通讯地址",null),
    password:  commonLogic.appcommonhandle("密码",null),
    weixin:  commonLogic.appcommonhandle("微信",null),
    dingding:  commonLogic.appcommonhandle("钉钉",null),
    account:  commonLogic.appcommonhandle("账户",null),
    ranzhi:  commonLogic.appcommonhandle("ranzhi",null),
    slack:  commonLogic.appcommonhandle("slack",null),
    realname:  commonLogic.appcommonhandle("真实姓名",null),
    locked:  commonLogic.appcommonhandle("locked",null),
    scoreLevel:  commonLogic.appcommonhandle("scoreLevel",null),
    avatar:  commonLogic.appcommonhandle("avatar",null),
    zipcode:  commonLogic.appcommonhandle("zipcode",null),
    dept:  commonLogic.appcommonhandle("所属部门",null),
    commiter:  commonLogic.appcommonhandle("源代码账户",null),
    deleted:  commonLogic.appcommonhandle("逻辑删除标志",null),
    last:  commonLogic.appcommonhandle("最后登录",null),
    skype:  commonLogic.appcommonhandle("skype",null),
    score:  commonLogic.appcommonhandle("score",null),
    whatsapp:  commonLogic.appcommonhandle("whatsapp",null),
    visits:  commonLogic.appcommonhandle("访问次数",null),
    mobile:  commonLogic.appcommonhandle("手机",null),
    clientLang:  commonLogic.appcommonhandle("clientLang",null),
    join:  commonLogic.appcommonhandle("入职日期",null),
    ip:  commonLogic.appcommonhandle("ip",null),
    email:  commonLogic.appcommonhandle("邮箱",null),
    nickname:  commonLogic.appcommonhandle("nickname",null),
    phone:  commonLogic.appcommonhandle("电话",null),
    birthday:  commonLogic.appcommonhandle("birthday",null),
    id:  commonLogic.appcommonhandle("ID",null),
    qq:  commonLogic.appcommonhandle("QQ",null),
    gender:  commonLogic.appcommonhandle("男女",null),
    role:  commonLogic.appcommonhandle("职位",null),
    clientStatus:  commonLogic.appcommonhandle("clientStatus",null),
    mytasks:  commonLogic.appcommonhandle("我的任务",null),
    mybugs:  commonLogic.appcommonhandle("我的bugs",null),
    myebugs:  commonLogic.appcommonhandle("我的过期bug数",null),
    mystorys:  commonLogic.appcommonhandle("我的需求数",null),
    products:  commonLogic.appcommonhandle("未关闭产品数",null),
    eprojects:  commonLogic.appcommonhandle("过期项目数",null),
    projects:  commonLogic.appcommonhandle("未关闭项目数",null),
    myetasks:  commonLogic.appcommonhandle("我的过期任务数",null),
    mytodocnt:  commonLogic.appcommonhandle("我的待办数",null),
    myfavoritestorys:  commonLogic.appcommonhandle("我收藏的需求数",null),
    myfavoritebugs:  commonLogic.appcommonhandle("我收藏的bugs",null),
    myfavoritetasks:  commonLogic.appcommonhandle("我收藏的任务",null),
    myfavorites:  commonLogic.appcommonhandle("我的收藏",null),
    myterritorycnt:  commonLogic.appcommonhandle("我的地盘",null),
  },
	views: {
		mobcalendarview: {
			caption: commonLogic.appcommonhandle("我的工作",null),
		},
		mobmdview9: {
			caption: commonLogic.appcommonhandle("我的地盘",null),
		},
		mobtabexpview: {
			caption: commonLogic.appcommonhandle("我的地盘",null),
		},
		mobdashboardview: {
			caption: commonLogic.appcommonhandle("仪表盘",null),
                mywork_portlet:commonLogic.appcommonhandle("我的工作",null),
                alltrendsmob_portlet:commonLogic.appcommonhandle("动态",null),
                myfavoritetask_portlet:commonLogic.appcommonhandle("我收藏的任务",null),
                mystory_portlet:commonLogic.appcommonhandle("我的需求",null),
                mytaskmob_portlet:commonLogic.appcommonhandle("我的任务",null),
                mobdashboardviewdashboard_container6_portlet:commonLogic.appcommonhandle("",null),
                mobdashboardviewdashboard_container7_portlet:commonLogic.appcommonhandle("",null),
                mybugmob_portlet:commonLogic.appcommonhandle("我的bug",null),
                mobdashboardviewdashboard_container8_portlet:commonLogic.appcommonhandle("",null),
                mobdashboardviewdashboard_container9_portlet:commonLogic.appcommonhandle("",null),
                mobmyfavoritestory_portlet:commonLogic.appcommonhandle("我收藏的需求",null),
                mobdashboardviewdashboard_container5_portlet:commonLogic.appcommonhandle("",null),
                mobdashboardviewdashboard_container4_portlet:commonLogic.appcommonhandle("",null),
                mobdashboardviewdashboard_container3_portlet:commonLogic.appcommonhandle("",null),
                mobdashboardviewdashboard_container2_portlet:commonLogic.appcommonhandle("",null),
                projectstatusbarmob_portlet:commonLogic.appcommonhandle("项目统计",null),
                mobdashboardviewdashboard_container1_portlet:commonLogic.appcommonhandle("",null),
                productstatuschartmob_portlet:commonLogic.appcommonhandle("产品总览",null),
		},
		dailymobtabexpview: {
			caption: commonLogic.appcommonhandle("我的地盘",null),
		},
		reportmobtabexpview: {
			caption: commonLogic.appcommonhandle("我的地盘",null),
		},
	},
};