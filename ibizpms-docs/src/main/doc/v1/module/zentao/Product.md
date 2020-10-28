# 实体-产品(ZT_PRODUCT)
## 实体说明
产品

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 是否是主键 | 是否是外键 | 是否允许为空 | 关系属性（实体-属性） |
| -- | -- | -- | -- | -- | -- |
| 1 | [测试负责人](#属性-测试负责人（QD）) | QD | TEXT | 否 | 否 | 是 | -- |
| 2 | [访问控制](#属性-访问控制（ACL）) | ACL | SSCODELIST | 否 | 否 | 是 | -- |
| 3 | [产品名称](#属性-产品名称（NAME）) | NAME | TEXT | 否 | 否 | 否 | -- |
| 4 | [编号](#属性-编号（ID）) | ID | ACID | 是 | 否 | 否 | -- |
| 5 | [已删除](#属性-已删除（DELETED）) | DELETED | TEXT | 否 | 否 | 是 | -- |
| 6 | [分组白名单](#属性-分组白名单（WHITELIST）) | WHITELIST | LONGTEXT | 否 | 否 | 是 | -- |
| 7 | [发布负责人](#属性-发布负责人（RD）) | RD | TEXT | 否 | 否 | 是 | -- |
| 8 | [排序](#属性-排序（ORDER）) | ORDER | INT | 否 | 否 | 是 | -- |
| 9 | [产品类型](#属性-产品类型（TYPE）) | TYPE | SSCODELIST | 否 | 否 | 是 | -- |
| 10 | [产品负责人](#属性-产品负责人（PO）) | PO | TEXT | 否 | 否 | 是 | -- |
| 11 | [产品描述	](#属性-产品描述	（DESC）) | DESC | LONGTEXT | 否 | 否 | 是 | -- |
| 12 | [状态](#属性-状态（STATUS）) | STATUS | SSCODELIST | 否 | 否 | 是 | -- |
| 13 | [由谁创建](#属性-由谁创建（CREATEDBY）) | CREATEDBY | TEXT | 否 | 否 | 是 | -- |
| 14 | [当前系统版本](#属性-当前系统版本（CREATEDVERSION）) | CREATEDVERSION | TEXT | 否 | 否 | 是 | -- |
| 15 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | TEXT | 否 | 否 | 是 | -- |
| 16 | [产品代号](#属性-产品代号（CODE）) | CODE | TEXT | 否 | 否 | 是 | -- |
| 17 | [创建日期](#属性-创建日期（CREATEDDATE）) | CREATEDDATE | DATETIME | 否 | 否 | 是 | -- |
| 18 | [产品线](#属性-产品线（LINENAME）) | LINENAME | PICKUPTEXT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 19 | [产品线](#属性-产品线（LINE）) | LINE | PICKUP | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 20 | [未解决Bug数](#属性-未解决Bug数（ACTIVEBUGCNT）) | ACTIVEBUGCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 21 | [计划总数](#属性-计划总数（PRODUCTPLANCNT）) | PRODUCTPLANCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 22 | [发布总数](#属性-发布总数（RELEASECNT）) | RELEASECNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 23 | [激活需求数](#属性-激活需求数（ACTIVESTORYCNT）) | ACTIVESTORYCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 24 | [未确认Bug数](#属性-未确认Bug数（UNCONFIRMBUGCNT）) | UNCONFIRMBUGCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 25 | [未关闭Bug数](#属性-未关闭Bug数（NOTCLOSEDBUGCNT）) | NOTCLOSEDBUGCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 26 | [备注](#属性-备注（COMMENT）) | COMMENT | HTMLTEXT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 27 | [相关Bug数](#属性-相关Bug数（RELATEDBUGCNT）) | RELATEDBUGCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 28 | [已变更需求](#属性-已变更需求（CHANGEDSTORYCNT）) | CHANGEDSTORYCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 29 | [草稿需求](#属性-草稿需求（DRAFTSTORYCNT）) | DRAFTSTORYCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 30 | [已关闭需求](#属性-已关闭需求（CLOSEDSTORYCNT）) | CLOSEDSTORYCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 31 | [关联项目数](#属性-关联项目数（RELATEDPROJECTS）) | RELATEDPROJECTS | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 32 | [文档数](#属性-文档数（DOCCNT）) | DOCCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 33 | [BUILD数](#属性-BUILD数（BUILDCNT）) | BUILDCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 34 | [用例数](#属性-用例数（CASECNT）) | CASECNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 35 | [属性](#属性-属性（SRFCOUNT）) | SRFCOUNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 36 | [移动端图片](#属性-移动端图片（MOBIMAGE）) | MOBIMAGE | TEXT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 37 | [排序](#属性-排序（ORDER1）) | ORDER1 | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 38 | [是否置顶](#属性-是否置顶（ISTOP）) | ISTOP | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 39 | [测试单数](#属性-测试单数（TESTTASKCNT）) | TESTTASKCNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |
| 40 | [套件数](#属性-套件数（TESTSUITECNT）) | TESTSUITECNT | INT | 否 | 是 | 是 | [模块（ZT_MODULE）](../zentao/Module) - [id（ID）](../zentao/Module/#属性-id（ID）) |

### 属性-测试负责人（QD）
#### 属性说明
测试负责人

#### 属性类型
物理属性[实体属性]

#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-访问控制（ACL）
#### 属性说明
访问控制

#### 属性类型
物理属性[实体属性]

#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | open |

#### 取值范围/公式
参照数据字典【[产品访问控制（Product__acl）](../../codelist/Product__acl)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品名称（NAME）
#### 属性说明
产品名称

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-编号（ID）
#### 属性说明
编号

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-已删除（DELETED）
#### 属性说明
已删除

#### 属性类型
物理属性[实体属性]

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-分组白名单（WHITELIST）
#### 属性说明
分组白名单

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-发布负责人（RD）
#### 属性说明
发布负责人

#### 属性类型
物理属性[实体属性]

#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-排序（ORDER）
#### 属性说明
排序

#### 属性类型
物理属性[实体属性]

#### 数据类型
INT

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品类型（TYPE）
#### 属性说明
产品类型

#### 属性类型
物理属性[实体属性]

#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | normal |

#### 取值范围/公式
参照数据字典【[产品类型（Product__type）](../../codelist/Product__type)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品负责人（PO）
#### 属性说明
产品负责人

#### 属性类型
物理属性[实体属性]

#### 数据类型
TEXT

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | #EMPTY |

#### 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品描述	（DESC）
#### 属性说明
产品描述	

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-状态（STATUS）
#### 属性说明
状态

#### 属性类型
物理属性[实体属性]

#### 数据类型
SSCODELIST

#### 是否允许为为空
是

#### 默认值
| 项目 | 说明 |
| -- | -- |
| 类型 |  |
| 值 | normal |

#### 取值范围/公式
参照数据字典【[产品状态（Product__status）](../../codelist/Product__status)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-由谁创建（CREATEDBY）
#### 属性说明
由谁创建

#### 属性类型
物理属性[实体属性]

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-当前系统版本（CREATEDVERSION）
#### 属性说明
来自系统配置信息

#### 属性类型
物理属性[实体属性]

#### 数据类型
TEXT

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-子状态（SUBSTATUS）
#### 属性说明
子状态

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品代号（CODE）
#### 属性说明
产品代号

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-创建日期（CREATEDDATE）
#### 属性说明
创建日期

#### 属性类型
物理属性[实体属性]

#### 数据类型
DATETIME

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
时间格式：yyyy-MM-dd HH:mm:ss

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品线（LINENAME）
#### 属性说明
产品线

#### 属性类型
链接属性[虚拟属性，映射关系实体的属性]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-产品线（LINE）
#### 属性说明
产品线

#### 属性类型
物理属性[实体属性]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-未解决Bug数（ACTIVEBUGCNT）
#### 属性说明
未解决Bug数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `STATUS` = 'active' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-计划总数（PRODUCTPLANCNT）
#### 属性说明
计划总数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= %1$s AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-发布总数（RELEASECNT）
#### 属性说明
发布总数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= %1$s AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-激活需求数（ACTIVESTORYCNT）
#### 属性说明
激活需求数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND `STATUS`='active' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-未确认Bug数（UNCONFIRMBUGCNT）
#### 属性说明
未确认Bug数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `CONFIRMED` = 0 AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-未关闭Bug数（NOTCLOSEDBUGCNT）
#### 属性说明
未关闭Bug数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `STATUS` <> 'closed' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-备注（COMMENT）
#### 属性说明
备注

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

#### 数据类型
HTMLTEXT

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-相关Bug数（RELATEDBUGCNT）
#### 属性说明
相关Bug数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-已变更需求（CHANGEDSTORYCNT）
#### 属性说明
已变更需求

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND `STATUS`='changed' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-草稿需求（DRAFTSTORYCNT）
#### 属性说明
草稿需求

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND `STATUS`='draft' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-已关闭需求（CLOSEDSTORYCNT）
#### 属性说明
已关闭需求

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND `STATUS`='closed' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-关联项目数（RELATEDPROJECTS）
#### 属性说明
关联项目数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-文档数（DOCCNT）
#### 属性说明
文档数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-BUILD数（BUILDCNT）
#### 属性说明
BUILD数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-用例数（CASECNT）
#### 属性说明
用例数

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0')

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-属性（SRFCOUNT）
#### 属性说明
属性

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-移动端图片（MOBIMAGE）
#### 属性说明
移动端图片

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-排序（ORDER1）
#### 属性说明
排序

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-是否置顶（ISTOP）
#### 属性说明
是否置顶

#### 属性类型
逻辑属性[虚拟属性，来自计算逻辑和计算公式]

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
'0'

#### 数据格式
无

#### 关系属性
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-测试单数（TESTTASKCNT）
#### 属性说明
测试单数

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

### 属性-套件数（TESTSUITECNT）
#### 属性说明
套件数

#### 属性类型
应用界面属性[虚拟属性，提供给页面显示的属性]

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
| 项目 | 说明 |
| -- | -- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系属性 1:N 当前属性 |

