# 服务接口-IBZ_PLANTEMPLET
## 接口说明
计划模板

## 接口清单
### 新建计划模板
#### 访问路径
/ibzplantemplets

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdto | [IbzPlanTempletDTO](#IbzPlanTempletDTO) | 计划模板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzPlanTempletDTO](#IbzPlanTempletDTO)：计划模板实体传输对象 |

### 批量新建计划模板
#### 访问路径
/ibzplantemplets/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdtos | List<[IbzPlanTempletDTO](#IbzPlanTempletDTO)> | 计划模板实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新计划模板
#### 访问路径
/ibzplantemplets/{ibzplantemplet_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantemplet_id | String | 计划模板主键ID |
| 2 | ibzplantempletdto | [IbzPlanTempletDTO](#IbzPlanTempletDTO) | 计划模板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzPlanTempletDTO](#IbzPlanTempletDTO)：计划模板实体传输对象 |

### 批量更新计划模板
#### 访问路径
/ibzplantemplets/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdtos | List<[IbzPlanTempletDTO](#IbzPlanTempletDTO)> | 计划模板实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除计划模板
#### 访问路径
/ibzplantemplets/{ibzplantemplet_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantemplet_id | String | 计划模板主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除计划模板
#### 访问路径
/ibzplantemplets/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<String> | 计划模板主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取计划模板
#### 访问路径
/ibzplantemplets/{ibzplantemplet_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantemplet_id | String | 计划模板主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzPlanTempletDTO](#IbzPlanTempletDTO)：计划模板实体传输对象 |

### 检查计划模板
#### 访问路径
/ibzplantemplets/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdto | [IbzPlanTempletDTO](#IbzPlanTempletDTO) | 计划模板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取计划
#### 访问路径
/ibzplantemplets/{ibzplantemplet_id}/getplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantemplet_id | String | 计划模板主键ID |
| 2 | ibzplantempletdto | [IbzPlanTempletDTO](#IbzPlanTempletDTO) | 计划模板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzPlanTempletDTO](#IbzPlanTempletDTO)：计划模板实体传输对象 |

### 保存计划模板
#### 访问路径
/ibzplantemplets/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdto | [IbzPlanTempletDTO](#IbzPlanTempletDTO) | 计划模板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存计划模板
#### 访问路径
/ibzplantemplets/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdtos | List<[IbzPlanTempletDTO](#IbzPlanTempletDTO)> | 计划模板实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取CurUserTemplet
#### 访问路径
/ibzplantemplets/fetchcurusertemplet

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzPlanTempletSearchContext](#IbzPlanTempletSearchContext) | 计划模板查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzPlanTempletDTO](#IbzPlanTempletDTO)>：计划模板实体传输对象列表 |

### 查询CurUserTemplet
#### 访问路径
/ibzplantemplets/searchcurusertemplet

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzPlanTempletSearchContext](#IbzPlanTempletSearchContext) | 计划模板查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzPlanTempletDTO](#IbzPlanTempletDTO)>：计划模板实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取数据集
#### 访问路径
/ibzplantemplets/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzPlanTempletSearchContext](#IbzPlanTempletSearchContext) | 计划模板查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzPlanTempletDTO](#IbzPlanTempletDTO)>：计划模板实体传输对象列表 |

### 查询数据集
#### 访问路径
/ibzplantemplets/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzPlanTempletSearchContext](#IbzPlanTempletSearchContext) | 计划模板查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzPlanTempletDTO](#IbzPlanTempletDTO)>：计划模板实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

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
| 9 | acl | String | 允许 | 权限 |
| 10 | createmanname | String | 允许 | 创建人姓名 |
| 11 | plantempletdetails | List<[PlanTempletDetailDTO}](#PlanTempletDetailDTO})> | 允许 | 计划模板详情 |
| 12 | <动态属性> | Object | 允许 | 支持动态属性 |

#### PlanTempletDetailDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | ibzplantempletdetailid | String | 不可 | 计划模板详情标识 |
| 2 | ibzplantempletdetailname | String | 允许 | 计划模板详情名称 |
| 3 | createman | String | 不可 | 建立人 |
| 4 | createdate | Timestamp | 不可 | 建立时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 5 | updateman | String | 不可 | 更新人 |
| 6 | updatedate | Timestamp | 不可 | 更新时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 7 | plantempletid | String | 允许 | 产品计划模板标识 |
| 8 | plancode | String | 允许 | 计划编号 |
| 9 | order | Integer | 允许 | 排序 |
| 10 | desc | String | 允许 | 计划名称 |
| 11 | expect | String | 允许 | 描述 |
| 12 | type | String | 允许 | 类型 |
| 13 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IbzPlanTempletSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_ibz_plantempletname_like | String | 允许 | 条件字段：ibz_plantempletname<br>条件组合方式：`%like%` |
| 2 | n_acl_eq | String | 允许 | 条件字段：acl<br>条件组合方式：`=` |
| 3 | n_createmanname_eq | String | 允许 | 条件字段：createmanname<br>条件组合方式：`=` |
| 4 | customcond | String | 允许 | 自定义查询条件 |
| 5 | customparams | String | 允许 | 自定义查询参数 |
| 6 | query | String | 允许 | 快速搜索 |
| 7 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 8 | page | int | 允许 | 当前页数<br>默认值0 |
| 9 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 10 | sort | String | 允许 | 排序 |
