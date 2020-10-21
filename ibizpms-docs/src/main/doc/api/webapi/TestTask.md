# 服务接口-ZT_TESTTASK
## 接口说明
测试版本

## 接口清单
### 新建测试版本
#### 访问路径
/testtasks

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtaskdto | [TestTaskDTO](#TestTaskDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建测试版本
#### 访问路径
/testtasks/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 更新测试版本
#### 访问路径
/testtasks/{testtask_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新测试版本
#### 访问路径
/testtasks/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 删除测试版本
#### 访问路径
/testtasks/{testtask_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |

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

### 批量删除测试版本
#### 访问路径
/testtasks/batch

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

### 获取测试版本
#### 访问路径
/testtasks/{testtask_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 激活
#### 访问路径
/testtasks/{testtask_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 阻塞
#### 访问路径
/testtasks/{testtask_id}/block

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查测试版本
#### 访问路径
/testtasks/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtaskdto | [TestTaskDTO](#TestTaskDTO) | 待补充 |

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

### 关闭
#### 访问路径
/testtasks/{testtask_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联测试用例
#### 访问路径
/testtasks/{testtask_id}/linkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存测试版本
#### 访问路径
/testtasks/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 批量保存测试版本
#### 访问路径
/testtasks/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 开始
#### 访问路径
/testtasks/{testtask_id}/start

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联测试用例
#### 访问路径
/testtasks/{testtask_id}/unlinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testtask_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

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
/testtasks/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestTaskSearchContext](#TestTaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestTaskDTO](#TestTaskDTO)>>

#### 权限说明
待补充

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
/testtasks/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestTaskSearchContext](#TestTaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestTaskDTO](#TestTaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立测试版本
#### 访问路径
/products/{product_id}/testtasks

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtaskdto | [TestTaskDTO](#TestTaskDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试版本
#### 访问路径
/products/{product_id}/testtasks/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 根据更新测试版本
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试版本
#### 访问路径
/products/{product_id}/testtasks/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 根据删除测试版本
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |

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

### 根据批量删除测试版本
#### 访问路径
/products/{product_id}/testtasks/batch

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

### 根据获取测试版本
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 激活
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 阻塞
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/block

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试版本
#### 访问路径
/products/{product_id}/testtasks/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtaskdto | [TestTaskDTO](#TestTaskDTO) | 待补充 |

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

### 关闭
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联测试用例
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/linkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存测试版本
#### 访问路径
/products/{product_id}/testtasks/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 根据批量保存测试版本
#### 访问路径
/products/{product_id}/testtasks/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 开始
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/start

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联测试用例
#### 访问路径
/products/{product_id}/testtasks/{testtask_id}/unlinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/testtasks/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestTaskSearchContext](#TestTaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestTaskDTO](#TestTaskDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/testtasks/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestTaskSearchContext](#TestTaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestTaskDTO](#TestTaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立测试版本
#### 访问路径
/projects/{project_id}/testtasks

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtaskdto | [TestTaskDTO](#TestTaskDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试版本
#### 访问路径
/projects/{project_id}/testtasks/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 根据更新测试版本
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试版本
#### 访问路径
/projects/{project_id}/testtasks/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 根据删除测试版本
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |

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

### 根据批量删除测试版本
#### 访问路径
/projects/{project_id}/testtasks/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
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

### 根据获取测试版本
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 激活
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 阻塞
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/block

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试版本
#### 访问路径
/projects/{project_id}/testtasks/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtaskdto | [TestTaskDTO](#TestTaskDTO) | 待补充 |

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

### 关闭
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联测试用例
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/linkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存测试版本
#### 访问路径
/projects/{project_id}/testtasks/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 根据批量保存测试版本
#### 访问路径
/projects/{project_id}/testtasks/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

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

### 开始
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/start

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联测试用例
#### 访问路径
/projects/{project_id}/testtasks/{testtask_id}/unlinkcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testtask_id | Long | 待补充 |
| 3 | testtaskdtos | List<[TestTaskDTO](#TestTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestTaskDTO](#TestTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/testtasks/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [TestTaskSearchContext](#TestTaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestTaskDTO](#TestTaskDTO)>>

#### 权限说明
待补充

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
/projects/{project_id}/testtasks/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [TestTaskSearchContext](#TestTaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestTaskDTO](#TestTaskDTO)>>

#### 权限说明
待补充

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
#### TestTaskDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### TestTaskSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

