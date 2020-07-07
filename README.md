# iBizPMS（iBiz软件生产管理）

iBizPMS（iBiz Production Management System 软件生产管理）是iBiz对于软件生产管理的思考与探索所建立的项目，是iBiz软件生产体系的重要组成部分（管理模块）。它覆盖了软件生产从开始到结束，再到新的开始，往复循环，为软件生产提供有效的管理途径以及协调各阶段内、各阶段之间的信息与资源。它可以说是整个软件生产过程的“协调者”和“管理者”。

iBizPMS集成了 **[禅道]( https://www.zentao.net/ )**（开源版 ）的特性与功能，在提供传统的项目管理软件的管理能力（产品、项目、质量、文档等等）的同时，通过结合各自企业或个人的生产体系，将实际生产过程以及落地的内容（软件设计，软件研发，软件测试，文档制作，生产部署，生产发布等等）管理起来，补足了传统项目管理中缺失的那一块，做到真正意义上的一体化管理。

iBizPMS采取微服务架构，将核心能力服务化，打造出软件生产管理软件中台。

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

市面上已经有很多很成熟的项目管理软件，例如国外的JIRA、国内的禅道等等。他们在项目管理上面有着丰富的经验以及见解，iBiz在结合自己软件生产理念（模型驱动）、自身开源理念、国人使用习惯等等方面的原因，决定以 **[禅道]( https://www.zentao.net/ )**（开源版 ） 的为基础，结合各自企业或个人的生产体系，生产出一个更为完善的软件生产管理的软件，也就是iBizPMS。

四、邀请

iBizPMS是一个刚刚起步的项目，它与其它项目有所不同的是，它是一个管理软件，它可以用于自身管理自己的软件开发过程，所以我们决定将它的“诞生”过程一同共享出来，并且诚意邀请大家一起参与进来，同时也能为iBizPMS提供宝贵的建议与意见（如何快速建立[issue](#快速建立issue)？），共同让iBizPMS越来越贴近于大家所需。

项目实时动态可参照[附录-里程碑](#里程碑)信息。

> 体验iBiz的开发模式，了解iBiz的开发模式：
>
> **[iBiz开源社区](https://www.ibizlab.cn/)** 

## 整体流程

![flow](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow.png)

## 与禅道关系

![flow2](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow2.png)

## 增强特性

- VSCode风格界面表现。

- 丰富的UI组件。

- 丰富的工具集。

- 移动端支持。

- 采用中台模式，微服务架构，核心能力服务化，快速响应和迭代。

- 标准的Restful风格的接口，接口层次更明晰、使用更方便。

- 增强项目管理功能，例如引入单点认证、甘特图、日历、报表、工作流等。

- 支持接入生产体系（系统）数据，自动完成日常管理数据填充。

  ![ywt](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/ywt.png)


## 开源参与

- 个人开发者也可以使用iBizPMS进行二次开发，加快完成开发任务。

- 欢迎各位小伙伴了解和体验iBiz的开发模式：**[iBiz开源社区](https://www.ibizlab.cn/)** 。

- 欢迎加入iBizPMS交流QQ群：1067434627

  ![QQ](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/QQ.jpg)

## 技术框架

**后台技术架构**：[iBiz4j Spring R7](http://demo.ibizlab.cn/ibizr7sfstdtempl/ibiz4jr7)

- 核心框架：Spring Boot
- 持久层框架: Mybatis-plus
- 服务发现：Nacos
- 日志管理：Logback
- 项目管理框架: Maven

**前端技术架构**： [iBiz-Vue-R7](https://gitee.com/ibizr7pfstdtempl/iBiz-Vue-Studio)

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

## 开发环境

- [禅道 12.3.1]( https://www.zentao.net/download/zentaopms12.3.1-80220.html ) （开源版）：版本尽量保持一致，避免数据结构以及功能上存在差异

- JDK
- Maven
- Node.js
- Yarn
- Vue Cli

##  开源说明

本系统100%开源，遵守MIT协议。

## 系统地址

演示Demo地址：http://pms.ibizlab.cn

演示账号/密码：gitee/gitee@123，pms_guest/guest@123

## 系统展示

### 产品

- 产品--主页

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show1.png)

- 产品--概况

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show2.png)

- 产品--需求

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show3.png)

- 产品--路线图

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show4.png)

- 产品--动态

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show5.png)

### 项目

- 项目--主页

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show6.png)

- 项目--概况

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show7.png)

- 项目--任务

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show8.png)

- 项目--看板

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show9.png)

- 项目--燃尽图

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show10.png)

- 项目--甘特图

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show11.png)

### 测试

- 测试--主页

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show12.png)

- 测试-Bug

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show13.png)

- 测试-功能测试

![show1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show14.png)

### 接口

- 接口列表

![swagger1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/swagger1.png)

- 产品接口

![swagger2](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/swagger2.png)

- 新建产品接口

![swagger3](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/swagger3.png)

## 附录

### 里程碑

| 序号 | 时间       | 事件                   | 备注                               |
| ---- | ---------- | ---------------------- | ---------------------------------- |
| 1    | 2020-05-06 | 选型预研               | 国内外项目管理软件整理和对比       |
| 2    | 2020-05-11 | 禅道业务分析、技术预研 |                                    |
| 3    | 2020-05-18 | 项目启动               |                                    |
| 4    | 2020-05-18 | 禅道模型整理           | 梳理禅道的业务数据模型以及模型关系 |
| 5    | 2020-05-18 | 禅道界面、组件整理     | 梳理禅道界面表现和组件模型         |
| 6    | 2020-05-25 | 禅道API整理            | 梳理禅道API，抽象共通性            |
| 7    | 2020-06-01 | 联通iBizPMS与禅道      | iBizPMS与禅道API和数据库联通       |
| 8    | 2020-07-07 | 项目管理主功能完成     | 产品、项目、测试功能完成           |

> 后续将陆续细腻各功能内容，并完成个人主页“我的地盘”，用户、认证、权限功能，连通生产系统的数据。

### 快速建立issue

在运行系统的任意一个界面上，敲下“Ctrl+F12”或者点击右下角“显示Debug栏”，便会呈现“新建issues”的操作，点击便可以快速建立issue。

![issue1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/issue1.png)

![issue2](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/issue2.png)

### 感谢

最后对以下参与的小伙伴发出衷心的感谢。

@Unidentified、@Yuzuriha_Inori、@crimson777、前端模板团队、后端模板团队、CI/CD团队
