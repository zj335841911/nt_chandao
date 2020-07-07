import { Subject } from 'rxjs';
import { ListExpViewBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ListExpViewEngine from '@engine/view/list-exp-view-engine';

/**
 * 项目列表导航视图视图基类
 *
 * @export
 * @class ProjectListExpViewBase
 * @extends {ListExpViewBase}
 */
export class ProjectListExpViewBase extends ListExpViewBase {

    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectListExpViewBase
     */
    protected appDeName: string = 'project';

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectListExpViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectListExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectListExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.listexpview.caption',
        srfTitle: 'entities.project.views.listexpview.title',
        srfSubTitle: 'entities.project.views.listexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectListExpViewBase
     */
    protected containerModel: any = {
        view_listexpbar: { name: 'listexpbar', type: 'LISTEXPBAR' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '3aafb12bb0db2be013c0f5ced8c7dc50';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectListExpViewBase
     */
    public engine: ListExpViewEngine = new ListExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectListExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            listexpbar: this.$refs.listexpbar,
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * listexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectListExpViewBase
     */
    public listexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'selectionchange', $event);
    }

    /**
     * listexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectListExpViewBase
     */
    public listexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'activated', $event);
    }

    /**
     * listexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectListExpViewBase
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
     * @memberof ProjectListExpView
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
     * @memberof ProjectListExpView
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
     * @memberof ProjectListExpView
     */
    protected viewUID: string = 'zentao-project-list-exp-view';


}