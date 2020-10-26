# 系统需求项(PSSYSREQITEM)

  

## 关系
{% plantuml %}
系统需求项 *-- 实体 
系统需求项 *-- 系统需求项 
系统需求项 *-- 系统需求项 
系统需求模块 *-- 系统需求项 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|系统需求项标识|PSSYSREQITEMID|GUID|&nbsp;|
|建立人|CREATEMAN|TEXT|&nbsp;|
|系统需求项名称|PSSYSREQITEMNAME|TEXT|&nbsp;|
|建立时间|CREATEDATE|DATETIME|&nbsp;|
|更新时间|UPDATEDATE|DATETIME|&nbsp;|
|更新人|UPDATEMAN|TEXT|&nbsp;|
|代码标识|CODENAME|TEXT|&nbsp;|
|项编号|ITEMSN|TEXT|&nbsp;|
|项标记|ITEMTAG|TEXT|&nbsp;|
|项标记2|ITEMTAG2|TEXT|&nbsp;|
|项类型|ITEMTYPE|SSCODELIST|&nbsp;|
|备注|MEMO|LONGTEXT_1000|&nbsp;|
|次序|ORDERVALUE|INT|&nbsp;|
|内容|REQCONTENT|HTMLTEXT|&nbsp;|
|用户标记2|USERTAG2|TEXT|&nbsp;|
|用户标记|USERTAG|TEXT|&nbsp;|
|用户分类|USERCAT|SSCODELIST|&nbsp;|
|用户标记3|USERTAG3|TEXT|&nbsp;|
|用户标记4|USERTAG4|TEXT|&nbsp;|
|版本|VER|INT|&nbsp;|
|是否有效|VALIDFLAG|YESNO|&nbsp;|
|父需求项|PPSSYSREQITEMID|PICKUP|&nbsp;|
|父需求项|PPSSYSREQITEMNAME|PICKUPTEXT|&nbsp;|
|需求模块|PSSYSREQMODULEID|PICKUP|&nbsp;|
|需求模块|PSSYSREQMODULENAME|PICKUPTEXT|&nbsp;|
|系统|PSSYSTEMID|TEXT|&nbsp;|
|系统|PSSYSTEMNAME|TEXT|&nbsp;|
|系统用例|PSSYSUSERCASEID|TEXT|&nbsp;|
|系统用例|PSSYSUSERCASENAME|TEXT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|系统需求项标识|默认规则|内容长度必须小于等于[100]|
|建立人|默认规则|内容长度必须小于等于[60]|
|系统需求项名称|默认规则|内容长度必须小于等于[200]|
|建立时间|默认规则|默认规则|
|更新时间|默认规则|默认规则|
|更新人|默认规则|内容长度必须小于等于[60]|
|代码标识|默认规则|内容长度必须小于等于[50]|
|项编号|默认规则|内容长度必须小于等于[100]|
|项标记|默认规则|内容长度必须小于等于[200]|
|项标记2|默认规则|内容长度必须小于等于[200]|
|项类型|默认规则|内容长度必须小于等于[50]|
|备注|默认规则|内容长度必须小于等于[4000]|
|次序|默认规则|默认规则|
|内容|默认规则|内容长度必须小于等于[1048576]|
|用户标记2|默认规则|内容长度必须小于等于[200]|
|用户标记|默认规则|内容长度必须小于等于[200]|
|用户分类|默认规则|内容长度必须小于等于[10]|
|用户标记3|默认规则|内容长度必须小于等于[50]|
|用户标记4|默认规则|内容长度必须小于等于[50]|
|版本|默认规则|默认规则|
|是否有效|默认规则|默认规则|
|父需求项|默认规则|内容长度必须小于等于[100]|
|父需求项|默认规则|内容长度必须小于等于[200]|
|需求模块|默认规则|内容长度必须小于等于[100]|
|需求模块|默认规则|内容长度必须小于等于[200]|
|系统|默认规则|内容长度必须小于等于[100]|
|系统|默认规则|内容长度必须小于等于[100]|
|系统用例|默认规则|内容长度必须小于等于[100]|
|系统用例|默认规则|内容长度必须小于等于[100]|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#PSSysReqItem_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#PSSysReqItem_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|系统需求项名称(PSSYSREQITEMNAME)|LIKE|
|项类型(ITEMTYPE)|EQ|
|用户分类(USERCAT)|EQ|
|父需求项(PPSSYSREQITEMID)|EQ|
|父需求项(PPSSYSREQITEMNAME)|EQ|
|父需求项(PPSSYSREQITEMNAME)|LIKE|
|需求模块(PSSYSREQMODULEID)|EQ|
|需求模块(PSSYSREQMODULENAME)|EQ|
|需求模块(PSSYSREQMODULENAME)|LIKE|

## 导入模式
无


## 导出模式
无
