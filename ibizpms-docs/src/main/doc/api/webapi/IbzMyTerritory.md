# 服务接口-IBZ_MYTERRITORY
## 接口说明


## 接口清单
### 新建我的地盘
#### 访问路径
/ibzmyterritories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzmyterritorydto | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建我的地盘
#### 访问路径
/ibzmyterritories/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzmyterritorydtos | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)> | 待补充 |

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

### 更新我的地盘
#### 访问路径
/ibzmyterritories/{ibzmyterritory_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzmyterritory_id | Long | 待补充 |
| 2 | ibzmyterritorydtos | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新我的地盘
#### 访问路径
/ibzmyterritories/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzmyterritorydtos | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)> | 待补充 |

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

### 删除我的地盘
#### 访问路径
/ibzmyterritories/{ibzmyterritory_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzmyterritory_id | Long | 待补充 |

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

### 批量删除我的地盘
#### 访问路径
/ibzmyterritories/batch

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

### 获取我的地盘
#### 访问路径
/ibzmyterritories/{ibzmyterritory_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzmyterritory_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查我的地盘
#### 访问路径
/ibzmyterritories/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzmyterritorydto | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO) | 待补充 |

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

### 移动端菜单计数器
#### 访问路径
/ibzmyterritories/mobmenucount

#### 请求方法
POST

#### 参数说明
无

#### 返回值说明
返回类型：ResponseEntity<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 我的收藏计数器
#### 访问路径
/ibzmyterritories/myfavoritecount

#### 请求方法
POST

#### 参数说明
无

#### 返回值说明
返回类型：ResponseEntity<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 我的地盘移动端计数器
#### 访问路径
/ibzmyterritories/myterritorycount

#### 请求方法
POST

#### 参数说明
无

#### 返回值说明
返回类型：ResponseEntity<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存我的地盘
#### 访问路径
/ibzmyterritories/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzmyterritorydtos | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)> | 待补充 |

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

### 批量保存我的地盘
#### 访问路径
/ibzmyterritories/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzmyterritorydtos | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)> | 待补充 |

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
/ibzmyterritories/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>>

#### 权限说明
待补充

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
/ibzmyterritories/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取我的工作
#### 访问路径
/ibzmyterritories/fetchmywork

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询我的工作
#### 访问路径
/ibzmyterritories/searchmywork

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取我的工作
#### 访问路径
/ibzmyterritories/fetchmyworkmob

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询我的工作
#### 访问路径
/ibzmyterritories/searchmyworkmob

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取欢迎
#### 访问路径
/ibzmyterritories/fetchwelcome

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询欢迎
#### 访问路径
/ibzmyterritories/searchwelcome

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>>

#### 权限说明
待补充

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
#### IbzMyTerritoryDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### IbzMyTerritorySearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

