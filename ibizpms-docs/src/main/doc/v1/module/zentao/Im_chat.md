# 实体-im_chat(ZT_IM_CHAT)
## 实体说明
im_chat

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [admins](#属性-admins（ADMINS）) | ADMINS | TEXT | 否 | 否 | 是 |
| 2 | [createdBy](#属性-createdBy（CREATEDBY）) | CREATEDBY | TEXT | 否 | 否 | 是 |
| 3 | [editedDate](#属性-editedDate（EDITEDDATE）) | EDITEDDATE | DATETIME | 否 | 否 | 是 |
| 4 | [dismissDate](#属性-dismissDate（DISMISSDATE）) | DISMISSDATE | DATETIME | 否 | 否 | 是 |
| 5 | [createdDate](#属性-createdDate（CREATEDDATE）) | CREATEDDATE | DATETIME | 否 | 否 | 是 |
| 6 | [committers](#属性-committers（COMMITTERS）) | COMMITTERS | TEXT | 否 | 否 | 是 |
| 7 | [public](#属性-public（PUBLIC）) | PUBLIC | SSCODELIST | 否 | 否 | 是 |
| 8 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 |
| 9 | [name](#属性-name（NAME）) | NAME | TEXT | 否 | 否 | 否 |
| 10 | [type](#属性-type（TYPE）) | TYPE | TEXT | 否 | 否 | 是 |
| 11 | [editedBy](#属性-editedBy（EDITEDBY）) | EDITEDBY | TEXT | 否 | 否 | 是 |
| 12 | [subject](#属性-subject（SUBJECT）) | SUBJECT | INT | 否 | 否 | 是 |
| 13 | [lastActiveTime](#属性-lastActiveTime（LASTACTIVETIME）) | LASTACTIVETIME | DATETIME | 否 | 否 | 是 |
| 14 | [gid](#属性-gid（GID）) | GID | TEXT | 否 | 否 | 是 |

### 属性-admins（ADMINS）
#### 属性说明
admins

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
| 值 | 0000-00-00 00:00:00 |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
无

### 属性-dismissDate（DISMISSDATE）
#### 属性说明
dismissDate

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
| 值 | 0000-00-00 00:00:00 |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

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
| 值 | 0000-00-00 00:00:00 |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
无

### 属性-committers（COMMITTERS）
#### 属性说明
committers

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

### 属性-public（PUBLIC）
#### 属性说明
public

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
参照数据字典【[ZT_ACTION__READ（Action__read）](../../codelist/Action__read)】

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

### 属性-name（NAME）
#### 属性说明
name

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
无

### 属性-type（TYPE）
#### 属性说明
type

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
| 值 | group |

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

### 属性-subject（SUBJECT）
#### 属性说明
subject

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

### 属性-lastActiveTime（LASTACTIVETIME）
#### 属性说明
lastActiveTime

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
| 值 | 0000-00-00 00:00:00 |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
无

### 属性-gid（GID）
#### 属性说明
gid

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



