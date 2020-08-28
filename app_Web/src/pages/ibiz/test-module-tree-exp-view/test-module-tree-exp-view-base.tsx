import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import TestModuleService from '@/service/test-module/test-module-service';
import TestModuleAuthService from '@/authservice/test-module/test-module-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import TestModuleUIService from '@/uiservice/test-module/test-module-ui-service';

/**
 * 测试模块树导航视图视图基类
 *
 * @export
 * @class TestModuleTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class TestModuleTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestModuleTreeExpViewBase
     */
    protected appDeName: string = 'testmodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestModuleTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestModuleTreeExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TestModuleService}
     * @memberof TestModuleTreeExpViewBase
     */
    protected appEntityService: TestModuleService = new TestModuleService;

    /**
     * 实体权限服务对象
     *
     * @type TestModuleUIService
     * @memberof TestModuleTreeExpViewBase
     */
    public appUIService: TestModuleUIService = new TestModuleUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestModuleTreeExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestModuleTreeExpViewBase
	 */
    protected customViewNavContexts: any = {
        'MODULETYPE': { isRawValue: true, value: 'story' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestModuleTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testmodule.views.treeexpview.caption',
        srfTitle: 'entities.testmodule.views.treeexpview.title',
        srfSubTitle: 'entities.testmodule.views.treeexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestModuleTreeExpViewBase
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
	protected viewtag: string = 'a4c56767e9b34cd619d79b676fa2ccd9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestModuleTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestModuleTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'testmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestModuleTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestModuleTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestModuleTreeExpViewBase
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
     * @memberof TestModuleTreeExpView
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
     * @memberof TestModuleTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof TestModuleTreeExpView
     */
    public viewUID: string = 'ibiz-test-module-tree-exp-view';


}