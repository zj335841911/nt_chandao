import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';

/**
 * 计划视图基类
 *
 * @export
 * @class ProductPlanMainTabExpBase
 * @extends {TabExpViewBase}
 */
export class ProductPlanMainTabExpBase extends TabExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProductPlanService}
     * @memberof ProductPlanMainTabExpBase
     */
    protected appEntityService: ProductPlanService = new ProductPlanService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductPlanMainTabExpBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanMainTabExpBase
     */
    protected model: any = {
        srfCaption: 'entities.productplan.views.maintabexp.caption',
        srfTitle: 'entities.productplan.views.maintabexp.title',
        srfSubTitle: 'entities.productplan.views.maintabexp.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanMainTabExpBase
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
	protected viewtag: string = '08ca1b1e6234a0d038e1fbf52478ea7f';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductPlanMainTabExpBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductPlanMainTabExpBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'productplan',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }



    /**
     * 加载模型
     * 
     * @memberof ProductPlanMainTabExpBase
     */
    public async loadModel(): Promise<void> {
        if(this.context.productplan){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                if (_data.title) {
                    Object.assign(this.model, { dataInfo: _data.title });
                    if(this.$tabPageExp){
                        let _this:any = this;
                        this.$tabPageExp.setCurPageCaption(_this.$t(this.model.srfTitle), _this.$t(this.model.srfTitle), _this.model.dataInfo);
                    }
                    if(this.$route){
                        this.$route.meta.info = this.model.dataInfo;
                    }
                    Object.assign(this.model, { srfTitle: `${this.$t(this.model.srfTitle)} - ${this.model.dataInfo}` });
                }
            })
        }
    }


}