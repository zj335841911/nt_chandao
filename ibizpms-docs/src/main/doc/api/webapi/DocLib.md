# 服务接口-ZT_DOCLIB
## 接口说明
文档库

## 接口清单
### 新建文档库
#### 访问路径
/doclibs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | doclibdto | [DocLibDTO](#DocLibDTO) | 文档库实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocLibDTO](#DocLibDTO)：文档库实体传输对象 |

### 批量新建文档库
#### 访问路径
/doclibs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | doclibdtos | List<[DocLibDTO](#DocLibDTO)> | 文档库实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新文档库
#### 访问路径
/doclibs/{doclib_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | doclib_id | Long | 文档库主键ID |
| 2 | doclibdto | [DocLibDTO](#DocLibDTO) | 文档库实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocLibDTO](#DocLibDTO)：文档库实体传输对象 |

### 批量更新文档库
#### 访问路径
/doclibs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | doclibdtos | List<[DocLibDTO](#DocLibDTO)> | 文档库实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除文档库
#### 访问路径
/doclibs/{doclib_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | doclib_id | Long | 文档库主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除文档库
#### 访问路径
/doclibs/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<Long> | 文档库主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取文档库
#### 访问路径
/doclibs/{doclib_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | doclib_id | Long | 文档库主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocLibDTO](#DocLibDTO)：文档库实体传输对象 |

### 检查文档库
#### 访问路径
/doclibs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | doclibdto | [DocLibDTO](#DocLibDTO) | 文档库实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存文档库
#### 访问路径
/doclibs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | doclibdto | [DocLibDTO](#DocLibDTO) | 文档库实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存文档库
#### 访问路径
/doclibs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | doclibdtos | List<[DocLibDTO](#DocLibDTO)> | 文档库实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取DEFAULT
#### 访问路径
/doclibs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [DocLibSearchContext](#DocLibSearchContext) | 文档库查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DocLibDTO](#DocLibDTO)>：文档库实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/doclibs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [DocLibSearchContext](#DocLibSearchContext) | 文档库查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DocLibDTO](#DocLibDTO)>：文档库实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### DocLibDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | type | String | 允许 | 文档类型 |
| 2 | collector | String | 允许 | 收藏者 |
| 3 | acl | String | 允许 | 权限 |
| 4 | deleted | String | 允许 | 已删除 |
| 5 | groups | String | 允许 | 分组 |
| 6 | id | Long | 不可 | 编号 |
| 7 | users | String | 允许 | 用户 |
| 8 | main | Integer | 允许 | 是否是主库 |
| 9 | name | String | 不可 | 文档库名称 |
| 10 | order | Integer | 允许 | 排序 |
| 11 | project | Long | 允许 | 项目库 |
| 12 | product | Long | 允许 | 产品库 |
| 13 | <动态属性> | Object | 允许 | 支持动态属性 |

#### DocLibSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 13 | n_type_eq | String | 允许 |  |
| 14 | n_acl_eq | String | 允许 |  |
| 15 | n_main_eq | Integer | 允许 |  |
| 16 | n_name_like | String | 允许 |  |
| 17 | n_project_eq | Long | 允许 |  |
| 18 | n_product_eq | Long | 允许 |  |
| 19 | customcond | String | 允许 | 自定义查询条件 |
| 20 | customparams | String | 允许 | 自定义查询参数 |
| 21 | query | String | 允许 | 快速搜索 |
| 22 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 23 | page | int | 允许 | 当前页数<br>默认值0 |
| 24 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 25 | sort | String | 允许 | 排序 |
