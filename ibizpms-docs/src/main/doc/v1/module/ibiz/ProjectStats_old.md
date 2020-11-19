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
|已完成任务数|FINISHTASKCNT1|INT|&nbsp;|
|已暂停任务数|PAUSETASKCNT|INT|&nbsp;|
|未开始任务数|WAITTASKCNT|INT|&nbsp;|
|进行中任务数|DOINGTASKCNT|INT|&nbsp;|

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
|已完成任务数|默认规则|默认规则|
|已暂停任务数|默认规则|默认规则|
|未开始任务数|默认规则|默认规则|
|进行中任务数|默认规则|默认规则|

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
|TASKTIME|任务工时消耗剩余查询([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_TaskTime))|否|&nbsp;该查询主要供统计图表使用|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#ProjectStats_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|DEFAULT|DEFAULT|是|&nbsp;|
|NOOpenProduct|未关闭产品|NOOpenProduct|否|&nbsp;|
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
