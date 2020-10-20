# 服务接口-用户年度工作内容统计
## 接口说明


## 接口清单
### 新建用户年度工作内容统计
#### 访问路径
/useryearworkstats

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstatsdto | [UserYearWorkStatsDTO](#UserYearWorkStatsDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建用户年度工作内容统计
#### 访问路径
/useryearworkstats/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

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

### 更新用户年度工作内容统计
#### 访问路径
/useryearworkstats/{useryearworkstats_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstats_id | Long | 待补充 |
| 2 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新用户年度工作内容统计
#### 访问路径
/useryearworkstats/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

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

### 删除用户年度工作内容统计
#### 访问路径
/useryearworkstats/{useryearworkstats_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstats_id | Long | 待补充 |

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

### 批量删除用户年度工作内容统计
#### 访问路径
/useryearworkstats/batch

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

### 获取用户年度工作内容统计
#### 访问路径
/useryearworkstats/{useryearworkstats_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstats_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查用户年度工作内容统计
#### 访问路径
/useryearworkstats/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstatsdto | [UserYearWorkStatsDTO](#UserYearWorkStatsDTO) | 待补充 |

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

### 获取研发人员相关数据
#### 访问路径
/useryearworkstats/{useryearworkstats_id}/getdevinfomation

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstats_id | Long | 待补充 |
| 2 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取产品经理相关数据
#### 访问路径
/useryearworkstats/{useryearworkstats_id}/getpoinfomation

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstats_id | Long | 待补充 |
| 2 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取测试人员相关数据
#### 访问路径
/useryearworkstats/{useryearworkstats_id}/getqainfomation

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstats_id | Long | 待补充 |
| 2 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取用户所选年度的动作
#### 访问路径
/useryearworkstats/{useryearworkstats_id}/getuseryearaction

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstats_id | Long | 待补充 |
| 2 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存用户年度工作内容统计
#### 访问路径
/useryearworkstats/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

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

### 批量保存用户年度工作内容统计
#### 访问路径
/useryearworkstats/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

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

### 更新标题
#### 访问路径
/useryearworkstats/{useryearworkstats_id}/updatetitlebyyear

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | useryearworkstats_id | Long | 待补充 |
| 2 | useryearworkstatsdtos | List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取数据集
#### 访问路径
/useryearworkstats/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [UserYearWorkStatsSearchContext](#UserYearWorkStatsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询数据集
#### 访问路径
/useryearworkstats/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [UserYearWorkStatsSearchContext](#UserYearWorkStatsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取月完成任务数及累计工时和解决Bug数
#### 访问路径
/useryearworkstats/fetchmonthfinishtaskandbug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [UserYearWorkStatsSearchContext](#UserYearWorkStatsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询月完成任务数及累计工时和解决Bug数
#### 访问路径
/useryearworkstats/searchmonthfinishtaskandbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [UserYearWorkStatsSearchContext](#UserYearWorkStatsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取月创建Bug数和创建用例数
#### 访问路径
/useryearworkstats/fetchmonthopenedbugandcase

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [UserYearWorkStatsSearchContext](#UserYearWorkStatsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询月创建Bug数和创建用例数
#### 访问路径
/useryearworkstats/searchmonthopenedbugandcase

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [UserYearWorkStatsSearchContext](#UserYearWorkStatsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取月创建需求数
#### 访问路径
/useryearworkstats/fetchmonthopenedstory

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [UserYearWorkStatsSearchContext](#UserYearWorkStatsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询月创建需求数
#### 访问路径
/useryearworkstats/searchmonthopenedstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [UserYearWorkStatsSearchContext](#UserYearWorkStatsSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[UserYearWorkStatsDTO](#UserYearWorkStatsDTO)>>

#### 权限说明
待补充

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
#### UserYearWorkStatsDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### UserYearWorkStatsSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

