# 文档(ZT_DOC)

  

## 关系
{% plantuml %}
文档 *-- 文档内容 
文档库 *-- 文档 
模块 *-- 文档 
产品 *-- 文档 
项目 *-- 文档 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|分组|GROUPS|TEXT|&nbsp;选择权限为自定义生效|
|更新时间|EDITEDDATE|DATETIME|&nbsp;|
|views|VIEWS|INT|&nbsp;|
|版本号|VERSION|INT|&nbsp;|
|由谁更新|EDITEDBY|TEXT|&nbsp;|
|文档编号|ID|ACID|&nbsp;|
|文档标题|TITLE|TEXT|&nbsp;|
|已删除|DELETED|TEXT|&nbsp;|
|文档类型|TYPE|SMCODELIST|&nbsp;|
|添加时间|ADDEDDATE|DATETIME|&nbsp;|
|权限|ACL|SSCODELIST|&nbsp;|
|用户|USERS|LONGTEXT|&nbsp;选择权限为自定义生效|
|关键字|KEYWORDS|TEXT|&nbsp;|
|收藏者|COLLECTOR|LONGTEXT|&nbsp;|
|由谁添加|ADDEDBY|TEXT|&nbsp;|
|所属文档库|LIB|PICKUP|&nbsp;|
|所属项目|PROJECT|PICKUP|&nbsp;|
|所属产品|PRODUCT|PICKUP|&nbsp;|
|所属分类|MODULE|PICKUP|&nbsp;|
|所属项目|PROJECTNAME|PICKUPTEXT|&nbsp;|
|所属产品|PRODUCTNAME|PICKUPTEXT|&nbsp;|
|所属文档库|LIBNAME|PICKUPTEXT|&nbsp;|
|模块分类|MODULENAME|PICKUPTEXT|&nbsp;|
|文档正文|CONTENT|HTMLTEXT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|分组|默认规则|内容长度必须小于等于[255]|
|更新时间|默认规则|默认规则|
|views|默认规则|默认规则|
|版本号|默认规则|默认规则|
|由谁更新|默认规则|内容长度必须小于等于[30]|
|文档编号|默认规则|默认规则|
|文档标题|默认规则|内容长度必须小于等于[255]|
|已删除|默认规则|内容长度必须小于等于[1]|
|文档类型|默认规则|内容长度必须小于等于[30]|
|添加时间|默认规则|默认规则|
|权限|默认规则|内容长度必须小于等于[10]|
|用户|默认规则|内容长度必须小于等于[65535]|
|关键字|默认规则|内容长度必须小于等于[255]|
|收藏者|默认规则|内容长度必须小于等于[65535]|
|由谁添加|默认规则|内容长度必须小于等于[30]|
|所属文档库|默认规则|默认规则|
|所属项目|默认规则|默认规则|
|所属产品|默认规则|默认规则|
|所属分类|默认规则|默认规则|
|所属项目|默认规则|内容长度必须小于等于[90]|
|所属产品|默认规则|内容长度必须小于等于[90]|
|所属文档库|默认规则|内容长度必须小于等于[60]|
|模块分类|默认规则|内容长度必须小于等于[60]|
|文档正文|默认规则|内容长度必须小于等于[1048576]|

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
|根据版本更新正文信息|用户自定义|&nbsp;|
|CheckKey|内置方法|&nbsp;|
|Save|内置方法|&nbsp;|

## 处理逻辑
* 根据版本更新正文信息 (ByVersionUpdateContext)
  
   

{% plantuml %}
hide footbox

文档 -> 文档: 获取正文信息
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|0|开始 | 
|1|获取正文信息 |
<center>根据版本更新正文信息</center>

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|DEFAULT|DEFAULT([MYSQL5](../../appendix/query_MYSQL5.md#Doc_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#Doc_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|DEFAULT|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|文档标题(TITLE)|LIKE|
|所属文档库(LIB)|EQ|
|所属项目(PROJECT)|EQ|
|所属产品(PRODUCT)|EQ|
|所属分类(MODULE)|EQ|
|所属项目(PROJECTNAME)|EQ|
|所属项目(PROJECTNAME)|LIKE|
|所属产品(PRODUCTNAME)|EQ|
|所属产品(PRODUCTNAME)|LIKE|
|所属文档库(LIBNAME)|EQ|
|所属文档库(LIBNAME)|LIKE|
|模块分类(MODULENAME)|EQ|
|模块分类(MODULENAME)|LIKE|

## 导入模式
无


## 导出模式
无
