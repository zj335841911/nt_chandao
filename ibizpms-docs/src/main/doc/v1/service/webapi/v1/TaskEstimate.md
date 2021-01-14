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
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量建立任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据更新任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | taskestimate_id | Long | 任务预计主键ID |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量更新任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据删除任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量删除任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | ids | List<Long> | 任务预计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据检查任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据保存任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量保存任务预计
#### 访问路径
/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取DEFAULT
#### 访问路径
/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT
#### 访问路径
/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据获取DEFAULT1
#### 访问路径
/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT1
#### 访问路径
/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | task_id | Long | 任务主键ID |
| 2 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据建立任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量建立任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据更新任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimate_id | Long | 任务预计主键ID |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量更新任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据删除任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量删除任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | ids | List<Long> | 任务预计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据检查任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据保存任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量保存任务预计
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取DEFAULT
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据获取DEFAULT1
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT1
#### 访问路径
/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | story_id | Long | 需求主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据建立任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量建立任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据更新任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimate_id | Long | 任务预计主键ID |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量更新任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据删除任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量删除任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | ids | List<Long> | 任务预计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据检查任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据保存任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量保存任务预计
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取DEFAULT
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据获取DEFAULT1
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT1
#### 访问路径
/projects/{project_id}/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | project_id | Long | 项目主键ID |/r/n| 2 | task_id | Long | 任务主键ID |
| 3 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据建立任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量建立任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据更新任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimate_id | Long | 任务预计主键ID |
| 5 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量更新任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据删除任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量删除任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | ids | List<Long> | 任务预计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据检查任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据保存任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量保存任务预计
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取DEFAULT
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据获取DEFAULT1
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT1
#### 访问路径
/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据建立任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量建立任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据更新任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimate_id | Long | 任务预计主键ID |
| 5 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量更新任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据删除任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量删除任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | ids | List<Long> | 任务预计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据检查任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据保存任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量保存任务预计
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取DEFAULT
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据获取DEFAULT1
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT1
#### 访问路径
/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productmodule_id | Long | 需求模块主键ID |/r/n| 2 | story_id | Long | 需求主键ID |/r/n| 3 | task_id | Long | 任务主键ID |
| 4 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据建立任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量建立任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据更新任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | taskestimate_id | Long | 任务预计主键ID |
| 6 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据批量更新任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据删除任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量删除任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | ids | List<Long> | 任务预计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | taskestimate_id | Long | 任务预计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [TaskEstimateDTO](#TaskEstimateDTO)：任务预计实体传输对象 |

### 根据检查任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据保存任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | taskestimatedto | [TaskEstimateDTO](#TaskEstimateDTO) | 任务预计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据批量保存任务预计
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | taskestimatedtos | List<[TaskEstimateDTO](#TaskEstimateDTO)> | 任务预计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 根据获取DEFAULT
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 根据获取DEFAULT1
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefaults

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象列表 |

### 根据查询DEFAULT1
#### 访问路径
/products/{product_id}/productmodules/{productmodule_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefaults

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |/r/n| 2 | productmodule_id | Long | 需求模块主键ID |/r/n| 3 | story_id | Long | 需求主键ID |/r/n| 4 | task_id | Long | 任务主键ID |
| 5 | context | [TaskEstimateSearchContext](#TaskEstimateSearchContext) | 任务预计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[TaskEstimateDTO](#TaskEstimateDTO)>：任务预计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### TaskEstimateDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | account | String | 允许 | 用户 |
| 2 | left | Double | 允许 | 预计剩余 |
| 3 | consumed | Double | 允许 | 总计消耗 |
| 4 | id | Long | 不可 | 编号 |
| 5 | date | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 6 | work | String | 允许 | work |
| 7 | task | Long | 允许 | 任务 |
| 8 | dates | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 9 | <动态属性> | Object | 允许 | 支持动态属性 |

#### TaskEstimateSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_id_like | Long | 允许 | 条件字段：id<br>条件组合方式：`%like%` |
| 2 | n_task_eq | Long | 允许 | 条件字段：task<br>条件组合方式：`=` |
| 3 | customcond | String | 允许 | 自定义查询条件 |
| 4 | customparams | String | 允许 | 自定义查询参数 |
| 5 | query | String | 允许 | 快速搜索 |
| 6 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 7 | page | int | 允许 | 当前页数<br>默认值0 |
| 8 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 9 | sort | String | 允许 | 排序 |
