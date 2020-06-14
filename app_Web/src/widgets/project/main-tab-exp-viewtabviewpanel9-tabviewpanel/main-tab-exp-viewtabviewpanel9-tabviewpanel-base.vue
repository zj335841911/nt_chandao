<template>
  <div class='tabviewpanel' style="height:100%;" v-if = 'isActivied' >
        <build-main-grid-view 
      class='viewcontainer2' 
      :viewdata="viewdata" 
      :viewparam="viewparam"
      @viewload="viewDatasChange($event)" 
      :viewDefaultUsage="false" >
    </build-main-grid-view>
  </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProjectService from '@/service/project/project-service';
import MainTabExpViewtabviewpanel9Service from './main-tab-exp-viewtabviewpanel9-tabviewpanel-service';



@Component({
    components: {
      
    }
})
export default class MainTabExpViewtabviewpanel9Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainTabExpViewtabviewpanel9
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainTabExpViewtabviewpanel9
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel9
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel9
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MainTabExpViewtabviewpanel9
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainTabExpViewtabviewpanel9
     */
    public getControlType(): string {
        return 'TABVIEWPANEL'
    }



    /**
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabviewpanel9Service}
     * @memberof MainTabExpViewtabviewpanel9
     */
    public service: MainTabExpViewtabviewpanel9Service = new MainTabExpViewtabviewpanel9Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof MainTabExpViewtabviewpanel9
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainTabExpViewtabviewpanel9
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainTabExpViewtabviewpanel9
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
     * @memberof MainTabExpViewtabviewpanel9
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainTabExpViewtabviewpanel9
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof MainTabExpViewtabviewpanel9
     */
    public isActivied: boolean = true;

    /**
     * 局部上下文
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel9
     */
    public localContext: any = null;

    /**
     * 局部视图参数
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel9
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
     * @memberof MainTabExpViewtabviewpanel9
     */
    public navfilter: string = "";
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MainTabExpViewtabviewpanel9
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainTabExpViewtabviewpanel9
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
     * @memberof MainTabExpViewtabviewpanel9
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
     * @memberof  MainTabExpViewtabviewpanel9
     */
    public viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof MainTabExpViewtabviewpanel9
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainTabExpViewtabviewpanel9
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './main-tab-exp-viewtabviewpanel9-tabviewpanel.less';
</style>