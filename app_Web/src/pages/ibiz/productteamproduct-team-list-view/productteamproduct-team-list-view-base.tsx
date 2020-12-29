
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { ListViewBase } from '@/studio-core';
import PRODUCTTEAMService from '@/service/productteam/productteam-service';
import PRODUCTTEAMAuthService from '@/authservice/productteam/productteam-auth-service';
import ListViewEngine from '@engine/view/list-view-engine';
import PRODUCTTEAMUIService from '@/uiservice/productteam/productteam-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 产品团队列表视图视图基类
 *
 * @export
 * @class PRODUCTTEAMProductTeamListViewBase
 * @extends {ListViewBase}
 */
export class PRODUCTTEAMProductTeamListViewBase extends ListViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    protected appDeName: string = 'productteam';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    protected appDeMajor: string = 'account';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */ 
    protected dataControl: string = 'list';

    /**
     * 实体服务对象
     *
     * @type {PRODUCTTEAMService}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    protected appEntityService: PRODUCTTEAMService = new PRODUCTTEAMService;

    /**
     * 实体权限服务对象
     *
     * @type PRODUCTTEAMUIService
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public appUIService: PRODUCTTEAMUIService = new PRODUCTTEAMUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    protected model: any = {
        srfCaption: 'entities.productteam.views.productteamlistview.caption',
        srfTitle: 'entities.productteam.views.productteamlistview.title',
        srfSubTitle: 'entities.productteam.views.productteamlistview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    protected containerModel: any = {
        view_toolbar: {
            name: 'toolbar',
            type: 'TOOLBAR',
        },
        view_list: {
            name: 'list',
            type: 'LIST',
        },
        view_searchform: {
            name: 'searchform',
            type: 'SEARCHFORM',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof PRODUCTTEAMProductTeamListView
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
	protected viewtag: string = '5adaf4d29de51f3f4c304ef50908925e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */ 
    protected viewName: string = 'PRODUCTTEAMProductTeamListView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public engine: ListViewEngine = new ListViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            list: this.$refs.list,
            opendata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.opendata(args, fullargs, params, $event, xData);
            },
            newdata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.newdata(args, fullargs, params, $event, xData);
            },
            searchform: this.$refs.searchform,
            keyPSDEField: 'productteam',
            majorPSDEField: 'account',
            isLoadDefault: true,
        });
    }

    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public list_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof PRODUCTTEAMProductTeamListViewBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof PRODUCTTEAMProductTeamListView
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
     * @memberof PRODUCTTEAMProductTeamListView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


}