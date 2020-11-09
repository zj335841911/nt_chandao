import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import SysUpdateLogService from '@/service/sys-update-log/sys-update-log-service';
import LookMainService from './look-main-grid-service';
import SysUpdateLogUIService from '@/uiservice/sys-update-log/sys-update-log-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {LookMainGridBase}
 */
export class LookMainGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof LookMainGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {LookMainService}
     * @memberof LookMainGridBase
     */
    public service: LookMainService = new LookMainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SysUpdateLogService}
     * @memberof LookMainGridBase
     */
    public appEntityService: SysUpdateLogService = new SysUpdateLogService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof LookMainGridBase
     */
    protected appDeName: string = 'sysupdatelog';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof LookMainGridBase
     */
    protected appDeLogicName: string = '系统更新日志';

    /**
     * 界面UI服务对象
     *
     * @type {SysUpdateLogUIService}
     * @memberof LookMainBase
     */  
    public appUIService:SysUpdateLogUIService = new SysUpdateLogUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_sys_update_logname_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:SysUpdateLogUIService  = new SysUpdateLogUIService();
        curUIService.SysUpdateLog_LookDetail(datas,contextJO, paramJO,  $event, xData,this,"SysUpdateLog");
    }


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof LookMainBase
     */  
    public ActionModel: any = {
        LookDetail: { name: 'LookDetail',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: '', actiontarget: 'SINGLEKEY'}
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof LookMainBase
     */  
    public majorInfoColName:string = "sys_update_logname";


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof LookMainBase
     */
    protected localStorageTag: string = 'sys_update_log_lookmain_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof LookMainGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof LookMainGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof LookMainGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof LookMainGridBase
     */
    public minorSortPSDEF: string = 'update';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof LookMainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'sys_update_logname',
            label: '更新名称',
            langtag: 'entities.sysupdatelog.lookmain_grid.columns.sys_update_logname',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'update',
            label: '更新日期',
            langtag: 'entities.sysupdatelog.lookmain_grid.columns.update',
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
     * @memberof LookMainGridBase
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
     * @memberof LookMainGridBase
     */
    public rules() {
        return {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '系统更新日志标识 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '系统更新日志标识 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof LookMainBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof LookMainBase
     */
    public hasRowEdit: any = {
        'sys_update_logname':false,
        'update':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof LookMainBase
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
     * @memberof LookMainGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }


    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof LookMainGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('LookDetail', tag)) {
            this.grid_sys_update_logname_click(row, tag, $event);
        }
    }

    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof LookMainBase
     */
    public updateDefault(row: any){                    
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof LookMainBase
     */
    public computeDefaultValueWithParam(action:string,param:string,data:any){
        if(Object.is(action,"UPDATE")){
            const nativeData:any = this.service.getCopynativeData();
            if(nativeData && (nativeData instanceof Array) && nativeData.length >0){
                let targetData:any = nativeData.find((item:any) =>{
                    return item.sysupdatelogid === data.srfkey;
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