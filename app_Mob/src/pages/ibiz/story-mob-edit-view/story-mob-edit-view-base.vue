<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobeditview': true, 'story-mob-edit-view': true }">
    
    <app-mob-header>
        <ion-toolbar v-show="titleStatus" class="ionoc-view-header">
            <ion-buttons slot="start">
                <app-mob-button 
                    v-show="isShowBackButton" 
                    iconName="chevron-back" 
                    :text="$t('app.button.back')" 
                    @click="closeView" />
            </ion-buttons>
            <app-mob-title class="view-title"><label class="title-label"><app-mob-icon v-if="model.icon" :name="model.icon"></app-mob-icon> <img v-else-if="model.iconcls" :src="model.iconcls" alt=""> {{$t(model.srfCaption)}}</label></app-mob-title>
        </ion-toolbar>

    
    </app-mob-header>

    <ion-content >
                <view_form
            :viewState="viewState"
            viewName="MobEditView"
            :viewparams="viewparams" 
            :context="context" 
            :autosave="false" 
            :viewtag="viewtag"
            :showBusyIndicator="true"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction="GetDraft"
            loadAction="Get"
            createAction="Create"
            WFSubmitAction=""
            WFStartAction=""
            style='' 
            name="form"  
            ref='form' 
            @save="form_save($event)"  
            @beforeload="form_beforeload($event)"  
            @remove="form_remove($event)"  
            @beforesave="form_beforesave($event)"  
            @load="form_load($event)"  
            @closeview="closeView($event)">
        </view_form>
    </ion-content>
    <ion-footer class="view-footer">
                <div :id="viewtag+'_bottom_button'"  class = "fab_container" :style="button_style">
            <app-mob-button  
                v-if="getToolBarLimit" 
                iconName="chevron-up-circle-outline" 
                class="app-view-toolbar-button" 
                @click="popUpGroup(true)" />
            <van-popup v-if="getToolBarLimit" class="popup" v-model="showGrop" round position="bottom">
                <div class="container">
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_changestorydetailmob.disabled}" v-show="righttoolbarModels.deuiaction1_changestorydetailmob.visabled">
                <app-mob-button 
                    :disabled="righttoolbarModels.deuiaction1_changestorydetailmob.disabled" 
                    size="large"  
                    iconName="swap-vertical-outline" 
                    @click="righttoolbar_click({ tag: 'deuiaction1_changestorydetailmob' }, $event),popUpGroup()" />
                <span class="btn-out-text">{{$t('story.mobeditviewrighttoolbar_toolbar.deuiaction1_changestorydetailmob.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_assigntomob.disabled}" v-show="righttoolbarModels.deuiaction1_assigntomob.visabled">
                <app-mob-button 
                    :disabled="righttoolbarModels.deuiaction1_assigntomob.disabled" 
                    size="large"  
                    iconName="hand-o-right" 
                    @click="righttoolbar_click({ tag: 'deuiaction1_assigntomob' }, $event),popUpGroup()" />
                <span class="btn-out-text">{{$t('story.mobeditviewrighttoolbar_toolbar.deuiaction1_assigntomob.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_reviewstorymob.disabled}" v-show="righttoolbarModels.deuiaction1_reviewstorymob.visabled">
                <app-mob-button 
                    :disabled="righttoolbarModels.deuiaction1_reviewstorymob.disabled" 
                    size="large"  
                    iconName="search" 
                    @click="righttoolbar_click({ tag: 'deuiaction1_reviewstorymob' }, $event),popUpGroup()" />
                <span class="btn-out-text">{{$t('story.mobeditviewrighttoolbar_toolbar.deuiaction1_reviewstorymob.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_closestorymob.disabled}" v-show="righttoolbarModels.deuiaction1_closestorymob.visabled">
                <app-mob-button 
                    :disabled="righttoolbarModels.deuiaction1_closestorymob.disabled" 
                    size="large"  
                    iconName="close" 
                    @click="righttoolbar_click({ tag: 'deuiaction1_closestorymob' }, $event),popUpGroup()" />
                <span class="btn-out-text">{{$t('story.mobeditviewrighttoolbar_toolbar.deuiaction1_closestorymob.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_openbaseinfoeditviewmob.disabled}" v-show="righttoolbarModels.deuiaction1_openbaseinfoeditviewmob.visabled">
                <app-mob-button 
                    :disabled="righttoolbarModels.deuiaction1_openbaseinfoeditviewmob.disabled" 
                    size="large"  
                    iconName="edit" 
                    @click="righttoolbar_click({ tag: 'deuiaction1_openbaseinfoeditviewmob' }, $event),popUpGroup()" />
                <span class="btn-out-text">{{$t('story.mobeditviewrighttoolbar_toolbar.deuiaction1_openbaseinfoeditviewmob.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_deletemob.disabled}" v-show="righttoolbarModels.deuiaction1_deletemob.visabled">
                <app-mob-button 
                    :disabled="righttoolbarModels.deuiaction1_deletemob.disabled" 
                    size="large"  
                    iconName="remove" 
                    @click="righttoolbar_click({ tag: 'deuiaction1_deletemob' }, $event),popUpGroup()" />
                <span class="btn-out-text">{{$t('story.mobeditviewrighttoolbar_toolbar.deuiaction1_deletemob.caption')}}</span>
            </div>
        
                </div>
            </van-popup>
        </div>
    </ion-footer>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import StoryService from '@/app-core/service/story/story-service';

import MobEditViewEngine from '@engine/view/mob-edit-view-engine';
import StoryUIService from '@/ui-service/story/story-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class StoryMobEditViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof StoryMobEditViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryMobEditViewBase
     */
    protected appEntityService: StoryService = new StoryService();

    /**
     * 实体UI服务对象
     *
     * @type StoryUIService
     * @memberof StoryMobEditViewBase
     */
    public appUIService: StoryUIService = new StoryUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof StoryMobEditViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof StoryMobEditViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof StoryMobEditViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof StoryMobEditViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof StoryMobEditViewBase
	 */
	protected viewtag: string = '17ecaa84ccf3508e04ed6c38861fc23b';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof StoryMobEditViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof StoryMobEditViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof StoryMobEditViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof StoryMobEditViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof StoryMobEditViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof StoryMobEditViewBase
     */
    protected navContext: any = { 'objecttype': 'story', 'srfparentkey': '%story%' };

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof StoryMobEditViewBase
     */
    protected navParam: any = { 'srfparentkey': '%story%', 'objecttype': 'story' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof StoryMobEditViewBase
     */
    protected model: any = {
        srfTitle: '需求移动端编辑视图',
        srfCaption: 'story.views.mobeditview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'story.mobeditview',
        iconcls: '',
        icon: 'star-o'
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  StoryMobEditViewBase
     */
    @Watch('_context')
    on_context(newVal: string, oldVal: string) {
        const _this: any = this;
        this.parseViewParam();
        if (!Object.is(newVal, oldVal) && _this.engine) {
            this.$nextTick(()=>{_this.engine.load();})
        }
        
    }

    /**
     * 视图参数变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @returns
     * @memberof IBizChart
     */
    @Watch('_viewparams',{immediate: true, deep: true})
    on_viewparams(newVal: string, oldVal: string) {
        this.parseViewParam();
        
    }

    /**
     * 设置工具栏状态
     *
     * @memberof StoryMobEditViewBase
     */
    public setViewTitleStatus(){
        const thirdPartyName = this.$store.getters.getThirdPartyName();
        if(thirdPartyName){
            this.titleStatus = false;
        }
    }

    /**
     * 容器模型
     *
     * @type {*}
     * @memberof StoryMobEditViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
        view_righttoolbar: { name: 'righttoolbar', type: 'TOOLBAR' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof StoryMobEditViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof StoryMobEditViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;



   /**
    * 工具栏 StoryMobEditView 模型
    *
    * @type {*}
    * @memberof StoryMobEditView
    */
    public righttoolbarModels: any = {
            deuiaction1_changestorydetailmob: { name: 'deuiaction1_changestorydetailmob', caption: '变更', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__STORY_CHANGED_BUT', uiaction: { tag: 'ChangeStoryDetailMob', target: 'SINGLEKEY' } },

            deuiaction1_assigntomob: { name: 'deuiaction1_assigntomob', caption: '指派', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__STORY_ASS_BUT', uiaction: { tag: 'AssignToMob', target: 'SINGLEKEY' } },

            deuiaction1_reviewstorymob: { name: 'deuiaction1_reviewstorymob', caption: '评审', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__STORY_REVIEW_BUT', uiaction: { tag: 'ReviewStoryMob', target: 'SINGLEKEY' } },

            deuiaction1_closestorymob: { name: 'deuiaction1_closestorymob', caption: '关闭', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__STORY_CLOSED_BUT', uiaction: { tag: 'CloseStoryMob', target: 'SINGLEKEY' } },

            deuiaction1_openbaseinfoeditviewmob: { name: 'deuiaction1_openbaseinfoeditviewmob', caption: '编辑', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__STORY_EDIT_BUT', uiaction: { tag: 'OpenBaseInfoEditViewMob', target: 'SINGLEKEY' } },

            deuiaction1_deletemob: { name: 'deuiaction1_deletemob', caption: '删除', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__STORY_DELETE_BUT', uiaction: { tag: 'deleteMob', target: 'SINGLEKEY' } },

    };

    /**
     * 工具栏显示状态
     *
     * @type {boolean}
     * @memberof StoryMobEditView 
     */
    public righttoolbarShowState: boolean = false;

    /**
     * 工具栏权限
     *
     * @type {boolean}
     * @memberof StoryMobEditView 
     */
    get getToolBarLimit() {
        let toolBarVisable:boolean = false;
        if(this.righttoolbarModels){
            Object.keys(this.righttoolbarModels).forEach((tbitem:any)=>{
                if(this.righttoolbarModels[tbitem].type !== 'ITEMS' && this.righttoolbarModels[tbitem].visabled === true){
                    toolBarVisable = true;
                    return;
                }
            })
        }
        return toolBarVisable;
    }

    /**
     * 工具栏分组是否显示的条件
     *
     * @type {boolean}
     * @memberof StoryMobEditView 
     */
    public showGrop = false;

    /**
     * 工具栏分组是否显示的方法
     *
     * @type {boolean}
     * @memberof StoryMobEditView 
     */
    public popUpGroup (falg:boolean = false) {
        this.showGrop = falg;
    }

    


    /**
     * 工具栏模型集合名
     *
     * @memberof StoryMobEditViewBase
     */
    public toolbarModelList:any = ['righttoolbarModels',]

    /**
     * 解析视图参数
     *
     * @memberof StoryMobEditViewBase
     */
    protected parseViewParam(): void {
        const { context, param } = this.$viewTool.formatNavigateViewParam(this, true);
        this.context = { ...context };
        this.viewparams = { ...param }
    }

    /**
     * 是否显示返回按钮
     *
     * @readonly
     * @type {boolean}
     * @memberof StoryMobEditViewBase
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (this.viewDefaultUsage === "indexView") {
            return false;
        }
        return true;
    }

    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof StoryMobEditViewBase
     */
    protected engine: MobEditViewEngine = new MobEditViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof StoryMobEditViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof StoryMobEditViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof StoryMobEditViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();
        if(this.$route && this.$route.query && this.$route.query.bsinfo){
            const bainfo:any = JSON.parse(this.$route.query.bsinfo as string);
            Object.assign(this.viewparams,bainfo);
        }


    }


    /**
     * 销毁之前
     *
     * @memberof StoryMobEditViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof StoryMobEditViewBase
     */
    public activated() {
        this.popUpGroup();
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof StoryMobEditViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 底部按钮样式
     * 
     * @memberof StoryMobEditViewBase
     */
    public button_style = "";

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof StoryMobEditViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        this.thirdPartyInit();

        // 拖动样式
        AnimationService.draggable(document.getElementById(this.viewtag+'_bottom_button'),(style:any)=>{this.button_style = style});
    }

    /**
     * 第三方容器初始化
     * 
     * @memberof StoryMobEditViewBase
     */
    protected  thirdPartyInit(){
        if(!this.isChildView){
            this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);
            this.$viewTool.setThirdPartyEvent(this.closeView);
        }
    }

    /**
     * 销毁视图回调
     *
     * @memberof StoryMobEditViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof StoryMobEditViewBase
     */
    protected afterDestroyed(){
        if (this.viewDefaultUsage !== "indexView" && Object.keys(localStorage).length > 0) {
            Object.keys(localStorage).forEach((item: string) => {
                if (item.startsWith(this.context.srfsessionid)) {
                    localStorage.removeItem(item);
                }
            });
        }

    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMobEditViewBase
     */
    protected form_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMobEditViewBase
     */
    protected form_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforeload', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMobEditViewBase
     */
    protected form_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 beforesave 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMobEditViewBase
     */
    protected form_beforesave($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforesave', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMobEditViewBase
     */
    protected form_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'load', $event);
    }

    /**
     * righttoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMobEditViewBase
     */
    protected righttoolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1_changestorydetailmob')) {
            this.righttoolbar_deuiaction1_changestorydetailmob_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_assigntomob')) {
            this.righttoolbar_deuiaction1_assigntomob_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_reviewstorymob')) {
            this.righttoolbar_deuiaction1_reviewstorymob_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_closestorymob')) {
            this.righttoolbar_deuiaction1_closestorymob_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_openbaseinfoeditviewmob')) {
            this.righttoolbar_deuiaction1_openbaseinfoeditviewmob_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_deletemob')) {
            this.righttoolbar_deuiaction1_deletemob_click($event, '', $event2);
        }
    }


    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof StoryMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_changestorydetailmob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('story_ui_action');
        if (curUIService) {
            curUIService.Story_ChangeStoryDetailMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof StoryMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_assigntomob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('story_ui_action');
        if (curUIService) {
            curUIService.Story_AssignToMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof StoryMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_reviewstorymob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('story_ui_action');
        if (curUIService) {
            curUIService.Story_ReviewStoryMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof StoryMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_closestorymob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('story_ui_action');
        if (curUIService) {
            curUIService.Story_CloseStoryMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof StoryMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_openbaseinfoeditviewmob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('story_ui_action');
        if (curUIService) {
            curUIService.Story_OpenBaseInfoEditViewMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof StoryMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_deletemob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('story_ui_action');
        if (curUIService) {
            curUIService.Story_deleteMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof StoryMobEditViewBase
     */
    public quitFun() {
        if (!sessionStorage.getItem("firstQuit")) {  // 首次返回时
            // 缓存首次返回的时间
            window.sessionStorage.setItem("firstQuit", new Date().getTime().toString());
            // 提示再按一次退出
            this.$toast("再按一次退出");
            // 两秒后清除缓存（与提示的持续时间一致）
            setTimeout(() => {window.sessionStorage.removeItem("firstQuit")}, 2000);
        } else {
            // 获取首次返回时间
            let firstQuitTime: any = sessionStorage.getItem("firstQuit");
            // 如果时间差小于两秒 直接关闭
            if (new Date().getTime() - firstQuitTime < 2000) {
                this.$viewTool.ThirdPartyClose();
            }
        }
    }
    
    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof StoryMobEditViewBase
     */
    protected async closeView(args: any[]): Promise<any> {
        if(this.$store.state.searchformStatus){
             this.$store.commit('setSearchformStatus',false);
             return
        }
                let result = await this.cheackChange();
        if(result){
            if (this.viewDefaultUsage === "routerView") {
                if(window.history.length == 1 && this.$viewTool.getThirdPartyName()){
                    this.quitFun();
                }else{
                    this.$store.commit("deletePage", this.$route.fullPath);
                    this.$router.go(-1);
                }
            } 
            if (this.viewDefaultUsage === "actionView") {
                this.$emit("close", { status: "success", action: "close", data: args instanceof MouseEvent ? null : args });
            }
        }

        
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof StoryMobEditViewBase
     */
    get refreshdata(): number | null {
        return this.$store.getters['viewaction/getRefreshData'](this.viewtag);
    }

    /**
     * 监控数据变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @returns
     * @memberof StoryMobEditViewBase
     */
    @Watch('refreshdata')
    onRefreshData(newVal: any, oldVal: any) {
        if (newVal === null || newVal === undefined) {
            return;
        }
        if (newVal === 0) {
            return;
        }
        const _this: any = this;
        if (_this.onRefreshView && _this.onRefreshView instanceof Function) {
            _this.onRefreshView();
        }
    }

    /**
     * 初始化导航栏标题
     *
     * @param {*} val
     * @param {boolean} isCreate
     * @returns
     * @memberof StoryMobEditViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 保存
     *
     * @protected
     * @memberof StoryMobEditViewBase
     */
    protected defSave(): void {
        const _this: any = this;
        const xData: any = _this.$refs.form;
        if (xData && xData.save instanceof Function) {
            const _data = _this.viewparams;
            xData.save(_data).then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                _this.$emit('viewdataschange', [{ ...response.data }]);
            });
        } else if (_this.save && _this.save instanceof Function) {
            _this.save();
        }
    }

    /**
     * 检查表单是否修改
     *
     * @param {any[]} args
     * @memberof PimEducationMobEditViewBase
     */
    public async cheackChange(): Promise<any>{
        const view = this.$store.getters['viewaction/getAppView'](this.viewtag);
        if (view && view.viewdatachange) {
                const title: any = this.$t('app.tabpage.sureclosetip.title');
                const contant: any = this.$t('app.tabpage.sureclosetip.content');
                const result = await this.$notice.confirm(title, contant);
                if (result) {
                    this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
                    return true;
                } else {
                    return false;
                }
        }else{
            return true;
        }
    }
}
</script>

<style lang='less'>
@import './story-mob-edit-view.less';
</style>