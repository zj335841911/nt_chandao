# 实体-im_conference(ZT_IM_CONFERENCE)
## 实体说明
im_conference

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [status](#属性-status（STATUS）) | STATUS | SSCODELIST | 否 | 否 | 是 | -- |
| 2 | [cgid](#属性-cgid（CGID）) | CGID | TEXT | 否 | 否 | 是 | -- |
| 3 | [openedBy](#属性-openedBy（OPENEDBY）) | OPENEDBY | INT | 否 | 否 | 是 | -- |
| 4 | [openedDate](#属性-openedDate（OPENEDDATE）) | OPENEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 5 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 6 | [rid](#属性-rid（RID）) | RID | TEXT | 否 | 否 | 是 | -- |
| 7 | [participants](#属性-participants（PARTICIPANTS）) | PARTICIPANTS | LONGTEXT | 否 | 否 | 是 | -- |

### 属性-status（STATUS）
#### 属性说明
status

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
参照数据字典【[ZT_IM_CONFERENCE__STATUS（Im_conference__status）](../../codelist/Im_conference__status)】

#### 数据格式
无

#### 关系属性
无

### 属性-cgid（CGID）
#### 属性说明
cgid

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

### 属性-openedBy（OPENEDBY）
#### 属性说明
openedBy

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

### 属性-openedDate（OPENEDDATE）
#### 属性说明
openedDate

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

### 属性-rid（RID）
#### 属性说明
rid

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

### 属性-participants（PARTICIPANTS）
#### 属性说明
participants

#### 属性类型
物理属性[实体属性]

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

