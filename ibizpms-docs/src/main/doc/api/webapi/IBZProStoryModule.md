# 服务接口-IBZPRO_STORYMODULE
## 接口说明


## 接口清单
### 新建需求模块
#### 访问路径
/ibzprostorymodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymoduledto | [IBZProStoryModuleDTO](#IBZProStoryModuleDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)>

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
/ibzprostorymodules/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymoduledtos | List<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)> | 待补充 |

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
/ibzprostorymodules/{ibzprostorymodule_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymodule_id | Long | 待补充 |
| 2 | ibzprostorymoduledtos | List<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)>

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
/ibzprostorymodules/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymoduledtos | List<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)> | 待补充 |

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
/ibzprostorymodules/{ibzprostorymodule_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymodule_id | Long | 待补充 |

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
/ibzprostorymodules/batch

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
/ibzprostorymodules/{ibzprostorymodule_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymodule_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)>

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
/ibzprostorymodules/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymoduledto | [IBZProStoryModuleDTO](#IBZProStoryModuleDTO) | 待补充 |

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

### 保存需求模块
#### 访问路径
/ibzprostorymodules/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymoduledtos | List<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)> | 待补充 |

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
/ibzprostorymodules/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymoduledtos | List<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)> | 待补充 |

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
/ibzprostorymodules/{ibzprostorymodule_id}/syncfromibiz

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ibzprostorymodule_id | Long | 待补充 |
| 2 | ibzprostorymoduledtos | List<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)>

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
/ibzprostorymodules/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IBZProStoryModuleSearchContext](#IBZProStoryModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)>>

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
/ibzprostorymodules/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [IBZProStoryModuleSearchContext](#IBZProStoryModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[IBZProStoryModuleDTO](#IBZProStoryModuleDTO)>>

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
#### IBZProStoryModuleDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### IBZProStoryModuleSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```
