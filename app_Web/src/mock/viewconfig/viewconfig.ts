import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取studio链接数据
mock.onGet('./assets/json/view-config.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
                "producttesttabexpview": {
            "title": "测试",
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
        "companydepttreeexpview": {
            "title": "组织部门树导航视图",
            "caption": "公司",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyDeptTreeExpView",
            "viewtag": "025443fdc6ac693e261108fbdf1b40ab"
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
        "producthtmlview": {
            "title": "iBiz软件生产管理",
            "caption": "iBiz软件生产管理",
            "viewtype": "DEHTMLVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductHtmlView",
            "viewtag": "0846a45e5ffdd4d8f857575cfa955dce"
        },
        "productplanmaintabexp": {
            "title": "计划",
            "caption": "产品计划",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanMainTabExp",
            "viewtag": "08ca1b1e6234a0d038e1fbf52478ea7f"
        },
        "bugbuildsubgridview_new": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugBuildSubGridView_New",
            "viewtag": "09b6c2af7dcc4b719d4c8aad2319f1c5"
        },
        "testsuiteeditview9": {
            "title": "测试套件编辑视图",
            "caption": "测试套件",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestSuiteEditView9",
            "viewtag": "0d5db9e736e4556dcfc45c455888a1a6"
        },
        "projecttasktreeexpview": {
            "title": "项目任务导航视图",
            "caption": "项目",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectTaskTreeExpView",
            "viewtag": "103bc77ad54de2476db1d4e9c788cd4e"
        },
        "bugmaineditview": {
            "title": "Bug编辑",
            "caption": "Bug编辑",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMainEditView",
            "viewtag": "122af527bf38b47ddc53c882847b490e"
        },
        "taskassigntaskview": {
            "title": "指派任务",
            "caption": "指派任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskAssignTaskView",
            "viewtag": "12661bdb476cd339554799b417c6ea48"
        },
        "bugmaindashboardview": {
            "title": "Bug数据看板视图",
            "caption": "Bug",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMainDashboardView",
            "viewtag": "1540523a668e920d831510cfbec2c5e2"
        },
        "deptpickupview": {
            "title": "dept数据选择视图",
            "caption": "部门",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptPickupView",
            "viewtag": "16b54862dad958907853dc7eb084a0c0"
        },
        "productplansubplancreateview": {
            "title": "计划",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanSubPlanCreateView",
            "viewtag": "170c1d558f26cf37236390b28f8aca82"
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
        "bugpickupgridview": {
            "title": "bug选择表格视图",
            "caption": "Bug",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPickupGridView",
            "viewtag": "1e7347f3fffc87077dd7f0156125b918"
        },
        "ibizpms": {
            "title": "iBiz软件生产管理",
            "caption": "iBiz软件生产管理",
            "viewtype": "APPINDEXVIEW",
            "viewmodule": "zentao",
            "viewname": "iBizPMS",
            "viewtag": "1ed8a475f4c185fc99c487900bbcf69e"
        },
        "storymainview9_related": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9_Related",
            "viewtag": "1f87f07919b8496e5bf832f95686fada"
        },
        "bugmpickupview": {
            "title": "关联Bug",
            "caption": "关联Bug",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMPickupView",
            "viewtag": "21d716ac12c793af54b112a5a3599674"
        },
        "taskmaineditview": {
            "title": "任务",
            "caption": "任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainEditView",
            "viewtag": "21e00a7239d9737bbfda5c1608b4129c"
        },
        "moduleeditview": {
            "title": "模块",
            "caption": "模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleEditView",
            "viewtag": "2671388d4c12a6f139e6fd806c524dc7"
        },
        "projecteditview_putoff": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Putoff",
            "viewtag": "28557f7c31a387e1deb552076d51f9f1"
        },
        "productchartview": {
            "title": "产品图表视图",
            "caption": "产品",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductChartView",
            "viewtag": "2a60d576ef50d63f5e967cef38bc8fed"
        },
        "productstatstesteditview9": {
            "title": "产品统计编辑视图",
            "caption": "产品统计",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductStatsTestEditView9",
            "viewtag": "2ae3586b0dd0f70c261ba6f24adb99df"
        },
        "taskmaingridview9_child": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainGridView9_Child",
            "viewtag": "2e0d4fb0f3e1ba1ba5bea16a5553cc21"
        },
        "storyreportsubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryReportSubGridView",
            "viewtag": "305dc1599e61a77edfa456866233516c"
        },
        "testtaskgridview9_untested": {
            "title": "测试版本表格视图",
            "caption": "测试版本",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestTaskGridView9_UnTested",
            "viewtag": "3091670967914b91fb4b6f46751dcd7e"
        },
        "taskmaininfoview9": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainInfoView9",
            "viewtag": "321ab2e4e87a29fef8eed086e951a006"
        },
        "tasksubtasknewview": {
            "title": "子任务",
            "caption": "子任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskSubTaskNewView",
            "viewtag": "35ba93bac795e0deb7297d2d471b7180"
        },
        "casecurtesttaskgridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseCurTestTaskGridView",
            "viewtag": "36337c95eb6a21369e5673e64e708925"
        },
        "bugactivationview": {
            "title": "激活Bug",
            "caption": "激活Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugActivationView",
            "viewtag": "37166f95166299e28f1a366b0b375d06"
        },
        "projectburndownchartview": {
            "title": "燃尽图",
            "caption": "项目",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectBurnDownChartView",
            "viewtag": "3aa4c66089ff40194c7f4ecaf627acb5"
        },
        "projectlistexpview": {
            "title": "项目列表导航视图",
            "caption": "项目",
            "viewtype": "DELISTEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectListExpView",
            "viewtag": "3aafb12bb0db2be013c0f5ced8c7dc50"
        },
        "projectpickupgridview": {
            "title": "project选择表格视图",
            "caption": "项目",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPickupGridView",
            "viewtag": "3b346aee2b79b7b6b59bc870b4c67f72"
        },
        "testreportmaininfoview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportMainInfoView",
            "viewtag": "3d56b0e37a56b9be1a28589c04f573fa"
        },
        "storymainview": {
            "title": "需求数据看板视图",
            "caption": "需求",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainView",
            "viewtag": "3f2ca3e560d9082bb56fbf7667a57a66"
        },
        "producteditview_close": {
            "title": "关闭产品",
            "caption": "关闭产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductEditView_Close",
            "viewtag": "3fa1a1978a4380209df04704e2f8059f"
        },
        "casemaingridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainGridView",
            "viewtag": "417541fa331fc089b84936b8359403fa"
        },
        "burnchartview": {
            "title": "燃尽图",
            "caption": "燃尽图",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "BurnChartView",
            "viewtag": "441544d65ca067ea5ea625645b70e610"
        },
        "bugbuglifeeditview9": {
            "title": "Bug的一生",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugBugLifeEditView9",
            "viewtag": "443935a0b9d0fa8daf3131956a8bacc9"
        },
        "testtaskeditview9_detail": {
            "title": "测试版本编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView9_Detail",
            "viewtag": "451eacde0c0c638e29bdfc9cbc789c13"
        },
        "bugeditview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugEditView",
            "viewtag": "46517a803b2470cd0bef27aeda0dbcaf"
        },
        "testreportgridview": {
            "title": "testreport表格视图",
            "caption": "测试报告",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportGridView",
            "viewtag": "48600bd551aa923b5fceabcb83f65239"
        },
        "storyeditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryEditView",
            "viewtag": "4863a523ac490ebce771717756f0c6a8"
        },
        "casemaininfoeditview9": {
            "title": "测试用例编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseMainInfoEditView9",
            "viewtag": "4a5cfcdc473166f49cea6c9628865006"
        },
        "taskgridview": {
            "title": "task表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskGridView",
            "viewtag": "4b01c8ae7e7e23b9c67dbca2ee90e41b"
        },
        "storygridview9_assignedtome": {
            "title": "需求表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_AssignedToMe",
            "viewtag": "4b82e9acf6c784b138b365d6011b296b"
        },
        "projecteditview_activate": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Activate",
            "viewtag": "4b8db6d139edb8adadbef2f0c0b3350a"
        },
        "companydeptusertreeexpview": {
            "title": "组织部门人员树导航视图",
            "caption": "公司",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyDeptUserTreeExpView",
            "viewtag": "4cb497e84dfabd873bc62d5386d5551f"
        },
        "productplansubplangridview": {
            "title": "子计划",
            "caption": "产品计划",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanSubPlanGridView",
            "viewtag": "500950593bf64e5516bdb9b7db29b747"
        },
        "taskclosetaskview": {
            "title": "关闭任务",
            "caption": "关闭任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskCloseTaskView",
            "viewtag": "507c506d62dc910a814332e6ae242266"
        },
        "bugtestreportsubgridview": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTestReportSubGridView",
            "viewtag": "51b05c15dcd26cd675a6e340f0023977"
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
        "testtaskmaintabexpview": {
            "title": "测试版本分页导航视图",
            "caption": "测试版本",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskMainTabExpView",
            "viewtag": "5273dc442a49b8c4d37ba9ff008531e7"
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
        "storytostoryeditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StorytoStoryEditView",
            "viewtag": "542c854d7aaafdecc9235e9f285d289a"
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
        "companymaintabexpview": {
            "title": "组织权限",
            "caption": "组织权限",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyMainTabExpView",
            "viewtag": "56084e37dc061358abd4a3f5340b27e9"
        },
        "storypickupgridview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPickupGridView",
            "viewtag": "569cd532c6b545ffc53cf5fb93427028"
        },
        "bugreleasesubgridview_done": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugReleaseSubGridView_Done",
            "viewtag": "572e63d8153209ef20848682018326b2"
        },
        "taskmaindashboardview": {
            "title": "任务主数据看板视图",
            "caption": "任务",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainDashboardView",
            "viewtag": "575fecad655143bbd28f17c581725a4e"
        },
        "userpickupview": {
            "title": "user数据选择视图",
            "caption": "用户",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "UserPickupView",
            "viewtag": "57e77f1cea8cff268fbd744f326867fb"
        },
        "casemainnewview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainNewView",
            "viewtag": "5890a810365fec51e801d2cffce44fde"
        },
        "taskgridview9_storyrelated": {
            "title": "任务表格视图",
            "caption": "相关任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskGridView9_StoryRelated",
            "viewtag": "5895951b7f1045198682c8d51cd85482"
        },
        "productstorytreeexpview": {
            "title": "产品需求导航视图",
            "caption": "产品",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductStoryTreeExpView",
            "viewtag": "58a943454a652d4f4ce2702d6447c079"
        },
        "projectpickupview": {
            "title": "project数据选择视图",
            "caption": "项目",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPickupView",
            "viewtag": "5a8a29268a7563b62fc0160233958830"
        },
        "storybuildsubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryBuildSubGridView",
            "viewtag": "5b1056f95f9015cdb45901308a758e25"
        },
        "testtaskeditview": {
            "title": "testtask编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView",
            "viewtag": "5b139a407fa34f386f3f784f33841184"
        },
        "projectmainview_edit": {
            "title": "项目编辑视图",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainView_Edit",
            "viewtag": "5b7c1b586dc5e23998a2765d235eaa7e"
        },
        "deptmaingridview": {
            "title": "dept表格视图",
            "caption": "部门",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptMainGridView",
            "viewtag": "5c2b20935d511794aeca60376bd81fef"
        },
        "casegridview9_storyrelated": {
            "title": "相关用例",
            "caption": "相关用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9_StoryRelated",
            "viewtag": "5d3b1d4c90b8b3a2013ccd3f3a9d5f17"
        },
        "tasktasktypeganttview": {
            "title": "任务甘特视图",
            "caption": "任务",
            "viewtype": "DEGANTTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTaskTypeGanttView",
            "viewtag": "5ef23f01b2cffa48351b3272dfeeaf14"
        },
        "storymainview9_storyspec": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9_StorySpec",
            "viewtag": "61f32b2b422e8f1a9825e1f704464a8c"
        },
        "productcasetreeexpview": {
            "title": "产品需求导航视图",
            "caption": "产品",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductCaseTreeExpView",
            "viewtag": "63b82c8ee288130faca83833ec1f837c"
        },
        "taskpivottableview": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskPivotTableView",
            "viewtag": "64204774cc4b97f20aa3becb41b184d5"
        },
        "bugstepsinfoeditview": {
            "title": "Bug编辑视图",
            "caption": "重现步骤",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugStepsInfoEditView",
            "viewtag": "6558930042f15c2297572f51d7e77df5"
        },
        "casebatchnewgridview": {
            "title": "测试用例",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseBatchNewGridView",
            "viewtag": "66769499a681f12bd2ebff8859f1d4ea"
        },
        "productmaintabexpview": {
            "title": "产品",
            "caption": "产品",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainTabExpView",
            "viewtag": "6c7b582273d0726bcf77214807cfe40c"
        },
        "casemaindashboardview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainDashboardView",
            "viewtag": "6f78b25e86923ab600a2141d50fe49fd"
        },
        "testtaskeditview9_info": {
            "title": "测试版本编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView9_Info",
            "viewtag": "706ea523d286cec9ae0c2509f20daa8e"
        },
        "taskkanbanview": {
            "title": "任务看板视图",
            "caption": "任务",
            "viewtype": "DEKANBANVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskKanbanView",
            "viewtag": "7088260bcd6a0303378af2f8e207f479"
        },
        "casecursuitgridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseCurSuitGridView",
            "viewtag": "74e206764fd747fa31467bd5a9f371df"
        },
        "actionhistorylistview": {
            "title": "历史记录",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionHistoryListView",
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
        "taskgridview9_assignedtome": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskGridView9_AssignedToMe",
            "viewtag": "79b3a14f0431747becc48f5b9f3aa990"
        },
        "testsuiteeditview": {
            "title": "testsuite编辑视图",
            "caption": "测试套件",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestSuiteEditView",
            "viewtag": "7a983ef690626958a9897f58efe15e58"
        },
        "producttestleftsidebarlistview": {
            "title": "所有测试",
            "caption": "测试",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestLeftSidebarListView",
            "viewtag": "7af111f4c127f7032c3e12e8c5fc0045"
        },
        "storycurprojectgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryCurProjectGridView",
            "viewtag": "7b1cc190cbffe1cd122d87a9d03b2d21"
        },
        "modulegridview": {
            "title": "模块",
            "caption": "模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleGridView",
            "viewtag": "7bbf35767e7763b69ad6acd4b06c06d1"
        },
        "bugconfirmview": {
            "title": "确认Bug",
            "caption": "确认Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugConfirmView",
            "viewtag": "7c6956b0c4bcc773697adb506d3ce5e9"
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
            "title": "所有产品",
            "caption": "所有产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductGridView",
            "viewtag": "7caeaef893043533e8f388d25523328c"
        },
        "testtaskmaindashboardview": {
            "title": "测试版本数据看板视图",
            "caption": "测试版本",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskMainDashboardView",
            "viewtag": "7cba1f165fc6b4948ce752d3c3b68a34"
        },
        "actionprojecttrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionProjectTrendsListView",
            "viewtag": "7d34636d1c24d613abf8d3fdc64ec7ba"
        },
        "productpickupview": {
            "title": "product数据选择视图",
            "caption": "产品",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPickupView",
            "viewtag": "7df0f0deee91304e0350f00baa8a92d6"
        },
        "storymainview_editmode": {
            "title": "需求数据看板视图",
            "caption": "需求",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainView_EditMode",
            "viewtag": "7e14015af219d302f7d81ff40cdcc418"
        },
        "casegridview9": {
            "title": "测试用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9",
            "viewtag": "7f9b2e4d5b622528df75121b824b6fcc"
        },
        "buildmaingridview": {
            "title": "build表格视图",
            "caption": "版本",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildMainGridView",
            "viewtag": "8104f8c4c275f6ba17fb969edf52eb37"
        },
        "buggridview9_assignedtome": {
            "title": "Bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_AssignedToMe",
            "viewtag": "81893d14e76cac341d4218a9c5ef185d"
        },
        "productplangridview": {
            "title": "productplan表格视图",
            "caption": "产品计划",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanGridView",
            "viewtag": "81b0cee2fedff8f4902c0d735714e5af"
        },
        "groupmaingridview": {
            "title": "group表格视图",
            "caption": "群组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "GroupMainGridView",
            "viewtag": "8399a93b13ffd4ecea6c65e7804a1353"
        },
        "usereditview": {
            "title": "user编辑视图",
            "caption": "用户信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "UserEditView",
            "viewtag": "83b1f6c353e9383e36b8d58eec845267"
        },
        "taskactivationtaskview": {
            "title": "激活任务",
            "caption": "激活任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskActivationTaskView",
            "viewtag": "843526ee13bf0af6fe937470853bf36b"
        },
        "projectgridview": {
            "title": "项目",
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
        "storyreleasesubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryReleaseSubGridView",
            "viewtag": "87b3a9ce09500f304291ed2d69799d5e"
        },
        "taskworkinfoeditview9": {
            "title": "工时信息",
            "caption": "工时信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskWorkInfoEditView9",
            "viewtag": "8ca35f54383cecb05da77cdb1a6588fd"
        },
        "productleftsidebarlistview": {
            "title": "所有产品",
            "caption": "产品",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductLeftSidebarListView",
            "viewtag": "8ca39819b87c5e3e8669fcd7409cf9a2"
        },
        "taskmaingridview_bymodule": {
            "title": "task表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainGridView_ByModule",
            "viewtag": "8d033e1df3a5b0e948f7b6fba22dd0ac"
        },
        "productpickupgridview": {
            "title": "product选择表格视图",
            "caption": "产品",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPickupGridView",
            "viewtag": "8d53a973712c13f448efb8e2182ccc0b"
        },
        "casemaineditview": {
            "title": "测试用例",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainEditView",
            "viewtag": "8e070a3e9ad67b127db723463198f9ac"
        },
        "storyassigntoview": {
            "title": "指派",
            "caption": "指派",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryAssignToView",
            "viewtag": "90d6a9dc6032a7a7e19fee6ac22fccc0"
        },
        "storyreleasesubeditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryReleaseSubEditView",
            "viewtag": "928e6614bcfbd67af3b596cf5dc5a46b"
        },
        "storymainview9": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9",
            "viewtag": "94e0ee1a97736ff4d28b88a46cd395b7"
        },
        "storygridview9_substory": {
            "title": "子需求",
            "caption": "子需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_SubStory",
            "viewtag": "956ad42e59e60cd8b49e7035147e25cf"
        },
        "storymaingridview_bymodule": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainGridView_ByModule",
            "viewtag": "95d25c1556e049e220af04b99b06edeb"
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
        "releasemaininfoview": {
            "title": "发布编辑视图",
            "caption": "发布",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseMainInfoView",
            "viewtag": "983aa1b77ca021f30978523ddef010a0"
        },
        "projecteditview_close": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Close",
            "viewtag": "9a8c28c2365d7dc8bb5619f39576b558"
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
        "filelistview9": {
            "title": "附件",
            "caption": "附件",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "FileListView9",
            "viewtag": "9ed41cee96088630f3d4b0a91e705930"
        },
        "storygridview9_related": {
            "title": "相关需求",
            "caption": "相关需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_Related",
            "viewtag": "a0f93007d7102bd236dc8f50ac4042ea"
        },
        "storymaingridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainGridView",
            "viewtag": "a2c585e16c82b5dec03db7146b9a6fa4"
        },
        "testsuitegridview": {
            "title": "testsuite表格视图",
            "caption": "测试套件",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestSuiteGridView",
            "viewtag": "a3bd82ec712d2e3ad12e716655e960fc"
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
        "buildmainview": {
            "title": "版本编辑视图",
            "caption": "版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildMainView",
            "viewtag": "a6d8bd7fa388f638832b33dddaa6df86"
        },
        "projectgridview9_unclosed": {
            "title": "项目表格视图",
            "caption": "未关闭的项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectGridView9_UnClosed",
            "viewtag": "a7a97014cad1917b94284db21ec968f1"
        },
        "taskcanceltaskview": {
            "title": "取消任务",
            "caption": "取消任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskCancelTaskView",
            "viewtag": "a97ff9ae4f22d5974b51af2c0fae1aa2"
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
        "companymainview": {
            "title": "公司数据看板视图",
            "caption": "公司信息",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyMainView",
            "viewtag": "abc58a7e8f6c6860ef5ea3ead20e5ffd"
        },
        "taskopentaskview": {
            "title": "开始任务",
            "caption": "开始任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskOpenTaskView",
            "viewtag": "abca63015fc84466991c6479f955f6d0"
        },
        "projectteammaingridview_editrow": {
            "title": "项目团队表格视图",
            "caption": "项目团队",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectTeamMainGridView_EditRow",
            "viewtag": "ac21af5f9696e38031a7c2291ed02d64"
        },
        "casestepmaingridview9_editmode": {
            "title": "用例步骤",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseStepMainGridView9_EditMode",
            "viewtag": "ac71a1cfaecb07640c14f75b8f202b1e"
        },
        "taskpausetaskview": {
            "title": "暂停任务",
            "caption": "暂停任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskPauseTaskView",
            "viewtag": "b03bf2445d2e295fccbb6280b2601248"
        },
        "companyeditview": {
            "title": "company编辑视图",
            "caption": "公司信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyEditView",
            "viewtag": "b39a7a76c2175803831235ae3aeef05b"
        },
        "bugreleasesubgridview_undone": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugReleaseSubGridView_Undone",
            "viewtag": "b507b8efc20db47d7b01d67561638cd6"
        },
        "casemaindetaileditview9": {
            "title": "测试用例编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseMainDetailEditView9",
            "viewtag": "b54ba4ee901e1a450acac8723a4ae97a"
        },
        "productdashboardinfomainview9": {
            "title": "产品信息",
            "caption": "产品",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductDashboardInfoMainView9",
            "viewtag": "b5d2389c0dd12ae614b319090ecc2361"
        },
        "storympickupview": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMPickupView",
            "viewtag": "b9bdfc0e33d333ade00934745d9dc0ad"
        },
        "storyplansubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPlanSubGridView",
            "viewtag": "b9e94e3713c82ebab002631bda872b94"
        },
        "depteditview": {
            "title": "dept编辑视图",
            "caption": "部门信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptEditView",
            "viewtag": "bae11f9447355ecc9e2cdff2490e6d11"
        },
        "productmaindashboardview": {
            "title": "产品数据看板视图",
            "caption": "产品",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainDashboardView",
            "viewtag": "bc36be2ee4a78e69c13665a8ad03ab6a"
        },
        "userpickupgridview": {
            "title": "user选择表格视图",
            "caption": "用户",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserPickupGridView",
            "viewtag": "bd3043a0eb4bed8abd005228a4e729af"
        },
        "modulepickupgridview": {
            "title": "模块选择",
            "caption": "模块",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModulePickupGridView",
            "viewtag": "bda78773fabbeee54079951afb35f954"
        },
        "productmainview_edit": {
            "title": "产品编辑视图",
            "caption": "产品基本信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainView_Edit",
            "viewtag": "c02574075c8c15c67231cd71be040763"
        },
        "bugresolveview": {
            "title": "解决Bug",
            "caption": "解决Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugResolveView",
            "viewtag": "c1e9611b6972b1877b75fa5d2c67aad6"
        },
        "testsuitemaindashboardview": {
            "title": "测试套件数据看板视图",
            "caption": "测试套件",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TestSuiteMainDashboardView",
            "viewtag": "c2e4200fb7c9760b4931b43561289980"
        },
        "producttestlistexpview": {
            "title": "测试统计",
            "caption": "测试统计",
            "viewtype": "DELISTEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestListExpView",
            "viewtag": "c539f1585371e9943b90177eaef08b6b"
        },
        "casegridview9_mecretae": {
            "title": "测试用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9_MeCretae",
            "viewtag": "c5b7fb7289325c348ca867eb86185986"
        },
        "buggridview": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugGridView",
            "viewtag": "c9410c9f72535adf1fff569d5243edd1"
        },
        "buggridview9_storyrelated": {
            "title": "相关Bug",
            "caption": "相关Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_StoryRelated",
            "viewtag": "c959d7fe98c33b7befcad24e2596633e"
        },
        "taskdonetaskview": {
            "title": "完成任务",
            "caption": "完成任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskDoneTaskView",
            "viewtag": "c9c256aef78723e1bf9ddc1d38667c3f"
        },
        "modulepickupview": {
            "title": "模块选择",
            "caption": "模块",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "ModulePickupView",
            "viewtag": "cb6c278fd7205b3de3fc041816d15dd8"
        },
        "projectportalview": {
            "title": "项目主页",
            "caption": "项目主页",
            "viewtype": "APPPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPortalView",
            "viewtag": "CC49500F-030F-458F-82DF-F88F6973DF64"
        },
        "releasemaintabexpview": {
            "title": "发布分页导航视图",
            "caption": "产品发布",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseMainTabExpView",
            "viewtag": "ceb630b252aac50781a373e0bef90eb2"
        },
        "projectproductlistview9": {
            "title": "项目产品列表视图",
            "caption": "关联产品",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectProductListView9",
            "viewtag": "d0454a2ae9eb44aca3613b27169f3b18"
        },
        "branchpickupview": {
            "title": "branch数据选择视图",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPickupView",
            "viewtag": "d0851a0acfe0e92a6a5ba34b1552bc66"
        },
        "groupeditview": {
            "title": "group编辑视图",
            "caption": "分组信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "GroupEditView",
            "viewtag": "d2de1e2449f8c1cf2e0310f5477eef4b"
        },
        "usermaingridview": {
            "title": "user表格视图",
            "caption": "用户",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserMainGridView",
            "viewtag": "d364bfbf7092ee45cd0acae49fac77ab"
        },
        "branchpmeditview": {
            "title": "平台管理",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPMEditView",
            "viewtag": "d4cb26555e6d81a172652580cf7d9f7f"
        },
        "storygridview9_child": {
            "title": "细分需求",
            "caption": "细分需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_Child",
            "viewtag": "d6ef7de701a935bd9023cd0eb1338f58"
        },
        "companymainview9": {
            "title": "公司编辑视图",
            "caption": "公司",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CompanyMainView9",
            "viewtag": "d7f401156de51eb49cdb10a6fb9263ee"
        },
        "storymain2gridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMain2GridView",
            "viewtag": "dea346284a2fbb66467c4838c1b3f577"
        },
        "actionalltrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionAllTrendsListView",
            "viewtag": "df57be69540a2e80fee7f3575162b93a"
        },
        "storyreviewview": {
            "title": "需求评审",
            "caption": "需求评审",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryRevIewView",
            "viewtag": "df5a966e312ca9c5f5a41428bc2e2672"
        },
        "producteditview": {
            "title": "product编辑视图",
            "caption": "产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductEditView",
            "viewtag": "e042a1dee405b0a853f315b39a375783"
        },
        "storycloseview": {
            "title": "需求关闭",
            "caption": "需求关闭",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryCloseView",
            "viewtag": "e0fbca7627cdd68765e173028b07f687"
        },
        "productlistexpview": {
            "title": "产品列表导航视图",
            "caption": "产品统计",
            "viewtype": "DELISTEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductListExpView",
            "viewtag": "e396b6f39451e3bf963aec602106adf0"
        },
        "storyeditview_storychange": {
            "title": "需求编辑视图",
            "caption": "变更",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryEditView_StoryChange",
            "viewtag": "e54598b1e6d38d7c6ce8231b531b46bd"
        },
        "deptpickupgridview": {
            "title": "dept选择表格视图",
            "caption": "部门",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptPickupGridView",
            "viewtag": "e644f7976b08c3d7f14fd7e1d5329da8"
        },
        "storyactiviteview": {
            "title": "需求激活",
            "caption": "需求激活",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryActiviteView",
            "viewtag": "e6797f4a1585954f5bb2f682880fa9d6"
        },
        "bugcloseview": {
            "title": "关闭Bug",
            "caption": "关闭Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugCloseView",
            "viewtag": "e67fe0ec86d17b74944c16e187da482d"
        },
        "testtaskeditview_edit": {
            "title": "testtask编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView_Edit",
            "viewtag": "e8763999350c7bd92e884e0381d7ac6b"
        },
        "bugassingtoview": {
            "title": "指派Bug",
            "caption": "指派Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugAssingToView",
            "viewtag": "e897cf80a700c92025004c4696d9ae10"
        },
        "buildeditview": {
            "title": "build编辑视图",
            "caption": "版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildEditView",
            "viewtag": "e9d61d4506a28dec9a6f1d7b9e1fff6a"
        },
        "taskeditview": {
            "title": "task编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskEditView",
            "viewtag": "ea141fddc78fd1af4d06e494baf12cc1"
        },
        "testreportmaintabexpview": {
            "title": "测试报告分页导航视图",
            "caption": "测试报告",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportMainTabExpView",
            "viewtag": "ea7a4f0ccc237a45f39ffb2e3df7e9fd"
        },
        "bugdashboardmaineditview9": {
            "title": "主信息",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugDashboardMainEditView9",
            "viewtag": "ec9a5987de12c718961f243f4034efea"
        },
        "releasequickcreateview": {
            "title": "发布编辑视图",
            "caption": "发布",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseQuickCreateView",
            "viewtag": "ed51615a22255e84a3b276815ef5c96e"
        },
        "projecteditview_suspend": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Suspend",
            "viewtag": "edd664c8fc682d166b3a027dd08bbd8b"
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
        "testreporteditview": {
            "title": "testreport编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView",
            "viewtag": "f340b16bd1355b1c511d9da4b00476e2"
        },
        "casestepmaingridview9": {
            "title": "用例步骤",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseStepMainGridView9",
            "viewtag": "f592519df78de708bd8199a52e5f584d"
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
        "testreporteditview_testrange": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_TestRange",
            "viewtag": "f810cda19770327ea00f51d89a003efe"
        },
        "projecteditview": {
            "title": "项目",
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
        "bugbuildsubgridview_done": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugBuildSubGridView_Done",
            "viewtag": "f8ffad31189703973765c5a9c4fc8a5c"
        },
        "branchpickupgridview": {
            "title": "branch选择表格视图",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPickupGridView",
            "viewtag": "fa64e271c22e6aaa89873d2556edf529"
        },
        "projectmaintabexpview": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainTabExpView",
            "viewtag": "fd0b8748ff96edcde009d39903a9f211"
        },
        "buildmaintabexpview": {
            "title": "版本分页导航视图",
            "caption": "版本",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildMainTabExpView",
            "viewtag": "fffe78c32fb25b287d0c5165d46f8dd2"
        },
        "productmodulegridviewbranch": {
            "title": "产品模块表格视图",
            "caption": "需求模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductModuleGridViewBranch",
            "viewtag": "01384caaa1bc452610f056415c86aaf4"
        },
        "projectmodulequickcfgview": {
            "title": "任务模块",
            "caption": "任务模块",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectModuleQuickCfgView",
            "viewtag": "0568d197dda832ceb89ad0442ab9f230"
        },
        "productliferoadmaplistview": {
            "title": "路线图",
            "caption": "产品生命周期",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductLifeRoadMapListView",
            "viewtag": "07327890c326f9c806b9343f0c660fc1"
        },
        "testmoduleeditview": {
            "title": "测试模块编辑视图",
            "caption": "测试模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleEditView",
            "viewtag": "0c0709bca7ef7c8bf0b359158b8a3cf3"
        },
        "projectteammaingridview": {
            "title": "项目团队表格视图",
            "caption": "项目团队",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectTeamMainGridView",
            "viewtag": "231eecf4805f0b378601ea1a7912077f"
        },
        "projectstatsmaindashboardview": {
            "title": "项目统计数据看板视图",
            "caption": "项目统计",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsMainDashboardView",
            "viewtag": "37df93bfc6d8126c9303eab0c5363df8"
        },
        "testmodulegridview": {
            "title": "测试模块表格视图",
            "caption": "测试模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleGridView",
            "viewtag": "3eac093f9fabd7b62f7aa61c7315e624"
        },
        "projectmodulemaingridview": {
            "title": "实体表格视图",
            "caption": "任务模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectModuleMainGridView",
            "viewtag": "41dab4e36aef71df5c66acca4db7d045"
        },
        "productstatseditview9": {
            "title": "产品统计编辑视图",
            "caption": "产品统计",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsEditView9",
            "viewtag": "5d468f620cc30181773d875b3bb8be6e"
        },
        "testmodulegridviewbranch": {
            "title": "产品模块表格视图",
            "caption": "测试模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleGridViewBranch",
            "viewtag": "65129e5f76f96cbb1d2d1c9e9bb2afed"
        },
        "productmoduletreeexpview": {
            "title": "需求模块树导航视图",
            "caption": "需求模块",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductModuleTreeExpView",
            "viewtag": "84104216ff9049079f9442c9cbd54342"
        },
        "testmodulegridviewmain": {
            "title": "产品模块表格视图",
            "caption": "测试模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleGridViewMain",
            "viewtag": "9396442ba87e188748229e6bc6927156"
        },
        "productliferoadmaplistview9": {
            "title": "路线图",
            "caption": "产品生命周期",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductLifeRoadMapListView9",
            "viewtag": "985c8eb7591e5e00de8e3cda638d5727"
        },
        "testmoduletreeexpview": {
            "title": "测试模块树导航视图",
            "caption": "测试模块",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleTreeExpView",
            "viewtag": "a4c56767e9b34cd619d79b676fa2ccd9"
        },
        "productmodulequickcfgview": {
            "title": "需求模块",
            "caption": "需求模块",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductModuleQuickCfgView",
            "viewtag": "a9be826f6c53b091270f492be52f2519"
        },
        "projectmoduletreeexpview": {
            "title": "任务模块树导航视图",
            "caption": "任务模块",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectModuleTreeExpView",
            "viewtag": "bb8860972029d9947daa3652a4b5d291"
        },
        "testmodulequickcfgview": {
            "title": "需求模块",
            "caption": "测试模块",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleQuickCfgView",
            "viewtag": "d337f5c3c125dc2641321f2d93b65476"
        },
        "projectstatseditview9": {
            "title": "项目统计编辑视图",
            "caption": "项目统计",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsEditView9",
            "viewtag": "e444135470a806822b9b950e15c42a3e"
        },
        "testportalview": {
            "title": "测试主页",
            "caption": "测试主页",
            "viewtype": "APPPORTALVIEW",
            "viewmodule": "Ungroup",
            "viewname": "TestPortalView",
            "viewtag": "D1283E46-401A-4CFD-A7A1-BF5B90197463"
        }
    }];
});