<template>
    <span>
        <span v-show="activiedTabViewPanel == 'tabviewpanel2'">
                        <view_tabviewpanel2
                :viewState="viewState"
                viewName="ProdMobTabExpView"
                :viewparams="viewparams" 
                :context="context" 
                name="tabviewpanel2"  
                ref='tabviewpanel2' 
                @closeview="closeView($event)">
            </view_tabviewpanel2>
        </span>
        <span v-show="activiedTabViewPanel == 'tabviewpanel3'">
                        <view_tabviewpanel3
                :viewState="viewState"
                viewName="ProdMobTabExpView"
                :viewparams="viewparams" 
                :context="context" 
                name="tabviewpanel3"  
                ref='tabviewpanel3' 
                @closeview="closeView($event)">
            </view_tabviewpanel3>
        </span>
        <span v-show="activiedTabViewPanel == 'tabviewpanel4'">
                        <view_tabviewpanel4
                :viewState="viewState"
                viewName="ProdMobTabExpView"
                :viewparams="viewparams" 
                :context="context" 
                name="tabviewpanel4"  
                ref='tabviewpanel4' 
                @closeview="closeView($event)">
            </view_tabviewpanel4>
        </span>
        <span v-show="activiedTabViewPanel == 'tabviewpanel6'">
                        <view_tabviewpanel6
                :viewState="viewState"
                viewName="ProdMobTabExpView"
                :viewparams="viewparams" 
                :context="context" 
                name="tabviewpanel6"  
                ref='tabviewpanel6' 
                @closeview="closeView($event)">
            </view_tabviewpanel6>
        </span>
    </span>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ProductEntityService from '@/app-core/service/product/product-service';
import ProdMobTabExpViewtabexppanelService from '@/app-core/ctrl-service/product/prod-mob-tab-exp-viewtabexppanel-tabexppanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import ProductUIService from '@/ui-service/product/product-ui-action';

import  ProductMobCounterCounterService  from '@/app-core/counter/product-mob-counter/product-mob-counter-counter';


@Component({
    components: { }
})
export default class ProdMobTabExpViewtabexppanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected getControlType(): string {
        return 'TABEXPPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  ProdMobTabExpViewtabexppanelBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args);
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {ProdMobTabExpViewtabexppanelService}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected service: ProdMobTabExpViewtabexppanelService = new ProdMobTabExpViewtabexppanelService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected appEntityService: ProductEntityService = new ProductEntityService();

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof ProdMobTabExpViewtabexppanelBase
     */  
    public deUIService:ProductUIService = new ProductUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    
    
    /**
     * ProductMobCounterCounterService计数器服务对象
     *
     * @type {ProductMobCounterCounterService}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected ProductMobCountercounterservice: ProductMobCounterCounterService = new ProductMobCounterCounterService({$store: this.$store,context:this.context,viewparams:this.viewparams});

    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProdMobTabExpViewtabexppanel
     */    
    protected counterServiceArray:Array<any> = [this.ProductMobCountercounterservice];

    /**
     * 加载计数器数据
     *
     * @param {any[]} args
     * @memberof ProdMobTabExpViewtabexppanel
     */
    public async loadCounterData() {
       this.$emit("counterInit",this.counterServiceArray[0]);
    }

    /**
     * 销毁计数器服务
     *
     * @memberof ProductProdMobTabExpView
     */   
    public counterserviceDestroy(){
        this.counterServiceArray.forEach((item:any)=>{
            item.destroyCounter();
        });
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 行为参数
     *
     * @protected
     * @type {*}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected action:any = '';

    /**
     * 被激活的分页面板
     *
     * @type {string}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    @Prop({ default: 'tabviewpanel2' }) protected activiedTabViewPanel?: string;     

    /**
     * 是否开启点击重新渲染
     *
     * @type {string}
     * @memberof ProdMobTabExpViewtabexppanel
     */
    @Prop({ default: true }) public isEnableReRender?:boolean;    

    /**
     * vue 生命周期
     *
     * @returns
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProdMobTabExpViewtabexppanel
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.action = action;
                if (data.activeItem) {
                    this.tabPanelClick(data.activeItem);
                } else {
                    this.$nextTick(() => {
                     let panel:any = this.activiedTabViewPanel
                     if(panel){
                     this.viewState.next({ tag: panel, action: this.action, data: {}});
                    }
                    });
                }
            });
        }
    }    

    /**
     * vue 生命周期
     *
     * @returns
     * @memberof ProdMobTabExpViewtabexppanel
     */
    public mounted() {
        this.afterMounted();
    }
    
    /**
     * 执行mounted后的逻辑
     *
     * @memberof ProdMobTabExpViewtabexppanel
     */
    public afterMounted(){
        this.loadCounterData();
    }

    /**
     * vue 生命周期
     *
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected afterDestroy() {
        this.counterserviceDestroy();
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 分页面板选中
     *
     * @param {*} $event
     * @returns
     * @memberof ProdMobTabExpViewtabexppanel
     */
    protected tabPanelClick($event: any) {
        if (!$event) {
            return;
        }
        if (!this.viewState) {
            return;
        }
        this.$emit("changepanel",$event);
        this.$nextTick(() => {
            let panel:any = this.activiedTabViewPanel
            if(panel){
              this.viewState.next({ tag: panel, action: this.action, data: {}});
            }
            if (this.isEnableReRender) {         
              if (panel) {
                let panelarr:any = Object.keys(this.$refs);
                panelarr.splice(panelarr.findIndex((item:any) => item === panel), 1);
                panelarr.forEach((item:any,index:number)=>{
                  let tabviewpanel:any = this.$refs[item];
                  if (tabviewpanel.isActivied) {
                    tabviewpanel.isActivied = false;
                  }
                })
              }
            }
        });
    }



}
</script>

<style lang='less'>
@import './prod-mob-tab-exp-viewtabexppanel-tabexppanel.less';
</style>