
import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { ListViewBase } from '@/studio-core';
import ActionService from '@/service/action/action-service';
import ActionAuthService from '@/authservice/action/action-auth-service';
import ListViewEngine from '@engine/view/list-view-engine';
import ActionUIService from '@/uiservice/action/action-ui-service';
import CodeListService from "@service/app/codelist-service";


/**
 * 系统日志列表视图视图基类
 *
 * @export
 * @class ActionProjectTrendsListViewBase
 * @extends {ListViewBase}
 */
export class ActionProjectTrendsListViewBase extends ListViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ActionProjectTrendsListViewBase
     */
    protected appDeName: string = 'action';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ActionProjectTrendsListViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ActionProjectTrendsListViewBase
     */
    protected appDeMajor: string = 'comment';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ActionProjectTrendsListViewBase
     */ 
    protected dataControl:string = "list";

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof ActionProjectTrendsListViewBase
     */
    protected appEntityService: ActionService = new ActionService;

    /**
     * 实体权限服务对象
     *
     * @type ActionUIService
     * @memberof ActionProjectTrendsListViewBase
     */
    public appUIService: ActionUIService = new ActionUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ActionProjectTrendsListViewBase
     */
    protected model: any = {
        srfCaption: 'entities.action.views.projecttrendslistview.caption',
        srfTitle: 'entities.action.views.projecttrendslistview.title',
        srfSubTitle: 'entities.action.views.projecttrendslistview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ActionProjectTrendsListViewBase
     */
    protected containerModel: any = {
        view_list: { name: 'list', type: 'LIST' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '7d34636d1c24d613abf8d3fdc64ec7ba';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ActionProjectTrendsListViewBase
     */
    public engine: ListViewEngine = new ListViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ActionProjectTrendsListViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ActionProjectTrendsListViewBase
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
            keyPSDEField: 'action',
            majorPSDEField: 'comment',
            isLoadDefault: true,
        });
    }

    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        if(args[0].srfsourcekey){
            data.srfsourcekey = args[0].srfsourcekey;
        }
        if(fullargs && (fullargs as any).copymode) {
            Object.assign(data, { copymode: (fullargs as any).copymode });
        }
        let tempContext = JSON.parse(JSON.stringify(this.context));
        delete tempContext.action;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'actions', parameterName: 'action' },
        ];
        const _this: any = this;
        const openPopupModal = (view: any, data: any) => {
            let container: Subject<any> = this.$appmodal.openModal(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'action-edit-view', 
            height: 0, 
            width: 800,  
            title: this.$t('entities.action.views.editview.title'),
        };
        openPopupModal(view, data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ActionProjectTrendsListView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'actions', parameterName: 'action' },
        ];
        const _this: any = this;
        const openPopupModal = (view: any, data: any) => {
            let container: Subject<any> = this.$appmodal.openModal(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'action-edit-view', 
            height: 0, 
            width: 800,  
            title: this.$t('entities.action.views.editview.title'),
        };
        openPopupModal(view, data);
    }


}