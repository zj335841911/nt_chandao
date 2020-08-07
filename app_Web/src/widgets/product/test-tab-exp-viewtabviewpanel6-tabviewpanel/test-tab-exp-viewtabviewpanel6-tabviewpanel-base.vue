<template>
  <div class='tabviewpanel' style="height:100%;" v-if = 'isActivied' >
        <test-suite-grid-view 
      class='viewcontainer2' 
      :viewdata="JSON.stringify(context)" 
      :viewparam="JSON.stringify(viewparams)"
      @viewload="viewDatasChange($event)" 
      :viewDefaultUsage="false" >
    </test-suite-grid-view>
  </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProductService from '@/service/product/product-service';
import TestTabExpViewtabviewpanel6Service from './test-tab-exp-viewtabviewpanel6-tabviewpanel-service';



@Component({
    components: {
      
    }
})
export default class TestTabExpViewtabviewpanel6Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TestTabExpViewtabviewpanel6
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TestTabExpViewtabviewpanel6
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TestTabExpViewtabviewpanel6
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TestTabExpViewtabviewpanel6
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof TestTabExpViewtabviewpanel6
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TestTabExpViewtabviewpanel6
     */
    protected getControlType(): string {
        return 'TABVIEWPANEL'
    }



    /**
     * 建构部件服务对象
     *
     * @type {TestTabExpViewtabviewpanel6Service}
     * @memberof TestTabExpViewtabviewpanel6
     */
    protected service: TestTabExpViewtabviewpanel6Service = new TestTabExpViewtabviewpanel6Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof TestTabExpViewtabviewpanel6
     */
    protected appEntityService: ProductService = new ProductService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof TestTabExpViewtabviewpanel6
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TestTabExpViewtabviewpanel6
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
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestTabExpViewtabviewpanel6
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestTabExpViewtabviewpanel6
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof TestTabExpViewtabviewpanel6
     */
    protected isActivied: boolean = true;
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof TestTabExpViewtabviewpanel6
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TestTabExpViewtabviewpanel6
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.$forceUpdate();

            });
        }
    }

    /**
     * 视图数据变化
     *
     * @memberof  TestTabExpViewtabviewpanel6
     */
    protected viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof TestTabExpViewtabviewpanel6
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestTabExpViewtabviewpanel6
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './test-tab-exp-viewtabviewpanel6-tabviewpanel.less';
</style>