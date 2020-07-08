
import { Subject } from 'rxjs';
import { ListView9Base } from '@/studio-core';
import ProductLifeService from '@/service/product-life/product-life-service';
import ListView9Engine from '@engine/view/list-view9-engine';
import CodeListService from "@service/app/codelist-service";


/**
 * 路线图视图基类
 *
 * @export
 * @class ProductLifeRoadMapListView9Base
 * @extends {ListView9Base}
 */
export class ProductLifeRoadMapListView9Base extends ListView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductLifeRoadMapListView9Base
     */
    protected appDeName: string = 'productlife';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductLifeRoadMapListView9Base
     */
    protected appDeKey: string = 'ibz_productlifeid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductLifeRoadMapListView9Base
     */
    protected appDeMajor: string = 'ibz_productlifename';

    /**
     * 实体服务对象
     *
     * @type {ProductLifeService}
     * @memberof ProductLifeRoadMapListView9Base
     */
    protected appEntityService: ProductLifeService = new ProductLifeService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductLifeRoadMapListView9Base
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductLifeRoadMapListView9Base
	 */
    protected customViewParams: any = {
        'product': { isRawValue: false, value: 'srfparentkey' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductLifeRoadMapListView9Base
     */
    protected model: any = {
        srfCaption: 'entities.productlife.views.roadmaplistview9.caption',
        srfTitle: 'entities.productlife.views.roadmaplistview9.title',
        srfSubTitle: 'entities.productlife.views.roadmaplistview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductLifeRoadMapListView9Base
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
	protected viewtag: string = '985c8eb7591e5e00de8e3cda638d5727';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductLifeRoadMapListView9Base
     */
    public engine: ListView9Engine = new ListView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductLifeRoadMapListView9Base
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
     * @memberof ProductLifeRoadMapListView9Base
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLifeRoadMapListView9Base
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLifeRoadMapListView9Base
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLifeRoadMapListView9Base
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLifeRoadMapListView9Base
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
     * @memberof ProductLifeRoadMapListView9
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
     * @memberof ProductLifeRoadMapListView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


}