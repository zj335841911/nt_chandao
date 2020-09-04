import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import TextExpViewService from './text-exp-view-portlet-service';
import ProductUIService from '@/uiservice/product/product-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet9部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TextExpViewPortletBase}
 */
export class TextExpViewPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TextExpViewPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {TextExpViewService}
     * @memberof TextExpViewPortletBase
     */
    public service: TextExpViewService = new TextExpViewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof TextExpViewPortletBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TextExpViewPortletBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TextExpViewPortletBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof TextExpViewBase
     */  
    public appUIService:ProductUIService = new ProductUIService(this.$store);

    /**
     * 长度
     *
     * @type {number}
     * @memberof TextExpView
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof TextExpView
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof TextExpViewBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TextExpViewBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TextExpViewBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof TextExpViewBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return '370px';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof TextExpViewBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TextExpViewBase
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
     * @memberof TextExpViewBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TextExpViewBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
