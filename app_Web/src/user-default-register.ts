import Vue from 'vue';
import { StudioCore } from './studio-core';
import { iBizProjectCore } from './ibiz-project-core';
import IBizStudioComponentsVue from 'ibiz-studio-components-vue';
import AppVuePivotTable from './components/app-vue-pivottable/app-vue-pivottable.vue';

// 注册Vue插件
export const UserDefaultComponent = {
    install(v: any, opt: any) {
        Vue.use(StudioCore);
        Vue.use(iBizProjectCore);
        Vue.use(IBizStudioComponentsVue);
        v.component('app-vue-pivottable', AppVuePivotTable);
    }
};