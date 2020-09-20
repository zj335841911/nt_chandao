<template>
    <ion-row>
        <ion-list class='app-mob-portlet product-dashboard_sysportlet8 '>
            <ion-list-header class='app-mob-portlet__header'><ion-input v-if="isEditTitle" value="产品总览"></ion-input>产品总览 <div class="portlet__header_right"><ion-icon v-if="!isEditTitle" name="ellipsis-horizontal-outline" @click="open"></ion-icon></div></ion-list-header>
            <div class="edit_title_btn" v-if="isEditTitle"><ion-button>确认</ion-button><ion-button>取消</ion-button></div>
                <product-mob-chart-view :_context="JSON.stringify(context)" :isChildView="true" :_viewparams="JSON.stringify(viewparams)" viewDefaultUsage="includedView" ></product-mob-chart-view>
        </ion-list>
        <ion-select ref="select" v-show="false"  @ionChange="change" interface="action-sheet" :cancel-text="$t('app.button.cancel')">
            <ion-select-option  v-for="option of actionBarModelData" :key="option.viewlogicname"  :value="option.viewlogicname">{{option.actionName}}</ion-select-option>
        </ion-select>
    </ion-row>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ProductService from '@/app-core/service/product/product-service';
import ProductStatusChartMobBService from '@/app-core/ctrl-service/product/product-status-chart-mob-b-portlet-service';

import ProductUIService from '@/ui-service/product/product-ui-action';



@Component({
    components: {
    }
})
export default class ProductStatusChartMobBBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ProductStatusChartMobB
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ProductStatusChartMobB
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ProductStatusChartMobB
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProductStatusChartMobB
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProductStatusChartMobB
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ProductStatusChartMobB
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ProductStatusChartMobB
     */
    protected getControlType(): string {
        return 'PORTLET'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ProductStatusChartMobB
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  ProductStatusChartMobBBase
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
     * @type {ProductStatusChartMobBService}
     * @memberof ProductStatusChartMobB
     */
    protected service: ProductStatusChartMobBService = new ProductStatusChartMobBService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductStatusChartMobB
     */
    protected appEntityService: ProductService = new ProductService();

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof ProductStatusChartMobBBase
     */  
    public deUIService:ProductUIService = new ProductUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ProductStatusChartMobB
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductStatusChartMobB
     */    
    protected counterServiceArray:Array<any> = [];


    /**
     * 是否为定制门户
     *
     * @type {string}
     * @memberof MyTaskMob
     */
    @Prop({default:false}) protected isCustomize?: boolean;

    /**
     * 操作栏模型数据
     *
     * @protected
     * @type {any[]}
     * @memberof ProductStatusChartMobB
     */
    protected actionBarModelData: any[] = [
    ];

    /**
     * 触发界面行为
     *
     * @protected
     * @param {*} $event
     * @memberof ProductStatusChartMobB
     */
    protected handleItemClick($event: any) {
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProductStatusChartMobB
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProductStatusChartMobB
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductStatusChartMobB
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProductStatusChartMobB
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((name: string) => {
                    this.viewState.next({ tag: name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductStatusChartMobB
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProductStatusChartMobB
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 门户名称编辑状态
     *
     * @memberof ProductStatusChartMobB
     */
    public isEditTitle = false;

    /**
     * 内置门户行为组
     *
     * @memberof MyTaskMob
     */
    public builtinItemS = [{actionName:'重命名',viewlogicname:'rename'},{actionName:"删除",viewlogicname:"delete"}]

    /**
     * 门户点击行为菜单
     *
     * @memberof ProductStatusChartMobB
     */
    public open() {
        let select :any= this.$refs['select'];
        if(select){
            setTimeout(() => {
                select.open();
            }, 1);
        }
    }

    /**
     * 门户点击行为
     *
     * @memberof ProductStatusChartMobB
     */
    public change(value:any) {
        if(value.detail.value){
            if(value.detail.value == 'rename' ){
                this.$notice.warning("暂不支持");
            }else if(value.detail.value == 'delete' ){
                this.$notice.warning("暂不支持");
            }
            else{
                this.handleItemClick(value.detail.value);
            }
        }
        setTimeout(() => {
            let select :any = this.$refs['select'];
            if (select) {
                select.value = null;
            }
        }, 1);
    }

    public mounted() {
        if(this.isCustomize){
            this.actionBarModelData.push(...this.builtinItemS);
        }
    }

}
</script>

<style lang='less'>
@import './product-status-chart-mob-b-portlet.less';
</style>