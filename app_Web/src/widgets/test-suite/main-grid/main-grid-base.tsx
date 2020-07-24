import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import TestSuiteService from '@/service/test-suite/test-suite-service';
import MainService from './main-grid-service';
import TestSuiteUIService from '@/uiservice/test-suite/test-suite-ui-service';
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
     * @type {TestSuiteService}
     * @memberof MainGridBase
     */
    public appEntityService: TestSuiteService = new TestSuiteService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'testsuite';

    /**
     * 界面UI服务对象
     *
     * @type {TestSuiteUIService}
     * @memberof MainBase
     */  
    public appUIService:TestSuiteUIService = new TestSuiteUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainBase
     */
    protected localStorageTag: string = 'zt_testsuite_main_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainGridBase
     */
    public minorSortPSDEF: string = 'id';

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
            langtag: 'entities.testsuite.main_grid.columns.id',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.testsuite.main_grid.columns.name',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'desc',
            label: '描述',
            langtag: 'entities.testsuite.main_grid.columns.desc',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'addedby',
            label: '由谁创建',
            langtag: 'entities.testsuite.main_grid.columns.addedby',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'addeddate',
            label: '创建时间',
            langtag: 'entities.testsuite.main_grid.columns.addeddate',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.testsuite.main_grid.columns.uagridcolumn1',
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
        'name':false,
        'desc':false,
        'addedby':false,
        'addeddate':false,
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
                name: 'addedby',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        ]);
    }

}