# 实体-产品计划(ZT_PRODUCTPLAN)
## 实体说明
产品计划

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [名称](#属性-名称（TITLE）) | TITLE | TEXT | 否 | 否 | 否 | -- |
| 2 | [编号](#属性-编号（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 3 | [开始日期](#属性-开始日期（BEGIN）) | BEGIN | DATE | 否 | 否 | 是 | -- |
| 4 | [描述](#属性-描述（DESC）) | DESC | LONGTEXT | 否 | 否 | 是 | -- |
| 5 | [结束日期](#属性-结束日期（END）) | END | DATE | 否 | 否 | 是 | -- |
| 6 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 否 | 否 | -- |
| 7 | [排序](#属性-排序（ORDER）) | ORDER | LONGTEXT | 否 | 否 | 是 | -- |
| 8 | [父计划名称](#属性-父计划名称（PARENTNAME）) | PARENTNAME | PICKUPTEXT | 否 | 是 | 是 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) - [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 9 | [平台/分支](#属性-平台/分支（BRANCH）) | BRANCH | PICKUP | 否 | 是 | 是 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) - [编号（ID）](../zentao/Branch/#属性-编号（ID）) |
| 10 | [父计划](#属性-父计划（PARENT）) | PARENT | PICKUP | 否 | 是 | 是 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) - [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 11 | [产品](#属性-产品（PRODUCT）) | PRODUCT | PICKUP | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 12 | [状态](#属性-状态（STATUSS）) | STATUSS | TEXT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 13 | [待定](#属性-待定（FUTURE）) | FUTURE | SSCODELIST | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 14 | [周期](#属性-周期（DELTA）) | DELTA | SSCODELIST | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 15 | [上一次计划名称](#属性-上一次计划名称（OLDTITLE）) | OLDTITLE | TEXT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 16 | [需求数](#属性-需求数（STORYCNT）) | STORYCNT | INT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 17 | [bug数](#属性-bug数（BUGCNT）) | BUGCNT | INT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 18 | [是否过期](#属性-是否过期（ISEXPIRED）) | ISEXPIRED | YESNO | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 19 | [工时数](#属性-工时数（ESTIMATECNT）) | ESTIMATECNT | INT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 20 | [开始日期](#属性-开始日期（BEGINSTR）) | BEGINSTR | TEXT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 21 | [结束日期](#属性-结束日期（ENDSTR）) | ENDSTR | TEXT | 否 | 是 | 是 | [产品（ZT_PRODUCT）](../zentao/Product) - [编号（ID）](../zentao/Product/#属性-编号（ID）) |

### 属性-名称（TITLE）
#### 属性说明
名称
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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-编号（ID）
#### 属性说明
编号
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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-开始日期（BEGIN）
#### 属性说明
开始日期
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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-描述（DESC）
#### 属性说明
描述
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
LONGTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-结束日期（END）
#### 属性说明
结束日期
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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-已删除（DELETED）
#### 属性说明
已删除
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
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-排序（ORDER）
#### 属性说明
排序
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
LONGTEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父计划名称（PARENTNAME）
#### 属性说明
父计划名称
#### 属性类型
链接字段[来自关系实体字段]


#### 数据类型
PICKUPTEXT

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-平台/分支（BRANCH）
#### 属性说明
平台/分支
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUP

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [编号（ID）](../zentao/Branch/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-父计划（PARENT）
#### 属性说明
父计划
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUP

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品（PRODUCT）
#### 属性说明
产品
#### 属性类型
物理字段[来自当前实体物理表字段]


#### 数据类型
PICKUP

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-状态（STATUSS）
#### 属性说明
状态
#### 属性类型
逻辑字段[来自计算式]


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
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-待定（FUTURE）
#### 属性说明
待定
#### 属性类型
逻辑字段[来自计算式]


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
参照数据字典【[日期_待定（Date_disable）](../../codelist/Date_disable)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-周期（DELTA）
#### 属性说明
周期
#### 属性类型
应用界面字段[无存储]


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
参照数据字典【[时间周期（Zt__delta）](../../codelist/Zt__delta)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-上一次计划名称（OLDTITLE）
#### 属性说明
上一次计划名称
#### 属性类型
应用界面字段[无存储]


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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-需求数（STORYCNT）
#### 属性说明
需求数
#### 属性类型
逻辑字段[来自计算式]


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
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ))

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-bug数（BUGCNT）
#### 属性说明
bug数
#### 属性类型
逻辑字段[来自计算式]


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
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0'))

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否过期（ISEXPIRED）
#### 属性说明
是否过期
#### 属性类型
逻辑字段[来自计算式]


#### 数据类型
YESNO

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 |  |

#### 取值范围/公式
(case when t1.`end` > now() then '0' else '1' end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-工时数（ESTIMATECNT）
#### 属性说明
工时数
#### 属性类型
逻辑字段[来自计算式]


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
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-开始日期（BEGINSTR）
#### 属性说明
开始日期
#### 属性类型
逻辑字段[来自计算式]


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
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-结束日期（ENDSTR）
#### 属性说明
结束日期
#### 属性类型
逻辑字段[来自计算式]


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
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end)

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

