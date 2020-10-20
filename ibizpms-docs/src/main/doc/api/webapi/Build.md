# 服务接口-ZT_BUILD
## 接口说明


## 接口清单
### 新建版本
#### 访问路径
/builds

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | builddto | [BuildDTO](#BuildDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BuildDTO](#BuildDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建版本
#### 访问路径
/builds/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | builddtos | List<[BuildDTO](#BuildDTO)> | 待补充 |

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

### 更新版本
#### 访问路径
/builds/{build_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | build_id | Long | 待补充 |
| 2 | builddtos | List<[BuildDTO](#BuildDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BuildDTO](#BuildDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新版本
#### 访问路径
/builds/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | builddtos | List<[BuildDTO](#BuildDTO)> | 待补充 |

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

### 删除版本
#### 访问路径
/builds/{build_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | build_id | Long | 待补充 |

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

### 批量删除版本
#### 访问路径
/builds/batch

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

### 获取版本
#### 访问路径
/builds/{build_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | build_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BuildDTO](#BuildDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查版本
#### 访问路径
/builds/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | builddto | [BuildDTO](#BuildDTO) | 待补充 |

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

### 关联需求
#### 访问路径
/builds/{build_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | build_id | Long | 待补充 |
| 2 | builddtos | List<[BuildDTO](#BuildDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BuildDTO](#BuildDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 一键发布
#### 访问路径
/builds/{build_id}/oneclickrelease

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | build_id | Long | 待补充 |
| 2 | builddtos | List<[BuildDTO](#BuildDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BuildDTO](#BuildDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存版本
#### 访问路径
/builds/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | builddtos | List<[BuildDTO](#BuildDTO)> | 待补充 |

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

### 批量保存版本
#### 访问路径
/builds/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | builddtos | List<[BuildDTO](#BuildDTO)> | 待补充 |

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

### 获取Bug产品版本
#### 访问路径
/builds/fetchbugproductbuild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Bug产品版本
#### 访问路径
/builds/searchbugproductbuild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取产品版本
#### 访问路径
/builds/fetchcurproduct

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询产品版本
#### 访问路径
/builds/searchcurproduct

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

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
/builds/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

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
/builds/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

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
/builds/fetchtestbuild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试版本
#### 访问路径
/builds/searchtestbuild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试轮次
#### 访问路径
/builds/fetchtestrounds

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试轮次
#### 访问路径
/builds/searchtestrounds

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BuildSearchContext](#BuildSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BuildDTO](#BuildDTO)>>

#### 权限说明
待补充

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
#### BuildDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### BuildSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```
