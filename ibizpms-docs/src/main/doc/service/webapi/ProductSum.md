# 服务接口-产品汇总表
## 接口说明
产品汇总表

## 接口清单
### 新建产品汇总表
#### 访问路径
/productsums

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productsumdto | [ProductSumDTO](#ProductSumDTO) | 产品汇总表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductSumDTO](#ProductSumDTO)：产品汇总表实体传输对象 |

### 批量新建产品汇总表
#### 访问路径
/productsums/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productsumdtos | List<[ProductSumDTO](#ProductSumDTO)> | 产品汇总表实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新产品汇总表
#### 访问路径
/productsums/{productsum_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productsum_id | Long | 产品汇总表主键ID |
| 2 | productsumdto | [ProductSumDTO](#ProductSumDTO) | 产品汇总表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductSumDTO](#ProductSumDTO)：产品汇总表实体传输对象 |

### 批量更新产品汇总表
#### 访问路径
/productsums/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productsumdtos | List<[ProductSumDTO](#ProductSumDTO)> | 产品汇总表实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除产品汇总表
#### 访问路径
/productsums/{productsum_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productsum_id | Long | 产品汇总表主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除产品汇总表
#### 访问路径
/productsums/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<Long> | 产品汇总表主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取产品汇总表
#### 访问路径
/productsums/{productsum_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productsum_id | Long | 产品汇总表主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductSumDTO](#ProductSumDTO)：产品汇总表实体传输对象 |

### 检查产品汇总表
#### 访问路径
/productsums/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productsumdto | [ProductSumDTO](#ProductSumDTO) | 产品汇总表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存产品汇总表
#### 访问路径
/productsums/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productsumdto | [ProductSumDTO](#ProductSumDTO) | 产品汇总表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存产品汇总表
#### 访问路径
/productsums/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productsumdtos | List<[ProductSumDTO](#ProductSumDTO)> | 产品汇总表实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取数据集
#### 访问路径
/productsums/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductSumSearchContext](#ProductSumSearchContext) | 产品汇总表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductSumDTO](#ProductSumDTO)>：产品汇总表实体传输对象列表 |

### 查询数据集
#### 访问路径
/productsums/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductSumSearchContext](#ProductSumSearchContext) | 产品汇总表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductSumDTO](#ProductSumDTO)>：产品汇总表实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品创建bug数及占比
#### 访问路径
/productsums/fetchproductbugcnt_qa

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductSumSearchContext](#ProductSumSearchContext) | 产品汇总表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductSumDTO](#ProductSumDTO)>：产品汇总表实体传输对象列表 |

### 查询产品创建bug数及占比
#### 访问路径
/productsums/searchproductbugcnt_qa

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductSumSearchContext](#ProductSumSearchContext) | 产品汇总表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductSumDTO](#ProductSumDTO)>：产品汇总表实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品创建需求占比
#### 访问路径
/productsums/fetchproductcreatestory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductSumSearchContext](#ProductSumSearchContext) | 产品汇总表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductSumDTO](#ProductSumDTO)>：产品汇总表实体传输对象列表 |

### 查询产品创建需求占比
#### 访问路径
/productsums/searchproductcreatestory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductSumSearchContext](#ProductSumSearchContext) | 产品汇总表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductSumDTO](#ProductSumDTO)>：产品汇总表实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品计划数和需求数
#### 访问路径
/productsums/fetchproductstorycntandplancnt

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductSumSearchContext](#ProductSumSearchContext) | 产品汇总表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductSumDTO](#ProductSumDTO)>：产品汇总表实体传输对象列表 |

### 查询产品计划数和需求数
#### 访问路径
/productsums/searchproductstorycntandplancnt

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductSumSearchContext](#ProductSumSearchContext) | 产品汇总表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductSumDTO](#ProductSumDTO)>：产品汇总表实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### ProductSumDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | id | Long | 允许 | 主键标识 |
| 2 | name | String | 允许 | 产品名称 |
| 3 | po | String | 允许 | 产品负责人 |
| 4 | plan | Long | 允许 | 计划 |
| 5 | begin | String | 允许 | 开始日期 |
| 6 | end | String | 允许 | 结束日期 |
| 7 | waitstorycnt | Integer | 允许 | 草稿 |
| 8 | activestorycnt | Integer | 允许 | 激活 |
| 9 | changedstorycnt | Integer | 允许 | 已变更 |
| 10 | closedstorycnt | Integer | 允许 | 已关闭 |
| 11 | storycnt | Integer | 允许 | 总计 |
| 12 | bugcnt | Integer | 允许 | Bug数 |
| 13 | <动态属性> | Object | 允许 | 支持动态属性 |

#### ProductSumSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | n_id_eq | Long | 允许 | 条件字段：id<br>条件组合方式：`=` |
| 2 | n_po_eq | String | 允许 | 条件字段：po<br>条件组合方式：`=` |
| 3 | n_plan_eq | Long | 允许 | 条件字段：plan<br>条件组合方式：`=` |
| 4 | customcond | String | 允许 | 自定义查询条件 |
| 5 | customparams | String | 允许 | 自定义查询参数 |
| 6 | query | String | 允许 | 快速搜索 |
| 7 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 8 | page | int | 允许 | 当前页数<br>默认值0 |
| 9 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 10 | sort | String | 允许 | 排序 |
