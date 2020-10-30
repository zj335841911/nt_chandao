# 实体-产品(ZT_PRODUCT)
## 实体说明
产品

## 所属模块
[禅道模块](../zentao)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | [测试负责人](#属性-测试负责人（QD）) | QD | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [访问控制](#属性-访问控制（ACL）) | ACL | 单项选择(文本值) | 否 | 否 | 是 |
| 3 | [产品名称](#属性-产品名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 5 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [分组白名单](#属性-分组白名单（WHITELIST）) | WHITELIST | 长文本，没有长度限制 | 否 | 否 | 是 |
| 7 | [发布负责人](#属性-发布负责人（RD）) | RD | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [排序](#属性-排序（ORDER）) | ORDER | 整型 | 否 | 否 | 是 |
| 9 | [产品类型](#属性-产品类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 10 | [产品负责人](#属性-产品负责人（PO）) | PO | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [产品描述	](#属性-产品描述	（DESC）) | DESC | 长文本，没有长度限制 | 否 | 否 | 是 |
| 12 | [状态](#属性-状态（STATUS）) | STATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 13 | [由谁创建](#属性-由谁创建（CREATEDBY）) | CREATEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [当前系统版本](#属性-当前系统版本（CREATEDVERSION）) | CREATEDVERSION | 文本，可指定长度 | 否 | 否 | 是 |
| 15 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [产品代号](#属性-产品代号（CODE）) | CODE | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [创建日期](#属性-创建日期（CREATEDDATE）) | CREATEDDATE | 日期时间型 | 否 | 否 | 是 |
| 18 | [产品线](#属性-产品线（LINENAME）) | LINENAME | 外键值文本 | 否 | 是 | 是 |
| 19 | [产品线](#属性-产品线（LINE）) | LINE | 外键值 | 否 | 是 | 是 |
| 20 | [未解决Bug数](#属性-未解决Bug数（ACTIVEBUGCNT）) | ACTIVEBUGCNT | 整型 | 否 | 是 | 是 |
| 21 | [计划总数](#属性-计划总数（PRODUCTPLANCNT）) | PRODUCTPLANCNT | 整型 | 否 | 是 | 是 |
| 22 | [发布总数](#属性-发布总数（RELEASECNT）) | RELEASECNT | 整型 | 否 | 是 | 是 |
| 23 | [激活需求数](#属性-激活需求数（ACTIVESTORYCNT）) | ACTIVESTORYCNT | 整型 | 否 | 是 | 是 |
| 24 | [未确认Bug数](#属性-未确认Bug数（UNCONFIRMBUGCNT）) | UNCONFIRMBUGCNT | 整型 | 否 | 是 | 是 |
| 25 | [未关闭Bug数](#属性-未关闭Bug数（NOTCLOSEDBUGCNT）) | NOTCLOSEDBUGCNT | 整型 | 否 | 是 | 是 |
| 26 | [备注](#属性-备注（COMMENT）) | COMMENT | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 27 | [相关Bug数](#属性-相关Bug数（RELATEDBUGCNT）) | RELATEDBUGCNT | 整型 | 否 | 是 | 是 |
| 28 | [已变更需求](#属性-已变更需求（CHANGEDSTORYCNT）) | CHANGEDSTORYCNT | 整型 | 否 | 是 | 是 |
| 29 | [草稿需求](#属性-草稿需求（DRAFTSTORYCNT）) | DRAFTSTORYCNT | 整型 | 否 | 是 | 是 |
| 30 | [已关闭需求](#属性-已关闭需求（CLOSEDSTORYCNT）) | CLOSEDSTORYCNT | 整型 | 否 | 是 | 是 |
| 31 | [关联项目数](#属性-关联项目数（RELATEDPROJECTS）) | RELATEDPROJECTS | 整型 | 否 | 是 | 是 |
| 32 | [文档数](#属性-文档数（DOCCNT）) | DOCCNT | 整型 | 否 | 是 | 是 |
| 33 | [BUILD数](#属性-BUILD数（BUILDCNT）) | BUILDCNT | 整型 | 否 | 是 | 是 |
| 34 | [用例数](#属性-用例数（CASECNT）) | CASECNT | 整型 | 否 | 是 | 是 |
| 35 | [属性](#属性-属性（SRFCOUNT）) | SRFCOUNT | 整型 | 否 | 是 | 是 |
| 36 | [移动端图片](#属性-移动端图片（MOBIMAGE）) | MOBIMAGE | 文本，可指定长度 | 否 | 是 | 是 |
| 37 | [排序](#属性-排序（ORDER1）) | ORDER1 | 整型 | 否 | 是 | 是 |
| 38 | [是否置顶](#属性-是否置顶（ISTOP）) | ISTOP | 整型 | 否 | 是 | 是 |
| 39 | [测试单数](#属性-测试单数（TESTTASKCNT）) | TESTTASKCNT | 整型 | 否 | 是 | 是 |
| 40 | [套件数](#属性-套件数（TESTSUITECNT）) | TESTSUITECNT | 整型 | 否 | 是 | 是 |

### 属性-测试负责人（QD）
#### 属性说明
测试负责人

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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

### 属性-访问控制（ACL）
#### 属性说明
访问控制

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

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
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
否

#### 默认值
无

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
物理字段[来自当前实体物理表字段]

#### 数据类型
自增标识，整数类型，用户不可见

#### Java类型
Long

#### 是否允许为为空
否

#### 默认值
无

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
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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
物理字段[来自当前实体物理表字段]

#### 数据类型
长文本，没有长度限制

#### Java类型
String

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

### 属性-发布负责人（RD）
#### 属性说明
发布负责人

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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

### 属性-排序（ORDER）
#### 属性说明
排序

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
整型

#### Java类型
Integer

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
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

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
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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

### 属性-产品描述	（DESC）
#### 属性说明
产品描述	

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
长文本，没有长度限制

#### Java类型
String

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

### 属性-状态（STATUS）
#### 属性说明
状态

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
单项选择(文本值)

#### Java类型
String

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
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

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

### 属性-子状态（SUBSTATUS）
#### 属性说明
子状态

#### 属性类型
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
物理字段[来自当前实体物理表字段]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
物理字段[来自当前实体物理表字段]

#### 数据类型
日期时间型

#### Java类型
Timestamp

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
无

#### 数据格式
yyyy-MM-dd HH:mm:ss

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
链接字段[来自关系实体字段]

#### 数据类型
外键值文本

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
物理字段[来自当前实体物理表字段]

#### 数据类型
外键值

#### Java类型
Long

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
应用界面字段[无存储]

#### 数据类型
HTML文本，没有长度限制

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
应用界面字段[无存储]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
应用界面字段[无存储]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
逻辑字段[来自计算式]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
应用界面字段[无存储]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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
应用界面字段[无存储]

#### 数据类型
整型

#### Java类型
Integer

#### 是否允许为为空
是

#### 默认值
无

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


## 业务状态
| 序号 | 状态名称 | [状态](#属性-状态（STATUS）)<br>（STATUS） | [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 默认 |
| -- | -- | -- | -- | -- |
| 1 | [关闭_未置顶](#业务状态-关闭_未置顶（closed_0）) | closed | 0 |  | 否 |
| 2 | [关闭_已置顶](#业务状态-关闭_已置顶（closed_1）) | closed | 1 |  | 否 |
| 3 | [正常_未置顶](#业务状态-正常_未置顶（normal_0）) | normal | 0 |  | 否 |
| 4 | [正常_已置顶](#业务状态-正常_已置顶（normal_1）) | normal | 1 |  | 否 |
### 业务状态-关闭_未置顶（closed_0）
#### 说明
关闭_未置顶

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | closed |
| [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 0 |


#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 2 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 3 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 4 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [置顶](#操作权限-置顶（TOP）)<br>（TOP） |
| 2 | [产品关闭](#操作权限-产品关闭（SRFUR__PROD_CLOSED_BUT）)<br>（SRFUR__PROD_CLOSED_BUT） |
### 业务状态-关闭_已置顶（closed_1）
#### 说明
关闭_已置顶

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | closed |
| [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 1 |


#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [未置顶](#操作权限-未置顶（NOTOP）)<br>（NOTOP） |
| 2 | [产品关闭](#操作权限-产品关闭（SRFUR__PROD_CLOSED_BUT）)<br>（SRFUR__PROD_CLOSED_BUT） |
### 业务状态-正常_未置顶（normal_0）
#### 说明
正常_未置顶

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | normal |
| [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 0 |


#### 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| -- | -- |
| 1 | [关闭](#实体行为-关闭（Close）)<br>（Close） |
| 2 | [Update](#实体行为-Update（Update）)<br>（Update） |
| 3 | [Get](#实体行为-Get（Get）)<br>（Get） |
| 4 | [Save](#实体行为-Save（Save）)<br>（Save） |
| 5 | [Remove](#实体行为-Remove（Remove）)<br>（Remove） |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [置顶](#操作权限-置顶（TOP）)<br>（TOP） |
### 业务状态-正常_已置顶（normal_1）
#### 说明
正常_已置顶

#### 是否是默认值
否

#### 状态值
| 属性名 | 状态值 |
| -- | -- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | normal |
| [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 1 |


#### 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| -- | -- |
| 1 | [未置顶](#操作权限-未置顶（NOTOP）)<br>（NOTOP） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| -- | -- | -- | -- | -- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [取消置顶](#实体行为-取消置顶（CancelProductTop）) | CancelProductTop | 实体处理逻辑 | 后台 |
| 7 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 8 | [关闭](#实体行为-关闭（Close）) | Close | 用户自定义 | 后台及前台 |
| 9 | [产品移动端计数器方法](#实体行为-产品移动端计数器方法（MobProductCounter）) | MobProductCounter | 实体处理逻辑 | 后台 |
| 10 | [移动端测试计数器](#实体行为-移动端测试计数器（MobProductTestCounter）) | MobProductTestCounter | 实体处理逻辑 | 后台 |
| 11 | [置顶](#实体行为-置顶（ProductTop）) | ProductTop | 实体处理逻辑 | 后台 |
| 12 | [退出](#实体行为-退出（ReturnEdit）) | ReturnEdit | 用户自定义 | 前台 |
| 13 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 14 | [向导使用](#实体行为-向导使用（WizardCreate）) | WizardCreate | 用户自定义 | 前台 |

### 实体行为-Create（Create）
#### 说明
Create

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Update（Update）
#### 说明
Update

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| -- | -- | -- | -- | -- |
| 1 | [行为[Update]主状态拒绝逻辑<br>（Update__MSDeny）](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | 检查 | 是 |  |
### 实体行为-Remove（Remove）
#### 说明
Remove

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| -- | -- | -- | -- | -- |
| 1 | [行为[Remove]主状态拒绝逻辑<br>（Remove__MSDeny）](#逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）) | 检查 | 是 |  |
### 实体行为-Get（Get）
#### 说明
Get

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-取消置顶（CancelProductTop）
#### 说明
取消置顶

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无
### 实体行为-CheckKey（CheckKey）
#### 说明
CheckKey

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-关闭（Close）
#### 说明
关闭

#### 行为类型
用户自定义

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-产品移动端计数器方法（MobProductCounter）
#### 说明
产品移动端计数器方法

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无
### 实体行为-移动端测试计数器（MobProductTestCounter）
#### 说明
移动端测试计数器

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无
### 实体行为-置顶（ProductTop）
#### 说明
置顶

#### 行为类型
实体处理逻辑

#### 行为持有者
后台

#### 逻辑附加
无
### 实体行为-退出（ReturnEdit）
#### 说明
退出

#### 行为类型
用户自定义

#### 行为持有者
前台

#### 逻辑附加
无
### 实体行为-Save（Save）
#### 说明
Save

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-向导使用（WizardCreate）
#### 说明
向导使用

#### 行为类型
用户自定义

#### 行为持有者
前台

#### 逻辑附加
无

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| -- | -- | -- | -- |
| 1 | [取消置顶](#逻辑处理-取消置顶（CancelProductTop）) | CancelProductTop | 后台及前台 |
| 2 | [移动端产品计数器](#逻辑处理-移动端产品计数器（MobProductCounter）) | MobProductCounter | 后台 |
| 3 | [移动端测试计数器](#逻辑处理-移动端测试计数器（MobProductTestCounter）) | MobProductTestCounter | 后台 |
| 4 | [置顶](#逻辑处理-置顶（ProductTop）) | ProductTop | 后台及前台 |
| 5 | [行为[Update]主状态拒绝逻辑](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | Update__MSDeny | 后台 |
| 6 | [行为[Remove]主状态拒绝逻辑](#逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）) | Remove__MSDeny | 后台 |

### 逻辑处理-取消置顶（CancelProductTop）
#### 说明
取消置顶

#### 逻辑持有者
后台及前台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 删除置顶 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |
### 逻辑处理-移动端产品计数器（MobProductCounter）
#### 说明
移动端产品计数器

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 发布数 | Rawsqlcall4 | 直接SQL调用 |
| 2 | 获取需求数 | Rawsqlcall2 | 直接SQL调用 |
| 3 | 获取相关BUG数 | Rawsqlcall1 | 直接SQL调用 |
| 4 | 开始 | Begin | 开始 |
| 5 | 计划数 | Rawsqlcall3 | 直接SQL调用 |
### 逻辑处理-移动端测试计数器（MobProductTestCounter）
#### 说明
移动端测试计数器

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 开始 | Begin | 开始 |
| 2 | 套件数 | Rawsqlcall4 | 直接SQL调用 |
| 3 | 获取测试用例数 | Rawsqlcall2 | 直接SQL调用 |
| 4 | 获取相关BUG数 | Rawsqlcall1 | 直接SQL调用 |
| 5 | 测试单数 | Rawsqlcall3 | 直接SQL调用 |
### 逻辑处理-置顶（ProductTop）
#### 说明
置顶

#### 逻辑持有者
后台及前台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | save置顶 | Deaction1 | 实体行为 |
| 2 | 设置置顶数据 | Prepareparam1 | 准备参数 |
| 3 | 开始 | Begin | 开始 |
| 4 | 获取置顶最大排序值 | Rawsqlcall1 | 直接SQL调用 |
### 逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）
#### 说明
行为[Update]主状态拒绝逻辑

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 开始 | Begin | 开始 |
| 2 | 状态[关闭_已置顶]拒绝[Update]操作 | DenyByclosed_1 | 抛出异常 |
| 3 | 准备临时参数 | PrepareTemp | 准备参数 |
| 4 | 获取数据 | Get | 实体行为 |
| 5 | 状态[正常_已置顶]拒绝[Update]操作 | DenyBynormal_1 | 抛出异常 |
### 逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）
#### 说明
行为[Remove]主状态拒绝逻辑

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| -- | -- | -- | -- |
| 1 | 状态[正常_已置顶]拒绝[Remove]操作 | DenyBynormal_1 | 抛出异常 |
| 2 | 获取数据 | Get | 实体行为 |
| 3 | 准备临时参数 | PrepareTemp | 准备参数 |
| 4 | 状态[关闭_已置顶]拒绝[Remove]操作 | DenyByclosed_1 | 抛出异常 |
| 5 | 开始 | Begin | 开始 |

## 查询

