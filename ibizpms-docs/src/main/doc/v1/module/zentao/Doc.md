
# 实体-文档(ZT_DOC)
## 实体说明
文档

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [文档内容（ZT_DOCCONTENT）](../zentao/DocContent) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [文档库（ZT_DOCLIB）](../zentao/DocLib) | （默认） |
| 2 | [模块（ZT_MODULE）](../zentao/Module) | （默认） |
| 3 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |
| 4 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [分组](#属性-分组（GROUPS）) | GROUPS | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [更新时间](#属性-更新时间（EDITEDDATE）) | EDITEDDATE | 日期时间型 | 否 | 否 | 是 |
| 3 | [views](#属性-views（VIEWS）) | VIEWS | 整型 | 否 | 否 | 是 |
| 4 | [版本号](#属性-版本号（VERSION）) | VERSION | 整型 | 否 | 否 | 是 |
| 5 | [由谁更新](#属性-由谁更新（EDITEDBY）) | EDITEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [文档编号](#属性-文档编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 7 | [文档标题](#属性-文档标题（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 否 |
| 8 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [文档类型](#属性-文档类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 10 | [添加时间](#属性-添加时间（ADDEDDATE）) | ADDEDDATE | 日期时间型 | 否 | 否 | 是 |
| 11 | [权限](#属性-权限（ACL）) | ACL | 单项选择(文本值) | 否 | 否 | 是 |
| 12 | [用户](#属性-用户（USERS）) | USERS | 长文本，没有长度限制 | 否 | 否 | 是 |
| 13 | [关键字](#属性-关键字（KEYWORDS）) | KEYWORDS | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [收藏者](#属性-收藏者（COLLECTOR）) | COLLECTOR | 长文本，没有长度限制 | 否 | 否 | 是 |
| 15 | [由谁添加](#属性-由谁添加（ADDEDBY）) | ADDEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [所属文档库](#属性-所属文档库（LIB）) | LIB | 外键值 | 否 | 是 | 是 |
| 17 | [所属项目](#属性-所属项目（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 18 | [所属产品](#属性-所属产品（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |
| 19 | [所属分类](#属性-所属分类（MODULE）) | MODULE | 外键值 | 否 | 是 | 是 |
| 20 | [所属项目](#属性-所属项目（PROJECTNAME）) | PROJECTNAME | 外键值文本 | 否 | 是 | 是 |
| 21 | [所属产品](#属性-所属产品（PRODUCTNAME）) | PRODUCTNAME | 外键值文本 | 否 | 是 | 是 |
| 22 | [所属文档库](#属性-所属文档库（LIBNAME）) | LIBNAME | 外键值文本 | 否 | 是 | 是 |
| 23 | [模块分类](#属性-模块分类（MODULENAME）) | MODULENAME | 外键值文本 | 否 | 是 | 是 |
| 24 | [文档正文](#属性-文档正文（CONTENT）) | CONTENT | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 25 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 是 | 是 |
| 26 | [文档链接](#属性-文档链接（URL）) | URL | 文本，可指定长度 | 否 | 是 | 是 |
| 27 | [文档查询类型](#属性-文档查询类型（DOCQTYPE）) | DOCQTYPE | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-分组（GROUPS）
#### 属性说明
选择权限为自定义生效

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-更新时间（EDITEDDATE）
#### 属性说明
更新时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd HH:mm:ss

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-views（VIEWS）
#### 属性说明
views

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-版本号（VERSION）
#### 属性说明
版本号

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 1 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁更新（EDITEDBY）
#### 属性说明
由谁更新

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档编号（ID）
#### 属性说明
文档编号

- 是否是主键
是

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
自增标识，整数类型，用户不可见

- Java类型
Long

- 是否允许为空
否

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档标题（TITLE）
#### 属性说明
文档标题

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
否

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-已删除（DELETED）
#### 属性说明
已删除

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档类型（TYPE）
#### 属性说明
文档类型

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[文档类型（Doc__type）](../../codelist/Doc__type)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-添加时间（ADDEDDATE）
#### 属性说明
添加时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd HH:mm:ss

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-权限（ACL）
#### 属性说明
权限

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | open |

- 取值范围/公式
参照数据字典【[文档权限（Doc__acl）](../../codelist/Doc__acl)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用户（USERS）
#### 属性说明
选择权限为自定义生效

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关键字（KEYWORDS）
#### 属性说明
关键字

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-收藏者（COLLECTOR）
#### 属性说明
收藏者

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁添加（ADDEDBY）
#### 属性说明
由谁添加

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属文档库（LIB）
#### 属性说明
所属文档库

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

- Java类型
Long

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [文档库（ZT_DOCLIB）](../zentao/DocLib) |
| 关系属性 | [编号（ID）](../zentao/DocLib/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属项目（PROJECT）
#### 属性说明
所属项目

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

- Java类型
Long

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属产品（PRODUCT）
#### 属性说明
所属产品

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

- Java类型
Long

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属分类（MODULE）
#### 属性说明
所属分类

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

- Java类型
Long

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属项目（PROJECTNAME）
#### 属性说明
所属项目

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值文本

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属产品（PRODUCTNAME）
#### 属性说明
所属产品

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值文本

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属文档库（LIBNAME）
#### 属性说明
所属文档库

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值文本

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [文档库（ZT_DOCLIB）](../zentao/DocLib) |
| 关系属性 | [文档库名称（NAME）](../zentao/DocLib/#属性-文档库名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-模块分类（MODULENAME）
#### 属性说明
模块分类

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值文本

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档正文（CONTENT）
#### 属性说明
文档正文

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
HTML文本，没有长度限制

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-附件（FILES）
#### 属性说明
附件

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档链接（URL）
#### 属性说明
文档链接

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档查询类型（DOCQTYPE）
#### 属性说明
文档查询类型

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
'doc'
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |


## 业务状态
无

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [根据版本更新正文信息](#实体行为-根据版本更新正文信息（ByVersionUpdateContext）) | ByVersionUpdateContext | 用户自定义 | 后台 |
| 7 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

### 实体行为-Create（Create）
#### 说明
Create

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Update（Update）
#### 说明
Update

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Remove（Remove）
#### 说明
Remove

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Get（Get）
#### 说明
Get

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-根据版本更新正文信息（ByVersionUpdateContext）
#### 说明
根据版本更新正文信息

- 行为类型
用户自定义

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-CheckKey（CheckKey）
#### 说明
CheckKey

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Save（Save）
#### 说明
Save

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [根据版本更新正文信息](#逻辑处理-根据版本更新正文信息（ByVersionUpdateContext）) | ByVersionUpdateContext | 后台 |

### 逻辑处理-根据版本更新正文信息（ByVersionUpdateContext）
#### 说明
根据版本更新正文信息

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取正文信息 | Rawsqlcall1 | 直接SQL调用 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [文档标题（TITLE）](#属性-文档标题（TITLE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [文档标题（TITLE）](#属性-文档标题（TITLE）) | `%like%` |
| 2 | [文档类型（TYPE）](#属性-文档类型（TYPE）) | `=` |
| 3 | [权限（ACL）](#属性-权限（ACL）) | `=` |
| 4 | [所属文档库（LIB）](#属性-所属文档库（LIB）) | `=` |
| 5 | [所属项目（PROJECT）](#属性-所属项目（PROJECT）) | `=` |
| 6 | [所属产品（PRODUCT）](#属性-所属产品（PRODUCT）) | `=` |
| 7 | [所属分类（MODULE）](#属性-所属分类（MODULE）) | `=` |
| 8 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `=` |
| 9 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `%like%` |
| 10 | [所属产品（PRODUCTNAME）](#属性-所属产品（PRODUCTNAME）) | `=` |
| 11 | [所属产品（PRODUCTNAME）](#属性-所属产品（PRODUCTNAME）) | `%like%` |
| 12 | [所属文档库（LIBNAME）](#属性-所属文档库（LIBNAME）) | `=` |
| 13 | [所属文档库（LIBNAME）](#属性-所属文档库（LIBNAME）) | `%like%` |
| 14 | [模块分类（MODULENAME）](#属性-模块分类（MODULENAME）) | `=` |
| 15 | [模块分类（MODULENAME）](#属性-模块分类（MODULENAME）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [文档库文档（子库）](#数据查询-文档库文档（子库）（ChildDocLibDoc）) | ChildDocLibDoc | 否 |
| 2 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 3 | [文档库文档](#数据查询-文档库文档（DocLibDoc）) | DocLibDoc | 否 |
| 4 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-文档库文档（子库）（ChildDocLibDoc）
#### 说明
文档库文档（子库）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (select null as `ACL`,
null as `ADDEDBY`,
null as `ADDEDDATE`,
'0' as `DELETED`,
null as `EDITEDBY`,
null as `EDITEDDATE`,
null as  `GROUPS`,
t1.`ID`,
''`KEYWORDS`,
${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} as `LIB`,
'' AS `LIBNAME`,
0 as `MODULE`,
'' AS `MODULENAME`,
0 as `PRODUCT`,
'' AS `PRODUCTNAME`,
0 as `PROJECT`,
'' AS `PROJECTNAME`,
t1.`name` as `TITLE`,
'text' as `TYPE`,
1 as `VERSION`,
'' as `VIEWS`,'module' as DOCQTYPE from zt_module t1 where t1.deleted = '0' and t1.type = 'doc' and t1.root = ${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} and t1.parent = ${srfdatacontext('parent','{"defname":"ROOT","dename":"ZT_MODULE"}')}
UNION
SELECT
t1.`ACL`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`,
'doc' as DOCQTYPE
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID ) t1
```
### 数据查询-DEFAULT（Default）
#### 说明
DEFAULT

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
'doc' AS `DOCQTYPE`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID 

```
### 数据查询-文档库文档（DocLibDoc）
#### 说明
文档库文档

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (select null as `ACL`,
null as `ADDEDBY`,
null as `ADDEDDATE`,
'0' as `DELETED`,
null as `EDITEDBY`,
null as `EDITEDDATE`,
null as  `GROUPS`,
t1.`ID`,
''`KEYWORDS`,
${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} as `LIB`,
'' AS `LIBNAME`,
0 as `MODULE`,
'' AS `MODULENAME`,
0 as `PRODUCT`,
'' AS `PRODUCTNAME`,
0 as `PROJECT`,
'' AS `PROJECTNAME`,
t1.`name` as `TITLE`,
'text' as `TYPE`,
1 as `VERSION`,
'' as `VIEWS`,'module' as DOCQTYPE from zt_module t1 where t1.deleted = '0' and t1.type = 'doc' and t1.root = ${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} and t1.parent = ${srfdatacontext('parent','{"defname":"ROOT","dename":"ZT_MODULE"}')}
UNION
SELECT
t1.`ACL`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`,
'doc' as DOCQTYPE
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID ) t1
```
### 数据查询-默认（全部数据）（View）
#### 说明
默认（全部数据）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`COLLECTOR`,
t1.`DELETED`,
'doc' AS `DOCQTYPE`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`USERS`,
t1.`VERSION`,
t1.`VIEWS`
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [文档库文档（子库）](#数据集合-文档库文档（子库）（ChildDocLibDoc）) | ChildDocLibDoc | 否 |
| 2 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 3 | [文档库文档](#数据集合-文档库文档（DocLibDoc）) | DocLibDoc | 否 |

### 数据集合-文档库文档（子库）（ChildDocLibDoc）
#### 说明
文档库文档（子库）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文档库文档（子库）（ChildDocLibDoc）](#数据查询-文档库文档（子库）（ChildDocLibDoc）) |
### 数据集合-DEFAULT（Default）
#### 说明
DEFAULT

- 默认集合
是

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [DEFAULT（Default）](#数据查询-DEFAULT（Default）) |
### 数据集合-文档库文档（DocLibDoc）
#### 说明
文档库文档

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文档库文档（DocLibDoc）](#数据查询-文档库文档（DocLibDoc）) |

## 数据导入
无

## 数据导出
无

