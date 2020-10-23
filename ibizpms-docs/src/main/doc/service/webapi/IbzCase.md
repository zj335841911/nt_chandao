# 服务接口-IBZ_CASE
## 接口说明
测试用例

## 接口清单
### 新建测试用例
#### 访问路径
/ibzcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcasedto | [IbzCaseDTO](#IbzCaseDTO) | 测试用例实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzCaseDTO](#IbzCaseDTO)：测试用例实体传输对象 |

### 批量新建测试用例
#### 访问路径
/ibzcases/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcasedtos | List<[IbzCaseDTO](#IbzCaseDTO)> | 测试用例实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新测试用例
#### 访问路径
/ibzcases/{ibzcase_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 测试用例主键ID |
| 2 | ibzcasedto | [IbzCaseDTO](#IbzCaseDTO) | 测试用例实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzCaseDTO](#IbzCaseDTO)：测试用例实体传输对象 |

### 批量更新测试用例
#### 访问路径
/ibzcases/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcasedtos | List<[IbzCaseDTO](#IbzCaseDTO)> | 测试用例实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除测试用例
#### 访问路径
/ibzcases/{ibzcase_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 测试用例主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除测试用例
#### 访问路径
/ibzcases/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<Long> | 测试用例主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取测试用例
#### 访问路径
/ibzcases/{ibzcase_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 测试用例主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzCaseDTO](#IbzCaseDTO)：测试用例实体传输对象 |

### 检查测试用例
#### 访问路径
/ibzcases/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcasedto | [IbzCaseDTO](#IbzCaseDTO) | 测试用例实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存测试用例
#### 访问路径
/ibzcases/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcasedto | [IbzCaseDTO](#IbzCaseDTO) | 测试用例实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存测试用例
#### 访问路径
/ibzcases/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcasedtos | List<[IbzCaseDTO](#IbzCaseDTO)> | 测试用例实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取DEFAULT
#### 访问路径
/ibzcases/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzCaseSearchContext](#IbzCaseSearchContext) | 测试用例查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzCaseDTO](#IbzCaseDTO)>：测试用例实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/ibzcases/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzCaseSearchContext](#IbzCaseSearchContext) | 测试用例查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzCaseDTO](#IbzCaseDTO)>：测试用例实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据建立测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzcasedto | [IbzCaseDTO](#IbzCaseDTO) | 测试用例实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzCaseDTO](#IbzCaseDTO)：测试用例实体传输对象 |

### 根据批量建立测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzcasedtos | List<[IbzCaseDTO](#IbzCaseDTO)> | 测试用例实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据更新测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzcase_id | Long | 测试用例主键ID |
| 3 | ibzcasedto | [IbzCaseDTO](#IbzCaseDTO) | 测试用例实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzCaseDTO](#IbzCaseDTO)：测试用例实体传输对象 |

### 根据批量更新测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzcasedtos | List<[IbzCaseDTO](#IbzCaseDTO)> | 测试用例实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据删除测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzcase_id | Long | 测试用例主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量删除测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ids | List<Long> | 测试用例主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzcase_id | Long | 测试用例主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzCaseDTO](#IbzCaseDTO)：测试用例实体传输对象 |

### 根据检查测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzcasedto | [IbzCaseDTO](#IbzCaseDTO) | 测试用例实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据保存测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzcasedto | [IbzCaseDTO](#IbzCaseDTO) | 测试用例实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量保存测试用例
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | ibzcasedtos | List<[IbzCaseDTO](#IbzCaseDTO)> | 测试用例实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取DEFAULT
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | context | [IbzCaseSearchContext](#IbzCaseSearchContext) | 测试用例查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzCaseDTO](#IbzCaseDTO)>：测试用例实体传输对象列表 |

### 根据查询DEFAULT
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 用例库主键ID |
| 2 | context | [IbzCaseSearchContext](#IbzCaseSearchContext) | 测试用例查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzCaseDTO](#IbzCaseDTO)>：测试用例实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### IbzCaseDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | order | Integer | 允许 | 排序 |
| 2 | howrun | String | 允许 | howRun |
| 3 | scriptedby | String | 允许 | scriptedBy |
| 4 | path | Integer | 允许 | path |
| 5 | openeddate | Timestamp | 允许 | 创建日期<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 6 | lastediteddate | Timestamp | 允许 | 修改日期<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 7 | scripteddate | Timestamp | 允许 | scriptedDate<br>时间格式：yyyy-MM-dd |
| 8 | comment | String | 允许 | 备注 |
| 9 | auto | String | 允许 | auto |
| 10 | title | String | 不可 | 用例标题 |
| 11 | deleted | String | 允许 | 已删除 |
| 12 | scriptlocation | String | 允许 | scriptLocation |
| 13 | scriptstatus | String | 允许 | scriptStatus |
| 14 | keywords | String | 允许 | 关键词 |
| 15 | id | Long | 不可 | 用例编号 |
| 16 | precondition | String | 允许 | 前置条件 |
| 17 | pri | String | 允许 | 优先级 |
| 18 | type | String | 允许 | 用例类型 |
| 19 | status | String | 允许 | 状态 |
| 20 | stage | String | 允许 | 适用阶段 |
| 21 | openedby | String | 允许 | 由谁创建 |
| 22 | lasteditedby | String | 允许 | 最后修改者 |
| 23 | lib | Long | 允许 | 编号 |
| 24 | module | Long | 允许 | id |
| 25 | modulename | String | 允许 | 所属模块 |
| 26 | libname | String | 允许 | 用例库 |
| 27 | version | Integer | 允许 | 用例版本 |
| 28 | ibzlibcasesteptmps | List<[IbzLibCaseStepTmpDTO}](#IbzLibCaseStepTmpDTO})> | 允许 | 用例库用例步骤 |
| 29 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IbzLibCaseStepTmpDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | version | Integer | 允许 | 版本 |
| 2 | ibizcase | Long | 允许 | 用例编号 |
| 3 | expect | String | 允许 | 预期 |
| 4 | files | String | 允许 | 附件 |
| 5 | id | Long | 不可 | 编号 |
| 6 | reals | String | 允许 | 实际情况 |
| 7 | desc | String | 允许 | 步骤 |
| 8 | parent | Long | 允许 | 编号 |
| 9 | type | String | 允许 | 类型 |
| 10 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IbzCaseSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | n_title_like | String | 允许 | 条件字段：title<br>条件组合方式：`%like%` |
| 2 | n_pri_eq | String | 允许 | 条件字段：pri<br>条件组合方式：`=` |
| 3 | n_type_eq | String | 允许 | 条件字段：type<br>条件组合方式：`=` |
| 4 | n_status_eq | String | 允许 | 条件字段：status<br>条件组合方式：`=` |
| 5 | n_openedby_eq | String | 允许 | 条件字段：openedby<br>条件组合方式：`=` |
| 6 | n_lasteditedby_eq | String | 允许 | 条件字段：lasteditedby<br>条件组合方式：`=` |
| 7 | n_lib_eq | Long | 允许 | 条件字段：lib<br>条件组合方式：`=` |
| 8 | n_module_eq | Long | 允许 | 条件字段：module<br>条件组合方式：`=` |
| 9 | n_modulename_eq | String | 允许 | 条件字段：modulename<br>条件组合方式：`=` |
| 10 | n_modulename_like | String | 允许 | 条件字段：modulename<br>条件组合方式：`%like%` |
| 11 | n_libname_eq | String | 允许 | 条件字段：libname<br>条件组合方式：`=` |
| 12 | n_libname_like | String | 允许 | 条件字段：libname<br>条件组合方式：`%like%` |
| 13 | customcond | String | 允许 | 自定义查询条件 |
| 14 | customparams | String | 允许 | 自定义查询参数 |
| 15 | query | String | 允许 | 快速搜索 |
| 16 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 17 | page | int | 允许 | 当前页数<br>默认值0 |
| 18 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 19 | sort | String | 允许 | 排序 |
