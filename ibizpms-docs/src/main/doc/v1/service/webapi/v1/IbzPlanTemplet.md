# 服务接口-IBZ_PLANTEMPLET
## 接口说明
产品计划模板

## 接口清单
### 新建产品计划模板
#### 访问路径
/ibzplantemplets

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdto | [IbzPlanTempletDTO](#IbzPlanTempletDTO) | 产品计划模板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzPlanTempletDTO](#IbzPlanTempletDTO)：产品计划模板实体传输对象 |

### 批量新建产品计划模板
#### 访问路径
/ibzplantemplets/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdtos | List<[IbzPlanTempletDTO](#IbzPlanTempletDTO)> | 产品计划模板实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新产品计划模板
#### 访问路径
/ibzplantemplets/{ibzplantemplet_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantemplet_id | String | 产品计划模板主键ID |
| 2 | ibzplantempletdto | [IbzPlanTempletDTO](#IbzPlanTempletDTO) | 产品计划模板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzPlanTempletDTO](#IbzPlanTempletDTO)：产品计划模板实体传输对象 |

### 批量更新产品计划模板
#### 访问路径
/ibzplantemplets/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdtos | List<[IbzPlanTempletDTO](#IbzPlanTempletDTO)> | 产品计划模板实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除产品计划模板
#### 访问路径
/ibzplantemplets/{ibzplantemplet_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantemplet_id | String | 产品计划模板主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除产品计划模板
#### 访问路径
/ibzplantemplets/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<String> | 产品计划模板主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取产品计划模板
#### 访问路径
/ibzplantemplets/{ibzplantemplet_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantemplet_id | String | 产品计划模板主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzPlanTempletDTO](#IbzPlanTempletDTO)：产品计划模板实体传输对象 |

### 检查产品计划模板
#### 访问路径
/ibzplantemplets/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdto | [IbzPlanTempletDTO](#IbzPlanTempletDTO) | 产品计划模板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存产品计划模板
#### 访问路径
/ibzplantemplets/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdto | [IbzPlanTempletDTO](#IbzPlanTempletDTO) | 产品计划模板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存产品计划模板
#### 访问路径
/ibzplantemplets/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdtos | List<[IbzPlanTempletDTO](#IbzPlanTempletDTO)> | 产品计划模板实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取数据集
#### 访问路径
/ibzplantemplets/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzPlanTempletSearchContext](#IbzPlanTempletSearchContext) | 产品计划模板查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzPlanTempletDTO](#IbzPlanTempletDTO)>：产品计划模板实体传输对象列表 |

### 查询数据集
#### 访问路径
/ibzplantemplets/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzPlanTempletSearchContext](#IbzPlanTempletSearchContext) | 产品计划模板查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzPlanTempletDTO](#IbzPlanTempletDTO)>：产品计划模板实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### IbzPlanTempletDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | ibzplantempletid | String | 不可 | 产品计划模板标识 |
| 2 | ibzplantempletname | String | 允许 | 模板名称 |
| 3 | createman | String | 不可 | 建立人 |
| 4 | createdate | Timestamp | 不可 | 建立时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 5 | updateman | String | 不可 | 更新人 |
| 6 | updatedate | Timestamp | 不可 | 更新时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 7 | plans | String | 允许 | 计划 |
| 8 | product | Long | 允许 | 产品 |
| 9 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IbzPlanTempletSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_ibz_plantempletname_like | String | 允许 | 条件字段：ibz_plantempletname<br>条件组合方式：`%like%` |
| 2 | customcond | String | 允许 | 自定义查询条件 |
| 3 | customparams | String | 允许 | 自定义查询参数 |
| 4 | query | String | 允许 | 快速搜索 |
| 5 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 6 | page | int | 允许 | 当前页数<br>默认值0 |
| 7 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 8 | sort | String | 允许 | 排序 |
