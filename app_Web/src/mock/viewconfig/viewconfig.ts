import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取studio链接数据
mock.onGet('./assets/json/view-config.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
                "producttesttabexpview": {
            "title": "产品主数据视图",
            "caption": "测试",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestTabExpView",
            "viewtag": "005b0ba30f9e9e982e087961bd50c681"
        },
        "productexpeditview": {
            "title": "产品编辑视图",
            "caption": "产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductExpEditView",
            "viewtag": "00ac056d598228619b6c0dbfcd603e4c"
        },
        "caseeditview": {
            "title": "case编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseEditView",
            "viewtag": "02b7ecd8e994b90558a9d6c23705f600"
        },
        "projectproductplanlistview9": {
            "title": "项目产品列表视图",
            "caption": "关联计划",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectProductPlanListView9",
            "viewtag": "03c110360a714011ed9c30b8207d3703"
        },
        "bugplansubgridview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPlanSubGridView",
            "viewtag": "07004de8a7d23e97b76460f888c8b290"
        },
        "productliferoadmaplistview": {
            "title": "路线图",
            "caption": "产品生命周期",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductLifeRoadMapListView",
            "viewtag": "07327890c326f9c806b9343f0c660fc1"
        },
        "productplanmaintabexp": {
            "title": "计划",
            "caption": "产品计划",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanMainTabExp",
            "viewtag": "08ca1b1e6234a0d038e1fbf52478ea7f"
        },
        "projecttasktreeexpview": {
            "title": "项目任务导航视图",
            "caption": "项目",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectTaskTreeExpView",
            "viewtag": "103bc77ad54de2476db1d4e9c788cd4e"
        },
        "bugmaindashboardview": {
            "title": "Bug数据看板视图",
            "caption": "Bug",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMainDashboardView",
            "viewtag": "1540523a668e920d831510cfbec2c5e2"
        },
        "productplanmaineditview": {
            "title": "计划详情",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanMainEditView",
            "viewtag": "17831eefddbb65ba3bda7534b8ef8d09"
        },
        "producttestdashboardview": {
            "title": "产品测试数据看板视图",
            "caption": "产品",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestDashboardView",
            "viewtag": "1884d01229cee824d7577705da288043"
        },
        "producttestgridview": {
            "title": "product表格视图",
            "caption": "产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestGridView",
            "viewtag": "1d697dd8e47a4781be8f690bcc5f7800"
        },
        "ibizpms": {
            "title": "iBiz项目管理",
            "caption": "iBiz项目管理",
            "viewtype": "APPINDEXVIEW",
            "viewmodule": "zentao",
            "viewname": "iBizPMS",
            "viewtag": "1ed8a475f4c185fc99c487900bbcf69e"
        },
        "moduleeditview": {
            "title": "模块",
            "caption": "模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleEditView",
            "viewtag": "2671388d4c12a6f139e6fd806c524dc7"
        },
        "productchartview": {
            "title": "产品图表视图",
            "caption": "产品",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductChartView",
            "viewtag": "2a60d576ef50d63f5e967cef38bc8fed"
        },
        "taskmaingridview9_child": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainGridView9_Child",
            "viewtag": "2e0d4fb0f3e1ba1ba5bea16a5553cc21"
        },
        "taskmaininfoview9": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainInfoView9",
            "viewtag": "321ab2e4e87a29fef8eed086e951a006"
        },
        "projectburndownchartview": {
            "title": "燃尽图",
            "caption": "项目",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectBurnDownChartView",
            "viewtag": "3aa4c66089ff40194c7f4ecaf627acb5"
        },
        "storymainview": {
            "title": "需求数据看板视图",
            "caption": "需求",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainView",
            "viewtag": "3f2ca3e560d9082bb56fbf7667a57a66"
        },
        "bugeditview": {
            "title": "bug编辑视图",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugEditView",
            "viewtag": "46517a803b2470cd0bef27aeda0dbcaf"
        },
        "storyeditview": {
            "title": "story编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryEditView",
            "viewtag": "4863a523ac490ebce771717756f0c6a8"
        },
        "storyassignedtomegridview9": {
            "title": "需求表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryAssignedToMeGridView9",
            "viewtag": "4b82e9acf6c784b138b365d6011b296b"
        },
        "productplansubplangridview": {
            "title": "子计划",
            "caption": "产品计划",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanSubPlanGridView",
            "viewtag": "500950593bf64e5516bdb9b7db29b747"
        },
        "casestepeditview": {
            "title": "casestep编辑视图",
            "caption": "用例步骤",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseStepEditView",
            "viewtag": "512c3cf0ef884c051097236e7d79814c"
        },
        "projectcurproductgridview": {
            "title": "project表格视图",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectCurProductGridView",
            "viewtag": "522b28992d16207a0fc47340589bb2cf"
        },
        "productmodulegridview": {
            "title": "产品模块表格视图",
            "caption": "需求模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductModuleGridView",
            "viewtag": "523abe6eb852ca08fe4a3c140ff47b42"
        },
        "productgridview_unclosed": {
            "title": "产品表格视图",
            "caption": "未关闭产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductGridView_UnClosed",
            "viewtag": "52e850ef857c81c2a96f5db0a84836f8"
        },
        "storymainview9_editmode": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9_EditMode",
            "viewtag": "538555af88ea31549a5bc7dbf1e6286a"
        },
        "storyplansubeditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPlanSubEditView",
            "viewtag": "54a5f5fa5f8def88d2aec9c7ee6d85fe"
        },
        "productplansubplaneditview": {
            "title": "子计划",
            "caption": "子计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanSubPlanEditView",
            "viewtag": "54c7ba4afb6222c4c0af04a78a0592df"
        },
        "taskmaindashboardview": {
            "title": "任务主数据看板视图",
            "caption": "任务",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainDashboardView",
            "viewtag": "575fecad655143bbd28f17c581725a4e"
        },
        "productstorytreeexpview": {
            "title": "产品需求导航视图",
            "caption": "产品",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductStoryTreeExpView",
            "viewtag": "58a943454a652d4f4ce2702d6447c079"
        },
        "testtaskeditview": {
            "title": "testtask编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView",
            "viewtag": "5b139a407fa34f386f3f784f33841184"
        },
        "tasktasktypeganttview": {
            "title": "任务甘特视图",
            "caption": "任务",
            "viewtype": "DEGANTTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTaskTypeGanttView",
            "viewtag": "5ef23f01b2cffa48351b3272dfeeaf14"
        },
        "productmaintabexpview": {
            "title": "产品",
            "caption": "产品",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainTabExpView",
            "viewtag": "6c7b582273d0726bcf77214807cfe40c"
        },
        "actionhistroylistview": {
            "title": "历史记录",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionHistroyListView",
            "viewtag": "770a170098d148e438a7666b248e6519"
        },
        "branchpmgridview": {
            "title": "平台管理",
            "caption": "平台管理",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPMGridView",
            "viewtag": "776ea44ea05316c9c6cb9d5948e993f9"
        },
        "producttestleftsidebarlistview": {
            "title": "所有产品",
            "caption": "测试",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestLeftSidebarListView",
            "viewtag": "7af111f4c127f7032c3e12e8c5fc0045"
        },
        "modulegridview": {
            "title": "模块",
            "caption": "模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleGridView",
            "viewtag": "7bbf35767e7763b69ad6acd4b06c06d1"
        },
        "projectleftsidebarlistview": {
            "title": "所有项目",
            "caption": "项目",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectLeftSidebarListView",
            "viewtag": "7c79a923d0cdd1a5bc41a34367809077"
        },
        "productgridview": {
            "title": "product表格视图",
            "caption": "产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductGridView",
            "viewtag": "7caeaef893043533e8f388d25523328c"
        },
        "actionprojecttrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionProjectTrendsListView",
            "viewtag": "7d34636d1c24d613abf8d3fdc64ec7ba"
        },
        "storymainview_editmode": {
            "title": "需求数据看板视图",
            "caption": "需求",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainView_EditMode",
            "viewtag": "7e14015af219d302f7d81ff40cdcc418"
        },
        "productplangridview": {
            "title": "productplan表格视图",
            "caption": "产品计划",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanGridView",
            "viewtag": "81b0cee2fedff8f4902c0d735714e5af"
        },
        "projectgridview": {
            "title": "project表格视图",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectGridView",
            "viewtag": "846ddf8e555650608d4f75c4595c1270"
        },
        "projectmaindashboardview": {
            "title": "项目数据看板视图",
            "caption": "项目",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainDashboardView",
            "viewtag": "85ee867b09a2d6303c061d91374ec975"
        },
        "productleftsidebarlistview": {
            "title": "所有产品",
            "caption": "产品",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductLeftSidebarListView",
            "viewtag": "8ca39819b87c5e3e8669fcd7409cf9a2"
        },
        "storymainview9": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9",
            "viewtag": "94e0ee1a97736ff4d28b88a46cd395b7"
        },
        "actionprojecttrendslistview9": {
            "title": "产品动态",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ActionProjectTrendsListView9",
            "viewtag": "96ec3f978c1cc22acc532331d5dc2a41"
        },
        "actionproducttrendslistview9": {
            "title": "产品动态",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ActionProductTrendsListView9",
            "viewtag": "97af408e6a6cb088c824cacd1807f353"
        },
        "productliferoadmaplistview9": {
            "title": "路线图",
            "caption": "产品生命周期",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductLifeRoadMapListView9",
            "viewtag": "985c8eb7591e5e00de8e3cda638d5727"
        },
        "releasegridview": {
            "title": "release表格视图",
            "caption": "发布",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseGridView",
            "viewtag": "9ae49b10ec96e8f7b063be2ed4172247"
        },
        "productmoduleeditview": {
            "title": "产品模块编辑视图",
            "caption": "需求模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductModuleEditView",
            "viewtag": "9d2da90e3480c3bd1e1c58a6484356c5"
        },
        "releaseeditview": {
            "title": "release编辑视图",
            "caption": "发布",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseEditView",
            "viewtag": "9ddace1c12afee8da3f0254a05ba141a"
        },
        "storymaingridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainGridView",
            "viewtag": "a2c585e16c82b5dec03db7146b9a6fa4"
        },
        "productportalview": {
            "title": "产品主页",
            "caption": "产品主页",
            "viewtype": "APPPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPortalView",
            "viewtag": "A49E5FD9-FC90-434B-9E13-192873F6F2AC"
        },
        "taskmaingridview": {
            "title": "task表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainGridView",
            "viewtag": "a4af2d93ae66c9877ee99bfe7b93d22c"
        },
        "productplaneditview": {
            "title": "计划",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanEditView",
            "viewtag": "aad9a5713d6828d3119b811b26915215"
        },
        "testtaskgridview": {
            "title": "testtask表格视图",
            "caption": "测试版本",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskGridView",
            "viewtag": "aae1ade339fe6a2ebe367489f6393db1"
        },
        "productdashboardinfomainview9": {
            "title": "产品信息",
            "caption": "产品",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductDashboardInfoMainView9",
            "viewtag": "b5d2389c0dd12ae614b319090ecc2361"
        },
        "storyplansubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPlanSubGridView",
            "viewtag": "b9e94e3713c82ebab002631bda872b94"
        },
        "productmaindashboardview": {
            "title": "产品数据看板视图",
            "caption": "产品",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainDashboardView",
            "viewtag": "bc36be2ee4a78e69c13665a8ad03ab6a"
        },
        "modulepickupgridview": {
            "title": "模块选择",
            "caption": "模块",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModulePickupGridView",
            "viewtag": "bda78773fabbeee54079951afb35f954"
        },
        "buggridview": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugGridView",
            "viewtag": "c9410c9f72535adf1fff569d5243edd1"
        },
        "modulepickupview": {
            "title": "模块选择",
            "caption": "模块",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "ModulePickupView",
            "viewtag": "cb6c278fd7205b3de3fc041816d15dd8"
        },
        "projectproductlistview9": {
            "title": "项目产品列表视图",
            "caption": "关联产品",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectProductListView9",
            "viewtag": "d0454a2ae9eb44aca3613b27169f3b18"
        },
        "storyspecmainview9": {
            "title": "需求描述编辑视图",
            "caption": "需求描述",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StorySpecMainView9",
            "viewtag": "d0c00941809a9dee4e44db3cca606f0a"
        },
        "branchpmeditview": {
            "title": "平台管理",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPMEditView",
            "viewtag": "d4cb26555e6d81a172652580cf7d9f7f"
        },
        "storymain2gridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMain2GridView",
            "viewtag": "dea346284a2fbb66467c4838c1b3f577"
        },
        "producteditview": {
            "title": "product编辑视图",
            "caption": "产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductEditView",
            "viewtag": "e042a1dee405b0a853f315b39a375783"
        },
        "productlistexpview": {
            "title": "产品列表导航视图",
            "caption": "产品统计",
            "viewtype": "DELISTEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductListExpView",
            "viewtag": "e396b6f39451e3bf963aec602106adf0"
        },
        "taskeditview": {
            "title": "task编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskEditView",
            "viewtag": "ea141fddc78fd1af4d06e494baf12cc1"
        },
        "casestepgridview": {
            "title": "casestep表格视图",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseStepGridView",
            "viewtag": "edb7ac4efd8ea387fd7b5945f39d42a6"
        },
        "projectdashboardinfoview": {
            "title": "项目信息",
            "caption": "项目",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectDashboardInfoView",
            "viewtag": "ef1a8c8701140368af895304274c602a"
        },
        "taskmaindetailview9": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainDetailView9",
            "viewtag": "ef6cfafd09bb61ddb6fec7840f78e97d"
        },
        "casegridview": {
            "title": "case表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseGridView",
            "viewtag": "f63aae9bc8cfe29654439743b465a942"
        },
        "productbugtreeexpview": {
            "title": "产品需求导航视图",
            "caption": "产品",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductBugTreeExpView",
            "viewtag": "f78c94cb0a20d7f459753a4070f8f3e7"
        },
        "actionproducttrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionProductTrendsListView",
            "viewtag": "f7a278d765ff0f85a2c59cbb2485fa30"
        },
        "projecteditview": {
            "title": "project编辑视图",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView",
            "viewtag": "f83dac873b9215483c4bb91673284b41"
        },
        "actioneditview": {
            "title": "action编辑视图",
            "caption": "系统日志",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionEditView",
            "viewtag": "f8b69912b3ca27b5d083c8fb1971c84a"
        },
        "projectmaintabexpview": {
            "title": "项目导航视图",
            "caption": "项目",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainTabExpView",
            "viewtag": "fd0b8748ff96edcde009d39903a9f211"
        }
    }];
});