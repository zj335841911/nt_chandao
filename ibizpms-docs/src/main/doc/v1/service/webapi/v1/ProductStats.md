# 服务接口-IBZ_PRODUCTSTATS
## 接口说明
产品统计

## 接口清单
### 新建产品统计
#### 访问路径
/productstats

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstatsdto | [ProductStatsDTO](#ProductStatsDTO) | 产品统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductStatsDTO](#ProductStatsDTO)：产品统计实体传输对象 |

### 批量新建产品统计
#### 访问路径
/productstats/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstatsdtos | List<[ProductStatsDTO](#ProductStatsDTO)> | 产品统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新产品统计
#### 访问路径
/productstats/{productstats_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstats_id | Long | 产品统计主键ID |
| 2 | productstatsdto | [ProductStatsDTO](#ProductStatsDTO) | 产品统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductStatsDTO](#ProductStatsDTO)：产品统计实体传输对象 |

### 批量更新产品统计
#### 访问路径
/productstats/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstatsdtos | List<[ProductStatsDTO](#ProductStatsDTO)> | 产品统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除产品统计
#### 访问路径
/productstats/{productstats_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstats_id | Long | 产品统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除产品统计
#### 访问路径
/productstats/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<Long> | 产品统计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取产品统计
#### 访问路径
/productstats/{productstats_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstats_id | Long | 产品统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductStatsDTO](#ProductStatsDTO)：产品统计实体传输对象 |

### 检查产品统计
#### 访问路径
/productstats/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstatsdto | [ProductStatsDTO](#ProductStatsDTO) | 产品统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取测试统计详情
#### 访问路径
/productstats/{productstats_id}/getteststats

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstats_id | Long | 产品统计主键ID |
| 2 | productstatsdto | [ProductStatsDTO](#ProductStatsDTO) | 产品统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductStatsDTO](#ProductStatsDTO)：产品统计实体传输对象 |

### 保存产品统计
#### 访问路径
/productstats/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstatsdto | [ProductStatsDTO](#ProductStatsDTO) | 产品统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存产品统计
#### 访问路径
/productstats/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productstatsdtos | List<[ProductStatsDTO](#ProductStatsDTO)> | 产品统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取DEFAULT
#### 访问路径
/productstats/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductStatsSearchContext](#ProductStatsSearchContext) | 产品统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductStatsDTO](#ProductStatsDTO)>：产品统计实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/productstats/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductStatsSearchContext](#ProductStatsSearchContext) | 产品统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductStatsDTO](#ProductStatsDTO)>：产品统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取未关闭产品
#### 访问路径
/productstats/fetchnoopenproduct

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductStatsSearchContext](#ProductStatsSearchContext) | 产品统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductStatsDTO](#ProductStatsDTO)>：产品统计实体传输对象列表 |

### 查询未关闭产品
#### 访问路径
/productstats/searchnoopenproduct

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductStatsSearchContext](#ProductStatsSearchContext) | 产品统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductStatsDTO](#ProductStatsDTO)>：产品统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品质量表
#### 访问路径
/productstats/fetchprodctquantigird

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductStatsSearchContext](#ProductStatsSearchContext) | 产品统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductStatsDTO](#ProductStatsDTO)>：产品统计实体传输对象列表 |

### 查询产品质量表
#### 访问路径
/productstats/searchprodctquantigird

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductStatsSearchContext](#ProductStatsSearchContext) | 产品统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductStatsDTO](#ProductStatsDTO)>：产品统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### ProductStatsDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | id | Long | 不可 | 产品编号 |
| 2 | deleted | String | 允许 | 已删除 |
| 3 | storycnt | Integer | 允许 | 需求总数 |
| 4 | productplancnt | Integer | 允许 | 计划总数 |
| 5 | releasecnt | Integer | 允许 | 发布总数 |
| 6 | waitstorycnt | Integer | 允许 | 未开始需求数 |
| 7 | plannedstorycnt | Integer | 允许 | 已计划需求数 |
| 8 | developingstorycnt | Integer | 允许 | 开发中需求数 |
| 9 | testingstorycnt | Integer | 允许 | 测试中需求数 |
| 10 | releasedstorycnt | Integer | 允许 | 已发布需求数 |
| 11 | unendproductplancnt | Integer | 允许 | 未过期计划数 |
| 12 | resprojectcnt | Integer | 允许 | 关联项目数 |
| 13 | undoneresprojectcnt | Integer | 允许 | 未完成关联项目数 |
| 14 | normalreleasecnt | Integer | 允许 | 维护中发布数 |
| 15 | activestorycnt | Integer | 允许 | 激活需求数 |
| 16 | activebugcnt | Integer | 允许 | 未解决Bug数 |
| 17 | name | String | 不可 | 产品名称 |
| 18 | assigntomebugcnt | Integer | 允许 | 指派给我的Bug数 |
| 19 | notclosedbugcnt | Integer | 允许 | 未关闭Bug数 |
| 20 | bugcnt | Integer | 允许 | 所有Bug数 |
| 21 | unconfirmbugcnt | Integer | 允许 | 未确认Bug数 |
| 22 | yesterdayclosedbugcnt | Integer | 允许 | 昨天关闭Bug数 |
| 23 | yesterdayconfirmbugcnt | Integer | 允许 | 昨天确认Bug数 |
| 24 | yesterdayresolvedbugcnt | Integer | 允许 | 昨天解决Bug数 |
| 25 | postponedprojectcnt | Integer | 允许 | 已延期 |
| 26 | currproject | String | 允许 | 当前项目 |
| 27 | status | String | 允许 | 状态 |
| 28 | code | String | 允许 | 产品代号 |
| 29 | type | String | 允许 | 产品类型 |
| 30 | order1 | Integer | 允许 | 产品排序 |
| 31 | istop | Integer | 允许 | 是否置顶 |
| 32 | finishedstorycnt | Integer | 允许 | 已完成的需求数 |
| 33 | resolvedbugcnt | Integer | 允许 | 解决Bug数 |
| 34 | importantbugcnt | Integer | 允许 | 重要的Bug数 |
| 35 | bugstory | Integer | 允许 | 需求所提bug数 |
| 36 | importantbugpercent | String | 允许 | 严重bug比 |
| 37 | <动态属性> | Object | 允许 | 支持动态属性 |

#### ProductStatsSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_name_like | String | 允许 | 条件字段：name<br>条件组合方式：`%like%` |
| 2 | n_status_eq | String | 允许 | 条件字段：status<br>条件组合方式：`=` |
| 3 | n_type_eq | String | 允许 | 条件字段：type<br>条件组合方式：`=` |
| 4 | customcond | String | 允许 | 自定义查询条件 |
| 5 | customparams | String | 允许 | 自定义查询参数 |
| 6 | query | String | 允许 | 快速搜索 |
| 7 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 8 | page | int | 允许 | 当前页数<br>默认值0 |
| 9 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 10 | sort | String | 允许 | 排序 |
