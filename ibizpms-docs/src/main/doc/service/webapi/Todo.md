# 服务接口-ZT_TODO
## 接口说明
待办事宜表

## 接口清单
### 新建待办事宜表
#### 访问路径
/todos

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TodoDTO](#TodoDTO)：待办事宜表实体传输对象 |

### 批量新建待办事宜表
#### 访问路径
/todos/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | tododtos | List<[TodoDTO](#TodoDTO)> | 待办事宜表实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新待办事宜表
#### 访问路径
/todos/{todo_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | todo_id | Long | 待办事宜表主键ID |
| 2 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TodoDTO](#TodoDTO)：待办事宜表实体传输对象 |

### 批量更新待办事宜表
#### 访问路径
/todos/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | tododtos | List<[TodoDTO](#TodoDTO)> | 待办事宜表实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除待办事宜表
#### 访问路径
/todos/{todo_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | todo_id | Long | 待办事宜表主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除待办事宜表
#### 访问路径
/todos/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<Long> | 待办事宜表主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取待办事宜表
#### 访问路径
/todos/{todo_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | todo_id | Long | 待办事宜表主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TodoDTO](#TodoDTO)：待办事宜表实体传输对象 |

### Activate
#### 访问路径
/todos/{todo_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | todo_id | Long | 待办事宜表主键ID |
| 2 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TodoDTO](#TodoDTO)：待办事宜表实体传输对象 |

### AssignTo
#### 访问路径
/todos/{todo_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | todo_id | Long | 待办事宜表主键ID |
| 2 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TodoDTO](#TodoDTO)：待办事宜表实体传输对象 |

### 检查待办事宜表
#### 访问路径
/todos/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### Close
#### 访问路径
/todos/{todo_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | todo_id | Long | 待办事宜表主键ID |
| 2 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TodoDTO](#TodoDTO)：待办事宜表实体传输对象 |

### Finish
#### 访问路径
/todos/{todo_id}/finish

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | todo_id | Long | 待办事宜表主键ID |
| 2 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TodoDTO](#TodoDTO)：待办事宜表实体传输对象 |

### 保存待办事宜表
#### 访问路径
/todos/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存待办事宜表
#### 访问路径
/todos/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | tododtos | List<[TodoDTO](#TodoDTO)> | 待办事宜表实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 行为
#### 访问路径
/todos/{todo_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | todo_id | Long | 待办事宜表主键ID |
| 2 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TodoDTO](#TodoDTO)：待办事宜表实体传输对象 |

### 发送消息前置处理
#### 访问路径
/todos/{todo_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | todo_id | Long | 待办事宜表主键ID |
| 2 | tododto | [TodoDTO](#TodoDTO) | 待办事宜表实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TodoDTO](#TodoDTO)：待办事宜表实体传输对象 |

### 获取DEFAULT
#### 访问路径
/todos/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TodoSearchContext](#TodoSearchContext) | 待办事宜表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TodoDTO](#TodoDTO)>：待办事宜表实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/todos/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TodoSearchContext](#TodoSearchContext) | 待办事宜表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TodoDTO](#TodoDTO)>：待办事宜表实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取我的待办
#### 访问路径
/todos/fetchmytodo

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TodoSearchContext](#TodoSearchContext) | 待办事宜表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TodoDTO](#TodoDTO)>：待办事宜表实体传输对象列表 |

### 查询我的待办
#### 访问路径
/todos/searchmytodo

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TodoSearchContext](#TodoSearchContext) | 待办事宜表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TodoDTO](#TodoDTO)>：待办事宜表实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取MyUpcoming
#### 访问路径
/todos/fetchmyupcoming

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TodoSearchContext](#TodoSearchContext) | 待办事宜表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TodoDTO](#TodoDTO)>：待办事宜表实体传输对象列表 |

### 查询MyUpcoming
#### 访问路径
/todos/searchmyupcoming

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TodoSearchContext](#TodoSearchContext) | 待办事宜表查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TodoDTO](#TodoDTO)>：待办事宜表实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### TodoDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | id | Long | 不可 | 编号 |
| 2 | account | String | 允许 | 所有者 |
| 3 | closeddate | Timestamp | 允许 | 关闭时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 4 | closedby | String | 允许 | 由谁关闭 |
| 5 | type | String | 允许 | 类型 |
| 6 | end | Integer | 允许 | 结束 |
| 7 | desc | String | 允许 | 描述 |
| 8 | finishedby | String | 允许 | 由谁完成 |
| 9 | begin | Integer | 允许 | 开始 |
| 10 | idvalue | Integer | 允许 | 关联编号 |
| 11 | assignedby | String | 允许 | 由谁指派 |
| 12 | finisheddate | Timestamp | 允许 | 完成时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 13 | cycle | Integer | 允许 | 周期 |
| 14 | assignedto | String | 允许 | 指派给 |
| 15 | status | String | 允许 | 状态 |
| 16 | name | String | 允许 | 待办名称 |
| 17 | assigneddate | Timestamp | 允许 | 指派日期<br>时间格式：yyyy-MM-dd |
| 18 | pri | Integer | 允许 | 优先级 |
| 19 | date | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 20 | ibizprivate | Integer | 允许 | 私人事务 |
| 21 | config | String | 允许 | config |
| 22 | config_day | Integer | 允许 | 间隔天数 |
| 23 | config_beforedays | Integer | 允许 | 提前 |
| 24 | config_week | String | 允许 | 周期设置周几 |
| 25 | config_month | String | 允许 | 周期设置月 |
| 26 | config_type | String | 允许 | 周期类型 |
| 27 | config_end | Timestamp | 允许 | 过期时间<br>时间格式：yyyy-MM-dd |
| 28 | bug | String | 允许 | 待办名称 |
| 29 | task | String | 允许 | 待办名称 |
| 30 | story | String | 允许 | 待办名称 |
| 31 | date1 | String | 允许 | 日期 |
| 32 | date_disable | String | 允许 | 待定 |
| 33 | <动态属性> | Object | 允许 | 支持动态属性 |

#### TodoSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 33 | n_account_eq | String | 允许 |  |
| 34 | n_type_eq | String | 允许 |  |
| 35 | n_type_noteq | String | 允许 |  |
| 36 | n_end_eq | Integer | 允许 |  |
| 37 | n_begin_eq | Integer | 允许 |  |
| 38 | n_cycle_eq | Integer | 允许 |  |
| 39 | n_status_eq | String | 允许 |  |
| 40 | n_status_noteq | String | 允许 |  |
| 41 | n_name_like | String | 允许 |  |
| 42 | n_date_eq | Timestamp | 允许 | 时间格式：yyyy-MM-dd |
| 43 | n_date_gtandeq | Timestamp | 允许 | 时间格式：yyyy-MM-dd |
| 44 | n_date_ltandeq | Timestamp | 允许 | 时间格式：yyyy-MM-dd |
| 45 | n_date_noteq | Timestamp | 允许 | 时间格式：yyyy-MM-dd |
| 46 | n_private_eq | Integer | 允许 |  |
| 47 | n_config_type_eq | String | 允许 |  |
| 48 | customcond | String | 允许 | 自定义查询条件 |
| 49 | customparams | String | 允许 | 自定义查询参数 |
| 50 | query | String | 允许 | 快速搜索 |
| 51 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 52 | page | int | 允许 | 当前页数<br>默认值0 |
| 53 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 54 | sort | String | 允许 | 排序 |
