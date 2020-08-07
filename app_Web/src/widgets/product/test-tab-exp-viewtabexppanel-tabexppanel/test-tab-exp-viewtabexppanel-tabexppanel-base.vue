
<template>
  <div class='tabviewpanel' style="height:100%;">
        <tabs :animated="false" class='tabexppanel' name='tabexppanel' @on-click="tabPanelClick">
        <tab-pane :index="0" name='tabviewpanel2' tab='tabexppanel' class=''  
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
        <tab-pane :index="1" name='tabviewpanel3' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '功能测试'),
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
        <tab-pane :index="2" name='tabviewpanel4' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '测试单'),
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
        <tab-pane :index="3" name='tabviewpanel5' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '报告'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel5 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel5"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel5"  
    ref='tabviewpanel5' 
    @closeview="closeView($event)">
</view_tabviewpanel5>
        </tab-pane>
        <tab-pane :index="4" name='tabviewpanel6' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '套件'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel6 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel6"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel6"  
    ref='tabviewpanel6' 
    @closeview="closeView($event)">
</view_tabviewpanel6>
        </tab-pane>
        <tab-pane :index="5" name='tabviewpanel7' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '模块'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel7 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel7"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel7"  
    ref='tabviewpanel7' 
    @closeview="closeView($event)">
</view_tabviewpanel7>
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
import ProductService from '@/service/product/product-service';
import TestTabExpViewtabexppanelService from './test-tab-exp-viewtabexppanel-tabexppanel-service';



@Component({
    components: {
      
    }
})
export default class TestTabExpViewtabexppanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TestTabExpViewtabexppanel
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TestTabExpViewtabexppanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TestTabExpViewtabexppanel
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TestTabExpViewtabexppanel
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof TestTabExpViewtabexppanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TestTabExpViewtabexppanel
     */
    protected getControlType(): string {
        return 'TABEXPPANEL'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestTabExpViewtabexppanel
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {TestTabExpViewtabexppanelService}
     * @memberof TestTabExpViewtabexppanel
     */
    protected service: TestTabExpViewtabexppanelService = new TestTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof TestTabExpViewtabexppanel
     */
    protected appEntityService: ProductService = new ProductService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof TestTabExpViewtabexppanel
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TestTabExpViewtabexppanel
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
     * @memberof TestTabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel2:  true ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
        tabviewpanel5:  false ,
        tabviewpanel6:  false ,
        tabviewpanel7:  false ,
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestTabExpViewtabexppanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestTabExpViewtabexppanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 行为参数
     *
     * @protected
     * @type {*}
     * @memberof TestTabExpViewtabexppanel
     */
    protected action:any = '';

    /**
     * 被激活的分页面板
     *
     * @type {string}
     * @memberof TestTabExpViewtabexppanel
     */
    protected activiedTabViewPanel: string = 'tabviewpanel2';

    /**
     * 分页视图面板数据变更
     *
     * @memberof TestTabExpViewtabexppanel
     */
    public tabViewPanelDatasChange(){
        this.counterRefresh();
    }

    /**
     * vue 生命周期
     *
     * @returns
     * @memberof TestTabExpViewtabexppanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TestTabExpViewtabexppanel
     */    
    protected afterCreated(){
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
     * vue 生命周期
     *
     * @memberof TestTabExpViewtabexppanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestTabExpViewtabexppanel
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 分页面板选中
     *
     * @param {*} $event
     * @returns
     * @memberof TestTabExpViewtabexppanel
     */
    protected tabPanelClick($event: any) {
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
@import './test-tab-exp-viewtabexppanel-tabexppanel.less';
</style>