# 实体-任务(ZT_TASK)
## 实体说明
任务

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [由谁取消](#属性-由谁取消（CANCELEDBY）) | CANCELEDBY | SSCODELIST | 否 | 否 | 是 |
| 2 | [预计剩余](#属性-预计剩余（LEFT）) | LEFT | FLOAT | 否 | 否 | 是 |
| 3 | [创建日期](#属性-创建日期（OPENEDDATE）) | OPENEDDATE | DATETIME | 否 | 否 | 是 |
| 4 | [标题颜色](#属性-标题颜色（COLOR）) | COLOR | SSCODELIST | 否 | 否 | 是 |
| 5 | [编号](#属性-编号（ID）) | ID | ACID | 是 | 否 | 否 |
| 6 | [由谁完成](#属性-由谁完成（FINISHEDBY）) | FINISHEDBY | SSCODELIST | 否 | 否 | 是 |
| 7 | [完成者列表](#属性-完成者列表（FINISHEDLIST）) | FINISHEDLIST | LONGTEXT | 否 | 否 | 是 |
| 8 | [实际开始](#属性-实际开始（REALSTARTED）) | REALSTARTED | DATE | 否 | 否 | 是 |
| 9 | [由谁关闭](#属性-由谁关闭（CLOSEDBY）) | CLOSEDBY | SSCODELIST | 否 | 否 | 是 |
| 10 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | TEXT | 否 | 否 | 是 |
| 11 | [关闭原因](#属性-关闭原因（CLOSEDREASON）) | CLOSEDREASON | SSCODELIST | 否 | 否 | 是 |
| 12 | [最后修改日期](#属性-最后修改日期（LASTEDITEDDATE）) | LASTEDITEDDATE | DATETIME | 否 | 否 | 是 |
| 13 | [指派日期](#属性-指派日期（ASSIGNEDDATE）) | ASSIGNEDDATE | DATETIME | 否 | 否 | 是 |
| 14 | [优先级](#属性-优先级（PRI）) | PRI | NSCODELIST | 否 | 否 | 是 |
| 15 | [最后修改](#属性-最后修改（LASTEDITEDBY）) | LASTEDITEDBY | SSCODELIST | 否 | 否 | 是 |
| 16 | [任务状态](#属性-任务状态（STATUS）) | STATUS | SSCODELIST | 否 | 否 | 是 |
| 17 | [任务名称](#属性-任务名称（NAME）) | NAME | TEXT | 否 | 否 | 否 |
| 18 | [关闭时间](#属性-关闭时间（CLOSEDDATE）) | CLOSEDDATE | DATETIME | 否 | 否 | 是 |
| 19 | [任务类型](#属性-任务类型（TYPE）) | TYPE | SSCODELIST | 否 | 否 | 是 |
| 20 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | TEXT | 否 | 否 | 是 |
| 21 | [任务描述](#属性-任务描述（DESC）) | DESC | LONGTEXT | 否 | 否 | 是 |
| 22 | [预计开始](#属性-预计开始（ESTSTARTED）) | ESTSTARTED | DATE | 否 | 否 | 是 |
| 23 | [截止日期](#属性-截止日期（DEADLINE）) | DEADLINE | DATE | 否 | 否 | 是 |
| 24 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 否 | 是 |
| 25 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | LONGTEXT | 否 | 否 | 是 |
| 26 | [总计消耗](#属性-总计消耗（CONSUMED）) | CONSUMED | FLOAT | 否 | 否 | 是 |
| 27 | [最初预计](#属性-最初预计（ESTIMATE）) | ESTIMATE | FLOAT | 否 | 否 | 是 |
| 28 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | SSCODELIST | 否 | 否 | 是 |
| 29 | [取消时间](#属性-取消时间（CANCELEDDATE）) | CANCELEDDATE | DATETIME | 否 | 否 | 是 |
| 30 | [实际完成](#属性-实际完成（FINISHEDDATE）) | FINISHEDDATE | DATE | 否 | 否 | 是 |
| 31 | [所属模块](#属性-所属模块（MODULENAME）) | MODULENAME | PICKUPTEXT | 否 | 是 | 是 |
| 32 | [相关需求](#属性-相关需求（STORYNAME）) | STORYNAME | PICKUPTEXT | 否 | 是 | 是 |
| 33 | [所属项目](#属性-所属项目（PROJECTNAME）) | PROJECTNAME | PICKUPTEXT | 否 | 是 | 是 |
| 34 | [产品](#属性-产品（PRODUCT）) | PRODUCT | PICKUPDATA | 否 | 是 | 是 |
| 35 | [需求版本](#属性-需求版本（STORYVERSION）) | STORYVERSION | PICKUPDATA | 否 | 是 | 是 |
| 36 | [产品](#属性-产品（PRODUCTNAME）) | PRODUCTNAME | PICKUPDATA | 否 | 是 | 是 |
| 37 | [父任务](#属性-父任务（PARENTNAME）) | PARENTNAME | PICKUPTEXT | 否 | 是 | 是 |
| 38 | [所属项目](#属性-所属项目（PROJECT）) | PROJECT | PICKUP | 否 | 是 | 是 |
| 39 | [相关需求](#属性-相关需求（STORY）) | STORY | PICKUP | 否 | 是 | 是 |
| 40 | [父任务](#属性-父任务（PARENT）) | PARENT | PICKUP | 否 | 是 | 是 |
| 41 | [来源Bug](#属性-来源Bug（FROMBUG）) | FROMBUG | PICKUP | 否 | 是 | 是 |
| 42 | [持续时间](#属性-持续时间（DURATION）) | DURATION | TEXT | 否 | 是 | 是 |
| 43 | [id](#属性-id（MODULE）) | MODULE | PICKUP | 否 | 是 | 是 |
| 44 | [模块路径](#属性-模块路径（PATH）) | PATH | PICKUPDATA | 否 | 是 | 是 |
| 45 | [备注](#属性-备注（COMMENT）) | COMMENT | HTMLTEXT | 否 | 是 | 是 |
| 46 | [本次消耗](#属性-本次消耗（CURRENTCONSUMED）) | CURRENTCONSUMED | FLOAT | 否 | 是 | 是 |
| 47 | [总计耗时](#属性-总计耗时（TOTALTIME）) | TOTALTIME | FLOAT | 否 | 是 | 是 |
| 48 | [是否子任务](#属性-是否子任务（ISLEAF）) | ISLEAF | TEXT | 否 | 是 | 是 |
| 49 | [所有模块](#属性-所有模块（ALLMODULES）) | ALLMODULES | TEXT | 否 | 是 | 是 |
| 50 | [多人任务](#属性-多人任务（MULTIPLE）) | MULTIPLE | TEXT | 否 | 是 | 是 |
| 51 | [项目团队成员](#属性-项目团队成员（TASKTEAMS）) | TASKTEAMS | ONE2MANYDATA | 否 | 是 | 是 |
| 52 | [所属模块](#属性-所属模块（MODULENAME1）) | MODULENAME1 | TEXT | 否 | 是 | 是 |
| 53 | [工时](#属性-工时（IBZTASKESTIMATES）) | IBZTASKESTIMATES | ONE2MANYDATA | 否 | 是 | 是 |
| 54 | [是否收藏](#属性-是否收藏（ISFAVORITES）) | ISFAVORITES | TEXT | 否 | 是 | 是 |
| 55 | [任务状态](#属性-任务状态（STATUS1）) | STATUS1 | SSCODELIST | 否 | 是 | 是 |
| 56 | [任务类型](#属性-任务类型（TASKTYPE）) | TASKTYPE | SSCODELIST | 否 | 是 | 是 |
| 57 | [附件](#属性-附件（FILES）) | FILES | TEXT | 否 | 是 | 是 |
| 58 | [团队用户](#属性-团队用户（USERNAMES）) | USERNAMES | TEXT | 否 | 是 | 是 |
| 59 | [是否完成](#属性-是否完成（ISFINISHED）) | ISFINISHED | TEXT | 否 | 是 | 是 |
| 60 | [回复数量](#属性-回复数量（REPLYCOUNT）) | REPLYCOUNT | INT | 否 | 是 | 是 |
| 61 | [是否填写描述](#属性-是否填写描述（HASDETAIL）) | HASDETAIL | TEXT | 否 | 是 | 是 |

### 属性-由谁取消（CANCELEDBY）
#### 属性说明
由谁取消

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-预计剩余（LEFT）
#### 属性说明
预计剩余

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
参照数据字典【[任务颜色（Task__color）](../../codelist/Task__color)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁完成（FINISHEDBY）
#### 属性说明
由谁完成

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-完成者列表（FINISHEDLIST）
#### 属性说明
完成者列表

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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-实际开始（REALSTARTED）
#### 属性说明
实际开始

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
参照数据字典【[任务关闭原因（Task__closed_reason）](../../codelist/Task__closed_reason)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-优先级（PRI）
#### 属性说明
此处默认值从0修改为3

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
参照数据字典【[任务优先级（Task__pri）](../../codelist/Task__pri)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-任务状态（STATUS）
#### 属性说明
任务状态

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
参照数据字典【[任务状态（Task__status）](../../codelist/Task__status)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-任务名称（NAME）
#### 属性说明
任务名称

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关闭时间（CLOSEDDATE）
#### 属性说明
关闭时间

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-任务类型（TYPE）
#### 属性说明
任务类型

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
| 值 | devel |

#### 取值范围/公式
参照数据字典【[任务类型（Task__type）](../../codelist/Task__type)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-任务描述（DESC）
#### 属性说明
任务描述

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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-预计开始（ESTSTARTED）
#### 属性说明
预计开始

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-截止日期（DEADLINE）
#### 属性说明
截止日期

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-抄送给（MAILTO）
#### 属性说明
抄送给

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-总计消耗（CONSUMED）
#### 属性说明
总计消耗

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-最初预计（ESTIMATE）
#### 属性说明
最初预计

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-取消时间（CANCELEDDATE）
#### 属性说明
取消时间

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-实际完成（FINISHEDDATE）
#### 属性说明
实际完成

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属模块（MODULENAME）
#### 属性说明
所属模块

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-相关需求（STORYNAME）
#### 属性说明
相关需求

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

### 属性-所属项目（PROJECTNAME）
#### 属性说明
所属项目

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品（PRODUCT）
#### 属性说明
产品

#### 属性类型
链接字段[来自关系实体字段]

#### 数据类型
外键值附加数据

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [所属产品（PRODUCT）](../zentao/Story/#属性-所属产品（PRODUCT）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求版本（STORYVERSION）
#### 属性说明
半物理字段，且通过确认需求变更操作进行变动

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值附加数据

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [版本号（VERSION）](../zentao/Story/#属性-版本号（VERSION）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品（PRODUCTNAME）
#### 属性说明
产品

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [产品名称（PRODOCTNAME）](../zentao/Story/#属性-产品名称（PRODOCTNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父任务（PARENTNAME）
#### 属性说明
父任务

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务名称（NAME）](../zentao/Task/#属性-任务名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属项目（PROJECT）
#### 属性说明
所属项目

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-相关需求（STORY）
#### 属性说明
相关需求

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

### 属性-父任务（PARENT）
#### 属性说明
父任务

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
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

### 属性-持续时间（DURATION）
#### 属性说明
持续时间

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
(To_Days(%1$s)-To_Days(%2$s))

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-id（MODULE）
#### 属性说明
id

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [id（ID）](../ibiz/ProjectModule/#属性-id（ID）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-本次消耗（CURRENTCONSUMED）
#### 属性说明
本次消耗

#### 属性类型
应用界面字段[无存储]

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-总计耗时（TOTALTIME）
#### 属性说明
完成界面，临时界面属性

#### 属性类型
应用界面字段[无存储]

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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否子任务（ISLEAF）
#### 属性说明
是否子任务

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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = %1$s AND DELETED = '0') THEN FALSE ELSE TRUE  END )

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所有模块（ALLMODULES）
#### 属性说明
所有模块

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
| 值 | 1 |

#### 取值范围/公式
参照数据字典【[是否（YesNo）](../../codelist/YesNo)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-多人任务（MULTIPLE）
#### 属性说明
多人任务

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
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-项目团队成员（TASKTEAMS）
#### 属性说明
项目团队成员

#### 属性类型
应用界面字段[无存储]

#### 数据类型
一对多关系数据集合

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属模块（MODULENAME1）
#### 属性说明
所属模块

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
(case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-工时（IBZTASKESTIMATES）
#### 属性说明
工时

#### 属性类型
应用界面字段[无存储]

#### 数据类型
一对多关系数据集合

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-任务状态（STATUS1）
#### 属性说明
任务状态

#### 属性类型
逻辑字段[来自计算式]

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
参照数据字典【[任务状态（查看）（TaskStatusCK）](../../codelist/TaskStatusCK)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-任务类型（TASKTYPE）
#### 属性说明
任务类型

#### 属性类型
逻辑字段[来自计算式]

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
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-团队用户（USERNAMES）
#### 属性说明
团队用户

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否完成（ISFINISHED）
#### 属性说明
是否完成

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-回复数量（REPLYCOUNT）
#### 属性说明
回复数量

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否填写描述（HASDETAIL）
#### 属性说明
是否填写描述

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |


## 业务状态
| 序号 | 状态名称 | [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 默认 |
| -- | -- | -- | -- | -- | -- |
| 1 | [已取消_未收藏_多人任务](#业务状态-已取消_未收藏_多人任务（cancel_0_10）) | cancel | 0 | 10 | 否 |
| 2 | [已取消_未收藏_父任务](#业务状态-已取消_未收藏_父任务（cancel_0_20）) | cancel | 0 | 20 | 否 |
| 3 | [已取消_未收藏_常规任务](#业务状态-已取消_未收藏_常规任务（cancel_0_30）) | cancel | 0 | 30 | 否 |
| 4 | [已取消_未收藏_子任务](#业务状态-已取消_未收藏_子任务（cancel_0_40）) | cancel | 0 | 40 | 否 |
| 5 | [已取消_已收藏_多人任务](#业务状态-已取消_已收藏_多人任务（cancel_1_10）) | cancel | 1 | 10 | 否 |
| 6 | [已取消_已收藏_父任务](#业务状态-已取消_已收藏_父任务（cancel_1_20）) | cancel | 1 | 20 | 否 |
| 7 | [已取消_已收藏_常规任务](#业务状态-已取消_已收藏_常规任务（cancel_1_30）) | cancel | 1 | 30 | 否 |
| 8 | [已取消_已收藏_子任务](#业务状态-已取消_已收藏_子任务（cancel_1_40）) | cancel | 1 | 40 | 否 |
| 9 | [已关闭_未收藏_多人任务](#业务状态-已关闭_未收藏_多人任务（closed_0_10）) | closed | 0 | 10 | 否 |
| 10 | [已关闭_未收藏_父任务](#业务状态-已关闭_未收藏_父任务（closed_0_20）) | closed | 0 | 20 | 否 |
| 11 | [已关闭_未收藏_常规任务](#业务状态-已关闭_未收藏_常规任务（closed_0_30）) | closed | 0 | 30 | 否 |
| 12 | [已关闭_未收藏_子任务](#业务状态-已关闭_未收藏_子任务（closed_0_40）) | closed | 0 | 40 | 否 |
| 13 | [已关闭_已收藏_多人任务](#业务状态-已关闭_已收藏_多人任务（closed_1_10）) | closed | 1 | 10 | 否 |
| 14 | [已关闭_已收藏_父任务](#业务状态-已关闭_已收藏_父任务（closed_1_20）) | closed | 1 | 20 | 否 |
| 15 | [已关闭_已收藏_常规任务](#业务状态-已关闭_已收藏_常规任务（closed_1_30）) | closed | 1 | 30 | 否 |
| 16 | [已关闭_已收藏_子任务](#业务状态-已关闭_已收藏_子任务（closed_1_40）) | closed | 1 | 40 | 否 |
| 17 | [进行中_未收藏_多人任务](#业务状态-进行中_未收藏_多人任务（doing_0_10）) | doing | 0 | 10 | 否 |
| 18 | [进行中_未收藏_父任务](#业务状态-进行中_未收藏_父任务（doing_0_20）) | doing | 0 | 20 | 否 |
| 19 | [进行中_未收藏_常规任务](#业务状态-进行中_未收藏_常规任务（doing_0_30）) | doing | 0 | 30 | 否 |
| 20 | [进行中_未收藏_子任务](#业务状态-进行中_未收藏_子任务（doing_0_40）) | doing | 0 | 40 | 否 |
| 21 | [进行中_已收藏_多人任务](#业务状态-进行中_已收藏_多人任务（doing_1_10）) | doing | 1 | 10 | 否 |
| 22 | [进行中_已收藏_父任务](#业务状态-进行中_已收藏_父任务（doing_1_20）) | doing | 1 | 20 | 否 |
| 23 | [进行中_已收藏_常规任务](#业务状态-进行中_已收藏_常规任务（doing_1_30）) | doing | 1 | 30 | 否 |
| 24 | [进行中_已收藏_子任务](#业务状态-进行中_已收藏_子任务（doing_1_40）) | doing | 1 | 40 | 否 |
| 25 | [已完成_未收藏_多人任务](#业务状态-已完成_未收藏_多人任务（done_0_10）) | done | 0 | 10 | 否 |
| 26 | [已完成_未收藏_父任务](#业务状态-已完成_未收藏_父任务（done_0_20）) | done | 0 | 20 | 否 |
| 27 | [已完成_未收藏_常规任务](#业务状态-已完成_未收藏_常规任务（done_0_30）) | done | 0 | 30 | 否 |
| 28 | [已完成_未收藏_子任务](#业务状态-已完成_未收藏_子任务（done_0_40）) | done | 0 | 40 | 否 |
| 29 | [已完成_已收藏_多人任务](#业务状态-已完成_已收藏_多人任务（done_1_10）) | done | 1 | 10 | 否 |
| 30 | [已完成_已收藏_父任务](#业务状态-已完成_已收藏_父任务（done_1_20）) | done | 1 | 20 | 否 |
| 31 | [已完成_已收藏_常规任务](#业务状态-已完成_已收藏_常规任务（done_1_30）) | done | 1 | 30 | 否 |
| 32 | [已完成_已收藏_子任务](#业务状态-已完成_已收藏_子任务（done_1_40）) | done | 1 | 40 | 否 |
| 33 | [已暂停_未收藏_多人任务](#业务状态-已暂停_未收藏_多人任务（pause_0_10）) | pause | 0 | 10 | 否 |
| 34 | [已暂停_未收藏_父任务](#业务状态-已暂停_未收藏_父任务（pause_0_20）) | pause | 0 | 20 | 否 |
| 35 | [已暂停_未收藏_常规任务](#业务状态-已暂停_未收藏_常规任务（pause_0_30）) | pause | 0 | 30 | 否 |
| 36 | [已暂停_未收藏_子任务](#业务状态-已暂停_未收藏_子任务（pause_0_40）) | pause | 0 | 40 | 否 |
| 37 | [已暂停_已收藏_多人任务](#业务状态-已暂停_已收藏_多人任务（pause_1_10）) | pause | 1 | 10 | 否 |
| 38 | [已暂停_已收藏_父任务](#业务状态-已暂停_已收藏_父任务（pause_1_20）) | pause | 1 | 20 | 否 |
| 39 | [已暂停_已收藏_常规任务](#业务状态-已暂停_已收藏_常规任务（pause_1_30）) | pause | 1 | 30 | 否 |
| 40 | [已暂停_已收藏_子任务](#业务状态-已暂停_已收藏_子任务（pause_1_40）) | pause | 1 | 40 | 否 |
| 41 | [需求变更_未收藏_多人任务](#业务状态-需求变更_未收藏_多人任务（storychange_0_10）) | storychange | 0 | 10 | 否 |
| 42 | [需求变更_未收藏_父任务](#业务状态-需求变更_未收藏_父任务（storychange_0_20）) | storychange | 0 | 20 | 否 |
| 43 | [需求变更_未收藏_常规任务](#业务状态-需求变更_未收藏_常规任务（storychange_0_30）) | storychange | 0 | 30 | 否 |
| 44 | [需求变更_未收藏_子任务](#业务状态-需求变更_未收藏_子任务（storychange_0_40）) | storychange | 0 | 40 | 否 |
| 45 | [需求变更_已收藏_多人任务](#业务状态-需求变更_已收藏_多人任务（storychange_1_10）) | storychange | 1 | 10 | 否 |
| 46 | [需求变更_已收藏_父任务](#业务状态-需求变更_已收藏_父任务（storychange_1_20）) | storychange | 1 | 20 | 否 |
| 47 | [需求变更_已收藏_常规任务](#业务状态-需求变更_已收藏_常规任务（storychange_1_30）) | storychange | 1 | 30 | 否 |
| 48 | [需求变更_已收藏_子任务](#业务状态-需求变更_已收藏_子任务（storychange_1_40）) | storychange | 1 | 40 | 否 |
| 49 | [未进行_未收藏_多人任务](#业务状态-未进行_未收藏_多人任务（wait_0_10）) | wait | 0 | 10 | 否 |
| 50 | [未进行_未收藏_父任务](#业务状态-未进行_未收藏_父任务（wait_0_20）) | wait | 0 | 20 | 否 |
| 51 | [未进行_未收藏_常规任务](#业务状态-未进行_未收藏_常规任务（wait_0_30）) | wait | 0 | 30 | 否 |
| 52 | [未进行_未收藏_子任务](#业务状态-未进行_未收藏_子任务（wait_0_40）) | wait | 0 | 40 | 否 |
| 53 | [未进行_已收藏_多人任务](#业务状态-未进行_已收藏_多人任务（wait_1_10）) | wait | 1 | 10 | 否 |
| 54 | [未进行_已收藏_父任务](#业务状态-未进行_已收藏_父任务（wait_1_20）) | wait | 1 | 20 | 否 |
| 55 | [未进行_已收藏_常规任务](#业务状态-未进行_已收藏_常规任务（wait_1_30）) | wait | 1 | 30 | 否 |
| 56 | [未进行_已收藏_子任务](#业务状态-未进行_已收藏_子任务（wait_1_40）) | wait | 1 | 40 | 否 |
### 业务状态-已取消_未收藏_多人任务（cancel_0_10）
#### 说明
已取消_未收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 3 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 6 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 7 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 8 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-已取消_未收藏_父任务（cancel_0_20）
#### 说明
已取消_未收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 3 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 8 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 9 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 10 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 11 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 12 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 13 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已取消_未收藏_常规任务（cancel_0_30）
#### 说明
已取消_未收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [GetDraft](#实体行为-GetDraft（GetDraft）)<br>（GetDraft） |
| 2 | [Create](#实体行为-Create（Create）)<br>（Create） |
| 3 | [计算总耗时](#实体行为-计算总耗时（CalcTime）)<br>（CalcTime） |
| 4 | [删除工时](#实体行为-删除工时（DeleteEstimate）)<br>（DeleteEstimate） |
| 5 | [编辑工时](#实体行为-编辑工时（EditEstimate）)<br>（EditEstimate） |
| 6 | [工时录入](#实体行为-工时录入（RecordEstimate）)<br>（RecordEstimate） |
| 7 | [关闭](#实体行为-关闭（Close）)<br>（Close） |
| 8 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 9 | [UpdateTemp](#实体行为-UpdateTemp（UpdateTemp）)<br>（UpdateTemp） |
| 10 | [GetDraftTempMajor](#实体行为-GetDraftTempMajor（GetDraftTempMajor）)<br>（GetDraftTempMajor） |
| 11 | [GetTemp](#实体行为-GetTemp（GetTemp）)<br>（GetTemp） |
| 12 | [RemoveTemp](#实体行为-RemoveTemp（RemoveTemp）)<br>（RemoveTemp） |
| 13 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 14 | [继续](#实体行为-继续（Restart）)<br>（Restart） |
| 15 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 16 | [激活](#实体行为-激活（Activate）)<br>（Activate） |
| 17 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 18 | [指派/转交](#实体行为-指派/转交（AssignTo）)<br>（AssignTo） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 3 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 4 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 5 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-已取消_未收藏_子任务（cancel_0_40）
#### 说明
已取消_未收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 10 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
### 业务状态-已取消_已收藏_多人任务（cancel_1_10）
#### 说明
已取消_已收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 5 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 6 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
### 业务状态-已取消_已收藏_父任务（cancel_1_20）
#### 说明
已取消_已收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 5 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 8 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 9 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 12 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 13 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
### 业务状态-已取消_已收藏_常规任务（cancel_1_30）
#### 说明
已取消_已收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 2 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 3 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 4 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 5 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 8 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 9 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-已取消_已收藏_子任务（cancel_1_40）
#### 说明
已取消_已收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 2 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 3 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 4 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 5 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 6 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 7 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 8 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
### 业务状态-已关闭_未收藏_多人任务（closed_0_10）
#### 说明
已关闭_未收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 5 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 6 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 11 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
### 业务状态-已关闭_未收藏_父任务（closed_0_20）
#### 说明
已关闭_未收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 2 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 5 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 6 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 7 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 8 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 9 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 10 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 11 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 12 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 13 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
### 业务状态-已关闭_未收藏_常规任务（closed_0_30）
#### 说明
已关闭_未收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [激活](#实体行为-激活（Activate）)<br>（Activate） |
| 2 | [编辑工时](#实体行为-编辑工时（EditEstimate）)<br>（EditEstimate） |
| 3 | [删除工时](#实体行为-删除工时（DeleteEstimate）)<br>（DeleteEstimate） |
| 4 | [工时录入](#实体行为-工时录入（RecordEstimate）)<br>（RecordEstimate） |
| 5 | [指派/转交](#实体行为-指派/转交（AssignTo）)<br>（AssignTo） |
| 6 | [GetTemp](#实体行为-GetTemp（GetTemp）)<br>（GetTemp） |
| 7 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 8 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 9 | [GetDraftTempMajor](#实体行为-GetDraftTempMajor（GetDraftTempMajor）)<br>（GetDraftTempMajor） |
| 10 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 11 | [RemoveTemp](#实体行为-RemoveTemp（RemoveTemp）)<br>（RemoveTemp） |
| 12 | [GetDraft](#实体行为-GetDraft（GetDraft）)<br>（GetDraft） |
| 13 | [计算总耗时](#实体行为-计算总耗时（CalcTime）)<br>（CalcTime） |
| 14 | [Create](#实体行为-Create（Create）)<br>（Create） |
| 15 | [继续](#实体行为-继续（Restart）)<br>（Restart） |
| 16 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 17 | [UpdateTemp](#实体行为-UpdateTemp（UpdateTemp）)<br>（UpdateTemp） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-已关闭_未收藏_子任务（closed_0_40）
#### 说明
已关闭_未收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 2 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
### 业务状态-已关闭_已收藏_多人任务（closed_1_10）
#### 说明
已关闭_已收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 2 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 8 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 10 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 11 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已关闭_已收藏_父任务（closed_1_20）
#### 说明
已关闭_已收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 3 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 4 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 12 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 13 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-已关闭_已收藏_常规任务（closed_1_30）
#### 说明
已关闭_已收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已关闭_已收藏_子任务（closed_1_40）
#### 说明
已关闭_已收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 4 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 10 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 11 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
### 业务状态-进行中_未收藏_多人任务（doing_0_10）
#### 说明
进行中_未收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 6 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 7 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-进行中_未收藏_父任务（doing_0_20）
#### 说明
进行中_未收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 3 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 4 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 5 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 9 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 10 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 11 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 12 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 13 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
### 业务状态-进行中_未收藏_常规任务（doing_0_30）
#### 说明
进行中_未收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 2 | [暂停](#实体行为-暂停（Pause）)<br>（Pause） |
| 3 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 4 | [指派/转交](#实体行为-指派/转交（AssignTo）)<br>（AssignTo） |
| 5 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 6 | [UpdateTemp](#实体行为-UpdateTemp（UpdateTemp）)<br>（UpdateTemp） |
| 7 | [计算总耗时](#实体行为-计算总耗时（CalcTime）)<br>（CalcTime） |
| 8 | [GetTemp](#实体行为-GetTemp（GetTemp）)<br>（GetTemp） |
| 9 | [继续](#实体行为-继续（Restart）)<br>（Restart） |
| 10 | [Create](#实体行为-Create（Create）)<br>（Create） |
| 11 | [工时录入](#实体行为-工时录入（RecordEstimate）)<br>（RecordEstimate） |
| 12 | [关闭](#实体行为-关闭（Close）)<br>（Close） |
| 13 | [RemoveTemp](#实体行为-RemoveTemp（RemoveTemp）)<br>（RemoveTemp） |
| 14 | [取消](#实体行为-取消（Cancel）)<br>（Cancel） |
| 15 | [删除工时](#实体行为-删除工时（DeleteEstimate）)<br>（DeleteEstimate） |
| 16 | [GetDraftTempMajor](#实体行为-GetDraftTempMajor（GetDraftTempMajor）)<br>（GetDraftTempMajor） |
| 17 | [完成](#实体行为-完成（Finish）)<br>（Finish） |
| 18 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 19 | [GetDraft](#实体行为-GetDraft（GetDraft）)<br>（GetDraft） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 4 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 5 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-进行中_未收藏_子任务（doing_0_40）
#### 说明
进行中_未收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 2 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 5 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 8 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
### 业务状态-进行中_已收藏_多人任务（doing_1_10）
#### 说明
进行中_已收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 5 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 6 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 7 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
### 业务状态-进行中_已收藏_父任务（doing_1_20）
#### 说明
进行中_已收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 4 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 11 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 12 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 13 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
### 业务状态-进行中_已收藏_常规任务（doing_1_30）
#### 说明
进行中_已收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 5 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-进行中_已收藏_子任务（doing_1_40）
#### 说明
进行中_已收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 4 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 5 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 6 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 7 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 8 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
### 业务状态-已完成_未收藏_多人任务（done_0_10）
#### 说明
已完成_未收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-已完成_未收藏_父任务（done_0_20）
#### 说明
已完成_未收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 3 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 4 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 9 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 10 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 11 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 12 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 13 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已完成_未收藏_常规任务（done_0_30）
#### 说明
已完成_未收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [RemoveTemp](#实体行为-RemoveTemp（RemoveTemp）)<br>（RemoveTemp） |
| 2 | [指派/转交](#实体行为-指派/转交（AssignTo）)<br>（AssignTo） |
| 3 | [删除工时](#实体行为-删除工时（DeleteEstimate）)<br>（DeleteEstimate） |
| 4 | [激活](#实体行为-激活（Activate）)<br>（Activate） |
| 5 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 6 | [GetDraft](#实体行为-GetDraft（GetDraft）)<br>（GetDraft） |
| 7 | [继续](#实体行为-继续（Restart）)<br>（Restart） |
| 8 | [GetTemp](#实体行为-GetTemp（GetTemp）)<br>（GetTemp） |
| 9 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 10 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 11 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 12 | [编辑工时](#实体行为-编辑工时（EditEstimate）)<br>（EditEstimate） |
| 13 | [工时录入](#实体行为-工时录入（RecordEstimate）)<br>（RecordEstimate） |
| 14 | [Create](#实体行为-Create（Create）)<br>（Create） |
| 15 | [关闭](#实体行为-关闭（Close）)<br>（Close） |
| 16 | [GetDraftTempMajor](#实体行为-GetDraftTempMajor（GetDraftTempMajor）)<br>（GetDraftTempMajor） |
| 17 | [UpdateTemp](#实体行为-UpdateTemp（UpdateTemp）)<br>（UpdateTemp） |
| 18 | [计算总耗时](#实体行为-计算总耗时（CalcTime）)<br>（CalcTime） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已完成_未收藏_子任务（done_0_40）
#### 说明
已完成_未收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-已完成_已收藏_多人任务（done_1_10）
#### 说明
已完成_已收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 3 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 7 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-已完成_已收藏_父任务（done_1_20）
#### 说明
已完成_已收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 5 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 6 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 7 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 11 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 12 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 13 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已完成_已收藏_常规任务（done_1_30）
#### 说明
已完成_已收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 2 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 5 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 6 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-已完成_已收藏_子任务（done_1_40）
#### 说明
已完成_已收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-已暂停_未收藏_多人任务（pause_0_10）
#### 说明
已暂停_未收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 5 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 6 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 7 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 8 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-已暂停_未收藏_父任务（pause_0_20）
#### 说明
已暂停_未收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 3 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 4 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 5 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 6 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 11 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 12 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 13 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
### 业务状态-已暂停_未收藏_常规任务（pause_0_30）
#### 说明
已暂停_未收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [GetTemp](#实体行为-GetTemp（GetTemp）)<br>（GetTemp） |
| 2 | [编辑工时](#实体行为-编辑工时（EditEstimate）)<br>（EditEstimate） |
| 3 | [工时录入](#实体行为-工时录入（RecordEstimate）)<br>（RecordEstimate） |
| 4 | [GetDraft](#实体行为-GetDraft（GetDraft）)<br>（GetDraft） |
| 5 | [Create](#实体行为-Create（Create）)<br>（Create） |
| 6 | [关闭](#实体行为-关闭（Close）)<br>（Close） |
| 7 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 8 | [GetDraftTempMajor](#实体行为-GetDraftTempMajor（GetDraftTempMajor）)<br>（GetDraftTempMajor） |
| 9 | [继续](#实体行为-继续（Restart）)<br>（Restart） |
| 10 | [取消](#实体行为-取消（Cancel）)<br>（Cancel） |
| 11 | [完成](#实体行为-完成（Finish）)<br>（Finish） |
| 12 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 13 | [RemoveTemp](#实体行为-RemoveTemp（RemoveTemp）)<br>（RemoveTemp） |
| 14 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 15 | [UpdateTemp](#实体行为-UpdateTemp（UpdateTemp）)<br>（UpdateTemp） |
| 16 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 17 | [计算总耗时](#实体行为-计算总耗时（CalcTime）)<br>（CalcTime） |
| 18 | [删除工时](#实体行为-删除工时（DeleteEstimate）)<br>（DeleteEstimate） |
| 19 | [指派/转交](#实体行为-指派/转交（AssignTo）)<br>（AssignTo） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-已暂停_未收藏_子任务（pause_0_40）
#### 说明
已暂停_未收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 5 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 8 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
### 业务状态-已暂停_已收藏_多人任务（pause_1_10）
#### 说明
已暂停_已收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已暂停_已收藏_父任务（pause_1_20）
#### 说明
已暂停_已收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 3 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 4 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 5 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 8 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 11 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 12 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 13 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
### 业务状态-已暂停_已收藏_常规任务（pause_1_30）
#### 说明
已暂停_已收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 2 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 5 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
### 业务状态-已暂停_已收藏_子任务（pause_1_40）
#### 说明
已暂停_已收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 4 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 5 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 6 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
### 业务状态-需求变更_未收藏_多人任务（storychange_0_10）
#### 说明
需求变更_未收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 8 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 9 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 12 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-需求变更_未收藏_父任务（storychange_0_20）
#### 说明
需求变更_未收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 3 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 4 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 11 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 12 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 13 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 14 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-需求变更_未收藏_常规任务（storychange_0_30）
#### 说明
需求变更_未收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 4 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 12 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
### 业务状态-需求变更_未收藏_子任务（storychange_0_40）
#### 说明
需求变更_未收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 9 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 12 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
### 业务状态-需求变更_已收藏_多人任务（storychange_1_10）
#### 说明
需求变更_已收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 2 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 5 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 10 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 11 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 12 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
### 业务状态-需求变更_已收藏_父任务（storychange_1_20）
#### 说明
需求变更_已收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 2 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 10 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 11 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 12 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 13 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 14 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
### 业务状态-需求变更_已收藏_常规任务（storychange_1_30）
#### 说明
需求变更_已收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 2 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 6 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 7 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 10 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 11 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 12 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
### 业务状态-需求变更_已收藏_子任务（storychange_1_40）
#### 说明
需求变更_已收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 3 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 4 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 10 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 11 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 12 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
### 业务状态-未进行_未收藏_多人任务（wait_0_10）
#### 说明
未进行_未收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 2 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-未进行_未收藏_父任务（wait_0_20）
#### 说明
未进行_未收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 3 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 4 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 7 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 10 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 11 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 12 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 13 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
### 业务状态-未进行_未收藏_常规任务（wait_0_30）
#### 说明
未进行_未收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [工时录入](#实体行为-工时录入（RecordEstimate）)<br>（RecordEstimate） |
| 2 | [UpdateTemp](#实体行为-UpdateTemp（UpdateTemp）)<br>（UpdateTemp） |
| 3 | [RemoveTemp](#实体行为-RemoveTemp（RemoveTemp）)<br>（RemoveTemp） |
| 4 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 5 | [GetDraftTempMajor](#实体行为-GetDraftTempMajor（GetDraftTempMajor）)<br>（GetDraftTempMajor） |
| 6 | [编辑工时](#实体行为-编辑工时（EditEstimate）)<br>（EditEstimate） |
| 7 | [计算总耗时](#实体行为-计算总耗时（CalcTime）)<br>（CalcTime） |
| 8 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |
| 9 | [Create](#实体行为-Create（Create）)<br>（Create） |
| 10 | [激活](#实体行为-激活（Activate）)<br>（Activate） |
| 11 | [继续](#实体行为-继续（Restart）)<br>（Restart） |
| 12 | [GetDraft](#实体行为-GetDraft（GetDraft）)<br>（GetDraft） |
| 13 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 14 | [取消](#实体行为-取消（Cancel）)<br>（Cancel） |
| 15 | [开始](#实体行为-开始（Start）)<br>（Start） |
| 16 | [关闭](#实体行为-关闭（Close）)<br>（Close） |
| 17 | [删除工时](#实体行为-删除工时（DeleteEstimate）)<br>（DeleteEstimate） |
| 18 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 19 | [GetTemp](#实体行为-GetTemp（GetTemp）)<br>（GetTemp） |
| 20 | [指派/转交](#实体行为-指派/转交（AssignTo）)<br>（AssignTo） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-未进行_未收藏_子任务（wait_0_40）
#### 说明
未进行_未收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 3 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 7 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 8 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-未进行_已收藏_多人任务（wait_1_10）
#### 说明
未进行_已收藏_多人任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 2 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 3 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 4 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 5 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-未进行_已收藏_父任务（wait_1_20）
#### 说明
未进行_已收藏_父任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 2 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 7 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 8 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 11 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 12 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 13 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
### 业务状态-未进行_已收藏_常规任务（wait_1_30）
#### 说明
未进行_已收藏_常规任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 6 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-未进行_已收藏_子任务（wait_1_40）
#### 说明
未进行_已收藏_子任务

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| -- | -- | -- | -- | -- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [CreateTemp](#实体行为-CreateTemp（CreateTemp）) | CreateTemp | 内置方法 | 前台 |
| 3 | [CreateTempMajor](#实体行为-CreateTempMajor（CreateTempMajor）) | CreateTempMajor | 内置方法 | 前台 |
| 4 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 5 | [UpdateTemp](#实体行为-UpdateTemp（UpdateTemp）) | UpdateTemp | 内置方法 | 前台 |
| 6 | [UpdateTempMajor](#实体行为-UpdateTempMajor（UpdateTempMajor）) | UpdateTempMajor | 内置方法 | 前台 |
| 7 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 8 | [RemoveTemp](#实体行为-RemoveTemp（RemoveTemp）) | RemoveTemp | 内置方法 | 前台 |
| 9 | [RemoveTempMajor](#实体行为-RemoveTempMajor（RemoveTempMajor）) | RemoveTempMajor | 内置方法 | 前台 |
| 10 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 11 | [GetTemp](#实体行为-GetTemp（GetTemp）) | GetTemp | 内置方法 | 前台 |
| 12 | [GetTempMajor](#实体行为-GetTempMajor（GetTempMajor）) | GetTempMajor | 内置方法 | 前台 |
| 13 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 14 | [GetDraftTemp](#实体行为-GetDraftTemp（GetDraftTemp）) | GetDraftTemp | 内置方法 | 前台 |
| 15 | [GetDraftTempMajor](#实体行为-GetDraftTempMajor（GetDraftTempMajor）) | GetDraftTempMajor | 内置方法 | 前台 |
| 16 | [激活](#实体行为-激活（Activate）) | Activate | 用户自定义 | 后台及前台 |
| 17 | [指派/转交](#实体行为-指派/转交（AssignTo）) | AssignTo | 用户自定义 | 后台及前台 |
| 18 | [计算总耗时](#实体行为-计算总耗时（CalcTime）) | CalcTime | 用户自定义 | 前台 |
| 19 | [取消](#实体行为-取消（Cancel）) | Cancel | 用户自定义 | 后台及前台 |
| 20 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 21 | [关闭](#实体行为-关闭（Close）) | Close | 用户自定义 | 后台及前台 |
| 22 | [需求变更确认](#实体行为-需求变更确认（ConfirmStoryChange）) | ConfirmStoryChange | 用户自定义 | 后台及前台 |
| 23 | [删除工时](#实体行为-删除工时（DeleteEstimate）) | DeleteEstimate | 用户自定义 | 后台及前台 |
| 24 | [编辑工时](#实体行为-编辑工时（EditEstimate）) | EditEstimate | 用户自定义 | 后台及前台 |
| 25 | [完成](#实体行为-完成（Finish）) | Finish | 用户自定义 | 后台及前台 |
| 26 | [获取团队成员](#实体行为-获取团队成员（getUsernames）) | getUsernames | 实体处理逻辑 | 后台 |
| 27 | [其他更新](#实体行为-其他更新（OtherUpdate）) | OtherUpdate | 用户自定义 | 后台及前台 |
| 28 | [暂停](#实体行为-暂停（Pause）) | Pause | 用户自定义 | 后台及前台 |
| 29 | [工时录入](#实体行为-工时录入（RecordEstimate）) | RecordEstimate | 用户自定义 | 后台及前台 |
| 30 | [继续](#实体行为-继续（Restart）) | Restart | 用户自定义 | 后台及前台 |
| 31 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 32 | [行为](#实体行为-行为（sendMessage）) | sendMessage | 用户自定义 | 后台及前台 |
| 33 | [发送消息前置处理](#实体行为-发送消息前置处理（sendMsgPreProcess）) | sendMsgPreProcess | 用户自定义 | 后台及前台 |
| 34 | [开始](#实体行为-开始（Start）) | Start | 用户自定义 | 后台及前台 |
| 35 | [任务收藏](#实体行为-任务收藏（TaskFavorites）) | TaskFavorites | 实体处理逻辑 | 后台 |
| 36 | [检查多人任务操作权限](#实体行为-检查多人任务操作权限（taskForward）) | taskForward | 用户自定义 | 后台及前台 |
| 37 | [任务收藏](#实体行为-任务收藏（TaskNFavorites）) | TaskNFavorites | 实体处理逻辑 | 后台 |
| 38 | [更新需求版本](#实体行为-更新需求版本（updateStoryVersion）) | updateStoryVersion | 实体处理逻辑 | 后台 |
### 实体行为-Create（Create）
#### 说明
Create

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-CreateTemp（CreateTemp）
#### 说明
CreateTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-CreateTempMajor（CreateTempMajor）
#### 说明
CreateTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-Update（Update）
#### 说明
Update

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-UpdateTemp（UpdateTemp）
#### 说明
UpdateTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-UpdateTempMajor（UpdateTempMajor）
#### 说明
UpdateTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-Remove（Remove）
#### 说明
Remove

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-RemoveTemp（RemoveTemp）
#### 说明
RemoveTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-RemoveTempMajor（RemoveTempMajor）
#### 说明
RemoveTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-Get（Get）
#### 说明
Get

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-GetTemp（GetTemp）
#### 说明
GetTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-GetTempMajor（GetTempMajor）
#### 说明
GetTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-GetDraftTemp（GetDraftTemp）
#### 说明
GetDraftTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-GetDraftTempMajor（GetDraftTempMajor）
#### 说明
GetDraftTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-激活（Activate）
#### 说明
激活完成、取消、关闭的任务

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-指派/转交（AssignTo）
#### 说明
单人任务指派任务 & 多人任务时转交任务

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-计算总耗时（CalcTime）
#### 说明
之前消耗：consumed + 本次消耗：currentConsumed = 总耗时：totalTime

#### 行为类型
用户自定义

#### 行为持有者
前台

### 实体行为-取消（Cancel）
#### 说明
取消

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
关闭

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-需求变更确认（ConfirmStoryChange）
#### 说明
需求变更确认

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-删除工时（DeleteEstimate）
#### 说明
删除工时

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-编辑工时（EditEstimate）
#### 说明
编辑工时

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-完成（Finish）
#### 说明
完成

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-获取团队成员（getUsernames）
#### 说明
获取团队成员

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

### 实体行为-其他更新（OtherUpdate）
#### 说明
其他更新

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-暂停（Pause）
#### 说明
暂停

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-工时录入（RecordEstimate）
#### 说明
工时录入

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-继续（Restart）
#### 说明
重启挂起的任务

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

### 实体行为-开始（Start）
#### 说明
开始

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-任务收藏（TaskFavorites）
#### 说明
FAVORITES

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

### 实体行为-检查多人任务操作权限（taskForward）
#### 说明
检查多人任务操作权限

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

### 实体行为-任务收藏（TaskNFavorites）
#### 说明
FAVORITES

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

### 实体行为-更新需求版本（updateStoryVersion）
#### 说明
更新需求版本

#### 行为类型
实体处理逻辑

#### 行为持有者
后台



