import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
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
    public grid_uagridcolumn1_u06228b0_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Case_NewBugByCaseResult(datas,contextJO, paramJO,  $event, xData,this,"Case");
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
        confirmChange: { name: 'confirmChange',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__CASE_CASECOF_BUT', actiontarget: 'SINGLEKEY'},
        NewBugByCaseResult: { name: 'NewBugByCaseResult',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__CASE_TOBUG_BUT', actiontarget: 'SINGLEKEY'},
        CASEOpenTestRunResultView: { name: 'CASEOpenTestRunResultView',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__CASE_CASERESULT_BUT', actiontarget: 'SINGLEKEY'},
        CaseExecute: { name: 'CaseExecute',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__CASE_CASERUN_BUT', actiontarget: 'SINGLEKEY'},
        unlinkCase: { name: 'unlinkCase',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__CASE_UNLINK_BUT', actiontarget: 'SINGLEKEY'}
    };

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
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.testmaingrid_grid.columns.pri',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.testmaingrid_grid.columns.title',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'type',
            label: '用例类型',
            langtag: 'entities.case.testmaingrid_grid.columns.type',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.case.testmaingrid_grid.columns.openedby',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'assignedto',
            label: '指派给',
            langtag: 'entities.case.testmaingrid_grid.columns.assignedto',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lastrunner',
            label: '执行人',
            langtag: 'entities.case.testmaingrid_grid.columns.lastrunner',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lastrundate',
            label: '执行时间',
            langtag: 'entities.case.testmaingrid_grid.columns.lastrundate',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lastrunresult',
            label: '结果',
            langtag: 'entities.case.testmaingrid_grid.columns.lastrunresult',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'status1',
            label: '状态',
            langtag: 'entities.case.testmaingrid_grid.columns.status1',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'tobugcnt',
            label: 'B',
            langtag: 'entities.case.testmaingrid_grid.columns.tobugcnt',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'resultcnt',
            label: 'R',
            langtag: 'entities.case.testmaingrid_grid.columns.resultcnt',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'casesteps',
            label: 'S',
            langtag: 'entities.case.testmaingrid_grid.columns.casesteps',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.case.testmaingrid_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
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
     * 属性值规则
     *
     * @type {*}
     * @memberof TestMainGridGridBase
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
                name: 'assignedto',
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
                name: 'status1',
                srfkey: 'TestCaseStatusGrid',
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
        if(Object.is('NewBugByCaseResult', tag)) {
            this.grid_uagridcolumn1_u06228b0_click(row, tag, $event);
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
}