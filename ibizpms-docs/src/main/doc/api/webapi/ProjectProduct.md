# 服务接口-ZT_PROJECTPRODUCT
## 接口说明
项目产品

## 接口清单
### 新建项目产品
#### 访问路径
/projectproducts

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectproductdto | [ProjectProductDTO](#ProjectProductDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectProductDTO](#ProjectProductDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建项目产品
#### 访问路径
/projectproducts/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 更新项目产品
#### 访问路径
/projectproducts/{projectproduct_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectproduct_id | String | 待补充 |
| 2 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectProductDTO](#ProjectProductDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新项目产品
#### 访问路径
/projectproducts/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 删除项目产品
#### 访问路径
/projectproducts/{projectproduct_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectproduct_id | String | 待补充 |

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

### 批量删除项目产品
#### 访问路径
/projectproducts/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<String> | 待补充 |

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

### 获取项目产品
#### 访问路径
/projectproducts/{projectproduct_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectproduct_id | String | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectProductDTO](#ProjectProductDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查项目产品
#### 访问路径
/projectproducts/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectproductdto | [ProjectProductDTO](#ProjectProductDTO) | 待补充 |

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

### 保存项目产品
#### 访问路径
/projectproducts/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 批量保存项目产品
#### 访问路径
/projectproducts/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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
/projectproducts/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

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
/projectproducts/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取关联计划
#### 访问路径
/projectproducts/fetchrelationplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询关联计划
#### 访问路径
/projectproducts/searchrelationplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立项目产品
#### 访问路径
/products/{product_id}/projectproducts

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | projectproductdto | [ProjectProductDTO](#ProjectProductDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectProductDTO](#ProjectProductDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立项目产品
#### 访问路径
/products/{product_id}/projectproducts/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 根据更新项目产品
#### 访问路径
/products/{product_id}/projectproducts/{projectproduct_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | projectproduct_id | String | 待补充 |
| 3 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectProductDTO](#ProjectProductDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新项目产品
#### 访问路径
/products/{product_id}/projectproducts/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 根据删除项目产品
#### 访问路径
/products/{product_id}/projectproducts/{projectproduct_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | projectproduct_id | String | 待补充 |

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

### 根据批量删除项目产品
#### 访问路径
/products/{product_id}/projectproducts/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | ids | List<String> | 待补充 |

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

### 根据获取项目产品
#### 访问路径
/products/{product_id}/projectproducts/{projectproduct_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | projectproduct_id | String | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectProductDTO](#ProjectProductDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查项目产品
#### 访问路径
/products/{product_id}/projectproducts/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | projectproductdto | [ProjectProductDTO](#ProjectProductDTO) | 待补充 |

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

### 根据保存项目产品
#### 访问路径
/products/{product_id}/projectproducts/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 根据批量保存项目产品
#### 访问路径
/products/{product_id}/projectproducts/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 根据获取关联计划
#### 访问路径
/products/{product_id}/projectproducts/fetchrelationplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询关联计划
#### 访问路径
/products/{product_id}/projectproducts/searchrelationplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取关联计划
#### 访问路径
/products/{product_id}/projectproducts/fetchrelationplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询关联计划
#### 访问路径
/products/{product_id}/projectproducts/searchrelationplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立项目产品
#### 访问路径
/projects/{project_id}/projectproducts

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectproductdto | [ProjectProductDTO](#ProjectProductDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectProductDTO](#ProjectProductDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立项目产品
#### 访问路径
/projects/{project_id}/projectproducts/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 根据更新项目产品
#### 访问路径
/projects/{project_id}/projectproducts/{projectproduct_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectproduct_id | String | 待补充 |
| 3 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectProductDTO](#ProjectProductDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新项目产品
#### 访问路径
/projects/{project_id}/projectproducts/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 根据删除项目产品
#### 访问路径
/projects/{project_id}/projectproducts/{projectproduct_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectproduct_id | String | 待补充 |

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

### 根据批量删除项目产品
#### 访问路径
/projects/{project_id}/projectproducts/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | ids | List<String> | 待补充 |

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

### 根据获取项目产品
#### 访问路径
/projects/{project_id}/projectproducts/{projectproduct_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectproduct_id | String | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectProductDTO](#ProjectProductDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查项目产品
#### 访问路径
/projects/{project_id}/projectproducts/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectproductdto | [ProjectProductDTO](#ProjectProductDTO) | 待补充 |

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

### 根据保存项目产品
#### 访问路径
/projects/{project_id}/projectproducts/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 根据批量保存项目产品
#### 访问路径
/projects/{project_id}/projectproducts/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectproductdtos | List<[ProjectProductDTO](#ProjectProductDTO)> | 待补充 |

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

### 根据获取关联计划
#### 访问路径
/projects/{project_id}/projectproducts/fetchrelationplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询关联计划
#### 访问路径
/projects/{project_id}/projectproducts/searchrelationplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取关联计划
#### 访问路径
/projects/{project_id}/projectproducts/fetchrelationplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询关联计划
#### 访问路径
/projects/{project_id}/projectproducts/searchrelationplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectProductSearchContext](#ProjectProductSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectProductDTO](#ProjectProductDTO)>>

#### 权限说明
待补充

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
#### ProjectProductDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### ProjectProductSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

