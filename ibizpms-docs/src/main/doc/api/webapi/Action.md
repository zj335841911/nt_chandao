# 服务接口-ZT_ACTION
## 接口说明


## 接口清单
### 新建系统日志
#### 访问路径
/actions

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | actiondto | [ActionDTO](#ActionDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ActionDTO](#ActionDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建系统日志
#### 访问路径
/actions/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | actiondtos | List<[ActionDTO](#ActionDTO)> | 待补充 |

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

### 更新系统日志
#### 访问路径
/actions/{action_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | action_id | Long | 待补充 |
| 2 | actiondtos | List<[ActionDTO](#ActionDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ActionDTO](#ActionDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新系统日志
#### 访问路径
/actions/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | actiondtos | List<[ActionDTO](#ActionDTO)> | 待补充 |

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

### 删除系统日志
#### 访问路径
/actions/{action_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | action_id | Long | 待补充 |

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

### 批量删除系统日志
#### 访问路径
/actions/batch

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

### 获取系统日志
#### 访问路径
/actions/{action_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | action_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ActionDTO](#ActionDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查系统日志
#### 访问路径
/actions/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | actiondto | [ActionDTO](#ActionDTO) | 待补充 |

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

### 添加备注
#### 访问路径
/actions/{action_id}/comment

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | action_id | Long | 待补充 |
| 2 | actiondtos | List<[ActionDTO](#ActionDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ActionDTO](#ActionDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 编辑备注信息
#### 访问路径
/actions/{action_id}/editcomment

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | action_id | Long | 待补充 |
| 2 | actiondtos | List<[ActionDTO](#ActionDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ActionDTO](#ActionDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存系统日志
#### 访问路径
/actions/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | actiondtos | List<[ActionDTO](#ActionDTO)> | 待补充 |

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

### 批量保存系统日志
#### 访问路径
/actions/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | actiondtos | List<[ActionDTO](#ActionDTO)> | 待补充 |

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
/actions/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

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
/actions/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取MobType
#### 访问路径
/actions/fetchmobtype

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询MobType
#### 访问路径
/actions/searchmobtype

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取ProductTrends
#### 访问路径
/actions/fetchproducttrends

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询ProductTrends
#### 访问路径
/actions/searchproducttrends

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取项目动态(项目相关所有)
#### 访问路径
/actions/fetchprojecttrends

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询项目动态(项目相关所有)
#### 访问路径
/actions/searchprojecttrends

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取查询用户使用年
#### 访问路径
/actions/fetchqueryuseryear

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询查询用户使用年
#### 访问路径
/actions/searchqueryuseryear

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Type
#### 访问路径
/actions/fetchtype

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Type
#### 访问路径
/actions/searchtype

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ActionSearchContext](#ActionSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ActionDTO](#ActionDTO)>>

#### 权限说明
待补充

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
#### ActionDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### ActionSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

