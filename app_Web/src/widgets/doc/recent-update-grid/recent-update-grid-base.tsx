import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import DocService from '@/service/doc/doc-service';
import RecentUpdateService from './recent-update-grid-service';
import DocUIService from '@/uiservice/doc/doc-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {RecentUpdateGridBase}
 */
export class RecentUpdateGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof RecentUpdateGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {RecentUpdateService}
     * @memberof RecentUpdateGridBase
     */
    public service: RecentUpdateService = new RecentUpdateService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocService}
     * @memberof RecentUpdateGridBase
     */
    public appEntityService: DocService = new DocService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof RecentUpdateGridBase
     */
    protected appDeName: string = 'doc';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof RecentUpdateGridBase
     */
    protected appDeLogicName: string = '文档';

    /**
     * 界面UI服务对象
     *
     * @type {DocUIService}
     * @memberof RecentUpdateBase
     */  
    public appUIService:DocUIService = new DocUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof RecentUpdateBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof RecentUpdateBase
     */  
    public majorInfoColName:string = "title";


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof RecentUpdateBase
     */
    protected localStorageTag: string = 'zt_doc_recentupdate_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof RecentUpdateGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof RecentUpdateGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof RecentUpdateGridBase
     */
    public minorSortPSDEF: string = 'editeddate';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof RecentUpdateGridBase
     */
    public limit: number = 10;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof RecentUpdateGridBase
     */
    public allColumns: any[] = [
        {
            name: 'title',
            label: '文档标题',
            langtag: 'entities.doc.recentupdate_grid.columns.title',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'addedby',
            label: '由谁添加',
            langtag: 'entities.doc.recentupdate_grid.columns.addedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'editeddate',
            label: '更新时间',
            langtag: 'entities.doc.recentupdate_grid.columns.editeddate',
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
     * @memberof RecentUpdateGridBase
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
     * @memberof RecentUpdateGridBase
     */
    public rules() {
        return {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '文档编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '文档编号 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof RecentUpdateBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof RecentUpdateBase
     */
    public hasRowEdit: any = {
        'title':false,
        'addedby':false,
        'editeddate':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof RecentUpdateBase
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
     * @memberof RecentUpdateGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }


    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof RecentUpdateBase
     */
    public updateDefault(row: any){                    
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof RecentUpdateBase
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