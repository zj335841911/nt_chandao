# 实体-后台服务架构(PSSYSSFPUB)
## 实体说明
后台服务架构

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [后台服务架构名称](#属性-后台服务架构名称（PSSYSSFPUBNAME）) | PSSYSSFPUBNAME | TEXT | 否 | 否 | 是 | -- |
| 2 | [后台服务架构标识](#属性-后台服务架构标识（PSSYSSFPUBID）) | PSSYSSFPUBID | GUID | 是 | 否 | 否 | -- |
| 3 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | TEXT | 否 | 否 | 否 | -- |
| 4 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | TEXT | 否 | 否 | 否 | -- |
| 5 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 7 | [代码名称](#属性-代码名称（CODENAME）) | CODENAME | TEXT | 否 | 否 | 是 | -- |
| 8 | [基类代码包名](#属性-基类代码包名（BASECLSPKGCODENAME）) | BASECLSPKGCODENAME | TEXT | 否 | 否 | 是 | -- |
| 9 | [发布内容类型](#属性-发布内容类型（CONTENTTYPE）) | CONTENTTYPE | SSCODELIST | 否 | 否 | 是 | -- |
| 10 | [默认后台服务](#属性-默认后台服务（DEFAULTPUB）) | DEFAULTPUB | YESNO | 否 | 否 | 是 | -- |
| 11 | [文档模板样式](#属性-文档模板样式（DOCPSSFSTYLEID）) | DOCPSSFSTYLEID | TEXT | 否 | 否 | 是 | -- |
| 12 | [文档模板样式](#属性-文档模板样式（DOCPSSFSTYLENAME）) | DOCPSSFSTYLENAME | TEXT | 否 | 否 | 是 | -- |
| 13 | [备注](#属性-备注（MEMO）) | MEMO | LONGTEXT_1000 | 否 | 否 | 是 | -- |
| 14 | [服务框架](#属性-服务框架（PSSFSTYLEID）) | PSSFSTYLEID | TEXT | 否 | 否 | 是 | -- |
| 15 | [服务框架参数](#属性-服务框架参数（PSSFSTYLEPARAMID）) | PSSFSTYLEPARAMID | TEXT | 否 | 否 | 是 | -- |
| 16 | [代码包名](#属性-代码包名（PKGCODENAME）) | PKGCODENAME | TEXT | 否 | 否 | 是 | -- |
| 17 | [服务框架扩展](#属性-服务框架扩展（PSSFSTYLEVERID）) | PSSFSTYLEVERID | TEXT | 否 | 否 | 是 | -- |
| 18 | [服务框架参数](#属性-服务框架参数（PSSFSTYLEPARAMNAME）) | PSSFSTYLEPARAMNAME | TEXT | 否 | 否 | 是 | -- |
| 19 | [服务目录](#属性-服务目录（PUBFOLDER）) | PUBFOLDER | TEXT | 否 | 否 | 是 | -- |
| 20 | [发布标记](#属性-发布标记（PUBTAG）) | PUBTAG | TEXT | 否 | 否 | 是 | -- |
| 21 | [发布标记3](#属性-发布标记3（PUBTAG3）) | PUBTAG3 | TEXT | 否 | 否 | 是 | -- |
| 22 | [发布标记2](#属性-发布标记2（PUBTAG2）) | PUBTAG2 | TEXT | 否 | 否 | 是 | -- |
| 23 | [发布标记4](#属性-发布标记4（PUBTAG4）) | PUBTAG4 | TEXT | 否 | 否 | 是 | -- |
| 24 | [删除模式](#属性-删除模式（REMOVEFLAG）) | REMOVEFLAG | NSCODELIST | 否 | 否 | 是 | -- |
| 25 | [服务框架参数](#属性-服务框架参数（STYLEPARAMS）) | STYLEPARAMS | LONGTEXT_1000 | 否 | 否 | 是 | -- |
| 26 | [引用系统组件](#属性-引用系统组件（SUBSYSPKGFLAG）) | SUBSYSPKGFLAG | YESNO | 否 | 否 | 是 | -- |
| 27 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | SSCODELIST | 否 | 否 | 是 | -- |
| 28 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | TEXT | 否 | 否 | 是 | -- |
| 29 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | TEXT | 否 | 否 | 是 | -- |
| 30 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | TEXT | 否 | 否 | 是 | -- |
| 31 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | TEXT | 否 | 否 | 是 | -- |
| 32 | [版本号](#属性-版本号（VERSTR）) | VERSTR | TEXT | 否 | 否 | 是 | -- |
| 33 | [父后台服务体系](#属性-父后台服务体系（PPSSYSSFPUBID）) | PPSSYSSFPUBID | PICKUP | 否 | 是 | 是 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) - [后台服务架构标识（PSSYSSFPUBID）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构标识（PSSYSSFPUBID）) |
| 34 | [父后台服务体系](#属性-父后台服务体系（PPSSYSSFPUBNAME）) | PPSSYSSFPUBNAME | PICKUPTEXT | 否 | 是 | 是 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) - [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 35 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | TEXT | 否 | 是 | 是 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) - [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 36 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | TEXT | 否 | 是 | 是 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) - [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |

### 属性-后台服务架构名称（PSSYSSFPUBNAME）
#### 属性说明
后台服务架构名称
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-后台服务架构标识（PSSYSSFPUBID）
#### 属性说明
后台服务架构标识
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-代码名称（CODENAME）
#### 属性说明
代码名称
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-基类代码包名（BASECLSPKGCODENAME）
#### 属性说明
基类代码包名
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-发布内容类型（CONTENTTYPE）
#### 属性说明
发布内容类型
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-默认后台服务（DEFAULTPUB）
#### 属性说明
默认后台服务
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-文档模板样式（DOCPSSFSTYLEID）
#### 属性说明
文档模板样式
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-文档模板样式（DOCPSSFSTYLENAME）
#### 属性说明
文档模板样式
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-服务框架（PSSFSTYLEID）
#### 属性说明
服务框架
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-服务框架参数（PSSFSTYLEPARAMID）
#### 属性说明
服务框架参数
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-代码包名（PKGCODENAME）
#### 属性说明
代码包名
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-服务框架扩展（PSSFSTYLEVERID）
#### 属性说明
服务框架扩展
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-服务框架参数（PSSFSTYLEPARAMNAME）
#### 属性说明
服务框架参数
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-服务目录（PUBFOLDER）
#### 属性说明
服务目录
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-发布标记（PUBTAG）
#### 属性说明
发布标记
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-发布标记3（PUBTAG3）
#### 属性说明
发布标记3
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-发布标记2（PUBTAG2）
#### 属性说明
发布标记2
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-发布标记4（PUBTAG4）
#### 属性说明
发布标记4
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-删除模式（REMOVEFLAG）
#### 属性说明
删除模式
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
NSCODELIST

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-服务框架参数（STYLEPARAMS）
#### 属性说明
服务框架参数
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-引用系统组件（SUBSYSPKGFLAG）
#### 属性说明
引用系统组件
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-版本号（VERSTR）
#### 属性说明
版本号
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父后台服务体系（PPSSYSSFPUBID）
#### 属性说明
父后台服务体系
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构标识（PSSYSSFPUBID）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构标识（PSSYSSFPUBID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父后台服务体系（PPSSYSSFPUBNAME）
#### 属性说明
父后台服务体系
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

