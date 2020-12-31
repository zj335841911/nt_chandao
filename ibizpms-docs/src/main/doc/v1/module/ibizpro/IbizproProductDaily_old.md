# 产品日报(IBIZPRO_PRODUCTDAILY)

  

## 关系
{% plantuml %}
产品 *-- 产品日报 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|产品日报名称|IBIZPRO_PRODUCTDAILYNAME|TEXT|&nbsp;|
|产品日报标识|IBIZPRO_PRODUCTDAILYID|ACID|&nbsp;|
|建立人|CREATEMAN|TEXT|&nbsp;|
|建立时间|CREATEDATE|DATETIME|&nbsp;|
|更新时间|UPDATEDATE|DATETIME|&nbsp;|
|更新人|UPDATEMAN|TEXT|&nbsp;|
|产品负责人|PO|TEXT|&nbsp;|
|产品|PRODUCT|PICKUP|&nbsp;|
|日期|DATE|DATE|&nbsp;|
|任务|TASKS|TEXT|&nbsp;|
|总工时|TOTALESTIMATES|FLOAT|&nbsp;|
|产品名称|PRODUCTNAME|PICKUPTEXT|&nbsp;|
|开始日期|BEGIN|DATE|&nbsp;|
|结束日期|END|DATE|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|产品日报名称|默认规则|内容长度必须小于等于[200]|
|产品日报标识|默认规则|默认规则|
|建立人|默认规则|内容长度必须小于等于[60]|
|建立时间|默认规则|默认规则|
|更新时间|默认规则|默认规则|
|更新人|默认规则|内容长度必须小于等于[60]|
|产品负责人|默认规则|内容长度必须小于等于[100]|
|产品|默认规则|默认规则|
|日期|默认规则|默认规则|
|任务|默认规则|内容长度必须小于等于[100]|
|总工时|默认规则|默认规则|
|产品名称|默认规则|内容长度必须小于等于[90]|
|开始日期|默认规则|默认规则|
|结束日期|默认规则|默认规则|

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
|汇总产品日报|用户自定义|&nbsp;|

## 处理逻辑
无

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#IbizproProductDaily_Default))|否|&nbsp;|
|ProductDaily|产品日报([MYSQL5](../../appendix/query_MYSQL5.md#IbizproProductDaily_ProductDaily))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#IbizproProductDaily_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|
|ProductDaily|产品日报|ProductDaily|否|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|产品日报名称(IBIZPRO_PRODUCTDAILYNAME)|LIKE|
|产品负责人(PO)|EQ|
|产品(PRODUCT)|EQ|
|产品名称(PRODUCTNAME)|EQ|
|产品名称(PRODUCTNAME)|LIKE|

## 导入模式
无


## 导出模式
无
