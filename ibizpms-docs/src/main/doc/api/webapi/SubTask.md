# 服务接口-IBZ_SUBTASK
## 接口说明
任务

## 接口清单
### 新建任务
#### 访问路径
/subtasks

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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
/subtasks/{subtask_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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
/subtasks/{subtask_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |

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
/subtasks/batch

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
/subtasks/{subtask_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/cancel

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

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
/subtasks/{subtask_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/deleteestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/editestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/finish

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/pause

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/recordestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/restart

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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
/subtasks/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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
/subtasks/{subtask_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/start

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/taskfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/{subtask_id}/tasknfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 更新需求版本
#### 访问路径
/subtasks/{subtask_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | subtask_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/subtasks/fetchassignedtomytask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchassignedtomytask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchbugtask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchbugtask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchbymodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchbymodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchchildtask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchchildtask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchcurfinishtask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchcurfinishtask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchdefaultrow

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchdefaultrow

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchprojecttask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchprojecttask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchroottask

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/searchroottask

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubTaskDTO](#SubTaskDTO)>>

#### 权限说明
待补充

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
/subtasks/fetchtypegroup

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
/subtasks/searchtypegroup

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

### 根据建立任务
#### 访问路径
/tasks/{task_id}/subtasks

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立任务
#### 访问路径
/tasks/{task_id}/subtasks/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据更新任务
#### 访问路径
/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新任务
#### 访问路径
/tasks/{task_id}/subtasks/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据删除任务
#### 访问路径
/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |

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

### 根据批量删除任务
#### 访问路径
/tasks/{task_id}/subtasks/batch

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

### 根据获取任务
#### 访问路径
/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/cancel

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查任务
#### 访问路径
/tasks/{task_id}/subtasks/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

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
/tasks/{task_id}/subtasks/{subtask_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/deleteestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/editestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/finish

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/pause

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/recordestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/restart

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存任务
#### 访问路径
/tasks/{task_id}/subtasks/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据批量保存任务
#### 访问路径
/tasks/{task_id}/subtasks/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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
/tasks/{task_id}/subtasks/{subtask_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/start

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/taskfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/tasks/{task_id}/subtasks/{subtask_id}/tasknfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 更新需求版本
#### 访问路径
/tasks/{task_id}/subtasks/{subtask_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | subtask_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | task_id | Long | 待补充 |
| 2 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据建立任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据更新任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据删除任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |

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

### 根据批量删除任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/batch

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

### 根据获取任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/cancel

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/deleteestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/editestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/finish

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/pause

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/recordestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/restart

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据批量保存任务
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/start

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/taskfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/tasknfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 更新需求版本
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据建立任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据更新任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据删除任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |

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

### 根据批量删除任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/batch

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

### 根据获取任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/cancel

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/deleteestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/editestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/finish

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/pause

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/recordestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/restart

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据批量保存任务
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/start

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/taskfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/tasknfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 更新需求版本
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | subtask_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |/r/n| 2 | task_id | Long | 待补充 |
| 3 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据建立任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据更新任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据删除任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |

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

### 根据批量删除任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/batch

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

### 根据获取任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/cancel

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtaskdto | [SubTaskDTO](#SubTaskDTO) | 待补充 |

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/confirmstorychange

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/deleteestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/editestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/finish

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/pause

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/recordestimate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/restart

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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

### 根据批量保存任务
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/start

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/taskfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/tasknfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 更新需求版本
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/{subtask_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | subtask_id | Long | 待补充 |
| 5 | subtaskdtos | List<[SubTaskDTO](#SubTaskDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubTaskDTO](#SubTaskDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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


### 根据获取任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/fetchtypegroup

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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

### 根据查询任务类型分组
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/subtasks/searchtypegroup

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |/r/n| 3 | task_id | Long | 待补充 |
| 4 | context | [TaskSearchContext](#TaskSearchContext) | 待补充 |

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
#### SubTaskDTO
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

