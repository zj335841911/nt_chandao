# 服务接口-IBZ_SUBSTORY
## 接口说明
需求

## 接口清单
### 新建需求
#### 访问路径
/substories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substorydto | [SubStoryDTO](#SubStoryDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建需求
#### 访问路径
/substories/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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

### 更新需求
#### 访问路径
/substories/{substory_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新需求
#### 访问路径
/substories/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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

### 删除需求
#### 访问路径
/substories/{substory_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |

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

### 批量删除需求
#### 访问路径
/substories/batch

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

### 获取需求
#### 访问路径
/substories/{substory_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/substories/{substory_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 全部推送
#### 访问路径
/substories/{substory_id}/allpush

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/substories/{substory_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量指派
#### 访问路径
/substories/{substory_id}/batchassignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量变更平台/分支
#### 访问路径
/substories/{substory_id}/batchchangebranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量变更模块
#### 访问路径
/substories/{substory_id}/batchchangemodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量关联计划
#### 访问路径
/substories/{substory_id}/batchchangeplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量变更阶段
#### 访问路径
/substories/{substory_id}/batchchangestage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量关闭
#### 访问路径
/substories/{substory_id}/batchclose

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量评审
#### 访问路径
/substories/{substory_id}/batchreview

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 计划批量解除关联需求
#### 访问路径
/substories/{substory_id}/batchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### bug转需求
#### 访问路径
/substories/{substory_id}/bugtostory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本批量解除关联需求
#### 访问路径
/substories/{substory_id}/buildbatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目关联需求
#### 访问路径
/substories/{substory_id}/buildlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联需求
#### 访问路径
/substories/{substory_id}/buildunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联需求
#### 访问路径
/substories/{substory_id}/buildunlinkstorys

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 变更
#### 访问路径
/substories/{substory_id}/change

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查需求
#### 访问路径
/substories/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substorydto | [SubStoryDTO](#SubStoryDTO) | 待补充 |

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
/substories/{substory_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取需求描述
#### 访问路径
/substories/{substory_id}/getstoryspec

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取需求描述
#### 访问路径
/substories/{substory_id}/getstoryspecs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目关联需求-按计划关联
#### 访问路径
/substories/{substory_id}/importplanstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 计划关联需求
#### 访问路径
/substories/{substory_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目批量解除关联需求
#### 访问路径
/substories/{substory_id}/projectbatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目关联需求
#### 访问路径
/substories/{substory_id}/projectlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目解除关联需求
#### 访问路径
/substories/{substory_id}/projectunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目解除关联需求
#### 访问路径
/substories/{substory_id}/projectunlinkstorys

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 推送
#### 访问路径
/substories/{substory_id}/push

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发布批量解除关联需求
#### 访问路径
/substories/{substory_id}/releasebatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发布关联需求
#### 访问路径
/substories/{substory_id}/releaselinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发布解除关联需求
#### 访问路径
/substories/{substory_id}/releaseunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 重置由谁评审
#### 访问路径
/substories/{substory_id}/resetreviewedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 评审
#### 访问路径
/substories/{substory_id}/review

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存需求
#### 访问路径
/substories/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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

### 批量保存需求
#### 访问路径
/substories/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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
/substories/{substory_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/substories/{substory_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 需求收藏
#### 访问路径
/substories/{substory_id}/storyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/substories/{substory_id}/storynfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 同步Ibz平台实体
#### 访问路径
/substories/{substory_id}/syncfromibiz

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 计划解除关联需求
#### 访问路径
/substories/{substory_id}/unlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | substory_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取指派给我的需求
#### 访问路径
/substories/fetchassignedtomystory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询指派给我的需求
#### 访问路径
/substories/searchassignedtomystory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取Bug相关需求
#### 访问路径
/substories/fetchbugstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询Bug相关需求
#### 访问路径
/substories/searchbugstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取版本关联已完成的需求（选择数据源）
#### 访问路径
/substories/fetchbuildlinkcompletedstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询版本关联已完成的需求（选择数据源）
#### 访问路径
/substories/searchbuildlinkcompletedstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取版本可关联的需求（产品内）
#### 访问路径
/substories/fetchbuildlinkablestories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询版本可关联的需求（产品内）
#### 访问路径
/substories/searchbuildlinkablestories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取获取版本相关需求
#### 访问路径
/substories/fetchbuildstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询获取版本相关需求
#### 访问路径
/substories/searchbuildstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

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
/substories/fetchbymodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

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
/substories/searchbymodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取相关用例需求
#### 访问路径
/substories/fetchcasestory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询相关用例需求
#### 访问路径
/substories/searchcasestory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

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
/substories/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

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
/substories/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取获取产品需求
#### 访问路径
/substories/fetchgetproductstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询获取产品需求
#### 访问路径
/substories/searchgetproductstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取所创建需求数和对应的优先级及状态
#### 访问路径
/substories/fetchmycuropenedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询所创建需求数和对应的优先级及状态
#### 访问路径
/substories/searchmycuropenedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

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
/substories/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

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
/substories/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取数据查询
#### 访问路径
/substories/fetchparentdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询数据查询
#### 访问路径
/substories/searchparentdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取项目关联需求
#### 访问路径
/substories/fetchprojectlinkstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询项目关联需求
#### 访问路径
/substories/searchprojectlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取项目相关需求
#### 访问路径
/substories/fetchprojectstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询项目相关需求
#### 访问路径
/substories/searchprojectstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取版本可关联的完成的需求
#### 访问路径
/substories/fetchreleaselinkablestories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询版本可关联的完成的需求
#### 访问路径
/substories/searchreleaselinkablestories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取获取产品发布相关需求
#### 访问路径
/substories/fetchreleasestories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询获取产品发布相关需求
#### 访问路径
/substories/searchreleasestories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

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
/substories/fetchreportstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

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
/substories/searchreportstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取获取产品发布相关需求
#### 访问路径
/substories/fetchstorychild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询获取产品发布相关需求
#### 访问路径
/substories/searchstorychild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取获取产品发布相关需求
#### 访问路径
/substories/fetchstoryrelated

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询获取产品发布相关需求
#### 访问路径
/substories/searchstoryrelated

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取需求细分
#### 访问路径
/substories/fetchsubstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询需求细分
#### 访问路径
/substories/searchsubstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取任务相关需求
#### 访问路径
/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询任务相关需求
#### 访问路径
/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立需求
#### 访问路径
/stories/{story_id}/substories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substorydto | [SubStoryDTO](#SubStoryDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立需求
#### 访问路径
/stories/{story_id}/substories/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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

### 根据更新需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新需求
#### 访问路径
/stories/{story_id}/substories/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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

### 根据删除需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |

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

### 根据批量删除需求
#### 访问路径
/stories/{story_id}/substories/batch

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

### 根据获取需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/substories/{substory_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 全部推送
#### 访问路径
/stories/{story_id}/substories/{substory_id}/allpush

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/substories/{substory_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量指派
#### 访问路径
/stories/{story_id}/substories/{substory_id}/batchassignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量变更平台/分支
#### 访问路径
/stories/{story_id}/substories/{substory_id}/batchchangebranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量变更模块
#### 访问路径
/stories/{story_id}/substories/{substory_id}/batchchangemodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量关联计划
#### 访问路径
/stories/{story_id}/substories/{substory_id}/batchchangeplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量变更阶段
#### 访问路径
/stories/{story_id}/substories/{substory_id}/batchchangestage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量关闭
#### 访问路径
/stories/{story_id}/substories/{substory_id}/batchclose

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量评审
#### 访问路径
/stories/{story_id}/substories/{substory_id}/batchreview

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 计划批量解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/batchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### bug转需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/bugtostory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本批量解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/buildbatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/buildlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/buildunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/buildunlinkstorys

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 变更
#### 访问路径
/stories/{story_id}/substories/{substory_id}/change

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查需求
#### 访问路径
/stories/{story_id}/substories/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substorydto | [SubStoryDTO](#SubStoryDTO) | 待补充 |

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
/stories/{story_id}/substories/{substory_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取需求描述
#### 访问路径
/stories/{story_id}/substories/{substory_id}/getstoryspec

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取需求描述
#### 访问路径
/stories/{story_id}/substories/{substory_id}/getstoryspecs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目关联需求-按计划关联
#### 访问路径
/stories/{story_id}/substories/{substory_id}/importplanstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 计划关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目批量解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/projectbatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/projectlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/projectunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/projectunlinkstorys

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 推送
#### 访问路径
/stories/{story_id}/substories/{substory_id}/push

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发布批量解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/releasebatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发布关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/releaselinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发布解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/releaseunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 重置由谁评审
#### 访问路径
/stories/{story_id}/substories/{substory_id}/resetreviewedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 评审
#### 访问路径
/stories/{story_id}/substories/{substory_id}/review

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存需求
#### 访问路径
/stories/{story_id}/substories/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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

### 根据批量保存需求
#### 访问路径
/stories/{story_id}/substories/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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
/stories/{story_id}/substories/{substory_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/substories/{substory_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 需求收藏
#### 访问路径
/stories/{story_id}/substories/{substory_id}/storyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/substories/{substory_id}/storynfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 同步Ibz平台实体
#### 访问路径
/stories/{story_id}/substories/{substory_id}/syncfromibiz

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 计划解除关联需求
#### 访问路径
/stories/{story_id}/substories/{substory_id}/unlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | substory_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substorydto | [SubStoryDTO](#SubStoryDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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

### 根据更新需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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

### 根据删除需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |

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

### 根据批量删除需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/batch

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

### 根据获取需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/substories/{substory_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 全部推送
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/allpush

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/substories/{substory_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量指派
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/batchassignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量变更平台/分支
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/batchchangebranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量变更模块
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/batchchangemodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量关联计划
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/batchchangeplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量变更阶段
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/batchchangestage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量关闭
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/batchclose

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量评审
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/batchreview

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 计划批量解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/batchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### bug转需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/bugtostory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本批量解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/buildbatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/buildlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/buildunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 版本解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/buildunlinkstorys

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 变更
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/change

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substorydto | [SubStoryDTO](#SubStoryDTO) | 待补充 |

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
/products/{product_id}/stories/{story_id}/substories/{substory_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/getstoryspec

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/getstoryspecs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目关联需求-按计划关联
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/importplanstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 计划关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目批量解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/projectbatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/projectlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/projectunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 项目解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/projectunlinkstorys

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 推送
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/push

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发布批量解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/releasebatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发布关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/releaselinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 发布解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/releaseunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 重置由谁评审
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/resetreviewedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 评审
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/review

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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

### 根据批量保存需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

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
/products/{product_id}/stories/{story_id}/substories/{substory_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/substories/{substory_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 需求收藏
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/storyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

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
/products/{product_id}/stories/{story_id}/substories/{substory_id}/storynfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 同步Ibz平台实体
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/syncfromibiz

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 计划解除关联需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/{substory_id}/unlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | substory_id | Long | 待补充 |
| 4 | substorydtos | List<[SubStoryDTO](#SubStoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubStoryDTO](#SubStoryDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询任务相关需求
#### 访问路径
/products/{product_id}/stories/{story_id}/substories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubStoryDTO](#SubStoryDTO)>>

#### 权限说明
待补充

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
#### SubStoryDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### StorySearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

