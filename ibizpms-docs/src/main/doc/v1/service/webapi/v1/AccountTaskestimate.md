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
| 返回类型 | List<[AccountTaskestimateDTO](#AccountTaskestimateDTO)>：用户工时统计实体传输对象列表 |

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
| 返回类型 | Page<[AccountTaskestimateDTO](#AccountTaskestimateDTO)>：用户工时统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

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
| 12 | thirtyoneevaluationtime | Double | 允许 | 三十一号评估工时 |
| 13 | thirtyevaluationtime | Double | 允许 | 三十号评估工时 |
| 14 | twentyeightevaluationtime | Double | 允许 | 二十八号评估工时 |
| 15 | twentynineevaluationtime | Double | 允许 | 二十九号评估工时 |
| 16 | twentysevenevaluationtime | Double | 允许 | 二十七号评估工时 |
| 17 | twentysixevaluationtime | Double | 允许 | 二十六号评估工时 |
| 18 | twentyfiveevaluationtime | Double | 允许 | 二十五号评估工时 |
| 19 | twentyfourevaluationtime | Double | 允许 | 二十四号评估工时 |
| 20 | twentythreeevaluationtime | Double | 允许 | 二十三号评估工时 |
| 21 | twentytwoevaluationtime | Double | 允许 | 二十二号评估工时 |
| 22 | nineteenevaluationtime | Double | 允许 | 十九号评估工时 |
| 23 | twentyoneevaluationtime | Double | 允许 | 二十一号评估工时 |
| 24 | twentyevaluationtime | Double | 允许 | 二十号评估工时 |
| 25 | seventeenevaluationtime | Double | 允许 | 十七号评估工时 |
| 26 | eighteenevaluationtime | Double | 允许 | 十八号评估工时 |
| 27 | sixteenevaluationtime | Double | 允许 | 十六号评估工时 |
| 28 | fifteenevaluationtime | Double | 允许 | 十五号评估工时 |
| 29 | fourteenevaluationtime | Double | 允许 | 十四号评估工时 |
| 30 | thirteenevaluationtime | Double | 允许 | 十三号评估工时 |
| 31 | elevenevaluationtime | Double | 允许 | 十一号评估工时 |
| 32 | nineevaluationtime | Double | 允许 | 九号评估工时 |
| 33 | twelveevaluationtime | Double | 允许 | 十二号评估工时 |
| 34 | sevenevaluationtime | Double | 允许 | 七号评估工时 |
| 35 | tenevaluationtime | Double | 允许 | 十号评估工时 |
| 36 | sixevaluationtime | Double | 允许 | 六号评估工时 |
| 37 | eightevaluationtime | Double | 允许 | 八号评估工时 |
| 38 | fiveevaluationtime | Double | 允许 | 五号评估工时 |
| 39 | oneevaluationtime | Double | 允许 | 一号评估工时 |
| 40 | threeevaluationtime | Double | 允许 | 三号评估工时 |
| 41 | fourevaluationtime | Double | 允许 | 四号评估工时 |
| 42 | twoconsumed | Double | 允许 | 二号工时 |
| 43 | twoevaluationtime | Double | 允许 | 二号评估工时 |
| 44 | oneconsumed | Double | 允许 | 一号工时 |
| 45 | fourconsumed | Double | 允许 | 四号工时 |
| 46 | fiveconsumed | Double | 允许 | 五号工时 |
| 47 | threeconsumed | Double | 允许 | 三号工时 |
| 48 | sevenconsumed | Double | 允许 | 七号工时 |
| 49 | nineconsumed | Double | 允许 | 九号工时 |
| 50 | sixconsumed | Double | 允许 | 六号工时 |
| 51 | tenconsumed | Double | 允许 | 十号工时 |
| 52 | eightconsumed | Double | 允许 | 八号工时 |
| 53 | thirteenconsumed | Double | 允许 | 十三号工时 |
| 54 | elevenconsumed | Double | 允许 | 十一号工时 |
| 55 | fourteenconsumed | Double | 允许 | 十四号工时 |
| 56 | twelveconsumed | Double | 允许 | 十二号工时 |
| 57 | seventeenconsumed | Double | 允许 | 十七号工时 |
| 58 | fifteenconsumed | Double | 允许 | 十五号工时 |
| 59 | eighteenconsumed | Double | 允许 | 十八号工时 |
| 60 | sixteenconsumed | Double | 允许 | 十六号工时 |
| 61 | twentyconsumed | Double | 允许 | 二十号工时 |
| 62 | twentytwoconsumed | Double | 允许 | 二十二号工时 |
| 63 | nineteenconsumed | Double | 允许 | 十九号工时 |
| 64 | twentyoneconsumed | Double | 允许 | 二十一号工时 |
| 65 | twentythreeconsumed | Double | 允许 | 二十三号工时 |
| 66 | twentyfourconsumed | Double | 允许 | 二十四号工时 |
| 67 | twentysixconsumed | Double | 允许 | 二十六号工时 |
| 68 | twentynineconsumed | Double | 允许 | 二十九号工时 |
| 69 | twentysevenconsumed | Double | 允许 | 二十七号工时 |
| 70 | twentyfiveconsumed | Double | 允许 | 二十五号工时 |
| 71 | twentyeightconsumed | Double | 允许 | 二十八号工时 |
| 72 | thirtyoneconsumed | Double | 允许 | 三十一号工时 |
| 73 | thirtyconsumed | Double | 允许 | 三十号工时 |
| 74 | thirtyevaluationcost | Double | 允许 | 三十号评估成本 |
| 75 | thirtyoneevaluationcost | Double | 允许 | 三十一号评估成本 |
| 76 | twentysevenevaluationcost | Double | 允许 | 二十七号评估成本 |
| 77 | twentynineevaluationcost | Double | 允许 | 二十九号评估成本 |
| 78 | twentyeightevaluationcost | Double | 允许 | 二十八号评估成本 |
| 79 | twentysixevaluationcost | Double | 允许 | 二十六号评估成本 |
| 80 | twentythreeevaluationcost | Double | 允许 | 二十三号评估成本 |
| 81 | twentyfourevaluationcost | Double | 允许 | 二十四号评估成本 |
| 82 | twentytwoevaluationcost | Double | 允许 | 二十二号评估成本 |
| 83 | twentyfiveevaluationcost | Double | 允许 | 二十五号评估成本 |
| 84 | nineteenevaluationcost | Double | 允许 | 十九号评估成本 |
| 85 | twentyoneevaluationcost | Double | 允许 | 二十一号评估成本 |
| 86 | twentyevaluationcost | Double | 允许 | 二十号评估成本 |
| 87 | eighteenevaluationcost | Double | 允许 | 十八号评估成本 |
| 88 | seventeenevaluationcost | Double | 允许 | 十七号评估成本 |
| 89 | fifteenevaluationcost | Double | 允许 | 十五号评估成本 |
| 90 | sixteenevaluationcost | Double | 允许 | 十六号评估成本 |
| 91 | fourteenevaluationcost | Double | 允许 | 十四号评估成本 |
| 92 | thirteenevaluationcost | Double | 允许 | 十三号评估成本 |
| 93 | tenevaluationcost | Double | 允许 | 十号评估成本 |
| 94 | twelveevaluationcost | Double | 允许 | 十二号评估成本 |
| 95 | elevenevaluationcost | Double | 允许 | 十一号评估成本 |
| 96 | nineevaluationcost | Double | 允许 | 九号评估成本 |
| 97 | sixevaluationcost | Double | 允许 | 六号评估成本 |
| 98 | sevenevaluationcost | Double | 允许 | 七号评估成本 |
| 99 | fiveevaluationcost | Double | 允许 | 五号评估成本 |
| 100 | eightevaluationcost | Double | 允许 | 八号评估成本 |
| 101 | fourevaluationcost | Double | 允许 | 四号评估成本 |
| 102 | threeevaluationcost | Double | 允许 | 三号评估成本 |
| 103 | twoevaluationcost | Double | 允许 | 二号评估成本 |
| 104 | oneevaluationcost | Double | 允许 | 一号评估成本 |
| 105 | <动态属性> | Object | 允许 | 支持动态属性 |

#### AccountTaskestimateSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_project_in | Long | 允许 | 条件字段：project<br>条件组合方式：`in(...)` |
| 2 | n_year_eq | String | 允许 | 条件字段：year<br>条件组合方式：`=` |
| 3 | n_month_eq | String | 允许 | 条件字段：month<br>条件组合方式：`=` |
| 4 | n_account_eq | String | 允许 | 条件字段：account<br>条件组合方式：`=` |
| 5 | n_date_eq | Timestamp | 允许 | 条件字段：date<br>条件组合方式：`=`<br>时间格式：yyyy-MM-dd |
| 6 | customcond | String | 允许 | 自定义查询条件 |
| 7 | customparams | String | 允许 | 自定义查询参数 |
| 8 | query | String | 允许 | 快速搜索 |
| 9 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 10 | page | int | 允许 | 当前页数<br>默认值0 |
| 11 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 12 | sort | String | 允许 | 排序 |
