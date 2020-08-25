import { Http, Util, Verify, Loading } from '@/ibiz-core/utils';
import { AppDrawer, AppModal, ViewTool, Notice } from '@/utils';
import { IonPage } from './components/ion-page/ion-page';
import { AppEmbedView } from './components/app-embed-view/app-embed-view';

import AppKeepAlive from './components/app-keep-alive/app-keep-alive.vue';

/**
 * Vue插件
 */
export const AppComponents = {
    install(v: any, opt: any) {
        v.prototype.$http = Http.getInstance();
        v.prototype.$util = Util;
        v.prototype.$verify = Verify;
        v.prototype.$appdrawer = AppDrawer.getInstance();
        v.prototype.$appmodal = AppModal.getInstance();
        v.prototype.$viewTool = ViewTool.getInstance();
        v.prototype.$notice = Notice.getInstance();
        v.prototype.$apploading = Loading;
        v.component('ion-page', IonPage);
        v.component('embed-view', AppEmbedView);
        v.component('app-list-menu', () => import('@/components/app-list-menu/app-list-menu.vue'));
        v.component('app-slider-menu', () => import('@/components/app-slider-menu/app-slider-menu.vue'));
        v.component('app-icon-menu', () => import('@/components/app-icon-menu/app-icon-menu.vue'));
        v.component('app-mob-datetime-picker', () => import('@/components/app-mob-datetime-picker/app-mob-datetime-picker.vue'));
        v.component('app-mob-stepper', () => import('@/components/app-mob-stepper/app-mob-stepper.vue'));
        v.component('app-mob-input', () => import('@/components/app-mob-input/app-mob-input.vue'));
        v.component('app-radio', () => import('@/components/app-radio/app-radio.vue'));
        v.component('app-multiple-select', () => import('@/components/app-multiple-select/app-multiple-select.vue'));
        v.component('app-mob-select', () => import('@/components/app-mob-select/app-mob-select.vue'));
        v.component('app-form-druipart', () => import('@/components/app-form-druipart/app-form-druipart.vue'));
        v.component('app-card-list', () => import('@/components/app-card-list/app-card-list.vue'));
        v.component('app-icon-list', () => import('@/components/app-icon-list/app-icon-list.vue'));
        v.component('app-pic-menu', () => import('@/components/app-pic-menu/app-pic-menu.vue'));
        v.component('app-picdown-menu', () => import('@/components/app-picdown-menu/app-picdown-menu.vue'));
        v.component('app-picright-menu', () => import('@/components/app-picright-menu/app-picright-menu.vue'));
        v.component('app-pictop-menu', () => import('@/components/app-pictop-menu/app-pictop-menu.vue'));
        v.component('app-point-list', () => import('@/components/app-point-list/app-point-list.vue'));
        v.component('app-round-list', () => import('@/components/app-round-list/app-round-list.vue'));
        v.component('app-status-list', () => import('@/components/app-status-list/app-status-list.vue'));
        v.component('app-table-list', () => import('@/components/app-table-list/app-table-list.vue'));
        v.component('app-van-menu', () => import('@/components/app-van-menu/app-van-menu.vue'));
        v.component('app-mpicker', () => import('@/components/app-mpicker/app-mpicker.vue'));
        v.component('app-mob-picker', () => import('@/components/app-mob-picker/app-mob-picker.vue'));
        v.component('app-viewpager', () => import('@/components/app-viewpager/app-viewpager.vue'));
        v.component('app-notice-bar', () => import('@/components/app-notice-bar/app-notice-bar.vue'));
        v.component('app-twotitle-list', () => import('@/components/app-twotitle-list/app-twotitle-list.vue'));
        v.component('app-time-list', () => import('@/components/app-time-list/app-time-list.vue'));
        v.component('app-form-item', () => import('@/components/app-form-item/app-form-item.vue'));
        v.component('app-form-group', () => import('@/components/app-form-group/app-form-group.vue'));
        v.component('app-list-default', () => import('@/components/app-list-default/app-list-default.vue'));
        v.component('app-list-swipe', () => import('@/components/app-list-swipe/app-list-swipe.vue'));
        v.component('app-mob-rate', () => import('@/components/app-mob-rate/app-mob-rate.vue'));
        v.component('app-mob-select-drop-down', () => import('@/components/app-mob-select-drop-down/app-mob-select-drop-down.vue'));
        v.component('app-mob-textarea',() => import('./components/app-mob-textarea/app-mob-textarea.vue'));
        // 日历组件
        v.component('app-calendar',() => import('@/components/app-calendar/app-calendar.vue'));

        // 编辑器 BEGIN
        // 图片选择
        v.component('app-mob-picture', () => import('@/components/app-mob-picture/app-mob-picture.vue'));
        // 下拉列表 （多选）
        v.component('app-mob-check-list', () => import('@/components/app-mob-check-list/app-mob-check-list.vue'));
        // 文件上传
        v.component('app-mob-file-upload', () => import('@/components/app-mob-file-upload/app-mob-file-upload.vue'));
        // 开关
        v.component('app-mob-switch', () => import('@/components/app-mob-switch/app-mob-switch.vue'));
        // 滑动输入条
        v.component('app-mob-slider', () => import('@/components/app-mob-slider/app-mob-slider.vue'));        
        //单选框
        v.component('app-mob-radio-list', () => import('@/components/app-mob-radio-list/app-mob-radio-list.vue'));   
        //下拉单选
        v.component('app-mob-dropdown-list', () => import('@/components/app-mob-dropdown-list/app-mob-dropdown-list.vue')); 
        //下拉单选
        v.component('app-mob-mpicker', () => import('@/components/app-mob-mpicker/app-mob-mpicker.vue'));  
        //span
        v.component('app-mob-span', () => import('@/components/app-mob-span/app-mob-span.vue'));   
        //录音 
        v.component('app-mob-recorder', () => import('@/components/app-mob-recorder/app-mob-recorder.vue'));               
        // 编辑器 END

        // 菜单样式 BEGIN
        // 图标视图
        v.component('app-mob-menu-ionic-view', () => import('@/components/app-mob-menu-ionic-view/app-mob-menu-ionic-view.vue'));
        // 列表视图
        v.component('app-mob-menu-list-view', () => import('@/components/app-mob-menu-list-view/app-mob-menu-list-view.vue'));
        // 图片滑动视图
        v.component('app-mob-menu-swiper-view', () => import('@/components/app-mob-menu-swiper-view/app-mob-menu-swiper-view.vue'));
        //快速分组组件
        v.component('app-van-select', () => import('@/components/app-van-select/app-van-select.vue'));   
        // 默认样式视图
        v.component('app-mob-menu-default-view', () => import('@/components/app-mob-menu-default-view/app-mob-menu-default-view.vue'));
        // 菜单样式 END

        //界面行为操作栏
        v.component('app-actionbar',() => import('@/components/app-actionbar/app-actionbar.vue'));

        // 路由缓存
        v.component('app-keep-alive', AppKeepAlive);
        // 工作流审批意见控件
        v.component('app-wf-approval',() => import('@/components/app-wf-approval/app-wf-approval.vue'));
        // 主题切换组件
        v.component('app-mob-select-changeTheme',() => import('@/components/app-mob-select-changeTheme/app-mob-select-changeTheme.vue'));
        v.component('app-list-index',() => import('@/components/app-list-index/app-list-index.vue'));
        // 下拉列表组件
        v.component('app-history-list',() => import('@/components/app-history-list/app-history-list.vue'));
    },
};