import productplan_en_US from '@locale/lanres/product-plan/product-plan_en_US';
import projectproduct_en_US from '@locale/lanres/project-product/project-product_en_US';
import case_en_US from '@locale/lanres/case/case_en_US';
import product_en_US from '@locale/lanres/product/product_en_US';
import subproductplan_en_US from '@locale/lanres/sub-product-plan/sub-product-plan_en_US';
import storyspec_en_US from '@locale/lanres/story-spec/story-spec_en_US';
import branch_en_US from '@locale/lanres/branch/branch_en_US';
import action_en_US from '@locale/lanres/action/action_en_US';
import casestep_en_US from '@locale/lanres/case-step/case-step_en_US';
import story_en_US from '@locale/lanres/story/story_en_US';
import project_en_US from '@locale/lanres/project/project_en_US';
import history_en_US from '@locale/lanres/history/history_en_US';
import user_en_US from '@locale/lanres/user/user_en_US';
import productmodule_en_US from '@locale/lanres/product-module/product-module_en_US';
import module_en_US from '@locale/lanres/module/module_en_US';
import productlife_en_US from '@locale/lanres/product-life/product-life_en_US';
import task_en_US from '@locale/lanres/task/task_en_US';
import build_en_US from '@locale/lanres/build/build_en_US';
import testtask_en_US from '@locale/lanres/test-task/test-task_en_US';
import bug_en_US from '@locale/lanres/bug/bug_en_US';
import ibzdoc_en_US from '@locale/lanres/ibz-doc/ibz-doc_en_US';
import release_en_US from '@locale/lanres/release/release_en_US';
import components_en_US from '@locale/lanres/components/components_en_US';
import codelist_en_US from '@locale/lanres/codelist/codelist_en_US';
import userCustom_en_US from '@locale/lanres/userCustom/userCustom_en_US';

export default {
    app: {
        commonWords:{
            error: 'Error',
            success: 'Success',
            ok: 'OK',
            cancel: 'Cancel',
        },
        gridpage: {
            choicecolumns: 'Choice columns',
            refresh: 'refresh',
            show: 'Show',
            records: 'records',
            totle: 'totle',
        },
        tabpage: {
            sureclosetip: {
                title: 'Close warning',
                content: 'Form data Changed, are sure close?',
            },
            closeall: 'Close all',
            closeother: 'Close other',
        },
        fileUpload: {
            caption: 'Upload',
        },
        searchButton: {
            search: 'Search',
            reset: 'Reset',
        },
        calendar:{
          today: 'today',
          month: 'month',
          week: 'week',
          day: 'day',
          list: 'list',
          dateSelectModalTitle: 'select the time you wanted',
          gotoDate: 'goto',
        },
        // 非实体视图
        views: {
            ibizpms: {
                caption: 'iBiz项目管理',
                title: 'iBiz项目管理',
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
            importview:"Import Data",
            warning:"warning",
            info:"Please configure the data import item"    
        },
        menus: {
            zentao: {
                top_menus: '顶部菜单',
                menuitem3: '产品主页',
                menuitem2: '项目主页',
                menuitem1: '测试主页',
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
        productplan: productplan_en_US,
        projectproduct: projectproduct_en_US,
        case: case_en_US,
        product: product_en_US,
        subproductplan: subproductplan_en_US,
        storyspec: storyspec_en_US,
        branch: branch_en_US,
        action: action_en_US,
        casestep: casestep_en_US,
        story: story_en_US,
        project: project_en_US,
        history: history_en_US,
        user: user_en_US,
        productmodule: productmodule_en_US,
        module: module_en_US,
        productlife: productlife_en_US,
        task: task_en_US,
        build: build_en_US,
        testtask: testtask_en_US,
        bug: bug_en_US,
        ibzdoc: ibzdoc_en_US,
        release: release_en_US,
    },
    components: components_en_US,
    codelist: codelist_en_US,
    userCustom: userCustom_en_US,
};