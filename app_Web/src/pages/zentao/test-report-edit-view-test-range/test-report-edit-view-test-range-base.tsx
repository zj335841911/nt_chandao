import { Subject } from 'rxjs';
import { EditViewBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import EditViewEngine from '@engine/view/edit-view-engine';

/**
 * 测试报告编辑视图视图基类
 *
 * @export
 * @class TestReportEditView_TestRangeBase
 * @extends {EditViewBase}
 */
export class TestReportEditView_TestRangeBase extends EditViewBase {

    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestReportEditView_TestRangeBase
     */
    protected appDeName: string = 'testreport';

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof TestReportEditView_TestRangeBase
     */
    protected appEntityService: TestReportService = new TestReportService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestReportEditView_TestRangeBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestReportEditView_TestRangeBase
     */
    protected model: any = {
        srfCaption: 'entities.testreport.views.editview_testrange.caption',
        srfTitle: 'entities.testreport.views.editview_testrange.title',
        srfSubTitle: 'entities.testreport.views.editview_testrange.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestReportEditView_TestRangeBase
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
	protected viewtag: string = 'f810cda19770327ea00f51d89a003efe';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestReportEditView_TestRangeBase
     */
    public engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestReportEditView_TestRangeBase
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
     * @memberof TestReportEditView_TestRangeBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportEditView_TestRangeBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportEditView_TestRangeBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}