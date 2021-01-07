# 测试报告(ZT_TESTREPORT)

  

## 关系
{% plantuml %}
产品 *-- 测试报告 
项目 *-- 测试报告 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|所属对象|OBJECTID|INT|&nbsp;|
|用例|CASES|LONGTEXT|&nbsp;|
|参与人员|MEMBERS|LONGTEXT|&nbsp;|
|测试的Bug|BUGS|LONGTEXT|&nbsp;|
|由谁创建|CREATEDBY|TEXT|&nbsp;|
|测试的需求|STORIES|LONGTEXT|&nbsp;|
|测试单|TASKS|TEXT|&nbsp;|
|标题|TITLE|TEXT|&nbsp;|
|开始时间|BEGIN|DATE|&nbsp;|
|对象类型|OBJECTTYPE|SSCODELIST|&nbsp;|
|结束时间|END|DATE|&nbsp;|
|版本信息|BUILDS|TEXT|&nbsp;|
|创建时间|CREATEDDATE|DATETIME|&nbsp;|
|总结|REPORT|LONGTEXT|&nbsp;|
|编号|ID|ACID|&nbsp;|
|负责人|OWNER|TEXT|&nbsp;|
|已删除|DELETED|TEXT|&nbsp;|
|所属产品|PRODUCT|PICKUP|&nbsp;|
|所属项目|PROJECT|PICKUP|&nbsp;|
|所属产品|PRODUCTNAME|PICKUPTEXT|&nbsp;|
|所属项目|PROJECTNAME|PICKUPTEXT|&nbsp;|
|备注|COMMENT|HTMLTEXT|&nbsp;|
|概况|OVERVIEWS|HTMLTEXT|&nbsp;|
|附件|FILES|TEXT|&nbsp;|
|项目报告产品数|PRODUCTCNT|INT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|所属对象|默认规则|默认规则|
|用例|默认规则|内容长度必须小于等于[65535]|
|参与人员|默认规则|内容长度必须小于等于[65535]|
|测试的Bug|默认规则|内容长度必须小于等于[65535]|
|由谁创建|默认规则|内容长度必须小于等于[30]|
|测试的需求|默认规则|内容长度必须小于等于[65535]|
|测试单|默认规则|内容长度必须小于等于[255]|
|标题|默认规则|内容长度必须小于等于[255]|
|开始时间|默认规则|默认规则|
|对象类型|默认规则|内容长度必须小于等于[20]|
|结束时间|结束时间规则|[结束时间]应不小于[开始时间]|
|结束时间|默认规则|默认规则|
|版本信息|默认规则|内容长度必须小于等于[255]|
|创建时间|默认规则|默认规则|
|总结|默认规则|内容长度必须小于等于[65535]|
|编号|默认规则|默认规则|
|负责人|默认规则|内容长度必须小于等于[30]|
|已删除|默认规则|内容长度必须小于等于[1]|
|所属产品|默认规则|默认规则|
|所属项目|默认规则|默认规则|
|所属产品|默认规则|内容长度必须小于等于[90]|
|所属项目|默认规则|内容长度必须小于等于[90]|
|备注|默认规则|内容长度必须小于等于[1048576]|
|概况|默认规则|内容长度必须小于等于[1048576]|
|附件|默认规则|内容长度必须小于等于[1000]|
|项目报告产品数|默认规则|默认规则|

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
|根据起始时间获取概况信息|实体处理逻辑|&nbsp;|
|根据测试单获取相应信息|实体处理逻辑|&nbsp;|
|根据测试报告概况信息（项目报告）|实体处理逻辑|&nbsp;|
|根据测试单获取相应信息（项目报告）|实体处理逻辑|&nbsp;|
|根据测试单获取相应信息（项目报告）（单测试）|实体处理逻辑|&nbsp;|
|根据测试单获取相应信息（项目报告）（测试）|实体处理逻辑|&nbsp;|
|根据测试报告获取基本信息|实体处理逻辑|&nbsp;|
|根据测试报告获取基本信息（项目报告）|实体处理逻辑|&nbsp;|
|Save|内置方法|&nbsp;|

## 处理逻辑
* 根据测试单获取相应信息 (GetInfoTestTask)
  
   

{% plantuml %}
hide footbox

测试报告 -> 测试报告: 执行结果
测试报告 -> 测试报告: 执行的用例数
测试报告 -> 测试报告: 遗留的Bug
测试报告 -> 测试报告: 有效需求数
测试报告 -> 测试报告: 有效bug数
测试报告 -> 测试报告: 产生的bug
测试报告 -> 测试报告: 设置概况
测试报告 -> 测试报告: 获取数据
测试报告 -> 测试报告: 获取项目名
测试报告 -> 测试报告: 需求覆盖用例数
测试报告 -> 测试报告: 失败的用例数
测试报告 -> 测试报告: 用例产生的bug
测试报告 -> 测试报告: 获取用例数
测试报告 -> 测试报告: 解决的bug
测试报告 -> 测试报告: 获取参与人员
测试报告 -> 测试报告: 获取需求数
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|执行结果 |
|2|执行的用例数 |
|3|遗留的Bug |
|4|有效需求数 |
|5|有效bug数 |
|6|产生的bug |
|7|设置概况 |
|7|开始 | 
|8|获取数据 |
|9|获取项目名 |
|10|需求覆盖用例数 |
|11|失败的用例数 |
|12|用例产生的bug |
|13|获取用例数 |
|14|解决的bug |
|15|获取参与人员 |
|16|获取需求数 |
<center>根据测试单获取相应信息</center>
* 根据报告起始时间更新概况信息 (GetInfoTestTaskOvByTime)
  
   

{% plantuml %}
hide footbox

测试报告 -> 测试报告: 产生的bug
测试报告 -> 测试报告: 遗留的bug
测试报告 -> 测试报告: 执行结果
测试报告 -> 测试报告: 设置概况
测试报告 -> 测试报告: 执行用例数
测试报告 -> 测试报告: 有效需求数
测试报告 -> 测试报告: 获取失败的用例数
测试报告 -> 测试报告: 有效bug数
测试报告 -> 测试报告: 用例覆盖数
测试报告 -> 测试报告: 用例产生的bug
测试报告 -> 测试报告: 获取需求数
测试报告 -> 测试报告: 获取用例数
测试报告 -> 测试报告: 解决的bug
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|产生的bug |
|2|遗留的bug |
|3|执行结果 |
|4|设置概况 |
|5|执行用例数 |
|6|有效需求数 |
|7|获取失败的用例数 |
|8|有效bug数 |
|9|用例覆盖数 |
|10|用例产生的bug |
|10|开始 | 
|11|获取需求数 |
|12|获取用例数 |
|13|解决的bug |
<center>根据报告起始时间更新概况信息</center>
* 根据测试报告概况信息（项目报告） (GetInfoTestTaskOvProject)
  
   

{% plantuml %}
hide footbox

测试报告 -> 测试报告: 执行结果
测试报告 -> 测试报告: 用例产生的Bug
测试报告 -> 测试报告: 测试版本
测试报告 -> 测试报告: 有效Bug数
测试报告 -> 测试报告: 有效需求数
测试报告 -> 测试报告: 获取用例数
测试报告 -> 测试报告: 设置概况
测试报告 -> 测试报告: 需求覆盖用例数
测试报告 -> 测试报告: 执行的用例数
测试报告 -> 测试报告: 获取需求数
测试报告 -> 测试报告: 产生的Bug
测试报告 -> 测试报告: 遗留Bug
测试报告 -> 测试报告: 失败的用例数
测试报告 -> 测试报告: 解决的Bug
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|执行结果 |
|2|用例产生的Bug |
|3|测试版本 |
|4|有效Bug数 |
|5|有效需求数 |
|6|获取用例数 |
|7|设置概况 |
|8|需求覆盖用例数 |
|9|执行的用例数 |
|9|开始 | 
|10|获取需求数 |
|11|产生的Bug |
|12|遗留Bug |
|13|失败的用例数 |
|14|解决的Bug |
<center>根据测试报告概况信息（项目报告）</center>
* 根据测试单获取相应信息（项目报告） (GetInfoTestTaskProject)
  
   

{% plantuml %}
hide footbox

测试报告 -> 测试报告: 获取产品数
测试报告 -> 测试报告: 获取影响需求
测试报告 -> 测试报告: 获取项目周期
测试报告 -> 测试报告: 获取数据
测试报告 -> 测试报告: 准备参数
测试报告 -> 测试报告: 获取产品
测试报告 -> 测试报告: 获取测试单
测试报告 -> 测试报告: 获取影响Bug
测试报告 -> 测试报告: 获取概况信息
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|获取产品数 |
|2|获取影响需求 |
|3|获取项目周期 |
|4|获取数据 |
|4|开始 | 
|5|准备参数 |
|6|获取产品 |
|7|获取测试单 |
|8|获取影响Bug |
|9|获取概况信息 |
<center>根据测试单获取相应信息（项目报告）</center>
* 根据测试单获取相应信息（项目报告）（单测试） (GetInfoTestTaskR)
  
   

{% plantuml %}
hide footbox

测试报告 -> 测试报告: 获取测试单周期
测试报告 -> 测试报告: 获取数据
测试报告 -> 测试报告: 准备参数
测试报告 -> 测试报告: 获取概况信息
测试报告 -> 测试报告: 获取影响Bug
测试报告 -> 测试报告: 获取项目和产品
测试报告 -> 测试报告: 获取相应需求
测试报告 -> 测试报告: 获取测试单
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|获取测试单周期 |
|2|获取数据 |
|2|开始 | 
|3|准备参数 |
|4|获取概况信息 |
|5|获取影响Bug |
|6|获取项目和产品 |
|7|获取相应需求 |
|8|获取测试单 |
<center>根据测试单获取相应信息（项目报告）（单测试）</center>
* 根据测试单获取相应信息（项目报告）（多测试） (GetInfoTestTaskS)
  
   

{% plantuml %}
hide footbox

测试报告 -> 测试报告: 获取产品
测试报告 -> 测试报告: 获取影响Bug
测试报告 -> 测试报告: 获取项目周期
测试报告 -> 测试报告: 获取概况信息
测试报告 -> 测试报告: 获取数据
测试报告 -> 测试报告: 获取产品数
测试报告 -> 测试报告: 获取相应需求
测试报告 -> 测试报告: 获取测试单
测试报告 -> 测试报告: 准备参数
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|获取产品 |
|2|获取影响Bug |
|3|获取项目周期 |
|4|获取概况信息 |
|5|获取数据 |
|6|获取产品数 |
|7|获取相应需求 |
|8|获取测试单 |
|8|开始 | 
|9|准备参数 |
<center>根据测试单获取相应信息（项目报告）（多测试）</center>
* 根据测试报告获取基本信息 (GetTestReportBasicInfo)
  
   

{% plantuml %}
hide footbox

测试报告 -> 测试报告: 有效需求数
测试报告 -> 测试报告: 遗留Bug
测试报告 -> 测试报告: 执行的用例数
测试报告 -> 测试报告: 执行结果
测试报告 -> 测试报告: 获取需求数
测试报告 -> 测试报告: 产生的Bug
测试报告 -> 测试报告: 需求覆盖用例数
测试报告 -> 测试报告: 解决的Bug
测试报告 -> 测试报告: 设置概况
测试报告 -> 测试报告: 失败的用例数
测试报告 -> 测试报告: 获取数据
测试报告 -> 测试报告: 获取用例数
测试报告 -> 测试报告: 有效Bug数
测试报告 -> 测试报告: 用例产生的Bug
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|有效需求数 |
|2|遗留Bug |
|3|执行的用例数 |
|4|执行结果 |
|5|获取需求数 |
|6|产生的Bug |
|7|需求覆盖用例数 |
|8|解决的Bug |
|9|设置概况 |
|10|失败的用例数 |
|10|开始 | 
|11|获取数据 |
|12|获取用例数 |
|13|有效Bug数 |
|14|用例产生的Bug |
<center>根据测试报告获取基本信息</center>
* 根据测试报告获取基本信息（项目报告） (GetTestReportProject)
  
   

{% plantuml %}
hide footbox

测试报告 -> 测试报告: 需求覆盖用例数
测试报告 -> 测试报告: 用例产生的Bug
测试报告 -> 测试报告: 获取用例数
测试报告 -> 测试报告: 执行的用例数
测试报告 -> 测试报告: 执行结果
测试报告 -> 测试报告: 测试版本
测试报告 -> 测试报告: 获取数据
测试报告 -> 测试报告: 产生的Bug
测试报告 -> 测试报告: 失败的用例数
测试报告 -> 测试报告: 有效需求数
测试报告 -> 测试报告: 遗留Bug
测试报告 -> 测试报告: 有效Bug数
测试报告 -> 测试报告: 解决的Bug
测试报告 -> 测试报告: 获取需求数
测试报告 -> 测试报告: 设置概况
{% endplantuml %}

| 步骤       | 操作        |
| --------   | --------   |
|1|需求覆盖用例数 |
|2|用例产生的Bug |
|3|获取用例数 |
|4|执行的用例数 |
|5|执行结果 |
|6|测试版本 |
|6|开始 | 
|7|获取数据 |
|8|产生的Bug |
|9|失败的用例数 |
|10|有效需求数 |
|11|遗留Bug |
|12|有效Bug数 |
|13|解决的Bug |
|14|获取需求数 |
|15|设置概况 |
<center>根据测试报告获取基本信息（项目报告）</center>

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|DEFAULT|DEFAULT([MYSQL5](../../appendix/query_MYSQL5.md#TestReport_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#TestReport_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|DEFAULT|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|标题(TITLE)|LIKE|
|对象类型(OBJECTTYPE)|EQ|
|所属产品(PRODUCT)|EQ|
|所属项目(PROJECT)|EQ|
|所属产品(PRODUCTNAME)|EQ|
|所属产品(PRODUCTNAME)|LIKE|
|所属项目(PROJECTNAME)|EQ|
|所属项目(PROJECTNAME)|LIKE|

## 导入模式
无


## 导出模式
* 数据导出

|ID|标题|创建|创建时间|所属项目|测试版本|
| :------: | :------: | :------: | :------: | :------: | :------: |
| - | - | - | - | - | - |