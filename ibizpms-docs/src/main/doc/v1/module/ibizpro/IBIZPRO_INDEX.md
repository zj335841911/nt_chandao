
# 实体-索引检索(IBIZPRO_INDEX)
## 实体说明
索引检索

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
| 1 | [类型](#属性-类型（INDEX_TYPE）) | INDEX_TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 2 | [主键](#属性-主键（INDEXID）) | INDEXID | 大整型 | 是 | 否 | 是 |
| 3 | [名称](#属性-名称（INDEXNAME）) | INDEXNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [逻辑标识](#属性-逻辑标识（DELETED）) | DELETED | 是否逻辑 | 否 | 否 | 是 |

### 属性-类型（INDEX_TYPE）
#### 属性说明
类型

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[全文检索类型（IndexType）](../../codelist/IndexType)】

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

### 属性-主键（INDEXID）
#### 属性说明
主键

- 是否是主键
是

- 属性类型
逻辑字段[来自计算式]

- 数据类型
大整型

- Java类型
Long

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
null
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-名称（INDEXNAME）
#### 属性说明
名称

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
null
```

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

### 属性-逻辑标识（DELETED）
#### 属性说明
逻辑标识

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
是否逻辑

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
'0'
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
| 1 | [名称（INDEXNAME）](#属性-名称（INDEXNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [类型（INDEX_TYPE）](#属性-类型（INDEX_TYPE）) | `=` |
| 2 | [名称（INDEXNAME）](#属性-名称（INDEXNAME）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`DELETED`,
t1.`INDEXID`,
t1.`INDEXNAME`,
t1.`INDEX_TYPE`
FROM (SELECT
'bug' AS `INDEX_TYPE`,v1.`ID` AS `INDEXID`
,v1.`TITLE` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`TITLE`
FROM `zt_bug` t1 
) v1
UNION ALL
SELECT
'case' AS `INDEX_TYPE`,v2.`ID` AS `INDEXID`
,v2.`TITLE` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`TITLE`
FROM `zt_case` t1 
) v2
UNION ALL
SELECT
'product' AS `INDEX_TYPE`,v3.`ID` AS `INDEXID`
,v3.`NAME` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `zt_product` t1 
) v3
UNION ALL
SELECT
'project' AS `INDEX_TYPE`,v4.`ID` AS `INDEXID`
,v4.`NAME` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `zt_project` t1 
) v4
UNION ALL
SELECT
'story' AS `INDEX_TYPE`,v5.`ID` AS `INDEXID`
,v5.`TITLE` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`TITLE`
FROM `zt_story` t1 
) v5
UNION ALL
SELECT
'task' AS `INDEX_TYPE`,v6.`ID` AS `INDEXID`
,v6.`NAME` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `zt_task` t1 
) v6
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
t1.`DELETED`,
t1.`INDEXID`,
t1.`INDEXNAME`,
t1.`INDEX_TYPE`
FROM (SELECT
'bug' AS `INDEX_TYPE`,v1.`ID` AS `INDEXID`
,v1.`TITLE` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`TITLE`
FROM `zt_bug` t1 
) v1
UNION ALL
SELECT
'case' AS `INDEX_TYPE`,v2.`ID` AS `INDEXID`
,v2.`TITLE` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`TITLE`
FROM `zt_case` t1 
) v2
UNION ALL
SELECT
'product' AS `INDEX_TYPE`,v3.`ID` AS `INDEXID`
,v3.`NAME` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `zt_product` t1 
) v3
UNION ALL
SELECT
'project' AS `INDEX_TYPE`,v4.`ID` AS `INDEXID`
,v4.`NAME` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `zt_project` t1 
) v4
UNION ALL
SELECT
'story' AS `INDEX_TYPE`,v5.`ID` AS `INDEXID`
,v5.`TITLE` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`TITLE`
FROM `zt_story` t1 
) v5
UNION ALL
SELECT
'task' AS `INDEX_TYPE`,v6.`ID` AS `INDEXID`
,v6.`NAME` AS `INDEXNAME`
,NULL AS `DELETED`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `zt_task` t1 
) v6
) t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [数据集2](#数据集合-数据集2（IndexDER）) | IndexDER | 否 |

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
### 数据集合-数据集2（IndexDER）
#### 说明
数据集2

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
无

## 数据导入
无

## 数据导出
无

