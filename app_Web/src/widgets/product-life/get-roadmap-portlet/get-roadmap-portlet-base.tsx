import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProductLifeService from '@/service/product-life/product-life-service';
import GetRoadmapService from './get-roadmap-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet1部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {GetRoadmapPortletBase}
 */
export class GetRoadmapPortletBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {GetRoadmapService}
     * @memberof GetRoadmapPortletBase
     */
    public service: GetRoadmapService = new GetRoadmapService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductLifeService}
     * @memberof GetRoadmapPortletBase
     */
    public appEntityService: ProductLifeService = new ProductLifeService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof GetRoadmapPortletBase
     */
    protected appDeName: string = 'productlife';

    /**
     * 长度
     *
     * @type {number}
     * @memberof GetRoadmap
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof GetRoadmap
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof GetRoadmapBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof GetRoadmapBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof GetRoadmapBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof GetRoadmapBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof GetRoadmapBase
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
     * @memberof GetRoadmapBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof GetRoadmapBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
