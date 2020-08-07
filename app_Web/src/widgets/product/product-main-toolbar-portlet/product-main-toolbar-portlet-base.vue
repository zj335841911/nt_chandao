<template>
    <div class='porlet product-main-toolbar' :style="{}">
        <div class="portlet-widthout-title">
            <app-actionbar :items="actionBarModelData" @itemClick="handleItemClick"></app-actionbar>
        </div>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProductService from '@/service/product/product-service';
import ProductMainToolbarService from './product-main-toolbar-portlet-service';

import ProductUIService from '@/uiservice/product/product-ui-service';


@Component({
    components: {
      
    }
})
export default class ProductProductMainToolbarBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ProductMainToolbar
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ProductMainToolbar
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProductMainToolbar
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProductMainToolbar
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ProductMainToolbar
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ProductMainToolbar
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductMainToolbar
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {ProductMainToolbarService}
     * @memberof ProductMainToolbar
     */
    protected service: ProductMainToolbarService = new ProductMainToolbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductMainToolbar
     */
    protected appEntityService: ProductService = new ProductService({ $store: this.$store });
    

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet5_ua3abd8c_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_CloseProduct(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet5_u993e8bf_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_OpenQuickCfgView(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet5_u0828b1d_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_delete(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof ProductMainToolbar
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof ProductMainToolbar
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
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof ProductMainToolbar
     */
    protected actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet5_ua3abd8c_click",
        actionName:"关闭产品",
        },
        { viewlogicname:"dashboard_sysportlet5_u993e8bf_click",
        actionName:"产品主数据编辑",
        },
        { viewlogicname:"dashboard_sysportlet5_u0828b1d_click",
        actionName:"删除",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof ProductMainToolbar
     */
    protected handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet5_ua3abd8c_click')){
            this.dashboard_sysportlet5_ua3abd8c_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u993e8bf_click')){
            this.dashboard_sysportlet5_u993e8bf_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u0828b1d_click')){
            this.dashboard_sysportlet5_u0828b1d_click(null);
        }
    }

    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ProductMainToolbar
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProductMainToolbar
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProductMainToolbar
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductMainToolbar
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProductMainToolbar
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductMainToolbar
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProductMainToolbar
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './product-main-toolbar-portlet.less';
</style>