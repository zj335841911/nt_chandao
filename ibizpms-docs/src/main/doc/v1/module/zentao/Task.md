# 实体-任务(ZT_TASK)
## 实体说明
任务

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [由谁取消](#属性-由谁取消（CANCELEDBY）) | CANCELEDBY | SSCODELIST | 否 | 否 | 是 | -- |
| 2 | [预计剩余](#属性-预计剩余（LEFT）) | LEFT | FLOAT | 否 | 否 | 是 | -- |
| 3 | [创建日期](#属性-创建日期（OPENEDDATE）) | OPENEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 4 | [标题颜色](#属性-标题颜色（COLOR）) | COLOR | SSCODELIST | 否 | 否 | 是 | -- |
| 5 | [编号](#属性-编号（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 6 | [由谁完成](#属性-由谁完成（FINISHEDBY）) | FINISHEDBY | SSCODELIST | 否 | 否 | 是 | -- |
| 7 | [完成者列表](#属性-完成者列表（FINISHEDLIST）) | FINISHEDLIST | LONGTEXT | 否 | 否 | 是 | -- |
| 8 | [实际开始](#属性-实际开始（REALSTARTED）) | REALSTARTED | DATE | 否 | 否 | 是 | -- |
| 9 | [由谁关闭](#属性-由谁关闭（CLOSEDBY）) | CLOSEDBY | SSCODELIST | 否 | 否 | 是 | -- |
| 10 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | TEXT | 否 | 否 | 是 | -- |
| 11 | [关闭原因](#属性-关闭原因（CLOSEDREASON）) | CLOSEDREASON | SSCODELIST | 否 | 否 | 是 | -- |
| 12 | [最后修改日期](#属性-最后修改日期（LASTEDITEDDATE）) | LASTEDITEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 13 | [指派日期](#属性-指派日期（ASSIGNEDDATE）) | ASSIGNEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 14 | [优先级](#属性-优先级（PRI）) | PRI | NSCODELIST | 否 | 否 | 是 | -- |
| 15 | [最后修改](#属性-最后修改（LASTEDITEDBY）) | LASTEDITEDBY | SSCODELIST | 否 | 否 | 是 | -- |
| 16 | [任务状态](#属性-任务状态（STATUS）) | STATUS | SSCODELIST | 否 | 否 | 是 | -- |
| 17 | [任务名称](#属性-任务名称（NAME）) | NAME | TEXT | 否 | 否 | 否 | -- |
| 18 | [关闭时间](#属性-关闭时间（CLOSEDDATE）) | CLOSEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 19 | [任务类型](#属性-任务类型（TYPE）) | TYPE | SSCODELIST | 否 | 否 | 是 | -- |
| 20 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | TEXT | 否 | 否 | 是 | -- |
| 21 | [任务描述](#属性-任务描述（DESC）) | DESC | LONGTEXT | 否 | 否 | 是 | -- |
| 22 | [预计开始](#属性-预计开始（ESTSTARTED）) | ESTSTARTED | DATE | 否 | 否 | 是 | -- |
| 23 | [截止日期](#属性-截止日期（DEADLINE）) | DEADLINE | DATE | 否 | 否 | 是 | -- |
| 24 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 否 | 是 | -- |
| 25 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | LONGTEXT | 否 | 否 | 是 | -- |
| 26 | [总计消耗](#属性-总计消耗（CONSUMED）) | CONSUMED | FLOAT | 否 | 否 | 是 | -- |
| 27 | [最初预计](#属性-最初预计（ESTIMATE）) | ESTIMATE | FLOAT | 否 | 否 | 是 | -- |
| 28 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | SSCODELIST | 否 | 否 | 是 | -- |
| 29 | [取消时间](#属性-取消时间（CANCELEDDATE）) | CANCELEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 30 | [实际完成](#属性-实际完成（FINISHEDDATE）) | FINISHEDDATE | DATE | 否 | 否 | 是 | -- |
| 31 | [所属模块](#属性-所属模块（MODULENAME）) | MODULENAME | PICKUPTEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 32 | [相关需求](#属性-相关需求（STORYNAME）) | STORYNAME | PICKUPTEXT | 否 | 是 | 是 | [需求（ZT_STORY）](../zentao/Story) - [需求名称（TITLE）](../zentao/Story/#属性-需求名称（TITLE）) |
| 33 | [所属项目](#属性-所属项目（PROJECTNAME）) | PROJECTNAME | PICKUPTEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 34 | [产品](#属性-产品（PRODUCT）) | PRODUCT | PICKUPDATA | 否 | 是 | 是 | [需求（ZT_STORY）](../zentao/Story) - [所属产品（PRODUCT）](../zentao/Story/#属性-所属产品（PRODUCT）) |
| 35 | [需求版本](#属性-需求版本（STORYVERSION）) | STORYVERSION | PICKUPDATA | 否 | 是 | 是 | [需求（ZT_STORY）](../zentao/Story) - [版本号（VERSION）](../zentao/Story/#属性-版本号（VERSION）) |
| 36 | [产品](#属性-产品（PRODUCTNAME）) | PRODUCTNAME | PICKUPDATA | 否 | 是 | 是 | [需求（ZT_STORY）](../zentao/Story) - [产品名称（PRODOCTNAME）](../zentao/Story/#属性-产品名称（PRODOCTNAME）) |
| 37 | [父任务](#属性-父任务（PARENTNAME）) | PARENTNAME | PICKUPTEXT | 否 | 是 | 是 | [任务（ZT_TASK）](../zentao/Task) - [任务名称（NAME）](../zentao/Task/#属性-任务名称（NAME）) |
| 38 | [所属项目](#属性-所属项目（PROJECT）) | PROJECT | PICKUP | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 39 | [相关需求](#属性-相关需求（STORY）) | STORY | PICKUP | 否 | 是 | 是 | [需求（ZT_STORY）](../zentao/Story) - [编号（ID）](../zentao/Story/#属性-编号（ID）) |
| 40 | [父任务](#属性-父任务（PARENT）) | PARENT | PICKUP | 否 | 是 | 是 | [任务（ZT_TASK）](../zentao/Task) - [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 41 | [来源Bug](#属性-来源Bug（FROMBUG）) | FROMBUG | PICKUP | 否 | 是 | 是 | [Bug（ZT_BUG）](../zentao/Bug) - [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 42 | [持续时间](#属性-持续时间（DURATION）) | DURATION | TEXT | 否 | 是 | 是 | [Bug（ZT_BUG）](../zentao/Bug) - [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 43 | [id](#属性-id（MODULE）) | MODULE | PICKUP | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [id（ID）](../ibiz/ProjectModule/#属性-id（ID）) |
| 44 | [模块路径](#属性-模块路径（PATH）) | PATH | PICKUPDATA | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 45 | [备注](#属性-备注（COMMENT）) | COMMENT | HTMLTEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 46 | [本次消耗](#属性-本次消耗（CURRENTCONSUMED）) | CURRENTCONSUMED | FLOAT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 47 | [总计耗时](#属性-总计耗时（TOTALTIME）) | TOTALTIME | FLOAT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 48 | [是否子任务](#属性-是否子任务（ISLEAF）) | ISLEAF | TEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 49 | [所有模块](#属性-所有模块（ALLMODULES）) | ALLMODULES | TEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 50 | [多人任务](#属性-多人任务（MULTIPLE）) | MULTIPLE | TEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 51 | [项目团队成员](#属性-项目团队成员（TASKTEAMS）) | TASKTEAMS | ONE2MANYDATA | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 52 | [所属模块](#属性-所属模块（MODULENAME1）) | MODULENAME1 | TEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 53 | [工时](#属性-工时（IBZTASKESTIMATES）) | IBZTASKESTIMATES | ONE2MANYDATA | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 54 | [是否收藏](#属性-是否收藏（ISFAVORITES）) | ISFAVORITES | TEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 55 | [任务状态](#属性-任务状态（STATUS1）) | STATUS1 | SSCODELIST | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 56 | [任务类型](#属性-任务类型（TASKTYPE）) | TASKTYPE | SSCODELIST | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 57 | [附件](#属性-附件（FILES）) | FILES | TEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 58 | [团队用户](#属性-团队用户（USERNAMES）) | USERNAMES | TEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 59 | [是否完成](#属性-是否完成（ISFINISHED）) | ISFINISHED | TEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 60 | [回复数量](#属性-回复数量（REPLYCOUNT）) | REPLYCOUNT | INT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 61 | [是否填写描述](#属性-是否填写描述（HASDETAIL）) | HASDETAIL | TEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |

### 属性-由谁取消（CANCELEDBY）
#### 属性说明
由谁取消

#### 属性类型
物理属性[实体属性]

#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
FLOAT

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
物理属性[实体属性]

#### 数据类型
DATETIME

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
物理属性[实体属性]

#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
ACID

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
物理属性[实体属性]

#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
LONGTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
DATE

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
物理属性[实体属性]

#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
DATETIME

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
物理属性[实体属性]

#### 数据类型
DATETIME

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
物理属性[实体属性]

#### 数据类型
NSCODELIST

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
物理属性[实体属性]

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
物理属性[实体属性]

#### 数据类型
SSCODELIST

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
物理属性[实体属性]

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关闭时间（CLOSEDDATE）
#### 属性说明
关闭时间

#### 属性类型
物理属性[实体属性]

#### 数据类型
DATETIME

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
物理属性[实体属性]

#### 数据类型
SSCODELIST

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
物理属性[实体属性]

#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
LONGTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
DATE

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
物理属性[实体属性]

#### 数据类型
DATE

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
物理属性[实体属性]

#### 数据类型
TEXT

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
物理属性[实体属性]

#### 数据类型
LONGTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

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
物理属性[实体属性]

#### 数据类型
FLOAT

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
物理属性[实体属性]

#### 数据类型
FLOAT

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
物理属性[实体属性]

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
物理属性[实体属性]

#### 数据类型
DATETIME

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
物理属性[实体属性]

#### 数据类型
DATE

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
链接属性[虚拟属性，映射关系实体的属性]

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-相关需求（STORYNAME）
#### 属性说明
相关需求

#### 属性类型
链接属性[虚拟属性，映射关系实体的属性]

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [需求名称（TITLE）](../zentao/Story/#属性-需求名称（TITLE）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属项目（PROJECTNAME）
#### 属性说明
所属项目

#### 属性类型
链接属性[虚拟属性，映射关系实体的属性]

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品（PRODUCT）
#### 属性说明
产品

#### 属性类型
链接属性[虚拟属性，映射关系实体的属性]

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [所属产品（PRODUCT）](../zentao/Story/#属性-所属产品（PRODUCT）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求版本（STORYVERSION）
#### 属性说明
半物理字段，且通过确认需求变更操作进行变动

#### 属性类型
物理属性[实体属性]

#### 数据类型
PICKUPDATA

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
链接属性[虚拟属性，映射关系实体的属性]

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [产品名称（PRODOCTNAME）](../zentao/Story/#属性-产品名称（PRODOCTNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父任务（PARENTNAME）
#### 属性说明
父任务

#### 属性类型
链接属性[虚拟属性，映射关系实体的属性]

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务名称（NAME）](../zentao/Task/#属性-任务名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属项目（PROJECT）
#### 属性说明
所属项目

#### 属性类型
物理属性[实体属性]

#### 数据类型
PICKUP

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
物理属性[实体属性]

#### 数据类型
PICKUP

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
物理属性[实体属性]

#### 数据类型
PICKUP

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
物理属性[实体属性]

#### 数据类型
PICKUP

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
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
物理属性[实体属性]

#### 数据类型
PICKUP

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
链接属性[虚拟属性，映射关系实体的属性]

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（COMMENT）
#### 属性说明
备注

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

#### 数据类型
HTMLTEXT

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
应用界面属性[虚拟属性，提供给页面显示的属性]

#### 数据类型
FLOAT

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
应用界面属性[虚拟属性，提供给页面显示的属性]

#### 数据类型
FLOAT

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
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
应用界面属性[虚拟属性，提供给页面显示的属性]

#### 数据类型
TEXT

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
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
应用界面属性[虚拟属性，提供给页面显示的属性]

#### 数据类型
ONE2MANYDATA

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
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
应用界面属性[虚拟属性，提供给页面显示的属性]

#### 数据类型
ONE2MANYDATA

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
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
应用界面属性[虚拟属性，提供给页面显示的属性]

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-团队用户（USERNAMES）
#### 属性说明
团队用户

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否完成（ISFINISHED）
#### 属性说明
是否完成

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-回复数量（REPLYCOUNT）
#### 属性说明
回复数量

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否填写描述（HASDETAIL）
#### 属性说明
是否填写描述

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系属性 1:N 当前属性 |

