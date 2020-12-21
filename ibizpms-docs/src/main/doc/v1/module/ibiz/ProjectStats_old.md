# 项目统计(IBZ_PROJECTSTATS)

  

## 关系
无

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|项目编号|ID|ACID|&nbsp;|
|需求总数|STORYCNT|INT|&nbsp;|
|任务总数|TASKCNT|INT|&nbsp;|
|任务最初预计总工时|TOTALESTIMATE|FLOAT|&nbsp;|
|任务消耗总工时|TOTALCONSUMED|FLOAT|&nbsp;|
|任务预计剩余总工时|TOTALLEFT|FLOAT|&nbsp;|
|未完成任务总数|UNDONETASKCNT|INT|&nbsp;|
|关闭需求总数|CLOSEDSTORYCNT|INT|&nbsp;|
|Bug总数|BUGCNT|INT|&nbsp;|
|未解决Bug总数|ACTIVEBUGCNT|INT|&nbsp;|
|未关闭需求总数|UNCLOSEDSTORYCNT|INT|&nbsp;|
|已结束任务总数|FINISHTASKCNT|INT|&nbsp;|
|已解决Bug总数|FINISHBUGCNT|INT|&nbsp;|
|已删除|DELETED|TEXT|&nbsp;|
|工时|TIME|FLOAT|&nbsp;界面使用|
|工时类型|TYPE|TEXT|&nbsp;界面使用|
|项目名称|NAME|TEXT|&nbsp;|
|未确认Bug总数|UNCONFIRMEDBUGCNT|INT|&nbsp;|
|未关闭Bug总数|UNCLOSEDBUGCNT|INT|&nbsp;|
|总工时|TOTALWH|INT|&nbsp;|
|已发布需求数|RELEASEDSTORYCNT|INT|&nbsp;|
|昨日完成任务数|YESTERDAYCTASKCNT|INT|&nbsp;|
|昨天解决Bug数|YESTERDAYRBUGCNT|INT|&nbsp;|
|截止日期|END|DATE|&nbsp;|
|状态|STATUS|TEXT|&nbsp;|
|项目排序|ORDER1|INT|&nbsp;|
|是否置顶|ISTOP|INT|&nbsp;|
|已关闭任务数|CLOSEDTASKCNT|INT|&nbsp;|
|已取消任务数|CANCELTASKCNT|INT|&nbsp;|
|已暂停任务数|PAUSETASKCNT|INT|&nbsp;|
|未开始任务数|WAITTASKCNT|INT|&nbsp;|
|进行中任务数|DOINGTASKCNT|INT|&nbsp;|
|已完成任务数|DONETASKCNT|INT|&nbsp;|
|设计类型任务|DESIGNTASKCNT|INT|&nbsp;|
|讨论类型任务|DISCUSSTASKCNT|INT|&nbsp;|
|研究类型任务|STUDYTASKCNT|INT|&nbsp;|
|界面类型任务|UITASKCNT|INT|&nbsp;|
|测试类型任务|TESTTASKCNT|INT|&nbsp;|
|服务类型任务|SERVETASKCNT|INT|&nbsp;|
|开发类型任务|DEVELTASKCNT|INT|&nbsp;|
|其他类型任务|MISCTASKCNT|INT|&nbsp;|
|事务类型任务|AFFAIRTASKCNT|INT|&nbsp;|
|完成需求数|COMPLETESTORYCNT|INT|&nbsp;|
|完成任务数|COMPLETETASKCNT|INT|&nbsp;|
|Bug/完成需求|BUGSTORY|INT|&nbsp;|
|Bug/完成任务|BUGTASK|INT|&nbsp;|
|重要Bug数|IMPORTANTBUGCNT|INT|&nbsp;|
|严重Bug比率|SERIOUSBUGPROPORTION|TEXT|&nbsp;|
|代码错误|CODEERROR|INT|&nbsp;|
|配置相关|CONFIG|INT|&nbsp;|
|安装部署|INSTALL|INT|&nbsp;|
|安全相关|SECURITY|INT|&nbsp;|
|性能问题|PERFORMANCE|INT|&nbsp;|
|标准规范|STANDARD|INT|&nbsp;|
|测试脚本|AUTOMATION|INT|&nbsp;|
|人数|MEMBERCNT|INT|&nbsp;|
|设计缺陷|DESIGNDEFECT|INT|&nbsp;|
|其他|OTHERS|INT|&nbsp;|
|项目消耗总工时|PROJECTTOTALCONSUMED|FLOAT|&nbsp;|
|工期|TIMESCALE|TEXT|&nbsp;|
|剩余需求数|LEFTSTORYCNT|INT|&nbsp;|
|空需求|EMPTYSTORY|INT|&nbsp;|
|草稿需求|DRAFTSTORY|INT|&nbsp;|
|激活需求|ACTIVESTORY|INT|&nbsp;|
|已关闭需求|CLOSEDSTORY|INT|&nbsp;|
|已变更需求|CHANGEDSTORY|INT|&nbsp;|
|空阶段需求数|EMPTYSTAGESTORYCNT|INT|&nbsp;|
|未开始阶段需求数|WAITSTAGESTORYCNT|INT|&nbsp;|
|已计划阶段需求数|PLANNEDSTAGESTORYCNT|INT|&nbsp;|
|已立项阶段需求数|PROJECTEDSTAGESTORYCNT|INT|&nbsp;|
|研发中阶段需求数|DEVELOPINGSTAGESTORYCNT|INT|&nbsp;|
|研发完毕阶段需求数|DEVELOPEDSTAGESTORYCNT|INT|&nbsp;|
|测试中阶段需求数|TESTINGSTAGESTORYCNT|INT|&nbsp;|
|测试完毕阶段需求数|TESTEDSTAGESTORYCNT|INT|&nbsp;|
|已验收阶段需求数|VERIFIEDSTAGESTORYCNT|INT|&nbsp;|
|已发布阶段需求数|RELEASEDSTAGESTORYCNT|INT|&nbsp;|
|已关闭阶段需求数|CLOSEDSTAGESTORYCNT|INT|&nbsp;|
|进度|PROGRESS|FLOAT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|项目编号|默认规则|默认规则|
|需求总数|默认规则|默认规则|
|任务总数|默认规则|默认规则|
|任务最初预计总工时|默认规则|默认规则|
|任务消耗总工时|默认规则|默认规则|
|任务预计剩余总工时|默认规则|默认规则|
|未完成任务总数|默认规则|默认规则|
|关闭需求总数|默认规则|默认规则|
|Bug总数|默认规则|默认规则|
|未解决Bug总数|默认规则|默认规则|
|未关闭需求总数|默认规则|默认规则|
|已结束任务总数|默认规则|默认规则|
|已解决Bug总数|默认规则|默认规则|
|已删除|默认规则|内容长度必须小于等于[1]|
|工时|默认规则|默认规则|
|工时类型|默认规则|内容长度必须小于等于[100]|
|项目名称|默认规则|内容长度必须小于等于[90]|
|未确认Bug总数|默认规则|默认规则|
|未关闭Bug总数|默认规则|默认规则|
|总工时|默认规则|默认规则|
|已发布需求数|默认规则|默认规则|
|昨日完成任务数|默认规则|默认规则|
|昨天解决Bug数|默认规则|默认规则|
|截止日期|默认规则|默认规则|
|状态|默认规则|内容长度必须小于等于[100]|
|项目排序|默认规则|默认规则|
|是否置顶|默认规则|默认规则|
|已关闭任务数|默认规则|默认规则|
|已取消任务数|默认规则|默认规则|
|已暂停任务数|默认规则|默认规则|
|未开始任务数|默认规则|默认规则|
|进行中任务数|默认规则|默认规则|
|已完成任务数|默认规则|默认规则|
|设计类型任务|默认规则|默认规则|
|讨论类型任务|默认规则|默认规则|
|研究类型任务|默认规则|默认规则|
|界面类型任务|默认规则|默认规则|
|测试类型任务|默认规则|默认规则|
|服务类型任务|默认规则|默认规则|
|开发类型任务|默认规则|默认规则|
|其他类型任务|默认规则|默认规则|
|事务类型任务|默认规则|默认规则|
|完成需求数|默认规则|默认规则|
|完成任务数|默认规则|默认规则|
|Bug/完成需求|默认规则|默认规则|
|Bug/完成任务|默认规则|默认规则|
|重要Bug数|默认规则|默认规则|
|严重Bug比率|默认规则|内容长度必须小于等于[200]|
|代码错误|默认规则|默认规则|
|配置相关|默认规则|默认规则|
|安装部署|默认规则|默认规则|
|安全相关|默认规则|默认规则|
|性能问题|默认规则|默认规则|
|标准规范|默认规则|默认规则|
|测试脚本|默认规则|默认规则|
|人数|默认规则|默认规则|
|设计缺陷|默认规则|默认规则|
|其他|默认规则|默认规则|
|项目消耗总工时|默认规则|默认规则|
|工期|默认规则|内容长度必须小于等于[100]|
|剩余需求数|默认规则|默认规则|
|空需求|默认规则|默认规则|
|草稿需求|默认规则|默认规则|
|激活需求|默认规则|默认规则|
|已关闭需求|默认规则|默认规则|
|已变更需求|默认规则|默认规则|
|空阶段需求数|默认规则|默认规则|
|未开始阶段需求数|默认规则|默认规则|
|已计划阶段需求数|默认规则|默认规则|
|已立项阶段需求数|默认规则|默认规则|
|研发中阶段需求数|默认规则|默认规则|
|研发完毕阶段需求数|默认规则|默认规则|
|测试中阶段需求数|默认规则|默认规则|
|测试完毕阶段需求数|默认规则|默认规则|
|已验收阶段需求数|默认规则|默认规则|
|已发布阶段需求数|默认规则|默认规则|
|已关闭阶段需求数|默认规则|默认规则|
|进度|默认规则|默认规则|

## 状态控制

无


## 行为
| 行为    | 类型    |  说明  |
| --------   |------------| ----- | 
|Create|内置方法|&nbsp;|
|Update|内置方法|&nbsp;|
|Remove|内置方法|&nbsp;|
|Get|内置方法|&nbsp;|
|GetDraft|内置方法|&nbsp;|
|CheckKey|内置方法|&nbsp;|
|Save|内置方法|&nbsp;|

## 处理逻辑
无

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|DEFAULT|DEFAULT([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_Default))|否|&nbsp;|
|NOOpenProduct|未关闭产品([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_NoOpenProduct))|否|&nbsp;|
|ProjectBugType|项目bug类型([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_ProjectBugType))|否|&nbsp;|
|ProjectInputStats|项目投入统计([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_ProjectInputStats))|否|&nbsp;|
|ProjectProgress|项目进度([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_ProjectProgress))|否|&nbsp;|
|ProjectQuality|项目质量表查询([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_ProjectQuality))|否|&nbsp;|
|ProjectStoryStageStats|项目需求阶段统计([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_ProjectStoryStageStats))|否|&nbsp;|
|ProjectStoryStatusStats|项目需求状态统计([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_ProjectStoryStatusStats))|否|&nbsp;|
|ProjectTaskCountByTaskStatus|项目任务统计(任务状态)([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_ProjectTaskCountByTaskStatus))|否|&nbsp;|
|ProjectTaskCountByType|项目任务类型统计([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_ProjectTaskCountByType))|否|&nbsp;|
|TASKTIME|任务工时消耗剩余查询([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_TaskTime))|否|&nbsp;该查询主要供统计图表使用|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|DEFAULT|DEFAULT|是|&nbsp;|
|NOOpenProduct|未关闭产品|NOOpenProduct|否|&nbsp;|
|ProjectBugType|项目bug类型统计|ProjectBugType|否|&nbsp;|
|ProjectInputStats|项目投入统计|ProjectInputStats|否|&nbsp;|
|ProjectProgress|项目进度|ProjectProgress|否|&nbsp;|
|ProjectQuality|项目质量|ProjectQuality|否|&nbsp;|
|ProjectStoryStageStats|项目需求阶段统计|ProjectStoryStageStats|否|&nbsp;|
|ProjectStoryStatusStats|项目需求状态统计|ProjectStoryStatusStats|否|&nbsp;|
|ProjectTaskCountByTaskStatus|项目任务统计(任务状态)|ProjectTaskCountByTaskStatus|否|&nbsp;|
|ProjectTaskCountByType|项目任务类型统计|ProjectTaskCountByType|否|&nbsp;|
|TASKTIME|任务工时消耗剩余查询|TASKTIME|否|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|项目名称(NAME)|LIKE|
|状态(STATUS)|EQ|
|状态(STATUS)|NOTEQ|

## 导入模式
无


## 导出模式
无
