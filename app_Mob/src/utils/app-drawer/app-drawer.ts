import Vue from 'vue';
import { Subject } from 'rxjs';
import store from '../../store';
import i18n from '@/locale';
import AppDrawerCompponent from "./app-drawer.vue";

/**
 * 抽屉工具
 *
 * @export
 * @class AppDrawer
 */
export class AppDrawer {

    /**
     * 实例对象
     *
     * @private
     * @static
     * @memberof AppDrawer
     */
    private static readonly $drawer = new AppDrawer();

    /**
     * 构造方法
     * 
     * @memberof AppDrawer
     */
    constructor() {
        if (AppDrawer.$drawer) {
            return AppDrawer.$drawer;
        }
    }

    /**
     * vue 实例
     *
     * @private
     * @type {Vue}
     * @memberof AppDrawer
     */
    private vueExample!: Vue;;

    /**
     * 获取实例对象
     *
     * @static
     * @returns
     * @memberof AppDrawer
     */
    public static getInstance() {
        return AppDrawer.$drawer;
    }

    /**
     * 创建 Vue 实例对象
     *
     * @private
     * @param {{ viewname: string, title: string, width?: number, height?: number, placement?: any }} view 视图数据
     * @param {*} [context={}] 视图上下文
     * @param {*} [viewparams={}] 视图参数
     * @param {string} uuid
     * @returns {Subject<any>}
     * @memberof AppDrawer
     */
    private createVueExample(view: { viewname: string, title: string, width?: number, height?: number, placement?: any }, context: any = {}, viewparams: any = {}, uuid: string): Subject<any> {
        try {
            let props = { view: view, context: context, viewparams: viewparams, uuid: uuid };
            let component = AppDrawerCompponent;
            const vm = new Vue({
                store: store,
                i18n: i18n,
                render(h) {
                    return h(component, { props });
                }
            }).$mount();
            this.vueExample = vm;
            document.body.appendChild(vm.$el);
            const comp: any = vm.$children[0];
            return comp.getSubject();
        } catch (error) {
            console.error(error);
            return new Subject<any>();
        }
    }

    /**
     * 打开抽屉
     *
     * @param {({ viewname: string, title: string, width?: number, height?: number, placement?: 'DRAWER_LEFT' | 'DRAWER_RIGHT' })} view 视图数据
     * @param {*} [context={}] 视图上下文
     * @param {*} [viewparams={}] 视图参数
     * @returns {Subject<any>}
     * @memberof AppDrawer
     */
    public openDrawer(view: { viewname: string, title: string, width?: number, height?: number, placement?: 'DRAWER_LEFT' | 'DRAWER_RIGHT' }, context: any = {}, viewparams: any = {}): Subject<any> {
        try {
            let _context: any = {};
            Object.assign(_context, context);
            const uuid = this.getUUID();
            const subject = this.createVueExample(view, _context, viewparams, uuid);
            return subject;
        } catch (error) {
            console.log(error);
            return new Subject<any>();
        }
    }

    /**
     * 生成uuid
     *
     * @private
     * @returns {string}
     * @memberof AppDrawer
     */
    private getUUID(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }


}