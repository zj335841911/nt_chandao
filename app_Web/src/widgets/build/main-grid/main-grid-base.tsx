import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
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
     * @type {BuildService}
     * @memberof MainGridBase
     */
    public appEntityService: BuildService = new BuildService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'build';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_build_main_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.build.main_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'productname',
            label: '产品名称',
            langtag: 'entities.build.main_grid.columns.productname',
            show: true,
            util: 'PX'
        },
        {
            name: 'name',
            label: '名称编号',
            langtag: 'entities.build.main_grid.columns.name',
            show: true,
            util: 'STAR'
        },
        {
            name: 'scmpath',
            label: '源代码地址',
            langtag: 'entities.build.main_grid.columns.scmpath',
            show: true,
            util: 'PX'
        },
        {
            name: 'filepath',
            label: '下载地址',
            langtag: 'entities.build.main_grid.columns.filepath',
            show: true,
            util: 'PX'
        },
        {
            name: 'date',
            label: '打包日期',
            langtag: 'entities.build.main_grid.columns.date',
            show: true,
            util: 'PX'
        },
        {
            name: 'builder',
            label: '构建者',
            langtag: 'entities.build.main_grid.columns.builder',
            show: true,
            util: 'PX'
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.build.main_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX'
        },
    ]

}