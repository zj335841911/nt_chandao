import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, CtrlBase } from '@/studio-core';
import ActionService from '@/service/action/action-service';
import ProductTrendsTimelineService from './product-trends-timeline-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet2部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {ProductTrendsTimelinePortletBase}
 */
export class ProductTrendsTimelinePortletBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {ProductTrendsTimelineService}
     * @memberof ProductTrendsTimelinePortletBase
     */
    public service: ProductTrendsTimelineService = new ProductTrendsTimelineService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof ProductTrendsTimelinePortletBase
     */
    public appEntityService: ActionService = new ActionService({ $store: this.$store });

    /**
     * 长度
     *
     * @type {number}
     * @memberof ProductTrendsTimeline
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ProductTrendsTimeline
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ProductTrendsTimelineBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProductTrendsTimelineBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProductTrendsTimelineBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductTrendsTimelineBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProductTrendsTimelineBase
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
     * @memberof ProductTrendsTimelineBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProductTrendsTimelineBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
