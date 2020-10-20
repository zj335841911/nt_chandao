# 服务接口-IBZ_PRODUCTMODULE
## 接口说明


## 接口清单
### 新建需求模块
#### 访问路径
/productmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmoduledto | [ProductModuleDTO](#ProductModuleDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductModuleDTO](#ProductModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建需求模块
#### 访问路径
/productmodules/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmoduledtos | List<[ProductModuleDTO](#ProductModuleDTO)> | 待补充 |

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

### 更新需求模块
#### 访问路径
/productmodules/{productmodule_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmodule_id | Long | 待补充 |
| 2 | productmoduledtos | List<[ProductModuleDTO](#ProductModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductModuleDTO](#ProductModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新需求模块
#### 访问路径
/productmodules/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmoduledtos | List<[ProductModuleDTO](#ProductModuleDTO)> | 待补充 |

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

### 删除需求模块
#### 访问路径
/productmodules/{productmodule_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmodule_id | Long | 待补充 |

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

### 批量删除需求模块
#### 访问路径
/productmodules/batch

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

### 获取需求模块
#### 访问路径
/productmodules/{productmodule_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmodule_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductModuleDTO](#ProductModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查需求模块
#### 访问路径
/productmodules/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmoduledto | [ProductModuleDTO](#ProductModuleDTO) | 待补充 |

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
/productmodules/{productmodule_id}/fix

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmodule_id | Long | 待补充 |
| 2 | productmoduledtos | List<[ProductModuleDTO](#ProductModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductModuleDTO](#ProductModuleDTO)>

#### 权限说明
待补充

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
/productmodules/{productmodule_id}/removemodule

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmodule_id | Long | 待补充 |
| 2 | productmoduledtos | List<[ProductModuleDTO](#ProductModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductModuleDTO](#ProductModuleDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存需求模块
#### 访问路径
/productmodules/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmoduledtos | List<[ProductModuleDTO](#ProductModuleDTO)> | 待补充 |

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

### 批量保存需求模块
#### 访问路径
/productmodules/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmoduledtos | List<[ProductModuleDTO](#ProductModuleDTO)> | 待补充 |

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

### 同步Ibz平台模块
#### 访问路径
/productmodules/{productmodule_id}/syncfromibiz

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productmodule_id | Long | 待补充 |
| 2 | productmoduledtos | List<[ProductModuleDTO](#ProductModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductModuleDTO](#ProductModuleDTO)>

#### 权限说明
待补充

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
/productmodules/fetchbypath

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
/productmodules/searchbypath

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
/productmodules/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
/productmodules/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
/productmodules/fetchparentmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
/productmodules/searchparentmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
/productmodules/fetchroot

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
/productmodules/searchroot

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
/productmodules/fetchroot_nobranch

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
/productmodules/searchroot_nobranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取StoryModule
#### 访问路径
/productmodules/fetchstorymodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询StoryModule
#### 访问路径
/productmodules/searchstorymodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductModuleSearchContext](#ProductModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductModuleDTO](#ProductModuleDTO)>>

#### 权限说明
待补充

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
#### ProductModuleDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### ProductModuleSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

