# 实体-im_client(ZT_IM_CLIENT)
## 实体说明
im_client

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [editedDate](#属性-editedDate（EDITEDDATE）) | EDITEDDATE | DATETIME | 否 | 否 | 是 |
| 2 | [strategy](#属性-strategy（STRATEGY）) | STRATEGY | TEXT | 否 | 否 | 是 |
| 3 | [createdDate](#属性-createdDate（CREATEDDATE）) | CREATEDDATE | DATETIME | 否 | 否 | 是 |
| 4 | [changeLog](#属性-changeLog（CHANGELOG）) | CHANGELOG | LONGTEXT | 否 | 否 | 是 |
| 5 | [version](#属性-version（VERSION）) | VERSION | TEXT | 否 | 否 | 是 |
| 6 | [downloads](#属性-downloads（DOWNLOADS）) | DOWNLOADS | LONGTEXT | 否 | 否 | 是 |
| 7 | [status](#属性-status（STATUS）) | STATUS | SSCODELIST | 否 | 否 | 是 |
| 8 | [desc](#属性-desc（DESC）) | DESC | TEXT | 否 | 否 | 是 |
| 9 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 |
| 10 | [createdBy](#属性-createdBy（CREATEDBY）) | CREATEDBY | TEXT | 否 | 否 | 是 |
| 11 | [editedBy](#属性-editedBy（EDITEDBY）) | EDITEDBY | TEXT | 否 | 否 | 是 |

### 属性-editedDate（EDITEDDATE）
#### 属性说明
editedDate

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
无

### 属性-strategy（STRATEGY）
#### 属性说明
strategy

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
无

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
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
无

### 属性-changeLog（CHANGELOG）
#### 属性说明
changeLog

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
无

### 属性-version（VERSION）
#### 属性说明
version

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
无

### 属性-downloads（DOWNLOADS）
#### 属性说明
downloads

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
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[ZT_IM_CLIENT__STATUS（Im_client__status）](../../codelist/Im_client__status)】

#### 数据格式
无

#### 关系属性
无

### 属性-desc（DESC）
#### 属性说明
desc

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
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

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
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
无

### 属性-editedBy（EDITEDBY）
#### 属性说明
editedBy

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

### 实体行为-CheckKey（CheckKey）
#### 说明
CheckKey

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-Save（Save）
#### 说明
Save

#### 行为类型
内置方法

#### 行为持有者
后台及前台



