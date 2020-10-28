# 实体-需求(IBZPRO_STORY)
## 实体说明
需求

## 所属模块
[iBizPro模块](../ibizpro)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [编号](#属性-编号（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 2 | [需求名称](#属性-需求名称（TITLE）) | TITLE | TEXT | 否 | 否 | 否 | -- |
| 3 | [id](#属性-id（MODULE）) | MODULE | PICKUP | 否 | 是 | 是 | [需求模块（IBZPRO_STORYMODULE）](../ibizpro/IBZProStoryModule) - [id（ID）](../ibizpro/IBZProStoryModule/#属性-id（ID）) |
| 4 | [编号](#属性-编号（PRODUCT）) | PRODUCT | PICKUP | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 5 | [IBIZ标识](#属性-IBIZ标识（IBIZ_ID）) | IBIZ_ID | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 6 | [需求来源](#属性-需求来源（SOURCE）) | SOURCE | SSCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 7 | [来源备注](#属性-来源备注（SOURCENOTE）) | SOURCENOTE | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 8 | [来源对象](#属性-来源对象（IBIZ_SOURCEOBJECT）) | IBIZ_SOURCEOBJECT | SSCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 9 | [来源对象名称](#属性-来源对象名称（IBIZ_SOURCENAME）) | IBIZ_SOURCENAME | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 10 | [来源对象标识](#属性-来源对象标识（IBIZ_SOURCEID）) | IBIZ_SOURCEID | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 11 | [版本号](#属性-版本号（VERSION）) | VERSION | INT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 12 | [预计工时](#属性-预计工时（ESTIMATE）) | ESTIMATE | FLOAT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 13 | [关键词](#属性-关键词（KEYWORDS）) | KEYWORDS | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 14 | [创建日期](#属性-创建日期（OPENEDDATE）) | OPENEDDATE | DATETIME | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 15 | [最后修改日期](#属性-最后修改日期（LASTEDITEDDATE）) | LASTEDITEDDATE | DATETIME | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 16 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 17 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 18 | [状态](#属性-状态（STATUS）) | STATUS | SSCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 19 | [需求类型](#属性-需求类型（TYPE）) | TYPE | SSCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 20 | [需求阶段](#属性-需求阶段（STAGE）) | STAGE | SSCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 21 | [优先级](#属性-优先级（PRI）) | PRI | INT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 22 | [颜色](#属性-颜色（COLOR）) | COLOR | SSCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 23 | [项目](#属性-项目（PROJECT）) | PROJECT | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 24 | [设置阶段者](#属性-设置阶段者（STAGEDBY）) | STAGEDBY | SSCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 25 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 26 | [指派日期](#属性-指派日期（ASSIGNEDDATE）) | ASSIGNEDDATE | DATETIME | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 27 | [由谁评审](#属性-由谁评审（REVIEWEDBY）) | REVIEWEDBY | SMCODELIST | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 28 | [评审时间](#属性-评审时间（REVIEWEDDATE）) | REVIEWEDDATE | DATE | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 29 | [平台](#属性-平台（BRANCH）) | BRANCH | INT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 30 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 31 | [最后修改者](#属性-最后修改者（LASTEDITEDBY）) | LASTEDITEDBY | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 32 | [需求细分](#属性-需求细分（CHILDSTORIES）) | CHILDSTORIES | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 33 | [相关需求](#属性-相关需求（LINKSTORIES）) | LINKSTORIES | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 34 | [由谁关闭](#属性-由谁关闭（CLOSEDBY）) | CLOSEDBY | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 35 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 36 | [关闭日期	](#属性-关闭日期	（CLOSEDDATE）) | CLOSEDDATE | DATETIME | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 37 | [关闭原因](#属性-关闭原因（CLOSEDREASON）) | CLOSEDREASON | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 38 | [转Bug](#属性-转Bug（TOBUG）) | TOBUG | INT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 39 | [重复需求](#属性-重复需求（DUPLICATESTORY）) | DUPLICATESTORY | INT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 40 | [来源Bug](#属性-来源Bug（FROMBUG）) | FROMBUG | INT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 41 | [需求描述](#属性-需求描述（SPEC）) | SPEC | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 42 | [验收标准](#属性-验收标准（VERIFY）) | VERIFY | TEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 43 | [备注](#属性-备注（COMMENT）) | COMMENT | HTMLTEXT | 否 | 是 | 是 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) - [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |

### 属性-编号（ID）
#### 属性说明
编号

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求名称（TITLE）
#### 属性说明
需求名称

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-id（MODULE）
#### 属性说明
id

#### 属性类型
物理属性[实体属性]

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

### 属性-编号（PRODUCT）
#### 属性说明
编号

#### 属性类型
物理属性[实体属性]

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求来源（SOURCE）
#### 属性说明
需求来源

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
| 值 | iBiz |

#### 取值范围/公式
参照数据字典【[需求来源（Story__source）](../../codelist/Story__source)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-来源备注（SOURCENOTE）
#### 属性说明
来源备注

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-来源对象（IBIZ_SOURCEOBJECT）
#### 属性说明
来源对象

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
参照数据字典【[来源对象（Ibizpro_story__sourceobject）](../../codelist/Ibizpro_story__sourceobject)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-来源对象名称（IBIZ_SOURCENAME）
#### 属性说明
来源对象名称

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-来源对象标识（IBIZ_SOURCEID）
#### 属性说明
来源对象标识

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-版本号（VERSION）
#### 属性说明
每次更新内容，会自动加1（只有真正更新数据才会更新，例如打开编辑/变更需求，没有进行任何修改点击保存，是不会更新该笔数据）

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
| 值 | 1 |

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

### 属性-预计工时（ESTIMATE）
#### 属性说明
预计工时

#### 属性类型
物理属性[实体属性]

#### 数据类型
FLOAT

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

### 属性-关键词（KEYWORDS）
#### 属性说明
关键词

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-创建日期（OPENEDDATE）
#### 属性说明
创建日期

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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-最后修改日期（LASTEDITEDDATE）
#### 属性说明
最后修改日期

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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-已删除（DELETED）
#### 属性说明
已删除

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

### 属性-由谁创建（OPENEDBY）
#### 属性说明
由谁创建

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-状态（STATUS）
#### 属性说明
状态

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
参照数据字典【[需求状态（Story__status）](../../codelist/Story__status)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求类型（TYPE）
#### 属性说明
需求类型

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
参照数据字典【[需求类型（Story__type）](../../codelist/Story__type)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求阶段（STAGE）
#### 属性说明
需求阶段

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
参照数据字典【[需求阶段（Story__stage）](../../codelist/Story__stage)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-优先级（PRI）
#### 属性说明
优先级

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
| 值 |  |

#### 取值范围/公式
参照数据字典【[需求优先级（Story__pri）](../../codelist/Story__pri)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-颜色（COLOR）
#### 属性说明
颜色

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
参照数据字典【[需求颜色（Story__color）](../../codelist/Story__color)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-项目（PROJECT）
#### 属性说明
项目

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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

### 属性-设置阶段者（STAGEDBY）
#### 属性说明
设置阶段者

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-指派给（ASSIGNEDTO）
#### 属性说明
指派给

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-指派日期（ASSIGNEDDATE）
#### 属性说明
指派日期

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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁评审（REVIEWEDBY）
#### 属性说明
由谁评审

#### 属性类型
物理属性[实体属性]

#### 数据类型
SMCODELIST

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

### 属性-评审时间（REVIEWEDDATE）
#### 属性说明
评审时间

#### 属性类型
物理属性[实体属性]

#### 数据类型
DATE

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
时间格式：yyyy-MM-dd

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-平台（BRANCH）
#### 属性说明
平台

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

### 属性-抄送给（MAILTO）
#### 属性说明
抄送给

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-最后修改者（LASTEDITEDBY）
#### 属性说明
最后修改者

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求细分（CHILDSTORIES）
#### 属性说明
需求细分

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-相关需求（LINKSTORIES）
#### 属性说明
相关需求

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁关闭（CLOSEDBY）
#### 属性说明
由谁关闭

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-子状态（SUBSTATUS）
#### 属性说明
子状态

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关闭日期	（CLOSEDDATE）
#### 属性说明
关闭日期	

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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关闭原因（CLOSEDREASON）
#### 属性说明
关闭原因

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-转Bug（TOBUG）
#### 属性说明
转Bug

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

### 属性-重复需求（DUPLICATESTORY）
#### 属性说明
重复需求

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

### 属性-来源Bug（FROMBUG）
#### 属性说明
来源Bug

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

### 属性-需求描述（SPEC）
#### 属性说明
需求描述

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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

### 属性-验收标准（VERIFY）
#### 属性说明
验收标准

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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

### 属性-备注（COMMENT）
#### 属性说明
备注

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

#### 数据类型
HTMLTEXT

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

