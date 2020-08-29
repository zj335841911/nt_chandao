<template>
    <div class='view-container'>
    <ion-row class="app-layoutpanel">
        <ion-col v-show="detailsModel.container1.visible"  style="" class="app-layoutpanel-container mob_list_card">
            <ion-row style="height:100%;">
                
                <ion-col v-show="detailsModel.pri.visible"  :lg="1" :size="1" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <app-mob-span  v-if="data.pri" :context="context" :value="data.pri" :itemParam="{}"   :isCache="false" codeListType="STATIC" tag="Story__pri"></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.title.visible"  :lg="9" :size="9" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <app-mob-span  v-if="data.title" :context="context" :value="data.title" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                <ion-col v-show="detailsModel.button2.visible"  :lg="2" :size="2" style="" class="app-layoutpanel-button">
                    <ion-button  @click="button2_click($event)" >
                    <ion-icon name="star"></ion-icon>
                    取消收藏
                </ion-button>
                
                
                </ion-col>
                <ion-col v-show="detailsModel.button1.visible"  :lg="2" :size="2" style="" class="app-layoutpanel-button">
                    <ion-button  @click="button1_click($event)" >
                    <ion-icon name="star-outline"></ion-icon>
                    收藏
                </ion-button>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem1.visible"  :lg="1" :size="1" style="" class="app-layoutpanel-rowitem">
                    <i class="fa fa-hand-o-right"></i>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem3.visible"  :lg="1" :size="1" style="" class="app-layoutpanel-rowitem">
                    
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem2.visible"  :lg="1" :size="1" style="" class="app-layoutpanel-rowitem">
                    
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.assignedto.visible"  :lg="4" :size="4" :sm="4" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <app-mob-span  v-if="data.assignedto" :context="context" :value="data.assignedto" :itemParam="{}"   :isCache="false" codeListType="DYNAMIC" tag="UserRealName"></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.status.visible"  :lg="3" :size="3" :sm="4" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <app-mob-span  v-if="data.status" :context="context" :value="data.status" :itemParam="{}"   :isCache="false" codeListType="STATIC" tag="Story__status"></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.stage.visible"  :lg="3" :size="3" :sm="4" :offset="1" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <app-mob-span  v-if="data.stage" :context="context" :value="data.stage" :itemParam="{}"   :isCache="false" codeListType="STATIC" tag="Story__stage"></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.isfavorites.visible"  :size="12" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <span class="app-form-hidden" style="display: none;">{{data.isfavorites}}</span>
                </div>
                
                
                </ion-col>
            </ion-row>
        </ion-col>
    </ion-row>
</div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import StoryService from '@/app-core/service/story/story-service';
import MobService from '@/app-core/ctrl-service/story/mob-panel-service';

import StoryUIService from '@/ui-service/story/story-ui-action';

import { PanelUserControlModel, PanelButtonModel, PanelControlModel, PanelFieldModel, PanelRawitemModel, PanelContainerModel } from '@/model/panel-detail';


@Component({
    components: {
    }
})
export default class MobBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Mob
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Mob
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Mob
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Mob
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Mob
     */
    protected getControlType(): string {
        return 'PANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof Mob
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args)['data'];
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {MobService}
     * @memberof Mob
     */
    protected service: MobService = new MobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof Mob
     */
    protected appEntityService: StoryService = new StoryService();

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof MobBase
     */  
    public deUIService:StoryUIService = new StoryUIService(this.$store);
    

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof Mdctrl_itempanelBase
     */
    protected async mdctrl_itempanel_button2_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('story_ui_action');
        if (curUIService) {
            curUIService.Story_StoryNFavorites(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof Mdctrl_itempanelBase
     */
    protected async mdctrl_itempanel_button1_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('story_ui_action');
        if (curUIService) {
            curUIService.Story_StoryFavorites(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof Mob
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }


   /**
     * 生命周期
     *
     *  @memberof Mob
     */  
    created(){
        this.afterCreated();
    }
   /**
     * 执行created后的逻辑
     *
     *  @memberof Mob
     */  
    afterCreated(){
        if(this.item){
            this.data = this.item;
            this.panelLogic({ name: '', newVal: null, oldVal: null });
            return;
        }
       if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
            });
        } 
        this.panelLogic({ name: '', newVal: null, oldVal: null });
    }
   /**
     * 数据
     *
     *  @memberof Mob
     */  
    public data :any ={} ;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected fetchAction!: string;

   /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof Mob
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 接口实现
     *
     * @returns {any[]}
     * @memberof Mob
     */
    getDatas(): any[] {
        if (!this.item) {
            return [];
        }
        return [this.item];
    }
    getData() {
        return this.item;
    }

    /**
     * 面板数据对象
     *
     * @type {*}
     * @memberof Mob
     */
    @Prop() protected item?: any;

	/**
	 * 面板 取消收藏 事件
	 *
	 * @memberof @memberof Mob
	 */
    protected button2_click($event: any): void {
        this.mdctrl_itempanel_button2_click(null, null, $event);

    }
	/**
	 * 面板 收藏 事件
	 *
	 * @memberof @memberof Mob
	 */
    protected button1_click($event: any): void {
        this.mdctrl_itempanel_button1_click(null, null, $event);

    }

    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof Mob
     */
    private async load(data: any = {}, type: string = ""): Promise<any> {
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(data, parentdata);
        const response: any = await this.service.get(this.fetchAction, this.context, data, this.showBusyIndicator);
        if (!response || response.status !== 200) {
            this.$notify({ type: 'danger', message: response.info });
            return Promise.resolve(response);
        }
        this.$emit('load', (response.data && response.data.records) ? response.data.records : []);
        this.data = [];
        this.data = response.data.records;
        return Promise.resolve(response);
    }

    @Watch('item')
    public itemChange(){
         this.data = this.item;
    }


   /**
     * 表单逻辑
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Mob
     */
    private panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                


        if (Object.is(name, '') || Object.is(name, 'isfavorites')) {
            let ret = false;
            const _isfavorites = this.data.isfavorites;
            if (this.$verify.testCond(this.data.isfavorites, 'EQ', '1')) {
                ret = true;
            }
            this.detailsModel.button2.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'isfavorites')) {
            let ret = false;
            const _isfavorites = this.data.isfavorites;
            if (this.$verify.testCond(this.data.isfavorites, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button1.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'assignedto')) {
            let ret = false;
            const _assignedto = this.data.assignedto;
            if (this.$verify.testCond(this.data.assignedto, 'NOTEQ', 'closed') && this.$verify.testCond(this.data.assignedto, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.rawitem1.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'assignedto')) {
            let ret = false;
            const _assignedto = this.data.assignedto;
            if (this.$verify.testCond(this.data.assignedto, 'EQ', 'closed')) {
                ret = true;
            }
            this.detailsModel.rawitem3.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'assignedto')) {
            let ret = false;
            const _assignedto = this.data.assignedto;
            if (this.$verify.testCond(this.data.assignedto, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.rawitem2.setVisible(ret);
        }






    }

   /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Mob
     */
    protected detailsModel: any = {
        pri: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'pri', panel: this, visible: true  })
, 
        title: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'title', panel: this, visible: true  })
, 
        button2: new PanelButtonModel({ caption: '取消收藏', itemType: 'BUTTON', name: 'button2', panel: this, visible: true  })
, 
        button1: new PanelButtonModel({ caption: '收藏', itemType: 'BUTTON', name: 'button1', panel: this, visible: true  })
, 
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem1', panel: this, visible: true  })
, 
        rawitem3: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem3', panel: this, visible: true  })
, 
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem2', panel: this, visible: true  })
, 
        assignedto: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'assignedto', panel: this, visible: true  })
, 
        status: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'status', panel: this, visible: true  })
, 
        stage: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'stage', panel: this, visible: true  })
, 
        isfavorites: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'isfavorites', panel: this, visible: false  })
, 
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container1', panel: this, visible: true  })
, 
    };

}
</script>

<style lang='less'>
@import './mob-panel.less';
</style>

