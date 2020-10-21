# 服务接口-IBZ_SUBPRODUCTPLAN
## 接口说明
产品计划

## 接口清单
### 根据建立产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplandto | [SubProductPlanDTO](#SubProductPlanDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

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

### 根据更新产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans/{subproductplan_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

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

### 根据删除产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans/{subproductplan_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplan_id | Long | 待补充 |

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

### 根据批量删除产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
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

### 根据获取产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans/{subproductplan_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplan_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

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
/productplans/{productplan_id}/subproductplans/{subproductplan_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

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
/productplans/{productplan_id}/subproductplans/{subproductplan_id}/batchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplandto | [SubProductPlanDTO](#SubProductPlanDTO) | 待补充 |

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
/productplans/{productplan_id}/subproductplans/{subproductplan_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

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
/productplans/{productplan_id}/subproductplans/{subproductplan_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

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

### 根据批量保存产品计划
#### 访问路径
/productplans/{productplan_id}/subproductplans/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

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
/productplans/{productplan_id}/subproductplans/{subproductplan_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

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
/productplans/{productplan_id}/subproductplans/{subproductplan_id}/unlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | subproductplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取CurProductPlan
#### 访问路径
/productplans/{productplan_id}/subproductplans/fetchcurproductplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询CurProductPlan
#### 访问路径
/productplans/{productplan_id}/subproductplans/searchcurproductplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

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
/productplans/{productplan_id}/subproductplans/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

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
/productplans/{productplan_id}/subproductplans/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取默认查询
#### 访问路径
/productplans/{productplan_id}/subproductplans/fetchdefaultparent

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询默认查询
#### 访问路径
/productplans/{productplan_id}/subproductplans/searchdefaultparent

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取计划（代码表）
#### 访问路径
/productplans/{productplan_id}/subproductplans/fetchplancodelist

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询计划（代码表）
#### 访问路径
/productplans/{productplan_id}/subproductplans/searchplancodelist

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目计划列表
#### 访问路径
/productplans/{productplan_id}/subproductplans/fetchprojectplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目计划列表
#### 访问路径
/productplans/{productplan_id}/subproductplans/searchprojectplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | productplan_id | Long | 待补充 |
| 2 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据建立产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplandto | [SubProductPlanDTO](#SubProductPlanDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

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

### 根据更新产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplan_id | Long | 待补充 |
| 4 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

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

### 根据删除产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplan_id | Long | 待补充 |

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

### 根据批量删除产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
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

### 根据获取产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplan_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

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
/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}/batchunlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplan_id | Long | 待补充 |
| 4 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

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
/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}/batchunlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplan_id | Long | 待补充 |
| 4 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplandto | [SubProductPlanDTO](#SubProductPlanDTO) | 待补充 |

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
/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}/linkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplan_id | Long | 待补充 |
| 4 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

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
/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}/linkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplan_id | Long | 待补充 |
| 4 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

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

### 根据批量保存产品计划
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

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
/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}/unlinkbug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplan_id | Long | 待补充 |
| 4 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

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
/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}/unlinkstory

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | subproductplan_id | Long | 待补充 |
| 4 | subproductplandtos | List<[SubProductPlanDTO](#SubProductPlanDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[SubProductPlanDTO](#SubProductPlanDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据获取CurProductPlan
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/fetchcurproductplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询CurProductPlan
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/searchcurproductplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/productplans/{productplan_id}/subproductplans/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/productplans/{productplan_id}/subproductplans/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取默认查询
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/fetchdefaultparent

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询默认查询
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/searchdefaultparent

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取计划（代码表）
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/fetchplancodelist

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询计划（代码表）
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/searchplancodelist

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据获取项目计划列表
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/fetchprojectplan

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据查询项目计划列表
#### 访问路径
/products/{product_id}/productplans/{productplan_id}/subproductplans/searchprojectplan

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |/r/n| 2 | productplan_id | Long | 待补充 |
| 3 | context | [ProductPlanSearchContext](#ProductPlanSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[SubProductPlanDTO](#SubProductPlanDTO)>>

#### 权限说明
待补充

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
#### SubProductPlanDTO
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

