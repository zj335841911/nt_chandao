# 服务接口-PROJECTTASKESTIMATE
## 接口说明
项目工时统计

## 接口清单
### 新建项目工时统计
#### 访问路径
/projecttaskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projecttaskestimatedto | [ProjectTaskestimateDTO](#ProjectTaskestimateDTO) | 项目工时统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProjectTaskestimateDTO](#ProjectTaskestimateDTO)：项目工时统计实体传输对象 |

### 批量新建项目工时统计
#### 访问路径
/projecttaskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projecttaskestimatedtos | List<[ProjectTaskestimateDTO](#ProjectTaskestimateDTO)> | 项目工时统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新项目工时统计
#### 访问路径
/projecttaskestimates/{projecttaskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projecttaskestimate_id | String | 项目工时统计主键ID |
| 2 | projecttaskestimatedto | [ProjectTaskestimateDTO](#ProjectTaskestimateDTO) | 项目工时统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProjectTaskestimateDTO](#ProjectTaskestimateDTO)：项目工时统计实体传输对象 |

### 批量更新项目工时统计
#### 访问路径
/projecttaskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projecttaskestimatedtos | List<[ProjectTaskestimateDTO](#ProjectTaskestimateDTO)> | 项目工时统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除项目工时统计
#### 访问路径
/projecttaskestimates/{projecttaskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projecttaskestimate_id | String | 项目工时统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除项目工时统计
#### 访问路径
/projecttaskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<String> | 项目工时统计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取项目工时统计
#### 访问路径
/projecttaskestimates/{projecttaskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projecttaskestimate_id | String | 项目工时统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProjectTaskestimateDTO](#ProjectTaskestimateDTO)：项目工时统计实体传输对象 |

### 检查项目工时统计
#### 访问路径
/projecttaskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projecttaskestimatedto | [ProjectTaskestimateDTO](#ProjectTaskestimateDTO) | 项目工时统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存项目工时统计
#### 访问路径
/projecttaskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projecttaskestimatedto | [ProjectTaskestimateDTO](#ProjectTaskestimateDTO) | 项目工时统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存项目工时统计
#### 访问路径
/projecttaskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projecttaskestimatedtos | List<[ProjectTaskestimateDTO](#ProjectTaskestimateDTO)> | 项目工时统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取数据集
#### 访问路径
/projecttaskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectTaskestimateSearchContext](#ProjectTaskestimateSearchContext) | 项目工时统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectTaskestimateDTO](#ProjectTaskestimateDTO)>：项目工时统计实体传输对象列表 |

### 查询数据集
#### 访问路径
/projecttaskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectTaskestimateSearchContext](#ProjectTaskestimateSearchContext) | 项目工时统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectTaskestimateDTO](#ProjectTaskestimateDTO)>：项目工时统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### ProjectTaskestimateDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | projectname | String | 允许 | 项目名称 |
| 2 | evaluationtime | Double | 允许 | 评估工时 |
| 3 | month | String | 允许 | 月 |
| 4 | date | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 5 | evaluationcost | Double | 允许 | 评估成本 |
| 6 | inputcost | Double | 允许 | 投入成本 |
| 7 | consumed | Double | 允许 | 工时 |
| 8 | id | String | 允许 | 主键 |
| 9 | project | Long | 允许 | 项目标识 |
| 10 | year | String | 允许 | 年 |
| 11 | account | String | 允许 | 用户 |
| 12 | otherconsumed | Double | 允许 | 其他项目工时 |
| 13 | otherevaluationtime | Double | 允许 | 其他项目评估工时 |
| 14 | <动态属性> | Object | 允许 | 支持动态属性 |

#### ProjectTaskestimateSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_month_eq | String | 允许 | 条件字段：month<br>条件组合方式：`=` |
| 2 | n_year_eq | String | 允许 | 条件字段：year<br>条件组合方式：`=` |
| 3 | customcond | String | 允许 | 自定义查询条件 |
| 4 | customparams | String | 允许 | 自定义查询参数 |
| 5 | query | String | 允许 | 快速搜索 |
| 6 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 7 | page | int | 允许 | 当前页数<br>默认值0 |
| 8 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 9 | sort | String | 允许 | 排序 |
