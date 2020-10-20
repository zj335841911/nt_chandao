# iBizPMS（iBiz软件生产管理）

iBizPMS（iBiz Production Management System 软件生产管理）是iBiz对于软件生产管理的思考与探索所建立的项目，是iBiz软件生产体系的重要组成部分（管理模块）。它覆盖了软件生产从开始到结束，再到新的开始，往复循环，为软件生产提供有效的管理途径以及协调各阶段内、各阶段之间的信息与资源。它可以说是整个软件生产过程的“协调者”和“管理者”。

iBizPMS参照并增强[禅道]( https://www.zentao.net/)的项目管理业务模型的基础上使用iBiz生产模式重新开发的一套软件生产管理工具，提供全新的界面风格、现代化软件架构（采取中台模式、SpringBoot+VUE前后台分离架构），增强/增加了服务化特性（微服务功能分解--不同功能交给更专业的系统/服务去完成、与其它系统功能协同）、定制化能力（流程定制、表单定制、界面定制等）、移动端办公（钉钉H5微应用、钉钉待办与消息等）。

iBizPMS与iBiz生产运行系统群（统一用户、统一认证、统一工作流等）、商业套件系统群（OA、CRM、EAM、EHR等）进行连通，实现一体化软件生态系统。

## 介绍

一、思考

在日常软件开发的过程中，由于项目管理软件的出现，使得软件过程变得清晰，与此同时不可避免的是，引入之后就需要花费更多的时间与精力，导致实际使用时，对于一些团队而言显得有些鸡肋甚至是负担，便失去了它原本的立意。

另外，传统的项目管理软件对于实际生产的过程性生产物（即开发的代码、展示效果、各阶段或者各小组之间的信息一致性等等）无法进行管理（并非单纯的关联），使得它对于真正使用者来说便有了距离感。

二、探索

iBiz希望将软件生产管理与日常生产融为一体，即在生产过程中，自然而然地为管理提供有效的管理数据支持。

iBiz以模型驱动开发，模型数据（需求数据、设计数据、开发数据、测试数据等等）存在于整个软件过程中，对于团队成员是公开透明且一致的，日常工作产生的数据已经存在于模型库里，这样便不需要成员腾出大部分时间进行软件管理数据的填写与汇报，也不会因为理解偏差没有及时发现而产生不必要返工（即时预览成果物）。

正是得益于iBiz生产体系理念，iBiz探索着逐步将希望变成可能、变成实现。

三、开始

> If I have been able to see further, it was only because I stood on the shoulders of giants. 
>
> --By Isaac Newton

牛顿曾经说过：“站在巨人的肩膀上，你能看得更远！”。

市面上已经有很多很成熟的项目管理软件，例如国外的JIRA、国内的禅道等等。他们在项目管理上面有着丰富的经验以及见解，iBiz在结合自己软件生产理念（模型驱动）、自身开源理念、国人使用习惯等等方面的原因，决定以 禅道（开源版 ） 的为基础，结合各自企业或个人的生产体系，生产出一个更为完善的软件生产管理的软件，也就是iBizPMS。

四、邀请

iBizPMS是一个刚刚起步的项目，它与其它项目有所不同的是，它是一个管理软件，它可以用于自身管理自己的软件开发过程，所以我们决定将它的“诞生”过程一同共享出来，并且诚意邀请大家一起参与进来，同时也能为iBizPMS提供宝贵的建议与意见（如何快速建立[issue](#快速建立issue)？），共同让iBizPMS越来越贴近于大家所需。

项目实时动态可参照[附录-里程碑](#里程碑)信息。

## PMS流程

![flow1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow1_v2.png)

## PMS与禅道

![flow2](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow2_v3.png)

## PMS运行

![flow3](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow3_v2.png)

## PMS生态

![flow4](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow4_v3.png)

## 特性

### 项目管理功能

- 参照禅道的项目管理模型重新开发，全面代码重写，数据库兼容
- 增强禅道原有模型，扩展禅道数据库

### 移动办公

- 钉钉H5微应用
- 待办、日程、消息集成至钉钉
- 拥有PC端全部功能

### 数据可视化

- 面板
- 甘特图
- 透视图
- 燃尽图
- 数据图表
- 报表
- 操作历史

### 便捷高效

- 消息提醒：钉钉接收待办、消息提醒。

### 服务集成

- 各应用关联数据：与iBizSys关联，代码（仓库）、文档等生产物自动关联；与iBiz商业套件中OA、EHR等系统搭配，日常办公数据自动关联
- 各阶段关联数据：关联数据不同阶段保持一致。
- iBizPMS自身系统微服务提供，为Plus应用（例如iBizTodo）提供相关能力
- [iBizRuntime（微服务运行时）](https://gitee.com/ibizlab/ibizlab-runtime)提供了基础运行的微服务（统一认证授权微服务、组织人事管理微服务、 通知微服务等）

### 全面定制

- 流程定制：需求流程、任务流程、缺陷流程、测试流程等
- 表单定制：动态表单项等
- 界面定制：表现表述、表现样式、布局等
- 代码定制：技术选型等
- 业务定制：业务模型的扩展等

### 采用主流框架技术

- 后台：Spring Boot、Spring Cloud

- 前端：Vue

## 技术框架

**后台技术架构**：[iBiz4j Spring R7](http://demo.ibizlab.cn/ibizr7sfstdtempl/ibiz4jr7)

- 核心框架：Spring Boot
- 持久层框架: Mybatis-plus
- 服务发现：Nacos
- 日志管理：Logback
- 项目管理框架: Maven

**前端（PC端）技术架构**： [iBiz-Vue-R7](https://gitee.com/ibizr7pfstdtempl/iBiz-Vue-Studio)

- 前端框架：vue.js
- 路由：vue-router
- 状态管理：vuex
- 国际化：vue-i18n
- 数据交互：axios
- UI框架：element-ui, view-design
- 工具库：
  1. qs - BSD 3
  2. path-to-regexp
  3. rxjs - Apache-2.0
  4. interactjs
  5. moment
  6. xlsx - Apache-2.0
  7. file-saver
- 图标库：font-awesome
- 引用组件：
  1. tinymce - LGPL-2.1
  2. fullcalendar
  3. echarts - Apache-2.0
  4. ibiz-vue-lib
  5. ibiz-gantt-elastic

**前端（移动端）技术架构**： [Vue_Mobile_R7](https://gitee.com/kk_ah/ibiz-vue-mobr7)

- 前端MVVM框架：`vue.js ^2.6.11`
- 路由：`vue-router ^3.1.5`
- 状态管理：`vuex ^3.1.2`
- 国际化：`vue-i18n ^8.15.5`
- 数据交互：`axios ^0.19.2`
- UI框架：`@ionic/core ^5.0.5`, `vant ^2.5.4`
- 工具库：`qs ^6.9.1`, `path-to-regexp ^6.1.0`, `rxjs ^6.5.4`,`moment ^2.24.0`,`async-validator^3.3.0`
- 图标库：`font-awesome 4.7.0`, `ionicons ^5.0.1`
- 引入组件： `echarts ^4.6.0`，`ibiz-mobile-components`
- 代码风格检测：`tslint`

##  开源说明

本系统100%开源，遵守MIT协议。

## 开源参与

- 个人开发者也可以使用iBizPMS进行二次开发，加快完成开发任务。
- 欢迎各位小伙伴了解和体验iBiz的开发模式：**[iBiz开源社区](https://www.ibizlab.cn/)** 。
- 深度开发内测申请：**[iBiz建模平台内测申请通道](https://gitee.com/ibizlab/iBizEHR/wikis/建模平台内测须知?sort_id=2992220)**。 
- 欢迎加入iBizPMS交流QQ群：1067434627

![QQ](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/QQ.png)

## 开发环境

- [禅道 12.3.1]( https://www.zentao.net/download/zentaopms12.3.1-80220.html ) （开源版）：版本尽量保持一致，避免数据结构以及功能上存在差异

- JDK
- Maven
- Node.js
- Yarn
- Vue Cli

##  官方网站

> 待开放。

##  文档手册

> 系统的说明文档与操作手册逐步完善中。
>
> 部署手册、开发手册可以参照iBizPMS的wiki内容。

- iBizPMS介绍（待开放）
- iBizPMS快速上手指南（待开放）
- iBizPMS移动端快速上手指南（待开放）
- [iBizPMS开发手册](https://gitee.com/ibizlab/iBizPMS/wikis/iBizPMS开发手册)
- [iBizPMS部署手册](https://gitee.com/ibizlab/iBizPMS/wikis/Docker-Compose一键部署)

## 系统地址

演示Demo地址：http://pms.ibizlab.cn/

演示移动端地址：http://pms.ibizlab.cn/mob/

演示账号/密码：gitee/gitee@123，pms_guest/guest@123

> 统一认证和权限都连接了微服务，演示系统并未包含。

## 系统展示

### PC端

#### 产品

- 产品--主页

  ![show15](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show15.png)

- 产品--概况

  ![show16](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show16.png)

- 产品--路线图

  ![show17](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show17.png)

#### 项目

- 项目--主页

  ![show18](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show18.png)

- 项目--概况

  ![show19](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show19.png)

- 项目--看板

  ![show20](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show20.png)

- 项目--燃尽图

  ![show21](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show21.png)

- 项目--甘特图

  ![show22](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show22.png)

#### 测试

- 测试--主页

  ![show23](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show23.png)

- 测试--测试结果

  ![show24](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show24.png)

- 测试-测试报告

  ![show42](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show42.png)

  ![show43](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show43.png)

#### 我的地盘

- 我的地盘--主页

  ![show25](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show25.png)

#### 我的收藏

- 我的收藏--需求

  ![show30](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show30.png)

#### 统计报表

- 统计报表-列表

  ![show44](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show44.png)

### 移动端

#### 产品

- 产品-产品列表

![show31](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show31.png)

- 产品-主页

![show32](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show32.png)

#### 项目

- 项目-项目列表

![show33](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show33.png)

- 项目-主页

![show34](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show34.png)

#### 测试

- 测试-测试列表

![show35](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show35.png)

- 测试-主页

![show36](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show36.png)

#### 我的地盘

- 我的地盘-我的待办

![show37](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show37.png)

- 我的地盘-自定义仪表盘

![show38](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show38.png)

![show39](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show39.png)

- 我的地盘-我的工作

![show40](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show40.png)

#### 设置

- 设置-首页

![show41](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show41.png)

### 接口

- 接口列表

![swagger1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/swagger1.png)

- 产品接口

![swagger2](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/swagger2.png)

- 新建产品接口

![swagger3](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/swagger3.png)

## 附录

### 里程碑

| No.  | 日期       | 事件与版本             | 备注说明                                                     |
| ---- | ---------- | ---------------------- | ------------------------------------------------------------ |
| 1    | 2020-05-06 | 选型预研               | 国内外项目管理软件整理和对比                                 |
| 2    | 2020-05-11 | 禅道业务分析、技术预研 |                                                              |
| 3    | 2020-05-18 | **项目启动**           | 项目正式启动                                                 |
| 4    | 2020-05-18 | 禅道模型与界面整理     | 禅道模型整理：梳理禅道的业务数据模型以及模型关系<br>禅道界面、组件整理：梳理禅道界面表现和组件模型 |
| 5    | 2020-05-25 | 禅道API整理            | 梳理禅道API，抽象共通性                                      |
| 6    | 2020-06-01 | V0.0.1.20200601        | 新增：<br>1. iBizPMS 连接禅道 API                            |
| 7    | 2020-07-07 | V0.0.2.20200707        | 新增：<br>1. 项目管理功能：产品、项目、测试功能              |
| 8    | 2020-08-03 | V0.0.3.20200803        | 新增：<br>1. 我的地盘<br>2. 定制化首页<br>3. 集成LDAP用户（微服务iBizRuntime） |
| 9    | 2020-08-22 | V0.0.4.20200822        | 新增：<br>1. 统一认证（微服务iBizRuntime）<br>2. 统一用户（微服务iBizRuntime）<br>3. 统一角色权限（微服务iBizRuntime）<br>4. 移动端H5，支持我的地盘、产品、项目、测试、待办<br>5. 集成进钉钉应用 |
| 10   | 2020-08-30 | V0.0.5.20200830        | 新增：<br>1. 我的收藏                                        |
| 10   | 2020-09-20 | V0.0.6.20200920        | 新增：<br>1. 与iBiz生产系统连接：需求、代码发布、系统部署<br>2. 移动端首页定制化（个人仪表盘）<br>3. 移动端个人办公日历（任务、BUG、待办）<br>4. 移动端主题<br>5. 钉钉待办、消息集成 |
| 11   | 2020-09-30 | V0.0.7.20200930        | 新增：<br>1. 测试报告<br>2. 统计列表（匹配禅道开源版）       |
| 12   | 2020-10-18 | V0.0.8.20201018        | 新增：<br>1. 禅道接口替换为iBizPMS自有逻辑。<br>2. 统计视图（年度统计） |

> **10月会持续优化系统，与生产系统（日常工作数据）更紧密联系，丰富统计与报表。**
>
> **系统文档与相关手册也在逐步完善中。**

### 基于PMS的轻应用

#### iBizTODO

基于iBizPMS服务打造出的Plus应用系统，专注于轻量级任务管理，更高效地任务安排与相关进度管理。

演示Demo地址： http://todo.ibizlab.cn/ 

账号密码： ibzadmin/123456 

![comingsoon1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/comingsoon1.png)

![comingsoon2](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/comingsoon2.png)

![comingsoon3](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/comingsoon3.png)

![comingsoon4](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/comingsoon4.png)

### 快速建立issue

在运行系统的任意一个界面上，敲下“Ctrl+F12”或者点击右下角“显示Debug栏”，便会呈现“新建issues”的操作，点击便可以快速建立issue。

![issue1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/issue1.png)

![issue2](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/issue2.png)

### 通过MOS系统实时分享我们的开发过程

访问地址： http://mos.ibizlab.cn/mos/?#/common_mosindex/srfkeys=3A921F6B-613D-4975-ACD6-79565D82E1DE 

也可以在运行系统的任意一个界面上，敲下“Ctrl+F12”或者点击右下角“显示Debug栏”，便会呈现“配置”的操作，点击便可以进入到MOS系统。

![fl001](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/fl001.png)

![fl002](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/fl002.png)

### 开发说明

iBizPMS使用的是微服务架构模式，因此在项目运行中，存在一部分功能需要依赖其它系统提供的微服务能力，因此在本地开发时，在没有微服务的前提下，iBizPMS提供了单机开发模式：

只需要启动ibizpms-boot模块下DevBootApplication即可。

然而在使用本地开发模式时，相关微服务的功能也无法使用，具体微服务请参照[iBizPMS使用到的其它系统微服务](#iBizPMS使用到的其它系统微服务)。

### iBizPMS使用到的其它系统微服务

iBizPMS使用了 [埃毕致开源商业套件](https://gitee.com/ibizlab)下  [iBizRuntime（微服务运行时）](https://gitee.com/ibizlab/ibizlab-runtime)的相关运行支撑服务。

目前使用到的微服务：

| 序号 | 微服务     | 说明                                 | iBizPMS应用说明          |
| ---- | ---------- | ------------------------------------ | ------------------------ |
| 1    | ibz-uaa    | 统一认证授权微服务（支持第三方认证） | 统一认证，角色、权限管理 |
| 2    | ibz-ou     | 组织人事管理微服务                   | 用户、组织管理           |
| 3    | ibz-notify | 通知微服务                           | 钉钉待办与消息通知       |

### 感谢

最后对以下参与的小伙伴发出衷心的感谢。

@Unidentified、@Yuzuriha_Inori、@crimson777、@huwei_031588 、@nancygitee 、@xignzi、前端模板团队、后端模板团队、CI/CD团队
