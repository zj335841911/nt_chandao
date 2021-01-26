# 任务预计(ZT_TASKESTIMATE)

  

## 关系
{% plantuml %}
任务 *-- 任务预计 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|用户|ACCOUNT|TEXT|&nbsp;|
|预计剩余|LEFT|FLOAT|&nbsp;|
|总计消耗|CONSUMED|FLOAT|&nbsp;|
|编号|ID|ACID|&nbsp;|
|日期|DATE|DATE|&nbsp;完成日期（指任务人的，不是任务的）|
|work|WORK|LONGTEXT|&nbsp;暂时还不知道做什么用的，没有任何处理的代码|
|任务|TASK|PICKUP|&nbsp;|
|日期|DATES|DATE|&nbsp;|
|评估状态|EVALUATIONSTATUS|TEXT|&nbsp;|
|评估成本|EVALUATIONCOST|FLOAT|&nbsp;|
|评估工时|EVALUATIONTIME|FLOAT|&nbsp;|
|投入成本|INPUTCOST|FLOAT|&nbsp;|
|评估说明|EVALUATIONDESC|LONGTEXT|&nbsp;|
|任务名称|TASKNAME|PICKUPTEXT|&nbsp;|
|项目|PROJECT|PICKUPDATA|&nbsp;|
|所属项目|PROJECTNAME|PICKUPDATA|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|用户|默认规则|内容长度必须小于等于[30]|
|预计剩余|预计剩余大于等于0|预计剩余大于等于0|
|预计剩余|默认规则|默认规则|
|总计消耗|总计消耗大于等于0|总计消耗大于等于0|
|总计消耗|默认规则|默认规则|
|编号|默认规则|默认规则|
|日期|默认规则|默认规则|
|work|默认规则|内容长度必须小于等于[65535]|
|任务|默认规则|默认规则|
|日期|默认规则|默认规则|
|评估状态|默认规则|内容长度必须小于等于[100]|
|评估成本|默认规则|默认规则|
|评估工时|默认规则|默认规则|
|投入成本|默认规则|默认规则|
|评估说明|默认规则|内容长度必须小于等于[1048576]|
|任务名称|默认规则|内容长度必须小于等于[255]|
|项目|默认规则|默认规则|
|所属项目|默认规则|内容长度必须小于等于[90]|

## 状态控制

无


## 行为
| 行为    | 类型    |  说明  |
| --------   |------------| ----- | 
|Create|内置方法|&nbsp;|
|CreateTemp|内置方法|&nbsp;|
|CreateTempMajor|内置方法|&nbsp;|
|Update|内置方法|&nbsp;|
|UpdateTemp|内置方法|&nbsp;|
|UpdateTempMajor|内置方法|&nbsp;|
|Remove|内置方法|&nbsp;|
|RemoveTemp|内置方法|&nbsp;|
|RemoveTempMajor|内置方法|&nbsp;|
|Get|内置方法|&nbsp;|
|GetTemp|内置方法|&nbsp;|
|GetTempMajor|内置方法|&nbsp;|
|GetDraft|内置方法|&nbsp;|
|GetDraftTemp|内置方法|&nbsp;|
|GetDraftTempMajor|内置方法|&nbsp;|
|CheckKey|内置方法|&nbsp;|
|Save|内置方法|&nbsp;|

## 处理逻辑
无

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|DEFAULT|DEFAULT([MYSQL5](../../appendix/query_MYSQL5.md#TaskEstimate_Default))|否|&nbsp;|
|DEFAULT1|DEFAULT1([MYSQL5](../../appendix/query_MYSQL5.md#TaskEstimate_Defaults))|否|&nbsp;|
|ProjectTaskEstimate|项目日志([MYSQL5](../../appendix/query_MYSQL5.md#TaskEstimate_ProjectTaskEstimate))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#TaskEstimate_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|DEFAULT|DEFAULT|是|&nbsp;|
|DEFAULT1|DEFAULT1|DEFAULT1|否|&nbsp;|
|ProjectTaskEstimate|项目日志|ProjectTaskEstimate|否|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|编号(ID)|LIKE|
|任务(TASK)|EQ|
|任务名称(TASKNAME)|EQ|
|任务名称(TASKNAME)|LIKE|

## 导入模式
无


## 导出模式
无
