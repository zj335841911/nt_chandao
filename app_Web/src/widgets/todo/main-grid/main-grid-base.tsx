import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import MainService from './main-grid-service';
import TodoUIService from '@/uiservice/todo/todo-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainGridBase}
 */
export class MainGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainGridBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof MainGridBase
     */
    public appEntityService: TodoService = new TodoService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'todo';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ud00e98f_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_assignTo(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ufc04fbc_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_finish(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ue94853b_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_activate(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u651627d_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_close(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ue75a757_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_edit(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ufd16e23_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_delete(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 界面UI服务对象
     *
     * @type {TodoUIService}
     * @memberof MainBase
     */  
    public appUIService:TodoUIService = new TodoUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainBase
     */  
    public ActionModel: any = {
        assignTo: { name: 'assignTo',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'ASSIGNTO', target: 'SINGLEKEY'},
        finish: { name: 'finish',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'FINISH', target: 'SINGLEKEY'},
        activate: { name: 'activate',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'ACTIVATE', target: 'SINGLEKEY'},
        close: { name: 'close',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'CLOSE', target: 'SINGLEKEY'},
        edit: { name: 'edit',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'UPDATE', target: 'SINGLEKEY'},
        delete: { name: 'delete',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'DELETE', target: 'SINGLEKEY'}
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainBase
     */
    protected localStorageTag: string = 'zt_todo_main_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: '编号',
            langtag: 'entities.todo.main_grid.columns.id',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'date',
            label: '日期',
            langtag: 'entities.todo.main_grid.columns.date',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'type',
            label: '类型',
            langtag: 'entities.todo.main_grid.columns.type',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'pri',
            label: '优先级',
            langtag: 'entities.todo.main_grid.columns.pri',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'name',
            label: '待办名称',
            langtag: 'entities.todo.main_grid.columns.name',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'begin',
            label: '开始',
            langtag: 'entities.todo.main_grid.columns.begin',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'end',
            label: '结束',
            langtag: 'entities.todo.main_grid.columns.end',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.todo.main_grid.columns.status',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.todo.main_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainGridBase
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
     * @memberof MainGridBase
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
     * @memberof MainBase
     */
    public hasRowEdit: any = {
        'id':false,
        'date':false,
        'type':false,
        'pri':false,
        'name':false,
        'begin':false,
        'end':false,
        'status':false,
        'uagridcolumn1':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainBase
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
     * @memberof MainGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'type',
                srfkey: 'Type',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'begin',
                srfkey: 'BeginendDropList',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'end',
                srfkey: 'BeginendDropList',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'status',
                srfkey: 'Todo__status',
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
     * @memberof MainGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('assignTo', tag)) {
            this.grid_uagridcolumn1_ud00e98f_click(row, tag, $event);
        }
        if(Object.is('finish', tag)) {
            this.grid_uagridcolumn1_ufc04fbc_click(row, tag, $event);
        }
        if(Object.is('activate', tag)) {
            this.grid_uagridcolumn1_ue94853b_click(row, tag, $event);
        }
        if(Object.is('close', tag)) {
            this.grid_uagridcolumn1_u651627d_click(row, tag, $event);
        }
        if(Object.is('edit', tag)) {
            this.grid_uagridcolumn1_ue75a757_click(row, tag, $event);
        }
        if(Object.is('delete', tag)) {
            this.grid_uagridcolumn1_ufd16e23_click(row, tag, $event);
        }
    }
}