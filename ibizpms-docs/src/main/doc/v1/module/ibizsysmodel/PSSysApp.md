# 实体-系统应用(PSSYSAPP)
## 实体说明
系统应用

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [系统应用标识](#属性-系统应用标识（PSSYSAPPID）) | PSSYSAPPID | GUID | 是 | 否 | 否 | -- |
| 2 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 3 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | TEXT | 否 | 否 | 否 | -- |
| 4 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | TEXT | 否 | 否 | 否 | -- |
| 5 | [系统应用名称](#属性-系统应用名称（PSSYSAPPNAME）) | PSSYSAPPNAME | TEXT | 否 | 否 | 是 | -- |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | DATETIME | 否 | 否 | 否 | -- |
| 7 | [应用目录](#属性-应用目录（APPFOLDER）) | APPFOLDER | TEXT | 否 | 否 | 是 | -- |
| 8 | [代码名称](#属性-代码名称（APPPKGNAME）) | APPPKGNAME | TEXT | 否 | 否 | 否 | -- |
| 9 | [应用模式](#属性-应用模式（APPMODE）) | APPMODE | SSCODELIST | 否 | 否 | 是 | -- |
| 10 | [应用标记](#属性-应用标记（APPTAG）) | APPTAG | TEXT | 否 | 否 | 是 | -- |
| 11 | [应用编号](#属性-应用编号（APPSN）) | APPSN | TEXT | 否 | 否 | 是 | -- |
| 12 | [应用标记2](#属性-应用标记2（APPTAG2）) | APPTAG2 | TEXT | 否 | 否 | 是 | -- |
| 13 | [应用标记4](#属性-应用标记4（APPTAG4）) | APPTAG4 | TEXT | 否 | 否 | 是 | -- |
| 14 | [应用标记3](#属性-应用标记3（APPTAG3）) | APPTAG3 | TEXT | 否 | 否 | 是 | -- |
| 15 | [自动添加应用视图](#属性-自动添加应用视图（AUTOADDAPPVIEW）) | AUTOADDAPPVIEW | YESNO | 否 | 否 | 是 | -- |
| 16 | [按钮无权限显示模式](#属性-按钮无权限显示模式（BTNNOPRIVDM）) | BTNNOPRIVDM | NSCODELIST | 否 | 否 | 是 | -- |
| 17 | [代码目录](#属性-代码目录（CODEFOLDER）) | CODEFOLDER | TEXT | 否 | 否 | 是 | -- |
| 18 | [默认应用](#属性-默认应用（DEFAULTPUB）) | DEFAULTPUB | YESNO | 否 | 否 | 是 | -- |
| 19 | [支持动态系统](#属性-支持动态系统（ENABLEDYNASYS）) | ENABLEDYNASYS | YESNO | 否 | 否 | 是 | -- |
| 20 | [转换12列至24列布局](#属性-转换12列至24列布局（ENABLEC12TOC24）) | ENABLEC12TOC24 | YESNO | 否 | 否 | 是 | -- |
| 21 | [启用本地服务](#属性-启用本地服务（ENALOCALSERVICE）) | ENALOCALSERVICE | YESNO | 否 | 否 | 是 | -- |
| 22 | [表单项无权限显示模式](#属性-表单项无权限显示模式（FINOPRIVDM）) | FINOPRIVDM | NSCODELIST | 否 | 否 | 是 | -- |
| 23 | [启用故事板](#属性-启用故事板（ENABLESTORYBOARD）) | ENABLESTORYBOARD | YESNO | 否 | 否 | 是 | -- |
| 24 | [表格列无权限显示模式](#属性-表格列无权限显示模式（GCNOPRIVDM）) | GCNOPRIVDM | NSCODELIST | 否 | 否 | 是 | -- |
| 25 | [输出表单项更新权限标记](#属性-输出表单项更新权限标记（FIUPDATEPRIVTAG）) | FIUPDATEPRIVTAG | YESNO | 否 | 否 | 是 | -- |
| 26 | [表格适应屏宽](#属性-表格适应屏宽（GRIDFORCEFIT）) | GRIDFORCEFIT | YESNO | 否 | 否 | 是 | -- |
| 27 | [表格列启用链接](#属性-表格列启用链接（GRIDCOLENABLELINK）) | GRIDCOLENABLELINK | NSCODELIST | 否 | 否 | 是 | -- |
| 28 | [图标文件](#属性-图标文件（ICONFILE）) | ICONFILE | TEXT | 否 | 否 | 是 | -- |
| 29 | [表格行激活模式](#属性-表格行激活模式（GRIDROWACTIVEMODE）) | GRIDROWACTIVEMODE | NSCODELIST | 否 | 否 | 是 | -- |
| 30 | [视图主菜单方向](#属性-视图主菜单方向（MAINMENUSIDE）) | MAINMENUSIDE | SSCODELIST | 否 | 否 | 是 | -- |
| 31 | [中文名称](#属性-中文名称（LOGICNAME）) | LOGICNAME | TEXT | 否 | 否 | 是 | -- |
| 32 | [移动端方向设置](#属性-移动端方向设置（ORIENTATIONMODE）) | ORIENTATIONMODE | SSCODELIST | 否 | 否 | 是 | -- |
| 33 | [备注](#属性-备注（MEMO）) | MEMO | LONGTEXT_1000 | 否 | 否 | 是 | -- |
| 34 | [应用样式参数](#属性-应用样式参数（PFSTYLEPARAM）) | PFSTYLEPARAM | LONGTEXT | 否 | 否 | 是 | -- |
| 35 | [防止XSS攻击](#属性-防止XSS攻击（PREVENTXSS）) | PREVENTXSS | YESNO | 否 | 否 | 是 | -- |
| 36 | [应用类型](#属性-应用类型（PSAPPTYPEID）) | PSAPPTYPEID | TEXT | 否 | 否 | 是 | -- |
| 37 | [应用类型](#属性-应用类型（PSAPPTYPENAME）) | PSAPPTYPENAME | TEXT | 否 | 否 | 否 | -- |
| 38 | [应用CDN](#属性-应用CDN（PSPFCDNID）) | PSPFCDNID | TEXT | 否 | 否 | 是 | -- |
| 39 | [应用CDN](#属性-应用CDN（PSPFCDNNAME）) | PSPFCDNNAME | TEXT | 否 | 否 | 是 | -- |
| 40 | [前台技术架构](#属性-前台技术架构（PSPFID）) | PSPFID | TEXT | 否 | 否 | 否 | -- |
| 41 | [应用样式](#属性-应用样式（PSPFSTYLEID）) | PSPFSTYLEID | TEXT | 否 | 否 | 否 | -- |
| 42 | [应用主题](#属性-应用主题（PSSTUDIOTHEMENAME）) | PSSTUDIOTHEMENAME | TEXT | 否 | 否 | 是 | -- |
| 43 | [应用主题](#属性-应用主题（PSSTUDIOTHEMEID）) | PSSTUDIOTHEMEID | TEXT | 否 | 否 | 是 | -- |
| 44 | [只发布引用视图](#属性-只发布引用视图（PUBREFVIEWONLY）) | PUBREFVIEWONLY | YESNO | 否 | 否 | 是 | -- |
| 45 | [只发布系统引用视图（废弃）](#属性-只发布系统引用视图（废弃）（PUBSYSREFVIEWONLY）) | PUBSYSREFVIEWONLY | YESNO | 否 | 否 | 是 | -- |
| 46 | [删除模式](#属性-删除模式（REMOVEFLAG）) | REMOVEFLAG | NSCODELIST | 否 | 否 | 是 | -- |
| 47 | [服务代码名称](#属性-服务代码名称（SERVICECODENAME）) | SERVICECODENAME | TEXT | 否 | 否 | 是 | -- |
| 48 | [起始页图片文件](#属性-起始页图片文件（STARTPAGEFILE）) | STARTPAGEFILE | TEXT | 否 | 否 | 是 | -- |
| 49 | [启用统一认证](#属性-启用统一认证（UACLOGIN）) | UACLOGIN | YESNO | 否 | 否 | 是 | -- |
| 50 | [内建界面式样](#属性-内建界面式样（UISTYLE）) | UISTYLE | SSCODELIST | 否 | 否 | 是 | -- |
| 51 | [默认服务接口](#属性-默认服务接口（PSSYSSERVICEAPINAME）) | PSSYSSERVICEAPINAME | PICKUPTEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口名称（PSSYSSERVICEAPINAME）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口名称（PSSYSSERVICEAPINAME）) |
| 52 | [默认服务接口](#属性-默认服务接口（PSSYSSERVICEAPIID）) | PSSYSSERVICEAPIID | PICKUP | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 53 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | SSCODELIST | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 54 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 55 | [自定义参数](#属性-自定义参数（USERPARAMS）) | USERPARAMS | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 56 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 57 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 58 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 59 | [是否启用](#属性-是否启用（VALIDFLAG）) | VALIDFLAG | YESNO | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 60 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 61 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | TEXT | 否 | 是 | 是 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) - [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |

### 属性-系统应用标识（PSSYSAPPID）
#### 属性说明
系统应用标识

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-建立时间（CREATEDATE）
#### 属性说明
建立时间

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新人（UPDATEMAN）
#### 属性说明
更新人

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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-建立人（CREATEMAN）
#### 属性说明
建立人

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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统应用名称（PSSYSAPPNAME）
#### 属性说明
系统应用名称

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-更新时间（UPDATEDATE）
#### 属性说明
更新时间

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用目录（APPFOLDER）
#### 属性说明
应用目录

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-代码名称（APPPKGNAME）
#### 属性说明
代码名称

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用模式（APPMODE）
#### 属性说明
应用模式

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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用标记（APPTAG）
#### 属性说明
应用标记

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用编号（APPSN）
#### 属性说明
应用编号

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用标记2（APPTAG2）
#### 属性说明
应用标记2

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用标记4（APPTAG4）
#### 属性说明
应用标记4

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用标记3（APPTAG3）
#### 属性说明
应用标记3

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-自动添加应用视图（AUTOADDAPPVIEW）
#### 属性说明
自动添加应用视图

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-按钮无权限显示模式（BTNNOPRIVDM）
#### 属性说明
按钮无权限显示模式

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-代码目录（CODEFOLDER）
#### 属性说明
代码目录

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-默认应用（DEFAULTPUB）
#### 属性说明
默认应用

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-支持动态系统（ENABLEDYNASYS）
#### 属性说明
支持动态系统

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-转换12列至24列布局（ENABLEC12TOC24）
#### 属性说明
转换12列至24列布局

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-启用本地服务（ENALOCALSERVICE）
#### 属性说明
启用本地服务

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-表单项无权限显示模式（FINOPRIVDM）
#### 属性说明
表单项无权限显示模式

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-启用故事板（ENABLESTORYBOARD）
#### 属性说明
启用故事板

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-表格列无权限显示模式（GCNOPRIVDM）
#### 属性说明
表格列无权限显示模式

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-输出表单项更新权限标记（FIUPDATEPRIVTAG）
#### 属性说明
输出表单项更新权限标记

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-表格适应屏宽（GRIDFORCEFIT）
#### 属性说明
表格适应屏宽

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-表格列启用链接（GRIDCOLENABLELINK）
#### 属性说明
表格列启用链接

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-图标文件（ICONFILE）
#### 属性说明
图标文件

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-表格行激活模式（GRIDROWACTIVEMODE）
#### 属性说明
表格行激活模式

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-视图主菜单方向（MAINMENUSIDE）
#### 属性说明
视图主菜单方向

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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-中文名称（LOGICNAME）
#### 属性说明
中文名称

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-移动端方向设置（ORIENTATIONMODE）
#### 属性说明
移动端方向设置

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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（MEMO）
#### 属性说明
备注

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用样式参数（PFSTYLEPARAM）
#### 属性说明
应用样式参数

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-防止XSS攻击（PREVENTXSS）
#### 属性说明
防止XSS攻击

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用类型（PSAPPTYPEID）
#### 属性说明
应用类型

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用类型（PSAPPTYPENAME）
#### 属性说明
应用类型

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用CDN（PSPFCDNID）
#### 属性说明
应用CDN

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用CDN（PSPFCDNNAME）
#### 属性说明
应用CDN

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-前台技术架构（PSPFID）
#### 属性说明
前台技术架构

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用样式（PSPFSTYLEID）
#### 属性说明
应用样式

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用主题（PSSTUDIOTHEMENAME）
#### 属性说明
应用主题

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-应用主题（PSSTUDIOTHEMEID）
#### 属性说明
应用主题

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-只发布引用视图（PUBREFVIEWONLY）
#### 属性说明
只发布引用视图

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-只发布系统引用视图（废弃）（PUBSYSREFVIEWONLY）
#### 属性说明
只发布系统引用视图（废弃）

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-删除模式（REMOVEFLAG）
#### 属性说明
删除模式

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-服务代码名称（SERVICECODENAME）
#### 属性说明
服务代码名称

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-起始页图片文件（STARTPAGEFILE）
#### 属性说明
起始页图片文件

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-启用统一认证（UACLOGIN）
#### 属性说明
启用统一认证

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-内建界面式样（UISTYLE）
#### 属性说明
内建界面式样

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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-默认服务接口（PSSYSSERVICEAPINAME）
#### 属性说明
默认服务接口

#### 属性类型
链接属性[虚拟属性，映射关系实体的属性]

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口名称（PSSYSSERVICEAPINAME）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口名称（PSSYSSERVICEAPINAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-默认服务接口（PSSYSSERVICEAPIID）
#### 属性说明
默认服务接口

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户分类（USERCAT）
#### 属性说明
用户分类

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
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记（USERTAG）
#### 属性说明
用户标记

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-自定义参数（USERPARAMS）
#### 属性说明
自定义参数

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记2（USERTAG2）
#### 属性说明
用户标记2

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记4（USERTAG4）
#### 属性说明
用户标记4

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用户标记3（USERTAG3）
#### 属性说明
用户标记3

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否启用（VALIDFLAG）
#### 属性说明
是否启用

#### 属性类型
物理属性[实体属性]

#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 1 |

#### 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统（PSSYSTEMID）
#### 属性说明
系统

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-系统（PSSYSTEMNAME）
#### 属性说明
系统

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

