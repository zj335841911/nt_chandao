import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    thismonth: "本月",
    yesterday: "昨天",
    extra: "附加值",
    files: "文件",
    lastmonth: "上月",
    isactorss: "当前用户",
    thisweek: "本周",
    today: "今天",
    date1: "显示日期",
    objecttype: "对象类型",
    id: "id",
    noticeusers: "消息通知用户",
    comment: "备注",
    read: "已读",
    action: "动作",
    date: "日期",
    product: "产品",
    lastcomment: "备注",
    srfkey: "前端键值",
    actionmanner: "操作方式",
    lastweek: "上周",
    objectid: "对象ID",
    actor: "操作者",
    project: "项目",
  },
	views: {
		mobmdview9: {
			caption: commonLogic.appcommonhandle("通用",null),
		},
		allmobmdview9: {
			caption: commonLogic.appcommonhandle("通用",null),
		},
		moremobmdview: {
			caption: commonLogic.appcommonhandle("更多",null),
		},
		mobmapview: {
			caption: commonLogic.appcommonhandle("系统日志",null),
		},
	},
};