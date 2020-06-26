import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import ModuleService from '@/service/module/module-service';
import MainService from './main-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {MainGridBase}
 */
export class MainGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainGridBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ModuleService}
     * @memberof MainGridBase
     */
    public appEntityService: ModuleService = new ModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'module';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_module_main_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainGridBase
     */
    public minorSortDir: string = '';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '模块名称',
            langtag: 'entities.module.main_grid.columns.name',
            show: true,
            util: 'PX'
        },
        {
            name: 'parentname',
            label: '上级模块',
            langtag: 'entities.module.main_grid.columns.parentname',
            show: true,
            util: 'PX'
        },
        {
            name: 'grade',
            label: '级别',
            langtag: 'entities.module.main_grid.columns.grade',
            show: true,
            util: 'PX'
        },
        {
            name: 'order',
            label: '排序',
            langtag: 'entities.module.main_grid.columns.order',
            show: true,
            util: 'PX'
        },
        {
            name: 'owner',
            label: '负责人',
            langtag: 'entities.module.main_grid.columns.owner',
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
     * @memberof MainGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }
}