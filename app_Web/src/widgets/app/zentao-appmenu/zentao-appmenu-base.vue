<template>
<div class="app-app-menu">
    <el-menu
      class="app-menu"
      :default-openeds="defaultOpeneds"
      :mode="mode"
      :menu-trigger="trigger"
      :collapse="isCollapse"
      @select="select"
      :default-active="defaultActive">
        <template v-for="item0 in menus">
            <template v-if="item0.items && Array.isArray(item0.items) && item0.items.length > 0">
                <el-submenu v-show="!item0.hidden" :index="item0.name" :popper-class="popperClass" :key="item0.id">
                    <template slot='title'>
                        <template v-if="item0.icon && item0.icon != ''">
                            <img :src="item0.icon" class='app-menu-icon' />
                        </template>
                        <template v-else-if="item0.iconcls && item0.iconcls != ''">
                            <i :class="[item0.iconcls, 'app-menu-icon']"></i>
                        </template>
                        <template v-else>
                            <i class='fa fa-cogs app-menu-icon'></i>
                        </template>
                        <span class='text' :title="$t('app.menus.zentao.' + item0.name)">{{$t('app.menus.zentao.' + item0.name)}}</span>
                    </template>
                    <template v-for="item1 in item0.items">
                        <template v-if="item1.items && Array.isArray(item1.items) && item1.items.length > 0">
                            <el-submenu v-show="!item1.hidden" :index="item1.name" :popper-class="popperClass" :key="item1.id">
                                <template slot='title'>
                                    <template v-if="item1.icon && item1.icon != ''">
                                        <img :src="item1.icon" class='app-menu-icon' />
                                    </template>
                                    <template v-else-if="item1.iconcls && item1.iconcls != ''">
                                        <i :class="[item1.iconcls, 'app-menu-icon']"></i>
                                    </template>
                                    <span class='text' :title="$t('app.menus.zentao.' + item1.name)">{{$t('app.menus.zentao.' + item1.name)}}</span>
                                </template>
                                <template v-for="item2 in item1.items">
                                    <template v-if="item2.type =='MENUITEM'">
                                        <el-menu-item v-show="!item2.hidden" :index="item2.name" :key="item2.id">
                                            <template v-if="item2.icon && item2.icon != ''">
                                                <img :src="item2.icon" class='app-menu-icon' />
                                            </template>
                                            <template v-else-if="item2.iconcls && item2.iconcls != ''">
                                                <i :class="[item2.iconcls, 'app-menu-icon']"></i>
                                            </template>
                                            <template slot="title">
                                                <span class="text" :title="$t('app.menus.zentao.' + item2.name)">{{$t('app.menus.zentao.' + item2.name)}}</span>
                                                <template v-if="counterdata && counterdata[item2.counterid] && counterdata[item2.counterid] > 0">
                                                    <span class="pull-right">
                                                        <badge :count="counterdata[item2.counterid]" :overflow-count="9999"></badge>
                                                    </span>
                                                </template>
                                            </template>
                                        </el-menu-item>
                                    </template>
                                    <template v-if="item2.type =='SEPERATOR'">
                                            <divider :key="item2.id" />
                                    </template>
                                </template>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <template v-if="item1.type =='MENUITEM'">
                                <el-menu-item v-show="!item1.hidden" :index="item1.name" :key="item1.id">
                                    <template v-if="item1.icon && item1.icon != ''">
                                        <img :src="item1.icon" class='app-menu-icon' />
                                    </template>
                                    <template v-else-if="item1.iconcls && item1.iconcls != ''">
                                        <i :class="[item1.iconcls, 'app-menu-icon']"></i>
                                    </template>
                                    <template slot="title">
                                        <span class="text" :title="$t('app.menus.zentao.' + item1.name)">{{$t('app.menus.zentao.' + item1.name)}} </span>
                                        <template v-if="counterdata && counterdata[item1.counterid] && counterdata[item1.counterid] > 0">
                                            <span class="pull-right">
                                                <badge :count="counterdata[item1.counterid]" :overflow-count="9999"></badge>
                                            </span>
                                        </template>
                                    </template>
                                </el-menu-item>
                            </template>
                            <template v-if="item1.type =='SEPERATOR'">
                                    <divider :key="item1.id" />
                            </template>
                        </template>
                    </template>
                </el-submenu>
            </template>
            <template v-else>
                <template v-if="item0.type =='MENUITEM'">
                    <el-menu-item v-show="!item0.hidden" :index="item0.name" :key="item0.id">
                        <template v-if="item0.icon && item0.icon != ''">
                            <img :src="item0.icon" class='app-menu-icon' />
                        </template>
                        <template v-else-if="item0.iconcls && item0.iconcls != ''">
                            <i :class="[item0.iconcls, 'app-menu-icon']"></i>
                        </template>
                        <template v-else>
                            <i class='fa fa-cogs app-menu-icon'></i>
                        </template>
                        <template slot="title">
                            <span class="text" :title="$t('app.menus.zentao.' + item0.name)">{{$t('app.menus.zentao.' + item0.name)}}</span>
                            <template v-if="counterdata && counterdata[item0.counterid] && counterdata[item0.counterid] > 0">
                                <span class="pull-right">
                                    <badge :count="counterdata[item0.counterid]" :overflow-count="9999"></badge>
                                </span>
                            </template>
                        </template>
                    </el-menu-item>
                </template>
                <template v-if="item0.type =='SEPERATOR'">
                        <divider :key="item0.id" />
                </template>
            </template>
        </template>
    </el-menu>
</div>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ZentaoService from './zentao-appmenu-service';

import ZentaoModel from './zentao-appmenu-model';


@Component({
    components: {
      
    }
})
export default class ZentaoBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Zentao
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Zentao
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Zentao
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Zentao
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Zentao
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Zentao
     */
    protected getControlType(): string {
        return 'APPMENU'
    }



    /**
     * 建构部件服务对象
     *
     * @type {ZentaoService}
     * @memberof Zentao
     */
    protected service: ZentaoService = new ZentaoService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof Zentao
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof Zentao
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Zentao
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Zentao
     */
    public getData(): any {
        return null;
    }

    /**
     * 菜单模型
     *
     * @private
     * @type {ZentaoModel}
     * @memberof Zentao
     */
    private menuMode: ZentaoModel = new ZentaoModel();

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof Zentao
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 菜单数据
     *
     * @private
     * @type {any[]}
     * @memberof Zentao
     */
    @Provide()
    private menus: any[] = [];

    /**
     * 菜单收缩改变
     *
     * @type {boolean}
     * @memberof Zentao
     */
    @Model() protected collapsechange?: boolean;

    /**
     * 监听菜单收缩
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Zentao
     */
    @Watch('collapsechange')
    onCollapsechangeChange(newVal: any, oldVal: any) {
        if (newVal !== this.isCollapse) {
            this.isCollapse = !this.isCollapse;
        }
    }

    /**
     * 当前模式，菜单在顶部还是在底部
     *
     * @type {*}
     * @memberof Zentao
     */
    @Prop() mode: any;

    /**
     * 当前菜单是否在默认视图上
     *
     * @type {*}
     * @memberof Zentao
     */
    @Prop({ default: false }) isDefaultPage?: boolean;

    /**
     * 默认打开视图
     *
     * @type {*}
     * @memberof Zentao
     */
    @Prop() defPSAppView: any;

    /**
     * 默认激活的index
     *
     * @type {*}
     * @memberof Zentao
     */
    @Provide() defaultActive: any = null;

    /**
     * 当前选中主题
     *
     * @type {*}
     * @memberof Zentao
     */
    @Prop() selectTheme: any;

    /**
     * 默认打开的index数组
     *
     * @type {any[]}
     * @memberof Zentao
     */
    @Provide() protected defaultOpeneds: any[] = [];

    /**
     * 是否展开
     *
     * @type {boolean}
     * @memberof Zentao
     */
    @Provide() protected isCollapse: boolean = false;

    /**
     * 触发方式，默认click
     *
     * @type {string}
     * @memberof Zentao
     */
    @Provide() trigger: string = 'click';

    /**
     * 计数器数据
     *
     * @type {*}
     * @memberof Zentao
     */
    protected counterdata: any = {};
    /**
     * vue  生命周期
     *
     * @memberof Zentao
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Zentao
     */    
    protected afterCreated(){
        if (Object.is(this.mode, 'horizontal')) {
            this.trigger = 'hover';
        }
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.load(data);
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof Zentao
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Zentao
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


    /**
     * 处理菜单默认选中项
     *
     * @private
     * @memberof Zentao
     */
    private doMenuSelect(): void {
        if (!this.isDefaultPage) {
            return;
        }
        const appFuncs: any[] = this.menuMode.getAppFuncs();
        if (this.$route && this.$route.matched && this.$route.matched.length == 2) { // 存在二级路由
            const [{ }, matched] = this.$route.matched;
            const appfunc: any = appFuncs.find((_appfunc: any) => Object.is(_appfunc.routepath, matched.path) && Object.is(_appfunc.appfuncyype, 'APPVIEW'));
            if (appfunc) {
                this.computeMenuSelect(this.menus, appfunc.appfunctag);
            }
            return;
        } else if (this.defPSAppView && Object.keys(this.defPSAppView).length > 0) { // 存在默认视图
            const appfunc: any = appFuncs.find((_appfunc: any) => Object.is(_appfunc.routepath, this.defPSAppView.routepath) && Object.is(_appfunc.appfuncyype, 'APPVIEW'));
            if (appfunc) {
                this.computeMenuSelect(this.menus, appfunc.appfunctag);
            }
            const viewparam: any = {};
            const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, this.defPSAppView.deResParameters, this.defPSAppView.parameters, [], viewparam);
            this.$router.push(path);
            return;
        }

        this.computeMenuSelect(this.menus, '');
        let item = this.compute(this.menus, this.defaultActive);
        if (Object.keys(item).length === 0) {
            return;
        }
        this.click(item);
    }

    /**
     * 计算菜单选中项
     *
     * @private
     * @param {any[]} items
     * @param {string} appfunctag
     * @returns {boolean}
     * @memberof Zentao
     */
    private computeMenuSelect(items: any[], appfunctag: string): boolean {
        const appFuncs: any[] = this.menuMode.getAppFuncs();
        return items.some((item: any) => {
            if (Object.is(appfunctag, '') && !Object.is(item.appfunctag, '')) {
                const appfunc = appFuncs.find((_appfunc: any) => Object.is(_appfunc.appfunctag, item.appfunctag));
                if (appfunc.routepath) {
                    this.defaultActive = item.name;
                    this.setHideSideBar(item);
                    return true;
                }
            }
            if (Object.is(item.appfunctag, appfunctag)) {
                this.setHideSideBar(item);
                this.defaultActive = item.name;
                return true;
            }
            if (item.items && item.items.length > 0) {
                const state = this.computeMenuSelect(item.items, appfunctag);
                if (state) {
                    this.defaultOpeneds.push(item.name);
                    return true;
                }
            }
            return false;
        });
    }

    /**
     * 获取菜单项数据
     *
     * @private
     * @param {any[]} items
     * @param {string} name
     * @returns
     * @memberof Zentao
     */
    private compute(items: any[], name: string) {
        const item: any = {};
        items.some((_item: any) => {
            if (name && Object.is(_item.name, name)) {
                Object.assign(item, _item);
                this.setHideSideBar(_item);
                return true;
            }
            if (_item.items && Array.isArray(_item.items)) {
                const subItem = this.compute(_item.items, name);
                if (Object.keys(subItem).length > 0) {
                    Object.assign(item, subItem);
                    return true;
                }
            }
            return false;
        });
        return item;
    }

    /**
     * 设置是否隐藏菜单栏
     *
     * @private
     * @param {*} item
     * @memberof Zentao
     */
    private setHideSideBar(item: any): void {
        if (item.hidesidebar) {
            this.$emit('collapsechange', true);
        }
    }

    /**
     * 菜单项选中处理
     *
     * @param {*} index
     * @param {any[]} indexs
     * @returns
     * @memberof Zentao
     */
    protected select(index: any, indexs: any[]) {
        let item = this.compute(this.menus, index);
        if (Object.keys(item).length === 0) {
            return;
        }
        this.click(item);
    }

    /**
     * 菜单点击
     *
     * @private
     * @param {*} item 菜单数据
     * @memberof Zentao
     */
    private click(item: any) {
        if (item) {
            switch (item.appfunctag) {
                case 'Auto11': 
                    this.clickAuto11(item);
                    return;
                case 'Auto5': 
                    this.clickAuto5(item);
                    return;
                case 'Auto8': 
                    this.clickAuto8(item);
                    return;
                case 'Auto2': 
                    this.clickAuto2(item);
                    return;
                case 'Auto6': 
                    this.clickAuto6(item);
                    return;
                case 'Auto1': 
                    this.clickAuto1(item);
                    return;
                case 'Auto10': 
                    this.clickAuto10(item);
                    return;
                case 'Auto9': 
                    this.clickAuto9(item);
                    return;
                default:
                    console.warn('未指定应用功能');
            }
        }
    }

    
    /**
     * 测试边栏
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    protected clickAuto11(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'testleftsidebarlistview', parameterName: 'testleftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
    }
    
    /**
     * 项目边栏
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    protected clickAuto5(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projects', parameterName: 'project' },
            { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
    }
    
    /**
     * iBiz软件生产管理
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    protected clickAuto8(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'htmlview', parameterName: 'htmlview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
    }
    
    /**
     * 左边栏产品列表视图
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    protected clickAuto2(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
    }
    
    /**
     * 打开项目主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    protected clickAuto6(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projectportalview', parameterName: 'projectportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
    }
    
    /**
     * 打开产品主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    protected clickAuto1(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'productportalview', parameterName: 'productportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
    }
    
    /**
     * 我的地盘
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    protected clickAuto10(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
            { pathName: 'tabexpview', parameterName: 'tabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
    }
    
    /**
     * 打开测试主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    protected clickAuto9(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'testportalview', parameterName: 'testportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        this.$router.push(path);
    }

    /**
     * 数据加载
     *
     * @param {*} data
     * @memberof Zentao
     */
    protected load(data: any) {
        this.dataProcess(this.menuMode.getAppMenuItems());
        this.menus = this.menuMode.getAppMenuItems();
        this.doMenuSelect();
    }

    /**
     * 数据处理
     *
     * @private
     * @param {any[]} items
     * @memberof Zentao
     */
    private dataProcess(items: any[]): void {
        items.forEach((_item: any) => {
            if (_item.expanded) {
                this.defaultOpeneds.push(_item.name);
            }
            if (_item.items && _item.items.length > 0) {
                this.dataProcess(_item.items)
            }
        });
    }

    /**
     * 提示框主题样式
     *
     * @readonly
     * @type {string}
     * @memberof Zentao
     */
    get popperClass(): string {
        return 'app-popper-menu ' + this.selectTheme;
    }
    
}
</script>

<style lang='less'>
@import './zentao-appmenu.less';
</style>