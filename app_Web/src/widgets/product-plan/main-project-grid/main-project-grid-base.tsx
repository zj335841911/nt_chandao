import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import MainProjectService from './main-project-grid-service';
import ProductPlanUIService from '@/uiservice/product-plan/product-plan-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainProjectGridBase}
 */
export class MainProjectGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainProjectGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainProjectService}
     * @memberof MainProjectGridBase
     */
    public service: MainProjectService = new MainProjectService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductPlanService}
     * @memberof MainProjectGridBase
     */
    public appEntityService: ProductPlanService = new ProductPlanService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainProjectGridBase
     */
    protected appDeName: string = 'productplan';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainProjectGridBase
     */
    protected appDeLogicName: string = '产品计划';

    /**
     * 界面UI服务对象
     *
     * @type {ProductPlanUIService}
     * @memberof MainProjectBase
     */  
    public appUIService:ProductPlanUIService = new ProductPlanUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainProjectBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainProjectBase
     */
    protected localStorageTag: string = 'zt_productplan_mainproject_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MainProjectGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof MainProjectGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainProjectGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainProjectGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MainProjectGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainProjectGridBase
     */
    public allColumns: any[] = [
        {
            name: 'title',
            label: '名称',
            langtag: 'entities.productplan.mainproject_grid.columns.title',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainProjectGridBase
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
     * @memberof MainProjectGridBase
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
     * @memberof MainProjectBase
     */
    public hasRowEdit: any = {
        'title':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainProjectBase
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
     * @memberof MainProjectGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }

}