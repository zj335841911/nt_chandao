# 服务接口-ZT_STORYSPEC
## 接口说明
需求描述

## 接口清单
### 新建需求描述
#### 访问路径
/storyspecs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storyspecdto | [StorySpecDTO](#StorySpecDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StorySpecDTO](#StorySpecDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建需求描述
#### 访问路径
/storyspecs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 更新需求描述
#### 访问路径
/storyspecs/{storyspec_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storyspec_id | String | 待补充 |
| 2 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StorySpecDTO](#StorySpecDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新需求描述
#### 访问路径
/storyspecs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 删除需求描述
#### 访问路径
/storyspecs/{storyspec_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storyspec_id | String | 待补充 |

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

### 批量删除需求描述
#### 访问路径
/storyspecs/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | ids | List<String> | 待补充 |

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

### 获取需求描述
#### 访问路径
/storyspecs/{storyspec_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storyspec_id | String | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StorySpecDTO](#StorySpecDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查需求描述
#### 访问路径
/storyspecs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storyspecdto | [StorySpecDTO](#StorySpecDTO) | 待补充 |

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

### 保存需求描述
#### 访问路径
/storyspecs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 批量保存需求描述
#### 访问路径
/storyspecs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 获取DEFAULT
#### 访问路径
/storyspecs/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

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
/storyspecs/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取版本
#### 访问路径
/storyspecs/fetchversion

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询版本
#### 访问路径
/storyspecs/searchversion

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立需求描述
#### 访问路径
/stories/{story_id}/storyspecs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storyspecdto | [StorySpecDTO](#StorySpecDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StorySpecDTO](#StorySpecDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立需求描述
#### 访问路径
/stories/{story_id}/storyspecs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 根据更新需求描述
#### 访问路径
/stories/{story_id}/storyspecs/{storyspec_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storyspec_id | String | 待补充 |
| 3 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StorySpecDTO](#StorySpecDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新需求描述
#### 访问路径
/stories/{story_id}/storyspecs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 根据删除需求描述
#### 访问路径
/stories/{story_id}/storyspecs/{storyspec_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storyspec_id | String | 待补充 |

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

### 根据批量删除需求描述
#### 访问路径
/stories/{story_id}/storyspecs/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | ids | List<String> | 待补充 |

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

### 根据获取需求描述
#### 访问路径
/stories/{story_id}/storyspecs/{storyspec_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storyspec_id | String | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StorySpecDTO](#StorySpecDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查需求描述
#### 访问路径
/stories/{story_id}/storyspecs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storyspecdto | [StorySpecDTO](#StorySpecDTO) | 待补充 |

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

### 根据保存需求描述
#### 访问路径
/stories/{story_id}/storyspecs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 根据批量保存需求描述
#### 访问路径
/stories/{story_id}/storyspecs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 根据获取版本
#### 访问路径
/stories/{story_id}/storyspecs/fetchversion

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本
#### 访问路径
/stories/{story_id}/storyspecs/searchversion

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本
#### 访问路径
/stories/{story_id}/storyspecs/fetchversion

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本
#### 访问路径
/stories/{story_id}/storyspecs/searchversion

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | story_id | Long | 待补充 |
| 2 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | storyspecdto | [StorySpecDTO](#StorySpecDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StorySpecDTO](#StorySpecDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 根据更新需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/{storyspec_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | storyspec_id | String | 待补充 |
| 4 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StorySpecDTO](#StorySpecDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 根据删除需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/{storyspec_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | storyspec_id | String | 待补充 |

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

### 根据批量删除需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | ids | List<String> | 待补充 |

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

### 根据获取需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/{storyspec_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | storyspec_id | String | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[StorySpecDTO](#StorySpecDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | storyspecdto | [StorySpecDTO](#StorySpecDTO) | 待补充 |

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

### 根据保存需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 根据批量保存需求描述
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | storyspecdtos | List<[StorySpecDTO](#StorySpecDTO)> | 待补充 |

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

### 根据获取版本
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/fetchversion

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/searchversion

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取版本
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/fetchversion

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询版本
#### 访问路径
/products/{product_id}/stories/{story_id}/storyspecs/searchversion

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | story_id | Long | 待补充 |
| 3 | context | [StorySpecSearchContext](#StorySpecSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[StorySpecDTO](#StorySpecDTO)>>

#### 权限说明
待补充

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
#### StorySpecDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### StorySpecSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

