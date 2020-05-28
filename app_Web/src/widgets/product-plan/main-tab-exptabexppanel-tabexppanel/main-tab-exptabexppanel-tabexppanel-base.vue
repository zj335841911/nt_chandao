<template>
  <div class='tabviewpanel'>
        <tabs :value="activiedTabViewPanel" :animated="false" class='tabexppanel' name='maintabexptabexppanel' @on-click="tabPanelClick">
        <tab-pane :index="0" name='tabviewpanel' tab='maintabexptabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '需求'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel"  
    ref='tabviewpanel' 
    @closeview="closeView($event)">
</view_tabviewpanel>
        </tab-pane>
        <tab-pane :index="1" name='tabviewpanel2' tab='maintabexptabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', 'Bug'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel2 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel2"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel2"  
    ref='tabviewpanel2' 
    @closeview="closeView($event)">
</view_tabviewpanel2>
        </tab-pane>
        <tab-pane :index="2" name='tabviewpanel3' tab='maintabexptabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '子计划'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel3 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel3"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel3"  
    ref='tabviewpanel3' 
    @closeview="closeView($event)">
</view_tabviewpanel3>
        </tab-pane>
        <tab-pane :index="3" name='tabviewpanel4' tab='maintabexptabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '计划详情'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel4 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel4"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel4"  
    ref='tabviewpanel4' 
    @closeview="closeView($event)">
</view_tabviewpanel4>
        </tab-pane>
    </tabs>
  </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import MainTabExptabexppanelService from './main-tab-exptabexppanel-tabexppanel-service';



@Component({
    components: {
      
    }
})
export default class MainTabExptabexppanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainTabExptabexppanel
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainTabExptabexppanel
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainTabExptabexppanel
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainTabExptabexppanel
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MainTabExptabexppanel
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainTabExptabexppanel
     */
    public getControlType(): string {
        return 'TABEXPPANEL'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainTabExptabexppanel
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainTabExptabexppanelService}
     * @memberof MainTabExptabexppanel
     */
    public service: MainTabExptabexppanelService = new MainTabExptabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductPlanService}
     * @memberof MainTabExptabexppanel
     */
    public appEntityService: ProductPlanService = new ProductPlanService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainTabExptabexppanel
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainTabExptabexppanel
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
     * 是否初始化
     *
     * @returns {any}
     * @memberof MainTabExptabexppanel
     */
    public isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainTabExptabexppanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainTabExptabexppanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 行为参数
     *
     * @public
     * @type {*}
     * @memberof MainTabExptabexppanel
     */
    public action:any = '';

    /**
     * 被激活的分页面板
     *
     * @type {string}
     * @memberof MainTabExptabexppanel
     */
    public activiedTabViewPanel: string = 'tabviewpanel';

    /**
     * 分页视图面板数据变更
     *
     * @memberof MainTabExptabexppanel
     */
    public tabViewPanelDatasChange(){
        this.counterRefresh();
    }

    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MainTabExptabexppanel
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainTabExptabexppanel
     */
    public afterCreated(){
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.productplan) {
            Object.assign(this.context, { srfparentdename: 'ProductPlan', srfparentkey: this.context.productplan });
        }
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.action = action;
                this.viewState.next({ tag: this.activiedTabViewPanel, action: action, data: data });
            });
        }
    }

    /**
     * 组件加载完毕
     *
     *  @memberof MainTabExptabexppanel
     */
    public mounted(): void {
        if (this.viewparams) {
            const activate = this.viewparams.activate;
            if (activate && this.isInit[activate] !== undefined) {
                for (const key in this.isInit) {
                    if (this.isInit.hasOwnProperty(key)) {
                        this.isInit[key] = false;
                    }
                }
                this.$nextTick(() => {
                    this.tabPanelClick(activate);
                });
            }
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MainTabExptabexppanel
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainTabExptabexppanel
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 分页面板选中
     *
     * @param {*} $event
     * @returns
     * @memberof MainTabExptabexppanel
     */
    public tabPanelClick($event: any) {
        if (!$event) {
            return;
        }
        this.isInit[$event] = true;
        if (!this.viewState) {
            return;
        }
        this.activiedTabViewPanel = $event;
        this.viewState.next({ tag: this.activiedTabViewPanel, action: this.action, data: {}});
    }



}
</script>

<style lang='less'>
@import './main-tab-exptabexppanel-tabexppanel.less';
</style>