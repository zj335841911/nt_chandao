# 实体-外部服务接口(PSSUBSYSSERVICEAPI)
## 实体说明
外部服务接口

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [外部服务接口名称](#属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）) | PSSUBSYSSERVICEAPINAME | TEXT | 否 | 否 | 是 | -- |
| 2 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | TEXT | 否 | 否 | 否 | -- |
| 3 | [外部服务接口标识](#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) | PSSUBSYSSERVICEAPIID | GUID | 是 | 否 | 否 | -- |
| 4 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 5 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 6 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | TEXT | 否 | 否 | 否 | -- |
| 7 | [系统模块](#属性-系统模块（PSMODULENAME）) | PSMODULENAME | PICKUPTEXT | 否 | 是 | 是 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) - [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 8 | [系统模块](#属性-系统模块（PSMODULEID）) | PSMODULEID | PICKUP | 否 | 是 | 是 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) - [系统模块标识（PSMODULEID）](../ibizsysmodel/PSModule/#属性-系统模块标识（PSMODULEID）) |
| 9 | [系统服务接口](#属性-系统服务接口（PSSYSSERVICEAPINAME）) | PSSYSSERVICEAPINAME | PICKUPTEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口名称（PSSYSSERVICEAPINAME）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口名称（PSSYSSERVICEAPINAME）) |
| 10 | [系统服务接口](#属性-系统服务接口（PSSYSSERVICEAPIID）) | PSSYSSERVICEAPIID | PICKUP | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 11 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 12 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |

### 属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）
#### 属性说明
外部服务接口名称
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）
#### 属性说明
外部服务接口标识
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统模块（PSMODULENAME）
#### 属性说明
系统模块
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统模块（PSMODULEID）
#### 属性说明
系统模块
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块标识（PSMODULEID）](../ibizsysmodel/PSModule/#属性-系统模块标识（PSMODULEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统服务接口（PSSYSSERVICEAPINAME）
#### 属性说明
系统服务接口
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口名称（PSSYSSERVICEAPINAME）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口名称（PSSYSSERVICEAPINAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统服务接口（PSSYSSERVICEAPIID）
#### 属性说明
系统服务接口
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

