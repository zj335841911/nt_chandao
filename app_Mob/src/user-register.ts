export const UserComponent = {
    install(v: any, opt: any) {
        // 历史记录插件
        v.component('app-history-list',() => import('@/components/app-history-list/app-history-list.vue'));
    }
};