import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import CaseStepService from '@/service/case-step/case-step-service';
import Main_RowEditService from './main-row-edit-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main_RowEditGridBase}
 */
export class Main_RowEditGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {Main_RowEditService}
     * @memberof Main_RowEditGridBase
     */
    public service: Main_RowEditService = new Main_RowEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseStepService}
     * @memberof Main_RowEditGridBase
     */
    public appEntityService: CaseStepService = new CaseStepService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_RowEditGridBase
     */
    protected appDeName: string = 'casestep';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_casestep_main_rowedit_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main_RowEditGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main_RowEditGridBase
     */
    public minorSortDir: string = '';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main_RowEditGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_RowEditGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: '编号',
            langtag: 'entities.casestep.main_rowedit_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'desc',
            label: '步骤',
            langtag: 'entities.casestep.main_rowedit_grid.columns.desc',
            show: true,
            util: 'PX'
        },
        {
            name: 'type',
            label: '类型',
            langtag: 'entities.casestep.main_rowedit_grid.columns.type',
            show: true,
            util: 'PX'
        },
        {
            name: 'expect',
            label: '预期',
            langtag: 'entities.casestep.main_rowedit_grid.columns.expect',
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
     * @memberof Main_RowEditGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }

    /**
     * 表格编辑项值变化
     *
     * @public
     * @param row 行数据
     * @param property 列编辑项名
     * @param row 列编辑项值
     * @returns {void}
     * @memberof Main_RowEditGridBase
     */
    public gridEditItemChange(row: any, property: string, value: any, rowIndex: number): void {
        super.gridEditItemChange(row, property, value, rowIndex);
    }
}