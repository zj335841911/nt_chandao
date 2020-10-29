# 实体-测试用例(ZT_CASE)
## 实体说明
测试用例

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [修改日期](#属性-修改日期（LASTEDITEDDATE）) | LASTEDITEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 2 | [scriptedDate](#属性-scriptedDate（SCRIPTEDDATE）) | SCRIPTEDDATE | DATE | 否 | 否 | 是 | -- |
| 3 | [标题颜色](#属性-标题颜色（COLOR）) | COLOR | SSCODELIST | 否 | 否 | 是 | -- |
| 4 | [path](#属性-path（PATH）) | PATH | INT | 否 | 否 | 是 | -- |
| 5 | [创建日期](#属性-创建日期（OPENEDDATE）) | OPENEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 6 | [结果](#属性-结果（LASTRUNRESULT）) | LASTRUNRESULT | SSCODELIST | 否 | 否 | 是 | -- |
| 7 | [相关用例](#属性-相关用例（LINKCASE）) | LINKCASE | TEXT | 否 | 否 | 是 | -- |
| 8 | [排序](#属性-排序（ORDER）) | ORDER | INT | 否 | 否 | 是 | -- |
| 9 | [howRun](#属性-howRun（HOWRUN）) | HOWRUN | TEXT | 否 | 否 | 是 | -- |
| 10 | [用例版本](#属性-用例版本（VERSION）) | VERSION | INT | 否 | 否 | 是 | -- |
| 11 | [scriptedBy](#属性-scriptedBy（SCRIPTEDBY）) | SCRIPTEDBY | TEXT | 否 | 否 | 是 | -- |
| 12 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | TEXT | 否 | 否 | 是 | -- |
| 13 | [用例类型](#属性-用例类型（TYPE）) | TYPE | SSCODELIST | 否 | 否 | 是 | -- |
| 14 | [用例状态](#属性-用例状态（STATUS）) | STATUS | SSCODELIST | 否 | 否 | 是 | -- |
| 15 | [auto](#属性-auto（AUTO）) | AUTO | TEXT | 否 | 否 | 是 | -- |
| 16 | [frequency](#属性-frequency（FREQUENCY）) | FREQUENCY | SSCODELIST | 否 | 否 | 是 | -- |
| 17 | [用例标题](#属性-用例标题（TITLE）) | TITLE | TEXT | 否 | 否 | 否 | -- |
| 18 | [最后修改者](#属性-最后修改者（LASTEDITEDBY）) | LASTEDITEDBY | TEXT | 否 | 否 | 是 | -- |
| 19 | [由谁评审](#属性-由谁评审（REVIEWEDBY）) | REVIEWEDBY | TEXT | 否 | 否 | 是 | -- |
| 20 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 否 | 是 | -- |
| 21 | [评审时间](#属性-评审时间（REVIEWEDDATE）) | REVIEWEDDATE | DATE | 否 | 否 | 是 | -- |
| 22 | [优先级](#属性-优先级（PRI）) | PRI | NSCODELIST | 否 | 否 | 是 | -- |
| 23 | [适用阶段](#属性-适用阶段（STAGE）) | STAGE | SMCODELIST | 否 | 否 | 是 | -- |
| 24 | [scriptLocation](#属性-scriptLocation（SCRIPTLOCATION）) | SCRIPTLOCATION | TEXT | 否 | 否 | 是 | -- |
| 25 | [执行时间](#属性-执行时间（LASTRUNDATE）) | LASTRUNDATE | DATETIME | 否 | 否 | 是 | -- |
| 26 | [关键词](#属性-关键词（KEYWORDS）) | KEYWORDS | TEXT | 否 | 否 | 是 | -- |
| 27 | [scriptStatus](#属性-scriptStatus（SCRIPTSTATUS）) | SCRIPTSTATUS | TEXT | 否 | 否 | 是 | -- |
| 28 | [工具/框架](#属性-工具/框架（FRAME）) | FRAME | SSCODELIST | 否 | 否 | 是 | -- |
| 29 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | TEXT | 否 | 否 | 是 | -- |
| 30 | [用例编号](#属性-用例编号（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 31 | [前置条件](#属性-前置条件（PRECONDITION）) | PRECONDITION | LONGTEXT | 否 | 否 | 是 | -- |
| 32 | [执行人](#属性-执行人（LASTRUNNER）) | LASTRUNNER | TEXT | 否 | 否 | 是 | -- |
| 33 | [来源用例版本](#属性-来源用例版本（FROMCASEVERSION）) | FROMCASEVERSION | PICKUPDATA | 否 | 是 | 是 | [测试用例（ZT_CASE）](../zentao/Case) - [用例版本（VERSION）](../zentao/Case/#属性-用例版本（VERSION）) |
| 34 | [需求版本](#属性-需求版本（STORYVERSION）) | STORYVERSION | PICKUPDATA | 否 | 是 | 是 | [需求（ZT_STORY）](../zentao/Story) - [版本号（VERSION）](../zentao/Story/#属性-版本号（VERSION）) |
| 35 | [来源用例](#属性-来源用例（FROMCASEID）) | FROMCASEID | PICKUP | 否 | 是 | 是 | [测试用例（ZT_CASE）](../zentao/Case) - [用例编号（ID）](../zentao/Case/#属性-用例编号（ID）) |
| 36 | [平台/分支](#属性-平台/分支（BRANCH）) | BRANCH | PICKUP | 否 | 是 | 是 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) - [编号（ID）](../zentao/Branch/#属性-编号（ID）) |
| 37 | [来源Bug](#属性-来源Bug（FROMBUG）) | FROMBUG | PICKUP | 否 | 是 | 是 | [Bug（ZT_BUG）](../zentao/Bug) - [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 38 | [相关需求](#属性-相关需求（STORY）) | STORY | PICKUP | 否 | 是 | 是 | [需求（ZT_STORY）](../zentao/Story) - [编号（ID）](../zentao/Story/#属性-编号（ID）) |
| 39 | [所属产品](#属性-所属产品（PRODUCT）) | PRODUCT | PICKUP | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 40 | [所属库](#属性-所属库（LIB）) | LIB | PICKUP | 否 | 是 | 是 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) - [编号（ID）](../zentao/TestSuite/#属性-编号（ID）) |
| 41 | [所属模块](#属性-所属模块（MODULE）) | MODULE | PICKUP | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 42 | [模块名称](#属性-模块名称（MODULENAME）) | MODULENAME | PICKUPTEXT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 43 | [需求名称](#属性-需求名称（STORYNAME）) | STORYNAME | PICKUPTEXT | 否 | 是 | 是 | [需求（ZT_STORY）](../zentao/Story) - [需求名称（TITLE）](../zentao/Story/#属性-需求名称（TITLE）) |
| 44 | [产品名称](#属性-产品名称（PRODUCTNAME）) | PRODUCTNAME | PICKUPTEXT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 45 | [用例步骤集合](#属性-用例步骤集合（CASESTEPS）) | CASESTEPS | ONE2MANYDATA | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 46 | [转bug数](#属性-转bug数（TOBUGCNT）) | TOBUGCNT | INT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 47 | [测试结果数](#属性-测试结果数（RESULTCNT）) | RESULTCNT | INT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 48 | [用例步骤数](#属性-用例步骤数（STEPCNT）) | STEPCNT | INT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 49 | [备注](#属性-备注（COMMENT）) | COMMENT | HTMLTEXT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 50 | [测试失败数](#属性-测试失败数（RESULTFALICNT）) | RESULTFALICNT | INT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 51 | [用例状态](#属性-用例状态（STATUS1）) | STATUS1 | SSCODELIST | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 52 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | SSCODELIST | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 53 | [属性](#属性-属性（TASK）) | TASK | TEXT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 54 | [用例库](#属性-用例库（LIBNAME）) | LIBNAME | PICKUPTEXT | 否 | 是 | 是 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) - [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 55 | [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）) | LASTRUNRESULT1 | SSCODELIST | 否 | 是 | 是 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) - [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 56 | [是否收藏](#属性-是否收藏（ISFAVORITES）) | ISFAVORITES | TEXT | 否 | 是 | 是 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) - [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 57 | [模块名称](#属性-模块名称（MODULENAME1）) | MODULENAME1 | TEXT | 否 | 是 | 是 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) - [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 58 | [附件](#属性-附件（FILES）) | FILES | TEXT | 否 | 是 | 是 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) - [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |

### 属性-修改日期（LASTEDITEDDATE）
#### 属性说明
修改日期
#### 属性类型
物理字段[来自当前实体物理表字段]


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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-scriptedDate（SCRIPTEDDATE）
#### 属性说明
应该是预留后期使用的字段
#### 属性类型
物理字段[来自当前实体物理表字段]


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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-标题颜色（COLOR）
#### 属性说明
标题颜色
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
| 值 | #EMPTY |

#### 取值范围/公式
参照数据字典【[测试用例颜色（Testcase__color）](../../codelist/Testcase__color)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-path（PATH）
#### 属性说明
path
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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-创建日期（OPENEDDATE）
#### 属性说明
创建日期
#### 属性类型
物理字段[来自当前实体物理表字段]


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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-结果（LASTRUNRESULT）
#### 属性说明
结果
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
| 值 | #EMPTY |

#### 取值范围/公式
参照数据字典【[测试用例结果（Testcase__result）](../../codelist/Testcase__result)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-相关用例（LINKCASE）
#### 属性说明
相关用例
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
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-排序（ORDER）
#### 属性说明
排序
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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-howRun（HOWRUN）
#### 属性说明
应该是预留后期使用的字段
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
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例版本（VERSION）
#### 属性说明
用例版本
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
| 值 | 1 |

#### 取值范围/公式
参照数据字典【[当前用例版本（动态）（CurCaseVersion）](../../codelist/CurCaseVersion)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-scriptedBy（SCRIPTEDBY）
#### 属性说明
应该是预留后期使用的字段
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
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁创建（OPENEDBY）
#### 属性说明
由谁创建
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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例类型（TYPE）
#### 属性说明
用例类型
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
| 值 | feature |

#### 取值范围/公式
参照数据字典【[测试用例类型（Testcase__type）](../../codelist/Testcase__type)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例状态（STATUS）
#### 属性说明
用例状态
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
| 值 | normal |

#### 取值范围/公式
参照数据字典【[测试用例状态（Testcase__status）](../../codelist/Testcase__status)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-auto（AUTO）
#### 属性说明
推测应该是自动测试的flag，代码中值unit、func、no
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
| 值 | no |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-frequency（FREQUENCY）
#### 属性说明
frequency
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
| 值 | 1 |

#### 取值范围/公式
参照数据字典【[ZT_CASE__FREQUENCY（Case__frequency）](../../codelist/Case__frequency)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例标题（TITLE）
#### 属性说明
用例标题
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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-最后修改者（LASTEDITEDBY）
#### 属性说明
最后修改者
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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁评审（REVIEWEDBY）
#### 属性说明
由谁评审
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
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-评审时间（REVIEWEDDATE）
#### 属性说明
评审时间
#### 属性类型
物理字段[来自当前实体物理表字段]


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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-优先级（PRI）
#### 属性说明
优先级
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
| 值 | 3 |

#### 取值范围/公式
参照数据字典【[测试用例优先级（Testcase__pri）](../../codelist/Testcase__pri)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-适用阶段（STAGE）
#### 属性说明
适用阶段
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
SMCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

#### 取值范围/公式
参照数据字典【[测试用例阶段（Testcase__stage）](../../codelist/Testcase__stage)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-scriptLocation（SCRIPTLOCATION）
#### 属性说明
应该是预留后期使用的字段
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
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-执行时间（LASTRUNDATE）
#### 属性说明
执行时间
#### 属性类型
物理字段[来自当前实体物理表字段]


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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关键词（KEYWORDS）
#### 属性说明
关键词
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
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-scriptStatus（SCRIPTSTATUS）
#### 属性说明
应该是预留后期使用的字段
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
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-工具/框架（FRAME）
#### 属性说明
工具/框架
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
| 值 | #EMPTY |

#### 取值范围/公式
参照数据字典【[测试用例工具/框架（Testcase__frame）](../../codelist/Testcase__frame)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-子状态（SUBSTATUS）
#### 属性说明
子状态
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
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例编号（ID）
#### 属性说明
用例编号
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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-前置条件（PRECONDITION）
#### 属性说明
前置条件
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
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-执行人（LASTRUNNER）
#### 属性说明
执行人
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
| 值 | #EMPTY |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-来源用例版本（FROMCASEVERSION）
#### 属性说明
来源用例版本
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUPDATA

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | 0 |

#### 取值范围/公式
参照数据字典【[当前用例版本（动态）（CurCaseVersion）](../../codelist/CurCaseVersion)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试用例（ZT_CASE）](../zentao/Case) |
| 关系属性 | [用例版本（VERSION）](../zentao/Case/#属性-用例版本（VERSION）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求版本（STORYVERSION）
#### 属性说明
需求版本
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUPDATA

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [版本号（VERSION）](../zentao/Story/#属性-版本号（VERSION）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-来源用例（FROMCASEID）
#### 属性说明
来源用例
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试用例（ZT_CASE）](../zentao/Case) |
| 关系属性 | [用例编号（ID）](../zentao/Case/#属性-用例编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-平台/分支（BRANCH）
#### 属性说明
平台/分支
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [编号（ID）](../zentao/Branch/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-来源Bug（FROMBUG）
#### 属性说明
来源Bug
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-相关需求（STORY）
#### 属性说明
相关需求
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [编号（ID）](../zentao/Story/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属产品（PRODUCT）
#### 属性说明
所属产品
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属库（LIB）
#### 属性说明
所属库
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [编号（ID）](../zentao/TestSuite/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属模块（MODULE）
#### 属性说明
所属模块
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模块名称（MODULENAME）
#### 属性说明
模块名称
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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求名称（STORYNAME）
#### 属性说明
需求名称
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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [需求名称（TITLE）](../zentao/Story/#属性-需求名称（TITLE）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品名称（PRODUCTNAME）
#### 属性说明
产品名称
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例步骤集合（CASESTEPS）
#### 属性说明
用例步骤集合
#### 属性类型
应用界面字段[无存储]


#### 数据类型
ONE2MANYDATA

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-转bug数（TOBUGCNT）
#### 属性说明
转bug数
#### 属性类型
逻辑字段[来自计算式]


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
(SELECT COUNT(1) FROM zt_bug WHERE `case` = %1$s )

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-测试结果数（RESULTCNT）
#### 属性说明
测试结果数
#### 属性类型
逻辑字段[来自计算式]


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
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = %1$s )

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例步骤数（STEPCNT）
#### 属性说明
用例步骤数
#### 属性类型
逻辑字段[来自计算式]


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
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = %1$s AND version = %2$s )

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（COMMENT）
#### 属性说明
备注
#### 属性类型
应用界面字段[无存储]


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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-测试失败数（RESULTFALICNT）
#### 属性说明
测试失败数
#### 属性类型
逻辑字段[来自计算式]


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
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = %1$s  and caseResult in('fail','blocked') )

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例状态（STATUS1）
#### 属性说明
用例状态
#### 属性类型
逻辑字段[来自计算式]


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
参照数据字典【[测试用例状态（表格）（TestCaseStatusGrid）](../../codelist/TestCaseStatusGrid)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-指派给（ASSIGNEDTO）
#### 属性说明
指派给
#### 属性类型
应用界面字段[无存储]


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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-属性（TASK）
#### 属性说明
属性
#### 属性类型
应用界面字段[无存储]


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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例库（LIBNAME）
#### 属性说明
用例库
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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-测试用例结果（LASTRUNRESULT1）
#### 属性说明
测试用例结果
#### 属性类型
逻辑字段[来自计算式]


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
参照数据字典【[测试用例结果（Testcase__result）](../../codelist/Testcase__result)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否收藏（ISFAVORITES）
#### 属性说明
是否收藏
#### 属性类型
逻辑字段[来自计算式]


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
0

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-模块名称（MODULENAME1）
#### 属性说明
模块名称
#### 属性类型
逻辑字段[来自计算式]


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
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-附件（FILES）
#### 属性说明
附件
#### 属性类型
应用界面字段[无存储]


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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

