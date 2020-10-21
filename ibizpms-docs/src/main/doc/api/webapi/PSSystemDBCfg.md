# 服务接口-PSSYSTEMDBCFG
## 接口说明
系统数据库

## 接口清单
### 新建系统数据库
#### 访问路径
/pssystemdbcfgs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssystemdbcfgdto | [PSSystemDBCfgDTO](#PSSystemDBCfgDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建系统数据库
#### 访问路径
/pssystemdbcfgs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssystemdbcfgdtos | List<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)> | 待补充 |

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

### 更新系统数据库
#### 访问路径
/pssystemdbcfgs/{pssystemdbcfg_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssystemdbcfg_id | String | 待补充 |
| 2 | pssystemdbcfgdtos | List<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新系统数据库
#### 访问路径
/pssystemdbcfgs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssystemdbcfgdtos | List<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)> | 待补充 |

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

### 删除系统数据库
#### 访问路径
/pssystemdbcfgs/{pssystemdbcfg_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssystemdbcfg_id | String | 待补充 |

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

### 批量删除系统数据库
#### 访问路径
/pssystemdbcfgs/batch

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

### 获取系统数据库
#### 访问路径
/pssystemdbcfgs/{pssystemdbcfg_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssystemdbcfg_id | String | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查系统数据库
#### 访问路径
/pssystemdbcfgs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssystemdbcfgdto | [PSSystemDBCfgDTO](#PSSystemDBCfgDTO) | 待补充 |

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

### 保存系统数据库
#### 访问路径
/pssystemdbcfgs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssystemdbcfgdtos | List<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)> | 待补充 |

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

### 批量保存系统数据库
#### 访问路径
/pssystemdbcfgs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssystemdbcfgdtos | List<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)> | 待补充 |

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
/pssystemdbcfgs/fetchbuild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [PSSystemDBCfgSearchContext](#PSSystemDBCfgSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询版本
#### 访问路径
/pssystemdbcfgs/searchbuild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [PSSystemDBCfgSearchContext](#PSSystemDBCfgSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取数据集
#### 访问路径
/pssystemdbcfgs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [PSSystemDBCfgSearchContext](#PSSystemDBCfgSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询数据集
#### 访问路径
/pssystemdbcfgs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [PSSystemDBCfgSearchContext](#PSSystemDBCfgSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[PSSystemDBCfgDTO](#PSSystemDBCfgDTO)>>

#### 权限说明
待补充

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
#### PSSystemDBCfgDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### PSSystemDBCfgSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

