import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import ProductStatsService from '@/service/product-stats/product-stats-service';
import ALLProductService from './allproduct-grid-service';
import ProductStatsUIService from '@/uiservice/product-stats/product-stats-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {ALLProductGridBase}
 */
export class ALLProductGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ALLProductGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {ALLProductService}
     * @memberof ALLProductGridBase
     */
    public service: ALLProductService = new ALLProductService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof ALLProductGridBase
     */
    public appEntityService: ProductStatsService = new ProductStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ALLProductGridBase
     */
    protected appDeName: string = 'productstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ALLProductGridBase
     */
    protected appDeLogicName: string = '产品统计';

    /**
     * 界面UI服务对象
     *
     * @type {ProductStatsUIService}
     * @memberof ALLProductBase
     */  
    public appUIService:ProductStatsUIService = new ProductStatsUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof ALLProductBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof ALLProductBase
     */
    protected localStorageTag: string = 'ibz_productstats_allproduct_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof ALLProductGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof ALLProductGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof ALLProductGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '产品名称',
            langtag: 'entities.productstats.allproduct_grid.columns.name',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'currproject',
            label: '当前项目',
            langtag: 'entities.productstats.allproduct_grid.columns.currproject',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'productplancnt',
            label: '计划数',
            langtag: 'entities.productstats.allproduct_grid.columns.productplancnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'releasecnt',
            label: '发布数',
            langtag: 'entities.productstats.allproduct_grid.columns.releasecnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'activestorycnt',
            label: '激活需求',
            langtag: 'entities.productstats.allproduct_grid.columns.activestorycnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'activebugcnt',
            label: '未解决Bug',
            langtag: 'entities.productstats.allproduct_grid.columns.activebugcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof ALLProductGridBase
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
     * @memberof ALLProductGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '产品编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '产品编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof ALLProductBase
     */
    public hasRowEdit: any = {
        'name':false,
        'currproject':false,
        'productplancnt':false,
        'releasecnt':false,
        'activestorycnt':false,
        'activebugcnt':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof ALLProductBase
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
     * @memberof ALLProductGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }



}