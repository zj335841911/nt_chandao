# 服务接口-IBZ_TESTMODULE
## 接口说明
测试模块

## 接口清单
### 新建测试模块
#### 访问路径
/testmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmoduledto | [TestModuleDTO](#TestModuleDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建测试模块
#### 访问路径
/testmodules/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

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

### 更新测试模块
#### 访问路径
/testmodules/{testmodule_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmodule_id | Long | 待补充 |
| 2 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新测试模块
#### 访问路径
/testmodules/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

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

### 删除测试模块
#### 访问路径
/testmodules/{testmodule_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmodule_id | Long | 待补充 |

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

### 批量删除测试模块
#### 访问路径
/testmodules/batch

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

### 获取测试模块
#### 访问路径
/testmodules/{testmodule_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmodule_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查测试模块
#### 访问路径
/testmodules/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmoduledto | [TestModuleDTO](#TestModuleDTO) | 待补充 |

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

### 重建模块路径
#### 访问路径
/testmodules/{testmodule_id}/fix

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmodule_id | Long | 待补充 |
| 2 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 删除模块
#### 访问路径
/testmodules/{testmodule_id}/removemodule

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmodule_id | Long | 待补充 |
| 2 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存测试模块
#### 访问路径
/testmodules/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

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

### 批量保存测试模块
#### 访问路径
/testmodules/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

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

### 获取BYPATH
#### 访问路径
/testmodules/fetchbypath

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询BYPATH
#### 访问路径
/testmodules/searchbypath

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

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
/testmodules/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

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
/testmodules/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取父模块
#### 访问路径
/testmodules/fetchparentmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询父模块
#### 访问路径
/testmodules/searchparentmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取根模块
#### 访问路径
/testmodules/fetchroot

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询根模块
#### 访问路径
/testmodules/searchroot

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取根模块_无分支
#### 访问路径
/testmodules/fetchroot_nobranch

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询根模块_无分支
#### 访问路径
/testmodules/searchroot_nobranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取TestModule
#### 访问路径
/testmodules/fetchtestmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询TestModule
#### 访问路径
/testmodules/searchtestmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立测试模块
#### 访问路径
/products/{product_id}/testmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmoduledto | [TestModuleDTO](#TestModuleDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试模块
#### 访问路径
/products/{product_id}/testmodules/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

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

### 根据更新测试模块
#### 访问路径
/products/{product_id}/testmodules/{testmodule_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmodule_id | Long | 待补充 |
| 3 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试模块
#### 访问路径
/products/{product_id}/testmodules/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

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

### 根据删除测试模块
#### 访问路径
/products/{product_id}/testmodules/{testmodule_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmodule_id | Long | 待补充 |

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

### 根据批量删除测试模块
#### 访问路径
/products/{product_id}/testmodules/batch

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

### 根据获取测试模块
#### 访问路径
/products/{product_id}/testmodules/{testmodule_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmodule_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试模块
#### 访问路径
/products/{product_id}/testmodules/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmoduledto | [TestModuleDTO](#TestModuleDTO) | 待补充 |

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

### 重建模块路径
#### 访问路径
/products/{product_id}/testmodules/{testmodule_id}/fix

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmodule_id | Long | 待补充 |
| 3 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 删除模块
#### 访问路径
/products/{product_id}/testmodules/{testmodule_id}/removemodule

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmodule_id | Long | 待补充 |
| 3 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestModuleDTO](#TestModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存测试模块
#### 访问路径
/products/{product_id}/testmodules/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

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

### 根据批量保存测试模块
#### 访问路径
/products/{product_id}/testmodules/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testmoduledtos | List<[TestModuleDTO](#TestModuleDTO)> | 待补充 |

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

### 根据获取TestModule
#### 访问路径
/products/{product_id}/testmodules/fetchtestmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询TestModule
#### 访问路径
/products/{product_id}/testmodules/searchtestmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取TestModule
#### 访问路径
/products/{product_id}/testmodules/fetchtestmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询TestModule
#### 访问路径
/products/{product_id}/testmodules/searchtestmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取TestModule
#### 访问路径
/products/{product_id}/testmodules/fetchtestmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询TestModule
#### 访问路径
/products/{product_id}/testmodules/searchtestmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取TestModule
#### 访问路径
/products/{product_id}/testmodules/fetchtestmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询TestModule
#### 访问路径
/products/{product_id}/testmodules/searchtestmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取TestModule
#### 访问路径
/products/{product_id}/testmodules/fetchtestmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询TestModule
#### 访问路径
/products/{product_id}/testmodules/searchtestmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取TestModule
#### 访问路径
/products/{product_id}/testmodules/fetchtestmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询TestModule
#### 访问路径
/products/{product_id}/testmodules/searchtestmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestModuleSearchContext](#TestModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestModuleDTO](#TestModuleDTO)>>

#### 权限说明
待补充

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
#### TestModuleDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### TestModuleSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

