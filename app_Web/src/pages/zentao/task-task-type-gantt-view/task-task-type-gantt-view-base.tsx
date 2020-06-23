import { Subject } from 'rxjs';
import { GanttViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';

/**
 * 任务甘特视图视图基类
 *
 * @export
 * @class TaskTaskTypeGanttViewBase
 * @extends {GanttViewBase}
 */
export class TaskTaskTypeGanttViewBase extends GanttViewBase {

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskTaskTypeGanttViewBase
     */
    protected appEntityService: TaskService = new TaskService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TaskTaskTypeGanttViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskTaskTypeGanttViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.tasktypeganttview.caption',
        srfTitle: 'entities.task.views.tasktypeganttview.title',
        srfSubTitle: 'entities.task.views.tasktypeganttview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskTaskTypeGanttViewBase
     */
    protected containerModel: any = {
        view_gantt: { name: 'gantt', type: 'GANTT' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '5ef23f01b2cffa48351b3272dfeeaf14';


    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskTaskTypeGanttViewBase
     */
    public engineInit(): void {
    }


}