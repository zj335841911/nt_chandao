
# 实体-任务工时统计(TASKESTIMATESTATS)
## 实体说明
任务工时统计

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [日期](#属性-日期（DATE）) | DATE | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [任务数](#属性-任务数（TASKCNT）) | TASKCNT | 整型 | 否 | 否 | 是 |
| 4 | [消耗的工时](#属性-消耗的工时（CONSUMED）) | CONSUMED | 浮点 | 否 | 否 | 是 |
| 5 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 6 | [项目名称](#属性-项目名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 是 |

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
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

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
无

### 属性-消耗的工时（CONSUMED）
#### 属性说明
消耗的工时

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

### 属性-项目名称（NAME）
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

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [任务工时统计](#数据查询-任务工时统计（TaskEstimateStatsSum）) | TaskEstimateStatsSum | 否 |
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
t1.`DATE`,
t1.`ID`
FROM `zt_taskestimate` t1 

```
### 数据查询-任务工时统计（TaskEstimateStatsSum）
#### 说明
任务工时统计

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
SELECT
	t1.date,
	t2.NAME,
	t2.id,
	t1.account,
	count( 1 ) AS taskcnt,
	round( sum( t1.consumed ), 2 ) AS consumed 
FROM
	(
SELECT
	t1.NAME AS taskname,
	t1.project,
	t2.* 
FROM
	zt_task t1
	RIGHT JOIN ( SELECT t1.task, t1.date, t1.consumed, t1.account FROM zt_taskestimate t1  ) t2 ON t1.id = t2.task 
	) t1
	LEFT JOIN zt_project t2 ON t1.project = t2.id 
GROUP BY
	t2.id,
	t1.account 
ORDER BY
	t1.account 
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
t1.`DATE`,
t1.`ID`
FROM `zt_taskestimate` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |

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
