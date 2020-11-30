# 服务接口-IBZ_DAILY
## 接口说明
日报

## 接口清单
## 附录
### 数据类型说明
#### IbzDailyDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | createman | String | 不可 | 建立人 |
| 2 | ibzdailyid | Long | 不可 | 日报标识 |
| 3 | ibzdailyname | String | 允许 | 日报名称 |
| 4 | updatedate | Timestamp | 不可 | 更新时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 5 | createdate | Timestamp | 不可 | 建立时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 6 | updateman | String | 不可 | 更新人 |
| 7 | date | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 8 | account | String | 允许 | 用户 |
| 9 | worktoday | String | 允许 | 今日工作 |
| 10 | mailto | String | 允许 | 抄送给 |
| 11 | files | String | 允许 | 附件 |
| 12 | todaytask | String | 允许 | 完成任务 |
| 13 | issubmit | String | 允许 | 是否提交 |
| 14 | planstomorrow | String | 允许 | 明日计划 |
| 15 | tomorrowplanstask | String | 允许 | 明日计划任务 |
| 16 | reportto | String | 允许 | 汇报给 |
| 17 | comment | String | 允许 | 其他事项 |
| 18 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IbzDailySearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_ibz_dailyname_like | String | 允许 | 条件字段：ibz_dailyname<br>条件组合方式：`%like%` |
| 2 | n_account_eq | String | 允许 | 条件字段：account<br>条件组合方式：`=` |
| 3 | n_issubmit_eq | String | 允许 | 条件字段：issubmit<br>条件组合方式：`=` |
| 4 | n_reportto_eq | String | 允许 | 条件字段：reportto<br>条件组合方式：`=` |
| 5 | customcond | String | 允许 | 自定义查询条件 |
| 6 | customparams | String | 允许 | 自定义查询参数 |
| 7 | query | String | 允许 | 快速搜索 |
| 8 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 9 | page | int | 允许 | 当前页数<br>默认值0 |
| 10 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 11 | sort | String | 允许 | 排序 |
