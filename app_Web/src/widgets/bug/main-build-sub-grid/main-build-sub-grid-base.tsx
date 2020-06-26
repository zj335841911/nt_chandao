import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import Main_BuildSubService from './main-build-sub-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main_BuildSubGridBase}
 */
export class Main_BuildSubGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {Main_BuildSubService}
     * @memberof Main_BuildSubGridBase
     */
    public service: Main_BuildSubService = new Main_BuildSubService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof Main_BuildSubGridBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    protected appDeName: string = 'bug';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_bug_main_buildsub_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    public minorSortDir: string = '';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_BuildSubGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.bug.main_buildsub_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.bug.main_buildsub_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: 'Bug标题',
            langtag: 'entities.bug.main_buildsub_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'status',
            label: 'Bug状态',
            langtag: 'entities.bug.main_buildsub_grid.columns.status',
            show: true,
            util: 'PX'
        },
        {
            name: 'openedby',
            label: '由谁创建',
            langtag: 'entities.bug.main_buildsub_grid.columns.openedby',
            show: true,
            util: 'PX'
        },
        {
            name: 'openeddate',
            label: '创建日期',
            langtag: 'entities.bug.main_buildsub_grid.columns.openeddate',
            show: true,
            util: 'PX'
        },
        {
            name: 'assignedto',
            label: '指派给',
            langtag: 'entities.bug.main_buildsub_grid.columns.assignedto',
            show: true,
            util: 'PX'
        },
    ]


    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof Main_BuildSubGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }
}