# 实体-repofiles(ZT_REPOFILES)
## 实体说明
repofiles

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [path](#属性-path（PATH）) | PATH | TEXT | 否 | 否 | 是 | -- |
| 2 | [type](#属性-type（TYPE）) | TYPE | TEXT | 否 | 否 | 是 | -- |
| 3 | [revision](#属性-revision（REVISION）) | REVISION | INT | 否 | 否 | 是 | -- |
| 4 | [action](#属性-action（ACTION）) | ACTION | TEXT | 否 | 否 | 是 | -- |
| 5 | [repo](#属性-repo（REPO）) | REPO | INT | 否 | 否 | 是 | -- |
| 6 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 7 | [parent](#属性-parent（PARENT）) | PARENT | PICKUP | 否 | 是 | 是 | [repofiles（ZT_REPOFILES）](../zentao/RepoFiles) - [id（ID）](../zentao/RepoFiles/#属性-id（ID）) |

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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [repofiles（ZT_REPOFILES）](../zentao/RepoFiles) |
| 关系属性 | [id（ID）](../zentao/RepoFiles/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-type（TYPE）
#### 属性说明
type
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
| 关系实体 | [repofiles（ZT_REPOFILES）](../zentao/RepoFiles) |
| 关系属性 | [id（ID）](../zentao/RepoFiles/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-revision（REVISION）
#### 属性说明
revision
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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [repofiles（ZT_REPOFILES）](../zentao/RepoFiles) |
| 关系属性 | [id（ID）](../zentao/RepoFiles/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-action（ACTION）
#### 属性说明
action
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
| 关系实体 | [repofiles（ZT_REPOFILES）](../zentao/RepoFiles) |
| 关系属性 | [id（ID）](../zentao/RepoFiles/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-repo（REPO）
#### 属性说明
repo
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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [repofiles（ZT_REPOFILES）](../zentao/RepoFiles) |
| 关系属性 | [id（ID）](../zentao/RepoFiles/#属性-id（ID）) |
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
| 关系实体 | [repofiles（ZT_REPOFILES）](../zentao/RepoFiles) |
| 关系属性 | [id（ID）](../zentao/RepoFiles/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-parent（PARENT）
#### 属性说明
parent
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
| 关系实体 | [repofiles（ZT_REPOFILES）](../zentao/RepoFiles) |
| 关系属性 | [id（ID）](../zentao/RepoFiles/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

