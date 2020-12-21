# 服务接口-IBZ_PROJECTSTATS
## 接口说明
项目统计

## 接口清单
### 新建项目统计
#### 访问路径
/projectstats

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstatsdto | [ProjectStatsDTO](#ProjectStatsDTO) | 项目统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProjectStatsDTO](#ProjectStatsDTO)：项目统计实体传输对象 |

### 批量新建项目统计
#### 访问路径
/projectstats/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstatsdtos | List<[ProjectStatsDTO](#ProjectStatsDTO)> | 项目统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新项目统计
#### 访问路径
/projectstats/{projectstats_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstats_id | Long | 项目统计主键ID |
| 2 | projectstatsdto | [ProjectStatsDTO](#ProjectStatsDTO) | 项目统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProjectStatsDTO](#ProjectStatsDTO)：项目统计实体传输对象 |

### 批量更新项目统计
#### 访问路径
/projectstats/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstatsdtos | List<[ProjectStatsDTO](#ProjectStatsDTO)> | 项目统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除项目统计
#### 访问路径
/projectstats/{projectstats_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstats_id | Long | 项目统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除项目统计
#### 访问路径
/projectstats/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<Long> | 项目统计主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取项目统计
#### 访问路径
/projectstats/{projectstats_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstats_id | Long | 项目统计主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProjectStatsDTO](#ProjectStatsDTO)：项目统计实体传输对象 |

### 检查项目统计
#### 访问路径
/projectstats/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstatsdto | [ProjectStatsDTO](#ProjectStatsDTO) | 项目统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 项目质量表聚合逻辑
#### 访问路径
/projectstats/{projectstats_id}/projectqualitysum

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstats_id | Long | 项目统计主键ID |
| 2 | projectstatsdto | [ProjectStatsDTO](#ProjectStatsDTO) | 项目统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [ProjectStatsDTO](#ProjectStatsDTO)：项目统计实体传输对象 |

### 保存项目统计
#### 访问路径
/projectstats/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstatsdto | [ProjectStatsDTO](#ProjectStatsDTO) | 项目统计实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存项目统计
#### 访问路径
/projectstats/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | projectstatsdtos | List<[ProjectStatsDTO](#ProjectStatsDTO)> | 项目统计实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取DEFAULT
#### 访问路径
/projectstats/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/projectstats/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取未关闭产品
#### 访问路径
/projectstats/fetchnoopenproduct

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询未关闭产品
#### 访问路径
/projectstats/searchnoopenproduct

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取项目bug类型统计
#### 访问路径
/projectstats/fetchprojectbugtype

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询项目bug类型统计
#### 访问路径
/projectstats/searchprojectbugtype

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取项目投入统计
#### 访问路径
/projectstats/fetchprojectinputstats

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询项目投入统计
#### 访问路径
/projectstats/searchprojectinputstats

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取项目进度
#### 访问路径
/projectstats/fetchprojectprogress

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询项目进度
#### 访问路径
/projectstats/searchprojectprogress

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取项目质量
#### 访问路径
/projectstats/fetchprojectquality

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询项目质量
#### 访问路径
/projectstats/searchprojectquality

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取项目需求阶段统计
#### 访问路径
/projectstats/fetchprojectstorystagestats

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询项目需求阶段统计
#### 访问路径
/projectstats/searchprojectstorystagestats

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取项目需求状态统计
#### 访问路径
/projectstats/fetchprojectstorystatusstats

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询项目需求状态统计
#### 访问路径
/projectstats/searchprojectstorystatusstats

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取项目任务统计(任务状态)
#### 访问路径
/projectstats/fetchprojecttaskcountbytaskstatus

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询项目任务统计(任务状态)
#### 访问路径
/projectstats/searchprojecttaskcountbytaskstatus

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取项目任务类型统计
#### 访问路径
/projectstats/fetchprojecttaskcountbytype

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询项目任务类型统计
#### 访问路径
/projectstats/searchprojecttaskcountbytype

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取任务工时消耗剩余查询
#### 访问路径
/projectstats/fetchtasktime

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象列表 |

### 查询任务工时消耗剩余查询
#### 访问路径
/projectstats/searchtasktime

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [ProjectStatsSearchContext](#ProjectStatsSearchContext) | 项目统计查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[ProjectStatsDTO](#ProjectStatsDTO)>：项目统计实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### ProjectStatsDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | id | Long | 不可 | 项目编号 |
| 2 | storycnt | Integer | 允许 | 需求总数 |
| 3 | taskcnt | Integer | 允许 | 任务总数 |
| 4 | totalestimate | Double | 允许 | 任务最初预计总工时 |
| 5 | totalconsumed | Double | 允许 | 任务消耗总工时 |
| 6 | totalleft | Double | 允许 | 任务预计剩余总工时 |
| 7 | undonetaskcnt | Integer | 允许 | 未完成任务总数 |
| 8 | closedstorycnt | Integer | 允许 | 关闭需求总数 |
| 9 | bugcnt | Integer | 允许 | Bug总数 |
| 10 | activebugcnt | Integer | 允许 | 未解决Bug总数 |
| 11 | unclosedstorycnt | Integer | 允许 | 未关闭需求总数 |
| 12 | finishtaskcnt | Integer | 允许 | 已结束任务总数 |
| 13 | finishbugcnt | Integer | 允许 | 已解决Bug总数 |
| 14 | deleted | String | 允许 | 已删除 |
| 15 | time | Double | 允许 | 工时 |
| 16 | type | String | 允许 | 工时类型 |
| 17 | name | String | 不可 | 项目名称 |
| 18 | unconfirmedbugcnt | Integer | 允许 | 未确认Bug总数 |
| 19 | unclosedbugcnt | Integer | 允许 | 未关闭Bug总数 |
| 20 | totalwh | Integer | 允许 | 总工时 |
| 21 | releasedstorycnt | Integer | 允许 | 已发布需求数 |
| 22 | yesterdayctaskcnt | Integer | 允许 | 昨日完成任务数 |
| 23 | yesterdayrbugcnt | Integer | 允许 | 昨天解决Bug数 |
| 24 | end | Timestamp | 允许 | 截止日期<br>时间格式：yyyy-MM-dd |
| 25 | status | String | 允许 | 状态 |
| 26 | order1 | Integer | 允许 | 项目排序 |
| 27 | istop | Integer | 允许 | 是否置顶 |
| 28 | closedtaskcnt | Integer | 允许 | 已关闭任务数 |
| 29 | canceltaskcnt | Integer | 允许 | 已取消任务数 |
| 30 | pausetaskcnt | Integer | 允许 | 已暂停任务数 |
| 31 | waittaskcnt | Integer | 允许 | 未开始任务数 |
| 32 | doingtaskcnt | Integer | 允许 | 进行中任务数 |
| 33 | donetaskcnt | Integer | 允许 | 已完成任务数 |
| 34 | designtaskcnt | Integer | 允许 | 设计类型任务 |
| 35 | discusstaskcnt | Integer | 允许 | 讨论类型任务 |
| 36 | studytaskcnt | Integer | 允许 | 研究类型任务 |
| 37 | uitaskcnt | Integer | 允许 | 界面类型任务 |
| 38 | testtaskcnt | Integer | 允许 | 测试类型任务 |
| 39 | servetaskcnt | Integer | 允许 | 服务类型任务 |
| 40 | develtaskcnt | Integer | 允许 | 开发类型任务 |
| 41 | misctaskcnt | Integer | 允许 | 其他类型任务 |
| 42 | affairtaskcnt | Integer | 允许 | 事务类型任务 |
| 43 | completestorycnt | Integer | 允许 | 完成需求数 |
| 44 | completetaskcnt | Integer | 允许 | 完成任务数 |
| 45 | bugstory | Integer | 允许 | Bug/完成需求 |
| 46 | bugtask | Integer | 允许 | Bug/完成任务 |
| 47 | importantbugcnt | Integer | 允许 | 重要Bug数 |
| 48 | seriousbugproportion | String | 允许 | 严重Bug比率 |
| 49 | codeerror | Integer | 允许 | 代码错误 |
| 50 | config | Integer | 允许 | 配置相关 |
| 51 | install | Integer | 允许 | 安装部署 |
| 52 | security | Integer | 允许 | 安全相关 |
| 53 | performance | Integer | 允许 | 性能问题 |
| 54 | standard | Integer | 允许 | 标准规范 |
| 55 | automation | Integer | 允许 | 测试脚本 |
| 56 | membercnt | Integer | 允许 | 人数 |
| 57 | designdefect | Integer | 允许 | 设计缺陷 |
| 58 | others | Integer | 允许 | 其他 |
| 59 | projecttotalconsumed | Double | 允许 | 项目消耗总工时 |
| 60 | timescale | String | 允许 | 工期 |
| 61 | leftstorycnt | Integer | 允许 | 剩余需求数 |
| 62 | emptystory | Integer | 允许 | 空需求 |
| 63 | draftstory | Integer | 允许 | 草稿需求 |
| 64 | activestory | Integer | 允许 | 激活需求 |
| 65 | closedstory | Integer | 允许 | 已关闭需求 |
| 66 | changedstory | Integer | 允许 | 已变更需求 |
| 67 | emptystagestorycnt | Integer | 允许 | 空阶段需求数 |
| 68 | waitstagestorycnt | Integer | 允许 | 未开始阶段需求数 |
| 69 | plannedstagestorycnt | Integer | 允许 | 已计划阶段需求数 |
| 70 | projectedstagestorycnt | Integer | 允许 | 已立项阶段需求数 |
| 71 | developingstagestorycnt | Integer | 允许 | 研发中阶段需求数 |
| 72 | developedstagestorycnt | Integer | 允许 | 研发完毕阶段需求数 |
| 73 | testingstagestorycnt | Integer | 允许 | 测试中阶段需求数 |
| 74 | testedstagestorycnt | Integer | 允许 | 测试完毕阶段需求数 |
| 75 | verifiedstagestorycnt | Integer | 允许 | 已验收阶段需求数 |
| 76 | releasedstagestorycnt | Integer | 允许 | 已发布阶段需求数 |
| 77 | closedstagestorycnt | Integer | 允许 | 已关闭阶段需求数 |
| 78 | progress | String | 允许 | 进度 |
| 79 | <动态属性> | Object | 允许 | 支持动态属性 |

#### ProjectStatsSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_name_like | String | 允许 | 条件字段：name<br>条件组合方式：`%like%` |
| 2 | n_status_eq | String | 允许 | 条件字段：status<br>条件组合方式：`=` |
| 3 | n_status_noteq | String | 允许 | 条件字段：status<br>条件组合方式：`!=`或者`<>` |
| 4 | customcond | String | 允许 | 自定义查询条件 |
| 5 | customparams | String | 允许 | 自定义查询参数 |
| 6 | query | String | 允许 | 快速搜索 |
| 7 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 8 | page | int | 允许 | 当前页数<br>默认值0 |
| 9 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 10 | sort | String | 允许 | 排序 |
