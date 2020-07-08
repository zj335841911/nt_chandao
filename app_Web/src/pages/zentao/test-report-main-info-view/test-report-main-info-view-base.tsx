import { Subject } from 'rxjs';
import { EditViewBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import EditViewEngine from '@engine/view/edit-view-engine';

/**
 * 测试报告编辑视图视图基类
 *
 * @export
 * @class TestReportMainInfoViewBase
 * @extends {EditViewBase}
 */
export class TestReportMainInfoViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestReportMainInfoViewBase
     */
    protected appDeName: string = 'testreport';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestReportMainInfoViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestReportMainInfoViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof TestReportMainInfoViewBase
     */
    protected appEntityService: TestReportService = new TestReportService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestReportMainInfoViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestReportMainInfoViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testreport.views.maininfoview.caption',
        srfTitle: 'entities.testreport.views.maininfoview.title',
        srfSubTitle: 'entities.testreport.views.maininfoview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestReportMainInfoViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '3d56b0e37a56b9be1a28589c04f573fa';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestReportMainInfoViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestReportMainInfoViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'testreport',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportMainInfoViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportMainInfoViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportMainInfoViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}