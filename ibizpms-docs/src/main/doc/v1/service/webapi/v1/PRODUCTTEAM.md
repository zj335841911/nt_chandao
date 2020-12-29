# 服务接口-IBZ_PRODUCTTEAM
## 接口说明
产品团队

## 接口清单
### 新建产品团队
#### 访问路径
/productteams

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productteamdto | [PRODUCTTEAMDTO](#PRODUCTTEAMDTO) | 产品团队实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [PRODUCTTEAMDTO](#PRODUCTTEAMDTO)：产品团队实体传输对象 |

### 批量新建产品团队
#### 访问路径
/productteams/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productteamdtos | List<[PRODUCTTEAMDTO](#PRODUCTTEAMDTO)> | 产品团队实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新产品团队
#### 访问路径
/productteams/{productteam_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productteam_id | Long | 产品团队主键ID |
| 2 | productteamdto | [PRODUCTTEAMDTO](#PRODUCTTEAMDTO) | 产品团队实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [PRODUCTTEAMDTO](#PRODUCTTEAMDTO)：产品团队实体传输对象 |

### 批量更新产品团队
#### 访问路径
/productteams/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productteamdtos | List<[PRODUCTTEAMDTO](#PRODUCTTEAMDTO)> | 产品团队实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除产品团队
#### 访问路径
/productteams/{productteam_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productteam_id | Long | 产品团队主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除产品团队
#### 访问路径
/productteams/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<Long> | 产品团队主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取产品团队
#### 访问路径
/productteams/{productteam_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productteam_id | Long | 产品团队主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [PRODUCTTEAMDTO](#PRODUCTTEAMDTO)：产品团队实体传输对象 |

### 检查产品团队
#### 访问路径
/productteams/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productteamdto | [PRODUCTTEAMDTO](#PRODUCTTEAMDTO) | 产品团队实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存产品团队
#### 访问路径
/productteams/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productteamdto | [PRODUCTTEAMDTO](#PRODUCTTEAMDTO) | 产品团队实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存产品团队
#### 访问路径
/productteams/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productteamdtos | List<[PRODUCTTEAMDTO](#PRODUCTTEAMDTO)> | 产品团队实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取数据集
#### 访问路径
/productteams/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [PRODUCTTEAMSearchContext](#PRODUCTTEAMSearchContext) | 产品团队查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[PRODUCTTEAMDTO](#PRODUCTTEAMDTO)>：产品团队实体传输对象列表 |

### 查询数据集
#### 访问路径
/productteams/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [PRODUCTTEAMSearchContext](#PRODUCTTEAMSearchContext) | 产品团队查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[PRODUCTTEAMDTO](#PRODUCTTEAMDTO)>：产品团队实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品团队成员信息
#### 访问路径
/productteams/fetchproductteaminfo

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [PRODUCTTEAMSearchContext](#PRODUCTTEAMSearchContext) | 产品团队查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[PRODUCTTEAMDTO](#PRODUCTTEAMDTO)>：产品团队实体传输对象列表 |

### 查询产品团队成员信息
#### 访问路径
/productteams/searchproductteaminfo

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [PRODUCTTEAMSearchContext](#PRODUCTTEAMSearchContext) | 产品团队查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[PRODUCTTEAMDTO](#PRODUCTTEAMDTO)>：产品团队实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品团队管理
#### 访问路径
/productteams/fetchroweditdefaultproductteam

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [PRODUCTTEAMSearchContext](#PRODUCTTEAMSearchContext) | 产品团队查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[PRODUCTTEAMDTO](#PRODUCTTEAMDTO)>：产品团队实体传输对象列表 |

### 查询产品团队管理
#### 访问路径
/productteams/searchroweditdefaultproductteam

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [PRODUCTTEAMSearchContext](#PRODUCTTEAMSearchContext) | 产品团队查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[PRODUCTTEAMDTO](#PRODUCTTEAMDTO)>：产品团队实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### PRODUCTTEAMDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | join | Timestamp | 允许 | 加盟日<br>时间格式：yyyy-MM-dd |
| 2 | hours | Double | 允许 | 可用工时/天 |
| 3 | id | Long | 不可 | 编号 |
| 4 | role | String | 允许 | 角色 |
| 5 | type | String | 允许 | 团队类型 |
| 6 | limited | String | 允许 | 受限用户 |
| 7 | root | Long | 允许 | 编号 |
| 8 | account | String | 允许 | 用户 |
| 9 | days | Integer | 允许 | 可用工日 |
| 10 | order | Integer | 允许 | 排序 |
| 11 | consumed | Double | 允许 | 总计消耗 |
| 12 | left | Double | 允许 | 预计剩余 |
| 13 | estimate | Double | 允许 | 最初预计 |
| 14 | total | Integer | 允许 | 总计可用 |
| 15 | taskcnt | Integer | 允许 | 任务数 |
| 16 | username | String | 允许 | 用户 |
| 17 | <动态属性> | Object | 允许 | 支持动态属性 |

#### PRODUCTTEAMSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_type_eq | String | 允许 | 条件字段：type<br>条件组合方式：`=` |
| 2 | n_limited_eq | String | 允许 | 条件字段：limited<br>条件组合方式：`=` |
| 3 | n_root_eq | Long | 允许 | 条件字段：root<br>条件组合方式：`=` |
| 4 | n_account_like | String | 允许 | 条件字段：account<br>条件组合方式：`%like%` |
| 5 | customcond | String | 允许 | 自定义查询条件 |
| 6 | customparams | String | 允许 | 自定义查询参数 |
| 7 | query | String | 允许 | 快速搜索 |
| 8 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 9 | page | int | 允许 | 当前页数<br>默认值0 |
| 10 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 11 | sort | String | 允许 | 排序 |
