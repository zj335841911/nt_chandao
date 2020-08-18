import projectteam_zh_CN from '@locale/lanres/project-team/project-team_zh_CN';
import task_zh_CN from '@locale/lanres/task/task_zh_CN';
import product_zh_CN from '@locale/lanres/product/product_zh_CN';
import project_zh_CN from '@locale/lanres/project/project_zh_CN';
import story_zh_CN from '@locale/lanres/story/story_zh_CN';
import ibzmyterritory_zh_CN from '@locale/lanres/ibz-my-territory/ibz-my-territory_zh_CN';
import productplan_zh_CN from '@locale/lanres/product-plan/product-plan_zh_CN';
import projectstats_zh_CN from '@locale/lanres/project-stats/project-stats_zh_CN';
import bug_zh_CN from '@locale/lanres/bug/bug_zh_CN';
import productstats_zh_CN from '@locale/lanres/product-stats/product-stats_zh_CN';
import codelist_zh_CN from '@locale/lanres/codelist/codelist_zh_CN';
import userCustom_zh_CN from '@locale/lanres/userCustom/userCustom_zh_CN';

export default {
    app: {
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
                statusValue_open: '展开',
                statusValue_close: '收回',
            }
        },

        button: {
            cancel: '取消',
            confirm: '确认',
            back: '返回',
            loadmore: '加载更多'
        },
        loadding: '加载中',
        fastsearch: '快速搜索',
        pulling_text: '下拉刷新',
        ctrl:{
            form:"表单",
            multieditviewpanel:"多编辑面板",
            searchform:"搜索表单",
        },
        view:"视图",
        notConfig:"参数未配置",
        message:{
            success: "成功",
            fail: "失败",
            savedSuccess: "保存成功",
            deleteSccess: "删除成功",
            warning: "警告",
            confirmToDelete: "确认删除 ",
            unrecoverable: " 删除操作将不可恢复",
            totle: "共",
            data: "条数据"
        },
        statusMessage:{
            200: '服务器成功返回请求的数据。',
            201: '新建或修改数据成功。',
            202: '一个请求已经进入后台排队（异步任务）。',
            204: '删除数据成功。',
            400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
            401: '用户没有权限（令牌、用户名、密码错误）。',
            403: '用户得到授权，但是访问是被禁止的。',
            404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
            405: '方法不被允许',
            406: '请求的格式不可得。',
            410: '请求的资源被永久删除，且不会再得到的。',
            422: '当创建一个对象时，发生一个验证错误。',
            500: '服务器发生错误，请检查服务器。',
            502: '网关错误。',
            503: '服务不可用，服务器暂时过载或维护。',
            504: '网关超时。',
        },
        errorMessage: {
            100: '未知',
            101: '请求发生错误',
            5001: '数据不存在',
            5002: '数据已存在，无法重复创建',
            5003: '新建失败',
            5004: '数据不存在，无法保存',
            5005: '数据删除失败'
        }
    },
    projectteam: projectteam_zh_CN,
    task: task_zh_CN,
    product: product_zh_CN,
    project: project_zh_CN,
    story: story_zh_CN,
    ibzmyterritory: ibzmyterritory_zh_CN,
    productplan: productplan_zh_CN,
    projectstats: projectstats_zh_CN,
    bug: bug_zh_CN,
    productstats: productstats_zh_CN,
    codelist: codelist_zh_CN,
    userCustom: userCustom_zh_CN
};