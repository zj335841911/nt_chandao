import { Subject } from 'rxjs';
import { EditView9Base } from '@/studio-core';
import TestRunService from '@/service/test-run/test-run-service';
import TestRunAuthService from '@/authservice/test-run/test-run-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import TestRunUIService from '@/uiservice/test-run/test-run-ui-service';

/**
 * 测试运行编辑视图视图基类
 *
 * @export
 * @class TestRunEditView9Base
 * @extends {EditView9Base}
 */
export class TestRunEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestRunEditView9Base
     */
    protected appDeName: string = 'testrun';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestRunEditView9Base
     */
    protected appDeKey: string = 'id';
// 应用实体「TestRun」未设置主文本属性

    /**
     * 实体服务对象
     *
     * @type {TestRunService}
     * @memberof TestRunEditView9Base
     */
    protected appEntityService: TestRunService = new TestRunService;

    /**
     * 实体权限服务对象
     *
     * @type TestRunUIService
     * @memberof TestRunEditView9Base
     */
    public appUIService: TestRunUIService = new TestRunUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestRunEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestRunEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.testrun.views.editview9.caption',
        srfTitle: 'entities.testrun.views.editview9.title',
        srfSubTitle: 'entities.testrun.views.editview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestRunEditView9Base
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
	protected viewtag: string = 'd1078175fef9a3fd5dab94f9fbd0c2b3';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestRunEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestRunEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'testrun',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestRunEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestRunEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestRunEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof TestRunEditView9Base
     */
    protected viewMounted(): void {
        if (this.panelState) {
            this.panelState.subscribe((res:any) => {
                if (Object.is(res.tag,'meditviewpanel')) {
                    if (Object.is(res.action,'save')) {
                        this.viewState.next({ tag:'form', action: 'save', data:res.data});
                    }
                    if (Object.is(res.action,'remove')) {
                        this.viewState.next({ tag:'form', action: 'remove', data:res.data});
                    }
                }
            });
        }
    }


}