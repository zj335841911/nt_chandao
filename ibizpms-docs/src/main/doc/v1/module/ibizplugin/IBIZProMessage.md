
# 实体-消息(IBIZPRO_MESSAGE)
## 实体说明
消息

## 所属模块
[iBiz插件模块](../ibizplugin)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [重发次数](#属性-重发次数（RETRYTIMES）) | RETRYTIMES | 整型 | 否 | 否 | 是 |
| 2 | [发送方](#属性-发送方（FROM）) | FROM | 长文本，没有长度限制 | 否 | 否 | 是 |
| 3 | [抄送方](#属性-抄送方（CC）) | CC | 长文本，没有长度限制 | 否 | 否 | 是 |
| 4 | [接收方](#属性-接收方（TO）) | TO | 长文本，没有长度限制 | 否 | 否 | 是 |
| 5 | [内容](#属性-内容（CONTENT）) | CONTENT | 长文本，没有长度限制 | 否 | 否 | 是 |
| 6 | [密件抄送方](#属性-密件抄送方（BCC）) | BCC | 长文本，没有长度限制 | 否 | 否 | 是 |
| 7 | [消息参数](#属性-消息参数（PARAM）) | PARAM | 长文本，没有长度限制 | 否 | 否 | 是 |
| 8 | [消息名称](#属性-消息名称（IBIZPRO_MESSAGENAME）) | IBIZPRO_MESSAGENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [标题](#属性-标题（SUBJECT）) | SUBJECT | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [重发间隔时间](#属性-重发间隔时间（RETRYINTERVALTIME）) | RETRYINTERVALTIME | 整型 | 否 | 否 | 是 |
| 11 | [消息类型](#属性-消息类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 12 | [是否同步](#属性-是否同步（ISSYNC）) | ISSYNC | 单项选择(数值) | 否 | 否 | 是 |
| 13 | [是否重发](#属性-是否重发（ISRETRY）) | ISRETRY | 单项选择(数值) | 否 | 否 | 是 |
| 14 | [是否是链接消息](#属性-是否是链接消息（ISLINK）) | ISLINK | 单项选择(数值) | 否 | 否 | 是 |
| 15 | [消息标识](#属性-消息标识（IBIZPRO_MESSAGEID）) | IBIZPRO_MESSAGEID | 文本，可指定长度 | 是 | 否 | 是 |
| 16 | [链接地址](#属性-链接地址（LINKURL）) | LINKURL | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [是否完成](#属性-是否完成（ISDONE）) | ISDONE | 是否逻辑 | 否 | 否 | 是 |
| 18 | [是否已读](#属性-是否已读（ISREAD）) | ISREAD | 是否逻辑 | 否 | 否 | 是 |
| 19 | [发送代理标识](#属性-发送代理标识（SENDPROXYID）) | SENDPROXYID | 文本，可指定长度 | 否 | 否 | 是 |
| 20 | [发送时间](#属性-发送时间（SENDTIME）) | SENDTIME | 日期时间型 | 否 | 否 | 是 |

### 属性-重发次数（RETRYTIMES）
#### 属性说明
重发次数

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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

### 属性-发送方（FROM）
#### 属性说明
发送方

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

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

### 属性-抄送方（CC）
#### 属性说明
抄送方

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

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

### 属性-接收方（TO）
#### 属性说明
接收方

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

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

### 属性-内容（CONTENT）
#### 属性说明
内容

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

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

### 属性-密件抄送方（BCC）
#### 属性说明
密件抄送方

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

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

### 属性-消息参数（PARAM）
#### 属性说明
消息参数

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

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

### 属性-消息名称（IBIZPRO_MESSAGENAME）
#### 属性说明
消息名称

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

### 属性-标题（SUBJECT）
#### 属性说明
标题

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

### 属性-重发间隔时间（RETRYINTERVALTIME）
#### 属性说明
重发间隔时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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

### 属性-消息类型（TYPE）
#### 属性说明
消息类型

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
参照数据字典【[插件_消息类型（Message__type）](../../codelist/Message__type)】

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

### 属性-是否同步（ISSYNC）
#### 属性说明
是否同步

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(数值)

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（数值）（YesNo2）](../../codelist/YesNo2)】

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

### 属性-是否重发（ISRETRY）
#### 属性说明
是否重发

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(数值)

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（数值）（YesNo2）](../../codelist/YesNo2)】

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

### 属性-是否是链接消息（ISLINK）
#### 属性说明
是否是链接消息

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(数值)

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（数值）（YesNo2）](../../codelist/YesNo2)】

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

### 属性-消息标识（IBIZPRO_MESSAGEID）
#### 属性说明
消息标识

- 是否是主键
是

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
无

### 属性-链接地址（LINKURL）
#### 属性说明
链接地址

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

### 属性-是否完成（ISDONE）
#### 属性说明
是否完成

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（数值）（YesNo2）](../../codelist/YesNo2)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-是否已读（ISREAD）
#### 属性说明
是否已读

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（数值）（YesNo2）](../../codelist/YesNo2)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-发送代理标识（SENDPROXYID）
#### 属性说明
发送代理标识

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

### 属性-发送时间（SENDTIME）
#### 属性说明
发送时间

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd HH:mm:ss

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
| 7 | [标记已完成](#实体行为-标记已完成（MarkDone）) | MarkDone | 用户自定义 | 后台及前台 |
| 8 | [标记已读](#实体行为-标记已读（MarkRead）) | MarkRead | 用户自定义 | 后台及前台 |
| 9 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 10 | [发送消息](#实体行为-发送消息（Send）) | Send | 用户自定义 | 后台及前台 |

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
### 实体行为-标记已完成（MarkDone）
#### 说明
标记已完成

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-标记已读（MarkRead）
#### 说明
标记已读

- 行为类型
用户自定义

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
### 实体行为-发送消息（Send）
#### 说明
发送消息

- 行为类型
用户自定义

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
| 1 | [消息名称（IBIZPRO_MESSAGENAME）](#属性-消息名称（IBIZPRO_MESSAGENAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [消息名称（IBIZPRO_MESSAGENAME）](#属性-消息名称（IBIZPRO_MESSAGENAME）) | `%like%` |
| 2 | [消息类型（TYPE）](#属性-消息类型（TYPE）) | `=` |
| 3 | [是否同步（ISSYNC）](#属性-是否同步（ISSYNC）) | `=` |
| 4 | [是否重发（ISRETRY）](#属性-是否重发（ISRETRY）) | `=` |
| 5 | [是否是链接消息（ISLINK）](#属性-是否是链接消息（ISLINK）) | `=` |
| 6 | [消息标识（IBIZPRO_MESSAGEID）](#属性-消息标识（IBIZPRO_MESSAGEID）) | `=` |
| 7 | [发送代理标识（SENDPROXYID）](#属性-发送代理标识（SENDPROXYID）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [用户全部消息](#数据查询-用户全部消息（UserAllMessages）) | UserAllMessages | 否 |
| 3 | [用户未读信息](#数据查询-用户未读信息（UserUnreadMessages）) | UserUnreadMessages | 否 |
| 4 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`IBIZPRO_MESSAGEID`,
t1.`IBIZPRO_MESSAGENAME`,
t1.`ISLINK`,
t1.`ISRETRY`,
t1.`ISSYNC`,
t1.`LINKURL`,
t1.`RETRYINTERVALTIME`,
t1.`RETRYTIMES`,
t1.`SUBJECT`,
t1.`TYPE`
FROM `T_IBIZPRO_MESSAGE` t1 

```
### 数据查询-用户全部消息（UserAllMessages）
#### 说明
用户全部消息

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL

```
### 数据查询-用户未读信息（UserUnreadMessages）
#### 说明
用户未读信息

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL

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
t1.`BCC`,
t1.`CC`,
t1.`CONTENT`,
t1.`FROM`,
t1.`IBIZPRO_MESSAGEID`,
t1.`IBIZPRO_MESSAGENAME`,
t1.`ISLINK`,
t1.`ISRETRY`,
t1.`ISSYNC`,
t1.`LINKURL`,
t1.`PARAM`,
t1.`RETRYINTERVALTIME`,
t1.`RETRYTIMES`,
t1.`SUBJECT`,
t1.`TO`,
t1.`TYPE`
FROM `T_IBIZPRO_MESSAGE` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [用户全部消息](#数据集合-用户全部消息（UserAllMessages）) | UserAllMessages | 否 |
| 3 | [用户未读信息](#数据集合-用户未读信息（UserUnreadMessages）) | UserUnreadMessages | 否 |

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
### 数据集合-用户全部消息（UserAllMessages）
#### 说明
用户全部消息

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [用户全部消息（UserAllMessages）](#数据查询-用户全部消息（UserAllMessages）) |
### 数据集合-用户未读信息（UserUnreadMessages）
#### 说明
用户未读信息

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [用户未读信息（UserUnreadMessages）](#数据查询-用户未读信息（UserUnreadMessages）) |

## 数据导入
无

## 数据导出
无
