# 需求模块(IBZPRO_STORYMODULE)

  

## 关系
{% plantuml %}
需求模块 *-- 需求模块 
需求模块 *-- 需求 
平台产品 *-- 需求模块 
需求模块 *-- 需求模块 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|id|ID|ACID|&nbsp;|
|名称|NAME|TEXT|&nbsp;|
|编号|ROOT|PICKUP|&nbsp;|
|IBIZ标识|IBIZ_ID|TEXT|&nbsp;|
|类型|TYPE|SSCODELIST|&nbsp;|
|级别|GRADE|INT|&nbsp;|
|路径|PATH|TEXT|&nbsp;从根到自己|
|简称|SHORT|TEXT|&nbsp;|
|id|PARENT|PICKUP|&nbsp;|
|产品|PRODUCTNAME|PICKUPTEXT|&nbsp;|
|owner|OWNER|TEXT|&nbsp;|
|collector|COLLECTOR|LONGTEXT|&nbsp;|
|已删除|DELETED|TEXT|&nbsp;|
|需求模块类型|IBIZ_STORYTYPE|SSCODELIST|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|id|默认规则|默认规则|
|名称|默认规则|内容长度必须小于等于[60]|
|编号|默认规则|默认规则|
|IBIZ标识|默认规则|内容长度必须小于等于[100]|
|类型|默认规则|内容长度必须小于等于[30]|
|级别|默认规则|默认规则|
|路径|默认规则|内容长度必须小于等于[255]|
|简称|默认规则|内容长度必须小于等于[30]|
|id|默认规则|默认规则|
|产品|默认规则|内容长度必须小于等于[90]|
|owner|默认规则|内容长度必须小于等于[30]|
|collector|默认规则|内容长度必须小于等于[65535]|
|已删除|默认规则|内容长度必须小于等于[1]|
|需求模块类型|默认规则|内容长度必须小于等于[60]|

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
|同步Ibz平台模块|用户自定义|&nbsp;|

## 处理逻辑
* 重建模块路径 (FixPath)
  
   

{% plantuml %}
hide footbox

需求模块 -> 需求模块: 准备参数
需求模块 -> 模块: 执行重建模块路径行为
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|0|开始 | 
|1|准备参数 |
|2|执行重建模块路径行为 |
<center>重建模块路径</center>

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#IBZProStoryModule_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#IBZProStoryModule_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|名称(NAME)|LIKE|
|编号(ROOT)|EQ|
|IBIZ标识(IBIZ_ID)|EQ|
|类型(TYPE)|EQ|
|id(PARENT)|EQ|
|产品(PRODUCTNAME)|EQ|
|产品(PRODUCTNAME)|LIKE|
|需求模块类型(IBIZ_STORYTYPE)|EQ|

## 导入模式
无


## 导出模式
无
