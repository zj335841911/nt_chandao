import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import TaskEstimateService from '@/service/task-estimate/task-estimate-service';
import MainEditService from './main-edit-grid-service';
import TaskEstimateUIService from '@/uiservice/task-estimate/task-estimate-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainEditGridBase}
 */
export class MainEditGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainEditGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainEditService}
     * @memberof MainEditGridBase
     */
    public service: MainEditService = new MainEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskEstimateService}
     * @memberof MainEditGridBase
     */
    public appEntityService: TaskEstimateService = new TaskEstimateService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditGridBase
     */
    protected appDeName: string = 'taskestimate';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditGridBase
     */
    protected appDeLogicName: string = '任务预计';

    /**
     * 界面UI服务对象
     *
     * @type {TaskEstimateUIService}
     * @memberof MainEditBase
     */  
    public appUIService:TaskEstimateUIService = new TaskEstimateUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ud0fe979_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskEstimateUIService  = new TaskEstimateUIService();
        curUIService.TaskEstimate_Edit(datas,contextJO, paramJO,  $event, xData,this,"TaskEstimate");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u1f5fe3c_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Remove(datas, contextJO,paramJO,  $event, xData,this,"TaskEstimate");
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
     * @memberof TaskEstimateEditGridView9Base
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
     * @type {TaskEstimateUIService}
     * @memberof MainEditBase
     */  
    public appUIService:TaskEstimateUIService = new TaskEstimateUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainEditBase
     */  
    public ActionModel: any = {
        Edit: { name: 'Edit',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: '', target: 'SINGLEKEY'},
        Remove: { name: 'Remove',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: '', target: 'MULTIKEY'}
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainEditBase
     */
    protected localStorageTag: string = 'zt_taskestimate_mainedit_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MainEditGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof MainEditGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MainEditGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainEditGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.taskestimate.mainedit_grid.columns.id',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'dates',
            label: '日期',
            langtag: 'entities.taskestimate.mainedit_grid.columns.dates',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'consumed',
            label: '总计消耗',
            langtag: 'entities.taskestimate.mainedit_grid.columns.consumed',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'left',
            label: '预计剩余',
            langtag: 'entities.taskestimate.mainedit_grid.columns.left',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'work',
            label: '备注',
            langtag: 'entities.taskestimate.mainedit_grid.columns.work',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.taskestimate.mainedit_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainEditGridBase
     */
    public getGridRowModel(){
        return {
          id: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditGridBase
     */
    public rules: any = {
        id: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainEditBase
     */
    public hasRowEdit: any = {
        'id':false,
        'dates':false,
        'consumed':false,
        'left':false,
        'work':false,
        'uagridcolumn1':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainEditBase
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
     * @memberof MainEditGridBase
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
     * @memberof MainEditGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('Edit', tag)) {
            this.grid_uagridcolumn1_ud0fe979_click(row, tag, $event);
        }
        if(Object.is('Remove', tag)) {
            this.grid_uagridcolumn1_u1f5fe3c_click(row, tag, $event);
        }
    }
}