# 应用Api

## 用例步骤相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
## 置顶相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibztop/select|GET|SelectContext Json对象|&nbsp;|
|/ibztop|POST|置顶 Json对象|&nbsp;|
|/ibztop|PUT|置顶 Json对象|&nbsp;|
|/ibztop|DELETE|置顶标识|&nbsp;|
|/ibztop|GET|置顶标识|&nbsp;|
|/ibztop/getdraft|GET|置顶 Json对象|&nbsp;|
|/ibztop/checkkey|POST|置顶 Json对象|&nbsp;|
|/ibztop/save|POST|置顶 Json对象|&nbsp;|
|/ibztop/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 发布相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/release/select|GET|SelectContext Json对象|&nbsp;|
|/release|POST|发布 Json对象|&nbsp;|
|/release|PUT|发布 Json对象|&nbsp;|
|/release|DELETE|发布标识|&nbsp;|
|/release|GET|发布标识|&nbsp;|
|/release/getdraft|GET|发布 Json对象|&nbsp;|
|/release/activate|POST|发布 Json对象|&nbsp;|
|/release/batchunlinkbug|POST|发布 Json对象|&nbsp;|
|/release/changestatus|POST|发布 Json对象|&nbsp;|
|/release/checkkey|POST|发布 Json对象|&nbsp;|
|/release/linkbug|POST|发布 Json对象|&nbsp;|
|/release/linkbugbybug|POST|发布 Json对象|&nbsp;|
|/release/linkbugbyleftbug|POST|发布 Json对象|&nbsp;|
|/release/linkstory|POST|发布 Json对象|&nbsp;|
|/release/oneclickrelease|POST|发布 Json对象|&nbsp;|
|/release/save|POST|发布 Json对象|&nbsp;|
|/release/terminate|POST|发布 Json对象|&nbsp;|
|/release/unlinkbug|POST|发布 Json对象|&nbsp;|
|/release/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/release/fetchreportrelease|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 用例库用例步骤相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzlibcasesteps/select|GET|SelectContext Json对象|&nbsp;|
|/ibzlibcasesteps|POST|用例库用例步骤 Json对象|&nbsp;|
|/ibzlibcasesteps|PUT|用例库用例步骤 Json对象|&nbsp;|
|/ibzlibcasesteps|DELETE|用例库用例步骤标识|&nbsp;|
|/ibzlibcasesteps|GET|用例库用例步骤标识|&nbsp;|
|/ibzlibcasesteps/getdraft|GET|用例库用例步骤 Json对象|&nbsp;|
|/ibzlibcasesteps/checkkey|POST|用例库用例步骤 Json对象|&nbsp;|
|/ibzlibcasesteps/save|POST|用例库用例步骤 Json对象|&nbsp;|
|/ibzlibcasesteps/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 部门相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/dept/select|GET|SelectContext Json对象|&nbsp;|
|/dept|POST|部门 Json对象|&nbsp;|
|/dept|PUT|部门 Json对象|&nbsp;|
|/dept|DELETE|部门标识|&nbsp;|
|/dept|GET|部门标识|&nbsp;|
|/dept/getdraft|GET|部门 Json对象|&nbsp;|
|/dept/checkkey|POST|部门 Json对象|&nbsp;|
|/dept/save|POST|部门 Json对象|&nbsp;|
|/dept/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/dept/fetchroot|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 测试用例相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzcase/select|GET|SelectContext Json对象|&nbsp;|
|/ibzcase|POST|测试用例 Json对象|&nbsp;|
|/ibzcase|PUT|测试用例 Json对象|&nbsp;|
|/ibzcase|DELETE|测试用例标识|&nbsp;|
|/ibzcase|GET|测试用例标识|&nbsp;|
|/ibzcase/getdraft|GET|测试用例 Json对象|&nbsp;|
|/ibzcase/checkkey|POST|测试用例 Json对象|&nbsp;|
|/ibzcase/save|POST|测试用例 Json对象|&nbsp;|
|/ibzcase/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 产品相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/product/select|GET|SelectContext Json对象|&nbsp;|
|/product|POST|产品 Json对象|&nbsp;|
|/product|PUT|产品 Json对象|&nbsp;|
|/product|DELETE|产品标识|&nbsp;|
|/product|GET|产品标识|&nbsp;|
|/product/getdraft|GET|产品 Json对象|&nbsp;|
|/product/cancelproducttop|POST|产品 Json对象|&nbsp;|
|/product/checkkey|POST|产品 Json对象|&nbsp;|
|/product/close|POST|产品 Json对象|&nbsp;|
|/product/mobproductcounter|PUT|产品 Json对象|&nbsp;|
|/product/mobproducttestcounter|POST|产品 Json对象|&nbsp;|
|/product/producttop|POST|产品 Json对象|&nbsp;|
|/product/save|POST|产品 Json对象|&nbsp;|
|/product/fetchcurproject|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/product/fetchcuruer|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/product/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/product/fetchproductpm|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/product/fetchstorycurproject|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 测试运行相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/testrun/select|GET|SelectContext Json对象|&nbsp;|
|/testrun|POST|测试运行 Json对象|&nbsp;|
|/testrun|PUT|测试运行 Json对象|&nbsp;|
|/testrun|DELETE|测试运行标识|&nbsp;|
|/testrun|GET|测试运行标识|&nbsp;|
|/testrun/getdraft|GET|测试运行 Json对象|&nbsp;|
|/testrun/checkkey|POST|测试运行 Json对象|&nbsp;|
|/testrun/save|POST|测试运行 Json对象|&nbsp;|
|/testrun/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 群组相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/group/select|GET|SelectContext Json对象|&nbsp;|
|/group|POST|群组 Json对象|&nbsp;|
|/group|PUT|群组 Json对象|&nbsp;|
|/group|DELETE|群组标识|&nbsp;|
|/group|GET|群组标识|&nbsp;|
|/group/getdraft|GET|群组 Json对象|&nbsp;|
|/group/checkkey|POST|群组 Json对象|&nbsp;|
|/group/save|POST|群组 Json对象|&nbsp;|
|/group/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 产品生命周期相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/productlife/fetchgetroadmap|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productlife/fetchroadmapyear|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productlife/fetchgetroadmaps|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productlife/select|GET|SelectContext Json对象|&nbsp;|
## 版本相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/build/select|GET|SelectContext Json对象|&nbsp;|
|/build|POST|版本 Json对象|&nbsp;|
|/build|PUT|版本 Json对象|&nbsp;|
|/build|DELETE|版本标识|&nbsp;|
|/build|GET|版本标识|&nbsp;|
|/build/getdraft|GET|版本 Json对象|&nbsp;|
|/build/checkkey|POST|版本 Json对象|&nbsp;|
|/build/linkstory|POST|版本 Json对象|&nbsp;|
|/build/oneclickrelease|POST|版本 Json对象|&nbsp;|
|/build/save|POST|版本 Json对象|&nbsp;|
|/build/fetchbugproductbuild|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/build/fetchcurproduct|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/build/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/build/fetchtestbuild|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/build/fetchtestrounds|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 任务团队相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/taskteam/select|GET|SelectContext Json对象|&nbsp;|
|/taskteam|POST|任务团队 Json对象|&nbsp;|
|/taskteam|PUT|任务团队 Json对象|&nbsp;|
|/taskteam|DELETE|任务团队标识|&nbsp;|
|/taskteam|GET|任务团队标识|&nbsp;|
|/taskteam/getdraft|GET|任务团队 Json对象|&nbsp;|
|/taskteam/checkkey|POST|任务团队 Json对象|&nbsp;|
|/taskteam/save|POST|任务团队 Json对象|&nbsp;|
|/taskteam/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 任务预计相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
## 套件用例相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/suitecase/select|GET|SelectContext Json对象|&nbsp;|
|/suitecase|POST|套件用例 Json对象|&nbsp;|
|/suitecase|PUT|套件用例 Json对象|&nbsp;|
|/suitecase|DELETE|套件用例标识|&nbsp;|
|/suitecase|GET|套件用例标识|&nbsp;|
|/suitecase/getdraft|GET|套件用例 Json对象|&nbsp;|
|/suitecase/checkkey|POST|套件用例 Json对象|&nbsp;|
|/suitecase/save|POST|套件用例 Json对象|&nbsp;|
|/suitecase/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 任务团队相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
## 任务相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/task/select|GET|SelectContext Json对象|&nbsp;|
|/task|POST|任务 Json对象|&nbsp;|
|/task|PUT|任务 Json对象|&nbsp;|
|/task|DELETE|任务标识|&nbsp;|
|/task|GET|任务标识|&nbsp;|
|/task/getdraft|GET|任务 Json对象|&nbsp;|
|/task/activate|POST|任务 Json对象|&nbsp;|
|/task/assignto|POST|任务 Json对象|&nbsp;|
|/task/cancel|POST|任务 Json对象|&nbsp;|
|/task/checkkey|POST|任务 Json对象|&nbsp;|
|/task/close|POST|任务 Json对象|&nbsp;|
|/task/confirmstorychange|POST|任务 Json对象|&nbsp;|
|/task/deleteestimate|POST|任务 Json对象|&nbsp;|
|/task/editestimate|POST|任务 Json对象|&nbsp;|
|/task/finish|POST|任务 Json对象|&nbsp;|
|/task/pause|POST|任务 Json对象|&nbsp;|
|/task/recordestimate|POST|任务 Json对象|&nbsp;|
|/task/restart|POST|任务 Json对象|&nbsp;|
|/task/save|POST|任务 Json对象|&nbsp;|
|/task/sendmessage|POST|任务 Json对象|&nbsp;|
|/task/sendmsgpreprocess|POST|任务 Json对象|&nbsp;|
|/task/start|POST|任务 Json对象|&nbsp;|
|/task/taskfavorites|POST|任务 Json对象|&nbsp;|
|/task/tasknfavorites|POST|任务 Json对象|&nbsp;|
|/task/fetchassignedtomytask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchbymodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchchildtask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchcurfinishtask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchdefaultrow|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchmyfavorites|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchprojecttask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchroottask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchtypegroup|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 待办事宜表相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/todo/select|GET|SelectContext Json对象|&nbsp;|
|/todo|POST|待办事宜表 Json对象|&nbsp;|
|/todo|PUT|待办事宜表 Json对象|&nbsp;|
|/todo|DELETE|待办事宜表标识|&nbsp;|
|/todo|GET|待办事宜表标识|&nbsp;|
|/todo/getdraft|GET|待办事宜表 Json对象|&nbsp;|
|/todo/activate|POST|待办事宜表 Json对象|&nbsp;|
|/todo/assignto|POST|待办事宜表 Json对象|&nbsp;|
|/todo/checkkey|POST|待办事宜表 Json对象|&nbsp;|
|/todo/close|POST|待办事宜表 Json对象|&nbsp;|
|/todo/finish|POST|待办事宜表 Json对象|&nbsp;|
|/todo/save|POST|待办事宜表 Json对象|&nbsp;|
|/todo/sendmessage|POST|待办事宜表 Json对象|&nbsp;|
|/todo/sendmsgpreprocess|POST|待办事宜表 Json对象|&nbsp;|
|/todo/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/todo/fetchmytodo|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/todo/fetchmyupcoming|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 需求相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzprostory/select|GET|SelectContext Json对象|&nbsp;|
|/ibzprostory|POST|需求 Json对象|&nbsp;|
|/ibzprostory|PUT|需求 Json对象|&nbsp;|
|/ibzprostory|DELETE|需求标识|&nbsp;|
|/ibzprostory|GET|需求标识|&nbsp;|
|/ibzprostory/getdraft|GET|需求 Json对象|&nbsp;|
|/ibzprostory/checkkey|POST|需求 Json对象|&nbsp;|
|/ibzprostory/save|POST|需求 Json对象|&nbsp;|
|/ibzprostory/syncfromibiz|POST|需求 Json对象|&nbsp;|
|/ibzprostory/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 测试套件相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/testsuite/select|GET|SelectContext Json对象|&nbsp;|
|/testsuite|POST|测试套件 Json对象|&nbsp;|
|/testsuite|PUT|测试套件 Json对象|&nbsp;|
|/testsuite|DELETE|测试套件标识|&nbsp;|
|/testsuite|GET|测试套件标识|&nbsp;|
|/testsuite/getdraft|GET|测试套件 Json对象|&nbsp;|
|/testsuite/checkkey|POST|测试套件 Json对象|&nbsp;|
|/testsuite/save|POST|测试套件 Json对象|&nbsp;|
|/testsuite/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/testsuite/fetchpublictestsuite|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 用户年度工作内容统计相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/useryearworkstats/select|GET|SelectContext Json对象|&nbsp;|
|/useryearworkstats|POST|用户年度工作内容统计 Json对象|&nbsp;|
|/useryearworkstats|PUT|用户年度工作内容统计 Json对象|&nbsp;|
|/useryearworkstats|DELETE|用户年度工作内容统计标识|&nbsp;|
|/useryearworkstats|GET|用户年度工作内容统计标识|&nbsp;|
|/useryearworkstats/getdraft|GET|用户年度工作内容统计 Json对象|&nbsp;|
|/useryearworkstats/checkkey|POST|用户年度工作内容统计 Json对象|&nbsp;|
|/useryearworkstats/getuseryearaction|PUT|用户年度工作内容统计 Json对象|&nbsp;|
|/useryearworkstats/save|POST|用户年度工作内容统计 Json对象|&nbsp;|
|/useryearworkstats/updatetitlebyyear|PUT|用户年度工作内容统计 Json对象|&nbsp;|
|/useryearworkstats/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/useryearworkstats/fetchmonthfinishtaskandbug|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/useryearworkstats/fetchmonthopenedbugandcase|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/useryearworkstats/fetchmonthopenedstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 项目相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/project/select|GET|SelectContext Json对象|&nbsp;|
|/project|POST|项目 Json对象|&nbsp;|
|/project|PUT|项目 Json对象|&nbsp;|
|/project|DELETE|项目标识|&nbsp;|
|/project|GET|项目标识|&nbsp;|
|/project/getdraft|GET|项目 Json对象|&nbsp;|
|/project/activate|POST|项目 Json对象|&nbsp;|
|/project/batchunlinkstory|POST|项目 Json对象|&nbsp;|
|/project/cancelprojecttop|POST|项目 Json对象|&nbsp;|
|/project/checkkey|POST|项目 Json对象|&nbsp;|
|/project/close|POST|项目 Json对象|&nbsp;|
|/project/linkstory|POST|项目 Json对象|&nbsp;|
|/project/managemembers|POST|项目 Json对象|&nbsp;|
|/project/mobprojectcount|POST|项目 Json对象|&nbsp;|
|/project/projecttaskqcnt|POST|项目 Json对象|&nbsp;|
|/project/projecttop|POST|项目 Json对象|&nbsp;|
|/project/putoff|POST|项目 Json对象|&nbsp;|
|/project/save|POST|项目 Json对象|&nbsp;|
|/project/start|POST|项目 Json对象|&nbsp;|
|/project/suspend|POST|项目 Json对象|&nbsp;|
|/project/unlinkmember|POST|项目 Json对象|&nbsp;|
|/project/unlinkstory|POST|项目 Json对象|&nbsp;|
|/project/updateorder|PUT|项目 Json对象|&nbsp;|
|/project/fetchbugproject|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/project/fetchcurproduct|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/project/fetchcuruser|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/project/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/project/fetchinvolvedproject|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/project/fetchinvolvedproject_storytaskbug|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/project/fetchmyproject|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/project/fetchprojectteam|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/project/fetchstoryproject|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 附件相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/file/select|GET|SelectContext Json对象|&nbsp;|
|/file|POST|附件 Json对象|&nbsp;|
|/file|PUT|附件 Json对象|&nbsp;|
|/file|DELETE|附件标识|&nbsp;|
|/file|GET|附件标识|&nbsp;|
|/file/getdraft|GET|附件 Json对象|&nbsp;|
|/file/checkkey|POST|附件 Json对象|&nbsp;|
|/file/save|POST|附件 Json对象|&nbsp;|
|/file/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/file/fetchtype|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 测试报告相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/testreport/getinfotesttask|PUT|测试报告 Json对象|&nbsp;|
|/testreport/select|GET|SelectContext Json对象|&nbsp;|
|/testreport|POST|测试报告 Json对象|&nbsp;|
|/testreport|PUT|测试报告 Json对象|&nbsp;|
|/testreport|DELETE|测试报告标识|&nbsp;|
|/testreport|GET|测试报告标识|&nbsp;|
|/testreport/getdraft|GET|测试报告 Json对象|&nbsp;|
|/testreport/checkkey|POST|测试报告 Json对象|&nbsp;|
|/testreport/getinfotaskovbytime|PUT|测试报告 Json对象|&nbsp;|
|/testreport/getinfotesttaskovproject|PUT|测试报告 Json对象|&nbsp;|
|/testreport/getinfotesttaskproject|PUT|测试报告 Json对象|&nbsp;|
|/testreport/getinfotesttaskr|PUT|测试报告 Json对象|&nbsp;|
|/testreport/getinfotesttasks|PUT|测试报告 Json对象|&nbsp;|
|/testreport/gettestreportbasicinfo|PUT|测试报告 Json对象|&nbsp;|
|/testreport/gettestreportproject|PUT|测试报告 Json对象|&nbsp;|
|/testreport/save|POST|测试报告 Json对象|&nbsp;|
|/testreport/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 产品的分支和平台信息相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/branch/select|GET|SelectContext Json对象|&nbsp;|
|/branch|POST|产品的分支和平台信息 Json对象|&nbsp;|
|/branch|PUT|产品的分支和平台信息 Json对象|&nbsp;|
|/branch|DELETE|产品的分支和平台信息标识|&nbsp;|
|/branch|GET|产品的分支和平台信息标识|&nbsp;|
|/branch/getdraft|GET|产品的分支和平台信息 Json对象|&nbsp;|
|/branch/checkkey|POST|产品的分支和平台信息 Json对象|&nbsp;|
|/branch/save|POST|产品的分支和平台信息 Json对象|&nbsp;|
|/branch/sort|POST|产品的分支和平台信息 Json对象|&nbsp;|
|/branch/fetchcurproduct|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/branch/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 任务预计相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/taskestimate/select|GET|SelectContext Json对象|&nbsp;|
|/taskestimate|POST|任务预计 Json对象|&nbsp;|
|/taskestimate|PUT|任务预计 Json对象|&nbsp;|
|/taskestimate|DELETE|任务预计标识|&nbsp;|
|/taskestimate|GET|任务预计标识|&nbsp;|
|/taskestimate/getdraft|GET|任务预计 Json对象|&nbsp;|
|/taskestimate/checkkey|POST|任务预计 Json对象|&nbsp;|
|/taskestimate/save|POST|任务预计 Json对象|&nbsp;|
|/taskestimate/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/taskestimate/fetchdefaults|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 操作历史相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/history/select|GET|SelectContext Json对象|&nbsp;|
|/history|POST|操作历史 Json对象|&nbsp;|
|/history|PUT|操作历史 Json对象|&nbsp;|
|/history|DELETE|操作历史标识|&nbsp;|
|/history|GET|操作历史标识|&nbsp;|
|/history/getdraft|GET|操作历史 Json对象|&nbsp;|
|/history/checkkey|POST|操作历史 Json对象|&nbsp;|
|/history/save|POST|操作历史 Json对象|&nbsp;|
|/history/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 系统数据库相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/pssystemdbcfg/select|GET|SelectContext Json对象|&nbsp;|
|/pssystemdbcfg|POST|系统数据库 Json对象|&nbsp;|
|/pssystemdbcfg|PUT|系统数据库 Json对象|&nbsp;|
|/pssystemdbcfg|DELETE|系统数据库标识|&nbsp;|
|/pssystemdbcfg|GET|系统数据库标识|&nbsp;|
|/pssystemdbcfg/getdraft|GET|系统数据库 Json对象|&nbsp;|
|/pssystemdbcfg/checkkey|POST|系统数据库 Json对象|&nbsp;|
|/pssystemdbcfg/save|POST|系统数据库 Json对象|&nbsp;|
|/pssystemdbcfg/fetchbuild|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/pssystemdbcfg/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 文档库相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/doclib/select|GET|SelectContext Json对象|&nbsp;|
|/doclib|POST|文档库 Json对象|&nbsp;|
|/doclib|PUT|文档库 Json对象|&nbsp;|
|/doclib|DELETE|文档库标识|&nbsp;|
|/doclib|GET|文档库标识|&nbsp;|
|/doclib/getdraft|GET|文档库 Json对象|&nbsp;|
|/doclib/checkkey|POST|文档库 Json对象|&nbsp;|
|/doclib/save|POST|文档库 Json对象|&nbsp;|
|/doclib/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 需求模块相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzprostorymodule/select|GET|SelectContext Json对象|&nbsp;|
|/ibzprostorymodule|POST|需求模块 Json对象|&nbsp;|
|/ibzprostorymodule|PUT|需求模块 Json对象|&nbsp;|
|/ibzprostorymodule|DELETE|需求模块标识|&nbsp;|
|/ibzprostorymodule|GET|需求模块标识|&nbsp;|
|/ibzprostorymodule/getdraft|GET|需求模块 Json对象|&nbsp;|
|/ibzprostorymodule/checkkey|POST|需求模块 Json对象|&nbsp;|
|/ibzprostorymodule/save|POST|需求模块 Json对象|&nbsp;|
|/ibzprostorymodule/syncfromibiz|POST|需求模块 Json对象|&nbsp;|
|/ibzprostorymodule/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 模块相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/module/select|GET|SelectContext Json对象|&nbsp;|
|/module|POST|模块 Json对象|&nbsp;|
|/module|PUT|模块 Json对象|&nbsp;|
|/module|DELETE|模块标识|&nbsp;|
|/module|GET|模块标识|&nbsp;|
|/module/getdraft|GET|模块 Json对象|&nbsp;|
|/module/checkkey|POST|模块 Json对象|&nbsp;|
|/module/fix|POST|模块 Json对象|&nbsp;|
|/module/save|POST|模块 Json对象|&nbsp;|
|/module/fetchbugmodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/module/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/module/fetchdocmodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/module/fetchline|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/module/fetchstorymodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 需求相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/story/select|GET|SelectContext Json对象|&nbsp;|
|/story|POST|需求 Json对象|&nbsp;|
|/story|PUT|需求 Json对象|&nbsp;|
|/story|DELETE|需求标识|&nbsp;|
|/story|GET|需求标识|&nbsp;|
|/story/getdraft|GET|需求 Json对象|&nbsp;|
|/story/activate|POST|需求 Json对象|&nbsp;|
|/story/allpush|POST|需求 Json对象|&nbsp;|
|/story/assignto|POST|需求 Json对象|&nbsp;|
|/story/batchassignto|POST|需求 Json对象|&nbsp;|
|/story/batchchangebranch|POST|需求 Json对象|&nbsp;|
|/story/batchchangemodule|POST|需求 Json对象|&nbsp;|
|/story/batchchangeplan|POST|需求 Json对象|&nbsp;|
|/story/batchchangestage|POST|需求 Json对象|&nbsp;|
|/story/batchclose|POST|需求 Json对象|&nbsp;|
|/story/batchreview|POST|需求 Json对象|&nbsp;|
|/story/batchunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/bugtostory|POST|需求 Json对象|&nbsp;|
|/story/buildbatchunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/buildlinkstory|POST|需求 Json对象|&nbsp;|
|/story/buildunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/buildunlinkstorys|POST|需求 Json对象|&nbsp;|
|/story/change|POST|需求 Json对象|&nbsp;|
|/story/checkkey|POST|需求 Json对象|&nbsp;|
|/story/close|POST|需求 Json对象|&nbsp;|
|/story/getstoryspec|POST|需求 Json对象|&nbsp;|
|/story/getstoryspecs|GET|需求 Json对象|&nbsp;|
|/story/importplanstories|POST|需求 Json对象|&nbsp;|
|/story/linkstory|POST|需求 Json对象|&nbsp;|
|/story/projectbatchunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/projectlinkstory|POST|需求 Json对象|&nbsp;|
|/story/projectunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/projectunlinkstorys|POST|需求 Json对象|&nbsp;|
|/story/push|POST|需求 Json对象|&nbsp;|
|/story/releasebatchunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/releaselinkstory|POST|需求 Json对象|&nbsp;|
|/story/releaseunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/resetreviewedby|POST|需求 Json对象|&nbsp;|
|/story/review|POST|需求 Json对象|&nbsp;|
|/story/save|POST|需求 Json对象|&nbsp;|
|/story/sendmessage|POST|需求 Json对象|&nbsp;|
|/story/sendmsgpreprocess|POST|需求 Json对象|&nbsp;|
|/story/storyfavorites|POST|需求 Json对象|&nbsp;|
|/story/storynfavorites|POST|需求 Json对象|&nbsp;|
|/story/syncfromibiz|POST|需求 Json对象|&nbsp;|
|/story/unlinkstory|POST|需求 Json对象|&nbsp;|
|/story/fetchassignedtomystory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbugstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbuildlinkcompletedstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbuildlinkablestories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbuildstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbymodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchgetproductstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchmycuropenedstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchmyfavorites|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchparentdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchprojectlinkstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchprojectstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchreleaselinkablestories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchreleasestories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchreportstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchstorychild|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchstoryrelated|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchsubstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchtaskrelatedstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 产品汇总表相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/productsum/select|GET|SelectContext Json对象|&nbsp;|
|/productsum|POST|产品汇总表 Json对象|&nbsp;|
|/productsum|PUT|产品汇总表 Json对象|&nbsp;|
|/productsum|DELETE|产品汇总表标识|&nbsp;|
|/productsum|GET|产品汇总表标识|&nbsp;|
|/productsum/getdraft|GET|产品汇总表 Json对象|&nbsp;|
|/productsum/checkkey|POST|产品汇总表 Json对象|&nbsp;|
|/productsum/save|POST|产品汇总表 Json对象|&nbsp;|
|/productsum/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productsum/fetchproductbugcnt_qa|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productsum/fetchproductcreatestory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productsum/fetchproductstorycntandplancnt|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 测试用例相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/case/select|GET|SelectContext Json对象|&nbsp;|
|/case|POST|测试用例 Json对象|&nbsp;|
|/case|PUT|测试用例 Json对象|&nbsp;|
|/case|DELETE|测试用例标识|&nbsp;|
|/case|GET|测试用例标识|&nbsp;|
|/case/getdraft|GET|测试用例 Json对象|&nbsp;|
|/case/casefavorite|POST|测试用例 Json对象|&nbsp;|
|/case/casenfavorite|POST|测试用例 Json对象|&nbsp;|
|/case/checkkey|POST|测试用例 Json对象|&nbsp;|
|/case/confirmchange|POST|测试用例 Json对象|&nbsp;|
|/case/confirmstorychange|POST|测试用例 Json对象|&nbsp;|
|/case/getbytesttask|GET|测试用例 Json对象|&nbsp;|
|/case/linkcase|POST|测试用例 Json对象|&nbsp;|
|/case/runcase|POST|测试用例 Json对象|&nbsp;|
|/case/runcases|POST|测试用例 Json对象|&nbsp;|
|/case/save|POST|测试用例 Json对象|&nbsp;|
|/case/testruncase|POST|测试用例 Json对象|&nbsp;|
|/case/testruncases|POST|测试用例 Json对象|&nbsp;|
|/case/testsuitelinkcase|POST|测试用例 Json对象|&nbsp;|
|/case/unlinkcase|POST|测试用例 Json对象|&nbsp;|
|/case/unlinkcases|POST|测试用例 Json对象|&nbsp;|
|/case/unlinksuitecase|POST|测试用例 Json对象|&nbsp;|
|/case/unlinksuitecases|POST|测试用例 Json对象|&nbsp;|
|/case/fetchbatchnew|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchcuropenedcase|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchcursuite|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchcurtesttask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchmodulereportcase|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchmodulereportcaseentry|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchmodulereportcase_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchmyfavorites|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchnotcurtestsuite|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchnotcurtesttask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchreportcase|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchreportcaseentry|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchreportcase_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchrunerreportcase|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchrunerreportcaseentry|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchrunerreportcase_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchrunreportcase|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchrunreportcaseentry|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/case/fetchrunreportcase_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 产品计划相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/productplan/select|GET|SelectContext Json对象|&nbsp;|
|/productplan|POST|产品计划 Json对象|&nbsp;|
|/productplan|PUT|产品计划 Json对象|&nbsp;|
|/productplan|DELETE|产品计划标识|&nbsp;|
|/productplan|GET|产品计划标识|&nbsp;|
|/productplan/getdraft|GET|产品计划 Json对象|&nbsp;|
|/productplan/batchunlinkbug|POST|产品计划 Json对象|&nbsp;|
|/productplan/batchunlinkstory|POST|产品计划 Json对象|&nbsp;|
|/productplan/checkkey|POST|产品计划 Json对象|&nbsp;|
|/productplan/linkbug|POST|产品计划 Json对象|&nbsp;|
|/productplan/linkstory|POST|产品计划 Json对象|&nbsp;|
|/productplan/save|POST|产品计划 Json对象|&nbsp;|
|/productplan/unlinkbug|POST|产品计划 Json对象|&nbsp;|
|/productplan/unlinkstory|POST|产品计划 Json对象|&nbsp;|
|/productplan/fetchcurproductplan|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productplan/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productplan/fetchdefaultparent|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productplan/fetchplancodelist|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productplan/fetchprojectplan|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 产品计划相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/productplan/select|GET|SelectContext Json对象|&nbsp;|
|/productplan|POST|产品计划 Json对象|&nbsp;|
|/productplan|PUT|产品计划 Json对象|&nbsp;|
|/productplan|DELETE|产品计划标识|&nbsp;|
|/productplan|GET|产品计划标识|&nbsp;|
|/productplan/getdraft|GET|产品计划 Json对象|&nbsp;|
|/productplan/batchunlinkbug|POST|产品计划 Json对象|&nbsp;|
|/productplan/batchunlinkstory|POST|产品计划 Json对象|&nbsp;|
|/productplan/checkkey|POST|产品计划 Json对象|&nbsp;|
|/productplan/linkbug|POST|产品计划 Json对象|&nbsp;|
|/productplan/linkstory|POST|产品计划 Json对象|&nbsp;|
|/productplan/save|POST|产品计划 Json对象|&nbsp;|
|/productplan/unlinkbug|POST|产品计划 Json对象|&nbsp;|
|/productplan/unlinkstory|POST|产品计划 Json对象|&nbsp;|
|/productplan/fetchcurproductplan|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productplan/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productplan/fetchdefaultparent|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productplan/fetchplancodelist|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productplan/fetchprojectplan|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 用例库模块相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzlibmodule/select|GET|SelectContext Json对象|&nbsp;|
|/ibzlibmodule|POST|用例库模块 Json对象|&nbsp;|
|/ibzlibmodule|PUT|用例库模块 Json对象|&nbsp;|
|/ibzlibmodule|DELETE|用例库模块标识|&nbsp;|
|/ibzlibmodule|GET|用例库模块标识|&nbsp;|
|/ibzlibmodule/getdraft|GET|用例库模块 Json对象|&nbsp;|
|/ibzlibmodule/checkkey|POST|用例库模块 Json对象|&nbsp;|
|/ibzlibmodule/save|POST|用例库模块 Json对象|&nbsp;|
|/ibzlibmodule/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/ibzlibmodule/fetchroot_nobranch|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 测试结果相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/testresult/select|GET|SelectContext Json对象|&nbsp;|
|/testresult|POST|测试结果 Json对象|&nbsp;|
|/testresult|PUT|测试结果 Json对象|&nbsp;|
|/testresult|DELETE|测试结果标识|&nbsp;|
|/testresult|GET|测试结果标识|&nbsp;|
|/testresult/getdraft|GET|测试结果 Json对象|&nbsp;|
|/testresult/checkkey|POST|测试结果 Json对象|&nbsp;|
|/testresult/save|POST|测试结果 Json对象|&nbsp;|
|/testresult/fetchcurtestrun|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/testresult/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 系统日志相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/action/select|GET|SelectContext Json对象|&nbsp;|
|/action|POST|系统日志 Json对象|&nbsp;|
|/action|PUT|系统日志 Json对象|&nbsp;|
|/action|DELETE|系统日志标识|&nbsp;|
|/action|GET|系统日志标识|&nbsp;|
|/action/getdraft|GET|系统日志 Json对象|&nbsp;|
|/action/checkkey|POST|系统日志 Json对象|&nbsp;|
|/action/comment|POST|系统日志 Json对象|&nbsp;|
|/action/editcomment|POST|系统日志 Json对象|&nbsp;|
|/action/save|POST|系统日志 Json对象|&nbsp;|
|/action/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/action/fetchmobtype|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/action/fetchproducttrends|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/action/fetchprojecttrends|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/action/fetchqueryuseryear|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/action/fetchtype|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 系统应用相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/pssysapp/select|GET|SelectContext Json对象|&nbsp;|
|/pssysapp|POST|系统应用 Json对象|&nbsp;|
|/pssysapp|PUT|系统应用 Json对象|&nbsp;|
|/pssysapp|DELETE|系统应用标识|&nbsp;|
|/pssysapp|GET|系统应用标识|&nbsp;|
|/pssysapp/getdraft|GET|系统应用 Json对象|&nbsp;|
|/pssysapp/checkkey|POST|系统应用 Json对象|&nbsp;|
|/pssysapp/save|POST|系统应用 Json对象|&nbsp;|
|/pssysapp/fetchbuild|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/pssysapp/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 实体相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibz_login/select|GET|SelectContext Json对象|&nbsp;|
|/ibz_login/ztusersloginname|GET|实体 Json对象|&nbsp;|
|/ibz_login/ztlogin|POST|实体 Json对象|&nbsp;|
## 需求模块相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/productmodule/select|GET|SelectContext Json对象|&nbsp;|
|/productmodule|POST|需求模块 Json对象|&nbsp;|
|/productmodule|PUT|需求模块 Json对象|&nbsp;|
|/productmodule|DELETE|需求模块标识|&nbsp;|
|/productmodule|GET|需求模块标识|&nbsp;|
|/productmodule/getdraft|GET|需求模块 Json对象|&nbsp;|
|/productmodule/checkkey|POST|需求模块 Json对象|&nbsp;|
|/productmodule/fix|POST|需求模块 Json对象|&nbsp;|
|/productmodule/save|POST|需求模块 Json对象|&nbsp;|
|/productmodule/syncfromibiz|POST|需求模块 Json对象|&nbsp;|
|/productmodule/fetchbypath|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productmodule/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productmodule/fetchroot|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productmodule/fetchroot_nobranch|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productmodule/fetchstorymodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 需求相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/story/select|GET|SelectContext Json对象|&nbsp;|
|/story|POST|需求 Json对象|&nbsp;|
|/story|PUT|需求 Json对象|&nbsp;|
|/story|DELETE|需求标识|&nbsp;|
|/story|GET|需求标识|&nbsp;|
|/story/getdraft|GET|需求 Json对象|&nbsp;|
|/story/activate|POST|需求 Json对象|&nbsp;|
|/story/allpush|POST|需求 Json对象|&nbsp;|
|/story/assignto|POST|需求 Json对象|&nbsp;|
|/story/batchassignto|POST|需求 Json对象|&nbsp;|
|/story/batchchangebranch|POST|需求 Json对象|&nbsp;|
|/story/batchchangemodule|POST|需求 Json对象|&nbsp;|
|/story/batchchangeplan|POST|需求 Json对象|&nbsp;|
|/story/batchchangestage|POST|需求 Json对象|&nbsp;|
|/story/batchclose|POST|需求 Json对象|&nbsp;|
|/story/batchreview|POST|需求 Json对象|&nbsp;|
|/story/batchunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/bugtostory|POST|需求 Json对象|&nbsp;|
|/story/buildbatchunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/buildlinkstory|POST|需求 Json对象|&nbsp;|
|/story/buildunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/buildunlinkstorys|POST|需求 Json对象|&nbsp;|
|/story/change|POST|需求 Json对象|&nbsp;|
|/story/checkkey|POST|需求 Json对象|&nbsp;|
|/story/close|POST|需求 Json对象|&nbsp;|
|/story/getstoryspec|POST|需求 Json对象|&nbsp;|
|/story/getstoryspecs|GET|需求 Json对象|&nbsp;|
|/story/importplanstories|POST|需求 Json对象|&nbsp;|
|/story/linkstory|POST|需求 Json对象|&nbsp;|
|/story/projectbatchunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/projectlinkstory|POST|需求 Json对象|&nbsp;|
|/story/projectunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/projectunlinkstorys|POST|需求 Json对象|&nbsp;|
|/story/push|POST|需求 Json对象|&nbsp;|
|/story/releasebatchunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/releaselinkstory|POST|需求 Json对象|&nbsp;|
|/story/releaseunlinkstory|POST|需求 Json对象|&nbsp;|
|/story/resetreviewedby|POST|需求 Json对象|&nbsp;|
|/story/review|POST|需求 Json对象|&nbsp;|
|/story/save|POST|需求 Json对象|&nbsp;|
|/story/sendmessage|POST|需求 Json对象|&nbsp;|
|/story/sendmsgpreprocess|POST|需求 Json对象|&nbsp;|
|/story/storyfavorites|POST|需求 Json对象|&nbsp;|
|/story/storynfavorites|POST|需求 Json对象|&nbsp;|
|/story/syncfromibiz|POST|需求 Json对象|&nbsp;|
|/story/unlinkstory|POST|需求 Json对象|&nbsp;|
|/story/fetchassignedtomystory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbugstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbuildlinkcompletedstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbuildlinkablestories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbuildstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchbymodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchgetproductstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchmycuropenedstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchmyfavorites|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchparentdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchprojectlinkstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchprojectstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchreleaselinkablestories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchreleasestories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchreportstories|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchstorychild|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchstoryrelated|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchsubstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/story/fetchtaskrelatedstory|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 用例步骤相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/casestep/select|GET|SelectContext Json对象|&nbsp;|
|/casestep|POST|用例步骤 Json对象|&nbsp;|
|/casestep|PUT|用例步骤 Json对象|&nbsp;|
|/casestep|DELETE|用例步骤标识|&nbsp;|
|/casestep|GET|用例步骤标识|&nbsp;|
|/casestep/getdraft|GET|用例步骤 Json对象|&nbsp;|
|/casestep/checkkey|POST|用例步骤 Json对象|&nbsp;|
|/casestep/save|POST|用例步骤 Json对象|&nbsp;|
|/casestep/fetchcurtest|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/casestep/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/casestep/fetchdefault1|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/casestep/fetchmob|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/casestep/fetchversion|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/casestep/fetchversions|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 需求描述相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/storyspec/select|GET|SelectContext Json对象|&nbsp;|
|/storyspec|POST|需求描述 Json对象|&nbsp;|
|/storyspec|PUT|需求描述 Json对象|&nbsp;|
|/storyspec|DELETE|需求描述标识|&nbsp;|
|/storyspec|GET|需求描述标识|&nbsp;|
|/storyspec/getdraft|GET|需求描述 Json对象|&nbsp;|
|/storyspec/checkkey|POST|需求描述 Json对象|&nbsp;|
|/storyspec/save|POST|需求描述 Json对象|&nbsp;|
|/storyspec/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/storyspec/fetchversion|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 用例库相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzlib/select|GET|SelectContext Json对象|&nbsp;|
|/ibzlib|POST|用例库 Json对象|&nbsp;|
|/ibzlib|PUT|用例库 Json对象|&nbsp;|
|/ibzlib|DELETE|用例库标识|&nbsp;|
|/ibzlib|GET|用例库标识|&nbsp;|
|/ibzlib/getdraft|GET|用例库 Json对象|&nbsp;|
|/ibzlib/checkkey|POST|用例库 Json对象|&nbsp;|
|/ibzlib/save|POST|用例库 Json对象|&nbsp;|
|/ibzlib/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 测试版本相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/testtask/select|GET|SelectContext Json对象|&nbsp;|
|/testtask|POST|测试版本 Json对象|&nbsp;|
|/testtask|PUT|测试版本 Json对象|&nbsp;|
|/testtask|DELETE|测试版本标识|&nbsp;|
|/testtask|GET|测试版本标识|&nbsp;|
|/testtask/getdraft|GET|测试版本 Json对象|&nbsp;|
|/testtask/activate|POST|测试版本 Json对象|&nbsp;|
|/testtask/block|POST|测试版本 Json对象|&nbsp;|
|/testtask/checkkey|POST|测试版本 Json对象|&nbsp;|
|/testtask/close|POST|测试版本 Json对象|&nbsp;|
|/testtask/linkcase|POST|测试版本 Json对象|&nbsp;|
|/testtask/save|POST|测试版本 Json对象|&nbsp;|
|/testtask/start|POST|测试版本 Json对象|&nbsp;|
|/testtask/unlinkcase|POST|测试版本 Json对象|&nbsp;|
|/testtask/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 平台产品相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzproproduct/select|GET|SelectContext Json对象|&nbsp;|
|/ibzproproduct|POST|平台产品 Json对象|&nbsp;|
|/ibzproproduct|PUT|平台产品 Json对象|&nbsp;|
|/ibzproproduct|DELETE|平台产品标识|&nbsp;|
|/ibzproproduct|GET|平台产品标识|&nbsp;|
|/ibzproproduct/getdraft|GET|平台产品 Json对象|&nbsp;|
|/ibzproproduct/checkkey|POST|平台产品 Json对象|&nbsp;|
|/ibzproproduct/save|POST|平台产品 Json对象|&nbsp;|
|/ibzproproduct/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 项目统计相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/projectstats/select|GET|SelectContext Json对象|&nbsp;|
|/projectstats|POST|项目统计 Json对象|&nbsp;|
|/projectstats|PUT|项目统计 Json对象|&nbsp;|
|/projectstats|DELETE|项目统计标识|&nbsp;|
|/projectstats|GET|项目统计标识|&nbsp;|
|/projectstats/getdraft|GET|项目统计 Json对象|&nbsp;|
|/projectstats/checkkey|POST|项目统计 Json对象|&nbsp;|
|/projectstats/save|POST|项目统计 Json对象|&nbsp;|
|/projectstats/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/projectstats/fetchnoopenproduct|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/projectstats/fetchtasktime|GET|DEDataSetFetchContext Json对象|&nbsp;|
## burn相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/burn/select|GET|SelectContext Json对象|&nbsp;|
|/burn|POST|burn Json对象|&nbsp;|
|/burn|PUT|burn Json对象|&nbsp;|
|/burn|DELETE|burn标识|&nbsp;|
|/burn|GET|burn标识|&nbsp;|
|/burn/getdraft|GET|burn Json对象|&nbsp;|
|/burn/checkkey|POST|burn Json对象|&nbsp;|
|/burn/computeburn|POST|burn Json对象|&nbsp;|
|/burn/save|POST|burn Json对象|&nbsp;|
|/burn/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/burn/fetchestimateandleft|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 公司相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/company/select|GET|SelectContext Json对象|&nbsp;|
|/company|POST|公司 Json对象|&nbsp;|
|/company|PUT|公司 Json对象|&nbsp;|
|/company|DELETE|公司标识|&nbsp;|
|/company|GET|公司标识|&nbsp;|
|/company/getdraft|GET|公司 Json对象|&nbsp;|
|/company/checkkey|POST|公司 Json对象|&nbsp;|
|/company/save|POST|公司 Json对象|&nbsp;|
|/company/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 产品线相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/productline/select|GET|SelectContext Json对象|&nbsp;|
|/productline|POST|产品线 Json对象|&nbsp;|
|/productline|PUT|产品线 Json对象|&nbsp;|
|/productline|DELETE|产品线标识|&nbsp;|
|/productline|GET|产品线标识|&nbsp;|
|/productline/getdraft|GET|产品线 Json对象|&nbsp;|
|/productline/checkkey|POST|产品线 Json对象|&nbsp;|
|/productline/save|POST|产品线 Json对象|&nbsp;|
|/productline/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## Bug相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/bug/select|GET|SelectContext Json对象|&nbsp;|
|/bug|POST|Bug Json对象|&nbsp;|
|/bug|PUT|Bug Json对象|&nbsp;|
|/bug|DELETE|Bug标识|&nbsp;|
|/bug|GET|Bug标识|&nbsp;|
|/bug/getdraft|GET|Bug Json对象|&nbsp;|
|/bug/activate|POST|Bug Json对象|&nbsp;|
|/bug/assignto|POST|Bug Json对象|&nbsp;|
|/bug/batchunlinkbug|POST|Bug Json对象|&nbsp;|
|/bug/bugfavorites|POST|Bug Json对象|&nbsp;|
|/bug/bugnfavorites|POST|Bug Json对象|&nbsp;|
|/bug/buildbatchunlinkbug|POST|Bug Json对象|&nbsp;|
|/bug/buildlinkbug|POST|Bug Json对象|&nbsp;|
|/bug/buildunlinkbug|POST|Bug Json对象|&nbsp;|
|/bug/checkkey|POST|Bug Json对象|&nbsp;|
|/bug/close|POST|Bug Json对象|&nbsp;|
|/bug/confirm|POST|Bug Json对象|&nbsp;|
|/bug/linkbug|POST|Bug Json对象|&nbsp;|
|/bug/releaasebatchunlinkbug|POST|Bug Json对象|&nbsp;|
|/bug/releaselinkbugbybug|POST|Bug Json对象|&nbsp;|
|/bug/releaselinkbugbyleftbug|POST|Bug Json对象|&nbsp;|
|/bug/releaseunlinkbug|POST|Bug Json对象|&nbsp;|
|/bug/resolve|POST|Bug Json对象|&nbsp;|
|/bug/save|POST|Bug Json对象|&nbsp;|
|/bug/sendmessage|POST|Bug Json对象|&nbsp;|
|/bug/sendmsgpreprocess|POST|Bug Json对象|&nbsp;|
|/bug/tostory|POST|Bug Json对象|&nbsp;|
|/bug/unlinkbug|POST|Bug Json对象|&nbsp;|
|/bug/fetchassignedtomybug|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbugsbybuild|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildbugs|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildlinkresolvedbugs|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildopenbugs|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebug|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugmodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugmodule_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugopenedby|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugopenedby_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugres|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugresolvedby|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugresolvedby_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugresolution_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugseverity_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugstatus_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchbuildproducebugtype_project|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchcuruserresolve|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchmycuropenedbug|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchmyfavorites|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchprojectbugs|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchreleasebugs|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchreleaseleftbugs|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchreleaselinkableleftbug|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchreleaselinkableresolvedbug|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bug/fetchreportbugs|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 测试模块相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/testmodule/select|GET|SelectContext Json对象|&nbsp;|
|/testmodule|POST|测试模块 Json对象|&nbsp;|
|/testmodule|PUT|测试模块 Json对象|&nbsp;|
|/testmodule|DELETE|测试模块标识|&nbsp;|
|/testmodule|GET|测试模块标识|&nbsp;|
|/testmodule/getdraft|GET|测试模块 Json对象|&nbsp;|
|/testmodule/checkkey|POST|测试模块 Json对象|&nbsp;|
|/testmodule/fix|POST|测试模块 Json对象|&nbsp;|
|/testmodule/save|POST|测试模块 Json对象|&nbsp;|
|/testmodule/fetchbypath|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/testmodule/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/testmodule/fetchroot|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/testmodule/fetchroot_nobranch|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/testmodule/fetchtestmodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 动态数据看板相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/dynadashboard/select|GET|SelectContext Json对象|&nbsp;|
|/dynadashboard|POST|动态数据看板 Json对象|&nbsp;|
|/dynadashboard|PUT|动态数据看板 Json对象|&nbsp;|
|/dynadashboard|DELETE|动态数据看板标识|&nbsp;|
|/dynadashboard|GET|动态数据看板标识|&nbsp;|
|/dynadashboard/getdraft|GET|动态数据看板 Json对象|&nbsp;|
|/dynadashboard/checkkey|POST|动态数据看板 Json对象|&nbsp;|
|/dynadashboard/save|POST|动态数据看板 Json对象|&nbsp;|
|/dynadashboard/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 任务模块相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/projectmodule/select|GET|SelectContext Json对象|&nbsp;|
|/projectmodule|POST|任务模块 Json对象|&nbsp;|
|/projectmodule|PUT|任务模块 Json对象|&nbsp;|
|/projectmodule|DELETE|任务模块标识|&nbsp;|
|/projectmodule|GET|任务模块标识|&nbsp;|
|/projectmodule/getdraft|GET|任务模块 Json对象|&nbsp;|
|/projectmodule/checkkey|POST|任务模块 Json对象|&nbsp;|
|/projectmodule/fix|POST|任务模块 Json对象|&nbsp;|
|/projectmodule/save|POST|任务模块 Json对象|&nbsp;|
|/projectmodule/fetchbypath|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/projectmodule/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/projectmodule/fetchroot|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/projectmodule/fetchroot_nobranch|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/projectmodule/fetchroot_task|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/projectmodule/fetchtaskmodules|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 员工负载表相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/employeeload/select|GET|SelectContext Json对象|&nbsp;|
|/employeeload|POST|员工负载表 Json对象|&nbsp;|
|/employeeload|PUT|员工负载表 Json对象|&nbsp;|
|/employeeload|DELETE|员工负载表标识|&nbsp;|
|/employeeload|GET|员工负载表标识|&nbsp;|
|/employeeload/getdraft|GET|员工负载表 Json对象|&nbsp;|
|/employeeload/checkkey|POST|员工负载表 Json对象|&nbsp;|
|/employeeload/save|POST|员工负载表 Json对象|&nbsp;|
|/employeeload/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/employeeload/fetchgetwoerkload|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 项目产品相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/projectproduct/select|GET|SelectContext Json对象|&nbsp;|
|/projectproduct|POST|项目产品 Json对象|&nbsp;|
|/projectproduct|PUT|项目产品 Json对象|&nbsp;|
|/projectproduct|DELETE|项目产品标识|&nbsp;|
|/projectproduct|GET|项目产品标识|&nbsp;|
|/projectproduct/getdraft|GET|项目产品 Json对象|&nbsp;|
|/projectproduct/checkkey|POST|项目产品 Json对象|&nbsp;|
|/projectproduct/save|POST|项目产品 Json对象|&nbsp;|
|/projectproduct/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/projectproduct/fetchrelationplan|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 项目相关成员相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzprojectmember/select|GET|SelectContext Json对象|&nbsp;|
|/ibzprojectmember|POST|项目相关成员 Json对象|&nbsp;|
|/ibzprojectmember|PUT|项目相关成员 Json对象|&nbsp;|
|/ibzprojectmember|DELETE|项目相关成员标识|&nbsp;|
|/ibzprojectmember|GET|项目相关成员标识|&nbsp;|
|/ibzprojectmember/getdraft|GET|项目相关成员 Json对象|&nbsp;|
|/ibzprojectmember/checkkey|POST|项目相关成员 Json对象|&nbsp;|
|/ibzprojectmember/save|POST|项目相关成员 Json对象|&nbsp;|
|/ibzprojectmember/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 文档相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzdoc/select|GET|SelectContext Json对象|&nbsp;|
## 产品统计相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/productstats/select|GET|SelectContext Json对象|&nbsp;|
|/productstats|POST|产品统计 Json对象|&nbsp;|
|/productstats|PUT|产品统计 Json对象|&nbsp;|
|/productstats|DELETE|产品统计标识|&nbsp;|
|/productstats|GET|产品统计标识|&nbsp;|
|/productstats/getdraft|GET|产品统计 Json对象|&nbsp;|
|/productstats/checkkey|POST|产品统计 Json对象|&nbsp;|
|/productstats/getteststats|GET|产品统计 Json对象|&nbsp;|
|/productstats/save|POST|产品统计 Json对象|&nbsp;|
|/productstats/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/productstats/fetchnoopenproduct|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 我的地盘相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzmyterritory/select|GET|SelectContext Json对象|&nbsp;|
|/ibzmyterritory|POST|我的地盘 Json对象|&nbsp;|
|/ibzmyterritory|PUT|我的地盘 Json对象|&nbsp;|
|/ibzmyterritory|DELETE|我的地盘标识|&nbsp;|
|/ibzmyterritory|GET|我的地盘标识|&nbsp;|
|/ibzmyterritory/getdraft|GET|我的地盘 Json对象|&nbsp;|
|/ibzmyterritory/checkkey|POST|我的地盘 Json对象|&nbsp;|
|/ibzmyterritory/mobmenucount|POST|我的地盘 Json对象|&nbsp;|
|/ibzmyterritory/myfavoritecount|POST|我的地盘 Json对象|&nbsp;|
|/ibzmyterritory/myterritorycount|POST|我的地盘 Json对象|&nbsp;|
|/ibzmyterritory/save|POST|我的地盘 Json对象|&nbsp;|
|/ibzmyterritory/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/ibzmyterritory/fetchmywork|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/ibzmyterritory/fetchmyworkmob|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/ibzmyterritory/fetchwelcome|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 后台服务架构相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/pssyssfpub/select|GET|SelectContext Json对象|&nbsp;|
|/pssyssfpub|POST|后台服务架构 Json对象|&nbsp;|
|/pssyssfpub|PUT|后台服务架构 Json对象|&nbsp;|
|/pssyssfpub|DELETE|后台服务架构标识|&nbsp;|
|/pssyssfpub|GET|后台服务架构标识|&nbsp;|
|/pssyssfpub/getdraft|GET|后台服务架构 Json对象|&nbsp;|
|/pssyssfpub/checkkey|POST|后台服务架构 Json对象|&nbsp;|
|/pssyssfpub/save|POST|后台服务架构 Json对象|&nbsp;|
|/pssyssfpub/fetchbuild|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/pssyssfpub/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## Bug统计相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/bugstats/select|GET|SelectContext Json对象|&nbsp;|
|/bugstats|POST|Bug统计 Json对象|&nbsp;|
|/bugstats|PUT|Bug统计 Json对象|&nbsp;|
|/bugstats|DELETE|Bug统计标识|&nbsp;|
|/bugstats|GET|Bug统计标识|&nbsp;|
|/bugstats/getdraft|GET|Bug统计 Json对象|&nbsp;|
|/bugstats/checkkey|POST|Bug统计 Json对象|&nbsp;|
|/bugstats/save|POST|Bug统计 Json对象|&nbsp;|
|/bugstats/fetchbugassignedto|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bugstats/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/bugstats/fetchproductcreatebug|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 任务相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/task/select|GET|SelectContext Json对象|&nbsp;|
|/task|POST|任务 Json对象|&nbsp;|
|/task|PUT|任务 Json对象|&nbsp;|
|/task|DELETE|任务标识|&nbsp;|
|/task|GET|任务标识|&nbsp;|
|/task/getdraft|GET|任务 Json对象|&nbsp;|
|/task/activate|POST|任务 Json对象|&nbsp;|
|/task/assignto|POST|任务 Json对象|&nbsp;|
|/task/cancel|POST|任务 Json对象|&nbsp;|
|/task/checkkey|POST|任务 Json对象|&nbsp;|
|/task/close|POST|任务 Json对象|&nbsp;|
|/task/confirmstorychange|POST|任务 Json对象|&nbsp;|
|/task/deleteestimate|POST|任务 Json对象|&nbsp;|
|/task/editestimate|POST|任务 Json对象|&nbsp;|
|/task/finish|POST|任务 Json对象|&nbsp;|
|/task/pause|POST|任务 Json对象|&nbsp;|
|/task/recordestimate|POST|任务 Json对象|&nbsp;|
|/task/restart|POST|任务 Json对象|&nbsp;|
|/task/save|POST|任务 Json对象|&nbsp;|
|/task/sendmessage|POST|任务 Json对象|&nbsp;|
|/task/sendmsgpreprocess|POST|任务 Json对象|&nbsp;|
|/task/start|POST|任务 Json对象|&nbsp;|
|/task/taskfavorites|POST|任务 Json对象|&nbsp;|
|/task/tasknfavorites|POST|任务 Json对象|&nbsp;|
|/task/fetchassignedtomytask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchbymodule|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchchildtask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchcurfinishtask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchdefaultrow|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchmyfavorites|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchprojecttask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchroottask|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/task/fetchtypegroup|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 项目团队相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/projectteam/getuserrole|PUT|项目团队 Json对象|&nbsp;|
|/projectteam/select|GET|SelectContext Json对象|&nbsp;|
|/projectteam|POST|项目团队 Json对象|&nbsp;|
|/projectteam|PUT|项目团队 Json对象|&nbsp;|
|/projectteam|DELETE|项目团队标识|&nbsp;|
|/projectteam|GET|项目团队标识|&nbsp;|
|/projectteam/getdraft|GET|项目团队 Json对象|&nbsp;|
|/projectteam/checkkey|POST|项目团队 Json对象|&nbsp;|
|/projectteam/save|POST|项目团队 Json对象|&nbsp;|
|/projectteam/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/projectteam/fetchroweditdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 用例库用例步骤相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
## 用户相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/user/select|GET|SelectContext Json对象|&nbsp;|
|/user|POST|用户 Json对象|&nbsp;|
|/user|PUT|用户 Json对象|&nbsp;|
|/user|DELETE|用户标识|&nbsp;|
|/user|GET|用户标识|&nbsp;|
|/user/getdraft|GET|用户 Json对象|&nbsp;|
|/user/checkkey|POST|用户 Json对象|&nbsp;|
|/user/getbycommiter|GET|用户 Json对象|&nbsp;|
|/user/save|POST|用户 Json对象|&nbsp;|
|/user/syncaccount|POST|用户 Json对象|&nbsp;|
|/user/fetchbuguser|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/user/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/user/fetchgetbycommiter|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/user/fetchprojectteamm|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/user/fetchprojectteamuser|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/user/fetchprojectteamuser_task|GET|DEDataSetFetchContext Json对象|&nbsp;|
|/user/fetchtaskteam|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 收藏相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/ibzfavorites/select|GET|SelectContext Json对象|&nbsp;|
|/ibzfavorites|POST|收藏 Json对象|&nbsp;|
|/ibzfavorites|PUT|收藏 Json对象|&nbsp;|
|/ibzfavorites|DELETE|收藏标识|&nbsp;|
|/ibzfavorites|GET|收藏标识|&nbsp;|
|/ibzfavorites/getdraft|GET|收藏 Json对象|&nbsp;|
|/ibzfavorites/checkkey|POST|收藏 Json对象|&nbsp;|
|/ibzfavorites/save|POST|收藏 Json对象|&nbsp;|
|/ibzfavorites/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
## 用户模板相关接口

| 接口路径   | 请求方式   |    请求参数    | 备注 |
| --------  | ------------ | -----------| -----------| 
|/usertpl/select|GET|SelectContext Json对象|&nbsp;|
|/usertpl|POST|用户模板 Json对象|&nbsp;|
|/usertpl|PUT|用户模板 Json对象|&nbsp;|
|/usertpl|DELETE|用户模板标识|&nbsp;|
|/usertpl|GET|用户模板标识|&nbsp;|
|/usertpl/getdraft|GET|用户模板 Json对象|&nbsp;|
|/usertpl/checkkey|POST|用户模板 Json对象|&nbsp;|
|/usertpl/save|POST|用户模板 Json对象|&nbsp;|
|/usertpl/fetchdefault|GET|DEDataSetFetchContext Json对象|&nbsp;|
