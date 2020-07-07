import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';

/**
 * 测试视图基类
 *
 * @export
 * @class ProductTestTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class ProductTestTabExpViewBase extends TabExpViewBase {

    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTestTabExpViewBase
     */
    protected appDeName: string = 'product';

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductTestTabExpViewBase
     */
    protected appEntityService: ProductService = new ProductService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductTestTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductTestTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.testtabexpview.caption',
        srfTitle: 'entities.product.views.testtabexpview.title',
        srfSubTitle: 'entities.product.views.testtabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductTestTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '005b0ba30f9e9e982e087961bd50c681';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductTestTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductTestTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }



    /**
     * 加载模型
     *
     * @protected
     * @memberof ProductTestTabExpViewBase
     */
    protected async loadModel(): Promise<any> {
        if(this.context.product){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data } = response;
                if (data.name) {
                    Object.assign(this.model, { dataInfo: data.name });
                    if(this.$route){
                        this.$route.meta.info = this.model.dataInfo;
                    }
                    Object.assign(this.model, { srfTitle: `${this.$t(this.model.srfTitle)} - ${this.model.dataInfo}` });
                    this.$appService.navHistory.setCaption({ tag: this.viewtag, info: this.model.dataInfo });
                }
            })
        }
    }


}