# 服务接口-ZT_CASESTEP
## 接口说明
用例步骤

## 接口清单
### 根据建立用例步骤
#### 访问路径
/cases/{case_id}/casesteps

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casestepdto | [CaseStepDTO](#CaseStepDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立用例步骤
#### 访问路径
/cases/{case_id}/casesteps/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据更新用例步骤
#### 访问路径
/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casestep_id | Long | 待补充 |
| 3 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新用例步骤
#### 访问路径
/cases/{case_id}/casesteps/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据删除用例步骤
#### 访问路径
/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casestep_id | Long | 待补充 |

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

### 根据批量删除用例步骤
#### 访问路径
/cases/{case_id}/casesteps/batch

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

### 根据获取用例步骤
#### 访问路径
/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casestep_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查用例步骤
#### 访问路径
/cases/{case_id}/casesteps/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casestepdto | [CaseStepDTO](#CaseStepDTO) | 待补充 |

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

### 根据保存用例步骤
#### 访问路径
/cases/{case_id}/casesteps/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据批量保存用例步骤
#### 访问路径
/cases/{case_id}/casesteps/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据获取当前测试步骤
#### 访问路径
/cases/{case_id}/casesteps/fetchcurtest

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询当前测试步骤
#### 访问路径
/cases/{case_id}/casesteps/searchcurtest

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

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
/cases/{case_id}/casesteps/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

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
/cases/{case_id}/casesteps/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取DEFAULT1
#### 访问路径
/cases/{case_id}/casesteps/fetchdefault1

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询DEFAULT1
#### 访问路径
/cases/{case_id}/casesteps/searchdefault1

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Mob
#### 访问路径
/cases/{case_id}/casesteps/fetchmob

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Mob
#### 访问路径
/cases/{case_id}/casesteps/searchmob

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本
#### 访问路径
/cases/{case_id}/casesteps/fetchversion

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本
#### 访问路径
/cases/{case_id}/casesteps/searchversion

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本1
#### 访问路径
/cases/{case_id}/casesteps/fetchversions

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本1
#### 访问路径
/cases/{case_id}/casesteps/searchversions

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | case_id | Long | 待补充 |
| 2 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdto | [CaseStepDTO](#CaseStepDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据更新用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestep_id | Long | 待补充 |
| 4 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据删除用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestep_id | Long | 待补充 |

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

### 根据批量删除用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/batch

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

### 根据获取用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestep_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdto | [CaseStepDTO](#CaseStepDTO) | 待补充 |

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

### 根据保存用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据批量保存用例步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据获取当前测试步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/fetchcurtest

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询当前测试步骤
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/searchcurtest

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/cases/{case_id}/casesteps/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/cases/{case_id}/casesteps/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取DEFAULT1
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/fetchdefault1

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询DEFAULT1
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/searchdefault1

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Mob
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/fetchmob

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Mob
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/searchmob

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/fetchversion

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/searchversion

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本1
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/fetchversions

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本1
#### 访问路径
/products/{product_id}/cases/{case_id}/casesteps/searchversions

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdto | [CaseStepDTO](#CaseStepDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据更新用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestep_id | Long | 待补充 |
| 4 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据删除用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestep_id | Long | 待补充 |

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

### 根据批量删除用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/batch

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

### 根据获取用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestep_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdto | [CaseStepDTO](#CaseStepDTO) | 待补充 |

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

### 根据保存用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据批量保存用例步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据获取当前测试步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/fetchcurtest

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询当前测试步骤
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/searchcurtest

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

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
/stories/{story_id}/cases/{case_id}/casesteps/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

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
/stories/{story_id}/cases/{case_id}/casesteps/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取DEFAULT1
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/fetchdefault1

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询DEFAULT1
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/searchdefault1

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Mob
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/fetchmob

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Mob
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/searchmob

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/fetchversion

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/searchversion

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本1
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/fetchversions

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本1
#### 访问路径
/stories/{story_id}/cases/{case_id}/casesteps/searchversions

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | case_id | Long | 待补充 |
| 3 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | casestepdto | [CaseStepDTO](#CaseStepDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据更新用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | casestep_id | Long | 待补充 |
| 5 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据删除用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | casestep_id | Long | 待补充 |

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

### 根据批量删除用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/batch

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

### 根据获取用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | casestep_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[CaseStepDTO](#CaseStepDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | casestepdto | [CaseStepDTO](#CaseStepDTO) | 待补充 |

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

### 根据保存用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据批量保存用例步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | casestepdtos | List<[CaseStepDTO](#CaseStepDTO)> | 待补充 |

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

### 根据获取当前测试步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/fetchcurtest

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询当前测试步骤
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/searchcurtest

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取DEFAULT1
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/fetchdefault1

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询DEFAULT1
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/searchdefault1

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Mob
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/fetchmob

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Mob
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/searchmob

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/fetchversion

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/searchversion

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本1
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/fetchversions

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本1
#### 访问路径
/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/searchversions

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | case_id | Long | 待补充 |
| 4 | context | [CaseStepSearchContext](#CaseStepSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[CaseStepDTO](#CaseStepDTO)>>

#### 权限说明
待补充

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
#### CaseStepDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### CaseStepSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

