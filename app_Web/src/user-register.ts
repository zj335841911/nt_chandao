import Vue from 'vue';
import { UserDefaultComponent } from './user-default-register';
import { iBizProjectCore } from './ibiz-project-core';

// 注册Vue插件
export const UserComponent = {
    install(v: any, opt: any) {
        Vue.use(UserDefaultComponent);
        Vue.use(iBizProjectCore);
    }
};