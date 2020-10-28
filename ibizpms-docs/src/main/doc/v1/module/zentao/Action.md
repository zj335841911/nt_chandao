# 实体-系统日志(ZT_ACTION)
## 实体说明
系统日志

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [附加值](#属性-附加值（EXTRA）) | EXTRA | LONGTEXT | 否 | 否 | 是 | -- |
| 2 | [对象类型](#属性-对象类型（OBJECTTYPE）) | OBJECTTYPE | SSCODELIST | 否 | 否 | 是 | -- |
| 3 | [id](#属性-id（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 4 | [备注](#属性-备注（COMMENT）) | COMMENT | LONGTEXT | 否 | 否 | 是 | -- |
| 5 | [已读](#属性-已读（READ）) | READ | SSCODELIST | 否 | 否 | 是 | -- |
| 6 | [动作](#属性-动作（ACTION）) | ACTION | SSCODELIST | 否 | 否 | 是 | -- |
| 7 | [日期](#属性-日期（DATE）) | DATE | DATETIME | 否 | 否 | 是 | -- |
| 8 | [产品](#属性-产品（PRODUCT）) | PRODUCT | TEXT | 否 | 否 | 是 | -- |
| 9 | [对象ID](#属性-对象ID（OBJECTID）) | OBJECTID | BIGINT | 否 | 否 | 是 | -- |
| 10 | [操作者](#属性-操作者（ACTOR）) | ACTOR | TEXT | 否 | 否 | 是 | -- |
| 11 | [项目](#属性-项目（PROJECT）) | PROJECT | PICKUP | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 12 | [备注](#属性-备注（LASTCOMMENT）) | LASTCOMMENT | HTMLTEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 13 | [操作方式](#属性-操作方式（ACTIONMANNER）) | ACTIONMANNER | SSCODELIST | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 14 | [当前用户](#属性-当前用户（ISACTORSS）) | ISACTORSS | BIGINT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 15 | [显示日期](#属性-显示日期（DATE1）) | DATE1 | TEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 16 | [今天](#属性-今天（TODAY）) | TODAY | TEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 17 | [昨天](#属性-昨天（YESTERDAY）) | YESTERDAY | TEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 18 | [本周](#属性-本周（THISWEEK）) | THISWEEK | TEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 19 | [上周](#属性-上周（LASTWEEK）) | LASTWEEK | TEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 20 | [本月](#属性-本月（THISMONTH）) | THISMONTH | TEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 21 | [上月](#属性-上月（LASTMONTH）) | LASTMONTH | TEXT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 22 | [前端键值](#属性-前端键值（SRFKEY）) | SRFKEY | BIGINT | 否 | 是 | 是 | [项目（ZT_PROJECT）](../zentao/Project) - [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |

### 属性-附加值（EXTRA）
#### 属性说明
细分需求、任务。任务再次分配

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-对象类型（OBJECTTYPE）
#### 属性说明
对象类型

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
参照数据字典【[系统日志对象类型（Action__object_type）](../../codelist/Action__object_type)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-id（ID）
#### 属性说明
id

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（COMMENT）
#### 属性说明
备注

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-已读（READ）
#### 属性说明
发生变更之后的确认行为

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
| 值 | 0 |

#### 取值范围/公式
参照数据字典【[ZT_ACTION__READ（Action__read）](../../codelist/Action__read)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-动作（ACTION）
#### 属性说明
动作

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
参照数据字典【[系统日志操作类型（Action__type）](../../codelist/Action__type)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-日期（DATE）
#### 属性说明
日期

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品（PRODUCT）
#### 属性说明
产品

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-对象ID（OBJECTID）
#### 属性说明
对象ID

#### 属性类型
物理属性[实体属性]

#### 数据类型
BIGINT

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-操作者（ACTOR）
#### 属性说明
操作者

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-项目（PROJECT）
#### 属性说明
项目

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（LASTCOMMENT）
#### 属性说明
备注

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
t1.`comment`

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-操作方式（ACTIONMANNER）
#### 属性说明
操作方式

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
参照数据字典【[系统日志操作方式（ActionManner）](../../codelist/ActionManner)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-当前用户（ISACTORSS）
#### 属性说明
当前用户

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

#### 数据类型
BIGINT

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-显示日期（DATE1）
#### 属性说明
显示日期

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
DATE_FORMAT(t1.date,'%m月%d日 %H:%i')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-今天（TODAY）
#### 属性说明
今天

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(now(),'%Y-%m-%d') then '1' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-昨天（YESTERDAY）
#### 属性说明
昨天

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 DAY),'%Y-%m-%d') then '1' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-本周（THISWEEK）
#### 属性说明
本周

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(case when YEARWEEK(now()) = YEARWEEK(t1.date) then '1' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-上周（LASTWEEK）
#### 属性说明
上周

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(case when YEARWEEK(DATE_ADD(now(),INTERVAL -1 WEEK)) = YEARWEEK(t1.date) then '1' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-本月（THISMONTH）
#### 属性说明
本月

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(now(),'%Y-%m') then '1' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-上月（LASTMONTH）
#### 属性说明
上月

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 MONTH),'%Y-%m') then '1' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-前端键值（SRFKEY）
#### 属性说明
前端键值

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

#### 数据类型
BIGINT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
t1.id

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

