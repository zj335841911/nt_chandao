import { Subject } from 'rxjs';
import { EditViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务编辑视图（工时）视图基类
 *
 * @export
 * @class TaskWHEditViewBase
 * @extends {EditViewBase}
 */
export class TaskWHEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskWHEditViewBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskWHEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskWHEditViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskWHEditViewBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskWHEditViewBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TaskWHEditViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskWHEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.wheditview.caption',
        srfTitle: 'entities.task.views.wheditview.title',
        srfSubTitle: 'entities.task.views.wheditview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskWHEditViewBase
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
	protected viewtag: string = '7f425ca5154c34294ce6c0817d6cb875';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskWHEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskWHEditViewBase
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
     * @memberof TaskWHEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskWHEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskWHEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}