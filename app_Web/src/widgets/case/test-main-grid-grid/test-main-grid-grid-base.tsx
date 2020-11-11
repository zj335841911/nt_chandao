import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import TestMainGridService from './test-main-grid-grid-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {TestMainGridGridBase}
 */
export class TestMainGridGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestMainGridGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {TestMainGridService}
     * @memberof TestMainGridGridBase
     */
    public service: TestMainGridService = new TestMainGridService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof TestMainGridGridBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestMainGridGridBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestMainGridGridBase
     */
    protected appDeLogicName: string = '测试用例';

    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof TestMainGridBase
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
    public grid_title_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Case_Edits(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u5414985_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Case_confirmChange(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_uda623f7_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Case_NewBugByTestCaseResult(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u38f3657_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Case_CASEOpenTestRunResultView(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u292efe3_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Case_CaseExecute(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u84b598d_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Case_unlinkCase(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof TestMainGridBase
     */  
    public ActionModel: any = {
        Edits: { name: 'Edits',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: '', actiontarget: 'SINGLEKEY'},
        confirmChange: { name: 'confirmChange',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__CASE_CASECOF_BUT', actiontarget: 'SINGLEKEY'},
        NewBugByTestCaseResult: { name: 'NewBugByTestCaseResult',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__CASE_TOBUG_BUT', actiontarget: 'SINGLEKEY'},
        CASEOpenTestRunResultView: { name: 'CASEOpenTestRunResultView',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__CASE_CASERESULT_BUT', actiontarget: 'SINGLEKEY'},
        CaseExecute: { name: 'CaseExecute',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__CASE_CASERUN_BUT', actiontarget: 'SINGLEKEY'},
        unlinkCase: { name: 'unlinkCase',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__CASE_UNLINK_BUT', actiontarget: 'SINGLEKEY'}
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof TestMainGridBase
     */  
    public majorInfoColName:string = "title";

    /**
     * 列主键属性名称
     *
     * @type {string}
     * @memberof TestMainGridGridBase
     */
    public columnKeyName: string = "id";

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof TestMainGridBase
     */
    protected localStorageTag: string = 'zt_case_testmaingrid_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof TestMainGridGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof TestMainGridGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof TestMainGridGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'id',
            langtag: 'entities.case.testmaingrid_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.testmaingrid_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.testmaingrid_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'type',
            label: '用例类型',
            langtag: 'entities.case.testmaingrid_grid.columns.type',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.case.testmaingrid_grid.columns.openedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'assignedto',
            label: '指派给',
            langtag: 'entities.case.testmaingrid_grid.columns.assignedto',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'lastrunner',
            label: '执行人',
            langtag: 'entities.case.testmaingrid_grid.columns.lastrunner',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'lastrundate',
            label: '执行时间',
            langtag: 'entities.case.testmaingrid_grid.columns.lastrundate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'lastrunresult',
            label: '结果',
            langtag: 'entities.case.testmaingrid_grid.columns.lastrunresult',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'status1',
            label: '状态',
            langtag: 'entities.case.testmaingrid_grid.columns.status1',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'tobugcnt',
            label: 'B',
            langtag: 'entities.case.testmaingrid_grid.columns.tobugcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'resultcnt',
            label: 'R',
            langtag: 'entities.case.testmaingrid_grid.columns.resultcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'casesteps',
            label: 'S',
            langtag: 'entities.case.testmaingrid_grid.columns.casesteps',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.case.testmaingrid_grid.columns.uagridcolumn1',
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
     * @memberof TestMainGridGridBase
     */
    public getGridRowModel(){
        return {
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 是否启用分组
     *
     * @type {boolean}
     * @memberof TestMainGridBase
     */
    public isEnableGroup:boolean = false;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof TestMainGridBase
     */
    public groupAppField:string ="";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof TestMainGridBase
     */
    public groupMode:string ="NONE";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof TestMainGridBase
     */
    public codelistTag: string = "";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof TestMainGridBase
     */
    public codelistType: string = "";
    
    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof TestMainGridGridBase
     */
    public rules() {
        return {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof TestMainGridBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof TestMainGridBase
     */
    public hasRowEdit: any = {
        'id':false,
        'pri':false,
        'title':false,
        'type':false,
        'openedby':false,
        'assignedto':false,
        'lastrunner':false,
        'lastrundate':false,
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
     * @memberof TestMainGridBase
     */
    public getCellClassName(args: {row: any, column: any, rowIndex: number, columnIndex: number}): any {
        return ( this.hasRowEdit[args.column.property] && this.actualIsOpenEdit ) ? "edit-cell" : "info-cell";
    }


    /**
     * 是否为实体导出对象
     *
     * @protected
     * @type {boolean}
     * @memberof TestMainGridGridBase
     */
    protected isDeExport: boolean = true;

    /**
     * 所有导出列成员
     *
     * @type {any[]}
     * @memberof TestMainGridGridBase
     */
    public allExportColumns: any[] = [
        {
            name: 'id',
            label: 'id',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.id',
            show: true,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.pri',
            show: true,
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.title',
            show: true,
        },
        {
            name: 'type',
            label: '用例类型',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.type',
            show: true,
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.openedby',
            show: true,
        },
        {
            name: 'lastrunner',
            label: '执行人',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.lastrunner',
            show: true,
        },
        {
            name: 'lastrundate',
            label: '执行时间',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.lastrundate',
            show: true,
        },
        {
            name: 'lastrunresult',
            label: '结果',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.lastrunresult',
            show: true,
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.status',
            show: true,
        },
        {
            name: 'status1',
            label: '状态',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.status1',
            show: true,
        },
        {
            name: 'tobugcnt',
            label: 'B',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.tobugcnt',
            show: true,
        },
        {
            name: 'resultcnt',
            label: 'R',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.resultcnt',
            show: true,
        },
        {
            name: 'casesteps',
            label: 'S',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.casesteps',
            show: true,
        },
        {
            name: 'lastrunresult1',
            label: '测试用例结果',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.lastrunresult1',
            show: true,
        },
        {
            name: 'isfavorites',
            label: '是否收藏',
            langtag: 'entities.case.testmaingrid_grid.exportColumns.isfavorites',
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
     * @memberof TestMainGridGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'pri',
                srfkey: 'Testcase__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'type',
                srfkey: 'Testcase__type',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'openedby',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'lastrunner',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'lastrunresult',
                srfkey: 'Testcase__result',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'status',
                srfkey: 'Testcase__status',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'status1',
                srfkey: 'TestCaseStatusGrid',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'lastrunresult1',
                srfkey: 'Testcase__result',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }


    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof TestMainGridGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('Edits', tag)) {
            this.grid_title_click(row, tag, $event);
        }
        if(Object.is('confirmChange', tag)) {
            this.grid_uagridcolumn1_u5414985_click(row, tag, $event);
        }
        if(Object.is('NewBugByTestCaseResult', tag)) {
            this.grid_uagridcolumn1_uda623f7_click(row, tag, $event);
        }
        if(Object.is('CASEOpenTestRunResultView', tag)) {
            this.grid_uagridcolumn1_u38f3657_click(row, tag, $event);
        }
        if(Object.is('CaseExecute', tag)) {
            this.grid_uagridcolumn1_u292efe3_click(row, tag, $event);
        }
        if(Object.is('unlinkCase', tag)) {
            this.grid_uagridcolumn1_u84b598d_click(row, tag, $event);
        }
    }

    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof TestMainGridBase
     */
    public updateDefault(row: any){                    
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof TestMainGridBase
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