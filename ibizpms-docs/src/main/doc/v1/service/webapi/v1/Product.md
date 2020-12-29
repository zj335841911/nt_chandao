# 服务接口-ZT_PRODUCT
## 接口说明
产品

## 接口清单
### 新建产品
#### 访问路径
/products

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productdto | [ProductDTO](#ProductDTO) | 产品实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductDTO](#ProductDTO)：产品实体传输对象 |

### 批量新建产品
#### 访问路径
/products/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productdtos | List<[ProductDTO](#ProductDTO)> | 产品实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新产品
#### 访问路径
/products/{product_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |
| 2 | productdto | [ProductDTO](#ProductDTO) | 产品实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductDTO](#ProductDTO)：产品实体传输对象 |

### 批量更新产品
#### 访问路径
/products/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productdtos | List<[ProductDTO](#ProductDTO)> | 产品实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除产品
#### 访问路径
/products/{product_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除产品
#### 访问路径
/products/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<Long> | 产品主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取产品
#### 访问路径
/products/{product_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductDTO](#ProductDTO)：产品实体传输对象 |

### 取消置顶
#### 访问路径
/products/{product_id}/cancelproducttop

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |
| 2 | productdto | [ProductDTO](#ProductDTO) | 产品实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductDTO](#ProductDTO)：产品实体传输对象 |

### 检查产品
#### 访问路径
/products/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productdto | [ProductDTO](#ProductDTO) | 产品实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 关闭
#### 访问路径
/products/{product_id}/close

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |
| 2 | productdto | [ProductDTO](#ProductDTO) | 产品实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductDTO](#ProductDTO)：产品实体传输对象 |

### 产品移动端计数器方法
#### 访问路径
/products/{product_id}/mobproductcounter

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |
| 2 | productdto | [ProductDTO](#ProductDTO) | 产品实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductDTO](#ProductDTO)：产品实体传输对象 |

### 移动端测试计数器
#### 访问路径
/products/{product_id}/mobproducttestcounter

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |
| 2 | productdto | [ProductDTO](#ProductDTO) | 产品实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductDTO](#ProductDTO)：产品实体传输对象 |

### 置顶
#### 访问路径
/products/{product_id}/producttop

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | product_id | Long | 产品主键ID |
| 2 | productdto | [ProductDTO](#ProductDTO) | 产品实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProductDTO](#ProductDTO)：产品实体传输对象 |

### 保存产品
#### 访问路径
/products/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productdto | [ProductDTO](#ProductDTO) | 产品实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存产品
#### 访问路径
/products/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | productdtos | List<[ProductDTO](#ProductDTO)> | 产品实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取全部产品
#### 访问路径
/products/fetchalllist

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductDTO](#ProductDTO)>：产品实体传输对象列表 |

### 查询全部产品
#### 访问路径
/products/searchalllist

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductDTO](#ProductDTO)>：产品实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取所有产品
#### 访问路径
/products/fetchallproduct

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductDTO](#ProductDTO)>：产品实体传输对象列表 |

### 查询所有产品
#### 访问路径
/products/searchallproduct

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductDTO](#ProductDTO)>：产品实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取校验产品名称或产品代号是否已经存在
#### 访问路径
/products/fetchchecknameorcode

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductDTO](#ProductDTO)>：产品实体传输对象列表 |

### 查询校验产品名称或产品代号是否已经存在
#### 访问路径
/products/searchchecknameorcode

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductDTO](#ProductDTO)>：产品实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取当前项目
#### 访问路径
/products/fetchcurproject

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductDTO](#ProductDTO)>：产品实体传输对象列表 |

### 查询当前项目
#### 访问路径
/products/searchcurproject

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductDTO](#ProductDTO)>：产品实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取当前用户
#### 访问路径
/products/fetchcuruer

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductDTO](#ProductDTO)>：产品实体传输对象列表 |

### 查询当前用户
#### 访问路径
/products/searchcuruer

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductDTO](#ProductDTO)>：产品实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取DEFAULT
#### 访问路径
/products/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductDTO](#ProductDTO)>：产品实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/products/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductDTO](#ProductDTO)>：产品实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品总览
#### 访问路径
/products/fetchproductpm

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductDTO](#ProductDTO)>：产品实体传输对象列表 |

### 查询产品总览
#### 访问路径
/products/searchproductpm

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductDTO](#ProductDTO)>：产品实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品团队
#### 访问路径
/products/fetchproductteam

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductDTO](#ProductDTO)>：产品实体传输对象列表 |

### 查询产品团队
#### 访问路径
/products/searchproductteam

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductDTO](#ProductDTO)>：产品实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取当前项目
#### 访问路径
/products/fetchstorycurproject

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProductDTO](#ProductDTO)>：产品实体传输对象列表 |

### 查询当前项目
#### 访问路径
/products/searchstorycurproject

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProductSearchContext](#ProductSearchContext) | 产品查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProductDTO](#ProductDTO)>：产品实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### ProductDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | qd | String | 允许 | 测试负责人 |
| 2 | acl | String | 允许 | 访问控制 |
| 3 | name | String | 不可 | 产品名称 |
| 4 | id | Long | 不可 | 编号 |
| 5 | deleted | String | 允许 | 已删除 |
| 6 | whitelist | String | 允许 | 分组白名单 |
| 7 | rd | String | 允许 | 发布负责人 |
| 8 | order | Integer | 允许 | 排序 |
| 9 | type | String | 允许 | 产品类型 |
| 10 | po | String | 允许 | 产品负责人 |
| 11 | desc | String | 允许 | 产品描述	 |
| 12 | status | String | 允许 | 状态 |
| 13 | createdby | String | 允许 | 由谁创建 |
| 14 | createdversion | String | 允许 | 当前系统版本 |
| 15 | substatus | String | 允许 | 子状态 |
| 16 | code | String | 允许 | 产品代号 |
| 17 | createddate | Timestamp | 允许 | 创建日期<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 18 | linename | String | 允许 | 产品线 |
| 19 | line | Long | 允许 | 产品线 |
| 20 | activebugcnt | Integer | 允许 | 未解决Bug数 |
| 21 | productplancnt | Integer | 允许 | 计划总数 |
| 22 | releasecnt | Integer | 允许 | 发布总数 |
| 23 | activestorycnt | Integer | 允许 | 激活需求数 |
| 24 | unconfirmbugcnt | Integer | 允许 | 未确认Bug数 |
| 25 | notclosedbugcnt | Integer | 允许 | 未关闭Bug数 |
| 26 | comment | String | 允许 | 备注 |
| 27 | relatedbugcnt | Integer | 允许 | 相关Bug数 |
| 28 | changedstorycnt | Integer | 允许 | 已变更需求 |
| 29 | draftstorycnt | Integer | 允许 | 草稿需求 |
| 30 | closedstorycnt | Integer | 允许 | 已关闭需求 |
| 31 | relatedprojects | Integer | 允许 | 关联项目数 |
| 32 | doccnt | Integer | 允许 | 文档数 |
| 33 | buildcnt | Integer | 允许 | BUILD数 |
| 34 | casecnt | Integer | 允许 | 用例数 |
| 35 | srfcount | Integer | 允许 | 属性 |
| 36 | mobimage | String | 允许 | 移动端图片 |
| 37 | order1 | Integer | 允许 | 排序 |
| 38 | istop | Integer | 允许 | 是否置顶 |
| 39 | testtaskcnt | Integer | 允许 | 测试单数 |
| 40 | testsuitecnt | Integer | 允许 | 套件数 |
| 41 | popk | String | 允许 | 产品负责人（选择） |
| 42 | qdpk | String | 允许 | 测试负责人（选择） |
| 43 | rdpk | String | 允许 | 发布负责人（选择） |
| 44 | noticeusers | String | 允许 | 消息通知用户 |
| 45 | orgid | String | 允许 | 组织标识 |
| 46 | mdeptid | String | 允许 | 部门标识 |
| 47 | ibiz_id | String | 允许 | IBIZ标识 |
| 48 | supproreport | Integer | 允许 | 产品是否支持汇报 |
| 49 | <动态属性> | Object | 允许 | 支持动态属性 |

#### ProductSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_acl_eq | String | 允许 | 条件字段：acl<br>条件组合方式：`=` |
| 2 | n_name_like | String | 允许 | 条件字段：name<br>条件组合方式：`%like%` |
| 3 | n_id_eq | Long | 允许 | 条件字段：id<br>条件组合方式：`=` |
| 4 | n_type_eq | String | 允许 | 条件字段：type<br>条件组合方式：`=` |
| 5 | n_status_eq | String | 允许 | 条件字段：status<br>条件组合方式：`=` |
| 6 | n_status_isnotnull | String | 允许 | 条件字段：status<br>条件组合方式：`is not NULL` |
| 7 | n_linename_eq | String | 允许 | 条件字段：linename<br>条件组合方式：`=` |
| 8 | n_linename_like | String | 允许 | 条件字段：linename<br>条件组合方式：`%like%` |
| 9 | n_line_eq | Long | 允许 | 条件字段：line<br>条件组合方式：`=` |
| 10 | customcond | String | 允许 | 自定义查询条件 |
| 11 | customparams | String | 允许 | 自定义查询参数 |
| 12 | query | String | 允许 | 快速搜索 |
| 13 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 14 | page | int | 允许 | 当前页数<br>默认值0 |
| 15 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 16 | sort | String | 允许 | 排序 |
