# 实体-需求模块(IBZPRO_STORYMODULE)
## 实体说明
需求模块

## 所属模块
[iBizPro模块](../ibizpro)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 2 | [名称](#属性-名称（NAME）) | NAME | TEXT | 否 | 否 | 否 | -- |
| 3 | [编号](#属性-编号（ROOT）) | ROOT | PICKUP | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 4 | [IBIZ标识](#属性-IBIZ标识（IBIZ_ID）) | IBIZ_ID | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 5 | [类型](#属性-类型（TYPE）) | TYPE | SSCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 6 | [级别](#属性-级别（GRADE）) | GRADE | INT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 7 | [路径](#属性-路径（PATH）) | PATH | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 8 | [简称](#属性-简称（SHORT）) | SHORT | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 9 | [id](#属性-id（PARENT）) | PARENT | PICKUP | 否 | 是 | 是 | [需求模块（IBZPRO_STORYMODULE）](../ibizpro/IBZProStoryModule) - [id（ID）](../ibizpro/IBZProStoryModule/#属性-id（ID）) |
| 10 | [产品](#属性-产品（PRODUCTNAME）) | PRODUCTNAME | PICKUPTEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 11 | [owner](#属性-owner（OWNER）) | OWNER | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 12 | [collector](#属性-collector（COLLECTOR）) | COLLECTOR | LONGTEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 13 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 14 | [需求模块类型](#属性-需求模块类型（IBIZ_STORYTYPE）) | IBIZ_STORYTYPE | SSCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-名称（NAME）
#### 属性说明
名称
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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-编号（ROOT）
#### 属性说明
编号
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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-IBIZ标识（IBIZ_ID）
#### 属性说明
IBIZ标识
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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-类型（TYPE）
#### 属性说明
类型
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
| 值 | story |

#### 取值范围/公式
参照数据字典【[模块类型（Module__type）](../../codelist/Module__type)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-级别（GRADE）
#### 属性说明
级别
#### 属性类型
物理字段[来自当前实体物理表字段]


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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-路径（PATH）
#### 属性说明
从根到自己
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
| 值 | ， |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-简称（SHORT）
#### 属性说明
简称
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
| 值 | / |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-id（PARENT）
#### 属性说明
id
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
| 关系实体 | [需求模块（IBZPRO_STORYMODULE）](../ibizpro/IBZProStoryModule) |
| 关系属性 | [id（ID）](../ibizpro/IBZProStoryModule/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品（PRODUCTNAME）
#### 属性说明
产品
#### 属性类型
链接字段[来自关系实体字段]


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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-owner（OWNER）
#### 属性说明
owner
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
| 值 | / |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-collector（COLLECTOR）
#### 属性说明
collector
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
| 值 | / |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-已删除（DELETED）
#### 属性说明
已删除
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求模块类型（IBIZ_STORYTYPE）
#### 属性说明
需求模块类型
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
参照数据字典【[需求模块类型（Ibizpro_storymodule__type）](../../codelist/Ibizpro_storymodule__type)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

