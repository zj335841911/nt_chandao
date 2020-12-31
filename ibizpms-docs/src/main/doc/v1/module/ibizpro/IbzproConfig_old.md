# 系统配置表(IBZPRO_CONFIG)

  

## 关系
无

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|系统配置表名称|IBZPRO_CONFIGNAME|TEXT|&nbsp;|
|系统配置表标识|IBZPRO_CONFIGID|GUID|&nbsp;|
|更新人|UPDATEMAN|TEXT|&nbsp;|
|更新时间|UPDATEDATE|DATETIME|&nbsp;|
|建立时间|CREATEDATE|DATETIME|&nbsp;|
|建立人|CREATEMAN|TEXT|&nbsp;|
|范围|SCOPE|SSCODELIST|&nbsp;|
|是否启用|VAILD|SSCODELIST|&nbsp;|
|描述|MEMO|TEXT|&nbsp;|
|类型|TYPE|SSCODELIST|&nbsp;|
|管理现状|MANAGEMENTSTATUS|SSCODELIST|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|系统配置表名称|默认规则|内容长度必须小于等于[200]|
|系统配置表标识|默认规则|内容长度必须小于等于[100]|
|更新人|默认规则|内容长度必须小于等于[60]|
|更新时间|默认规则|默认规则|
|建立时间|默认规则|默认规则|
|建立人|默认规则|内容长度必须小于等于[60]|
|范围|默认规则|内容长度必须小于等于[2000]|
|是否启用|默认规则|内容长度必须小于等于[60]|
|描述|默认规则|内容长度必须小于等于[100]|
|类型|默认规则|内容长度必须小于等于[60]|
|管理现状|默认规则|内容长度必须小于等于[60]|

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
|获取系统配置|用户自定义|&nbsp;|
|Save|内置方法|&nbsp;|

## 处理逻辑
无

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#IbzproConfig_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#IbzproConfig_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|系统配置表名称(IBZPRO_CONFIGNAME)|LIKE|
|是否启用(VAILD)|EQ|
|类型(TYPE)|EQ|
|管理现状(MANAGEMENTSTATUS)|EQ|

## 导入模式
无


## 导出模式
无
