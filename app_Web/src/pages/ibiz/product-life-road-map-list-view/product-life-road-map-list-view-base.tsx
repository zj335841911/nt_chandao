
import { Subject } from 'rxjs';
import { ListViewBase } from '@/studio-core';
import ProductLifeService from '@/service/product-life/product-life-service';
import ListViewEngine from '@engine/view/list-view-engine';
import CodeListService from "@service/app/codelist-service";


/**
 * 路线图视图基类
 *
 * @export
 * @class ProductLifeRoadMapListViewBase
 * @extends {ListViewBase}
 */
export class ProductLifeRoadMapListViewBase extends ListViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProductLifeService}
     * @memberof ProductLifeRoadMapListViewBase
     */
    protected appEntityService: ProductLifeService = new ProductLifeService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductLifeRoadMapListViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductLifeRoadMapListViewBase
	 */
    protected customViewParams: any = {
        'product': { isRawValue: false, value: 'srfparentkey' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductLifeRoadMapListViewBase
     */
    protected model: any = {
        srfCaption: 'entities.productlife.views.roadmaplistview.caption',
        srfTitle: 'entities.productlife.views.roadmaplistview.title',
        srfSubTitle: 'entities.productlife.views.roadmaplistview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductLifeRoadMapListViewBase
     */
    protected containerModel: any = {
        view_list2: { name: 'list2', type: 'LIST' },
        view_list: { name: 'list', type: 'LIST' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '07327890c326f9c806b9343f0c660fc1';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductLifeRoadMapListViewBase
     */
    public engine: ListViewEngine = new ListViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductLifeRoadMapListViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            list: this.$refs.list,
            opendata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.opendata(args,fullargs, params, $event, xData);
            },
            newdata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.newdata(args,fullargs, params, $event, xData);
            },
            keyPSDEField: 'productlife',
            majorPSDEField: 'productlifename',
            isLoadDefault: true,
        });
    }

    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLifeRoadMapListViewBase
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLifeRoadMapListViewBase
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLifeRoadMapListViewBase
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLifeRoadMapListViewBase
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLifeRoadMapListViewBase
     */
    public list_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductLifeRoadMapListView
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
     * @memberof ProductLifeRoadMapListView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


}