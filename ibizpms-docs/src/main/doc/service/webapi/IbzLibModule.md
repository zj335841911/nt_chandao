# 服务接口-IBZ_LIBMODULE
## 接口说明
用例库模块

## 接口清单
### 新建用例库模块
#### 访问路径
/ibzlibmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlibmoduledto | [IbzLibModuleDTO](#IbzLibModuleDTO) | 用例库模块实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzLibModuleDTO](#IbzLibModuleDTO)：用例库模块实体传输对象 |

### 批量新建用例库模块
#### 访问路径
/ibzlibmodules/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlibmoduledtos | List<[IbzLibModuleDTO](#IbzLibModuleDTO)> | 用例库模块实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新用例库模块
#### 访问路径
/ibzlibmodules/{ibzlibmodule_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlibmodule_id | Long | 用例库模块主键ID |
| 2 | ibzlibmoduledto | [IbzLibModuleDTO](#IbzLibModuleDTO) | 用例库模块实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzLibModuleDTO](#IbzLibModuleDTO)：用例库模块实体传输对象 |

### 批量更新用例库模块
#### 访问路径
/ibzlibmodules/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlibmoduledtos | List<[IbzLibModuleDTO](#IbzLibModuleDTO)> | 用例库模块实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除用例库模块
#### 访问路径
/ibzlibmodules/{ibzlibmodule_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlibmodule_id | Long | 用例库模块主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除用例库模块
#### 访问路径
/ibzlibmodules/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<Long> | 用例库模块主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取用例库模块
#### 访问路径
/ibzlibmodules/{ibzlibmodule_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlibmodule_id | Long | 用例库模块主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzLibModuleDTO](#IbzLibModuleDTO)：用例库模块实体传输对象 |

### 检查用例库模块
#### 访问路径
/ibzlibmodules/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlibmoduledto | [IbzLibModuleDTO](#IbzLibModuleDTO) | 用例库模块实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存用例库模块
#### 访问路径
/ibzlibmodules/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlibmoduledto | [IbzLibModuleDTO](#IbzLibModuleDTO) | 用例库模块实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存用例库模块
#### 访问路径
/ibzlibmodules/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlibmoduledtos | List<[IbzLibModuleDTO](#IbzLibModuleDTO)> | 用例库模块实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取DEFAULT
#### 访问路径
/ibzlibmodules/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzLibModuleSearchContext](#IbzLibModuleSearchContext) | 用例库模块查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzLibModuleDTO](#IbzLibModuleDTO)>：用例库模块实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/ibzlibmodules/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzLibModuleSearchContext](#IbzLibModuleSearchContext) | 用例库模块查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzLibModuleDTO](#IbzLibModuleDTO)>：用例库模块实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取无枝叶
#### 访问路径
/ibzlibmodules/fetchroot_nobranch

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzLibModuleSearchContext](#IbzLibModuleSearchContext) | 用例库模块查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzLibModuleDTO](#IbzLibModuleDTO)>：用例库模块实体传输对象列表 |

### 查询无枝叶
#### 访问路径
/ibzlibmodules/searchroot_nobranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzLibModuleSearchContext](#IbzLibModuleSearchContext) | 用例库模块查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzLibModuleDTO](#IbzLibModuleDTO)>：用例库模块实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据建立用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzlibmoduledto | [IbzLibModuleDTO](#IbzLibModuleDTO) | 用例库模块实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzLibModuleDTO](#IbzLibModuleDTO)：用例库模块实体传输对象 |

### 根据批量建立用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzlibmoduledtos | List<[IbzLibModuleDTO](#IbzLibModuleDTO)> | 用例库模块实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据更新用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/{ibzlibmodule_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzlibmodule_id | Long | 用例库模块主键ID |
| 3 | ibzlibmoduledto | [IbzLibModuleDTO](#IbzLibModuleDTO) | 用例库模块实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzLibModuleDTO](#IbzLibModuleDTO)：用例库模块实体传输对象 |

### 根据批量更新用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzlibmoduledtos | List<[IbzLibModuleDTO](#IbzLibModuleDTO)> | 用例库模块实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据删除用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/{ibzlibmodule_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzlibmodule_id | Long | 用例库模块主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量删除用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ids | List<Long> | 用例库模块主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/{ibzlibmodule_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzlibmodule_id | Long | 用例库模块主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzLibModuleDTO](#IbzLibModuleDTO)：用例库模块实体传输对象 |

### 根据检查用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzlibmoduledto | [IbzLibModuleDTO](#IbzLibModuleDTO) | 用例库模块实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据保存用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzlibmoduledto | [IbzLibModuleDTO](#IbzLibModuleDTO) | 用例库模块实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量保存用例库模块
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzlibmoduledtos | List<[IbzLibModuleDTO](#IbzLibModuleDTO)> | 用例库模块实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取DEFAULT
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | context | [IbzLibModuleSearchContext](#IbzLibModuleSearchContext) | 用例库模块查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzLibModuleDTO](#IbzLibModuleDTO)>：用例库模块实体传输对象列表 |

### 根据查询DEFAULT
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | context | [IbzLibModuleSearchContext](#IbzLibModuleSearchContext) | 用例库模块查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzLibModuleDTO](#IbzLibModuleDTO)>：用例库模块实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据获取无枝叶
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/fetchroot_nobranch

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | context | [IbzLibModuleSearchContext](#IbzLibModuleSearchContext) | 用例库模块查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzLibModuleDTO](#IbzLibModuleDTO)>：用例库模块实体传输对象列表 |

### 根据查询无枝叶
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzlibmodules/searchroot_nobranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | context | [IbzLibModuleSearchContext](#IbzLibModuleSearchContext) | 用例库模块查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzLibModuleDTO](#IbzLibModuleDTO)>：用例库模块实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### IbzLibModuleDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | branch | Integer | 允许 | branch |
| 2 | ibizshort | String | 允许 | 简称 |
| 3 | grade | Integer | 允许 | grade |
| 4 | order | Integer | 允许 | 排序值 |
| 5 | type | String | 允许 | 类型（story） |
| 6 | collector | String | 允许 | collector |
| 7 | id | Long | 不可 | id |
| 8 | isleaf | String | 允许 | 叶子模块 |
| 9 | owner | String | 允许 | owner |
| 10 | name | String | 不可 | 名称 |
| 11 | deleted | String | 允许 | 逻辑删除标志 |
| 12 | path | String | 允许 | path |
| 13 | parent | Long | 允许 | id |
| 14 | parentname | String | 允许 | 上级模块 |
| 15 | root | Long | 允许 | 编号 |
| 16 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IbzLibModuleSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 16 | n_name_like | String | 允许 | 条件字段：name<br>条件组合方式：`%like%` |
| 17 | n_parent_eq | Long | 允许 | 条件字段：parent<br>条件组合方式：`=` |
| 18 | n_root_eq | Long | 允许 | 条件字段：root<br>条件组合方式：`=` |
| 19 | customcond | String | 允许 | 自定义查询条件 |
| 20 | customparams | String | 允许 | 自定义查询参数 |
| 21 | query | String | 允许 | 快速搜索 |
| 22 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 23 | page | int | 允许 | 当前页数<br>默认值0 |
| 24 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 25 | sort | String | 允许 | 排序 |
