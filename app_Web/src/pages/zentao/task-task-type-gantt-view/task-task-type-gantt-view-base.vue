<template>
<studio-view viewName="tasktasktypeganttview" viewTitle="任务甘特视图" class='deganttview task-task-type-gantt-view'>
    <view_gantt 
                    :viewState="viewState"  
                    :viewparams="viewparams" 
                    :context="context" 
                    :showBusyIndicator="true"
                    name="gantt"  
                    ref='gantt' 
                    @closeview="closeView($event)">
                </view_gantt>
</studio-view>
</template>

<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, GanttViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';



/**
 * 任务甘特视图视图基类
 *
 * @export
 * @class TaskTaskTypeGanttViewBase
 * @extends {GanttViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class TaskTaskTypeGanttViewBase extends GanttViewBase {

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
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskTaskTypeGanttViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskTaskTypeGanttViewBase
	 */
    protected customViewParams: any = {
    };

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
     * 引擎初始化
     *
     * @public
     * @memberof TaskTaskTypeGanttViewBase
     */
    public engineInit(): void {
    }


}
</script>

<style lang='less'>
@import './task-task-type-gantt-view.less';
</style>