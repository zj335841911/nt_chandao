import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { ListExpViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import ListExpViewEngine from '@engine/view/list-exp-view-engine';
import ProductUIService from '@/uiservice/product/product-ui-service';

/**
 * 测试统计视图基类
 *
 * @export
 * @class ProductTestListExpViewBase
 * @extends {ListExpViewBase}
 */
export class ProductTestListExpViewBase extends ListExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTestListExpViewBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductTestListExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductTestListExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductTestListExpViewBase
     */
    protected appEntityService: ProductService = new ProductService;

    /**
     * 实体权限服务对象
     *
     * @type ProductUIService
     * @memberof ProductTestListExpViewBase
     */
    public appUIService: ProductUIService = new ProductUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductTestListExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.testlistexpview.caption',
        srfTitle: 'entities.product.views.testlistexpview.title',
        srfSubTitle: 'entities.product.views.testlistexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductTestListExpViewBase
     */
    protected containerModel: any = {
        view_listexpbar: { name: 'listexpbar', type: 'LISTEXPBAR' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductTestListExpView
     */
    public testlistexpviewlistexpbar_list_quicktoolbarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: '新建', 'isShowCaption': true, 'isShowIcon': true, tooltip: '新建', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALCREATE', uiaction: { tag: 'New', target: '', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'c539f1585371e9943b90177eaef08b6b';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductTestListExpViewBase
     */
    public engine: ListExpViewEngine = new ListExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductTestListExpViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductTestListExpViewBase
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
     * @memberof ProductTestListExpViewBase
     */
    public listexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'selectionchange', $event);
    }

    /**
     * listexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductTestListExpViewBase
     */
    public listexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'activated', $event);
    }

    /**
     * listexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductTestListExpViewBase
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
     * @memberof ProductTestListExpView
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
     * @memberof ProductTestListExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }




    /**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProductTestListExpView
     */
    protected viewUID: string = 'zentao-product-test-list-exp-view';


}