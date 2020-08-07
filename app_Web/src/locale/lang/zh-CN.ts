import productplan_zh_CN from '@locale/lanres/product-plan/product-plan_zh_CN';
import projectproduct_zh_CN from '@locale/lanres/project-product/project-product_zh_CN';
import case_zh_CN from '@locale/lanres/case/case_zh_CN';
import ibztaskteam_zh_CN from '@locale/lanres/ibztask-team/ibztask-team_zh_CN';
import product_zh_CN from '@locale/lanres/product/product_zh_CN';
import taskteam_zh_CN from '@locale/lanres/task-team/task-team_zh_CN';
import file_zh_CN from '@locale/lanres/file/file_zh_CN';
import suitecase_zh_CN from '@locale/lanres/suite-case/suite-case_zh_CN';
import burn_zh_CN from '@locale/lanres/burn/burn_zh_CN';
import subproductplan_zh_CN from '@locale/lanres/sub-product-plan/sub-product-plan_zh_CN';
import storyspec_zh_CN from '@locale/lanres/story-spec/story-spec_zh_CN';
import usertpl_zh_CN from '@locale/lanres/user-tpl/user-tpl_zh_CN';
import branch_zh_CN from '@locale/lanres/branch/branch_zh_CN';
import productstats_zh_CN from '@locale/lanres/product-stats/product-stats_zh_CN';
import ibzprojectmember_zh_CN from '@locale/lanres/ibz-project-member/ibz-project-member_zh_CN';
import action_zh_CN from '@locale/lanres/action/action_zh_CN';
import group_zh_CN from '@locale/lanres/group/group_zh_CN';
import casestep_zh_CN from '@locale/lanres/case-step/case-step_zh_CN';
import dept_zh_CN from '@locale/lanres/dept/dept_zh_CN';
import company_zh_CN from '@locale/lanres/company/company_zh_CN';
import ibzcasestep_zh_CN from '@locale/lanres/ibzcase-step/ibzcase-step_zh_CN';
import taskestimate_zh_CN from '@locale/lanres/task-estimate/task-estimate_zh_CN';
import story_zh_CN from '@locale/lanres/story/story_zh_CN';
import todo_zh_CN from '@locale/lanres/todo/todo_zh_CN';
import subtask_zh_CN from '@locale/lanres/sub-task/sub-task_zh_CN';
import project_zh_CN from '@locale/lanres/project/project_zh_CN';
import history_zh_CN from '@locale/lanres/history/history_zh_CN';
import user_zh_CN from '@locale/lanres/user/user_zh_CN';
import doclib_zh_CN from '@locale/lanres/doc-lib/doc-lib_zh_CN';
import productmodule_zh_CN from '@locale/lanres/product-module/product-module_zh_CN';
import module_zh_CN from '@locale/lanres/module/module_zh_CN';
import testmodule_zh_CN from '@locale/lanres/test-module/test-module_zh_CN';
import productlife_zh_CN from '@locale/lanres/product-life/product-life_zh_CN';
import task_zh_CN from '@locale/lanres/task/task_zh_CN';
import build_zh_CN from '@locale/lanres/build/build_zh_CN';
import testresult_zh_CN from '@locale/lanres/test-result/test-result_zh_CN';
import testsuite_zh_CN from '@locale/lanres/test-suite/test-suite_zh_CN';
import projectteam_zh_CN from '@locale/lanres/project-team/project-team_zh_CN';
import testtask_zh_CN from '@locale/lanres/test-task/test-task_zh_CN';
import ibztaskestimate_zh_CN from '@locale/lanres/ibztask-estimate/ibztask-estimate_zh_CN';
import productline_zh_CN from '@locale/lanres/product-line/product-line_zh_CN';
import testreport_zh_CN from '@locale/lanres/test-report/test-report_zh_CN';
import projectstats_zh_CN from '@locale/lanres/project-stats/project-stats_zh_CN';
import testrun_zh_CN from '@locale/lanres/test-run/test-run_zh_CN';
import ibzmyterritory_zh_CN from '@locale/lanres/ibz-my-territory/ibz-my-territory_zh_CN';
import bug_zh_CN from '@locale/lanres/bug/bug_zh_CN';
import projectmodule_zh_CN from '@locale/lanres/project-module/project-module_zh_CN';
import ibzdoc_zh_CN from '@locale/lanres/ibz-doc/ibz-doc_zh_CN';
import release_zh_CN from '@locale/lanres/release/release_zh_CN';
import dynadashboard_zh_CN from '@locale/lanres/dyna-dashboard/dyna-dashboard_zh_CN';
import components_zh_CN from '@locale/lanres/components/components_zh_CN';
import codelist_zh_CN from '@locale/lanres/codelist/codelist_zh_CN';
import userCustom_zh_CN from '@locale/lanres/userCustom/userCustom_zh_CN';

export default {
    app: {
        commonWords:{
            error: '失败',
            success: '成功',
            ok: '确认',
            cancel: '取消',
        },
        gridpage: {
            choicecolumns: '选择列',
            refresh: '刷新',
            show: '显示',
            records: '条',
            totle: '共',
        },
        tabpage: {
            sureclosetip: {
                title: '关闭提醒',
                content: '表单数据已经修改，确定要关闭？',
            },
            closeall: '关闭所有',
            closeother: '关闭其他',
        },
        fileUpload: {
            caption: '上传',
        },
        searchButton: {
            search: '搜索',
            reset: '重置',
        },
        calendar:{
          today: '今天',
          month: '月',
          week: '周',
          day: '天',
          list: '列',
          dateSelectModalTitle: '选择要跳转的时间',
          gotoDate: '跳转',
        },
        // 非实体视图
        views: {
            ibizpms: {
                caption: 'iBiz软件生产管理',
                title: 'iBiz软件生产管理',
            },
            productportalview: {
                caption: '产品主页',
                title: '产品主页',
            },
            projectportalview: {
                caption: '项目主页',
                title: '项目主页',
            },
            testportalview: {
                caption: '测试主页',
                title: '测试主页',
            },
        },
        utilview:{
            importview:"导入数据",
            warning:"警告",
            info:"请配置数据导入项" 
        },
        menus: {
            zentao: {
                top_menus: '顶部菜单',
                menuitem9: '我的地盘',
                menuitem3: '产品主页',
                menuitem2: '项目主页',
                menuitem1: '测试主页',
                menuitem7: 'iBiz软件生产管理',
                left_exp: '左侧分页导航',
                menuitem4: '产品',
                menuitem5: '项目',
                menuitem6: '测试',
                bottom_exp: '底部导航区',
                footer_center: '底部中间菜单',
            },
        },
    },
    entities: {
        productplan: productplan_zh_CN,
        projectproduct: projectproduct_zh_CN,
        case: case_zh_CN,
        ibztaskteam: ibztaskteam_zh_CN,
        product: product_zh_CN,
        taskteam: taskteam_zh_CN,
        file: file_zh_CN,
        suitecase: suitecase_zh_CN,
        burn: burn_zh_CN,
        subproductplan: subproductplan_zh_CN,
        storyspec: storyspec_zh_CN,
        usertpl: usertpl_zh_CN,
        branch: branch_zh_CN,
        productstats: productstats_zh_CN,
        ibzprojectmember: ibzprojectmember_zh_CN,
        action: action_zh_CN,
        group: group_zh_CN,
        casestep: casestep_zh_CN,
        dept: dept_zh_CN,
        company: company_zh_CN,
        ibzcasestep: ibzcasestep_zh_CN,
        taskestimate: taskestimate_zh_CN,
        story: story_zh_CN,
        todo: todo_zh_CN,
        subtask: subtask_zh_CN,
        project: project_zh_CN,
        history: history_zh_CN,
        user: user_zh_CN,
        doclib: doclib_zh_CN,
        productmodule: productmodule_zh_CN,
        module: module_zh_CN,
        testmodule: testmodule_zh_CN,
        productlife: productlife_zh_CN,
        task: task_zh_CN,
        build: build_zh_CN,
        testresult: testresult_zh_CN,
        testsuite: testsuite_zh_CN,
        projectteam: projectteam_zh_CN,
        testtask: testtask_zh_CN,
        ibztaskestimate: ibztaskestimate_zh_CN,
        productline: productline_zh_CN,
        testreport: testreport_zh_CN,
        projectstats: projectstats_zh_CN,
        testrun: testrun_zh_CN,
        ibzmyterritory: ibzmyterritory_zh_CN,
        bug: bug_zh_CN,
        projectmodule: projectmodule_zh_CN,
        ibzdoc: ibzdoc_zh_CN,
        release: release_zh_CN,
        dynadashboard: dynadashboard_zh_CN,
    },
    components: components_zh_CN,
    codelist: codelist_zh_CN,
    userCustom: userCustom_zh_CN,
};