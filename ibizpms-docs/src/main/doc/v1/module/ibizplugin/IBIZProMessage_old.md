# 消息(IBIZPRO_MESSAGE)

  

## 关系
无

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|重发次数|RETRYTIMES|INT|&nbsp;|
|发送方|FROM|LONGTEXT|&nbsp;|
|抄送方|CC|LONGTEXT|&nbsp;|
|接收方|TO|LONGTEXT|&nbsp;|
|内容|CONTENT|LONGTEXT|&nbsp;|
|密件抄送方|BCC|LONGTEXT|&nbsp;|
|消息参数|PARAM|LONGTEXT|&nbsp;|
|消息名称|IBIZPRO_MESSAGENAME|TEXT|&nbsp;|
|标题|SUBJECT|TEXT|&nbsp;|
|重发间隔时间|RETRYINTERVALTIME|INT|&nbsp;|
|消息类型|TYPE|SSCODELIST|&nbsp;|
|是否同步|ISSYNC|NSCODELIST|&nbsp;|
|是否重发|ISRETRY|NSCODELIST|&nbsp;|
|是否是链接消息|ISLINK|NSCODELIST|&nbsp;|
|消息标识|IBIZPRO_MESSAGEID|TEXT|&nbsp;|
|是否已完成|ISDONE|NSCODELIST|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|重发次数|默认规则|默认规则|
|发送方|默认规则|内容长度必须小于等于[1048576]|
|抄送方|默认规则|内容长度必须小于等于[1048576]|
|接收方|默认规则|内容长度必须小于等于[1048576]|
|内容|默认规则|内容长度必须小于等于[1048576]|
|密件抄送方|默认规则|内容长度必须小于等于[1048576]|
|消息参数|默认规则|内容长度必须小于等于[1048576]|
|消息名称|默认规则|内容长度必须小于等于[100]|
|标题|默认规则|内容长度必须小于等于[100]|
|重发间隔时间|默认规则|默认规则|
|消息类型|默认规则|内容长度必须小于等于[60]|
|是否同步|默认规则|默认规则|
|是否重发|默认规则|默认规则|
|是否是链接消息|默认规则|默认规则|
|消息标识|默认规则|内容长度必须小于等于[100]|
|是否已完成|默认规则|默认规则|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#IBIZProMessage_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#IBIZProMessage_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|消息名称(IBIZPRO_MESSAGENAME)|LIKE|
|消息类型(TYPE)|EQ|
|是否同步(ISSYNC)|EQ|
|是否重发(ISRETRY)|EQ|
|是否是链接消息(ISLINK)|EQ|
|是否已完成(ISDONE)|EQ|

## 导入模式
无


## 导出模式
无
