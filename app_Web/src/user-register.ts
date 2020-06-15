import Vue from 'vue';
import { UserDefaultComponent } from './user-default-register';

// 注册Vue插件
export const UserComponent = {
    install(v: any, opt: any) {
        Vue.use(UserDefaultComponent);
    }
};