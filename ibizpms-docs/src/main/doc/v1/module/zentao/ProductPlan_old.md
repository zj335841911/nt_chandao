# 产品计划(ZT_PRODUCTPLAN)

  

## 关系
{% plantuml %}
产品计划 *-- Bug 
产品计划 *-- 项目产品 
产品计划 *-- 任务 
产品计划 *-- 产品计划 
产品的分支和平台信息 *-- 产品计划 
产品 *-- 产品计划 
产品计划 *-- 产品计划 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|名称|TITLE|TEXT|&nbsp;|
|编号|ID|ACID|&nbsp;|
|开始日期|BEGIN|DATE|&nbsp;|
|描述|DESC|LONGTEXT|&nbsp;|
|结束日期|END|DATE|&nbsp;|
|已删除|DELETED|TEXT|&nbsp;|
|排序|ORDER|LONGTEXT|&nbsp;|
|父计划名称|PARENTNAME|PICKUPTEXT|&nbsp;|
|平台/分支|BRANCH|PICKUP|&nbsp;|
|父计划|PARENT|PICKUP|&nbsp;|
|产品|PRODUCT|PICKUP|&nbsp;|
|状态|STATUSS|TEXT|&nbsp;|
|待定|FUTURE|SSCODELIST|&nbsp;|
|周期|DELTA|SSCODELIST|&nbsp;|
|上一次计划名称|OLDTITLE|TEXT|&nbsp;|
|需求数|STORYCNT|INT|&nbsp;|
|bug数|BUGCNT|INT|&nbsp;|
|是否过期|ISEXPIRED|YESNO|&nbsp;|
|工时数|ESTIMATECNT|INT|&nbsp;|
|开始日期|BEGINSTR|TEXT|&nbsp;|
|结束日期|ENDSTR|TEXT|&nbsp;|
|计划模板|PLANTEMPLET|SSCODELIST|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|名称|默认规则|内容长度必须小于等于[90]|
|编号|默认规则|默认规则|
|开始日期|默认规则|默认规则|
|描述|默认规则|内容长度必须小于等于[65535]|
|结束日期|默认规则|默认规则|
|已删除|默认规则|内容长度必须小于等于[1]|
|排序|默认规则|内容长度必须小于等于[65535]|
|父计划名称|默认规则|内容长度必须小于等于[90]|
|平台/分支|默认规则|默认规则|
|父计划|默认规则|默认规则|
|产品|默认规则|默认规则|
|状态|默认规则|内容长度必须小于等于[200]|
|待定|默认规则|内容长度必须小于等于[200]|
|周期|默认规则|内容长度必须小于等于[200]|
|上一次计划名称|默认规则|内容长度必须小于等于[100]|
|需求数|默认规则|默认规则|
|bug数|默认规则|默认规则|
|是否过期|默认规则|内容长度必须小于等于[200]|
|工时数|默认规则|默认规则|
|开始日期|默认规则|内容长度必须小于等于[200]|
|结束日期|默认规则|内容长度必须小于等于[200]|
|计划模板|默认规则|内容长度必须小于等于[200]|

## 状态控制

|状态|行为控制模式| 控制行为 | 操作标识控制模式 | 控制操作 |
| --------   | ------------|------------|------------|------------|
|Value| 允许|  | 不允许 | SRFUR__PROP_CHILD_BUT<br> |
|Value| 允许|  | 不允许 |  |
|Value| 允许|  | 不允许 | SRFUR__PROP_DELETE_BUT<br> |

状态


## 行为
| 行为    | 类型    |  说明  |
| --------   |------------| ----- | 
|Create|内置方法|&nbsp;|
|Update|内置方法|&nbsp;|
|Remove|内置方法|&nbsp;|
|Get|内置方法|&nbsp;|
|GetDraft|内置方法|&nbsp;|
|批量解除关联Bug|用户自定义|&nbsp;|
|批量解除关联需求|用户自定义|&nbsp;|
|CheckKey|内置方法|&nbsp;|
|获取上一个计划的名称|实体处理逻辑|&nbsp;|
|计算计划结束时间|用户自定义|&nbsp;|
|导入计划模板|用户自定义|&nbsp;|
|关联Bug|用户自定义|&nbsp;|
|关联需求|用户自定义|&nbsp;|
|移动端产品计划计数器|实体处理逻辑|&nbsp;|
|Save|内置方法|&nbsp;|
|解除关联Bug|用户自定义|&nbsp;|
|解除关联需求|用户自定义|&nbsp;|

## 处理逻辑
* 获取开始日期和结束日期 (GetBedinANDEnd)
  
   

{% plantuml %}
hide footbox

产品计划 -> 产品计划: 设置待定
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|0|开始 | 
|1|设置待定 |
<center>获取开始日期和结束日期</center>
* 获取上一个计划的名称 (GetOldPlanName)
  
   

{% plantuml %}
hide footbox

产品计划 -> 产品计划: 获取名称
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|0|开始 | 
|1|获取名称 |
<center>获取上一个计划的名称</center>
* 移动端产品计划计数器 (MobProductPlanCounter)
  
   

{% plantuml %}
hide footbox

产品计划 -> 产品计划: 获取bug数
产品计划 -> 产品计划: 获取需求数
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|获取bug数 |
|1|开始 | 
|2|获取需求数 |
<center>移动端产品计划计数器</center>

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|DEFAULT|DEFAULT([MYSQL5](../../appendix/query_MYSQL5.md#ProductPlan_Default))|否|&nbsp;|
|DefaultParent|默认查询([MYSQL5](../../appendix/query_MYSQL5.md#ProductPlan_DefaultParent))|否|&nbsp;|
|GetList|获取产品计划列表([MYSQL5](../../appendix/query_MYSQL5.md#ProductPlan_GetList))|否|&nbsp;获取当前用户的相关产品（分支）的计划|
|PlanCodeList|计划（代码表）([MYSQL5](../../appendix/query_MYSQL5.md#ProductPlan_PlanCodeList))|否|&nbsp;|
|ProjectApp|项目立项([MYSQL5](../../appendix/query_MYSQL5.md#ProductPlan_ProjectApp))|否|&nbsp;|
|ProjectPlan|项目计划列表([MYSQL5](../../appendix/query_MYSQL5.md#ProductPlan_ProjectPlan))|否|&nbsp;|
|TaskPlan|任务计划([MYSQL5](../../appendix/query_MYSQL5.md#ProductPlan_TaskPlan))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#ProductPlan_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|CurProductPlan|CurProductPlan|GetList|否|&nbsp;|
|DEFAULT|DEFAULT|DEFAULT|是|&nbsp;|
|DefaultParent|默认查询|DefaultParent|否|&nbsp;|
|PlanCodeList|计划（代码表）|PlanCodeList|否|&nbsp;|
|ProjectApp|项目立项|ProjectApp|否|&nbsp;|
|ProjectPlan|项目计划列表|ProjectPlan|否|&nbsp;|
|TaskPlan|任务计划|TaskPlan|否|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|名称(TITLE)|LIKE|
|开始日期(BEGIN)|GTANDEQ|
|结束日期(END)|LTANDEQ|
|父计划名称(PARENTNAME)|EQ|
|父计划名称(PARENTNAME)|LIKE|
|平台/分支(BRANCH)|EQ|
|父计划(PARENT)|EQ|
|产品(PRODUCT)|EQ|
|待定(FUTURE)|EQ|
|周期(DELTA)|EQ|
|是否过期(ISEXPIRED)|EQ|
|计划模板(PLANTEMPLET)|EQ|

## 导入模式
无


## 导出模式
* 数据导出

|编号|名称|开始日期|开始日期|结束日期|结束日期|需求数|bug数|状态|
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| - | - | - | - | - | - | - | - | - |
