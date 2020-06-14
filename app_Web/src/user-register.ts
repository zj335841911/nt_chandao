import Vue from 'vue';
import IBizStudioComponentsVue from 'ibiz-studio-components-vue';
import { UserDefaultComponent } from './user-default-register';
import AppVuePivotTable from './components/app-vue-pivottable/app-vue-pivottable.vue';

// 注册Vue插件
export const UserComponent = {
    install(v: any, opt: any) {
        Vue.use(UserDefaultComponent);
        Vue.use(IBizStudioComponentsVue);
        v.component('app-vue-pivottable', AppVuePivotTable);
    }
};