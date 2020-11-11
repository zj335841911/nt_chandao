import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import SidebarService from './sidebar-list-service';
import ProductUIService from '@/uiservice/product/product-ui-service';


/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {SidebarListBase}
 */
export class SidebarListBase extends ListControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof SidebarListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {SidebarService}
     * @memberof SidebarListBase
     */
    public service: SidebarService = new SidebarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof SidebarListBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SidebarListBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof SidebarListBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof SidebarBase
     */  
    public appUIService:ProductUIService = new ProductUIService(this.$store);

    /**
     * list_batchtoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SidebarListBase
     */
    public list_batchtoolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.list_batchtoolbar_deuiaction1_click(null, 'list_batchtoolbar', $event2);
        }
    }

    /**
     * list_quicktoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SidebarListBase
     */
    public list_quicktoolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.list_quicktoolbar_deuiaction1_click(null, 'list_quicktoolbar', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.list_quicktoolbar_deuiaction2_click(null, 'list_quicktoolbar', $event2);
        }
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public list_quicktoolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_ProductTop(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public list_quicktoolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_CancelProductTop(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public list_batchtoolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.Edit(datas, contextJO,paramJO,  $event, xData,this,"Product");
    }

    /**
     * 编辑
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProductLeftSidebarListViewBase
     */
    public Edit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        if (args.length === 0) {
            return;
        }
        const _this: any = this;
        if (_this.opendata && _this.opendata instanceof Function) {
            const data: any = { };
            if (args.length > 0) {
                Object.assign(data, { product: args[0].product })
            }
            _this.opendata([{ ...data }], params, $event, xData);
        } else {
            _this.$Notice.error({ title: '错误', desc: 'opendata 视图处理逻辑不存在，请添加!' });
        }
    }

        /**
     * 项行为触发
     *
     * @param {*} $event
     * @param {*} $event2
     * @memberof SidebarListBase
     */
    public itemActionClick($event: any, $event2: any) {
        this.handleClick($event2);
        if(this.list_quicktoolbar_click && this.list_quicktoolbar_click instanceof Function) {
            this.list_quicktoolbar_click($event, $event2);
        }
    }

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof SidebarListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof SidebarListBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof SidebarListBase
     */
    public minorSortPSDEF: string = 'id';

        /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductLeftSidebarListView
     */
    public leftsidebarlistviewlist_quicktoolbarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: '置顶', 'isShowCaption': false, 'isShowIcon': true, tooltip: '置顶', iconcls: 'fa fa-hand-o-up', icon: '', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'NOTOP', uiaction: { tag: 'ProductTop', target: 'SINGLEKEY', class: '' } },

        deuiaction2: { name: 'deuiaction2', caption: '取消置顶', 'isShowCaption': false, 'isShowIcon': true, tooltip: '取消置顶', iconcls: 'fa fa-hand-o-down', icon: '', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'TOP', uiaction: { tag: 'CancelProductTop', target: 'SINGLEKEY', class: '' } },

    };


        /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductLeftSidebarListView
     */
    public leftsidebarlistviewlist_batchtoolbarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: '编辑', 'isShowCaption': true, 'isShowIcon': true, tooltip: '编辑', iconcls: 'fa fa-edit', icon: '', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'Edit', target: 'SINGLEKEY', class: '' } },

    };



}