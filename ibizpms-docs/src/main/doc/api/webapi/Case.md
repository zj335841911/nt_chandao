# 服务接口-ZT_CASE
## 接口说明
测试用例

## 接口清单
### 新建测试用例
#### 访问路径
/cases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | casedto | [CaseDTO](#CaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建测试用例
#### 访问路径
/cases/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 更新测试用例
#### 访问路径
/cases/{case_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新测试用例
#### 访问路径
/cases/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 删除测试用例
#### 访问路径
/cases/{case_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量删除测试用例
#### 访问路径
/cases/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<Long> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试用例
#### 访问路径
/cases/{case_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 行为
#### 访问路径
/cases/{case_id}/casefavorite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### CaseNFavorite
#### 访问路径
/cases/{case_id}/casenfavorite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查测试用例
#### 访问路径
/cases/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | casedto | [CaseDTO](#CaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认用例变更
#### 访问路径
/cases/{case_id}/confirmchange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认需求变更
#### 访问路径
/cases/{case_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取或者状态
#### 访问路径
/cases/{case_id}/getbytesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 测试单关联测试用例
#### 访问路径
/cases/{case_id}/linkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 执行测试
#### 访问路径
/cases/{case_id}/runcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### runCases
#### 访问路径
/cases/{case_id}/runcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存测试用例
#### 访问路径
/cases/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量保存测试用例
#### 访问路径
/cases/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 执行测试
#### 访问路径
/cases/{case_id}/testruncase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### testRunCases
#### 访问路径
/cases/{case_id}/testruncases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 套件关联
#### 访问路径
/cases/{case_id}/testsuitelinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除用例
#### 访问路径
/cases/{case_id}/unlinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### unlinkCases
#### 访问路径
/cases/{case_id}/unlinkcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除用例
#### 访问路径
/cases/{case_id}/unlinksuitecase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### unlinkSuiteCases
#### 访问路径
/cases/{case_id}/unlinksuitecases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取批量新建用例
#### 访问路径
/cases/fetchbatchnew

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询批量新建用例
#### 访问路径
/cases/searchbatchnew

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取累计创建的用例
#### 访问路径
/cases/fetchcuropenedcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询累计创建的用例
#### 访问路径
/cases/searchcuropenedcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取套件关联用例
#### 访问路径
/cases/fetchcursuite

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询套件关联用例
#### 访问路径
/cases/searchcursuite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试单关联用例
#### 访问路径
/cases/fetchcurtesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试单关联用例
#### 访问路径
/cases/searchcurtesttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取DEFAULT
#### 访问路径
/cases/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询DEFAULT
#### 访问路径
/cases/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试报告关联用例
#### 访问路径
/cases/fetchmodulereportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试报告关联用例
#### 访问路径
/cases/searchmodulereportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试报告关联-按模块-条目
#### 访问路径
/cases/fetchmodulereportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试报告关联-按模块-条目
#### 访问路径
/cases/searchmodulereportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取项目报告关联-按模块
#### 访问路径
/cases/fetchmodulereportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询项目报告关联-按模块
#### 访问路径
/cases/searchmodulereportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取我的收藏
#### 访问路径
/cases/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询我的收藏
#### 访问路径
/cases/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取套件关联用例
#### 访问路径
/cases/fetchnotcurtestsuite

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询套件关联用例
#### 访问路径
/cases/searchnotcurtestsuite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试单关联用例
#### 访问路径
/cases/fetchnotcurtesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试单关联用例
#### 访问路径
/cases/searchnotcurtesttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试报告关联用例
#### 访问路径
/cases/fetchreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试报告关联用例
#### 访问路径
/cases/searchreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试报告关联用例-条目
#### 访问路径
/cases/fetchreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试报告关联用例-条目
#### 访问路径
/cases/searchreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取项目报告关联用例-关联用例
#### 访问路径
/cases/fetchreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询项目报告关联用例-关联用例
#### 访问路径
/cases/searchreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试报告关联-执行人
#### 访问路径
/cases/fetchrunerreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试报告关联-执行人
#### 访问路径
/cases/searchrunerreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试报告关联-执行人-条目
#### 访问路径
/cases/fetchrunerreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试报告关联-执行人-条目
#### 访问路径
/cases/searchrunerreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取项目报告关联-执行人
#### 访问路径
/cases/fetchrunerreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询项目报告关联-执行人
#### 访问路径
/cases/searchrunerreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试报告关联用例
#### 访问路径
/cases/fetchrunreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试报告关联用例
#### 访问路径
/cases/searchrunreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试报告关联--执行结果条目
#### 访问路径
/cases/fetchrunreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试报告关联--执行结果条目
#### 访问路径
/cases/searchrunreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取项目报告关联-执行结果
#### 访问路径
/cases/fetchrunreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询项目报告关联-执行结果
#### 访问路径
/cases/searchrunreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立测试用例
#### 访问路径
/products/{product_id}/cases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | casedto | [CaseDTO](#CaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试用例
#### 访问路径
/products/{product_id}/cases/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据更新测试用例
#### 访问路径
/products/{product_id}/cases/{case_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试用例
#### 访问路径
/products/{product_id}/cases/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据删除测试用例
#### 访问路径
/products/{product_id}/cases/{case_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量删除测试用例
#### 访问路径
/products/{product_id}/cases/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | ids | List<Long> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取测试用例
#### 访问路径
/products/{product_id}/cases/{case_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 行为
#### 访问路径
/products/{product_id}/cases/{case_id}/casefavorite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### CaseNFavorite
#### 访问路径
/products/{product_id}/cases/{case_id}/casenfavorite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试用例
#### 访问路径
/products/{product_id}/cases/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | casedto | [CaseDTO](#CaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认用例变更
#### 访问路径
/products/{product_id}/cases/{case_id}/confirmchange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认需求变更
#### 访问路径
/products/{product_id}/cases/{case_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取或者状态
#### 访问路径
/products/{product_id}/cases/{case_id}/getbytesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 测试单关联测试用例
#### 访问路径
/products/{product_id}/cases/{case_id}/linkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 执行测试
#### 访问路径
/products/{product_id}/cases/{case_id}/runcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### runCases
#### 访问路径
/products/{product_id}/cases/{case_id}/runcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存测试用例
#### 访问路径
/products/{product_id}/cases/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量保存测试用例
#### 访问路径
/products/{product_id}/cases/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 执行测试
#### 访问路径
/products/{product_id}/cases/{case_id}/testruncase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### testRunCases
#### 访问路径
/products/{product_id}/cases/{case_id}/testruncases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 套件关联
#### 访问路径
/products/{product_id}/cases/{case_id}/testsuitelinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除用例
#### 访问路径
/products/{product_id}/cases/{case_id}/unlinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### unlinkCases
#### 访问路径
/products/{product_id}/cases/{case_id}/unlinkcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除用例
#### 访问路径
/products/{product_id}/cases/{case_id}/unlinksuitecase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### unlinkSuiteCases
#### 访问路径
/products/{product_id}/cases/{case_id}/unlinksuitecases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取批量新建用例
#### 访问路径
/products/{product_id}/cases/fetchbatchnew

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询批量新建用例
#### 访问路径
/products/{product_id}/cases/searchbatchnew

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取累计创建的用例
#### 访问路径
/products/{product_id}/cases/fetchcuropenedcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询累计创建的用例
#### 访问路径
/products/{product_id}/cases/searchcuropenedcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取套件关联用例
#### 访问路径
/products/{product_id}/cases/fetchcursuite

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询套件关联用例
#### 访问路径
/products/{product_id}/cases/searchcursuite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试单关联用例
#### 访问路径
/products/{product_id}/cases/fetchcurtesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试单关联用例
#### 访问路径
/products/{product_id}/cases/searchcurtesttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取DEFAULT
#### 访问路径
/products/{product_id}/cases/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询DEFAULT
#### 访问路径
/products/{product_id}/cases/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例
#### 访问路径
/products/{product_id}/cases/fetchmodulereportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例
#### 访问路径
/products/{product_id}/cases/searchmodulereportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联-按模块-条目
#### 访问路径
/products/{product_id}/cases/fetchmodulereportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联-按模块-条目
#### 访问路径
/products/{product_id}/cases/searchmodulereportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联-按模块
#### 访问路径
/products/{product_id}/cases/fetchmodulereportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联-按模块
#### 访问路径
/products/{product_id}/cases/searchmodulereportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取我的收藏
#### 访问路径
/products/{product_id}/cases/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询我的收藏
#### 访问路径
/products/{product_id}/cases/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取套件关联用例
#### 访问路径
/products/{product_id}/cases/fetchnotcurtestsuite

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询套件关联用例
#### 访问路径
/products/{product_id}/cases/searchnotcurtestsuite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试单关联用例
#### 访问路径
/products/{product_id}/cases/fetchnotcurtesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试单关联用例
#### 访问路径
/products/{product_id}/cases/searchnotcurtesttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例
#### 访问路径
/products/{product_id}/cases/fetchreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例
#### 访问路径
/products/{product_id}/cases/searchreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例-条目
#### 访问路径
/products/{product_id}/cases/fetchreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例-条目
#### 访问路径
/products/{product_id}/cases/searchreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联用例-关联用例
#### 访问路径
/products/{product_id}/cases/fetchreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联用例-关联用例
#### 访问路径
/products/{product_id}/cases/searchreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联-执行人
#### 访问路径
/products/{product_id}/cases/fetchrunerreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联-执行人
#### 访问路径
/products/{product_id}/cases/searchrunerreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联-执行人-条目
#### 访问路径
/products/{product_id}/cases/fetchrunerreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联-执行人-条目
#### 访问路径
/products/{product_id}/cases/searchrunerreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联-执行人
#### 访问路径
/products/{product_id}/cases/fetchrunerreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联-执行人
#### 访问路径
/products/{product_id}/cases/searchrunerreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例
#### 访问路径
/products/{product_id}/cases/fetchrunreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例
#### 访问路径
/products/{product_id}/cases/searchrunreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联--执行结果条目
#### 访问路径
/products/{product_id}/cases/fetchrunreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联--执行结果条目
#### 访问路径
/products/{product_id}/cases/searchrunreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联-执行结果
#### 访问路径
/products/{product_id}/cases/fetchrunreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联-执行结果
#### 访问路径
/products/{product_id}/cases/searchrunreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立测试用例
#### 访问路径
/stories/{story_id}/cases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | casedto | [CaseDTO](#CaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试用例
#### 访问路径
/stories/{story_id}/cases/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据更新测试用例
#### 访问路径
/stories/{story_id}/cases/{case_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试用例
#### 访问路径
/stories/{story_id}/cases/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据删除测试用例
#### 访问路径
/stories/{story_id}/cases/{case_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量删除测试用例
#### 访问路径
/stories/{story_id}/cases/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | ids | List<Long> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取测试用例
#### 访问路径
/stories/{story_id}/cases/{case_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 行为
#### 访问路径
/stories/{story_id}/cases/{case_id}/casefavorite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### CaseNFavorite
#### 访问路径
/stories/{story_id}/cases/{case_id}/casenfavorite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试用例
#### 访问路径
/stories/{story_id}/cases/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | casedto | [CaseDTO](#CaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认用例变更
#### 访问路径
/stories/{story_id}/cases/{case_id}/confirmchange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认需求变更
#### 访问路径
/stories/{story_id}/cases/{case_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取或者状态
#### 访问路径
/stories/{story_id}/cases/{case_id}/getbytesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 测试单关联测试用例
#### 访问路径
/stories/{story_id}/cases/{case_id}/linkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 执行测试
#### 访问路径
/stories/{story_id}/cases/{case_id}/runcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### runCases
#### 访问路径
/stories/{story_id}/cases/{case_id}/runcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存测试用例
#### 访问路径
/stories/{story_id}/cases/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量保存测试用例
#### 访问路径
/stories/{story_id}/cases/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 执行测试
#### 访问路径
/stories/{story_id}/cases/{case_id}/testruncase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### testRunCases
#### 访问路径
/stories/{story_id}/cases/{case_id}/testruncases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 套件关联
#### 访问路径
/stories/{story_id}/cases/{case_id}/testsuitelinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除用例
#### 访问路径
/stories/{story_id}/cases/{case_id}/unlinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### unlinkCases
#### 访问路径
/stories/{story_id}/cases/{case_id}/unlinkcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除用例
#### 访问路径
/stories/{story_id}/cases/{case_id}/unlinksuitecase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### unlinkSuiteCases
#### 访问路径
/stories/{story_id}/cases/{case_id}/unlinksuitecases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | case_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取批量新建用例
#### 访问路径
/stories/{story_id}/cases/fetchbatchnew

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询批量新建用例
#### 访问路径
/stories/{story_id}/cases/searchbatchnew

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取累计创建的用例
#### 访问路径
/stories/{story_id}/cases/fetchcuropenedcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询累计创建的用例
#### 访问路径
/stories/{story_id}/cases/searchcuropenedcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取套件关联用例
#### 访问路径
/stories/{story_id}/cases/fetchcursuite

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询套件关联用例
#### 访问路径
/stories/{story_id}/cases/searchcursuite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试单关联用例
#### 访问路径
/stories/{story_id}/cases/fetchcurtesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试单关联用例
#### 访问路径
/stories/{story_id}/cases/searchcurtesttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取DEFAULT
#### 访问路径
/stories/{story_id}/cases/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询DEFAULT
#### 访问路径
/stories/{story_id}/cases/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例
#### 访问路径
/stories/{story_id}/cases/fetchmodulereportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例
#### 访问路径
/stories/{story_id}/cases/searchmodulereportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联-按模块-条目
#### 访问路径
/stories/{story_id}/cases/fetchmodulereportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联-按模块-条目
#### 访问路径
/stories/{story_id}/cases/searchmodulereportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联-按模块
#### 访问路径
/stories/{story_id}/cases/fetchmodulereportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联-按模块
#### 访问路径
/stories/{story_id}/cases/searchmodulereportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取我的收藏
#### 访问路径
/stories/{story_id}/cases/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询我的收藏
#### 访问路径
/stories/{story_id}/cases/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取套件关联用例
#### 访问路径
/stories/{story_id}/cases/fetchnotcurtestsuite

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询套件关联用例
#### 访问路径
/stories/{story_id}/cases/searchnotcurtestsuite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试单关联用例
#### 访问路径
/stories/{story_id}/cases/fetchnotcurtesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试单关联用例
#### 访问路径
/stories/{story_id}/cases/searchnotcurtesttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例
#### 访问路径
/stories/{story_id}/cases/fetchreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例
#### 访问路径
/stories/{story_id}/cases/searchreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例-条目
#### 访问路径
/stories/{story_id}/cases/fetchreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例-条目
#### 访问路径
/stories/{story_id}/cases/searchreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联用例-关联用例
#### 访问路径
/stories/{story_id}/cases/fetchreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联用例-关联用例
#### 访问路径
/stories/{story_id}/cases/searchreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联-执行人
#### 访问路径
/stories/{story_id}/cases/fetchrunerreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联-执行人
#### 访问路径
/stories/{story_id}/cases/searchrunerreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联-执行人-条目
#### 访问路径
/stories/{story_id}/cases/fetchrunerreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联-执行人-条目
#### 访问路径
/stories/{story_id}/cases/searchrunerreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联-执行人
#### 访问路径
/stories/{story_id}/cases/fetchrunerreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联-执行人
#### 访问路径
/stories/{story_id}/cases/searchrunerreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例
#### 访问路径
/stories/{story_id}/cases/fetchrunreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例
#### 访问路径
/stories/{story_id}/cases/searchrunreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联--执行结果条目
#### 访问路径
/stories/{story_id}/cases/fetchrunreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联--执行结果条目
#### 访问路径
/stories/{story_id}/cases/searchrunreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联-执行结果
#### 访问路径
/stories/{story_id}/cases/fetchrunreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联-执行结果
#### 访问路径
/stories/{story_id}/cases/searchrunreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | casedto | [CaseDTO](#CaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据更新测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据删除测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量删除测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | ids | List<Long> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 行为
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casefavorite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### CaseNFavorite
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casenfavorite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | casedto | [CaseDTO](#CaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认用例变更
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/confirmchange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认需求变更
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取或者状态
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/getbytesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 测试单关联测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/linkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 执行测试
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/runcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### runCases
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/runcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量保存测试用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Boolean>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 执行测试
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testruncase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### testRunCases
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testruncases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 套件关联
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testsuitelinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/unlinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### unlinkCases
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/unlinkcases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/unlinksuitecase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### unlinkSuiteCases
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/unlinksuitecases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | case_id | Long | 待补充 |
| 4 | casedtos | List<[CaseDTO](#CaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseDTO](#CaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取批量新建用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchbatchnew

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询批量新建用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchbatchnew

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取累计创建的用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchcuropenedcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询累计创建的用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchcuropenedcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取套件关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchcursuite

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询套件关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchcursuite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试单关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchcurtesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试单关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchcurtesttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取DEFAULT
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询DEFAULT
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchmodulereportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchmodulereportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联-按模块-条目
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchmodulereportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联-按模块-条目
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchmodulereportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联-按模块
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchmodulereportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联-按模块
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchmodulereportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取我的收藏
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询我的收藏
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取套件关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchnotcurtestsuite

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询套件关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchnotcurtestsuite

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试单关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchnotcurtesttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试单关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchnotcurtesttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例-条目
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例-条目
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联用例-关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联用例-关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联-执行人
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchrunerreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联-执行人
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchrunerreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联-执行人-条目
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchrunerreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联-执行人-条目
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchrunerreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联-执行人
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchrunerreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联-执行人
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchrunerreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchrunreportcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联用例
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchrunreportcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联--执行结果条目
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchrunreportcaseentry

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联--执行结果条目
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchrunreportcaseentry

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目报告关联-执行结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/fetchrunreportcase_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目报告关联-执行结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/searchrunreportcase_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [CaseSearchContext](#CaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseDTO](#CaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```



## 附录
### 数据类型说明
#### CaseDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### CaseSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

