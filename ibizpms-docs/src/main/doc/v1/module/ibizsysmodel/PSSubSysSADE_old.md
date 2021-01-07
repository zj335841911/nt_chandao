# 外部接口实体(PSSUBSYSSADE)

  

## 关系
{% plantuml %}
外部接口实体 *-- 实体 
外部服务接口 *-- 外部接口实体 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|外部接口实体标识|PSSUBSYSSADEID|GUID|&nbsp;|
|建立人|CREATEMAN|TEXT|&nbsp;|
|外部接口实体名称|PSSUBSYSSADENAME|TEXT|&nbsp;|
|建立时间|CREATEDATE|DATETIME|&nbsp;|
|更新人|UPDATEMAN|TEXT|&nbsp;|
|更新时间|UPDATEDATE|DATETIME|&nbsp;|
|代码名称2|CODENAME2|TEXT|&nbsp;|
|代码名称|CODENAME|TEXT|&nbsp;|
|实体标记|DETAG|TEXT|&nbsp;|
|实体标记2|DETAG2|TEXT|&nbsp;|
|备注|MEMO|LONGTEXT_1000|&nbsp;|
|接口模式|MAJORFLAG|NSCODELIST|&nbsp;|
|逻辑名称|LOGICNAME|TEXT|&nbsp;|
|同步模型模式|SYNCMODELMODE|SSCODELIST|&nbsp;|
|用户分类|USERCAT|SSCODELIST|&nbsp;|
|用户标记|USERTAG|TEXT|&nbsp;|
|用户标记2|USERTAG2|TEXT|&nbsp;|
|用户标记3|USERTAG3|TEXT|&nbsp;|
|用户标记4|USERTAG4|TEXT|&nbsp;|
|是否启用|VALIDFLAG|YESNO|&nbsp;|
|子系统接口|PSSUBSYSSERVICEAPINAME|PICKUPTEXT|&nbsp;|
|子系统接口|PSSUBSYSSERVICEAPIID|PICKUP|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|外部接口实体标识|默认规则|内容长度必须小于等于[100]|
|建立人|默认规则|内容长度必须小于等于[60]|
|外部接口实体名称|默认规则|内容长度必须小于等于[200]|
|建立时间|默认规则|默认规则|
|更新人|默认规则|内容长度必须小于等于[60]|
|更新时间|默认规则|默认规则|
|代码名称2|默认规则|内容长度必须小于等于[50]|
|代码名称|默认规则|内容长度必须小于等于[50]|
|实体标记|默认规则|内容长度必须小于等于[100]|
|实体标记2|默认规则|内容长度必须小于等于[100]|
|备注|默认规则|内容长度必须小于等于[2000]|
|接口模式|默认规则|默认规则|
|逻辑名称|默认规则|内容长度必须小于等于[200]|
|同步模型模式|默认规则|内容长度必须小于等于[10]|
|用户分类|默认规则|内容长度必须小于等于[10]|
|用户标记|默认规则|内容长度必须小于等于[200]|
|用户标记2|默认规则|内容长度必须小于等于[200]|
|用户标记3|默认规则|内容长度必须小于等于[50]|
|用户标记4|默认规则|内容长度必须小于等于[50]|
|是否启用|默认规则|默认规则|
|子系统接口|默认规则|内容长度必须小于等于[200]|
|子系统接口|默认规则|内容长度必须小于等于[100]|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#PSSubSysSADE_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#PSSubSysSADE_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|外部接口实体名称(PSSUBSYSSADENAME)|LIKE|
|接口模式(MAJORFLAG)|EQ|
|同步模型模式(SYNCMODELMODE)|EQ|
|用户分类(USERCAT)|EQ|
|子系统接口(PSSUBSYSSERVICEAPINAME)|EQ|
|子系统接口(PSSUBSYSSERVICEAPINAME)|LIKE|
|子系统接口(PSSUBSYSSERVICEAPIID)|EQ|

## 导入模式
无


## 导出模式
无