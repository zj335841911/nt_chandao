import branch_en_US from '@locale/lanres/branch/branch_en_US';
import user_en_US from '@locale/lanres/user/user_en_US';
import ibzfavorites_en_US from '@locale/lanres/ibz-favorites/ibz-favorites_en_US';
import projectteam_en_US from '@locale/lanres/project-team/project-team_en_US';
import build_en_US from '@locale/lanres/build/build_en_US';
import task_en_US from '@locale/lanres/task/task_en_US';
import taskestimate_en_US from '@locale/lanres/task-estimate/task-estimate_en_US';
import module_en_US from '@locale/lanres/module/module_en_US';
import product_en_US from '@locale/lanres/product/product_en_US';
import dynadashboard_en_US from '@locale/lanres/dyna-dashboard/dyna-dashboard_en_US';
import action_en_US from '@locale/lanres/action/action_en_US';
import casestep_en_US from '@locale/lanres/case-step/case-step_en_US';
import productline_en_US from '@locale/lanres/product-line/product-line_en_US';
import release_en_US from '@locale/lanres/release/release_en_US';
import taskteam_en_US from '@locale/lanres/task-team/task-team_en_US';
import productmodule_en_US from '@locale/lanres/product-module/product-module_en_US';
import project_en_US from '@locale/lanres/project/project_en_US';
import todo_en_US from '@locale/lanres/todo/todo_en_US';
import story_en_US from '@locale/lanres/story/story_en_US';
import ibzmyterritory_en_US from '@locale/lanres/ibz-my-territory/ibz-my-territory_en_US';
import case_en_US from '@locale/lanres/case/case_en_US';
import testmodule_en_US from '@locale/lanres/test-module/test-module_en_US';
import productplan_en_US from '@locale/lanres/product-plan/product-plan_en_US';
import ibztaskestimate_en_US from '@locale/lanres/ibz-taskestimate/ibz-taskestimate_en_US';
import projectstats_en_US from '@locale/lanres/project-stats/project-stats_en_US';
import ibztaskteam_en_US from '@locale/lanres/ibztaskteam/ibztaskteam_en_US';
import bug_en_US from '@locale/lanres/bug/bug_en_US';
import projectmodule_en_US from '@locale/lanres/project-module/project-module_en_US';
import productstats_en_US from '@locale/lanres/product-stats/product-stats_en_US';
import testtask_en_US from '@locale/lanres/test-task/test-task_en_US';
import testsuite_en_US from '@locale/lanres/test-suite/test-suite_en_US';
import userCustom_en_US from '@locale/lanres/userCustom/userCustom_en_US';
import codelist_en_US from '@locale/lanres/codelist/codelist_en_US';

export default {
    app: {
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
        // 非实体视图
        views: {
            appindexview: {
                caption: 'iBiz软件生产管理',
            },
            appportalview: {
                caption: '工作台',
            },
        },
        menus: {
            iconstylemenu: {
                menuitem1: '我的需求',
                menuitem2: '我的任务',
                menuitem3: '产品统计',
                menuitem4: '销售机会',
                menuitem5: '合同/订单',
                menuitem6: '汇款记录',
                menuitem7: '发货单',
                menuitem8: '产品信息',
                menuitem9: '数据审核',
                menuitem10: '费用报销',
                menuitem11: '日/周/月报',
                menuitem12: '更多',
            },
            appindexview: {
                menuitem1: '产品',
                menuitem2: '项目',
                menuitem3: '测试',
                menuitem4: '我的',
            },
            listmenu: {
                menuitem1: '电脑',
                menuitem2: '手机',
                menuitem3: '杯子',
                menuitem4: '用户',
                menuitem5: '相机',
                menuitem6: '望远镜',
                menuitem7: '更多',
            },
            imgswipestylemenu: {
                menuitem1: '京东',
                menuitem2: '天猫',
                menuitem3: '亚马逊',
            },
        },
        components: {
            app_icon_menu: {
                statusValue_open: 'open',
                statusValue_close: 'close',
            }
        },
        button: {
            cancel: 'Cancel',
            confirm: 'Confirm',
            back: 'Back',
            loadmore: 'Load more'
        },
        loadding: 'Loadding',
        fastsearch: 'Quick search',
        pulling_text: 'Pull down to refresh',
        ctrl:{
            form:"Form",
            multieditviewpanel:"multieditviewpanel",
            searchform:"searchform",
        },
        view:"View",
        notConfig:" Parameter not configured",
        message: {
            success: "successfully",
            fail: "failed",
            savedSuccess: "Saved successfully",
            deleteSccess: "successfully deleted",
            warning: " Warning ",
            confirmToDelete: "Confirm to delete",
            unrecoverable: " Will the delete operation be unrecoverable ",
            totle: " A total of ",
            data: " data"
        },
        statusMessage:{
            200: 'The server successfully returned the requested data',
            201: 'New or modified data is successful.',
            202: 'The request has been queued in the background (asynchronous task).',
            204: 'The data was deleted successfully.',
            400: 'There was an error in the request issued, and the server did not create or modify data.',
            401: 'The user does not have permission (token, user name, wrong password).',
            403: 'The user is authorized, but access is prohibited.',
            404: 'The request issued was for a non-existent record, and the server did not operate.',
            405: 'Method not allowed',
            406: 'The requested format is not available.',
            410: 'The requested resource is permanently deleted and will no longer be available.',
            422: 'When creating an object, a validation error occurred.',
            500: 'An error occurred on the server, please check the server.',
            502: 'Gateway error.',
            503: 'The service is unavailable, the server is temporarily overloaded or maintained.',
            504: 'Gateway timeout.',
        },
        errorMessage: {
            100: 'unknown',
            101: 'Request error',
            5001: 'Data does not exist',
            5002: 'Data already exists and cannot be recreated',
            5003: 'New creation failed',
            5004: 'The data does not exist and cannot be saved',
            5005: 'Data deletion failed'
        }
    },
    branch: branch_en_US,
    user: user_en_US,
    ibzfavorites: ibzfavorites_en_US,
    projectteam: projectteam_en_US,
    build: build_en_US,
    task: task_en_US,
    taskestimate: taskestimate_en_US,
    module: module_en_US,
    product: product_en_US,
    dynadashboard: dynadashboard_en_US,
    action: action_en_US,
    casestep: casestep_en_US,
    productline: productline_en_US,
    release: release_en_US,
    taskteam: taskteam_en_US,
    productmodule: productmodule_en_US,
    project: project_en_US,
    todo: todo_en_US,
    story: story_en_US,
    ibzmyterritory: ibzmyterritory_en_US,
    case: case_en_US,
    testmodule: testmodule_en_US,
    productplan: productplan_en_US,
    ibztaskestimate: ibztaskestimate_en_US,
    projectstats: projectstats_en_US,
    ibztaskteam: ibztaskteam_en_US,
    bug: bug_en_US,
    projectmodule: projectmodule_en_US,
    productstats: productstats_en_US,
    testtask: testtask_en_US,
    testsuite: testsuite_en_US,
    codelist: codelist_en_US,
    userCustom: userCustom_en_US,
};