# 实体-实体属性(PSDEFIELD)
## 实体说明
实体属性

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [实体属性标识](#属性-实体属性标识（PSDEFIELDID）) | PSDEFIELDID | GUID | 是 | 否 | 否 | -- |
| 2 | [实体属性名称](#属性-实体属性名称（PSDEFIELDNAME）) | PSDEFIELDNAME | TEXT | 否 | 否 | 是 | -- |
| 3 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | TEXT | 否 | 否 | 否 | -- |
| 4 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 5 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | TEXT | 否 | 否 | 否 | -- |
| 6 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 7 | [业务标记](#属性-业务标记（BIZTAG）) | BIZTAG | SSCODELIST | 否 | 否 | 是 | -- |
| 8 | [允许为空](#属性-允许为空（ALLOWEMPTY）) | ALLOWEMPTY | YESNO | 否 | 否 | 否 | -- |
| 9 | [审计信息格式](#属性-审计信息格式（AUDITINFOFORMAT）) | AUDITINFOFORMAT | TEXT | 否 | 否 | 是 | -- |
| 10 | [检查递归](#属性-检查递归（CHECKRECURSION）) | CHECKRECURSION | YESNO | 否 | 否 | 是 | -- |
| 11 | [代码名称](#属性-代码名称（CODENAME）) | CODENAME | TEXT | 否 | 否 | 是 | -- |
| 12 | [数据库更新值模式](#属性-数据库更新值模式（DBVALUEMODE）) | DBVALUEMODE | SSCODELIST | 否 | 否 | 是 | -- |
| 13 | [自定义导出范围](#属性-自定义导出范围（CUSTOMEXPORTSCOPE）) | CUSTOMEXPORTSCOPE | YESNO | 否 | 否 | 是 | -- |
| 14 | [数据库新建值模式](#属性-数据库新建值模式（DBVALUEMODE2）) | DBVALUEMODE2 | SSCODELIST | 否 | 否 | 是 | -- |
| 15 | [属性类型](#属性-属性类型（DEFTYPE）) | DEFTYPE | NSCODELIST | 否 | 否 | 否 | -- |
| 16 | [属性默认值](#属性-属性默认值（DEFAULTVALUE）) | DEFAULTVALUE | TEXT | 否 | 否 | 是 | -- |
| 17 | [重复值检查](#属性-重复值检查（DUPCHECKMODE）) | DUPCHECKMODE | SSCODELIST | 否 | 否 | 是 | -- |
| 18 | [检查值范围](#属性-检查值范围（DUPCHECKVALUES）) | DUPCHECKVALUES | TEXT | 否 | 否 | 是 | -- |
| 19 | [默认值类型](#属性-默认值类型（DVT）) | DVT | SSCODELIST | 否 | 否 | 是 | -- |
| 20 | [启用审计](#属性-启用审计（ENABLEAUDIT）) | ENABLEAUDIT | YESNO | 否 | 否 | 是 | -- |
| 21 | [动态模型类型](#属性-动态模型类型（DYNAMODELFLAG）) | DYNAMODELFLAG | NSCODELIST | 否 | 否 | 是 | -- |
| 22 | [启用快速搜索](#属性-启用快速搜索（ENABLEQS）) | ENABLEQS | YESNO | 否 | 否 | 是 | -- |
| 23 | [启用列权限控制](#属性-启用列权限控制（ENABLECOLPRIV）) | ENABLECOLPRIV | YESNO | 否 | 否 | 是 | -- |
| 24 | [支持链接属性回写](#属性-支持链接属性回写（ENAWRITEBACK）) | ENAWRITEBACK | YESNO | 否 | 否 | 是 | -- |
| 25 | [默认用户行为](#属性-默认用户行为（ENABLEUSERINPUT）) | ENABLEUSERINPUT | NMCODELIST | 否 | 否 | 是 | -- |
| 26 | [支持临时数据](#属性-支持临时数据（ENABLETEMPDATA）) | ENABLETEMPDATA | YESNO | 否 | 否 | 是 | -- |
| 27 | [扩展模式](#属性-扩展模式（EXTENDMODE）) | EXTENDMODE | NSCODELIST | 否 | 否 | 是 | -- |
| 28 | [导出范围](#属性-导出范围（EXPORTSCOPE）) | EXPORTSCOPE | NMCODELIST | 否 | 否 | 是 | -- |
| 29 | [逻辑属性参数](#属性-逻辑属性参数（FORMULAFIELDS）) | FORMULAFIELDS | TEXT | 否 | 否 | 是 | -- |
| 30 | [外键属性](#属性-外键属性（FKEY）) | FKEY | YESNO | 否 | 否 | 是 | -- |
| 31 | [逻辑字段格式](#属性-逻辑字段格式（FORMULAFORMAT）) | FORMULAFORMAT | TEXT | 否 | 否 | 是 | -- |
| 32 | [数据导入识别](#属性-数据导入识别（IMPORTKEY）) | IMPORTKEY | YESNO | 否 | 否 | 是 | -- |
| 33 | [数据导入次序](#属性-数据导入次序（IMPORTORDER）) | IMPORTORDER | INT | 否 | 否 | 是 | -- |
| 34 | [索引类型属性](#属性-索引类型属性（INDEXTYPE）) | INDEXTYPE | YESNO | 否 | 否 | 是 | -- |
| 35 | [长度](#属性-长度（LENGTH）) | LENGTH | INT | 否 | 否 | 是 | -- |
| 36 | [数据导入标识](#属性-数据导入标识（IMPORTTAG）) | IMPORTTAG | TEXT | 否 | 否 | 是 | -- |
| 37 | [模型锁模式](#属性-模型锁模式（LOCKFLAG）) | LOCKFLAG | NSCODELIST | 否 | 否 | 是 | -- |
| 38 | [中文名称](#属性-中文名称（LOGICNAME）) | LOGICNAME | TEXT | 否 | 否 | 否 | -- |
| 39 | [多表单识别属性](#属性-多表单识别属性（MULTIFORMFIELD）) | MULTIFORMFIELD | YESNO | 否 | 否 | 是 | -- |
| 40 | [主信息属性](#属性-主信息属性（MAJORFIELD）) | MAJORFIELD | YESNO | 否 | 否 | 是 | -- |
| 41 | [备注](#属性-备注（MEMO）) | MEMO | LONGTEXT_1000 | 否 | 否 | 是 | -- |
| 42 | [排序值](#属性-排序值（ORDERVALUE）) | ORDERVALUE | INT | 否 | 否 | 是 | -- |
| 43 | [空值排序](#属性-空值排序（NULLVALORDER）) | NULLVALORDER | SSCODELIST | 否 | 否 | 是 | -- |
| 44 | [粘帖重置](#属性-粘帖重置（PASTERESET）) | PASTERESET | YESNO | 否 | 否 | 是 | -- |
| 45 | [物理化属性](#属性-物理化属性（PHYSICALFIELD）) | PHYSICALFIELD | YESNO | 否 | 否 | 是 | -- |
| 46 | [主键属性](#属性-主键属性（PKEY）) | PKEY | NSCODELIST | 否 | 否 | 是 | -- |
| 47 | [浮点精度](#属性-浮点精度（PRECISION2）) | PRECISION2 | INT | 否 | 否 | 是 | -- |
| 48 | [系统预置属性](#属性-系统预置属性（PREDEFINETYPE）) | PREDEFINETYPE | SSCODELIST | 否 | 否 | 是 | -- |
| 49 | [数据类型](#属性-数据类型（PSDATATYPENAME）) | PSDATATYPENAME | TEXT | 否 | 否 | 否 | -- |
| 50 | [查询输出](#属性-查询输出（QUERYCOLUMN）) | QUERYCOLUMN | YESNO | 否 | 否 | 是 | -- |
| 51 | [数据类型](#属性-数据类型（PSDATATYPEID）) | PSDATATYPEID | TEXT | 否 | 否 | 否 | -- |
| 52 | [服务代码名称](#属性-服务代码名称（SERVICECODENAME）) | SERVICECODENAME | TEXT | 否 | 否 | 是 | -- |
| 53 | [主状态属性](#属性-主状态属性（STATEFIELD）) | STATEFIELD | SSCODELIST | 否 | 否 | 是 | -- |
| 54 | [查询扩展选项](#属性-查询扩展选项（QUERYCS）) | QUERYCS | SMCODELIST | 否 | 否 | 是 | -- |
| 55 | [字符长度](#属性-字符长度（STRLENGTH）) | STRLENGTH | INT | 否 | 否 | 是 | -- |
| 56 | [字符转换](#属性-字符转换（STRINGCASE）) | STRINGCASE | SSCODELIST | 否 | 否 | 是 | -- |
| 57 | [默认测试值](#属性-默认测试值（TESTDATA）) | TESTDATA | TEXT | 否 | 否 | 是 | -- |
| 58 | [表名称](#属性-表名称（TABLENAME）) | TABLENAME | TEXT | 否 | 否 | 是 | -- |
| 59 | [双字节字符](#属性-双字节字符（UNICODECHAR）) | UNICODECHAR | YESNO | 否 | 否 | 是 | -- |
| 60 | [单位](#属性-单位（UNIT）) | UNIT | TEXT | 否 | 否 | 是 | -- |
| 61 | [联合键值](#属性-联合键值（UNIONKEYVALUE）) | UNIONKEYVALUE | SSCODELIST | 否 | 否 | 是 | -- |
| 62 | [更新旧值回填](#属性-更新旧值回填（UPDATEOVMODE）) | UPDATEOVMODE | SSCODELIST | 否 | 否 | 是 | -- |
| 63 | [单位宽度](#属性-单位宽度（UNITWIDTH）) | UNITWIDTH | INT | 否 | 否 | 是 | -- |
| 64 | [自定义参数](#属性-自定义参数（USERPARAMS）) | USERPARAMS | TEXT | 否 | 否 | 是 | -- |
| 65 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | TEXT | 否 | 否 | 是 | -- |
| 66 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | SSCODELIST | 否 | 否 | 是 | -- |
| 67 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | TEXT | 否 | 否 | 是 | -- |
| 68 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | TEXT | 否 | 否 | 是 | -- |
| 69 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | TEXT | 否 | 否 | 是 | -- |
| 70 | [是否启用](#属性-是否启用（VALIDFLAG）) | VALIDFLAG | YESNO | 否 | 否 | 是 | -- |
| 71 | [视图列级别](#属性-视图列级别（VIEWCOLLEVEL）) | VIEWCOLLEVEL | NSCODELIST | 否 | 否 | 是 | -- |
| 72 | [值格式化](#属性-值格式化（VALUEFORMAT）) | VALUEFORMAT | TEXT | 否 | 否 | 是 | -- |
| 73 | [范围属性2](#属性-范围属性2（NO2DUPCHKPSDEFNAME）) | NO2DUPCHKPSDEFNAME | PICKUPTEXT | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 74 | [范围属性2](#属性-范围属性2（NO2DUPCHKPSDEFID）) | NO2DUPCHKPSDEFID | PICKUP | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 75 | [范围属性3](#属性-范围属性3（NO3DUPCHKPSDEFNAME）) | NO3DUPCHKPSDEFNAME | PICKUPTEXT | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 76 | [范围属性3](#属性-范围属性3（NO3DUPCHKPSDEFID）) | NO3DUPCHKPSDEFID | PICKUP | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 77 | [值项属性](#属性-值项属性（VALUEPSDEFNAME）) | VALUEPSDEFNAME | PICKUPTEXT | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 78 | [值项属性](#属性-值项属性（VALUEPSDEFID）) | VALUEPSDEFID | PICKUP | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 79 | [关系属性](#属性-关系属性（DERPSDEFNAME）) | DERPSDEFNAME | PICKUPTEXT | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 80 | [范围属性](#属性-范围属性（DUPCHKPSDEFID）) | DUPCHKPSDEFID | PICKUP | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 81 | [关系属性](#属性-关系属性（DERPSDEFID）) | DERPSDEFID | PICKUP | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 82 | [范围属性](#属性-范围属性（DUPCHKPSDEFNAME）) | DUPCHKPSDEFNAME | PICKUPTEXT | 否 | 是 | 是 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) - [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 83 | [实体](#属性-实体（PSDENAME）) | PSDENAME | PICKUPTEXT | 否 | 是 | 否 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) - [实体名称（PSDATAENTITYNAME）](../ibizsysmodel/PSDataEntity/#属性-实体名称（PSDATAENTITYNAME）) |
| 84 | [实体](#属性-实体（PSDEID）) | PSDEID | PICKUP | 否 | 是 | 否 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) - [实体标识（PSDATAENTITYID）](../ibizsysmodel/PSDataEntity/#属性-实体标识（PSDATAENTITYID）) |
| 85 | [PSSUBSYSSADEID](#属性-PSSUBSYSSADEID（PSSUBSYSSADEID）) | PSSUBSYSSADEID | PICKUPDATA | 否 | 是 | 是 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) - [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 86 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | TEXT | 否 | 是 | 是 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) - [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 87 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | TEXT | 否 | 是 | 是 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) - [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |

### 属性-实体属性标识（PSDEFIELDID）
#### 属性说明
实体属性标识
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
GUID

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-实体属性名称（PSDEFIELDNAME）
#### 属性说明
实体属性名称
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-建立人（CREATEMAN）
#### 属性说明
建立人
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新时间（UPDATEDATE）
#### 属性说明
更新时间
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
DATETIME

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新人（UPDATEMAN）
#### 属性说明
更新人
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-建立时间（CREATEDATE）
#### 属性说明
建立时间
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
DATETIME

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-业务标记（BIZTAG）
#### 属性说明
业务标记
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-允许为空（ALLOWEMPTY）
#### 属性说明
允许为空
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 1 |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-审计信息格式（AUDITINFOFORMAT）
#### 属性说明
审计信息格式
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-检查递归（CHECKRECURSION）
#### 属性说明
检查递归
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-代码名称（CODENAME）
#### 属性说明
代码名称
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-数据库更新值模式（DBVALUEMODE）
#### 属性说明
数据库更新值模式
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-自定义导出范围（CUSTOMEXPORTSCOPE）
#### 属性说明
自定义导出范围
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-数据库新建值模式（DBVALUEMODE2）
#### 属性说明
数据库新建值模式
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-属性类型（DEFTYPE）
#### 属性说明
属性类型
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
NSCODELIST

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-属性默认值（DEFAULTVALUE）
#### 属性说明
属性默认值
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-重复值检查（DUPCHECKMODE）
#### 属性说明
重复值检查
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-检查值范围（DUPCHECKVALUES）
#### 属性说明
检查值范围
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-默认值类型（DVT）
#### 属性说明
默认值类型
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-启用审计（ENABLEAUDIT）
#### 属性说明
启用审计
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-动态模型类型（DYNAMODELFLAG）
#### 属性说明
动态模型类型
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
NSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-启用快速搜索（ENABLEQS）
#### 属性说明
启用快速搜索
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-启用列权限控制（ENABLECOLPRIV）
#### 属性说明
启用列权限控制
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-支持链接属性回写（ENAWRITEBACK）
#### 属性说明
支持链接属性回写
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-默认用户行为（ENABLEUSERINPUT）
#### 属性说明
默认用户行为
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
NMCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 3 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-支持临时数据（ENABLETEMPDATA）
#### 属性说明
支持临时数据
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-扩展模式（EXTENDMODE）
#### 属性说明
扩展模式
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
NSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-导出范围（EXPORTSCOPE）
#### 属性说明
导出范围
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
NMCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-逻辑属性参数（FORMULAFIELDS）
#### 属性说明
逻辑属性参数
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-外键属性（FKEY）
#### 属性说明
外键属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 0 |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-逻辑字段格式（FORMULAFORMAT）
#### 属性说明
逻辑字段格式
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-数据导入识别（IMPORTKEY）
#### 属性说明
数据导入识别
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-数据导入次序（IMPORTORDER）
#### 属性说明
数据导入次序
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
INT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-索引类型属性（INDEXTYPE）
#### 属性说明
索引类型属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-长度（LENGTH）
#### 属性说明
长度
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
INT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-数据导入标识（IMPORTTAG）
#### 属性说明
数据导入标识
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模型锁模式（LOCKFLAG）
#### 属性说明
模型锁模式
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
NSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-中文名称（LOGICNAME）
#### 属性说明
中文名称
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-多表单识别属性（MULTIFORMFIELD）
#### 属性说明
多表单识别属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-主信息属性（MAJORFIELD）
#### 属性说明
主信息属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 0 |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（MEMO）
#### 属性说明
备注
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
LONGTEXT_1000

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-排序值（ORDERVALUE）
#### 属性说明
排序值
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
INT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-空值排序（NULLVALORDER）
#### 属性说明
空值排序
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-粘帖重置（PASTERESET）
#### 属性说明
粘帖重置
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-物理化属性（PHYSICALFIELD）
#### 属性说明
物理化属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-主键属性（PKEY）
#### 属性说明
主键属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
NSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-浮点精度（PRECISION2）
#### 属性说明
浮点精度
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
INT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统预置属性（PREDEFINETYPE）
#### 属性说明
系统预置属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-数据类型（PSDATATYPENAME）
#### 属性说明
数据类型
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-查询输出（QUERYCOLUMN）
#### 属性说明
查询输出
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-数据类型（PSDATATYPEID）
#### 属性说明
数据类型
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-服务代码名称（SERVICECODENAME）
#### 属性说明
服务代码名称
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-主状态属性（STATEFIELD）
#### 属性说明
主状态属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-查询扩展选项（QUERYCS）
#### 属性说明
查询扩展选项
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SMCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-字符长度（STRLENGTH）
#### 属性说明
字符长度
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
INT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-字符转换（STRINGCASE）
#### 属性说明
字符转换
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-默认测试值（TESTDATA）
#### 属性说明
默认测试值
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-表名称（TABLENAME）
#### 属性说明
表名称
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-双字节字符（UNICODECHAR）
#### 属性说明
双字节字符
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-单位（UNIT）
#### 属性说明
单位
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-联合键值（UNIONKEYVALUE）
#### 属性说明
联合键值
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新旧值回填（UPDATEOVMODE）
#### 属性说明
更新旧值回填
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-单位宽度（UNITWIDTH）
#### 属性说明
单位宽度
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
INT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-自定义参数（USERPARAMS）
#### 属性说明
自定义参数
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记（USERTAG）
#### 属性说明
用户标记
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户分类（USERCAT）
#### 属性说明
用户分类
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记3（USERTAG3）
#### 属性说明
用户标记3
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记4（USERTAG4）
#### 属性说明
用户标记4
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记2（USERTAG2）
#### 属性说明
用户标记2
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否启用（VALIDFLAG）
#### 属性说明
是否启用
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 1 |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-视图列级别（VIEWCOLLEVEL）
#### 属性说明
视图列级别
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
NSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-值格式化（VALUEFORMAT）
#### 属性说明
值格式化
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-范围属性2（NO2DUPCHKPSDEFNAME）
#### 属性说明
范围属性2
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUPTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-范围属性2（NO2DUPCHKPSDEFID）
#### 属性说明
范围属性2
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUP

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-范围属性3（NO3DUPCHKPSDEFNAME）
#### 属性说明
范围属性3
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUPTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-范围属性3（NO3DUPCHKPSDEFID）
#### 属性说明
范围属性3
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUP

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-值项属性（VALUEPSDEFNAME）
#### 属性说明
值项属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUPTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-值项属性（VALUEPSDEFID）
#### 属性说明
值项属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUP

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关系属性（DERPSDEFNAME）
#### 属性说明
关系属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUPTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-范围属性（DUPCHKPSDEFID）
#### 属性说明
范围属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUP

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关系属性（DERPSDEFID）
#### 属性说明
关系属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUP

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-范围属性（DUPCHKPSDEFNAME）
#### 属性说明
范围属性
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUPTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-实体（PSDENAME）
#### 属性说明
实体
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUPTEXT

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [实体名称（PSDATAENTITYNAME）](../ibizsysmodel/PSDataEntity/#属性-实体名称（PSDATAENTITYNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-实体（PSDEID）
#### 属性说明
实体
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUP

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [实体标识（PSDATAENTITYID）](../ibizsysmodel/PSDataEntity/#属性-实体标识（PSDATAENTITYID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-PSSUBSYSSADEID（PSSUBSYSSADEID）
#### 属性说明
PSSUBSYSSADEID
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUPDATA

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统（PSSYSTEMID）
#### 属性说明
系统
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统（PSSYSTEMNAME）
#### 属性说明
系统
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

