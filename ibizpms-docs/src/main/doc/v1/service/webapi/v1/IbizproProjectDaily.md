# 服务接口-IBIZPRO_PROJECTDAILY
## 接口说明
项目日报

## 接口清单
## 附录
### 数据类型说明
#### IbizproProjectDailyDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | ibizproprojectdailyid | String | 不可 | 项目日报标识 |
| 2 | ibizproprojectdailyname | String | 允许 | 项目日报名称 |
| 3 | createdate | Timestamp | 不可 | 建立时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 4 | createman | String | 不可 | 建立人 |
| 5 | updateman | String | 不可 | 更新人 |
| 6 | updatedate | Timestamp | 不可 | 更新时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 7 | project | Long | 允许 | 项目编号 |
| 8 | projectname | String | 允许 | 项目名称 |
| 9 | date | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 10 | tasks | String | 允许 | 任务 |
| 11 | totalestimates | Double | 允许 | 总工时 |
| 12 | pm | String | 允许 | 项目负责人 |
| 13 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IbizproProjectDailySearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_ibizpro_projectdailyname_like | String | 允许 | 条件字段：ibizpro_projectdailyname<br>条件组合方式：`%like%` |
| 2 | n_project_eq | Long | 允许 | 条件字段：project<br>条件组合方式：`=` |
| 3 | n_projectname_eq | String | 允许 | 条件字段：projectname<br>条件组合方式：`=` |
| 4 | n_projectname_like | String | 允许 | 条件字段：projectname<br>条件组合方式：`%like%` |
| 5 | n_pm_eq | String | 允许 | 条件字段：pm<br>条件组合方式：`=` |
| 6 | customcond | String | 允许 | 自定义查询条件 |
| 7 | customparams | String | 允许 | 自定义查询参数 |
| 8 | query | String | 允许 | 快速搜索 |
| 9 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 10 | page | int | 允许 | 当前页数<br>默认值0 |
| 11 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 12 | sort | String | 允许 | 排序 |
