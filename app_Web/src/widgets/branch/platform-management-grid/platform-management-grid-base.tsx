import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import BranchService from '@/service/branch/branch-service';
import PlatformManagementService from './platform-management-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {PlatformManagementGridBase}
 */
export class PlatformManagementGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {PlatformManagementService}
     * @memberof PlatformManagementGridBase
     */
    public service: PlatformManagementService = new PlatformManagementService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BranchService}
     * @memberof PlatformManagementGridBase
     */
    public appEntityService: BranchService = new BranchService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof PlatformManagementGridBase
     */
    protected appDeName: string = 'branch';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_branch_platformmanagement_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PlatformManagementGridBase
     */
    public minorSortDir: string = '';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof PlatformManagementGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: '编号',
            langtag: 'entities.branch.platformmanagement_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.branch.platformmanagement_grid.columns.name',
            show: true,
            util: 'PX'
        },
        {
            name: 'order',
            label: '排序',
            langtag: 'entities.branch.platformmanagement_grid.columns.order',
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
     * @memberof PlatformManagementGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }
}