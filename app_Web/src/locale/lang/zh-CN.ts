import productplan_zh_CN from '@locale/lanres/product-plan/product-plan_zh_CN';
import projectproduct_zh_CN from '@locale/lanres/project-product/project-product_zh_CN';
import case_zh_CN from '@locale/lanres/case/case_zh_CN';
import product_zh_CN from '@locale/lanres/product/product_zh_CN';
import ibz_subproductplan_zh_CN from '@locale/lanres/ibz-subproductplan/ibz-subproductplan_zh_CN';
import storyspec_zh_CN from '@locale/lanres/story-spec/story-spec_zh_CN';
import branch_zh_CN from '@locale/lanres/branch/branch_zh_CN';
import action_zh_CN from '@locale/lanres/action/action_zh_CN';
import casestep_zh_CN from '@locale/lanres/case-step/case-step_zh_CN';
import story_zh_CN from '@locale/lanres/story/story_zh_CN';
import project_zh_CN from '@locale/lanres/project/project_zh_CN';
import history_zh_CN from '@locale/lanres/history/history_zh_CN';
import user_zh_CN from '@locale/lanres/user/user_zh_CN';
import productmodule_zh_CN from '@locale/lanres/product-module/product-module_zh_CN';
import module_zh_CN from '@locale/lanres/module/module_zh_CN';
import productlife_zh_CN from '@locale/lanres/product-life/product-life_zh_CN';
import task_zh_CN from '@locale/lanres/task/task_zh_CN';
import build_zh_CN from '@locale/lanres/build/build_zh_CN';
import testtask_zh_CN from '@locale/lanres/test-task/test-task_zh_CN';
import bug_zh_CN from '@locale/lanres/bug/bug_zh_CN';
import ibzdoc_zh_CN from '@locale/lanres/ibz-doc/ibz-doc_zh_CN';
import release_zh_CN from '@locale/lanres/release/release_zh_CN';
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
        },
        utilview:{
            importview:"导入数据",
            warning:"警告",
            info:"请配置数据导入项" 
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
        productplan: productplan_zh_CN,
        projectproduct: projectproduct_zh_CN,
        case: case_zh_CN,
        product: product_zh_CN,
        ibz_subproductplan: ibz_subproductplan_zh_CN,
        storyspec: storyspec_zh_CN,
        branch: branch_zh_CN,
        action: action_zh_CN,
        casestep: casestep_zh_CN,
        story: story_zh_CN,
        project: project_zh_CN,
        history: history_zh_CN,
        user: user_zh_CN,
        productmodule: productmodule_zh_CN,
        module: module_zh_CN,
        productlife: productlife_zh_CN,
        task: task_zh_CN,
        build: build_zh_CN,
        testtask: testtask_zh_CN,
        bug: bug_zh_CN,
        ibzdoc: ibzdoc_zh_CN,
        release: release_zh_CN,
    },
    components: components_zh_CN,
    codelist: codelist_zh_CN,
    userCustom: userCustom_zh_CN,
};