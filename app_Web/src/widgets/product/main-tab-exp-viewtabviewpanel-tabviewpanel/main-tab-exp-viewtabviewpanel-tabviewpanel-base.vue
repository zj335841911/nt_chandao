<template>
  <div class='tabviewpanel' style="height:100%;" v-if = 'isActivied' >
        <product-main-dashboard-view 
      class='viewcontainer2' 
      :viewdata="viewdata" 
      :viewparam="viewparam"
      @viewload="viewDatasChange($event)" 
      :viewDefaultUsage="false" >
    </product-main-dashboard-view>
  </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProductService from '@/service/product/product-service';
import MainTabExpViewtabviewpanelService from './main-tab-exp-viewtabviewpanel-tabviewpanel-service';



@Component({
    components: {
      
    }
})
export default class MainTabExpViewtabviewpanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainTabExpViewtabviewpanel
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainTabExpViewtabviewpanel
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MainTabExpViewtabviewpanel
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainTabExpViewtabviewpanel
     */
    public getControlType(): string {
        return 'TABVIEWPANEL'
    }



    /**
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabviewpanelService}
     * @memberof MainTabExpViewtabviewpanel
     */
    public service: MainTabExpViewtabviewpanelService = new MainTabExpViewtabviewpanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof MainTabExpViewtabviewpanel
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainTabExpViewtabviewpanel
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainTabExpViewtabviewpanel
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
     * @memberof MainTabExpViewtabviewpanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainTabExpViewtabviewpanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof MainTabExpViewtabviewpanel
     */
    public isActivied: boolean = true;

    /**
     * 局部上下文
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel
     */
    public localContext: any = null;

    /**
     * 局部视图参数
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel
     */
    public localViewParam: any = null;

    /**
     * 传入上下文
     *
     * @type {string}
     * @memberof TabExpViewtabviewpanel
     */
    public viewdata: string = JSON.stringify(this.context);

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof PickupViewpickupviewpanel
     */
    public viewparam: string = JSON.stringify(this.viewparams);

    /**
     * 视图面板过滤项
     *
     * @type {string}
     * @memberof MainTabExpViewtabviewpanel
     */
    public navfilter: string = "";
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MainTabExpViewtabviewpanel
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainTabExpViewtabviewpanel
     */    
    public afterCreated(){
        this.initNavParam();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.$forceUpdate();
                this.initNavParam();
            });
        }
    }

    /**
     * 初始化导航参数
     *
     * @memberof MainTabExpViewtabviewpanel
     */
    public initNavParam(){
        if(!Object.is(this.navfilter,"")){
            Object.assign(this.viewparams,{[this.navfilter]:this.context['majorentity']})
        }
        if(this.localContext && Object.keys(this.localContext).length >0){
            let _context:any = this.$util.computedNavData({},this.context,this.viewparams,this.localContext);
            Object.assign(this.context,_context);
        }
        if(this.localViewParam && Object.keys(this.localViewParam).length >0){
            let _param:any = this.$util.computedNavData({},this.context,this.viewparams,this.localViewParam);
            Object.assign(this.viewparams,_param);
        }
        this.viewdata =JSON.stringify(this.context);
        this.viewparam = JSON.stringify(this.viewparams);
    }

    /**
     * 视图数据变化
     *
     * @memberof  MainTabExpViewtabviewpanel
     */
    public viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof MainTabExpViewtabviewpanel
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainTabExpViewtabviewpanel
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './main-tab-exp-viewtabviewpanel-tabviewpanel.less';
</style>