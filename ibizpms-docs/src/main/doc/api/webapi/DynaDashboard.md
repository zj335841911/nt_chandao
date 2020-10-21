# 服务接口-DYNADASHBOARD
## 接口说明
动态数据看板

## 接口清单
### 新建动态数据看板
#### 访问路径
/dynadashboards

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dynadashboarddto | [DynaDashboardDTO](#DynaDashboardDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[DynaDashboardDTO](#DynaDashboardDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建动态数据看板
#### 访问路径
/dynadashboards/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dynadashboarddtos | List<[DynaDashboardDTO](#DynaDashboardDTO)> | 待补充 |

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

### 更新动态数据看板
#### 访问路径
/dynadashboards/{dynadashboard_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dynadashboard_id | String | 待补充 |
| 2 | dynadashboarddtos | List<[DynaDashboardDTO](#DynaDashboardDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[DynaDashboardDTO](#DynaDashboardDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新动态数据看板
#### 访问路径
/dynadashboards/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dynadashboarddtos | List<[DynaDashboardDTO](#DynaDashboardDTO)> | 待补充 |

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

### 删除动态数据看板
#### 访问路径
/dynadashboards/{dynadashboard_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dynadashboard_id | String | 待补充 |

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

### 批量删除动态数据看板
#### 访问路径
/dynadashboards/batch

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

### 获取动态数据看板
#### 访问路径
/dynadashboards/{dynadashboard_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dynadashboard_id | String | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[DynaDashboardDTO](#DynaDashboardDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查动态数据看板
#### 访问路径
/dynadashboards/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dynadashboarddto | [DynaDashboardDTO](#DynaDashboardDTO) | 待补充 |

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

### 保存动态数据看板
#### 访问路径
/dynadashboards/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dynadashboarddtos | List<[DynaDashboardDTO](#DynaDashboardDTO)> | 待补充 |

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

### 批量保存动态数据看板
#### 访问路径
/dynadashboards/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | dynadashboarddtos | List<[DynaDashboardDTO](#DynaDashboardDTO)> | 待补充 |

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
/dynadashboards/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [DynaDashboardSearchContext](#DynaDashboardSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[DynaDashboardDTO](#DynaDashboardDTO)>>

#### 权限说明
待补充

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
/dynadashboards/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [DynaDashboardSearchContext](#DynaDashboardSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[DynaDashboardDTO](#DynaDashboardDTO)>>

#### 权限说明
待补充

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
#### DynaDashboardDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### DynaDashboardSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

