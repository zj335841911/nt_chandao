// 组件 Start
import { AppLayout } from './components/layout/app-layout/app-layout';
import { AppHeader } from './components/layout/app-header/app-header';
import { AppHeaderMenus } from './components/app-header-menus/app-header-menus';
import { AppContent } from './components/layout/app-content/app-content';
import { AppContentLeftExp } from './components/layout/app-content-left-exp/app-content-left-exp';
import { AppContentLeftNavMenu } from './components/layout/app-content-left-nav-menu/app-content-left-nav-menu';
import { AppContentBottomExp } from './components/layout/app-content-bottom-exp/app-content-bottom-exp';
import { AppFooter } from './components/layout/app-footer/app-footer';
import { MenuIcon } from './components/menu-icon/menu-icon';
import { UserInfo } from './components/user-info/user-info';
import { StudioView } from './components/studio-view/studio-view';
import { StudioEmbedView } from './components/studio-embed-view/studio-embed-view';
import { ViewConfigActions } from './components/view-config-actions/view-config-actions';
import HtmlContainer from './components/html-container/html-container.vue';
// 组件 End
// 服务 Start
import { acc } from './message-center/app-communications-center';
import { FooterItemsService } from './service/FooterItemsService';
import { UIStateService } from './service/UIStateService';
// 服务 End
// 指令 Start
import { NotificationSignal } from './directives/notification-signal/notification-signal';
// 指令 End

// 注册Vue插件
export const StudioCore = {
    install(v: any, opt: any) {
        // 注册服务
        v.prototype.$acc = acc;
        v.prototype.$footerMenuService = new FooterItemsService();
        v.prototype.$uiState = new UIStateService();
        // 注册组件
        v.component('app-layout', AppLayout);
        v.component('app-header', AppHeader);
        v.component('app-header-menus', AppHeaderMenus);
        v.component('app-content', AppContent);
        v.component('app-content-left-exp', AppContentLeftExp);
        v.component('app-content-left-nav-menu', AppContentLeftNavMenu);
        v.component('app-content-bottom-exp', AppContentBottomExp);
        v.component('app-footer', AppFooter);
        v.component('menu-icon', MenuIcon);
        v.component('user-info', UserInfo);
        v.component('studio-view', StudioView);
        v.component('studio-embed-view', StudioEmbedView);
        v.component('view-config-actions', ViewConfigActions);
        v.directive('notification-signal', NotificationSignal);
        v.directive('html-container', HtmlContainer);
    }
};