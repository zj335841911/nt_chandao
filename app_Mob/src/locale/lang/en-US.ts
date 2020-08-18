import user_en_US from '@locale/lanres/user/user_en_US';
import projectteam_en_US from '@locale/lanres/project-team/project-team_en_US';
import task_en_US from '@locale/lanres/task/task_en_US';
import product_en_US from '@locale/lanres/product/product_en_US';
import project_en_US from '@locale/lanres/project/project_en_US';
import todo_en_US from '@locale/lanres/todo/todo_en_US';
import story_en_US from '@locale/lanres/story/story_en_US';
import ibzmyterritory_en_US from '@locale/lanres/ibz-my-territory/ibz-my-territory_en_US';
import productplan_en_US from '@locale/lanres/product-plan/product-plan_en_US';
import projectstats_en_US from '@locale/lanres/project-stats/project-stats_en_US';
import bug_en_US from '@locale/lanres/bug/bug_en_US';
import productstats_en_US from '@locale/lanres/product-stats/product-stats_en_US';
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
                caption: '首页',
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
    user: user_en_US,
    projectteam: projectteam_en_US,
    task: task_en_US,
    product: product_en_US,
    project: project_en_US,
    todo: todo_en_US,
    story: story_en_US,
    ibzmyterritory: ibzmyterritory_en_US,
    productplan: productplan_en_US,
    projectstats: projectstats_en_US,
    bug: bug_en_US,
    productstats: productstats_en_US,
    codelist: codelist_en_US,
    userCustom: userCustom_en_US,
};