import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import Main_ReportSubService from './main-report-sub-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main_ReportSubGridBase}
 */
export class Main_ReportSubGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {Main_ReportSubService}
     * @memberof Main_ReportSubGridBase
     */
    public service: Main_ReportSubService = new Main_ReportSubService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof Main_ReportSubGridBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_ReportSubGridBase
     */
    protected appDeName: string = 'bug';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_bug_main_reportsub_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main_ReportSubGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main_ReportSubGridBase
     */
    public minorSortDir: string = '';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main_ReportSubGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_ReportSubGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.bug.main_reportsub_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.bug.main_reportsub_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: 'Bug标题',
            langtag: 'entities.bug.main_reportsub_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.bug.main_reportsub_grid.columns.openedby',
            show: true,
            util: 'PX'
        },
        {
            name: 'resolvedby',
            label: '解决者',
            langtag: 'entities.bug.main_reportsub_grid.columns.resolvedby',
            show: true,
            util: 'PX'
        },
        {
            name: 'resolveddate',
            label: '解决日期',
            langtag: 'entities.bug.main_reportsub_grid.columns.resolveddate',
            show: true,
            util: 'PX'
        },
        {
            name: 'status',
            label: 'Bug状态',
            langtag: 'entities.bug.main_reportsub_grid.columns.status',
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
     * @memberof Main_ReportSubGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }
}