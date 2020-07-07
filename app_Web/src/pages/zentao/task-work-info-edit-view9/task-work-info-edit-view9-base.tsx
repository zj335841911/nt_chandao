import { Subject } from 'rxjs';
import { EditView9Base } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import EditView9Engine from '@engine/view/edit-view9-engine';

/**
 * 工时信息视图基类
 *
 * @export
 * @class TaskWorkInfoEditView9Base
 * @extends {EditView9Base}
 */
export class TaskWorkInfoEditView9Base extends EditView9Base {

    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskWorkInfoEditView9Base
     */
    protected appDeName: string = 'task';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskWorkInfoEditView9Base
     */
    protected appEntityService: TaskService = new TaskService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TaskWorkInfoEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskWorkInfoEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.task.views.workinfoeditview9.caption',
        srfTitle: 'entities.task.views.workinfoeditview9.title',
        srfSubTitle: 'entities.task.views.workinfoeditview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskWorkInfoEditView9Base
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
	protected viewtag: string = '8ca35f54383cecb05da77cdb1a6588fd';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskWorkInfoEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskWorkInfoEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskWorkInfoEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskWorkInfoEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskWorkInfoEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof TaskWorkInfoEditView9Base
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