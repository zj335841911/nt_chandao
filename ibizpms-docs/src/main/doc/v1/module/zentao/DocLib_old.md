# 文档库(ZT_DOCLIB)

  

## 关系
{% plantuml %}
文档库 *-- 文档库分类 
文档库 *-- 文档 
产品 *-- 文档库 
项目 *-- 文档库 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|文档类型|TYPE|SSCODELIST|&nbsp;业务逻辑处理上还存在collector进行判断是否为all展示|
|收藏者|COLLECTOR|LONGTEXT|&nbsp;|
|权限|ACL|SSCODELIST|&nbsp;|
|已删除|DELETED|TEXT|&nbsp;|
|分组|GROUPS|TEXT|&nbsp;选择权限为自定义生效|
|编号|ID|ACID|&nbsp;|
|用户|USERS|LONGTEXT|&nbsp;选择权限为自定义生效|
|是否是主库|MAIN|TEXT|&nbsp;|
|文档库名称|NAME|TEXT|&nbsp;|
|排序|ORDER|INT|&nbsp;|
|项目库|PROJECT|PICKUP|&nbsp;|
|产品库|PRODUCT|PICKUP|&nbsp;|
|文档数量|DOCCNT|INT|&nbsp;|
|文件库类型|DOCLIBTYPE|SSCODELIST|&nbsp;|
|所属项目|PROJECTNAME|PICKUPTEXT|&nbsp;|
|所属产品|PRODUCTNAME|PICKUPTEXT|&nbsp;|
|属性|ISFAVOURITES|INT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|文档类型|默认规则|内容长度必须小于等于[30]|
|收藏者|默认规则|内容长度必须小于等于[65535]|
|权限|默认规则|内容长度必须小于等于[10]|
|已删除|默认规则|内容长度必须小于等于[1]|
|分组|默认规则|内容长度必须小于等于[255]|
|编号|默认规则|默认规则|
|用户|默认规则|内容长度必须小于等于[65535]|
|是否是主库|默认规则|内容长度必须小于等于[1]|
|文档库名称|默认规则|内容长度必须小于等于[60]|
|排序|默认规则|默认规则|
|项目库|默认规则|默认规则|
|产品库|默认规则|默认规则|
|文档数量|默认规则|默认规则|
|文件库类型|默认规则|内容长度必须小于等于[200]|
|所属项目|默认规则|内容长度必须小于等于[90]|
|所属产品|默认规则|内容长度必须小于等于[90]|
|属性|默认规则|默认规则|

## 状态控制

|文件库类型|行为控制模式| 控制行为 | 操作标识控制模式 | 控制操作 |
| --------   | ------------|------------|------------|------------|
|Value| 允许|  | 不允许 |  |
|Value| 允许|  | 不允许 | FILE<br> |
|Value| 允许|  | 不允许 | DOC<br> |

文件库类型

| 状态        |    状态值   |
| --------   |------------|
|文档|doc|
|附件|file|

## 行为
| 行为    | 类型    |  说明  |
| --------   |------------| ----- | 
|Create|内置方法|&nbsp;|
|Update|内置方法|&nbsp;|
|Remove|内置方法|&nbsp;|
|Get|内置方法|&nbsp;|
|GetDraft|内置方法|&nbsp;|
|CheckKey|内置方法|&nbsp;|
|收藏|用户自定义|&nbsp;|
|Save|内置方法|&nbsp;|
|取消收藏|用户自定义|&nbsp;|

## 处理逻辑
无

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|ByCustom|自定义文档库([MYSQL5](../../appendix/query_MYSQL5.md#DocLib_ByCustom))|否|&nbsp;|
|ByProduct|产品文档库([MYSQL5](../../appendix/query_MYSQL5.md#DocLib_ByProduct))|否|&nbsp;|
|ByProject|项目文件库([MYSQL5](../../appendix/query_MYSQL5.md#DocLib_ByProject))|否|&nbsp;|
|CurDocLib|所属文档库([MYSQL5](../../appendix/query_MYSQL5.md#DocLib_CurDocLib))|否|&nbsp;|
|DEFAULT|DEFAULT([MYSQL5](../../appendix/query_MYSQL5.md#DocLib_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#DocLib_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|ByCustom|自定义文档库|ByCustom|否|&nbsp;|
|ByProduct|产品文档库|ByProduct|否|&nbsp;|
|ByProject|项目文件库|ByProject|否|&nbsp;|
|CurDocLib|所属文档库|CurDocLib|否|&nbsp;|
|DEFAULT|DEFAULT|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|文档类型(TYPE)|EQ|
|权限(ACL)|EQ|
|是否是主库(MAIN)|EQ|
|文档库名称(NAME)|LIKE|
|项目库(PROJECT)|EQ|
|产品库(PRODUCT)|EQ|
|文件库类型(DOCLIBTYPE)|EQ|
|所属项目(PROJECTNAME)|EQ|
|所属项目(PROJECTNAME)|LIKE|
|所属产品(PRODUCTNAME)|EQ|
|所属产品(PRODUCTNAME)|LIKE|

## 导入模式
无


## 导出模式
无
