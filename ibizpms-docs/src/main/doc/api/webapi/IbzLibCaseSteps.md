# 服务接口-IBZ_LIBCASESTEPS
## 接口说明
用例库用例步骤

## 接口清单
### 根据建立用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | ibzlibcasestepsdto | [IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

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

### 根据更新用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasesteps_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | ibzlibcasesteps_id | Long | 待补充 |
| 3 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

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

### 根据删除用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasesteps_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | ibzlibcasesteps_id | Long | 待补充 |

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

### 根据批量删除用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
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

### 根据获取用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasesteps_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | ibzlibcasesteps_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | ibzlibcasestepsdto | [IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO) | 待补充 |

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

### 根据保存用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

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

### 根据批量保存用例库用例步骤
#### 访问路径
/ibzcases/{ibzcase_id}/ibzlibcasesteps/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

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
/ibzcases/{ibzcase_id}/ibzlibcasesteps/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | context | [IbzLibCaseStepsSearchContext](#IbzLibCaseStepsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>>

#### 权限说明
待补充

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
/ibzcases/{ibzcase_id}/ibzlibcasesteps/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzcase_id | Long | 待补充 |
| 2 | context | [IbzLibCaseStepsSearchContext](#IbzLibCaseStepsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | ibzlibcasestepsdto | [IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

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

### 根据更新用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasesteps_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | ibzlibcasesteps_id | Long | 待补充 |
| 4 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

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

### 根据删除用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasesteps_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | ibzlibcasesteps_id | Long | 待补充 |

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

### 根据批量删除用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
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

### 根据获取用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasesteps_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | ibzlibcasesteps_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | ibzlibcasestepsdto | [IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO) | 待补充 |

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

### 根据保存用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

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

### 根据批量保存用例库用例步骤
#### 访问路径
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | ibzlibcasestepsdtos | List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)> | 待补充 |

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
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | context | [IbzLibCaseStepsSearchContext](#IbzLibCaseStepsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>>

#### 权限说明
待补充

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
/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzlib_id | Long | 待补充 |/r/n| 2 | ibzcase_id | Long | 待补充 |
| 3 | context | [IbzLibCaseStepsSearchContext](#IbzLibCaseStepsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[IbzLibCaseStepsDTO](#IbzLibCaseStepsDTO)>>

#### 权限说明
待补充

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
#### IbzLibCaseStepsDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### IbzLibCaseStepsSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

