import Vue from 'vue';
import { StudioCore } from './studio-core';
import { iBizProjectCore } from './ibiz-project-core';
// 注册Vue插件
export const UserDefaultComponent = {
    install(v: any, opt: any) {
        Vue.use(StudioCore);
        Vue.use(iBizProjectCore);
    }
};