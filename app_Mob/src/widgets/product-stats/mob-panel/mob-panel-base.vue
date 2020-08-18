<template>
    <div class='view-container'>
    <ion-row class="app-layoutpanel">
        <ion-col v-show="detailsModel.container2.visible"  style="" class="app-layoutpanel-container">
            <ion-row style="height:100%;">
                <ion-col v-show="detailsModel.container1.visible"  :size="12" style="" class="app-layoutpanel-container">
                    <ion-row style="height:100%;">
                        
                        <ion-col v-show="detailsModel.id.visible"  :lg="2" :size="2" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  v-if="data.id" :context="context" :value="data.id" :itemParam="{}"  ></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                        
                        <ion-col v-show="detailsModel.code.visible"  :lg="3" :size="3" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  v-if="data.code" :context="context" :value="data.code" :itemParam="{}"  ></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                        
                        <ion-col v-show="detailsModel.type.visible"  :lg="3" :size="3" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  v-if="data.type" :context="context" :value="data.type" :itemParam="{}"   :isCache="false" codeListType="STATIC" tag="Product__type"></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                        
                        <ion-col v-show="detailsModel.status.visible"  :lg="4" :size="4" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  v-if="data.status" :context="context" :value="data.status" :itemParam="{}"  ></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                    </ion-row>
                </ion-col>
                <ion-col v-show="detailsModel.container3.visible"  :size="12" style="" class="app-layoutpanel-container">
                    <ion-row style="height:100%;">
                        !!!!模版产生代码错误:----
                        FTL stack trace ("~" means nesting-related):
                        	- Failed at: ${P.getEditorCode(item, "PANELEDITOR...  [in template "TEMPLCODE_en_US" at line 4, column 5]
                        ----
                        无法获取指定编辑器[MOBSPAN]发布代码[PANELFIELD][PANELEDITOR.vue]模板
                    </ion-row>
                </ion-col>
                <ion-col v-show="detailsModel.container4.visible"  :size="12" style="" class="app-layoutpanel-container">
                    <ion-row style="height:100%;">
                        
                        <ion-col v-show="detailsModel.counter1.visible"  :lg="3" :size="3" :sm="3" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  v-if="data.counter1" :context="context" :value="data.counter1" :itemParam="{}"  ></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                        
                        <ion-col v-show="detailsModel.counter2.visible"  :lg="3" :size="3" :sm="3" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  v-if="data.counter2" :context="context" :value="data.counter2" :itemParam="{}"  ></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                        
                        <ion-col v-show="detailsModel.counter3.visible"  :lg="3" :size="3" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  v-if="data.counter3" :context="context" :value="data.counter3" :itemParam="{}"  ></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                        
                        <ion-col v-show="detailsModel.counter4.visible"  :lg="3" :size="3" :sm="3" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  v-if="data.counter4" :context="context" :value="data.counter4" :itemParam="{}"  ></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                    </ion-row>
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
import ProductStatsService from '@/app-core/service/product-stats/product-stats-service';
import MobService from '@/app-core/ctrl-service/product-stats/mob-panel-service';

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
     * 建构部件服务对象
     *
     * @type {MobService}
     * @memberof Mob
     */
    protected service: MobService = new MobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof Mob
     */
    protected appEntityService: ProductStatsService = new ProductStatsService();
    

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
                













    }

   /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Mob
     */
    protected detailsModel: any = {
        id: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'id', panel: this, visible: true  })
, 
        code: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'code', panel: this, visible: true  })
, 
        type: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'type', panel: this, visible: true  })
, 
        status: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'status', panel: this, visible: true  })
, 
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container1', panel: this, visible: true  })
, 
        name: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'name', panel: this, visible: true  })
, 
        container3: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container3', panel: this, visible: true  })
, 
        counter1: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'counter1', panel: this, visible: true  })
, 
        counter2: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'counter2', panel: this, visible: true  })
, 
        counter3: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'counter3', panel: this, visible: true  })
, 
        counter4: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'counter4', panel: this, visible: true  })
, 
        container4: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container4', panel: this, visible: true  })
, 
        container2: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container2', panel: this, visible: true  })
, 
    };

}
</script>

<style lang='less'>
@import './mob-panel.less';
</style>

