import Vue from 'vue';
import Router from 'vue-router';
import { AuthGuard } from '@/utils';
import qs from 'qs';
import { globalRoutes, indexRoutes} from '@/router'
import { AppService } from '@/studio-core/service/app-service/AppService';

Vue.use(Router);

const appService = new AppService();

const router = new Router({
    routes: [
        {
            path: '/ibizpms/:ibizpms?',
            beforeEnter: async (to: any, from: any, next: any) => {
                const routerParamsName = 'ibizpms';
                const params: any = {};
                if (to.params && to.params[routerParamsName]) {
                    params[routerParamsName] = to.params[routerParamsName];
                }
                const url: string = '/appdata';
                await AuthGuard.getInstance().authGuard(url, params, router);
                appService.navHistory.indexMeta = {
                    caption: 'app.views.ibizpms.title',
                    info:'',
                    viewType: 'APPINDEX',
                    parameters: [
                        { pathName: 'ibizpms', parameterName: 'ibizpms' },
                    ],
                    requireAuth: true,
                };
                next();
            },
            meta: {  
                caption: 'app.views.ibizpms.title',
                info:'',
                viewType: 'APPINDEX',
                parameters: [
                    { pathName: 'ibizpms', parameterName: 'ibizpms' },
                ],
                requireAuth: true,
            },
            component: () => import('@pages/zentao/i-biz-pms/i-biz-pms.vue'),
            children: [
                {
                    path: 'products/:product?/stories/:story?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.story.views.maingridview.title',
                        info:'',
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
                        caption: 'entities.story.views.maingridview.title',
                        info:'',
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
                    path: 'todos/:todo?/editview/:editview?',
                    meta: {
                        caption: 'entities.todo.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/todo-edit-view/todo-edit-view.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/tabexpview/:tabexpview?',
                    meta: {
                        caption: 'entities.ibzlib.views.tabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'tabexpview', parameterName: 'tabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-tab-exp-view/ibz-lib-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.case.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-edit-view/case-main-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.case.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-edit-view/case-main-edit-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.case.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-edit-view/case-main-edit-view.vue'),
                },
                {
                    path: 'cases/:case?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.case.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-edit-view/case-main-edit-view.vue'),
                },
                {
                    path: 'todos/:todo?/baseeditview9/:baseeditview9?',
                    meta: {
                        caption: 'entities.todo.views.baseeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'baseeditview9', parameterName: 'baseeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/todo-base-edit-view9/todo-base-edit-view9.vue'),
                },
                {
                    path: 'depts/:dept?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.dept.views.pickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'depts', parameterName: 'dept' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/dept-pickup-grid-view/dept-pickup-grid-view.vue'),
                },
                {
                    path: 'products/:product?/mytesttabexpview/:mytesttabexpview?',
                    meta: {
                        caption: 'entities.product.views.mytesttabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'mytesttabexpview', parameterName: 'mytesttabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-my-test-tab-exp-view/product-my-test-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mainview9/:mainview9?',
                    meta: {
                        caption: 'entities.story.views.mainview9.title',
                        info:'',
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
                        caption: 'entities.story.views.mainview9.title',
                        info:'',
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
                        caption: 'entities.product.views.dashboardinfomainview9.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/pickupgridview4/:pickupgridview4?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview4', parameterName: 'pickupgridview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view4/bug-pickup-grid-view4.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/pickupgridview4/:pickupgridview4?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview4', parameterName: 'pickupgridview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view4/bug-pickup-grid-view4.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/pickupgridview4/:pickupgridview4?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview4', parameterName: 'pickupgridview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view4/bug-pickup-grid-view4.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/pickupgridview4/:pickupgridview4?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview4', parameterName: 'pickupgridview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view4/bug-pickup-grid-view4.vue'),
                },
                {
                    path: 'bugs/:bug?/pickupgridview4/:pickupgridview4?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview4', parameterName: 'pickupgridview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view4/bug-pickup-grid-view4.vue'),
                },
                {
                    path: 'products/:product?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.product.views.pickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-pickup-grid-view/product-pickup-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-story-related/bug-grid-view9-story-related.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-story-related/bug-grid-view9-story-related.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-story-related/bug-grid-view9-story-related.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-story-related/bug-grid-view9-story-related.vue'),
                },
                {
                    path: 'bugs/:bug?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-story-related/bug-grid-view9-story-related.vue'),
                },
                {
                    path: 'actions/:action?/projecttrendslistview/:projecttrendslistview?',
                    meta: {
                        caption: 'entities.action.views.projecttrendslistview.title',
                        info:'',
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
                    path: 'ibzlibs/:ibzlib?/ibzlibmodules/:ibzlibmodule?/editview/:editview?',
                    meta: {
                        caption: 'entities.ibzlibmodule.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzlibmodules', parameterName: 'ibzlibmodule' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-module-edit-view/ibz-lib-module-edit-view.vue'),
                },
                {
                    path: 'ibzlibmodules/:ibzlibmodule?/editview/:editview?',
                    meta: {
                        caption: 'entities.ibzlibmodule.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibmodules', parameterName: 'ibzlibmodule' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-module-edit-view/ibz-lib-module-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view/bug-pickup-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view/bug-pickup-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view/bug-pickup-grid-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view/bug-pickup-grid-view.vue'),
                },
                {
                    path: 'bugs/:bug?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view/bug-pickup-grid-view.vue'),
                },
                {
                    path: 'productstats/:productstats?/testeditview9/:testeditview9?',
                    meta: {
                        caption: 'entities.productstats.views.testeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productstats', parameterName: 'productstats' },
                            { pathName: 'testeditview9', parameterName: 'testeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-stats-test-edit-view9/product-stats-test-edit-view9.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzcases/:ibzcase?/infoeditview9/:infoeditview9?',
                    meta: {
                        caption: 'entities.ibzcase.views.infoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'infoeditview9', parameterName: 'infoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-info-edit-view9/ibz-case-info-edit-view9.vue'),
                },
                {
                    path: 'ibzcases/:ibzcase?/infoeditview9/:infoeditview9?',
                    meta: {
                        caption: 'entities.ibzcase.views.infoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'infoeditview9', parameterName: 'infoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-info-edit-view9/ibz-case-info-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/leftsidebarlistview/:leftsidebarlistview?',
                    meta: {
                        caption: 'entities.product.views.leftsidebarlistview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/cases/:case?/testoptionview/:testoptionview?',
                    meta: {
                        caption: 'entities.case.views.testoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testoptionview', parameterName: 'testoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-option-view/case-test-option-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/testoptionview/:testoptionview?',
                    meta: {
                        caption: 'entities.case.views.testoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testoptionview', parameterName: 'testoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-option-view/case-test-option-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/testoptionview/:testoptionview?',
                    meta: {
                        caption: 'entities.case.views.testoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testoptionview', parameterName: 'testoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-option-view/case-test-option-view.vue'),
                },
                {
                    path: 'cases/:case?/testoptionview/:testoptionview?',
                    meta: {
                        caption: 'entities.case.views.testoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testoptionview', parameterName: 'testoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-option-view/case-test-option-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/opentaskview/:opentaskview?',
                    meta: {
                        caption: 'entities.task.views.opentaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'opentaskview', parameterName: 'opentaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-open-task-view/task-open-task-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/opentaskview/:opentaskview?',
                    meta: {
                        caption: 'entities.task.views.opentaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'opentaskview', parameterName: 'opentaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-open-task-view/task-open-task-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/opentaskview/:opentaskview?',
                    meta: {
                        caption: 'entities.task.views.opentaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'opentaskview', parameterName: 'opentaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-open-task-view/task-open-task-view.vue'),
                },
                {
                    path: 'tasks/:task?/opentaskview/:opentaskview?',
                    meta: {
                        caption: 'entities.task.views.opentaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'opentaskview', parameterName: 'opentaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-open-task-view/task-open-task-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/kanbanview/:kanbanview?',
                    meta: {
                        caption: 'entities.story.views.kanbanview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'kanbanview', parameterName: 'kanbanview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-kanban-view/story-kanban-view.vue'),
                },
                {
                    path: 'stories/:story?/kanbanview/:kanbanview?',
                    meta: {
                        caption: 'entities.story.views.kanbanview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'kanbanview', parameterName: 'kanbanview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-kanban-view/story-kanban-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/projectgridview9/:projectgridview9?',
                    meta: {
                        caption: 'entities.productplan.views.projectgridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'projectgridview9', parameterName: 'projectgridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-project-grid-view9/product-plan-project-grid-view9.vue'),
                },
                {
                    path: 'productplans/:productplan?/projectgridview9/:projectgridview9?',
                    meta: {
                        caption: 'entities.productplan.views.projectgridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'projectgridview9', parameterName: 'projectgridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-project-grid-view9/product-plan-project-grid-view9.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.testtask.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-main-dashboard-view/test-task-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.testtask.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-main-dashboard-view/test-task-main-dashboard-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.testtask.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-main-dashboard-view/test-task-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/storytreeexpview/:storytreeexpview?',
                    meta: {
                        caption: 'entities.product.views.storytreeexpview.title',
                        info:'',
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
                    path: 'users/:user?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.user.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'users', parameterName: 'user' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/user-main-grid-view/user-main-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.project.views.maintabexpview.title',
                        info:'',
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
                    path: 'modules/:module?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.module.views.pickupgridview.title',
                        info:'',
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
                    path: 'products/:product?/productplans/:productplan?/subproductplans/:subproductplan?/subplangridview/:subplangridview?',
                    meta: {
                        caption: 'entities.subproductplan.views.subplangridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'subproductplans', parameterName: 'subproductplan' },
                            { pathName: 'subplangridview', parameterName: 'subplangridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-sub-plan-grid-view/product-plan-sub-plan-grid-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/subproductplans/:subproductplan?/subplangridview/:subplangridview?',
                    meta: {
                        caption: 'entities.subproductplan.views.subplangridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'subproductplans', parameterName: 'subproductplan' },
                            { pathName: 'subplangridview', parameterName: 'subplangridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-sub-plan-grid-view/product-plan-sub-plan-grid-view.vue'),
                },
                {
                    path: 'subproductplans/:subproductplan?/subplangridview/:subplangridview?',
                    meta: {
                        caption: 'entities.subproductplan.views.subplangridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'subproductplans', parameterName: 'subproductplan' },
                            { pathName: 'subplangridview', parameterName: 'subplangridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-sub-plan-grid-view/product-plan-sub-plan-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/assigntaskview/:assigntaskview?',
                    meta: {
                        caption: 'entities.task.views.assigntaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'assigntaskview', parameterName: 'assigntaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-assign-task-view/task-assign-task-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/assigntaskview/:assigntaskview?',
                    meta: {
                        caption: 'entities.task.views.assigntaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'assigntaskview', parameterName: 'assigntaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-assign-task-view/task-assign-task-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/assigntaskview/:assigntaskview?',
                    meta: {
                        caption: 'entities.task.views.assigntaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'assigntaskview', parameterName: 'assigntaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-assign-task-view/task-assign-task-view.vue'),
                },
                {
                    path: 'tasks/:task?/assigntaskview/:assigntaskview?',
                    meta: {
                        caption: 'entities.task.views.assigntaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'assigntaskview', parameterName: 'assigntaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-assign-task-view/task-assign-task-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/gridview9_child/:gridview9_child?',
                    meta: {
                        caption: 'entities.story.views.gridview9_child.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'gridview9_child', parameterName: 'gridview9_child' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-grid-view9-child/story-grid-view9-child.vue'),
                },
                {
                    path: 'stories/:story?/gridview9_child/:gridview9_child?',
                    meta: {
                        caption: 'entities.story.views.gridview9_child.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'gridview9_child', parameterName: 'gridview9_child' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-grid-view9-child/story-grid-view9-child.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/projectgridview/:projectgridview?',
                    meta: {
                        caption: 'entities.testtask.views.projectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'projectgridview', parameterName: 'projectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-project-grid-view/test-task-project-grid-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/projectgridview/:projectgridview?',
                    meta: {
                        caption: 'entities.testtask.views.projectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'projectgridview', parameterName: 'projectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-project-grid-view/test-task-project-grid-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/projectgridview/:projectgridview?',
                    meta: {
                        caption: 'entities.testtask.views.projectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'projectgridview', parameterName: 'projectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-project-grid-view/test-task-project-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/ibztaskteams/:ibztaskteam?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9/task-team-grid-view9.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/ibztaskteams/:ibztaskteam?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9/task-team-grid-view9.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/ibztaskteams/:ibztaskteam?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9/task-team-grid-view9.vue'),
                },
                {
                    path: 'tasks/:task?/ibztaskteams/:ibztaskteam?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9/task-team-grid-view9.vue'),
                },
                {
                    path: 'ibztaskteams/:ibztaskteam?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9/task-team-grid-view9.vue'),
                },
                {
                    path: 'users/:user?/editview/:editview?',
                    meta: {
                        caption: 'entities.user.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'users', parameterName: 'user' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/user-edit-view/user-edit-view.vue'),
                },
                {
                    path: 'productportalview/:productportalview?',
                    meta: {
                        caption: 'app.views.productportalview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productportalview', parameterName: 'productportalview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-portal-view/product-portal-view.vue'),
                },
                {
                    path: 'projects/:project?/projectteams/:projectteam?/maingridview_editrow/:maingridview_editrow?',
                    meta: {
                        caption: 'entities.projectteam.views.maingridview_editrow.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectteams', parameterName: 'projectteam' },
                            { pathName: 'maingridview_editrow', parameterName: 'maingridview_editrow' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-team-main-grid-view-edit-row/project-team-main-grid-view-edit-row.vue'),
                },
                {
                    path: 'projectteams/:projectteam?/maingridview_editrow/:maingridview_editrow?',
                    meta: {
                        caption: 'entities.projectteam.views.maingridview_editrow.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectteams', parameterName: 'projectteam' },
                            { pathName: 'maingridview_editrow', parameterName: 'maingridview_editrow' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-team-main-grid-view-edit-row/project-team-main-grid-view-edit-row.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzcases/:ibzcase?/maineditview9/:maineditview9?',
                    meta: {
                        caption: 'entities.ibzcase.views.maineditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'maineditview9', parameterName: 'maineditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-main-edit-view9/ibz-case-main-edit-view9.vue'),
                },
                {
                    path: 'ibzcases/:ibzcase?/maineditview9/:maineditview9?',
                    meta: {
                        caption: 'entities.ibzcase.views.maineditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'maineditview9', parameterName: 'maineditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-main-edit-view9/ibz-case-main-edit-view9.vue'),
                },
                {
                    path: 'actions/:action?/producttrendslistview/:producttrendslistview?',
                    meta: {
                        caption: 'entities.action.views.producttrendslistview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/pickupgridview3/:pickupgridview3?',
                    meta: {
                        caption: 'entities.story.views.pickupgridview3.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'pickupgridview3', parameterName: 'pickupgridview3' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-pickup-grid-view3/story-pickup-grid-view3.vue'),
                },
                {
                    path: 'stories/:story?/pickupgridview3/:pickupgridview3?',
                    meta: {
                        caption: 'entities.story.views.pickupgridview3.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'pickupgridview3', parameterName: 'pickupgridview3' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-pickup-grid-view3/story-pickup-grid-view3.vue'),
                },
                {
                    path: 'productstats/:productstats?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.productstats.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productstats', parameterName: 'productstats' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-stats-edit-view9/product-stats-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/mainnewview/:mainnewview?',
                    meta: {
                        caption: 'entities.case.views.mainnewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainnewview', parameterName: 'mainnewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-new-view/case-main-new-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/mainnewview/:mainnewview?',
                    meta: {
                        caption: 'entities.case.views.mainnewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainnewview', parameterName: 'mainnewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-new-view/case-main-new-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/mainnewview/:mainnewview?',
                    meta: {
                        caption: 'entities.case.views.mainnewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainnewview', parameterName: 'mainnewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-new-view/case-main-new-view.vue'),
                },
                {
                    path: 'cases/:case?/mainnewview/:mainnewview?',
                    meta: {
                        caption: 'entities.case.views.mainnewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainnewview', parameterName: 'mainnewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-new-view/case-main-new-view.vue'),
                },
                {
                    path: 'projects/:project?/editview_suspend/:editview_suspend?',
                    meta: {
                        caption: 'entities.project.views.editview_suspend.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'editview_suspend', parameterName: 'editview_suspend' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-edit-view-suspend/project-edit-view-suspend.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/ibztaskteams/:ibztaskteam?/gridview9_edit/:gridview9_edit?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9_edit', parameterName: 'gridview9_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-edit/task-team-grid-view9-edit.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/ibztaskteams/:ibztaskteam?/gridview9_edit/:gridview9_edit?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9_edit', parameterName: 'gridview9_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-edit/task-team-grid-view9-edit.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/ibztaskteams/:ibztaskteam?/gridview9_edit/:gridview9_edit?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9_edit', parameterName: 'gridview9_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-edit/task-team-grid-view9-edit.vue'),
                },
                {
                    path: 'tasks/:task?/ibztaskteams/:ibztaskteam?/gridview9_edit/:gridview9_edit?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9_edit', parameterName: 'gridview9_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-edit/task-team-grid-view9-edit.vue'),
                },
                {
                    path: 'ibztaskteams/:ibztaskteam?/gridview9_edit/:gridview9_edit?',
                    meta: {
                        caption: 'entities.ibztaskteam.views.gridview9_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'gridview9_edit', parameterName: 'gridview9_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-edit/task-team-grid-view9-edit.vue'),
                },
                {
                    path: 'projects/:project?/builds/:build?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.build.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-main-tab-exp-view/build-main-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/builds/:build?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.build.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-main-tab-exp-view/build-main-tab-exp-view.vue'),
                },
                {
                    path: 'builds/:build?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.build.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-main-tab-exp-view/build-main-tab-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/editview/:editview?',
                    meta: {
                        caption: 'entities.testtask.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view/test-task-edit-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/editview/:editview?',
                    meta: {
                        caption: 'entities.testtask.views.editview.title',
                        info:'',
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
                        caption: 'entities.testtask.views.editview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/mpickupview3/:mpickupview3?',
                    meta: {
                        caption: 'entities.story.views.mpickupview3.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mpickupview3', parameterName: 'mpickupview3' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-mpickup-view3/story-mpickup-view3.vue'),
                },
                {
                    path: 'stories/:story?/mpickupview3/:mpickupview3?',
                    meta: {
                        caption: 'entities.story.views.mpickupview3.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mpickupview3', parameterName: 'mpickupview3' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-mpickup-view3/story-mpickup-view3.vue'),
                },
                {
                    path: 'todos/:todo?/assigntoview/:assigntoview?',
                    meta: {
                        caption: 'entities.todo.views.assigntoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'assigntoview', parameterName: 'assigntoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/todo-assign-to-view/todo-assign-to-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/workinfoeditview9/:workinfoeditview9?',
                    meta: {
                        caption: 'entities.task.views.workinfoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'workinfoeditview9', parameterName: 'workinfoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-work-info-edit-view9/task-work-info-edit-view9.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/workinfoeditview9/:workinfoeditview9?',
                    meta: {
                        caption: 'entities.task.views.workinfoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'workinfoeditview9', parameterName: 'workinfoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-work-info-edit-view9/task-work-info-edit-view9.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/workinfoeditview9/:workinfoeditview9?',
                    meta: {
                        caption: 'entities.task.views.workinfoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'workinfoeditview9', parameterName: 'workinfoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-work-info-edit-view9/task-work-info-edit-view9.vue'),
                },
                {
                    path: 'tasks/:task?/workinfoeditview9/:workinfoeditview9?',
                    meta: {
                        caption: 'entities.task.views.workinfoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'workinfoeditview9', parameterName: 'workinfoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-work-info-edit-view9/task-work-info-edit-view9.vue'),
                },
                {
                    path: 'testsuites/:testsuite?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.testsuite.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testsuites', parameterName: 'testsuite' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-suite-edit-view9/test-suite-edit-view9.vue'),
                },
                {
                    path: 'projects/:project?/builds/:build?/editview/:editview?',
                    meta: {
                        caption: 'entities.build.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-edit-view/build-edit-view.vue'),
                },
                {
                    path: 'products/:product?/builds/:build?/editview/:editview?',
                    meta: {
                        caption: 'entities.build.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-edit-view/build-edit-view.vue'),
                },
                {
                    path: 'builds/:build?/editview/:editview?',
                    meta: {
                        caption: 'entities.build.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-edit-view/build-edit-view.vue'),
                },
                {
                    path: 'files/:file?/listview9/:listview9?',
                    meta: {
                        caption: 'entities.file.views.listview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'files', parameterName: 'file' },
                            { pathName: 'listview9', parameterName: 'listview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/file-list-view9/file-list-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.bug.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-dashboard-view/bug-main-dashboard-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.bug.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-dashboard-view/bug-main-dashboard-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.bug.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-dashboard-view/bug-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.bug.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-dashboard-view/bug-main-dashboard-view.vue'),
                },
                {
                    path: 'bugs/:bug?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.bug.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-dashboard-view/bug-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/buildsubgridview/:buildsubgridview?',
                    meta: {
                        caption: 'entities.story.views.buildsubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'buildsubgridview', parameterName: 'buildsubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-build-sub-grid-view/story-build-sub-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/buildsubgridview/:buildsubgridview?',
                    meta: {
                        caption: 'entities.story.views.buildsubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'buildsubgridview', parameterName: 'buildsubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-build-sub-grid-view/story-build-sub-grid-view.vue'),
                },
                {
                    path: 'ibzmyterritories/:ibzmyterritory?/listview9/:listview9?',
                    meta: {
                        caption: 'entities.ibzmyterritory.views.listview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                            { pathName: 'listview9', parameterName: 'listview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-my-territory-list-view9/ibz-my-territory-list-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/pausetaskview/:pausetaskview?',
                    meta: {
                        caption: 'entities.task.views.pausetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'pausetaskview', parameterName: 'pausetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-pause-task-view/task-pause-task-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/pausetaskview/:pausetaskview?',
                    meta: {
                        caption: 'entities.task.views.pausetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'pausetaskview', parameterName: 'pausetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-pause-task-view/task-pause-task-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/pausetaskview/:pausetaskview?',
                    meta: {
                        caption: 'entities.task.views.pausetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'pausetaskview', parameterName: 'pausetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-pause-task-view/task-pause-task-view.vue'),
                },
                {
                    path: 'tasks/:task?/pausetaskview/:pausetaskview?',
                    meta: {
                        caption: 'entities.task.views.pausetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'pausetaskview', parameterName: 'pausetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-pause-task-view/task-pause-task-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/activationview/:activationview?',
                    meta: {
                        caption: 'entities.bug.views.activationview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'activationview', parameterName: 'activationview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-activation-view/bug-activation-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/activationview/:activationview?',
                    meta: {
                        caption: 'entities.bug.views.activationview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'activationview', parameterName: 'activationview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-activation-view/bug-activation-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/activationview/:activationview?',
                    meta: {
                        caption: 'entities.bug.views.activationview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'activationview', parameterName: 'activationview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-activation-view/bug-activation-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/activationview/:activationview?',
                    meta: {
                        caption: 'entities.bug.views.activationview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'activationview', parameterName: 'activationview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-activation-view/bug-activation-view.vue'),
                },
                {
                    path: 'bugs/:bug?/activationview/:activationview?',
                    meta: {
                        caption: 'entities.bug.views.activationview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'activationview', parameterName: 'activationview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-activation-view/bug-activation-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/mpickupview/:mpickupview?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview', parameterName: 'mpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view/bug-mpickup-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/mpickupview/:mpickupview?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview', parameterName: 'mpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view/bug-mpickup-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/mpickupview/:mpickupview?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview', parameterName: 'mpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view/bug-mpickup-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/mpickupview/:mpickupview?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview', parameterName: 'mpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view/bug-mpickup-view.vue'),
                },
                {
                    path: 'bugs/:bug?/mpickupview/:mpickupview?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview', parameterName: 'mpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view/bug-mpickup-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.bug.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.bug.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view/bug-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.bug.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.bug.views.gridview.title',
                        info:'',
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
                        caption: 'entities.bug.views.gridview.title',
                        info:'',
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
                    path: 'projectstats/:projectstats?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.projectstats.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectstats', parameterName: 'projectstats' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-stats-grid-view9/project-stats-grid-view9.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/subproductplans/:subproductplan?/subplaneditview/:subplaneditview?',
                    meta: {
                        caption: 'entities.subproductplan.views.subplaneditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'subproductplans', parameterName: 'subproductplan' },
                            { pathName: 'subplaneditview', parameterName: 'subplaneditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-sub-plan-edit-view/product-plan-sub-plan-edit-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/subproductplans/:subproductplan?/subplaneditview/:subplaneditview?',
                    meta: {
                        caption: 'entities.subproductplan.views.subplaneditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'subproductplans', parameterName: 'subproductplan' },
                            { pathName: 'subplaneditview', parameterName: 'subplaneditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-sub-plan-edit-view/product-plan-sub-plan-edit-view.vue'),
                },
                {
                    path: 'subproductplans/:subproductplan?/subplaneditview/:subplaneditview?',
                    meta: {
                        caption: 'entities.subproductplan.views.subplaneditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'subproductplans', parameterName: 'subproductplan' },
                            { pathName: 'subplaneditview', parameterName: 'subplaneditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-sub-plan-edit-view/product-plan-sub-plan-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mainview/:mainview?',
                    meta: {
                        caption: 'entities.story.views.mainview.title',
                        info:'',
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
                        caption: 'entities.story.views.mainview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview', parameterName: 'mainview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view/story-main-view.vue'),
                },
                {
                    path: 'productlives/:productlife?/roadmapslistview9/:roadmapslistview9?',
                    meta: {
                        caption: 'entities.productlife.views.roadmapslistview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productlives', parameterName: 'productlife' },
                            { pathName: 'roadmapslistview9', parameterName: 'roadmapslistview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-life-road-map-slist-view9/product-life-road-map-slist-view9.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzcases/:ibzcase?/ibzlibcasesteptmps/:ibzlibcasesteptmp?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibzlibcasesteptmp.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'ibzlibcasesteptmps', parameterName: 'ibzlibcasesteptmp' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-case-steps-grid-view9/ibz-lib-case-steps-grid-view9.vue'),
                },
                {
                    path: 'ibzcases/:ibzcase?/ibzlibcasesteptmps/:ibzlibcasesteptmp?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibzlibcasesteptmp.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'ibzlibcasesteptmps', parameterName: 'ibzlibcasesteptmp' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-case-steps-grid-view9/ibz-lib-case-steps-grid-view9.vue'),
                },
                {
                    path: 'ibzlibcasesteptmps/:ibzlibcasesteptmp?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibzlibcasesteptmp.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibcasesteptmps', parameterName: 'ibzlibcasesteptmp' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-case-steps-grid-view9/ibz-lib-case-steps-grid-view9.vue'),
                },
                {
                    path: 'products/:product?/testreports/:testreport?/editview/:editview?',
                    meta: {
                        caption: 'entities.testreport.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-edit-view/test-report-edit-view.vue'),
                },
                {
                    path: 'testreports/:testreport?/editview/:editview?',
                    meta: {
                        caption: 'entities.testreport.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-edit-view/test-report-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/casesteps/:casestep?/maingridview9/:maingridview9?',
                    meta: {
                        caption: 'entities.casestep.views.maingridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'maingridview9', parameterName: 'maingridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9/case-step-main-grid-view9.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/casesteps/:casestep?/maingridview9/:maingridview9?',
                    meta: {
                        caption: 'entities.casestep.views.maingridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'maingridview9', parameterName: 'maingridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9/case-step-main-grid-view9.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/casesteps/:casestep?/maingridview9/:maingridview9?',
                    meta: {
                        caption: 'entities.casestep.views.maingridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'maingridview9', parameterName: 'maingridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9/case-step-main-grid-view9.vue'),
                },
                {
                    path: 'cases/:case?/casesteps/:casestep?/maingridview9/:maingridview9?',
                    meta: {
                        caption: 'entities.casestep.views.maingridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'maingridview9', parameterName: 'maingridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9/case-step-main-grid-view9.vue'),
                },
                {
                    path: 'casesteps/:casestep?/maingridview9/:maingridview9?',
                    meta: {
                        caption: 'entities.casestep.views.maingridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'maingridview9', parameterName: 'maingridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9/case-step-main-grid-view9.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/quickcreateview/:quickcreateview?',
                    meta: {
                        caption: 'entities.release.views.quickcreateview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'quickcreateview', parameterName: 'quickcreateview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-quick-create-view/release-quick-create-view.vue'),
                },
                {
                    path: 'releases/:release?/quickcreateview/:quickcreateview?',
                    meta: {
                        caption: 'entities.release.views.quickcreateview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'quickcreateview', parameterName: 'quickcreateview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-quick-create-view/release-quick-create-view.vue'),
                },
                {
                    path: 'projects/:project?/listexpview/:listexpview?',
                    meta: {
                        caption: 'entities.project.views.listexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'listexpview', parameterName: 'listexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-list-exp-view/project-list-exp-view.vue'),
                },
                {
                    path: 'products/:product?/projectgridview9/:projectgridview9?',
                    meta: {
                        caption: 'entities.product.views.projectgridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'projectgridview9', parameterName: 'projectgridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-project-grid-view9/product-project-grid-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/mpickupview4/:mpickupview4?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview4', parameterName: 'mpickupview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view4/bug-mpickup-view4.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/mpickupview4/:mpickupview4?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview4', parameterName: 'mpickupview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view4/bug-mpickup-view4.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/mpickupview4/:mpickupview4?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview4', parameterName: 'mpickupview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view4/bug-mpickup-view4.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/mpickupview4/:mpickupview4?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview4', parameterName: 'mpickupview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view4/bug-mpickup-view4.vue'),
                },
                {
                    path: 'bugs/:bug?/mpickupview4/:mpickupview4?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview4', parameterName: 'mpickupview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view4/bug-mpickup-view4.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzcases/:ibzcase?/newediteditview9/:newediteditview9?',
                    meta: {
                        caption: 'entities.ibzcase.views.newediteditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'newediteditview9', parameterName: 'newediteditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-new-edit-edit-view9/ibz-case-new-edit-edit-view9.vue'),
                },
                {
                    path: 'ibzcases/:ibzcase?/newediteditview9/:newediteditview9?',
                    meta: {
                        caption: 'entities.ibzcase.views.newediteditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'newediteditview9', parameterName: 'newediteditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-new-edit-edit-view9/ibz-case-new-edit-edit-view9.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.ibzlib.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-edit-view9/ibz-lib-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/taskestimates/:taskestimate?/optionview/:optionview?',
                    meta: {
                        caption: 'entities.taskestimate.views.optionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'optionview', parameterName: 'optionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-option-view/task-estimate-option-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/taskestimates/:taskestimate?/optionview/:optionview?',
                    meta: {
                        caption: 'entities.taskestimate.views.optionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'optionview', parameterName: 'optionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-option-view/task-estimate-option-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/taskestimates/:taskestimate?/optionview/:optionview?',
                    meta: {
                        caption: 'entities.taskestimate.views.optionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'optionview', parameterName: 'optionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-option-view/task-estimate-option-view.vue'),
                },
                {
                    path: 'tasks/:task?/taskestimates/:taskestimate?/optionview/:optionview?',
                    meta: {
                        caption: 'entities.taskestimate.views.optionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'optionview', parameterName: 'optionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-option-view/task-estimate-option-view.vue'),
                },
                {
                    path: 'taskestimates/:taskestimate?/optionview/:optionview?',
                    meta: {
                        caption: 'entities.taskestimate.views.optionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'optionview', parameterName: 'optionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-option-view/task-estimate-option-view.vue'),
                },
                {
                    path: 'products/:product?/testmodules/:testmodule?/quickcfgview/:quickcfgview?',
                    meta: {
                        caption: 'entities.testmodule.views.quickcfgview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testmodules', parameterName: 'testmodule' },
                            { pathName: 'quickcfgview', parameterName: 'quickcfgview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-module-quick-cfg-view/test-module-quick-cfg-view.vue'),
                },
                {
                    path: 'testmodules/:testmodule?/quickcfgview/:quickcfgview?',
                    meta: {
                        caption: 'entities.testmodule.views.quickcfgview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testmodules', parameterName: 'testmodule' },
                            { pathName: 'quickcfgview', parameterName: 'quickcfgview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-module-quick-cfg-view/test-module-quick-cfg-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/linkcasegridview/:linkcasegridview?',
                    meta: {
                        caption: 'entities.case.views.linkcasegridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'linkcasegridview', parameterName: 'linkcasegridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-link-case-grid-view/case-link-case-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/linkcasegridview/:linkcasegridview?',
                    meta: {
                        caption: 'entities.case.views.linkcasegridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'linkcasegridview', parameterName: 'linkcasegridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-link-case-grid-view/case-link-case-grid-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/linkcasegridview/:linkcasegridview?',
                    meta: {
                        caption: 'entities.case.views.linkcasegridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'linkcasegridview', parameterName: 'linkcasegridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-link-case-grid-view/case-link-case-grid-view.vue'),
                },
                {
                    path: 'cases/:case?/linkcasegridview/:linkcasegridview?',
                    meta: {
                        caption: 'entities.case.views.linkcasegridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'linkcasegridview', parameterName: 'linkcasegridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-link-case-grid-view/case-link-case-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mpickupview/:mpickupview?',
                    meta: {
                        caption: 'entities.story.views.mpickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mpickupview', parameterName: 'mpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-mpickup-view/story-mpickup-view.vue'),
                },
                {
                    path: 'stories/:story?/mpickupview/:mpickupview?',
                    meta: {
                        caption: 'entities.story.views.mpickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mpickupview', parameterName: 'mpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-mpickup-view/story-mpickup-view.vue'),
                },
                {
                    path: 'projects/:project?/builds/:build?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.build.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-main-grid-view/build-main-grid-view.vue'),
                },
                {
                    path: 'products/:product?/builds/:build?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.build.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-main-grid-view/build-main-grid-view.vue'),
                },
                {
                    path: 'builds/:build?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.build.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-main-grid-view/build-main-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/usr2gridview/:usr2gridview?',
                    meta: {
                        caption: 'entities.bug.views.usr2gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'usr2gridview', parameterName: 'usr2gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-usr2-grid-view/bug-usr2-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/usr2gridview/:usr2gridview?',
                    meta: {
                        caption: 'entities.bug.views.usr2gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'usr2gridview', parameterName: 'usr2gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-usr2-grid-view/bug-usr2-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/usr2gridview/:usr2gridview?',
                    meta: {
                        caption: 'entities.bug.views.usr2gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'usr2gridview', parameterName: 'usr2gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-usr2-grid-view/bug-usr2-grid-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/usr2gridview/:usr2gridview?',
                    meta: {
                        caption: 'entities.bug.views.usr2gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'usr2gridview', parameterName: 'usr2gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-usr2-grid-view/bug-usr2-grid-view.vue'),
                },
                {
                    path: 'bugs/:bug?/usr2gridview/:usr2gridview?',
                    meta: {
                        caption: 'entities.bug.views.usr2gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'usr2gridview', parameterName: 'usr2gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-usr2-grid-view/bug-usr2-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/releasesubgridview_undone/:releasesubgridview_undone?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_undone.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_undone', parameterName: 'releasesubgridview_undone' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-undone/bug-release-sub-grid-view-undone.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/releasesubgridview_undone/:releasesubgridview_undone?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_undone.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_undone', parameterName: 'releasesubgridview_undone' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-undone/bug-release-sub-grid-view-undone.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/releasesubgridview_undone/:releasesubgridview_undone?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_undone.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_undone', parameterName: 'releasesubgridview_undone' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-undone/bug-release-sub-grid-view-undone.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/releasesubgridview_undone/:releasesubgridview_undone?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_undone.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_undone', parameterName: 'releasesubgridview_undone' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-undone/bug-release-sub-grid-view-undone.vue'),
                },
                {
                    path: 'bugs/:bug?/releasesubgridview_undone/:releasesubgridview_undone?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_undone.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_undone', parameterName: 'releasesubgridview_undone' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-undone/bug-release-sub-grid-view-undone.vue'),
                },
                {
                    path: 'products/:product?/editview/:editview?',
                    meta: {
                        caption: 'entities.product.views.editview.title',
                        info:'',
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
                    path: 'projects/:project?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.project.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-main-my-grid-view/project-main-my-grid-view.vue'),
                },
                {
                    path: 'productlives/:productlife?/roadmaplistview/:roadmaplistview?',
                    meta: {
                        caption: 'entities.productlife.views.roadmaplistview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/tasks/:task?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.task.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-edit-view/task-main-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.task.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-edit-view/task-main-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.task.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-edit-view/task-main-edit-view.vue'),
                },
                {
                    path: 'tasks/:task?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.task.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-edit-view/task-main-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/testresults/:testresult?/testtaskmeditview9/:testtaskmeditview9?',
                    meta: {
                        caption: 'entities.testresult.views.testtaskmeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'testtaskmeditview9', parameterName: 'testtaskmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-test-task-medit-view9/test-result-test-task-medit-view9.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/testresults/:testresult?/testtaskmeditview9/:testtaskmeditview9?',
                    meta: {
                        caption: 'entities.testresult.views.testtaskmeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'testtaskmeditview9', parameterName: 'testtaskmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-test-task-medit-view9/test-result-test-task-medit-view9.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/testresults/:testresult?/testtaskmeditview9/:testtaskmeditview9?',
                    meta: {
                        caption: 'entities.testresult.views.testtaskmeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'testtaskmeditview9', parameterName: 'testtaskmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-test-task-medit-view9/test-result-test-task-medit-view9.vue'),
                },
                {
                    path: 'cases/:case?/testresults/:testresult?/testtaskmeditview9/:testtaskmeditview9?',
                    meta: {
                        caption: 'entities.testresult.views.testtaskmeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'testtaskmeditview9', parameterName: 'testtaskmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-test-task-medit-view9/test-result-test-task-medit-view9.vue'),
                },
                {
                    path: 'testresults/:testresult?/testtaskmeditview9/:testtaskmeditview9?',
                    meta: {
                        caption: 'entities.testresult.views.testtaskmeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'testtaskmeditview9', parameterName: 'testtaskmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-test-task-medit-view9/test-result-test-task-medit-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/resolveview/:resolveview?',
                    meta: {
                        caption: 'entities.bug.views.resolveview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'resolveview', parameterName: 'resolveview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-resolve-view/bug-resolve-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/resolveview/:resolveview?',
                    meta: {
                        caption: 'entities.bug.views.resolveview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'resolveview', parameterName: 'resolveview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-resolve-view/bug-resolve-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/resolveview/:resolveview?',
                    meta: {
                        caption: 'entities.bug.views.resolveview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'resolveview', parameterName: 'resolveview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-resolve-view/bug-resolve-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/resolveview/:resolveview?',
                    meta: {
                        caption: 'entities.bug.views.resolveview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'resolveview', parameterName: 'resolveview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-resolve-view/bug-resolve-view.vue'),
                },
                {
                    path: 'bugs/:bug?/resolveview/:resolveview?',
                    meta: {
                        caption: 'entities.bug.views.resolveview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'resolveview', parameterName: 'resolveview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-resolve-view/bug-resolve-view.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzcases/:ibzcase?/editeditview/:editeditview?',
                    meta: {
                        caption: 'entities.ibzcase.views.editeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'editeditview', parameterName: 'editeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-edit-edit-view/ibz-case-edit-edit-view.vue'),
                },
                {
                    path: 'ibzcases/:ibzcase?/editeditview/:editeditview?',
                    meta: {
                        caption: 'entities.ibzcase.views.editeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'editeditview', parameterName: 'editeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-edit-edit-view/ibz-case-edit-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.case.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-grid-view/case-main-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.case.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-grid-view/case-main-grid-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.case.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-grid-view/case-main-grid-view.vue'),
                },
                {
                    path: 'cases/:case?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.case.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-grid-view/case-main-grid-view.vue'),
                },
                {
                    path: 'products/:product?/branches/:branch?/pmgridview/:pmgridview?',
                    meta: {
                        caption: 'entities.branch.views.pmgridview.title',
                        info:'',
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
                        caption: 'entities.branch.views.pmgridview.title',
                        info:'',
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
                    path: 'ibzlibs/:ibzlib?/ibzcases/:ibzcase?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.ibzcase.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/ibz-case-grid-view/ibz-case-grid-view.vue'),
                },
                {
                    path: 'ibzcases/:ibzcase?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.ibzcase.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/ibz-case-grid-view/ibz-case-grid-view.vue'),
                },
                {
                    path: 'products/:product?/testreports/:testreport?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.testreport.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-main-tab-exp-view/test-report-main-tab-exp-view.vue'),
                },
                {
                    path: 'testreports/:testreport?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.testreport.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-main-tab-exp-view/test-report-main-tab-exp-view.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.ibzlib.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-grid-view/ibz-lib-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/testreportsubgridview/:testreportsubgridview?',
                    meta: {
                        caption: 'entities.bug.views.testreportsubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testreportsubgridview', parameterName: 'testreportsubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-test-report-sub-grid-view/bug-test-report-sub-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/testreportsubgridview/:testreportsubgridview?',
                    meta: {
                        caption: 'entities.bug.views.testreportsubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testreportsubgridview', parameterName: 'testreportsubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-test-report-sub-grid-view/bug-test-report-sub-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/testreportsubgridview/:testreportsubgridview?',
                    meta: {
                        caption: 'entities.bug.views.testreportsubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testreportsubgridview', parameterName: 'testreportsubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-test-report-sub-grid-view/bug-test-report-sub-grid-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/testreportsubgridview/:testreportsubgridview?',
                    meta: {
                        caption: 'entities.bug.views.testreportsubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testreportsubgridview', parameterName: 'testreportsubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-test-report-sub-grid-view/bug-test-report-sub-grid-view.vue'),
                },
                {
                    path: 'bugs/:bug?/testreportsubgridview/:testreportsubgridview?',
                    meta: {
                        caption: 'entities.bug.views.testreportsubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testreportsubgridview', parameterName: 'testreportsubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-test-report-sub-grid-view/bug-test-report-sub-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/editview/:editview?',
                    meta: {
                        caption: 'entities.task.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-edit-view/task-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/editview/:editview?',
                    meta: {
                        caption: 'entities.task.views.editview.title',
                        info:'',
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
                    path: 'stories/:story?/tasks/:task?/editview/:editview?',
                    meta: {
                        caption: 'entities.task.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.task.views.editview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/dashboardmaineditview9/:dashboardmaineditview9?',
                    meta: {
                        caption: 'entities.bug.views.dashboardmaineditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'dashboardmaineditview9', parameterName: 'dashboardmaineditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-dashboard-main-edit-view9/bug-dashboard-main-edit-view9.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/dashboardmaineditview9/:dashboardmaineditview9?',
                    meta: {
                        caption: 'entities.bug.views.dashboardmaineditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'dashboardmaineditview9', parameterName: 'dashboardmaineditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-dashboard-main-edit-view9/bug-dashboard-main-edit-view9.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/dashboardmaineditview9/:dashboardmaineditview9?',
                    meta: {
                        caption: 'entities.bug.views.dashboardmaineditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'dashboardmaineditview9', parameterName: 'dashboardmaineditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-dashboard-main-edit-view9/bug-dashboard-main-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/dashboardmaineditview9/:dashboardmaineditview9?',
                    meta: {
                        caption: 'entities.bug.views.dashboardmaineditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'dashboardmaineditview9', parameterName: 'dashboardmaineditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-dashboard-main-edit-view9/bug-dashboard-main-edit-view9.vue'),
                },
                {
                    path: 'bugs/:bug?/dashboardmaineditview9/:dashboardmaineditview9?',
                    meta: {
                        caption: 'entities.bug.views.dashboardmaineditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'dashboardmaineditview9', parameterName: 'dashboardmaineditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-dashboard-main-edit-view9/bug-dashboard-main-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/mpickupview5/:mpickupview5?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview5', parameterName: 'mpickupview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view5/bug-mpickup-view5.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/mpickupview5/:mpickupview5?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview5', parameterName: 'mpickupview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view5/bug-mpickup-view5.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/mpickupview5/:mpickupview5?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview5', parameterName: 'mpickupview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view5/bug-mpickup-view5.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/mpickupview5/:mpickupview5?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview5', parameterName: 'mpickupview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view5/bug-mpickup-view5.vue'),
                },
                {
                    path: 'bugs/:bug?/mpickupview5/:mpickupview5?',
                    meta: {
                        caption: 'entities.bug.views.mpickupview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mpickupview5', parameterName: 'mpickupview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-mpickup-view5/bug-mpickup-view5.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/startoptionview/:startoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.startoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'startoptionview', parameterName: 'startoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-start-option-view/test-task-start-option-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/startoptionview/:startoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.startoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'startoptionview', parameterName: 'startoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-start-option-view/test-task-start-option-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/startoptionview/:startoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.startoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'startoptionview', parameterName: 'startoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-start-option-view/test-task-start-option-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/pivottableview/:pivottableview?',
                    meta: {
                        caption: 'entities.task.views.pivottableview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'pivottableview', parameterName: 'pivottableview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-pivot-table-view/task-pivot-table-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/pivottableview/:pivottableview?',
                    meta: {
                        caption: 'entities.task.views.pivottableview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'pivottableview', parameterName: 'pivottableview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-pivot-table-view/task-pivot-table-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/pivottableview/:pivottableview?',
                    meta: {
                        caption: 'entities.task.views.pivottableview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'pivottableview', parameterName: 'pivottableview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-pivot-table-view/task-pivot-table-view.vue'),
                },
                {
                    path: 'tasks/:task?/pivottableview/:pivottableview?',
                    meta: {
                        caption: 'entities.task.views.pivottableview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'pivottableview', parameterName: 'pivottableview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-pivot-table-view/task-pivot-table-view.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/mydgridview/:mydgridview?',
                    meta: {
                        caption: 'entities.testtask.views.mydgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'mydgridview', parameterName: 'mydgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-my-dgrid-view/test-task-my-dgrid-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/mydgridview/:mydgridview?',
                    meta: {
                        caption: 'entities.testtask.views.mydgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'mydgridview', parameterName: 'mydgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-my-dgrid-view/test-task-my-dgrid-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/mydgridview/:mydgridview?',
                    meta: {
                        caption: 'entities.testtask.views.mydgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'mydgridview', parameterName: 'mydgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-my-dgrid-view/test-task-my-dgrid-view.vue'),
                },
                {
                    path: 'projects/:project?/editview_close/:editview_close?',
                    meta: {
                        caption: 'entities.project.views.editview_close.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'editview_close', parameterName: 'editview_close' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-edit-view-close/project-edit-view-close.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/taskteams/:taskteam?/gridview9_look/:gridview9_look?',
                    meta: {
                        caption: 'entities.taskteam.views.gridview9_look.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'gridview9_look', parameterName: 'gridview9_look' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-look/task-team-grid-view9-look.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/taskteams/:taskteam?/gridview9_look/:gridview9_look?',
                    meta: {
                        caption: 'entities.taskteam.views.gridview9_look.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'gridview9_look', parameterName: 'gridview9_look' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-look/task-team-grid-view9-look.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/taskteams/:taskteam?/gridview9_look/:gridview9_look?',
                    meta: {
                        caption: 'entities.taskteam.views.gridview9_look.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'gridview9_look', parameterName: 'gridview9_look' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-look/task-team-grid-view9-look.vue'),
                },
                {
                    path: 'tasks/:task?/taskteams/:taskteam?/gridview9_look/:gridview9_look?',
                    meta: {
                        caption: 'entities.taskteam.views.gridview9_look.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'gridview9_look', parameterName: 'gridview9_look' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-look/task-team-grid-view9-look.vue'),
                },
                {
                    path: 'taskteams/:taskteam?/gridview9_look/:gridview9_look?',
                    meta: {
                        caption: 'entities.taskteam.views.gridview9_look.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'gridview9_look', parameterName: 'gridview9_look' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-grid-view9-look/task-team-grid-view9-look.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/subproductplans/:subproductplan?/subplancreateview/:subplancreateview?',
                    meta: {
                        caption: 'entities.subproductplan.views.subplancreateview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'subproductplans', parameterName: 'subproductplan' },
                            { pathName: 'subplancreateview', parameterName: 'subplancreateview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-sub-plan-create-view/product-plan-sub-plan-create-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/subproductplans/:subproductplan?/subplancreateview/:subplancreateview?',
                    meta: {
                        caption: 'entities.subproductplan.views.subplancreateview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'subproductplans', parameterName: 'subproductplan' },
                            { pathName: 'subplancreateview', parameterName: 'subplancreateview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-sub-plan-create-view/product-plan-sub-plan-create-view.vue'),
                },
                {
                    path: 'subproductplans/:subproductplan?/subplancreateview/:subplancreateview?',
                    meta: {
                        caption: 'entities.subproductplan.views.subplancreateview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'subproductplans', parameterName: 'subproductplan' },
                            { pathName: 'subplancreateview', parameterName: 'subplancreateview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-plan-sub-plan-create-view/product-plan-sub-plan-create-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/buildsubgridview_done/:buildsubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_done', parameterName: 'buildsubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-done/bug-build-sub-grid-view-done.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/buildsubgridview_done/:buildsubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_done', parameterName: 'buildsubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-done/bug-build-sub-grid-view-done.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/buildsubgridview_done/:buildsubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_done', parameterName: 'buildsubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-done/bug-build-sub-grid-view-done.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/buildsubgridview_done/:buildsubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_done', parameterName: 'buildsubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-done/bug-build-sub-grid-view-done.vue'),
                },
                {
                    path: 'bugs/:bug?/buildsubgridview_done/:buildsubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_done', parameterName: 'buildsubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-done/bug-build-sub-grid-view-done.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/closeoptionview/:closeoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.closeoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'closeoptionview', parameterName: 'closeoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-close-option-view/test-task-close-option-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/closeoptionview/:closeoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.closeoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'closeoptionview', parameterName: 'closeoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-close-option-view/test-task-close-option-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/closeoptionview/:closeoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.closeoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'closeoptionview', parameterName: 'closeoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-close-option-view/test-task-close-option-view.vue'),
                },
                {
                    path: 'products/:product?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.product.views.maintabexpview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/cases/:case?/testresults/:testresult?/meditview9/:meditview9?',
                    meta: {
                        caption: 'entities.testresult.views.meditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'meditview9', parameterName: 'meditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-medit-view9/test-result-medit-view9.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/testresults/:testresult?/meditview9/:meditview9?',
                    meta: {
                        caption: 'entities.testresult.views.meditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'meditview9', parameterName: 'meditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-medit-view9/test-result-medit-view9.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/testresults/:testresult?/meditview9/:meditview9?',
                    meta: {
                        caption: 'entities.testresult.views.meditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'meditview9', parameterName: 'meditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-medit-view9/test-result-medit-view9.vue'),
                },
                {
                    path: 'cases/:case?/testresults/:testresult?/meditview9/:meditview9?',
                    meta: {
                        caption: 'entities.testresult.views.meditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'meditview9', parameterName: 'meditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-medit-view9/test-result-medit-view9.vue'),
                },
                {
                    path: 'testresults/:testresult?/meditview9/:meditview9?',
                    meta: {
                        caption: 'entities.testresult.views.meditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'meditview9', parameterName: 'meditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-medit-view9/test-result-medit-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/workhoursview/:workhoursview?',
                    meta: {
                        caption: 'entities.task.views.workhoursview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'workhoursview', parameterName: 'workhoursview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-work-hours-view/task-work-hours-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/workhoursview/:workhoursview?',
                    meta: {
                        caption: 'entities.task.views.workhoursview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'workhoursview', parameterName: 'workhoursview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-work-hours-view/task-work-hours-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/workhoursview/:workhoursview?',
                    meta: {
                        caption: 'entities.task.views.workhoursview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'workhoursview', parameterName: 'workhoursview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-work-hours-view/task-work-hours-view.vue'),
                },
                {
                    path: 'tasks/:task?/workhoursview/:workhoursview?',
                    meta: {
                        caption: 'entities.task.views.workhoursview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'workhoursview', parameterName: 'workhoursview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-work-hours-view/task-work-hours-view.vue'),
                },
                {
                    path: 'projects/:project?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.project.views.gridview.title',
                        info:'',
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
                    path: 'depts/:dept?/editview/:editview?',
                    meta: {
                        caption: 'entities.dept.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'depts', parameterName: 'dept' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/dept-edit-view/dept-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mainview9_editmode/:mainview9_editmode?',
                    meta: {
                        caption: 'entities.story.views.mainview9_editmode.title',
                        info:'',
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
                        caption: 'entities.story.views.mainview9_editmode.title',
                        info:'',
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
                    path: 'projects/:project?/projectmodules/:projectmodule?/treeexpview/:treeexpview?',
                    meta: {
                        caption: 'entities.projectmodule.views.treeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'treeexpview', parameterName: 'treeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-tree-exp-view/project-module-tree-exp-view.vue'),
                },
                {
                    path: 'projectmodules/:projectmodule?/treeexpview/:treeexpview?',
                    meta: {
                        caption: 'entities.projectmodule.views.treeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'treeexpview', parameterName: 'treeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-tree-exp-view/project-module-tree-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/editview_4791/:editview_4791?',
                    meta: {
                        caption: 'entities.bug.views.editview_4791.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview_4791', parameterName: 'editview_4791' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view-4791/bug-edit-view-4791.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/editview_4791/:editview_4791?',
                    meta: {
                        caption: 'entities.bug.views.editview_4791.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview_4791', parameterName: 'editview_4791' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view-4791/bug-edit-view-4791.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/editview_4791/:editview_4791?',
                    meta: {
                        caption: 'entities.bug.views.editview_4791.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview_4791', parameterName: 'editview_4791' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view-4791/bug-edit-view-4791.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/editview_4791/:editview_4791?',
                    meta: {
                        caption: 'entities.bug.views.editview_4791.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview_4791', parameterName: 'editview_4791' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view-4791/bug-edit-view-4791.vue'),
                },
                {
                    path: 'bugs/:bug?/editview_4791/:editview_4791?',
                    meta: {
                        caption: 'entities.bug.views.editview_4791.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview_4791', parameterName: 'editview_4791' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view-4791/bug-edit-view-4791.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/gridview9_related/:gridview9_related?',
                    meta: {
                        caption: 'entities.story.views.gridview9_related.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'gridview9_related', parameterName: 'gridview9_related' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-grid-view9-related/story-grid-view9-related.vue'),
                },
                {
                    path: 'stories/:story?/gridview9_related/:gridview9_related?',
                    meta: {
                        caption: 'entities.story.views.gridview9_related.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'gridview9_related', parameterName: 'gridview9_related' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-grid-view9-related/story-grid-view9-related.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/editview_storychange/:editview_storychange?',
                    meta: {
                        caption: 'entities.story.views.editview_storychange.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'editview_storychange', parameterName: 'editview_storychange' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-edit-view-story-change/story-edit-view-story-change.vue'),
                },
                {
                    path: 'stories/:story?/editview_storychange/:editview_storychange?',
                    meta: {
                        caption: 'entities.story.views.editview_storychange.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'editview_storychange', parameterName: 'editview_storychange' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-edit-view-story-change/story-edit-view-story-change.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/maininfoeditview9/:maininfoeditview9?',
                    meta: {
                        caption: 'entities.case.views.maininfoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maininfoeditview9', parameterName: 'maininfoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-info-edit-view9/case-main-info-edit-view9.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/maininfoeditview9/:maininfoeditview9?',
                    meta: {
                        caption: 'entities.case.views.maininfoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maininfoeditview9', parameterName: 'maininfoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-info-edit-view9/case-main-info-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/maininfoeditview9/:maininfoeditview9?',
                    meta: {
                        caption: 'entities.case.views.maininfoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maininfoeditview9', parameterName: 'maininfoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-info-edit-view9/case-main-info-edit-view9.vue'),
                },
                {
                    path: 'cases/:case?/maininfoeditview9/:maininfoeditview9?',
                    meta: {
                        caption: 'entities.case.views.maininfoeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maininfoeditview9', parameterName: 'maininfoeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-info-edit-view9/case-main-info-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/todoeditview/:todoeditview?',
                    meta: {
                        caption: 'entities.task.views.todoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'todoeditview', parameterName: 'todoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-todo-edit-view/task-todo-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/todoeditview/:todoeditview?',
                    meta: {
                        caption: 'entities.task.views.todoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'todoeditview', parameterName: 'todoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-todo-edit-view/task-todo-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/todoeditview/:todoeditview?',
                    meta: {
                        caption: 'entities.task.views.todoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'todoeditview', parameterName: 'todoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-todo-edit-view/task-todo-edit-view.vue'),
                },
                {
                    path: 'tasks/:task?/todoeditview/:todoeditview?',
                    meta: {
                        caption: 'entities.task.views.todoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'todoeditview', parameterName: 'todoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-todo-edit-view/task-todo-edit-view.vue'),
                },
                {
                    path: 'products/:product?/branches/:branch?/pmeditview/:pmeditview?',
                    meta: {
                        caption: 'entities.branch.views.pmeditview.title',
                        info:'',
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
                        caption: 'entities.branch.views.pmeditview.title',
                        info:'',
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
                    path: 'ibzlibs/:ibzlib?/openlibview/:openlibview?',
                    meta: {
                        caption: 'entities.ibzlib.views.openlibview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'openlibview', parameterName: 'openlibview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-open-lib-view/ibz-lib-open-lib-view.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/editview_edit/:editview_edit?',
                    meta: {
                        caption: 'entities.testtask.views.editview_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview_edit', parameterName: 'editview_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view-edit/test-task-edit-view-edit.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/editview_edit/:editview_edit?',
                    meta: {
                        caption: 'entities.testtask.views.editview_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview_edit', parameterName: 'editview_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view-edit/test-task-edit-view-edit.vue'),
                },
                {
                    path: 'testtasks/:testtask?/editview_edit/:editview_edit?',
                    meta: {
                        caption: 'entities.testtask.views.editview_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview_edit', parameterName: 'editview_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view-edit/test-task-edit-view-edit.vue'),
                },
                {
                    path: 'products/:product?/testmodules/:testmodule?/gridviewbranch/:gridviewbranch?',
                    meta: {
                        caption: 'entities.testmodule.views.gridviewbranch.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testmodules', parameterName: 'testmodule' },
                            { pathName: 'gridviewbranch', parameterName: 'gridviewbranch' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-module-grid-view-branch/test-module-grid-view-branch.vue'),
                },
                {
                    path: 'testmodules/:testmodule?/gridviewbranch/:gridviewbranch?',
                    meta: {
                        caption: 'entities.testmodule.views.gridviewbranch.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testmodules', parameterName: 'testmodule' },
                            { pathName: 'gridviewbranch', parameterName: 'gridviewbranch' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-module-grid-view-branch/test-module-grid-view-branch.vue'),
                },
                {
                    path: 'testsuites/:testsuite?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.testsuite.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testsuites', parameterName: 'testsuite' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-suite-grid-view/test-suite-grid-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/maintabexp/:maintabexp?',
                    meta: {
                        caption: 'entities.productplan.views.maintabexp.title',
                        info:'',
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
                        caption: 'entities.productplan.views.maintabexp.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/tasks/:task?/maingridview9_child/:maingridview9_child?',
                    meta: {
                        caption: 'entities.task.views.maingridview9_child.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview9_child', parameterName: 'maingridview9_child' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view9-child/task-main-grid-view9-child.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maingridview9_child/:maingridview9_child?',
                    meta: {
                        caption: 'entities.task.views.maingridview9_child.title',
                        info:'',
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
                    path: 'stories/:story?/tasks/:task?/maingridview9_child/:maingridview9_child?',
                    meta: {
                        caption: 'entities.task.views.maingridview9_child.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.task.views.maingridview9_child.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/cases/:case?/editview/:editview?',
                    meta: {
                        caption: 'entities.case.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-edit-view/case-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/editview/:editview?',
                    meta: {
                        caption: 'entities.case.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-edit-view/case-edit-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/editview/:editview?',
                    meta: {
                        caption: 'entities.case.views.editview.title',
                        info:'',
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
                        caption: 'entities.case.views.editview.title',
                        info:'',
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
                        caption: 'entities.product.views.testtabexpview.title',
                        info:'',
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
                    path: 'products/:product?/testreports/:testreport?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.testreport.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-grid-view/test-report-grid-view.vue'),
                },
                {
                    path: 'testreports/:testreport?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.testreport.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-grid-view/test-report-grid-view.vue'),
                },
                {
                    path: 'todos/:todo?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.todo.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/todo-grid-view/todo-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/mainview_edit/:mainview_edit?',
                    meta: {
                        caption: 'entities.project.views.mainview_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'mainview_edit', parameterName: 'mainview_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-main-view-edit/project-main-view-edit.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/stepsinfoeditview/:stepsinfoeditview?',
                    meta: {
                        caption: 'entities.bug.views.stepsinfoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'stepsinfoeditview', parameterName: 'stepsinfoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-steps-info-edit-view/bug-steps-info-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/stepsinfoeditview/:stepsinfoeditview?',
                    meta: {
                        caption: 'entities.bug.views.stepsinfoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'stepsinfoeditview', parameterName: 'stepsinfoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-steps-info-edit-view/bug-steps-info-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/stepsinfoeditview/:stepsinfoeditview?',
                    meta: {
                        caption: 'entities.bug.views.stepsinfoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'stepsinfoeditview', parameterName: 'stepsinfoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-steps-info-edit-view/bug-steps-info-edit-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/stepsinfoeditview/:stepsinfoeditview?',
                    meta: {
                        caption: 'entities.bug.views.stepsinfoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'stepsinfoeditview', parameterName: 'stepsinfoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-steps-info-edit-view/bug-steps-info-edit-view.vue'),
                },
                {
                    path: 'bugs/:bug?/stepsinfoeditview/:stepsinfoeditview?',
                    meta: {
                        caption: 'entities.bug.views.stepsinfoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'stepsinfoeditview', parameterName: 'stepsinfoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-steps-info-edit-view/bug-steps-info-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.story.views.pickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-pickup-grid-view/story-pickup-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/pickupgridview/:pickupgridview?',
                    meta: {
                        caption: 'entities.story.views.pickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'pickupgridview', parameterName: 'pickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-pickup-grid-view/story-pickup-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/gridview9_untested/:gridview9_untested?',
                    meta: {
                        caption: 'entities.testtask.views.gridview9_untested.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'gridview9_untested', parameterName: 'gridview9_untested' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-grid-view9-un-tested/test-task-grid-view9-un-tested.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/gridview9_untested/:gridview9_untested?',
                    meta: {
                        caption: 'entities.testtask.views.gridview9_untested.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'gridview9_untested', parameterName: 'gridview9_untested' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-grid-view9-un-tested/test-task-grid-view9-un-tested.vue'),
                },
                {
                    path: 'testtasks/:testtask?/gridview9_untested/:gridview9_untested?',
                    meta: {
                        caption: 'entities.testtask.views.gridview9_untested.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'gridview9_untested', parameterName: 'gridview9_untested' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-grid-view9-un-tested/test-task-grid-view9-un-tested.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.release.views.gridview.title',
                        info:'',
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
                        caption: 'entities.release.views.gridview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.story.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-edit-view9/story-edit-view9.vue'),
                },
                {
                    path: 'stories/:story?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.story.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-edit-view9/story-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.productplan.views.maineditview.title',
                        info:'',
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
                        caption: 'entities.productplan.views.maineditview.title',
                        info:'',
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
                    path: 'products/:product?/productmodules/:productmodule?/treeexpview/:treeexpview?',
                    meta: {
                        caption: 'entities.productmodule.views.treeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'treeexpview', parameterName: 'treeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-tree-exp-view/product-module-tree-exp-view.vue'),
                },
                {
                    path: 'productmodules/:productmodule?/treeexpview/:treeexpview?',
                    meta: {
                        caption: 'entities.productmodule.views.treeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'treeexpview', parameterName: 'treeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-tree-exp-view/product-module-tree-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/testtaskexceditview/:testtaskexceditview?',
                    meta: {
                        caption: 'entities.case.views.testtaskexceditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testtaskexceditview', parameterName: 'testtaskexceditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-task-exc-edit-view/case-test-task-exc-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/testtaskexceditview/:testtaskexceditview?',
                    meta: {
                        caption: 'entities.case.views.testtaskexceditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testtaskexceditview', parameterName: 'testtaskexceditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-task-exc-edit-view/case-test-task-exc-edit-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/testtaskexceditview/:testtaskexceditview?',
                    meta: {
                        caption: 'entities.case.views.testtaskexceditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testtaskexceditview', parameterName: 'testtaskexceditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-task-exc-edit-view/case-test-task-exc-edit-view.vue'),
                },
                {
                    path: 'cases/:case?/testtaskexceditview/:testtaskexceditview?',
                    meta: {
                        caption: 'entities.case.views.testtaskexceditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testtaskexceditview', parameterName: 'testtaskexceditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-task-exc-edit-view/case-test-task-exc-edit-view.vue'),
                },
                {
                    path: 'products/:product?/productmodules/:productmodule?/quickcfgview/:quickcfgview?',
                    meta: {
                        caption: 'entities.productmodule.views.quickcfgview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'quickcfgview', parameterName: 'quickcfgview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-quick-cfg-view/product-module-quick-cfg-view.vue'),
                },
                {
                    path: 'productmodules/:productmodule?/quickcfgview/:quickcfgview?',
                    meta: {
                        caption: 'entities.productmodule.views.quickcfgview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'quickcfgview', parameterName: 'quickcfgview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-quick-cfg-view/product-module-quick-cfg-view.vue'),
                },
                {
                    path: 'testportalview/:testportalview?',
                    meta: {
                        caption: 'app.views.testportalview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testportalview', parameterName: 'testportalview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ungroup/test-portal-view/test-portal-view.vue'),
                },
                {
                    path: 'todos/:todo?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.todo.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/todo-grid-view9/todo-grid-view9.vue'),
                },
                {
                    path: 'projects/:project?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.project.views.maindashboardview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-assigned-to-me/bug-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-assigned-to-me/bug-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-assigned-to-me/bug-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-assigned-to-me/bug-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'bugs/:bug?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.bug.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-grid-view9-assigned-to-me/bug-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/assigntoview/:assigntoview?',
                    meta: {
                        caption: 'entities.story.views.assigntoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'assigntoview', parameterName: 'assigntoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-assign-to-view/story-assign-to-view.vue'),
                },
                {
                    path: 'stories/:story?/assigntoview/:assigntoview?',
                    meta: {
                        caption: 'entities.story.views.assigntoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'assigntoview', parameterName: 'assigntoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-assign-to-view/story-assign-to-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/editview/:editview?',
                    meta: {
                        caption: 'entities.story.views.editview.title',
                        info:'',
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
                        caption: 'entities.story.views.editview.title',
                        info:'',
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
                    path: 'projects/:project?/testtasks/:testtask?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.testtask.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-grid-view/test-task-grid-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.testtask.views.gridview.title',
                        info:'',
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
                        caption: 'entities.testtask.views.gridview.title',
                        info:'',
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
                    path: 'projects/:project?/burns/:burn?/chartview/:chartview?',
                    meta: {
                        caption: 'entities.burn.views.chartview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'burns', parameterName: 'burn' },
                            { pathName: 'chartview', parameterName: 'chartview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/burn-chart-view/burn-chart-view.vue'),
                },
                {
                    path: 'burns/:burn?/chartview/:chartview?',
                    meta: {
                        caption: 'entities.burn.views.chartview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'burns', parameterName: 'burn' },
                            { pathName: 'chartview', parameterName: 'chartview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/burn-chart-view/burn-chart-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/maindetailview9/:maindetailview9?',
                    meta: {
                        caption: 'entities.task.views.maindetailview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maindetailview9', parameterName: 'maindetailview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-detail-view9/task-main-detail-view9.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maindetailview9/:maindetailview9?',
                    meta: {
                        caption: 'entities.task.views.maindetailview9.title',
                        info:'',
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
                    path: 'stories/:story?/tasks/:task?/maindetailview9/:maindetailview9?',
                    meta: {
                        caption: 'entities.task.views.maindetailview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.task.views.maindetailview9.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/pickupgridview2/:pickupgridview2?',
                    meta: {
                        caption: 'entities.story.views.pickupgridview2.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'pickupgridview2', parameterName: 'pickupgridview2' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-pickup-grid-view2/story-pickup-grid-view2.vue'),
                },
                {
                    path: 'stories/:story?/pickupgridview2/:pickupgridview2?',
                    meta: {
                        caption: 'entities.story.views.pickupgridview2.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'pickupgridview2', parameterName: 'pickupgridview2' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-pickup-grid-view2/story-pickup-grid-view2.vue'),
                },
                {
                    path: 'depts/:dept?/pickupview/:pickupview?',
                    meta: {
                        caption: 'entities.dept.views.pickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'depts', parameterName: 'dept' },
                            { pathName: 'pickupview', parameterName: 'pickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/dept-pickup-view/dept-pickup-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/projectplanview/:projectplanview?',
                    meta: {
                        caption: 'entities.story.views.projectplanview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'projectplanview', parameterName: 'projectplanview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-project-plan-view/story-project-plan-view.vue'),
                },
                {
                    path: 'stories/:story?/projectplanview/:projectplanview?',
                    meta: {
                        caption: 'entities.story.views.projectplanview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'projectplanview', parameterName: 'projectplanview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-project-plan-view/story-project-plan-view.vue'),
                },
                {
                    path: 'projects/:project?/curproductgridview/:curproductgridview?',
                    meta: {
                        caption: 'entities.project.views.curproductgridview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/pickupgridview4/:pickupgridview4?',
                    meta: {
                        caption: 'entities.story.views.pickupgridview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'pickupgridview4', parameterName: 'pickupgridview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-pickup-grid-view4/story-pickup-grid-view4.vue'),
                },
                {
                    path: 'stories/:story?/pickupgridview4/:pickupgridview4?',
                    meta: {
                        caption: 'entities.story.views.pickupgridview4.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'pickupgridview4', parameterName: 'pickupgridview4' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-pickup-grid-view4/story-pickup-grid-view4.vue'),
                },
                {
                    path: 'projectstats/:projectstats?/allgridview/:allgridview?',
                    meta: {
                        caption: 'entities.projectstats.views.allgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectstats', parameterName: 'projectstats' },
                            { pathName: 'allgridview', parameterName: 'allgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-stats-allgrid-view/project-stats-allgrid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/suitelinkcasegridview/:suitelinkcasegridview?',
                    meta: {
                        caption: 'entities.case.views.suitelinkcasegridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'suitelinkcasegridview', parameterName: 'suitelinkcasegridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/casesuite-link-case-grid-view/casesuite-link-case-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/suitelinkcasegridview/:suitelinkcasegridview?',
                    meta: {
                        caption: 'entities.case.views.suitelinkcasegridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'suitelinkcasegridview', parameterName: 'suitelinkcasegridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/casesuite-link-case-grid-view/casesuite-link-case-grid-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/suitelinkcasegridview/:suitelinkcasegridview?',
                    meta: {
                        caption: 'entities.case.views.suitelinkcasegridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'suitelinkcasegridview', parameterName: 'suitelinkcasegridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/casesuite-link-case-grid-view/casesuite-link-case-grid-view.vue'),
                },
                {
                    path: 'cases/:case?/suitelinkcasegridview/:suitelinkcasegridview?',
                    meta: {
                        caption: 'entities.case.views.suitelinkcasegridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'suitelinkcasegridview', parameterName: 'suitelinkcasegridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/casesuite-link-case-grid-view/casesuite-link-case-grid-view.vue'),
                },
                {
                    path: 'users/:user?/treeexpview/:treeexpview?',
                    meta: {
                        caption: 'entities.user.views.treeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'users', parameterName: 'user' },
                            { pathName: 'treeexpview', parameterName: 'treeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/user-tree-exp-view/user-tree-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/assingtoview/:assingtoview?',
                    meta: {
                        caption: 'entities.bug.views.assingtoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assingtoview', parameterName: 'assingtoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-assing-to-view/bug-assing-to-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/assingtoview/:assingtoview?',
                    meta: {
                        caption: 'entities.bug.views.assingtoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assingtoview', parameterName: 'assingtoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-assing-to-view/bug-assing-to-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/assingtoview/:assingtoview?',
                    meta: {
                        caption: 'entities.bug.views.assingtoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assingtoview', parameterName: 'assingtoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-assing-to-view/bug-assing-to-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/assingtoview/:assingtoview?',
                    meta: {
                        caption: 'entities.bug.views.assingtoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assingtoview', parameterName: 'assingtoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-assing-to-view/bug-assing-to-view.vue'),
                },
                {
                    path: 'bugs/:bug?/assingtoview/:assingtoview?',
                    meta: {
                        caption: 'entities.bug.views.assingtoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assingtoview', parameterName: 'assingtoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-assing-to-view/bug-assing-to-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/mainmynewgridview/:mainmynewgridview?',
                    meta: {
                        caption: 'entities.case.views.mainmynewgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainmynewgridview', parameterName: 'mainmynewgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-my-new-grid-view/case-main-my-new-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/mainmynewgridview/:mainmynewgridview?',
                    meta: {
                        caption: 'entities.case.views.mainmynewgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainmynewgridview', parameterName: 'mainmynewgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-my-new-grid-view/case-main-my-new-grid-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/mainmynewgridview/:mainmynewgridview?',
                    meta: {
                        caption: 'entities.case.views.mainmynewgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainmynewgridview', parameterName: 'mainmynewgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-my-new-grid-view/case-main-my-new-grid-view.vue'),
                },
                {
                    path: 'cases/:case?/mainmynewgridview/:mainmynewgridview?',
                    meta: {
                        caption: 'entities.case.views.mainmynewgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainmynewgridview', parameterName: 'mainmynewgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-my-new-grid-view/case-main-my-new-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/activiteview/:activiteview?',
                    meta: {
                        caption: 'entities.story.views.activiteview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'activiteview', parameterName: 'activiteview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-activite-view/story-activite-view.vue'),
                },
                {
                    path: 'stories/:story?/activiteview/:activiteview?',
                    meta: {
                        caption: 'entities.story.views.activiteview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'activiteview', parameterName: 'activiteview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-activite-view/story-activite-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/releasesubeditview/:releasesubeditview?',
                    meta: {
                        caption: 'entities.story.views.releasesubeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'releasesubeditview', parameterName: 'releasesubeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-release-sub-edit-view/story-release-sub-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/releasesubeditview/:releasesubeditview?',
                    meta: {
                        caption: 'entities.story.views.releasesubeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'releasesubeditview', parameterName: 'releasesubeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-release-sub-edit-view/story-release-sub-edit-view.vue'),
                },
                {
                    path: 'testsuites/:testsuite?/editview/:editview?',
                    meta: {
                        caption: 'entities.testsuite.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testsuites', parameterName: 'testsuite' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-suite-edit-view/test-suite-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.task.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-dashboard-view/task-main-dashboard-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.task.views.maindashboardview.title',
                        info:'',
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
                    path: 'stories/:story?/tasks/:task?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.task.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.task.views.maindashboardview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/cases/:case?/casesteps/:casestep?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.casestep.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-grid-view9/case-step-grid-view9.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/casesteps/:casestep?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.casestep.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-grid-view9/case-step-grid-view9.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/casesteps/:casestep?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.casestep.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-grid-view9/case-step-grid-view9.vue'),
                },
                {
                    path: 'cases/:case?/casesteps/:casestep?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.casestep.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-grid-view9/case-step-grid-view9.vue'),
                },
                {
                    path: 'casesteps/:casestep?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.casestep.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-grid-view9/case-step-grid-view9.vue'),
                },
                {
                    path: 'todos/:todo?/desceditview9/:desceditview9?',
                    meta: {
                        caption: 'entities.todo.views.desceditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'desceditview9', parameterName: 'desceditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/todo-desc-edit-view9/todo-desc-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/canceltaskview/:canceltaskview?',
                    meta: {
                        caption: 'entities.task.views.canceltaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'canceltaskview', parameterName: 'canceltaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-cancel-task-view/task-cancel-task-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/canceltaskview/:canceltaskview?',
                    meta: {
                        caption: 'entities.task.views.canceltaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'canceltaskview', parameterName: 'canceltaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-cancel-task-view/task-cancel-task-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/canceltaskview/:canceltaskview?',
                    meta: {
                        caption: 'entities.task.views.canceltaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'canceltaskview', parameterName: 'canceltaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-cancel-task-view/task-cancel-task-view.vue'),
                },
                {
                    path: 'tasks/:task?/canceltaskview/:canceltaskview?',
                    meta: {
                        caption: 'entities.task.views.canceltaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'canceltaskview', parameterName: 'canceltaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-cancel-task-view/task-cancel-task-view.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.release.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-main-tab-exp-view/release-main-tab-exp-view.vue'),
                },
                {
                    path: 'releases/:release?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.release.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-main-tab-exp-view/release-main-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/pickupview/:pickupview?',
                    meta: {
                        caption: 'entities.product.views.pickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'pickupview', parameterName: 'pickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-pickup-view/product-pickup-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/testmaindashboardview/:testmaindashboardview?',
                    meta: {
                        caption: 'entities.case.views.testmaindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testmaindashboardview', parameterName: 'testmaindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-main-dashboard-view/case-test-main-dashboard-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/testmaindashboardview/:testmaindashboardview?',
                    meta: {
                        caption: 'entities.case.views.testmaindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testmaindashboardview', parameterName: 'testmaindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-main-dashboard-view/case-test-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/testmaindashboardview/:testmaindashboardview?',
                    meta: {
                        caption: 'entities.case.views.testmaindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testmaindashboardview', parameterName: 'testmaindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-main-dashboard-view/case-test-main-dashboard-view.vue'),
                },
                {
                    path: 'cases/:case?/testmaindashboardview/:testmaindashboardview?',
                    meta: {
                        caption: 'entities.case.views.testmaindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testmaindashboardview', parameterName: 'testmaindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-main-dashboard-view/case-test-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/taskestimates/:taskestimate?/editgridview9/:editgridview9?',
                    meta: {
                        caption: 'entities.taskestimate.views.editgridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'editgridview9', parameterName: 'editgridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-edit-grid-view9/task-estimate-edit-grid-view9.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/taskestimates/:taskestimate?/editgridview9/:editgridview9?',
                    meta: {
                        caption: 'entities.taskestimate.views.editgridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'editgridview9', parameterName: 'editgridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-edit-grid-view9/task-estimate-edit-grid-view9.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/taskestimates/:taskestimate?/editgridview9/:editgridview9?',
                    meta: {
                        caption: 'entities.taskestimate.views.editgridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'editgridview9', parameterName: 'editgridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-edit-grid-view9/task-estimate-edit-grid-view9.vue'),
                },
                {
                    path: 'tasks/:task?/taskestimates/:taskestimate?/editgridview9/:editgridview9?',
                    meta: {
                        caption: 'entities.taskestimate.views.editgridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'editgridview9', parameterName: 'editgridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-edit-grid-view9/task-estimate-edit-grid-view9.vue'),
                },
                {
                    path: 'taskestimates/:taskestimate?/editgridview9/:editgridview9?',
                    meta: {
                        caption: 'entities.taskestimate.views.editgridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'editgridview9', parameterName: 'editgridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-edit-grid-view9/task-estimate-edit-grid-view9.vue'),
                },
                {
                    path: 'products/:product?/testgridview/:testgridview?',
                    meta: {
                        caption: 'entities.product.views.testgridview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/tostoryeditview/:tostoryeditview?',
                    meta: {
                        caption: 'entities.story.views.tostoryeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tostoryeditview', parameterName: 'tostoryeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/storyto-story-edit-view/storyto-story-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/tostoryeditview/:tostoryeditview?',
                    meta: {
                        caption: 'entities.story.views.tostoryeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tostoryeditview', parameterName: 'tostoryeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/storyto-story-edit-view/storyto-story-edit-view.vue'),
                },
                {
                    path: 'projectportalview/:projectportalview?',
                    meta: {
                        caption: 'app.views.projectportalview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectportalview', parameterName: 'projectportalview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-portal-view/project-portal-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/maingridview_bymodule/:maingridview_bymodule?',
                    meta: {
                        caption: 'entities.story.views.maingridview_bymodule.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'maingridview_bymodule', parameterName: 'maingridview_bymodule' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-grid-view-by-module/story-main-grid-view-by-module.vue'),
                },
                {
                    path: 'stories/:story?/maingridview_bymodule/:maingridview_bymodule?',
                    meta: {
                        caption: 'entities.story.views.maingridview_bymodule.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'maingridview_bymodule', parameterName: 'maingridview_bymodule' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-grid-view-by-module/story-main-grid-view-by-module.vue'),
                },
                {
                    path: 'ibzprojectmembers/:ibzprojectmember?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.ibzprojectmember.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzprojectmembers', parameterName: 'ibzprojectmember' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-project-member-edit-view9/ibz-project-member-edit-view9.vue'),
                },
                {
                    path: 'actions/:action?/editview/:editview?',
                    meta: {
                        caption: 'entities.action.views.editview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.story.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-my-grid-view/story-main-my-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.story.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-my-grid-view/story-main-my-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/buildsubgridview_new/:buildsubgridview_new?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new', parameterName: 'buildsubgridview_new' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new/bug-build-sub-grid-view-new.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/buildsubgridview_new/:buildsubgridview_new?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new', parameterName: 'buildsubgridview_new' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new/bug-build-sub-grid-view-new.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/buildsubgridview_new/:buildsubgridview_new?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new', parameterName: 'buildsubgridview_new' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new/bug-build-sub-grid-view-new.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/buildsubgridview_new/:buildsubgridview_new?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new', parameterName: 'buildsubgridview_new' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new/bug-build-sub-grid-view-new.vue'),
                },
                {
                    path: 'bugs/:bug?/buildsubgridview_new/:buildsubgridview_new?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new', parameterName: 'buildsubgridview_new' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new/bug-build-sub-grid-view-new.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mainview9_storyspec/:mainview9_storyspec?',
                    meta: {
                        caption: 'entities.story.views.mainview9_storyspec.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview9_storyspec', parameterName: 'mainview9_storyspec' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view9-story-spec/story-main-view9-story-spec.vue'),
                },
                {
                    path: 'stories/:story?/mainview9_storyspec/:mainview9_storyspec?',
                    meta: {
                        caption: 'entities.story.views.mainview9_storyspec.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview9_storyspec', parameterName: 'mainview9_storyspec' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view9-story-spec/story-main-view9-story-spec.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/curprojectgridview/:curprojectgridview?',
                    meta: {
                        caption: 'entities.story.views.curprojectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'curprojectgridview', parameterName: 'curprojectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-cur-project-grid-view/story-cur-project-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/curprojectgridview/:curprojectgridview?',
                    meta: {
                        caption: 'entities.story.views.curprojectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'curprojectgridview', parameterName: 'curprojectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-cur-project-grid-view/story-cur-project-grid-view.vue'),
                },
                {
                    path: 'products/:product?/bugtreeexpview/:bugtreeexpview?',
                    meta: {
                        caption: 'entities.product.views.bugtreeexpview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/tasks/:task?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.task.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-my-grid-view/task-main-my-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.task.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-my-grid-view/task-main-my-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.task.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-my-grid-view/task-main-my-grid-view.vue'),
                },
                {
                    path: 'tasks/:task?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.task.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-my-grid-view/task-main-my-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/activationtaskview/:activationtaskview?',
                    meta: {
                        caption: 'entities.task.views.activationtaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'activationtaskview', parameterName: 'activationtaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-activation-task-view/task-activation-task-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/activationtaskview/:activationtaskview?',
                    meta: {
                        caption: 'entities.task.views.activationtaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'activationtaskview', parameterName: 'activationtaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-activation-task-view/task-activation-task-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/activationtaskview/:activationtaskview?',
                    meta: {
                        caption: 'entities.task.views.activationtaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'activationtaskview', parameterName: 'activationtaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-activation-task-view/task-activation-task-view.vue'),
                },
                {
                    path: 'tasks/:task?/activationtaskview/:activationtaskview?',
                    meta: {
                        caption: 'entities.task.views.activationtaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'activationtaskview', parameterName: 'activationtaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-activation-task-view/task-activation-task-view.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzlibmodules/:ibzlibmodule?/treeexpview/:treeexpview?',
                    meta: {
                        caption: 'entities.ibzlibmodule.views.treeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzlibmodules', parameterName: 'ibzlibmodule' },
                            { pathName: 'treeexpview', parameterName: 'treeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-module-tree-exp-view/ibz-lib-module-tree-exp-view.vue'),
                },
                {
                    path: 'ibzlibmodules/:ibzlibmodule?/treeexpview/:treeexpview?',
                    meta: {
                        caption: 'entities.ibzlibmodule.views.treeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibmodules', parameterName: 'ibzlibmodule' },
                            { pathName: 'treeexpview', parameterName: 'treeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-module-tree-exp-view/ibz-lib-module-tree-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/donetaskview/:donetaskview?',
                    meta: {
                        caption: 'entities.task.views.donetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'donetaskview', parameterName: 'donetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-done-task-view/task-done-task-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/donetaskview/:donetaskview?',
                    meta: {
                        caption: 'entities.task.views.donetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'donetaskview', parameterName: 'donetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-done-task-view/task-done-task-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/donetaskview/:donetaskview?',
                    meta: {
                        caption: 'entities.task.views.donetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'donetaskview', parameterName: 'donetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-done-task-view/task-done-task-view.vue'),
                },
                {
                    path: 'tasks/:task?/donetaskview/:donetaskview?',
                    meta: {
                        caption: 'entities.task.views.donetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'donetaskview', parameterName: 'donetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-done-task-view/task-done-task-view.vue'),
                },
                {
                    path: 'productstats/:productstats?/allgridview/:allgridview?',
                    meta: {
                        caption: 'entities.productstats.views.allgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productstats', parameterName: 'productstats' },
                            { pathName: 'allgridview', parameterName: 'allgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-stats-allgrid-view/product-stats-allgrid-view.vue'),
                },
                {
                    path: 'testsuites/:testsuite?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.testsuite.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testsuites', parameterName: 'testsuite' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-suite-main-dashboard-view/test-suite-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/maingridview_bymodule/:maingridview_bymodule?',
                    meta: {
                        caption: 'entities.task.views.maingridview_bymodule.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview_bymodule', parameterName: 'maingridview_bymodule' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view-by-module/task-main-grid-view-by-module.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maingridview_bymodule/:maingridview_bymodule?',
                    meta: {
                        caption: 'entities.task.views.maingridview_bymodule.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview_bymodule', parameterName: 'maingridview_bymodule' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view-by-module/task-main-grid-view-by-module.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/maingridview_bymodule/:maingridview_bymodule?',
                    meta: {
                        caption: 'entities.task.views.maingridview_bymodule.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview_bymodule', parameterName: 'maingridview_bymodule' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view-by-module/task-main-grid-view-by-module.vue'),
                },
                {
                    path: 'tasks/:task?/maingridview_bymodule/:maingridview_bymodule?',
                    meta: {
                        caption: 'entities.task.views.maingridview_bymodule.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview_bymodule', parameterName: 'maingridview_bymodule' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view-by-module/task-main-grid-view-by-module.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/batchnewgridview/:batchnewgridview?',
                    meta: {
                        caption: 'entities.case.views.batchnewgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'batchnewgridview', parameterName: 'batchnewgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-batch-new-grid-view/case-batch-new-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/batchnewgridview/:batchnewgridview?',
                    meta: {
                        caption: 'entities.case.views.batchnewgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'batchnewgridview', parameterName: 'batchnewgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-batch-new-grid-view/case-batch-new-grid-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/batchnewgridview/:batchnewgridview?',
                    meta: {
                        caption: 'entities.case.views.batchnewgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'batchnewgridview', parameterName: 'batchnewgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-batch-new-grid-view/case-batch-new-grid-view.vue'),
                },
                {
                    path: 'cases/:case?/batchnewgridview/:batchnewgridview?',
                    meta: {
                        caption: 'entities.case.views.batchnewgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'batchnewgridview', parameterName: 'batchnewgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-batch-new-grid-view/case-batch-new-grid-view.vue'),
                },
                {
                    path: 'products/:product?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.product.views.maindashboardview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/mpickupview2/:mpickupview2?',
                    meta: {
                        caption: 'entities.story.views.mpickupview2.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mpickupview2', parameterName: 'mpickupview2' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-mpickup-view2/story-mpickup-view2.vue'),
                },
                {
                    path: 'stories/:story?/mpickupview2/:mpickupview2?',
                    meta: {
                        caption: 'entities.story.views.mpickupview2.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mpickupview2', parameterName: 'mpickupview2' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-mpickup-view2/story-mpickup-view2.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/blockoptionview/:blockoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.blockoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'blockoptionview', parameterName: 'blockoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-block-option-view/test-task-block-option-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/blockoptionview/:blockoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.blockoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'blockoptionview', parameterName: 'blockoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-block-option-view/test-task-block-option-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/blockoptionview/:blockoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.blockoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'blockoptionview', parameterName: 'blockoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-block-option-view/test-task-block-option-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/cursuitgridview/:cursuitgridview?',
                    meta: {
                        caption: 'entities.case.views.cursuitgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'cursuitgridview', parameterName: 'cursuitgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-cur-suit-grid-view/case-cur-suit-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/cursuitgridview/:cursuitgridview?',
                    meta: {
                        caption: 'entities.case.views.cursuitgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'cursuitgridview', parameterName: 'cursuitgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-cur-suit-grid-view/case-cur-suit-grid-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/cursuitgridview/:cursuitgridview?',
                    meta: {
                        caption: 'entities.case.views.cursuitgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'cursuitgridview', parameterName: 'cursuitgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-cur-suit-grid-view/case-cur-suit-grid-view.vue'),
                },
                {
                    path: 'cases/:case?/cursuitgridview/:cursuitgridview?',
                    meta: {
                        caption: 'entities.case.views.cursuitgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'cursuitgridview', parameterName: 'cursuitgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-cur-suit-grid-view/case-cur-suit-grid-view.vue'),
                },
                {
                    path: 'products/:product?/testmodules/:testmodule?/treeexpview/:treeexpview?',
                    meta: {
                        caption: 'entities.testmodule.views.treeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testmodules', parameterName: 'testmodule' },
                            { pathName: 'treeexpview', parameterName: 'treeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-module-tree-exp-view/test-module-tree-exp-view.vue'),
                },
                {
                    path: 'testmodules/:testmodule?/treeexpview/:treeexpview?',
                    meta: {
                        caption: 'entities.testmodule.views.treeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testmodules', parameterName: 'testmodule' },
                            { pathName: 'treeexpview', parameterName: 'treeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-module-tree-exp-view/test-module-tree-exp-view.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzcases/:ibzcase?/ibzlibcasesteps/:ibzlibcasesteps?/infogridview9/:infogridview9?',
                    meta: {
                        caption: 'entities.ibzlibcasesteps.views.infogridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'ibzlibcasesteps', parameterName: 'ibzlibcasesteps' },
                            { pathName: 'infogridview9', parameterName: 'infogridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-case-steps-info-grid-view9/ibz-lib-case-steps-info-grid-view9.vue'),
                },
                {
                    path: 'ibzcases/:ibzcase?/ibzlibcasesteps/:ibzlibcasesteps?/infogridview9/:infogridview9?',
                    meta: {
                        caption: 'entities.ibzlibcasesteps.views.infogridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'ibzlibcasesteps', parameterName: 'ibzlibcasesteps' },
                            { pathName: 'infogridview9', parameterName: 'infogridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-case-steps-info-grid-view9/ibz-lib-case-steps-info-grid-view9.vue'),
                },
                {
                    path: 'ibzlibcasesteps/:ibzlibcasesteps?/infogridview9/:infogridview9?',
                    meta: {
                        caption: 'entities.ibzlibcasesteps.views.infogridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibcasesteps', parameterName: 'ibzlibcasesteps' },
                            { pathName: 'infogridview9', parameterName: 'infogridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-case-steps-info-grid-view9/ibz-lib-case-steps-info-grid-view9.vue'),
                },
                {
                    path: 'modules/:module?/pickupview/:pickupview?',
                    meta: {
                        caption: 'entities.module.views.pickupview.title',
                        info:'',
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
                        caption: 'entities.productplan.views.gridview.title',
                        info:'',
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
                        caption: 'entities.productplan.views.gridview.title',
                        info:'',
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
                    path: 'projects/:project?/testtasks/:testtask?/projectneweditview/:projectneweditview?',
                    meta: {
                        caption: 'entities.testtask.views.projectneweditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'projectneweditview', parameterName: 'projectneweditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-project-new-edit-view/test-task-project-new-edit-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/projectneweditview/:projectneweditview?',
                    meta: {
                        caption: 'entities.testtask.views.projectneweditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'projectneweditview', parameterName: 'projectneweditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-project-new-edit-view/test-task-project-new-edit-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/projectneweditview/:projectneweditview?',
                    meta: {
                        caption: 'entities.testtask.views.projectneweditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'projectneweditview', parameterName: 'projectneweditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-project-new-edit-view/test-task-project-new-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.bug.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-edit-view/bug-main-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.bug.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-edit-view/bug-main-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.bug.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-edit-view/bug-main-edit-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.bug.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-edit-view/bug-main-edit-view.vue'),
                },
                {
                    path: 'bugs/:bug?/maineditview/:maineditview?',
                    meta: {
                        caption: 'entities.bug.views.maineditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'maineditview', parameterName: 'maineditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-edit-view/bug-main-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/projectteams/:projectteam?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.projectteam.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectteams', parameterName: 'projectteam' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-team-main-grid-view/project-team-main-grid-view.vue'),
                },
                {
                    path: 'projectteams/:projectteam?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.projectteam.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectteams', parameterName: 'projectteam' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-team-main-grid-view/project-team-main-grid-view.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzlibmodules/:ibzlibmodule?/casetreeexpview/:casetreeexpview?',
                    meta: {
                        caption: 'entities.ibzlibmodule.views.casetreeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzlibmodules', parameterName: 'ibzlibmodule' },
                            { pathName: 'casetreeexpview', parameterName: 'casetreeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-module-case-tree-exp-view/ibz-lib-module-case-tree-exp-view.vue'),
                },
                {
                    path: 'ibzlibmodules/:ibzlibmodule?/casetreeexpview/:casetreeexpview?',
                    meta: {
                        caption: 'entities.ibzlibmodule.views.casetreeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibmodules', parameterName: 'ibzlibmodule' },
                            { pathName: 'casetreeexpview', parameterName: 'casetreeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-module-case-tree-exp-view/ibz-lib-module-case-tree-exp-view.vue'),
                },
                {
                    path: 'todos/:todo?/todocreateview/:todocreateview?',
                    meta: {
                        caption: 'entities.todo.views.todocreateview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'todocreateview', parameterName: 'todocreateview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/todo-todo-create-view/todo-todo-create-view.vue'),
                },
                {
                    path: 'products/:product?/testlistexpview/:testlistexpview?',
                    meta: {
                        caption: 'entities.product.views.testlistexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testlistexpview', parameterName: 'testlistexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-test-list-exp-view/product-test-list-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/activiteoptionview/:activiteoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.activiteoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'activiteoptionview', parameterName: 'activiteoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-activite-option-view/test-task-activite-option-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/activiteoptionview/:activiteoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.activiteoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'activiteoptionview', parameterName: 'activiteoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-activite-option-view/test-task-activite-option-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/activiteoptionview/:activiteoptionview?',
                    meta: {
                        caption: 'entities.testtask.views.activiteoptionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'activiteoptionview', parameterName: 'activiteoptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-activite-option-view/test-task-activite-option-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/projectgridview/:projectgridview?',
                    meta: {
                        caption: 'entities.bug.views.projectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'projectgridview', parameterName: 'projectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-project-grid-view/bug-project-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/projectgridview/:projectgridview?',
                    meta: {
                        caption: 'entities.bug.views.projectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'projectgridview', parameterName: 'projectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-project-grid-view/bug-project-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/projectgridview/:projectgridview?',
                    meta: {
                        caption: 'entities.bug.views.projectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'projectgridview', parameterName: 'projectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-project-grid-view/bug-project-grid-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/projectgridview/:projectgridview?',
                    meta: {
                        caption: 'entities.bug.views.projectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'projectgridview', parameterName: 'projectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-project-grid-view/bug-project-grid-view.vue'),
                },
                {
                    path: 'bugs/:bug?/projectgridview/:projectgridview?',
                    meta: {
                        caption: 'entities.bug.views.projectgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'projectgridview', parameterName: 'projectgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-project-grid-view/bug-project-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/maininfoview9/:maininfoview9?',
                    meta: {
                        caption: 'entities.task.views.maininfoview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maininfoview9', parameterName: 'maininfoview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-info-view9/task-main-info-view9.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maininfoview9/:maininfoview9?',
                    meta: {
                        caption: 'entities.task.views.maininfoview9.title',
                        info:'',
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
                    path: 'stories/:story?/tasks/:task?/maininfoview9/:maininfoview9?',
                    meta: {
                        caption: 'entities.task.views.maininfoview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.task.views.maininfoview9.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/projectmpickupview3/:projectmpickupview3?',
                    meta: {
                        caption: 'entities.story.views.projectmpickupview3.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'projectmpickupview3', parameterName: 'projectmpickupview3' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-project-mpickup-view3/story-project-mpickup-view3.vue'),
                },
                {
                    path: 'stories/:story?/projectmpickupview3/:projectmpickupview3?',
                    meta: {
                        caption: 'entities.story.views.projectmpickupview3.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'projectmpickupview3', parameterName: 'projectmpickupview3' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-project-mpickup-view3/story-project-mpickup-view3.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.bug.views.plansubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.bug.views.plansubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'plansubgridview', parameterName: 'plansubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-plan-sub-grid-view/bug-plan-sub-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.bug.views.plansubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.bug.views.plansubgridview.title',
                        info:'',
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
                        caption: 'entities.bug.views.plansubgridview.title',
                        info:'',
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
                    path: 'projects/:project?/testtasks/:testtask?/myygridview/:myygridview?',
                    meta: {
                        caption: 'entities.testtask.views.myygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'myygridview', parameterName: 'myygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-my-ygrid-view/test-task-my-ygrid-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/myygridview/:myygridview?',
                    meta: {
                        caption: 'entities.testtask.views.myygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'myygridview', parameterName: 'myygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-my-ygrid-view/test-task-my-ygrid-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/myygridview/:myygridview?',
                    meta: {
                        caption: 'entities.testtask.views.myygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'myygridview', parameterName: 'myygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-my-ygrid-view/test-task-my-ygrid-view.vue'),
                },
                {
                    path: 'modules/:module?/editview/:editview?',
                    meta: {
                        caption: 'entities.module.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'modules', parameterName: 'module' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/module-edit-view/module-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/projectmodules/:projectmodule?/quickcfgview/:quickcfgview?',
                    meta: {
                        caption: 'entities.projectmodule.views.quickcfgview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'quickcfgview', parameterName: 'quickcfgview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-quick-cfg-view/project-module-quick-cfg-view.vue'),
                },
                {
                    path: 'projectmodules/:projectmodule?/quickcfgview/:quickcfgview?',
                    meta: {
                        caption: 'entities.projectmodule.views.quickcfgview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'quickcfgview', parameterName: 'quickcfgview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-quick-cfg-view/project-module-quick-cfg-view.vue'),
                },
                {
                    path: 'products/:product?/testmodules/:testmodule?/gridviewmain/:gridviewmain?',
                    meta: {
                        caption: 'entities.testmodule.views.gridviewmain.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testmodules', parameterName: 'testmodule' },
                            { pathName: 'gridviewmain', parameterName: 'gridviewmain' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-module-grid-view-main/test-module-grid-view-main.vue'),
                },
                {
                    path: 'testmodules/:testmodule?/gridviewmain/:gridviewmain?',
                    meta: {
                        caption: 'entities.testmodule.views.gridviewmain.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testmodules', parameterName: 'testmodule' },
                            { pathName: 'gridviewmain', parameterName: 'gridviewmain' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-module-grid-view-main/test-module-grid-view-main.vue'),
                },
                {
                    path: 'products/:product?/casetreeexpview/:casetreeexpview?',
                    meta: {
                        caption: 'entities.product.views.casetreeexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'casetreeexpview', parameterName: 'casetreeexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-case-tree-exp-view/product-case-tree-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/releasesubgridview_done/:releasesubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_done', parameterName: 'releasesubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-done/bug-release-sub-grid-view-done.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/releasesubgridview_done/:releasesubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_done', parameterName: 'releasesubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-done/bug-release-sub-grid-view-done.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/releasesubgridview_done/:releasesubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_done', parameterName: 'releasesubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-done/bug-release-sub-grid-view-done.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/releasesubgridview_done/:releasesubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_done', parameterName: 'releasesubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-done/bug-release-sub-grid-view-done.vue'),
                },
                {
                    path: 'bugs/:bug?/releasesubgridview_done/:releasesubgridview_done?',
                    meta: {
                        caption: 'entities.bug.views.releasesubgridview_done.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'releasesubgridview_done', parameterName: 'releasesubgridview_done' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-release-sub-grid-view-done/bug-release-sub-grid-view-done.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/optionview/:optionview?',
                    meta: {
                        caption: 'entities.case.views.optionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'optionview', parameterName: 'optionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-option-view/case-option-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/optionview/:optionview?',
                    meta: {
                        caption: 'entities.case.views.optionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'optionview', parameterName: 'optionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-option-view/case-option-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/optionview/:optionview?',
                    meta: {
                        caption: 'entities.case.views.optionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'optionview', parameterName: 'optionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-option-view/case-option-view.vue'),
                },
                {
                    path: 'cases/:case?/optionview/:optionview?',
                    meta: {
                        caption: 'entities.case.views.optionview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'optionview', parameterName: 'optionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-option-view/case-option-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/casetobugeditview/:casetobugeditview?',
                    meta: {
                        caption: 'entities.bug.views.casetobugeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'casetobugeditview', parameterName: 'casetobugeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-case-to-bug-edit-view/bug-case-to-bug-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/casetobugeditview/:casetobugeditview?',
                    meta: {
                        caption: 'entities.bug.views.casetobugeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'casetobugeditview', parameterName: 'casetobugeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-case-to-bug-edit-view/bug-case-to-bug-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/casetobugeditview/:casetobugeditview?',
                    meta: {
                        caption: 'entities.bug.views.casetobugeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'casetobugeditview', parameterName: 'casetobugeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-case-to-bug-edit-view/bug-case-to-bug-edit-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/casetobugeditview/:casetobugeditview?',
                    meta: {
                        caption: 'entities.bug.views.casetobugeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'casetobugeditview', parameterName: 'casetobugeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-case-to-bug-edit-view/bug-case-to-bug-edit-view.vue'),
                },
                {
                    path: 'bugs/:bug?/casetobugeditview/:casetobugeditview?',
                    meta: {
                        caption: 'entities.bug.views.casetobugeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'casetobugeditview', parameterName: 'casetobugeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-case-to-bug-edit-view/bug-case-to-bug-edit-view.vue'),
                },
                {
                    path: 'ibzmyterritories/:ibzmyterritory?/tabexpview/:tabexpview?',
                    meta: {
                        caption: 'entities.ibzmyterritory.views.tabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                            { pathName: 'tabexpview', parameterName: 'tabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-my-territory-tab-exp-view/ibz-my-territory-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/htmlview/:htmlview?',
                    meta: {
                        caption: 'entities.product.views.htmlview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'htmlview', parameterName: 'htmlview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-html-view/product-html-view.vue'),
                },
                {
                    path: 'projectstats/:projectstats?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.projectstats.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectstats', parameterName: 'projectstats' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-stats-edit-view9/project-stats-edit-view9.vue'),
                },
                {
                    path: 'ibzmyterritories/:ibzmyterritory?/dashboardview/:dashboardview?',
                    meta: {
                        caption: 'entities.ibzmyterritory.views.dashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                            { pathName: 'dashboardview', parameterName: 'dashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-my-territory-dashboard-view/ibz-my-territory-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/gridview9_substory/:gridview9_substory?',
                    meta: {
                        caption: 'entities.story.views.gridview9_substory.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'gridview9_substory', parameterName: 'gridview9_substory' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-grid-view9-sub-story/story-grid-view9-sub-story.vue'),
                },
                {
                    path: 'stories/:story?/gridview9_substory/:gridview9_substory?',
                    meta: {
                        caption: 'entities.story.views.gridview9_substory.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'gridview9_substory', parameterName: 'gridview9_substory' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-grid-view9-sub-story/story-grid-view9-sub-story.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/testmaindetaileditview9/:testmaindetaileditview9?',
                    meta: {
                        caption: 'entities.case.views.testmaindetaileditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testmaindetaileditview9', parameterName: 'testmaindetaileditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-main-detail-edit-view9/case-test-main-detail-edit-view9.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/testmaindetaileditview9/:testmaindetaileditview9?',
                    meta: {
                        caption: 'entities.case.views.testmaindetaileditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testmaindetaileditview9', parameterName: 'testmaindetaileditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-main-detail-edit-view9/case-test-main-detail-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/testmaindetaileditview9/:testmaindetaileditview9?',
                    meta: {
                        caption: 'entities.case.views.testmaindetaileditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testmaindetaileditview9', parameterName: 'testmaindetaileditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-main-detail-edit-view9/case-test-main-detail-edit-view9.vue'),
                },
                {
                    path: 'cases/:case?/testmaindetaileditview9/:testmaindetaileditview9?',
                    meta: {
                        caption: 'entities.case.views.testmaindetaileditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testmaindetaileditview9', parameterName: 'testmaindetaileditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-test-main-detail-edit-view9/case-test-main-detail-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/buildsubgridview_new_9212/:buildsubgridview_new_9212?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new_9212.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new_9212', parameterName: 'buildsubgridview_new_9212' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new-9212/bug-build-sub-grid-view-new-9212.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/buildsubgridview_new_9212/:buildsubgridview_new_9212?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new_9212.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new_9212', parameterName: 'buildsubgridview_new_9212' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new-9212/bug-build-sub-grid-view-new-9212.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/buildsubgridview_new_9212/:buildsubgridview_new_9212?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new_9212.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new_9212', parameterName: 'buildsubgridview_new_9212' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new-9212/bug-build-sub-grid-view-new-9212.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/buildsubgridview_new_9212/:buildsubgridview_new_9212?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new_9212.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new_9212', parameterName: 'buildsubgridview_new_9212' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new-9212/bug-build-sub-grid-view-new-9212.vue'),
                },
                {
                    path: 'bugs/:bug?/buildsubgridview_new_9212/:buildsubgridview_new_9212?',
                    meta: {
                        caption: 'entities.bug.views.buildsubgridview_new_9212.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buildsubgridview_new_9212', parameterName: 'buildsubgridview_new_9212' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-build-sub-grid-view-new-9212/bug-build-sub-grid-view-new-9212.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/projecteditview/:projecteditview?',
                    meta: {
                        caption: 'entities.story.views.projecteditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'projecteditview', parameterName: 'projecteditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-project-edit-view/story-project-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/projecteditview/:projecteditview?',
                    meta: {
                        caption: 'entities.story.views.projecteditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'projecteditview', parameterName: 'projecteditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-project-edit-view/story-project-edit-view.vue'),
                },
                {
                    path: 'products/:product?/productmodules/:productmodule?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.productmodule.views.gridview.title',
                        info:'',
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
                        caption: 'entities.productmodule.views.gridview.title',
                        info:'',
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
                    path: 'projects/:project?/leftsidebarlistview/:leftsidebarlistview?',
                    meta: {
                        caption: 'entities.project.views.leftsidebarlistview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/editview/:editview?',
                    meta: {
                        caption: 'entities.bug.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/editview/:editview?',
                    meta: {
                        caption: 'entities.bug.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-edit-view/bug-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/editview/:editview?',
                    meta: {
                        caption: 'entities.bug.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.bug.views.editview.title',
                        info:'',
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
                        caption: 'entities.bug.views.editview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/tasks/:task?/kanbanview/:kanbanview?',
                    meta: {
                        caption: 'entities.task.views.kanbanview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'kanbanview', parameterName: 'kanbanview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-kanban-view/task-kanban-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/kanbanview/:kanbanview?',
                    meta: {
                        caption: 'entities.task.views.kanbanview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'kanbanview', parameterName: 'kanbanview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-kanban-view/task-kanban-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/kanbanview/:kanbanview?',
                    meta: {
                        caption: 'entities.task.views.kanbanview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'kanbanview', parameterName: 'kanbanview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-kanban-view/task-kanban-view.vue'),
                },
                {
                    path: 'tasks/:task?/kanbanview/:kanbanview?',
                    meta: {
                        caption: 'entities.task.views.kanbanview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'kanbanview', parameterName: 'kanbanview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-kanban-view/task-kanban-view.vue'),
                },
                {
                    path: 'products/:product?/testreports/:testreport?/maininfoview/:maininfoview?',
                    meta: {
                        caption: 'entities.testreport.views.maininfoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'maininfoview', parameterName: 'maininfoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-main-info-view/test-report-main-info-view.vue'),
                },
                {
                    path: 'testreports/:testreport?/maininfoview/:maininfoview?',
                    meta: {
                        caption: 'entities.testreport.views.maininfoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'maininfoview', parameterName: 'maininfoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-main-info-view/test-report-main-info-view.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/maininfoview/:maininfoview?',
                    meta: {
                        caption: 'entities.release.views.maininfoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'maininfoview', parameterName: 'maininfoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-main-info-view/release-main-info-view.vue'),
                },
                {
                    path: 'releases/:release?/maininfoview/:maininfoview?',
                    meta: {
                        caption: 'entities.release.views.maininfoview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'maininfoview', parameterName: 'maininfoview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-main-info-view/release-main-info-view.vue'),
                },
                {
                    path: 'productstats/:productstats?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.productstats.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productstats', parameterName: 'productstats' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-stats-grid-view9/product-stats-grid-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.task.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-grid-view9-assigned-to-me/task-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.task.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-grid-view9-assigned-to-me/task-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.task.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-grid-view9-assigned-to-me/task-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'tasks/:task?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.task.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-grid-view9-assigned-to-me/task-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzcases/:ibzcase?/neweditview/:neweditview?',
                    meta: {
                        caption: 'entities.ibzcase.views.neweditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'neweditview', parameterName: 'neweditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-new-edit-view/ibz-case-new-edit-view.vue'),
                },
                {
                    path: 'ibzcases/:ibzcase?/neweditview/:neweditview?',
                    meta: {
                        caption: 'entities.ibzcase.views.neweditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'neweditview', parameterName: 'neweditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-new-edit-view/ibz-case-new-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/projectmodules/:projectmodule?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.projectmodule.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-main-grid-view/project-module-main-grid-view.vue'),
                },
                {
                    path: 'projectmodules/:projectmodule?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.projectmodule.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-main-grid-view/project-module-main-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/tobugeditview/:tobugeditview?',
                    meta: {
                        caption: 'entities.case.views.tobugeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'tobugeditview', parameterName: 'tobugeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-to-bug-edit-view/case-to-bug-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/tobugeditview/:tobugeditview?',
                    meta: {
                        caption: 'entities.case.views.tobugeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'tobugeditview', parameterName: 'tobugeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-to-bug-edit-view/case-to-bug-edit-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/tobugeditview/:tobugeditview?',
                    meta: {
                        caption: 'entities.case.views.tobugeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'tobugeditview', parameterName: 'tobugeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-to-bug-edit-view/case-to-bug-edit-view.vue'),
                },
                {
                    path: 'cases/:case?/tobugeditview/:tobugeditview?',
                    meta: {
                        caption: 'entities.case.views.tobugeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'tobugeditview', parameterName: 'tobugeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-to-bug-edit-view/case-to-bug-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/ibzcasesteps/:ibzcasestep?/carryouteditmode/:carryouteditmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.carryouteditmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'carryouteditmode', parameterName: 'carryouteditmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-carry-out-edit-mode/case-step-carry-out-edit-mode.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/ibzcasesteps/:ibzcasestep?/carryouteditmode/:carryouteditmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.carryouteditmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'carryouteditmode', parameterName: 'carryouteditmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-carry-out-edit-mode/case-step-carry-out-edit-mode.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/ibzcasesteps/:ibzcasestep?/carryouteditmode/:carryouteditmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.carryouteditmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'carryouteditmode', parameterName: 'carryouteditmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-carry-out-edit-mode/case-step-carry-out-edit-mode.vue'),
                },
                {
                    path: 'cases/:case?/ibzcasesteps/:ibzcasestep?/carryouteditmode/:carryouteditmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.carryouteditmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'carryouteditmode', parameterName: 'carryouteditmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-carry-out-edit-mode/case-step-carry-out-edit-mode.vue'),
                },
                {
                    path: 'ibzcasesteps/:ibzcasestep?/carryouteditmode/:carryouteditmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.carryouteditmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'carryouteditmode', parameterName: 'carryouteditmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-carry-out-edit-mode/case-step-carry-out-edit-mode.vue'),
                },
                {
                    path: 'modules/:module?/linegridview/:linegridview?',
                    meta: {
                        caption: 'entities.module.views.linegridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'modules', parameterName: 'module' },
                            { pathName: 'linegridview', parameterName: 'linegridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/module-line-grid-view/module-line-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.case.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-my-grid-view/case-main-my-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.case.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-my-grid-view/case-main-my-grid-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.case.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-my-grid-view/case-main-my-grid-view.vue'),
                },
                {
                    path: 'cases/:case?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.case.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-my-grid-view/case-main-my-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/editview_activate/:editview_activate?',
                    meta: {
                        caption: 'entities.project.views.editview_activate.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'editview_activate', parameterName: 'editview_activate' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-edit-view-activate/project-edit-view-activate.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/confirmview/:confirmview?',
                    meta: {
                        caption: 'entities.bug.views.confirmview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'confirmview', parameterName: 'confirmview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-confirm-view/bug-confirm-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/confirmview/:confirmview?',
                    meta: {
                        caption: 'entities.bug.views.confirmview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'confirmview', parameterName: 'confirmview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-confirm-view/bug-confirm-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/confirmview/:confirmview?',
                    meta: {
                        caption: 'entities.bug.views.confirmview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'confirmview', parameterName: 'confirmview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-confirm-view/bug-confirm-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/confirmview/:confirmview?',
                    meta: {
                        caption: 'entities.bug.views.confirmview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'confirmview', parameterName: 'confirmview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-confirm-view/bug-confirm-view.vue'),
                },
                {
                    path: 'bugs/:bug?/confirmview/:confirmview?',
                    meta: {
                        caption: 'entities.bug.views.confirmview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'confirmview', parameterName: 'confirmview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-confirm-view/bug-confirm-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/pickupgridview5/:pickupgridview5?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview5', parameterName: 'pickupgridview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view5/bug-pickup-grid-view5.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/pickupgridview5/:pickupgridview5?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview5', parameterName: 'pickupgridview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view5/bug-pickup-grid-view5.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/pickupgridview5/:pickupgridview5?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview5', parameterName: 'pickupgridview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view5/bug-pickup-grid-view5.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/pickupgridview5/:pickupgridview5?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview5', parameterName: 'pickupgridview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view5/bug-pickup-grid-view5.vue'),
                },
                {
                    path: 'bugs/:bug?/pickupgridview5/:pickupgridview5?',
                    meta: {
                        caption: 'entities.bug.views.pickupgridview5.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'pickupgridview5', parameterName: 'pickupgridview5' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-pickup-grid-view5/bug-pickup-grid-view5.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.case.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-dashboard-view/case-main-dashboard-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.case.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-dashboard-view/case-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.case.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-dashboard-view/case-main-dashboard-view.vue'),
                },
                {
                    path: 'cases/:case?/maindashboardview/:maindashboardview?',
                    meta: {
                        caption: 'entities.case.views.maindashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-dashboard-view/case-main-dashboard-view.vue'),
                },
                {
                    path: 'products/:product?/mainview_edit/:mainview_edit?',
                    meta: {
                        caption: 'entities.product.views.mainview_edit.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'mainview_edit', parameterName: 'mainview_edit' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-main-view-edit/product-main-view-edit.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/reviewview/:reviewview?',
                    meta: {
                        caption: 'entities.story.views.reviewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'reviewview', parameterName: 'reviewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-rev-iew-view/story-rev-iew-view.vue'),
                },
                {
                    path: 'stories/:story?/reviewview/:reviewview?',
                    meta: {
                        caption: 'entities.story.views.reviewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'reviewview', parameterName: 'reviewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-rev-iew-view/story-rev-iew-view.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/editview/:editview?',
                    meta: {
                        caption: 'entities.ibzlib.views.editview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'editview', parameterName: 'editview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-edit-view/ibz-lib-edit-view.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzlibmodules/:ibzlibmodule?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.ibzlibmodule.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzlibmodules', parameterName: 'ibzlibmodule' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-module-grid-view/ibz-lib-module-grid-view.vue'),
                },
                {
                    path: 'ibzlibmodules/:ibzlibmodule?/gridview/:gridview?',
                    meta: {
                        caption: 'entities.ibzlibmodule.views.gridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibmodules', parameterName: 'ibzlibmodule' },
                            { pathName: 'gridview', parameterName: 'gridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-lib-module-grid-view/ibz-lib-module-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/projectpickupgridview/:projectpickupgridview?',
                    meta: {
                        caption: 'entities.story.views.projectpickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'projectpickupgridview', parameterName: 'projectpickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-project-pickup-grid-view/story-project-pickup-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/projectpickupgridview/:projectpickupgridview?',
                    meta: {
                        caption: 'entities.story.views.projectpickupgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'projectpickupgridview', parameterName: 'projectpickupgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-project-pickup-grid-view/story-project-pickup-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/maindetaileditview9/:maindetaileditview9?',
                    meta: {
                        caption: 'entities.case.views.maindetaileditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maindetaileditview9', parameterName: 'maindetaileditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-detail-edit-view9/case-main-detail-edit-view9.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/maindetaileditview9/:maindetaileditview9?',
                    meta: {
                        caption: 'entities.case.views.maindetaileditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maindetaileditview9', parameterName: 'maindetaileditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-detail-edit-view9/case-main-detail-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/maindetaileditview9/:maindetaileditview9?',
                    meta: {
                        caption: 'entities.case.views.maindetaileditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maindetaileditview9', parameterName: 'maindetaileditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-detail-edit-view9/case-main-detail-edit-view9.vue'),
                },
                {
                    path: 'cases/:case?/maindetaileditview9/:maindetaileditview9?',
                    meta: {
                        caption: 'entities.case.views.maindetaileditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'maindetaileditview9', parameterName: 'maindetaileditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-main-detail-edit-view9/case-main-detail-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/listexpview/:listexpview?',
                    meta: {
                        caption: 'entities.product.views.listexpview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/buglifeeditview9/:buglifeeditview9?',
                    meta: {
                        caption: 'entities.bug.views.buglifeeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buglifeeditview9', parameterName: 'buglifeeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-bug-life-edit-view9/bug-bug-life-edit-view9.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/buglifeeditview9/:buglifeeditview9?',
                    meta: {
                        caption: 'entities.bug.views.buglifeeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buglifeeditview9', parameterName: 'buglifeeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-bug-life-edit-view9/bug-bug-life-edit-view9.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/buglifeeditview9/:buglifeeditview9?',
                    meta: {
                        caption: 'entities.bug.views.buglifeeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buglifeeditview9', parameterName: 'buglifeeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-bug-life-edit-view9/bug-bug-life-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/buglifeeditview9/:buglifeeditview9?',
                    meta: {
                        caption: 'entities.bug.views.buglifeeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buglifeeditview9', parameterName: 'buglifeeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-bug-life-edit-view9/bug-bug-life-edit-view9.vue'),
                },
                {
                    path: 'bugs/:bug?/buglifeeditview9/:buglifeeditview9?',
                    meta: {
                        caption: 'entities.bug.views.buglifeeditview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'buglifeeditview9', parameterName: 'buglifeeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-bug-life-edit-view9/bug-bug-life-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/gridview9_mecretae/:gridview9_mecretae?',
                    meta: {
                        caption: 'entities.case.views.gridview9_mecretae.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview9_mecretae', parameterName: 'gridview9_mecretae' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view9-me-cretae/case-grid-view9-me-cretae.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/gridview9_mecretae/:gridview9_mecretae?',
                    meta: {
                        caption: 'entities.case.views.gridview9_mecretae.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview9_mecretae', parameterName: 'gridview9_mecretae' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view9-me-cretae/case-grid-view9-me-cretae.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/gridview9_mecretae/:gridview9_mecretae?',
                    meta: {
                        caption: 'entities.case.views.gridview9_mecretae.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview9_mecretae', parameterName: 'gridview9_mecretae' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view9-me-cretae/case-grid-view9-me-cretae.vue'),
                },
                {
                    path: 'cases/:case?/gridview9_mecretae/:gridview9_mecretae?',
                    meta: {
                        caption: 'entities.case.views.gridview9_mecretae.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview9_mecretae', parameterName: 'gridview9_mecretae' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view9-me-cretae/case-grid-view9-me-cretae.vue'),
                },
                {
                    path: 'projects/:project?/tasktreeexpview/:tasktreeexpview?',
                    meta: {
                        caption: 'entities.project.views.tasktreeexpview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.bug.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-my-grid-view/bug-main-my-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.bug.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-my-grid-view/bug-main-my-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.bug.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-my-grid-view/bug-main-my-grid-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.bug.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-my-grid-view/bug-main-my-grid-view.vue'),
                },
                {
                    path: 'bugs/:bug?/mainmygridview/:mainmygridview?',
                    meta: {
                        caption: 'entities.bug.views.mainmygridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mainmygridview', parameterName: 'mainmygridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-main-my-grid-view/bug-main-my-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/exceditview/:exceditview?',
                    meta: {
                        caption: 'entities.case.views.exceditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'exceditview', parameterName: 'exceditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-exc-edit-view/case-exc-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/exceditview/:exceditview?',
                    meta: {
                        caption: 'entities.case.views.exceditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'exceditview', parameterName: 'exceditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-exc-edit-view/case-exc-edit-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/exceditview/:exceditview?',
                    meta: {
                        caption: 'entities.case.views.exceditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'exceditview', parameterName: 'exceditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-exc-edit-view/case-exc-edit-view.vue'),
                },
                {
                    path: 'cases/:case?/exceditview/:exceditview?',
                    meta: {
                        caption: 'entities.case.views.exceditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'exceditview', parameterName: 'exceditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-exc-edit-view/case-exc-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/forwardview/:forwardview?',
                    meta: {
                        caption: 'entities.task.views.forwardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'forwardview', parameterName: 'forwardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-forward-view/task-forward-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/forwardview/:forwardview?',
                    meta: {
                        caption: 'entities.task.views.forwardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'forwardview', parameterName: 'forwardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-forward-view/task-forward-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/forwardview/:forwardview?',
                    meta: {
                        caption: 'entities.task.views.forwardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'forwardview', parameterName: 'forwardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-forward-view/task-forward-view.vue'),
                },
                {
                    path: 'tasks/:task?/forwardview/:forwardview?',
                    meta: {
                        caption: 'entities.task.views.forwardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'forwardview', parameterName: 'forwardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-forward-view/task-forward-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/tasktypeganttview/:tasktypeganttview?',
                    meta: {
                        caption: 'entities.task.views.tasktypeganttview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'tasktypeganttview', parameterName: 'tasktypeganttview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-task-type-gantt-view/task-task-type-gantt-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/tasktypeganttview/:tasktypeganttview?',
                    meta: {
                        caption: 'entities.task.views.tasktypeganttview.title',
                        info:'',
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
                    path: 'stories/:story?/tasks/:task?/tasktypeganttview/:tasktypeganttview?',
                    meta: {
                        caption: 'entities.task.views.tasktypeganttview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.task.views.tasktypeganttview.title',
                        info:'',
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
                    path: 'projects/:project?/dashboardinfoview/:dashboardinfoview?',
                    meta: {
                        caption: 'entities.project.views.dashboardinfoview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/todoeditview/:todoeditview?',
                    meta: {
                        caption: 'entities.bug.views.todoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'todoeditview', parameterName: 'todoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-todo-edit-view/bug-todo-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/todoeditview/:todoeditview?',
                    meta: {
                        caption: 'entities.bug.views.todoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'todoeditview', parameterName: 'todoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-todo-edit-view/bug-todo-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/todoeditview/:todoeditview?',
                    meta: {
                        caption: 'entities.bug.views.todoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'todoeditview', parameterName: 'todoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-todo-edit-view/bug-todo-edit-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/todoeditview/:todoeditview?',
                    meta: {
                        caption: 'entities.bug.views.todoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'todoeditview', parameterName: 'todoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-todo-edit-view/bug-todo-edit-view.vue'),
                },
                {
                    path: 'bugs/:bug?/todoeditview/:todoeditview?',
                    meta: {
                        caption: 'entities.bug.views.todoeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'todoeditview', parameterName: 'todoeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-todo-edit-view/bug-todo-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tabexpview/:tabexpview?',
                    meta: {
                        caption: 'entities.story.views.tabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tabexpview', parameterName: 'tabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-tab-exp-view/story-tab-exp-view.vue'),
                },
                {
                    path: 'stories/:story?/tabexpview/:tabexpview?',
                    meta: {
                        caption: 'entities.story.views.tabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tabexpview', parameterName: 'tabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-tab-exp-view/story-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.task.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-main-grid-view/task-main-grid-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.task.views.maingridview.title',
                        info:'',
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
                    path: 'stories/:story?/tasks/:task?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.task.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
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
                        caption: 'entities.task.views.maingridview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/reportsubgridview/:reportsubgridview?',
                    meta: {
                        caption: 'entities.story.views.reportsubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'reportsubgridview', parameterName: 'reportsubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-report-sub-grid-view/story-report-sub-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/reportsubgridview/:reportsubgridview?',
                    meta: {
                        caption: 'entities.story.views.reportsubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'reportsubgridview', parameterName: 'reportsubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-report-sub-grid-view/story-report-sub-grid-view.vue'),
                },
                {
                    path: 'ibzlibs/:ibzlib?/ibzcases/:ibzcase?/dashboardview/:dashboardview?',
                    meta: {
                        caption: 'entities.ibzcase.views.dashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'dashboardview', parameterName: 'dashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-dashboard-view/ibz-case-dashboard-view.vue'),
                },
                {
                    path: 'ibzcases/:ibzcase?/dashboardview/:dashboardview?',
                    meta: {
                        caption: 'entities.ibzcase.views.dashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcases', parameterName: 'ibzcase' },
                            { pathName: 'dashboardview', parameterName: 'dashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-case-dashboard-view/ibz-case-dashboard-view.vue'),
                },
                {
                    path: 'actions/:action?/producttrendslistview9/:producttrendslistview9?',
                    meta: {
                        caption: 'entities.action.views.producttrendslistview9.title',
                        info:'',
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
                    path: 'projects/:project?/testtasks/:testtask?/editview9_detail/:editview9_detail?',
                    meta: {
                        caption: 'entities.testtask.views.editview9_detail.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview9_detail', parameterName: 'editview9_detail' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view9-detail/test-task-edit-view9-detail.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/editview9_detail/:editview9_detail?',
                    meta: {
                        caption: 'entities.testtask.views.editview9_detail.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview9_detail', parameterName: 'editview9_detail' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view9-detail/test-task-edit-view9-detail.vue'),
                },
                {
                    path: 'testtasks/:testtask?/editview9_detail/:editview9_detail?',
                    meta: {
                        caption: 'entities.testtask.views.editview9_detail.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview9_detail', parameterName: 'editview9_detail' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view9-detail/test-task-edit-view9-detail.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/subtasks/:subtask?/subtasknewview/:subtasknewview?',
                    meta: {
                        caption: 'entities.subtask.views.subtasknewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'subtasknewview', parameterName: 'subtasknewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-sub-task-new-view/task-sub-task-new-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/subtasks/:subtask?/subtasknewview/:subtasknewview?',
                    meta: {
                        caption: 'entities.subtask.views.subtasknewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'subtasknewview', parameterName: 'subtasknewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-sub-task-new-view/task-sub-task-new-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/subtasks/:subtask?/subtasknewview/:subtasknewview?',
                    meta: {
                        caption: 'entities.subtask.views.subtasknewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'subtasknewview', parameterName: 'subtasknewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-sub-task-new-view/task-sub-task-new-view.vue'),
                },
                {
                    path: 'tasks/:task?/subtasks/:subtask?/subtasknewview/:subtasknewview?',
                    meta: {
                        caption: 'entities.subtask.views.subtasknewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'subtasknewview', parameterName: 'subtasknewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-sub-task-new-view/task-sub-task-new-view.vue'),
                },
                {
                    path: 'subtasks/:subtask?/subtasknewview/:subtasknewview?',
                    meta: {
                        caption: 'entities.subtask.views.subtasknewview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'subtasknewview', parameterName: 'subtasknewview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-sub-task-new-view/task-sub-task-new-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/closetaskview/:closetaskview?',
                    meta: {
                        caption: 'entities.task.views.closetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'closetaskview', parameterName: 'closetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-close-task-view/task-close-task-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/closetaskview/:closetaskview?',
                    meta: {
                        caption: 'entities.task.views.closetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'closetaskview', parameterName: 'closetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-close-task-view/task-close-task-view.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/closetaskview/:closetaskview?',
                    meta: {
                        caption: 'entities.task.views.closetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'closetaskview', parameterName: 'closetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-close-task-view/task-close-task-view.vue'),
                },
                {
                    path: 'tasks/:task?/closetaskview/:closetaskview?',
                    meta: {
                        caption: 'entities.task.views.closetaskview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'closetaskview', parameterName: 'closetaskview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-close-task-view/task-close-task-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/releasesubgridview/:releasesubgridview?',
                    meta: {
                        caption: 'entities.story.views.releasesubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'releasesubgridview', parameterName: 'releasesubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-release-sub-grid-view/story-release-sub-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/releasesubgridview/:releasesubgridview?',
                    meta: {
                        caption: 'entities.story.views.releasesubgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'releasesubgridview', parameterName: 'releasesubgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-release-sub-grid-view/story-release-sub-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/curprojectwgridview/:curprojectwgridview?',
                    meta: {
                        caption: 'entities.story.views.curprojectwgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'curprojectwgridview', parameterName: 'curprojectwgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-cur-project-wgrid-view/story-cur-project-wgrid-view.vue'),
                },
                {
                    path: 'stories/:story?/curprojectwgridview/:curprojectwgridview?',
                    meta: {
                        caption: 'entities.story.views.curprojectwgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'curprojectwgridview', parameterName: 'curprojectwgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-cur-project-wgrid-view/story-cur-project-wgrid-view.vue'),
                },
                {
                    path: 'actions/:action?/myalltrendslistview/:myalltrendslistview?',
                    meta: {
                        caption: 'entities.action.views.myalltrendslistview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'myalltrendslistview', parameterName: 'myalltrendslistview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/action-my-all-trends-list-view/action-my-all-trends-list-view.vue'),
                },
                {
                    path: 'projects/:project?/builds/:build?/mainview/:mainview?',
                    meta: {
                        caption: 'entities.build.views.mainview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mainview', parameterName: 'mainview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-main-view/build-main-view.vue'),
                },
                {
                    path: 'products/:product?/builds/:build?/mainview/:mainview?',
                    meta: {
                        caption: 'entities.build.views.mainview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mainview', parameterName: 'mainview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-main-view/build-main-view.vue'),
                },
                {
                    path: 'builds/:build?/mainview/:mainview?',
                    meta: {
                        caption: 'entities.build.views.mainview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mainview', parameterName: 'mainview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/build-main-view/build-main-view.vue'),
                },
                {
                    path: 'actions/:action?/projecttrendslistview9/:projecttrendslistview9?',
                    meta: {
                        caption: 'entities.action.views.projecttrendslistview9.title',
                        info:'',
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
                    path: 'projects/:project?/testtasks/:testtask?/editview_committest/:editview_committest?',
                    meta: {
                        caption: 'entities.testtask.views.editview_committest.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview_committest', parameterName: 'editview_committest' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view-commit-test/test-task-edit-view-commit-test.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/editview_committest/:editview_committest?',
                    meta: {
                        caption: 'entities.testtask.views.editview_committest.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview_committest', parameterName: 'editview_committest' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view-commit-test/test-task-edit-view-commit-test.vue'),
                },
                {
                    path: 'testtasks/:testtask?/editview_committest/:editview_committest?',
                    meta: {
                        caption: 'entities.testtask.views.editview_committest.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview_committest', parameterName: 'editview_committest' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view-commit-test/test-task-edit-view-commit-test.vue'),
                },
                {
                    path: 'products/:product?/productmodules/:productmodule?/gridviewbranch/:gridviewbranch?',
                    meta: {
                        caption: 'entities.productmodule.views.gridviewbranch.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'gridviewbranch', parameterName: 'gridviewbranch' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-grid-view-branch/product-module-grid-view-branch.vue'),
                },
                {
                    path: 'productmodules/:productmodule?/gridviewbranch/:gridviewbranch?',
                    meta: {
                        caption: 'entities.productmodule.views.gridviewbranch.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'gridviewbranch', parameterName: 'gridviewbranch' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-grid-view-branch/product-module-grid-view-branch.vue'),
                },
                {
                    path: 'products/:product?/testreports/:testreport?/editview_testrange/:editview_testrange?',
                    meta: {
                        caption: 'entities.testreport.views.editview_testrange.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'editview_testrange', parameterName: 'editview_testrange' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-edit-view-test-range/test-report-edit-view-test-range.vue'),
                },
                {
                    path: 'testreports/:testreport?/editview_testrange/:editview_testrange?',
                    meta: {
                        caption: 'entities.testreport.views.editview_testrange.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testreports', parameterName: 'testreport' },
                            { pathName: 'editview_testrange', parameterName: 'editview_testrange' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-report-edit-view-test-range/test-report-edit-view-test-range.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.testtask.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-main-tab-exp-view/test-task-main-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.testtask.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-main-tab-exp-view/test-task-main-tab-exp-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/maintabexpview/:maintabexpview?',
                    meta: {
                        caption: 'entities.testtask.views.maintabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-main-tab-exp-view/test-task-main-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/closeview/:closeview?',
                    meta: {
                        caption: 'entities.story.views.closeview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'closeview', parameterName: 'closeview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-close-view/story-close-view.vue'),
                },
                {
                    path: 'stories/:story?/closeview/:closeview?',
                    meta: {
                        caption: 'entities.story.views.closeview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'closeview', parameterName: 'closeview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-close-view/story-close-view.vue'),
                },
                {
                    path: 'products/:product?/testleftsidebarlistview/:testleftsidebarlistview?',
                    meta: {
                        caption: 'entities.product.views.testleftsidebarlistview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/closeview/:closeview?',
                    meta: {
                        caption: 'entities.bug.views.closeview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closeview', parameterName: 'closeview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-close-view/bug-close-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/closeview/:closeview?',
                    meta: {
                        caption: 'entities.bug.views.closeview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closeview', parameterName: 'closeview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-close-view/bug-close-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/closeview/:closeview?',
                    meta: {
                        caption: 'entities.bug.views.closeview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closeview', parameterName: 'closeview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-close-view/bug-close-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/closeview/:closeview?',
                    meta: {
                        caption: 'entities.bug.views.closeview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closeview', parameterName: 'closeview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-close-view/bug-close-view.vue'),
                },
                {
                    path: 'bugs/:bug?/closeview/:closeview?',
                    meta: {
                        caption: 'entities.bug.views.closeview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closeview', parameterName: 'closeview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-close-view/bug-close-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/plansubeditview/:plansubeditview?',
                    meta: {
                        caption: 'entities.story.views.plansubeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'plansubeditview', parameterName: 'plansubeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-plan-sub-edit-view/story-plan-sub-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/plansubeditview/:plansubeditview?',
                    meta: {
                        caption: 'entities.story.views.plansubeditview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'plansubeditview', parameterName: 'plansubeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-plan-sub-edit-view/story-plan-sub-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/testresults/:testresult?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.testresult.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-edit-view9/test-result-edit-view9.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/testresults/:testresult?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.testresult.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-edit-view9/test-result-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/testresults/:testresult?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.testresult.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-edit-view9/test-result-edit-view9.vue'),
                },
                {
                    path: 'cases/:case?/testresults/:testresult?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.testresult.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-edit-view9/test-result-edit-view9.vue'),
                },
                {
                    path: 'testresults/:testresult?/editview9/:editview9?',
                    meta: {
                        caption: 'entities.testresult.views.editview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testresults', parameterName: 'testresult' },
                            { pathName: 'editview9', parameterName: 'editview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-result-edit-view9/test-result-edit-view9.vue'),
                },
                {
                    path: 'projects/:project?/testtabexpview/:testtabexpview?',
                    meta: {
                        caption: 'entities.project.views.testtabexpview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtabexpview', parameterName: 'testtabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-test-tab-exp-view/project-test-tab-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/editview_putoff/:editview_putoff?',
                    meta: {
                        caption: 'entities.project.views.editview_putoff.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'editview_putoff', parameterName: 'editview_putoff' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-edit-view-putoff/project-edit-view-putoff.vue'),
                },
                {
                    path: 'todos/:todo?/dashboardview/:dashboardview?',
                    meta: {
                        caption: 'entities.todo.views.dashboardview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'dashboardview', parameterName: 'dashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/todo-dashboard-view/todo-dashboard-view.vue'),
                },
                {
                    path: 'projects/:project?/editview/:editview?',
                    meta: {
                        caption: 'entities.project.views.editview.title',
                        info:'',
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
                    path: 'products/:product?/productplans/:productplan?/editview/:editview?',
                    meta: {
                        caption: 'entities.productplan.views.editview.title',
                        info:'',
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
                        caption: 'entities.productplan.views.editview.title',
                        info:'',
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
                    path: 'depts/:dept?/maingridview/:maingridview?',
                    meta: {
                        caption: 'entities.dept.views.maingridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'depts', parameterName: 'dept' },
                            { pathName: 'maingridview', parameterName: 'maingridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/dept-main-grid-view/dept-main-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/usr2mpickupview/:usr2mpickupview?',
                    meta: {
                        caption: 'entities.story.views.usr2mpickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'usr2mpickupview', parameterName: 'usr2mpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-usr2-mpickup-view/story-usr2-mpickup-view.vue'),
                },
                {
                    path: 'stories/:story?/usr2mpickupview/:usr2mpickupview?',
                    meta: {
                        caption: 'entities.story.views.usr2mpickupview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'usr2mpickupview', parameterName: 'usr2mpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-usr2-mpickup-view/story-usr2-mpickup-view.vue'),
                },
                {
                    path: 'actions/:action?/historylistview/:historylistview?',
                    meta: {
                        caption: 'entities.action.views.historylistview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'historylistview', parameterName: 'historylistview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/action-history-list-view/action-history-list-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.story.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-grid-view9-assigned-to-me/story-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'stories/:story?/gridview9_assignedtome/:gridview9_assignedtome?',
                    meta: {
                        caption: 'entities.story.views.gridview9_assignedtome.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'gridview9_assignedtome', parameterName: 'gridview9_assignedtome' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-grid-view9-assigned-to-me/story-grid-view9-assigned-to-me.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/ibztaskestimates/:ibztaskestimate?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskestimate.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskestimates', parameterName: 'ibztaskestimate' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-grid-view9/task-estimate-grid-view9.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/ibztaskestimates/:ibztaskestimate?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskestimate.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskestimates', parameterName: 'ibztaskestimate' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-grid-view9/task-estimate-grid-view9.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/ibztaskestimates/:ibztaskestimate?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskestimate.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskestimates', parameterName: 'ibztaskestimate' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-grid-view9/task-estimate-grid-view9.vue'),
                },
                {
                    path: 'tasks/:task?/ibztaskestimates/:ibztaskestimate?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskestimate.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'ibztaskestimates', parameterName: 'ibztaskestimate' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-grid-view9/task-estimate-grid-view9.vue'),
                },
                {
                    path: 'ibztaskestimates/:ibztaskestimate?/gridview9/:gridview9?',
                    meta: {
                        caption: 'entities.ibztaskestimate.views.gridview9.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibztaskestimates', parameterName: 'ibztaskestimate' },
                            { pathName: 'gridview9', parameterName: 'gridview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-grid-view9/task-estimate-grid-view9.vue'),
                },
                {
                    path: 'products/:product?/editview_close/:editview_close?',
                    meta: {
                        caption: 'entities.product.views.editview_close.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'editview_close', parameterName: 'editview_close' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-edit-view-close/product-edit-view-close.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/plansubgridview/:plansubgridview?',
                    meta: {
                        caption: 'entities.story.views.plansubgridview.title',
                        info:'',
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
                        caption: 'entities.story.views.plansubgridview.title',
                        info:'',
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
                    path: 'products/:product?/stories/:story?/cases/:case?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.case.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view9-story-related/case-grid-view9-story-related.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.case.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view9-story-related/case-grid-view9-story-related.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.case.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view9-story-related/case-grid-view9-story-related.vue'),
                },
                {
                    path: 'cases/:case?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.case.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-grid-view9-story-related/case-grid-view9-story-related.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/editview9_info/:editview9_info?',
                    meta: {
                        caption: 'entities.testtask.views.editview9_info.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview9_info', parameterName: 'editview9_info' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view9-info/test-task-edit-view9-info.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/editview9_info/:editview9_info?',
                    meta: {
                        caption: 'entities.testtask.views.editview9_info.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview9_info', parameterName: 'editview9_info' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view9-info/test-task-edit-view9-info.vue'),
                },
                {
                    path: 'testtasks/:testtask?/editview9_info/:editview9_info?',
                    meta: {
                        caption: 'entities.testtask.views.editview9_info.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'editview9_info', parameterName: 'editview9_info' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/test-task-edit-view9-info/test-task-edit-view9-info.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mainview9_related/:mainview9_related?',
                    meta: {
                        caption: 'entities.story.views.mainview9_related.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview9_related', parameterName: 'mainview9_related' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view9-related/story-main-view9-related.vue'),
                },
                {
                    path: 'stories/:story?/mainview9_related/:mainview9_related?',
                    meta: {
                        caption: 'entities.story.views.mainview9_related.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mainview9_related', parameterName: 'mainview9_related' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-main-view9-related/story-main-view9-related.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.task.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-grid-view9-story-related/task-grid-view9-story-related.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.task.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-grid-view9-story-related/task-grid-view9-story-related.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.task.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-grid-view9-story-related/task-grid-view9-story-related.vue'),
                },
                {
                    path: 'tasks/:task?/gridview9_storyrelated/:gridview9_storyrelated?',
                    meta: {
                        caption: 'entities.task.views.gridview9_storyrelated.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'gridview9_storyrelated', parameterName: 'gridview9_storyrelated' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-grid-view9-story-related/task-grid-view9-story-related.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/curtesttaskgridview/:curtesttaskgridview?',
                    meta: {
                        caption: 'entities.case.views.curtesttaskgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'curtesttaskgridview', parameterName: 'curtesttaskgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-cur-test-task-grid-view/case-cur-test-task-grid-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/curtesttaskgridview/:curtesttaskgridview?',
                    meta: {
                        caption: 'entities.case.views.curtesttaskgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'curtesttaskgridview', parameterName: 'curtesttaskgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-cur-test-task-grid-view/case-cur-test-task-grid-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/curtesttaskgridview/:curtesttaskgridview?',
                    meta: {
                        caption: 'entities.case.views.curtesttaskgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'curtesttaskgridview', parameterName: 'curtesttaskgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-cur-test-task-grid-view/case-cur-test-task-grid-view.vue'),
                },
                {
                    path: 'cases/:case?/curtesttaskgridview/:curtesttaskgridview?',
                    meta: {
                        caption: 'entities.case.views.curtesttaskgridview.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'curtesttaskgridview', parameterName: 'curtesttaskgridview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-cur-test-task-grid-view/case-cur-test-task-grid-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/cases/:case?/ibzcasesteps/:ibzcasestep?/maingridview9_editmode/:maingridview9_editmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.maingridview9_editmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'maingridview9_editmode', parameterName: 'maingridview9_editmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9-edit-mode/case-step-main-grid-view9-edit-mode.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/ibzcasesteps/:ibzcasestep?/maingridview9_editmode/:maingridview9_editmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.maingridview9_editmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'maingridview9_editmode', parameterName: 'maingridview9_editmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9-edit-mode/case-step-main-grid-view9-edit-mode.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/ibzcasesteps/:ibzcasestep?/maingridview9_editmode/:maingridview9_editmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.maingridview9_editmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'maingridview9_editmode', parameterName: 'maingridview9_editmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9-edit-mode/case-step-main-grid-view9-edit-mode.vue'),
                },
                {
                    path: 'cases/:case?/ibzcasesteps/:ibzcasestep?/maingridview9_editmode/:maingridview9_editmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.maingridview9_editmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'maingridview9_editmode', parameterName: 'maingridview9_editmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9-edit-mode/case-step-main-grid-view9-edit-mode.vue'),
                },
                {
                    path: 'ibzcasesteps/:ibzcasestep?/maingridview9_editmode/:maingridview9_editmode?',
                    meta: {
                        caption: 'entities.ibzcasestep.views.maingridview9_editmode.title',
                        info:'',
                        parameters: [
                            { pathName: 'ibizpms', parameterName: 'ibizpms' },
                            { pathName: 'ibzcasesteps', parameterName: 'ibzcasestep' },
                            { pathName: 'maingridview9_editmode', parameterName: 'maingridview9_editmode' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-main-grid-view9-edit-mode/case-step-main-grid-view9-edit-mode.vue'),
                },
            ...indexRoutes,
            ],
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
                appService.navHistory.reset();
                next();
            },
            component: () => import('@components/login/login'),
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
        }
    ]
});

router.beforeEach((to: any, from: any, next: any) => {
    if (to.meta && !to.meta.ignoreAddPage) {
        appService.navHistory.add(to);
    }
    next();
});

// 解决路由跳转时报 => 路由重复
const originalPush = Router.prototype.push
Router.prototype.push = function push(location: any) {
    let result: any = originalPush.call(this, location);
    return result.catch((err: any) => err);
}

export default router;