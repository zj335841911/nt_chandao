# 服务接口-ZT_TESTREPORT
## 接口说明
测试报告

## 接口清单
### 根据测试单获取相应信息
#### 访问路径
/testreports/{testreport_id}/getinfotesttask

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 新建测试报告
#### 访问路径
/testreports

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreportdto | [TestReportDTO](#TestReportDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量新建测试报告
#### 访问路径
/testreports/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 更新测试报告
#### 访问路径
/testreports/{testreport_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 批量更新测试报告
#### 访问路径
/testreports/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 删除测试报告
#### 访问路径
/testreports/{testreport_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |

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

### 批量删除测试报告
#### 访问路径
/testreports/batch

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

### 获取测试报告
#### 访问路径
/testreports/{testreport_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 检查测试报告
#### 访问路径
/testreports/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreportdto | [TestReportDTO](#TestReportDTO) | 待补充 |

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

### 根据起始时间获取概况信息
#### 访问路径
/testreports/{testreport_id}/getinfotaskovbytime

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试报告概况信息（项目报告）
#### 访问路径
/testreports/{testreport_id}/getinfotesttaskovproject

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息（项目报告）
#### 访问路径
/testreports/{testreport_id}/getinfotesttaskproject

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息（项目报告）（单测试）
#### 访问路径
/testreports/{testreport_id}/getinfotesttaskr

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息（项目报告）（测试）
#### 访问路径
/testreports/{testreport_id}/getinfotesttasks

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试报告获取基本信息
#### 访问路径
/testreports/{testreport_id}/gettestreportbasicinfo

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试报告获取基本信息（项目报告）
#### 访问路径
/testreports/{testreport_id}/gettestreportproject

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreport_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 保存测试报告
#### 访问路径
/testreports/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 批量保存测试报告
#### 访问路径
/testreports/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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
/testreports/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestReportSearchContext](#TestReportSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestReportDTO](#TestReportDTO)>>

#### 权限说明
待补充

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
/testreports/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | context | [TestReportSearchContext](#TestReportSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestReportDTO](#TestReportDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息
#### 访问路径
/products/{product_id}/testreports/{testreport_id}/getinfotesttask

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立测试报告
#### 访问路径
/products/{product_id}/testreports

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreportdto | [TestReportDTO](#TestReportDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试报告
#### 访问路径
/products/{product_id}/testreports/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 根据更新测试报告
#### 访问路径
/products/{product_id}/testreports/{testreport_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试报告
#### 访问路径
/products/{product_id}/testreports/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 根据删除测试报告
#### 访问路径
/products/{product_id}/testreports/{testreport_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |

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

### 根据批量删除测试报告
#### 访问路径
/products/{product_id}/testreports/batch

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

### 根据获取测试报告
#### 访问路径
/products/{product_id}/testreports/{testreport_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试报告
#### 访问路径
/products/{product_id}/testreports/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreportdto | [TestReportDTO](#TestReportDTO) | 待补充 |

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

### 根据起始时间获取概况信息
#### 访问路径
/products/{product_id}/testreports/{testreport_id}/getinfotaskovbytime

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试报告概况信息（项目报告）
#### 访问路径
/products/{product_id}/testreports/{testreport_id}/getinfotesttaskovproject

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息（项目报告）
#### 访问路径
/products/{product_id}/testreports/{testreport_id}/getinfotesttaskproject

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息（项目报告）（单测试）
#### 访问路径
/products/{product_id}/testreports/{testreport_id}/getinfotesttaskr

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息（项目报告）（测试）
#### 访问路径
/products/{product_id}/testreports/{testreport_id}/getinfotesttasks

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试报告获取基本信息
#### 访问路径
/products/{product_id}/testreports/{testreport_id}/gettestreportbasicinfo

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试报告获取基本信息（项目报告）
#### 访问路径
/products/{product_id}/testreports/{testreport_id}/gettestreportproject

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存测试报告
#### 访问路径
/products/{product_id}/testreports/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 根据批量保存测试报告
#### 访问路径
/products/{product_id}/testreports/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 根据获取DEFAULT
#### 访问路径
/products/{product_id}/testreports/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestReportSearchContext](#TestReportSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestReportDTO](#TestReportDTO)>>

#### 权限说明
待补充

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
/products/{product_id}/testreports/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | product_id | Long | 待补充 |
| 2 | context | [TestReportSearchContext](#TestReportSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestReportDTO](#TestReportDTO)>>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```


### 根据测试单获取相应信息
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}/getinfotesttask

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据建立测试报告
#### 访问路径
/projects/{project_id}/testreports

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreportdto | [TestReportDTO](#TestReportDTO) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量建立测试报告
#### 访问路径
/projects/{project_id}/testreports/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 根据更新测试报告
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据批量更新测试报告
#### 访问路径
/projects/{project_id}/testreports/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 根据删除测试报告
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |

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

### 根据批量删除测试报告
#### 访问路径
/projects/{project_id}/testreports/batch

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

### 根据获取测试报告
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据检查测试报告
#### 访问路径
/projects/{project_id}/testreports/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreportdto | [TestReportDTO](#TestReportDTO) | 待补充 |

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

### 根据起始时间获取概况信息
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}/getinfotaskovbytime

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试报告概况信息（项目报告）
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}/getinfotesttaskovproject

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息（项目报告）
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}/getinfotesttaskproject

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息（项目报告）（单测试）
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}/getinfotesttaskr

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试单获取相应信息（项目报告）（测试）
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}/getinfotesttasks

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试报告获取基本信息
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}/gettestreportbasicinfo

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据测试报告获取基本信息（项目报告）
#### 访问路径
/projects/{project_id}/testreports/{testreport_id}/gettestreportproject

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreport_id | Long | 待补充 |
| 3 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<[TestReportDTO](#TestReportDTO)>

#### 权限说明
待补充

#### 使用用例
- 请求参数
```json
待补充
```
- 相应结果
```json
待补充
```

### 根据保存测试报告
#### 访问路径
/projects/{project_id}/testreports/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 根据批量保存测试报告
#### 访问路径
/projects/{project_id}/testreports/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | testreportdtos | List<[TestReportDTO](#TestReportDTO)> | 待补充 |

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

### 根据获取DEFAULT
#### 访问路径
/projects/{project_id}/testreports/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [TestReportSearchContext](#TestReportSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<List<[TestReportDTO](#TestReportDTO)>>

#### 权限说明
待补充

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
/projects/{project_id}/testreports/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| -- | -- | -- | -- |
| 1 | project_id | Long | 待补充 |
| 2 | context | [TestReportSearchContext](#TestReportSearchContext) | 待补充 |

#### 返回值说明
返回类型：ResponseEntity<Page<[TestReportDTO](#TestReportDTO)>>

#### 权限说明
待补充

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
#### TestReportDTO
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

#### TestReportSearchContext
- 说明
| 序号 | 属性名 | 属性类型 | 默认值 | 说明 |
| -- | -- | -- | -- | -- |
| 待补充 | 待补充 | 待补充 | 待补充 | 待补充 |

- JSON样例
```json
待补充
```

