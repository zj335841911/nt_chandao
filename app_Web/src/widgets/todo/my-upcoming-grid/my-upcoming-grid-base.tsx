import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import MyUpcomingService from './my-upcoming-grid-service';
import TodoUIService from '@/uiservice/todo/todo-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MyUpcomingGridBase}
 */
export class MyUpcomingGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MyUpcomingGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MyUpcomingService}
     * @memberof MyUpcomingGridBase
     */
    public service: MyUpcomingService = new MyUpcomingService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof MyUpcomingGridBase
     */
    public appEntityService: TodoService = new TodoService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyUpcomingGridBase
     */
    protected appDeName: string = 'todo';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MyUpcomingGridBase
     */
    protected appDeLogicName: string = '待办事宜表';

    /**
     * 界面UI服务对象
     *
     * @type {TodoUIService}
     * @memberof MyUpcomingBase
     */  
    public appUIService:TodoUIService = new TodoUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MyUpcomingBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MyUpcomingBase
     */
    protected localStorageTag: string = 'zt_todo_myupcoming_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MyUpcomingGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof MyUpcomingGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MyUpcomingGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MyUpcomingGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MyUpcomingGridBase
     */
    public limit: number = 10;

    /**
     * 是否显示标题
     *
     * @type {boolean}
     * @memberof MyUpcomingGridBase
     */
    public isHideHeader: boolean = true;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MyUpcomingGridBase
     */
    public allColumns: any[] = [
        {
            name: 'date1',
            label: '日期',
            langtag: 'entities.todo.myupcoming_grid.columns.date1',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'begin',
            label: '开始',
            langtag: 'entities.todo.myupcoming_grid.columns.begin',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'pri',
            label: '优先级',
            langtag: 'entities.todo.myupcoming_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'name',
            label: '待办名称',
            langtag: 'entities.todo.myupcoming_grid.columns.name',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MyUpcomingGridBase
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
     * @memberof MyUpcomingGridBase
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
     * @memberof MyUpcomingBase
     */
    public hasRowEdit: any = {
        'date1':false,
        'begin':false,
        'pri':false,
        'name':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MyUpcomingBase
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
     * @memberof MyUpcomingGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'begin',
                srfkey: 'BeginendDropList',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'pri',
                srfkey: 'Pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }



}