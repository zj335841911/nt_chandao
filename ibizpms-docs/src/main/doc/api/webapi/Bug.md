# 服务接口-ZT_BUG
## 接口说明
Bug

## 接口清单
### 新建Bug
#### 访问路径
/bugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bugdto | [BugDTO](#BugDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建Bug
#### 访问路径
/bugs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 更新Bug
#### 访问路径
/bugs/{bug_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新Bug
#### 访问路径
/bugs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 删除Bug
#### 访问路径
/bugs/{bug_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |

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

### 批量删除Bug
#### 访问路径
/bugs/batch

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

### 获取Bug
#### 访问路径
/bugs/{bug_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/bugs/{bug_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 指派
#### 访问路径
/bugs/{bug_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/bugs/{bug_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### Bug收藏
#### 访问路径
/bugs/{bug_id}/bugfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 取消收藏
#### 访问路径
/bugs/{bug_id}/bugnfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本批量解除关联Bug
#### 访问路径
/bugs/{bug_id}/buildbatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本关联Bug
#### 访问路径
/bugs/{bug_id}/buildlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联Bug
#### 访问路径
/bugs/{bug_id}/buildunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查Bug
#### 访问路径
/bugs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bugdto | [BugDTO](#BugDTO) | 待补充 |

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
/bugs/{bug_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认
#### 访问路径
/bugs/{bug_id}/confirm

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug
#### 访问路径
/bugs/{bug_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/bugs/{bug_id}/releaasebatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（解决Bug）
#### 访问路径
/bugs/{bug_id}/releaselinkbugbybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（遗留Bug）
#### 访问路径
/bugs/{bug_id}/releaselinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除关联Bug（遗留Bug）
#### 访问路径
/bugs/{bug_id}/releaseunlinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/bugs/{bug_id}/releaseunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解决
#### 访问路径
/bugs/{bug_id}/resolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存Bug
#### 访问路径
/bugs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 批量保存Bug
#### 访问路径
/bugs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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
/bugs/{bug_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/bugs/{bug_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 转需求
#### 访问路径
/bugs/{bug_id}/tostory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/bugs/{bug_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/bugs/{bug_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | bug_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取指派给我Bug
#### 访问路径
/bugs/fetchassignedtomybug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询指派给我Bug
#### 访问路径
/bugs/searchassignedtomybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取版本关联bug(遗留的)
#### 访问路径
/bugs/fetchbugsbybuild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询版本关联bug(遗留的)
#### 访问路径
/bugs/searchbugsbybuild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取版本关联Bug（已解决）
#### 访问路径
/bugs/fetchbuildbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询版本关联Bug（已解决）
#### 访问路径
/bugs/searchbuildbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取版本可关联的已解决的Bugs集合
#### 访问路径
/bugs/fetchbuildlinkresolvedbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询版本可关联的已解决的Bugs集合
#### 访问路径
/bugs/searchbuildlinkresolvedbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取版本关联Bug（已解决）
#### 访问路径
/bugs/fetchbuildopenbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询版本关联Bug（已解决）
#### 访问路径
/bugs/searchbuildopenbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug
#### 访问路径
/bugs/fetchbuildproducebug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug
#### 访问路径
/bugs/searchbuildproducebug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug
#### 访问路径
/bugs/fetchbuildproducebugmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug
#### 访问路径
/bugs/searchbuildproducebugmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/bugs/fetchbuildproducebugmodule_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/bugs/searchbuildproducebugmodule_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug-创建分类
#### 访问路径
/bugs/fetchbuildproducebugopenedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug-创建分类
#### 访问路径
/bugs/searchbuildproducebugopenedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/bugs/fetchbuildproducebugopenedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/bugs/searchbuildproducebugopenedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug（已解决）
#### 访问路径
/bugs/fetchbuildproducebugres

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug（已解决）
#### 访问路径
/bugs/searchbuildproducebugres

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug-解决者分布
#### 访问路径
/bugs/fetchbuildproducebugresolvedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug-解决者分布
#### 访问路径
/bugs/searchbuildproducebugresolvedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug-解决者分布(项目)
#### 访问路径
/bugs/fetchbuildproducebugresolvedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug-解决者分布(项目)
#### 访问路径
/bugs/searchbuildproducebugresolvedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug-解决方案分布(项目)
#### 访问路径
/bugs/fetchbuildproducebugresolution_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug-解决方案分布(项目)
#### 访问路径
/bugs/searchbuildproducebugresolution_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug-严重程度分布(项目)
#### 访问路径
/bugs/fetchbuildproducebugseverity_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug-严重程度分布(项目)
#### 访问路径
/bugs/searchbuildproducebugseverity_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug-状态分布(项目)
#### 访问路径
/bugs/fetchbuildproducebugstatus_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug-状态分布(项目)
#### 访问路径
/bugs/searchbuildproducebugstatus_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Build产生的Bug-类型分布(项目)
#### 访问路径
/bugs/fetchbuildproducebugtype_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Build产生的Bug-类型分布(项目)
#### 访问路径
/bugs/searchbuildproducebugtype_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取当前用户解决的Bug
#### 访问路径
/bugs/fetchcuruserresolve

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询当前用户解决的Bug
#### 访问路径
/bugs/searchcuruserresolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/bugs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/bugs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取累计创建的Bug数
#### 访问路径
/bugs/fetchmycuropenedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询累计创建的Bug数
#### 访问路径
/bugs/searchmycuropenedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/bugs/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/bugs/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取遗留得Bug(项目)
#### 访问路径
/bugs/fetchprojectbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询遗留得Bug(项目)
#### 访问路径
/bugs/searchprojectbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取发布关联Bug（已解决）
#### 访问路径
/bugs/fetchreleasebugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询发布关联Bug（已解决）
#### 访问路径
/bugs/searchreleasebugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取发布关联Bug（已解决）
#### 访问路径
/bugs/fetchreleaseleftbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询发布关联Bug（已解决）
#### 访问路径
/bugs/searchreleaseleftbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取发布可关联的bug（遗留）
#### 访问路径
/bugs/fetchreleaselinkableleftbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询发布可关联的bug（遗留）
#### 访问路径
/bugs/searchreleaselinkableleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取发布可关联的bug（已解决）
#### 访问路径
/bugs/fetchreleaselinkableresolvedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询发布可关联的bug（已解决）
#### 访问路径
/bugs/searchreleaselinkableresolvedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取发布关联Bug（未解决）
#### 访问路径
/bugs/fetchreportbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询发布关联Bug（未解决）
#### 访问路径
/bugs/searchreportbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立Bug
#### 访问路径
/products/{product_id}/bugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bugdto | [BugDTO](#BugDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立Bug
#### 访问路径
/products/{product_id}/bugs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据更新Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新Bug
#### 访问路径
/products/{product_id}/bugs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据删除Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |

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

### 根据批量删除Bug
#### 访问路径
/products/{product_id}/bugs/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
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

### 根据获取Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/products/{product_id}/bugs/{bug_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 指派
#### 访问路径
/products/{product_id}/bugs/{bug_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### Bug收藏
#### 访问路径
/products/{product_id}/bugs/{bug_id}/bugfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 取消收藏
#### 访问路径
/products/{product_id}/bugs/{bug_id}/bugnfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本批量解除关联Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}/buildbatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本关联Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}/buildlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}/buildunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查Bug
#### 访问路径
/products/{product_id}/bugs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bugdto | [BugDTO](#BugDTO) | 待补充 |

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
/products/{product_id}/bugs/{bug_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认
#### 访问路径
/products/{product_id}/bugs/{bug_id}/confirm

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}/releaasebatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（解决Bug）
#### 访问路径
/products/{product_id}/bugs/{bug_id}/releaselinkbugbybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（遗留Bug）
#### 访问路径
/products/{product_id}/bugs/{bug_id}/releaselinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除关联Bug（遗留Bug）
#### 访问路径
/products/{product_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}/releaseunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解决
#### 访问路径
/products/{product_id}/bugs/{bug_id}/resolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存Bug
#### 访问路径
/products/{product_id}/bugs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据批量保存Bug
#### 访问路径
/products/{product_id}/bugs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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
/products/{product_id}/bugs/{bug_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/products/{product_id}/bugs/{bug_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 转需求
#### 访问路径
/products/{product_id}/bugs/{bug_id}/tostory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/products/{product_id}/bugs/{bug_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/products/{product_id}/bugs/{bug_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取指派给我Bug
#### 访问路径
/products/{product_id}/bugs/fetchassignedtomybug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询指派给我Bug
#### 访问路径
/products/{product_id}/bugs/searchassignedtomybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联bug(遗留的)
#### 访问路径
/products/{product_id}/bugs/fetchbugsbybuild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联bug(遗留的)
#### 访问路径
/products/{product_id}/bugs/searchbugsbybuild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/fetchbuildbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/searchbuildbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本可关联的已解决的Bugs集合
#### 访问路径
/products/{product_id}/bugs/fetchbuildlinkresolvedbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本可关联的已解决的Bugs集合
#### 访问路径
/products/{product_id}/bugs/searchbuildlinkresolvedbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/fetchbuildopenbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/searchbuildopenbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugmodule_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugmodule_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建分类
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugopenedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建分类
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugopenedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugopenedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugopenedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugres

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugres

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决者分布
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugresolvedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决者分布
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugresolvedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决者分布(项目)
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugresolvedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决者分布(项目)
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugresolvedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决方案分布(项目)
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugresolution_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决方案分布(项目)
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugresolution_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-严重程度分布(项目)
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugseverity_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-严重程度分布(项目)
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugseverity_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-状态分布(项目)
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugstatus_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-状态分布(项目)
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugstatus_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-类型分布(项目)
#### 访问路径
/products/{product_id}/bugs/fetchbuildproducebugtype_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-类型分布(项目)
#### 访问路径
/products/{product_id}/bugs/searchbuildproducebugtype_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取当前用户解决的Bug
#### 访问路径
/products/{product_id}/bugs/fetchcuruserresolve

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询当前用户解决的Bug
#### 访问路径
/products/{product_id}/bugs/searchcuruserresolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/bugs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/bugs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取累计创建的Bug数
#### 访问路径
/products/{product_id}/bugs/fetchmycuropenedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询累计创建的Bug数
#### 访问路径
/products/{product_id}/bugs/searchmycuropenedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取我的收藏
#### 访问路径
/products/{product_id}/bugs/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询我的收藏
#### 访问路径
/products/{product_id}/bugs/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取遗留得Bug(项目)
#### 访问路径
/products/{product_id}/bugs/fetchprojectbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询遗留得Bug(项目)
#### 访问路径
/products/{product_id}/bugs/searchprojectbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/fetchreleasebugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/searchreleasebugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/fetchreleaseleftbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（已解决）
#### 访问路径
/products/{product_id}/bugs/searchreleaseleftbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布可关联的bug（遗留）
#### 访问路径
/products/{product_id}/bugs/fetchreleaselinkableleftbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布可关联的bug（遗留）
#### 访问路径
/products/{product_id}/bugs/searchreleaselinkableleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布可关联的bug（已解决）
#### 访问路径
/products/{product_id}/bugs/fetchreleaselinkableresolvedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布可关联的bug（已解决）
#### 访问路径
/products/{product_id}/bugs/searchreleaselinkableresolvedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（未解决）
#### 访问路径
/products/{product_id}/bugs/fetchreportbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（未解决）
#### 访问路径
/products/{product_id}/bugs/searchreportbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立Bug
#### 访问路径
/stories/{story_id}/bugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bugdto | [BugDTO](#BugDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立Bug
#### 访问路径
/stories/{story_id}/bugs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据更新Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新Bug
#### 访问路径
/stories/{story_id}/bugs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据删除Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |

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

### 根据批量删除Bug
#### 访问路径
/stories/{story_id}/bugs/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
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

### 根据获取Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/bugs/{bug_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 指派
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### Bug收藏
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/bugfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 取消收藏
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/bugnfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本批量解除关联Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/buildbatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本关联Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/buildlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/buildunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查Bug
#### 访问路径
/stories/{story_id}/bugs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bugdto | [BugDTO](#BugDTO) | 待补充 |

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
/stories/{story_id}/bugs/{bug_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/confirm

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/releaasebatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（解决Bug）
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/releaselinkbugbybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（遗留Bug）
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/releaselinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除关联Bug（遗留Bug）
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/releaseunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解决
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/resolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存Bug
#### 访问路径
/stories/{story_id}/bugs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据批量保存Bug
#### 访问路径
/stories/{story_id}/bugs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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
/stories/{story_id}/bugs/{bug_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/bugs/{bug_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 转需求
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/tostory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/stories/{story_id}/bugs/{bug_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/bugs/{bug_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取指派给我Bug
#### 访问路径
/stories/{story_id}/bugs/fetchassignedtomybug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询指派给我Bug
#### 访问路径
/stories/{story_id}/bugs/searchassignedtomybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联bug(遗留的)
#### 访问路径
/stories/{story_id}/bugs/fetchbugsbybuild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联bug(遗留的)
#### 访问路径
/stories/{story_id}/bugs/searchbugsbybuild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/fetchbuildbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/searchbuildbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本可关联的已解决的Bugs集合
#### 访问路径
/stories/{story_id}/bugs/fetchbuildlinkresolvedbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本可关联的已解决的Bugs集合
#### 访问路径
/stories/{story_id}/bugs/searchbuildlinkresolvedbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/fetchbuildopenbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/searchbuildopenbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugmodule_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugmodule_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建分类
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugopenedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建分类
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugopenedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugopenedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugopenedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugres

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugres

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决者分布
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugresolvedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决者分布
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugresolvedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决者分布(项目)
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugresolvedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决者分布(项目)
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugresolvedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决方案分布(项目)
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugresolution_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决方案分布(项目)
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugresolution_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-严重程度分布(项目)
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugseverity_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-严重程度分布(项目)
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugseverity_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-状态分布(项目)
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugstatus_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-状态分布(项目)
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugstatus_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-类型分布(项目)
#### 访问路径
/stories/{story_id}/bugs/fetchbuildproducebugtype_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-类型分布(项目)
#### 访问路径
/stories/{story_id}/bugs/searchbuildproducebugtype_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取当前用户解决的Bug
#### 访问路径
/stories/{story_id}/bugs/fetchcuruserresolve

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询当前用户解决的Bug
#### 访问路径
/stories/{story_id}/bugs/searchcuruserresolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/stories/{story_id}/bugs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/stories/{story_id}/bugs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取累计创建的Bug数
#### 访问路径
/stories/{story_id}/bugs/fetchmycuropenedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询累计创建的Bug数
#### 访问路径
/stories/{story_id}/bugs/searchmycuropenedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取我的收藏
#### 访问路径
/stories/{story_id}/bugs/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询我的收藏
#### 访问路径
/stories/{story_id}/bugs/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取遗留得Bug(项目)
#### 访问路径
/stories/{story_id}/bugs/fetchprojectbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询遗留得Bug(项目)
#### 访问路径
/stories/{story_id}/bugs/searchprojectbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/fetchreleasebugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/searchreleasebugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/fetchreleaseleftbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/searchreleaseleftbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布可关联的bug（遗留）
#### 访问路径
/stories/{story_id}/bugs/fetchreleaselinkableleftbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布可关联的bug（遗留）
#### 访问路径
/stories/{story_id}/bugs/searchreleaselinkableleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布可关联的bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/fetchreleaselinkableresolvedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布可关联的bug（已解决）
#### 访问路径
/stories/{story_id}/bugs/searchreleaselinkableresolvedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（未解决）
#### 访问路径
/stories/{story_id}/bugs/fetchreportbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（未解决）
#### 访问路径
/stories/{story_id}/bugs/searchreportbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立Bug
#### 访问路径
/projects/{project_id}/bugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bugdto | [BugDTO](#BugDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立Bug
#### 访问路径
/projects/{project_id}/bugs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据更新Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新Bug
#### 访问路径
/projects/{project_id}/bugs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据删除Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |

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

### 根据批量删除Bug
#### 访问路径
/projects/{project_id}/bugs/batch

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

### 根据获取Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/bugs/{bug_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 指派
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### Bug收藏
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/bugfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 取消收藏
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/bugnfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本批量解除关联Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/buildbatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本关联Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/buildlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/buildunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查Bug
#### 访问路径
/projects/{project_id}/bugs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bugdto | [BugDTO](#BugDTO) | 待补充 |

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
/projects/{project_id}/bugs/{bug_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/confirm

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/releaasebatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（解决Bug）
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/releaselinkbugbybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（遗留Bug）
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/releaselinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除关联Bug（遗留Bug）
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/releaseunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解决
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/resolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存Bug
#### 访问路径
/projects/{project_id}/bugs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据批量保存Bug
#### 访问路径
/projects/{project_id}/bugs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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
/projects/{project_id}/bugs/{bug_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/bugs/{bug_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 转需求
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/tostory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/projects/{project_id}/bugs/{bug_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/projects/{project_id}/bugs/{bug_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | bug_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取指派给我Bug
#### 访问路径
/projects/{project_id}/bugs/fetchassignedtomybug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询指派给我Bug
#### 访问路径
/projects/{project_id}/bugs/searchassignedtomybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联bug(遗留的)
#### 访问路径
/projects/{project_id}/bugs/fetchbugsbybuild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联bug(遗留的)
#### 访问路径
/projects/{project_id}/bugs/searchbugsbybuild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/fetchbuildbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/searchbuildbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本可关联的已解决的Bugs集合
#### 访问路径
/projects/{project_id}/bugs/fetchbuildlinkresolvedbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本可关联的已解决的Bugs集合
#### 访问路径
/projects/{project_id}/bugs/searchbuildlinkresolvedbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/fetchbuildopenbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/searchbuildopenbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugmodule_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugmodule_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建分类
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugopenedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建分类
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugopenedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugopenedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugopenedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugres

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugres

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决者分布
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugresolvedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决者分布
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugresolvedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决者分布(项目)
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugresolvedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决者分布(项目)
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugresolvedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决方案分布(项目)
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugresolution_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决方案分布(项目)
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugresolution_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-严重程度分布(项目)
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugseverity_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-严重程度分布(项目)
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugseverity_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-状态分布(项目)
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugstatus_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-状态分布(项目)
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugstatus_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-类型分布(项目)
#### 访问路径
/projects/{project_id}/bugs/fetchbuildproducebugtype_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-类型分布(项目)
#### 访问路径
/projects/{project_id}/bugs/searchbuildproducebugtype_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取当前用户解决的Bug
#### 访问路径
/projects/{project_id}/bugs/fetchcuruserresolve

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询当前用户解决的Bug
#### 访问路径
/projects/{project_id}/bugs/searchcuruserresolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/projects/{project_id}/bugs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/projects/{project_id}/bugs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取累计创建的Bug数
#### 访问路径
/projects/{project_id}/bugs/fetchmycuropenedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询累计创建的Bug数
#### 访问路径
/projects/{project_id}/bugs/searchmycuropenedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取我的收藏
#### 访问路径
/projects/{project_id}/bugs/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询我的收藏
#### 访问路径
/projects/{project_id}/bugs/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取遗留得Bug(项目)
#### 访问路径
/projects/{project_id}/bugs/fetchprojectbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询遗留得Bug(项目)
#### 访问路径
/projects/{project_id}/bugs/searchprojectbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/fetchreleasebugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/searchreleasebugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/fetchreleaseleftbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/searchreleaseleftbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布可关联的bug（遗留）
#### 访问路径
/projects/{project_id}/bugs/fetchreleaselinkableleftbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布可关联的bug（遗留）
#### 访问路径
/projects/{project_id}/bugs/searchreleaselinkableleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布可关联的bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/fetchreleaselinkableresolvedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布可关联的bug（已解决）
#### 访问路径
/projects/{project_id}/bugs/searchreleaselinkableresolvedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（未解决）
#### 访问路径
/projects/{project_id}/bugs/fetchreportbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（未解决）
#### 访问路径
/projects/{project_id}/bugs/searchreportbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bugdto | [BugDTO](#BugDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据更新Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据删除Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |

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

### 根据批量删除Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
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

### 根据获取Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 指派
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### Bug收藏
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/bugfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 取消收藏
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/bugnfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本批量解除关联Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/buildbatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本关联Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/buildlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/buildunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bugdto | [BugDTO](#BugDTO) | 待补充 |

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
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 确认
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/confirm

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaasebatchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（解决Bug）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaselinkbugbybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联Bug（遗留Bug）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaselinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 移除关联Bug（遗留Bug）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaseunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解决
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/resolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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

### 根据批量保存Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

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
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 转需求
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/tostory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/bugs/{bug_id}/updatestoryversion

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | bug_id | Long | 待补充 |
| 4 | bugdtos | List<[BugDTO](#BugDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[BugDTO](#BugDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取指派给我Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchassignedtomybug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询指派给我Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchassignedtomybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联bug(遗留的)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbugsbybuild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联bug(遗留的)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbugsbybuild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本可关联的已解决的Bugs集合
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildlinkresolvedbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本可关联的已解决的Bugs集合
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildlinkresolvedbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本关联Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildopenbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本关联Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildopenbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugmodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugmodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugmodule_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugmodule_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建分类
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugopenedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建分类
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugopenedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-创建者分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugopenedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-创建者分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugopenedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugres

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugres

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决者分布
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugresolvedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决者分布
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugresolvedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决者分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugresolvedby_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决者分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugresolvedby_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-解决方案分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugresolution_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-解决方案分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugresolution_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-严重程度分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugseverity_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-严重程度分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugseverity_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-状态分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugstatus_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-状态分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugstatus_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取Build产生的Bug-类型分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugtype_project

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询Build产生的Bug-类型分布(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugtype_project

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取当前用户解决的Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchcuruserresolve

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询当前用户解决的Bug
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchcuruserresolve

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/bugs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/bugs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取累计创建的Bug数
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchmycuropenedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询累计创建的Bug数
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchmycuropenedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取我的收藏
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询我的收藏
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取遗留得Bug(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchprojectbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询遗留得Bug(项目)
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchprojectbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchreleasebugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchreleasebugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchreleaseleftbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchreleaseleftbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布可关联的bug（遗留）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchreleaselinkableleftbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布可关联的bug（遗留）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchreleaselinkableleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布可关联的bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchreleaselinkableresolvedbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布可关联的bug（已解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchreleaselinkableresolvedbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取发布关联Bug（未解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/fetchreportbugs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询发布关联Bug（未解决）
#### 访问路径
/products/{product_id}/stories/{story_id}/bugs/searchreportbugs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [BugSearchContext](#BugSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[BugDTO](#BugDTO)>>

#### 权限说明
待补充

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
#### BugDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### BugSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

