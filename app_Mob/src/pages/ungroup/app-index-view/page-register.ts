export const PageComponents = {
    install(Vue: any, opt: any) {
                Vue.component('app-portal-view', () => import('@pages/ungroup/app-portal-view/app-portal-view.vue'));
        Vue.component('project-mob-mdview', () => import('@pages/ibiz/project-mob-mdview/project-mob-mdview.vue'));
        Vue.component('story-mob-edit-view', () => import('@pages/ibiz/story-mob-edit-view/story-mob-edit-view.vue'));
        Vue.component('product-mob-edit-view', () => import('@pages/ibiz/product-mob-edit-view/product-mob-edit-view.vue'));
        Vue.component('story-ass-mob-mdview', () => import('@pages/ibiz/story-ass-mob-mdview/story-ass-mob-mdview.vue'));
        Vue.component('bug-mob-mdview', () => import('@pages/ibiz/bug-mob-mdview/bug-mob-mdview.vue'));
        Vue.component('task-mob-edit-view', () => import('@pages/ibiz/task-mob-edit-view/task-mob-edit-view.vue'));
        Vue.component('story-mob-mdview', () => import('@pages/zentao/story-mob-mdview/story-mob-mdview.vue'));
        Vue.component('product-plan-mob-edit-view', () => import('@pages/ibiz/product-plan-mob-edit-view/product-plan-mob-edit-view.vue'));
        Vue.component('product-plan-mob-mdview', () => import('@pages/ibiz/product-plan-mob-mdview/product-plan-mob-mdview.vue'));
        Vue.component('task-ass-mob-mdview', () => import('@pages/ibiz/task-ass-mob-mdview/task-ass-mob-mdview.vue'));
        Vue.component('bug-ass-mob-mdview', () => import('@pages/ibiz/bug-ass-mob-mdview/bug-ass-mob-mdview.vue'));
        Vue.component('ibz-my-territory-mob-tab-exp-view', () => import('@pages/ibiz/ibz-my-territory-mob-tab-exp-view/ibz-my-territory-mob-tab-exp-view.vue'));
        Vue.component('task-mob-mdview', () => import('@pages/zentao/task-mob-mdview/task-mob-mdview.vue'));
        Vue.component('project-mob-edit-view', () => import('@pages/ibiz/project-mob-edit-view/project-mob-edit-view.vue'));
        Vue.component('product-stats-mob-tab-exp-view', () => import('@pages/ibiz/product-stats-mob-tab-exp-view/product-stats-mob-tab-exp-view.vue'));
        Vue.component('product-stats-mob-mdview', () => import('@pages/ibiz/product-stats-mob-mdview/product-stats-mob-mdview.vue'));
        Vue.component('bug-mob-edit-view', () => import('@pages/ibiz/bug-mob-edit-view/bug-mob-edit-view.vue'));
    }
};