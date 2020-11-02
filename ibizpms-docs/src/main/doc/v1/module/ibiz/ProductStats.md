# 实体-产品统计(IBZ_PRODUCTSTATS)
## 实体说明
产品统计

## 所属模块
[iBiz增强模块](../ibiz)

## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [产品编号](#属性-产品编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 2 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [需求总数](#属性-需求总数（STORYCNT）) | STORYCNT | 整型 | 否 | 否 | 是 |
| 4 | [计划总数](#属性-计划总数（PRODUCTPLANCNT）) | PRODUCTPLANCNT | 整型 | 否 | 否 | 是 |
| 5 | [发布总数](#属性-发布总数（RELEASECNT）) | RELEASECNT | 整型 | 否 | 否 | 是 |
| 6 | [未开始需求数](#属性-未开始需求数（WAITSTORYCNT）) | WAITSTORYCNT | 整型 | 否 | 否 | 是 |
| 7 | [已计划需求数](#属性-已计划需求数（PLANNEDSTORYCNT）) | PLANNEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 8 | [开发中需求数](#属性-开发中需求数（DEVELOPINGSTORYCNT）) | DEVELOPINGSTORYCNT | 整型 | 否 | 否 | 是 |
| 9 | [测试中需求数](#属性-测试中需求数（TESTINGSTORYCNT）) | TESTINGSTORYCNT | 整型 | 否 | 否 | 是 |
| 10 | [已发布需求数](#属性-已发布需求数（RELEASEDSTORYCNT）) | RELEASEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 11 | [未过期计划数](#属性-未过期计划数（UNENDPRODUCTPLANCNT）) | UNENDPRODUCTPLANCNT | 整型 | 否 | 否 | 是 |
| 12 | [关联项目数](#属性-关联项目数（RESPROJECTCNT）) | RESPROJECTCNT | 整型 | 否 | 否 | 是 |
| 13 | [未完成关联项目数](#属性-未完成关联项目数（UNDONERESPROJECTCNT）) | UNDONERESPROJECTCNT | 整型 | 否 | 否 | 是 |
| 14 | [维护中发布数](#属性-维护中发布数（NORMALRELEASECNT）) | NORMALRELEASECNT | 整型 | 否 | 否 | 是 |
| 15 | [激活需求数](#属性-激活需求数（ACTIVESTORYCNT）) | ACTIVESTORYCNT | 整型 | 否 | 否 | 是 |
| 16 | [未解决Bug数](#属性-未解决Bug数（ACTIVEBUGCNT）) | ACTIVEBUGCNT | 整型 | 否 | 否 | 是 |
| 17 | [产品名称](#属性-产品名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 18 | [指派给我的Bug数](#属性-指派给我的Bug数（ASSIGNTOMEBUGCNT）) | ASSIGNTOMEBUGCNT | 整型 | 否 | 否 | 是 |
| 19 | [未关闭Bug数](#属性-未关闭Bug数（NOTCLOSEDBUGCNT）) | NOTCLOSEDBUGCNT | 整型 | 否 | 否 | 是 |
| 20 | [所有Bug数](#属性-所有Bug数（BUGCNT）) | BUGCNT | 整型 | 否 | 否 | 是 |
| 21 | [未确认Bug数](#属性-未确认Bug数（UNCONFIRMBUGCNT）) | UNCONFIRMBUGCNT | 整型 | 否 | 否 | 是 |
| 22 | [昨天关闭Bug数](#属性-昨天关闭Bug数（YESTERDAYCLOSEDBUGCNT）) | YESTERDAYCLOSEDBUGCNT | 整型 | 否 | 否 | 是 |
| 23 | [昨天确认Bug数](#属性-昨天确认Bug数（YESTERDAYCONFIRMBUGCNT）) | YESTERDAYCONFIRMBUGCNT | 整型 | 否 | 否 | 是 |
| 24 | [昨天解决Bug数](#属性-昨天解决Bug数（YESTERDAYRESOLVEDBUGCNT）) | YESTERDAYRESOLVEDBUGCNT | 整型 | 否 | 否 | 是 |
| 25 | [已延期](#属性-已延期（POSTPONEDPROJECTCNT）) | POSTPONEDPROJECTCNT | 整型 | 否 | 否 | 是 |
| 26 | [当前项目](#属性-当前项目（CURRPROJECT）) | CURRPROJECT | 文本，可指定长度 | 否 | 否 | 是 |
| 27 | [状态](#属性-状态（STATUS）) | STATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 28 | [产品代号](#属性-产品代号（CODE）) | CODE | 文本，可指定长度 | 否 | 否 | 是 |
| 29 | [产品类型](#属性-产品类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 30 | [产品排序](#属性-产品排序（ORDER1）) | ORDER1 | 整型 | 否 | 否 | 是 |
| 31 | [是否置顶](#属性-是否置顶（ISTOP）) | ISTOP | 整型 | 否 | 否 | 是 |

### 属性-产品编号（ID）
#### 属性说明
产品编号

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
无

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
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

#### 取值范围/公式
无

#### 数据格式
无

#### 关系属性
无

### 属性-需求总数（STORYCNT）
#### 属性说明
需求总数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

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
无

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
无

### 属性-未开始需求数（WAITSTORYCNT）
#### 属性说明
未开始需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'wait' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-已计划需求数（PLANNEDSTORYCNT）
#### 属性说明
已计划需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'planned' AND DELETED ='0')

#### 数据格式
无

#### 关系属性
无

### 属性-开发中需求数（DEVELOPINGSTORYCNT）
#### 属性说明
开发中需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'developing' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-测试中需求数（TESTINGSTORYCNT）
#### 属性说明
测试中需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'testing' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-已发布需求数（RELEASEDSTORYCNT）
#### 属性说明
已发布需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'released' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-未过期计划数（UNENDPRODUCTPLANCNT）
#### 属性说明
未过期计划数

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
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= %1$s  AND `END` > CURDATE() AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-关联项目数（RESPROJECTCNT）
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
(SELECT COUNT(1) FROM ZT_PROJECT LEFT JOIN ZT_PROJECTPRODUCT ON  ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project WHERE PRODUCT = %1$s AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-未完成关联项目数（UNDONERESPROJECTCNT）
#### 属性说明
未完成关联项目数

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
(SELECT COUNT(1) FROM ZT_PROJECT LEFT JOIN ZT_PROJECTPRODUCT ON  ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project WHERE PRODUCT = %1$s AND `STATUS` <> 'closed' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

### 属性-维护中发布数（NORMALRELEASECNT）
#### 属性说明
维护中发布数

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
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= %1$s AND  `STATUS`= 'normal' AND DELETED = '0')

#### 数据格式
无

#### 关系属性
无

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
无

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `STATUS` = 'active' AND DELETED ='0')

#### 数据格式
无

#### 关系属性
无

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
无

### 属性-指派给我的Bug数（ASSIGNTOMEBUGCNT）
#### 属性说明
指派给我的Bug数

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
1

#### 数据格式
无

#### 关系属性
无

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
无

### 属性-所有Bug数（BUGCNT）
#### 属性说明
所有Bug数

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
无

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
无

### 属性-昨天关闭Bug数（YESTERDAYCLOSEDBUGCNT）
#### 属性说明
昨天关闭Bug数

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
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID`  AND DELETED = '0' and resolvedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59'))

#### 数据格式
无

#### 关系属性
无

### 属性-昨天确认Bug数（YESTERDAYCONFIRMBUGCNT）
#### 属性说明
昨天确认Bug数

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
5

#### 数据格式
无

#### 关系属性
无

### 属性-昨天解决Bug数（YESTERDAYRESOLVEDBUGCNT）
#### 属性说明
昨天解决Bug数

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
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'closed' AND DELETED = '0' and CLOSEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59'))

#### 数据格式
无

#### 关系属性
无

### 属性-已延期（POSTPONEDPROJECTCNT）
#### 属性说明
已延期

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
(SELECT COUNT(1) FROM ZT_PROJECT t2 LEFT JOIN ZT_PROJECTPRODUCT t ON t2.ID = t.project WHERE t.PRODUCT = t1.id AND t2.DELETED = '0' and t2.`status` in( 'wait','doing') and t2.`END` < now() )

#### 数据格式
无

#### 关系属性
无

### 属性-当前项目（CURRPROJECT）
#### 属性说明
当前项目

#### 属性类型
逻辑字段[来自计算式]

#### 数据类型
文本，可指定长度

#### Java类型
String

#### 是否允许为为空
是

#### 默认值
无

#### 取值范围/公式
(SELECT t.name FROM zt_project t,zt_projectproduct t2 WHERE t.id=t2.project and t2.product = t1.id limit 1)

#### 数据格式
无

#### 关系属性
无

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
无

#### 取值范围/公式
参照数据字典【[产品状态（Product__status）](../../codelist/Product__status)】

#### 数据格式
无

#### 关系属性
无

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
无

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
无

#### 取值范围/公式
参照数据字典【[产品类型（Product__type）](../../codelist/Product__type)】

#### 数据格式
无

#### 关系属性
无

### 属性-产品排序（ORDER1）
#### 属性说明
产品排序

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
无

### 属性-是否置顶（ISTOP）
#### 属性说明
是否置顶

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
| 7 | [获取测试统计详情](#实体行为-获取测试统计详情（GetTestStats）) | GetTestStats | 内置方法 | 后台及前台 |
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
无
### 实体行为-Remove（Remove）
#### 说明
Remove

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Get（Get）
#### 说明
Get

#### 行为类型
内置方法

#### 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [获取当前用户的Bug数<br>（GetCurUserBugCnt）](#逻辑处理-获取当前用户的Bug数（GetCurUserBugCnt）) | 执行之后 | 是 |  |
### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

#### 行为类型
内置方法

#### 行为持有者
后台及前台

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
### 实体行为-获取测试统计详情（GetTestStats）
#### 说明
获取测试统计详情

#### 行为类型
内置方法

#### 行为持有者
后台及前台

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

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [获取当前用户的Bug数](#逻辑处理-获取当前用户的Bug数（GetCurUserBugCnt）) | GetCurUserBugCnt | 后台 |

### 逻辑处理-获取当前用户的Bug数（GetCurUserBugCnt）
#### 说明
获取当前用户的Bug数

#### 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取bug数 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |

## 查询

