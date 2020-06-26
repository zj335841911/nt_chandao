import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import Main2Service from './main2-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main2GridBase}
 */
export class Main2GridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {Main2Service}
     * @memberof Main2GridBase
     */
    public service: Main2Service = new Main2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof Main2GridBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main2GridBase
     */
    protected appDeName: string = 'bug';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_bug_main2_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main2GridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main2GridBase
     */
    public minorSortDir: string = '';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main2GridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.bug.main2_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: '级别',
            langtag: 'entities.bug.main2_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: 'Bug标题',
            langtag: 'entities.bug.main2_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.bug.main2_grid.columns.status',
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
     * @memberof Main2GridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }
}