
# 实体-项目统计(IBZ_PROJECTSTATS)
## 实体说明
项目统计

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [项目编号](#属性-项目编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 2 | [需求总数](#属性-需求总数（STORYCNT）) | STORYCNT | 整型 | 否 | 否 | 是 |
| 3 | [任务总数](#属性-任务总数（TASKCNT）) | TASKCNT | 整型 | 否 | 否 | 是 |
| 4 | [任务最初预计总工时](#属性-任务最初预计总工时（TOTALESTIMATE）) | TOTALESTIMATE | 浮点 | 否 | 否 | 是 |
| 5 | [任务消耗总工时](#属性-任务消耗总工时（TOTALCONSUMED）) | TOTALCONSUMED | 浮点 | 否 | 否 | 是 |
| 6 | [任务预计剩余总工时](#属性-任务预计剩余总工时（TOTALLEFT）) | TOTALLEFT | 浮点 | 否 | 否 | 是 |
| 7 | [未完成任务总数](#属性-未完成任务总数（UNDONETASKCNT）) | UNDONETASKCNT | 整型 | 否 | 否 | 是 |
| 8 | [关闭需求总数](#属性-关闭需求总数（CLOSEDSTORYCNT）) | CLOSEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 9 | [Bug总数](#属性-Bug总数（BUGCNT）) | BUGCNT | 整型 | 否 | 否 | 是 |
| 10 | [未解决Bug总数](#属性-未解决Bug总数（ACTIVEBUGCNT）) | ACTIVEBUGCNT | 整型 | 否 | 否 | 是 |
| 11 | [未关闭需求总数](#属性-未关闭需求总数（UNCLOSEDSTORYCNT）) | UNCLOSEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 12 | [已结束任务总数](#属性-已结束任务总数（FINISHTASKCNT）) | FINISHTASKCNT | 整型 | 否 | 否 | 是 |
| 13 | [已解决Bug总数](#属性-已解决Bug总数（FINISHBUGCNT）) | FINISHBUGCNT | 整型 | 否 | 否 | 是 |
| 14 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 15 | [工时](#属性-工时（TIME）) | TIME | 浮点 | 否 | 否 | 是 |
| 16 | [工时类型](#属性-工时类型（TYPE）) | TYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [项目名称](#属性-项目名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 18 | [未确认Bug总数](#属性-未确认Bug总数（UNCONFIRMEDBUGCNT）) | UNCONFIRMEDBUGCNT | 整型 | 否 | 否 | 是 |
| 19 | [未关闭Bug总数](#属性-未关闭Bug总数（UNCLOSEDBUGCNT）) | UNCLOSEDBUGCNT | 整型 | 否 | 否 | 是 |
| 20 | [总工时](#属性-总工时（TOTALWH）) | TOTALWH | 整型 | 否 | 否 | 是 |
| 21 | [已发布需求数](#属性-已发布需求数（RELEASEDSTORYCNT）) | RELEASEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 22 | [昨日完成任务数](#属性-昨日完成任务数（YESTERDAYCTASKCNT）) | YESTERDAYCTASKCNT | 整型 | 否 | 否 | 是 |
| 23 | [昨天解决Bug数](#属性-昨天解决Bug数（YESTERDAYRBUGCNT）) | YESTERDAYRBUGCNT | 整型 | 否 | 否 | 是 |
| 24 | [截止日期](#属性-截止日期（END）) | END | 日期型 | 否 | 否 | 是 |
| 25 | [状态](#属性-状态（STATUS）) | STATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 26 | [项目排序](#属性-项目排序（ORDER1）) | ORDER1 | 整型 | 否 | 否 | 是 |
| 27 | [是否置顶](#属性-是否置顶（ISTOP）) | ISTOP | 整型 | 否 | 否 | 是 |
| 28 | [已关闭任务数](#属性-已关闭任务数（CLOSEDTASKCNT）) | CLOSEDTASKCNT | 整型 | 否 | 否 | 是 |
| 29 | [已取消任务数](#属性-已取消任务数（CANCELTASKCNT）) | CANCELTASKCNT | 整型 | 否 | 否 | 是 |
| 30 | [已暂停任务数](#属性-已暂停任务数（PAUSETASKCNT）) | PAUSETASKCNT | 整型 | 否 | 否 | 是 |
| 31 | [未开始任务数](#属性-未开始任务数（WAITTASKCNT）) | WAITTASKCNT | 整型 | 否 | 否 | 是 |
| 32 | [进行中任务数](#属性-进行中任务数（DOINGTASKCNT）) | DOINGTASKCNT | 整型 | 否 | 否 | 是 |
| 33 | [已完成任务数](#属性-已完成任务数（DONETASKCNT）) | DONETASKCNT | 整型 | 否 | 否 | 是 |
| 34 | [设计类型任务](#属性-设计类型任务（DESIGNTASKCNT）) | DESIGNTASKCNT | 整型 | 否 | 否 | 是 |
| 35 | [讨论类型任务](#属性-讨论类型任务（DISCUSSTASKCNT）) | DISCUSSTASKCNT | 整型 | 否 | 否 | 是 |
| 36 | [研究类型任务](#属性-研究类型任务（STUDYTASKCNT）) | STUDYTASKCNT | 整型 | 否 | 否 | 是 |
| 37 | [界面类型任务](#属性-界面类型任务（UITASKCNT）) | UITASKCNT | 整型 | 否 | 否 | 是 |
| 38 | [测试类型任务](#属性-测试类型任务（TESTTASKCNT）) | TESTTASKCNT | 整型 | 否 | 否 | 是 |
| 39 | [服务类型任务](#属性-服务类型任务（SERVETASKCNT）) | SERVETASKCNT | 整型 | 否 | 否 | 是 |
| 40 | [开发类型任务](#属性-开发类型任务（DEVELTASKCNT）) | DEVELTASKCNT | 整型 | 否 | 否 | 是 |
| 41 | [其他类型任务](#属性-其他类型任务（MISCTASKCNT）) | MISCTASKCNT | 整型 | 否 | 否 | 是 |
| 42 | [事务类型任务](#属性-事务类型任务（AFFAIRTASKCNT）) | AFFAIRTASKCNT | 整型 | 否 | 否 | 是 |
| 43 | [完成需求数](#属性-完成需求数（COMPLETESTORYCNT）) | COMPLETESTORYCNT | 整型 | 否 | 否 | 是 |
| 44 | [完成任务数](#属性-完成任务数（COMPLETETASKCNT）) | COMPLETETASKCNT | 整型 | 否 | 否 | 是 |
| 45 | [Bug/完成需求](#属性-Bug/完成需求（BUGSTORY）) | BUGSTORY | 整型 | 否 | 否 | 是 |
| 46 | [Bug/完成任务](#属性-Bug/完成任务（BUGTASK）) | BUGTASK | 整型 | 否 | 否 | 是 |
| 47 | [重要Bug数](#属性-重要Bug数（IMPORTANTBUGCNT）) | IMPORTANTBUGCNT | 整型 | 否 | 否 | 是 |
| 48 | [严重Bug比率](#属性-严重Bug比率（SERIOUSBUGPROPORTION）) | SERIOUSBUGPROPORTION | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-项目编号（ID）
#### 属性说明
项目编号

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
无

### 属性-需求总数（STORYCNT）
#### 属性说明
需求总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务总数（TASKCNT）
#### 属性说明
任务总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务最初预计总工时（TOTALESTIMATE）
#### 属性说明
任务最初预计总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务消耗总工时（TOTALCONSUMED）
#### 属性说明
任务消耗总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务预计剩余总工时（TOTALLEFT）
#### 属性说明
任务预计剩余总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未完成任务总数（UNDONETASKCNT）
#### 属性说明
未完成任务总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = %1$s AND `STATUS` NOT IN ('done','cancel','closed') AND DELETED =  '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-关闭需求总数（CLOSEDSTORYCNT）
#### 属性说明
关闭需求总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_STORY WHERE `STATUS` =  'closed' AND FIND_IN_SET (PRODUCT, (SELECT GROUP_CONCAT(PRODUCT) FROM ZT_PROJECTPRODUCT WHERE PROJECT= %1$s)) AND DELETED = '0' )
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-Bug总数（BUGCNT）
#### 属性说明
Bug总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未解决Bug总数（ACTIVEBUGCNT）
#### 属性说明
未解决Bug总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `STATUS` = 'active' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未关闭需求总数（UNCLOSEDSTORYCNT）
#### 属性说明
未关闭需求总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE `STATUS` <>  'closed' AND PROJECT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-已结束任务总数（FINISHTASKCNT）
#### 属性说明
已结束任务总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = %1$s AND `STATUS` IN ('done','cancel','closed') AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-已解决Bug总数（FINISHBUGCNT）
#### 属性说明
已解决Bug总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `STATUS` <> 'active' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

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
无

### 属性-工时（TIME）
#### 属性说明
界面使用

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
浮点

- Java类型
Double

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
无

### 属性-工时类型（TYPE）
#### 属性说明
界面使用

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
无

### 属性-项目名称（NAME）
#### 属性说明
项目名称

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
无

### 属性-未确认Bug总数（UNCONFIRMEDBUGCNT）
#### 属性说明
未确认Bug总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `CONFIRMED` = 0 AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未关闭Bug总数（UNCLOSEDBUGCNT）
#### 属性说明
未关闭Bug总数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `STATUS` <> 'closed' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-总工时（TOTALWH）
#### 属性说明
总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-已发布需求数（RELEASEDSTORYCNT）
#### 属性说明
已发布需求数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE stage = 'released' AND PROJECT = t1.id AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-昨日完成任务数（YESTERDAYCTASKCNT）
#### 属性说明
昨日完成任务数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(select COUNT(1) from zt_task t where t.deleted = '0' and t.project = t1.id and t.`status` = 'closed' and t.closedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59') )
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-昨天解决Bug数（YESTERDAYRBUGCNT）
#### 属性说明
昨天解决Bug数

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'resolved' AND DELETED = '0' and RESOLVEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-截止日期（END）
#### 属性说明
截止日期

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-状态（STATUS）
#### 属性说明
状态

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
参照数据字典【[项目状态（Project__status）](../../codelist/Project__status)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `!=`或者`<>` |

#### 关系属性
无

### 属性-项目排序（ORDER1）
#### 属性说明
项目排序

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
t1.`order`
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-是否置顶（ISTOP）
#### 属性说明
是否置顶

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-已关闭任务数（CLOSEDTASKCNT）
#### 属性说明
已关闭任务数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-已取消任务数（CANCELTASKCNT）
#### 属性说明
已取消任务数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-已暂停任务数（PAUSETASKCNT）
#### 属性说明
已暂停任务数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-未开始任务数（WAITTASKCNT）
#### 属性说明
未开始任务数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-进行中任务数（DOINGTASKCNT）
#### 属性说明
进行中任务数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-已完成任务数（DONETASKCNT）
#### 属性说明
已完成任务数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-设计类型任务（DESIGNTASKCNT）
#### 属性说明
设计类型任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-讨论类型任务（DISCUSSTASKCNT）
#### 属性说明
讨论类型任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-研究类型任务（STUDYTASKCNT）
#### 属性说明
研究类型任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-界面类型任务（UITASKCNT）
#### 属性说明
界面类型任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-测试类型任务（TESTTASKCNT）
#### 属性说明
测试类型任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-服务类型任务（SERVETASKCNT）
#### 属性说明
服务类型任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-开发类型任务（DEVELTASKCNT）
#### 属性说明
开发类型任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-其他类型任务（MISCTASKCNT）
#### 属性说明
其他类型任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-事务类型任务（AFFAIRTASKCNT）
#### 属性说明
事务类型任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-完成需求数（COMPLETESTORYCNT）
#### 属性说明
完成需求数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-完成任务数（COMPLETETASKCNT）
#### 属性说明
完成任务数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-Bug/完成需求（BUGSTORY）
#### 属性说明
Bug/完成需求

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-Bug/完成任务（BUGTASK）
#### 属性说明
Bug/完成任务

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-重要Bug数（IMPORTANTBUGCNT）
#### 属性说明
重要Bug数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-严重Bug比率（SERIOUSBUGPROPORTION）
#### 属性说明
严重Bug比率

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
#
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无


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
| 6 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 7 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
无

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [项目名称（NAME）](#属性-项目名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [项目名称（NAME）](#属性-项目名称（NAME）) | `%like%` |
| 2 | [状态（STATUS）](#属性-状态（STATUS）) | `=` |
| 3 | [状态（STATUS）](#属性-状态（STATUS）) | `!=`或者`<>` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [未关闭产品](#数据查询-未关闭产品（NoOpenProduct）) | NoOpenProduct | 否 |
| 3 | [项目质量表查询](#数据查询-项目质量表查询（ProjectQuality）) | ProjectQuality | 否 |
| 4 | [项目任务统计(任务状态)](#数据查询-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）) | ProjectTaskCountByTaskStatus | 否 |
| 5 | [项目任务类型统计](#数据查询-项目任务类型统计（ProjectTaskCountByType）) | ProjectTaskCountByType | 否 |
| 6 | [任务工时消耗剩余查询](#数据查询-任务工时消耗剩余查询（TaskTime）) | TaskTime | 否 |
| 7 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY 
WHERE
	`STATUS` = 'closed' 
	AND FIND_IN_SET ( PRODUCT, ( SELECT GROUP_CONCAT( PRODUCT ) FROM ZT_PROJECTPRODUCT WHERE PROJECT = t1.`ID` ) ) 
	AND DELETED = '0' 
	) AS `CLOSEDSTORYCNT`,
	t1.`DELETED`,
	t1.`END`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0' ) AS `FINISHBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `FINISHTASKCNT`,
	t1.`ID`,
	t1.`NAME`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	stage = 'released' 
	AND PROJECT = t1.id 
	AND DELETED = '0' 
	) AS `RELEASEDSTORYCNT`,
	t1.`STATUS`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `TASKCNT`,
	(
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALCONSUMED`,
	(
SELECT
	round( SUM( ESTIMATE ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALESTIMATE`,
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALLEFT`,
	(
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) + (
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) 
	) AS `TOTALWH`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `UNCLOSEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	`STATUS` <> 'closed' 
	AND PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `UNCLOSEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` NOT IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `UNDONETASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	zt_task t 
WHERE
	t.deleted = '0' 
	AND t.project = t1.id 
	AND t.`status` = 'closed' 
	AND t.closedDate BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYCTASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` = 'resolved' 
	AND DELETED = '0' 
	AND RESOLVEDDATE BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYRBUGCNT` ,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_project` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'project' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
```
### 数据查询-未关闭产品（NoOpenProduct）
#### 说明
未关闭产品

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY 
WHERE
	`STATUS` = 'closed' 
	AND FIND_IN_SET ( PRODUCT, ( SELECT GROUP_CONCAT( PRODUCT ) FROM ZT_PROJECTPRODUCT WHERE PROJECT = t1.`ID` ) ) 
	AND DELETED = '0' 
	) AS `CLOSEDSTORYCNT`,
	t1.`DELETED`,
	t1.`END`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0' ) AS `FINISHBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `FINISHTASKCNT`,
	t1.`ID`,
	t1.`NAME`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	stage = 'released' 
	AND PROJECT = t1.id 
	AND DELETED = '0' 
	) AS `RELEASEDSTORYCNT`,
	t1.`STATUS`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `TASKCNT`,
	(
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALCONSUMED`,
	(
SELECT
	round( SUM( ESTIMATE ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALESTIMATE`,
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALLEFT`,
	(
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) + (
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) 
	) AS `TOTALWH`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `UNCLOSEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	`STATUS` <> 'closed' 
	AND PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `UNCLOSEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` NOT IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `UNDONETASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	zt_task t 
WHERE
	t.deleted = '0' 
	AND t.project = t1.id 
	AND t.`status` = 'closed' 
	AND t.closedDate BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYCTASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` = 'resolved' 
	AND DELETED = '0' 
	AND RESOLVEDDATE BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYRBUGCNT` ,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_project` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'project' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
```
### 数据查询-项目质量表查询（ProjectQuality）
#### 说明
项目质量表查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.bugcnt,t1.completetaskcnt,t1.completestorycnt,t1.name,t1.storycnt,t1.taskcnt,t1.bugstory,t1.bugtask,IFNULL(t4.IMPORTANTBUGCNT,0) as IMPORTANTBUGCNT ,IFNULL((IMPORTANTBUGCNT/t1.bugcnt),0)as SERIOUSBUGPROPORTION from (
SELECT
	t1.*,
	IFNULL( t3.bugtask, 0 ) AS bugtask 
FROM
	(
SELECT
	t1.*,
	IFNULL( t22.bugstory, 0 ) AS bugstory 
FROM
	(
SELECT
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	t1.`DELETED`,
	t1.`END`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0' ) AS `FINISHBUGCNT`,
	(SELECT count(1) from zt_task where PROJECT = t1.`ID` AND `STATUS`='done' AND DELETED = '0')as completetaskcnt,
	(SELECT count(1) from zt_story where  `STAGE` in ('verified','released','closed') AND DELETED = '0')as completestorycnt,
	t1.`ID`,
	t1.`NAME`,
	t1.`STATUS`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `TASKCNT` 
FROM
	`zt_project` t1
	LEFT JOIN t_ibz_top t2 ON t1.id = t2.OBJECTID 
	AND t2.type = 'project' 
	AND t2.ACCOUNT = 'csd123_123' 
WHERE
	t1.DELETED = '0' 
	AND (
	(
	t1.acl = 'private' 
	AND t1.id IN ( SELECT t3.root FROM zt_team t3 WHERE t3.account = 'csd123_123' AND t3.type = 'project' ) 
	) 
	OR t1.acl = 'open' 
	) 
	) t1
	LEFT JOIN (
SELECT
	t1.project,
	count( 1 ) AS bugstory 
FROM
	(
SELECT
	t1.project,
	t1.story,
	t2.title 
FROM
	zt_bug t1
	LEFT JOIN zt_story t2 ON t1.story = t2.id
	LEFT JOIN zt_project t22 ON t1.project = t22.id 
WHERE
	t1.deleted = '0' 
	AND t1.project <> '0' 
	AND t1.story <> '0' 
	AND t22.deleted = '0' 
	) t1 
GROUP BY
	t1.project 
	) t22 ON t1.id = t22.project 
	) t1
	LEFT JOIN (
SELECT
	t1.project,
	count( 1 ) AS bugtask 
FROM
	(
SELECT
	t1.project,
	t1.task,
	t1.title,
	t2.NAME 
FROM
	zt_bug t1
	LEFT JOIN zt_task t2 ON t1.task = t2.id
	LEFT JOIN zt_project t22 ON t1.project = t22.id 
WHERE
	t1.deleted = '0' 
	AND t1.project <> '0' 
	AND t1.task <> '0' 
	AND t22.deleted = '0' 
	) t1 
GROUP BY
	t1.project 
	) t3 ON t1.id = t3.project
	)t1 Left join (SELECT t1.project, count(1) as IMPORTANTBUGCNT from zt_bug t1 where t1.severity <=3 and t1.deleted='0' and t1.project <> '0' GROUP BY t1.project)t4 on t1.id=t4.project
```
### 数据查询-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）
#### 说明
项目任务统计(任务状态)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.project,t1.projectname  as name,
SUM(IF(t1.`status` = 'closed',t1.ss,0)) as closedtaskcnt,
SUM(IF(t1.`status` = 'cancel',t1.ss,0)) as cancelTaskcnt,
SUM(IF(t1.`status` = 'done',t1.ss,0)) as doneTaskcnt,
SUM(IF(t1.`status` = 'pause',t1.ss,0)) as pauseTaskcnt,
SUM(IF(t1.`status` = 'wait',t1.ss,0)) as waitTaskcnt,
SUM(IF(t1.`status` = 'doing',t1.ss,0)) as doingTaskcnt,
COUNT(1) as taskcnt,
t1.deleted
from (
select t1.`status`,t1.project,t2.`name` as projectname, 1 as ss,t2.deleted from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id where t1.deleted = '0' and t1.project <> '0' ) t1 GROUP BY t1.project
```
### 数据查询-项目任务类型统计（ProjectTaskCountByType）
#### 说明
项目任务类型统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t2.id,t2.`name`,IFNULL(t1.designtaskcnt,0) as designtaskcnt,IFNULL(t1.discusstaskcnt,0) as discusstaskcnt, IFNULL(t1.studytaskcnt,0) as studytaskcnt,IFNULL(t1.uitaskcnt,0) as uitaskcnt, IFNULL(t1.testtaskcnt,0) as testtaskcnt,IFNULL(t1.servetaskcnt,0) as servetaskcnt,IFNULL(t1.develtaskcnt,0) as develtaskcnt,IFNULL(t1.misctaskcnt,0) as misctaskcnt,IFNULL(t1.affairtaskcnt,0) as affairtaskcnt,IFNULL(t1.taskcnt,0) as taskcnt from (
SELECT t1.project,t1.`name`,
SUM(IF(t1.type = 'design',t1.num,0)) as designtaskcnt,
SUM(IF(t1.type = 'discuss',t1.num,0)) as discusstaskcnt,
SUM(IF(t1.type = 'study',t1.num,0)) as studytaskcnt,
SUM(IF(t1.type = 'ui',t1.num,0)) as uitaskcnt,
SUM(IF(t1.type = 'test',t1.num,0)) as testtaskcnt,
SUM(IF(t1.type = 'serve',t1.num,0)) as servetaskcnt,
SUM(IF(t1.type = 'devel',t1.num,0)) as develtaskcnt,
SUM(IF(t1.type = 'misc',t1.num,0)) as misctaskcnt,
SUM(IF(t1.type = 'affair',t1.num,0)) as affairtaskcnt,
COUNT(1) as taskcnt
from(
select t1.type,t1.project,t2.`name`,1 as num from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id where t1.deleted = '0' and t2.id <> '0' and t2.deleted = '0') t1
GROUP BY t1.project ) t1 RIGHT JOIN zt_project t2 on t1.project = t2.id where t2.deleted = '0'

```
### 数据查询-任务工时消耗剩余查询（TaskTime）
#### 说明
该查询主要供统计图表使用

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ID`,
(SELECT SUM(CONSUMED) FROM ZT_TASK WHERE PROJECT = t1.`ID`) AS `TIME`,
'CONSUMED' AS `TYPE`
FROM `zt_project` t1 WHERE t1.`ID` =  ${srfdatacontext('srfparentkey','{"defname":"PROJECTSTATS","dename":"IBZ_PROJECTSTATS"}')} AND t1.DELETED = 0
UNION ALL 
SELECT
t2.`ID`,
(SELECT SUM(`LEFT`) FROM ZT_TASK WHERE PROJECT = t2.`ID` AND t1.DELETED = 0) AS `TIME`,
'LEFT' AS `TYPE`
FROM `zt_project` t2 WHERE t2.`ID` = ${srfdatacontext('srfparentkey','{"defname":"PROJECTSTATS","dename":"IBZ_PROJECTSTATS"}')}  AND t1.DELETED = 0

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE `STATUS` =  'closed' AND FIND_IN_SET (PRODUCT, (SELECT GROUP_CONCAT(PRODUCT) FROM ZT_PROJECTPRODUCT WHERE PROJECT= t1.`ID`)) AND DELETED = '0' ) AS `CLOSEDSTORYCNT`,
t1.`DELETED`,
t1.`END`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0') AS `FINISHBUGCNT`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND `STATUS` IN ('done','cancel','closed') AND DELETED = '0') AS `FINISHTASKCNT`,
t1.`ID`,
t1.`NAME`,
t1.`order` AS `ORDER1`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE stage = 'released' AND PROJECT = t1.id AND DELETED = '0') AS `RELEASEDSTORYCNT`,
# AS `SERIOUSBUGPROPORTION`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) )) AS `TOTALWH`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `UNCLOSEDBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE `STATUS` <>  'closed' AND PROJECT = t1.`ID` AND DELETED = '0') AS `UNCLOSEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMEDBUGCNT`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND `STATUS` NOT IN ('done','cancel','closed') AND DELETED =  '0') AS `UNDONETASKCNT`,
(select COUNT(1) from zt_task t where t.deleted = '0' and t.project = t1.id and t.`status` = 'closed' and t.closedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59') ) AS `YESTERDAYCTASKCNT`,
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'resolved' AND DELETED = '0' and RESOLVEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59')) AS `YESTERDAYRBUGCNT`
FROM `zt_project` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [未关闭产品](#数据集合-未关闭产品（NoOpenProduct）) | NoOpenProduct | 否 |
| 3 | [项目质量](#数据集合-项目质量（ProjectQuality）) | ProjectQuality | 否 |
| 4 | [项目任务统计(任务状态)](#数据集合-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）) | ProjectTaskCountByTaskStatus | 否 |
| 5 | [项目任务类型统计](#数据集合-项目任务类型统计（ProjectTaskCountByType）) | ProjectTaskCountByType | 否 |
| 6 | [任务工时消耗剩余查询](#数据集合-任务工时消耗剩余查询（TaskTime）) | TaskTime | 否 |

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
### 数据集合-未关闭产品（NoOpenProduct）
#### 说明
未关闭产品

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [未关闭产品（NoOpenProduct）](#数据查询-未关闭产品（NoOpenProduct）) |
### 数据集合-项目质量（ProjectQuality）
#### 说明
项目质量

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目质量表查询（ProjectQuality）](#数据查询-项目质量表查询（ProjectQuality）) |
### 数据集合-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）
#### 说明
项目任务统计(任务状态)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）](#数据查询-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）) |
### 数据集合-项目任务类型统计（ProjectTaskCountByType）
#### 说明
项目任务类型统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目任务类型统计（ProjectTaskCountByType）](#数据查询-项目任务类型统计（ProjectTaskCountByType）) |
### 数据集合-任务工时消耗剩余查询（TaskTime）
#### 说明
任务工时消耗剩余查询

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [任务工时消耗剩余查询（TaskTime）](#数据查询-任务工时消耗剩余查询（TaskTime）) |

## 数据导入
无

## 数据导出
无

