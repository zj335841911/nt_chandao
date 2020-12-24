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
        "fileprojectgridviewfile": {
            "title": "file表格视图",
            "caption": "附件",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "FileProjectGridViewFile",
            "viewtag": "007d984e6319843d935a48b30587ab1b"
        },
        "productexpeditview": {
            "title": "产品编辑视图",
            "caption": "产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductExpEditView",
            "viewtag": "00ac056d598228619b6c0dbfcd603e4c"
        },
        "productstatseditview": {
            "title": "产品统计编辑视图",
            "caption": "产品统计",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsEditView",
            "viewtag": "00ad158575544b05271d9502c47918a8"
        },
        "productmodulegridviewbranch": {
            "title": "产品模块表格视图",
            "caption": "需求模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductModuleGridViewBranch",
            "viewtag": "01384caaa1bc452610f056415c86aaf4"
        },
        "bugstatseditview": {
            "title": "Bug统计编辑视图",
            "caption": "Bug统计",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsEditView",
            "viewtag": "0174d3383dadc0878991e5c90bd5eaa3"
        },
        "tasktypetaskgroupgridview": {
            "title": "任务表格视图（类型分组）",
            "caption": "类型分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTypeTaskGroupGridView",
            "viewtag": "02099c395e73d3d63cad28a5c4ce148b"
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
            "title": "功能测试编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseEditView",
            "viewtag": "02b7ecd8e994b90558a9d6c23705f600"
        },
        "ibzcasenewediteditview9": {
            "title": "用例库用例编辑视图（创建编辑）",
            "caption": "创建编辑",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseNewEditEditView9",
            "viewtag": "03840483160859a4e36e33e9f9471ed3"
        },
        "testreportprojectgridview": {
            "title": "测试报告表格视图",
            "caption": "项目报告",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportProjectGridView",
            "viewtag": "038fb7788a6add9cc268fe8dd67e6262"
        },
        "projectproductplanlistview9": {
            "title": "项目产品列表视图",
            "caption": "关联计划",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectProductPlanListView9",
            "viewtag": "03c110360a714011ed9c30b8207d3703"
        },
        "projectmodulequickcfgview": {
            "title": "任务模块",
            "caption": "任务模块",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectModuleQuickCfgView",
            "viewtag": "0568d197dda832ceb89ad0442ab9f230"
        },
        "sysposteditview": {
            "title": "岗位编辑视图",
            "caption": "岗位",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "SysPostEditView",
            "viewtag": "0600af11d605ca19d8b36466f9312338"
        },
        "projectstorymeditview9": {
            "title": "项目多表单编辑视图（需求相关）",
            "caption": "需求相关",
            "viewtype": "DEMEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectStoryMEditView9",
            "viewtag": "0626fb8e7d46da2437209b658d8f51c2"
        },
        "storypickupgridview4": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPickupGridView4",
            "viewtag": "0681bc3d1ffa8e147640ab0dd005d3b5"
        },
        "projectstatsallgridview": {
            "title": "所有项目",
            "caption": "所有项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsALLGridView",
            "viewtag": "06ac640ed0240503d1d42ecd9a090787"
        },
        "ibzplantempletdetailgridview9": {
            "title": "计划模板详情表格视图",
            "caption": "计划模板详情",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibizpro",
            "viewname": "IbzPlanTempletDetailGridView9",
            "viewtag": "06f1f232ce217863bf45ddc1b727d0a8"
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
        "ibzprostorygridview": {
            "title": "需求表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryGridView",
            "viewtag": "077af636991c5ae68e1bc260baffc10f"
        },
        "docbasiceditview9": {
            "title": "文档编辑视图（基本信息）",
            "caption": "基本信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocBasicEditView9",
            "viewtag": "08055fc34b36d97c0e0487b4703d363a"
        },
        "producthtmlview": {
            "title": "iBiz软件生产管理",
            "caption": "iBiz软件生产管理",
            "viewtype": "DEHTMLVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductHtmlView",
            "viewtag": "0846a45e5ffdd4d8f857575cfa955dce"
        },
        "ibzweeklyusr2editview": {
            "title": "周报编辑视图",
            "caption": "周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyUsr2EditView",
            "viewtag": "08b9cfa3e53e34fdb6a8533b1ebcc0ff"
        },
        "productplanmaintabexp": {
            "title": "计划",
            "caption": "产品计划",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanMainTabExp",
            "viewtag": "08ca1b1e6234a0d038e1fbf52478ea7f"
        },
        "doclibprojecttreeexpview": {
            "title": "文档库树导航视图（项目文档库）",
            "caption": "项目文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProjectTreeExpView",
            "viewtag": "092028347755c225e484250308db2d51"
        },
        "testresulteditview": {
            "title": "testresult编辑视图",
            "caption": "测试结果",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestResultEditView",
            "viewtag": "0946cbeb1bf3dc832384ec4ee62310e8"
        },
        "bugbuildsubgridview_new": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugBuildSubGridView_New",
            "viewtag": "09b6c2af7dcc4b719d4c8aad2319f1c5"
        },
        "projectstatsusr2gridviewtaskstatuscount": {
            "title": "项目统计表格视图（任务状态统计）",
            "caption": "任务状态统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsUsr2GridViewTaskStatusCount",
            "viewtag": "09ec3280dedaeac7260c00f3f923d20e"
        },
        "ibzcaseediteditview": {
            "title": "用例库用例编辑视图（编辑）",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseEditEditView",
            "viewtag": "0a43b5a8be540dcb1227223ae1c9adc9"
        },
        "casemoduleentrygridview": {
            "title": "测试用例表格视图（测试结果条目）",
            "caption": "测试结果条目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseModuleEntryGridView",
            "viewtag": "0abddf92966b6314d75cc71da4e7f7b8"
        },
        "productprojectgridview9": {
            "title": "产品表格视图（项目）",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductProjectGridView9",
            "viewtag": "0b1b51910ca13751bfd6d356dcadbbce"
        },
        "ibzfavoritestabexpview": {
            "title": "我的收藏",
            "caption": "我的收藏",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzFavoritesTabExpView",
            "viewtag": "0bd16cd21ee2e8951fb8a86599ac1510"
        },
        "storyusr2mpickupview": {
            "title": "发布下属需求数据多项选择视图",
            "caption": "需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryUsr2MPickupView",
            "viewtag": "0bfc1d5ae45c2a74d3b58739784ec7f7"
        },
        "testmoduleeditview": {
            "title": "测试模块编辑视图",
            "caption": "测试模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleEditView",
            "viewtag": "0c0709bca7ef7c8bf0b359158b8a3cf3"
        },
        "ibzplantempleteditview": {
            "title": "产品计划模板编辑视图",
            "caption": "计划模板",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzPlanTempletEditView",
            "viewtag": "0c85027ec13bfdd00f46a4b2ec6f7430"
        },
        "testsuiteeditview9": {
            "title": "测试套件编辑视图",
            "caption": "测试套件",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestSuiteEditView9",
            "viewtag": "0d5db9e736e4556dcfc45c455888a1a6"
        },
        "ibzcasegridview": {
            "title": "用例库用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzCaseGridView",
            "viewtag": "0da13bc2f5883c69742cac5e4e866e2a"
        },
        "bugmpickupview4": {
            "title": "关联Bug",
            "caption": "关联Bug",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMPickupView4",
            "viewtag": "0dc54afa855dec1037987a074b6bc8a3"
        },
        "docmianbeditview9": {
            "title": "文档编辑视图（正文）",
            "caption": "正文",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocMianBEditView9",
            "viewtag": "0e393401d3992dd5e2d1f435cd2cf63c"
        },
        "casecasefavorite": {
            "title": "case我得收藏",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseCaseFavorite",
            "viewtag": "0f0573a5043e9bd93a605e5f1d3ca334"
        },
        "ibzmyterritorytabexpview": {
            "title": "我的地盘",
            "caption": "我的地盘",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryTabExpView",
            "viewtag": "0f3dff62ef8bcb1662cc82e57a34c56b"
        },
        "releaseoptionview": {
            "title": "发布选项操作视图",
            "caption": "发布",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseOptionView",
            "viewtag": "0f44800c5178aa53932ef08d0fc88590"
        },
        "sysdepartmentgridexpview": {
            "title": "部门表格导航视图",
            "caption": "部门",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysDepartmentGridExpView",
            "viewtag": "0fe6eb98e96dec0acb915184960ffbeb"
        },
        "projecttasktreeexpview": {
            "title": "项目任务导航视图",
            "caption": "项目",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectTaskTreeExpView",
            "viewtag": "103bc77ad54de2476db1d4e9c788cd4e"
        },
        "ibizproindexlistview": {
            "title": "索引检索列表视图",
            "caption": "索引检索",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproIndexListView",
            "viewtag": "10aa6afcd73e77c44c698319a1b4edcd"
        },
        "todobaseeditview9": {
            "title": "待办事宜表编辑视图",
            "caption": "基本信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TodoBaseEditView9",
            "viewtag": "10ec8362fe511f35dcf896a048770011"
        },
        "ibzreportlymyreceivedreportlydetaileditview": {
            "title": "汇报编辑视图",
            "caption": "汇报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyMyReceivedReportlyDetailEditView",
            "viewtag": "116ed64d7e34ab79dea49d712c451872"
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
        "storyproductstagekanbanview": {
            "title": "需求看板视图",
            "caption": "需求",
            "viewtype": "DEKANBANVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProductStageKanbanView",
            "viewtag": "1340907d0c403b48b0ca086331cd2083"
        },
        "testresultmeditview9": {
            "title": "测试结果多表单编辑视图",
            "caption": "测试结果",
            "viewtype": "DEMEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestResultMEditView9",
            "viewtag": "136cd30bd141450ecd9e7791215733e6"
        },
        "systeammembergridexpviewteam": {
            "title": "组成员表格导航视图",
            "caption": "组成员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberGridExpViewTeam",
            "viewtag": "137cbf2ebd888dcdd6eff40271481f04"
        },
        "productstatsallgridview": {
            "title": "所有产品",
            "caption": "所有产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsALLGridView",
            "viewtag": "1381e29846ae321ca2d06d71bbe3082d"
        },
        "doclibusr3treeview": {
            "title": "文档库树视图",
            "caption": "文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibUsr3TreeView",
            "viewtag": "13ee26e3aef1942ab979bab497a318b1"
        },
        "docgridview10": {
            "title": "文档表格视图",
            "caption": "最近更新",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "DocGridView10",
            "viewtag": "13f17793cbc4fc2b36473a74d1bad4b2"
        },
        "tasktreeexpview": {
            "title": "任务树导航视图",
            "caption": "任务",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTreeExpView",
            "viewtag": "143e97f1ddaf50560e1602118613f0f0"
        },
        "caselinkcasegridview": {
            "title": "测试用例表格视图（关联用例）",
            "caption": "关联用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseLinkCaseGridView",
            "viewtag": "14d95e9a02db631c2b9af47641fcec4e"
        },
        "bugmyfavoritegridview": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugMyFavoriteGridView",
            "viewtag": "14f00c25c80cfa8ec6c94ad76e82cf16"
        },
        "bugmaindashboardview": {
            "title": "Bug数据看板视图",
            "caption": "Bug",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMainDashboardView",
            "viewtag": "1540523a668e920d831510cfbec2c5e2"
        },
        "projectmgeditview": {
            "title": "项目编辑视图（团队管理）",
            "caption": "团队管理",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMGEditView",
            "viewtag": "15859f5ecc4a3f3e02dac44d1de521af"
        },
        "doclibundoneprojecttreeexpview": {
            "title": "文档库树导航视图",
            "caption": "未完成项目",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibUnDoneProjectTreeExpView",
            "viewtag": "15ba586aa7dcfe6e62e768dd06f77415"
        },
        "productsumproductbugtypesumusr4gridview": {
            "title": "产品Bug类型统计表格视图",
            "caption": "产品汇总表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumProductBugTypeSumUsr4GridView",
            "viewtag": "15e5bef05cc545e3f705eeed95ac8dc1"
        },
        "deptpickupview": {
            "title": "部门数据选择视图",
            "caption": "部门",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptPickupView",
            "viewtag": "16b54862dad958907853dc7eb084a0c0"
        },
        "projectstatsprojectstorystagestatusgridview": {
            "title": "项目统计表格视图",
            "caption": "项目需求阶段统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectStoryStageStatusGridView",
            "viewtag": "16ddc45f2ef8c888e3143d72c076b457"
        },
        "productplansubplancreateview": {
            "title": "计划",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanSubPlanCreateView",
            "viewtag": "170c1d558f26cf37236390b28f8aca82"
        },
        "buggridview9_storyaffect": {
            "title": "相关Bug",
            "caption": "相关Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_Storyaffect",
            "viewtag": "174408669d176924efbb3227d0784e93"
        },
        "productplanmaineditview": {
            "title": "计划详情",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanMainEditView",
            "viewtag": "17831eefddbb65ba3bda7534b8ef8d09"
        },
        "doclibmodulechildweihuitreeexpview": {
            "title": "文档库分类树导航视图",
            "caption": "文档库分类实体树导航视图",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibModuleChildWeiHuiTreeExpView",
            "viewtag": "1877f0428a710631da1becb3931873a0"
        },
        "producttestdashboardview": {
            "title": "产品测试数据看板视图",
            "caption": "产品",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestDashboardView",
            "viewtag": "1884d01229cee824d7577705da288043"
        },
        "projectusr2gridview": {
            "title": "项目实体表格视图(参与项目)",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectUsr2GridView",
            "viewtag": "1956d68ebad0fcc688c189757a8601a6"
        },
        "projecttesttabexpview": {
            "title": "项目分页导航视图（测试）",
            "caption": "测试",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectTestTabExpView",
            "viewtag": "19641dcdbd1f1973c9693859003e1f60"
        },
        "casereportlinkgridview": {
            "title": "测试用例表格视图（报告关联用例）",
            "caption": "关联用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseReportLinkGridView",
            "viewtag": "1b214bd727533f6662aa78368fb67e4b"
        },
        "testresultgridview9": {
            "title": "测试结果表格视图",
            "caption": "测试结果",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestResultGridView9",
            "viewtag": "1bd39348fb4dc22c08e997bd771a2419"
        },
        "ibzlibmoduletreeexpview": {
            "title": "模块维护",
            "caption": "模块维护",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibModuleTreeExpView",
            "viewtag": "1be20d21085195e17a87ad447b4cddb2"
        },
        "bugpickupgridview4": {
            "title": "bug选择表格视图",
            "caption": "Bug",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPickupGridView4",
            "viewtag": "1c4104beb7e8515d20d03262732ba4f8"
        },
        "testreportprojectmaininfoview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportProjectMainInfoView",
            "viewtag": "1c92f5b1cba0fe541c16c54f45fb7317"
        },
        "testmodulepickupgridview": {
            "title": "测试模块选择表格视图",
            "caption": "测试模块",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestModulePickupGridView",
            "viewtag": "1cd7fbb3fdd5fa489e87d4cffa01e993"
        },
        "doclibtreeview": {
            "title": "文档库树视图",
            "caption": "文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibTreeView",
            "viewtag": "1cfbd454f62ef5339730bf627e66a486"
        },
        "producttestgridview": {
            "title": "所有产品",
            "caption": "测试",
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
        "ibzdailydailyeditview": {
            "title": "日报编辑视图",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyDailyEditView",
            "viewtag": "1edacc9f865e00cd6cd2ea0475e8dd26"
        },
        "usercontacteditview": {
            "title": "usercontact编辑视图",
            "caption": "用户联系方式",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactEditView",
            "viewtag": "1eeb1cc3801fe7d3961fca4b3d753b04"
        },
        "testreportmainediteditview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportMainEditEditView",
            "viewtag": "1f13f330cbca49433d11328f9e7d8ae2"
        },
        "storymainview9_related": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9_Related",
            "viewtag": "1f87f07919b8496e5bf832f95686fada"
        },
        "taskstorysubtasknewview": {
            "title": "需求批量分解",
            "caption": "需求批量分解",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskStorySubTaskNewView",
            "viewtag": "1fb2e83b5cac45eddd44adf32ad9da14"
        },
        "testtaskmyygridview": {
            "title": "测试单表格视图",
            "caption": "测试版本",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskMyYGridView",
            "viewtag": "1fdd9d52c2aa726e0d0372fb9e3ad916"
        },
        "usercontacttreeexpview": {
            "title": "用户联系方式树导航视图",
            "caption": "用户联系方式",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactTreeExpView",
            "viewtag": "202eafd29797672a733652aee093b6f9"
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
        "doclibmodulempickupview": {
            "title": "文档库分类数据多项选择视图",
            "caption": "文档库分类",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleMPickupView",
            "viewtag": "222aedcd65a379b9f15f7ad9d10f63a8"
        },
        "doclibproducttreeexpview": {
            "title": "文档库树导航视图（产品文档库）",
            "caption": "产品文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductTreeExpView",
            "viewtag": "22dcf6656e1b870d0427a450cdbd7d20"
        },
        "taskzsgridview9weeknextweekplan": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "report",
            "viewname": "TaskZsGridView9WeekNextWeekPlan",
            "viewtag": "230bcf0d1c95c90d4985fcf6e6e3e261"
        },
        "projectteammaingridview": {
            "title": "项目团队表格视图",
            "caption": "项目团队",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectTeamMainGridView",
            "viewtag": "231eecf4805f0b378601ea1a7912077f"
        },
        "projectstatseditview": {
            "title": "项目统计编辑视图",
            "caption": "项目统计",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectStatsEditView",
            "viewtag": "237ae6d47a530dbc59eacb4e6f7db169"
        },
        "casetypeentrygridview": {
            "title": "测试用例表格视图（测试结果条目）",
            "caption": "测试结果条目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseTypeEntryGridView",
            "viewtag": "2398b174d972ff2a5aebe52946ef3a53"
        },
        "docdashboardview": {
            "title": "文档数据看板视图",
            "caption": "文档",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "DocDashboardView",
            "viewtag": "23cc93d7fdddff5077a7952d26802a7b"
        },
        "productsumstorysumgridview": {
            "title": "产品汇总表表格视图",
            "caption": "需求汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumStorySumGridView",
            "viewtag": "240ec4bdf10888613e1601f420ad730f"
        },
        "projectstatsprojectbugtypesumusr2gridview": {
            "title": "项目bug类型统计表格视图",
            "caption": "项目统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectBugTypeSumUsr2GridView",
            "viewtag": "24148503ec2063b36eab0deebf4bcfd1"
        },
        "storympickupview3": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMPickupView3",
            "viewtag": "2419b3758d42fb7e5a590153d28bd945"
        },
        "taskmainmygridview": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainMyGridView",
            "viewtag": "24a03de02dc02b92a3c228b944e78ed9"
        },
        "ibzprojectmembereditview9": {
            "title": "项目相关成员编辑视图（相关成员）",
            "caption": "相关成员",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzProjectMemberEditView9",
            "viewtag": "24f12a249a654cadf0a0f9e132221c10"
        },
        "doclibpickupview": {
            "title": "doclib数据选择视图",
            "caption": "文档库",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibPickupView",
            "viewtag": "25452e386e72c70f03641cc650c1b979"
        },
        "moduleeditview": {
            "title": "模块",
            "caption": "模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleEditView",
            "viewtag": "2671388d4c12a6f139e6fd806c524dc7"
        },
        "testresulttesttaskmeditview9": {
            "title": "测试结果多表单编辑视图",
            "caption": "测试结果",
            "viewtype": "DEMEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestResultTestTaskMEditView9",
            "viewtag": "27374a7bc38f2581e433db58d85e14e4"
        },
        "taskmonthlycompletezsgridview": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "TaskMonthlyCompleteZsGridView",
            "viewtag": "277d3227691197cf610211b0051693e4"
        },
        "caseoptionview": {
            "title": "执行",
            "caption": "执行",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseOptionView",
            "viewtag": "27e6b14e0243582fc67753b58a64066d"
        },
        "projecteditview_putoff": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Putoff",
            "viewtag": "28557f7c31a387e1deb552076d51f9f1"
        },
        "productsumpochartview9": {
            "title": "产品汇总表图表视图",
            "caption": "产品汇总表",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductSumPoChartView9",
            "viewtag": "2889bd5a8f15aadc0f60686124720c0d"
        },
        "ibzcaseopencaseview": {
            "title": "用例库用例数据看板视图",
            "caption": "测试用例",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseOpenCaseView",
            "viewtag": "29ef09f6db53edab023146b282f045d9"
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
        "ibzreportlycalendareditview": {
            "title": "汇报编辑视图",
            "caption": "汇报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyCalendarEditView",
            "viewtag": "2c91cdea9417e94544a5d73ac68cd78d"
        },
        "todomaindashboardview_link": {
            "title": "待办事宜表数据看板视图",
            "caption": "待办",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "Todomaindashboardview_link",
            "viewtag": "2d522dfacc8d37f56c2d684791a39d5d"
        },
        "doclibcustomtreeexpview": {
            "title": "文档库树导航视图（自定义文档库）",
            "caption": "自定义文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibCustomTreeExpView",
            "viewtag": "2d63c9fa825c7d4f7816cab45ad34bb6"
        },
        "taskmaingridview9_child": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainGridView9_Child",
            "viewtag": "2e0d4fb0f3e1ba1ba5bea16a5553cc21"
        },
        "doclibcustomdoclibchildtreeview": {
            "title": "文档库树视图（自定义文档库-子目录）",
            "caption": "自定义文档库-子目录",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibCustomDocLibChildTreeView",
            "viewtag": "2e47613b1ffa6c0d31c513a4492013f6"
        },
        "ibizprokeywordeditview": {
            "title": "关键字编辑视图",
            "caption": "关键字",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IBIZProKeywordEditView",
            "viewtag": "2f5aac4204863167d65dd820720f621f"
        },
        "ibizproplugineditview": {
            "title": "系统插件编辑视图",
            "caption": "系统插件",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizplugin",
            "viewname": "IBIZProPluginEditView",
            "viewtag": "2fe124188a5da06e3e641c7e1e1e76d6"
        },
        "storykanbanview": {
            "title": "需求看板视图",
            "caption": "需求",
            "viewtype": "DEKANBANVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryKanbanView",
            "viewtag": "300e4e1f02be8e316e1e76b49c5c5ccc"
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
        "testtaskmydgridview": {
            "title": "测试单表格视图",
            "caption": "测试版本",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskMyDGridView",
            "viewtag": "30c07c840301a6ba07383d123bf9bba1"
        },
        "ibizproindexindexpickupview": {
            "title": "索引检索数据选择视图",
            "caption": "索引检索",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproIndexIndexPickupView",
            "viewtag": "31dc3f821fafa9e92cc28d217373a67b"
        },
        "taskmaininfoview9": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainInfoView9",
            "viewtag": "321ab2e4e87a29fef8eed086e951a006"
        },
        "casegridview9_my": {
            "title": "测试用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9_My",
            "viewtag": "326af0ddc7ead19a61f479dddf7b1e3a"
        },
        "casegridview9_storyaffect": {
            "title": "相关用例",
            "caption": "相关用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9_Storyaffect",
            "viewtag": "3458603afa6fef36eda88e9f794840f5"
        },
        "testreportprojecttabexpview": {
            "title": "测试报告分页导航视图",
            "caption": "项目报告",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportProjectTabExpView",
            "viewtag": "34d99e271bca6539e707f467f9575044"
        },
        "useryearworkstatsinfoeditview9": {
            "title": "用户年度工作内容统计编辑视图（基础信息）",
            "caption": "基础信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsInfoEditView9",
            "viewtag": "3519739a278f4151b39580be3a276cbf"
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
        "taskzsgridview9": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskZsGridView9",
            "viewtag": "371c02ab5108f29501f89e273ebd39d1"
        },
        "projectmainmygridview": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainMyGridView",
            "viewtag": "376e2623b256509cdf69e2de4c01d31b"
        },
        "usertplgridview": {
            "title": "usertpl表格视图",
            "caption": "用户模板",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserTplGridView",
            "viewtag": "379360eb2f83ea4dc50744144c2878b7"
        },
        "testtaskblockoptionview": {
            "title": "阻塞",
            "caption": "阻塞",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskBlockOptionView",
            "viewtag": "383716f2bcf137ecae2d212f2380246a"
        },
        "taskrestarttaskview": {
            "title": "继续任务",
            "caption": "继续任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskRestartTaskView",
            "viewtag": "38d08f54d32902165fb9e3b679810d55"
        },
        "projectplanaddeditview": {
            "title": "项目编辑视图（计划添加）",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPlanAddEditView",
            "viewtag": "396ab8c5ef500f859d6591e77f094ecd"
        },
        "productsumgridview": {
            "title": "产品汇总表表格视图",
            "caption": "产品汇总表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumGridView",
            "viewtag": "3989c98a31e037a67b27cdf7acb1f7cd"
        },
        "ibzmyterritoryeditview": {
            "title": "我的地盘编辑视图",
            "caption": "我的地盘",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzMyTerritoryEditView",
            "viewtag": "39e5daf0dbfad3f76c5fa2625383d402"
        },
        "ibzreportlyreportlydetaileditview": {
            "title": "汇报编辑视图",
            "caption": "汇报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyReportlyDetailEditView",
            "viewtag": "3a81cfd739313c5e2fa5a4ada539abed"
        },
        "tasktodoeditview": {
            "title": "任务编辑视图",
            "caption": "待办转任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTodoEditView",
            "viewtag": "3a8aaf8bc175455ca2be6ace38f821a1"
        },
        "casetobugeditview": {
            "title": "转BUG",
            "caption": "转BUG",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseToBugEditView",
            "viewtag": "3a9645e5ad29ed73b59ccd2f548d602c"
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
            "title": "项目选择表格视图",
            "caption": "项目",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPickupGridView",
            "viewtag": "3b346aee2b79b7b6b59bc870b4c67f72"
        },
        "productwizardview": {
            "title": "产品向导视图",
            "caption": "产品",
            "viewtype": "DEWIZARDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductWizardView",
            "viewtag": "3b4ab1882a49962f12900abeeddf60f0"
        },
        "sysupdateloglastgridview": {
            "title": "系统更新日志表格视图",
            "caption": "更新日志",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogLastGridView",
            "viewtag": "3cecc451b691620a36a8dc8aa69d624d"
        },
        "testreportmaininfoview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportMainInfoView",
            "viewtag": "3d56b0e37a56b9be1a28589c04f573fa"
        },
        "moduletreeexpview": {
            "title": "所有产品",
            "caption": "所有产品",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleTreeExpView",
            "viewtag": "3e2436a62be2ed493eda83693261274e"
        },
        "projectchartview9": {
            "title": "项目图表视图",
            "caption": "项目",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectChartView9",
            "viewtag": "3e8a8e6a89e8550bc64a2a8bbae01f15"
        },
        "testmodulegridview": {
            "title": "测试模块表格视图",
            "caption": "测试模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleGridView",
            "viewtag": "3eac093f9fabd7b62f7aa61c7315e624"
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
        "doclibeditview": {
            "title": "创建文档库",
            "caption": "文档库",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibEditView",
            "viewtag": "41693a4d3b2bd3a7195d31ceae6cdcf3"
        },
        "casemaingridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainGridView",
            "viewtag": "417541fa331fc089b84936b8359403fa"
        },
        "casestepgridview9": {
            "title": "用例步骤表格视图",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseStepGridView9",
            "viewtag": "41bfd828761fc42ef9a7acdd4f4babcf"
        },
        "projectmodulemaingridview": {
            "title": "实体表格视图",
            "caption": "任务模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectModuleMainGridView",
            "viewtag": "41dab4e36aef71df5c66acca4db7d045"
        },
        "casetotalopenedcasechartview9": {
            "title": "测试用例图表视图（累计创建用例）",
            "caption": "累计创建用例",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseTotalOpenedCaseChartView9",
            "viewtag": "42657e87da91a994bd2bb5ba97bed31d"
        },
        "storycurprojectwgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryCurProjectWGridView",
            "viewtag": "427e28cc5267cfc2a6d6da6fde36ef9f"
        },
        "testreportdashboardview": {
            "title": "测试报告数据看板视图",
            "caption": "测试报告",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportDashboardView",
            "viewtag": "42aa867a5dbd04d53462fa69b0e43296"
        },
        "sysemployeeusr3gridview": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeUsr3GridView",
            "viewtag": "42ce56d703f9d063d6c1524bb7a559de"
        },
        "todoassigntoview": {
            "title": "指派表单视图",
            "caption": "指派给",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoAssignToView",
            "viewtag": "43582fa5b922cb77d0b1e704a7b6e5c3"
        },
        "productstatsgridviewproducntinputtable": {
            "title": "产品统计表格视图",
            "caption": "产品统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsGridViewProducntInputTable",
            "viewtag": "438cf5075b908617ca9d1bcf357a5b3e"
        },
        "testrunmeditview9": {
            "title": "测试运行多表单编辑视图",
            "caption": "测试运行",
            "viewtype": "DEMEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestRunMEditView9",
            "viewtag": "43a086ef952c56ebce8a14743f5157d6"
        },
        "bugbuildsubgridview_new_9212": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugBuildSubGridView_New_9212",
            "viewtag": "43c2d1a2b73b0363036aee72dc9312c5"
        },
        "ibzmyterritorycalendarexpview": {
            "title": "我的地盘日历导航视图",
            "caption": "我的地盘",
            "viewtype": "DECALENDAREXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryCalendarExpView",
            "viewtag": "43d566a4567a5e337a73afa187dae97c"
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
        "docgridview": {
            "title": "doc表格视图",
            "caption": "文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocGridView",
            "viewtag": "4503911318e1f1f26599b68a6c6e681d"
        },
        "testtaskeditview9_detail": {
            "title": "测试版本编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView9_Detail",
            "viewtag": "451eacde0c0c638e29bdfc9cbc789c13"
        },
        "doclibmoduleeditviewmain": {
            "title": "文档库分类编辑视图",
            "caption": "文档库分类",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleEditViewMain",
            "viewtag": "4532f2b69291dd6bbd457b5588ac528b"
        },
        "casetestmaindashboardview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseTestMainDashboardView",
            "viewtag": "454743e1c8070362a873d0d4fe35740b"
        },
        "productstatsusr2gridviewproductcomplete": {
            "title": "产品统计表格视图",
            "caption": "产品统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsUsr2GridViewPRoductComplete",
            "viewtag": "456a90200a66a37616388b42a254eb67"
        },
        "storypickupgridview3": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPickupGridView3",
            "viewtag": "4571c6ac173283165334a20d5b218f3b"
        },
        "bugeditview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugEditView",
            "viewtag": "46517a803b2470cd0bef27aeda0dbcaf"
        },
        "sysemployeeusr2gridview": {
            "title": "人员表格视图人员实体表格视图(组织下所有人员)",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeUsr2GridView",
            "viewtag": "465f1d3489621f94a90490faa3e0ea0f"
        },
        "ibzproproductgridview": {
            "title": "平台产品表格视图",
            "caption": "平台产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProProductGridView",
            "viewtag": "46854d548e698f79dc9b2bda5e5d5331"
        },
        "ibzlibeditview9": {
            "title": "用例库编辑视图",
            "caption": "用例库",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzLibEditView9",
            "viewtag": "471a8a8d5b7ebf2a2e0fa7995c4e883c"
        },
        "tasktreeeditview": {
            "title": "任务编辑视图（树导航显示）",
            "caption": "树导航显示",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTreeEditView",
            "viewtag": "47d1f969efd9c8e4eb6a593de45d78d6"
        },
        "testreportgridview": {
            "title": "测试报告表格视图",
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
        "taskteamgridview9": {
            "title": "团队",
            "caption": "团队",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "TaskTeamGridView9",
            "viewtag": "4970832ed515bc37ec3c7c61b55d444b"
        },
        "casemaininfoeditview9": {
            "title": "测试用例编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseMainInfoEditView9",
            "viewtag": "4a5cfcdc473166f49cea6c9628865006"
        },
        "ibzlibopenlibview": {
            "title": "用例库数据看板视图",
            "caption": "用例库",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibOpenLibView",
            "viewtag": "4a9b92e583e055d7081125b3e19079a6"
        },
        "taskestimateoptionview": {
            "title": "任务预计选项操作视图",
            "caption": "任务预计",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskEstimateOptionView",
            "viewtag": "4acc52d66d0c31e82166d85b1b0cd826"
        },
        "taskgridview": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskGridView",
            "viewtag": "4b01c8ae7e7e23b9c67dbca2ee90e41b"
        },
        "usercontactgridexpview": {
            "title": "用户联系方式表格导航视图",
            "caption": "用户联系方式",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactGridExpView",
            "viewtag": "4b2fac9ffaccd974c1ba4c24508197af"
        },
        "storygridview9_assignedtome": {
            "title": "需求表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_AssignedToMe",
            "viewtag": "4b82e9acf6c784b138b365d6011b296b"
        },
        "bugmpickupview2": {
            "title": "关联Bug",
            "caption": "关联Bug",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMPickupView2",
            "viewtag": "4b87d5ed612c8f0bc1a3c01344372a26"
        },
        "projecteditview_activate": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Activate",
            "viewtag": "4b8db6d139edb8adadbef2f0c0b3350a"
        },
        "sysemployeepickupgridview": {
            "title": "人员选择表格视图",
            "caption": "人员",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeePickupGridView",
            "viewtag": "4c55a1137e524e7e18d34f7619f4efb6"
        },
        "companydeptusertreeexpview": {
            "title": "组织部门人员树导航视图",
            "caption": "公司",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyDeptUserTreeExpView",
            "viewtag": "4cb497e84dfabd873bc62d5386d5551f"
        },
        "testtaskeditview_committest": {
            "title": "提交测试",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView_commitTest",
            "viewtag": "4d32793fc57ec1ae930a18608526d00e"
        },
        "docmyfavouritepartgridview": {
            "title": "文档表格视图",
            "caption": "我的收藏",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocMyFavouritePartGridView",
            "viewtag": "4dad74488a4fd446ed9ef787e05206bc"
        },
        "taskmaindashboardview_link": {
            "title": "任务主数据看板视图",
            "caption": "任务",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "Taskmaindashboardview_link",
            "viewtag": "4fcd2a15ff88a97425e1ab1cadc5eb9f"
        },
        "productplansubplangridview": {
            "title": "子计划",
            "caption": "子计划",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanSubPlanGridView",
            "viewtag": "500950593bf64e5516bdb9b7db29b747"
        },
        "ibzprostorymoduleeditview": {
            "title": "需求模块编辑视图",
            "caption": "需求模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryModuleEditView",
            "viewtag": "500a15957867996d6e20e7a37db8b004"
        },
        "doclibproductgridexpview": {
            "title": "文档库表格导航视图（产品文档库导航视图）",
            "caption": "产品文档库导航视图",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductGridExpView",
            "viewtag": "5034f8d22b6f5d194e13e2ccd5c1712c"
        },
        "taskclosetaskview": {
            "title": "关闭任务",
            "caption": "关闭任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskCloseTaskView",
            "viewtag": "507c506d62dc910a814332e6ae242266"
        },
        "casetestmaindetaileditview9": {
            "title": "测试用例编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseTestMainDetailEditView9",
            "viewtag": "507c88b3f8f66c00a44443748f68125d"
        },
        "bugeditview_1162": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugEditView_1162",
            "viewtag": "50a62354d8e47841634e14c022dad22b"
        },
        "testtaskprojectneweditview": {
            "title": "测试单编辑视图",
            "caption": "提交测试",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskProjectNewEditView",
            "viewtag": "513dfe852d9d8a97b32eccb44e7b55c3"
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
        "doclibmodulepickupview": {
            "title": "文档库分类数据选择视图",
            "caption": "文档库分类",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModulePickupView",
            "viewtag": "52b7b827d34c78a2c4f992201f89c353"
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
        "doclibpickupgridview": {
            "title": "doclib选择表格视图",
            "caption": "文档库",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibPickupGridView",
            "viewtag": "55bd8c58b38da929d22edff6aa724ca0"
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
        "sysemployeeeditview": {
            "title": "人员编辑视图",
            "caption": "人员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeEditView",
            "viewtag": "57a23ead04eda866c6326f0705f595e3"
        },
        "userpickupview": {
            "title": "用户数据选择视图",
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
        "taskassignedtotaskgroupgridview": {
            "title": "任务表格视图（指派分组）",
            "caption": "指派分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskAssignedtoTaskGroupGridView",
            "viewtag": "597fe6135598c0a14cf60c15aa1b217d"
        },
        "doclibgridview": {
            "title": "doclib表格视图",
            "caption": "文档库",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibGridView",
            "viewtag": "599bad7e939d0de2523f0fcf4444f8c7"
        },
        "companystatscompanydynamicstatsgridview": {
            "title": "公司动态汇总表格视图",
            "caption": "公司动态统计表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "CompanyStatsCompanyDynamicStatsGridView",
            "viewtag": "59c85c1053657b4fea02d5bd53e305d8"
        },
        "bugstorytobugeditview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugStoryTOBugEditView",
            "viewtag": "5a62e423ec79ab9e8e3f26802cc5e68c"
        },
        "projectpickupview": {
            "title": "项目数据选择视图",
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
            "title": "测试单编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView",
            "viewtag": "5b139a407fa34f386f3f784f33841184"
        },
        "doclibundoneprojectgridview": {
            "title": "doclib表格视图",
            "caption": "文档库",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibUndoneProjectGridView",
            "viewtag": "5b2408d384f5b00f079883a01aeb9d2f"
        },
        "projectmainview_edit": {
            "title": "项目编辑视图",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainView_Edit",
            "viewtag": "5b7c1b586dc5e23998a2765d235eaa7e"
        },
        "projectstoryeditview9": {
            "title": "项目编辑视图（需求相关）",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectStoryEditView9",
            "viewtag": "5bd10fe33398f9552892c6d217135f8e"
        },
        "deptmaingridview": {
            "title": "部门",
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
        "productstatseditview9": {
            "title": "产品统计编辑视图",
            "caption": "产品统计",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsEditView9",
            "viewtag": "5d468f620cc30181773d875b3bb8be6e"
        },
        "ibzplantempletgridview": {
            "title": "产品计划模板表格视图",
            "caption": "计划模板",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzPlanTempletGridView",
            "viewtag": "5df2233b712eaa394f21be39b5807181"
        },
        "bugstatsproductbugresolutiongridview": {
            "title": "Bug统计表格视图",
            "caption": "产品Bug解决方案汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsProductBugResolutionGridView",
            "viewtag": "5e8408526c67859b65aa66e614dd0b04"
        },
        "tasktasktypeganttview": {
            "title": "任务甘特视图",
            "caption": "任务",
            "viewtype": "DEGANTTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTaskTypeGanttView",
            "viewtag": "5ef23f01b2cffa48351b3272dfeeaf14"
        },
        "taskworkhoursview": {
            "title": "工时",
            "caption": "工时",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskWorkHoursView",
            "viewtag": "5f063c226812206f8262566387a0b6a5"
        },
        "systeampickupview": {
            "title": "组数据选择视图",
            "caption": "组",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamPickupView",
            "viewtag": "5f7840c73c7dd18acccfaa5bb67468aa"
        },
        "taskpickupview": {
            "title": "task数据选择视图",
            "caption": "任务",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskPickupView",
            "viewtag": "601588ff1c189387e79d24286c2a242e"
        },
        "docdocstatuseditview": {
            "title": "文档编辑视图",
            "caption": "嵌入文档库主页",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocDocStatusEditView",
            "viewtag": "603f4478afd3bcccb330888c3ac880bd"
        },
        "storymainview9_storyspec": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9_StorySpec",
            "viewtag": "61f32b2b422e8f1a9825e1f704464a8c"
        },
        "sysupdateloglasttabexpview": {
            "title": "系统更新日志分页导航视图",
            "caption": "更新日志",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogLastTabExpView",
            "viewtag": "6203dc73c54acc8229989fecc87f058b"
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
        "storyprojectmpickupview3": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProjectMPickupView3",
            "viewtag": "645efdb73a5b13723410903dff447667"
        },
        "systeammembereditview": {
            "title": "组成员编辑视图",
            "caption": "组成员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberEditView",
            "viewtag": "647cee7cf9c101876645c1c5bcec3602"
        },
        "buildoptionview": {
            "title": "版本选项操作视图",
            "caption": "版本",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildOptionView",
            "viewtag": "64dda8bee495e9713c61310a3fea2df9"
        },
        "testmodulegridviewbranch": {
            "title": "产品模块表格视图",
            "caption": "测试模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleGridViewBranch",
            "viewtag": "65129e5f76f96cbb1d2d1c9e9bb2afed"
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
        "ibizprotageditview": {
            "title": "标签编辑视图",
            "caption": "标签",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IBIZProTagEditView",
            "viewtag": "66ea594caa3b4caf0a9e6944eec6d80c"
        },
        "sysemployeempickupview": {
            "title": "人员数据多项选择视图",
            "caption": "人员",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeMPickupView",
            "viewtag": "684bbae57d8a66a95fc8808db8d08382"
        },
        "doclibproducttreeview": {
            "title": "文档库树视图（产品）",
            "caption": "产品",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductTreeView",
            "viewtag": "686d79c8c3e4e2aaaa43edcfb6caf39c"
        },
        "buildeditformeditview": {
            "title": "版本编辑视图",
            "caption": "版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildEditFormEditView",
            "viewtag": "68f49a558ebf0e2566be65fc74f13fdd"
        },
        "doclibmoduleeditview": {
            "title": "文档库分类编辑视图",
            "caption": "文档库分类",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleEditView",
            "viewtag": "6921cf59868031699419de5fb8e79ced"
        },
        "taskestimateeditgridview9": {
            "title": "任务预计表格视图",
            "caption": "工时",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskEstimateEditGridView9",
            "viewtag": "6991c25388155df89dc9c44eeb11ad90"
        },
        "doclibcustomdoclibroottreeview": {
            "title": "文档库树视图（自定义文档库-根目录）",
            "caption": "自定义文档库-根目录",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibCustomDocLibRootTreeView",
            "viewtag": "69aed44649019bd0215c246d524cfc24"
        },
        "doclibproductgridview": {
            "title": "doclib表格视图",
            "caption": "文档库",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductGridView",
            "viewtag": "6a667f9ae1a5096ceac93a16d1586978"
        },
        "projectgridexpview": {
            "title": "项目表格导航视图",
            "caption": "项目",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectGridExpView",
            "viewtag": "6ad2193a7e06957b40700d3f23ea6f6f"
        },
        "taskzsgridview9week": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskZsGridView9Week",
            "viewtag": "6af549668ff8757cf378a5a50d8917e4"
        },
        "casetestoptionview": {
            "title": "执行",
            "caption": "执行",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseTestOptionView",
            "viewtag": "6b041208cbc10321a4d9cd74eaac3689"
        },
        "docmoremyfavouritestreeview": {
            "title": "文档树视图",
            "caption": "我的收藏",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocMoreMyFavouritesTreeView",
            "viewtag": "6b0e5dd0dca860d801e403c7591a9f41"
        },
        "ibzdailymaineditview": {
            "title": "日报编辑视图（编辑）",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailymainEditView",
            "viewtag": "6b63300dfe7c9f777eda7627fc02d822"
        },
        "productmaintabexpview": {
            "title": "产品",
            "caption": "产品",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainTabExpView",
            "viewtag": "6c7b582273d0726bcf77214807cfe40c"
        },
        "caseexceditview": {
            "title": "执行结果",
            "caption": "执行结果",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseExcEditView",
            "viewtag": "6ca0081833718834ca4bbd9ebbf1ccce"
        },
        "storysubgridview": {
            "title": "需求细分",
            "caption": "需求细分",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StorySubGridView",
            "viewtag": "6cf95e90393715815492a7e5e6f2a6f3"
        },
        "actionmyalltrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionMyAllTrendsListView",
            "viewtag": "6d466e003e0479fb8b1a16e49b889dc1"
        },
        "projectstatsprojectinputstatsgridview": {
            "title": "项目统计表格视图",
            "caption": "项目投入统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectInputStatsGridView",
            "viewtag": "6dee43bf4f06e90abee66563c398806a"
        },
        "ibzmyterritoryreporttabexpview": {
            "title": "我的地盘分页导航视图",
            "caption": "汇报",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "report",
            "viewname": "IbzMyTerritoryReportTabExpView",
            "viewtag": "6e1a903e2d94b6568debc087b75e5d53"
        },
        "bugbugkanbanview": {
            "title": "Bug看板视图",
            "caption": "Bug实体看板视图",
            "viewtype": "DEKANBANVIEW",
            "viewmodule": "zentao",
            "viewname": "BugBugKanbanView",
            "viewtag": "6e27d3c90de590e23204e3a310321f21"
        },
        "testreportprojectmainediteditview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportProjectMainEditEditView",
            "viewtag": "6e5b23018b93f9f9fcea3afed7092e68"
        },
        "storyprichartview9": {
            "title": "需求图表视图（累计创建需求-优先级）",
            "caption": "累计创建需求-优先级",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryPriChartView9",
            "viewtag": "6f3efb6b753b451cd9956a9e0157c6d2"
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
        "buggridview9_storyformbug": {
            "title": "来源Bug",
            "caption": "来源Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_StoryFormBug",
            "viewtag": "723d3aebb532563a44fb34172cd502f0"
        },
        "testtaskprojectgridview": {
            "title": "测试单表格视图（项目）",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskProjectGridView",
            "viewtag": "72614f86125fa2a1421156c17116a4e3"
        },
        "userinfoeditview": {
            "title": "用户编辑视图",
            "caption": "用户信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "UserINFOEditView",
            "viewtag": "72a44528b73b17f6e29a3ca59e432d19"
        },
        "todocloseview": {
            "title": "关闭",
            "caption": "关闭",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoCloseView",
            "viewtag": "734c2c8a05995eaad9f9a0028e9b9def"
        },
        "docmyfavouritegridview": {
            "title": "doc表格视图",
            "caption": "我的收藏",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocMyFavouriteGridView",
            "viewtag": "73647c564ed468885ee3c18bccce5a90"
        },
        "doclibusr2editview": {
            "title": "文档库编辑视图",
            "caption": "文档库",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibUsr2EditView",
            "viewtag": "73fbcf0e3685096f63587bcff234f958"
        },
        "sysemployeegridexpview": {
            "title": "人员表格导航视图",
            "caption": "人员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeGridExpView",
            "viewtag": "745687df2b5a067c15598debbcba1fe2"
        },
        "ibzdailymymaineditview": {
            "title": "日报编辑视图（主数据）",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyMymainEditView",
            "viewtag": "74aa34a6a878f58a6459d220ceb2092e"
        },
        "casecursuitgridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseCurSuitGridView",
            "viewtag": "74e206764fd747fa31467bd5a9f371df"
        },
        "ibzprostoryeditview": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryEditView",
            "viewtag": "75ddfe042245299b90c10c572b3d9436"
        },
        "storytabexpview": {
            "title": "需求分页导航视图",
            "caption": "需求",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryTabExpView",
            "viewtag": "76bd64e6d21e10838e42517992e58c65"
        },
        "ibzlibeditview": {
            "title": "用例库编辑视图",
            "caption": "用例库",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibEditView",
            "viewtag": "76f07b59aab6db4512723cd3d24ee84e"
        },
        "actionhistorylistview": {
            "title": "历史记录",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionHistoryListView",
            "viewtag": "770a170098d148e438a7666b248e6519"
        },
        "systeammembergridexpview": {
            "title": "组成员表格导航视图",
            "caption": "组成员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberGridExpView",
            "viewtag": "771b6fe41dab6d75ea3127f8408461e8"
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
        "storygridview9_myassignedtome": {
            "title": "需求表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_MyAssignedToMe",
            "viewtag": "79ffa9ee5970e791fe37a01b98d5fce4"
        },
        "testsuiteeditview": {
            "title": "测试套件编辑视图",
            "caption": "测试套件",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestSuiteEditView",
            "viewtag": "7a983ef690626958a9897f58efe15e58"
        },
        "ibzweeklyeditview": {
            "title": "实体2编辑视图",
            "caption": "周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzWeeklyEditView",
            "viewtag": "7ae5b669ec5f5284763927aee60efde1"
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
        "taskstorytaskgroupgridview": {
            "title": "任务表格视图（需求分组）",
            "caption": "需求分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskStoryTaskGroupGridView",
            "viewtag": "7b755840dbda75f7a6cf8394aa447ca0"
        },
        "doccreateeditview": {
            "title": "创建文档",
            "caption": "文档",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocCreateEditView",
            "viewtag": "7b8d03598e32aa0f535758927a17b98e"
        },
        "modulegridview": {
            "title": "模块",
            "caption": "模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleGridView",
            "viewtag": "7bbf35767e7763b69ad6acd4b06c06d1"
        },
        "docrecentmoregridview": {
            "title": "doc表格视图",
            "caption": "最近更新",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocRecentMoreGridView",
            "viewtag": "7c188c576f1fd59114ac2940d8e92c15"
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
        "tododesceditview9": {
            "title": "待办事宜表编辑视图",
            "caption": "基本信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TodoDescEditView9",
            "viewtag": "7c7a1fdf074c475a128c920a952762fa"
        },
        "systeammembergridview": {
            "title": "组成员表格视图",
            "caption": "组成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberGridView",
            "viewtag": "7c8043b1ffa43efe3285268a70f0d97e"
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
            "title": "产品数据选择视图",
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
        "productsumusr2gridview": {
            "title": "产品计划数和需求数实体表格视图",
            "caption": "产品汇总表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumUsr2GridView",
            "viewtag": "7e9dfdd36617a43790494790f58117ec"
        },
        "productsumstoryhourssumgridview": {
            "title": "产品汇总表表格视图",
            "caption": "需求工时汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumStoryHoursSumGridView",
            "viewtag": "7ee436604d479bd0ba014e136c1b8f6f"
        },
        "taskstatsuserfinishtaskgridview": {
            "title": "任务统计表格视图",
            "caption": "用户完成任务汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskStatsUserFinishTaskGridView",
            "viewtag": "7ef19995ea97ed70642551457b6e9ac4"
        },
        "docliblibtabexpview": {
            "title": "文档库分页导航视图（文档）",
            "caption": "文档库主页",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibLibTabExpView",
            "viewtag": "7f0821e7efe42bbf91090b525b05c96d"
        },
        "taskwheditview": {
            "title": "工时",
            "caption": "工时",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskWHEditView",
            "viewtag": "7f425ca5154c34294ce6c0817d6cb875"
        },
        "testtaskcalendareditview": {
            "title": "测试版本编辑视图（日历导航）",
            "caption": "日历导航",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskCalendarEditView",
            "viewtag": "7f46287768fb888f84467e285f960323"
        },
        "doclibbyprojecttreeexpview": {
            "title": "文档库树导航视图（项目下属）",
            "caption": "项目下属文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibByProjectTreeExpView",
            "viewtag": "7f46508e06873e3e19336170cb94d279"
        },
        "casegridview9": {
            "title": "测试用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9",
            "viewtag": "7f9b2e4d5b622528df75121b824b6fcc"
        },
        "todofinishview": {
            "title": "完成",
            "caption": "完成",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoFinishView",
            "viewtag": "807a419a917fbfdfa3378d2fac6a2785"
        },
        "ibzlibcasestepsinfogridview9": {
            "title": "用例库用例步骤表格视图（主数据）",
            "caption": "用例库用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzLibCaseStepsInfoGridView9",
            "viewtag": "80a70857025f1c997cddb437e76ff6e1"
        },
        "doclibmodulegridview": {
            "title": "文档库分类表格视图",
            "caption": "文档库分类",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleGridView",
            "viewtag": "80f7262f589754864d8e8919c96298ad"
        },
        "buildmaingridview": {
            "title": "版本表格视图",
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
            "title": "产品计划表格视图",
            "caption": "产品计划",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanGridView",
            "viewtag": "81b0cee2fedff8f4902c0d735714e5af"
        },
        "testtaskactiviteoptionview": {
            "title": "激活",
            "caption": "激活",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskActiviteOptionView",
            "viewtag": "81ca65108f3533b513676d2c95b50096"
        },
        "taskmyfavoritegridview": {
            "title": "task表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskMyFavoriteGridView",
            "viewtag": "82b045705ced7d1c938a0df4a58046ca"
        },
        "tasktaskgroupgridview": {
            "title": "任务表格视图（任务分组）",
            "caption": "状态分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTaskGroupGridView",
            "viewtag": "830a2a271daa744fc0f50410bcd8a711"
        },
        "groupmaingridview": {
            "title": "群组表格视图",
            "caption": "群组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "GroupMainGridView",
            "viewtag": "8399a93b13ffd4ecea6c65e7804a1353"
        },
        "usereditview": {
            "title": "用户编辑视图",
            "caption": "用户信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "UserEditView",
            "viewtag": "83b1f6c353e9383e36b8d58eec845267"
        },
        "productmoduletreeexpview": {
            "title": "需求模块树导航视图",
            "caption": "需求模块",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductModuleTreeExpView",
            "viewtag": "84104216ff9049079f9442c9cbd54342"
        },
        "ibzmonthlyeditmonthlyeditview": {
            "title": "月报编辑视图",
            "caption": "月报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyEditMonthlyEditView",
            "viewtag": "842deef249d7032308b365d16cb61440"
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
        "taskgridview9_project": {
            "title": "任务表格视图",
            "caption": "相关任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskGridView9_Project",
            "viewtag": "85e834a5eec7818746a2425f39d82630"
        },
        "projectmaindashboardview": {
            "title": "项目数据看板视图",
            "caption": "项目",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainDashboardView",
            "viewtag": "85ee867b09a2d6303c061d91374ec975"
        },
        "taskstatsuserfinishtasksumgridview": {
            "title": "任务统计表格视图",
            "caption": "用户完成任务汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskStatsUserFinishTaskSumGridView",
            "viewtag": "861a7b35cdff8ff000b5f90a9a4a12e9"
        },
        "ibzplantempletoptionview": {
            "title": "产品计划模板选项操作视图",
            "caption": "计划模板",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzPlanTempletOptionView",
            "viewtag": "86c8826366681d0e9ed5d6c3fc9908fd"
        },
        "caseprojectreportlinkgridview": {
            "title": "测试用例表格视图（报告关联用例）",
            "caption": "关联用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseProjectReportLinkGridView",
            "viewtag": "8761916619d520c6cca7053b358e3a40"
        },
        "storyreleasesubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryReleaseSubGridView",
            "viewtag": "87b3a9ce09500f304291ed2d69799d5e"
        },
        "ibzprostorymoduleoptionview": {
            "title": "需求模块选项操作视图同步",
            "caption": "同步",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryModuleOptionView",
            "viewtag": "87ca9109af86ed2745dcf7aa21294541"
        },
        "casecasetypechartview9": {
            "title": "测试用例图表视图（测试类型）",
            "caption": "测试类型",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseCaseTypeChartView9",
            "viewtag": "881c4bef100253cf5e6f67893b9a4294"
        },
        "testreporteditview_r": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_R",
            "viewtag": "88b0a618836437a54b879dfb94ee0f3c"
        },
        "testreporteditview_testtasks": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_TestTasks",
            "viewtag": "88de710e1590f4e2c17360c3c1612308"
        },
        "docdocsumeditview9": {
            "title": "文档编辑视图（文档摘要）",
            "caption": "文档摘要",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocDocSumEditView9",
            "viewtag": "89c6b10a2c65ecc0a6c8ea97c7c2b25a"
        },
        "bugusr2gridview": {
            "title": "Bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugUsr2GridView",
            "viewtag": "8af65044ab1633eb5b68d99478e9350f"
        },
        "sysemployeeusr3gridviewuserconcat": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeUsr3GridViewUserConcat",
            "viewtag": "8b1be3cc2e5253c0ea5bcb16b1d02f6e"
        },
        "taskestimategridview9": {
            "title": "任务预计表格视图",
            "caption": "工时",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskEstimateGridView9",
            "viewtag": "8b96b7671df722e66d78808ee0636349"
        },
        "usertpleditview": {
            "title": "usertpl编辑视图",
            "caption": "用户模板",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "UserTplEditView",
            "viewtag": "8c08fcf2db47efba2ca50d8feed5e52c"
        },
        "productstatsgridview9": {
            "title": "产品统计表格视图",
            "caption": "产品统计",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsGridView9",
            "viewtag": "8c3d000c53ed0d5490a133f568d98097"
        },
        "ibzreportlymyreceivedgridview": {
            "title": "汇报表格视图",
            "caption": "汇报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyMyReceivedGridView",
            "viewtag": "8c6a61cf0b90e7424f8a758dee6643c3"
        },
        "bugmaindashboardview_link": {
            "title": "Bug数据看板视图",
            "caption": "Bug",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "Bugmaindashboardview_link",
            "viewtag": "8c8adbf0a7db27078e01a8b32716fa71"
        },
        "sysupdatefeatureslastgridview": {
            "title": "系统更新功能表格视图",
            "caption": "系统更新功能",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateFeaturesLastGridView",
            "viewtag": "8c8f69657e164fbee50b48f760365fdb"
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
        "ibzmonthlymonthlymainmsgeditview": {
            "title": "月报编辑视图",
            "caption": "月报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyMonthlyMainMsgEditView",
            "viewtag": "8caddd30a10ec08a95cd804fa2524e14"
        },
        "ibzmyterritorycalendarview": {
            "title": "我的地盘日历视图",
            "caption": "我的地盘",
            "viewtype": "DECALENDARVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryCalendarView",
            "viewtag": "8cf3bd4450a7bbccd2f6aff9629bfdf2"
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
            "title": "产品选择表格视图",
            "caption": "产品",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPickupGridView",
            "viewtag": "8d53a973712c13f448efb8e2182ccc0b"
        },
        "storycalendareditview": {
            "title": "需求编辑视图（日历）",
            "caption": "日历",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryCalendarEditView",
            "viewtag": "8d57c8c411a365de243247e493c264ff"
        },
        "caseresultentrygridview": {
            "title": "测试用例表格视图（测试结果条目）",
            "caption": "测试结果条目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseresultEntryGridView",
            "viewtag": "8d9e694196a8c1abd56fd1632eed0173"
        },
        "casemaineditview": {
            "title": "测试用例",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainEditView",
            "viewtag": "8e070a3e9ad67b127db723463198f9ac"
        },
        "bugstatsusr2gridviewprojectbugstatuscount": {
            "title": "Bug统计表格视图(bug状态统计)",
            "caption": "bug状态统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsUsr2GridViewProjectBugStatusCount",
            "viewtag": "8e4b19edd3239846958a86bd33eef611"
        },
        "modulelinegridview": {
            "title": "产品线",
            "caption": "产品线",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleLineGridView",
            "viewtag": "8eb13e4fe49406265e2ed5fb1e0a6b53"
        },
        "buggridview9_taskrelated": {
            "title": "相关Bug",
            "caption": "相关Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_TaskRelated",
            "viewtag": "8f563f093547b26f56125b59d03786e8"
        },
        "storyplaneditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPlanEditView",
            "viewtag": "901398a79547094cd0e9791cbe6e90ef"
        },
        "doclibbyproducttreeexpview": {
            "title": "文档库树导航视图（产品下属）",
            "caption": "产品下属文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibByProductTreeExpView",
            "viewtag": "905ab75396c304821d250f18e2fd6571"
        },
        "caserunresultchartview9": {
            "title": "测试用例图表视图（执行结果）",
            "caption": "执行结果",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseRunResultChartView9",
            "viewtag": "907d612f5ca588f2bb83116afc66e761"
        },
        "productplanprojectgridview9": {
            "title": "产品计划表格视图（项目）",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductPlanProjectGridView9",
            "viewtag": "908a34af4784424622d2f7905335d023"
        },
        "storyassigntoview": {
            "title": "指派",
            "caption": "指派",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryAssignToView",
            "viewtag": "90d6a9dc6032a7a7e19fee6ac22fccc0"
        },
        "ibizprokeywordgridview": {
            "title": "关键字表格视图",
            "caption": "关键字",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "IBIZProKeywordGridView",
            "viewtag": "910a15d245455b5b6c4dc58fd36aa315"
        },
        "ibizproindexindexpickupdataview": {
            "title": "索引检索索引关系选择数据视图",
            "caption": "索引检索",
            "viewtype": "DEINDEXPICKUPDATAVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproIndexIndexPickupDataView",
            "viewtag": "92269965704a55f1342317470d86e5e3"
        },
        "todotodocreateview": {
            "title": "添加待办",
            "caption": "待办",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoTodoCreateView",
            "viewtag": "927d6e92ed15eeb2397da22824122b27"
        },
        "storyreleasesubeditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryReleaseSubEditView",
            "viewtag": "928e6614bcfbd67af3b596cf5dc5a46b"
        },
        "casemodulechartview9": {
            "title": "测试用例图表视图（模块）",
            "caption": "模块",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseModuleChartView9",
            "viewtag": "936e87b3f81060a933e5f9e2336e8ed7"
        },
        "testmodulegridviewmain": {
            "title": "产品模块表格视图",
            "caption": "测试模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleGridViewMain",
            "viewtag": "9396442ba87e188748229e6bc6927156"
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
        "useryearworkstatstitleeditview9": {
            "title": "用户年度工作内容统计编辑视图（标题）",
            "caption": "标题",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsTitleEditView9",
            "viewtag": "96d2f792bc2c38a37fe873a125cb57b6"
        },
        "actionprojecttrendslistview9": {
            "title": "产品动态",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ActionProjectTrendsListView9",
            "viewtag": "96ec3f978c1cc22acc532331d5dc2a41"
        },
        "actionmytrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionMyTrendsListView",
            "viewtag": "96ed1661161ecbd9adbb979fddb405a5"
        },
        "storypickupgridview2": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPickupGridView2",
            "viewtag": "971a6faeda9b1b090521472c06eba003"
        },
        "actionproducttrendslistview9": {
            "title": "产品动态",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ActionProductTrendsListView9",
            "viewtag": "97af408e6a6cb088c824cacd1807f353"
        },
        "taskteamgridview9_look": {
            "title": "团队",
            "caption": "团队",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "TaskTeamGridView9_Look",
            "viewtag": "97f38c5fa6f63f69e18299306eae9077"
        },
        "doclibtreeviewproductroot": {
            "title": "文档库树视图",
            "caption": "文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibTreeViewProductRoot",
            "viewtag": "97f56de6c7228abfcf66f475eba07030"
        },
        "releasemaininfoview": {
            "title": "发布编辑视图",
            "caption": "发布",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseMainInfoView",
            "viewtag": "983aa1b77ca021f30978523ddef010a0"
        },
        "systeameditview": {
            "title": "组编辑视图",
            "caption": "组",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamEditView",
            "viewtag": "984a70c0b86ca38a96f77ba1c851530f"
        },
        "productliferoadmaplistview9": {
            "title": "路线图",
            "caption": "产品生命周期",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductLifeRoadMapListView9",
            "viewtag": "985c8eb7591e5e00de8e3cda638d5727"
        },
        "ibzweeklyusr3gridview": {
            "title": "周报表格视图",
            "caption": "周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyUsr3GridView",
            "viewtag": "991e5ef3e406f063f981865759d0857f"
        },
        "ibzlibmodulecasetreeexpview": {
            "title": "用例",
            "caption": "用例",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibModuleCaseTreeExpView",
            "viewtag": "99b83386d61eab84cd7d65a445def4ed"
        },
        "buildtestroundsgridview": {
            "title": "版本表格视图（轮次）",
            "caption": "轮次",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildTestRoundsGridView",
            "viewtag": "9a2fd7bf8e74f4b95bd5a24d8ffb1643"
        },
        "projecteditview_close": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Close",
            "viewtag": "9a8c28c2365d7dc8bb5619f39576b558"
        },
        "ibzmyterritoryusersumtreeexpview": {
            "title": "我的地盘树导航视图",
            "caption": "用户汇总表",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryUserSumTreeExpView",
            "viewtag": "9ab6d468419797c4a00ff658e4f626b1"
        },
        "releasegridview": {
            "title": "发布表格视图",
            "caption": "发布",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseGridView",
            "viewtag": "9ae49b10ec96e8f7b063be2ed4172247"
        },
        "ibzproproducteditview": {
            "title": "平台产品编辑视图",
            "caption": "平台产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProProductEditView",
            "viewtag": "9bcbf0cd15b37b97657fec9a157595fe"
        },
        "taskmoretabexpview": {
            "title": "任务分页导航视图（更多）",
            "caption": "更多",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMoreTabExpView",
            "viewtag": "9c96a98b291c9cbe420f7a519091212f"
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
            "title": "发布编辑视图",
            "caption": "发布",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseEditView",
            "viewtag": "9ddace1c12afee8da3f0254a05ba141a"
        },
        "sysorganizationgridview": {
            "title": "单位表格视图",
            "caption": "单位",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysOrganizationGridView",
            "viewtag": "9e0b0ea115e5d917abdf0fa7513a84cf"
        },
        "filelistview9": {
            "title": "附件",
            "caption": "附件",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "FileListView9",
            "viewtag": "9ed41cee96088630f3d4b0a91e705930"
        },
        "taskreportmpickupview": {
            "title": "任务数据多项选择视图（汇报）",
            "caption": "汇报",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskreportMPickupView",
            "viewtag": "9f39c37259c1dabb9f2e8769eea76642"
        },
        "projectteamlistview": {
            "title": "项目团队列表视图",
            "caption": "项目团队",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectTeamListView",
            "viewtag": "a03214a97c7b57f1681defbdecd07f9d"
        },
        "ibzcaseinfoeditview9": {
            "title": "用例库用例编辑视图（基本信息）",
            "caption": "基本信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseInfoEditView9",
            "viewtag": "a0a25524d16a413d7e020c0af2cc9c9b"
        },
        "systeammemberusr2gridview": {
            "title": "组成员表格视图",
            "caption": "组成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberUsr2GridView",
            "viewtag": "a0e1f55e52d3167ad1815ac7076cdc45"
        },
        "storygridview9_related": {
            "title": "相关需求",
            "caption": "相关需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_Related",
            "viewtag": "a0f93007d7102bd236dc8f50ac4042ea"
        },
        "sysemployeegridview": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeGridView",
            "viewtag": "a179e654136386b3f2fe76b869dae394"
        },
        "taskchartview9": {
            "title": "任务图表视图",
            "caption": "任务",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskChartView9",
            "viewtag": "a250e5baa5d560a9fa660ba3f1bc9f51"
        },
        "storymaingridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainGridView",
            "viewtag": "a2c585e16c82b5dec03db7146b9a6fa4"
        },
        "useryearworkstatsdashboardview": {
            "title": "用户年度工作内容统计数据看板视图",
            "caption": "用户年度工作内容统计",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsDashboardView",
            "viewtag": "a300309f336ad917bb9fae375cd5620a"
        },
        "systeammemberusr2gridviewpostmembers": {
            "title": "组成员表格视图",
            "caption": "组成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberUsr2GridViewPostMembers",
            "viewtag": "a34f1835a2bc3fef24cf0c7be698e4cf"
        },
        "testsuitegridview": {
            "title": "测试套件表格视图",
            "caption": "测试套件",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestSuiteGridView",
            "viewtag": "a3bd82ec712d2e3ad12e716655e960fc"
        },
        "ibzreportlymaingridview": {
            "title": "汇报表格视图",
            "caption": "汇报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyMainGridView",
            "viewtag": "a3d1a3af80fdf764f13a63f9c19934c6"
        },
        "bugeditview_4791": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugEditView_4791",
            "viewtag": "a46256cb1bcfceabf09ad93f33e766a1"
        },
        "sysupdatefeatureseditview": {
            "title": "系统更新功能编辑视图",
            "caption": "系统更新功能",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateFeaturesEditView",
            "viewtag": "a46f39b0d36c98b4e2fd74b7051fda79"
        },
        "projectgridview9": {
            "title": "项目表格视图",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectGridView9",
            "viewtag": "a4941294aa97081cc5197c07292905af"
        },
        "productportalview": {
            "title": "产品主页",
            "caption": "产品主页",
            "viewtype": "APPPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPortalView",
            "viewtag": "A49E5FD9-FC90-434B-9E13-192873F6F2AC"
        },
        "ibzdailydailygridview": {
            "title": "日报表格视图",
            "caption": "日报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyDailyGridView",
            "viewtag": "a4a6e9515a944ab2976c5034fb049f63"
        },
        "taskmaingridview": {
            "title": "task表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainGridView",
            "viewtag": "a4af2d93ae66c9877ee99bfe7b93d22c"
        },
        "testmoduletreeexpview": {
            "title": "测试模块树导航视图",
            "caption": "测试模块",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleTreeExpView",
            "viewtag": "a4c56767e9b34cd619d79b676fa2ccd9"
        },
        "storyprojectpickupgridview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProjectPickupGridView",
            "viewtag": "a4cd2a6ada3f3e12ffb3315d55da2f0d"
        },
        "doclibmodulepickupgridview": {
            "title": "文档库分类选择表格视图",
            "caption": "文档库分类",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModulePickupGridView",
            "viewtag": "a4e543dc0b0e891c2db7b038384680db"
        },
        "docgridviewlookdoc": {
            "title": "doc表格视图",
            "caption": "文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocGridViewLookDoc",
            "viewtag": "a501a42f3adfa826e382e4cbc134a4fc"
        },
        "taskgrouptreeexpview": {
            "title": "任务树导航视图（分组树）",
            "caption": "分组视图",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskGroupTreeExpView",
            "viewtag": "a50dac41ffda9770f8d903de986ca47a"
        },
        "deptinfoeditview": {
            "title": "部门编辑视图",
            "caption": "部门信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptInfoEditView",
            "viewtag": "a52f8b23a989b8526e4c98c49d73a3d0"
        },
        "taskpickupgridview": {
            "title": "task选择表格视图",
            "caption": "任务",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskPickupGridView",
            "viewtag": "a567636558c349902507ef69b9c510e5"
        },
        "ibzproconfiggridview": {
            "title": "系统配置表表格视图",
            "caption": "系统配置表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzproConfigGridView",
            "viewtag": "a5b6a193363e3516bf0ce46577a7721c"
        },
        "projectstatsusr2gridviewtasktypecount": {
            "title": "项目统计表格视图（任务状态统计）",
            "caption": "任务类型统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectStatsUsr2GridViewTaskTypeCount",
            "viewtag": "a638e2a7d3b05b2f279ad28d14f5a85f"
        },
        "casestepcarryouteditmode": {
            "title": "用例步骤",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseStepCarryOutEditMode",
            "viewtag": "a694d988e3134a33bb5a99e6e07246f6"
        },
        "bugprojectgridview": {
            "title": "bug表格视图（项目）",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugProjectGridView",
            "viewtag": "a6a2a7565323deeebec407a8ce726b03"
        },
        "buildmainview": {
            "title": "版本编辑视图",
            "caption": "版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildMainView",
            "viewtag": "a6d8bd7fa388f638832b33dddaa6df86"
        },
        "storympickupview2": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMPickupView2",
            "viewtag": "a74d54220e97fb172fdb2117118f665d"
        },
        "projectgridview9_unclosed": {
            "title": "项目表格视图",
            "caption": "未关闭的项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectGridView9_UnClosed",
            "viewtag": "a7a97014cad1917b94284db21ec968f1"
        },
        "bugstatsbugresolvedbygridview": {
            "title": "Bug统计表格视图（Bug完成表）",
            "caption": "Bug完成表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsBugResolvedByGridView",
            "viewtag": "a7aa4a1d093b609e270df2fec5ea627b"
        },
        "doclibmoduleeditview2": {
            "title": "文档库分类编辑视图",
            "caption": "文档库分类",
            "viewtype": "DEEDITVIEW2",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleEditView2",
            "viewtag": "a8a9da914387d7be762d631a49b77ff7"
        },
        "taskcanceltaskview": {
            "title": "取消任务",
            "caption": "取消任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskCancelTaskView",
            "viewtag": "a97ff9ae4f22d5974b51af2c0fae1aa2"
        },
        "productmodulequickcfgview": {
            "title": "需求模块",
            "caption": "需求模块",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductModuleQuickCfgView",
            "viewtag": "a9be826f6c53b091270f492be52f2519"
        },
        "storyeditview9": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryEditView9",
            "viewtag": "a9d151a6bb5fb2481836a7e0ed5afb7e"
        },
        "taskteamgridview9_edit": {
            "title": "团队",
            "caption": "团队",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "TaskTeamGridView9_Edit",
            "viewtag": "aac141e4259ff75a6bca1542777b9a01"
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
            "title": "测试单表格视图",
            "caption": "测试版本",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskGridView",
            "viewtag": "aae1ade339fe6a2ebe367489f6393db1"
        },
        "sysorganizationgridexpview": {
            "title": "单位表格导航视图",
            "caption": "单位",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysOrganizationGridExpView",
            "viewtag": "ab41bca19c2aa7340fc8ba21788ab56d"
        },
        "ibzcaseeditview": {
            "title": "用例库用例编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzCaseEditView",
            "viewtag": "ab45ff5d2250ad8a5d88f39cc26b7646"
        },
        "projectstatsprojectqualityusr2gridview": {
            "title": "项目质量表",
            "caption": "项目质量表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectQualityUsr2GridView",
            "viewtag": "ab5df14b40f3a74e59053c76e1f48744"
        },
        "ibzweeklyusr2gridview": {
            "title": "周报表格视图",
            "caption": "周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyUsr2GridView",
            "viewtag": "ab7bb92108f4ae63c52d94b39affb30a"
        },
        "bugstatsbugresolvetion": {
            "title": "每个解决方案的Bug数统计表格视图",
            "caption": "Bug统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsBUGRESOLVETION",
            "viewtag": "abaea74da4d7efea713dabf193a4bdaf"
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
        "productsumeditview": {
            "title": "产品汇总表编辑视图",
            "caption": "产品汇总表",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumEditView",
            "viewtag": "ada719b0d8722509d22b4b72bbb8cf26"
        },
        "ibzdailydailyinfocalendareditview": {
            "title": "日报编辑视图(日历显示)",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyDailyInfoCalendarEditView",
            "viewtag": "adae3758bed4c09c5e283b69603ba8e7"
        },
        "bugstatsproductbugstatusgridview": {
            "title": "Bug统计表格视图",
            "caption": "产品Bug状态汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsProductBugStatusGridView",
            "viewtag": "ae715fb0beead59fd6157e0ef163a4bb"
        },
        "syspostgridexpview": {
            "title": "岗位表格导航视图",
            "caption": "岗位",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysPostGridExpView",
            "viewtag": "ae72600793a079e5946b182321ddede9"
        },
        "actionaddcommenthistorylistview": {
            "title": "历史记录",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionAddCommentHistoryListView",
            "viewtag": "aeee411b8bffcf0c30d65557a8deeeee"
        },
        "actionoptionview": {
            "title": "添加备注",
            "caption": "添加备注",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionOptionView",
            "viewtag": "af6f4065b0510b7994c3cd2bc6074440"
        },
        "taskpausetaskview": {
            "title": "暂停任务",
            "caption": "暂停任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskPauseTaskView",
            "viewtag": "b03bf2445d2e295fccbb6280b2601248"
        },
        "casemainmynewgridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainMyNewGridView",
            "viewtag": "b137ebd68f63e15d9233d1092e565d15"
        },
        "projectstatsprojectstorystatusstatsgridview": {
            "title": "项目统计表格视图",
            "caption": "项目需求状态统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectStoryStatusStatsGridView",
            "viewtag": "b322707640e730a3acf826dd40e5eed1"
        },
        "companyeditview": {
            "title": "公司编辑视图",
            "caption": "公司信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyEditView",
            "viewtag": "b39a7a76c2175803831235ae3aeef05b"
        },
        "ibzweeklygridview": {
            "title": "实体2表格视图",
            "caption": "周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzWeeklyGridView",
            "viewtag": "b3df645f670804bed90722c381c38fd6"
        },
        "bugpickupgridview_buildlinkresolvedbugs": {
            "title": "bug选择表格视图",
            "caption": "Bug",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPickupGridView_buildLinkResolvedBugs",
            "viewtag": "b4a2b69da4d3cd9c597b5113df650e00"
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
        "bugtodoeditview": {
            "title": "待办提交",
            "caption": "待办提交",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTodoEditView",
            "viewtag": "b5709ef6b436135e1738304e61b5f200"
        },
        "docmymoregridview": {
            "title": "doc表格视图",
            "caption": "我的文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocMyMoreGridView",
            "viewtag": "b593c09602d9483d53b1f725395030a6"
        },
        "productdashboardinfomainview9": {
            "title": "产品信息",
            "caption": "产品",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductDashboardInfoMainView9",
            "viewtag": "b5d2389c0dd12ae614b319090ecc2361"
        },
        "ibzcasemaineditview9": {
            "title": "用例库用例编辑视图（主信息）",
            "caption": "主信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseMainEditView9",
            "viewtag": "b613f8c14c436a5c95be4e1b9e730e6d"
        },
        "doceditview": {
            "title": "doc编辑视图",
            "caption": "文档",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocEditView",
            "viewtag": "b6e02216d1e5c69d79b32342d8b67c7a"
        },
        "bugstatsgridview": {
            "title": "Bug统计表格视图",
            "caption": "Bug创建表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsGridView",
            "viewtag": "b7427fe34d292009905e126defc9fa22"
        },
        "docgridview9": {
            "title": "文档表格视图",
            "caption": "最近更新",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocGridView9",
            "viewtag": "b79b6d8cb0dcb2ac867f3ea1aa6d4cb2"
        },
        "storymyfavoritesgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "Ungroup",
            "viewname": "StoryMyFavoritesGridView",
            "viewtag": "b7e6268db4bdeb10211fc15383de685d"
        },
        "sysupdatefeaturesgridview": {
            "title": "系统更新功能表格视图",
            "caption": "系统更新功能",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateFeaturesGridView",
            "viewtag": "b7f6ef0166a2f8f4cb554e7db6814c75"
        },
        "bugstatsassigntogridview": {
            "title": "Bug统计表格视图（Bug指派表）",
            "caption": "Bug指派表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsAssigntoGridView",
            "viewtag": "b90624360f51aadfbfaa92d563dc1410"
        },
        "productplanmaindataeditview": {
            "title": "产品计划编辑视图",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanMainDataEditView",
            "viewtag": "b9a10eb0b5a55e40c69c61387de5894a"
        },
        "storympickupview": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMPickupView",
            "viewtag": "b9bdfc0e33d333ade00934745d9dc0ad"
        },
        "ibzmyterritoryusr3tabexpview": {
            "title": "管理",
            "caption": "我的地盘",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryUsr3TabExpView",
            "viewtag": "b9e8e61038ab3fcb99e9ff5ab0888fa3"
        },
        "storyplansubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPlanSubGridView",
            "viewtag": "b9e94e3713c82ebab002631bda872b94"
        },
        "testreportactioneditview": {
            "title": "测试报告编辑视图（历史记录）",
            "caption": "历史记录",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportActionEditView",
            "viewtag": "ba3ac5351ca273bb889ffcb52ec7217b"
        },
        "sysorganizationusr2gridview": {
            "title": "单位单位实体表格视图(通讯录所有组织)",
            "caption": "单位",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysOrganizationUsr2GridView",
            "viewtag": "ba70cc2003a4d984ccab95ba36a4a632"
        },
        "syspostusr2gridview": {
            "title": "岗位表格视图",
            "caption": "岗位",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysPostUsr2GridView",
            "viewtag": "ba8bd2f4b2dcf0500c9dcd985c531d68"
        },
        "taskcalendareditview": {
            "title": "任务编辑视图（日历航显示）",
            "caption": "日历航显示",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskCalendarEditView",
            "viewtag": "bad9ebb60029d8c0854e22a02600cbc7"
        },
        "depteditview": {
            "title": "部门编辑视图",
            "caption": "部门信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptEditView",
            "viewtag": "bae11f9447355ecc9e2cdff2490e6d11"
        },
        "useryearworkstatsqadashboardview": {
            "title": "用户年度工作内容统计数据看板视图",
            "caption": "用户年度工作内容统计",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsQADashboardView",
            "viewtag": "bb44ef7532c0933ed75b1da291dec073"
        },
        "projectmoduletreeexpview": {
            "title": "任务模块树导航视图",
            "caption": "任务模块",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectModuleTreeExpView",
            "viewtag": "bb8860972029d9947daa3652a4b5d291"
        },
        "casestatstestcasestatsgridview": {
            "title": "测试用例统计表格视图",
            "caption": "用例统计表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "CaseStatsTestCaseStatsGridView",
            "viewtag": "bc06c199f827cebb36cfd2a5128e1bca"
        },
        "productmaindashboardview": {
            "title": "产品数据看板视图",
            "caption": "产品",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainDashboardView",
            "viewtag": "bc36be2ee4a78e69c13665a8ad03ab6a"
        },
        "docmorerecentupdatetreeview": {
            "title": "文档树视图",
            "caption": "最近更新",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocMoreRecentUpdateTreeView",
            "viewtag": "bd1aede12f9d691fb88402d7aa4c07db"
        },
        "userpickupgridview": {
            "title": "用户选择表格视图",
            "caption": "用户",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserPickupGridView",
            "viewtag": "bd3043a0eb4bed8abd005228a4e729af"
        },
        "storyprojectplanview": {
            "title": "按照计划关联",
            "caption": "按照计划关联",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProjectPlanView",
            "viewtag": "bd6f41c3367241b8eddd61eb6e80f029"
        },
        "modulepickupgridview": {
            "title": "模块选择",
            "caption": "模块",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModulePickupGridView",
            "viewtag": "bda78773fabbeee54079951afb35f954"
        },
        "bugpickupgridview5": {
            "title": "bug选择表格视图",
            "caption": "Bug",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPickupGridView5",
            "viewtag": "becbcfda999bc9082dd51a7629f00dd7"
        },
        "ibzmonthlymyreceivedgridview": {
            "title": "月报表格视图",
            "caption": "月报实体表格视图",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyMyReceivedGridView",
            "viewtag": "becc7b01bce4e44c2fbad7d10e02080e"
        },
        "todogridview": {
            "title": "待办事宜表格视图",
            "caption": "待办",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoGridView",
            "viewtag": "bedf1f50199b74a65c2e17771144329c"
        },
        "ibzmyterritorytesttreeexpview": {
            "title": "我的地盘树导航视图（测试统计）",
            "caption": "测试统计",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryTestTreeExpView",
            "viewtag": "bef7c08b651990569cd09ce805ebcfe3"
        },
        "fileproductgridview": {
            "title": "file表格视图",
            "caption": "附件",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "FileProductGridView",
            "viewtag": "bfdd5a8d625f1be3f009084fbc16c909"
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
        "ibzmyterritorymywork": {
            "title": "我的工作",
            "caption": "我的工作",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryMyWork",
            "viewtag": "c21e2ccc8e950461985b171f047bde56"
        },
        "testsuitemaindashboardview": {
            "title": "测试套件数据看板视图",
            "caption": "测试套件",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TestSuiteMainDashboardView",
            "viewtag": "c2e4200fb7c9760b4931b43561289980"
        },
        "sysuserchangepasswordeditview": {
            "title": "系统用户编辑视图",
            "caption": "修改密码",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "uaa",
            "viewname": "SysUserChangePasswordEditView",
            "viewtag": "c3e6eea97c71f24dcf4115546b5ec769"
        },
        "todogridview9": {
            "title": "我的待办",
            "caption": "我的待办",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TodoGridView9",
            "viewtag": "c3f0a8956b863fa05a7d961df90a3975"
        },
        "ibizproplugingridview": {
            "title": "系统插件表格视图",
            "caption": "系统插件",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizplugin",
            "viewname": "IBIZProPluginGridView",
            "viewtag": "c4099c98661bbfac92a0e718c183e718"
        },
        "useryearworkstatspodashboardview": {
            "title": "用户年度工作内容统计数据看板视图",
            "caption": "用户年度工作内容统计",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsPODashboardView",
            "viewtag": "c42384620820be3bce40b5b1dc8dcff2"
        },
        "doclibprojecttreeview": {
            "title": "文档库树视图",
            "caption": "项目",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProjectTreeView",
            "viewtag": "c468f1ff894437a6de5b9496f0f8b92e"
        },
        "testreporteditview_tosumup": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_tosumup",
            "viewtag": "c47c534ae15c1fd1a04b5ad78d174841"
        },
        "producttestlistexpview": {
            "title": "测试统计",
            "caption": "产品",
            "viewtype": "DELISTEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestListExpView",
            "viewtag": "c539f1585371e9943b90177eaef08b6b"
        },
        "productstatsgridview": {
            "title": "产品统计表格视图",
            "caption": "产品统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsGridView",
            "viewtag": "c53ef5993dc196b00f0cfdc21d6dd3a8"
        },
        "ibzlibmoduleeditview": {
            "title": "用例库模块编辑视图",
            "caption": "用例库模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibModuleEditView",
            "viewtag": "c5630df2f9e4729be1d7ba4048064774"
        },
        "ibzmonthlynewmonthlyeditview": {
            "title": "月报编辑视图",
            "caption": "月报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyNewMonthlyEditView",
            "viewtag": "c5aad5f12820569b3a1e8903d243aade"
        },
        "casegridview9_mecretae": {
            "title": "测试用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9_MeCretae",
            "viewtag": "c5b7fb7289325c348ca867eb86185986"
        },
        "taskdailycompletezsgridview": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "report",
            "viewname": "TaskDailyCompleteZsGridView",
            "viewtag": "c5bd098c86809d2a2934bdf16b3d25f7"
        },
        "ibzlibmodulegridview": {
            "title": "用例库模块表格视图",
            "caption": "用例库模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibModuleGridView",
            "viewtag": "c5bf2f708034d7488fbb4aa848d15d1d"
        },
        "storystagechartview9": {
            "title": "需求图表视图（累计创建需求-阶段）",
            "caption": "累计创建需求-阶段",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryStageChartView9",
            "viewtag": "c625d6f8de3cb53021bb8d3064ac7863"
        },
        "casetobugtesteditview": {
            "title": "转BUG",
            "caption": "转BUG",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseToBugTestEditView",
            "viewtag": "c6ed1cb45c6623407556630270d57976"
        },
        "caserunerentrygridview": {
            "title": "测试用例表格视图（测试结果条目）",
            "caption": "测试结果条目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseRUNEREntryGridView",
            "viewtag": "c778697bb0f4f35a37892853575e1145"
        },
        "testreporteditview_report": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_Report",
            "viewtag": "c7e7e989793981f260c73513c2a4e18b"
        },
        "ibzmyterritorystatstabexpview": {
            "title": "我的地盘分页导航视图（统计）",
            "caption": "统计",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryStatsTabExpView",
            "viewtag": "c8171c13c1ba215f65c8587df1d98ba5"
        },
        "systeamgridexpview": {
            "title": "组表格导航视图",
            "caption": "组",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamGridExpView",
            "viewtag": "c826223fec105532e5a0f8a2ad49ee4a"
        },
        "bugresolvechartview": {
            "title": "Bug图表视图（解决Bug）",
            "caption": "解决Bug",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugResolveChartView",
            "viewtag": "c862174c0f25d5077870c42115925fee"
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
        "docdocmodulegridview": {
            "title": "doc表格视图",
            "caption": "文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocDocModuleGridView",
            "viewtag": "c9be79d1ad2a32e56092cd1ec1e896eb"
        },
        "buggridview9_myassignedtome": {
            "title": "Bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_MyAssignedToMe",
            "viewtag": "c9c1c725d243d98d75558fbc5293f8f9"
        },
        "taskdonetaskview": {
            "title": "完成任务",
            "caption": "完成任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskDoneTaskView",
            "viewtag": "c9c256aef78723e1bf9ddc1d38667c3f"
        },
        "bugtasktobugeditview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTaskToBugEditView",
            "viewtag": "c9c2b18a9b5b1e628179f9ab99ffe23a"
        },
        "systeamusr2gridview": {
            "title": "组表格视图",
            "caption": "组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamUsr2GridView",
            "viewtag": "c9f2cd9496fa701c375279c93e1487fd"
        },
        "sysemployeegridexpviewprojectmember": {
            "title": "人员表格导航视图",
            "caption": "人员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeGridExpViewProjectMember",
            "viewtag": "ca485afa013ed409b2274ed390ae7db0"
        },
        "testtaskcloseoptionview": {
            "title": "关闭",
            "caption": "关闭",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskCloseOptionView",
            "viewtag": "ca5490c6292062cfd7ada980ed935464"
        },
        "storyprojecteditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProjectEditView",
            "viewtag": "cad4ce05432f03f140d6ee3ad5dfe8c5"
        },
        "ibzweeklyeditviewedit": {
            "title": "实体2编辑视图",
            "caption": "周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyEditViewEdit",
            "viewtag": "cae188c0626835fabf7a9b27431c9461"
        },
        "modulepickupview": {
            "title": "模块选择",
            "caption": "模块",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "ModulePickupView",
            "viewtag": "cb6c278fd7205b3de3fc041816d15dd8"
        },
        "testreporteditview_project": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_Project",
            "viewtag": "cbd1280e0ec2cd69ffa85cf60ece100d"
        },
        "ibzweeklyeditviewmainmyweekly": {
            "title": "实体2编辑视图",
            "caption": "周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyEditViewMainMyweekly",
            "viewtag": "cc0f54a8db5b9c161ec9f3d6b86e2a27"
        },
        "taskchildmoregridview": {
            "title": "任务表格视图（子任务-更多）",
            "caption": "子任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskChildMoreGridView",
            "viewtag": "cc1f1d0cc16dddbdb7e9f9fd9aa443fa"
        },
        "projectportalview": {
            "title": "项目主页",
            "caption": "项目主页",
            "viewtype": "APPPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPortalView",
            "viewtag": "CC49500F-030F-458F-82DF-F88F6973DF64"
        },
        "ibzlibcasestepsgridview9": {
            "title": "用例库用例步骤表格视图",
            "caption": "用例库用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzLibCaseStepsGridView9",
            "viewtag": "cc94f92626c795b12a5598ae3bf3da39"
        },
        "ibzreportmytabexpview": {
            "title": "汇报分页导航视图（我收到的）",
            "caption": "我收到的",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportMyTabExpView",
            "viewtag": "cced9dfff799c2f6ed1012fd70161948"
        },
        "casemainmygridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainMyGridView",
            "viewtag": "cd3d221ec6771bb755a0e482b8bcd171"
        },
        "employeeloadeditview": {
            "title": "员工负载表编辑视图",
            "caption": "员工负载表",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "EMPLOYEELOADEditView",
            "viewtag": "cdb6ad5305bb1900e7349e9e057b3596"
        },
        "bugmainmygridview": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMainMyGridView",
            "viewtag": "cdba1a5e90e147e5f3bf9f2c08c87f56"
        },
        "releasemaintabexpview": {
            "title": "发布分页导航视图",
            "caption": "产品发布",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseMainTabExpView",
            "viewtag": "ceb630b252aac50781a373e0bef90eb2"
        },
        "ibzmyterritoryemploytreeexpview": {
            "title": "我的地盘树导航视图（员工负载计）",
            "caption": "员工负载",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryEmployTreeExpView",
            "viewtag": "cef6e71f89bb0007d341328d455f6da0"
        },
        "storymaindashboardview_link": {
            "title": "需求数据看板视图",
            "caption": "需求",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "Storymaindashboardview_link",
            "viewtag": "cfc7781789f7706e02b2d2504339de69"
        },
        "testresulteditview9": {
            "title": "测试结果编辑视图",
            "caption": "测试结果",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestResultEditView9",
            "viewtag": "d000027bf12084d69b1e064264d06962"
        },
        "ibzreportroleconfiggridview": {
            "title": "汇报角色配置表格视图",
            "caption": "汇报角色配置",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportRoleConfigGridView",
            "viewtag": "d03a65f09905f6286e89671dfcfaed4a"
        },
        "projectproductlistview9": {
            "title": "项目产品列表视图",
            "caption": "关联产品",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectProductListView9",
            "viewtag": "d0454a2ae9eb44aca3613b27169f3b18"
        },
        "ibzmonthlymainmonthlygridview": {
            "title": "月报表格视图",
            "caption": "月报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyMainMonthlyGridView",
            "viewtag": "d054969e8eb4b11e01d771b95045178c"
        },
        "fileeditview": {
            "title": "file编辑视图",
            "caption": "附件",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "FileEditView",
            "viewtag": "d05d51fbbdb75506a5d0b36ab527d47a"
        },
        "branchpickupview": {
            "title": "平台数据选择视图",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPickupView",
            "viewtag": "d0851a0acfe0e92a6a5ba34b1552bc66"
        },
        "testruneditview9": {
            "title": "测试运行编辑视图",
            "caption": "测试运行",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestRunEditView9",
            "viewtag": "d1078175fef9a3fd5dab94f9fbd0c2b3"
        },
        "testportalview": {
            "title": "测试主页",
            "caption": "测试主页",
            "viewtype": "APPPORTALVIEW",
            "viewmodule": "Ungroup",
            "viewname": "TestPortalView",
            "viewtag": "D1283E46-401A-4CFD-A7A1-BF5B90197463"
        },
        "sysemployeetreeexpview": {
            "title": "人员树导航视图",
            "caption": "人员",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeTreeExpView",
            "viewtag": "d1c2669aa1d4bc3973882f4cbb3a9539"
        },
        "ibzcasedashboardview": {
            "title": "用例库用例数据看板视图",
            "caption": "测试用例",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseDashboardView",
            "viewtag": "d211890c5a2b8d62649bc26c32ef40ec"
        },
        "productmytesttabexpview": {
            "title": "测试",
            "caption": "测试",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMyTestTabExpView",
            "viewtag": "d21c783cde14166ba9deb09e746a0f28"
        },
        "projectundoneprojectgridview": {
            "title": "项目表格视图",
            "caption": "未完成项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectUndoneProjectGridView",
            "viewtag": "d290709d6a36e20e79d60e873047ec0d"
        },
        "groupeditview": {
            "title": "群组编辑视图",
            "caption": "分组信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "GroupEditView",
            "viewtag": "d2de1e2449f8c1cf2e0310f5477eef4b"
        },
        "testmodulequickcfgview": {
            "title": "需求模块",
            "caption": "测试模块",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleQuickCfgView",
            "viewtag": "d337f5c3c125dc2641321f2d93b65476"
        },
        "usermaingridview": {
            "title": "用户表格视图",
            "caption": "用户",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserMainGridView",
            "viewtag": "d364bfbf7092ee45cd0acae49fac77ab"
        },
        "taskpritaskgroupgridview": {
            "title": "任务表格视图（优先级分组）",
            "caption": "优先级分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskPriTaskGroupGridView",
            "viewtag": "d36b5df6585da6d78a0a5aeaf3b58bf9"
        },
        "branchpmeditview": {
            "title": "平台管理",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPMEditView",
            "viewtag": "d4cb26555e6d81a172652580cf7d9f7f"
        },
        "bugcasetobugeditview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugCaseToBugEditView",
            "viewtag": "d5171a52df7b22d69c6a5ca34699233a"
        },
        "bugstatsbugresolvedbygridviewzuzhi": {
            "title": "Bug统计表格视图（Bug完成表）",
            "caption": "Bug完成表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsBugResolvedByGridViewZuZhi",
            "viewtag": "d5d237bd6a57b89a912bcff2a13f1ff4"
        },
        "ibzmonthlymyreceivededitview": {
            "title": "月报编辑视图",
            "caption": "月报实体编辑视图",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyMyReceivedEditView",
            "viewtag": "d5ec786202a86196d23c7c7275c351e4"
        },
        "projectmoreundoneprogridview": {
            "title": "项目表格视图",
            "caption": "未完成项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMoreUndoneProGridView",
            "viewtag": "d695dac99ccf0ddd077eb13916241bd0"
        },
        "storygridview9_child": {
            "title": "细分需求",
            "caption": "细分需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_Child",
            "viewtag": "d6ef7de701a935bd9023cd0eb1338f58"
        },
        "taskreportpickupgridview": {
            "title": "任务选择表格视图（汇报）",
            "caption": "汇报",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskreportPickupGridView",
            "viewtag": "d7b7fadc3c6a2da9c7a4319c40fd0e7c"
        },
        "ibizproindexredirectview": {
            "title": "索引检索数据重定向视图",
            "caption": "索引检索",
            "viewtype": "DEREDIRECTVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproIndexRedirectView",
            "viewtag": "d7dd357c2488e9f3440971b4407d52a1"
        },
        "companymainview9": {
            "title": "公司编辑视图",
            "caption": "公司",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CompanyMainView9",
            "viewtag": "d7f401156de51eb49cdb10a6fb9263ee"
        },
        "storymainmygridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainMyGridView",
            "viewtag": "d86b9d1e9fad770e8fc97718cee8ed31"
        },
        "doclibproducttreeviewcust": {
            "title": "文档库树视图（自定义文档库）",
            "caption": "自定义文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductTreeViewCust",
            "viewtag": "d87ba00acab6dc934aa28dc57632436f"
        },
        "doclibmoduleredirectview": {
            "title": "文档库分类数据重定向视图",
            "caption": "文档库分类",
            "viewtype": "DEREDIRECTVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleRedirectView",
            "viewtag": "d8d754155368a2dacb9b8e2b4667dca5"
        },
        "ibzmyterritorydashboardview": {
            "title": "首页",
            "caption": "首页",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryDashboardView",
            "viewtag": "d8df5ca51341d33ccc19208dde3f2cce"
        },
        "sysupdatefeaturesinfoeditview": {
            "title": "系统更新功能编辑视图",
            "caption": "系统更新功能",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateFeaturesInfoEditView",
            "viewtag": "d97806e4d30ee03bfd34d5df8f96b0a4"
        },
        "bugprojectbugsgridview": {
            "title": "Bug实体表格视图(项目遗留得Bug)",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugProjectBugsGridView",
            "viewtag": "d9cf190662d0781bee34acdfd9d1c6d2"
        },
        "projectstatsprojectprogressusr2gridview": {
            "title": "项目进度表格视图",
            "caption": "项目统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectProgressUsr2GridView",
            "viewtag": "dabb076d51462709eafcea3fed743469"
        },
        "bugtotalopenedchartview": {
            "title": "Bug图表视图（累计创建Bug）",
            "caption": "累计创建Bug",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTotalOpenedChartView",
            "viewtag": "db5a77bee9407127a5f28f7fa183270b"
        },
        "useryearworkstatseditview": {
            "title": "用户年度工作内容统计编辑视图",
            "caption": "用户年度工作内容统计",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsEditView",
            "viewtag": "db750bbb894c25f38ca2741f234df3c6"
        },
        "bugtestbugsgridview": {
            "title": "Bug表格视图(遗留的bug)",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTestBugsGridView",
            "viewtag": "de3b10b3f9f11d67c6ea3418bc77f2b3"
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
        "todoeditview": {
            "title": "编辑待办",
            "caption": "待办",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoEditView",
            "viewtag": "e00040c0d616f2f1c0ad4b36c9e920b5"
        },
        "employeeloadgridview": {
            "title": "员工负载表表格视图",
            "caption": "员工负载表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "EmpLoyeeloadGridView",
            "viewtag": "e008123fe4c3014fac07b33dd79f6b13"
        },
        "producteditview": {
            "title": "产品编辑视图",
            "caption": "产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductEditView",
            "viewtag": "e042a1dee405b0a853f315b39a375783"
        },
        "ibzcaseneweditview": {
            "title": "用例库用例编辑视图（新建）",
            "caption": "新建",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseNewEditView",
            "viewtag": "e049cdde7095f179bf786984cb497fe5"
        },
        "ibzmyterritoryproductsumtreeexpview": {
            "title": "我的地盘树导航视图（产品汇总表）",
            "caption": "产品汇总表",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryProductSumTreeExpView",
            "viewtag": "e090d7f19211e8fbbab5d4442c6e58e8"
        },
        "storycloseview": {
            "title": "需求关闭",
            "caption": "需求关闭",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryCloseView",
            "viewtag": "e0fbca7627cdd68765e173028b07f687"
        },
        "branchpminfoeditview": {
            "title": "平台管理",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPMInfoEditView",
            "viewtag": "e1a0e6c29939260ead53dcd3beb8b736"
        },
        "ibzmyterritorylistview": {
            "title": "欢迎",
            "caption": "欢迎",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryListView",
            "viewtag": "e2d75951e06d21bce0a31b09c67103bf"
        },
        "usertreeexpview": {
            "title": "用户",
            "caption": "用户",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "UserTreeExpView",
            "viewtag": "e2f8bc0ff75f204383d2a5c15117b476"
        },
        "productlistexpview": {
            "title": "产品列表导航视图",
            "caption": "产品统计",
            "viewtype": "DELISTEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductListExpView",
            "viewtag": "e396b6f39451e3bf963aec602106adf0"
        },
        "testtaskstartoptionview": {
            "title": "开始",
            "caption": "开始",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskStartOptionView",
            "viewtag": "e3daebb0eca3c90b800021c84de8c19e"
        },
        "projectstatseditview9": {
            "title": "项目统计编辑视图",
            "caption": "项目统计",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsEditView9",
            "viewtag": "e444135470a806822b9b950e15c42a3e"
        },
        "productplanoptionview": {
            "title": "导入计划模板",
            "caption": "导入计划模板",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanOptionView",
            "viewtag": "e4e450c40addd5d706151ea60dbe7826"
        },
        "bugcalendareditview": {
            "title": "Bug编辑视图（日历导航）",
            "caption": "日历导航",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugCalendarEditView",
            "viewtag": "e527490443d54f3791d9497938aaf332"
        },
        "casesuitelinkcasegridview": {
            "title": "测试用例表格视图（关联用例）",
            "caption": "关联用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CasesuiteLinkCaseGridView",
            "viewtag": "e53ca619c1e2592cff68b05a9a64ff0f"
        },
        "storyeditview_storychange": {
            "title": "需求编辑视图",
            "caption": "变更",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryEditView_StoryChange",
            "viewtag": "e54598b1e6d38d7c6ce8231b531b46bd"
        },
        "systeampickupgridview": {
            "title": "组选择表格视图",
            "caption": "组",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamPickupGridView",
            "viewtag": "e5b14957778e46c8fe25aee22fe0fba8"
        },
        "ibizprotaggridview": {
            "title": "标签表格视图",
            "caption": "标签",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "IBIZProTagGridView",
            "viewtag": "e5e537e1d8092dbfa419c892762f34fe"
        },
        "sysorganizationeditview": {
            "title": "单位编辑视图",
            "caption": "单位",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "SysOrganizationEditView",
            "viewtag": "e61e97fc70324fe8b112aa7759a3b7b0"
        },
        "deptpickupgridview": {
            "title": "部门选择表格视图",
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
        "ibzlibgridview": {
            "title": "用例库",
            "caption": "用例库",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibGridView",
            "viewtag": "e698418f007d36b627d6af23c1042f31"
        },
        "taskestimatelookgridview9": {
            "title": "任务预计表格视图",
            "caption": "工时",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskEstimateLookGridView9",
            "viewtag": "e6ab4e1e69f78d8a87d57c7d99420245"
        },
        "usercontactusr2gridview": {
            "title": "用户联系方式表格视图",
            "caption": "用户联系方式",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactUsr2GridView",
            "viewtag": "e6f937afe3371083ae7dda1d58c85ed7"
        },
        "sysupdateloginfoeditview": {
            "title": "系统更新日志编辑视图",
            "caption": "更新日志",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogInfoEditView",
            "viewtag": "e77b0ab085994e29f1906ab1b90a2f53"
        },
        "productsumqachartview9": {
            "title": "产品汇总表图表视图",
            "caption": "产品汇总表",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductSumQaChartView9",
            "viewtag": "e842d6d727d88c2c78b59c033fa27f34"
        },
        "sysemployeegridexpviewdept": {
            "title": "人员表格导航视图",
            "caption": "人员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeGridExpViewDept",
            "viewtag": "e843bd954ebbd93fa06a419e07c838e3"
        },
        "testtaskeditview_edit": {
            "title": "测试单编辑视图",
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
        "sysemployeepickupview": {
            "title": "人员数据选择视图",
            "caption": "人员",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeePickupView",
            "viewtag": "e8988cc597d1c970f738b9a8719e02c7"
        },
        "projectstatsgridview9": {
            "title": "项目统计表格视图",
            "caption": "项目统计",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsGridView9",
            "viewtag": "e8e346e34ba5e02170fe3bcea7e6ec7f"
        },
        "testmodulepickupview": {
            "title": "测试模块数据选择视图",
            "caption": "测试模块",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "TestModulePickupView",
            "viewtag": "e8f1c11c602bd6b01d2df8dc223ca941"
        },
        "buildeditview": {
            "title": "版本编辑视图",
            "caption": "版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildEditView",
            "viewtag": "e9d61d4506a28dec9a6f1d7b9e1fff6a"
        },
        "ibzmyterritorylistview9": {
            "title": "我的工作",
            "caption": "我的工作",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryListView9",
            "viewtag": "e9f72c81d94c56a08c355c2ba2e20d07"
        },
        "taskeditview": {
            "title": "任务编辑视图",
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
        "testreportprojectdashboardview": {
            "title": "测试报告数据看板视图",
            "caption": "项目报告",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportprojectDashboardView",
            "viewtag": "ea7b1f6631cb623ea079455b374ef9d4"
        },
        "ibzmyterritorytreeexpviewprojectstats": {
            "title": "我的地盘我的地盘实体树导航视图（项目汇总表）导航视图",
            "caption": "项目汇总表",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryTreeExpViewProjectStats",
            "viewtag": "ea95775efe5ddc489fdbfae6b35a16e0"
        },
        "dockeditview9": {
            "title": "文档编辑视图（关键字）",
            "caption": "关键字",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocKEditView9",
            "viewtag": "eb67eecdc733d1716683188c485f52ab"
        },
        "todocalendareditview": {
            "title": "待办编辑视图（日历导航）",
            "caption": "待办",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoCalendarEditView",
            "viewtag": "eb90b28adca9e482854d0d6bf05e1303"
        },
        "projectgridviewemp": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectGridViewEMp",
            "viewtag": "ebdc0496f66718b66a8ae0ea440d0356"
        },
        "tododashboardview": {
            "title": "待办事宜表数据看板视图",
            "caption": "待办",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoDashboardView",
            "viewtag": "ebf37bf3881bb27c09db9bbe5d0b0f77"
        },
        "ibzlibtabexpview": {
            "title": "用例库",
            "caption": "用例库",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibTabExpView",
            "viewtag": "ebf8f4c62f92ff24ff740558f12f7303"
        },
        "doclibdashboardview": {
            "title": "文档库数据看板视图",
            "caption": "文档主页",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibDashboardView",
            "viewtag": "ec35bfd0c7d043d531053eac7775a40b"
        },
        "bugdashboardmaineditview9": {
            "title": "主信息",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugDashboardMainEditView9",
            "viewtag": "ec9a5987de12c718961f243f4034efea"
        },
        "ibzproconfigeditview": {
            "title": "系统配置表编辑视图",
            "caption": "系统配置表",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzproConfigEditView",
            "viewtag": "ecbb62865a85af39d70c88ebecc95d99"
        },
        "taskstoryneweditview": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskStoryNewEditView",
            "viewtag": "ecbf5b4a77da69166a45c1ad211d047a"
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
        "ibzreportlycreateeditview": {
            "title": "汇报编辑视图",
            "caption": "汇报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyCreateEditView",
            "viewtag": "eddd83b7db9892757420e886810dbfba"
        },
        "projectdashboardinfoview": {
            "title": "项目信息",
            "caption": "项目",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectDashboardInfoView",
            "viewtag": "ef1a8c8701140368af895304274c602a"
        },
        "casetesttaskexceditview": {
            "title": "执行结果",
            "caption": "执行结果",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseTestTaskExcEditView",
            "viewtag": "ef44fe10b2c0c55b17c75fee5e11a5fe"
        },
        "taskmaindetailview9": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainDetailView9",
            "viewtag": "ef6cfafd09bb61ddb6fec7840f78e97d"
        },
        "ibzdailydailyinfoeditview": {
            "title": "日报编辑视图(日报描述)",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyDailyInfoEditView",
            "viewtag": "ef8e8d565d141facde985ac87181e6e3"
        },
        "doclibusr2treeview": {
            "title": "文档库树视图",
            "caption": "文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibUsr2TreeView",
            "viewtag": "f0c5e57e6807ba57c5bfee086c302361"
        },
        "bugmpickupview5": {
            "title": "关联Bug",
            "caption": "关联Bug",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMPickupView5",
            "viewtag": "f1e935bce2146c2c75597dcee9ee4412"
        },
        "taskforwardview": {
            "title": "转交任务",
            "caption": "转交任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskForwardView",
            "viewtag": "f27febc6ab4d30f9e419caf1e6930a94"
        },
        "sysupdatelogeditview": {
            "title": "系统更新日志编辑视图",
            "caption": "更新日志",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogEditView",
            "viewtag": "f2dfdf637fb965a83519ac280de3e97c"
        },
        "systeamgridview": {
            "title": "组表格视图",
            "caption": "组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamGridView",
            "viewtag": "f326bbe78ccb89a4fceca8db2f842a1e"
        },
        "testreporteditview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView",
            "viewtag": "f340b16bd1355b1c511d9da4b00476e2"
        },
        "doclibmoduleusr2gridview": {
            "title": "文档库分类表格视图",
            "caption": "文档库分类",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibModuleUsr2GridView",
            "viewtag": "f3b0810b31f6ce2c9e2eac61e3ba941d"
        },
        "casestepmaingridview9": {
            "title": "用例步骤",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseStepMainGridView9",
            "viewtag": "f592519df78de708bd8199a52e5f584d"
        },
        "docmodulegridview": {
            "title": "doc表格视图",
            "caption": "文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocModuleGridView",
            "viewtag": "f632e774266a6f1df31bfdcbbbe8f051"
        },
        "casegridview": {
            "title": "功能测试表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseGridView",
            "viewtag": "f63aae9bc8cfe29654439743b465a942"
        },
        "productsumusr3gridview": {
            "title": "产品汇总表表格视图",
            "caption": "产品汇总表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumUsr3GridView",
            "viewtag": "f725c5c0e28669d9ef6b02ce237786a5"
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
        "doclibmoduletreeexpview": {
            "title": "文档库分类树导航视图",
            "caption": "文档库分类",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibModuleTreeExpView",
            "viewtag": "f7e64f3828c862a4bce56437e1e51069"
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
            "title": "备注",
            "caption": "备注",
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
        "docmoremydoctreeview": {
            "title": "文档树视图",
            "caption": "我的文档",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocMoreMyDocTreeView",
            "viewtag": "f9b214cbd7e74778eeeaf536de393f52"
        },
        "ibzprostorymodulegridview": {
            "title": "需求模块表格视图",
            "caption": "需求模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryModuleGridView",
            "viewtag": "f9dd61cc8713a81451f3cb410cf11bbb"
        },
        "branchpickupgridview": {
            "title": "平台选择表格视图",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPickupGridView",
            "viewtag": "fa64e271c22e6aaa89873d2556edf529"
        },
        "usercontactgridview": {
            "title": "usercontact表格视图",
            "caption": "用户联系方式",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactGridView",
            "viewtag": "fad11065c8858a545a9df670cdccce44"
        },
        "productliferoadmapslistview9": {
            "title": "路线图",
            "caption": "产品生命周期",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductLifeRoadMapSListView9",
            "viewtag": "fae08b50e13943a0678a96d852e8808d"
        },
        "ibzreportroleconfigeditview": {
            "title": "汇报角色配置编辑视图",
            "caption": "汇报角色配置",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportRoleConfigEditView",
            "viewtag": "fb99ca35f5d1bb1749788ffeacfa2ea3"
        },
        "sysupdatelogtabexpview": {
            "title": "系统更新日志分页导航视图",
            "caption": "更新日志",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogTabExpView",
            "viewtag": "fb9ed5136261af127c871b1dce82d510"
        },
        "todoactiviteview": {
            "title": "激活",
            "caption": "激活",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoActiviteView",
            "viewtag": "fbfc7f8548a02caba7db4438e675641b"
        },
        "sysupdateloggridview": {
            "title": "系统更新日志表格视图",
            "caption": "更新日志",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogGridView",
            "viewtag": "fc0c3502b2833faa9f93600f1fc282c0"
        },
        "projectmaintabexpview": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainTabExpView",
            "viewtag": "fd0b8748ff96edcde009d39903a9f211"
        },
        "ibzdailymydailygridview": {
            "title": "日报表格视图",
            "caption": "日报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyMyDailyGridView",
            "viewtag": "ff73d748d9fbc7cd4d59a714d7be6ad7"
        },
        "buildmaintabexpview": {
            "title": "版本分页导航视图",
            "caption": "版本",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildMainTabExpView",
            "viewtag": "fffe78c32fb25b287d0c5165d46f8dd2"
        }
    }];
});

// 获取视图消息分组信息
mock.onGet('./assets/json/view-message-group.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
    }];
});