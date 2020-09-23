export const UserComponent = {
    install(v: any, opt: any) {
        // 历史记录插件
        v.component('app-history-list',() => import('@/ibiz-core/components/app-history-list/app-history-list.vue'));
        // 富文本编辑器（show）
        v.component('app-mob-rich-text-editor-pms',() => import('@/ibiz-core/components/app-mob-rich-text-editor-pms/app-mob-rich-text-editor-pms.vue'));
        // 富文本编辑器（edit）
        v.component('app-rich-text-pms',() => import('@/ibiz-core/components/app-rich-text-pms/app-rich-text-pms.vue'));
        // 定制组件
        v.component('app-customize',() => import('@/ibiz-core/components/app-customize/app-customize.vue'));
        // 主题切换组件
        v.component('app-mob-select-changeTheme',() => import('@/ibiz-core/components/app-mob-select-changeTheme/app-mob-select-changeTheme.vue'));
        // 风格切换组件
        v.component('app-mob-select-changeStyle',() => import('@/ibiz-core/components/app-mob-select-changeStyle/app-mob-select-changeStyle.vue'));
        // setting组件
        v.component('app-setting',() => import('@/ibiz-core/components/app-setting/app-setting.vue'));
        // 更新日志组件
        v.component('app-update-log',() => import('@/ibiz-core/components/app-update-log/app-update-log.vue'))
    }
};