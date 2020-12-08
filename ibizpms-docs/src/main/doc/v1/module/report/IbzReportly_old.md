# 汇报(IBZ_REPORTLY)

  

## 关系
无

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|汇报标识|IBZ_REPORTLYID|ACID|&nbsp;|
|汇报名称|IBZ_REPORTLYNAME|TEXT|&nbsp;|
|更新人|UPDATEMAN|TEXT|&nbsp;|
|建立时间|CREATEDATE|DATETIME|&nbsp;|
|建立人|CREATEMAN|TEXT|&nbsp;|
|更新时间|UPDATEDATE|DATETIME|&nbsp;|
|工作内容|CONTENT|HTMLTEXT|&nbsp;|
|附件|FILES|TEXT|&nbsp;|
|汇报给|REPORTTO|SSCODELIST|&nbsp;|
|抄送给|MAILTO|SMCODELIST|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|汇报标识|默认规则|默认规则|
|汇报名称|默认规则|内容长度必须小于等于[200]|
|更新人|默认规则|内容长度必须小于等于[60]|
|建立时间|默认规则|默认规则|
|建立人|默认规则|内容长度必须小于等于[60]|
|更新时间|默认规则|默认规则|
|工作内容|默认规则|内容长度必须小于等于[1048576]|
|附件|默认规则|内容长度必须小于等于[100]|
|汇报给|默认规则|内容长度必须小于等于[100]|
|抄送给|默认规则|内容长度必须小于等于[100]|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#IbzReportly_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#IbzReportly_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|汇报名称(IBZ_REPORTLYNAME)|LIKE|

## 导入模式
无


## 导出模式
无
