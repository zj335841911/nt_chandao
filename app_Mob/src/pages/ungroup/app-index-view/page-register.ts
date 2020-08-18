export const PageComponents = {
    install(Vue: any, opt: any) {
                Vue.component('app-portal-view', () => import('@pages/ungroup/app-portal-view/app-portal-view.vue'));
        Vue.component('task-mob-mdview', () => import('@pages/zentao/task-mob-mdview/task-mob-mdview.vue'));
        Vue.component('story-mob-mdview', () => import('@pages/zentao/story-mob-mdview/story-mob-mdview.vue'));
    }
};