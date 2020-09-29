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
                    path: 'subtasks/:subtask?/cancelmoboptionview',
                    name: 'subtask_cancelmoboptionview',
                    meta: {
                        caption: 'task.views.cancelmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'cancelmoboptionview', parameterName: 'cancelmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-cancel-mob-option-view/task-cancel-mob-option-view.vue'),
                },
                {
                    path: 'subtasks/:subtask?/stopmoboptionview',
                    name: 'subtask_stopmoboptionview',
                    meta: {
                        caption: 'task.views.stopmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'stopmoboptionview', parameterName: 'stopmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-stop-mob-option-view/task-stop-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/mobtabexpview',
                    name: 'product_mobtabexpview',
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
                    path: 'subtasks/:subtask?/closemoboptionview',
                    name: 'subtask_closemoboptionview',
                    meta: {
                        caption: 'task.views.closemoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-close-mob-option-view/task-close-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/mobmdview',
                    name: 'bug_mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'projects/:project?/bugs/:bug?/mobmdview',
                    name: 'bug_mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/mobmdview',
                    name: 'bug_mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_mobmdview',
                    meta: {
                        caption: 'bug.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'projects/:project?/mobpickupmdview',
                    name: 'project_mobpickupmdview',
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
                    path: 'todos/:todo?/newmobeditview',
                    name: 'todo_newmobeditview',
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
                    path: 'users/:user?/mobpickupmdview',
                    name: 'user_mobpickupmdview',
                    meta: {
                        caption: 'user.views.mobpickupmdview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'users', parameterName: 'user' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/user-mob-pickup-mdview/user-mob-pickup-mdview.vue'),
                },
                {
                    path: 'products/:product?/mobpickupview',
                    name: 'product_mobpickupview',
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
                    path: 'actions/:action?/mobmdview9',
                    name: 'action_mobmdview9',
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
                    path: 'projects/:project?/builds/:build?/mobeditview',
                    name: 'build_mobeditview',
                    meta: {
                        caption: 'build.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    name: 'build_mobeditview',
                    meta: {
                        caption: 'build.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    name: 'build_mobeditview',
                    meta: {
                        caption: 'build.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    path: 'products/:product?/stories/:story?/cases/:case?/mobeditview',
                    name: 'case_mobeditview',
                    meta: {
                        caption: 'case.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/case-mob-edit-view/case-mob-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/mobeditview',
                    name: 'case_mobeditview',
                    meta: {
                        caption: 'case.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/case-mob-edit-view/case-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/mobeditview',
                    name: 'case_mobeditview',
                    meta: {
                        caption: 'case.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
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
                    name: 'case_mobeditview',
                    meta: {
                        caption: 'case.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
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
                    path: 'subtasks/:subtask?/commoboptionview',
                    name: 'subtask_commoboptionview',
                    meta: {
                        caption: 'task.views.commoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'commoboptionview', parameterName: 'commoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-com-mob-option-view/task-com-mob-option-view.vue'),
                },
                {
                    path: 'subtasks/:subtask?/mobeditview',
                    name: 'subtask_mobeditview',
                    meta: {
                        caption: 'task.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'mobeditview', parameterName: 'mobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-edit-view/task-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/testtasks/:testtask?/mobmdview',
                    name: 'testtask_mobmdview',
                    meta: {
                        caption: 'testtask.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-clipboard',
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
                    name: 'testtask_mobmdview',
                    meta: {
                        caption: 'testtask.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-clipboard',
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
                    name: 'testtask_mobmdview',
                    meta: {
                        caption: 'testtask.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-clipboard',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/assmoremobmdview',
                    name: 'bug_assmoremobmdview',
                    meta: {
                        caption: 'bug.views.assmoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-more-mob-mdview/bug-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/assmoremobmdview',
                    name: 'bug_assmoremobmdview',
                    meta: {
                        caption: 'bug.views.assmoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-more-mob-mdview/bug-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/assmoremobmdview',
                    name: 'bug_assmoremobmdview',
                    meta: {
                        caption: 'bug.views.assmoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-more-mob-mdview/bug-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/assmoremobmdview',
                    name: 'bug_assmoremobmdview',
                    meta: {
                        caption: 'bug.views.assmoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-more-mob-mdview/bug-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'bugs/:bug?/assmoremobmdview',
                    name: 'bug_assmoremobmdview',
                    meta: {
                        caption: 'bug.views.assmoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-more-mob-mdview/bug-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/testmobmdview',
                    name: 'bug_testmobmdview',
                    meta: {
                        caption: 'bug.views.testmobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testmobmdview', parameterName: 'testmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-test-mob-mdview/bug-test-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/testmobmdview',
                    name: 'bug_testmobmdview',
                    meta: {
                        caption: 'bug.views.testmobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/testmobmdview',
                    name: 'bug_testmobmdview',
                    meta: {
                        caption: 'bug.views.testmobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'testmobmdview', parameterName: 'testmobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-test-mob-mdview/bug-test-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/testmobmdview',
                    name: 'bug_testmobmdview',
                    meta: {
                        caption: 'bug.views.testmobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_testmobmdview',
                    meta: {
                        caption: 'bug.views.testmobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'projects/:project?/projectmodules/:projectmodule?/mobpickupview',
                    name: 'projectmodule_mobpickupview',
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
                    name: 'projectmodule_mobpickupview',
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
                    path: 'products/:product?/productmodules/:productmodule?/mobpickupview',
                    name: 'productmodule_mobpickupview',
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
                    name: 'productmodule_mobpickupview',
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
                    name: 'product_mobpickupmdview',
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
                    path: 'products/:product?/stories/:story?/cases/:case?/casesteps/:casestep?/mobmdview9',
                    name: 'casestep_mobmdview9',
                    meta: {
                        caption: 'casestep.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-mob-mdview9/case-step-mob-mdview9.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/casesteps/:casestep?/mobmdview9',
                    name: 'casestep_mobmdview9',
                    meta: {
                        caption: 'casestep.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'casesteps', parameterName: 'casestep' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/case-step-mob-mdview9/case-step-mob-mdview9.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/casesteps/:casestep?/mobmdview9',
                    name: 'casestep_mobmdview9',
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
                    name: 'casestep_mobmdview9',
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
                    name: 'casestep_mobmdview9',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/rmoboptionview',
                    name: 'bug_rmoboptionview',
                    meta: {
                        caption: 'bug.views.rmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-rmob-option-view/bug-rmob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/rmoboptionview',
                    name: 'bug_rmoboptionview',
                    meta: {
                        caption: 'bug.views.rmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/rmoboptionview',
                    name: 'bug_rmoboptionview',
                    meta: {
                        caption: 'bug.views.rmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-rmob-option-view/bug-rmob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/rmoboptionview',
                    name: 'bug_rmoboptionview',
                    meta: {
                        caption: 'bug.views.rmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_rmoboptionview',
                    meta: {
                        caption: 'bug.views.rmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/acmoboptionview',
                    name: 'bug_acmoboptionview',
                    meta: {
                        caption: 'bug.views.acmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'acmoboptionview', parameterName: 'acmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-acmob-option-view/bug-acmob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/acmoboptionview',
                    name: 'bug_acmoboptionview',
                    meta: {
                        caption: 'bug.views.acmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/acmoboptionview',
                    name: 'bug_acmoboptionview',
                    meta: {
                        caption: 'bug.views.acmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'acmoboptionview', parameterName: 'acmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-acmob-option-view/bug-acmob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/acmoboptionview',
                    name: 'bug_acmoboptionview',
                    meta: {
                        caption: 'bug.views.acmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_acmoboptionview',
                    meta: {
                        caption: 'bug.views.acmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'ibztaskestimates/:ibztaskestimate?/mobmeditview9',
                    name: 'ibztaskestimate_mobmeditview9',
                    meta: {
                        caption: 'taskestimate.views.mobmeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'ibztaskestimates', parameterName: 'ibztaskestimate' },
                            { pathName: 'mobmeditview9', parameterName: 'mobmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-estimate-mob-medit-view9/task-estimate-mob-medit-view9.vue'),
                },
                {
                    path: 'subtasks/:subtask?/favoritemobmdview9',
                    name: 'subtask_favoritemobmdview9',
                    meta: {
                        caption: 'task.views.favoritemobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'favoritemobmdview9', parameterName: 'favoritemobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-favorite-mob-mdview9/task-favorite-mob-mdview9.vue'),
                },
                {
                    path: 'projects/:project?/projectteams/:projectteam?/mobmdview',
                    name: 'projectteam_mobmdview',
                    meta: {
                        caption: 'projectteam.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-users',
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
                    name: 'projectteam_mobmdview',
                    meta: {
                        caption: 'projectteam.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-users',
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
                    path: 'subtasks/:subtask?/moboptionview',
                    name: 'subtask_moboptionview',
                    meta: {
                        caption: 'task.views.moboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'moboptionview', parameterName: 'moboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-option-view/task-mob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/mobtabexpview',
                    name: 'project_mobtabexpview',
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
                    path: 'subtasks/:subtask?/gsmoboptionview',
                    name: 'subtask_gsmoboptionview',
                    meta: {
                        caption: 'task.views.gsmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'gsmoboptionview', parameterName: 'gsmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-gsmob-option-view/task-gsmob-option-view.vue'),
                },
                {
                    path: 'subtasks/:subtask?/favoritemoremobmdview',
                    name: 'subtask_favoritemoremobmdview',
                    meta: {
                        caption: 'task.views.favoritemoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'favoritemoremobmdview', parameterName: 'favoritemoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-favorite-more-mob-mdview/task-favorite-more-mob-mdview.vue'),
                },
                {
                    path: 'actions/:action?/allmobmdview9',
                    name: 'action_allmobmdview9',
                    meta: {
                        caption: 'action.views.allmobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'actions', parameterName: 'action' },
                            { pathName: 'allmobmdview9', parameterName: 'allmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/action-allmob-mdview9/action-allmob-mdview9.vue'),
                },
                {
                    path: 'modules/:module?/mobpickupmdview',
                    name: 'module_mobpickupmdview',
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
                    path: 'products/:product?/stories/:story?/changemoboptionview',
                    name: 'story_changemoboptionview',
                    meta: {
                        caption: 'story.views.changemoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'changemoboptionview', parameterName: 'changemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-change-mob-option-view/story-change-mob-option-view.vue'),
                },
                {
                    path: 'stories/:story?/changemoboptionview',
                    name: 'story_changemoboptionview',
                    meta: {
                        caption: 'story.views.changemoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'changemoboptionview', parameterName: 'changemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-change-mob-option-view/story-change-mob-option-view.vue'),
                },
                {
                    path: 'users/:user?/mobpickupview',
                    name: 'user_mobpickupview',
                    meta: {
                        caption: 'user.views.mobpickupview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'users', parameterName: 'user' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/user-mob-pickup-view/user-mob-pickup-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/newmobeditview',
                    name: 'story_newmobeditview',
                    meta: {
                        caption: 'story.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-new-mob-edit-view/story-new-mob-edit-view.vue'),
                },
                {
                    path: 'stories/:story?/newmobeditview',
                    name: 'story_newmobeditview',
                    meta: {
                        caption: 'story.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-new-mob-edit-view/story-new-mob-edit-view.vue'),
                },
                {
                    path: 'ibztaskestimates/:ibztaskestimate?/mobeditview9',
                    name: 'ibztaskestimate_mobeditview9',
                    meta: {
                        caption: 'taskestimate.views.mobeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'ibztaskestimates', parameterName: 'ibztaskestimate' },
                            { pathName: 'mobeditview9', parameterName: 'mobeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-estimate-mob-edit-view9/task-estimate-mob-edit-view9.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/mobmdview',
                    name: 'productplan_mobmdview',
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
                    name: 'productplan_mobmdview',
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
                    path: 'subtasks/:subtask?/startmoboptionview',
                    name: 'subtask_startmoboptionview',
                    meta: {
                        caption: 'task.views.startmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'startmoboptionview', parameterName: 'startmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-startmob-option-view/task-startmob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/supmobeditview',
                    name: 'project_supmobeditview',
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
                    path: 'products/:product?/stories/:story?/mobmdviewcurproject',
                    name: 'story_mobmdviewcurproject',
                    meta: {
                        caption: 'story.views.mobmdviewcurproject.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobmdviewcurproject', parameterName: 'mobmdviewcurproject' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-mdview-cur-project/story-mob-mdview-cur-project.vue'),
                },
                {
                    path: 'stories/:story?/mobmdviewcurproject',
                    name: 'story_mobmdviewcurproject',
                    meta: {
                        caption: 'story.views.mobmdviewcurproject.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobmdviewcurproject', parameterName: 'mobmdviewcurproject' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-mdview-cur-project/story-mob-mdview-cur-project.vue'),
                },
                {
                    path: 'projects/:project?/mobeditview',
                    name: 'project_mobeditview',
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
                    path: 'products/:product?/stories/:story?/assmoremobmdview',
                    name: 'story_assmoremobmdview',
                    meta: {
                        caption: 'story.views.assmoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-ass-more-mob-mdview/story-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'stories/:story?/assmoremobmdview',
                    name: 'story_assmoremobmdview',
                    meta: {
                        caption: 'story.views.assmoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-ass-more-mob-mdview/story-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/releases/:release?/newmobeditview',
                    name: 'release_newmobeditview',
                    meta: {
                        caption: 'release.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-flag-o',
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
                    name: 'release_newmobeditview',
                    meta: {
                        caption: 'release.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-flag-o',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/assmobmdview9',
                    name: 'bug_assmobmdview9',
                    meta: {
                        caption: 'bug.views.assmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmobmdview9', parameterName: 'assmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-ass-mob-mdview9/bug-ass-mob-mdview9.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/assmobmdview9',
                    name: 'bug_assmobmdview9',
                    meta: {
                        caption: 'bug.views.assmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'projects', parameterName: 'project' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmobmdview9', parameterName: 'assmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-ass-mob-mdview9/bug-ass-mob-mdview9.vue'),
                },
                {
                    path: 'stories/:story?/bugs/:bug?/assmobmdview9',
                    name: 'bug_assmobmdview9',
                    meta: {
                        caption: 'bug.views.assmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmobmdview9', parameterName: 'assmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-ass-mob-mdview9/bug-ass-mob-mdview9.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/assmobmdview9',
                    name: 'bug_assmobmdview9',
                    meta: {
                        caption: 'bug.views.assmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmobmdview9', parameterName: 'assmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-ass-mob-mdview9/bug-ass-mob-mdview9.vue'),
                },
                {
                    path: 'bugs/:bug?/assmobmdview9',
                    name: 'bug_assmobmdview9',
                    meta: {
                        caption: 'bug.views.assmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmobmdview9', parameterName: 'assmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-ass-mob-mdview9/bug-ass-mob-mdview9.vue'),
                },
                {
                    path: 'products/:product?/mobmdview',
                    name: 'product_mobmdview',
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
                    path: 'subtasks/:subtask?/mobpickupview',
                    name: 'subtask_mobpickupview',
                    meta: {
                        caption: 'task.views.mobpickupview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-pickup-view/task-mob-pickup-view.vue'),
                },
                {
                    path: 'modules/:module?/mobpickupview',
                    name: 'module_mobpickupview',
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
                    path: 'products/:product?/stories/:story?/favoritemoremobmdview',
                    name: 'story_favoritemoremobmdview',
                    meta: {
                        caption: 'story.views.favoritemoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'favoritemoremobmdview', parameterName: 'favoritemoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-favorite-more-mob-mdview/story-favorite-more-mob-mdview.vue'),
                },
                {
                    path: 'stories/:story?/favoritemoremobmdview',
                    name: 'story_favoritemoremobmdview',
                    meta: {
                        caption: 'story.views.favoritemoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'favoritemoremobmdview', parameterName: 'favoritemoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-favorite-more-mob-mdview/story-favorite-more-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/closemobeditview',
                    name: 'product_closemobeditview',
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
                    path: 'ibztaskteams/:ibztaskteam?/mobeditview9',
                    name: 'ibztaskteam_mobeditview9',
                    meta: {
                        caption: 'taskteam.views.mobeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'mobeditview9', parameterName: 'mobeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-edit-view9/task-team-mob-edit-view9.vue'),
                },
                {
                    path: 'todos/:todo?/mobeditview',
                    name: 'todo_mobeditview',
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
                    path: 'projects/:project?/testtasks/:testtask?/mobeditview',
                    name: 'testtask_mobeditview',
                    meta: {
                        caption: 'testtask.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-clipboard',
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
                    name: 'testtask_mobeditview',
                    meta: {
                        caption: 'testtask.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-clipboard',
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
                    name: 'testtask_mobeditview',
                    meta: {
                        caption: 'testtask.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-clipboard',
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
                    path: 'products/:product?/stories/:story?/cmoboptionview',
                    name: 'story_cmoboptionview',
                    meta: {
                        caption: 'story.views.cmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cmoboptionview', parameterName: 'cmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-cmob-option-view/story-cmob-option-view.vue'),
                },
                {
                    path: 'stories/:story?/cmoboptionview',
                    name: 'story_cmoboptionview',
                    meta: {
                        caption: 'story.views.cmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cmoboptionview', parameterName: 'cmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-cmob-option-view/story-cmob-option-view.vue'),
                },
                {
                    path: 'subtasks/:subtask?/newmobeditview',
                    name: 'subtask_newmobeditview',
                    meta: {
                        caption: 'task.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-new-mob-edit-view/task-new-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/rmoboptionview',
                    name: 'story_rmoboptionview',
                    meta: {
                        caption: 'story.views.rmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-rmob-option-view/story-rmob-option-view.vue'),
                },
                {
                    path: 'stories/:story?/rmoboptionview',
                    name: 'story_rmoboptionview',
                    meta: {
                        caption: 'story.views.rmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-rmob-option-view/story-rmob-option-view.vue'),
                },
                {
                    path: 'taskestimates/:taskestimate?/moboptionview',
                    name: 'taskestimate_moboptionview',
                    meta: {
                        caption: 'taskestimate.views.moboptionview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'moboptionview', parameterName: 'moboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-estimate-mob-option-view/task-estimate-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/closemoboptionview',
                    name: 'bug_closemoboptionview',
                    meta: {
                        caption: 'bug.views.closemoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-close-mob-option-view/bug-close-mob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/closemoboptionview',
                    name: 'bug_closemoboptionview',
                    meta: {
                        caption: 'bug.views.closemoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/closemoboptionview',
                    name: 'bug_closemoboptionview',
                    meta: {
                        caption: 'bug.views.closemoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-close-mob-option-view/bug-close-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/closemoboptionview',
                    name: 'bug_closemoboptionview',
                    meta: {
                        caption: 'bug.views.closemoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_closemoboptionview',
                    meta: {
                        caption: 'bug.views.closemoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-close-mob-option-view/bug-close-mob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/projectmodules/:projectmodule?/mobpickupmdview',
                    name: 'projectmodule_mobpickupmdview',
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
                    name: 'projectmodule_mobpickupmdview',
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
                    path: 'subtasks/:subtask?/mobpickupmdview',
                    name: 'subtask_mobpickupmdview',
                    meta: {
                        caption: 'task.views.mobpickupmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-mob-pickup-mdview/task-mob-pickup-mdview.vue'),
                },
                {
                    path: 'todos/:todo?/mobmdview',
                    name: 'todo_mobmdview',
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
                    path: 'products/:product?/releases/:release?/mobmdview',
                    name: 'release_mobmdview',
                    meta: {
                        caption: 'release.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-flag-o',
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
                    name: 'release_mobmdview',
                    meta: {
                        caption: 'release.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-flag-o',
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
                    path: 'products/:product?/stories/:story?/asmoboptionview',
                    name: 'story_asmoboptionview',
                    meta: {
                        caption: 'story.views.asmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'asmoboptionview', parameterName: 'asmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-as-mob-option-view/story-as-mob-option-view.vue'),
                },
                {
                    path: 'stories/:story?/asmoboptionview',
                    name: 'story_asmoboptionview',
                    meta: {
                        caption: 'story.views.asmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'asmoboptionview', parameterName: 'asmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-as-mob-option-view/story-as-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mobeditview',
                    name: 'story_mobeditview',
                    meta: {
                        caption: 'story.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
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
                    name: 'story_mobeditview',
                    meta: {
                        caption: 'story.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
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
                    path: 'taskteams/:taskteam?/mobmdview9',
                    name: 'taskteam_mobmdview9',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/planmobmdview9',
                    name: 'bug_planmobmdview9',
                    meta: {
                        caption: 'bug.views.planmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'planmobmdview9', parameterName: 'planmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-plan-mob-mdview9/bug-plan-mob-mdview9.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/planmobmdview9',
                    name: 'bug_planmobmdview9',
                    meta: {
                        caption: 'bug.views.planmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/planmobmdview9',
                    name: 'bug_planmobmdview9',
                    meta: {
                        caption: 'bug.views.planmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'planmobmdview9', parameterName: 'planmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-plan-mob-mdview9/bug-plan-mob-mdview9.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/planmobmdview9',
                    name: 'bug_planmobmdview9',
                    meta: {
                        caption: 'bug.views.planmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_planmobmdview9',
                    meta: {
                        caption: 'bug.views.planmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'products/:product?/stories/:story?/mobpickupmdview',
                    name: 'story_mobpickupmdview',
                    meta: {
                        caption: 'story.views.mobpickupmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-pickup-mdview/story-mob-pickup-mdview.vue'),
                },
                {
                    path: 'stories/:story?/mobpickupmdview',
                    name: 'story_mobpickupmdview',
                    meta: {
                        caption: 'story.views.mobpickupmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobpickupmdview', parameterName: 'mobpickupmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-pickup-mdview/story-mob-pickup-mdview.vue'),
                },
                {
                    path: 'products/:product?/productplans/:productplan?/newmobeditview',
                    name: 'productplan_newmobeditview',
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
                    name: 'productplan_newmobeditview',
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
                    path: 'users/:user?/usercentermobeditview',
                    name: 'user_usercentermobeditview',
                    meta: {
                        caption: 'user.views.usercentermobeditview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'users', parameterName: 'user' },
                            { pathName: 'usercentermobeditview', parameterName: 'usercentermobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/user-user-center-mob-edit-view/user-user-center-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/cmoboptionview',
                    name: 'bug_cmoboptionview',
                    meta: {
                        caption: 'bug.views.cmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'cmoboptionview', parameterName: 'cmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-cmob-option-view/bug-cmob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/cmoboptionview',
                    name: 'bug_cmoboptionview',
                    meta: {
                        caption: 'bug.views.cmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/cmoboptionview',
                    name: 'bug_cmoboptionview',
                    meta: {
                        caption: 'bug.views.cmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'cmoboptionview', parameterName: 'cmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-cmob-option-view/bug-cmob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/cmoboptionview',
                    name: 'bug_cmoboptionview',
                    meta: {
                        caption: 'bug.views.cmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_cmoboptionview',
                    meta: {
                        caption: 'bug.views.cmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'productplan_mobeditview',
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
                    name: 'productplan_mobeditview',
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
                    path: 'projects/:project?/builds/:build?/mobpickupmdview',
                    name: 'build_mobpickupmdview',
                    meta: {
                        caption: 'build.views.mobpickupmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    name: 'build_mobpickupmdview',
                    meta: {
                        caption: 'build.views.mobpickupmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    name: 'build_mobpickupmdview',
                    meta: {
                        caption: 'build.views.mobpickupmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    name: 'project_newmobeditview',
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
                    path: 'ibzmyterritories/:ibzmyterritory?/mobtabexpview',
                    name: 'ibzmyterritory_mobtabexpview',
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
                    path: 'products/:product?/stories/:story?/favoritemobmdview9',
                    name: 'story_favoritemobmdview9',
                    meta: {
                        caption: 'story.views.favoritemobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'favoritemobmdview9', parameterName: 'favoritemobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-favorite-mob-mdview9/story-favorite-mob-mdview9.vue'),
                },
                {
                    path: 'stories/:story?/favoritemobmdview9',
                    name: 'story_favoritemobmdview9',
                    meta: {
                        caption: 'story.views.favoritemobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'favoritemobmdview9', parameterName: 'favoritemobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-favorite-mob-mdview9/story-favorite-mob-mdview9.vue'),
                },
                {
                    path: 'projects/:project?/mobpickupview',
                    name: 'project_mobpickupview',
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
                    path: 'products/:product?/stories/:story?/bugs/:bug?/assmoboptionview',
                    name: 'bug_assmoboptionview',
                    meta: {
                        caption: 'bug.views.assmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoboptionview', parameterName: 'assmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-mob-option-view/bug-ass-mob-option-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/assmoboptionview',
                    name: 'bug_assmoboptionview',
                    meta: {
                        caption: 'bug.views.assmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/assmoboptionview',
                    name: 'bug_assmoboptionview',
                    meta: {
                        caption: 'bug.views.assmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'assmoboptionview', parameterName: 'assmoboptionview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/bug-ass-mob-option-view/bug-ass-mob-option-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/assmoboptionview',
                    name: 'bug_assmoboptionview',
                    meta: {
                        caption: 'bug.views.assmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_assmoboptionview',
                    meta: {
                        caption: 'bug.views.assmoboptionview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'products/:product?/stories/:story?/mobpickupview',
                    name: 'story_mobpickupview',
                    meta: {
                        caption: 'story.views.mobpickupview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-pickup-view/story-mob-pickup-view.vue'),
                },
                {
                    path: 'stories/:story?/mobpickupview',
                    name: 'story_mobpickupview',
                    meta: {
                        caption: 'story.views.mobpickupview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-pickup-view/story-mob-pickup-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/mobeditview',
                    name: 'bug_mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'projects/:project?/bugs/:bug?/mobeditview',
                    name: 'bug_mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/mobeditview',
                    name: 'bug_mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_mobeditview',
                    meta: {
                        caption: 'bug.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'subtasks/:subtask?/assmoremobmdview',
                    name: 'subtask_assmoremobmdview',
                    meta: {
                        caption: 'task.views.assmoremobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-ass-more-mob-mdview/task-ass-more-mob-mdview.vue'),
                },
                {
                    path: 'testsuites/:testsuite?/mobmdview',
                    name: 'testsuite_mobmdview',
                    meta: {
                        caption: 'testsuite.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-suitcase',
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
                    name: 'product_newmobeditview',
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
                    path: 'products/:product?/stories/:story?/mobmdview',
                    name: 'story_mobmdview',
                    meta: {
                        caption: 'story.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
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
                    name: 'story_mobmdview',
                    meta: {
                        caption: 'story.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
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
                    path: 'ibzmyterritories/:ibzmyterritory?/mobmdview9',
                    name: 'ibzmyterritory_mobmdview9',
                    meta: {
                        caption: 'ibzmyterritory.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-my-territory-mob-mdview9/ibz-my-territory-mob-mdview9.vue'),
                },
                {
                    path: 'taskestimates/:taskestimate?/mobmdview9',
                    name: 'taskestimate_mobmdview9',
                    meta: {
                        caption: 'taskestimate.views.mobmdview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'taskestimates', parameterName: 'taskestimate' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-estimate-mob-mdview9/task-estimate-mob-mdview9.vue'),
                },
                {
                    path: 'subtasks/:subtask?/assmobmdview9',
                    name: 'subtask_assmobmdview9',
                    meta: {
                        caption: 'task.views.assmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'assmobmdview9', parameterName: 'assmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-ass-mob-mdview9/task-ass-mob-mdview9.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/bugs/:bug?/newmobeditview',
                    name: 'bug_newmobeditview',
                    meta: {
                        caption: 'bug.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-new-mob-edit-view/bug-new-mob-edit-view.vue'),
                },
                {
                    path: 'projects/:project?/bugs/:bug?/newmobeditview',
                    name: 'bug_newmobeditview',
                    meta: {
                        caption: 'bug.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'stories/:story?/bugs/:bug?/newmobeditview',
                    name: 'bug_newmobeditview',
                    meta: {
                        caption: 'bug.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'bugs', parameterName: 'bug' },
                            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/bug-new-mob-edit-view/bug-new-mob-edit-view.vue'),
                },
                {
                    path: 'products/:product?/bugs/:bug?/newmobeditview',
                    name: 'bug_newmobeditview',
                    meta: {
                        caption: 'bug.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    name: 'bug_newmobeditview',
                    meta: {
                        caption: 'bug.views.newmobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-bug',
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
                    path: 'ibzmyterritories/:ibzmyterritory?/mobdashboardview',
                    name: 'ibzmyterritory_mobdashboardview',
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
                    path: 'products/:product?/stories/:story?/assmobmdview9',
                    name: 'story_assmobmdview9',
                    meta: {
                        caption: 'story.views.assmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'assmobmdview9', parameterName: 'assmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-ass-mob-mdview9/story-ass-mob-mdview9.vue'),
                },
                {
                    path: 'stories/:story?/assmobmdview9',
                    name: 'story_assmobmdview9',
                    meta: {
                        caption: 'story.views.assmobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'assmobmdview9', parameterName: 'assmobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/story-ass-mob-mdview9/story-ass-mob-mdview9.vue'),
                },
                {
                    path: 'projects/:project?/mobmdview',
                    name: 'project_mobmdview',
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
                    path: 'products/:product?/productmodules/:productmodule?/mobpickupmdview',
                    name: 'productmodule_mobpickupmdview',
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
                    name: 'productmodule_mobpickupmdview',
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
                    path: 'products/:product?/mobeditview',
                    name: 'product_mobeditview',
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
                    path: 'projects/:project?/closemobeditview',
                    name: 'project_closemobeditview',
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
                    name: 'todo_moboptionview',
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
                    path: 'products/:product?/prodmobtabexpview',
                    name: 'product_prodmobtabexpview',
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
                    path: 'subtasks/:subtask?/mobmdview',
                    name: 'subtask_mobmdview',
                    meta: {
                        caption: 'task.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-tasks',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'subtasks', parameterName: 'subtask' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/zentao/task-mob-mdview/task-mob-mdview.vue'),
                },
                {
                    path: 'projects/:project?/activitemobeditview',
                    name: 'project_activitemobeditview',
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
                    path: 'ibztaskteams/:ibztaskteam?/mobmeditview9',
                    name: 'ibztaskteam_mobmeditview9',
                    meta: {
                        caption: 'taskteam.views.mobmeditview9.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'ibztaskteams', parameterName: 'ibztaskteam' },
                            { pathName: 'mobmeditview9', parameterName: 'mobmeditview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/task-team-mob-medit-view9/task-team-mob-medit-view9.vue'),
                },
                {
                    path: 'products/:product?/testmobmdview',
                    name: 'product_testmobmdview',
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
                    path: 'ibzmyterritories/:ibzmyterritory?/mobcalendarview',
                    name: 'ibzmyterritory_mobcalendarview',
                    meta: {
                        caption: 'ibzmyterritory.views.mobcalendarview.caption',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                            { pathName: 'mobcalendarview', parameterName: 'mobcalendarview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/ibz-my-territory-mob-calendar-view/ibz-my-territory-mob-calendar-view.vue'),
                },
                {
                    path: 'products/:product?/stories/:story?/mobmdview9',
                    name: 'story_mobmdview9',
                    meta: {
                        caption: 'story.views.mobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-mdview9/story-mob-mdview9.vue'),
                },
                {
                    path: 'stories/:story?/mobmdview9',
                    name: 'story_mobmdview9',
                    meta: {
                        caption: 'story.views.mobmdview9.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'mobmdview9', parameterName: 'mobmdview9' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/story-mob-mdview9/story-mob-mdview9.vue'),
                },
                {
                    path: 'projects/:project?/builds/:build?/mobmdview',
                    name: 'build_mobmdview',
                    meta: {
                        caption: 'build.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    name: 'build_mobmdview',
                    meta: {
                        caption: 'build.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    name: 'build_mobmdview',
                    meta: {
                        caption: 'build.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    path: 'products/:product?/stories/:story?/cases/:case?/mobmdview',
                    name: 'case_mobmdview',
                    meta: {
                        caption: 'case.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'products', parameterName: 'product' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/case-mob-mdview/case-mob-mdview.vue'),
                },
                {
                    path: 'stories/:story?/cases/:case?/mobmdview',
                    name: 'case_mobmdview',
                    meta: {
                        caption: 'case.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'stories', parameterName: 'story' },
                            { pathName: 'cases', parameterName: 'case' },
                            { pathName: 'mobmdview', parameterName: 'mobmdview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/case-mob-mdview/case-mob-mdview.vue'),
                },
                {
                    path: 'products/:product?/cases/:case?/mobmdview',
                    name: 'case_mobmdview',
                    meta: {
                        caption: 'case.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
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
                    name: 'case_mobmdview',
                    meta: {
                        caption: 'case.views.mobmdview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-star-o',
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
                    name: 'release_mobeditview',
                    meta: {
                        caption: 'release.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-flag-o',
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
                    name: 'release_mobeditview',
                    meta: {
                        caption: 'release.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-flag-o',
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
                    name: 'testsuite_mobeditview',
                    meta: {
                        caption: 'testsuite.views.mobeditview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-suitcase',
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
                    name: 'build_mobpickupview',
                    meta: {
                        caption: 'build.views.mobpickupview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    name: 'build_mobpickupview',
                    meta: {
                        caption: 'build.views.mobpickupview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
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
                    name: 'build_mobpickupview',
                    meta: {
                        caption: 'build.views.mobpickupview.caption',
                        imgPath: '',
                        iconCls: 'fa fa-code-fork',
                        parameters: [
                            { pathName: 'viewshell', parameterName: 'viewshell' },
                            { pathName: 'builds', parameterName: 'build' },
                            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
                        ],
                        requireAuth: true,
                    },
                    component: () => import('@pages/ibiz/build-mob-pickup-view/build-mob-pickup-view.vue'),
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
