import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import MainGrid_SuitSubService from './main-grid-suit-sub-grid-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainGrid_SuitSubGridBase}
 */
export class MainGrid_SuitSubGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainGrid_SuitSubGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainGrid_SuitSubService}
     * @memberof MainGrid_SuitSubGridBase
     */
    public service: MainGrid_SuitSubService = new MainGrid_SuitSubService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof MainGrid_SuitSubGridBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGrid_SuitSubGridBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainGrid_SuitSubGridBase
     */
    protected appDeLogicName: string = '测试用例';

    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof MainGrid_SuitSubBase
     */  
    public appUIService:CaseUIService = new CaseUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u57d1959_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_unlinkSuiteCase(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_uc27cc64_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_OpenTestRunResultView(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u8fd0327_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_Execute(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainGrid_SuitSubBase
     */  
    public ActionModel: any = {
        unlinkSuiteCase: { name: 'unlinkSuiteCase',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__CASE_UNLINK_BUT', actiontarget: 'SINGLEKEY'},
        OpenTestRunResultView: { name: 'OpenTestRunResultView',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__CASE_RESULT_BUT', actiontarget: 'SINGLEKEY'},
        Execute: { name: 'Execute',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__CASE_CASERUN_BUT', actiontarget: 'SINGLEKEY'}
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof MainGrid_SuitSubBase
     */  
    public majorInfoColName:string = "title";

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainGrid_SuitSubBase
     */
    protected localStorageTag: string = 'zt_case_maingrid_suitsub_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainGrid_SuitSubGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainGrid_SuitSubGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGrid_SuitSubGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'id',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'type',
            label: '用例类型',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.type',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'lastrunresult',
            label: '结果',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.lastrunresult',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'status1',
            label: '状态',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.status1',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'tobugcnt',
            label: 'B',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.tobugcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'resultcnt',
            label: 'R',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.resultcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'casesteps',
            label: 'S',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.casesteps',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.uagridcolumn1',
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
     * @memberof MainGrid_SuitSubGridBase
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
     * @memberof MainGrid_SuitSubGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainGrid_SuitSubBase
     */
    public hasRowEdit: any = {
        'id':false,
        'pri':false,
        'title':false,
        'type':false,
        'lastrunresult':false,
        'status1':false,
        'tobugcnt':false,
        'resultcnt':false,
        'casesteps':false,
        'uagridcolumn1':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainGrid_SuitSubBase
     */
    public getCellClassName(args: {row: any, column: any, rowIndex: number, columnIndex: number}): any {
        return ( this.hasRowEdit[args.column.property] && this.actualIsOpenEdit ) ? "edit-cell" : "info-cell";
    }


    /**
     * 是否为实体导出对象
     *
     * @protected
     * @type {boolean}
     * @memberof MainGrid_SuitSubGridBase
     */
    protected isDeExport: boolean = true;

    /**
     * 所有导出列成员
     *
     * @type {any[]}
     * @memberof MainGrid_SuitSubGridBase
     */
    public allExportColumns: any[] = [
        {
            name: 'id',
            label: 'id',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.id',
            show: true,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.pri',
            show: true,
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.title',
            show: true,
        },
        {
            name: 'type',
            label: '用例类型',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.type',
            show: true,
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.openedby',
            show: true,
        },
        {
            name: 'lastrunner',
            label: '执行人',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.lastrunner',
            show: true,
        },
        {
            name: 'lastrundate',
            label: '执行时间',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.lastrundate',
            show: true,
        },
        {
            name: 'lastrunresult',
            label: '结果',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.lastrunresult',
            show: true,
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.status',
            show: true,
        },
        {
            name: 'status1',
            label: '状态',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.status1',
            show: true,
        },
        {
            name: 'tobugcnt',
            label: 'B',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.tobugcnt',
            show: true,
        },
        {
            name: 'resultcnt',
            label: 'R',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.resultcnt',
            show: true,
        },
        {
            name: 'casesteps',
            label: 'S',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.casesteps',
            show: true,
        },
        {
            name: 'lastrunresult1',
            label: '测试用例结果',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.lastrunresult1',
            show: true,
        },
        {
            name: 'isfavorites',
            label: '是否收藏',
            langtag: 'entities.case.maingrid_suitsub_grid.exportColumns.isfavorites',
            show: true,
        },
    ]

    /**
     * 导出数据格式化
     *
     * @param {*} filterVal
     * @param {*} jsonData
     * @param {any[]} [codelistColumns=[]]
     * @returns {Promise<any>}
     * @memberof MainGrid_SuitSubGridBase
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
     * @memberof MainGrid_SuitSubGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('unlinkSuiteCase', tag)) {
            this.grid_uagridcolumn1_u57d1959_click(row, tag, $event);
        }
        if(Object.is('OpenTestRunResultView', tag)) {
            this.grid_uagridcolumn1_uc27cc64_click(row, tag, $event);
        }
        if(Object.is('Execute', tag)) {
            this.grid_uagridcolumn1_u8fd0327_click(row, tag, $event);
        }
    }

    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof MainGrid_SuitSubBase
     */
    public updateDefault(row: any){                    
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof MainGrid_SuitSubBase
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