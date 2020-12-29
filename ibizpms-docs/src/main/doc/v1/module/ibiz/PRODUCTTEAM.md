
# 实体-产品团队(IBZ_PRODUCTTEAM)
## 实体说明
产品团队

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [加盟日](#属性-加盟日（JOIN）) | JOIN | 日期型 | 否 | 否 | 是 |
| 2 | [可用工时/天](#属性-可用工时/天（HOURS）) | HOURS | 浮点 | 否 | 否 | 是 |
| 3 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 4 | [角色](#属性-角色（ROLE）) | ROLE | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [团队类型](#属性-团队类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 6 | [受限用户](#属性-受限用户（LIMITED）) | LIMITED | 单项选择(文本值) | 否 | 否 | 是 |
| 7 | [编号](#属性-编号（ROOT）) | ROOT | 外键值 | 否 | 是 | 是 |
| 8 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 是 | 是 |
| 9 | [可用工日](#属性-可用工日（DAYS）) | DAYS | 整型 | 否 | 是 | 是 |
| 10 | [排序](#属性-排序（ORDER）) | ORDER | 整型 | 否 | 是 | 是 |
| 11 | [总计消耗](#属性-总计消耗（CONSUMED）) | CONSUMED | 浮点 | 否 | 是 | 是 |
| 12 | [预计剩余](#属性-预计剩余（LEFT）) | LEFT | 浮点 | 否 | 是 | 是 |
| 13 | [最初预计](#属性-最初预计（ESTIMATE）) | ESTIMATE | 浮点 | 否 | 是 | 是 |
| 14 | [总计可用](#属性-总计可用（TOTAL）) | TOTAL | 整型 | 否 | 是 | 是 |
| 15 | [任务数](#属性-任务数（TASKCNT）) | TASKCNT | 整型 | 否 | 是 | 是 |

### 属性-加盟日（JOIN）
#### 属性说明
加盟日

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0000-00-00 |

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-可用工时/天（HOURS）
#### 属性说明
可用工时/天

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0.0 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-编号（ID）
#### 属性说明
编号

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-角色（ROLE）
#### 属性说明
自动带入用户职位，可修改

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
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-团队类型（TYPE）
#### 属性说明
团队类型

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | project |

- 取值范围/公式
参照数据字典【[团队类型（Team__type）](../../codelist/Team__type)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-受限用户（LIMITED）
#### 属性说明
受限用户

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | no |

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-编号（ROOT）
#### 属性说明
编号

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

- Java类型
Long

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用户（ACCOUNT）
#### 属性说明
用户

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-可用工日（DAYS）
#### 属性说明
可用工日

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 45 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-排序（ORDER）
#### 属性说明
task需要排序处理人顺序,project使用id排序

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
整型

- Java类型
Integer

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总计消耗（CONSUMED）
#### 属性说明
总计消耗

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0.00 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-预计剩余（LEFT）
#### 属性说明
预计剩余

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0.00 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最初预计（ESTIMATE）
#### 属性说明
最初预计

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0.00 |

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总计可用（TOTAL）
#### 属性说明
总计可用

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
(%1$s * %2$s)
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务数（TASKCNT）
#### 属性说明
任务数

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |


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
| 1 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [团队类型（TYPE）](#属性-团队类型（TYPE）) | `=` |
| 2 | [受限用户（LIMITED）](#属性-受限用户（LIMITED）) | `=` |
| 3 | [编号（ROOT）](#属性-编号（ROOT）) | `=` |
| 4 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [产品团队成员信息](#数据查询-产品团队成员信息（ProductTeamInfo）) | ProductTeamInfo | 否 |
| 3 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-数据查询（Default）
#### 说明
数据查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DAYS`,
t1.`ESTIMATE`,
t1.`HOURS`,
t1.`ID`,
t1.`JOIN`,
t1.`LEFT`,
t1.`LIMITED`,
t1.`ORDER`,
t1.`ROLE`,
t1.`ROOT`,
(t1.`DAYS` * t1.`HOURS`) AS `TOTAL`,
t1.`TYPE`
FROM `zt_team` t1 

```
### 数据查询-产品团队成员信息（ProductTeamInfo）
#### 说明
产品团队成员信息

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.account,
	t1.days,
	t1.hours,
	t1.id,
	t1.`join`,
	t1.limited,
	t1.`order`,
	t1.role,
	t1.root,
	( t1.days * t1.hours ) AS total,
	t1.type,
	( SELECT t.realname FROM zt_user t WHERE t.account = t1.account ) AS username,
	(
SELECT
	count( t2.id ) 
FROM
	zt_task t2 
WHERE
	t2.deleted = '0' 
	AND t2.project in (t1.zzz) 
	AND t2.parent >= 0 
	AND (
	t2.assignedTo = t1.account 
	OR t2.finishedBy = t1.account 
	OR t2.id IN ( SELECT t.root FROM zt_team t WHERE t.type = 'task' AND t.account = t1.account ) 
	) 
	) AS taskcnt,
	(
SELECT
	ROUND(sum( CASE WHEN tt.LEFT IS NOT NULL THEN tt.LEFT ELSE t2.LEFT END ), 1) 
FROM
	zt_task t2
	LEFT JOIN zt_team tt ON tt.root = t2.id 
	AND tt.type = 'task' 
WHERE
	t2.deleted = '0' 
	AND t2.project  in (t1.zzz) 
	AND t2.parent >= 0 
	AND ( t2.assignedTo = t1.account OR tt.account = t1.account ) 
	) AS `left`,
	(
SELECT
	ROUND(sum( CASE WHEN tt.estimate IS NOT NULL THEN tt.estimate ELSE t2.estimate END ), 1)
FROM
	zt_task t2
	LEFT JOIN zt_team tt ON tt.root = t2.id 
	AND tt.type = 'task' 
WHERE
	t2.deleted = '0' 
	AND t2.project  in (t1.zzz) 
	AND t2.parent >= 0 
	AND ( t2.assignedTo = t1.account OR tt.account = t1.account ) 
	) AS `estimate`,
	(
SELECT
	ROUND(sum( CASE WHEN tt.consumed IS NOT NULL THEN tt.consumed ELSE t2.consumed END ), 1)
FROM
	zt_task t2
	LEFT JOIN zt_team tt ON tt.root = t2.id 
	AND tt.type = 'task' 
WHERE
	t2.deleted = '0' 
	AND t2.project in (t1.zzz) 
	AND t2.parent >= 0 
	AND ( t2.assignedTo = t1.account OR tt.account = t1.account ) 
	) AS consumed 
FROM
	(	SELECT *,(SELECT GROUP_CONCAT(project) from zt_projectproduct where product =  t1.root and t1.type = 'product' ) as zzz from zt_team t1
) t1
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
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DAYS`,
t1.`ESTIMATE`,
t1.`HOURS`,
t1.`ID`,
t1.`JOIN`,
t1.`LEFT`,
t1.`LIMITED`,
t1.`ORDER`,
t1.`ROLE`,
t1.`ROOT`,
(t1.`DAYS` * t1.`HOURS`) AS `TOTAL`,
t1.`TYPE`
FROM `zt_team` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [产品团队成员信息](#数据集合-产品团队成员信息（ProductTeamInfo）) | ProductTeamInfo | 否 |

### 数据集合-数据集（Default）
#### 说明
数据集

- 默认集合
是

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [数据查询（Default）](#数据查询-数据查询（Default）) |
### 数据集合-产品团队成员信息（ProductTeamInfo）
#### 说明
产品团队成员信息

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品团队成员信息（ProductTeamInfo）](#数据查询-产品团队成员信息（ProductTeamInfo）) |

## 数据导入
无

## 数据导出
无

