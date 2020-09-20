<template>
    <div class='view-container'>
    <ion-row class="app-layoutpanel">
        <div class="app-layoutpanel-container container-margin-top-7px" style="">
            <div style="height:100%;display: flex;">
                <div class="app-layoutpanel-container container-lefttop-margin" style="width: 230px;">
                    <div style="height:100%;display: flex;justify-content: flex-start;align-items: flex-start;margin:0px 0px 0px 0px">
                        
                        <div v-show="detailsModel.realname.visible" style="font-size:20px;font-weight:bold" class="app-layoutpanel-field  panelitem-20px">
                            <div class="item-field ">
                            
                            <app-mob-span  v-if="data.realname" :context="context" :value="data.realname" :itemParam="{}"  ></app-mob-span>
                        </div>
                        
                        
                        </div>
                    </div>
                </div>
                <div class="app-layoutpanel-container" style="flex-grow: 1;">
                    <div style="height:100%;display: flex;flex-direction: column;">
                        <div class="app-layoutpanel-container container-updown-margin" style="">
                            <div style="height:100%;display: flex;flex-direction: row;">
                                
                                <div style="" class="app-layoutpanel-rowitem">
                                    今天剩余工作总计
                                
                                
                                </div>
                            </div>
                        </div>
                        <div class="app-layoutpanel-container container-left-border" style="flex-grow: 1;">
                            <div style="height:100%;display: flex;justify-content: space-around;align-items: flex-start;">
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            我的任务
                                        
                                        
                                        </div>
                                        
                                        <div v-show="detailsModel.mytasks.visible" style="text-align:center" class="app-layoutpanel-field  text-center-marginupdown">
                                            <div class="item-field ">
                                            
                                            <app-mob-span  v-if="data.mytasks" :context="context" :value="data.mytasks" :itemParam="{}"  ></app-mob-span>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div v-show="detailsModel.myetasks.visible" style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-field  text-center-red">
                                            <div class="item-field ">
                                            
                                            <app-mob-span  v-if="data.myetasks" :context="context" :value="data.myetasks" :itemParam="{}"  ></app-mob-span>
                                        </div>
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            我的bug
                                        
                                        
                                        </div>
                                        
                                        <div v-show="detailsModel.mybugs.visible" style="text-align:center" class="app-layoutpanel-field  text-center-marginupdown">
                                            <div class="item-field ">
                                            
                                            <app-mob-span  v-if="data.mybugs" :context="context" :value="data.mybugs" :itemParam="{}"  ></app-mob-span>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div v-show="detailsModel.myebugs.visible" style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-field  text-center-red">
                                            <div class="item-field ">
                                            
                                            <app-mob-span  v-if="data.myebugs" :context="context" :value="data.myebugs" :itemParam="{}"  ></app-mob-span>
                                        </div>
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            我的需求
                                        
                                        
                                        </div>
                                        
                                        <div v-show="detailsModel.mystorys.visible" style="text-align:center" class="app-layoutpanel-field  text-center-marginupdown">
                                            <div class="item-field ">
                                            
                                            <app-mob-span  v-if="data.mystorys" :context="context" :value="data.mystorys" :itemParam="{}"  ></app-mob-span>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-rowitem text-center-red">
                                            ---
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            未关闭的项目
                                        
                                        
                                        </div>
                                        
                                        <div v-show="detailsModel.projects.visible" style="text-align:center" class="app-layoutpanel-field  text-center-marginupdown">
                                            <div class="item-field ">
                                            
                                            <app-mob-span  v-if="data.projects" :context="context" :value="data.projects" :itemParam="{}"  ></app-mob-span>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div v-show="detailsModel.eprojects.visible" style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-field  text-center-red">
                                            <div class="item-field ">
                                            
                                            <app-mob-span  v-if="data.eprojects" :context="context" :value="data.eprojects" :itemParam="{}"  ></app-mob-span>
                                        </div>
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            未关闭的产品
                                        
                                        
                                        </div>
                                        
                                        <div v-show="detailsModel.products.visible" style="text-align:center" class="app-layoutpanel-field  text-center-marginupdown">
                                            <div class="item-field ">
                                            
                                            <app-mob-span  v-if="data.products" :context="context" :value="data.products" :itemParam="{}"  ></app-mob-span>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-rowitem text-center-red">
                                            ---
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ion-row>
</div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzMyTerritoryService from '@/app-core/service/ibz-my-territory/ibz-my-territory-service';
import MyWork2Service from '@/app-core/ctrl-service/ibz-my-territory/my-work2-panel-service';

import IbzMyTerritoryUIService from '@/ui-service/ibz-my-territory/ibz-my-territory-ui-action';

import { PanelUserControlModel, PanelButtonModel, PanelControlModel, PanelFieldModel, PanelRawitemModel, PanelContainerModel } from '@/model/panel-detail';


@Component({
    components: {
    }
})
export default class MyWork2Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MyWork2
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MyWork2
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MyWork2
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MyWork2
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MyWork2
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MyWork2
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MyWork2
     */
    protected getControlType(): string {
        return 'PANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MyWork2
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MyWork2Base
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
     * @type {MyWork2Service}
     * @memberof MyWork2
     */
    protected service: MyWork2Service = new MyWork2Service({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MyWork2
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof MyWork2Base
     */  
    public deUIService:IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MyWork2
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }


   /**
     * 生命周期
     *
     *  @memberof MyWork2
     */  
    created(){
        this.afterCreated();
    }
   /**
     * 执行created后的逻辑
     *
     *  @memberof MyWork2
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
     *  @memberof MyWork2
     */  
    public data :any ={} ;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof MyWork2
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
     * @memberof MyWork2
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
     * @memberof MyWork2
     */
    @Prop() protected item?: any;


    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof MyWork2
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
     * @memberof MyWork2
     */
    private panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                



























    }

   /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MyWork2
     */
    protected detailsModel: any = {
        realname: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'realname', panel: this, visible: true  })
, 
        container2: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container2', panel: this, visible: true  })
, 
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem1', panel: this, visible: true  })
, 
        container9: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container9', panel: this, visible: true  })
, 
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem2', panel: this, visible: true  })
, 
        mytasks: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'mytasks', panel: this, visible: true  })
, 
        myetasks: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'myetasks', panel: this, visible: true  })
, 
        container4: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container4', panel: this, visible: true  })
, 
        rawitem3: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem3', panel: this, visible: true  })
, 
        mybugs: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'mybugs', panel: this, visible: true  })
, 
        myebugs: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'myebugs', panel: this, visible: true  })
, 
        container5: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container5', panel: this, visible: true  })
, 
        rawitem4: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem4', panel: this, visible: true  })
, 
        mystorys: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'mystorys', panel: this, visible: true  })
, 
        rawitem7: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem7', panel: this, visible: true  })
, 
        container6: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container6', panel: this, visible: true  })
, 
        rawitem5: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem5', panel: this, visible: true  })
, 
        projects: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'projects', panel: this, visible: true  })
, 
        eprojects: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'eprojects', panel: this, visible: true  })
, 
        container7: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container7', panel: this, visible: true  })
, 
        rawitem6: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem6', panel: this, visible: true  })
, 
        products: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'products', panel: this, visible: true  })
, 
        rawitem8: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem8', panel: this, visible: true  })
, 
        container8: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container8', panel: this, visible: true  })
, 
        container10: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container10', panel: this, visible: true  })
, 
        container3: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container3', panel: this, visible: true  })
, 
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container1', panel: this, visible: true  })
, 
    };

}
</script>

<style lang='less'>
@import './my-work2-panel.less';
</style>

