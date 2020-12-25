# 服务接口-IBZ_MYTERRITORY
## 接口说明
我的地盘

## 接口清单
### 新建我的地盘
#### 访问路径
/ibzmyterritories

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzmyterritorydto | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO) | 我的地盘实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO)：我的地盘实体传输对象 |

### 批量新建我的地盘
#### 访问路径
/ibzmyterritories/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzmyterritorydtos | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)> | 我的地盘实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新我的地盘
#### 访问路径
/ibzmyterritories/{ibzmyterritory_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzmyterritory_id | Long | 我的地盘主键ID |
| 2 | ibzmyterritorydto | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO) | 我的地盘实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO)：我的地盘实体传输对象 |

### 批量更新我的地盘
#### 访问路径
/ibzmyterritories/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzmyterritorydtos | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)> | 我的地盘实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除我的地盘
#### 访问路径
/ibzmyterritories/{ibzmyterritory_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzmyterritory_id | Long | 我的地盘主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除我的地盘
#### 访问路径
/ibzmyterritories/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<Long> | 我的地盘主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取我的地盘
#### 访问路径
/ibzmyterritories/{ibzmyterritory_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzmyterritory_id | Long | 我的地盘主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO)：我的地盘实体传输对象 |

### 检查我的地盘
#### 访问路径
/ibzmyterritories/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzmyterritorydto | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO) | 我的地盘实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 移动端菜单计数器
#### 访问路径
/ibzmyterritories/mobmenucount

#### 请求方法
POST

#### 参数说明
无

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO)：我的地盘实体传输对象 |

### 我的收藏计数器
#### 访问路径
/ibzmyterritories/myfavoritecount

#### 请求方法
POST

#### 参数说明
无

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO)：我的地盘实体传输对象 |

### 我的地盘移动端计数器
#### 访问路径
/ibzmyterritories/myterritorycount

#### 请求方法
POST

#### 参数说明
无

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO)：我的地盘实体传输对象 |

### 保存我的地盘
#### 访问路径
/ibzmyterritories/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzmyterritorydto | [IbzMyTerritoryDTO](#IbzMyTerritoryDTO) | 我的地盘实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存我的地盘
#### 访问路径
/ibzmyterritories/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibzmyterritorydtos | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)> | 我的地盘实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取DEFAULT
#### 访问路径
/ibzmyterritories/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/ibzmyterritories/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取我的工作
#### 访问路径
/ibzmyterritories/fetchmywork

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象列表 |

### 查询我的工作
#### 访问路径
/ibzmyterritories/searchmywork

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取我的工作
#### 访问路径
/ibzmyterritories/fetchmyworkmob

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象列表 |

### 查询我的工作
#### 访问路径
/ibzmyterritories/searchmyworkmob

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取个人信息-个人贡献
#### 访问路径
/ibzmyterritories/fetchpersoninfo

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象列表 |

### 查询个人信息-个人贡献
#### 访问路径
/ibzmyterritories/searchpersoninfo

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取欢迎
#### 访问路径
/ibzmyterritories/fetchwelcome

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象列表 |

### 查询欢迎
#### 访问路径
/ibzmyterritories/searchwelcome

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IbzMyTerritorySearchContext](#IbzMyTerritorySearchContext) | 我的地盘查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IbzMyTerritoryDTO](#IbzMyTerritoryDTO)>：我的地盘实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### IbzMyTerritoryDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | fails | Integer | 允许 | fails |
| 2 | address | String | 允许 | 通讯地址 |
| 3 | password | String | 允许 | 密码 |
| 4 | weixin | String | 允许 | 微信 |
| 5 | dingding | String | 允许 | 钉钉 |
| 6 | account | String | 允许 | 账户 |
| 7 | ranzhi | String | 允许 | ranzhi |
| 8 | slack | String | 允许 | slack |
| 9 | realname | String | 允许 | 真实姓名 |
| 10 | locked | Timestamp | 允许 | locked<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 11 | scorelevel | Integer | 允许 | scoreLevel |
| 12 | avatar | String | 允许 | avatar |
| 13 | zipcode | String | 允许 | zipcode |
| 14 | dept | Integer | 允许 | 所属部门 |
| 15 | commiter | String | 允许 | 源代码账户 |
| 16 | deleted | String | 允许 | 逻辑删除标志 |
| 17 | last | Integer | 允许 | 最后登录 |
| 18 | skype | String | 允许 | skype |
| 19 | score | Integer | 允许 | score |
| 20 | whatsapp | String | 允许 | whatsapp |
| 21 | visits | Integer | 允许 | 访问次数 |
| 22 | mobile | String | 允许 | 手机 |
| 23 | clientlang | String | 允许 | clientLang |
| 24 | join | Timestamp | 允许 | 入职日期<br>时间格式：yyyy-MM-dd |
| 25 | ip | String | 允许 | ip |
| 26 | email | String | 允许 | 邮箱 |
| 27 | nickname | String | 允许 | nickname |
| 28 | phone | String | 允许 | 电话 |
| 29 | birthday | Timestamp | 允许 | birthday<br>时间格式：yyyy-MM-dd |
| 30 | id | Long | 不可 | ID |
| 31 | qq | String | 允许 | QQ |
| 32 | gender | String | 允许 | 男女 |
| 33 | role | String | 允许 | 职位 |
| 34 | clientstatus | String | 允许 | clientStatus |
| 35 | mytasks | Integer | 允许 | 我的任务 |
| 36 | mybugs | Integer | 允许 | 我的bugs |
| 37 | myebugs | String | 允许 | 我的过期bug数 |
| 38 | mystorys | Integer | 允许 | 我的需求数 |
| 39 | products | Integer | 允许 | 未关闭产品数 |
| 40 | eprojects | String | 允许 | 过期项目数 |
| 41 | projects | Integer | 允许 | 未关闭项目数 |
| 42 | myetasks | String | 允许 | 我的过期任务数 |
| 43 | mytodocnt | Integer | 允许 | 我的待办数 |
| 44 | myfavoritestorys | Integer | 允许 | 我收藏的需求数 |
| 45 | myfavoritebugs | Integer | 允许 | 我收藏的bugs |
| 46 | myfavoritetasks | Integer | 允许 | 我收藏的任务 |
| 47 | myfavorites | Integer | 允许 | 我的收藏 |
| 48 | myterritorycnt | Integer | 允许 | 我的地盘 |
| 49 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IbzMyTerritorySearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_account_eq | String | 允许 | 条件字段：account<br>条件组合方式：`=` |
| 2 | n_realname_like | String | 允许 | 条件字段：realname<br>条件组合方式：`%like%` |
| 3 | n_gender_eq | String | 允许 | 条件字段：gender<br>条件组合方式：`=` |
| 4 | n_clientstatus_eq | String | 允许 | 条件字段：clientstatus<br>条件组合方式：`=` |
| 5 | customcond | String | 允许 | 自定义查询条件 |
| 6 | customparams | String | 允许 | 自定义查询参数 |
| 7 | query | String | 允许 | 快速搜索 |
| 8 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 9 | page | int | 允许 | 当前页数<br>默认值0 |
| 10 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 11 | sort | String | 允许 | 排序 |
