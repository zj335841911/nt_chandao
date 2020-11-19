# 服务接口-IBZ_TASKSTATS
## 接口说明
任务统计

## 接口清单
## 附录
### 数据类型说明
#### TaskStatsDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | projectname | String | 允许 | 项目名称 |
| 2 | finshedby | String | 允许 | 完成者 |
| 3 | totalestimate | Integer | 允许 | 预计总工时 |
| 4 | totalconsumed | Integer | 允许 | 消耗总工时 |
| 5 | totalleft | Integer | 允许 | 剩余总工时 |
| 6 | project | String | 允许 | 项目 |
| 7 | id | Long | 允许 | 编号 |
| 8 | name | String | 允许 | 名称 |
| 9 | <动态属性> | Object | 允许 | 支持动态属性 |

#### TaskStatsSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_finshedby_eq | String | 允许 | 条件字段：finshedby<br>条件组合方式：`=` |
| 2 | n_project_eq | String | 允许 | 条件字段：project<br>条件组合方式：`=` |
| 3 | n_name_like | String | 允许 | 条件字段：name<br>条件组合方式：`%like%` |
| 4 | customcond | String | 允许 | 自定义查询条件 |
| 5 | customparams | String | 允许 | 自定义查询参数 |
| 6 | query | String | 允许 | 快速搜索 |
| 7 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 8 | page | int | 允许 | 当前页数<br>默认值0 |
| 9 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 10 | sort | String | 允许 | 排序 |
