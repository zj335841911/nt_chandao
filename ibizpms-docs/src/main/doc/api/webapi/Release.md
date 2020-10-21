# 服务接口-ZT_RELEASE
## 接口说明
发布

## 接口清单
### 新建发布
#### 访问路径
/releases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | releasedto | [ReleaseDTO](#ReleaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建发布
#### 访问路径
/releases/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

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

### 更新发布
#### 访问路径
/releases/{release_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新发布
#### 访问路径
/releases/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

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

### 删除发布
#### 访问路径
/releases/{release_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |

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

### 批量删除发布
#### 访问路径
/releases/batch

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

### 获取发布
#### 访问路径
/releases/{release_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 状态变更（激活）
#### 访问路径
/releases/{release_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/releases/{release_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 状态变更
#### 访问路径
/releases/{release_id}/changestatus

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查发布
#### 访问路径
/releases/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | releasedto | [ReleaseDTO](#ReleaseDTO) | 待补充 |

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

### 关联Bug
#### 访问路径
/releases/{release_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/releases/{release_id}/linkbugbybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/releases/{release_id}/linkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联需求
#### 访问路径
/releases/{release_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 一键发布
#### 访问路径
/releases/{release_id}/oneclickrelease

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存发布
#### 访问路径
/releases/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

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

### 批量保存发布
#### 访问路径
/releases/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

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

### 状态变更（停止维护）
#### 访问路径
/releases/{release_id}/terminate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/releases/{release_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | release_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/releases/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ReleaseSearchContext](#ReleaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ReleaseDTO](#ReleaseDTO)>>

#### 权限说明
待补充

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
/releases/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ReleaseSearchContext](#ReleaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ReleaseDTO](#ReleaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试报告关联发布
#### 访问路径
/releases/fetchreportrelease

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ReleaseSearchContext](#ReleaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ReleaseDTO](#ReleaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询测试报告关联发布
#### 访问路径
/releases/searchreportrelease

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ReleaseSearchContext](#ReleaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ReleaseDTO](#ReleaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立发布
#### 访问路径
/products/{product_id}/releases

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | releasedto | [ReleaseDTO](#ReleaseDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立发布
#### 访问路径
/products/{product_id}/releases/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

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

### 根据更新发布
#### 访问路径
/products/{product_id}/releases/{release_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新发布
#### 访问路径
/products/{product_id}/releases/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

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

### 根据删除发布
#### 访问路径
/products/{product_id}/releases/{release_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |

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

### 根据批量删除发布
#### 访问路径
/products/{product_id}/releases/batch

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

### 根据获取发布
#### 访问路径
/products/{product_id}/releases/{release_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 状态变更（激活）
#### 访问路径
/products/{product_id}/releases/{release_id}/activate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/products/{product_id}/releases/{release_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 状态变更
#### 访问路径
/products/{product_id}/releases/{release_id}/changestatus

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查发布
#### 访问路径
/products/{product_id}/releases/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | releasedto | [ReleaseDTO](#ReleaseDTO) | 待补充 |

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

### 关联Bug
#### 访问路径
/products/{product_id}/releases/{release_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/products/{product_id}/releases/{release_id}/linkbugbybug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/products/{product_id}/releases/{release_id}/linkbugbyleftbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 关联需求
#### 访问路径
/products/{product_id}/releases/{release_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 一键发布
#### 访问路径
/products/{product_id}/releases/{release_id}/oneclickrelease

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存发布
#### 访问路径
/products/{product_id}/releases/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

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

### 根据批量保存发布
#### 访问路径
/products/{product_id}/releases/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

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

### 状态变更（停止维护）
#### 访问路径
/products/{product_id}/releases/{release_id}/terminate

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/products/{product_id}/releases/{release_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | release_id | Long | 待补充 |
| 3 | releasedtos | List<[ReleaseDTO](#ReleaseDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ReleaseDTO](#ReleaseDTO)>

#### 权限说明
待补充

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
/products/{product_id}/releases/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [ReleaseSearchContext](#ReleaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ReleaseDTO](#ReleaseDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/releases/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [ReleaseSearchContext](#ReleaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ReleaseDTO](#ReleaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取测试报告关联发布
#### 访问路径
/products/{product_id}/releases/fetchreportrelease

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [ReleaseSearchContext](#ReleaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ReleaseDTO](#ReleaseDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询测试报告关联发布
#### 访问路径
/products/{product_id}/releases/searchreportrelease

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [ReleaseSearchContext](#ReleaseSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ReleaseDTO](#ReleaseDTO)>>

#### 权限说明
待补充

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
#### ReleaseDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### ReleaseSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

