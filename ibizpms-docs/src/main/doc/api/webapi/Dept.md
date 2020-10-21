# 服务接口-ZT_DEPT
## 接口说明
部门

## 接口清单
### 新建部门
#### 访问路径
/depts

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | deptdto | [DeptDTO](#DeptDTO) | 部门实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DeptDTO](#DeptDTO)：部门实体传输对象 |

### 批量新建部门
#### 访问路径
/depts/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | deptdtos | List<[DeptDTO](#DeptDTO)> | 部门实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新部门
#### 访问路径
/depts/{dept_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dept_id | Long | 部门主键ID |
| 2 | deptdto | [DeptDTO](#DeptDTO) | 部门实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DeptDTO](#DeptDTO)：部门实体传输对象 |

### 批量更新部门
#### 访问路径
/depts/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | deptdtos | List<[DeptDTO](#DeptDTO)> | 部门实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除部门
#### 访问路径
/depts/{dept_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dept_id | Long | 部门主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除部门
#### 访问路径
/depts/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<Long> | 部门主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取部门
#### 访问路径
/depts/{dept_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dept_id | Long | 部门主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DeptDTO](#DeptDTO)：部门实体传输对象 |

### 检查部门
#### 访问路径
/depts/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | deptdto | [DeptDTO](#DeptDTO) | 部门实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存部门
#### 访问路径
/depts/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | deptdto | [DeptDTO](#DeptDTO) | 部门实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存部门
#### 访问路径
/depts/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | deptdtos | List<[DeptDTO](#DeptDTO)> | 部门实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取DEFAULT
#### 访问路径
/depts/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [DeptSearchContext](#DeptSearchContext) | 部门查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DeptDTO](#DeptDTO)>：部门实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/depts/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [DeptSearchContext](#DeptSearchContext) | 部门查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DeptDTO](#DeptDTO)>：部门实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取根部门
#### 访问路径
/depts/fetchroot

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [DeptSearchContext](#DeptSearchContext) | 部门查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DeptDTO](#DeptDTO)>：部门实体传输对象列表 |

### 查询根部门
#### 访问路径
/depts/searchroot

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [DeptSearchContext](#DeptSearchContext) | 部门查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DeptDTO](#DeptDTO)>：部门实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### DeptDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | manager | String | 允许 | 负责人 |
| 2 | grade | Integer | 允许 | grade |
| 3 | function | String | 允许 | function |
| 4 | order | Integer | 允许 | order |
| 5 | path | String | 允许 | path |
| 6 | position | String | 允许 | position |
| 7 | id | Long | 不可 | id |
| 8 | name | String | 不可 | 部门名称 |
| 9 | parentname | String | 允许 | 上级部门 |
| 10 | parent | Long | 允许 | parent |
| 11 | isleaf | String | 允许 | 无子部门 |
| 12 | <动态属性> | Object | 允许 | 支持动态属性 |

#### DeptSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 12 | n_name_like | String | 允许 |  |
| 13 | n_parentname_eq | String | 允许 |  |
| 14 | n_parentname_like | String | 允许 |  |
| 15 | n_parent_eq | Long | 允许 |  |
| 16 | customcond | String | 允许 | 自定义查询条件 |
| 17 | customparams | String | 允许 | 自定义查询参数 |
| 18 | query | String | 允许 | 快速搜索 |
| 19 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 20 | page | int | 允许 | 当前页数<br>默认值0 |
| 21 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 22 | sort | String | 允许 | 排序 |
