# 实体-任务模块(IBZ_PROJECTMODULE)
## 实体说明
项目任务模块

## 所属模块
[iBiz增强模块](../ibiz)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [类型（task）](#属性-类型（task）（TYPE）) | TYPE | TEXT | 否 | 否 | 是 | -- |
| 2 | [collector](#属性-collector（COLLECTOR）) | COLLECTOR | LONGTEXT | 否 | 否 | 是 | -- |
| 3 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 4 | [逻辑删除标志](#属性-逻辑删除标志（DELETED）) | DELETED | TEXT | 否 | 否 | 是 | -- |
| 5 | [叶子模块](#属性-叶子模块（ISLEAF）) | ISLEAF | TEXT | 否 | 否 | 是 | -- |
| 6 | [path](#属性-path（PATH）) | PATH | TEXT | 否 | 否 | 是 | -- |
| 7 | [owner](#属性-owner（OWNER）) | OWNER | TEXT | 否 | 否 | 是 | -- |
| 8 | [简称](#属性-简称（SHORT）) | SHORT | TEXT | 否 | 否 | 是 | -- |
| 9 | [名称](#属性-名称（NAME）) | NAME | TEXT | 否 | 否 | 否 | -- |
| 10 | [grade](#属性-grade（GRADE）) | GRADE | INT | 否 | 否 | 是 | -- |
| 11 | [排序值](#属性-排序值（ORDER）) | ORDER | INT | 否 | 否 | 是 | -- |
| 12 | [branch](#属性-branch（BRANCH）) | BRANCH | INT | 否 | 否 | 是 | -- |
| 13 | [id](#属性-id（PARENT）) | PARENT | PICKUP | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [id（ID）](../ibiz/ProjectModule/#属性-id（ID）) |
| 14 | [项目](#属性-项目（ROOT）) | ROOT | PICKUP | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 15 | [所属项目](#属性-所属项目（ROOTNAME）) | ROOTNAME | PICKUPTEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 16 | [上级模块](#属性-上级模块（PARENTNAME）) | PARENTNAME | PICKUPTEXT | 否 | 是 | 是 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) - [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |

### 属性-类型（task）（TYPE）
#### 属性说明
类型（task）
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
| 值 | task |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-逻辑删除标志（DELETED）
#### 属性说明
逻辑删除标志
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-叶子模块（ISLEAF）
#### 属性说明
叶子模块
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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = %1$s) THEN FALSE ELSE TRUE  END )

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-path（PATH）
#### 属性说明
path
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
| 值 | , |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-grade（GRADE）
#### 属性说明
grade
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-排序值（ORDER）
#### 属性说明
排序值
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-branch（BRANCH）
#### 属性说明
branch
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [id（ID）](../ibiz/ProjectModule/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-项目（ROOT）
#### 属性说明
项目
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属项目（ROOTNAME）
#### 属性说明
所属项目
#### 属性类型
物理字段[来自当前实体物理表字段]


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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-上级模块（PARENTNAME）
#### 属性说明
上级模块
#### 属性类型
物理字段[来自当前实体物理表字段]


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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

