import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import SubTaskService from '@/service/sub-task/sub-task-service';
import SubTaskNewService from './sub-task-new-grid-service';
import SubTaskUIService from '@/uiservice/sub-task/sub-task-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {SubTaskNewGridBase}
 */
export class SubTaskNewGridBase extends GridControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {SubTaskNewService}
     * @memberof SubTaskNewGridBase
     */
    public service: SubTaskNewService = new SubTaskNewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SubTaskService}
     * @memberof SubTaskNewGridBase
     */
    public appEntityService: SubTaskService = new SubTaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    protected appDeName: string = 'subtask';

    /**
     * 界面UI服务对象
     *
     * @type {SubTaskUIService}
     * @memberof SubTaskNewBase
     */  
    public appUIService:SubTaskUIService = new SubTaskUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof SubTaskNewBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'ibz_subtask_subtasknew_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof SubTaskNewGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof SubTaskNewGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof SubTaskNewGridBase
     */
    public allColumns: any[] = [
        {
            name: 'modulename',
            label: '所属模块',
            langtag: 'entities.subtask.subtasknew_grid.columns.modulename',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'storyname',
            label: '相关需求',
            langtag: 'entities.subtask.subtasknew_grid.columns.storyname',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'name',
            label: '任务名称',
            langtag: 'entities.subtask.subtasknew_grid.columns.name',
            show: true,
            util: 'STAR',
            isEnableRowEdit: true,
        },
        {
            name: 'type',
            label: '任务类型',
            langtag: 'entities.subtask.subtasknew_grid.columns.type',
            show: true,
            util: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'assignedto',
            label: '指派给',
            langtag: 'entities.subtask.subtasknew_grid.columns.assignedto',
            show: true,
            util: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'left',
            label: '预计',
            langtag: 'entities.subtask.subtasknew_grid.columns.left',
            show: true,
            util: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'desc',
            label: '任务描述',
            langtag: 'entities.subtask.subtasknew_grid.columns.desc',
            show: true,
            util: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'pri',
            label: '优先级',
            langtag: 'entities.subtask.subtasknew_grid.columns.pri',
            show: true,
            util: 'PX',
            isEnableRowEdit: true,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof SubTaskNewGridBase
     */
    public getGridRowModel(){
        return {
          assignedto: new FormItemModel(),
          pri: new FormItemModel(),
          desc: new FormItemModel(),
          name: new FormItemModel(),
          isleaf: new FormItemModel(),
          parent: new FormItemModel(),
          left: new FormItemModel(),
          type: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof SubTaskNewGridBase
     */
    public rules: any = {
        assignedto: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '指派给 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '指派给 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '优先级 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '优先级 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务描述 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务描述 值不能为空', trigger: 'blur' },
        ],
        name: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务名称 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务名称 值不能为空', trigger: 'blur' },
        ],
        isleaf: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '是否子任务 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '是否子任务 值不能为空', trigger: 'blur' },
        ],
        parent: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '父任务 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '父任务 值不能为空', trigger: 'blur' },
        ],
        left: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务类型 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务类型 值不能为空', trigger: 'blur' },
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
     * @memberof SubTaskNewBase
     */
    public hasRowEdit: any = {
        'modulename':false,
        'storyname':false,
        'name':true,
        'type':true,
        'assignedto':true,
        'left':true,
        'desc':true,
        'pri':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof SubTaskNewBase
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
     * @memberof SubTaskNewGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'type',
                srfkey: 'Task__type',
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
                name: 'pri',
                srfkey: 'Task__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof SubTaskNewGridBase
     */
    public createDefault(row: any): void {
        if (row.hasOwnProperty('isleaf')) {
            row['isleaf'] = '1';
        }
        if (row.hasOwnProperty('parent')) {
            row['parent'] = this.viewparams['srfparentkey'];
        }
    }
}