import Vue from 'vue';
import Router from 'vue-router';
import { AuthGuard } from '@/utils';
import qs from 'qs';
import store from '@/store';

Vue.use(Router);

const router = new Router({
    routes: [
                {
            path: '/index/:index?',
            beforeEnter: (to: any, from: any, next: any) => {
                const routerParamsName = 'index';
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
                caption: '项目',
                viewType: 'APPINDEX',
                parameters: [
                    { pathName: 'index', parameterName: 'index' },
                ],
                requireAuth: true,
            },
            component: () => import('@pages/ungroup/index/index.vue'),
        },
        {
            path: '/viewshell/:viewshell?',
            beforeEnter: (to: any, from: any, next: any) => {
                const routerParamsName = 'index';
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
                    path: 'appportalview/:appportalview?',
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
            redirect: 'index'
        },
    ],
});

export default router;
