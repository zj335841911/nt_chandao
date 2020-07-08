import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';

/**
 * 测试版本分页导航视图视图基类
 *
 * @export
 * @class TestTaskMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class TestTaskMainTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected appDeName: string = 'testtask';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected appEntityService: TestTaskService = new TestTaskService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestTaskMainTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testtask.views.maintabexpview.caption',
        srfTitle: 'entities.testtask.views.maintabexpview.title',
        srfSubTitle: 'entities.testtask.views.maintabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '5273dc442a49b8c4d37ba9ff008531e7';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestTaskMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestTaskMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'testtask',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}