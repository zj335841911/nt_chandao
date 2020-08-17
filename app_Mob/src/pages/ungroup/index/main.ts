import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from '@/App.vue';

import i18n from '@/locale'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant, i18n);

import '@/styles/default.less';

import { ionicInitialize } from '../../../ionic-initialize';
import { ibizMobileComponentsInitialize } from '../../../ibiz-mobile-components-initialize';
ionicInitialize({ mode: 'ios' });
ibizMobileComponentsInitialize();

// 模拟数据
if (process.env.NODE_ENV === 'development') {
    require('@/mock');
}

const pathToRegExp = require('path-to-regexp');
import { AppComponents } from '@/app-register';
import { PageComponents } from './page-register';
import { UserComponent } from '@/user-register';
import store from '@/store';
import router from './router';
import { Interceptors } from '@/utils';
import { ViewOpenService } from '@/utils/view-open-service/view-open-service';

Vue.config.errorHandler = function (err: any, vm: any, info: any) {
    console.log(err);
}
Vue.config.productionTip = false;
Vue.config.ignoredElements =[/^ion-/, /^ibiz-/];

Vue.use(Vuex);
Vue.use(VueRouter);;

Vue.prototype.$pathToRegExp = pathToRegExp;
Vue.use(AppComponents);
Vue.use(PageComponents);
Vue.use(UserComponent);

router.beforeEach((to: any, from: any, next: any) => {
    if (to.meta && !to.meta.ignoreAddPage) {
        router.app.$store.commit('addPage', to);
    }
    next();
});

Interceptors.getInstance(router, store);
ViewOpenService.getInstance(router);

new Vue({
    i18n,
    store,
    router,
    render: (h: any) => h(App),
}).$mount('#app');