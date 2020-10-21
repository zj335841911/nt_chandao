# 服务接口-IBZ_PROJECTMODULE
## 接口说明
任务模块

## 接口清单
### 新建任务模块
#### 访问路径
/projectmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmoduledto | [ProjectModuleDTO](#ProjectModuleDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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

### 批量新建任务模块
#### 访问路径
/projectmodules/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

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

### 更新任务模块
#### 访问路径
/projectmodules/{projectmodule_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmodule_id | Long | 待补充 |
| 2 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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

### 批量更新任务模块
#### 访问路径
/projectmodules/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

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

### 删除任务模块
#### 访问路径
/projectmodules/{projectmodule_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmodule_id | Long | 待补充 |

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

### 批量删除任务模块
#### 访问路径
/projectmodules/batch

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

### 获取任务模块
#### 访问路径
/projectmodules/{projectmodule_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmodule_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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

### 检查任务模块
#### 访问路径
/projectmodules/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmoduledto | [ProjectModuleDTO](#ProjectModuleDTO) | 待补充 |

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
/projectmodules/{projectmodule_id}/fix

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmodule_id | Long | 待补充 |
| 2 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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
/projectmodules/{projectmodule_id}/removemodule

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmodule_id | Long | 待补充 |
| 2 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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

### 保存任务模块
#### 访问路径
/projectmodules/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

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

### 批量保存任务模块
#### 访问路径
/projectmodules/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

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
/projectmodules/fetchbypath

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/searchbypath

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/fetchparentmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/searchparentmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/fetchroot

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/searchroot

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/fetchroot_nobranch

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/searchroot_nobranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/fetchroot_task

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projectmodules/searchroot_task

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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

### 获取任务模块
#### 访问路径
/projectmodules/fetchtaskmodules

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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

### 查询任务模块
#### 访问路径
/projectmodules/searchtaskmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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

### 根据建立任务模块
#### 访问路径
/projects/{project_id}/projectmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmoduledto | [ProjectModuleDTO](#ProjectModuleDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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

### 根据批量建立任务模块
#### 访问路径
/projects/{project_id}/projectmodules/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

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

### 根据更新任务模块
#### 访问路径
/projects/{project_id}/projectmodules/{projectmodule_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmodule_id | Long | 待补充 |
| 3 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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

### 根据批量更新任务模块
#### 访问路径
/projects/{project_id}/projectmodules/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

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

### 根据删除任务模块
#### 访问路径
/projects/{project_id}/projectmodules/{projectmodule_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmodule_id | Long | 待补充 |

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

### 根据批量删除任务模块
#### 访问路径
/projects/{project_id}/projectmodules/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
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

### 根据获取任务模块
#### 访问路径
/projects/{project_id}/projectmodules/{projectmodule_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmodule_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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

### 根据检查任务模块
#### 访问路径
/projects/{project_id}/projectmodules/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmoduledto | [ProjectModuleDTO](#ProjectModuleDTO) | 待补充 |

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
/projects/{project_id}/projectmodules/{projectmodule_id}/fix

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmodule_id | Long | 待补充 |
| 3 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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
/projects/{project_id}/projectmodules/{projectmodule_id}/removemodule

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmodule_id | Long | 待补充 |
| 3 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProjectModuleDTO](#ProjectModuleDTO)>

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

### 根据保存任务模块
#### 访问路径
/projects/{project_id}/projectmodules/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

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

### 根据批量保存任务模块
#### 访问路径
/projects/{project_id}/projectmodules/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | projectmoduledtos | List<[ProjectModuleDTO](#ProjectModuleDTO)> | 待补充 |

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

### 根据获取BYPATH
#### 访问路径
/projects/{project_id}/projectmodules/fetchbypath

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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

### 根据查询BYPATH
#### 访问路径
/projects/{project_id}/projectmodules/searchbypath

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projects/{project_id}/projectmodules/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
/projects/{project_id}/projectmodules/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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


### 根据获取父模块
#### 访问路径
/projects/{project_id}/projectmodules/fetchparentmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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

### 根据查询父模块
#### 访问路径
/projects/{project_id}/projectmodules/searchparentmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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


### 根据获取根模块
#### 访问路径
/projects/{project_id}/projectmodules/fetchroot

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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

### 根据查询根模块
#### 访问路径
/projects/{project_id}/projectmodules/searchroot

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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


### 根据获取根模块_无分支
#### 访问路径
/projects/{project_id}/projectmodules/fetchroot_nobranch

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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

### 根据查询根模块_无分支
#### 访问路径
/projects/{project_id}/projectmodules/searchroot_nobranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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


### 根据获取根模块
#### 访问路径
/projects/{project_id}/projectmodules/fetchroot_task

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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

### 根据查询根模块
#### 访问路径
/projects/{project_id}/projectmodules/searchroot_task

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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


### 根据获取任务模块
#### 访问路径
/projects/{project_id}/projectmodules/fetchtaskmodules

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProjectModuleDTO](#ProjectModuleDTO)>>

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

### 根据查询任务模块
#### 访问路径
/projects/{project_id}/projectmodules/searchtaskmodules

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [ProjectModuleSearchContext](#ProjectModuleSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProjectModuleDTO](#ProjectModuleDTO)>>

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
#### ProjectModuleDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### ProjectModuleSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

