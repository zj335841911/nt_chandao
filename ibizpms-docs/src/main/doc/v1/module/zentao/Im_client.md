# 实体-im_client(ZT_IM_CLIENT)
## 实体说明
im_client

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [editedDate](#属性-editedDate（EDITEDDATE）) | EDITEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 2 | [strategy](#属性-strategy（STRATEGY）) | STRATEGY | TEXT | 否 | 否 | 是 | -- |
| 3 | [createdDate](#属性-createdDate（CREATEDDATE）) | CREATEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 4 | [changeLog](#属性-changeLog（CHANGELOG）) | CHANGELOG | LONGTEXT | 否 | 否 | 是 | -- |
| 5 | [version](#属性-version（VERSION）) | VERSION | TEXT | 否 | 否 | 是 | -- |
| 6 | [downloads](#属性-downloads（DOWNLOADS）) | DOWNLOADS | LONGTEXT | 否 | 否 | 是 | -- |
| 7 | [status](#属性-status（STATUS）) | STATUS | SSCODELIST | 否 | 否 | 是 | -- |
| 8 | [desc](#属性-desc（DESC）) | DESC | TEXT | 否 | 否 | 是 | -- |
| 9 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 10 | [createdBy](#属性-createdBy（CREATEDBY）) | CREATEDBY | TEXT | 否 | 否 | 是 | -- |
| 11 | [editedBy](#属性-editedBy（EDITEDBY）) | EDITEDBY | TEXT | 否 | 否 | 是 | -- |

### 属性-editedDate（EDITEDDATE）
#### 属性说明
editedDate
#### 属性类型
物理字段[来自当前实体物理表字段]


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
无

### 属性-strategy（STRATEGY）
#### 属性说明
strategy
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
无

### 属性-createdDate（CREATEDDATE）
#### 属性说明
createdDate
#### 属性类型
物理字段[来自当前实体物理表字段]


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
无

### 属性-changeLog（CHANGELOG）
#### 属性说明
changeLog
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
LONGTEXT

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

### 属性-downloads（DOWNLOADS）
#### 属性说明
downloads
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
LONGTEXT

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
SSCODELIST

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

### 属性-id（ID）
#### 属性说明
id
#### 属性类型
物理字段[来自当前实体物理表字段]


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

### 属性-createdBy（CREATEDBY）
#### 属性说明
createdBy
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
无

### 属性-editedBy（EDITEDBY）
#### 属性说明
editedBy
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
无

