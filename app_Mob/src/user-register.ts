export const UserComponent = {
    install(v: any, opt: any) {
        // 历史记录插件
        v.component('app-history-list',() => import('@/components/app-history-list/app-history-list.vue'));
        // 富文本编辑器（show）
        v.component('app-mob-rich-text-editor-pms',() => import('@/components/app-mob-rich-text-editor-pms/app-mob-rich-text-editor-pms.vue'));
    }
};