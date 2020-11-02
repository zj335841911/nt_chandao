# 实体-系统更新功能(SYS_UPDATE_FEATURES)
## 实体说明
系统更新功能

## 所属模块
[iBiz增强模块](../ibiz)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [系统更新功能名称](#属性-系统更新功能名称（SYS_UPDATE_FEATURESNAME）) | SYS_UPDATE_FEATURESNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [系统更新功能标识](#属性-系统更新功能标识（SYS_UPDATE_FEATURESID）) | SYS_UPDATE_FEATURESID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 3 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 5 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [系统更新日志标识](#属性-系统更新日志标识（SYS_UPDATE_LOGID）) | SYS_UPDATE_LOGID | 外键值 | 否 | 是 | 是 |
| 8 | [所属更新](#属性-所属更新（SYS_UPDATE_LOGNAME）) | SYS_UPDATE_LOGNAME | 外键值文本 | 否 | 是 | 是 |
| 9 | [更新功能](#属性-更新功能（UPFEATURES）) | UPFEATURES | 文本，可指定长度 | 否 | 是 | 是 |
| 10 | [功能描述](#属性-功能描述（FEATURESDESC）) | FEATURESDESC | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 11 | [更新类型](#属性-更新类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 是 | 是 |
| 12 | [展示顺序](#属性-展示顺序（DISPLAYORDER）) | DISPLAYORDER | 整型 | 否 | 是 | 是 |

### 属性-系统更新功能名称（SYS_UPDATE_FEATURESNAME）
#### 属性说明
系统更新功能名称

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统更新功能标识（SYS_UPDATE_FEATURESID）
#### 属性说明
系统更新功能标识

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
全局唯一标识，文本类型，用户不可见

#### Java类型
String

#### 是否允许为为空
否

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-建立人（CREATEMAN）
#### 属性说明
建立人

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
否

#### 默认值
无

#### 取值范围/公式
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新人（UPDATEMAN）
#### 属性说明
更新人

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
否

#### 默认值
无

#### 取值范围/公式
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-建立时间（CREATEDATE）
#### 属性说明
建立时间

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

#### 是否允许为为空
否

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新时间（UPDATEDATE）
#### 属性说明
更新时间

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

#### 是否允许为为空
否

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统更新日志标识（SYS_UPDATE_LOGID）
#### 属性说明
系统更新日志标识

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [系统更新日志标识（SYS_UPDATE_LOGID）](../ibiz/SysUpdateLog/#属性-系统更新日志标识（SYS_UPDATE_LOGID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属更新（SYS_UPDATE_LOGNAME）
#### 属性说明
所属更新

#### 属性类型
链接字段[来自关系实体字段]

#### 数据类型
外键值文本

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新功能（UPFEATURES）
#### 属性说明
更新功能

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-功能描述（FEATURESDESC）
#### 属性说明
功能描述

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
HTML文本，没有长度限制

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新类型（TYPE）
#### 属性说明
更新类型

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
参照数据字典【[系统更新类型（SYS_UPDATE_LOG_TYPE）](../../codelist/SYS_UPDATE_LOG_TYPE)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-展示顺序（DISPLAYORDER）
#### 属性说明
展示顺序

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [更新日志（SYS_UPDATE_LOG）](../ibiz/SysUpdateLog) |
| 关系属性 | [更新名称（SYS_UPDATE_LOGNAME）](../ibiz/SysUpdateLog/#属性-更新名称（SYS_UPDATE_LOGNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |


## 业务状态
无

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 7 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

### 实体行为-Create（Create）
#### 说明
Create

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Update（Update）
#### 说明
Update

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Remove（Remove）
#### 说明
Remove

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Get（Get）
#### 说明
Get

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-CheckKey（CheckKey）
#### 说明
CheckKey

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Save（Save）
#### 说明
Save

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无

## 逻辑处理

## 查询

