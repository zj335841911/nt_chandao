import Vue from 'vue';
import Router from 'vue-router';
import { AuthGuard } from '@/utils';
import qs from 'qs';
import { globalRoutes, indexRoutes} from '@/router'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/ibizpms/:ibizpms?',
            beforeEnter: (to: any, from: any, next: any) => {
                const routerParamsName = 'ibizpms';
                const params: any = {};
                if (to.params && to.params[routerParamsName]) {
                    Object.assign(params, qs.parse(to.params[routerParamsName], { delimiter: ';' }));
                }
                const url: string = '/appdata';
                const auth: Promise<any> = AuthGuard.getInstance().authGuard(url, params, router);
                auth.then(() => {
                    next();
                }).catch(() => {
                    next();
                });
            },
            meta: {  
                caption: 'app.views.ibizpms.caption',
                viewType: 'APPINDEX',
                parameters: [
                    { pathName: 'ibizpms', parameterName: 'ibizpms' },
                ],
                requireAuth: true,
            },
            component: () => import('@pages/zentao/i-biz-pms/i-biz-pms.vue'),
            children: [
                {
                    path: 'projects/:project?/tasks/:task?/maininfoview9/:maininfoview9?',
                    meta: {
                        caption: 'entities.task.views.maininfoview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maininfoview9', parameterName: 'maininfoview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-info-view9/task-main-info-view9.vue'),
                },
                {
                    path: 'tasks/:task?/maininfoview9/:maininfoview9?',
                    meta: {
                        caption: 'entities.task.views.maininfoview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maininfoview9', parameterName: 'maininfoview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-info-view9/task-main-info-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.story.views.maingridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-grid-view/story-main-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.story.views.maingridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-grid-view/story-main-grid-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/bugs/:bug?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.bug.views.plansubgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/bugs/:bug?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.bug.views.plansubgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.bug.views.plansubgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
                },
                {
                    path: 'bugs/:bug?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.bug.views.plansubgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mainview9/:mainview9?',
                    meta: {
                        caption: 'entities.story.views.mainview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview9', parameterName: 'mainview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view9/story-main-view9.vue'),
                },
                {
                    path: 'stories/:story?/mainview9/:mainview9?',
                    meta: {
                        caption: 'entities.story.views.mainview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview9', parameterName: 'mainview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view9/story-main-view9.vue'),
                },
                {
                    path: 'products/:product?/dashboardinfomainview9/:dashboardinfomainview9?',
                    meta: {
                        caption: 'entities.product.views.dashboardinfomainview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'dashboardinfomainview9', parameterName: 'dashboardinfomainview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-dashboard-info-main-view9/product-dashboard-info-main-view9.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.release.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-grid-view/release-grid-view.vue'),
                },
                {
                    path: 'releases/:release?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.release.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-grid-view/release-grid-view.vue'),
                },
                {
                    path: 'products/:product?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.product.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-grid-view/product-grid-view.vue'),
                },
                {
                    path: 'products/:product?/testdashboardview/:testdashboardview?',
                    meta: {
                        caption: 'entities.product.views.testdashboardview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testdashboardview', parameterName: 'testdashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-test-dashboard-view/product-test-dashboard-view.vue'),
                },
                {
                    path: 'projects/:project?/projectproducts/:projectproduct?/planlistview9/:planlistview9?',
                    meta: {
                        caption: 'entities.projectproduct.views.planlistview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectproducts', parameterName: 'projectproduct' },
                            { pathName: 'planlistview9', parameterName: 'planlistview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-product-plan-list-view9/project-product-plan-list-view9.vue'),
                },
                {
                    path: 'products/:product?/projectproducts/:projectproduct?/planlistview9/:planlistview9?',
                    meta: {
                        caption: 'entities.projectproduct.views.planlistview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'projectproducts', parameterName: 'projectproduct' },
                            { pathName: 'planlistview9', parameterName: 'planlistview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-product-plan-list-view9/project-product-plan-list-view9.vue'),
                },
                {
                    path: 'projectproducts/:projectproduct?/planlistview9/:planlistview9?',
                    meta: {
                        caption: 'entities.projectproduct.views.planlistview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectproducts', parameterName: 'projectproduct' },
                            { pathName: 'planlistview9', parameterName: 'planlistview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-product-plan-list-view9/project-product-plan-list-view9.vue'),
                },
                {
                    path: 'products/:product?/expeditview/:expeditview?',
                    meta: {
                        caption: 'entities.product.views.expeditview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'expeditview', parameterName: 'expeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-exp-edit-view/product-exp-edit-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.productplan.views.maineditview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-main-edit-view/product-plan-main-edit-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.productplan.views.maineditview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-main-edit-view/product-plan-main-edit-view.vue'),
                },
                {
                    path: 'actions/:action?/projecttrendslistview/:projecttrendslistview?',
                    meta: {
                        caption: 'entities.action.views.projecttrendslistview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'projecttrendslistview', parameterName: 'projecttrendslistview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/action-project-trends-list-view/action-project-trends-list-view.vue'),
                },
                {
                    path: 'products/:product?/productmodules/:productmodule?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.productmodule.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-module-grid-view/product-module-grid-view.vue'),
                },
                {
                    path: 'productmodules/:productmodule?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.productmodule.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-module-grid-view/product-module-grid-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/bugs/:bug?/editview/:editview?',
                    meta: {
                        caption: 'entities.bug.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/bugs/:bug?/editview/:editview?',
                    meta: {
                        caption: 'entities.bug.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/editview/:editview?',
                    meta: {
                        caption: 'entities.bug.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
                },
                {
                    path: 'bugs/:bug?/editview/:editview?',
                    meta: {
                        caption: 'entities.bug.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/leftsidebarlistview/:leftsidebarlistview?',
                    meta: {
                        caption: 'entities.project.views.leftsidebarlistview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-left-sidebar-list-view/project-left-sidebar-list-view.vue'),
                },
                {
                    path: 'projects/:project?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.project.views.maindashboardview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-main-dashboard-view/project-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/leftsidebarlistview/:leftsidebarlistview?',
                    meta: {
                        caption: 'entities.product.views.leftsidebarlistview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-left-sidebar-list-view/product-left-sidebar-list-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/editview/:editview?',
                    meta: {
                        caption: 'entities.story.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-edit-view/story-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/editview/:editview?',
                    meta: {
                        caption: 'entities.story.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-edit-view/story-edit-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.testtask.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-grid-view/test-task-grid-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.testtask.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-grid-view/test-task-grid-view.vue'),
                },
                {
                    path: 'products/:product?/editview/:editview?',
                    meta: {
                        caption: 'entities.product.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-edit-view/product-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maindetailview9/:maindetailview9?',
                    meta: {
                        caption: 'entities.task.views.maindetailview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maindetailview9', parameterName: 'maindetailview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-detail-view9/task-main-detail-view9.vue'),
                },
                {
                    path: 'tasks/:task?/maindetailview9/:maindetailview9?',
                    meta: {
                        caption: 'entities.task.views.maindetailview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maindetailview9', parameterName: 'maindetailview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-detail-view9/task-main-detail-view9.vue'),
                },
                {
                    path: 'products/:product?/storytreeexpview/:storytreeexpview?',
                    meta: {
                        caption: 'entities.product.views.storytreeexpview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'storytreeexpview', parameterName: 'storytreeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-story-tree-exp-view/product-story-tree-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/burndownchartview/:burndownchartview?',
                    meta: {
                        caption: 'entities.project.views.burndownchartview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'burndownchartview', parameterName: 'burndownchartview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-burn-down-chart-view/project-burn-down-chart-view.vue'),
                },
                {
                    path: 'productlives/:productlife?/roadmaplistview/:roadmaplistview?',
                    meta: {
                        caption: 'entities.productlife.views.roadmaplistview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productlives', parameterName: 'productlife' },
                            { pathName: 'roadmaplistview', parameterName: 'roadmaplistview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-life-road-map-list-view/product-life-road-map-list-view.vue'),
                },
                {
                    path: 'projects/:project?/curproductgridview/:curproductgridview?',
                    meta: {
                        caption: 'entities.project.views.curproductgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'curproductgridview', parameterName: 'curproductgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-cur-product-grid-view/project-cur-product-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.project.views.maintabexpview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-main-tab-exp-view/project-main-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/branches/:branch?/pmgridview/:pmgridview?',
                    meta: {
                        caption: 'entities.branch.views.pmgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'branches', parameterName: 'branch' },
                            { pathName: 'pmgridview', parameterName: 'pmgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/branch-pmgrid-view/branch-pmgrid-view.vue'),
                },
                {
                    path: 'branches/:branch?/pmgridview/:pmgridview?',
                    meta: {
                        caption: 'entities.branch.views.pmgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'branches', parameterName: 'branch' },
                            { pathName: 'pmgridview', parameterName: 'pmgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/branch-pmgrid-view/branch-pmgrid-view.vue'),
                },
                {
                    path: 'storyspecs/:storyspec?/mainview9/:mainview9?',
                    meta: {
                        caption: 'entities.storyspec.views.mainview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'storyspecs', parameterName: 'storyspec' },
                            { pathName: 'mainview9', parameterName: 'mainview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-spec-main-view9/story-spec-main-view9.vue'),
                },
                {
                    path: 'products/:product?/productmodules/:productmodule?/editview/:editview?',
                    meta: {
                        caption: 'entities.productmodule.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-module-edit-view/product-module-edit-view.vue'),
                },
                {
                    path: 'productmodules/:productmodule?/editview/:editview?',
                    meta: {
                        caption: 'entities.productmodule.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-module-edit-view/product-module-edit-view.vue'),
                },
                {
                    path: 'modules/:module?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.module.views.pickupgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'modules', parameterName: 'module' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/module-pickup-grid-view/module-pickup-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mainview_editmode/:mainview_editmode?',
                    meta: {
                        caption: 'entities.story.views.mainview_editmode.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview_editmode', parameterName: 'mainview_editmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view-edit-mode/story-main-view-edit-mode.vue'),
                },
                {
                    path: 'stories/:story?/mainview_editmode/:mainview_editmode?',
                    meta: {
                        caption: 'entities.story.views.mainview_editmode.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview_editmode', parameterName: 'mainview_editmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view-edit-mode/story-main-view-edit-mode.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/editview/:editview?',
                    meta: {
                        caption: 'entities.task.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-edit-view/task-edit-view.vue'),
                },
                {
                    path: 'tasks/:task?/editview/:editview?',
                    meta: {
                        caption: 'entities.task.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-edit-view/task-edit-view.vue'),
                },
                {
                    path: 'products/:product?/listexpview/:listexpview?',
                    meta: {
                        caption: 'entities.product.views.listexpview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'listexpview', parameterName: 'listexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-list-exp-view/product-list-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/tasktreeexpview/:tasktreeexpview?',
                    meta: {
                        caption: 'entities.project.views.tasktreeexpview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasktreeexpview', parameterName: 'tasktreeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-task-tree-exp-view/project-task-tree-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/tasktypeganttview/:tasktypeganttview?',
                    meta: {
                        caption: 'entities.task.views.tasktypeganttview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'tasktypeganttview', parameterName: 'tasktypeganttview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-task-type-gantt-view/task-task-type-gantt-view.vue'),
                },
                {
                    path: 'tasks/:task?/tasktypeganttview/:tasktypeganttview?',
                    meta: {
                        caption: 'entities.task.views.tasktypeganttview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'tasktypeganttview', parameterName: 'tasktypeganttview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-task-type-gantt-view/task-task-type-gantt-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.task.views.maindashboardview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-dashboard-view/task-main-dashboard-view.vue'),
                },
                {
                    path: 'tasks/:task?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.task.views.maindashboardview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-dashboard-view/task-main-dashboard-view.vue'),
                },
                {
                    path: 'productportalview/:productportalview?',
                    meta: {
                        caption: 'app.views.productportalview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productportalview', parameterName: 'productportalview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-portal-view/product-portal-view.vue'),
                },
                {
                    path: 'projects/:project?/dashboardinfoview/:dashboardinfoview?',
                    meta: {
                        caption: 'entities.project.views.dashboardinfoview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'dashboardinfoview', parameterName: 'dashboardinfoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-dashboard-info-view/project-dashboard-info-view.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/editview/:editview?',
                    meta: {
                        caption: 'entities.release.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-edit-view/release-edit-view.vue'),
                },
                {
                    path: 'releases/:release?/editview/:editview?',
                    meta: {
                        caption: 'entities.release.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-edit-view/release-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.task.views.maingridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view/task-main-grid-view.vue'),
                },
                {
                    path: 'tasks/:task?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.task.views.maingridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view/task-main-grid-view.vue'),
                },
                {
                    path: 'actions/:action?/producttrendslistview9/:producttrendslistview9?',
                    meta: {
                        caption: 'entities.action.views.producttrendslistview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'producttrendslistview9', parameterName: 'producttrendslistview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/action-product-trends-list-view9/action-product-trends-list-view9.vue'),
                },
                {
                    path: 'actions/:action?/producttrendslistview/:producttrendslistview?',
                    meta: {
                        caption: 'entities.action.views.producttrendslistview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'producttrendslistview', parameterName: 'producttrendslistview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/action-product-trends-list-view/action-product-trends-list-view.vue'),
                },
                {
                    path: 'products/:product?/testgridview/:testgridview?',
                    meta: {
                        caption: 'entities.product.views.testgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testgridview', parameterName: 'testgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-test-grid-view/product-test-grid-view.vue'),
                },
                {
                    path: 'productlives/:productlife?/roadmaplistview9/:roadmaplistview9?',
                    meta: {
                        caption: 'entities.productlife.views.roadmaplistview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productlives', parameterName: 'productlife' },
                            { pathName: 'roadmaplistview9', parameterName: 'roadmaplistview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-life-road-map-list-view9/product-life-road-map-list-view9.vue'),
                },
                {
                    path: 'products/:product?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.product.views.maintabexpview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-main-tab-exp-view/product-main-tab-exp-view.vue'),
                },
                {
                    path: 'actions/:action?/projecttrendslistview9/:projecttrendslistview9?',
                    meta: {
                        caption: 'entities.action.views.projecttrendslistview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'projecttrendslistview9', parameterName: 'projecttrendslistview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/action-project-trends-list-view9/action-project-trends-list-view9.vue'),
                },
                {
                    path: 'projects/:project?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.project.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-grid-view/project-grid-view.vue'),
                },
                {
                    path: 'products/:product?/gridview_unclosed/:gridview_unclosed?',
                    meta: {
                        caption: 'entities.product.views.gridview_unclosed.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'gridview_unclosed', parameterName: 'gridview_unclosed' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-grid-view-un-closed/product-grid-view-un-closed.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/main2gridview/:main2gridview?',
                    meta: {
                        caption: 'entities.story.views.main2gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'main2gridview', parameterName: 'main2gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main2-grid-view/story-main2-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/main2gridview/:main2gridview?',
                    meta: {
                        caption: 'entities.story.views.main2gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'main2gridview', parameterName: 'main2gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main2-grid-view/story-main2-grid-view.vue'),
                },
                {
                    path: 'actions/:action?/editview/:editview?',
                    meta: {
                        caption: 'entities.action.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/action-edit-view/action-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mainview9_editmode/:mainview9_editmode?',
                    meta: {
                        caption: 'entities.story.views.mainview9_editmode.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview9_editmode', parameterName: 'mainview9_editmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view9-edit-mode/story-main-view9-edit-mode.vue'),
                },
                {
                    path: 'stories/:story?/mainview9_editmode/:mainview9_editmode?',
                    meta: {
                        caption: 'entities.story.views.mainview9_editmode.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview9_editmode', parameterName: 'mainview9_editmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view9-edit-mode/story-main-view9-edit-mode.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/editview/:editview?',
                    meta: {
                        caption: 'entities.testtask.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view/test-task-edit-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/editview/:editview?',
                    meta: {
                        caption: 'entities.testtask.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view/test-task-edit-view.vue'),
                },
                {
                    path: 'products/:product?/chartview/:chartview?',
                    meta: {
                        caption: 'entities.product.views.chartview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'chartview', parameterName: 'chartview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-chart-view/product-chart-view.vue'),
                },
                {
                    path: 'products/:product?/branches/:branch?/pmeditview/:pmeditview?',
                    meta: {
                        caption: 'entities.branch.views.pmeditview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'branches', parameterName: 'branch' },
                            { pathName: 'pmeditview', parameterName: 'pmeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/branch-pmedit-view/branch-pmedit-view.vue'),
                },
                {
                    path: 'branches/:branch?/pmeditview/:pmeditview?',
                    meta: {
                        caption: 'entities.branch.views.pmeditview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'branches', parameterName: 'branch' },
                            { pathName: 'pmeditview', parameterName: 'pmeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/branch-pmedit-view/branch-pmedit-view.vue'),
                },
                {
                    path: 'products/:product?/testleftsidebarlistview/:testleftsidebarlistview?',
                    meta: {
                        caption: 'entities.product.views.testleftsidebarlistview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testleftsidebarlistview', parameterName: 'testleftsidebarlistview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-test-left-sidebar-list-view/product-test-left-sidebar-list-view.vue'),
                },
                {
                    path: 'products/:product?/bugtreeexpview/:bugtreeexpview?',
                    meta: {
                        caption: 'entities.product.views.bugtreeexpview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugtreeexpview', parameterName: 'bugtreeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-bug-tree-exp-view/product-bug-tree-exp-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/editview/:editview?',
                    meta: {
                        caption: 'entities.productplan.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-edit-view/product-plan-edit-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/editview/:editview?',
                    meta: {
                        caption: 'entities.productplan.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-edit-view/product-plan-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/editview/:editview?',
                    meta: {
                        caption: 'entities.project.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-edit-view/project-edit-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/maintabexp/:maintabexp?',
                    meta: {
                        caption: 'entities.productplan.views.maintabexp.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'maintabexp', parameterName: 'maintabexp' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-main-tab-exp/product-plan-main-tab-exp.vue'),
                },
                {
                    path: 'productplans/:productplan?/maintabexp/:maintabexp?',
                    meta: {
                        caption: 'entities.productplan.views.maintabexp.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'maintabexp', parameterName: 'maintabexp' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-main-tab-exp/product-plan-main-tab-exp.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maingridview9_child/:maingridview9_child?',
                    meta: {
                        caption: 'entities.task.views.maingridview9_child.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview9_child', parameterName: 'maingridview9_child' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view9-child/task-main-grid-view9-child.vue'),
                },
                {
                    path: 'tasks/:task?/maingridview9_child/:maingridview9_child?',
                    meta: {
                        caption: 'entities.task.views.maingridview9_child.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview9_child', parameterName: 'maingridview9_child' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view9-child/task-main-grid-view9-child.vue'),
                },
                {
                    path: 'products/:product?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.product.views.maindashboardview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-main-dashboard-view/product-main-dashboard-view.vue'),
                },
                {
                    path: 'actions/:action?/histroylistview/:histroylistview?',
                    meta: {
                        caption: 'entities.action.views.histroylistview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'histroylistview', parameterName: 'histroylistview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/action-histroy-list-view/action-histroy-list-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/editview/:editview?',
                    meta: {
                        caption: 'entities.case.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-edit-view/case-edit-view.vue'),
                },
                {
                    path: 'cases/:case?/editview/:editview?',
                    meta: {
                        caption: 'entities.case.views.editview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-edit-view/case-edit-view.vue'),
                },
                {
                    path: 'products/:product?/testtabexpview/:testtabexpview?',
                    meta: {
                        caption: 'entities.product.views.testtabexpview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtabexpview', parameterName: 'testtabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-test-tab-exp-view/product-test-tab-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/projectproducts/:projectproduct?/listview9/:listview9?',
                    meta: {
                        caption: 'entities.projectproduct.views.listview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectproducts', parameterName: 'projectproduct' },
                            { pathName: 'listview9', parameterName: 'listview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-product-list-view9/project-product-list-view9.vue'),
                },
                {
                    path: 'products/:product?/projectproducts/:projectproduct?/listview9/:listview9?',
                    meta: {
                        caption: 'entities.projectproduct.views.listview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'projectproducts', parameterName: 'projectproduct' },
                            { pathName: 'listview9', parameterName: 'listview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-product-list-view9/project-product-list-view9.vue'),
                },
                {
                    path: 'projectproducts/:projectproduct?/listview9/:listview9?',
                    meta: {
                        caption: 'entities.projectproduct.views.listview9.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectproducts', parameterName: 'projectproduct' },
                            { pathName: 'listview9', parameterName: 'listview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-product-list-view9/project-product-list-view9.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/bugs/:bug?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.bug.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/bugs/:bug?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.bug.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.bug.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
                },
                {
                    path: 'bugs/:bug?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.bug.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.story.views.plansubgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-plan-sub-grid-view/story-plan-sub-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.story.views.plansubgridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-plan-sub-grid-view/story-plan-sub-grid-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.case.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view/case-grid-view.vue'),
                },
                {
                    path: 'cases/:case?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.case.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view/case-grid-view.vue'),
                },
                {
                    path: 'modules/:module?/pickupview/:pickupview?',
                    meta: {
                        caption: 'entities.module.views.pickupview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'modules', parameterName: 'module' },
                            { pathName: 'pickupview', parameterName: 'pickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/module-pickup-view/module-pickup-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.productplan.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-grid-view/product-plan-grid-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.productplan.views.gridview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-grid-view/product-plan-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mainview/:mainview?',
                    meta: {
                        caption: 'entities.story.views.mainview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview', parameterName: 'mainview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view/story-main-view.vue'),
                },
                {
                    path: 'stories/:story?/mainview/:mainview?',
                    meta: {
                        caption: 'entities.story.views.mainview.caption',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview', parameterName: 'mainview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view/story-main-view.vue'),
                },
            ...indexRoutes,
            ],
        },
    {
        path: '/products/:product?/testtabexpview/:testtabexpview?',
        meta: {
            caption: 'entities.product.views.testtabexpview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'testtabexpview', parameterName: 'testtabexpview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-test-tab-exp-view/product-test-tab-exp-view.vue'),
    },
    {
        path: '/products/:product?/expeditview/:expeditview?',
        meta: {
            caption: 'entities.product.views.expeditview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'expeditview', parameterName: 'expeditview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-exp-edit-view/product-exp-edit-view.vue'),
    },
    {
        path: '/products/:product?/cases/:case?/editview/:editview?',
        meta: {
            caption: 'entities.case.views.editview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'cases', parameterName: 'case' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/case-edit-view/case-edit-view.vue'),
    },
    {
        path: '/cases/:case?/editview/:editview?',
        meta: {
            caption: 'entities.case.views.editview.caption',
            parameters: [
                { pathName: 'cases', parameterName: 'case' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/case-edit-view/case-edit-view.vue'),
    },
    {
        path: '/projects/:project?/projectproducts/:projectproduct?/planlistview9/:planlistview9?',
        meta: {
            caption: 'entities.projectproduct.views.planlistview9.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'projectproducts', parameterName: 'projectproduct' },
                { pathName: 'planlistview9', parameterName: 'planlistview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-product-plan-list-view9/project-product-plan-list-view9.vue'),
    },
    {
        path: '/products/:product?/projectproducts/:projectproduct?/planlistview9/:planlistview9?',
        meta: {
            caption: 'entities.projectproduct.views.planlistview9.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'projectproducts', parameterName: 'projectproduct' },
                { pathName: 'planlistview9', parameterName: 'planlistview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-product-plan-list-view9/project-product-plan-list-view9.vue'),
    },
    {
        path: '/projectproducts/:projectproduct?/planlistview9/:planlistview9?',
        meta: {
            caption: 'entities.projectproduct.views.planlistview9.caption',
            parameters: [
                { pathName: 'projectproducts', parameterName: 'projectproduct' },
                { pathName: 'planlistview9', parameterName: 'planlistview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-product-plan-list-view9/project-product-plan-list-view9.vue'),
    },
    {
        path: '/products/:product?/productplans/:productplan?/bugs/:bug?/plansubgridview/:plansubgridview?',
        meta: {
            caption: 'entities.bug.views.plansubgridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
    },
    {
        path: '/productplans/:productplan?/bugs/:bug?/plansubgridview/:plansubgridview?',
        meta: {
            caption: 'entities.bug.views.plansubgridview.caption',
            parameters: [
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
    },
    {
        path: '/products/:product?/bugs/:bug?/plansubgridview/:plansubgridview?',
        meta: {
            caption: 'entities.bug.views.plansubgridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
    },
    {
        path: '/bugs/:bug?/plansubgridview/:plansubgridview?',
        meta: {
            caption: 'entities.bug.views.plansubgridview.caption',
            parameters: [
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
    },
    {
        path: '/productlives/:productlife?/roadmaplistview/:roadmaplistview?',
        meta: {
            caption: 'entities.productlife.views.roadmaplistview.caption',
            parameters: [
                { pathName: 'productlives', parameterName: 'productlife' },
                { pathName: 'roadmaplistview', parameterName: 'roadmaplistview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/ibiz/product-life-road-map-list-view/product-life-road-map-list-view.vue'),
    },
    {
        path: '/products/:product?/productplans/:productplan?/maintabexp/:maintabexp?',
        meta: {
            caption: 'entities.productplan.views.maintabexp.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'maintabexp', parameterName: 'maintabexp' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-plan-main-tab-exp/product-plan-main-tab-exp.vue'),
    },
    {
        path: '/productplans/:productplan?/maintabexp/:maintabexp?',
        meta: {
            caption: 'entities.productplan.views.maintabexp.caption',
            parameters: [
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'maintabexp', parameterName: 'maintabexp' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-plan-main-tab-exp/product-plan-main-tab-exp.vue'),
    },
    {
        path: '/projects/:project?/tasktreeexpview/:tasktreeexpview?',
        meta: {
            caption: 'entities.project.views.tasktreeexpview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'tasktreeexpview', parameterName: 'tasktreeexpview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-task-tree-exp-view/project-task-tree-exp-view.vue'),
    },
    {
        path: '/products/:product?/productplans/:productplan?/maineditview/:maineditview?',
        meta: {
            caption: 'entities.productplan.views.maineditview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'maineditview', parameterName: 'maineditview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-plan-main-edit-view/product-plan-main-edit-view.vue'),
    },
    {
        path: '/productplans/:productplan?/maineditview/:maineditview?',
        meta: {
            caption: 'entities.productplan.views.maineditview.caption',
            parameters: [
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'maineditview', parameterName: 'maineditview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-plan-main-edit-view/product-plan-main-edit-view.vue'),
    },
    {
        path: '/products/:product?/testdashboardview/:testdashboardview?',
        meta: {
            caption: 'entities.product.views.testdashboardview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'testdashboardview', parameterName: 'testdashboardview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-test-dashboard-view/product-test-dashboard-view.vue'),
    },
    {
        path: '/products/:product?/testgridview/:testgridview?',
        meta: {
            caption: 'entities.product.views.testgridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'testgridview', parameterName: 'testgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-test-grid-view/product-test-grid-view.vue'),
    },
    {
        path: '/products/:product?/chartview/:chartview?',
        meta: {
            caption: 'entities.product.views.chartview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'chartview', parameterName: 'chartview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-chart-view/product-chart-view.vue'),
    },
    {
        path: '/projects/:project?/tasks/:task?/maingridview9_child/:maingridview9_child?',
        meta: {
            caption: 'entities.task.views.maingridview9_child.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maingridview9_child', parameterName: 'maingridview9_child' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-grid-view9-child/task-main-grid-view9-child.vue'),
    },
    {
        path: '/tasks/:task?/maingridview9_child/:maingridview9_child?',
        meta: {
            caption: 'entities.task.views.maingridview9_child.caption',
            parameters: [
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maingridview9_child', parameterName: 'maingridview9_child' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-grid-view9-child/task-main-grid-view9-child.vue'),
    },
    {
        path: '/projects/:project?/tasks/:task?/maininfoview9/:maininfoview9?',
        meta: {
            caption: 'entities.task.views.maininfoview9.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maininfoview9', parameterName: 'maininfoview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-info-view9/task-main-info-view9.vue'),
    },
    {
        path: '/tasks/:task?/maininfoview9/:maininfoview9?',
        meta: {
            caption: 'entities.task.views.maininfoview9.caption',
            parameters: [
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maininfoview9', parameterName: 'maininfoview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-info-view9/task-main-info-view9.vue'),
    },
    {
        path: '/projects/:project?/burndownchartview/:burndownchartview?',
        meta: {
            caption: 'entities.project.views.burndownchartview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'burndownchartview', parameterName: 'burndownchartview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-burn-down-chart-view/project-burn-down-chart-view.vue'),
    },
    {
        path: '/products/:product?/stories/:story?/mainview/:mainview?',
        meta: {
            caption: 'entities.story.views.mainview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview', parameterName: 'mainview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-view/story-main-view.vue'),
    },
    {
        path: '/stories/:story?/mainview/:mainview?',
        meta: {
            caption: 'entities.story.views.mainview.caption',
            parameters: [
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview', parameterName: 'mainview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-view/story-main-view.vue'),
    },
    {
        path: '/products/:product?/productplans/:productplan?/bugs/:bug?/editview/:editview?',
        meta: {
            caption: 'entities.bug.views.editview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
    },
    {
        path: '/productplans/:productplan?/bugs/:bug?/editview/:editview?',
        meta: {
            caption: 'entities.bug.views.editview.caption',
            parameters: [
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
    },
    {
        path: '/products/:product?/bugs/:bug?/editview/:editview?',
        meta: {
            caption: 'entities.bug.views.editview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
    },
    {
        path: '/bugs/:bug?/editview/:editview?',
        meta: {
            caption: 'entities.bug.views.editview.caption',
            parameters: [
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
    },
    {
        path: '/products/:product?/stories/:story?/editview/:editview?',
        meta: {
            caption: 'entities.story.views.editview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-edit-view/story-edit-view.vue'),
    },
    {
        path: '/stories/:story?/editview/:editview?',
        meta: {
            caption: 'entities.story.views.editview.caption',
            parameters: [
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-edit-view/story-edit-view.vue'),
    },
    {
        path: '/projects/:project?/curproductgridview/:curproductgridview?',
        meta: {
            caption: 'entities.project.views.curproductgridview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'curproductgridview', parameterName: 'curproductgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-cur-product-grid-view/project-cur-product-grid-view.vue'),
    },
    {
        path: '/products/:product?/productmodules/:productmodule?/gridview/:gridview?',
        meta: {
            caption: 'entities.productmodule.views.gridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'productmodules', parameterName: 'productmodule' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-module-grid-view/product-module-grid-view.vue'),
    },
    {
        path: '/productmodules/:productmodule?/gridview/:gridview?',
        meta: {
            caption: 'entities.productmodule.views.gridview.caption',
            parameters: [
                { pathName: 'productmodules', parameterName: 'productmodule' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-module-grid-view/product-module-grid-view.vue'),
    },
    {
        path: '/products/:product?/gridview_unclosed/:gridview_unclosed?',
        meta: {
            caption: 'entities.product.views.gridview_unclosed.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'gridview_unclosed', parameterName: 'gridview_unclosed' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-grid-view-un-closed/product-grid-view-un-closed.vue'),
    },
    {
        path: '/products/:product?/stories/:story?/mainview9_editmode/:mainview9_editmode?',
        meta: {
            caption: 'entities.story.views.mainview9_editmode.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview9_editmode', parameterName: 'mainview9_editmode' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-view9-edit-mode/story-main-view9-edit-mode.vue'),
    },
    {
        path: '/stories/:story?/mainview9_editmode/:mainview9_editmode?',
        meta: {
            caption: 'entities.story.views.mainview9_editmode.caption',
            parameters: [
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview9_editmode', parameterName: 'mainview9_editmode' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-view9-edit-mode/story-main-view9-edit-mode.vue'),
    },
    {
        path: '/projects/:project?/tasks/:task?/maindashboardview/:maindashboardview?',
        meta: {
            caption: 'entities.task.views.maindashboardview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-dashboard-view/task-main-dashboard-view.vue'),
    },
    {
        path: '/tasks/:task?/maindashboardview/:maindashboardview?',
        meta: {
            caption: 'entities.task.views.maindashboardview.caption',
            parameters: [
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-dashboard-view/task-main-dashboard-view.vue'),
    },
    {
        path: '/products/:product?/storytreeexpview/:storytreeexpview?',
        meta: {
            caption: 'entities.product.views.storytreeexpview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'storytreeexpview', parameterName: 'storytreeexpview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-story-tree-exp-view/product-story-tree-exp-view.vue'),
    },
    {
        path: '/products/:product?/testtasks/:testtask?/editview/:editview?',
        meta: {
            caption: 'entities.testtask.views.editview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'testtasks', parameterName: 'testtask' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/test-task-edit-view/test-task-edit-view.vue'),
    },
    {
        path: '/testtasks/:testtask?/editview/:editview?',
        meta: {
            caption: 'entities.testtask.views.editview.caption',
            parameters: [
                { pathName: 'testtasks', parameterName: 'testtask' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/test-task-edit-view/test-task-edit-view.vue'),
    },
    {
        path: '/projects/:project?/tasks/:task?/tasktypeganttview/:tasktypeganttview?',
        meta: {
            caption: 'entities.task.views.tasktypeganttview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'tasktypeganttview', parameterName: 'tasktypeganttview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-task-type-gantt-view/task-task-type-gantt-view.vue'),
    },
    {
        path: '/tasks/:task?/tasktypeganttview/:tasktypeganttview?',
        meta: {
            caption: 'entities.task.views.tasktypeganttview.caption',
            parameters: [
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'tasktypeganttview', parameterName: 'tasktypeganttview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-task-type-gantt-view/task-task-type-gantt-view.vue'),
    },
    {
        path: '/products/:product?/maintabexpview/:maintabexpview?',
        meta: {
            caption: 'entities.product.views.maintabexpview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-main-tab-exp-view/product-main-tab-exp-view.vue'),
    },
    {
        path: '/actions/:action?/histroylistview/:histroylistview?',
        meta: {
            caption: 'entities.action.views.histroylistview.caption',
            parameters: [
                { pathName: 'actions', parameterName: 'action' },
                { pathName: 'histroylistview', parameterName: 'histroylistview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/action-histroy-list-view/action-histroy-list-view.vue'),
    },
    {
        path: '/products/:product?/branches/:branch?/pmgridview/:pmgridview?',
        meta: {
            caption: 'entities.branch.views.pmgridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'branches', parameterName: 'branch' },
                { pathName: 'pmgridview', parameterName: 'pmgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/branch-pmgrid-view/branch-pmgrid-view.vue'),
    },
    {
        path: '/branches/:branch?/pmgridview/:pmgridview?',
        meta: {
            caption: 'entities.branch.views.pmgridview.caption',
            parameters: [
                { pathName: 'branches', parameterName: 'branch' },
                { pathName: 'pmgridview', parameterName: 'pmgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/branch-pmgrid-view/branch-pmgrid-view.vue'),
    },
    {
        path: '/products/:product?/testleftsidebarlistview/:testleftsidebarlistview?',
        meta: {
            caption: 'entities.product.views.testleftsidebarlistview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'testleftsidebarlistview', parameterName: 'testleftsidebarlistview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-test-left-sidebar-list-view/product-test-left-sidebar-list-view.vue'),
    },
    {
        path: '/projects/:project?/leftsidebarlistview/:leftsidebarlistview?',
        meta: {
            caption: 'entities.project.views.leftsidebarlistview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-left-sidebar-list-view/project-left-sidebar-list-view.vue'),
    },
    {
        path: '/products/:product?/gridview/:gridview?',
        meta: {
            caption: 'entities.product.views.gridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-grid-view/product-grid-view.vue'),
    },
    {
        path: '/actions/:action?/projecttrendslistview/:projecttrendslistview?',
        meta: {
            caption: 'entities.action.views.projecttrendslistview.caption',
            parameters: [
                { pathName: 'actions', parameterName: 'action' },
                { pathName: 'projecttrendslistview', parameterName: 'projecttrendslistview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/action-project-trends-list-view/action-project-trends-list-view.vue'),
    },
    {
        path: '/products/:product?/stories/:story?/mainview_editmode/:mainview_editmode?',
        meta: {
            caption: 'entities.story.views.mainview_editmode.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview_editmode', parameterName: 'mainview_editmode' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-view-edit-mode/story-main-view-edit-mode.vue'),
    },
    {
        path: '/stories/:story?/mainview_editmode/:mainview_editmode?',
        meta: {
            caption: 'entities.story.views.mainview_editmode.caption',
            parameters: [
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview_editmode', parameterName: 'mainview_editmode' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-view-edit-mode/story-main-view-edit-mode.vue'),
    },
    {
        path: '/products/:product?/productplans/:productplan?/gridview/:gridview?',
        meta: {
            caption: 'entities.productplan.views.gridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-plan-grid-view/product-plan-grid-view.vue'),
    },
    {
        path: '/productplans/:productplan?/gridview/:gridview?',
        meta: {
            caption: 'entities.productplan.views.gridview.caption',
            parameters: [
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-plan-grid-view/product-plan-grid-view.vue'),
    },
    {
        path: '/projects/:project?/gridview/:gridview?',
        meta: {
            caption: 'entities.project.views.gridview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-grid-view/project-grid-view.vue'),
    },
    {
        path: '/projects/:project?/maindashboardview/:maindashboardview?',
        meta: {
            caption: 'entities.project.views.maindashboardview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-main-dashboard-view/project-main-dashboard-view.vue'),
    },
    {
        path: '/products/:product?/leftsidebarlistview/:leftsidebarlistview?',
        meta: {
            caption: 'entities.product.views.leftsidebarlistview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-left-sidebar-list-view/product-left-sidebar-list-view.vue'),
    },
    {
        path: '/products/:product?/stories/:story?/mainview9/:mainview9?',
        meta: {
            caption: 'entities.story.views.mainview9.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview9', parameterName: 'mainview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-view9/story-main-view9.vue'),
    },
    {
        path: '/stories/:story?/mainview9/:mainview9?',
        meta: {
            caption: 'entities.story.views.mainview9.caption',
            parameters: [
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview9', parameterName: 'mainview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-view9/story-main-view9.vue'),
    },
    {
        path: '/actions/:action?/projecttrendslistview9/:projecttrendslistview9?',
        meta: {
            caption: 'entities.action.views.projecttrendslistview9.caption',
            parameters: [
                { pathName: 'actions', parameterName: 'action' },
                { pathName: 'projecttrendslistview9', parameterName: 'projecttrendslistview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/action-project-trends-list-view9/action-project-trends-list-view9.vue'),
    },
    {
        path: '/actions/:action?/producttrendslistview9/:producttrendslistview9?',
        meta: {
            caption: 'entities.action.views.producttrendslistview9.caption',
            parameters: [
                { pathName: 'actions', parameterName: 'action' },
                { pathName: 'producttrendslistview9', parameterName: 'producttrendslistview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/action-product-trends-list-view9/action-product-trends-list-view9.vue'),
    },
    {
        path: '/productlives/:productlife?/roadmaplistview9/:roadmaplistview9?',
        meta: {
            caption: 'entities.productlife.views.roadmaplistview9.caption',
            parameters: [
                { pathName: 'productlives', parameterName: 'productlife' },
                { pathName: 'roadmaplistview9', parameterName: 'roadmaplistview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/ibiz/product-life-road-map-list-view9/product-life-road-map-list-view9.vue'),
    },
    {
        path: '/products/:product?/releases/:release?/gridview/:gridview?',
        meta: {
            caption: 'entities.release.views.gridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'releases', parameterName: 'release' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/release-grid-view/release-grid-view.vue'),
    },
    {
        path: '/releases/:release?/gridview/:gridview?',
        meta: {
            caption: 'entities.release.views.gridview.caption',
            parameters: [
                { pathName: 'releases', parameterName: 'release' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/release-grid-view/release-grid-view.vue'),
    },
    {
        path: '/products/:product?/productmodules/:productmodule?/editview/:editview?',
        meta: {
            caption: 'entities.productmodule.views.editview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'productmodules', parameterName: 'productmodule' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-module-edit-view/product-module-edit-view.vue'),
    },
    {
        path: '/productmodules/:productmodule?/editview/:editview?',
        meta: {
            caption: 'entities.productmodule.views.editview.caption',
            parameters: [
                { pathName: 'productmodules', parameterName: 'productmodule' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-module-edit-view/product-module-edit-view.vue'),
    },
    {
        path: '/products/:product?/releases/:release?/editview/:editview?',
        meta: {
            caption: 'entities.release.views.editview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'releases', parameterName: 'release' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/release-edit-view/release-edit-view.vue'),
    },
    {
        path: '/releases/:release?/editview/:editview?',
        meta: {
            caption: 'entities.release.views.editview.caption',
            parameters: [
                { pathName: 'releases', parameterName: 'release' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/release-edit-view/release-edit-view.vue'),
    },
    {
        path: '/products/:product?/stories/:story?/maingridview/:maingridview?',
        meta: {
            caption: 'entities.story.views.maingridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'maingridview', parameterName: 'maingridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-grid-view/story-main-grid-view.vue'),
    },
    {
        path: '/stories/:story?/maingridview/:maingridview?',
        meta: {
            caption: 'entities.story.views.maingridview.caption',
            parameters: [
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'maingridview', parameterName: 'maingridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main-grid-view/story-main-grid-view.vue'),
    },
    {
        path: '/productportalview/:productportalview?',
        meta: {
            caption: 'app.views.productportalview.caption',
            parameters: [
                { pathName: 'productportalview', parameterName: 'productportalview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-portal-view/product-portal-view.vue'),
    },
    {
        path: '/projects/:project?/tasks/:task?/maingridview/:maingridview?',
        meta: {
            caption: 'entities.task.views.maingridview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maingridview', parameterName: 'maingridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-grid-view/task-main-grid-view.vue'),
    },
    {
        path: '/tasks/:task?/maingridview/:maingridview?',
        meta: {
            caption: 'entities.task.views.maingridview.caption',
            parameters: [
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maingridview', parameterName: 'maingridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-grid-view/task-main-grid-view.vue'),
    },
    {
        path: '/products/:product?/productplans/:productplan?/editview/:editview?',
        meta: {
            caption: 'entities.productplan.views.editview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-plan-edit-view/product-plan-edit-view.vue'),
    },
    {
        path: '/productplans/:productplan?/editview/:editview?',
        meta: {
            caption: 'entities.productplan.views.editview.caption',
            parameters: [
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-plan-edit-view/product-plan-edit-view.vue'),
    },
    {
        path: '/products/:product?/testtasks/:testtask?/gridview/:gridview?',
        meta: {
            caption: 'entities.testtask.views.gridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'testtasks', parameterName: 'testtask' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/test-task-grid-view/test-task-grid-view.vue'),
    },
    {
        path: '/testtasks/:testtask?/gridview/:gridview?',
        meta: {
            caption: 'entities.testtask.views.gridview.caption',
            parameters: [
                { pathName: 'testtasks', parameterName: 'testtask' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/test-task-grid-view/test-task-grid-view.vue'),
    },
    {
        path: '/products/:product?/dashboardinfomainview9/:dashboardinfomainview9?',
        meta: {
            caption: 'entities.product.views.dashboardinfomainview9.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'dashboardinfomainview9', parameterName: 'dashboardinfomainview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-dashboard-info-main-view9/product-dashboard-info-main-view9.vue'),
    },
    {
        path: '/products/:product?/stories/:story?/plansubgridview/:plansubgridview?',
        meta: {
            caption: 'entities.story.views.plansubgridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-plan-sub-grid-view/story-plan-sub-grid-view.vue'),
    },
    {
        path: '/stories/:story?/plansubgridview/:plansubgridview?',
        meta: {
            caption: 'entities.story.views.plansubgridview.caption',
            parameters: [
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-plan-sub-grid-view/story-plan-sub-grid-view.vue'),
    },
    {
        path: '/products/:product?/maindashboardview/:maindashboardview?',
        meta: {
            caption: 'entities.product.views.maindashboardview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-main-dashboard-view/product-main-dashboard-view.vue'),
    },
    {
        path: '/modules/:module?/pickupgridview/:pickupgridview?',
        meta: {
            caption: 'entities.module.views.pickupgridview.caption',
            parameters: [
                { pathName: 'modules', parameterName: 'module' },
                { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/module-pickup-grid-view/module-pickup-grid-view.vue'),
    },
    {
        path: '/products/:product?/productplans/:productplan?/bugs/:bug?/gridview/:gridview?',
        meta: {
            caption: 'entities.bug.views.gridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
    },
    {
        path: '/productplans/:productplan?/bugs/:bug?/gridview/:gridview?',
        meta: {
            caption: 'entities.bug.views.gridview.caption',
            parameters: [
                { pathName: 'productplans', parameterName: 'productplan' },
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
    },
    {
        path: '/products/:product?/bugs/:bug?/gridview/:gridview?',
        meta: {
            caption: 'entities.bug.views.gridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
    },
    {
        path: '/bugs/:bug?/gridview/:gridview?',
        meta: {
            caption: 'entities.bug.views.gridview.caption',
            parameters: [
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
    },
    {
        path: '/modules/:module?/pickupview/:pickupview?',
        meta: {
            caption: 'entities.module.views.pickupview.caption',
            parameters: [
                { pathName: 'modules', parameterName: 'module' },
                { pathName: 'pickupview', parameterName: 'pickupview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/module-pickup-view/module-pickup-view.vue'),
    },
    {
        path: '/projects/:project?/projectproducts/:projectproduct?/listview9/:listview9?',
        meta: {
            caption: 'entities.projectproduct.views.listview9.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'projectproducts', parameterName: 'projectproduct' },
                { pathName: 'listview9', parameterName: 'listview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-product-list-view9/project-product-list-view9.vue'),
    },
    {
        path: '/products/:product?/projectproducts/:projectproduct?/listview9/:listview9?',
        meta: {
            caption: 'entities.projectproduct.views.listview9.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'projectproducts', parameterName: 'projectproduct' },
                { pathName: 'listview9', parameterName: 'listview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-product-list-view9/project-product-list-view9.vue'),
    },
    {
        path: '/projectproducts/:projectproduct?/listview9/:listview9?',
        meta: {
            caption: 'entities.projectproduct.views.listview9.caption',
            parameters: [
                { pathName: 'projectproducts', parameterName: 'projectproduct' },
                { pathName: 'listview9', parameterName: 'listview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-product-list-view9/project-product-list-view9.vue'),
    },
    {
        path: '/storyspecs/:storyspec?/mainview9/:mainview9?',
        meta: {
            caption: 'entities.storyspec.views.mainview9.caption',
            parameters: [
                { pathName: 'storyspecs', parameterName: 'storyspec' },
                { pathName: 'mainview9', parameterName: 'mainview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-spec-main-view9/story-spec-main-view9.vue'),
    },
    {
        path: '/products/:product?/branches/:branch?/pmeditview/:pmeditview?',
        meta: {
            caption: 'entities.branch.views.pmeditview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'branches', parameterName: 'branch' },
                { pathName: 'pmeditview', parameterName: 'pmeditview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/branch-pmedit-view/branch-pmedit-view.vue'),
    },
    {
        path: '/branches/:branch?/pmeditview/:pmeditview?',
        meta: {
            caption: 'entities.branch.views.pmeditview.caption',
            parameters: [
                { pathName: 'branches', parameterName: 'branch' },
                { pathName: 'pmeditview', parameterName: 'pmeditview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/branch-pmedit-view/branch-pmedit-view.vue'),
    },
    {
        path: '/products/:product?/stories/:story?/main2gridview/:main2gridview?',
        meta: {
            caption: 'entities.story.views.main2gridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'main2gridview', parameterName: 'main2gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main2-grid-view/story-main2-grid-view.vue'),
    },
    {
        path: '/stories/:story?/main2gridview/:main2gridview?',
        meta: {
            caption: 'entities.story.views.main2gridview.caption',
            parameters: [
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'main2gridview', parameterName: 'main2gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/story-main2-grid-view/story-main2-grid-view.vue'),
    },
    {
        path: '/products/:product?/editview/:editview?',
        meta: {
            caption: 'entities.product.views.editview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-edit-view/product-edit-view.vue'),
    },
    {
        path: '/products/:product?/listexpview/:listexpview?',
        meta: {
            caption: 'entities.product.views.listexpview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'listexpview', parameterName: 'listexpview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-list-exp-view/product-list-exp-view.vue'),
    },
    {
        path: '/projects/:project?/tasks/:task?/editview/:editview?',
        meta: {
            caption: 'entities.task.views.editview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-edit-view/task-edit-view.vue'),
    },
    {
        path: '/tasks/:task?/editview/:editview?',
        meta: {
            caption: 'entities.task.views.editview.caption',
            parameters: [
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-edit-view/task-edit-view.vue'),
    },
    {
        path: '/projects/:project?/dashboardinfoview/:dashboardinfoview?',
        meta: {
            caption: 'entities.project.views.dashboardinfoview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'dashboardinfoview', parameterName: 'dashboardinfoview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-dashboard-info-view/project-dashboard-info-view.vue'),
    },
    {
        path: '/projects/:project?/tasks/:task?/maindetailview9/:maindetailview9?',
        meta: {
            caption: 'entities.task.views.maindetailview9.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maindetailview9', parameterName: 'maindetailview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-detail-view9/task-main-detail-view9.vue'),
    },
    {
        path: '/tasks/:task?/maindetailview9/:maindetailview9?',
        meta: {
            caption: 'entities.task.views.maindetailview9.caption',
            parameters: [
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maindetailview9', parameterName: 'maindetailview9' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/task-main-detail-view9/task-main-detail-view9.vue'),
    },
    {
        path: '/products/:product?/cases/:case?/gridview/:gridview?',
        meta: {
            caption: 'entities.case.views.gridview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'cases', parameterName: 'case' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/case-grid-view/case-grid-view.vue'),
    },
    {
        path: '/cases/:case?/gridview/:gridview?',
        meta: {
            caption: 'entities.case.views.gridview.caption',
            parameters: [
                { pathName: 'cases', parameterName: 'case' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/case-grid-view/case-grid-view.vue'),
    },
    {
        path: '/products/:product?/bugtreeexpview/:bugtreeexpview?',
        meta: {
            caption: 'entities.product.views.bugtreeexpview.caption',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'bugtreeexpview', parameterName: 'bugtreeexpview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/product-bug-tree-exp-view/product-bug-tree-exp-view.vue'),
    },
    {
        path: '/actions/:action?/producttrendslistview/:producttrendslistview?',
        meta: {
            caption: 'entities.action.views.producttrendslistview.caption',
            parameters: [
                { pathName: 'actions', parameterName: 'action' },
                { pathName: 'producttrendslistview', parameterName: 'producttrendslistview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/action-product-trends-list-view/action-product-trends-list-view.vue'),
    },
    {
        path: '/projects/:project?/editview/:editview?',
        meta: {
            caption: 'entities.project.views.editview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-edit-view/project-edit-view.vue'),
    },
    {
        path: '/actions/:action?/editview/:editview?',
        meta: {
            caption: 'entities.action.views.editview.caption',
            parameters: [
                { pathName: 'actions', parameterName: 'action' },
                { pathName: 'editview', parameterName: 'editview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/action-edit-view/action-edit-view.vue'),
    },
    {
        path: '/projects/:project?/maintabexpview/:maintabexpview?',
        meta: {
            caption: 'entities.project.views.maintabexpview.caption',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
            ],
            requireAuth: true,
        },
        component: () => import('@pages/zentao/project-main-tab-exp-view/project-main-tab-exp-view.vue'),
    },
        ...globalRoutes,
        {
            path: '/login/:login?',
            name: 'login',
            meta: {  
                caption: '登录',
                viewType: 'login',
                requireAuth: false,
                ignoreAddPage: true,
            },
            beforeEnter: (to: any, from: any, next: any) => {
                router.app.$store.commit('resetRootStateData');
                next();
            },
            component: () => import('@components/login/login.vue'),
        },
        {
            path: '/404',
            component: () => import('@components/404/404.vue')
        },
        {
            path: '/500',
            component: () => import('@components/500/500.vue')
        },
        {
            path: '*',
            redirect: 'ibizpms'
        },
    ],
});

export default router;
