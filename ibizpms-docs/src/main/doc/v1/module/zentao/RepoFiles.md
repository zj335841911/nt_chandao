# 实体-repofiles(ZT_REPOFILES)
## 实体说明
repofiles

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [path](#属性-path（PATH）) | PATH | TEXT | 否 | 否 | 是 |
| 2 | [type](#属性-type（TYPE）) | TYPE | TEXT | 否 | 否 | 是 |
| 3 | [revision](#属性-revision（REVISION）) | REVISION | INT | 否 | 否 | 是 |
| 4 | [action](#属性-action（ACTION）) | ACTION | TEXT | 否 | 否 | 是 |
| 5 | [repo](#属性-repo（REPO）) | REPO | INT | 否 | 否 | 是 |
| 6 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 |
| 7 | [parent](#属性-parent（PARENT）) | PARENT | PICKUP | 否 | 是 | 是 |

### 属性-path（PATH）
#### 属性说明
path

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
整型

#### Java类型
Integer

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
整型

#### Java类型
Integer

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
外键值

#### Java类型
Long

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



