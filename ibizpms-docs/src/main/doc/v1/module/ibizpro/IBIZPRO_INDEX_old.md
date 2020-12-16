# 索引检索(IBIZPRO_INDEX)

  

## 关系
{% plantuml %}
索引检索 <|-- Bug 
索引检索 <|-- 需求 
索引检索 <|-- 任务 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|类型|INDEX_TYPE|SSCODELIST|&nbsp;|
|主键|INDEXID|BIGINT|&nbsp;|
|名称|INDEXNAME|TEXT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|类型|默认规则|内容长度必须小于等于[200]|
|主键|默认规则|默认规则|
|名称|默认规则|内容长度必须小于等于[200]|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#IBIZPRO_INDEX_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#IBIZPRO_INDEX_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|
|IndexDER|数据集2||否|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|类型(INDEX_TYPE)|EQ|
|名称(INDEXNAME)|LIKE|

## 导入模式
无


## 导出模式
无
