import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import SubTaskService from '@/service/sub-task/sub-task-service';
import SubTaskNewService from './sub-task-new-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {SubTaskNewGridBase}
 */
export class SubTaskNewGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {SubTaskNewService}
     * @memberof SubTaskNewGridBase
     */
    public service: SubTaskNewService = new SubTaskNewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SubTaskService}
     * @memberof SubTaskNewGridBase
     */
    public appEntityService: SubTaskService = new SubTaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    protected appDeName: string = 'subtask';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'ibz_subtask_subtasknew_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof SubTaskNewGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof SubTaskNewGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof SubTaskNewGridBase
     */
    public allColumns: any[] = [
        {
            name: 'modulename',
            label: '所属模块',
            langtag: 'entities.subtask.subtasknew_grid.columns.modulename',
            show: true,
            util: 'PX'
        },
        {
            name: 'storyname',
            label: '相关需求',
            langtag: 'entities.subtask.subtasknew_grid.columns.storyname',
            show: true,
            util: 'PX'
        },
        {
            name: 'name',
            label: '任务名称',
            langtag: 'entities.subtask.subtasknew_grid.columns.name',
            show: true,
            util: 'STAR'
        },
        {
            name: 'type',
            label: '任务类型',
            langtag: 'entities.subtask.subtasknew_grid.columns.type',
            show: true,
            util: 'PX'
        },
        {
            name: 'assignedto',
            label: '指派给',
            langtag: 'entities.subtask.subtasknew_grid.columns.assignedto',
            show: true,
            util: 'PX'
        },
        {
            name: 'left',
            label: '预计',
            langtag: 'entities.subtask.subtasknew_grid.columns.left',
            show: true,
            util: 'PX'
        },
        {
            name: 'desc',
            label: '任务描述',
            langtag: 'entities.subtask.subtasknew_grid.columns.desc',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: '优先级',
            langtag: 'entities.subtask.subtasknew_grid.columns.pri',
            show: true,
            util: 'PX'
        },
    ]

}