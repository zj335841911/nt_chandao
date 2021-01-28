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

### 获取用户月工时详情
#### 访问路径
/projecttaskestimates/fetchaccountdetail

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

### 查询用户月工时详情
#### 访问路径
/projecttaskestimates/searchaccountdetail

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
| 14 | oneevaluationcost | Double | 允许 | 一号评估成本 |
| 15 | twoevaluationcost | Double | 允许 | 二号评估成本 |
| 16 | threeevaluationcost | Double | 允许 | 三号评估成本 |
| 17 | fourevaluationcost | Double | 允许 | 四号评估成本 |
| 18 | sixevaluationcost | Double | 允许 | 六号评估成本 |
| 19 | fiveevaluationcost | Double | 允许 | 五号评估成本 |
| 20 | eightevaluationcost | Double | 允许 | 八号评估成本 |
| 21 | sevenevaluationcost | Double | 允许 | 七号评估成本 |
| 22 | nineevaluationcost | Double | 允许 | 九号评估成本 |
| 23 | elevenevaluationcost | Double | 允许 | 十一号评估成本 |
| 24 | twelveevaluationcost | Double | 允许 | 十二号评估成本 |
| 25 | thirteenevaluationcost | Double | 允许 | 十三号评估成本 |
| 26 | tenevaluationcost | Double | 允许 | 十号评估成本 |
| 27 | fourteenevaluationcost | Double | 允许 | 十四号评估成本 |
| 28 | fifteenevaluationcost | Double | 允许 | 十五号评估成本 |
| 29 | sixteenevaluationcost | Double | 允许 | 十六号评估成本 |
| 30 | eighteenevaluationcost | Double | 允许 | 十八号评估成本 |
| 31 | seventeenevaluationcost | Double | 允许 | 十七号评估成本 |
| 32 | twentyevaluationcost | Double | 允许 | 二十号评估成本 |
| 33 | nineteenevaluationcost | Double | 允许 | 十九号评估成本 |
| 34 | twentyoneevaluationcost | Double | 允许 | 二十一号评估成本 |
| 35 | twentytwoevaluationcost | Double | 允许 | 二十二号评估成本 |
| 36 | twentyfourevaluationcost | Double | 允许 | 二十四号评估成本 |
| 37 | twentythreeevaluationcost | Double | 允许 | 二十三号评估成本 |
| 38 | twentyfiveevaluationcost | Double | 允许 | 二十五号评估成本 |
| 39 | twentysixevaluationcost | Double | 允许 | 二十六号评估成本 |
| 40 | twentyeightevaluationcost | Double | 允许 | 二十八号评估成本 |
| 41 | twentynineevaluationcost | Double | 允许 | 二十九号评估成本 |
| 42 | twentysevenevaluationcost | Double | 允许 | 二十七号评估成本 |
| 43 | thirtyevaluationcost | Double | 允许 | 三十号评估成本 |
| 44 | thirtyoneevaluationcost | Double | 允许 | 三十一号评估成本 |
| 45 | thirtyconsumed | Double | 允许 | 三十号工时 |
| 46 | thirtyoneconsumed | Double | 允许 | 三十一号工时 |
| 47 | twentyeightconsumed | Double | 允许 | 二十八号工时 |
| 48 | twentynineconsumed | Double | 允许 | 二十九号工时 |
| 49 | twentyfiveconsumed | Double | 允许 | 二十五号工时 |
| 50 | twentysevenconsumed | Double | 允许 | 二十七号工时 |
| 51 | twentysixconsumed | Double | 允许 | 二十六号工时 |
| 52 | twentyfourconsumed | Double | 允许 | 二十四号工时 |
| 53 | twentythreeconsumed | Double | 允许 | 二十三号工时 |
| 54 | twentyoneconsumed | Double | 允许 | 二十一号工时 |
| 55 | twentytwoconsumed | Double | 允许 | 二十二号工时 |
| 56 | twentyconsumed | Double | 允许 | 二十号工时 |
| 57 | nineteenconsumed | Double | 允许 | 十九号工时 |
| 58 | seventeenconsumed | Double | 允许 | 十七号工时 |
| 59 | sixteenconsumed | Double | 允许 | 十六号工时 |
| 60 | eighteenconsumed | Double | 允许 | 十八号工时 |
| 61 | fourteenconsumed | Double | 允许 | 十四号工时 |
| 62 | fifteenconsumed | Double | 允许 | 十五号工时 |
| 63 | thirteenconsumed | Double | 允许 | 十三号工时 |
| 64 | twelveconsumed | Double | 允许 | 十二号工时 |
| 65 | elevenconsumed | Double | 允许 | 十一号工时 |
| 66 | tenconsumed | Double | 允许 | 十号工时 |
| 67 | eightconsumed | Double | 允许 | 八号工时 |
| 68 | nineconsumed | Double | 允许 | 九号工时 |
| 69 | sevenconsumed | Double | 允许 | 七号工时 |
| 70 | sixconsumed | Double | 允许 | 六号工时 |
| 71 | fiveconsumed | Double | 允许 | 五号工时 |
| 72 | threeconsumed | Double | 允许 | 三号工时 |
| 73 | fourconsumed | Double | 允许 | 四号工时 |
| 74 | twoconsumed | Double | 允许 | 二号工时 |
| 75 | oneconsumed | Double | 允许 | 一号工时 |
| 76 | twoevaluationtime | Double | 允许 | 二号评估工时 |
| 77 | fourevaluationtime | Double | 允许 | 四号评估工时 |
| 78 | oneevaluationtime | Double | 允许 | 一号评估工时 |
| 79 | threeevaluationtime | Double | 允许 | 三号评估工时 |
| 80 | eightevaluationtime | Double | 允许 | 八号评估工时 |
| 81 | sixevaluationtime | Double | 允许 | 六号评估工时 |
| 82 | fiveevaluationtime | Double | 允许 | 五号评估工时 |
| 83 | tenevaluationtime | Double | 允许 | 十号评估工时 |
| 84 | sevenevaluationtime | Double | 允许 | 七号评估工时 |
| 85 | nineevaluationtime | Double | 允许 | 九号评估工时 |
| 86 | elevenevaluationtime | Double | 允许 | 十一号评估工时 |
| 87 | fourteenevaluationtime | Double | 允许 | 十四号评估工时 |
| 88 | twelveevaluationtime | Double | 允许 | 十二号评估工时 |
| 89 | fifteenevaluationtime | Double | 允许 | 十五号评估工时 |
| 90 | thirteenevaluationtime | Double | 允许 | 十三号评估工时 |
| 91 | eighteenevaluationtime | Double | 允许 | 十八号评估工时 |
| 92 | sixteenevaluationtime | Double | 允许 | 十六号评估工时 |
| 93 | twentyevaluationtime | Double | 允许 | 二十号评估工时 |
| 94 | seventeenevaluationtime | Double | 允许 | 十七号评估工时 |
| 95 | nineteenevaluationtime | Double | 允许 | 十九号评估工时 |
| 96 | twentyoneevaluationtime | Double | 允许 | 二十一号评估工时 |
| 97 | twentytwoevaluationtime | Double | 允许 | 二十二号评估工时 |
| 98 | twentythreeevaluationtime | Double | 允许 | 二十三号评估工时 |
| 99 | twentyfiveevaluationtime | Double | 允许 | 二十五号评估工时 |
| 100 | twentyfourevaluationtime | Double | 允许 | 二十四号评估工时 |
| 101 | twentysixevaluationtime | Double | 允许 | 二十六号评估工时 |
| 102 | twentynineevaluationtime | Double | 允许 | 二十九号评估工时 |
| 103 | twentysevenevaluationtime | Double | 允许 | 二十七号评估工时 |
| 104 | thirtyevaluationtime | Double | 允许 | 三十号评估工时 |
| 105 | twentyeightevaluationtime | Double | 允许 | 二十八号评估工时 |
| 106 | thirtyoneevaluationtime | Double | 允许 | 三十一号评估工时 |
| 107 | <动态属性> | Object | 允许 | 支持动态属性 |

#### ProjectTaskestimateSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_month_eq | String | 允许 | 条件字段：month<br>条件组合方式：`=` |
| 2 | n_date_eq | Timestamp | 允许 | 条件字段：date<br>条件组合方式：`=`<br>时间格式：yyyy-MM-dd |
| 3 | n_project_in | Long | 允许 | 条件字段：project<br>条件组合方式：`in(...)` |
| 4 | n_year_eq | String | 允许 | 条件字段：year<br>条件组合方式：`=` |
| 5 | n_account_eq | String | 允许 | 条件字段：account<br>条件组合方式：`=` |
| 6 | customcond | String | 允许 | 自定义查询条件 |
| 7 | customparams | String | 允许 | 自定义查询参数 |
| 8 | query | String | 允许 | 快速搜索 |
| 9 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 10 | page | int | 允许 | 当前页数<br>默认值0 |
| 11 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 12 | sort | String | 允许 | 排序 |
