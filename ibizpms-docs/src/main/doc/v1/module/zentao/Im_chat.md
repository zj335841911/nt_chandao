# 实体-im_chat(ZT_IM_CHAT)
## 实体说明
im_chat

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [admins](#属性-admins（ADMINS）) | ADMINS | TEXT | 否 | 否 | 是 | -- |
| 2 | [createdBy](#属性-createdBy（CREATEDBY）) | CREATEDBY | TEXT | 否 | 否 | 是 | -- |
| 3 | [editedDate](#属性-editedDate（EDITEDDATE）) | EDITEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 4 | [dismissDate](#属性-dismissDate（DISMISSDATE）) | DISMISSDATE | DATETIME | 否 | 否 | 是 | -- |
| 5 | [createdDate](#属性-createdDate（CREATEDDATE）) | CREATEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 6 | [committers](#属性-committers（COMMITTERS）) | COMMITTERS | TEXT | 否 | 否 | 是 | -- |
| 7 | [public](#属性-public（PUBLIC）) | PUBLIC | SSCODELIST | 否 | 否 | 是 | -- |
| 8 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 9 | [name](#属性-name（NAME）) | NAME | TEXT | 否 | 否 | 否 | -- |
| 10 | [type](#属性-type（TYPE）) | TYPE | TEXT | 否 | 否 | 是 | -- |
| 11 | [editedBy](#属性-editedBy（EDITEDBY）) | EDITEDBY | TEXT | 否 | 否 | 是 | -- |
| 12 | [subject](#属性-subject（SUBJECT）) | SUBJECT | INT | 否 | 否 | 是 | -- |
| 13 | [lastActiveTime](#属性-lastActiveTime（LASTACTIVETIME）) | LASTACTIVETIME | DATETIME | 否 | 否 | 是 | -- |
| 14 | [gid](#属性-gid（GID）) | GID | TEXT | 否 | 否 | 是 | -- |

### 属性-admins（ADMINS）
#### 属性说明
admins

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
无

### 属性-createdBy（CREATEDBY）
#### 属性说明
createdBy

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
无

### 属性-editedDate（EDITEDDATE）
#### 属性说明
editedDate

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
物理属性[实体属性]

#### 数据类型
DATETIME

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
物理属性[实体属性]

#### 数据类型
DATETIME

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
无

### 属性-public（PUBLIC）
#### 属性说明
public

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
参照数据字典【[ZT_ACTION__READ（Action__read）](../../codelist/Action__read)】

#### 数据格式
无

#### 关系属性
无

### 属性-id（ID）
#### 属性说明
id

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
无

### 属性-name（NAME）
#### 属性说明
name

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
无

### 属性-type（TYPE）
#### 属性说明
type

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
无

### 属性-subject（SUBJECT）
#### 属性说明
subject

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
物理属性[实体属性]

#### 数据类型
DATETIME

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
无

