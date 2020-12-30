# 项目汇报用户任务(IBIZPRO_PROJECTUSERTASK)

  

## 关系
无

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|用户|ACCOUNT|TEXT|&nbsp;|
|编号|ID|ACID|&nbsp;|
|总计消耗|CONSUMED|FLOAT|&nbsp;|
|日期|DATE|DATE|&nbsp;完成日期（指任务人的，不是任务的）|
|预计剩余|LEFT|FLOAT|&nbsp;|
|work|WORK|LONGTEXT|&nbsp;暂时还不知道做什么用的，没有任何处理的代码|
|任务|TASK|BIGINT|&nbsp;|
|任务名称|TASKNAME|TEXT|&nbsp;|
|任务类型|TASKTYPE|SSCODELIST|&nbsp;|
|进度|PROGRESSRATE|TEXT|&nbsp;|
|延期天数|DELAYDAYS|INT|&nbsp;|
|预计开始|ESTSTARTED|DATE|&nbsp;|
|截止日期|DEADLINE|DATE|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|用户|默认规则|内容长度必须小于等于[30]|
|编号|默认规则|默认规则|
|总计消耗|默认规则|默认规则|
|日期|默认规则|默认规则|
|预计剩余|默认规则|默认规则|
|work|默认规则|内容长度必须小于等于[65535]|
|任务|默认规则|默认规则|
|任务名称|默认规则|内容长度必须小于等于[100]|
|任务类型|默认规则|内容长度必须小于等于[200]|
|进度|默认规则|内容长度必须小于等于[100]|
|延期天数|默认规则|默认规则|
|预计开始|默认规则|默认规则|
|截止日期|默认规则|默认规则|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#IbzproProjectUserTask_Default))|否|&nbsp;|
|ProjectDailyTask|项目日报任务([MYSQL5](../../appendix/query_MYSQL5.md#IbzproProjectUserTask_ProjectDailyTask))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#IbzproProjectUserTask_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|
|ProjectDailyTask|项目日报任务|ProjectDailyTask|否|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|编号(ID)|LIKE|
|任务类型(TASKTYPE)|EQ|

## 导入模式
无


## 导出模式
无
