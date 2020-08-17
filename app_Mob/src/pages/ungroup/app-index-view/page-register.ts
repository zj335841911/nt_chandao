export const PageComponents = {
    install(Vue: any, opt: any) {
                Vue.component('app-portal-view', () => import('@pages/ungroup/app-portal-view/app-portal-view.vue'));
    }
};