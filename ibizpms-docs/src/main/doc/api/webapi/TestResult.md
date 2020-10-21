# 服务接口-ZT_TESTRESULT
## 接口说明
测试结果

## 接口清单
### 新建测试结果
#### 访问路径
/testresults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建测试结果
#### 访问路径
/testresults/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 更新测试结果
#### 访问路径
/testresults/{testresult_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testresult_id | Long | 待补充 |
| 2 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新测试结果
#### 访问路径
/testresults/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 删除测试结果
#### 访问路径
/testresults/{testresult_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testresult_id | Long | 待补充 |

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

### 批量删除测试结果
#### 访问路径
/testresults/batch

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

### 获取测试结果
#### 访问路径
/testresults/{testresult_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testresult_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查测试结果
#### 访问路径
/testresults/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

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

### 保存测试结果
#### 访问路径
/testresults/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 批量保存测试结果
#### 访问路径
/testresults/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 获取CurTestRun
#### 访问路径
/testresults/fetchcurtestrun

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询CurTestRun
#### 访问路径
/testresults/searchcurtestrun

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/testresults/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/testresults/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立测试结果
#### 访问路径
/cases/{case_id}/testresults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试结果
#### 访问路径
/cases/{case_id}/testresults/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据更新测试结果
#### 访问路径
/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | testresult_id | Long | 待补充 |
| 3 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试结果
#### 访问路径
/cases/{case_id}/testresults/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据删除测试结果
#### 访问路径
/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | testresult_id | Long | 待补充 |

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

### 根据批量删除测试结果
#### 访问路径
/cases/{case_id}/testresults/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
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

### 根据获取测试结果
#### 访问路径
/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | testresult_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试结果
#### 访问路径
/cases/{case_id}/testresults/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

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

### 根据保存测试结果
#### 访问路径
/cases/{case_id}/testresults/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据批量保存测试结果
#### 访问路径
/cases/{case_id}/testresults/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据获取CurTestRun
#### 访问路径
/cases/{case_id}/testresults/fetchcurtestrun

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询CurTestRun
#### 访问路径
/cases/{case_id}/testresults/searchcurtestrun

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/cases/{case_id}/testresults/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/cases/{case_id}/testresults/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据更新测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresult_id | Long | 待补充 |
| 4 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据删除测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresult_id | Long | 待补充 |

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

### 根据批量删除测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
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

### 根据获取测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresult_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

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

### 根据保存测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据批量保存测试结果
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据获取CurTestRun
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/fetchcurtestrun

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询CurTestRun
#### 访问路径
/products/{product_id}/cases/{case_id}/testresults/searchcurtestrun

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/cases/{case_id}/testresults/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/cases/{case_id}/testresults/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据更新测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresult_id | Long | 待补充 |
| 4 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据删除测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresult_id | Long | 待补充 |

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

### 根据批量删除测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
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

### 根据获取测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresult_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

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

### 根据保存测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据批量保存测试结果
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据获取CurTestRun
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/fetchcurtestrun

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询CurTestRun
#### 访问路径
/stories/{story_id}/cases/{case_id}/testresults/searchcurtestrun

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/stories/{story_id}/cases/{case_id}/testresults/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/stories/{story_id}/cases/{case_id}/testresults/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据更新测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | testresult_id | Long | 待补充 |
| 5 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据删除测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | testresult_id | Long | 待补充 |

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

### 根据批量删除测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | ids | List<Long> | 待补充 |

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

### 根据获取测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | testresult_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestResultDTO](#TestResultDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | testresultdto | [TestResultDTO](#TestResultDTO) | 待补充 |

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

### 根据保存测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据批量保存测试结果
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | testresultdtos | List<[TestResultDTO](#TestResultDTO)> | 待补充 |

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

### 根据获取CurTestRun
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/fetchcurtestrun

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询CurTestRun
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/searchcurtestrun

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [TestResultSearchContext](#TestResultSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestResultDTO](#TestResultDTO)>>

#### 权限说明
待补充

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
#### TestResultDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### TestResultSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

