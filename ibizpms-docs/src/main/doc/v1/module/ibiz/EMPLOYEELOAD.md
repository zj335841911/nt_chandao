
# 实体-员工负载表(IBZ_EMPLOYEELOAD)
## 实体说明
员工负载表

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [主键](#属性-主键（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 2 | [任务名](#属性-任务名（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [任务数](#属性-任务数（TASKCNT）) | TASKCNT | 整型 | 否 | 否 | 是 |
| 4 | [项目编号](#属性-项目编号（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 5 | [项目](#属性-项目（PROJECTNAME）) | PROJECTNAME | 外键值文本 | 否 | 是 | 是 |
| 6 | [总任务数](#属性-总任务数（TOTALTASKCNT）) | TOTALTASKCNT | 整型 | 否 | 是 | 是 |
| 7 | [总工时](#属性-总工时（TOTALLEFT）) | TOTALLEFT | 整型 | 否 | 是 | 是 |
| 8 | [剩余工时](#属性-剩余工时（LEFT）) | LEFT | 整型 | 否 | 是 | 是 |
| 9 | [工作负载](#属性-工作负载（WORKLOAD）) | WORKLOAD | 文本，可指定长度 | 否 | 是 | 是 |
| 10 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | 单项选择(文本值) | 否 | 是 | 是 |
| 11 | [部门](#属性-部门（DEPT）) | DEPT | 单项选择(文本值) | 否 | 是 | 是 |
| 12 | [属性](#属性-属性（BEGIN）) | BEGIN | 日期型 | 否 | 是 | 是 |
| 13 | [结束](#属性-结束（END）) | END | 日期型 | 否 | 是 | 是 |
| 14 | [工作日天数](#属性-工作日天数（WORKDAY）) | WORKDAY | 整型 | 否 | 是 | 是 |
| 15 | [是否指派](#属性-是否指派（ASSIGN）) | ASSIGN | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-主键（ID）
#### 属性说明
主键

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务名（NAME）
#### 属性说明
任务名

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务数（TASKCNT）
#### 属性说明
任务数

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
０
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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目编号（PROJECT）
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目（PROJECTNAME）
#### 属性说明
项目

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值文本

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
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总任务数（TOTALTASKCNT）
#### 属性说明
总任务数

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
０
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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总工时（TOTALLEFT）
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
０
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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-剩余工时（LEFT）
#### 属性说明
剩余工时

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
０
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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-工作负载（WORKLOAD）
#### 属性说明
工作负载

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
０
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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-指派给（ASSIGNEDTO）
#### 属性说明
指派给

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
无

- 取值范围/公式
参照数据字典【[用户真实名称（动态-表格）（UserRealName_Gird）](../../codelist/UserRealName_Gird)】

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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-部门（DEPT）
#### 属性说明
部门

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[真实部门（RealDept）](../../codelist/RealDept)】

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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-属性（BEGIN）
#### 属性说明
属性

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
| 1 | `<=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-结束（END）
#### 属性说明
结束

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
| 1 | `>=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-工作日天数（WORKDAY）
#### 属性说明
工作日天数

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否指派（ASSIGN）
#### 属性说明
是否指派

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
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
| 8 | [UpdateTime](#实体行为-UpdateTime（UpdateTime）) | UpdateTime | 用户自定义 | 前台 |

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
### 实体行为-UpdateTime（UpdateTime）
#### 说明
UpdateTime

- 行为类型
用户自定义

- 行为持有者
前台

#### 逻辑附加
无

## 逻辑处理
无

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [任务名（NAME）](#属性-任务名（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [任务名（NAME）](#属性-任务名（NAME）) | `%like%` |
| 2 | [项目编号（PROJECT）](#属性-项目编号（PROJECT）) | `=` |
| 3 | [项目（PROJECTNAME）](#属性-项目（PROJECTNAME）) | `=` |
| 4 | [项目（PROJECTNAME）](#属性-项目（PROJECTNAME）) | `%like%` |
| 5 | [部门（DEPT）](#属性-部门（DEPT）) | `=` |
| 6 | [属性（BEGIN）](#属性-属性（BEGIN）) | `<=` |
| 7 | [结束（END）](#属性-结束（END）) | `>=` |
| 8 | [工作日天数（WORKDAY）](#属性-工作日天数（WORKDAY）) | `=` |
| 9 | [是否指派（ASSIGN）](#属性-是否指派（ASSIGN）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [获取员工负载表](#数据查询-获取员工负载表（GETWOERKLOAD）) | GETWOERKLOAD | 否 |
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
t1.`ASSIGN`,
t1.`ASSIGNEDTO`,
t1.`ID`,
０ AS `LEFT`,
t1.`NAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
０ AS `TASKCNT`,
０ AS `TOTALLEFT`,
０ AS `TOTALTASKCNT`,
０ AS `WORKLOAD`
FROM `ZT_TASK` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 

```
### 数据查询-获取员工负载表（GETWOERKLOAD）
#### 说明
获取员工负载表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from(select t1.assignedTo,t1.project,t1.projectname,t1.taskcnt,t1.`left`,t1.totaltaskcnt,t1.totalleft,t1.workload,'assign' as isassigned from (
select t1.*,t4.taskcnt as totaltaskcnt,t4.`left` as totalleft,CONCAT(ROUND( t4.`left`/ ((case when  #{srf.datacontext.workday} 
is null then 6 else 
#{srf.datacontext.workday}  
end) * (case when 
#{srf.datacontext.everydaytime}  
is null then 7 else 
#{srf.datacontext.everydaytime}  
end)) * 100, 2),'%')  as WORKLOAD from ( select  t1.assignedTo,t1.project,t1.projectname,COUNT(1) as taskcnt,sum(t1.`left`) as `left` from( select t1.id,t1.`name`,t1.`left`,t1.project ,t2.`name` as projectname,t1.assignedTo from zt_task t1 left join zt_project t2 on t1.project = t2.id 
where t1.deleted = '0' and t1.`status` in ('wait','doing') and t2.deleted = '0' and t2.`status` in ('wait','doing') and t1.assignedTo <> '' and t1.parent >= 0 and not EXISTS(select  1  from zt_team t where t.type = 'task' and t.root = t1.id) 
union 
select t1.id,t1.`name`,t3.`left`,t1.project ,t2.`name` as projectname,t3.account as assignedTo from zt_task t1 left join zt_project t2 on t1.project = t2.id 
INNER join zt_team t3 on t1.id = t3.root and t3.type = 'task'
where t1.deleted = '0' and t1.`status` in ('wait','doing') and t2.deleted = '0' and t2.`status` in ('wait','doing')  and t1.`left` > 0 ) t1 GROUP BY t1.assignedTo,t1.project,t1.projectname) t1 left join zt_user tt on tt.account = t1.assignedTo 
left join  ( select  t1.assignedTo,COUNT(1) as taskcnt,sum(t1.`left`) as `left` from( select t1.id,t1.`name`,t1.`left`,t1.project ,t2.`name` as projectname,t1.assignedTo from zt_task t1 left join zt_project t2 on t1.project = t2.id 
where t1.deleted = '0' and t1.`status` in ('wait','doing') and t2.deleted = '0' and t2.`status` in ('wait','doing') and t1.assignedTo <> '' and t1.parent >= 0 and not EXISTS(select  1  from zt_team t where t.type = 'task' and t.root = t1.id) 
union 
select t1.id,t1.`name`,t3.`left`,t1.project ,t2.`name` as projectname,t3.account as assignedTo from zt_task t1 left join zt_project t2 on t1.project = t2.id 
INNER join zt_team t3 on t1.id = t3.root and t3.type = 'task'
where t1.deleted = '0' and t1.`status` in ('wait','doing') and t2.deleted = '0' and t2.`status` in ('wait','doing')  and t1.`left` > 0 ) t1 GROUP BY t1.assignedTo) t4 on t4.assignedTo = t1.assignedTo
where tt.dept =  #{srf.datacontext.dept} 
or  #{srf.datacontext.dept} 
is null) t1 
union
select t1.assignedTo,t1.project,t1.projectname,t1.taskcnt,t1.`left`,t1.totaltaskcnt,t1.totalleft,t1.workload, t1.isassigned as isassigned from (select  t1.account as assignedTo,t2.id as project,t2.`name` as projectname, 0 as taskcnt,0 as `left`,0 as totaltaskcnt,0 as totalleft,'0%' as workload,'noassign' as isassigned  from zt_team t1 
LEFT JOIN zt_project t2 on t2.id = t1.root
where t2.`status` not in ('cancel','closed','done','suspended')  and t1.type = 'project' 
and t1.account not in (SELECT assignedTo from zt_task where project = t1.root and `status` not in ('cancel','closed','done','pause') and assignedTo <> '' GROUP BY assignedTo) ORDER BY t1.ACCOUNT,t2.`name`)t1) t1 
where (t1.isassigned = #{srf.datacontext.assign}) or (#{srf.datacontext.assign} is null and t1.isassigned = 'assign')
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
t1.`ASSIGN`,
t1.`ASSIGNEDTO`,
t1.`ID`,
０ AS `LEFT`,
t1.`NAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
０ AS `TASKCNT`,
０ AS `TOTALLEFT`,
０ AS `TOTALTASKCNT`,
０ AS `WORKLOAD`
FROM `ZT_TASK` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [获取员工负载表](#数据集合-获取员工负载表（GETWOERKLOAD）) | GETWOERKLOAD | 否 |

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
### 数据集合-获取员工负载表（GETWOERKLOAD）
#### 说明
获取员工负载表

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [获取员工负载表（GETWOERKLOAD）](#数据查询-获取员工负载表（GETWOERKLOAD）) |

## 数据导入
无

## 数据导出
无

