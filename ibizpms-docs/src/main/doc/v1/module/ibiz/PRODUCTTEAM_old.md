# 产品团队(IBZ_PRODUCTTEAM)

  

## 关系
{% plantuml %}
产品 *-- 产品团队 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|加盟日|JOIN|DATE|&nbsp;|
|可用工时/天|HOURS|FLOAT|&nbsp;|
|编号|ID|ACID|&nbsp;|
|角色|ROLE|TEXT|&nbsp;自动带入用户职位，可修改|
|团队类型|TYPE|SSCODELIST|&nbsp;|
|受限用户|LIMITED|SSCODELIST|&nbsp;|
|编号|ROOT|PICKUP|&nbsp;|
|用户|ACCOUNT|TEXT|&nbsp;|
|可用工日|DAYS|INT|&nbsp;|
|排序|ORDER|INT|&nbsp;task需要排序处理人顺序,project使用id排序|
|总计消耗|CONSUMED|FLOAT|&nbsp;|
|预计剩余|LEFT|FLOAT|&nbsp;|
|最初预计|ESTIMATE|FLOAT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|加盟日|默认规则|默认规则|
|可用工时/天|默认规则|默认规则|
|编号|默认规则|默认规则|
|角色|默认规则|内容长度必须小于等于[30]|
|团队类型|默认规则|内容长度必须小于等于[7]|
|受限用户|默认规则|内容长度必须小于等于[8]|
|编号|默认规则|默认规则|
|用户|默认规则|内容长度必须小于等于[30]|
|可用工日|默认规则|默认规则|
|排序|默认规则|默认规则|
|总计消耗|默认规则|默认规则|
|预计剩余|默认规则|默认规则|
|最初预计|默认规则|默认规则|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#PRODUCTTEAM_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#PRODUCTTEAM_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|团队类型(TYPE)|EQ|
|受限用户(LIMITED)|EQ|
|编号(ROOT)|EQ|
|用户(ACCOUNT)|LIKE|

## 导入模式
无


## 导出模式
无
