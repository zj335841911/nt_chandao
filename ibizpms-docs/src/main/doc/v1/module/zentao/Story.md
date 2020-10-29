# 实体-需求(ZT_STORY)
## 实体说明
需求

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | TEXT | 否 | 否 | 是 |
| 2 | [细分需求](#属性-细分需求（CHILDSTORIES）) | CHILDSTORIES | SMCODELIST | 否 | 否 | 是 |
| 3 | [所属计划](#属性-所属计划（PLAN）) | PLAN | LONGTEXT | 否 | 否 | 是 |
| 4 | [版本号](#属性-版本号（VERSION）) | VERSION | INT | 否 | 否 | 是 |
| 5 | [指派日期](#属性-指派日期（ASSIGNEDDATE）) | ASSIGNEDDATE | DATETIME | 否 | 否 | 是 |
| 6 | [优先级](#属性-优先级（PRI）) | PRI | NSCODELIST | 否 | 否 | 是 |
| 7 | [相关需求](#属性-相关需求（LINKSTORIES）) | LINKSTORIES | SMCODELIST | 否 | 否 | 是 |
| 8 | [当前状态](#属性-当前状态（STATUS）) | STATUS | SSCODELIST | 否 | 否 | 是 |
| 9 | [预计工时](#属性-预计工时（ESTIMATE）) | ESTIMATE | FLOAT | 否 | 否 | 是 |
| 10 | [评审时间](#属性-评审时间（REVIEWEDDATE）) | REVIEWEDDATE | DATE | 否 | 否 | 是 |
| 11 | [需求名称](#属性-需求名称（TITLE）) | TITLE | TEXT | 否 | 否 | 否 |
| 12 | [来源备注](#属性-来源备注（SOURCENOTE）) | SOURCENOTE | TEXT | 否 | 否 | 是 |
| 13 | [由谁评审](#属性-由谁评审（REVIEWEDBY）) | REVIEWEDBY | SMCODELIST | 否 | 否 | 是 |
| 14 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | TEXT | 否 | 否 | 是 |
| 15 | [设置阶段者](#属性-设置阶段者（STAGEDBY）) | STAGEDBY | SSCODELIST | 否 | 否 | 是 |
| 16 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | SSCODELIST | 否 | 否 | 是 |
| 17 | [创建日期](#属性-创建日期（OPENEDDATE）) | OPENEDDATE | DATETIME | 否 | 否 | 是 |
| 18 | [编号](#属性-编号（ID）) | ID | ACID | 是 | 否 | 否 |
| 19 | [需求来源](#属性-需求来源（SOURCE）) | SOURCE | SSCODELIST | 否 | 否 | 是 |
| 20 | [关闭原因](#属性-关闭原因（CLOSEDREASON）) | CLOSEDREASON | SSCODELIST | 否 | 否 | 是 |
| 21 | [标题颜色](#属性-标题颜色（COLOR）) | COLOR | SSCODELIST | 否 | 否 | 是 |
| 22 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | SMCODELIST | 否 | 否 | 是 |
| 23 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 否 | 是 |
| 24 | [关键词](#属性-关键词（KEYWORDS）) | KEYWORDS | TEXT | 否 | 否 | 是 |
| 25 | [最后修改](#属性-最后修改（LASTEDITEDBY）) | LASTEDITEDBY | SSCODELIST | 否 | 否 | 是 |
| 26 | [所处阶段](#属性-所处阶段（STAGE）) | STAGE | SSCODELIST | 否 | 否 | 是 |
| 27 | [关闭日期	](#属性-关闭日期	（CLOSEDDATE）) | CLOSEDDATE | DATETIME | 否 | 否 | 是 |
| 28 | [由谁关闭](#属性-由谁关闭（CLOSEDBY）) | CLOSEDBY | SSCODELIST | 否 | 否 | 是 |
| 29 | [需求类型](#属性-需求类型（TYPE）) | TYPE | SSCODELIST | 否 | 否 | 是 |
| 30 | [最后修改日期](#属性-最后修改日期（LASTEDITEDDATE）) | LASTEDITEDDATE | DATETIME | 否 | 否 | 是 |
| 31 | [模块路径](#属性-模块路径（PATH）) | PATH | PICKUPDATA | 否 | 是 | 是 |
| 32 | [父需求名称](#属性-父需求名称（PARENTNAME）) | PARENTNAME | PICKUPTEXT | 否 | 是 | 是 |
| 33 | [所属模块名称](#属性-所属模块名称（MODULENAME）) | MODULENAME | PICKUPTEXT | 否 | 是 | 是 |
| 34 | [产品名称](#属性-产品名称（PRODOCTNAME）) | PRODOCTNAME | PICKUPTEXT | 否 | 是 | 是 |
| 35 | [来源Bug](#属性-来源Bug（FROMBUG）) | FROMBUG | PICKUP | 否 | 是 | 是 |
| 36 | [父需求](#属性-父需求（PARENT）) | PARENT | PICKUP | 否 | 是 | 是 |
| 37 | [所属模块](#属性-所属模块（MODULE）) | MODULE | PICKUP | 否 | 是 | 是 |
| 38 | [所属产品](#属性-所属产品（PRODUCT）) | PRODUCT | PICKUP | 否 | 是 | 是 |
| 39 | [重复需求ID](#属性-重复需求ID（DUPLICATESTORY）) | DUPLICATESTORY | PICKUP | 否 | 是 | 是 |
| 40 | [平台/分支](#属性-平台/分支（BRANCH）) | BRANCH | PICKUP | 否 | 是 | 是 |
| 41 | [转Bug](#属性-转Bug（TOBUG）) | TOBUG | PICKUP | 否 | 是 | 是 |
| 42 | [需求描述](#属性-需求描述（SPEC）) | SPEC | TEXT | 否 | 是 | 是 |
| 43 | [验收标准](#属性-验收标准（VERIFY）) | VERIFY | TEXT | 否 | 是 | 是 |
| 44 | [评审结果](#属性-评审结果（RESULT）) | RESULT | SSCODELIST | 否 | 是 | 是 |
| 45 | [备注](#属性-备注（COMMENT）) | COMMENT | HTMLTEXT | 否 | 是 | 是 |
| 46 | [是否子需求](#属性-是否子需求（ISLEAF）) | ISLEAF | TEXT | 否 | 是 | 是 |
| 47 | [附件](#属性-附件（FILES）) | FILES | TEXT | 否 | 是 | 是 |
| 48 | [平台/分支](#属性-平台/分支（BRANCHNAME）) | BRANCHNAME | PICKUPTEXT | 否 | 是 | 是 |
| 49 | [版本号](#属性-版本号（VERSIONC）) | VERSIONC | TEXT | 否 | 是 | 是 |
| 50 | [所属模块名称](#属性-所属模块名称（MODULENAME1）) | MODULENAME1 | TEXT | 否 | 是 | 是 |
| 51 | [项目](#属性-项目（PROJECT）) | PROJECT | BIGINT | 否 | 是 | 是 |
| 52 | [之前的版本](#属性-之前的版本（PREVERSION）) | PREVERSION | INT | 否 | 是 | 是 |
| 53 | [不需要评审](#属性-不需要评审（NEEDNOTREVIEW）) | NEEDNOTREVIEW | SMCODELIST | 否 | 是 | 是 |
| 54 | [是否收藏](#属性-是否收藏（ISFAVORITES）) | ISFAVORITES | TEXT | 否 | 是 | 是 |
| 55 | [是否可以细分](#属性-是否可以细分（ISCHILD）) | ISCHILD | TEXT | 否 | 是 | 是 |

### 属性-指派给（ASSIGNEDTO）
#### 属性说明
指派给

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-细分需求（CHILDSTORIES）
#### 属性说明
细分需求

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
多项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[当前需求版本（动态）（CurStory）](../../codelist/CurStory)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属计划（PLAN）
#### 属性说明
所属计划

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
长文本，没有长度限制

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[当前产品计划（动态）_缓存（CurProductPlan）](../../codelist/CurProductPlan)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-版本号（VERSION）
#### 属性说明
每次更新内容，会自动加1（只有真正更新数据才会更新，例如打开编辑/变更需求，没有进行任何修改点击保存，是不会更新该笔数据）

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 1 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-指派日期（ASSIGNEDDATE）
#### 属性说明
指派日期

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

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
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-优先级（PRI）
#### 属性说明
优先级

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(数值)

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 3 |

#### 取值范围/公式
参照数据字典【[需求优先级（Story__pri）](../../codelist/Story__pri)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-相关需求（LINKSTORIES）
#### 属性说明
相关需求

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
多项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[关联需求（动态）（RelatedStory）](../../codelist/RelatedStory)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-当前状态（STATUS）
#### 属性说明
当前状态

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | draft |

#### 取值范围/公式
参照数据字典【[需求状态（Story__status）](../../codelist/Story__status)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-预计工时（ESTIMATE）
#### 属性说明
预计工时

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
浮点

#### Java类型
Double

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-评审时间（REVIEWEDDATE）
#### 属性说明
评审时间

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期型

#### Java类型
Timestamp

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
时间格式：yyyy-MM-dd

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求名称（TITLE）
#### 属性说明
需求名称

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-来源备注（SOURCENOTE）
#### 属性说明
来源备注

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁评审（REVIEWEDBY）
#### 属性说明
由谁评审

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
多项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-子状态（SUBSTATUS）
#### 属性说明
子状态

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-设置阶段者（STAGEDBY）
#### 属性说明
设置阶段者

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁创建（OPENEDBY）
#### 属性说明
由谁创建

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-创建日期（OPENEDDATE）
#### 属性说明
创建日期

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

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
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-编号（ID）
#### 属性说明
编号

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
自增标识，整数类型，用户不可见

#### Java类型
Long

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求来源（SOURCE）
#### 属性说明
需求来源

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[需求来源（Story__source）](../../codelist/Story__source)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关闭原因（CLOSEDREASON）
#### 属性说明
关闭原因

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[需求关闭原因（Story__closed_reason）](../../codelist/Story__closed_reason)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-标题颜色（COLOR）
#### 属性说明
标题颜色

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[需求颜色（Story__color）](../../codelist/Story__color)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-抄送给（MAILTO）
#### 属性说明
抄送给

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
多项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-已删除（DELETED）
#### 属性说明
已删除

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关键词（KEYWORDS）
#### 属性说明
关键词

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-最后修改（LASTEDITEDBY）
#### 属性说明
最后修改

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所处阶段（STAGE）
#### 属性说明
所处阶段

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | wait |

#### 取值范围/公式
参照数据字典【[需求阶段（Story__stage）](../../codelist/Story__stage)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关闭日期	（CLOSEDDATE）
#### 属性说明
关闭日期	

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

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
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁关闭（CLOSEDBY）
#### 属性说明
由谁关闭

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求类型（TYPE）
#### 属性说明
需求类型

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | story |

#### 取值范围/公式
参照数据字典【[需求类型（Story__type）](../../codelist/Story__type)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-最后修改日期（LASTEDITEDDATE）
#### 属性说明
最后修改日期

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

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
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模块路径（PATH）
#### 属性说明
模块路径

#### 属性类型
链接字段[来自关系实体字段]

#### 数据类型
外键值附加数据

#### Java类型
String

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
| 关系实体 | [需求模块（IBZ_PRODUCTMODULE）](../ibiz/ProductModule) |
| 关系属性 | [path（PATH）](../ibiz/ProductModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父需求名称（PARENTNAME）
#### 属性说明
父需求名称

#### 属性类型
链接字段[来自关系实体字段]

#### 数据类型
外键值文本

#### Java类型
String

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [需求名称（TITLE）](../zentao/Story/#属性-需求名称（TITLE）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属模块名称（MODULENAME）
#### 属性说明
所属模块名称

#### 属性类型
链接字段[来自关系实体字段]

#### 数据类型
外键值文本

#### Java类型
String

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
| 关系实体 | [需求模块（IBZ_PRODUCTMODULE）](../ibiz/ProductModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProductModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品名称（PRODOCTNAME）
#### 属性说明
产品名称

#### 属性类型
链接字段[来自关系实体字段]

#### 数据类型
外键值文本

#### Java类型
String

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-来源Bug（FROMBUG）
#### 属性说明
来源Bug

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值

#### Java类型
Long

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
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父需求（PARENT）
#### 属性说明
父需求

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值

#### Java类型
Long

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [编号（ID）](../zentao/Story/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属模块（MODULE）
#### 属性说明
所属模块

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值

#### Java类型
Long

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
| 关系实体 | [需求模块（IBZ_PRODUCTMODULE）](../ibiz/ProductModule) |
| 关系属性 | [id（ID）](../ibiz/ProductModule/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属产品（PRODUCT）
#### 属性说明
所属产品

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值

#### Java类型
Long

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-重复需求ID（DUPLICATESTORY）
#### 属性说明
重复需求ID

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值

#### Java类型
Long

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [编号（ID）](../zentao/Story/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-平台/分支（BRANCH）
#### 属性说明
平台/分支

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值

#### Java类型
Long

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [编号（ID）](../zentao/Branch/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-转Bug（TOBUG）
#### 属性说明
暂时没找到使用地方（页面操作了从需求转Bug也没有更新该字段）

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值

#### Java类型
Long

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
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求描述（SPEC）
#### 属性说明
需求描述

#### 属性类型
应用界面字段[无存储]

#### 数据类型
文本，可指定长度

#### Java类型
String

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
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-验收标准（VERIFY）
#### 属性说明
验收标准

#### 属性类型
应用界面字段[无存储]

#### 数据类型
文本，可指定长度

#### Java类型
String

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
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-评审结果（RESULT）
#### 属性说明
评审结果

#### 属性类型
应用界面字段[无存储]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[需求评审结果（Story__review_result）](../../codelist/Story__review_result)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（COMMENT）
#### 属性说明
备注

#### 属性类型
应用界面字段[无存储]

#### 数据类型
HTML文本，没有长度限制

#### Java类型
String

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
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否子需求（ISLEAF）
#### 属性说明
是否子需求

#### 属性类型
逻辑字段[来自计算式]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = %1$s AND DELETED = '0') THEN FALSE ELSE TRUE  END )

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-附件（FILES）
#### 属性说明
附件

#### 属性类型
应用界面字段[无存储]

#### 数据类型
文本，可指定长度

#### Java类型
String

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
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-平台/分支（BRANCHNAME）
#### 属性说明
平台/分支

#### 属性类型
链接字段[来自关系实体字段]

#### 数据类型
外键值文本

#### Java类型
String

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-版本号（VERSIONC）
#### 属性说明
版本号

#### 属性类型
逻辑字段[来自计算式]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
t1.`VERSION`

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属模块名称（MODULENAME1）
#### 属性说明
所属模块名称

#### 属性类型
逻辑字段[来自计算式]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root limit 0,1) end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-项目（PROJECT）
#### 属性说明
项目

#### 属性类型
应用界面字段[无存储]

#### 数据类型
大整型

#### Java类型
Long

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-之前的版本（PREVERSION）
#### 属性说明
之前的版本

#### 属性类型
应用界面字段[无存储]

#### 数据类型
整型

#### Java类型
Integer

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-不需要评审（NEEDNOTREVIEW）
#### 属性说明
不需要评审

#### 属性类型
应用界面字段[无存储]

#### 数据类型
多项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[不需要评审（NeedNotReview）](../../codelist/NeedNotReview)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否收藏（ISFAVORITES）
#### 属性说明
是否收藏

#### 属性类型
逻辑字段[来自计算式]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
0

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否可以细分（ISCHILD）
#### 属性说明
是否可以细分

#### 属性类型
逻辑字段[来自计算式]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [名称（NAME）](../zentao/Branch/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |


## 业务状态
| 序号 | 状态名称 | [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 默认 |
| -- | -- | -- | -- | -- | -- |
| 1 | [激活_未收藏_不能细分](#业务状态-激活_未收藏_不能细分（active_0_0）) | active | 0 | 0 | 否 |
| 2 | [激活_未收藏_细分](#业务状态-激活_未收藏_细分（active_0_1）) | active | 0 | 1 | 否 |
| 3 | [激活_未收藏_细分（删除）](#业务状态-激活_未收藏_细分（删除）（active_0_2）) | active | 0 | 2 | 否 |
| 4 | [激活_已收藏_不能细分](#业务状态-激活_已收藏_不能细分（active_1_0）) | active | 1 | 0 | 否 |
| 5 | [激活_已收藏_细分](#业务状态-激活_已收藏_细分（active_1_1）) | active | 1 | 1 | 否 |
| 6 | [激活_已收藏_细分（删除）](#业务状态-激活_已收藏_细分（删除）（active_1_2）) | active | 1 | 2 | 否 |
| 7 | [已变更_未收藏_不能细分](#业务状态-已变更_未收藏_不能细分（changed_0_0）) | changed | 0 | 0 | 否 |
| 8 | [已变更_未收藏_细分](#业务状态-已变更_未收藏_细分（changed_0_1）) | changed | 0 | 1 | 否 |
| 9 | [已变更_未收藏_细分（删除）](#业务状态-已变更_未收藏_细分（删除）（changed_0_2）) | changed | 0 | 2 | 否 |
| 10 | [已变更_已收藏_不能细分](#业务状态-已变更_已收藏_不能细分（changed_1_0）) | changed | 1 | 0 | 否 |
| 11 | [已变更_已收藏_细分](#业务状态-已变更_已收藏_细分（changed_1_1）) | changed | 1 | 1 | 否 |
| 12 | [已变更_已收藏_细分（删除）](#业务状态-已变更_已收藏_细分（删除）（changed_1_2）) | changed | 1 | 2 | 否 |
| 13 | [已关闭_未收藏_不能细分](#业务状态-已关闭_未收藏_不能细分（closed_0_0）) | closed | 0 | 0 | 否 |
| 14 | [已关闭_未收藏_细分](#业务状态-已关闭_未收藏_细分（closed_0_1）) | closed | 0 | 1 | 否 |
| 15 | [已关闭_未收藏_细分（删除）](#业务状态-已关闭_未收藏_细分（删除）（closed_0_2）) | closed | 0 | 2 | 否 |
| 16 | [已关闭_已收藏_不能细分](#业务状态-已关闭_已收藏_不能细分（closed_1_0）) | closed | 1 | 0 | 否 |
| 17 | [已关闭_已收藏_细分](#业务状态-已关闭_已收藏_细分（closed_1_1）) | closed | 1 | 1 | 否 |
| 18 | [已关闭_已收藏_细分（删除）](#业务状态-已关闭_已收藏_细分（删除）（closed_1_2）) | closed | 1 | 2 | 否 |
| 19 | [草稿-未收藏_不能细分](#业务状态-草稿-未收藏_不能细分（draft_0_0）) | draft | 0 | 0 | 否 |
| 20 | [草稿-未收藏_细分](#业务状态-草稿-未收藏_细分（draft_0_1）) | draft | 0 | 1 | 否 |
| 21 | [草稿-未收藏_细分（删除）](#业务状态-草稿-未收藏_细分（删除）（draft_0_2）) | draft | 0 | 2 | 否 |
| 22 | [草稿-已收藏_不能细分](#业务状态-草稿-已收藏_不能细分（draft_1_0）) | draft | 1 | 0 | 否 |
| 23 | [草稿-已收藏_细分](#业务状态-草稿-已收藏_细分（draft_1_1）) | draft | 1 | 1 | 否 |
| 24 | [草稿-已收藏_细分（删除）](#业务状态-草稿-已收藏_细分（删除）（draft_1_2）) | draft | 1 | 2 | 否 |
### 业务状态-激活_未收藏_不能细分（active_0_0）
#### 说明
激活_未收藏_不能细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | active |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [变更](#实体行为-变更（Change）)<br>（Change） |
| 2 | [版本解除关联需求](#实体行为-版本解除关联需求（buildUnlinkStory）)<br>（buildUnlinkStory） |
| 3 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 4 | [发布批量解除关联需求](#实体行为-发布批量解除关联需求（ReleaseBatchUnlinkStory）)<br>（ReleaseBatchUnlinkStory） |
| 5 | [指派](#实体行为-指派（AssignTo）)<br>（AssignTo） |
| 6 | [发布解除关联需求](#实体行为-发布解除关联需求（ReleaseUnlinkStory）)<br>（ReleaseUnlinkStory） |
| 7 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 8 | [关闭](#实体行为-关闭（Close）)<br>（Close） |
| 9 | [评审](#实体行为-评审（Review）)<br>（Review） |
| 10 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 11 | [计划关联需求](#实体行为-计划关联需求（LinkStory）)<br>（LinkStory） |
| 12 | [项目批量解除关联需求](#实体行为-项目批量解除关联需求（ProjectBatchUnlinkStory）)<br>（ProjectBatchUnlinkStory） |
| 13 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 14 | [计划解除关联需求](#实体行为-计划解除关联需求（UnlinkStory）)<br>（UnlinkStory） |
| 15 | [项目解除关联需求](#实体行为-项目解除关联需求（ProjectUnlinkStory）)<br>（ProjectUnlinkStory） |
| 16 | [项目关联需求-按计划关联](#实体行为-项目关联需求-按计划关联（importPlanStories）)<br>（importPlanStories） |
| 17 | [发布关联需求](#实体行为-发布关联需求（ReleaseLinkStory）)<br>（ReleaseLinkStory） |
| 18 | [项目关联需求](#实体行为-项目关联需求（ProjectLinkStory）)<br>（ProjectLinkStory） |
| 19 | [版本批量解除关联需求](#实体行为-版本批量解除关联需求（buildBatchUnlinkStory）)<br>（buildBatchUnlinkStory） |
| 20 | [计划批量解除关联需求](#实体行为-计划批量解除关联需求（BatchUnlinkStory）)<br>（BatchUnlinkStory） |
| 21 | [项目关联需求](#实体行为-项目关联需求（buildLinkStory）)<br>（buildLinkStory） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 2 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 3 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 4 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
### 业务状态-激活_未收藏_细分（active_0_1）
#### 说明
激活_未收藏_细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | active |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 2 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 3 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 4 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 5 | [需求建用例](#操作权限-需求建用例（SRFUR__STORY_CCASE_BUT）)<br>（SRFUR__STORY_CCASE_BUT） |
| 6 | [需求删除](#操作权限-需求删除（SRFUR__STORY_DELETE_BUT）)<br>（SRFUR__STORY_DELETE_BUT） |
| 7 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 8 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
### 业务状态-激活_未收藏_细分（删除）（active_0_2）
#### 说明
激活_未收藏_细分（删除）

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | active |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 2 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 2 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 3 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
### 业务状态-激活_已收藏_不能细分（active_1_0）
#### 说明
激活_已收藏_不能细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | active |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 2 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 3 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
| 4 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
### 业务状态-激活_已收藏_细分（active_1_1）
#### 说明
激活_已收藏_细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | active |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 2 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
| 3 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 4 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
| 5 | [需求删除](#操作权限-需求删除（SRFUR__STORY_DELETE_BUT）)<br>（SRFUR__STORY_DELETE_BUT） |
| 6 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 7 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 8 | [需求建用例](#操作权限-需求建用例（SRFUR__STORY_CCASE_BUT）)<br>（SRFUR__STORY_CCASE_BUT） |
### 业务状态-激活_已收藏_细分（删除）（active_1_2）
#### 说明
激活_已收藏_细分（删除）

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | active |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 2 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 2 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 3 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
### 业务状态-已变更_未收藏_不能细分（changed_0_0）
#### 说明
已变更_未收藏_不能细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | changed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 2 | [评审](#实体行为-评审（Review）)<br>（Review） |
| 3 | [指派](#实体行为-指派（AssignTo）)<br>（AssignTo） |
| 4 | [项目关联需求](#实体行为-项目关联需求（buildLinkStory）)<br>（buildLinkStory） |
| 5 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 6 | [项目解除关联需求](#实体行为-项目解除关联需求（ProjectUnlinkStory）)<br>（ProjectUnlinkStory） |
| 7 | [关闭](#实体行为-关闭（Close）)<br>（Close） |
| 8 | [项目关联需求](#实体行为-项目关联需求（ProjectLinkStory）)<br>（ProjectLinkStory） |
| 9 | [发布解除关联需求](#实体行为-发布解除关联需求（ReleaseUnlinkStory）)<br>（ReleaseUnlinkStory） |
| 10 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 11 | [项目批量解除关联需求](#实体行为-项目批量解除关联需求（ProjectBatchUnlinkStory）)<br>（ProjectBatchUnlinkStory） |
| 12 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 13 | [项目关联需求-按计划关联](#实体行为-项目关联需求-按计划关联（importPlanStories）)<br>（importPlanStories） |
| 14 | [发布关联需求](#实体行为-发布关联需求（ReleaseLinkStory）)<br>（ReleaseLinkStory） |
| 15 | [计划关联需求](#实体行为-计划关联需求（LinkStory）)<br>（LinkStory） |
| 16 | [变更](#实体行为-变更（Change）)<br>（Change） |
| 17 | [发布批量解除关联需求](#实体行为-发布批量解除关联需求（ReleaseBatchUnlinkStory）)<br>（ReleaseBatchUnlinkStory） |
| 18 | [计划批量解除关联需求](#实体行为-计划批量解除关联需求（BatchUnlinkStory）)<br>（BatchUnlinkStory） |
| 19 | [版本解除关联需求](#实体行为-版本解除关联需求（buildUnlinkStory）)<br>（buildUnlinkStory） |
| 20 | [计划解除关联需求](#实体行为-计划解除关联需求（UnlinkStory）)<br>（UnlinkStory） |
| 21 | [版本批量解除关联需求](#实体行为-版本批量解除关联需求（buildBatchUnlinkStory）)<br>（buildBatchUnlinkStory） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 2 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 3 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
### 业务状态-已变更_未收藏_细分（changed_0_1）
#### 说明
已变更_未收藏_细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | changed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 2 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 3 | [需求建用例](#操作权限-需求建用例（SRFUR__STORY_CCASE_BUT）)<br>（SRFUR__STORY_CCASE_BUT） |
| 4 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 5 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 6 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 7 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
| 8 | [需求删除](#操作权限-需求删除（SRFUR__STORY_DELETE_BUT）)<br>（SRFUR__STORY_DELETE_BUT） |
| 9 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
### 业务状态-已变更_未收藏_细分（删除）（changed_0_2）
#### 说明
已变更_未收藏_细分（删除）

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | changed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 2 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 2 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 3 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
### 业务状态-已变更_已收藏_不能细分（changed_1_0）
#### 说明
已变更_已收藏_不能细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | changed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
| 2 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 3 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
### 业务状态-已变更_已收藏_细分（changed_1_1）
#### 说明
已变更_已收藏_细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | changed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 2 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 3 | [需求删除](#操作权限-需求删除（SRFUR__STORY_DELETE_BUT）)<br>（SRFUR__STORY_DELETE_BUT） |
| 4 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 5 | [需求建用例](#操作权限-需求建用例（SRFUR__STORY_CCASE_BUT）)<br>（SRFUR__STORY_CCASE_BUT） |
| 6 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 7 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
| 8 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 9 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
### 业务状态-已变更_已收藏_细分（删除）（changed_1_2）
#### 说明
已变更_已收藏_细分（删除）

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | changed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 2 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 2 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 3 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
### 业务状态-已关闭_未收藏_不能细分（closed_0_0）
#### 说明
已关闭_未收藏_不能细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [项目关联需求](#实体行为-项目关联需求（buildLinkStory）)<br>（buildLinkStory） |
| 2 | [项目批量解除关联需求](#实体行为-项目批量解除关联需求（ProjectBatchUnlinkStory）)<br>（ProjectBatchUnlinkStory） |
| 3 | [激活](#实体行为-激活（activate）)<br>（activate） |
| 4 | [发布批量解除关联需求](#实体行为-发布批量解除关联需求（ReleaseBatchUnlinkStory）)<br>（ReleaseBatchUnlinkStory） |
| 5 | [指派](#实体行为-指派（AssignTo）)<br>（AssignTo） |
| 6 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 7 | [计划解除关联需求](#实体行为-计划解除关联需求（UnlinkStory）)<br>（UnlinkStory） |
| 8 | [项目关联需求](#实体行为-项目关联需求（ProjectLinkStory）)<br>（ProjectLinkStory） |
| 9 | [发布解除关联需求](#实体行为-发布解除关联需求（ReleaseUnlinkStory）)<br>（ReleaseUnlinkStory） |
| 10 | [版本批量解除关联需求](#实体行为-版本批量解除关联需求（buildBatchUnlinkStory）)<br>（buildBatchUnlinkStory） |
| 11 | [项目解除关联需求](#实体行为-项目解除关联需求（ProjectUnlinkStory）)<br>（ProjectUnlinkStory） |
| 12 | [计划关联需求](#实体行为-计划关联需求（LinkStory）)<br>（LinkStory） |
| 13 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 14 | [计划批量解除关联需求](#实体行为-计划批量解除关联需求（BatchUnlinkStory）)<br>（BatchUnlinkStory） |
| 15 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 16 | [版本解除关联需求](#实体行为-版本解除关联需求（buildUnlinkStory）)<br>（buildUnlinkStory） |
| 17 | [项目关联需求-按计划关联](#实体行为-项目关联需求-按计划关联（importPlanStories）)<br>（importPlanStories） |
| 18 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 19 | [发布关联需求](#实体行为-发布关联需求（ReleaseLinkStory）)<br>（ReleaseLinkStory） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 2 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 3 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 4 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
| 5 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 6 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
### 业务状态-已关闭_未收藏_细分（closed_0_1）
#### 说明
已关闭_未收藏_细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求删除](#操作权限-需求删除（SRFUR__STORY_DELETE_BUT）)<br>（SRFUR__STORY_DELETE_BUT） |
| 2 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 3 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 4 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 5 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 6 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 7 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
| 8 | [需求建用例](#操作权限-需求建用例（SRFUR__STORY_CCASE_BUT）)<br>（SRFUR__STORY_CCASE_BUT） |
### 业务状态-已关闭_未收藏_细分（删除）（closed_0_2）
#### 说明
已关闭_未收藏_细分（删除）

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 2 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
| 2 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 3 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 4 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 5 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 6 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
### 业务状态-已关闭_已收藏_不能细分（closed_1_0）
#### 说明
已关闭_已收藏_不能细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
| 2 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 3 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 4 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 5 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 6 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
### 业务状态-已关闭_已收藏_细分（closed_1_1）
#### 说明
已关闭_已收藏_细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 2 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 3 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 4 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 5 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
| 6 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
| 7 | [需求删除](#操作权限-需求删除（SRFUR__STORY_DELETE_BUT）)<br>（SRFUR__STORY_DELETE_BUT） |
| 8 | [需求建用例](#操作权限-需求建用例（SRFUR__STORY_CCASE_BUT）)<br>（SRFUR__STORY_CCASE_BUT） |
### 业务状态-已关闭_已收藏_细分（删除）（closed_1_2）
#### 说明
已关闭_已收藏_细分（删除）

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 2 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 2 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
| 3 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 4 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
| 5 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 6 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
### 业务状态-草稿-未收藏_不能细分（draft_0_0）
#### 说明
草稿-未收藏_不能细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | draft |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [发布解除关联需求](#实体行为-发布解除关联需求（ReleaseUnlinkStory）)<br>（ReleaseUnlinkStory） |
| 2 | [计划关联需求](#实体行为-计划关联需求（LinkStory）)<br>（LinkStory） |
| 3 | [计划批量解除关联需求](#实体行为-计划批量解除关联需求（BatchUnlinkStory）)<br>（BatchUnlinkStory） |
| 4 | [项目关联需求](#实体行为-项目关联需求（buildLinkStory）)<br>（buildLinkStory） |
| 5 | [项目关联需求](#实体行为-项目关联需求（ProjectLinkStory）)<br>（ProjectLinkStory） |
| 6 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 7 | [激活](#实体行为-激活（activate）)<br>（activate） |
| 8 | [版本解除关联需求](#实体行为-版本解除关联需求（buildUnlinkStory）)<br>（buildUnlinkStory） |
| 9 | [项目关联需求-按计划关联](#实体行为-项目关联需求-按计划关联（importPlanStories）)<br>（importPlanStories） |
| 10 | [项目批量解除关联需求](#实体行为-项目批量解除关联需求（ProjectBatchUnlinkStory）)<br>（ProjectBatchUnlinkStory） |
| 11 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 12 | [发布关联需求](#实体行为-发布关联需求（ReleaseLinkStory）)<br>（ReleaseLinkStory） |
| 13 | [项目解除关联需求](#实体行为-项目解除关联需求（ProjectUnlinkStory）)<br>（ProjectUnlinkStory） |
| 14 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 15 | [指派](#实体行为-指派（AssignTo）)<br>（AssignTo） |
| 16 | [评审](#实体行为-评审（Review）)<br>（Review） |
| 17 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 18 | [变更](#实体行为-变更（Change）)<br>（Change） |
| 19 | [发布批量解除关联需求](#实体行为-发布批量解除关联需求（ReleaseBatchUnlinkStory）)<br>（ReleaseBatchUnlinkStory） |
| 20 | [计划解除关联需求](#实体行为-计划解除关联需求（UnlinkStory）)<br>（UnlinkStory） |
| 21 | [版本批量解除关联需求](#实体行为-版本批量解除关联需求（buildBatchUnlinkStory）)<br>（buildBatchUnlinkStory） |
| 22 | [关闭](#实体行为-关闭（Close）)<br>（Close） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 2 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 3 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
### 业务状态-草稿-未收藏_细分（draft_0_1）
#### 说明
草稿-未收藏_细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | draft |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 2 | [需求建用例](#操作权限-需求建用例（SRFUR__STORY_CCASE_BUT）)<br>（SRFUR__STORY_CCASE_BUT） |
| 3 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
| 4 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
| 5 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 6 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 7 | [需求删除](#操作权限-需求删除（SRFUR__STORY_DELETE_BUT）)<br>（SRFUR__STORY_DELETE_BUT） |
| 8 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 9 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
### 业务状态-草稿-未收藏_细分（删除）（draft_0_2）
#### 说明
草稿-未收藏_细分（删除）

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | draft |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 2 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 2 | [需求已收藏](#操作权限-需求已收藏（SRFUR__STORY_FAVOR_BUT）)<br>（SRFUR__STORY_FAVOR_BUT） |
| 3 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
### 业务状态-草稿-已收藏_不能细分（draft_1_0）
#### 说明
草稿-已收藏_不能细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | draft |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [版本解除关联需求](#实体行为-版本解除关联需求（buildUnlinkStory）)<br>（buildUnlinkStory） |
| 2 | [项目解除关联需求](#实体行为-项目解除关联需求（ProjectUnlinkStory）)<br>（ProjectUnlinkStory） |
| 3 | [发布关联需求](#实体行为-发布关联需求（ReleaseLinkStory）)<br>（ReleaseLinkStory） |
| 4 | [关闭](#实体行为-关闭（Close）)<br>（Close） |
| 5 | [计划解除关联需求](#实体行为-计划解除关联需求（UnlinkStory）)<br>（UnlinkStory） |
| 6 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 7 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 8 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 9 | [激活](#实体行为-激活（activate）)<br>（activate） |
| 10 | [项目解除关联需求](#实体行为-项目解除关联需求（projectUnlinkStorys）)<br>（projectUnlinkStorys） |
| 11 | [变更](#实体行为-变更（Change）)<br>（Change） |
| 12 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 13 | [指派](#实体行为-指派（AssignTo）)<br>（AssignTo） |
| 14 | [项目关联需求](#实体行为-项目关联需求（ProjectLinkStory）)<br>（ProjectLinkStory） |
| 15 | [项目关联需求](#实体行为-项目关联需求（buildLinkStory）)<br>（buildLinkStory） |
| 16 | [计划关联需求](#实体行为-计划关联需求（LinkStory）)<br>（LinkStory） |
| 17 | [发布解除关联需求](#实体行为-发布解除关联需求（ReleaseUnlinkStory）)<br>（ReleaseUnlinkStory） |
| 18 | [版本解除关联需求](#实体行为-版本解除关联需求（buildUnlinkStorys）)<br>（buildUnlinkStorys） |
| 19 | [评审](#实体行为-评审（Review）)<br>（Review） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 2 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 3 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
### 业务状态-草稿-已收藏_细分（draft_1_1）
#### 说明
草稿-已收藏_细分

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | draft |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求删除](#操作权限-需求删除（SRFUR__STORY_DELETE_BUT）)<br>（SRFUR__STORY_DELETE_BUT） |
| 2 | [需求变更](#操作权限-需求变更（SRFUR__STORY_CHANGED_BUT）)<br>（SRFUR__STORY_CHANGED_BUT） |
| 3 | [需求建用例](#操作权限-需求建用例（SRFUR__STORY_CCASE_BUT）)<br>（SRFUR__STORY_CCASE_BUT） |
| 4 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |
| 5 | [需求评审](#操作权限-需求评审（SRFUR__STORY_REVIEW_BUT）)<br>（SRFUR__STORY_REVIEW_BUT） |
| 6 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 7 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
| 8 | [需求关闭](#操作权限-需求关闭（SRFUR__STORY_CLOSED_BUT）)<br>（SRFUR__STORY_CLOSED_BUT） |
| 9 | [需求指派给](#操作权限-需求指派给（SRFUR__STORY_ASS_BUT）)<br>（SRFUR__STORY_ASS_BUT） |
### 业务状态-草稿-已收藏_细分（删除）（draft_1_2）
#### 说明
草稿-已收藏_细分（删除）

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [当前状态](#属性-当前状态（STATUS）)<br>（STATUS） | draft |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [是否可以细分](#属性-是否可以细分（ISCHILD）)<br>（ISCHILD） | 2 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [需求激活](#操作权限-需求激活（SRFUR__STORY_ACTIVE_BUT）)<br>（SRFUR__STORY_ACTIVE_BUT） |
| 2 | [需求待收藏](#操作权限-需求待收藏（SRFUR__STORY_NFAVOR_BUT）)<br>（SRFUR__STORY_NFAVOR_BUT） |
| 3 | [需求细分](#操作权限-需求细分（SRFUR__STORY_XQXF_BUT）)<br>（SRFUR__STORY_XQXF_BUT） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| -- | -- | -- | -- | -- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [激活](#实体行为-激活（activate）) | activate | 用户自定义 | 后台及前台 |
| 7 | [全部推送](#实体行为-全部推送（AllPush）) | AllPush | 用户自定义 | 后台及前台 |
| 8 | [指派](#实体行为-指派（AssignTo）) | AssignTo | 用户自定义 | 后台及前台 |
| 9 | [批量指派](#实体行为-批量指派（BatchAssignTo）) | BatchAssignTo | 用户自定义 | 后台及前台 |
| 10 | [批量变更平台/分支](#实体行为-批量变更平台/分支（BatchChangeBranch）) | BatchChangeBranch | 用户自定义 | 后台及前台 |
| 11 | [批量变更模块](#实体行为-批量变更模块（BatchChangeModule）) | BatchChangeModule | 用户自定义 | 后台及前台 |
| 12 | [批量关联计划](#实体行为-批量关联计划（BatchChangePlan）) | BatchChangePlan | 用户自定义 | 后台及前台 |
| 13 | [批量变更阶段](#实体行为-批量变更阶段（BatchChangeStage）) | BatchChangeStage | 用户自定义 | 后台及前台 |
| 14 | [批量关闭](#实体行为-批量关闭（BatchClose）) | BatchClose | 用户自定义 | 后台及前台 |
| 15 | [批量评审](#实体行为-批量评审（BatchReview）) | BatchReview | 用户自定义 | 后台及前台 |
| 16 | [计划批量解除关联需求](#实体行为-计划批量解除关联需求（BatchUnlinkStory）) | BatchUnlinkStory | 用户自定义 | 后台及前台 |
| 17 | [bug转需求](#实体行为-bug转需求（BugToStory）) | BugToStory | 用户自定义 | 后台及前台 |
| 18 | [版本批量解除关联需求](#实体行为-版本批量解除关联需求（buildBatchUnlinkStory）) | buildBatchUnlinkStory | 用户自定义 | 后台及前台 |
| 19 | [项目关联需求](#实体行为-项目关联需求（buildLinkStory）) | buildLinkStory | 用户自定义 | 后台及前台 |
| 20 | [版本解除关联需求](#实体行为-版本解除关联需求（buildUnlinkStory）) | buildUnlinkStory | 用户自定义 | 后台及前台 |
| 21 | [版本解除关联需求](#实体行为-版本解除关联需求（buildUnlinkStorys）) | buildUnlinkStorys | 实体处理逻辑 | 后台 |
| 22 | [变更](#实体行为-变更（Change）) | Change | 用户自定义 | 后台及前台 |
| 23 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 24 | [关闭](#实体行为-关闭（Close）) | Close | 用户自定义 | 后台及前台 |
| 25 | [获取需求描述](#实体行为-获取需求描述（GetStorySpec）) | GetStorySpec | 用户自定义 | 后台及前台 |
| 26 | [获取需求描述](#实体行为-获取需求描述（GetStorySpecs）) | GetStorySpecs | 实体处理逻辑 | 后台 |
| 27 | [任务相关需求草稿方法](#实体行为-任务相关需求草稿方法（GetTaskReStory）) | GetTaskReStory | 用户自定义 | 前台 |
| 28 | [项目关联需求-按计划关联](#实体行为-项目关联需求-按计划关联（importPlanStories）) | importPlanStories | 用户自定义 | 后台及前台 |
| 29 | [计划关联需求](#实体行为-计划关联需求（LinkStory）) | LinkStory | 用户自定义 | 后台及前台 |
| 30 | [项目批量解除关联需求](#实体行为-项目批量解除关联需求（ProjectBatchUnlinkStory）) | ProjectBatchUnlinkStory | 用户自定义 | 后台及前台 |
| 31 | [项目关联需求](#实体行为-项目关联需求（ProjectLinkStory）) | ProjectLinkStory | 用户自定义 | 后台及前台 |
| 32 | [项目解除关联需求](#实体行为-项目解除关联需求（ProjectUnlinkStory）) | ProjectUnlinkStory | 用户自定义 | 后台及前台 |
| 33 | [项目解除关联需求](#实体行为-项目解除关联需求（projectUnlinkStorys）) | projectUnlinkStorys | 实体处理逻辑 | 后台 |
| 34 | [推送](#实体行为-推送（Push）) | Push | 用户自定义 | 后台及前台 |
| 35 | [发布批量解除关联需求](#实体行为-发布批量解除关联需求（ReleaseBatchUnlinkStory）) | ReleaseBatchUnlinkStory | 用户自定义 | 后台及前台 |
| 36 | [发布关联需求](#实体行为-发布关联需求（ReleaseLinkStory）) | ReleaseLinkStory | 用户自定义 | 后台及前台 |
| 37 | [发布解除关联需求](#实体行为-发布解除关联需求（ReleaseUnlinkStory）) | ReleaseUnlinkStory | 用户自定义 | 后台及前台 |
| 38 | [重置由谁评审](#实体行为-重置由谁评审（ResetReviewedBy）) | ResetReviewedBy | 用户自定义 | 后台及前台 |
| 39 | [评审](#实体行为-评审（Review）) | Review | 用户自定义 | 后台及前台 |
| 40 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 41 | [行为](#实体行为-行为（sendMessage）) | sendMessage | 用户自定义 | 后台及前台 |
| 42 | [发送消息前置处理](#实体行为-发送消息前置处理（sendMsgPreProcess）) | sendMsgPreProcess | 用户自定义 | 后台及前台 |
| 43 | [需求收藏](#实体行为-需求收藏（StoryFavorites）) | StoryFavorites | 实体处理逻辑 | 后台 |
| 44 | [取消收藏](#实体行为-取消收藏（StoryNFavorites）) | StoryNFavorites | 实体处理逻辑 | 后台 |
| 45 | [同步Ibz平台实体](#实体行为-同步Ibz平台实体（SyncFromIBIZ）) | SyncFromIBIZ | 用户自定义 | 后台及前台 |
| 46 | [转需求](#实体行为-转需求（toStory）) | toStory | 用户自定义 | 前台 |
| 47 | [计划解除关联需求](#实体行为-计划解除关联需求（UnlinkStory）) | UnlinkStory | 用户自定义 | 后台及前台 |
### 实体行为-Create（Create）
#### 说明
Create

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-Update（Update）
#### 说明
Update

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-Remove（Remove）
#### 说明
Remove

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-Get（Get）
#### 说明
Get

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-激活（activate）
#### 说明
激活

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-全部推送（AllPush）
#### 说明
全部推送

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-指派（AssignTo）
#### 说明
需求指派

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-批量指派（BatchAssignTo）
#### 说明
×，模板暂不支持批处理（参数）...

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-批量变更平台/分支（BatchChangeBranch）
#### 说明
×，模板暂不支持批处理（参数）...

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-批量变更模块（BatchChangeModule）
#### 说明
×，模板暂不支持批处理（参数）...

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-批量关联计划（BatchChangePlan）
#### 说明
×，模板暂不支持批处理（参数）...

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-批量变更阶段（BatchChangeStage）
#### 说明
×，模板暂不支持批处理（参数）...

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-批量关闭（BatchClose）
#### 说明
×，模板暂不支持批处理（参数）...

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-批量评审（BatchReview）
#### 说明
×，模板暂不支持批处理（参数）...

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-计划批量解除关联需求（BatchUnlinkStory）
#### 说明
计划批量解除关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-bug转需求（BugToStory）
#### 说明
bug转需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-版本批量解除关联需求（buildBatchUnlinkStory）
#### 说明
版本批量解除关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-项目关联需求（buildLinkStory）
#### 说明
项目关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-版本解除关联需求（buildUnlinkStory）
#### 说明
版本解除关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-版本解除关联需求（buildUnlinkStorys）
#### 说明
版本解除关联需求

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

### 实体行为-变更（Change）
#### 说明
需求变更

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-CheckKey（CheckKey）
#### 说明
CheckKey

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-关闭（Close）
#### 说明
需求关闭

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-获取需求描述（GetStorySpec）
#### 说明
获取需求描述

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-获取需求描述（GetStorySpecs）
#### 说明
获取需求描述

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

### 实体行为-任务相关需求草稿方法（GetTaskReStory）
#### 说明
任务相关需求草稿方法

#### 行为类型
用户自定义

#### 行为持有者
前台

### 实体行为-项目关联需求-按计划关联（importPlanStories）
#### 说明
项目关联需求-按计划关联

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-计划关联需求（LinkStory）
#### 说明
计划关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-项目批量解除关联需求（ProjectBatchUnlinkStory）
#### 说明
项目批量解除关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-项目关联需求（ProjectLinkStory）
#### 说明
项目关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-项目解除关联需求（ProjectUnlinkStory）
#### 说明
项目解除关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-项目解除关联需求（projectUnlinkStorys）
#### 说明
项目解除关联需求

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

### 实体行为-推送（Push）
#### 说明
推送

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-发布批量解除关联需求（ReleaseBatchUnlinkStory）
#### 说明
发布批量解除关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-发布关联需求（ReleaseLinkStory）
#### 说明
发布关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-发布解除关联需求（ReleaseUnlinkStory）
#### 说明
发布解除关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-重置由谁评审（ResetReviewedBy）
#### 说明
重置由谁评审

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-评审（Review）
#### 说明
需求评审

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-Save（Save）
#### 说明
Save

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-行为（sendMessage）
#### 说明
行为

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-发送消息前置处理（sendMsgPreProcess）
#### 说明
发送消息前置处理

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-需求收藏（StoryFavorites）
#### 说明
需求收藏

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

### 实体行为-取消收藏（StoryNFavorites）
#### 说明
取消收藏

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

### 实体行为-同步Ibz平台实体（SyncFromIBIZ）
#### 说明
同步Ibz平台实体

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-转需求（toStory）
#### 说明
转需求

#### 行为类型
用户自定义

#### 行为持有者
前台

### 实体行为-计划解除关联需求（UnlinkStory）
#### 说明
计划解除关联需求

#### 行为类型
用户自定义

#### 行为持有者
后台及前台



