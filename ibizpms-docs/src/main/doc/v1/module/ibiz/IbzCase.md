# 实体-测试用例(IBZ_CASE)
## 实体说明
测试用例

## 所属模块
[iBiz增强模块](../ibiz)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [排序](#属性-排序（ORDER）) | ORDER | INT | 否 | 否 | 是 |
| 2 | [howRun](#属性-howRun（HOWRUN）) | HOWRUN | TEXT | 否 | 否 | 是 |
| 3 | [scriptedBy](#属性-scriptedBy（SCRIPTEDBY）) | SCRIPTEDBY | TEXT | 否 | 否 | 是 |
| 4 | [path](#属性-path（PATH）) | PATH | INT | 否 | 否 | 是 |
| 5 | [创建日期](#属性-创建日期（OPENEDDATE）) | OPENEDDATE | DATETIME | 否 | 否 | 是 |
| 6 | [修改日期](#属性-修改日期（LASTEDITEDDATE）) | LASTEDITEDDATE | DATETIME | 否 | 否 | 是 |
| 7 | [scriptedDate](#属性-scriptedDate（SCRIPTEDDATE）) | SCRIPTEDDATE | DATE | 否 | 否 | 是 |
| 8 | [备注](#属性-备注（COMMENT）) | COMMENT | HTMLTEXT | 否 | 否 | 是 |
| 9 | [auto](#属性-auto（AUTO）) | AUTO | TEXT | 否 | 否 | 是 |
| 10 | [用例标题](#属性-用例标题（TITLE）) | TITLE | TEXT | 否 | 否 | 否 |
| 11 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 否 | 是 |
| 12 | [scriptLocation](#属性-scriptLocation（SCRIPTLOCATION）) | SCRIPTLOCATION | TEXT | 否 | 否 | 是 |
| 13 | [scriptStatus](#属性-scriptStatus（SCRIPTSTATUS）) | SCRIPTSTATUS | TEXT | 否 | 否 | 是 |
| 14 | [关键词](#属性-关键词（KEYWORDS）) | KEYWORDS | TEXT | 否 | 否 | 是 |
| 15 | [用例编号](#属性-用例编号（ID）) | ID | ACID | 是 | 否 | 否 |
| 16 | [前置条件](#属性-前置条件（PRECONDITION）) | PRECONDITION | LONGTEXT | 否 | 否 | 是 |
| 17 | [优先级](#属性-优先级（PRI）) | PRI | SSCODELIST | 否 | 否 | 是 |
| 18 | [用例类型](#属性-用例类型（TYPE）) | TYPE | SSCODELIST | 否 | 否 | 是 |
| 19 | [状态](#属性-状态（STATUS）) | STATUS | SSCODELIST | 否 | 否 | 是 |
| 20 | [适用阶段](#属性-适用阶段（STAGE）) | STAGE | SMCODELIST | 否 | 否 | 是 |
| 21 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | SSCODELIST | 否 | 否 | 是 |
| 22 | [最后修改者](#属性-最后修改者（LASTEDITEDBY）) | LASTEDITEDBY | SSCODELIST | 否 | 否 | 是 |
| 23 | [编号](#属性-编号（LIB）) | LIB | PICKUP | 否 | 是 | 是 |
| 24 | [id](#属性-id（MODULE）) | MODULE | PICKUP | 否 | 是 | 是 |
| 25 | [所属模块](#属性-所属模块（MODULENAME）) | MODULENAME | PICKUPTEXT | 否 | 是 | 是 |
| 26 | [用例库](#属性-用例库（LIBNAME）) | LIBNAME | PICKUPTEXT | 否 | 是 | 是 |
| 27 | [用例版本](#属性-用例版本（VERSION）) | VERSION | INT | 否 | 是 | 是 |

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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-优先级（PRI）
#### 属性说明
优先级

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
| 值 | 3 |

#### 取值范围/公式
参照数据字典【[测试用例优先级（Testcase__pri）](../../codelist/Testcase__pri)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-状态（STATUS）
#### 属性说明
状态

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
| 值 | wait |

#### 取值范围/公式
参照数据字典【[测试用例状态（Testcase__status）](../../codelist/Testcase__status)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁创建（OPENEDBY）
#### 属性说明
由谁创建

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-最后修改者（LASTEDITEDBY）
#### 属性说明
最后修改者

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-编号（LIB）
#### 属性说明
编号

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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [编号（ID）](../ibiz/IbzLib/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-id（MODULE）
#### 属性说明
id

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
| 关系实体 | [用例库模块（IBZ_LIBMODULE）](../ibiz/IbzLibModule) |
| 关系属性 | [id（ID）](../ibiz/IbzLibModule/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-所属模块（MODULENAME）
#### 属性说明
所属模块

#### 属性类型
链接字段[来自关系实体字段]

#### 数据类型
外键值文本

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
| 关系实体 | [用例库模块（IBZ_LIBMODULE）](../ibiz/IbzLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLibModule/#属性-名称（NAME）) |
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
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
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
| 值 | 0 |

#### 取值范围/公式
参照数据字典【[当前用例版本（动态）（CurCaseVersion）](../../codelist/CurCaseVersion)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [用例库（IBZ_LIB）](../ibiz/IbzLib) |
| 关系属性 | [名称（NAME）](../ibiz/IbzLib/#属性-名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |


## 业务状态
无

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
| 16 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 17 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
### 实体行为-Create（Create）
#### 说明
Create

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-CreateTemp（CreateTemp）
#### 说明
CreateTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-CreateTempMajor（CreateTempMajor）
#### 说明
CreateTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-Update（Update）
#### 说明
Update

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-UpdateTemp（UpdateTemp）
#### 说明
UpdateTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-UpdateTempMajor（UpdateTempMajor）
#### 说明
UpdateTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-Remove（Remove）
#### 说明
Remove

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-RemoveTemp（RemoveTemp）
#### 说明
RemoveTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-RemoveTempMajor（RemoveTempMajor）
#### 说明
RemoveTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-Get（Get）
#### 说明
Get

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-GetTemp（GetTemp）
#### 说明
GetTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-GetTempMajor（GetTempMajor）
#### 说明
GetTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

#### 行为类型
内置方法

#### 行为持有者
后台及前台

### 实体行为-GetDraftTemp（GetDraftTemp）
#### 说明
GetDraftTemp

#### 行为类型
内置方法

#### 行为持有者
前台

### 实体行为-GetDraftTempMajor（GetDraftTempMajor）
#### 说明
GetDraftTempMajor

#### 行为类型
内置方法

#### 行为持有者
前台

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



