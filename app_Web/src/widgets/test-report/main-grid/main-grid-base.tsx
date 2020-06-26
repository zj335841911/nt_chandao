import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
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
     * @type {TestReportService}
     * @memberof MainGridBase
     */
    public appEntityService: TestReportService = new TestReportService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'testreport';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_testreport_main_grid';

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
            langtag: 'entities.testreport.main_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: '标题',
            langtag: 'entities.testreport.main_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'createdby',
            label: '创建',
            langtag: 'entities.testreport.main_grid.columns.createdby',
            show: true,
            util: 'PX'
        },
        {
            name: 'createddate',
            label: '创建时间',
            langtag: 'entities.testreport.main_grid.columns.createddate',
            show: true,
            util: 'PX'
        },
        {
            name: 'projectname',
            label: '所属项目',
            langtag: 'entities.testreport.main_grid.columns.projectname',
            show: true,
            util: 'PX'
        },
        {
            name: 'tasks',
            label: '测试版本',
            langtag: 'entities.testreport.main_grid.columns.tasks',
            show: true,
            util: 'PX'
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.testreport.main_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX'
        },
    ]

}