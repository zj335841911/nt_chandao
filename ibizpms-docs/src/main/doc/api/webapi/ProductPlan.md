# 服务接口-ZT_PRODUCTPLAN
## 接口说明


## 接口清单
### 新建产品计划
#### 访问路径
/productplans

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplandto | [ProductPlanDTO](#ProductPlanDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductPlanDTO](#ProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建产品计划
#### 访问路径
/productplans/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

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

### 更新产品计划
#### 访问路径
/productplans/{productplan_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductPlanDTO](#ProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新产品计划
#### 访问路径
/productplans/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

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

### 删除产品计划
#### 访问路径
/productplans/{productplan_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |

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

### 批量删除产品计划
#### 访问路径
/productplans/batch

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

### 获取产品计划
#### 访问路径
/productplans/{productplan_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductPlanDTO](#ProductPlanDTO)>

#### 权限说明
待补充

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
/productplans/{productplan_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductPlanDTO](#ProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量解除关联需求
#### 访问路径
/productplans/{productplan_id}/batchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductPlanDTO](#ProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查产品计划
#### 访问路径
/productplans/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplandto | [ProductPlanDTO](#ProductPlanDTO) | 待补充 |

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
/productplans/{productplan_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductPlanDTO](#ProductPlanDTO)>

#### 权限说明
待补充

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
/productplans/{productplan_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductPlanDTO](#ProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存产品计划
#### 访问路径
/productplans/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

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

### 批量保存产品计划
#### 访问路径
/productplans/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

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

### 解除关联Bug
#### 访问路径
/productplans/{productplan_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductPlanDTO](#ProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 解除关联需求
#### 访问路径
/productplans/{productplan_id}/unlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | productplandtos | List<[ProductPlanDTO](#ProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[ProductPlanDTO](#ProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取CurProductPlan
#### 访问路径
/productplans/fetchcurproductplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询CurProductPlan
#### 访问路径
/productplans/searchcurproductplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

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
/productplans/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

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
/productplans/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取默认查询
#### 访问路径
/productplans/fetchdefaultparent

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询默认查询
#### 访问路径
/productplans/searchdefaultparent

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取计划（代码表）
#### 访问路径
/productplans/fetchplancodelist

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询计划（代码表）
#### 访问路径
/productplans/searchplancodelist

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 获取项目计划列表
#### 访问路径
/productplans/fetchprojectplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 查询项目计划列表
#### 访问路径
/productplans/searchprojectplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[ProductPlanDTO](#ProductPlanDTO)>>

#### 权限说明
待补充

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
#### ProductPlanDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### ProductPlanSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

