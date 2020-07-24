import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import SubProductPlanService from '@/service/sub-product-plan/sub-product-plan-service';
import MainSubPlanService from './main-sub-plan-grid-service';
import SubProductPlanUIService from '@/uiservice/sub-product-plan/sub-product-plan-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainSubPlanGridBase}
 */
export class MainSubPlanGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainSubPlanGridBase
     */
    protected controlType: string = 'GRID';

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
     * 界面UI服务对象
     *
     * @type {SubProductPlanUIService}
     * @memberof MainSubPlanBase
     */  
    public appUIService:SubProductPlanUIService = new SubProductPlanUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainSubPlanBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainSubPlanBase
     */
    protected localStorageTag: string = 'ibz_subproductplan_mainsubplan_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainSubPlanGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainSubPlanGridBase
     */
    public minorSortPSDEF: string = 'id';

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
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'title',
            label: '名称',
            langtag: 'entities.subproductplan.mainsubplan_grid.columns.title',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'begin',
            label: '开始日期',
            langtag: 'entities.subproductplan.mainsubplan_grid.columns.begin',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'end',
            label: '结束日期',
            langtag: 'entities.subproductplan.mainsubplan_grid.columns.end',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainSubPlanGridBase
     */
    public getGridRowModel(){
        return {
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainSubPlanGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainSubPlanBase
     */
    public hasRowEdit: any = {
        'id':false,
        'title':false,
        'begin':false,
        'end':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainSubPlanBase
     */
    public getCellClassName(args: {row: any, column: any, rowIndex: number, columnIndex: number}): any {
        return ( this.hasRowEdit[args.column.property] && this.actualIsOpenEdit ) ? "edit-cell" : "info-cell";
    }


    /**
     * 导出数据格式化
     *
     * @param {*} filterVal
     * @param {*} jsonData
     * @param {any[]} [codelistColumns=[]]
     * @returns {Promise<any>}
     * @memberof MainSubPlanGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }

}