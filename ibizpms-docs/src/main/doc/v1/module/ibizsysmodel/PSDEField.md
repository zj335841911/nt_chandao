# 实体属性(PSDEFIELD)

  

## 关系
{% plantuml %}
实体属性 *-- 实体属性 
实体属性 *-- 实体属性 
实体属性 *-- 实体属性 
实体属性 *-- 实体属性 
实体属性 *-- 实体属性 
实体 *-- 实体属性 
实体属性 *-- 实体属性 
实体属性 *-- 实体属性 
实体属性 *-- 实体属性 
实体属性 *-- 实体属性 
实体属性 *-- 实体属性 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|实体属性标识|PSDEFIELDID|GUID|&nbsp;|
|实体属性名称|PSDEFIELDNAME|TEXT|&nbsp;|
|建立人|CREATEMAN|TEXT|&nbsp;|
|更新时间|UPDATEDATE|DATETIME|&nbsp;|
|更新人|UPDATEMAN|TEXT|&nbsp;|
|建立时间|CREATEDATE|DATETIME|&nbsp;|
|业务标记|BIZTAG|SSCODELIST|&nbsp;|
|允许为空|ALLOWEMPTY|YESNO|&nbsp;|
|审计信息格式|AUDITINFOFORMAT|TEXT|&nbsp;|
|检查递归|CHECKRECURSION|YESNO|&nbsp;|
|代码名称|CODENAME|TEXT|&nbsp;|
|数据库更新值模式|DBVALUEMODE|SSCODELIST|&nbsp;|
|自定义导出范围|CUSTOMEXPORTSCOPE|YESNO|&nbsp;|
|数据库新建值模式|DBVALUEMODE2|SSCODELIST|&nbsp;|
|属性类型|DEFTYPE|NSCODELIST|&nbsp;|
|属性默认值|DEFAULTVALUE|TEXT|&nbsp;|
|重复值检查|DUPCHECKMODE|SSCODELIST|&nbsp;|
|检查值范围|DUPCHECKVALUES|TEXT|&nbsp;|
|默认值类型|DVT|SSCODELIST|&nbsp;|
|启用审计|ENABLEAUDIT|YESNO|&nbsp;|
|动态模型类型|DYNAMODELFLAG|NSCODELIST|&nbsp;|
|启用快速搜索|ENABLEQS|YESNO|&nbsp;|
|启用列权限控制|ENABLECOLPRIV|YESNO|&nbsp;|
|支持链接属性回写|ENAWRITEBACK|YESNO|&nbsp;|
|默认用户行为|ENABLEUSERINPUT|NMCODELIST|&nbsp;|
|支持临时数据|ENABLETEMPDATA|YESNO|&nbsp;|
|扩展模式|EXTENDMODE|NSCODELIST|&nbsp;|
|导出范围|EXPORTSCOPE|NMCODELIST|&nbsp;|
|逻辑属性参数|FORMULAFIELDS|TEXT|&nbsp;|
|外键属性|FKEY|YESNO|&nbsp;|
|逻辑字段格式|FORMULAFORMAT|TEXT|&nbsp;|
|数据导入识别|IMPORTKEY|YESNO|&nbsp;|
|数据导入次序|IMPORTORDER|INT|&nbsp;|
|索引类型属性|INDEXTYPE|YESNO|&nbsp;|
|长度|LENGTH|INT|&nbsp;|
|数据导入标识|IMPORTTAG|TEXT|&nbsp;|
|模型锁模式|LOCKFLAG|NSCODELIST|&nbsp;|
|中文名称|LOGICNAME|TEXT|&nbsp;|
|多表单识别属性|MULTIFORMFIELD|YESNO|&nbsp;|
|主信息属性|MAJORFIELD|YESNO|&nbsp;|
|备注|MEMO|LONGTEXT_1000|&nbsp;|
|排序值|ORDERVALUE|INT|&nbsp;|
|空值排序|NULLVALORDER|SSCODELIST|&nbsp;|
|粘帖重置|PASTERESET|YESNO|&nbsp;|
|物理化属性|PHYSICALFIELD|YESNO|&nbsp;|
|主键属性|PKEY|NSCODELIST|&nbsp;|
|浮点精度|PRECISION2|INT|&nbsp;|
|系统预置属性|PREDEFINETYPE|SSCODELIST|&nbsp;|
|数据类型|PSDATATYPENAME|TEXT|&nbsp;|
|查询输出|QUERYCOLUMN|YESNO|&nbsp;|
|数据类型|PSDATATYPEID|TEXT|&nbsp;|
|服务代码名称|SERVICECODENAME|TEXT|&nbsp;|
|主状态属性|STATEFIELD|SSCODELIST|&nbsp;|
|查询扩展选项|QUERYCS|SMCODELIST|&nbsp;|
|字符长度|STRLENGTH|INT|&nbsp;|
|字符转换|STRINGCASE|SSCODELIST|&nbsp;|
|默认测试值|TESTDATA|TEXT|&nbsp;|
|表名称|TABLENAME|TEXT|&nbsp;|
|双字节字符|UNICODECHAR|YESNO|&nbsp;|
|单位|UNIT|TEXT|&nbsp;|
|联合键值|UNIONKEYVALUE|SSCODELIST|&nbsp;|
|更新旧值回填|UPDATEOVMODE|SSCODELIST|&nbsp;|
|单位宽度|UNITWIDTH|INT|&nbsp;|
|自定义参数|USERPARAMS|TEXT|&nbsp;|
|用户标记|USERTAG|TEXT|&nbsp;|
|用户分类|USERCAT|SSCODELIST|&nbsp;|
|用户标记3|USERTAG3|TEXT|&nbsp;|
|用户标记4|USERTAG4|TEXT|&nbsp;|
|用户标记2|USERTAG2|TEXT|&nbsp;|
|是否启用|VALIDFLAG|YESNO|&nbsp;|
|视图列级别|VIEWCOLLEVEL|NSCODELIST|&nbsp;|
|值格式化|VALUEFORMAT|TEXT|&nbsp;|
|范围属性2|NO2DUPCHKPSDEFNAME|PICKUPTEXT|&nbsp;|
|范围属性2|NO2DUPCHKPSDEFID|PICKUP|&nbsp;|
|范围属性3|NO3DUPCHKPSDEFNAME|PICKUPTEXT|&nbsp;|
|范围属性3|NO3DUPCHKPSDEFID|PICKUP|&nbsp;|
|值项属性|VALUEPSDEFNAME|PICKUPTEXT|&nbsp;|
|值项属性|VALUEPSDEFID|PICKUP|&nbsp;|
|关系属性|DERPSDEFNAME|PICKUPTEXT|&nbsp;|
|范围属性|DUPCHKPSDEFID|PICKUP|&nbsp;|
|关系属性|DERPSDEFID|PICKUP|&nbsp;|
|范围属性|DUPCHKPSDEFNAME|PICKUPTEXT|&nbsp;|
|实体|PSDENAME|PICKUPTEXT|&nbsp;|
|实体|PSDEID|PICKUP|&nbsp;|
|PSSUBSYSSADEID|PSSUBSYSSADEID|PICKUPDATA|&nbsp;|
|系统|PSSYSTEMID|TEXT|&nbsp;|
|系统|PSSYSTEMNAME|TEXT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|实体属性标识|默认规则|内容长度必须小于等于[100]|
|实体属性名称|默认规则|内容长度必须小于等于[200]|
|建立人|默认规则|内容长度必须小于等于[60]|
|更新时间|默认规则|默认规则|
|更新人|默认规则|内容长度必须小于等于[60]|
|建立时间|默认规则|默认规则|
|业务标记|默认规则|内容长度必须小于等于[30]|
|允许为空|默认规则|默认规则|
|审计信息格式|默认规则|内容长度必须小于等于[200]|
|检查递归|默认规则|默认规则|
|代码名称|默认规则|内容长度必须小于等于[60]|
|数据库更新值模式|默认规则|内容长度必须小于等于[30]|
|自定义导出范围|默认规则|默认规则|
|数据库新建值模式|默认规则|内容长度必须小于等于[30]|
|属性类型|默认规则|默认规则|
|属性默认值|默认规则|内容长度必须小于等于[200]|
|重复值检查|默认规则|内容长度必须小于等于[100]|
|检查值范围|默认规则|内容长度必须小于等于[200]|
|默认值类型|默认规则|内容长度必须小于等于[50]|
|启用审计|默认规则|默认规则|
|动态模型类型|默认规则|默认规则|
|启用快速搜索|默认规则|默认规则|
|启用列权限控制|默认规则|默认规则|
|支持链接属性回写|默认规则|默认规则|
|默认用户行为|默认规则|默认规则|
|支持临时数据|默认规则|默认规则|
|扩展模式|默认规则|默认规则|
|导出范围|默认规则|默认规则|
|逻辑属性参数|默认规则|内容长度必须小于等于[200]|
|外键属性|默认规则|默认规则|
|逻辑字段格式|默认规则|内容长度必须小于等于[500]|
|数据导入识别|默认规则|默认规则|
|数据导入次序|默认规则|默认规则|
|索引类型属性|默认规则|默认规则|
|长度|默认规则|默认规则|
|数据导入标识|默认规则|内容长度必须小于等于[30]|
|模型锁模式|默认规则|默认规则|
|中文名称|默认规则|内容长度必须小于等于[60]|
|多表单识别属性|默认规则|默认规则|
|主信息属性|默认规则|默认规则|
|备注|默认规则|内容长度必须小于等于[2000]|
|排序值|默认规则|默认规则|
|空值排序|默认规则|内容长度必须小于等于[10]|
|粘帖重置|默认规则|默认规则|
|物理化属性|默认规则|默认规则|
|主键属性|默认规则|默认规则|
|浮点精度|默认规则|默认规则|
|系统预置属性|默认规则|内容长度必须小于等于[100]|
|数据类型|默认规则|内容长度必须小于等于[200]|
|查询输出|默认规则|默认规则|
|数据类型|默认规则|内容长度必须小于等于[100]|
|服务代码名称|默认规则|内容长度必须小于等于[50]|
|主状态属性|默认规则|内容长度必须小于等于[10]|
|查询扩展选项|默认规则|内容长度必须小于等于[60]|
|字符长度|默认规则|默认规则|
|字符转换|默认规则|内容长度必须小于等于[100]|
|默认测试值|默认规则|内容长度必须小于等于[100]|
|表名称|默认规则|内容长度必须小于等于[60]|
|双字节字符|默认规则|默认规则|
|单位|默认规则|内容长度必须小于等于[20]|
|联合键值|默认规则|内容长度必须小于等于[10]|
|更新旧值回填|默认规则|内容长度必须小于等于[20]|
|单位宽度|默认规则|默认规则|
|自定义参数|默认规则|内容长度必须小于等于[2000]|
|用户标记|默认规则|内容长度必须小于等于[100]|
|用户分类|默认规则|内容长度必须小于等于[10]|
|用户标记3|默认规则|内容长度必须小于等于[50]|
|用户标记4|默认规则|内容长度必须小于等于[50]|
|用户标记2|默认规则|内容长度必须小于等于[100]|
|是否启用|默认规则|默认规则|
|视图列级别|默认规则|默认规则|
|值格式化|默认规则|内容长度必须小于等于[50]|
|范围属性2|默认规则|内容长度必须小于等于[200]|
|范围属性2|默认规则|内容长度必须小于等于[100]|
|范围属性3|默认规则|内容长度必须小于等于[200]|
|范围属性3|默认规则|内容长度必须小于等于[100]|
|值项属性|默认规则|内容长度必须小于等于[200]|
|值项属性|默认规则|内容长度必须小于等于[100]|
|关系属性|默认规则|内容长度必须小于等于[200]|
|范围属性|默认规则|内容长度必须小于等于[100]|
|关系属性|默认规则|内容长度必须小于等于[100]|
|范围属性|默认规则|内容长度必须小于等于[200]|
|实体|默认规则|内容长度必须小于等于[200]|
|实体|默认规则|内容长度必须小于等于[100]|
|PSSUBSYSSADEID|默认规则|内容长度必须小于等于[100]|
|系统|默认规则|内容长度必须小于等于[100]|
|系统|默认规则|内容长度必须小于等于[100]|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#PSDEField_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#PSDEField_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|实体属性名称(PSDEFIELDNAME)|LIKE|
|业务标记(BIZTAG)|EQ|
|数据库更新值模式(DBVALUEMODE)|EQ|
|数据库新建值模式(DBVALUEMODE2)|EQ|
|属性类型(DEFTYPE)|EQ|
|重复值检查(DUPCHECKMODE)|EQ|
|默认值类型(DVT)|EQ|
|动态模型类型(DYNAMODELFLAG)|EQ|
|扩展模式(EXTENDMODE)|EQ|
|模型锁模式(LOCKFLAG)|EQ|
|空值排序(NULLVALORDER)|EQ|
|主键属性(PKEY)|EQ|
|系统预置属性(PREDEFINETYPE)|EQ|
|主状态属性(STATEFIELD)|EQ|
|字符转换(STRINGCASE)|EQ|
|联合键值(UNIONKEYVALUE)|EQ|
|更新旧值回填(UPDATEOVMODE)|EQ|
|用户分类(USERCAT)|EQ|
|视图列级别(VIEWCOLLEVEL)|EQ|
|范围属性2(NO2DUPCHKPSDEFNAME)|EQ|
|范围属性2(NO2DUPCHKPSDEFNAME)|LIKE|
|范围属性2(NO2DUPCHKPSDEFID)|EQ|
|范围属性3(NO3DUPCHKPSDEFNAME)|EQ|
|范围属性3(NO3DUPCHKPSDEFNAME)|LIKE|
|范围属性3(NO3DUPCHKPSDEFID)|EQ|
|值项属性(VALUEPSDEFNAME)|EQ|
|值项属性(VALUEPSDEFNAME)|LIKE|
|值项属性(VALUEPSDEFID)|EQ|
|关系属性(DERPSDEFNAME)|EQ|
|关系属性(DERPSDEFNAME)|LIKE|
|范围属性(DUPCHKPSDEFID)|EQ|
|关系属性(DERPSDEFID)|EQ|
|范围属性(DUPCHKPSDEFNAME)|EQ|
|范围属性(DUPCHKPSDEFNAME)|LIKE|
|实体(PSDENAME)|EQ|
|实体(PSDENAME)|LIKE|
|实体(PSDEID)|EQ|

## 导入模式
无


## 导出模式
无
