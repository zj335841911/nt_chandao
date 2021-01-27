
# 实体-用户工时统计(ACCOUNTTASKESTIMATE)
## 实体说明
用户工时统计

## 所属模块
[iBizPro模块](../ibizpro)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [主键](#属性-主键（ID）) | ID | 文本，可指定长度 | 是 | 否 | 是 |
| 2 | [项目标识](#属性-项目标识（PROJECT）) | PROJECT | 大整型 | 否 | 否 | 是 |
| 3 | [项目名称](#属性-项目名称（PROJECTNAME）) | PROJECTNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [年](#属性-年（YEAR）) | YEAR | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [月](#属性-月（MONTH）) | MONTH | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 8 | [工时](#属性-工时（CONSUMED）) | CONSUMED | 浮点 | 否 | 否 | 是 |
| 9 | [评估成本](#属性-评估成本（EVALUATIONCOST）) | EVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 10 | [投入成本](#属性-投入成本（INPUTCOST）) | INPUTCOST | 浮点 | 否 | 否 | 是 |
| 11 | [评估工时](#属性-评估工时（EVALUATIONTIME）) | EVALUATIONTIME | 浮点 | 否 | 否 | 是 |

### 属性-主键（ID）
#### 属性说明
主键

- 是否是主键
是

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

### 属性-项目标识（PROJECT）
#### 属性说明
项目标识

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
大整型

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
| 1 | `in(...)` |

#### 关系属性
无

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

### 属性-年（YEAR）
#### 属性说明
年

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

### 属性-月（MONTH）
#### 属性说明
月

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

### 属性-用户（ACCOUNT）
#### 属性说明
用户

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

### 属性-日期（DATE）
#### 属性说明
日期

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

### 属性-工时（CONSUMED）
#### 属性说明
工时

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

### 属性-评估成本（EVALUATIONCOST）
#### 属性说明
评估成本

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

### 属性-投入成本（INPUTCOST）
#### 属性说明
投入成本

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

### 属性-评估工时（EVALUATIONTIME）
#### 属性说明
评估工时

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
无

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [项目标识（PROJECT）](#属性-项目标识（PROJECT）) | `in(...)` |
| 2 | [年（YEAR）](#属性-年（YEAR）) | `=` |
| 3 | [月（MONTH）](#属性-月（MONTH）) | `=` |
| 4 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) | `=` |
| 5 | [日期（DATE）](#属性-日期（DATE）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [所有用户工时](#数据查询-所有用户工时（AllAccountEstimate）) | AllAccountEstimate | 否 |
| 2 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 3 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-所有用户工时（AllAccountEstimate）
#### 说明
所有用户工时

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT YEAR
	( t1.date ) AS `year`,
	Right(100 + MONTH ( t1.date ), 2) AS `month`,
	t11.project,
	t21.`name` AS projectname,
	t1.account,
	t1.date,
	t1.consumed AS consumed,
	t1.EVALUATIONCOST AS EVALUATIONCOST,
	t1.INPUTCOST AS INPUTCOST,
	t1.EVALUATIONTIME AS EVALUATIONTIME 
FROM
	`zt_taskestimate` t1
	LEFT JOIN `zt_task` t11 ON t1.`TASK` = t11.`ID`
	LEFT JOIN `zt_project` t21 ON t11.`PROJECT` = t21.`ID`
```
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
	t1.* 
FROM
	(
SELECT YEAR
	( t1.date ) AS `year`,
	Right(100 + MONTH ( t1.date ), 2) AS `month`,
	t11.project,
	t21.`name` AS projectname,
	t1.account,
	t1.date,
	ROUND( sum( t1.consumed ), 2 ) AS consumed,
	ROUND( sum( t1.EVALUATIONCOST ), 2 ) AS EVALUATIONCOST,
	ROUND( sum( t1.INPUTCOST ), 2 ) AS INPUTCOST,
	ROUND( sum( t1.EVALUATIONTIME ), 2 ) AS EVALUATIONTIME 
FROM
	`zt_taskestimate` t1
	LEFT JOIN `zt_task` t11 ON t1.`TASK` = t11.`ID`
	LEFT JOIN `zt_project` t21 ON t11.`PROJECT` = t21.`ID` 
WHERE
	t11.project IS NOT NULL 
	AND t11.project <> '0' 
	AND t1.date <> '0000-00-00' 
GROUP BY
	t11.project,
	t21.`name`,
	t1.account,
	t1.date 
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
t1.`DATE`,
t1.`EVALUATIONCOST`,
t1.`INPUTCOST`
FROM `zt_taskestimate` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [所有用户工时](#数据集合-所有用户工时（AllAccountEstimate）) | AllAccountEstimate | 否 |
| 2 | [数据集](#数据集合-数据集（Default）) | Default | 是 |

### 数据集合-所有用户工时（AllAccountEstimate）
#### 说明
所有用户工时

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [所有用户工时（AllAccountEstimate）](#数据查询-所有用户工时（AllAccountEstimate）) |
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

## 数据导入
无

## 数据导出
无

