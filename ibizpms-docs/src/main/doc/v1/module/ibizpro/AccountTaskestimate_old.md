# 用户工时统计(ACCOUNTTASKESTIMATE)

  

## 关系
无

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|主键|ID|TEXT|&nbsp;|
|项目标识|PROJECT|BIGINT|&nbsp;|
|项目名称|PROJECTNAME|TEXT|&nbsp;|
|年|YEAR|TEXT|&nbsp;|
|月|MONTH|TEXT|&nbsp;|
|用户|ACCOUNT|TEXT|&nbsp;|
|日期|DATE|DATE|&nbsp;|
|工时|CONSUMED|FLOAT|&nbsp;|
|评估成本|EVALUATIONCOST|FLOAT|&nbsp;|
|投入成本|INPUTCOST|FLOAT|&nbsp;|
|评估工时|EVALUATIONTIME|FLOAT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|主键|默认规则|内容长度必须小于等于[100]|
|项目标识|默认规则|默认规则|
|项目名称|默认规则|内容长度必须小于等于[100]|
|年|默认规则|内容长度必须小于等于[100]|
|月|默认规则|内容长度必须小于等于[100]|
|用户|默认规则|内容长度必须小于等于[100]|
|日期|默认规则|默认规则|
|工时|默认规则|默认规则|
|评估成本|默认规则|默认规则|
|投入成本|默认规则|默认规则|
|评估工时|默认规则|默认规则|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#AccountTaskestimate_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#AccountTaskestimate_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|年(YEAR)|EQ|
|月(MONTH)|EQ|

## 导入模式
无


## 导出模式
无
