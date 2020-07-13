import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import Main2Service from './main2-grid-service';
import TestTaskUIService from '@/uiservice/test-task/test-task-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main2GridBase}
 */
export class Main2GridBase extends GridControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof Main2GridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {Main2Service}
     * @memberof Main2GridBase
     */
    public service: Main2Service = new Main2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof Main2GridBase
     */
    public appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main2GridBase
     */
    protected appDeName: string = 'testtask';

    /**
     * 界面UI服务对象
     *
     * @type {TestTaskUIService}
     * @memberof Main2Base
     */  
    public appUIService:TestTaskUIService = new TestTaskUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof Main2Base
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
    protected localStorageTag: string = 'zt_testtask_main2_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main2GridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main2GridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof Main2GridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main2GridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main2GridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.testtask.main2_grid.columns.id',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'productname',
            label: '产品',
            langtag: 'entities.testtask.main2_grid.columns.productname',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.testtask.main2_grid.columns.name',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'projecttname',
            label: '项目',
            langtag: 'entities.testtask.main2_grid.columns.projecttname',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'build',
            label: '版本',
            langtag: 'entities.testtask.main2_grid.columns.build',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'begin',
            label: '开始日期',
            langtag: 'entities.testtask.main2_grid.columns.begin',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'end',
            label: '结束日期',
            langtag: 'entities.testtask.main2_grid.columns.end',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof Main2GridBase
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
     * @memberof Main2GridBase
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
     * @memberof Main2Base
     */
    public hasRowEdit: any = {
        'id':false,
        'productname':false,
        'name':false,
        'projecttname':false,
        'build':false,
        'begin':false,
        'end':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof Main2Base
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
     * @memberof Main2GridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }

}