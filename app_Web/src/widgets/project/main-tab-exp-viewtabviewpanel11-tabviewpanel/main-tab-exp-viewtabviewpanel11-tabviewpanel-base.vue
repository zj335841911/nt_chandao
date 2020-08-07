<template>
  <div class='tabviewpanel' style="height:100%;" v-if = 'isActivied' >
        <burn-chart-view 
      class='viewcontainer2' 
      :viewdata="JSON.stringify(context)" 
      :viewparam="JSON.stringify(viewparams)"
      @viewload="viewDatasChange($event)" 
      :viewDefaultUsage="false" >
    </burn-chart-view>
  </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProjectService from '@/service/project/project-service';
import MainTabExpViewtabviewpanel11Service from './main-tab-exp-viewtabviewpanel11-tabviewpanel-service';



@Component({
    components: {
      
    }
})
export default class MainTabExpViewtabviewpanel11Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainTabExpViewtabviewpanel11
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainTabExpViewtabviewpanel11
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel11
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel11
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MainTabExpViewtabviewpanel11
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainTabExpViewtabviewpanel11
     */
    protected getControlType(): string {
        return 'TABVIEWPANEL'
    }



    /**
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabviewpanel11Service}
     * @memberof MainTabExpViewtabviewpanel11
     */
    protected service: MainTabExpViewtabviewpanel11Service = new MainTabExpViewtabviewpanel11Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof MainTabExpViewtabviewpanel11
     */
    protected appEntityService: ProjectService = new ProjectService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainTabExpViewtabviewpanel11
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainTabExpViewtabviewpanel11
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
     * @memberof MainTabExpViewtabviewpanel11
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainTabExpViewtabviewpanel11
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof MainTabExpViewtabviewpanel11
     */
    protected isActivied: boolean = true;
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MainTabExpViewtabviewpanel11
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainTabExpViewtabviewpanel11
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
     * @memberof  MainTabExpViewtabviewpanel11
     */
    protected viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof MainTabExpViewtabviewpanel11
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainTabExpViewtabviewpanel11
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './main-tab-exp-viewtabviewpanel11-tabviewpanel.less';
</style>