# 服务接口-ZT_TASKESTIMATE
## 接口说明
任务预计

## 接口清单
### 根据建立任务预计
#### 访问路径
/tasks/{task_id}/taskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据批量建立任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据更新任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskestimate_id | Long | 待补充 |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据批量更新任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据删除任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskestimate_id | Long | 待补充 |

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

### 根据批量删除任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
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

### 根据获取任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskestimate_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据检查任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 待补充 |

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

### 根据保存任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据批量保存任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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
/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskEstimateDTO](#TaskEstimateDTO)>>

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
/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskEstimateDTO](#TaskEstimateDTO)>>

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


### 根据获取DEFAULT1
#### 访问路径
/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskEstimateDTO](#TaskEstimateDTO)>>

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

### 根据查询DEFAULT1
#### 访问路径
/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskEstimateDTO](#TaskEstimateDTO)>>

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


### 根据建立任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据批量建立任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据更新任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimate_id | Long | 待补充 |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据批量更新任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据删除任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimate_id | Long | 待补充 |

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

### 根据批量删除任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
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

### 根据获取任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimate_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据检查任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 待补充 |

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

### 根据保存任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据批量保存任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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
/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskEstimateDTO](#TaskEstimateDTO)>>

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
/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskEstimateDTO](#TaskEstimateDTO)>>

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


### 根据获取DEFAULT1
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskEstimateDTO](#TaskEstimateDTO)>>

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

### 根据查询DEFAULT1
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskEstimateDTO](#TaskEstimateDTO)>>

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


### 根据建立任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据批量建立任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据更新任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimate_id | Long | 待补充 |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据批量更新任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据删除任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimate_id | Long | 待补充 |

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

### 根据批量删除任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
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

### 根据获取任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimate_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据检查任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 待补充 |

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

### 根据保存任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据批量保存任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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
/projects/{project_id}/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskEstimateDTO](#TaskEstimateDTO)>>

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
/projects/{project_id}/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskEstimateDTO](#TaskEstimateDTO)>>

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


### 根据获取DEFAULT1
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskEstimateDTO](#TaskEstimateDTO)>>

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

### 根据查询DEFAULT1
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskEstimateDTO](#TaskEstimateDTO)>>

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


### 根据建立任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据批量建立任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据更新任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskestimate_id | Long | 待补充 |
| 5 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据批量更新任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据删除任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskestimate_id | Long | 待补充 |

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

### 根据批量删除任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | ids | List<Long> | 待补充 |

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

### 根据获取任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskestimate_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskEstimateDTO](#TaskEstimateDTO)>

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

### 根据检查任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 待补充 |

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

### 根据保存任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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

### 根据批量保存任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 待补充 |

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskEstimateDTO](#TaskEstimateDTO)>>

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskEstimateDTO](#TaskEstimateDTO)>>

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


### 根据获取DEFAULT1
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskEstimateDTO](#TaskEstimateDTO)>>

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

### 根据查询DEFAULT1
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskEstimateDTO](#TaskEstimateDTO)>>

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
#### TaskEstimateDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### TaskEstimateSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

