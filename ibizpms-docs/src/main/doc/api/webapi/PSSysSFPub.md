# 服务接口-PSSYSSFPUB
## 接口说明


## 接口清单
### 新建后台服务架构
#### 访问路径
/pssyssfpubs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssyssfpubdto | [PSSysSFPubDTO](#PSSysSFPubDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[PSSysSFPubDTO](#PSSysSFPubDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建后台服务架构
#### 访问路径
/pssyssfpubs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssyssfpubdtos | List<[PSSysSFPubDTO](#PSSysSFPubDTO)> | 待补充 |

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

### 更新后台服务架构
#### 访问路径
/pssyssfpubs/{pssyssfpub_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssyssfpub_id | String | 待补充 |
| 2 | pssyssfpubdtos | List<[PSSysSFPubDTO](#PSSysSFPubDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[PSSysSFPubDTO](#PSSysSFPubDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新后台服务架构
#### 访问路径
/pssyssfpubs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssyssfpubdtos | List<[PSSysSFPubDTO](#PSSysSFPubDTO)> | 待补充 |

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

### 删除后台服务架构
#### 访问路径
/pssyssfpubs/{pssyssfpub_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssyssfpub_id | String | 待补充 |

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

### 批量删除后台服务架构
#### 访问路径
/pssyssfpubs/batch

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

### 获取后台服务架构
#### 访问路径
/pssyssfpubs/{pssyssfpub_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssyssfpub_id | String | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[PSSysSFPubDTO](#PSSysSFPubDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查后台服务架构
#### 访问路径
/pssyssfpubs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssyssfpubdto | [PSSysSFPubDTO](#PSSysSFPubDTO) | 待补充 |

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

### 保存后台服务架构
#### 访问路径
/pssyssfpubs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssyssfpubdtos | List<[PSSysSFPubDTO](#PSSysSFPubDTO)> | 待补充 |

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

### 批量保存后台服务架构
#### 访问路径
/pssyssfpubs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | pssyssfpubdtos | List<[PSSysSFPubDTO](#PSSysSFPubDTO)> | 待补充 |

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
/pssyssfpubs/fetchbuild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [PSSysSFPubSearchContext](#PSSysSFPubSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[PSSysSFPubDTO](#PSSysSFPubDTO)>>

#### 权限说明
待补充

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
/pssyssfpubs/searchbuild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [PSSysSFPubSearchContext](#PSSysSFPubSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[PSSysSFPubDTO](#PSSysSFPubDTO)>>

#### 权限说明
待补充

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
/pssyssfpubs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [PSSysSFPubSearchContext](#PSSysSFPubSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[PSSysSFPubDTO](#PSSysSFPubDTO)>>

#### 权限说明
待补充

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
/pssyssfpubs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [PSSysSFPubSearchContext](#PSSysSFPubSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[PSSysSFPubDTO](#PSSysSFPubDTO)>>

#### 权限说明
待补充

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
#### PSSysSFPubDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### PSSysSFPubSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

