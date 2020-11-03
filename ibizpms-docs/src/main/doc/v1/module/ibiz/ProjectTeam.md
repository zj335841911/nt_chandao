
# 实体-项目团队(IBZ_PROJECTTEAM)
## 实体说明
项目团队

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [项目（ZT_PROJECT）](../zentao/Project) | 嵌套操作 |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [加盟日](#属性-加盟日（JOIN）) | JOIN | 日期型 | 否 | 否 | 是 |
| 2 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [可用工时/天](#属性-可用工时/天（HOURS）) | HOURS | 浮点 | 否 | 否 | 是 |
| 4 | [预计剩余](#属性-预计剩余（LEFT）) | LEFT | 浮点 | 否 | 否 | 是 |
| 5 | [可用工日](#属性-可用工日（DAYS）) | DAYS | 整型 | 否 | 否 | 是 |
| 6 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 7 | [总计消耗](#属性-总计消耗（CONSUMED）) | CONSUMED | 浮点 | 否 | 否 | 是 |
| 8 | [排序](#属性-排序（ORDER）) | ORDER | 整型 | 否 | 否 | 是 |
| 9 | [最初预计](#属性-最初预计（ESTIMATE）) | ESTIMATE | 浮点 | 否 | 否 | 是 |
| 10 | [受限用户](#属性-受限用户（LIMITED）) | LIMITED | 单项选择(文本值) | 否 | 否 | 是 |
| 11 | [角色](#属性-角色（ROLE）) | ROLE | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [团队类型](#属性-团队类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 13 | [总计可用](#属性-总计可用（TOTAL）) | TOTAL | 整型 | 否 | 否 | 是 |
| 14 | [项目编号](#属性-项目编号（ROOT）) | ROOT | 外键值 | 否 | 是 | 是 |
| 15 | [用户](#属性-用户（USERNAME）) | USERNAME | 文本，可指定长度 | 否 | 是 | 是 |

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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 1 | `=` |
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目编号（ROOT）
#### 属性说明
项目编号

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

- Java类型
Long

- 是否允许为为空
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用户（USERNAME）
#### 属性说明
用户

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为为空
是

- 默认值
无

- 取值范围/公式
```SQL
(select t.realname from zt_user t where t.account = t1.account)
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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
| 7 | [获取成员角色](#实体行为-获取成员角色（GetUserRole）) | GetUserRole | 用户自定义 | 后台及前台 |
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
### 实体行为-获取成员角色（GetUserRole）
#### 说明
根据成员获取成员的角色信息

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [获取成员角色<br>（GetUserRole）](#逻辑处理-获取成员角色（GetUserRole）) | 执行之前 | 是 |  |
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
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [获取成员角色](#逻辑处理-获取成员角色（GetUserRole）) | GetUserRole | 后台 |

### 逻辑处理-获取成员角色（GetUserRole）
#### 说明
获取成员角色

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取角色成员 | Rawsqlcall1 | 直接SQL调用 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) | `=` |
| 2 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) | `%like%` |
| 1 | [受限用户（LIMITED）](#属性-受限用户（LIMITED）) | `=` |
| 1 | [团队类型（TYPE）](#属性-团队类型（TYPE）) | `=` |
| 1 | [项目编号（ROOT）](#属性-项目编号（ROOT）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [行编辑查询](#数据查询-行编辑查询（RowEditDefault）) | RowEditDefault | 否 |
| 3 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`TYPE`,
(select t.realname from zt_user t where t.account = t1.account) AS `USERNAME`
FROM `zt_team` t1 

```
### 数据查询-行编辑查询（RowEditDefault）
#### 说明
行编辑查询

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
	t1.`ACCOUNT`,
	t1.`CONSUMED`,
	t1.`DAYS`,
	t1.`ESTIMATE`,
	t1.`HOURS`,
	t1.id as `ID`,
	t1.`JOIN`,
	t1.`LEFT`,
	t1.`LIMITED`,
	t1.`ORDER`,
	t1.`ROLE`,
	t1.`ROOT`,
	( t1.`DAYS` * t1.`HOURS` ) AS `TOTAL`,
	t1.`TYPE`,
	t2.`realname` AS `USERNAME` 
FROM
	`zt_team` t1
	LEFT JOIN `zt_user` t2 ON t2.`account` = t1.`account` 
	union 
	SELECT
	t1.`ACCOUNT`,
	0 AS `CONSUMED`,
	45 AS `DAYS`,
	0 AS `ESTIMATE`,
	7 AS `HOURS`,
	null as `ID`,
	'2020-07-13' AS `JOIN`,
	0 AS `LEFT`,
	'no' AS `LIMITED`,
	0 AS `ORDER`,
	t3.`name` as `ROLE`,
	#{srf.datacontext.root} as `ROOT`,
	90 AS `TOTAL`,
	'project' AS `TYPE`,
	t2.`realname` AS `USERNAME` 
FROM
	`zt_team` t1
	LEFT JOIN `zt_user` t2 ON t2.`account` = t1.`account` 
        left join zt_group t3 on t2.role = t3.role
	where t1.type = 'project' and t1.root = #{srf.datacontext.teams} and t1.account not in (select  t.account from zt_team t where t.root = #{srf.datacontext.root} and t.type = 'project')
	union 
	SELECT
	t2.`ACCOUNT`,
	0 AS `CONSUMED`,
	45 AS `DAYS`,
	0 AS `ESTIMATE`,
	7 AS `HOURS`,
	null as `ID`,
	'2020-07-13' AS `JOIN`,
	0 AS `LEFT`,
	'no' AS `LIMITED`,
	0 AS `ORDER`,
	t3.`name` as `ROLE`,
	#{srf.datacontext.root} as `ROOT`,
	90 AS `TOTAL`,
	'project' AS `TYPE`,
	t2.`realname` AS `USERNAME` 
FROM
	`zt_dept` t1
	LEFT JOIN `zt_user` t2 ON t2.`dept` = t1.`id` 
	left join zt_group t3 on t2.role = t3.role
	where t1.id = #{srf.datacontext.dept} and t2.account is not null and t2.account not in (select  t.account from zt_team t where t.root = #{srf.datacontext.root} and t.type = 'project')
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
t1.`TYPE`,
(select t.realname from zt_user t where t.account = t1.account) AS `USERNAME`
FROM `zt_team` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [行编辑查询](#数据集合-行编辑查询（RowEditDefault）) | RowEditDefault | 否 |

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
### 数据集合-行编辑查询（RowEditDefault）
#### 说明
行编辑查询

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [行编辑查询（RowEditDefault）](#数据查询-行编辑查询（RowEditDefault）) |

## 数据导入
无

## 数据导出
| 序号 | 数据导出 | 数据导出名 | 最大导出数量 |
| ---- | ---- | ---- | ---- |
| 1 | [数据导出](#数据导出-数据导出（DataExport）) | DataExport | 1,000 |

### 数据导出-数据导出（DataExport）
#### 说明
数据导出

- 最大导出数
1,000

- 行为持有者
后台及前台

| 序号 | 导出标题 | 属性 | 默认值 |
| ---- | ---- | ---- | ---- |
| 1 | 用户 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) |  |
| 2 | 角色 | [角色（ROLE）](#属性-角色（ROLE）) |  |
| 3 | 加盟日 | [加盟日（JOIN）](#属性-加盟日（JOIN）) |  |
| 4 | 可用工日 | [可用工日（DAYS）](#属性-可用工日（DAYS）) |  |
| 5 | 可用工时/天 | [可用工时/天（HOURS）](#属性-可用工时/天（HOURS）) |  |
| 6 | 总计可用 | [总计可用（TOTAL）](#属性-总计可用（TOTAL）) |  |
| 7 | 受限用户 | [受限用户（LIMITED）](#属性-受限用户（LIMITED）) |  |

