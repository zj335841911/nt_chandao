# 实体(PSDATAENTITY)

  

## 关系
{% plantuml %}
实体 *-- 实体属性 
系统模块 *-- 实体 
外部接口实体 *-- 实体 
外部服务接口 *-- 实体 
系统需求项 *-- 实体 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|实体名称|PSDATAENTITYNAME|TEXT|&nbsp;|
|实体标识|PSDATAENTITYID|GUID|&nbsp;|
|建立时间|CREATEDATE|DATETIME|&nbsp;|
|建立人|CREATEMAN|TEXT|&nbsp;|
|更新人|UPDATEMAN|TEXT|&nbsp;|
|更新时间|UPDATEDATE|DATETIME|&nbsp;|
|虚拟实体|VIRTUALFLAG|NSCODELIST|&nbsp;|
|虚拟主键分隔符|VKEYSEPARATOR|TEXT|&nbsp;|
|访问控制体系|ACCCTRLARCH|NSCODELIST|&nbsp;|
|审计模式|AUDITMODE|NSCODELIST|&nbsp;|
|预置业务功能模式|BIZTAG|SSCODELIST|&nbsp;|
|基类参数|BASECLSPARAMS|LONGTEXT_1000|&nbsp;|
|代码名称|CODENAME|TEXT|&nbsp;|
|显示颜色|COLOR|TEXT|&nbsp;|
|数据访问控制方式|DATAACCMODE|NSCODELIST|&nbsp;|
|数据导入导出能力|DATAIMPEXPFLAG|NSCODELIST|&nbsp;|
|数据变更日志类型|DATACHGLOGMODE|NSCODELIST|&nbsp;|
|数据库表空间|DBTABSPACE|SSCODELIST|&nbsp;|
|实体类别|DECAT|SSCODELIST|&nbsp;|
|全局禁止子系统导入|DELOCKFLAG|YESNO|&nbsp;|
|实体编号|DESN|TEXT|&nbsp;|
|实体标记2|DETAG2|TEXT|&nbsp;|
|实体类型|DETYPE|NSCODELIST|&nbsp;|
|实体标记|DETAG|TEXT|&nbsp;|
|扩展模式|DYNAMICMODE|NSCODELIST|&nbsp;|
|默认数据源|DSLINK|SSCODELIST|&nbsp;|
|启用数据审计|ENABLEAUDIT|YESNO|&nbsp;|
|动态模型类型|DYNAMODELFLAG|NSCODELIST|&nbsp;|
|启用数据版本|ENABLEDATAVER|YESNO|&nbsp;|
|启用DA日志|ENABLEDALOG|YESNO|&nbsp;|
|支持获取结果集|ENABLEDEDATASET|YESNO|&nbsp;|
|启用数据对象缓存|ENABLEENTITYCACHE|YESNO|&nbsp;|
|支持实体行为|ENABLEDEACTION|YESNO|&nbsp;|
|支持多数据源|ENABLEMULTIDS|YESNO|&nbsp;|
|支持移动端|ENABLEMOB|YESNO|&nbsp;|
|启用操作者名称模型|ENABLEOPNAMEMODEL|YESNO|&nbsp;|
|启用组织模型|ENABLEORGMODEL|YESNO|&nbsp;|
|启用多表单|ENAMULTIFORM|YESNO|&nbsp;|
|启用工作流模型|ENABLEWFMODEL|YESNO|&nbsp;|
|支持简单查询|ENABLESELECT|YESNO|&nbsp;|
|启用临时数据|ENATEMPDATA|NSCODELIST|&nbsp;|
|数据对象缓存时长|ENTITYCACHETIMEOUT|INT|&nbsp;|
|现有数据结构|EXISTINGMODEL|YESNO|&nbsp;|
|用户表|EXTABLENAME|TEXT|&nbsp;|
|模型锁模式|LOCKFLAG|NSCODELIST|&nbsp;|
|索引类型|INDEXDETYPE|SSCODELIST|&nbsp;|
|主键规则|KEYRULE|TEXT|&nbsp;|
|逻辑无效值|LOGICINVALIDVALUE|TEXT|&nbsp;|
|中文名称|LOGICNAME|TEXT|&nbsp;|
|启用逻辑有效|LOGICVALID|YESNO|&nbsp;|
|逻辑有效值|LOGICVALIDVALUE|TEXT|&nbsp;|
|模型导入导出能力|MODELIMPEXPFLAG|NSCODELIST|&nbsp;|
|备注|MEMO|LONGTEXT_1000|&nbsp;|
|最大缓存数据对象数|MAXENTITYCACHECNT|INT|&nbsp;|
|无视图模式|NOVIEWMODE|YESNO|&nbsp;|
|模型状态|MODELSTATE|NMCODELIST|&nbsp;|
|SaaS构型|SAASMODE|NSCODELIST|&nbsp;|
|删除模式|REMOVEFLAG|NSCODELIST|&nbsp;|
|服务API模式|SERVICEAPIFLAG|NSCODELIST|&nbsp;|
|服务代码名称|SERVICECODENAME|TEXT|&nbsp;|
|存储模式|STORAGEMODE|NSCODELIST|&nbsp;|
|子系统实体|SUBSYSDE|YESNO|&nbsp;|
|默认发布行为服务|SVRPUBMODE|YESNO|&nbsp;|
|系统实体|SYSTEMFLAG|YESNO|&nbsp;|
|主表名称|TABLENAME|TEXT|&nbsp;|
|默认测试单元|TESTCASEFLAG|YESNO|&nbsp;|
|TODO|TODOTASK|LONGTEXT_1000|&nbsp;|
|自定义参数|USERPARAMS|TEXT|&nbsp;|
|默认用户界面行为|USERACTION|NMCODELIST|&nbsp;|
|用户分类|USERCAT|SSCODELIST|&nbsp;|
|用户标记2|USERTAG2|TEXT|&nbsp;|
|用户标记|USERTAG|TEXT|&nbsp;|
|用户标记3|USERTAG3|TEXT|&nbsp;|
|用户标记4|USERTAG4|TEXT|&nbsp;|
|是否启用|VALIDFLAG|YESNO|&nbsp;|
|视图名称|VIEWNAME|TEXT|&nbsp;|
|多视图级别|VIEWLEVEL|NSCODELIST|&nbsp;|
|级别3视图名称|VIEWNAME3|TEXT|&nbsp;|
|级别2视图名称|VIEWNAME2|TEXT|&nbsp;|
|级别4视图名称|VIEWNAME4|TEXT|&nbsp;|
|系统|PSSYSTEMID|TEXT|&nbsp;|
|系统|PSSYSTEMNAME|TEXT|&nbsp;|
|模块颜色|MODCOLOR|PICKUPDATA|&nbsp;|
|系统模块|PSMODULENAME|PICKUPTEXT|&nbsp;|
|系统模块|PSMODULEID|PICKUP|&nbsp;|
|子系统实体|SUBSYSMODULE|PICKUPDATA|&nbsp;|
|子系统接口实体|PSSUBSYSSADEID|PICKUP|&nbsp;|
|子系统接口实体|PSSUBSYSSADENAME|PICKUPTEXT|&nbsp;|
|子系统服务接口|PSSUBSYSSERVICEAPIID|PICKUP|&nbsp;|
|子系统服务接口|PSSUBSYSSERVICEAPINAME|PICKUPTEXT|&nbsp;|
|系统设计需求|PSSYSREQITEMNAME|PICKUPTEXT|&nbsp;|
|系统设计需求|PSSYSREQITEMID|PICKUP|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|实体名称|默认规则|内容长度必须小于等于[200]|
|实体标识|默认规则|内容长度必须小于等于[100]|
|建立时间|默认规则|默认规则|
|建立人|默认规则|内容长度必须小于等于[60]|
|更新人|默认规则|内容长度必须小于等于[60]|
|更新时间|默认规则|默认规则|
|虚拟实体|默认规则|默认规则|
|虚拟主键分隔符|默认规则|内容长度必须小于等于[10]|
|访问控制体系|默认规则|默认规则|
|审计模式|默认规则|默认规则|
|预置业务功能模式|默认规则|内容长度必须小于等于[30]|
|基类参数|默认规则|内容长度必须小于等于[2000]|
|代码名称|默认规则|内容长度必须小于等于[60]|
|显示颜色|默认规则|内容长度必须小于等于[30]|
|数据访问控制方式|默认规则|默认规则|
|数据导入导出能力|默认规则|默认规则|
|数据变更日志类型|默认规则|默认规则|
|数据库表空间|默认规则|内容长度必须小于等于[20]|
|实体类别|默认规则|内容长度必须小于等于[20]|
|全局禁止子系统导入|默认规则|默认规则|
|实体编号|默认规则|内容长度必须小于等于[60]|
|实体标记2|默认规则|内容长度必须小于等于[60]|
|实体类型|默认规则|默认规则|
|实体标记|默认规则|内容长度必须小于等于[60]|
|扩展模式|默认规则|默认规则|
|默认数据源|默认规则|内容长度必须小于等于[20]|
|启用数据审计|默认规则|默认规则|
|动态模型类型|默认规则|默认规则|
|启用数据版本|默认规则|默认规则|
|启用DA日志|默认规则|默认规则|
|支持获取结果集|默认规则|默认规则|
|启用数据对象缓存|默认规则|默认规则|
|支持实体行为|默认规则|默认规则|
|支持多数据源|默认规则|默认规则|
|支持移动端|默认规则|默认规则|
|启用操作者名称模型|默认规则|默认规则|
|启用组织模型|默认规则|默认规则|
|启用多表单|默认规则|默认规则|
|启用工作流模型|默认规则|默认规则|
|支持简单查询|默认规则|默认规则|
|启用临时数据|默认规则|默认规则|
|数据对象缓存时长|默认规则|默认规则|
|现有数据结构|默认规则|默认规则|
|用户表|默认规则|内容长度必须小于等于[100]|
|模型锁模式|默认规则|默认规则|
|索引类型|默认规则|内容长度必须小于等于[20]|
|主键规则|默认规则|内容长度必须小于等于[100]|
|逻辑无效值|默认规则|内容长度必须小于等于[10]|
|中文名称|默认规则|内容长度必须小于等于[60]|
|启用逻辑有效|默认规则|默认规则|
|逻辑有效值|默认规则|内容长度必须小于等于[10]|
|模型导入导出能力|默认规则|默认规则|
|备注|默认规则|内容长度必须小于等于[2000]|
|最大缓存数据对象数|默认规则|默认规则|
|无视图模式|默认规则|默认规则|
|模型状态|默认规则|默认规则|
|SaaS构型|默认规则|默认规则|
|删除模式|默认规则|默认规则|
|服务API模式|默认规则|默认规则|
|服务代码名称|默认规则|内容长度必须小于等于[30]|
|存储模式|默认规则|默认规则|
|子系统实体|默认规则|默认规则|
|默认发布行为服务|默认规则|默认规则|
|系统实体|默认规则|默认规则|
|主表名称|默认规则|内容长度必须小于等于[60]|
|默认测试单元|默认规则|默认规则|
|TODO|默认规则|内容长度必须小于等于[4000]|
|自定义参数|默认规则|内容长度必须小于等于[2000]|
|默认用户界面行为|默认规则|默认规则|
|用户分类|默认规则|内容长度必须小于等于[10]|
|用户标记2|默认规则|内容长度必须小于等于[100]|
|用户标记|默认规则|内容长度必须小于等于[100]|
|用户标记3|默认规则|内容长度必须小于等于[50]|
|用户标记4|默认规则|内容长度必须小于等于[50]|
|是否启用|默认规则|默认规则|
|视图名称|默认规则|内容长度必须小于等于[60]|
|多视图级别|默认规则|默认规则|
|级别3视图名称|默认规则|内容长度必须小于等于[60]|
|级别2视图名称|默认规则|内容长度必须小于等于[60]|
|级别4视图名称|默认规则|内容长度必须小于等于[60]|
|系统|默认规则|内容长度必须小于等于[100]|
|系统|默认规则|内容长度必须小于等于[100]|
|模块颜色|默认规则|内容长度必须小于等于[30]|
|系统模块|默认规则|内容长度必须小于等于[200]|
|系统模块|默认规则|内容长度必须小于等于[100]|
|子系统实体|默认规则|默认规则|
|子系统接口实体|默认规则|内容长度必须小于等于[100]|
|子系统接口实体|默认规则|内容长度必须小于等于[200]|
|子系统服务接口|默认规则|内容长度必须小于等于[100]|
|子系统服务接口|默认规则|内容长度必须小于等于[200]|
|系统设计需求|默认规则|内容长度必须小于等于[200]|
|系统设计需求|默认规则|内容长度必须小于等于[100]|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#PSDataEntity_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#PSDataEntity_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|实体名称(PSDATAENTITYNAME)|LIKE|
|虚拟实体(VIRTUALFLAG)|EQ|
|访问控制体系(ACCCTRLARCH)|EQ|
|审计模式(AUDITMODE)|EQ|
|预置业务功能模式(BIZTAG)|EQ|
|数据访问控制方式(DATAACCMODE)|EQ|
|数据导入导出能力(DATAIMPEXPFLAG)|EQ|
|数据变更日志类型(DATACHGLOGMODE)|EQ|
|数据库表空间(DBTABSPACE)|EQ|
|实体类别(DECAT)|EQ|
|实体类型(DETYPE)|EQ|
|扩展模式(DYNAMICMODE)|EQ|
|默认数据源(DSLINK)|EQ|
|动态模型类型(DYNAMODELFLAG)|EQ|
|启用临时数据(ENATEMPDATA)|EQ|
|模型锁模式(LOCKFLAG)|EQ|
|索引类型(INDEXDETYPE)|EQ|
|模型导入导出能力(MODELIMPEXPFLAG)|EQ|
|SaaS构型(SAASMODE)|EQ|
|删除模式(REMOVEFLAG)|EQ|
|服务API模式(SERVICEAPIFLAG)|EQ|
|存储模式(STORAGEMODE)|EQ|
|用户分类(USERCAT)|EQ|
|多视图级别(VIEWLEVEL)|EQ|
|系统模块(PSMODULENAME)|EQ|
|系统模块(PSMODULENAME)|LIKE|
|系统模块(PSMODULEID)|EQ|
|子系统接口实体(PSSUBSYSSADEID)|EQ|
|子系统接口实体(PSSUBSYSSADENAME)|EQ|
|子系统接口实体(PSSUBSYSSADENAME)|LIKE|
|子系统服务接口(PSSUBSYSSERVICEAPIID)|EQ|
|子系统服务接口(PSSUBSYSSERVICEAPINAME)|EQ|
|子系统服务接口(PSSUBSYSSERVICEAPINAME)|LIKE|
|系统设计需求(PSSYSREQITEMNAME)|EQ|
|系统设计需求(PSSYSREQITEMNAME)|LIKE|
|系统设计需求(PSSYSREQITEMID)|EQ|

## 导入模式
无


## 导出模式
无
