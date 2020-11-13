# 文档库分类(IBZ_DOCLIBMODULE)

  

## 关系
{% plantuml %}
文档库分类 *-- 文档库分类 
文档库分类 *-- 文档库分类 
文档库 *-- 文档库分类 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|叶子模块|ISLEAF|TEXT|&nbsp;|
|名称|NAME|TEXT|&nbsp;|
|简称|SHORT|TEXT|&nbsp;|
|grade|GRADE|INT|&nbsp;|
|collector|COLLECTOR|LONGTEXT|&nbsp;|
|branch|BRANCH|INT|&nbsp;|
|id|ID|ACID|&nbsp;|
|排序值|ORDER|INT|&nbsp;|
|逻辑删除标志|DELETED|TEXT|&nbsp;|
|path|PATH|TEXT|&nbsp;|
|owner|OWNER|TEXT|&nbsp;|
|类型|TYPE|TEXT|&nbsp;|
|编号|ROOT|PICKUP|&nbsp;|
|id|PARENT|PICKUP|&nbsp;|
|所属文档库|DOCLIBNAME|PICKUPTEXT|&nbsp;|
|上级模块|MODULENAME|PICKUPTEXT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|叶子模块|默认规则|内容长度必须小于等于[200]|
|名称|默认规则|内容长度必须小于等于[60]|
|简称|默认规则|内容长度必须小于等于[30]|
|grade|默认规则|默认规则|
|collector|默认规则|内容长度必须小于等于[65535]|
|branch|默认规则|默认规则|
|id|默认规则|默认规则|
|排序值|默认规则|默认规则|
|逻辑删除标志|默认规则|内容长度必须小于等于[1]|
|path|默认规则|内容长度必须小于等于[255]|
|owner|默认规则|内容长度必须小于等于[30]|
|类型|默认规则|内容长度必须小于等于[30]|
|编号|默认规则|默认规则|
|id|默认规则|默认规则|
|所属文档库|默认规则|内容长度必须小于等于[60]|
|上级模块|默认规则|内容长度必须小于等于[60]|

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
|重建模块路径|实体处理逻辑|&nbsp;|
|Save|内置方法|&nbsp;|

## 处理逻辑
* 重建模块路径 (FixPath)
  
   

{% plantuml %}
hide footbox

文档库分类 -> 模块: 执行重建模型路径
文档库分类 -> 文档库分类: 准备参数
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|执行重建模型路径 |
|1|开始 | 
|2|准备参数 |
<center>重建模块路径</center>

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|AllDoclibModule_Custom|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#DocLibModule_AllDoclibModule_Custom))|否|&nbsp;|
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#DocLibModule_Default))|否|&nbsp;|
|AllDoclibModule|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#DocLibModule_DefaultDoclib))|否|&nbsp;|
|ParentModule|父模块([MYSQL5](../../appendix/query_MYSQL5.md#DocLibModule_ParentModule))|否|&nbsp;|
|RootModuleMuLu|所有根模块目录([MYSQL5](../../appendix/query_MYSQL5.md#DocLibModule_RootModuleMuLu))|否|&nbsp;|
|RootModuleMuLuByRoot|根模块目录动态([MYSQL5](../../appendix/query_MYSQL5.md#DocLibModule_RootModuleMuLuByRoot))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#DocLibModule_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|AllDocLibModule_Custom|自定义文档库的模块|AllDoclibModule_Custom|否|&nbsp;|
|AllDoclibModule|所有文档库模块|AllDoclibModule|否|&nbsp;|
|DEFAULT|数据集|DEFAULT|是|&nbsp;|
|ParentModule|父集合|ParentModule|否|&nbsp;|
|RootModuleMuLu|所有根模块目录|RootModuleMuLu|否|&nbsp;|
|RootModuleMuLuByRoot|根模块目录|RootModuleMuLuByRoot|否|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|名称(NAME)|LIKE|
|编号(ROOT)|EQ|
|id(PARENT)|EQ|
|所属文档库(DOCLIBNAME)|EQ|
|所属文档库(DOCLIBNAME)|LIKE|
|上级模块(MODULENAME)|EQ|
|上级模块(MODULENAME)|LIKE|

## 导入模式
无


## 导出模式
无
