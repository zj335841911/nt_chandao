# 服务接口-IBZ_MONTHLY
## 接口说明
月报

## 接口清单
## 附录
### 数据类型说明
#### IbzMonthlyDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | ibzmonthlyid | Long | 不可 | 月报标识 |
| 2 | createman | String | 不可 | 建立人 |
| 3 | updateman | String | 不可 | 更新人 |
| 4 | createdate | Timestamp | 不可 | 建立时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 5 | ibzmonthlyname | String | 允许 | 月报名称 |
| 6 | updatedate | Timestamp | 不可 | 更新时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 7 | date | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 8 | account | String | 允许 | 用户 |
| 9 | workthismonth | String | 允许 | 本月工作 |
| 10 | plansnextmonth | String | 允许 | 下月计划 |
| 11 | reportto | String | 允许 | 汇报 |
| 12 | mailto | String | 允许 | 抄送给 |
| 13 | comment | String | 允许 | 其他事项 |
| 14 | thismonthtask | String | 允许 | 本月完成任务 |
| 15 | nextmonthplanstask | String | 允许 | 下月计划任务 |
| 16 | files | String | 允许 | 附件 |
| 17 | issubmit | String | 允许 | 是否提交 |
| 18 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IbzMonthlySearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_ibz_monthlyname_like | String | 允许 | 条件字段：ibz_monthlyname<br>条件组合方式：`%like%` |
| 2 | n_account_eq | String | 允许 | 条件字段：account<br>条件组合方式：`=` |
| 3 | n_reportto_eq | String | 允许 | 条件字段：reportto<br>条件组合方式：`=` |
| 4 | n_issubmit_eq | String | 允许 | 条件字段：issubmit<br>条件组合方式：`=` |
| 5 | customcond | String | 允许 | 自定义查询条件 |
| 6 | customparams | String | 允许 | 自定义查询参数 |
| 7 | query | String | 允许 | 快速搜索 |
| 8 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 9 | page | int | 允许 | 当前页数<br>默认值0 |
| 10 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 11 | sort | String | 允许 | 排序 |
