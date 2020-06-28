import Vue from 'vue';
import { StudioCore } from './studio-core';
import IBizStudioComponentsVue from 'ibiz-studio-components-vue';

// 注册Vue插件
export const UserDefaultComponent = {
    install(v: any, opt: any) {
        Vue.use(StudioCore);
        Vue.use(IBizStudioComponentsVue);
        v.component('app-vue-pivottable', () => import('./components/app-vue-pivottable/app-vue-pivottable.vue'));
        v.component('app-form-group4', () => import('./components/app-form-group4/app-form-group4'));
        v.component('draggable', () => import('vuedraggable'));
    }
};