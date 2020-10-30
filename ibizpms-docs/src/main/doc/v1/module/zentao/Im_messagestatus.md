# 实体-im_messagestatus(ZT_IM_MESSAGESTATUS)
## 实体说明
im_messagestatus

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [message](#属性-message（MESSAGE）) | MESSAGE | 整型 | 否 | 否 | 是 |
| 2 | [status](#属性-status（STATUS）) | STATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 3 | [user](#属性-user（USER）) | USER | 整型 | 否 | 否 | 是 |
| 4 | [虚拟主键](#属性-虚拟主键（ID）) | ID | 文本，可指定长度 | 是 | 否 | 否 |

### 属性-message（MESSAGE）
#### 属性说明
message

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

### 属性-status（STATUS）
#### 属性说明
status

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
参照数据字典【[ZT_IM_MESSAGESTATUS__STATUS（Im_messagestatus__status）](../../codelist/Im_messagestatus__status)】

#### 数据格式
无

#### 关系属性
无

### 属性-user（USER）
#### 属性说明
user

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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
无

### 属性-虚拟主键（ID）
#### 属性说明
虚拟主键

#### 属性类型
逻辑字段[来自计算式]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
否

#### 默认值
无

#### 取值范围/公式
concat(%1$s,'__',%2$s)

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

