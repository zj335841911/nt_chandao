# 服务接口-IBZ_DOCLIBMODULE
## 接口说明
文档库分类

## 接口清单
### 新建文档库分类
#### 访问路径
/doclibmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doclibmoduledto | [DocLibModuleDTO](#DocLibModuleDTO) | 文档库分类实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocLibModuleDTO](#DocLibModuleDTO)：文档库分类实体传输对象 |

### 批量新建文档库分类
#### 访问路径
/doclibmodules/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doclibmoduledtos | List<[DocLibModuleDTO](#DocLibModuleDTO)> | 文档库分类实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新文档库分类
#### 访问路径
/doclibmodules/{doclibmodule_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doclibmodule_id | Long | 文档库分类主键ID |
| 2 | doclibmoduledto | [DocLibModuleDTO](#DocLibModuleDTO) | 文档库分类实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocLibModuleDTO](#DocLibModuleDTO)：文档库分类实体传输对象 |

### 批量更新文档库分类
#### 访问路径
/doclibmodules/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doclibmoduledtos | List<[DocLibModuleDTO](#DocLibModuleDTO)> | 文档库分类实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除文档库分类
#### 访问路径
/doclibmodules/{doclibmodule_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doclibmodule_id | Long | 文档库分类主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除文档库分类
#### 访问路径
/doclibmodules/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<Long> | 文档库分类主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取文档库分类
#### 访问路径
/doclibmodules/{doclibmodule_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doclibmodule_id | Long | 文档库分类主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocLibModuleDTO](#DocLibModuleDTO)：文档库分类实体传输对象 |

### 检查文档库分类
#### 访问路径
/doclibmodules/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doclibmoduledto | [DocLibModuleDTO](#DocLibModuleDTO) | 文档库分类实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存文档库分类
#### 访问路径
/doclibmodules/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doclibmoduledto | [DocLibModuleDTO](#DocLibModuleDTO) | 文档库分类实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存文档库分类
#### 访问路径
/doclibmodules/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doclibmoduledtos | List<[DocLibModuleDTO](#DocLibModuleDTO)> | 文档库分类实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取数据集
#### 访问路径
/doclibmodules/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocLibModuleSearchContext](#DocLibModuleSearchContext) | 文档库分类查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DocLibModuleDTO](#DocLibModuleDTO)>：文档库分类实体传输对象列表 |

### 查询数据集
#### 访问路径
/doclibmodules/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocLibModuleSearchContext](#DocLibModuleSearchContext) | 文档库分类查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DocLibModuleDTO](#DocLibModuleDTO)>：文档库分类实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### DocLibModuleDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | isleaf | String | 允许 | 叶子模块 |
| 2 | name | String | 不可 | 名称 |
| 3 | ibizshort | String | 允许 | 简称 |
| 4 | grade | Integer | 允许 | grade |
| 5 | collector | String | 允许 | collector |
| 6 | branch | Integer | 允许 | branch |
| 7 | id | Long | 不可 | id |
| 8 | order | Integer | 允许 | 排序值 |
| 9 | deleted | String | 允许 | 逻辑删除标志 |
| 10 | path | String | 允许 | path |
| 11 | owner | String | 允许 | owner |
| 12 | type | String | 允许 | 类型（story） |
| 13 | root | Long | 允许 | 编号 |
| 14 | parent | Long | 允许 | id |
| 15 | doclibname | String | 允许 | 所属文档库 |
| 16 | modulename | String | 允许 | 上级模块 |
| 17 | <动态属性> | Object | 允许 | 支持动态属性 |

#### DocLibModuleSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_name_like | String | 允许 | 条件字段：name<br>条件组合方式：`%like%` |
| 2 | n_root_eq | Long | 允许 | 条件字段：root<br>条件组合方式：`=` |
| 3 | n_parent_eq | Long | 允许 | 条件字段：parent<br>条件组合方式：`=` |
| 4 | n_doclibname_eq | String | 允许 | 条件字段：doclibname<br>条件组合方式：`=` |
| 5 | n_doclibname_like | String | 允许 | 条件字段：doclibname<br>条件组合方式：`%like%` |
| 6 | n_modulename_eq | String | 允许 | 条件字段：modulename<br>条件组合方式：`=` |
| 7 | n_modulename_like | String | 允许 | 条件字段：modulename<br>条件组合方式：`%like%` |
| 8 | customcond | String | 允许 | 自定义查询条件 |
| 9 | customparams | String | 允许 | 自定义查询参数 |
| 10 | query | String | 允许 | 快速搜索 |
| 11 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 12 | page | int | 允许 | 当前页数<br>默认值0 |
| 13 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 14 | sort | String | 允许 | 排序 |
