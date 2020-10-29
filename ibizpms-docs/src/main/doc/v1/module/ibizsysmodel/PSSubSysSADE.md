# 实体-外部接口实体(PSSUBSYSSADE)
## 实体说明
外部接口实体

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [外部接口实体标识](#属性-外部接口实体标识（PSSUBSYSSADEID）) | PSSUBSYSSADEID | GUID | 是 | 否 | 否 | -- |
| 2 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | TEXT | 否 | 否 | 否 | -- |
| 3 | [外部接口实体名称](#属性-外部接口实体名称（PSSUBSYSSADENAME）) | PSSUBSYSSADENAME | TEXT | 否 | 否 | 是 | -- |
| 4 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 5 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | TEXT | 否 | 否 | 否 | -- |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 7 | [代码名称2](#属性-代码名称2（CODENAME2）) | CODENAME2 | TEXT | 否 | 否 | 是 | -- |
| 8 | [代码名称](#属性-代码名称（CODENAME）) | CODENAME | TEXT | 否 | 否 | 否 | -- |
| 9 | [实体标记](#属性-实体标记（DETAG）) | DETAG | TEXT | 否 | 否 | 是 | -- |
| 10 | [实体标记2](#属性-实体标记2（DETAG2）) | DETAG2 | TEXT | 否 | 否 | 是 | -- |
| 11 | [备注](#属性-备注（MEMO）) | MEMO | LONGTEXT_1000 | 否 | 否 | 是 | -- |
| 12 | [接口模式](#属性-接口模式（MAJORFLAG）) | MAJORFLAG | NSCODELIST | 否 | 否 | 是 | -- |
| 13 | [逻辑名称](#属性-逻辑名称（LOGICNAME）) | LOGICNAME | TEXT | 否 | 否 | 是 | -- |
| 14 | [同步模型模式](#属性-同步模型模式（SYNCMODELMODE）) | SYNCMODELMODE | SSCODELIST | 否 | 否 | 是 | -- |
| 15 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | SSCODELIST | 否 | 否 | 是 | -- |
| 16 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | TEXT | 否 | 否 | 是 | -- |
| 17 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | TEXT | 否 | 否 | 是 | -- |
| 18 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | TEXT | 否 | 否 | 是 | -- |
| 19 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | TEXT | 否 | 否 | 是 | -- |
| 20 | [是否启用](#属性-是否启用（VALIDFLAG）) | VALIDFLAG | YESNO | 否 | 否 | 否 | -- |
| 21 | [子系统接口](#属性-子系统接口（PSSUBSYSSERVICEAPINAME）) | PSSUBSYSSERVICEAPINAME | PICKUPTEXT | 否 | 是 | 否 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) - [外部服务接口名称（PSSUBSYSSERVICEAPINAME）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）) |
| 22 | [子系统接口](#属性-子系统接口（PSSUBSYSSERVICEAPIID）) | PSSUBSYSSERVICEAPIID | PICKUP | 否 | 是 | 否 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) - [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |

### 属性-外部接口实体标识（PSSUBSYSSADEID）
#### 属性说明
外部接口实体标识
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-外部接口实体名称（PSSUBSYSSADENAME）
#### 属性说明
外部接口实体名称
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-代码名称2（CODENAME2）
#### 属性说明
代码名称2
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-代码名称（CODENAME）
#### 属性说明
代码名称
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-实体标记（DETAG）
#### 属性说明
实体标记
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-实体标记2（DETAG2）
#### 属性说明
实体标记2
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-接口模式（MAJORFLAG）
#### 属性说明
接口模式
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
| 值 | 1 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-逻辑名称（LOGICNAME）
#### 属性说明
逻辑名称
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-同步模型模式（SYNCMODELMODE）
#### 属性说明
同步模型模式
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否启用（VALIDFLAG）
#### 属性说明
是否启用
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-子系统接口（PSSUBSYSSERVICEAPINAME）
#### 属性说明
子系统接口
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口名称（PSSUBSYSSERVICEAPINAME）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-子系统接口（PSSUBSYSSERVICEAPIID）
#### 属性说明
子系统接口
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

