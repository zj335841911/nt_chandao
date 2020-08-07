
<template>
  <div class='tabviewpanel' style="height:100%;">
        <tabs :animated="false" class='tabexppanel' name='tabexppanel' @on-click="tabPanelClick">
        <tab-pane :index="0" name='tabviewpanel' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '首页'),
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
        <tab-pane :index="1" name='tabviewpanel3' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '日程'),
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
                    h('span', '任务'),
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
                    h('span', 'BUG'),
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
                    h('span', '测试'),
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
        <tab-pane :index="5" name='tabviewpanel2' tab='tabexppanel' class=''  
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
        <tab-pane :index="6" name='tabviewpanel7' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '项目'),
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
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import TabExpViewtabexppanelService from './tab-exp-viewtabexppanel-tabexppanel-service';



@Component({
    components: {
      
    }
})
export default class TabExpViewtabexppanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TabExpViewtabexppanel
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TabExpViewtabexppanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TabExpViewtabexppanel
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TabExpViewtabexppanel
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof TabExpViewtabexppanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TabExpViewtabexppanel
     */
    protected getControlType(): string {
        return 'TABEXPPANEL'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TabExpViewtabexppanel
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {TabExpViewtabexppanelService}
     * @memberof TabExpViewtabexppanel
     */
    protected service: TabExpViewtabexppanelService = new TabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof TabExpViewtabexppanel
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof TabExpViewtabexppanel
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TabExpViewtabexppanel
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
     * @memberof TabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
        tabviewpanel5:  false ,
        tabviewpanel6:  false ,
        tabviewpanel2:  false ,
        tabviewpanel7:  false ,
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TabExpViewtabexppanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TabExpViewtabexppanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 行为参数
     *
     * @protected
     * @type {*}
     * @memberof TabExpViewtabexppanel
     */
    protected action:any = '';

    /**
     * 被激活的分页面板
     *
     * @type {string}
     * @memberof TabExpViewtabexppanel
     */
    protected activiedTabViewPanel: string = 'tabviewpanel';

    /**
     * 分页视图面板数据变更
     *
     * @memberof TabExpViewtabexppanel
     */
    public tabViewPanelDatasChange(){
        this.counterRefresh();
    }

    /**
     * vue 生命周期
     *
     * @returns
     * @memberof TabExpViewtabexppanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TabExpViewtabexppanel
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
     * @memberof TabExpViewtabexppanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TabExpViewtabexppanel
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
     * @memberof TabExpViewtabexppanel
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
@import './tab-exp-viewtabexppanel-tabexppanel.less';
</style>