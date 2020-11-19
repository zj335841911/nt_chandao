
# 实体-任务统计(IBZ_TASKSTATS)
## 实体说明
任务统计

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
| 1 | [项目名称](#属性-项目名称（PROJECTNAME）) | PROJECTNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [完成者](#属性-完成者（FINSHEDBY）) | FINSHEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [预计总工时](#属性-预计总工时（TOTALESTIMATE）) | TOTALESTIMATE | 整型 | 否 | 否 | 是 |
| 4 | [消耗总工时](#属性-消耗总工时（TOTALCONSUMED）) | TOTALCONSUMED | 整型 | 否 | 否 | 是 |
| 5 | [剩余总工时](#属性-剩余总工时（TOTALLEFT）) | TOTALLEFT | 整型 | 否 | 否 | 是 |
| 6 | [项目](#属性-项目（PROJECT）) | PROJECT | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 8 | [名称](#属性-名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-项目名称（PROJECTNAME）
#### 属性说明
项目名称

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

### 属性-完成者（FINSHEDBY）
#### 属性说明
完成者

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

### 属性-预计总工时（TOTALESTIMATE）
#### 属性说明
预计总工时

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-消耗总工时（TOTALCONSUMED）
#### 属性说明
消耗总工时

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-剩余总工时（TOTALLEFT）
#### 属性说明
剩余总工时

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-项目（PROJECT）
#### 属性说明
项目

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

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

### 属性-名称（NAME）
#### 属性说明
名称

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
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `%like%` |

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
| 1 | [名称（NAME）](#属性-名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [完成者（FINSHEDBY）](#属性-完成者（FINSHEDBY）) | `=` |
| 2 | [项目（PROJECT）](#属性-项目（PROJECT）) | `=` |
| 3 | [名称（NAME）](#属性-名称（NAME）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [用户完成任务统计](#数据查询-用户完成任务统计（UserFinishTaskSum）) | UserFinishTaskSum | 否 |
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
t1.`ID`,
t1.`NAME`,
0 AS `TOTALCONSUMED`,
0 AS `TOTALESTIMATE`,
0 AS `TOTALLEFT`
FROM `zt_task` t1 

```
### 数据查询-用户完成任务统计（UserFinishTaskSum）
#### 说明
用户完成任务统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.id,
	t1.`name`,
	t2.account,
	t2.`TOTALESTIMATE`,
	t2.`TOTALCONSUMED`,
	t2.`TOTALLEFT` 
FROM
	zt_project t1
	JOIN (
	SELECT
		t1.project,
		t1.account,
		sum( t1.estimate ) AS `TOTALESTIMATE`,
		sum( t1.consumed ) AS `TOTALCONSUMED`,
		sum( t1.`left` ) AS `TOTALLEFT` 
	FROM
		((
			SELECT
				t1.project,
				t2.account,
				t2.`left` + t2.consumed AS estimate,
				t2.consumed,
				t2.`left` 
			FROM
				(
				SELECT
					t1.id,
					t1.project 
				FROM
					zt_task t1 
				WHERE
					t1.deleted = '0' 
					AND t1.parent <> - 1 
				AND t1.id IN ( SELECT DISTINCT root FROM zt_team WHERE type = 'task' )) t1
				JOIN zt_taskestimate t2 ON t1.id = t2.task 
				) UNION
			(
			SELECT
				t1.project,
				t1.finishedBy AS account,
				t1.estimate,
				t1.consumed,
				t1.`left` 
			FROM
				zt_task t1 
			WHERE
				t1.deleted = '0' 
				AND t1.parent <> - 1 
				AND t1.finishedBy <> '' 
			AND t1.id NOT IN ( SELECT DISTINCT root FROM zt_team WHERE type = 'task' ))) t1 
	GROUP BY
		t1.project,
		t1.account 
	) t2 ON t1.id = t2.project 
WHERE
	deleted = '0'
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
t1.`ID`,
t1.`NAME`,
0 AS `TOTALCONSUMED`,
0 AS `TOTALESTIMATE`,
0 AS `TOTALLEFT`
FROM `zt_task` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [用户完成任务统计](#数据集合-用户完成任务统计（UserFinishTaskSum）) | UserFinishTaskSum | 否 |

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
### 数据集合-用户完成任务统计（UserFinishTaskSum）
#### 说明
用户完成任务统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [用户完成任务统计（UserFinishTaskSum）](#数据查询-用户完成任务统计（UserFinishTaskSum）) |

## 数据导入
无

## 数据导出
无

