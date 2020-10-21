# 服务接口-ZT_TASKTEAM
## 接口说明
任务团队

## 接口清单
### 根据建立任务团队
#### 访问路径
/tasks/{task_id}/taskteams

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskteamdto | [TaskTeamDTO](#TaskTeamDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据批量建立任务团队
#### 访问路径
/tasks/{task_id}/taskteams/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据更新任务团队
#### 访问路径
/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskteam_id | Long | 待补充 |
| 3 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据批量更新任务团队
#### 访问路径
/tasks/{task_id}/taskteams/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据删除任务团队
#### 访问路径
/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskteam_id | Long | 待补充 |

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

### 根据批量删除任务团队
#### 访问路径
/tasks/{task_id}/taskteams/batch

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

### 根据获取任务团队
#### 访问路径
/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskteam_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据检查任务团队
#### 访问路径
/tasks/{task_id}/taskteams/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskteamdto | [TaskTeamDTO](#TaskTeamDTO) | 待补充 |

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

### 根据保存任务团队
#### 访问路径
/tasks/{task_id}/taskteams/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据批量保存任务团队
#### 访问路径
/tasks/{task_id}/taskteams/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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
/tasks/{task_id}/taskteams/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskTeamSearchContext](#TaskTeamSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskTeamDTO](#TaskTeamDTO)>>

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
/tasks/{task_id}/taskteams/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskTeamSearchContext](#TaskTeamSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskTeamDTO](#TaskTeamDTO)>>

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


### 根据建立任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdto | [TaskTeamDTO](#TaskTeamDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据批量建立任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据更新任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteam_id | Long | 待补充 |
| 4 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据批量更新任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据删除任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteam_id | Long | 待补充 |

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

### 根据批量删除任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams/batch

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

### 根据获取任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteam_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据检查任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdto | [TaskTeamDTO](#TaskTeamDTO) | 待补充 |

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

### 根据保存任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据批量保存任务团队
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskteams/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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
/stories/{story_id}/tasks/{task_id}/taskteams/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskTeamSearchContext](#TaskTeamSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskTeamDTO](#TaskTeamDTO)>>

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
/stories/{story_id}/tasks/{task_id}/taskteams/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskTeamSearchContext](#TaskTeamSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskTeamDTO](#TaskTeamDTO)>>

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


### 根据建立任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdto | [TaskTeamDTO](#TaskTeamDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据批量建立任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据更新任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteam_id | Long | 待补充 |
| 4 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据批量更新任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据删除任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteam_id | Long | 待补充 |

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

### 根据批量删除任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams/batch

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

### 根据获取任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteam_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据检查任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdto | [TaskTeamDTO](#TaskTeamDTO) | 待补充 |

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

### 根据保存任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据批量保存任务团队
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskteams/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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
/projects/{project_id}/tasks/{task_id}/taskteams/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskTeamSearchContext](#TaskTeamSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskTeamDTO](#TaskTeamDTO)>>

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
/projects/{project_id}/tasks/{task_id}/taskteams/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskTeamSearchContext](#TaskTeamSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskTeamDTO](#TaskTeamDTO)>>

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


### 根据建立任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskteamdto | [TaskTeamDTO](#TaskTeamDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据批量建立任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据更新任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskteam_id | Long | 待补充 |
| 5 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据批量更新任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据删除任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskteam_id | Long | 待补充 |

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

### 根据批量删除任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/batch

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

### 根据获取任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/{taskteam_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskteam_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskTeamDTO](#TaskTeamDTO)>

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

### 根据检查任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskteamdto | [TaskTeamDTO](#TaskTeamDTO) | 待补充 |

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

### 根据保存任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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

### 根据批量保存任务团队
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | taskteamdtos | List<[TaskTeamDTO](#TaskTeamDTO)> | 待补充 |

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskTeamSearchContext](#TaskTeamSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskTeamDTO](#TaskTeamDTO)>>

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskteams/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskTeamSearchContext](#TaskTeamSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskTeamDTO](#TaskTeamDTO)>>

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
#### TaskTeamDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### TaskTeamSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

