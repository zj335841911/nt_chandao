<template>
  <div class='tabviewpanel' style="height:100%;" v-if = 'isActivied' >
        <story-kanban-view 
      class='viewcontainer2' 
      :viewdata="JSON.stringify(context)" 
      :viewparam="JSON.stringify(viewparams)"
      @viewload="viewDatasChange($event)" 
      :viewDefaultUsage="false" >
    </story-kanban-view>
  </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import StoryService from '@/service/story/story-service';
import TabExpViewtabviewpanel3Service from './tab-exp-viewtabviewpanel3-tabviewpanel-service';



@Component({
    components: {
      
    }
})
export default class TabExpViewtabviewpanel3Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TabExpViewtabviewpanel3
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TabExpViewtabviewpanel3
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TabExpViewtabviewpanel3
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TabExpViewtabviewpanel3
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof TabExpViewtabviewpanel3
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TabExpViewtabviewpanel3
     */
    protected getControlType(): string {
        return 'TABVIEWPANEL'
    }



    /**
     * 建构部件服务对象
     *
     * @type {TabExpViewtabviewpanel3Service}
     * @memberof TabExpViewtabviewpanel3
     */
    protected service: TabExpViewtabviewpanel3Service = new TabExpViewtabviewpanel3Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof TabExpViewtabviewpanel3
     */
    protected appEntityService: StoryService = new StoryService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof TabExpViewtabviewpanel3
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TabExpViewtabviewpanel3
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
     * @memberof TabExpViewtabviewpanel3
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TabExpViewtabviewpanel3
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof TabExpViewtabviewpanel3
     */
    protected isActivied: boolean = true;
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof TabExpViewtabviewpanel3
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TabExpViewtabviewpanel3
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
     * @memberof  TabExpViewtabviewpanel3
     */
    protected viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof TabExpViewtabviewpanel3
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TabExpViewtabviewpanel3
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './tab-exp-viewtabviewpanel3-tabviewpanel.less';
</style>