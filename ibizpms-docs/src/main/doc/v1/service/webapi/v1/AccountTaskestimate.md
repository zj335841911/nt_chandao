# 服务接口-ACCOUNTTASKESTIMATE
## 接口说明
用户工时统计

## 接口清单
### 新建用户工时统计
#### 访问路径
/accounttaskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | accounttaskestimatedto | [AccountTaskestimateDTO](#AccountTaskestimateDTO) | 用户工时统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [AccountTaskestimateDTO](#AccountTaskestimateDTO)：用户工时统计实体传输对象 |

### 批量新建用户工时统计
#### 访问路径
/accounttaskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | accounttaskestimatedtos | List<[AccountTaskestimateDTO](#AccountTaskestimateDTO)> | 用户工时统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新用户工时统计
#### 访问路径
/accounttaskestimates/{accounttaskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | accounttaskestimate_id | String | 用户工时统计主键ID |
| 2 | accounttaskestimatedto | [AccountTaskestimateDTO](#AccountTaskestimateDTO) | 用户工时统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [AccountTaskestimateDTO](#AccountTaskestimateDTO)：用户工时统计实体传输对象 |

### 批量更新用户工时统计
#### 访问路径
/accounttaskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | accounttaskestimatedtos | List<[AccountTaskestimateDTO](#AccountTaskestimateDTO)> | 用户工时统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除用户工时统计
#### 访问路径
/accounttaskestimates/{accounttaskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | accounttaskestimate_id | String | 用户工时统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除用户工时统计
#### 访问路径
/accounttaskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<String> | 用户工时统计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取用户工时统计
#### 访问路径
/accounttaskestimates/{accounttaskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | accounttaskestimate_id | String | 用户工时统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [AccountTaskestimateDTO](#AccountTaskestimateDTO)：用户工时统计实体传输对象 |

### 检查用户工时统计
#### 访问路径
/accounttaskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | accounttaskestimatedto | [AccountTaskestimateDTO](#AccountTaskestimateDTO) | 用户工时统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存用户工时统计
#### 访问路径
/accounttaskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | accounttaskestimatedto | [AccountTaskestimateDTO](#AccountTaskestimateDTO) | 用户工时统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存用户工时统计
#### 访问路径
/accounttaskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | accounttaskestimatedtos | List<[AccountTaskestimateDTO](#AccountTaskestimateDTO)> | 用户工时统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取所有用户工时
#### 访问路径
/accounttaskestimates/fetchallaccountestimate

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [AccountTaskestimateSearchContext](#AccountTaskestimateSearchContext) | 用户工时统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<HashMap>：结果集Map列表 |

### 查询所有用户工时
#### 访问路径
/accounttaskestimates/searchallaccountestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [AccountTaskestimateSearchContext](#AccountTaskestimateSearchContext) | 用户工时统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<HashMap>：结果集Map分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取数据集
#### 访问路径
/accounttaskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [AccountTaskestimateSearchContext](#AccountTaskestimateSearchContext) | 用户工时统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[AccountTaskestimateDTO](#AccountTaskestimateDTO)>：用户工时统计实体传输对象列表 |

### 查询数据集
#### 访问路径
/accounttaskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [AccountTaskestimateSearchContext](#AccountTaskestimateSearchContext) | 用户工时统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[AccountTaskestimateDTO](#AccountTaskestimateDTO)>：用户工时统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### AccountTaskestimateDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | id | String | 允许 | 主键 |
| 2 | project | Long | 允许 | 项目标识 |
| 3 | projectname | String | 允许 | 项目名称 |
| 4 | year | String | 允许 | 年 |
| 5 | month | String | 允许 | 月 |
| 6 | account | String | 允许 | 用户 |
| 7 | date | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 8 | consumed | Double | 允许 | 工时 |
| 9 | evaluationcost | Double | 允许 | 评估成本 |
| 10 | inputcost | Double | 允许 | 投入成本 |
| 11 | evaluationtime | Double | 允许 | 评估工时 |
| 12 | <动态属性> | Object | 允许 | 支持动态属性 |

#### AccountTaskestimateSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_project_in | Long | 允许 | 条件字段：project<br>条件组合方式：`in(...)` |
| 2 | n_year_eq | String | 允许 | 条件字段：year<br>条件组合方式：`=` |
| 3 | n_month_eq | String | 允许 | 条件字段：month<br>条件组合方式：`=` |
| 4 | n_account_eq | String | 允许 | 条件字段：account<br>条件组合方式：`=` |
| 5 | customcond | String | 允许 | 自定义查询条件 |
| 6 | customparams | String | 允许 | 自定义查询参数 |
| 7 | query | String | 允许 | 快速搜索 |
| 8 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 9 | page | int | 允许 | 当前页数<br>默认值0 |
| 10 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 11 | sort | String | 允许 | 排序 |
