# 实体-系统需求模块(PSSYSREQMODULE)
## 实体说明
系统需求模块

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [系统需求模块名称](#属性-系统需求模块名称（PSSYSREQMODULENAME）) | PSSYSREQMODULENAME | TEXT | 否 | 否 | 是 | -- |
| 2 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 3 | [系统需求模块标识](#属性-系统需求模块标识（PSSYSREQMODULEID）) | PSSYSREQMODULEID | GUID | 是 | 否 | 否 | -- |
| 4 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | TEXT | 否 | 否 | 否 | -- |
| 5 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | TEXT | 否 | 否 | 否 | -- |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 7 | [内容](#属性-内容（CONTENT）) | CONTENT | LONGTEXT | 否 | 否 | 是 | -- |
| 8 | [代码标识](#属性-代码标识（CODENAME）) | CODENAME | TEXT | 否 | 否 | 是 | -- |
| 9 | [备注](#属性-备注（MEMO）) | MEMO | LONGTEXT_1000 | 否 | 否 | 是 | -- |
| 10 | [模块标记](#属性-模块标记（MODULETAG）) | MODULETAG | TEXT | 否 | 否 | 是 | -- |
| 11 | [模块编号](#属性-模块编号（MODULESN）) | MODULESN | TEXT | 否 | 否 | 否 | -- |
| 12 | [模块标记2](#属性-模块标记2（MODULETAG2）) | MODULETAG2 | TEXT | 否 | 否 | 是 | -- |
| 13 | [模块标记3](#属性-模块标记3（MODULETAG3）) | MODULETAG3 | TEXT | 否 | 否 | 是 | -- |
| 14 | [模块标记4](#属性-模块标记4（MODULETAG4）) | MODULETAG4 | TEXT | 否 | 否 | 是 | -- |
| 15 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | SSCODELIST | 否 | 否 | 是 | -- |
| 16 | [排序值](#属性-排序值（ORDERVALUE）) | ORDERVALUE | INT | 否 | 否 | 是 | -- |
| 17 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | TEXT | 否 | 否 | 是 | -- |
| 18 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | TEXT | 否 | 否 | 是 | -- |
| 19 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | TEXT | 否 | 否 | 是 | -- |
| 20 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | TEXT | 否 | 否 | 是 | -- |
| 21 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | TEXT | 否 | 否 | 是 | -- |
| 22 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | TEXT | 否 | 否 | 是 | -- |
| 23 | [父需求模块](#属性-父需求模块（PPSSYSREQMODULEID）) | PPSSYSREQMODULEID | PICKUP | 否 | 是 | 是 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) - [系统需求模块标识（PSSYSREQMODULEID）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块标识（PSSYSREQMODULEID）) |
| 24 | [父需求模块](#属性-父需求模块（PPSSYSREQMODULENAME）) | PPSSYSREQMODULENAME | PICKUPTEXT | 否 | 是 | 是 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) - [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 25 | [系统模块](#属性-系统模块（PSMODULEID）) | PSMODULEID | PICKUP | 否 | 是 | 是 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) - [系统模块标识（PSMODULEID）](../ibizsysmodel/PSModule/#属性-系统模块标识（PSMODULEID）) |
| 26 | [系统模块](#属性-系统模块（PSMODULENAME）) | PSMODULENAME | PICKUPTEXT | 否 | 是 | 是 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) - [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |

### 属性-系统需求模块名称（PSSYSREQMODULENAME）
#### 属性说明
系统需求模块名称
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-建立时间（CREATEDATE）
#### 属性说明
建立时间
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
DATETIME

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
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统需求模块标识（PSSYSREQMODULEID）
#### 属性说明
系统需求模块标识
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
GUID

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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-建立人（CREATEMAN）
#### 属性说明
建立人
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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新人（UPDATEMAN）
#### 属性说明
更新人
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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新时间（UPDATEDATE）
#### 属性说明
更新时间
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
DATETIME

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
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-内容（CONTENT）
#### 属性说明
内容
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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-代码标识（CODENAME）
#### 属性说明
代码标识
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（MEMO）
#### 属性说明
备注
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
LONGTEXT_1000

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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模块标记（MODULETAG）
#### 属性说明
模块标记
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模块编号（MODULESN）
#### 属性说明
模块编号
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模块标记2（MODULETAG2）
#### 属性说明
模块标记2
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模块标记3（MODULETAG3）
#### 属性说明
模块标记3
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模块标记4（MODULETAG4）
#### 属性说明
模块标记4
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户分类（USERCAT）
#### 属性说明
用户分类
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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-排序值（ORDERVALUE）
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
| 值 |  |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记2（USERTAG2）
#### 属性说明
用户标记2
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记（USERTAG）
#### 属性说明
用户标记
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记3（USERTAG3）
#### 属性说明
用户标记3
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记4（USERTAG4）
#### 属性说明
用户标记4
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统（PSSYSTEMID）
#### 属性说明
系统
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统（PSSYSTEMNAME）
#### 属性说明
系统
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父需求模块（PPSSYSREQMODULEID）
#### 属性说明
父需求模块
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块标识（PSSYSREQMODULEID）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块标识（PSSYSREQMODULEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父需求模块（PPSSYSREQMODULENAME）
#### 属性说明
父需求模块
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统模块（PSMODULEID）
#### 属性说明
系统模块
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块标识（PSMODULEID）](../ibizsysmodel/PSModule/#属性-系统模块标识（PSMODULEID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统模块（PSMODULENAME）
#### 属性说明
系统模块
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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

