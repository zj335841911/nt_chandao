# 实体-测试用例(ZT_CASE)
## 实体说明
测试用例

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [修改日期](#属性-修改日期（LASTEDITEDDATE）) | LASTEDITEDDATE | 日期时间型 | 否 | 否 | 是 |
| 2 | [scriptedDate](#属性-scriptedDate（SCRIPTEDDATE）) | SCRIPTEDDATE | 日期型 | 否 | 否 | 是 |
| 3 | [标题颜色](#属性-标题颜色（COLOR）) | COLOR | 单项选择(文本值) | 否 | 否 | 是 |
| 4 | [path](#属性-path（PATH）) | PATH | 整型 | 否 | 否 | 是 |
| 5 | [创建日期](#属性-创建日期（OPENEDDATE）) | OPENEDDATE | 日期时间型 | 否 | 否 | 是 |
| 6 | [结果](#属性-结果（LASTRUNRESULT）) | LASTRUNRESULT | 单项选择(文本值) | 否 | 否 | 是 |
| 7 | [相关用例](#属性-相关用例（LINKCASE）) | LINKCASE | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [排序](#属性-排序（ORDER）) | ORDER | 整型 | 否 | 否 | 是 |
| 9 | [howRun](#属性-howRun（HOWRUN）) | HOWRUN | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [用例版本](#属性-用例版本（VERSION）) | VERSION | 整型 | 否 | 否 | 是 |
| 11 | [scriptedBy](#属性-scriptedBy（SCRIPTEDBY）) | SCRIPTEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [用例类型](#属性-用例类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 14 | [用例状态](#属性-用例状态（STATUS）) | STATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 15 | [auto](#属性-auto（AUTO）) | AUTO | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [frequency](#属性-frequency（FREQUENCY）) | FREQUENCY | 单项选择(文本值) | 否 | 否 | 是 |
| 17 | [用例标题](#属性-用例标题（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 否 |
| 18 | [最后修改者](#属性-最后修改者（LASTEDITEDBY）) | LASTEDITEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [由谁评审](#属性-由谁评审（REVIEWEDBY）) | REVIEWEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 20 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 21 | [评审时间](#属性-评审时间（REVIEWEDDATE）) | REVIEWEDDATE | 日期型 | 否 | 否 | 是 |
| 22 | [优先级](#属性-优先级（PRI）) | PRI | 单项选择(数值) | 否 | 否 | 是 |
| 23 | [适用阶段](#属性-适用阶段（STAGE）) | STAGE | 多项选择(文本值) | 否 | 否 | 是 |
| 24 | [scriptLocation](#属性-scriptLocation（SCRIPTLOCATION）) | SCRIPTLOCATION | 文本，可指定长度 | 否 | 否 | 是 |
| 25 | [执行时间](#属性-执行时间（LASTRUNDATE）) | LASTRUNDATE | 日期时间型 | 否 | 否 | 是 |
| 26 | [关键词](#属性-关键词（KEYWORDS）) | KEYWORDS | 文本，可指定长度 | 否 | 否 | 是 |
| 27 | [scriptStatus](#属性-scriptStatus（SCRIPTSTATUS）) | SCRIPTSTATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 28 | [工具/框架](#属性-工具/框架（FRAME）) | FRAME | 单项选择(文本值) | 否 | 否 | 是 |
| 29 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 30 | [用例编号](#属性-用例编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 31 | [前置条件](#属性-前置条件（PRECONDITION）) | PRECONDITION | 长文本，没有长度限制 | 否 | 否 | 是 |
| 32 | [执行人](#属性-执行人（LASTRUNNER）) | LASTRUNNER | 文本，可指定长度 | 否 | 否 | 是 |
| 33 | [来源用例版本](#属性-来源用例版本（FROMCASEVERSION）) | FROMCASEVERSION | 外键值附加数据 | 否 | 是 | 是 |
| 34 | [需求版本](#属性-需求版本（STORYVERSION）) | STORYVERSION | 外键值附加数据 | 否 | 是 | 是 |
| 35 | [来源用例](#属性-来源用例（FROMCASEID）) | FROMCASEID | 外键值 | 否 | 是 | 是 |
| 36 | [平台/分支](#属性-平台/分支（BRANCH）) | BRANCH | 外键值 | 否 | 是 | 是 |
| 37 | [来源Bug](#属性-来源Bug（FROMBUG）) | FROMBUG | 外键值 | 否 | 是 | 是 |
| 38 | [相关需求](#属性-相关需求（STORY）) | STORY | 外键值 | 否 | 是 | 是 |
| 39 | [所属产品](#属性-所属产品（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |
| 40 | [所属库](#属性-所属库（LIB）) | LIB | 外键值 | 否 | 是 | 是 |
| 41 | [所属模块](#属性-所属模块（MODULE）) | MODULE | 外键值 | 否 | 是 | 是 |
| 42 | [模块名称](#属性-模块名称（MODULENAME）) | MODULENAME | 外键值文本 | 否 | 是 | 是 |
| 43 | [需求名称](#属性-需求名称（STORYNAME）) | STORYNAME | 外键值文本 | 否 | 是 | 是 |
| 44 | [产品名称](#属性-产品名称（PRODUCTNAME）) | PRODUCTNAME | 外键值文本 | 否 | 是 | 是 |
| 45 | [用例步骤集合](#属性-用例步骤集合（CASESTEPS）) | CASESTEPS | 一对多关系数据集合 | 否 | 是 | 是 |
| 46 | [转bug数](#属性-转bug数（TOBUGCNT）) | TOBUGCNT | 整型 | 否 | 是 | 是 |
| 47 | [测试结果数](#属性-测试结果数（RESULTCNT）) | RESULTCNT | 整型 | 否 | 是 | 是 |
| 48 | [用例步骤数](#属性-用例步骤数（STEPCNT）) | STEPCNT | 整型 | 否 | 是 | 是 |
| 49 | [备注](#属性-备注（COMMENT）) | COMMENT | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 50 | [测试失败数](#属性-测试失败数（RESULTFALICNT）) | RESULTFALICNT | 整型 | 否 | 是 | 是 |
| 51 | [用例状态](#属性-用例状态（STATUS1）) | STATUS1 | 单项选择(文本值) | 否 | 是 | 是 |
| 52 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | 单项选择(文本值) | 否 | 是 | 是 |
| 53 | [属性](#属性-属性（TASK）) | TASK | 文本，可指定长度 | 否 | 是 | 是 |
| 54 | [用例库](#属性-用例库（LIBNAME）) | LIBNAME | 外键值文本 | 否 | 是 | 是 |
| 55 | [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）) | LASTRUNRESULT1 | 单项选择(文本值) | 否 | 是 | 是 |
| 56 | [是否收藏](#属性-是否收藏（ISFAVORITES）) | ISFAVORITES | 文本，可指定长度 | 否 | 是 | 是 |
| 57 | [模块名称](#属性-模块名称（MODULENAME1）) | MODULENAME1 | 文本，可指定长度 | 否 | 是 | 是 |
| 58 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-修改日期（LASTEDITEDDATE）
#### 属性说明
修改日期

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd HH:mm:ss

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
日期型

#### Java类型
Timestamp

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd

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
单项选择(文本值)

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
整型

#### Java类型
Integer

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
日期时间型

#### Java类型
Timestamp

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd HH:mm:ss

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
单项选择(文本值)

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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-排序（ORDER）
#### 属性说明
排序

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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例版本（VERSION）
#### 属性说明
用例版本

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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁创建（OPENEDBY）
#### 属性说明
由谁创建

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
单项选择(文本值)

#### Java类型
String

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
单项选择(文本值)

#### Java类型
String

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
文本，可指定长度

#### Java类型
String

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
单项选择(文本值)

#### Java类型
String

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
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
否

#### 默认值
无

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
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-已删除（DELETED）
#### 属性说明
已删除

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
日期型

#### Java类型
Timestamp

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd

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
单项选择(数值)

#### Java类型
Integer

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
多项选择(文本值)

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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-执行时间（LASTRUNDATE）
#### 属性说明
执行时间

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd HH:mm:ss

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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-scriptStatus（SCRIPTSTATUS）
#### 属性说明
应该是预留后期使用的字段

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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-工具/框架（FRAME）
#### 属性说明
工具/框架

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例编号（ID）
#### 属性说明
用例编号

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
自增标识，整数类型，用户不可见

#### Java类型
Long

#### 是否允许为为空
否

#### 默认值
无

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
长文本，没有长度限制

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
| 关系实体 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) |
| 关系属性 | [名称（NAME）](../zentao/TestSuite/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-执行人（LASTRUNNER）
#### 属性说明
执行人

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
外键值附加数据

#### Java类型
Integer

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
外键值附加数据

#### Java类型
Integer

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
外键值

#### Java类型
Long

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
外键值

#### Java类型
Long

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
外键值

#### Java类型
Long

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
外键值

#### Java类型
Long

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
外键值

#### Java类型
Long

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
外键值

#### Java类型
Long

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
外键值

#### Java类型
Long

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
外键值文本

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
外键值文本

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
外键值文本

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
一对多关系数据集合

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
HTML文本，没有长度限制

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
外键值文本

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
单项选择(文本值)

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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


## 业务状态
| 序号 | 状态名称 | [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 默认 |
| -- | -- | -- | -- | -- | -- |
| 1 | [被阻塞_阻塞_未收藏](#业务状态-被阻塞_阻塞_未收藏（blocked_blocked_0）) | blocked | blocked | 0 | 否 |
| 2 | [被阻塞_阻塞_已收藏](#业务状态-被阻塞_阻塞_已收藏（blocked_blocked_1）) | blocked | blocked | 1 | 否 |
| 3 | [被阻塞_失败_未收藏](#业务状态-被阻塞_失败_未收藏（blocked_fail_0）) | blocked | fail | 0 | 否 |
| 4 | [被阻塞_失败_已收藏](#业务状态-被阻塞_失败_已收藏（blocked_fail_1）) | blocked | fail | 1 | 否 |
| 5 | [被阻塞_忽略_未收藏](#业务状态-被阻塞_忽略_未收藏（blocked_na_0）) | blocked | n/a | 0 | 否 |
| 6 | [被阻塞_忽略_已收藏](#业务状态-被阻塞_忽略_已收藏（blocked_na_1）) | blocked | n/a | 1 | 否 |
| 7 | [被阻塞_未执行_未收藏](#业务状态-被阻塞_未执行_未收藏（blocked_no_0）) | blocked | no | 0 | 否 |
| 8 | [被阻塞_未执行_已收藏](#业务状态-被阻塞_未执行_已收藏（blocked_no_1）) | blocked | no | 1 | 否 |
| 9 | [被阻塞_通过_未收藏](#业务状态-被阻塞_通过_未收藏（blocked_pass_0）) | blocked | pass | 0 | 否 |
| 10 | [被阻塞_通过_已收藏](#业务状态-被阻塞_通过_已收藏（blocked_pass_1）) | blocked | pass | 1 | 否 |
| 11 | [原用例更新_阻塞_未收藏](#业务状态-原用例更新_阻塞_未收藏（casechange_blocked_0）) | casechange | blocked | 0 | 否 |
| 12 | [原用例更新_阻塞_已收藏](#业务状态-原用例更新_阻塞_已收藏（casechange_blocked_1）) | casechange | blocked | 1 | 否 |
| 13 | [原用例更新_失败_未收藏](#业务状态-原用例更新_失败_未收藏（casechange_fail_0）) | casechange | fail | 0 | 否 |
| 14 | [原用例更新_失败_已收藏](#业务状态-原用例更新_失败_已收藏（casechange_fail_1）) | casechange | fail | 1 | 否 |
| 15 | [原用例更新_忽略_未收藏](#业务状态-原用例更新_忽略_未收藏（casechange_na_0）) | casechange | n/a | 0 | 否 |
| 16 | [原用例更新_忽略_已收藏](#业务状态-原用例更新_忽略_已收藏（casechange_na_1）) | casechange | n/a | 1 | 否 |
| 17 | [原用例更新_未执行_未收藏](#业务状态-原用例更新_未执行_未收藏（casechange_no_0）) | casechange | no | 0 | 否 |
| 18 | [原用例更新_未执行_已收藏](#业务状态-原用例更新_未执行_已收藏（casechange_no_1）) | casechange | no | 1 | 否 |
| 19 | [原用例更新_通过_未收藏](#业务状态-原用例更新_通过_未收藏（casechange_pass_0）) | casechange | pass | 0 | 否 |
| 20 | [原用例更新_通过_已收藏](#业务状态-原用例更新_通过_已收藏（casechange_pass_1）) | casechange | pass | 1 | 否 |
| 21 | [已完成_阻塞_未收藏](#业务状态-已完成_阻塞_未收藏（done_blocked_0）) | done | blocked | 0 | 否 |
| 22 | [已完成_阻塞_已收藏](#业务状态-已完成_阻塞_已收藏（done_blocked_1）) | done | blocked | 1 | 否 |
| 23 | [已完成_失败_未收藏](#业务状态-已完成_失败_未收藏（done_fail_0）) | done | fail | 0 | 否 |
| 24 | [已完成_失败_已收藏](#业务状态-已完成_失败_已收藏（done_fail_1）) | done | fail | 1 | 否 |
| 25 | [已完成_忽略_未收藏](#业务状态-已完成_忽略_未收藏（done_na_0）) | done | n/a | 0 | 否 |
| 26 | [已完成_忽略_已收藏](#业务状态-已完成_忽略_已收藏（done_na_1）) | done | n/a | 1 | 否 |
| 27 | [已完成_未执行_未收藏](#业务状态-已完成_未执行_未收藏（done_no_0）) | done | no | 0 | 否 |
| 28 | [已完成_未执行_已收藏](#业务状态-已完成_未执行_已收藏（done_no_1）) | done | no | 1 | 否 |
| 29 | [已完成_通过_未收藏](#业务状态-已完成_通过_未收藏（done_pass_0）) | done | pass | 0 | 否 |
| 30 | [已完成_通过_已收藏](#业务状态-已完成_通过_已收藏（done_pass_1）) | done | pass | 1 | 否 |
| 31 | [研究中_阻塞_未收藏](#业务状态-研究中_阻塞_未收藏（investigate_blocked_0）) | investigate | blocked | 0 | 否 |
| 32 | [研究中_阻塞_已收藏](#业务状态-研究中_阻塞_已收藏（investigate_blocked_1）) | investigate | blocked | 1 | 否 |
| 33 | [研究中_失败_未收藏](#业务状态-研究中_失败_未收藏（investigate_fail_0）) | investigate | fail | 0 | 否 |
| 34 | [研究中_失败_已收藏](#业务状态-研究中_失败_已收藏（investigate_fail_1）) | investigate | fail | 1 | 否 |
| 35 | [研究中_忽略_未收藏](#业务状态-研究中_忽略_未收藏（investigate_na_0）) | investigate | n/a | 0 | 否 |
| 36 | [研究中_忽略_已收藏](#业务状态-研究中_忽略_已收藏（investigate_na_1）) | investigate | n/a | 1 | 否 |
| 37 | [研究中_未执行_未收藏](#业务状态-研究中_未执行_未收藏（investigate_no_0）) | investigate | no | 0 | 否 |
| 38 | [研究中_未执行_已收藏](#业务状态-研究中_未执行_已收藏（investigate_no_1）) | investigate | no | 1 | 否 |
| 39 | [研究中_通过_未收藏](#业务状态-研究中_通过_未收藏（investigate_pass_0）) | investigate | pass | 0 | 否 |
| 40 | [研究中_通过_已收藏](#业务状态-研究中_通过_已收藏（investigate_pass_1）) | investigate | pass | 1 | 否 |
| 41 | [正常_阻塞_未收藏](#业务状态-正常_阻塞_未收藏（normal_blocked_0）) | normal | blocked | 0 | 否 |
| 42 | [正常_阻塞_已收藏](#业务状态-正常_阻塞_已收藏（normal_blocked_1）) | normal | blocked | 1 | 否 |
| 43 | [正常_失败_未收藏](#业务状态-正常_失败_未收藏（normal_fail_0）) | normal | fail | 0 | 否 |
| 44 | [正常_失败_已收藏](#业务状态-正常_失败_已收藏（normal_fail_1）) | normal | fail | 1 | 否 |
| 45 | [正常_忽略_未收藏](#业务状态-正常_忽略_未收藏（normal_na_0）) | normal | n/a | 0 | 否 |
| 46 | [正常_忽略_已收藏](#业务状态-正常_忽略_已收藏（normal_na_1）) | normal | n/a | 1 | 否 |
| 47 | [正常_未执行_未收藏](#业务状态-正常_未执行_未收藏（normal_no_0）) | normal | no | 0 | 否 |
| 48 | [正常_未执行_已收藏](#业务状态-正常_未执行_已收藏（normal_no_1）) | normal | no | 1 | 否 |
| 49 | [正常_通过_未收藏](#业务状态-正常_通过_未收藏（normal_pass_0）) | normal | pass | 0 | 否 |
| 50 | [正常_通过_已收藏](#业务状态-正常_通过_已收藏（normal_pass_1）) | normal | pass | 1 | 否 |
| 51 | [需求变更_阻塞_未收藏](#业务状态-需求变更_阻塞_未收藏（storychange_blocked_0）) | storychange | blocked | 0 | 否 |
| 52 | [需求变更_阻塞_已收藏](#业务状态-需求变更_阻塞_已收藏（storychange_blocked_1）) | storychange | blocked | 1 | 否 |
| 53 | [需求变更_失败_未收藏](#业务状态-需求变更_失败_未收藏（storychange_fail_0）) | storychange | fail | 0 | 否 |
| 54 | [需求变更_失败_已收藏](#业务状态-需求变更_失败_已收藏（storychange_fail_1）) | storychange | fail | 1 | 否 |
| 55 | [需求变更_忽略_未收藏](#业务状态-需求变更_忽略_未收藏（storychange_na_0）) | storychange | n/a | 0 | 否 |
| 56 | [需求变更_忽略_已收藏](#业务状态-需求变更_忽略_已收藏（storychange_na_1）) | storychange | n/a | 1 | 否 |
| 57 | [需求变更_未执行_未收藏](#业务状态-需求变更_未执行_未收藏（storychange_no_0）) | storychange | no | 0 | 否 |
| 58 | [需求变更_未执行_已收藏](#业务状态-需求变更_未执行_已收藏（storychange_no_1）) | storychange | no | 1 | 否 |
| 59 | [需求变更_通过_未收藏](#业务状态-需求变更_通过_未收藏（storychange_pass_0）) | storychange | pass | 0 | 否 |
| 60 | [需求变更_通过_已收藏](#业务状态-需求变更_通过_已收藏（storychange_pass_1）) | storychange | pass | 1 | 否 |
| 61 | [未开始_阻塞_未收藏](#业务状态-未开始_阻塞_未收藏（wait_blocked_0）) | wait | blocked | 0 | 否 |
| 62 | [未开始_阻塞_已收藏](#业务状态-未开始_阻塞_已收藏（wait_blocked_1）) | wait | blocked | 1 | 否 |
| 63 | [未开始_失败_未收藏](#业务状态-未开始_失败_未收藏（wait_fail_0）) | wait | fail | 0 | 否 |
| 64 | [未开始_失败_已收藏](#业务状态-未开始_失败_已收藏（wait_fail_1）) | wait | fail | 1 | 否 |
| 65 | [未开始_忽略_未收藏](#业务状态-未开始_忽略_未收藏（wait_na_0）) | wait | n/a | 0 | 否 |
| 66 | [未开始_忽略_已收藏](#业务状态-未开始_忽略_已收藏（wait_na_1）) | wait | n/a | 1 | 否 |
| 67 | [未开始_未执行_未收藏](#业务状态-未开始_未执行_未收藏（wait_no_0）) | wait | no | 0 | 否 |
| 68 | [未开始_未执行_已收藏](#业务状态-未开始_未执行_已收藏（wait_no_1）) | wait | no | 1 | 否 |
| 69 | [未开始_通过_未收藏](#业务状态-未开始_通过_未收藏（wait_pass_0）) | wait | pass | 0 | 否 |
| 70 | [未开始_通过_已收藏](#业务状态-未开始_通过_已收藏（wait_pass_1）) | wait | pass | 1 | 否 |
### 业务状态-被阻塞_阻塞_未收藏（blocked_blocked_0）
#### 说明
被阻塞_阻塞_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-被阻塞_阻塞_已收藏（blocked_blocked_1）
#### 说明
被阻塞_阻塞_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-被阻塞_失败_未收藏（blocked_fail_0）
#### 说明
被阻塞_失败_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-被阻塞_失败_已收藏（blocked_fail_1）
#### 说明
被阻塞_失败_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-被阻塞_忽略_未收藏（blocked_na_0）
#### 说明
被阻塞_忽略_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-被阻塞_忽略_已收藏（blocked_na_1）
#### 说明
被阻塞_忽略_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-被阻塞_未执行_未收藏（blocked_no_0）
#### 说明
被阻塞_未执行_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-被阻塞_未执行_已收藏（blocked_no_1）
#### 说明
被阻塞_未执行_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-被阻塞_通过_未收藏（blocked_pass_0）
#### 说明
被阻塞_通过_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-被阻塞_通过_已收藏（blocked_pass_1）
#### 说明
被阻塞_通过_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | blocked |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-原用例更新_阻塞_未收藏（casechange_blocked_0）
#### 说明
原用例更新_阻塞_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 2 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 3 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 4 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 5 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 6 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 7 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 8 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 9 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 10 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 11 | [测试用例删除](#操作权限-测试用例删除（SRFUR__CASE_DELETE_BUT）)<br>（SRFUR__CASE_DELETE_BUT） |
### 业务状态-原用例更新_阻塞_已收藏（casechange_blocked_1）
#### 说明
原用例更新_阻塞_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 2 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 3 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 4 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 5 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 6 | [测试用例删除](#操作权限-测试用例删除（SRFUR__CASE_DELETE_BUT）)<br>（SRFUR__CASE_DELETE_BUT） |
| 7 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 8 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 9 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 10 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 11 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
### 业务状态-原用例更新_失败_未收藏（casechange_fail_0）
#### 说明
原用例更新_失败_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 2 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 3 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 4 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 5 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 6 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 7 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 8 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 9 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 10 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-原用例更新_失败_已收藏（casechange_fail_1）
#### 说明
原用例更新_失败_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 2 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 3 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 4 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 5 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 6 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 7 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 8 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 9 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 10 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-原用例更新_忽略_未收藏（casechange_na_0）
#### 说明
原用例更新_忽略_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 4 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 5 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 6 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 7 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 8 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 9 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 10 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
### 业务状态-原用例更新_忽略_已收藏（casechange_na_1）
#### 说明
原用例更新_忽略_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 2 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 5 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 6 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 7 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 8 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 9 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 10 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
### 业务状态-原用例更新_未执行_未收藏（casechange_no_0）
#### 说明
原用例更新_未执行_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 2 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 3 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 4 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 5 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 6 | [测试用例删除](#操作权限-测试用例删除（SRFUR__CASE_DELETE_BUT）)<br>（SRFUR__CASE_DELETE_BUT） |
| 7 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 8 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 9 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 10 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 11 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
### 业务状态-原用例更新_未执行_已收藏（casechange_no_1）
#### 说明
原用例更新_未执行_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 3 | [测试用例删除](#操作权限-测试用例删除（SRFUR__CASE_DELETE_BUT）)<br>（SRFUR__CASE_DELETE_BUT） |
| 4 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 5 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 6 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 7 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 8 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 9 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 10 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 11 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
### 业务状态-原用例更新_通过_未收藏（casechange_pass_0）
#### 说明
原用例更新_通过_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 2 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 3 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 4 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 5 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 6 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 7 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 8 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 9 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 10 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
### 业务状态-原用例更新_通过_已收藏（casechange_pass_1）
#### 说明
原用例更新_通过_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | casechange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 2 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 3 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 5 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 6 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 7 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 8 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 9 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 10 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
### 业务状态-已完成_阻塞_未收藏（done_blocked_0）
#### 说明
已完成_阻塞_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
### 业务状态-已完成_阻塞_已收藏（done_blocked_1）
#### 说明
已完成_阻塞_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
### 业务状态-已完成_失败_未收藏（done_fail_0）
#### 说明
已完成_失败_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-已完成_失败_已收藏（done_fail_1）
#### 说明
已完成_失败_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 3 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-已完成_忽略_未收藏（done_na_0）
#### 说明
已完成_忽略_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-已完成_忽略_已收藏（done_na_1）
#### 说明
已完成_忽略_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-已完成_未执行_未收藏（done_no_0）
#### 说明
已完成_未执行_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-已完成_未执行_已收藏（done_no_1）
#### 说明
已完成_未执行_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
### 业务状态-已完成_通过_未收藏（done_pass_0）
#### 说明
已完成_通过_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-已完成_通过_已收藏（done_pass_1）
#### 说明
已完成_通过_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | done |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-研究中_阻塞_未收藏（investigate_blocked_0）
#### 说明
研究中_阻塞_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：允许

| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-研究中_阻塞_已收藏（investigate_blocked_1）
#### 说明
研究中_阻塞_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：允许

| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-研究中_失败_未收藏（investigate_fail_0）
#### 说明
研究中_失败_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-研究中_失败_已收藏（investigate_fail_1）
#### 说明
研究中_失败_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 3 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-研究中_忽略_未收藏（investigate_na_0）
#### 说明
研究中_忽略_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-研究中_忽略_已收藏（investigate_na_1）
#### 说明
研究中_忽略_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
### 业务状态-研究中_未执行_未收藏（investigate_no_0）
#### 说明
研究中_未执行_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-研究中_未执行_已收藏（investigate_no_1）
#### 说明
研究中_未执行_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
### 业务状态-研究中_通过_未收藏（investigate_pass_0）
#### 说明
研究中_通过_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-研究中_通过_已收藏（investigate_pass_1）
#### 说明
研究中_通过_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | investigate |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
### 业务状态-正常_阻塞_未收藏（normal_blocked_0）
#### 说明
正常_阻塞_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 4 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-正常_阻塞_已收藏（normal_blocked_1）
#### 说明
正常_阻塞_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
### 业务状态-正常_失败_未收藏（normal_fail_0）
#### 说明
正常_失败_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-正常_失败_已收藏（normal_fail_1）
#### 说明
正常_失败_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-正常_忽略_未收藏（normal_na_0）
#### 说明
正常_忽略_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 3 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
### 业务状态-正常_忽略_已收藏（normal_na_1）
#### 说明
正常_忽略_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
### 业务状态-正常_未执行_未收藏（normal_no_0）
#### 说明
正常_未执行_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-正常_未执行_已收藏（normal_no_1）
#### 说明
正常_未执行_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
### 业务状态-正常_通过_未收藏（normal_pass_0）
#### 说明
正常_通过_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-正常_通过_已收藏（normal_pass_1）
#### 说明
正常_通过_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | normal |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-需求变更_阻塞_未收藏（storychange_blocked_0）
#### 说明
需求变更_阻塞_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 2 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 3 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 4 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 5 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 6 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 7 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 8 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 9 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 10 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
### 业务状态-需求变更_阻塞_已收藏（storychange_blocked_1）
#### 说明
需求变更_阻塞_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 2 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 5 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 6 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 7 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 8 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 9 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 10 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
### 业务状态-需求变更_失败_未收藏（storychange_fail_0）
#### 说明
需求变更_失败_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 2 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 3 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 4 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 5 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 6 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 7 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 8 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 9 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 10 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 11 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
### 业务状态-需求变更_失败_已收藏（storychange_fail_1）
#### 说明
需求变更_失败_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 5 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 6 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 7 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 8 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 9 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 10 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
### 业务状态-需求变更_忽略_未收藏（storychange_na_0）
#### 说明
需求变更_忽略_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 2 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 3 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 4 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 5 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 6 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 7 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 8 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 9 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 10 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-需求变更_忽略_已收藏（storychange_na_1）
#### 说明
需求变更_忽略_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 2 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 3 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 4 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 5 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 6 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 7 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 8 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 9 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 10 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
### 业务状态-需求变更_未执行_未收藏（storychange_no_0）
#### 说明
需求变更_未执行_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 2 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 3 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 4 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 5 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 6 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 7 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 8 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 9 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 10 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
### 业务状态-需求变更_未执行_已收藏（storychange_no_1）
#### 说明
需求变更_未执行_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 2 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 3 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 4 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 5 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 6 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 7 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 8 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 9 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 10 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
### 业务状态-需求变更_通过_未收藏（storychange_pass_0）
#### 说明
需求变更_通过_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 2 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 3 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 5 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 6 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 7 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
| 8 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 9 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 10 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
### 业务状态-需求变更_通过_已收藏（storychange_pass_1）
#### 说明
需求变更_通过_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | storychange |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 2 | [测试用例移除](#操作权限-测试用例移除（SRFUR__CASE_UNLINK_BUT）)<br>（SRFUR__CASE_UNLINK_BUT） |
| 3 | [测试用例（用例结果）](#操作权限-测试用例（用例结果）（SRFUR__CASE_CASERESULT_BUT）)<br>（SRFUR__CASE_CASERESULT_BUT） |
| 4 | [测试用例结果](#操作权限-测试用例结果（SRFUR__CASE_RESULT_BUT）)<br>（SRFUR__CASE_RESULT_BUT） |
| 5 | [测试用例（用例执行）](#操作权限-测试用例（用例执行）（SRFUR__CASE_CASERUN_BUT）)<br>（SRFUR__CASE_CASERUN_BUT） |
| 6 | [测试用例（用例转BUG）](#操作权限-测试用例（用例转BUG）（SRFUR__CASE_CASETOBUG_BUT）)<br>（SRFUR__CASE_CASETOBUG_BUT） |
| 7 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 8 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 9 | [测试用例执行](#操作权限-测试用例执行（SRFUR__CASE_RUN_BUT）)<br>（SRFUR__CASE_RUN_BUT） |
| 10 | [测试用例编辑](#操作权限-测试用例编辑（SRFUR__CASE_EDIT_BUT）)<br>（SRFUR__CASE_EDIT_BUT） |
### 业务状态-未开始_阻塞_未收藏（wait_blocked_0）
#### 说明
未开始_阻塞_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-未开始_阻塞_已收藏（wait_blocked_1）
#### 说明
未开始_阻塞_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | blocked |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
### 业务状态-未开始_失败_未收藏（wait_fail_0）
#### 说明
未开始_失败_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-未开始_失败_已收藏（wait_fail_1）
#### 说明
未开始_失败_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | fail |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-未开始_忽略_未收藏（wait_na_0）
#### 说明
未开始_忽略_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 4 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-未开始_忽略_已收藏（wait_na_1）
#### 说明
未开始_忽略_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | n/a |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 4 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
### 业务状态-未开始_未执行_未收藏（wait_no_0）
#### 说明
未开始_未执行_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 4 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
### 业务状态-未开始_未执行_已收藏（wait_no_1）
#### 说明
未开始_未执行_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | no |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 2 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 3 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 4 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-未开始_通过_未收藏（wait_pass_0）
#### 说明
未开始_通过_未收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 2 | [用例已收藏](#操作权限-用例已收藏（SRFUR__CASE_FAVOR_BUT）)<br>（SRFUR__CASE_FAVOR_BUT） |
| 3 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 4 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |
### 业务状态-未开始_通过_已收藏（wait_pass_1）
#### 说明
未开始_通过_已收藏

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [用例状态](#属性-用例状态（STATUS1）)<br>（STATUS1） | wait |
| [测试用例结果](#属性-测试用例结果（LASTRUNRESULT1）)<br>（LASTRUNRESULT1） | pass |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |

#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [测试用例转BUG](#操作权限-测试用例转BUG（SRFUR__CASE_TOBUG_BUT）)<br>（SRFUR__CASE_TOBUG_BUT） |
| 2 | [测试用例确认](#操作权限-测试用例确认（SRFUR__CASE_CONFIRM_BUT）)<br>（SRFUR__CASE_CONFIRM_BUT） |
| 3 | [用例待收藏](#操作权限-用例待收藏（SRFUR__CASE_NFAVOR_BUT）)<br>（SRFUR__CASE_NFAVOR_BUT） |
| 4 | [测试用例（用例确认）](#操作权限-测试用例（用例确认）（SRFUR__CASE_CASECOF_BUT）)<br>（SRFUR__CASE_CASECOF_BUT） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| -- | -- | -- | -- | -- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [CreateTemp](#实体行为-CreateTemp（CreateTemp）) | CreateTemp | 内置方法 | 前台 |
| 3 | [CreateTempMajor](#实体行为-CreateTempMajor（CreateTempMajor）) | CreateTempMajor | 内置方法 | 前台 |
| 4 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 5 | [UpdateTemp](#实体行为-UpdateTemp（UpdateTemp）) | UpdateTemp | 内置方法 | 前台 |
| 6 | [UpdateTempMajor](#实体行为-UpdateTempMajor（UpdateTempMajor）) | UpdateTempMajor | 内置方法 | 前台 |
| 7 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 8 | [RemoveTemp](#实体行为-RemoveTemp（RemoveTemp）) | RemoveTemp | 内置方法 | 前台 |
| 9 | [RemoveTempMajor](#实体行为-RemoveTempMajor（RemoveTempMajor）) | RemoveTempMajor | 内置方法 | 前台 |
| 10 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 11 | [GetTemp](#实体行为-GetTemp（GetTemp）) | GetTemp | 内置方法 | 前台 |
| 12 | [GetTempMajor](#实体行为-GetTempMajor（GetTempMajor）) | GetTempMajor | 内置方法 | 前台 |
| 13 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 14 | [GetDraftTemp](#实体行为-GetDraftTemp（GetDraftTemp）) | GetDraftTemp | 内置方法 | 前台 |
| 15 | [GetDraftTempMajor](#实体行为-GetDraftTempMajor（GetDraftTempMajor）) | GetDraftTempMajor | 内置方法 | 前台 |
| 16 | [建用例](#实体行为-建用例（BugCreateCase）) | bugCreateCase | 用户自定义 | 前台 |
| 17 | [行为](#实体行为-行为（CaseFavorite）) | CaseFavorite | 实体处理逻辑 | 后台 |
| 18 | [CaseNFavorite](#实体行为-CaseNFavorite（CaseNFavorite）) | CaseNFavorite | 实体处理逻辑 | 后台 |
| 19 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 20 | [确认用例变更](#实体行为-确认用例变更（ConfirmChange）) | confirmChange | 用户自定义 | 后台及前台 |
| 21 | [确认需求变更](#实体行为-确认需求变更（Confirmstorychange）) | confirmstorychange | 用户自定义 | 后台及前台 |
| 22 | [根据测试单获取或者状态](#实体行为-根据测试单获取或者状态（GetByTestTask）) | GetByTestTask | 用户自定义 | 后台及前台 |
| 23 | [获取测试单执行结果](#实体行为-获取测试单执行结果（GetTestTaskCNTRun）) | GetTestTaskCNTRun | 用户自定义 | 后台及前台 |
| 24 | [测试单关联测试用例](#实体行为-测试单关联测试用例（LinkCase）) | linkCase | 用户自定义 | 后台及前台 |
| 25 | [执行测试](#实体行为-执行测试（RunCase）) | RunCase | 用户自定义 | 后台及前台 |
| 26 | [runCases](#实体行为-runCases（RunCases）) | runCases | 实体处理逻辑 | 后台 |
| 27 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 28 | [执行测试](#实体行为-执行测试（TestRunCase）) | TestRunCase | 用户自定义 | 后台及前台 |
| 29 | [testRunCases](#实体行为-testRunCases（TestRunCases）) | testRunCases | 实体处理逻辑 | 后台 |
| 30 | [套件关联](#实体行为-套件关联（TestsuitelinkCase）) | testsuitelinkCase | 用户自定义 | 后台及前台 |
| 31 | [移除用例](#实体行为-移除用例（UnlinkCase）) | unlinkCase | 用户自定义 | 后台及前台 |
| 32 | [unlinkCases](#实体行为-unlinkCases（UnlinkCases）) | unlinkCases | 实体处理逻辑 | 后台 |
| 33 | [移除用例](#实体行为-移除用例（UnlinkSuiteCase）) | unlinkSuiteCase | 用户自定义 | 后台及前台 |
| 34 | [unlinkSuiteCases](#实体行为-unlinkSuiteCases（UnlinkSuiteCases）) | unlinkSuiteCases | 实体处理逻辑 | 后台 |

### 实体行为-Create（Create）
#### 说明
Create

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-CreateTemp（CreateTemp）
#### 说明
CreateTemp

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-CreateTempMajor（CreateTempMajor）
#### 说明
CreateTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-Update（Update）
#### 说明
Update

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-UpdateTemp（UpdateTemp）
#### 说明
UpdateTemp

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-UpdateTempMajor（UpdateTempMajor）
#### 说明
UpdateTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-Remove（Remove）
#### 说明
Remove

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-RemoveTemp（RemoveTemp）
#### 说明
RemoveTemp

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-RemoveTempMajor（RemoveTempMajor）
#### 说明
RemoveTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-Get（Get）
#### 说明
Get

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-GetTemp（GetTemp）
#### 说明
GetTemp

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-GetTempMajor（GetTempMajor）
#### 说明
GetTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-GetDraftTemp（GetDraftTemp）
#### 说明
GetDraftTemp

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-GetDraftTempMajor（GetDraftTempMajor）
#### 说明
GetDraftTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-建用例（BugCreateCase）
#### 说明
建用例

#### 行为类型
用户自定义

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-行为（CaseFavorite）
#### 说明
用例收藏

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无
### 实体行为-CaseNFavorite（CaseNFavorite）
#### 说明
用例取消收藏

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无
### 实体行为-CheckKey（CheckKey）
#### 说明
CheckKey

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-确认用例变更（ConfirmChange）
#### 说明
确认用例变更

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-确认需求变更（Confirmstorychange）
#### 说明
确认需求变更

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-根据测试单获取或者状态（GetByTestTask）
#### 说明
根据测试单获取或者状态

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-获取测试单执行结果（GetTestTaskCNTRun）
#### 说明
获取测试单执行结果

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-测试单关联测试用例（LinkCase）
#### 说明
测试单关联测试用例

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-执行测试（RunCase）
#### 说明
执行测试

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-runCases（RunCases）
#### 说明
runCases

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无
### 实体行为-Save（Save）
#### 说明
Save

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-执行测试（TestRunCase）
#### 说明
执行测试

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-testRunCases（TestRunCases）
#### 说明
testRunCases

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无
### 实体行为-套件关联（TestsuitelinkCase）
#### 说明
套件关联

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-移除用例（UnlinkCase）
#### 说明
移除用例

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-unlinkCases（UnlinkCases）
#### 说明
unlinkCases

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无
### 实体行为-移除用例（UnlinkSuiteCase）
#### 说明
移除用例

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-unlinkSuiteCases（UnlinkSuiteCases）
#### 说明
unlinkSuiteCases

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| -- | -- | -- | -- |
| 1 | [用例取消收藏](#逻辑处理-用例取消收藏（CaseNFavorite）) | CaseNFavorite | 后台 |
| 2 | [根据用例标识和版本获取用例步骤](#逻辑处理-根据用例标识和版本获取用例步骤（GetCaseStepByIdVersion）) | GetCaseStepByIdVersion | 后台及前台 |
| 3 | [用例收藏](#逻辑处理-用例收藏（caseFavorite）) | caseFavorite | 后台 |
| 4 | [runCases](#逻辑处理-runCases（runCases）) | runCases | 后台 |
| 5 | [testRunCases](#逻辑处理-testRunCases（testRunCases）) | testRunCases | 后台 |
| 6 | [unlinkCases](#逻辑处理-unlinkCases（unlinkCases）) | unlinkCases | 后台 |
| 7 | [unlinkSuiteCases](#逻辑处理-unlinkSuiteCases（unlinkSuiteCases）) | unlinkSuiteCases | 后台 |

### 逻辑处理-用例取消收藏（CaseNFavorite）
#### 说明
用例取消收藏

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 开始 | Begin | 开始 |
| 2 | 用例取消收藏 | CaseNFavrite | 直接SQL调用 |
### 逻辑处理-根据用例标识和版本获取用例步骤（GetCaseStepByIdVersion）
#### 说明
根据用例标识和版本获取用例步骤

#### 逻辑持有者
后台及前台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 获取用例步骤 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |
### 逻辑处理-用例收藏（caseFavorite）
#### 说明
hua-测试收藏功能

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | Create | Create | 实体行为 |
| 2 | 开始 | Begin | 开始 |
| 3 | 准备参数 | Prepareparam1 | 准备参数 |
### 逻辑处理-runCases（runCases）
#### 说明
runCases

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 开始 | Begin | 开始 |
| 2 | 准备参数 | Prepareparam1 | 准备参数 |
| 3 | 执行测试 | Deaction1 | 实体行为 |
### 逻辑处理-testRunCases（testRunCases）
#### 说明
testRunCases

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 重置ID | Prepareparam1 | 准备参数 |
| 2 | 获取数据 | Rawsqlcall1 | 直接SQL调用 |
| 3 | 开始 | Begin | 开始 |
| 4 | 执行测试 | Deaction1 | 实体行为 |
### 逻辑处理-unlinkCases（unlinkCases）
#### 说明
unlinkCases

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 获取数据 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 处理移除接口 | Deaction1 | 实体行为 |
| 3 | 开始 | Begin | 开始 |
| 4 | 重置ID | Prepareparam1 | 准备参数 |
### 逻辑处理-unlinkSuiteCases（unlinkSuiteCases）
#### 说明
unlinkSuiteCases

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 准备参数 | Prepareparam1 | 准备参数 |
| 2 | 移除用例 | Deaction1 | 实体行为 |
| 3 | 开始 | Begin | 开始 |

## 查询

