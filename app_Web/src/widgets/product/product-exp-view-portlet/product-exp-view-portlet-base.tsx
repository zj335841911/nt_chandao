import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductExpViewService from './product-exp-view-portlet-service';
import ProductUIService from '@/uiservice/product/product-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet7部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ProductExpViewPortletBase}
 */
export class ProductExpViewPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductExpViewPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {ProductExpViewService}
     * @memberof ProductExpViewPortletBase
     */
    public service: ProductExpViewService = new ProductExpViewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductExpViewPortletBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductExpViewPortletBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductExpViewPortletBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 长度
     *
     * @type {number}
     * @memberof ProductExpView
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ProductExpView
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ProductExpViewBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProductExpViewBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProductExpViewBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof ProductExpViewBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return '360px';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductExpViewBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProductExpViewBase
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
     * @memberof ProductExpViewBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProductExpViewBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
