# 实体-项目统计(IBZ_PROJECTSTATS)
## 实体说明
项目统计

## 所属模块
[iBiz增强模块](../ibiz)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [项目编号](#属性-项目编号（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 2 | [需求总数](#属性-需求总数（STORYCNT）) | STORYCNT | INT | 否 | 否 | 是 | -- |
| 3 | [任务总数](#属性-任务总数（TASKCNT）) | TASKCNT | INT | 否 | 否 | 是 | -- |
| 4 | [任务最初预计总工时](#属性-任务最初预计总工时（TOTALESTIMATE）) | TOTALESTIMATE | FLOAT | 否 | 否 | 是 | -- |
| 5 | [任务消耗总工时](#属性-任务消耗总工时（TOTALCONSUMED）) | TOTALCONSUMED | FLOAT | 否 | 否 | 是 | -- |
| 6 | [任务预计剩余总工时](#属性-任务预计剩余总工时（TOTALLEFT）) | TOTALLEFT | FLOAT | 否 | 否 | 是 | -- |
| 7 | [未完成任务总数](#属性-未完成任务总数（UNDONETASKCNT）) | UNDONETASKCNT | INT | 否 | 否 | 是 | -- |
| 8 | [关闭需求总数](#属性-关闭需求总数（CLOSEDSTORYCNT）) | CLOSEDSTORYCNT | INT | 否 | 否 | 是 | -- |
| 9 | [Bug总数](#属性-Bug总数（BUGCNT）) | BUGCNT | INT | 否 | 否 | 是 | -- |
| 10 | [未解决Bug总数](#属性-未解决Bug总数（ACTIVEBUGCNT）) | ACTIVEBUGCNT | INT | 否 | 否 | 是 | -- |
| 11 | [未关闭需求总数](#属性-未关闭需求总数（UNCLOSEDSTORYCNT）) | UNCLOSEDSTORYCNT | INT | 否 | 否 | 是 | -- |
| 12 | [已结束任务总数](#属性-已结束任务总数（FINISHTASKCNT）) | FINISHTASKCNT | INT | 否 | 否 | 是 | -- |
| 13 | [已解决Bug总数](#属性-已解决Bug总数（FINISHBUGCNT）) | FINISHBUGCNT | INT | 否 | 否 | 是 | -- |
| 14 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 否 | 是 | -- |
| 15 | [工时](#属性-工时（TIME）) | TIME | FLOAT | 否 | 否 | 是 | -- |
| 16 | [工时类型](#属性-工时类型（TYPE）) | TYPE | TEXT | 否 | 否 | 是 | -- |
| 17 | [项目名称](#属性-项目名称（NAME）) | NAME | TEXT | 否 | 否 | 否 | -- |
| 18 | [未确认Bug总数](#属性-未确认Bug总数（UNCONFIRMEDBUGCNT）) | UNCONFIRMEDBUGCNT | INT | 否 | 否 | 是 | -- |
| 19 | [未关闭Bug总数](#属性-未关闭Bug总数（UNCLOSEDBUGCNT）) | UNCLOSEDBUGCNT | INT | 否 | 否 | 是 | -- |
| 20 | [总工时](#属性-总工时（TOTALWH）) | TOTALWH | INT | 否 | 否 | 是 | -- |
| 21 | [已发布需求数](#属性-已发布需求数（RELEASEDSTORYCNT）) | RELEASEDSTORYCNT | INT | 否 | 否 | 是 | -- |
| 22 | [昨日完成任务数](#属性-昨日完成任务数（YESTERDAYCTASKCNT）) | YESTERDAYCTASKCNT | INT | 否 | 否 | 是 | -- |
| 23 | [昨天解决Bug数](#属性-昨天解决Bug数（YESTERDAYRBUGCNT）) | YESTERDAYRBUGCNT | INT | 否 | 否 | 是 | -- |
| 24 | [截止日期](#属性-截止日期（END）) | END | DATE | 否 | 否 | 是 | -- |
| 25 | [状态](#属性-状态（STATUS）) | STATUS | TEXT | 否 | 否 | 是 | -- |
| 26 | [项目排序](#属性-项目排序（ORDER1）) | ORDER1 | INT | 否 | 否 | 是 | -- |
| 27 | [是否置顶](#属性-是否置顶（ISTOP）) | ISTOP | INT | 否 | 否 | 是 | -- |

### 属性-项目编号（ID）
#### 属性说明
项目编号
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
无

### 属性-需求总数（STORYCNT）
#### 属性说明
需求总数
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
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = %1$s AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-任务总数（TASKCNT）
#### 属性说明
任务总数
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
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-任务最初预计总工时（TOTALESTIMATE）
#### 属性说明
任务最初预计总工时
#### 属性类型
物理字段[来自当前实体物理表字段]


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
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1'))

#### 数据格式
无

#### 关系属性
无

### 属性-任务消耗总工时（TOTALCONSUMED）
#### 属性说明
任务消耗总工时
#### 属性类型
物理字段[来自当前实体物理表字段]


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
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1'))

#### 数据格式
无

#### 关系属性
无

### 属性-任务预计剩余总工时（TOTALLEFT）
#### 属性说明
任务预计剩余总工时
#### 属性类型
物理字段[来自当前实体物理表字段]


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
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1'))

#### 数据格式
无

#### 关系属性
无

### 属性-未完成任务总数（UNDONETASKCNT）
#### 属性说明
未完成任务总数
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
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = %1$s AND `STATUS` NOT IN ('done','cancel','closed') AND DELETED =  '0')

#### 数据格式
无

#### 关系属性
无

### 属性-关闭需求总数（CLOSEDSTORYCNT）
#### 属性说明
关闭需求总数
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
(SELECT COUNT(1) FROM ZT_STORY WHERE `STATUS` =  'closed' AND FIND_IN_SET (PRODUCT, (SELECT GROUP_CONCAT(PRODUCT) FROM ZT_PROJECTPRODUCT WHERE PROJECT= %1$s)) AND DELETED = '0' )

#### 数据格式
无

#### 关系属性
无

### 属性-Bug总数（BUGCNT）
#### 属性说明
Bug总数
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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-未解决Bug总数（ACTIVEBUGCNT）
#### 属性说明
未解决Bug总数
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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `STATUS` = 'active' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-未关闭需求总数（UNCLOSEDSTORYCNT）
#### 属性说明
未关闭需求总数
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
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE `STATUS` <>  'closed' AND PROJECT = %1$s AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-已结束任务总数（FINISHTASKCNT）
#### 属性说明
已结束任务总数
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
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = %1$s AND `STATUS` IN ('done','cancel','closed') AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-已解决Bug总数（FINISHBUGCNT）
#### 属性说明
已解决Bug总数
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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `STATUS` <> 'active' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

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
无

### 属性-工时（TIME）
#### 属性说明
界面使用
#### 属性类型
物理字段[来自当前实体物理表字段]


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
无

### 属性-工时类型（TYPE）
#### 属性说明
界面使用
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
无

### 属性-项目名称（NAME）
#### 属性说明
项目名称
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
无

### 属性-未确认Bug总数（UNCONFIRMEDBUGCNT）
#### 属性说明
未确认Bug总数
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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `CONFIRMED` = 0 AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-未关闭Bug总数（UNCLOSEDBUGCNT）
#### 属性说明
未关闭Bug总数
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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `STATUS` <> 'closed' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-总工时（TOTALWH）
#### 属性说明
总工时
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
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ))

#### 数据格式
无

#### 关系属性
无

### 属性-已发布需求数（RELEASEDSTORYCNT）
#### 属性说明
已发布需求数
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
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE stage = 'released' AND PROJECT = t1.id AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-昨日完成任务数（YESTERDAYCTASKCNT）
#### 属性说明
昨日完成任务数
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
(select COUNT(1) from zt_task t where t.deleted = '0' and t.project = t1.id and t.`status` = 'closed' and t.closedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59') )

#### 数据格式
无

#### 关系属性
无

### 属性-昨天解决Bug数（YESTERDAYRBUGCNT）
#### 属性说明
昨天解决Bug数
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
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'resolved' AND DELETED = '0' and RESOLVEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59'))

#### 数据格式
无

#### 关系属性
无

### 属性-截止日期（END）
#### 属性说明
截止日期
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
无

### 属性-状态（STATUS）
#### 属性说明
状态
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
参照数据字典【[项目状态（Project__status）](../../codelist/Project__status)】

#### 数据格式
无

#### 关系属性
无

### 属性-项目排序（ORDER1）
#### 属性说明
项目排序
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
t1.`order`

#### 数据格式
无

#### 关系属性
无

### 属性-是否置顶（ISTOP）
#### 属性说明
是否置顶
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
无

