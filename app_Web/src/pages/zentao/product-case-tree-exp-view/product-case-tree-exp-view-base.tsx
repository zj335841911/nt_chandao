import { Subject } from 'rxjs';
import { TreeExpViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import ProductUIService from '@/uiservice/product/product-ui-service';

/**
 * 产品需求导航视图视图基类
 *
 * @export
 * @class ProductCaseTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class ProductCaseTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductCaseTreeExpViewBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductCaseTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductCaseTreeExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductCaseTreeExpViewBase
     */
    protected appEntityService: ProductService = new ProductService;

    /**
     * 实体权限服务对象
     *
     * @type ProductUIService
     * @memberof ProductCaseTreeExpViewBase
     */
    public appUIService: ProductUIService = new ProductUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductCaseTreeExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductCaseTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.casetreeexpview.caption',
        srfTitle: 'entities.product.views.casetreeexpview.title',
        srfSubTitle: 'entities.product.views.casetreeexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductCaseTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: { name: 'treeexpbar', type: 'TREEEXPBAR' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '63b82c8ee288130faca83833ec1f837c';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductCaseTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductCaseTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductCaseTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductCaseTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductCaseTreeExpViewBase
     */
    public treeexpbar_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductCaseTreeExpView
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
     * @memberof ProductCaseTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof ProductCaseTreeExpView
     */
    public viewUID: string = 'zentao-product-case-tree-exp-view';


}