import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditView9Base } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务编辑视图视图基类
 *
 * @export
 * @class TaskMainInfoView9Base
 * @extends {EditView9Base}
 */
export class TaskMainInfoView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskMainInfoView9Base
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskMainInfoView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskMainInfoView9Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskMainInfoView9Base
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskMainInfoView9Base
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskMainInfoView9Base
     */
    protected model: any = {
        srfCaption: 'entities.task.views.maininfoview9.caption',
        srfTitle: 'entities.task.views.maininfoview9.title',
        srfSubTitle: 'entities.task.views.maininfoview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskMainInfoView9Base
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
	protected viewtag: string = '321ab2e4e87a29fef8eed086e951a006';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskMainInfoView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskMainInfoView9Base
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskMainInfoView9Base
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
     * @memberof TaskMainInfoView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskMainInfoView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskMainInfoView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof TaskMainInfoView9Base
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