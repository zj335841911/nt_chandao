# 实体-系统运行会话(PSSYSRUNSESSION)
## 实体说明
系统运行会话

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [系统运行会话名称](#属性-系统运行会话名称（PSSYSRUNSESSIONNAME）) | PSSYSRUNSESSIONNAME | TEXT | 否 | 否 | 是 | -- |
| 2 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 3 | [系统运行会话标识](#属性-系统运行会话标识（PSSYSRUNSESSIONID）) | PSSYSRUNSESSIONID | GUID | 是 | 否 | 否 | -- |
| 4 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | TEXT | 否 | 否 | 否 | -- |
| 5 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 6 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | TEXT | 否 | 否 | 否 | -- |
| 7 | [输出调试信息](#属性-输出调试信息（DEBUGMODE）) | DEBUGMODE | YESNO | 否 | 否 | 是 | -- |
| 8 | [结束时间](#属性-结束时间（ENDTIME）) | ENDTIME | DATETIME | 否 | 否 | 是 | -- |
| 9 | [签入版本库](#属性-签入版本库（ENABLEVC）) | ENABLEVC | YESNO | 否 | 否 | 是 | -- |
| 10 | [备注](#属性-备注（MEMO）) | MEMO | LONGTEXT_1000 | 否 | 否 | 是 | -- |
| 11 | [修复数据结构](#属性-修复数据结构（FIXDBMODEL）) | FIXDBMODEL | YESNO | 否 | 否 | 是 | -- |
| 12 | [打包模式](#属性-打包模式（PACKMODE）) | PACKMODE | SSCODELIST | 否 | 否 | 是 | -- |
| 13 | [控制台标识](#属性-控制台标识（PSDSCONSOLEID）) | PSDSCONSOLEID | TEXT | 否 | 否 | 是 | -- |
| 14 | [运行模式](#属性-运行模式（RUNMODE）) | RUNMODE | SSCODELIST | 否 | 否 | 是 | -- |
| 15 | [重新构建](#属性-重新构建（REBUILDMODE）) | REBUILDMODE | NSCODELIST | 否 | 否 | 是 | -- |
| 16 | [运行参数](#属性-运行参数（RUNPARAM）) | RUNPARAM | TEXT | 否 | 否 | 是 | -- |
| 17 | [运行参数3](#属性-运行参数3（RUNPARAM3）) | RUNPARAM3 | TEXT | 否 | 否 | 是 | -- |
| 18 | [运行参数2](#属性-运行参数2（RUNPARAM2）) | RUNPARAM2 | TEXT | 否 | 否 | 是 | -- |
| 19 | [运行参数4](#属性-运行参数4（RUNPARAM4）) | RUNPARAM4 | TEXT | 否 | 否 | 是 | -- |
| 20 | [运行参数5](#属性-运行参数5（RUNPARAM5）) | RUNPARAM5 | INT | 否 | 否 | 是 | -- |
| 21 | [运行状态](#属性-运行状态（RUNSTATE）) | RUNSTATE | NSCODELIST | 否 | 否 | 否 | -- |
| 22 | [运行参数6](#属性-运行参数6（RUNPARAM6）) | RUNPARAM6 | INT | 否 | 否 | 是 | -- |
| 23 | [开始时间](#属性-开始时间（STARTTIME）) | STARTTIME | DATETIME | 否 | 否 | 是 | -- |
| 24 | [模板出错时终止](#属性-模板出错时终止（STOPWHENTEMPLERROR）) | STOPWHENTEMPLERROR | YESNO | 否 | 否 | 是 | -- |
| 25 | [系统应用2](#属性-系统应用2（PSSYSAPPNAME2）) | PSSYSAPPNAME2 | PICKUPTEXT | 否 | 是 | 是 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) - [系统应用名称（PSSYSAPPNAME）](../ibizsysmodel/PSSysApp/#属性-系统应用名称（PSSYSAPPNAME）) |
| 26 | [系统应用2](#属性-系统应用2（PSSYSAPPID2）) | PSSYSAPPID2 | PICKUP | 否 | 是 | 是 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) - [系统应用标识（PSSYSAPPID）](../ibizsysmodel/PSSysApp/#属性-系统应用标识（PSSYSAPPID）) |
| 27 | [系统应用](#属性-系统应用（PSSYSAPPNAME）) | PSSYSAPPNAME | PICKUPTEXT | 否 | 是 | 是 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) - [系统应用名称（PSSYSAPPNAME）](../ibizsysmodel/PSSysApp/#属性-系统应用名称（PSSYSAPPNAME）) |
| 28 | [系统应用](#属性-系统应用（PSSYSAPPID）) | PSSYSAPPID | PICKUP | 否 | 是 | 是 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) - [系统应用标识（PSSYSAPPID）](../ibizsysmodel/PSSysApp/#属性-系统应用标识（PSSYSAPPID）) |
| 29 | [系统服务接口](#属性-系统服务接口（PSSYSSERVICEAPINAME）) | PSSYSSERVICEAPINAME | PICKUPTEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口名称（PSSYSSERVICEAPINAME）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口名称（PSSYSSERVICEAPINAME）) |
| 30 | [系统服务接口](#属性-系统服务接口（PSSYSSERVICEAPIID）) | PSSYSSERVICEAPIID | PICKUP | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 31 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 32 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 33 | [服务体系](#属性-服务体系（PSSYSSFPUBID）) | PSSYSSFPUBID | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 34 | [服务体系](#属性-服务体系（PSSYSSFPUBNAME）) | PSSYSSFPUBNAME | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 35 | [运行数据库](#属性-运行数据库（PSSYSTEMDBCFGID）) | PSSYSTEMDBCFGID | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 36 | [运行数据库](#属性-运行数据库（PSSYSTEMDBCFGNAME）) | PSSYSTEMDBCFGNAME | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |

### 属性-系统运行会话名称（PSSYSRUNSESSIONNAME）
#### 属性说明
系统运行会话名称

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
物理属性[实体属性]

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

### 属性-系统运行会话标识（PSSYSRUNSESSIONID）
#### 属性说明
系统运行会话标识

#### 属性类型
物理属性[实体属性]

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

### 属性-建立人（CREATEMAN）
#### 属性说明
建立人

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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

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
物理属性[实体属性]

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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-输出调试信息（DEBUGMODE）
#### 属性说明
输出调试信息

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-结束时间（ENDTIME）
#### 属性说明
结束时间

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-签入版本库（ENABLEVC）
#### 属性说明
签入版本库

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（MEMO）
#### 属性说明
备注

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-修复数据结构（FIXDBMODEL）
#### 属性说明
修复数据结构

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-打包模式（PACKMODE）
#### 属性说明
打包模式

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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-控制台标识（PSDSCONSOLEID）
#### 属性说明
控制台标识

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

### 属性-运行模式（RUNMODE）
#### 属性说明
运行模式

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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-重新构建（REBUILDMODE）
#### 属性说明
重新构建

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

### 属性-运行参数（RUNPARAM）
#### 属性说明
运行参数

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

### 属性-运行参数3（RUNPARAM3）
#### 属性说明
运行参数3

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

### 属性-运行参数2（RUNPARAM2）
#### 属性说明
运行参数2

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

### 属性-运行参数4（RUNPARAM4）
#### 属性说明
运行参数4

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

### 属性-运行参数5（RUNPARAM5）
#### 属性说明
运行参数5

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-运行状态（RUNSTATE）
#### 属性说明
运行状态

#### 属性类型
物理属性[实体属性]

#### 数据类型
NSCODELIST

#### 是否允许为为空
否

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 10 |

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

### 属性-运行参数6（RUNPARAM6）
#### 属性说明
运行参数6

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-开始时间（STARTTIME）
#### 属性说明
开始时间

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模板出错时终止（STOPWHENTEMPLERROR）
#### 属性说明
模板出错时终止

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统应用2（PSSYSAPPNAME2）
#### 属性说明
系统应用2

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) |
| 关系属性 | [系统应用名称（PSSYSAPPNAME）](../ibizsysmodel/PSSysApp/#属性-系统应用名称（PSSYSAPPNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统应用2（PSSYSAPPID2）
#### 属性说明
系统应用2

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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) |
| 关系属性 | [系统应用标识（PSSYSAPPID）](../ibizsysmodel/PSSysApp/#属性-系统应用标识（PSSYSAPPID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统应用（PSSYSAPPNAME）
#### 属性说明
系统应用

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) |
| 关系属性 | [系统应用名称（PSSYSAPPNAME）](../ibizsysmodel/PSSysApp/#属性-系统应用名称（PSSYSAPPNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统应用（PSSYSAPPID）
#### 属性说明
系统应用

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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) |
| 关系属性 | [系统应用标识（PSSYSAPPID）](../ibizsysmodel/PSSysApp/#属性-系统应用标识（PSSYSAPPID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统服务接口（PSSYSSERVICEAPINAME）
#### 属性说明
系统服务接口

#### 属性类型
物理属性[实体属性]

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
物理属性[实体属性]

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
物理属性[实体属性]

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
物理属性[实体属性]

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

### 属性-服务体系（PSSYSSFPUBID）
#### 属性说明
服务体系

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

### 属性-服务体系（PSSYSSFPUBNAME）
#### 属性说明
服务体系

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

### 属性-运行数据库（PSSYSTEMDBCFGID）
#### 属性说明
运行数据库

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

### 属性-运行数据库（PSSYSTEMDBCFGNAME）
#### 属性说明
运行数据库

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

