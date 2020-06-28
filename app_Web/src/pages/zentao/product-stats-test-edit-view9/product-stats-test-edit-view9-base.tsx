import { Subject } from 'rxjs';
import { EditView9Base } from '@/studio-core';
import ProductStatsService from '@/service/product-stats/product-stats-service';
import EditView9Engine from '@engine/view/edit-view9-engine';

/**
 * 产品统计编辑视图视图基类
 *
 * @export
 * @class ProductStatsTestEditView9Base
 * @extends {EditView9Base}
 */
export class ProductStatsTestEditView9Base extends EditView9Base {

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof ProductStatsTestEditView9Base
     */
    protected appEntityService: ProductStatsService = new ProductStatsService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductStatsTestEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductStatsTestEditView9Base
	 */
    protected customViewNavContexts: any = {
        'PRODUCTSTATS': { isRawValue: false, value: 'product' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductStatsTestEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.productstats.views.testeditview9.caption',
        srfTitle: 'entities.productstats.views.testeditview9.title',
        srfSubTitle: 'entities.productstats.views.testeditview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductStatsTestEditView9Base
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '2ae3586b0dd0f70c261ba6f24adb99df';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductStatsTestEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductStatsTestEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'productstats',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsTestEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsTestEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsTestEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof ProductStatsTestEditView9Base
     */
    protected viewMounted(): void {
        if (this.panelState) {
            this.panelState.subscribe((res:any) => {
                if (Object.is(res.tag,'meditviewpanel')) {
                    if (Object.is(res.action,'save')) {
                        this.viewState.next({ tag:'form', action: 'save', data:res.data});
                    }
                    if (Object.is(res.action,'remove')) {
                        this.viewState.next({ tag:'form', action: 'remove', data:res.data});
                    }
                }
            });
        }
    }


}