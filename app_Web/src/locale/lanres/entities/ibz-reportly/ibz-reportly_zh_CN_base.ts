import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    ibzreportlyid: commonLogic.appcommonhandle("汇报标识",null),
    ibzreportlyname: commonLogic.appcommonhandle("汇报名称",null),
    updateman: commonLogic.appcommonhandle("更新人",null),
    createdate: commonLogic.appcommonhandle("建立时间",null),
    createman: commonLogic.appcommonhandle("建立人",null),
    updatedate: commonLogic.appcommonhandle("更新时间",null),
    content: commonLogic.appcommonhandle("工作内容",null),
    files: commonLogic.appcommonhandle("附件",null),
    reportto: commonLogic.appcommonhandle("属性",null),
  },
};