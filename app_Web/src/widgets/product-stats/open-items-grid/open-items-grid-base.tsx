import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import ProductStatsService from '@/service/product-stats/product-stats-service';
import OpenItemsService from './open-items-grid-service';
import ProductStatsUIService from '@/uiservice/product-stats/product-stats-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {OpenItemsGridBase}
 */
export class OpenItemsGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof OpenItemsGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {OpenItemsService}
     * @memberof OpenItemsGridBase
     */
    public service: OpenItemsService = new OpenItemsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof OpenItemsGridBase
     */
    public appEntityService: ProductStatsService = new ProductStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof OpenItemsGridBase
     */
    protected appDeName: string = 'productstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof OpenItemsGridBase
     */
    protected appDeLogicName: string = '产品统计';

    /**
     * 界面UI服务对象
     *
     * @type {ProductStatsUIService}
     * @memberof OpenItemsBase
     */  
    public appUIService:ProductStatsUIService = new ProductStatsUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof OpenItemsBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof OpenItemsBase
     */  
    public majorInfoColName:string = "name";


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof OpenItemsBase
     */
    protected localStorageTag: string = 'ibz_productstats_openitems_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof OpenItemsGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof OpenItemsGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof OpenItemsGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof OpenItemsGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof OpenItemsGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '产品名称',
            langtag: 'entities.productstats.openitems_grid.columns.name',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'currproject',
            label: '当前项目',
            langtag: 'entities.productstats.openitems_grid.columns.currproject',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'productplancnt',
            label: '计划数',
            langtag: 'entities.productstats.openitems_grid.columns.productplancnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'releasecnt',
            label: '发布数',
            langtag: 'entities.productstats.openitems_grid.columns.releasecnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'activestorycnt',
            label: '激活需求',
            langtag: 'entities.productstats.openitems_grid.columns.activestorycnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'activebugcnt',
            label: '未解决Bug',
            langtag: 'entities.productstats.openitems_grid.columns.activebugcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof OpenItemsGridBase
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
     * @memberof OpenItemsGridBase
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
     * @memberof OpenItemsBase
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
     * @memberof OpenItemsBase
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
     * @memberof OpenItemsGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }


    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof OpenItemsBase
     */
    public updateDefault(row: any){                    
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof OpenItemsBase
     */
    public computeDefaultValueWithParam(action:string,param:string,data:any){
        if(Object.is(action,"UPDATE")){
            const nativeData:any = this.service.getCopynativeData();
            if(nativeData && (nativeData instanceof Array) && nativeData.length >0){
                let targetData:any = nativeData.find((item:any) =>{
                    return item.id === data.srfkey;
                })
                if(targetData){
                    return targetData[param]?targetData[param]:null;
                }else{
                    return null;
                }
            }else{
                return null;
            }
        }else{
           return this.service.getRemoteCopyData()[param]?this.service.getRemoteCopyData()[param]:null;
        }
    }


}