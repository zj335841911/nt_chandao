# 服务接口-bug统计
## 接口说明
Bug统计

## 接口清单
### 新建Bug统计
#### 访问路径
/bugstats

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | bugstatsdto | [BugStatsDTO](#BugStatsDTO) | Bug统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [BugStatsDTO](#BugStatsDTO)：Bug统计实体传输对象 |

### 批量新建Bug统计
#### 访问路径
/bugstats/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | bugstatsdtos | List<[BugStatsDTO](#BugStatsDTO)> | Bug统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新Bug统计
#### 访问路径
/bugstats/{bugstats_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | bugstats_id | Long | Bug统计主键ID |
| 2 | bugstatsdto | [BugStatsDTO](#BugStatsDTO) | Bug统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [BugStatsDTO](#BugStatsDTO)：Bug统计实体传输对象 |

### 批量更新Bug统计
#### 访问路径
/bugstats/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | bugstatsdtos | List<[BugStatsDTO](#BugStatsDTO)> | Bug统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除Bug统计
#### 访问路径
/bugstats/{bugstats_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | bugstats_id | Long | Bug统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除Bug统计
#### 访问路径
/bugstats/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<Long> | Bug统计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取Bug统计
#### 访问路径
/bugstats/{bugstats_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | bugstats_id | Long | Bug统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [BugStatsDTO](#BugStatsDTO)：Bug统计实体传输对象 |

### 检查Bug统计
#### 访问路径
/bugstats/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | bugstatsdto | [BugStatsDTO](#BugStatsDTO) | Bug统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存Bug统计
#### 访问路径
/bugstats/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | bugstatsdto | [BugStatsDTO](#BugStatsDTO) | Bug统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存Bug统计
#### 访问路径
/bugstats/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | bugstatsdtos | List<[BugStatsDTO](#BugStatsDTO)> | Bug统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取Bug在每个解决方案的Bug数
#### 访问路径
/bugstats/fetchbugcountinresolution

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象列表 |

### 查询Bug在每个解决方案的Bug数
#### 访问路径
/bugstats/searchbugcountinresolution

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取Bug完成表
#### 访问路径
/bugstats/fetchbugresolvedby

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象列表 |

### 查询Bug完成表
#### 访问路径
/bugstats/searchbugresolvedby

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取bug解决汇总表
#### 访问路径
/bugstats/fetchbugresolvedgird

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象列表 |

### 查询bug解决汇总表
#### 访问路径
/bugstats/searchbugresolvedgird

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取Bug指派表
#### 访问路径
/bugstats/fetchbugassignedto

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象列表 |

### 查询Bug指派表
#### 访问路径
/bugstats/searchbugassignedto

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取数据集
#### 访问路径
/bugstats/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象列表 |

### 查询数据集
#### 访问路径
/bugstats/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品Bug解决方案汇总
#### 访问路径
/bugstats/fetchproductbugresolutionstats

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象列表 |

### 查询产品Bug解决方案汇总
#### 访问路径
/bugstats/searchproductbugresolutionstats

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品Bug状态汇总
#### 访问路径
/bugstats/fetchproductbugstatussum

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象列表 |

### 查询产品Bug状态汇总
#### 访问路径
/bugstats/searchproductbugstatussum

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取产品创建bug占比
#### 访问路径
/bugstats/fetchproductcreatebug

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象列表 |

### 查询产品创建bug占比
#### 访问路径
/bugstats/searchproductcreatebug

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取项目bug状态统计
#### 访问路径
/bugstats/fetchprojectbugstatuscount

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象列表 |

### 查询项目bug状态统计
#### 访问路径
/bugstats/searchprojectbugstatuscount

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [BugStatsSearchContext](#BugStatsSearchContext) | Bug统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[BugStatsDTO](#BugStatsDTO)>：Bug统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### BugStatsDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | id | Long | 允许 | 标识 |
| 2 | title | String | 允许 | 名称 |
| 3 | openedby | String | 允许 | 由谁创建 |
| 4 | bugwjj | Integer | 允许 | 未解决 |
| 5 | bugbydesign | Integer | 允许 | 设计如此 |
| 6 | bugduplicate | Integer | 允许 | 重复Bug |
| 7 | bugexternal | Integer | 允许 | 外部原因 |
| 8 | bugfixed | Integer | 允许 | 已解决 |
| 9 | bugnotrepro | Integer | 允许 | 无法重现 |
| 10 | bugpostponed | Integer | 允许 | 延期处理 |
| 11 | bugwillnotfix | Integer | 允许 | 不予解决 |
| 12 | bugtostory | Integer | 允许 | 转为需求 |
| 13 | bugefficient | String | 允许 | 有效率 |
| 14 | bugtotal | Integer | 允许 | 总计 |
| 15 | product | Long | 允许 | 编号 |
| 16 | productname | String | 允许 | 产品名称 |
| 17 | bugcnt | Integer | 允许 | Bug |
| 18 | assignedto | String | 允许 | 指派给 |
| 19 | resolvedby | String | 允许 | 由谁解决 |
| 20 | project | Long | 允许 | 项目编号 |
| 21 | projectname | String | 允许 | 项目名称 |
| 22 | bugactive | Integer | 允许 | 激活Bug |
| 23 | bugresolved | Integer | 允许 | 已解决Bug |
| 24 | bugclosed | Integer | 允许 | 已关闭Bug |
| 25 | projectname1 | String | 允许 | 项目名称 |
| 26 | bugresolution | String | 允许 | Bug解决方案 |
| 27 | bugstatus | String | 允许 | Bug状态 |
| 28 | bugid | Integer | 允许 | Bug编号 |
| 29 | bugtitle | String | 允许 | Bug标题 |
| 30 | bugpri | Integer | 允许 | Bug优先级 |
| 31 | bugseverity | Integer | 允许 | Bug严重程度 |
| 32 | bugopenedby | String | 允许 | bug创建人 |
| 33 | bugopeneddate | Timestamp | 允许 | Bug创建日期<br>时间格式：yyyy-MM-dd |
| 34 | bugresolveddate | Timestamp | 允许 | bug解决日期<br>时间格式：yyyy-MM-dd |
| 35 | dept | String | 允许 | 部门 |
| 36 | begin | Timestamp | 允许 | 开始<br>时间格式：yyyy-MM-dd |
| 37 | end | Timestamp | 允许 | 结束<br>时间格式：yyyy-MM-dd |
| 38 | <动态属性> | Object | 允许 | 支持动态属性 |

#### BugStatsSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_title_like | String | 允许 | 条件字段：title<br>条件组合方式：`%like%` |
| 2 | n_openedby_eq | String | 允许 | 条件字段：openedby<br>条件组合方式：`=` |
| 3 | n_bugwillnotfix_ltandeq | Integer | 允许 | 条件字段：bugwillnotfix<br>条件组合方式：`<=` |
| 4 | n_product_eq | Long | 允许 | 条件字段：product<br>条件组合方式：`=` |
| 5 | n_assignedto_eq | String | 允许 | 条件字段：assignedto<br>条件组合方式：`=` |
| 6 | n_resolvedby_eq | String | 允许 | 条件字段：resolvedby<br>条件组合方式：`=` |
| 7 | n_project_eq | Long | 允许 | 条件字段：project<br>条件组合方式：`=` |
| 8 | n_dept_eq | String | 允许 | 条件字段：dept<br>条件组合方式：`=` |
| 9 | n_begin_ltandeq | Timestamp | 允许 | 条件字段：begin<br>条件组合方式：`<=`<br>时间格式：yyyy-MM-dd |
| 10 | n_end_gtandeq | Timestamp | 允许 | 条件字段：end<br>条件组合方式：`>=`<br>时间格式：yyyy-MM-dd |
| 11 | customcond | String | 允许 | 自定义查询条件 |
| 12 | customparams | String | 允许 | 自定义查询参数 |
| 13 | query | String | 允许 | 快速搜索 |
| 14 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 15 | page | int | 允许 | 当前页数<br>默认值0 |
| 16 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 17 | sort | String | 允许 | 排序 |
