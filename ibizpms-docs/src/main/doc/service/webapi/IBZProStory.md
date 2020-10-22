# 服务接口-IBZPRO_STORY
## 接口说明
需求

## 接口清单
### 新建需求
#### 访问路径
/ibzprostories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorydto | [IBZProStoryDTO](#IBZProStoryDTO) | 需求实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IBZProStoryDTO](#IBZProStoryDTO)：需求实体传输对象 |

### 批量新建需求
#### 访问路径
/ibzprostories/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorydtos | List<[IBZProStoryDTO](#IBZProStoryDTO)> | 需求实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新需求
#### 访问路径
/ibzprostories/{ibzprostory_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostory_id | Long | 需求主键ID |
| 2 | ibzprostorydto | [IBZProStoryDTO](#IBZProStoryDTO) | 需求实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IBZProStoryDTO](#IBZProStoryDTO)：需求实体传输对象 |

### 批量更新需求
#### 访问路径
/ibzprostories/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorydtos | List<[IBZProStoryDTO](#IBZProStoryDTO)> | 需求实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除需求
#### 访问路径
/ibzprostories/{ibzprostory_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostory_id | Long | 需求主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除需求
#### 访问路径
/ibzprostories/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<Long> | 需求主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取需求
#### 访问路径
/ibzprostories/{ibzprostory_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostory_id | Long | 需求主键ID |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IBZProStoryDTO](#IBZProStoryDTO)：需求实体传输对象 |

### 检查需求
#### 访问路径
/ibzprostories/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorydto | [IBZProStoryDTO](#IBZProStoryDTO) | 需求实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存需求
#### 访问路径
/ibzprostories/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorydto | [IBZProStoryDTO](#IBZProStoryDTO) | 需求实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存需求
#### 访问路径
/ibzprostories/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorydtos | List<[IBZProStoryDTO](#IBZProStoryDTO)> | 需求实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 同步Ibz平台需求
#### 访问路径
/ibzprostories/{ibzprostory_id}/syncfromibiz

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostory_id | Long | 需求主键ID |
| 2 | ibzprostorydto | [IBZProStoryDTO](#IBZProStoryDTO) | 需求实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IBZProStoryDTO](#IBZProStoryDTO)：需求实体传输对象 |

### 获取数据集
#### 访问路径
/ibzprostories/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IBZProStorySearchContext](#IBZProStorySearchContext) | 需求查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IBZProStoryDTO](#IBZProStoryDTO)>：需求实体传输对象列表 |

### 查询数据集
#### 访问路径
/ibzprostories/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IBZProStorySearchContext](#IBZProStorySearchContext) | 需求查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| -- | -- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IBZProStoryDTO](#IBZProStoryDTO)>：需求实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### IBZProStoryDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 1 | id | Long | 不可 | 编号 |
| 2 | title | String | 不可 | 需求名称 |
| 3 | module | Long | 允许 | id |
| 4 | product | Long | 允许 | 编号 |
| 5 | ibizid | String | 允许 | IBIZ标识 |
| 6 | source | String | 允许 | 需求来源 |
| 7 | sourcenote | String | 允许 | 来源备注 |
| 8 | ibiz_sourceobject | String | 允许 | 来源对象 |
| 9 | ibiz_sourcename | String | 允许 | 来源对象名称 |
| 10 | ibiz_sourceid | String | 允许 | 来源对象标识 |
| 11 | version | Integer | 允许 | 版本号 |
| 12 | estimate | Double | 允许 | 预计工时 |
| 13 | keywords | String | 允许 | 关键词 |
| 14 | openeddate | Timestamp | 允许 | 创建日期<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 15 | lastediteddate | Timestamp | 允许 | 最后修改日期<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 16 | deleted | String | 允许 | 已删除 |
| 17 | openedby | String | 允许 | 由谁创建 |
| 18 | status | String | 允许 | 状态 |
| 19 | type | String | 允许 | 需求类型 |
| 20 | stage | String | 允许 | 需求阶段 |
| 21 | pri | Integer | 允许 | 优先级 |
| 22 | color | String | 允许 | 颜色 |
| 23 | project | String | 允许 | 项目 |
| 24 | stagedby | String | 允许 | 设置阶段者 |
| 25 | assignedto | String | 允许 | 指派给 |
| 26 | assigneddate | Timestamp | 允许 | 指派日期<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 27 | reviewedby | String | 允许 | 由谁评审 |
| 28 | revieweddate | Timestamp | 允许 | 评审时间<br>时间格式：yyyy-MM-dd |
| 29 | branch | Integer | 允许 | 平台 |
| 30 | mailto | String | 允许 | 抄送给 |
| 31 | lasteditedby | String | 允许 | 最后修改者 |
| 32 | childstories | String | 允许 | 需求细分 |
| 33 | linkstories | String | 允许 | 相关需求 |
| 34 | closedby | String | 允许 | 由谁关闭 |
| 35 | substatus | String | 允许 | 子状态 |
| 36 | closeddate | Timestamp | 允许 | 关闭日期	<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 37 | closedreason | String | 允许 | 关闭原因 |
| 38 | tobug | Integer | 允许 | 转Bug |
| 39 | duplicatestory | Integer | 允许 | 重复需求 |
| 40 | frombug | Integer | 允许 | 来源Bug |
| 41 | spec | String | 允许 | 需求描述 |
| 42 | verify | String | 允许 | 验收标准 |
| 43 | comment | String | 允许 | 备注 |
| 44 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IBZProStorySearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| -- | -- | -- | -- | -- |
| 44 | n_title_like | String | 允许 | 条件字段：title<br>条件组合方式：`%like%` |
| 45 | n_module_eq | Long | 允许 | 条件字段：module<br>条件组合方式：`=` |
| 46 | n_product_eq | Long | 允许 | 条件字段：product<br>条件组合方式：`=` |
| 47 | n_ibiz_id_eq | String | 允许 | 条件字段：ibiz_id<br>条件组合方式：`=` |
| 48 | n_source_eq | String | 允许 | 条件字段：source<br>条件组合方式：`=` |
| 49 | n_sourcenote_eq | String | 允许 | 条件字段：sourcenote<br>条件组合方式：`=` |
| 50 | n_ibiz_sourceobject_eq | String | 允许 | 条件字段：ibiz_sourceobject<br>条件组合方式：`=` |
| 51 | n_status_eq | String | 允许 | 条件字段：status<br>条件组合方式：`=` |
| 52 | n_type_eq | String | 允许 | 条件字段：type<br>条件组合方式：`=` |
| 53 | n_stage_eq | String | 允许 | 条件字段：stage<br>条件组合方式：`=` |
| 54 | n_pri_eq | Integer | 允许 | 条件字段：pri<br>条件组合方式：`=` |
| 55 | n_color_eq | String | 允许 | 条件字段：color<br>条件组合方式：`=` |
| 56 | n_stagedby_eq | String | 允许 | 条件字段：stagedby<br>条件组合方式：`=` |
| 57 | customcond | String | 允许 | 自定义查询条件 |
| 58 | customparams | String | 允许 | 自定义查询参数 |
| 59 | query | String | 允许 | 快速搜索 |
| 60 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 61 | page | int | 允许 | 当前页数<br>默认值0 |
| 62 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 63 | sort | String | 允许 | 排序 |
