import { Subject } from 'rxjs';
import { EditView9Base } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import EditView9Engine from '@engine/view/edit-view9-engine';

/**
 * 测试版本编辑视图视图基类
 *
 * @export
 * @class TestTaskEditView9_InfoBase
 * @extends {EditView9Base}
 */
export class TestTaskEditView9_InfoBase extends EditView9Base {

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof TestTaskEditView9_InfoBase
     */
    protected appEntityService: TestTaskService = new TestTaskService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestTaskEditView9_InfoBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestTaskEditView9_InfoBase
     */
    protected model: any = {
        srfCaption: 'entities.testtask.views.editview9_info.caption',
        srfTitle: 'entities.testtask.views.editview9_info.title',
        srfSubTitle: 'entities.testtask.views.editview9_info.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestTaskEditView9_InfoBase
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
	protected viewtag: string = '706ea523d286cec9ae0c2509f20daa8e';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestTaskEditView9_InfoBase
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestTaskEditView9_InfoBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'testtask',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestTaskEditView9_InfoBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestTaskEditView9_InfoBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestTaskEditView9_InfoBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof TestTaskEditView9_InfoBase
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