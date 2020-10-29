import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import BugStatsService from '@/service/bug-stats/bug-stats-service';
import BugassignedToService from './bugassigned-to-grid-service';
import BugStatsUIService from '@/uiservice/bug-stats/bug-stats-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {BugassignedToGridBase}
 */
export class BugassignedToGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof BugassignedToGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {BugassignedToService}
     * @memberof BugassignedToGridBase
     */
    public service: BugassignedToService = new BugassignedToService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugStatsService}
     * @memberof BugassignedToGridBase
     */
    public appEntityService: BugStatsService = new BugStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugassignedToGridBase
     */
    protected appDeName: string = 'bugstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof BugassignedToGridBase
     */
    protected appDeLogicName: string = 'Bug统计';

    /**
     * 界面UI服务对象
     *
     * @type {BugStatsUIService}
     * @memberof BugassignedToBase
     */  
    public appUIService:BugStatsUIService = new BugStatsUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof BugassignedToBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof BugassignedToBase
     */  
    public majorInfoColName:string = "";

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof BugassignedToBase
     */
    protected localStorageTag: string = 'ibz_bugstats_bugassignedto_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof BugassignedToGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof BugassignedToGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof BugassignedToGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof BugassignedToGridBase
     */
    public allColumns: any[] = [
        {
            name: 'assignedto',
            label: '姓名',
            langtag: 'entities.bugstats.bugassignedto_grid.columns.assignedto',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'productname',
            label: '产品',
            langtag: 'entities.bugstats.bugassignedto_grid.columns.productname',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'bugcnt',
            label: 'Bug',
            langtag: 'entities.bugstats.bugassignedto_grid.columns.bugcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'bugtotal',
            label: '总计',
            langtag: 'entities.bugstats.bugassignedto_grid.columns.bugtotal',
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
     * @memberof BugassignedToGridBase
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
     * @memberof BugassignedToGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '标识 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '标识 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof BugassignedToBase
     */
    public hasRowEdit: any = {
        'assignedto':false,
        'productname':false,
        'bugcnt':false,
        'bugtotal':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof BugassignedToBase
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
     * @memberof BugassignedToGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        // assignedto
            {
                name: 'assignedto',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        // productname
        // bugcnt
        // bugtotal
        ]);
    }


    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof BugassignedToBase
     */
    public updateDefault(row: any){                    
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof BugassignedToBase
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