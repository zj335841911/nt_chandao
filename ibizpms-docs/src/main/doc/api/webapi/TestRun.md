# 服务接口-ZT_TESTRUN
## 接口说明
测试运行

## 接口清单
### 新建测试运行
#### 访问路径
/testruns

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testrundto | [TestRunDTO](#TestRunDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建测试运行
#### 访问路径
/testruns/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 更新测试运行
#### 访问路径
/testruns/{testrun_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testrun_id | Long | 待补充 |
| 2 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新测试运行
#### 访问路径
/testruns/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 删除测试运行
#### 访问路径
/testruns/{testrun_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testrun_id | Long | 待补充 |

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

### 批量删除测试运行
#### 访问路径
/testruns/batch

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

### 获取测试运行
#### 访问路径
/testruns/{testrun_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testrun_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查测试运行
#### 访问路径
/testruns/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testrundto | [TestRunDTO](#TestRunDTO) | 待补充 |

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

### 保存测试运行
#### 访问路径
/testruns/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 批量保存测试运行
#### 访问路径
/testruns/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 获取DEFAULT
#### 访问路径
/testruns/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestRunSearchContext](#TestRunSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestRunDTO](#TestRunDTO)>>

#### 权限说明
待补充

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
/testruns/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestRunSearchContext](#TestRunSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestRunDTO](#TestRunDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testrundto | [TestRunDTO](#TestRunDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据更新测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns/{testrun_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testrun_id | Long | 待补充 |
| 3 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据删除测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns/{testrun_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testrun_id | Long | 待补充 |

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

### 根据批量删除测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
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

### 根据获取测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns/{testrun_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testrun_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testrundto | [TestRunDTO](#TestRunDTO) | 待补充 |

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

### 根据保存测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据批量保存测试运行
#### 访问路径
/testtasks/{testtask_id}/testruns/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据获取DEFAULT
#### 访问路径
/testtasks/{testtask_id}/testruns/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | context | [TestRunSearchContext](#TestRunSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestRunDTO](#TestRunDTO)>>

#### 权限说明
待补充

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
/testtasks/{testtask_id}/testruns/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | context | [TestRunSearchContext](#TestRunSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestRunDTO](#TestRunDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundto | [TestRunDTO](#TestRunDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据更新测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/{testrun_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrun_id | Long | 待补充 |
| 4 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据删除测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/{testrun_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrun_id | Long | 待补充 |

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

### 根据批量删除测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
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

### 根据获取测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/{testrun_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrun_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundto | [TestRunDTO](#TestRunDTO) | 待补充 |

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

### 根据保存测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据批量保存测试运行
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据获取DEFAULT
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/testruns/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | context | [TestRunSearchContext](#TestRunSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestRunDTO](#TestRunDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/testtasks/{testtask_id}/testruns/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | context | [TestRunSearchContext](#TestRunSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestRunDTO](#TestRunDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundto | [TestRunDTO](#TestRunDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据更新测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/{testrun_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrun_id | Long | 待补充 |
| 4 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据删除测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/{testrun_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrun_id | Long | 待补充 |

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

### 根据批量删除测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
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

### 根据获取测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/{testrun_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrun_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestRunDTO](#TestRunDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundto | [TestRunDTO](#TestRunDTO) | 待补充 |

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

### 根据保存测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据批量保存测试运行
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | testrundtos | List<[TestRunDTO](#TestRunDTO)> | 待补充 |

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

### 根据获取DEFAULT
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/testruns/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | context | [TestRunSearchContext](#TestRunSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestRunDTO](#TestRunDTO)>>

#### 权限说明
待补充

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
/projects/{project_id}/testtasks/{testtask_id}/testruns/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | testtask_id | Long | 待补充 |
| 3 | context | [TestRunSearchContext](#TestRunSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestRunDTO](#TestRunDTO)>>

#### 权限说明
待补充

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
#### TestRunDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### TestRunSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

