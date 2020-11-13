# 服务接口-ZT_DOC
## 接口说明
文档

## 接口清单
### 新建文档
#### 访问路径
/docs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | docdto | [DocDTO](#DocDTO) | 文档实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocDTO](#DocDTO)：文档实体传输对象 |

### 批量新建文档
#### 访问路径
/docs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | docdtos | List<[DocDTO](#DocDTO)> | 文档实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新文档
#### 访问路径
/docs/{doc_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doc_id | Long | 文档主键ID |
| 2 | docdto | [DocDTO](#DocDTO) | 文档实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocDTO](#DocDTO)：文档实体传输对象 |

### 批量更新文档
#### 访问路径
/docs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | docdtos | List<[DocDTO](#DocDTO)> | 文档实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除文档
#### 访问路径
/docs/{doc_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doc_id | Long | 文档主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除文档
#### 访问路径
/docs/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<Long> | 文档主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取文档
#### 访问路径
/docs/{doc_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doc_id | Long | 文档主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocDTO](#DocDTO)：文档实体传输对象 |

### 根据版本更新正文信息
#### 访问路径
/docs/{doc_id}/byversionupdatecontext

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doc_id | Long | 文档主键ID |
| 2 | docdto | [DocDTO](#DocDTO) | 文档实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocDTO](#DocDTO)：文档实体传输对象 |

### 检查文档
#### 访问路径
/docs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | docdto | [DocDTO](#DocDTO) | 文档实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 收藏
#### 访问路径
/docs/{doc_id}/collect

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doc_id | Long | 文档主键ID |
| 2 | docdto | [DocDTO](#DocDTO) | 文档实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocDTO](#DocDTO)：文档实体传输对象 |

### 保存文档
#### 访问路径
/docs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | docdto | [DocDTO](#DocDTO) | 文档实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存文档
#### 访问路径
/docs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | docdtos | List<[DocDTO](#DocDTO)> | 文档实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 取消收藏
#### 访问路径
/docs/{doc_id}/uncollect

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | doc_id | Long | 文档主键ID |
| 2 | docdto | [DocDTO](#DocDTO) | 文档实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DocDTO](#DocDTO)：文档实体传输对象 |

### 获取文档库文档（子库）
#### 访问路径
/docs/fetchchilddoclibdoc

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DocDTO](#DocDTO)>：文档实体传输对象列表 |

### 查询文档库文档（子库）
#### 访问路径
/docs/searchchilddoclibdoc

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DocDTO](#DocDTO)>：文档实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取DEFAULT
#### 访问路径
/docs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DocDTO](#DocDTO)>：文档实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/docs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DocDTO](#DocDTO)>：文档实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取文档库文档
#### 访问路径
/docs/fetchdoclibdoc

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DocDTO](#DocDTO)>：文档实体传输对象列表 |

### 查询文档库文档
#### 访问路径
/docs/searchdoclibdoc

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DocDTO](#DocDTO)>：文档实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取文档库分类文档
#### 访问路径
/docs/fetchdocmoduledoc

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DocDTO](#DocDTO)>：文档实体传输对象列表 |

### 查询文档库分类文档
#### 访问路径
/docs/searchdocmoduledoc

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DocDTO](#DocDTO)>：文档实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取我的收藏
#### 访问路径
/docs/fetchmyfavourite

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DocDTO](#DocDTO)>：文档实体传输对象列表 |

### 查询我的收藏
#### 访问路径
/docs/searchmyfavourite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DocSearchContext](#DocSearchContext) | 文档查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DocDTO](#DocDTO)>：文档实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### DocDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | groups | String | 允许 | 分组 |
| 2 | editeddate | Timestamp | 允许 | 更新时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 3 | views | Integer | 允许 | views |
| 4 | version | Integer | 允许 | 版本号 |
| 5 | editedby | String | 允许 | 由谁更新 |
| 6 | id | Long | 不可 | 文档编号 |
| 7 | title | String | 不可 | 文档标题 |
| 8 | deleted | String | 允许 | 已删除 |
| 9 | type | String | 允许 | 文档类型 |
| 10 | addeddate | Timestamp | 允许 | 添加时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 11 | acl | String | 允许 | 权限 |
| 12 | users | String | 允许 | 用户 |
| 13 | keywords | String | 允许 | 关键字 |
| 14 | collector | String | 允许 | 收藏者 |
| 15 | addedby | String | 允许 | 由谁添加 |
| 16 | lib | Long | 允许 | 所属文档库 |
| 17 | project | Long | 允许 | 所属项目 |
| 18 | product | Long | 允许 | 所属产品 |
| 19 | module | Long | 允许 | 所属分类 |
| 20 | projectname | String | 允许 | 所属项目 |
| 21 | productname | String | 允许 | 所属产品 |
| 22 | libname | String | 允许 | 所属文档库 |
| 23 | modulename | String | 允许 | 模块分类 |
| 24 | content | String | 允许 | 文档正文 |
| 25 | files | String | 允许 | 附件 |
| 26 | url | String | 允许 | 文档链接 |
| 27 | docqtype | String | 允许 | 文档查询类型 |
| 28 | isfavourites | String | 允许 | 是否收藏 |
| 29 | alldoccnt | Integer | 允许 | 所有文档数量 |
| 30 | recentupdatecnt | Integer | 允许 | 最近更新数量 |
| 31 | todayupdatecnt | Integer | 允许 | 今日更新数量 |
| 32 | recentaddcnt | Integer | 允许 | 最近添加数量 |
| 33 | mydoccnt | Integer | 允许 | 我的文档数量 |
| 34 | <动态属性> | Object | 允许 | 支持动态属性 |

#### DocSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_title_like | String | 允许 | 条件字段：title<br>条件组合方式：`%like%` |
| 2 | n_type_eq | String | 允许 | 条件字段：type<br>条件组合方式：`=` |
| 3 | n_acl_eq | String | 允许 | 条件字段：acl<br>条件组合方式：`=` |
| 4 | n_collector_like | String | 允许 | 条件字段：collector<br>条件组合方式：`%like%` |
| 5 | n_addedby_eq | String | 允许 | 条件字段：addedby<br>条件组合方式：`=` |
| 6 | n_lib_eq | Long | 允许 | 条件字段：lib<br>条件组合方式：`=` |
| 7 | n_project_eq | Long | 允许 | 条件字段：project<br>条件组合方式：`=` |
| 8 | n_product_eq | Long | 允许 | 条件字段：product<br>条件组合方式：`=` |
| 9 | n_module_eq | Long | 允许 | 条件字段：module<br>条件组合方式：`=` |
| 10 | n_projectname_eq | String | 允许 | 条件字段：projectname<br>条件组合方式：`=` |
| 11 | n_projectname_like | String | 允许 | 条件字段：projectname<br>条件组合方式：`%like%` |
| 12 | n_productname_eq | String | 允许 | 条件字段：productname<br>条件组合方式：`=` |
| 13 | n_productname_like | String | 允许 | 条件字段：productname<br>条件组合方式：`%like%` |
| 14 | n_libname_eq | String | 允许 | 条件字段：libname<br>条件组合方式：`=` |
| 15 | n_libname_like | String | 允许 | 条件字段：libname<br>条件组合方式：`%like%` |
| 16 | n_modulename_eq | String | 允许 | 条件字段：modulename<br>条件组合方式：`=` |
| 17 | n_modulename_like | String | 允许 | 条件字段：modulename<br>条件组合方式：`%like%` |
| 18 | customcond | String | 允许 | 自定义查询条件 |
| 19 | customparams | String | 允许 | 自定义查询参数 |
| 20 | query | String | 允许 | 快速搜索 |
| 21 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 22 | page | int | 允许 | 当前页数<br>默认值0 |
| 23 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 24 | sort | String | 允许 | 排序 |
