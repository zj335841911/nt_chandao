import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import MainGridService from './main-grid-grid-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainGridGridBase}
 */
export class MainGridGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainGridGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainGridService}
     * @memberof MainGridGridBase
     */
    public service: MainGridService = new MainGridService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof MainGridGridBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridGridBase
     */
    protected appDeName: string = 'case';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u82280f9_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Case_CONFIRM(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u333b640_click(params: any = {}, tag?: any, $event?: any) {
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
    public grid_uagridcolumn1_ufc5dbb7_click(params: any = {}, tag?: any, $event?: any) {
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
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u5c4f2da_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Case_MainEdit(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_uc64fb7f_click(params: any = {}, tag?: any, $event?: any) {
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
    public grid_uagridcolumn1_u5913b24_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Remove(datas, contextJO,paramJO,  $event, xData,this,"Case");
    }

    /**
     * 刷新
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof CaseMainMyGridViewBase
     */
    public Refresh(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.refresh && xData.refresh instanceof Function) {
            xData.refresh(args);
        } else if (_this.refresh && _this.refresh instanceof Function) {
            _this.refresh(args);
        }
    }

    /**
     * 删除
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof CaseMainMyGridViewBase
     */
    public Remove(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (!xData || !(xData.remove instanceof Function)) {
            return ;
        }
        xData.remove(args);
    }


    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof MainGridBase
     */  
    public appUIService:CaseUIService = new CaseUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainGridBase
     */  
    public ActionModel: any = {
        CONFIRM: { name: 'CONFIRM',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'CONFIRM', target: 'SINGLEKEY'},
        OpenTestRunResultView: { name: 'OpenTestRunResultView',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'RESULT', target: 'SINGLEKEY'},
        Execute: { name: 'Execute',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'RUN', target: 'SINGLEKEY'},
        MainEdit: { name: 'MainEdit',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'EDIT', target: 'SINGLEKEY'},
        Refresh: { name: 'Refresh',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: '', target: ''},
        NewBugByCaseResult: { name: 'NewBugByCaseResult',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'TOBUG', target: 'SINGLEKEY'},
        Remove: { name: 'Remove',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: '', target: 'MULTIKEY'}
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected localStorageTag: string = 'zt_case_maingrid_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainGridGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainGridGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'id',
            langtag: 'entities.case.maingrid_grid.columns.id',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.maingrid_grid.columns.pri',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.maingrid_grid.columns.title',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'type',
            label: '用例类型',
            langtag: 'entities.case.maingrid_grid.columns.type',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.case.maingrid_grid.columns.openedby',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lastrunner',
            label: '执行人',
            langtag: 'entities.case.maingrid_grid.columns.lastrunner',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lastrundate',
            label: '执行时间',
            langtag: 'entities.case.maingrid_grid.columns.lastrundate',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lastrunresult',
            label: '结果',
            langtag: 'entities.case.maingrid_grid.columns.lastrunresult',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'status1',
            label: '状态',
            langtag: 'entities.case.maingrid_grid.columns.status1',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'tobugcnt',
            label: 'B',
            langtag: 'entities.case.maingrid_grid.columns.tobugcnt',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'resultcnt',
            label: 'R',
            langtag: 'entities.case.maingrid_grid.columns.resultcnt',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'casesteps',
            label: 'S',
            langtag: 'entities.case.maingrid_grid.columns.casesteps',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.case.maingrid_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainGridGridBase
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
     * @memberof MainGridGridBase
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
     * @memberof MainGridBase
     */
    public hasRowEdit: any = {
        'id':false,
        'pri':false,
        'title':false,
        'type':false,
        'openedby':false,
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
     * @memberof MainGridBase
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
     * @memberof MainGridGridBase
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
     * @memberof MainGridGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('CONFIRM', tag)) {
            this.grid_uagridcolumn1_u82280f9_click(row, tag, $event);
        }
        if(Object.is('OpenTestRunResultView', tag)) {
            this.grid_uagridcolumn1_u333b640_click(row, tag, $event);
        }
        if(Object.is('Execute', tag)) {
            this.grid_uagridcolumn1_ufc5dbb7_click(row, tag, $event);
        }
        if(Object.is('MainEdit', tag)) {
            this.grid_uagridcolumn1_u5c4f2da_click(row, tag, $event);
        }
        if(Object.is('NewBugByCaseResult', tag)) {
            this.grid_uagridcolumn1_uc64fb7f_click(row, tag, $event);
        }
        if(Object.is('Remove', tag)) {
            this.grid_uagridcolumn1_u5913b24_click(row, tag, $event);
        }
    }
}