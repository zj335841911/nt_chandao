import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import MyFavoriteMainService from './my-favorite-main-grid-service';
import TaskUIService from '@/uiservice/task/task-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MyFavoriteMainGridBase}
 */
export class MyFavoriteMainGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MyFavoriteMainGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MyFavoriteMainService}
     * @memberof MyFavoriteMainGridBase
     */
    public service: MyFavoriteMainService = new MyFavoriteMainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof MyFavoriteMainGridBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyFavoriteMainGridBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MyFavoriteMainGridBase
     */
    protected appDeLogicName: string = '任务';

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof MyFavoriteMainBase
     */  
    public appUIService:TaskUIService = new TaskUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_assignedto_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_AssignTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u7f3dc22_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_StartTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u164e1c8_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_CloseTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u2618d3d_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_DoneTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u90f5316_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_MainEdit(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ua6566df_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_NewSubTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ue92fc99_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_TaskFavorites(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u9190267_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_TaskNFavorites(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MyFavoriteMainBase
     */  
    public ActionModel: any = {
        AssignTask: { name: 'AssignTask',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__TASK_ASSIGN_BUT', actiontarget: 'SINGLEKEY'},
        StartTask: { name: 'StartTask',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__TASK_START_BUT', actiontarget: 'SINGLEKEY'},
        CloseTask: { name: 'CloseTask',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__TASK_CLOSE_BUT', actiontarget: 'SINGLEKEY'},
        DoneTask: { name: 'DoneTask',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__TASK_COMPLETE_BUT', actiontarget: 'SINGLEKEY'},
        MainEdit: { name: 'MainEdit',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__TASK_EDIT_BUT', actiontarget: 'SINGLEKEY'},
        NewSubTask: { name: 'NewSubTask',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__TASK_SUBTASKS_BUT', actiontarget: 'SINGLEKEY'},
        TaskFavorites: { name: 'TaskFavorites',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_NFAVOR_BUT', actiontarget: 'SINGLEKEY'},
        TaskNFavorites: { name: 'TaskNFavorites',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_FAVOR_BUT', actiontarget: 'SINGLEKEY'}
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MyFavoriteMainBase
     */
    protected localStorageTag: string = 'zt_task_myfavoritemain_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MyFavoriteMainGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MyFavoriteMainGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MyFavoriteMainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.task.myfavoritemain_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.task.myfavoritemain_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'productname',
            label: '产品',
            langtag: 'entities.task.myfavoritemain_grid.columns.productname',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'projectname',
            label: '所属项目',
            langtag: 'entities.task.myfavoritemain_grid.columns.projectname',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'name',
            label: '任务名称',
            langtag: 'entities.task.myfavoritemain_grid.columns.name',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'status',
            label: '任务状态',
            langtag: 'entities.task.myfavoritemain_grid.columns.status',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'assignedto',
            label: '指派给',
            langtag: 'entities.task.myfavoritemain_grid.columns.assignedto',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'finishedby',
            label: '完成者',
            langtag: 'entities.task.myfavoritemain_grid.columns.finishedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'estimate',
            label: '预计',
            langtag: 'entities.task.myfavoritemain_grid.columns.estimate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'consumed',
            label: '消耗',
            langtag: 'entities.task.myfavoritemain_grid.columns.consumed',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'left',
            label: '剩余',
            langtag: 'entities.task.myfavoritemain_grid.columns.left',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'deadline',
            label: '截止日期',
            langtag: 'entities.task.myfavoritemain_grid.columns.deadline',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.task.myfavoritemain_grid.columns.uagridcolumn1',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MyFavoriteMainGridBase
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
     * @memberof MyFavoriteMainGridBase
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
     * @memberof MyFavoriteMainBase
     */
    public hasRowEdit: any = {
        'id':false,
        'pri':false,
        'productname':false,
        'projectname':false,
        'name':false,
        'status':false,
        'assignedto':false,
        'finishedby':false,
        'estimate':false,
        'consumed':false,
        'left':false,
        'deadline':false,
        'uagridcolumn1':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MyFavoriteMainBase
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
     * @memberof MyFavoriteMainGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'pri',
                srfkey: 'Task__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'status',
                srfkey: 'Task__status',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
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
                name: 'finishedby',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        ]);
    }


    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof MyFavoriteMainGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('AssignTask', tag)) {
            this.grid_assignedto_click(row, tag, $event);
        }
        if(Object.is('StartTask', tag)) {
            this.grid_uagridcolumn1_u7f3dc22_click(row, tag, $event);
        }
        if(Object.is('CloseTask', tag)) {
            this.grid_uagridcolumn1_u164e1c8_click(row, tag, $event);
        }
        if(Object.is('DoneTask', tag)) {
            this.grid_uagridcolumn1_u2618d3d_click(row, tag, $event);
        }
        if(Object.is('MainEdit', tag)) {
            this.grid_uagridcolumn1_u90f5316_click(row, tag, $event);
        }
        if(Object.is('NewSubTask', tag)) {
            this.grid_uagridcolumn1_ua6566df_click(row, tag, $event);
        }
        if(Object.is('TaskFavorites', tag)) {
            this.grid_uagridcolumn1_ue92fc99_click(row, tag, $event);
        }
        if(Object.is('TaskNFavorites', tag)) {
            this.grid_uagridcolumn1_u9190267_click(row, tag, $event);
        }
    }
}