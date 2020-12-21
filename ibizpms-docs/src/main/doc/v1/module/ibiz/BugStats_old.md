# Bug统计(IBZ_BUGSTATS)

  

## 关系
{% plantuml %}
产品 *-- Bug统计 
项目 *-- Bug统计 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|标识|ID|ACID|&nbsp;|
|名称|TITLE|TEXT|&nbsp;|
|由谁创建|OPENEDBY|SSCODELIST|&nbsp;|
|未解决|BUGWJJ|INT|&nbsp;|
|设计如此|BUGBYDESIGN|INT|&nbsp;|
|重复Bug|BUGDUPLICATE|INT|&nbsp;|
|外部原因|BUGEXTERNAL|INT|&nbsp;|
|已解决|BUGFIXED|INT|&nbsp;|
|无法重现|BUGNOTREPRO|INT|&nbsp;|
|延期处理|BUGPOSTPONED|INT|&nbsp;|
|不予解决|BUGWILLNOTFIX|INT|&nbsp;|
|转为需求|BUGTOSTORY|INT|&nbsp;|
|有效率|BUGEFFICIENT|TEXT|&nbsp;|
|总计|BUGTOTAL|INT|&nbsp;|
|编号|PRODUCT|PICKUP|&nbsp;|
|产品名称|PRODUCTNAME|PICKUPTEXT|&nbsp;|
|Bug|BUGCNT|INT|&nbsp;|
|指派给|ASSIGNEDTO|SSCODELIST|&nbsp;|
|由谁解决|RESOLVEDBY|SSCODELIST|&nbsp;|
|项目编号|PROJECT|PICKUP|&nbsp;|
|项目名称|PROJECTNAME|TEXT|&nbsp;|
|激活Bug|BUGACTIVE|INT|&nbsp;|
|已解决Bug|BUGRESOLVED|INT|&nbsp;|
|已关闭Bug|BUGCLOSED|INT|&nbsp;|
|项目名称|PROJECTNAME1|TEXT|&nbsp;|
|Bug解决方案|BUGRESOLUTION|TEXT|&nbsp;|
|Bug状态|BUGSTATUS|TEXT|&nbsp;|
|Bug编号|BUGID|INT|&nbsp;|
|Bug标题|BUGTITLE|TEXT|&nbsp;|
|Bug优先级|BUGPRI|INT|&nbsp;|
|Bug严重程度|BUGSEVERITY|INT|&nbsp;|
|bug创建人|BUGOPENEDBY|TEXT|&nbsp;|
|Bug创建日期|BUGOPENEDDATE|DATE|&nbsp;|
|bug解决日期|BUGRESOLVEDDATE|DATE|&nbsp;|
|部门|DEPT|SSCODELIST|&nbsp;|
|开始|BEGIN|DATE|&nbsp;|
|结束|END|DATE|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|标识|默认规则|默认规则|
|名称|默认规则|内容长度必须小于等于[100]|
|由谁创建|默认规则|内容长度必须小于等于[60]|
|未解决|默认规则|默认规则|
|设计如此|默认规则|默认规则|
|重复Bug|默认规则|默认规则|
|外部原因|默认规则|默认规则|
|已解决|默认规则|默认规则|
|无法重现|默认规则|默认规则|
|延期处理|默认规则|默认规则|
|不予解决|默认规则|默认规则|
|转为需求|默认规则|默认规则|
|有效率|默认规则|内容长度必须小于等于[200]|
|总计|默认规则|默认规则|
|编号|默认规则|默认规则|
|产品名称|默认规则|内容长度必须小于等于[90]|
|Bug|默认规则|默认规则|
|指派给|默认规则|内容长度必须小于等于[60]|
|由谁解决|默认规则|内容长度必须小于等于[100]|
|项目编号|默认规则|默认规则|
|项目名称|默认规则|内容长度必须小于等于[100]|
|激活Bug|默认规则|默认规则|
|已解决Bug|默认规则|默认规则|
|已关闭Bug|默认规则|默认规则|
|项目名称|默认规则|内容长度必须小于等于[100]|
|Bug解决方案|默认规则|内容长度必须小于等于[100]|
|Bug状态|默认规则|内容长度必须小于等于[100]|
|Bug编号|默认规则|默认规则|
|Bug标题|默认规则|内容长度必须小于等于[100]|
|Bug优先级|默认规则|默认规则|
|Bug严重程度|默认规则|默认规则|
|bug创建人|默认规则|内容长度必须小于等于[100]|
|Bug创建日期|默认规则|默认规则|
|bug解决日期|默认规则|默认规则|
|部门|默认规则|内容长度必须小于等于[200]|
|开始|默认规则|默认规则|
|结束|默认规则|默认规则|

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
|BugCountInResolution|Bug在每个解决方案的Bug数([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_BugCountInResolution))|否|&nbsp;|
|BugResolvedBy|Bug完成表([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_BugResolvedBy))|否|&nbsp;|
|BugResolvedGird|bug解决汇总表([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_BugResolvedGird))|否|&nbsp;|
|BugassignedTo|Bug指派表([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_BugassignedTo))|否|&nbsp;|
|DEFAULT|Bug创建表([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_Default))|否|&nbsp;|
|ProductBugResolutionStats|产品Bug解决方案汇总([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_ProductBugResolutionStats))|否|&nbsp;|
|ProductBugStatusSum|产品Bug状态汇总([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_ProductBugStatusSum))|否|&nbsp;|
|ProductCreateBug|产品创建bug占比([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_ProductCreateBug))|否|&nbsp;|
|ProjectBugStatusCount|项目bug状态统计([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_ProjectBugStatusCount))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#BugStats_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|BugCountInResolution|Bug在每个解决方案的Bug数|BugCountInResolution|否|&nbsp;|
|BugResolvedBy|Bug完成表|BugResolvedBy|否|&nbsp;|
|BugResolvedGird|bug解决汇总表|BugResolvedGird|否|&nbsp;|
|BugassignedTo|Bug指派表|BugassignedTo|否|&nbsp;|
|DEFAULT|数据集|DEFAULT|是|&nbsp;|
|ProductBugResolutionStats|产品Bug解决方案汇总|ProductBugResolutionStats|否|&nbsp;|
|ProductBugStatusSum|产品Bug状态汇总|ProductBugStatusSum|否|&nbsp;|
|ProductCreateBug|产品创建bug占比|ProductCreateBug|否|&nbsp;|
|ProjectBugStatusCount|项目bug状态统计|ProjectBugStatusCount|否|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|名称(TITLE)|LIKE|
|由谁创建(OPENEDBY)|EQ|
|不予解决(BUGWILLNOTFIX)|LTANDEQ|
|编号(PRODUCT)|EQ|
|指派给(ASSIGNEDTO)|EQ|
|由谁解决(RESOLVEDBY)|EQ|
|项目编号(PROJECT)|EQ|
|部门(DEPT)|EQ|
|开始(BEGIN)|LTANDEQ|
|结束(END)|GTANDEQ|

## 导入模式
无


## 导出模式
无
