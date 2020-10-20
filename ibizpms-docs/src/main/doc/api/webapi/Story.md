# 服务接口-ZT_STORY
## 接口说明


## 接口清单
### 新建需求
#### 访问路径
/stories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storydto | [StoryDTO](#StoryDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

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
/stories/{story_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

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
/stories/{story_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |

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
/stories/batch

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
/stories/{story_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/allpush

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/assignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/batchassignto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/batchchangebranch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/batchchangemodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/batchchangeplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/batchchangestage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/batchclose

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/batchreview

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/batchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/bugtostory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/buildbatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/buildlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/buildunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/buildunlinkstorys

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/change

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storydto | [StoryDTO](#StoryDTO) | 待补充 |

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
/stories/{story_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/getstoryspec

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/getstoryspecs

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/importplanstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/projectbatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/projectlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/projectunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/projectunlinkstorys

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/push

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/releasebatchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/releaselinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/releaseunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/resetreviewedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/review

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

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
/stories/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

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
/stories/{story_id}/sendmessage

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/sendmsgpreprocess

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/storyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/storynfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/syncfromibiz

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/{story_id}/unlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storydtos | List<[StoryDTO](#StoryDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StoryDTO](#StoryDTO)>

#### 权限说明
待补充

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
/stories/fetchassignedtomystory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchassignedtomystory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchbugstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchbugstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchbuildlinkcompletedstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchbuildlinkcompletedstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchbuildlinkablestories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchbuildlinkablestories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchbuildstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchbuildstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchbymodule

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchbymodule

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchcasestory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchcasestory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchgetproductstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchgetproductstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchmycuropenedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchmycuropenedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchmyfavorites

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchmyfavorites

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchparentdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchparentdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchprojectlinkstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchprojectlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchprojectstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchprojectstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchreleaselinkablestories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchreleaselinkablestories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchreleasestories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchreleasestories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchreportstories

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchreportstories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchstorychild

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchstorychild

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchstoryrelated

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchstoryrelated

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchsubstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchsubstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/fetchtaskrelatedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
/stories/searchtaskrelatedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySearchContext](#StorySearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StoryDTO](#StoryDTO)>>

#### 权限说明
待补充

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
#### StoryDTO
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
