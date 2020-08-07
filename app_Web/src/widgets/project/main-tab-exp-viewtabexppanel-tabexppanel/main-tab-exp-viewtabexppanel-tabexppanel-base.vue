
<template>
  <div class='tabviewpanel' style="height:100%;">
        <tabs :animated="false" class='tabexppanel' name='tabexppanel' @on-click="tabPanelClick">
        <tab-pane :index="0" name='tabviewpanel' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '概况'),
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
        <tab-pane :index="1" name='tabviewpanel2' tab='tabexppanel' class=''  
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
        <tab-pane :index="2" name='tabviewpanel6' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '看板'),
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
        <tab-pane :index="3" name='tabviewpanel11' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '燃尽图'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel11 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel11"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel11"  
    ref='tabviewpanel11' 
    @closeview="closeView($event)">
</view_tabviewpanel11>
        </tab-pane>
        <tab-pane :index="4" name='tabviewpanel5' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '透视表'),
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
        <tab-pane :index="5" name='tabviewpanel4' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '甘特图'),
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
        <tab-pane :index="6" name='tabviewpanel7' tab='tabexppanel' class=''  
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
        <tab-pane :index="7" name='tabviewpanel8' tab='tabexppanel' class=''  
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
            <view_tabviewpanel8 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel8"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel8"  
    ref='tabviewpanel8' 
    @closeview="closeView($event)">
</view_tabviewpanel8>
        </tab-pane>
        <tab-pane :index="8" name='tabviewpanel9' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '版本'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel9 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel9"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel9"  
    ref='tabviewpanel9' 
    @closeview="closeView($event)">
</view_tabviewpanel9>
        </tab-pane>
        <tab-pane :index="9" name='tabviewpanel3' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '动态'),
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
        <tab-pane :index="10" name='tabviewpanel10' tab='tabexppanel' class=''  
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
            <view_tabviewpanel10 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel10"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel10"  
    ref='tabviewpanel10' 
    @closeview="closeView($event)">
</view_tabviewpanel10>
        </tab-pane>
        <tab-pane :index="11" name='tabviewpanel12' tab='tabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '团队'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel12 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
v-if="isInit.tabviewpanel12"
@viewpanelDatasChange = "tabViewPanelDatasChange"
    name="tabviewpanel12"  
    ref='tabviewpanel12' 
    @closeview="closeView($event)">
</view_tabviewpanel12>
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
import ProjectService from '@/service/project/project-service';
import MainTabExpViewtabexppanelService from './main-tab-exp-viewtabexppanel-tabexppanel-service';



@Component({
    components: {
      
    }
})
export default class MainTabExpViewtabexppanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainTabExpViewtabexppanel
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainTabExpViewtabexppanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainTabExpViewtabexppanel
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainTabExpViewtabexppanel
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MainTabExpViewtabexppanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainTabExpViewtabexppanel
     */
    protected getControlType(): string {
        return 'TABEXPPANEL'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainTabExpViewtabexppanel
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabexppanelService}
     * @memberof MainTabExpViewtabexppanel
     */
    protected service: MainTabExpViewtabexppanelService = new MainTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof MainTabExpViewtabexppanel
     */
    protected appEntityService: ProjectService = new ProjectService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainTabExpViewtabexppanel
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainTabExpViewtabexppanel
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
     * @memberof MainTabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel6:  false ,
        tabviewpanel11:  false ,
        tabviewpanel5:  false ,
        tabviewpanel4:  false ,
        tabviewpanel7:  false ,
        tabviewpanel8:  false ,
        tabviewpanel9:  false ,
        tabviewpanel3:  false ,
        tabviewpanel10:  false ,
        tabviewpanel12:  false ,
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainTabExpViewtabexppanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainTabExpViewtabexppanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 行为参数
     *
     * @protected
     * @type {*}
     * @memberof MainTabExpViewtabexppanel
     */
    protected action:any = '';

    /**
     * 被激活的分页面板
     *
     * @type {string}
     * @memberof MainTabExpViewtabexppanel
     */
    protected activiedTabViewPanel: string = 'tabviewpanel';

    /**
     * 分页视图面板数据变更
     *
     * @memberof MainTabExpViewtabexppanel
     */
    public tabViewPanelDatasChange(){
        this.counterRefresh();
    }

    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MainTabExpViewtabexppanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainTabExpViewtabexppanel
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
     * @memberof MainTabExpViewtabexppanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainTabExpViewtabexppanel
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
     * @memberof MainTabExpViewtabexppanel
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
@import './main-tab-exp-viewtabexppanel-tabexppanel.less';
</style>