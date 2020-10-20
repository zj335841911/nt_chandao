# 服务接口-ZT_TASK
## 接口说明


## 接口清单
### 新建任务
#### 访问路径
/tasks

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | taskdto | [TaskDTO](#TaskDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建任务
#### 访问路径
/tasks/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

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

### 更新任务
#### 访问路径
/tasks/{task_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新任务
#### 访问路径
/tasks/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

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

### 删除任务
#### 访问路径
/tasks/{task_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |

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

### 批量删除任务
#### 访问路径
/tasks/batch

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

### 获取任务
#### 访问路径
/tasks/{task_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 激活
#### 访问路径
/tasks/{task_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 指派/转交
#### 访问路径
/tasks/{task_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 取消
#### 访问路径
/tasks/{task_id}/cancel

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查任务
#### 访问路径
/tasks/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | taskdto | [TaskDTO](#TaskDTO) | 待补充 |

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

### 关闭
#### 访问路径
/tasks/{task_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 需求变更确认
#### 访问路径
/tasks/{task_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 删除工时
#### 访问路径
/tasks/{task_id}/deleteestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 编辑工时
#### 访问路径
/tasks/{task_id}/editestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 完成
#### 访问路径
/tasks/{task_id}/finish

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 暂停
#### 访问路径
/tasks/{task_id}/pause

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 工时录入
#### 访问路径
/tasks/{task_id}/recordestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 继续
#### 访问路径
/tasks/{task_id}/restart

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存任务
#### 访问路径
/tasks/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

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

### 批量保存任务
#### 访问路径
/tasks/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

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

### 行为
#### 访问路径
/tasks/{task_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发送消息前置处理
#### 访问路径
/tasks/{task_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 开始
#### 访问路径
/tasks/{task_id}/start

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 任务收藏
#### 访问路径
/tasks/{task_id}/taskfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 任务收藏
#### 访问路径
/tasks/{task_id}/tasknfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | taskdtos | List<[TaskDTO](#TaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TaskDTO](#TaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取指派给我任务
#### 访问路径
/tasks/fetchassignedtomytask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询指派给我任务
#### 访问路径
/tasks/searchassignedtomytask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Bug相关任务
#### 访问路径
/tasks/fetchbugtask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Bug相关任务
#### 访问路径
/tasks/searchbugtask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取通过模块查询
#### 访问路径
/tasks/fetchbymodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询通过模块查询
#### 访问路径
/tasks/searchbymodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取子任务
#### 访问路径
/tasks/fetchchildtask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询子任务
#### 访问路径
/tasks/searchchildtask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取用户年度完成任务
#### 访问路径
/tasks/fetchcurfinishtask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询用户年度完成任务
#### 访问路径
/tasks/searchcurfinishtask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

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
/tasks/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

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
/tasks/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取DefaultRow
#### 访问路径
/tasks/fetchdefaultrow

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询DefaultRow
#### 访问路径
/tasks/searchdefaultrow

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取我的收藏
#### 访问路径
/tasks/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询我的收藏
#### 访问路径
/tasks/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取项目任务
#### 访问路径
/tasks/fetchprojecttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询项目任务
#### 访问路径
/tasks/searchprojecttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取根任务
#### 访问路径
/tasks/fetchroottask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询根任务
#### 访问路径
/tasks/searchroottask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TaskDTO](#TaskDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取任务类型分组
#### 访问路径
/tasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<HashMap>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询任务类型分组
#### 访问路径
/tasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<HashMap>>

#### 权限说明
待补充

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
#### TaskDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### TaskSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

