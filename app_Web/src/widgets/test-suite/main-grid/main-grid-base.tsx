import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import TestSuiteService from '@/service/test-suite/test-suite-service';
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
     * @type {TestSuiteService}
     * @memberof MainGridBase
     */
    public appEntityService: TestSuiteService = new TestSuiteService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'testsuite';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_testsuite_main_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: '编号',
            langtag: 'entities.testsuite.main_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.testsuite.main_grid.columns.name',
            show: true,
            util: 'PX'
        },
        {
            name: 'desc',
            label: '描述',
            langtag: 'entities.testsuite.main_grid.columns.desc',
            show: true,
            util: 'STAR'
        },
        {
            name: 'addedby',
            label: '由谁创建',
            langtag: 'entities.testsuite.main_grid.columns.addedby',
            show: true,
            util: 'PX'
        },
        {
            name: 'addeddate',
            label: '创建时间',
            langtag: 'entities.testsuite.main_grid.columns.addeddate',
            show: true,
            util: 'PX'
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.testsuite.main_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX'
        },
    ]

}