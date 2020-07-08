import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';

/**
 * 测试报告分页导航视图视图基类
 *
 * @export
 * @class TestReportMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class TestReportMainTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestReportMainTabExpViewBase
     */
    protected appDeName: string = 'testreport';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestReportMainTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestReportMainTabExpViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof TestReportMainTabExpViewBase
     */
    protected appEntityService: TestReportService = new TestReportService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestReportMainTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestReportMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testreport.views.maintabexpview.caption',
        srfTitle: 'entities.testreport.views.maintabexpview.title',
        srfSubTitle: 'entities.testreport.views.maintabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestReportMainTabExpViewBase
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
	protected viewtag: string = 'ea7a4f0ccc237a45f39ffb2e3df7e9fd';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestReportMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestReportMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'testreport',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }


}