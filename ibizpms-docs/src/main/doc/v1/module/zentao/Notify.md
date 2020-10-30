# 实体-通知(ZT_NOTIFY)
## 实体说明
通知

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [createdDate](#属性-createdDate（CREATEDDATE）) | CREATEDDATE | 日期时间型 | 否 | 否 | 是 |
| 2 | [ccList](#属性-ccList（CCLIST）) | CCLIST | 长文本，没有长度限制 | 否 | 否 | 是 |
| 3 | [failReason](#属性-failReason（FAILREASON）) | FAILREASON | 长文本，没有长度限制 | 否 | 否 | 是 |
| 4 | [action](#属性-action（ACTION）) | ACTION | 整型 | 否 | 否 | 是 |
| 5 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 6 | [createdBy](#属性-createdBy（CREATEDBY）) | CREATEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [status](#属性-status（STATUS）) | STATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [subject](#属性-subject（SUBJECT）) | SUBJECT | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [objectID](#属性-objectID（OBJECTID）) | OBJECTID | 整型 | 否 | 否 | 是 |
| 10 | [data](#属性-data（DATA）) | DATA | 长文本，没有长度限制 | 否 | 否 | 是 |
| 11 | [toList](#属性-toList（TOLIST）) | TOLIST | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [sendTime](#属性-sendTime（SENDTIME）) | SENDTIME | 日期时间型 | 否 | 否 | 是 |
| 13 | [objectType](#属性-objectType（OBJECTTYPE）) | OBJECTTYPE | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-createdDate（CREATEDDATE）
#### 属性说明
createdDate

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd HH:mm:ss

#### 关系属性
无

### 属性-ccList（CCLIST）
#### 属性说明
ccList

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
长文本，没有长度限制

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
无

### 属性-failReason（FAILREASON）
#### 属性说明
failReason

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
长文本，没有长度限制

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
无

### 属性-action（ACTION）
#### 属性说明
action

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
无

### 属性-id（ID）
#### 属性说明
id

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
自增标识，整数类型，用户不可见

#### Java类型
Long

#### 是否允许为为空
否

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
无

### 属性-createdBy（CREATEDBY）
#### 属性说明
createdBy

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
无

### 属性-status（STATUS）
#### 属性说明
status

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
| 值 | wait |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
无

### 属性-subject（SUBJECT）
#### 属性说明
subject

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
无

### 属性-objectID（OBJECTID）
#### 属性说明
objectID

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
无

### 属性-data（DATA）
#### 属性说明
data

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
长文本，没有长度限制

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
无

### 属性-toList（TOLIST）
#### 属性说明
toList

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
无

### 属性-sendTime（SENDTIME）
#### 属性说明
sendTime

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd HH:mm:ss

#### 关系属性
无

### 属性-objectType（OBJECTTYPE）
#### 属性说明
objectType

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
无


## 业务状态
无

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| -- | -- | -- | -- | -- |
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

