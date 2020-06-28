import { Subject } from 'rxjs';
import { ListExpViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ListExpViewEngine from '@engine/view/list-exp-view-engine';

/**
 * 产品列表导航视图视图基类
 *
 * @export
 * @class ProductListExpViewBase
 * @extends {ListExpViewBase}
 */
export class ProductListExpViewBase extends ListExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductListExpViewBase
     */
    protected appEntityService: ProductService = new ProductService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductListExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductListExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.listexpview.caption',
        srfTitle: 'entities.product.views.listexpview.title',
        srfSubTitle: 'entities.product.views.listexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductListExpViewBase
     */
    protected containerModel: any = {
        view_listexpbar: { name: 'listexpbar', type: 'LISTEXPBAR' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductListExpView
     */
    public listexpviewlistexpbar_list_quicktoolbarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: '新建','isShowCaption':true,'isShowIcon':true, tooltip: '新建', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'New', target: '' }, class: '' },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'e396b6f39451e3bf963aec602106adf0';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductListExpViewBase
     */
    public engine: ListExpViewEngine = new ListExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductListExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            listexpbar: this.$refs.listexpbar,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * listexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductListExpViewBase
     */
    public listexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'selectionchange', $event);
    }

    /**
     * listexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductListExpViewBase
     */
    public listexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'activated', $event);
    }

    /**
     * listexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductListExpViewBase
     */
    public listexpbar_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductListExpView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductListExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }




    /**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProductListExpView
     */
    protected viewUID: string = 'zentao-product-list-exp-view';


}