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
                const url: string = 'appdata';
                const auth: Promise<any> = AuthGuard.getInstance().authGuard(url, params, store);
                auth.then(() => {
                    next();
                }).catch(() => {
                    next();
                });
            },
            meta: {  
                keepAlive:true,
                caption: 'iBiz软件生产管理',
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
                const url: string = 'appdata';
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
                    path: 'projects/:project?/tasks/:task?/cancelmoboptionview',
                    meta: {
                        caption: 'task.views.cancelmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'cancelmoboptionview', parameterName: 'cancelmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-cancel-mob-option-view/task-cancel-mob-option-view.vue'),
                },
                {
                    path: 'tasks/:task?/cancelmoboptionview',
                    meta: {
                        caption: 'task.views.cancelmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'cancelmoboptionview', parameterName: 'cancelmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-cancel-mob-option-view/task-cancel-mob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/projectmodules/:projectmodule?/mobpickupmdview',
                    meta: {
                        caption: 'projectmodule.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-mob-pickup-mdview/project-module-mob-pickup-mdview.vue'),
                },
                {
                    path: 'projectmodules/:projectmodule?/mobpickupmdview',
                    meta: {
                        caption: 'projectmodule.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-mob-pickup-mdview/project-module-mob-pickup-mdview.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/mobpickupmdview',
                    meta: {
                        caption: 'task.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-pickup-mdview/task-mob-pickup-mdview.vue'),
                },
                {
                    path: 'tasks/:task?/mobpickupmdview',
                    meta: {
                        caption: 'task.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-pickup-mdview/task-mob-pickup-mdview.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/stopmoboptionview',
                    meta: {
                        caption: 'task.views.stopmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'stopmoboptionview', parameterName: 'stopmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-stop-mob-option-view/task-stop-mob-option-view.vue'),
                },
                {
                    path: 'tasks/:task?/stopmoboptionview',
                    meta: {
                        caption: 'task.views.stopmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'stopmoboptionview', parameterName: 'stopmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-stop-mob-option-view/task-stop-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/mobtabexpview',
                    meta: {
                        caption: 'product.views.mobtabexpview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'mobtabexpview', parameterName: 'mobtabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-mob-tab-exp-view/product-mob-tab-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/taskteams/:taskteam?/mobmdview9',
                    meta: {
                        caption: 'taskteam.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-mdview9/task-team-mob-mdview9.vue'),
                },
                {
                    path: 'tasks/:task?/taskteams/:taskteam?/mobmdview9',
                    meta: {
                        caption: 'taskteam.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-mdview9/task-team-mob-mdview9.vue'),
                },
                {
                    path: 'taskteams/:taskteam?/mobmdview9',
                    meta: {
                        caption: 'taskteam.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-mdview9/task-team-mob-mdview9.vue'),
                },
                {
                    path: 'substories/:substory?/mobeditview',
                    meta: {
                        caption: 'story.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-edit-view/story-mob-edit-view.vue'),
                },
                {
                    path: 'substories/:substory?/asmoboptionview',
                    meta: {
                        caption: 'story.views.asmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'asmoboptionview', parameterName: 'asmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-as-mob-option-view/story-as-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/mobmdview',
                    meta: {
                        caption: 'release.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/release-mob-mdview/release-mob-mdview.vue'),
                },
                {
                    path: 'releases/:release?/mobmdview',
                    meta: {
                        caption: 'release.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/release-mob-mdview/release-mob-mdview.vue'),
                },
                {
                    path: 'todos/:todo?/mobmdview',
                    meta: {
                        caption: 'todo.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/todo-mob-mdview/todo-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/planmobmdview9',
                    meta: {
                        caption: 'bug.views.planmobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'planmobmdview9', parameterName: 'planmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-plan-mob-mdview9/bug-plan-mob-mdview9.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/planmobmdview9',
                    meta: {
                        caption: 'bug.views.planmobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'planmobmdview9', parameterName: 'planmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-plan-mob-mdview9/bug-plan-mob-mdview9.vue'),
                },
                {
                    path: 'bugs/:bug?/planmobmdview9',
                    meta: {
                        caption: 'bug.views.planmobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'planmobmdview9', parameterName: 'planmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-plan-mob-mdview9/bug-plan-mob-mdview9.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/closemoboptionview',
                    meta: {
                        caption: 'task.views.closemoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-close-mob-option-view/task-close-mob-option-view.vue'),
                },
                {
                    path: 'tasks/:task?/closemoboptionview',
                    meta: {
                        caption: 'task.views.closemoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-close-mob-option-view/task-close-mob-option-view.vue'),
                },
                {
                    path: 'substories/:substory?/mobpickupmdview',
                    meta: {
                        caption: 'story.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-pickup-mdview/story-mob-pickup-mdview.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/newmobeditview',
                    meta: {
                        caption: 'productplan.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-plan-new-mob-edit-view/product-plan-new-mob-edit-view.vue'),
                },
                {
                    path: 'productplans/:productplan?/newmobeditview',
                    meta: {
                        caption: 'productplan.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'productplans', parameterName: 'productplan' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-plan-new-mob-edit-view/product-plan-new-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
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
                    path: 'projects/:project?/bugs/:bug?/cmoboptionview',
                    meta: {
                        caption: 'bug.views.cmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'cmoboptionview', parameterName: 'cmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-cmob-option-view/bug-cmob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/cmoboptionview',
                    meta: {
                        caption: 'bug.views.cmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'cmoboptionview', parameterName: 'cmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-cmob-option-view/bug-cmob-option-view.vue'),
                },
                {
                    path: 'bugs/:bug?/cmoboptionview',
                    meta: {
                        caption: 'bug.views.cmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'cmoboptionview', parameterName: 'cmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-cmob-option-view/bug-cmob-option-view.vue'),
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
                    path: 'projects/:project?/mobpickupmdview',
                    meta: {
                        caption: 'project.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-mob-pickup-mdview/project-mob-pickup-mdview.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/assmobmdview',
                    meta: {
                        caption: 'bug.views.assmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmobmdview', parameterName: 'assmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-mob-mdview/bug-ass-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/assmobmdview',
                    meta: {
                        caption: 'bug.views.assmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmobmdview', parameterName: 'assmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-mob-mdview/bug-ass-mob-mdview.vue'),
                },
                {
                    path: 'bugs/:bug?/assmobmdview',
                    meta: {
                        caption: 'bug.views.assmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmobmdview', parameterName: 'assmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-mob-mdview/bug-ass-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/builds/:build?/mobpickupmdview',
                    meta: {
                        caption: 'build.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-pickup-mdview/build-mob-pickup-mdview.vue'),
                },
                {
                    path: 'products/:product?/builds/:build?/mobpickupmdview',
                    meta: {
                        caption: 'build.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-pickup-mdview/build-mob-pickup-mdview.vue'),
                },
                {
                    path: 'builds/:build?/mobpickupmdview',
                    meta: {
                        caption: 'build.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-pickup-mdview/build-mob-pickup-mdview.vue'),
                },
                {
                    path: 'projects/:project?/newmobeditview',
                    meta: {
                        caption: 'project.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-new-mob-edit-view/project-new-mob-edit-view.vue'),
                },
                {
                    path: 'todos/:todo?/newmobeditview',
                    meta: {
                        caption: 'todo.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/todo-new-mob-edit-view/todo-new-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/mobpickupview',
                    meta: {
                        caption: 'product.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-mob-pickup-view/product-mob-pickup-view.vue'),
                },
                {
                    path: 'ibzmyterritories/:ibzmyterritory?/mobtabexpview',
                    meta: {
                        caption: 'ibzmyterritory.views.mobtabexpview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                            { pathName: 'mobtabexpview', parameterName: 'mobtabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-my-territory-mob-tab-exp-view/ibz-my-territory-mob-tab-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/mobpickupview',
                    meta: {
                        caption: 'project.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-mob-pickup-view/project-mob-pickup-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/assmoboptionview',
                    meta: {
                        caption: 'bug.views.assmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoboptionview', parameterName: 'assmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-mob-option-view/bug-ass-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/assmoboptionview',
                    meta: {
                        caption: 'bug.views.assmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoboptionview', parameterName: 'assmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-mob-option-view/bug-ass-mob-option-view.vue'),
                },
                {
                    path: 'bugs/:bug?/assmoboptionview',
                    meta: {
                        caption: 'bug.views.assmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoboptionview', parameterName: 'assmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-mob-option-view/bug-ass-mob-option-view.vue'),
                },
                {
                    path: 'actions/:action?/mobmdview9',
                    meta: {
                        caption: 'action.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/action-mob-mdview9/action-mob-mdview9.vue'),
                },
                {
                    path: 'substories/:substory?/mobpickupview',
                    meta: {
                        caption: 'story.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-pickup-view/story-mob-pickup-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
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
                    path: 'projects/:project?/builds/:build?/mobeditview',
                    meta: {
                        caption: 'build.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-edit-view/build-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/builds/:build?/mobeditview',
                    meta: {
                        caption: 'build.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-edit-view/build-mob-edit-view.vue'),
                },
                {
                    path: 'builds/:build?/mobeditview',
                    meta: {
                        caption: 'build.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-edit-view/build-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/mobeditview',
                    meta: {
                        caption: 'case.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/case-mob-edit-view/case-mob-edit-view.vue'),
                },
                {
                    path: 'cases/:case?/mobeditview',
                    meta: {
                        caption: 'case.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/case-mob-edit-view/case-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/commoboptionview',
                    meta: {
                        caption: 'task.views.commoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'commoboptionview', parameterName: 'commoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-com-mob-option-view/task-com-mob-option-view.vue'),
                },
                {
                    path: 'tasks/:task?/commoboptionview',
                    meta: {
                        caption: 'task.views.commoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'commoboptionview', parameterName: 'commoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-com-mob-option-view/task-com-mob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/assmoremobmdview',
                    meta: {
                        caption: 'task.views.assmoremobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-ass-more-mob-mdview/task-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'tasks/:task?/assmoremobmdview',
                    meta: {
                        caption: 'task.views.assmoremobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-ass-more-mob-mdview/task-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'testsuites/:testsuite?/mobmdview',
                    meta: {
                        caption: 'testsuite.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'testsuites', parameterName: 'testsuite' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-suite-mob-mdview/test-suite-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/newmobeditview',
                    meta: {
                        caption: 'product.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-new-mob-edit-view/product-new-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/mobeditview',
                    meta: {
                        caption: 'task.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-edit-view/task-mob-edit-view.vue'),
                },
                {
                    path: 'tasks/:task?/mobeditview',
                    meta: {
                        caption: 'task.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-edit-view/task-mob-edit-view.vue'),
                },
                {
                    path: 'substories/:substory?/mobmdview',
                    meta: {
                        caption: 'story.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-mob-mdview/story-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/newmobeditview',
                    meta: {
                        caption: 'bug.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-new-mob-edit-view/bug-new-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/newmobeditview',
                    meta: {
                        caption: 'bug.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-new-mob-edit-view/bug-new-mob-edit-view.vue'),
                },
                {
                    path: 'bugs/:bug?/newmobeditview',
                    meta: {
                        caption: 'bug.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-new-mob-edit-view/bug-new-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/mobmdview',
                    meta: {
                        caption: 'testtask.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-task-mob-mdview/test-task-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/mobmdview',
                    meta: {
                        caption: 'testtask.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-task-mob-mdview/test-task-mob-mdview.vue'),
                },
                {
                    path: 'testtasks/:testtask?/mobmdview',
                    meta: {
                        caption: 'testtask.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-task-mob-mdview/test-task-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/projectmodules/:projectmodule?/mobpickupview',
                    meta: {
                        caption: 'projectmodule.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-mob-pickup-view/project-module-mob-pickup-view.vue'),
                },
                {
                    path: 'projectmodules/:projectmodule?/mobpickupview',
                    meta: {
                        caption: 'projectmodule.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projectmodules', parameterName: 'projectmodule' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-module-mob-pickup-view/project-module-mob-pickup-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/testmobmdview',
                    meta: {
                        caption: 'bug.views.testmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testmobmdview', parameterName: 'testmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-test-mob-mdview/bug-test-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/testmobmdview',
                    meta: {
                        caption: 'bug.views.testmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testmobmdview', parameterName: 'testmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-test-mob-mdview/bug-test-mob-mdview.vue'),
                },
                {
                    path: 'bugs/:bug?/testmobmdview',
                    meta: {
                        caption: 'bug.views.testmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testmobmdview', parameterName: 'testmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-test-mob-mdview/bug-test-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/productmodules/:productmodule?/mobpickupview',
                    meta: {
                        caption: 'productmodule.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-mob-pickup-view/product-module-mob-pickup-view.vue'),
                },
                {
                    path: 'productmodules/:productmodule?/mobpickupview',
                    meta: {
                        caption: 'productmodule.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-mob-pickup-view/product-module-mob-pickup-view.vue'),
                },
                {
                    path: 'products/:product?/mobpickupmdview',
                    meta: {
                        caption: 'product.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-mob-pickup-mdview/product-mob-pickup-mdview.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/casesteps/:casestep?/mobmdview9',
                    meta: {
                        caption: 'casestep.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-mob-mdview9/case-step-mob-mdview9.vue'),
                },
                {
                    path: 'cases/:case?/casesteps/:casestep?/mobmdview9',
                    meta: {
                        caption: 'casestep.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-mob-mdview9/case-step-mob-mdview9.vue'),
                },
                {
                    path: 'casesteps/:casestep?/mobmdview9',
                    meta: {
                        caption: 'casestep.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-mob-mdview9/case-step-mob-mdview9.vue'),
                },
                {
                    path: 'ibzmyterritories/:ibzmyterritory?/mobdashboardview',
                    meta: {
                        caption: 'ibzmyterritory.views.mobdashboardview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                            { pathName: 'mobdashboardview', parameterName: 'mobdashboardview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-my-territory-mob-dashboard-view/ibz-my-territory-mob-dashboard-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/rmoboptionview',
                    meta: {
                        caption: 'bug.views.rmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-rmob-option-view/bug-rmob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/rmoboptionview',
                    meta: {
                        caption: 'bug.views.rmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-rmob-option-view/bug-rmob-option-view.vue'),
                },
                {
                    path: 'bugs/:bug?/rmoboptionview',
                    meta: {
                        caption: 'bug.views.rmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-rmob-option-view/bug-rmob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/acmoboptionview',
                    meta: {
                        caption: 'bug.views.acmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'acmoboptionview', parameterName: 'acmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-acmob-option-view/bug-acmob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/acmoboptionview',
                    meta: {
                        caption: 'bug.views.acmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'acmoboptionview', parameterName: 'acmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-acmob-option-view/bug-acmob-option-view.vue'),
                },
                {
                    path: 'bugs/:bug?/acmoboptionview',
                    meta: {
                        caption: 'bug.views.acmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'acmoboptionview', parameterName: 'acmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-acmob-option-view/bug-acmob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/moboptionview',
                    meta: {
                        caption: 'task.views.moboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'moboptionview', parameterName: 'moboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-option-view/task-mob-option-view.vue'),
                },
                {
                    path: 'tasks/:task?/moboptionview',
                    meta: {
                        caption: 'task.views.moboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'moboptionview', parameterName: 'moboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-option-view/task-mob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/projectteams/:projectteam?/mobmdview',
                    meta: {
                        caption: 'projectteam.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'projectteams', parameterName: 'projectteam' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-team-mob-mdview/project-team-mob-mdview.vue'),
                },
                {
                    path: 'projectteams/:projectteam?/mobmdview',
                    meta: {
                        caption: 'projectteam.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projectteams', parameterName: 'projectteam' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-team-mob-mdview/project-team-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/mobmdview',
                    meta: {
                        caption: 'project.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-mob-mdview/project-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/mobtabexpview',
                    meta: {
                        caption: 'project.views.mobtabexpview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'mobtabexpview', parameterName: 'mobtabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/project-mob-tab-exp-view/project-mob-tab-exp-view.vue'),
                },
                {
                    path: 'products/:product?/productmodules/:productmodule?/mobpickupmdview',
                    meta: {
                        caption: 'productmodule.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-mob-pickup-mdview/product-module-mob-pickup-mdview.vue'),
                },
                {
                    path: 'productmodules/:productmodule?/mobpickupmdview',
                    meta: {
                        caption: 'productmodule.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'productmodules', parameterName: 'productmodule' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-module-mob-pickup-mdview/product-module-mob-pickup-mdview.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/favoritemoremobmdview',
                    meta: {
                        caption: 'task.views.favoritemoremobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'favoritemoremobmdview', parameterName: 'favoritemoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-favorite-more-mob-mdview/task-favorite-more-mob-mdview.vue'),
                },
                {
                    path: 'tasks/:task?/favoritemoremobmdview',
                    meta: {
                        caption: 'task.views.favoritemoremobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'favoritemoremobmdview', parameterName: 'favoritemoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-favorite-more-mob-mdview/task-favorite-more-mob-mdview.vue'),
                },
                {
                    path: 'substories/:substory?/changemoboptionview',
                    meta: {
                        caption: 'story.views.changemoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'changemoboptionview', parameterName: 'changemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-change-mob-option-view/story-change-mob-option-view.vue'),
                },
                {
                    path: 'modules/:module?/mobpickupmdview',
                    meta: {
                        caption: 'module.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'modules', parameterName: 'module' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/module-mob-pickup-mdview/module-mob-pickup-mdview.vue'),
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
                    path: 'substories/:substory?/assmobmdview',
                    meta: {
                        caption: 'story.views.assmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'assmobmdview', parameterName: 'assmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-ass-mob-mdview/story-ass-mob-mdview.vue'),
                },
                {
                    path: 'substories/:substory?/newmobeditview',
                    meta: {
                        caption: 'story.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-new-mob-edit-view/story-new-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/closemobeditview',
                    meta: {
                        caption: 'project.views.closemobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'closemobeditview', parameterName: 'closemobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-close-mob-edit-view/project-close-mob-edit-view.vue'),
                },
                {
                    path: 'todos/:todo?/moboptionview',
                    meta: {
                        caption: 'todo.views.moboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'moboptionview', parameterName: 'moboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/todo-mob-option-view/todo-mob-option-view.vue'),
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
                {
                    path: 'products/:product?/prodmobtabexpview',
                    meta: {
                        caption: 'product.views.prodmobtabexpview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'prodmobtabexpview', parameterName: 'prodmobtabexpview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-prod-mob-tab-exp-view/product-prod-mob-tab-exp-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/assmobmdview',
                    meta: {
                        caption: 'task.views.assmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'assmobmdview', parameterName: 'assmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-ass-mob-mdview/task-ass-mob-mdview.vue'),
                },
                {
                    path: 'tasks/:task?/assmobmdview',
                    meta: {
                        caption: 'task.views.assmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'assmobmdview', parameterName: 'assmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-ass-mob-mdview/task-ass-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/startmoboptionview',
                    meta: {
                        caption: 'task.views.startmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'startmoboptionview', parameterName: 'startmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-startmob-option-view/task-startmob-option-view.vue'),
                },
                {
                    path: 'tasks/:task?/startmoboptionview',
                    meta: {
                        caption: 'task.views.startmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'startmoboptionview', parameterName: 'startmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-startmob-option-view/task-startmob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/supmobeditview',
                    meta: {
                        caption: 'project.views.supmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'supmobeditview', parameterName: 'supmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-sup-mob-edit-view/project-sup-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/favoritemobmdview',
                    meta: {
                        caption: 'task.views.favoritemobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'favoritemobmdview', parameterName: 'favoritemobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-favorite-mob-mdview/task-favorite-mob-mdview.vue'),
                },
                {
                    path: 'tasks/:task?/favoritemobmdview',
                    meta: {
                        caption: 'task.views.favoritemobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'favoritemobmdview', parameterName: 'favoritemobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-favorite-mob-mdview/task-favorite-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/mobmdview',
                    meta: {
                        caption: 'task.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
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
                    path: 'projects/:project?/activitemobeditview',
                    meta: {
                        caption: 'project.views.activitemobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'activitemobeditview', parameterName: 'activitemobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-activite-mob-edit-view/project-activite-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/mobeditview',
                    meta: {
                        caption: 'project.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/project-mob-edit-view/project-mob-edit-view.vue'),
                },
                {
                    path: 'substories/:substory?/favoritemobmdview',
                    meta: {
                        caption: 'story.views.favoritemobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'favoritemobmdview', parameterName: 'favoritemobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-favorite-mob-mdview/story-favorite-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/newmobeditview',
                    meta: {
                        caption: 'release.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-new-mob-edit-view/release-new-mob-edit-view.vue'),
                },
                {
                    path: 'releases/:release?/newmobeditview',
                    meta: {
                        caption: 'release.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/release-new-mob-edit-view/release-new-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/taskteams/:taskteam?/mobmeditview9',
                    meta: {
                        caption: 'taskteam.views.mobmeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'mobmeditview9', parameterName: 'mobmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-medit-view9/task-team-mob-medit-view9.vue'),
                },
                {
                    path: 'tasks/:task?/taskteams/:taskteam?/mobmeditview9',
                    meta: {
                        caption: 'taskteam.views.mobmeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'mobmeditview9', parameterName: 'mobmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-medit-view9/task-team-mob-medit-view9.vue'),
                },
                {
                    path: 'taskteams/:taskteam?/mobmeditview9',
                    meta: {
                        caption: 'taskteam.views.mobmeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'mobmeditview9', parameterName: 'mobmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-medit-view9/task-team-mob-medit-view9.vue'),
                },
                {
                    path: 'products/:product?/testmobmdview',
                    meta: {
                        caption: 'product.views.testmobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testmobmdview', parameterName: 'testmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-test-mob-mdview/product-test-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/mobmdview',
                    meta: {
                        caption: 'product.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/product-mob-mdview/product-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/mobpickupview',
                    meta: {
                        caption: 'task.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-pickup-view/task-mob-pickup-view.vue'),
                },
                {
                    path: 'tasks/:task?/mobpickupview',
                    meta: {
                        caption: 'task.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-pickup-view/task-mob-pickup-view.vue'),
                },
                {
                    path: 'modules/:module?/mobpickupview',
                    meta: {
                        caption: 'module.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'modules', parameterName: 'module' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/module-mob-pickup-view/module-mob-pickup-view.vue'),
                },
                {
                    path: 'products/:product?/closemobeditview',
                    meta: {
                        caption: 'product.views.closemobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'closemobeditview', parameterName: 'closemobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/product-close-mob-edit-view/product-close-mob-edit-view.vue'),
                },
                {
                    path: 'substories/:substory?/mobmdview9',
                    meta: {
                        caption: 'story.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-mdview9/story-mob-mdview9.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/taskteams/:taskteam?/mobeditview9',
                    meta: {
                        caption: 'taskteam.views.mobeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'mobeditview9', parameterName: 'mobeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-edit-view9/task-team-mob-edit-view9.vue'),
                },
                {
                    path: 'tasks/:task?/taskteams/:taskteam?/mobeditview9',
                    meta: {
                        caption: 'taskteam.views.mobeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'mobeditview9', parameterName: 'mobeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-edit-view9/task-team-mob-edit-view9.vue'),
                },
                {
                    path: 'taskteams/:taskteam?/mobeditview9',
                    meta: {
                        caption: 'taskteam.views.mobeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'taskteams', parameterName: 'taskteam' },
                            { pathName: 'mobeditview9', parameterName: 'mobeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-edit-view9/task-team-mob-edit-view9.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/mobeditview',
                    meta: {
                        caption: 'testtask.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-task-mob-edit-view/test-task-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/testtasks/:testtask?/mobeditview',
                    meta: {
                        caption: 'testtask.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-task-mob-edit-view/test-task-mob-edit-view.vue'),
                },
                {
                    path: 'testtasks/:testtask?/mobeditview',
                    meta: {
                        caption: 'testtask.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'testtasks', parameterName: 'testtask' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-task-mob-edit-view/test-task-mob-edit-view.vue'),
                },
                {
                    path: 'todos/:todo?/mobeditview',
                    meta: {
                        caption: 'todo.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'todos', parameterName: 'todo' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/todo-mob-edit-view/todo-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/builds/:build?/mobmdview',
                    meta: {
                        caption: 'build.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-mdview/build-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/builds/:build?/mobmdview',
                    meta: {
                        caption: 'build.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-mdview/build-mob-mdview.vue'),
                },
                {
                    path: 'builds/:build?/mobmdview',
                    meta: {
                        caption: 'build.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-mdview/build-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/tasks/:task?/newmobeditview',
                    meta: {
                        caption: 'task.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-new-mob-edit-view/task-new-mob-edit-view.vue'),
                },
                {
                    path: 'tasks/:task?/newmobeditview',
                    meta: {
                        caption: 'task.views.newmobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'tasks', parameterName: 'task' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-new-mob-edit-view/task-new-mob-edit-view.vue'),
                },
                {
                    path: 'substories/:substory?/cmoboptionview',
                    meta: {
                        caption: 'story.views.cmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'cmoboptionview', parameterName: 'cmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-cmob-option-view/story-cmob-option-view.vue'),
                },
                {
                    path: 'substories/:substory?/rmoboptionview',
                    meta: {
                        caption: 'story.views.rmoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'substories', parameterName: 'substory' },
                            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-rmob-option-view/story-rmob-option-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/mobmdview',
                    meta: {
                        caption: 'case.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/case-mob-mdview/case-mob-mdview.vue'),
                },
                {
                    path: 'cases/:case?/mobmdview',
                    meta: {
                        caption: 'case.views.mobmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/case-mob-mdview/case-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/mobeditview',
                    meta: {
                        caption: 'release.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/release-mob-edit-view/release-mob-edit-view.vue'),
                },
                {
                    path: 'releases/:release?/mobeditview',
                    meta: {
                        caption: 'release.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'releases', parameterName: 'release' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/release-mob-edit-view/release-mob-edit-view.vue'),
                },
                {
                    path: 'testsuites/:testsuite?/mobeditview',
                    meta: {
                        caption: 'testsuite.views.mobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'testsuites', parameterName: 'testsuite' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/test-suite-mob-edit-view/test-suite-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/builds/:build?/mobpickupview',
                    meta: {
                        caption: 'build.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-pickup-view/build-mob-pickup-view.vue'),
                },
                {
                    path: 'products/:product?/builds/:build?/mobpickupview',
                    meta: {
                        caption: 'build.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-pickup-view/build-mob-pickup-view.vue'),
                },
                {
                    path: 'builds/:build?/mobpickupview',
                    meta: {
                        caption: 'build.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-pickup-view/build-mob-pickup-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/closemoboptionview',
                    meta: {
                        caption: 'bug.views.closemoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-close-mob-option-view/bug-close-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/closemoboptionview',
                    meta: {
                        caption: 'bug.views.closemoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-close-mob-option-view/bug-close-mob-option-view.vue'),
                },
                {
                    path: 'bugs/:bug?/closemoboptionview',
                    meta: {
                        caption: 'bug.views.closemoboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-close-mob-option-view/bug-close-mob-option-view.vue'),
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
