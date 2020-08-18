import Vue from 'vue';
import Router from 'vue-router';
import { AuthGuard } from '@/utils';
import qs from 'qs';
import store from '@/store';

Vue.use(Router);

const router = new Router({
    routes: [
                {
            path: '/appindexview/:appindexview?',
            beforeEnter: (to: any, from: any, next: any) => {
                const routerParamsName = 'appindexview';
                const params: any = {};
                if (to.params && to.params[routerParamsName]) {
                    Object.assign(params, qs.parse(to.params[routerParamsName], { delimiter: ';' }));
                }
                const url: string = 'v7/appdata';
                const auth: Promise<any> = AuthGuard.getInstance().authGuard(url, params, store);
                auth.then(() => {
                    next();
                }).catch(() => {
                    next();
                });
            },
            meta: {  
                caption: '首页',
                viewType: 'APPINDEX',
                parameters: [
                    { pathName: 'appindexview', parameterName: 'appindexview' },
                ],
                requireAuth: true,
            },
            component: () => import('@pages/ungroup/app-index-view/app-index-view.vue'),
        },
        {
            path: '/viewshell/:viewshell?',
            beforeEnter: (to: any, from: any, next: any) => {
                const routerParamsName = 'appindexview';
                const params: any = {};
                if (to.params && to.params[routerParamsName]) {
                    Object.assign(params, qs.parse(to.params[routerParamsName], { delimiter: ';' }));
                }
                const url: string = 'v7/appdata';
                const auth: Promise<any> = AuthGuard.getInstance().authGuard(url, params, store);
                auth.then(() => {
                    next();
                }).catch(() => {
                    next();
                });
            },
            meta: {
                parameters: [
                    { pathName: 'viewshell', parameterName: 'viewshell' },
                ],
            },
            component: () => import('@/components/view-shell/view-shell.vue'),
            children: [
                {
                    path: 'appportalview',
                    meta: {
                        caption: 'app.views.appportalview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'appportalview', parameterName: 'appportalview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ungroup/app-portal-view/app-portal-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mobeditview',
                    meta: {
                        caption: 'story.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-edit-view/story-mob-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/mobeditview',
                    meta: {
                        caption: 'story.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-edit-view/story-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/mobeditview',
                    meta: {
                        caption: 'product.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-mob-edit-view/product-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/tasks/:task?/mobmdview',
                    meta: {
                        caption: 'task.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-mob-mdview/task-mob-mdview.vue'),
                },
                {
                    path: 'stories/:story?/tasks/:task?/mobmdview',
                    meta: {
                        caption: 'task.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-mob-mdview/task-mob-mdview.vue'),
                },
                {
                    path: 'tasks/:task?/mobmdview',
                    meta: {
                        caption: 'task.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-mob-mdview/task-mob-mdview.vue'),
                },
                {
                    path: 'productstats/:productstats?/mobtabexpview',
                    meta: {
                        caption: 'productstats.views.mobtabexpview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'productstats', parameterName: 'productstats' },
                            { pathName: 'mobtabexpview', parameterName: 'mobtabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-stats-mob-tab-exp-view/product-stats-mob-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-mob-mdview/bug-mob-mdview.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-mob-mdview/bug-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-mob-mdview/bug-mob-mdview.vue'),
                },
                {
                    path: 'bugs/:bug?/mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-mob-mdview/bug-mob-mdview.vue'),
                },
                {
                    path: 'productstats/:productstats?/mobmdview',
                    meta: {
                        caption: 'productstats.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'productstats', parameterName: 'productstats' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-stats-mob-mdview/product-stats-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mobmdview',
                    meta: {
                        caption: 'story.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-mob-mdview/story-mob-mdview.vue'),
                },
                {
                    path: 'stories/:story?/mobmdview',
                    meta: {
                        caption: 'story.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-mob-mdview/story-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-mob-edit-view/bug-mob-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-mob-edit-view/bug-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-mob-edit-view/bug-mob-edit-view.vue'),
                },
                {
                    path: 'bugs/:bug?/mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-mob-edit-view/bug-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/mobeditview',
                    meta: {
                        caption: 'productplan.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-plan-mob-edit-view/product-plan-mob-edit-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/mobeditview',
                    meta: {
                        caption: 'productplan.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-plan-mob-edit-view/product-plan-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/mobmdview',
                    meta: {
                        caption: 'productplan.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-plan-mob-mdview/product-plan-mob-mdview.vue'),
                },
                {
                    path: 'productplans/:productplan?/mobmdview',
                    meta: {
                        caption: 'productplan.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-plan-mob-mdview/product-plan-mob-mdview.vue'),
                },
            ]
        },
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
            redirect: 'appindexview'
        },
    ],
});

export default router;
