<template>
    <div class='portlet product-status-chart ' :style="{'height': isAdaptiveSize ? 'calc(100% - 16px)' : (height > 0 ? height+'px' :'370px'),}">
        <p class='portlet-title'>
            <span>
            
            产品总览
            </span>
        </p>
        <div class="portlet-with-title">
        <!-- 测试 -->
              <view_db_productstatusportlet_chart 
          :viewState="viewState"  
          :viewparams="viewparams" 
          :context="context" 
          fetchAction="FetchDefault"
          :showBusyIndicator="true" 
          name="db_productstatusportlet_chart"  
          ref='db_productstatusportlet_chart' 
          @closeview="closeView($event)">
      </view_db_productstatusportlet_chart>
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
import ProductStatusChartService from './product-status-chart-portlet-service';

import { Environment } from '@/environments/environment';


@Component({
    components: {
      
    }
})
export default class ProductProductStatusChartBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ProductStatusChart
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ProductStatusChart
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProductStatusChart
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProductStatusChart
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof ProductStatusChart
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ProductStatusChart
     */
    public getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductStatusChart
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {ProductStatusChartService}
     * @memberof ProductStatusChart
     */
    public service: ProductStatusChartService = new ProductStatusChartService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductStatusChart
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof ProductStatusChart
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof ProductStatusChart
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
     * 长度
     *
     * @type {number}
     * @memberof ProductStatusChart
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ProductStatusChart
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ProductStatusChartBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProductStatusChartBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProductStatusChartBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductStatusChartBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProductStatusChartBase
     */    
    public afterCreated(){
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
     * @memberof ProductStatusChartBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProductStatusChartBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
</script>

<style lang='less'>
@import './product-status-chart-portlet.less';
</style>

