<template>
    <div class='porlet get-roadmaps' :style="{'height': isAdaptiveSize ? '100%' : '300px',}">
        <p class='porlet-title'>
            产品路线图
        </p>
        <div class="portlet-width-title">
        <product-life-road-map-slist-view9 :viewdata="JSON.stringify(context)" :viewDefaultUsage="false" ></product-life-road-map-slist-view9>
        </div>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProductLifeService from '@/service/product-life/product-life-service';
import GetRoadmapsService from './get-roadmaps-portlet-service';



@Component({
    components: {
      
    }
})
export default class ProductLifeGetRoadmapsBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof GetRoadmaps
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof GetRoadmaps
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof GetRoadmaps
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof GetRoadmaps
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof GetRoadmaps
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof GetRoadmaps
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof GetRoadmaps
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {GetRoadmapsService}
     * @memberof GetRoadmaps
     */
    protected service: GetRoadmapsService = new GetRoadmapsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductLifeService}
     * @memberof GetRoadmaps
     */
    protected appEntityService: ProductLifeService = new ProductLifeService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof GetRoadmaps
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof GetRoadmaps
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
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof GetRoadmaps
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof GetRoadmaps
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof GetRoadmaps
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof GetRoadmaps
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof GetRoadmaps
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
     * @memberof GetRoadmaps
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof GetRoadmaps
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './get-roadmaps-portlet.less';
</style>