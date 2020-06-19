import Vue from 'vue';
import { UserDefaultComponent } from './user-default-register';
import CombFormItem from './ibiz-project-core/components/comb-form-item/comb-form-item.vue'

// 注册Vue插件
export const UserComponent = {
    install(v: any, opt: any) {
        Vue.use(UserDefaultComponent);
        v.component('comb-form-item',CombFormItem);
    }
};