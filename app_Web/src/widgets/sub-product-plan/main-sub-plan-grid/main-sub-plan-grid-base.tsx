import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import SubProductPlanService from '@/service/sub-product-plan/sub-product-plan-service';
import MainSubPlanService from './main-sub-plan-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {MainSubPlanGridBase}
 */
export class MainSubPlanGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainSubPlanService}
     * @memberof MainSubPlanGridBase
     */
    public service: MainSubPlanService = new MainSubPlanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SubProductPlanService}
     * @memberof MainSubPlanGridBase
     */
    public appEntityService: SubProductPlanService = new SubProductPlanService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainSubPlanGridBase
     */
    protected appDeName: string = 'subproductplan';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'ibz_subproductplan_mainsubplan_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainSubPlanGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: '编号',
            langtag: 'entities.subproductplan.mainsubplan_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: '名称',
            langtag: 'entities.subproductplan.mainsubplan_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'begin',
            label: '开始日期',
            langtag: 'entities.subproductplan.mainsubplan_grid.columns.begin',
            show: true,
            util: 'PX'
        },
        {
            name: 'end',
            label: '结束日期',
            langtag: 'entities.subproductplan.mainsubplan_grid.columns.end',
            show: true,
            util: 'PX'
        },
    ]

}