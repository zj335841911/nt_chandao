# iBiz软件产品研发管理（iBizPMS）

## 介绍

iBiz软件产品研发管理（iBiz Production Management System，简称iBizPMS）作为一款企业级的项目管理工具，不仅提供了完整的项目管理功能，还加强了与其它系统的互动，例如工作中产生的有效的工作数据（过程数据与结果数据）的交换与管理。iBizPMS是iBiz生态的重要组成部分，它与iBiz生产运行系统群（统一用户、统一认证、统一工作流等）、商业套件系统群（OA、CRM、EAM、EHR等）有效地进行配合，完成与各系统/服务之间的数据交换，共通构建了iBiz一体化软件生态系统。当然，iBizPMS不仅仅只是支持与iBiz生态中的各个系统/服务的接通，同样可以通过iBiz强大的定制化能力完成与其它系统的接通。

iBizPMS代码完全开源，支持系统功能、系统流程、界面表现的高度定制，以及支持以扩展与增强插件方式进行功能补充与升级，进而衍生出功能更为专注的轻应用（也可以称为微应用）。

iBizPMS使用了现代化软件架构，采取中台模式，前端技术使用Vue，后端技术使用Spring Boot/Cloud，界面提供了多种VSCode主题风格。

iBizPMS重要特性：

- **微服务化**：系统本身更专注于项目管理功能，其它各个功能交给更专业的系统/服务去完成，做到真正意义上的协同办公。
- **高度定制**：代码完全开源， 可以定制系统功能、系统流程、界面表现等。
- **插件中心**：提供以插件方式对系统进行补充与升级，所有插件均提供在插件中心。
- **应用中心**：基于iBizPMS服务，提供更专注于单项功能的轻应用，所有的轻应用提供在应用中心。
- **移动办公**：支持app，同时也支持集成钉钉、企业微信等主流协同办公app的H5微应用以及待办消息推送。
- **数据迁移**：支持从禅道、JIRA等类似管理系统中将数据迁移至iBizPMS，也支持excel、csv等方式的数据导入。

## iBiz软件过程

![flow1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow1_v3.png)

## iBizPMS运行

![flow3](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow3_v3.png)

## iBizPMS生态

![flow4](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow4_v4.png)

## 特性

### 项目管理功能

- 需求管理
- 任务管理
- Bug管理
- 用例管理
- 计划发布

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

### 插件中心

- 提供以插件方式对系统进行补充与升级
- iBiz提供的iBizPMS官方插件库
- 用户开发的iBizPMS插件库

### 应用中心

- 基于iBizPMS服务，提供更专注于单项功能的轻应用
- iBiz提供的iBizPMS官方应用库（例如iBizTODO）
- 用户开发的iBizPMS应用库

### 采用主流框架技术

- 后台：Spring Boot、Spring Cloud

- 前端：Vue

## 插件中心

iBizPMS提供了插件内置接口（暂未开放），开发者便可以以插件方式对系统进行补充与升级。

### 安装

- 在线插件：iBizPMS运行时，可通过插件中心，下载并安装插件中心所开放的插件。

- 本地插件：引入插件jar，通过pom的配置安装插件；也可以通过插件中心，导入本地插件。

### 卸载

- 在线插件：iBizPMS运行时，可通过插件中心，卸载已安装的插件。
- 本地插件：移除相关pom配置，移除引入的插件jar；也可以通过插件中心，移除本地插件。

### 官方插件

暂未开放。

## 应用中心

基于iBizPMS服务，提供更专注于单项功能的轻应用。

### 安装

- 在线应用：iBizPMS运行时，可通过插件中心，下载并安装插件中心所开放的应用。

- 本地应用：引入插件jar，通过pom的配置安装插件；也可以通过插件中心，导入本地应用。

### 卸载

- 在线应用：iBizPMS运行时，可通过插件中心，卸载已安装的应用。
- 本地应用：移除相关pom配置，移除引入的插件jar；也可以通过插件中心，移除本地应用。

### 官方应用

| 应用     | 说明                                                         | 演示地址                                   |
| -------- | ------------------------------------------------------------ | ------------------------------------------ |
| iBizTODO | 基于iBizPMS服务打造出的Plus应用系统。<br>专注于轻量级任务管理，更高效地任务安排与相关进度管理。 | http://todo.ibizlab.cn/<br>ibzadmin/123456 |

## 技术框架

iBizPMS使用了现代化软件架构，采取中台模式，前端技术使用Vue，后端技术使用Spring Boot/Cloud，界面提供了多种VSCode主题风格

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

### 即将到来

- 插件式开发模式：iBizPMS未来会提供插件内置接口，开发者便可以以插件方式对系统进行补充与升级。

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
