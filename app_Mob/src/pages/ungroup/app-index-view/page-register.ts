export const PageComponents = {
    install(Vue: any, opt: any) {
                Vue.component('app-portal-view', () => import('@pages/ungroup/app-portal-view/app-portal-view.vue'));
        Vue.component('story-mob-edit-view', () => import('@pages/ibiz/story-mob-edit-view/story-mob-edit-view.vue'));
        Vue.component('product-mob-edit-view', () => import('@pages/ibiz/product-mob-edit-view/product-mob-edit-view.vue'));
        Vue.component('task-mob-mdview', () => import('@pages/zentao/task-mob-mdview/task-mob-mdview.vue'));
        Vue.component('product-stats-mob-tab-exp-view', () => import('@pages/ibiz/product-stats-mob-tab-exp-view/product-stats-mob-tab-exp-view.vue'));
        Vue.component('bug-mob-mdview', () => import('@pages/ibiz/bug-mob-mdview/bug-mob-mdview.vue'));
        Vue.component('product-stats-mob-mdview', () => import('@pages/ibiz/product-stats-mob-mdview/product-stats-mob-mdview.vue'));
        Vue.component('story-mob-mdview', () => import('@pages/zentao/story-mob-mdview/story-mob-mdview.vue'));
        Vue.component('bug-mob-edit-view', () => import('@pages/ibiz/bug-mob-edit-view/bug-mob-edit-view.vue'));
        Vue.component('product-plan-mob-edit-view', () => import('@pages/ibiz/product-plan-mob-edit-view/product-plan-mob-edit-view.vue'));
        Vue.component('product-plan-mob-mdview', () => import('@pages/ibiz/product-plan-mob-mdview/product-plan-mob-mdview.vue'));
    }
};