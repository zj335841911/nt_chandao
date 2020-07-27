import { Subject } from 'rxjs';
import { TreeExpViewBase } from '@/studio-core';
import ModuleService from '@/service/module/module-service';
import ModuleAuthService from '@/authservice/module/module-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import ModuleUIService from '@/uiservice/module/module-ui-service';

/**
 * 模块树导航视图视图基类
 *
 * @export
 * @class ModuleTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class ModuleTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ModuleTreeExpViewBase
     */
    protected appDeName: string = 'module';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ModuleTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ModuleTreeExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ModuleService}
     * @memberof ModuleTreeExpViewBase
     */
    protected appEntityService: ModuleService = new ModuleService;

    /**
     * 实体权限服务对象
     *
     * @type ModuleUIService
     * @memberof ModuleTreeExpViewBase
     */
    public appUIService: ModuleUIService = new ModuleUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ModuleTreeExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ModuleTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.module.views.treeexpview.caption',
        srfTitle: 'entities.module.views.treeexpview.title',
        srfSubTitle: 'entities.module.views.treeexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ModuleTreeExpViewBase
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
	protected viewtag: string = '3e2436a62be2ed493eda83693261274e';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ModuleTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ModuleTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'module',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ModuleTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ModuleTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ModuleTreeExpViewBase
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
     * @memberof ModuleTreeExpView
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
     * @memberof ModuleTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof ModuleTreeExpView
     */
    public viewUID: string = 'zentao-module-tree-exp-view';


}