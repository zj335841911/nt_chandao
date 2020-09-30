import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
import TestRoundsService from './test-rounds-grid-service';
import BuildUIService from '@/uiservice/build/build-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {TestRoundsGridBase}
 */
export class TestRoundsGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestRoundsGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {TestRoundsService}
     * @memberof TestRoundsGridBase
     */
    public service: TestRoundsService = new TestRoundsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof TestRoundsGridBase
     */
    public appEntityService: BuildService = new BuildService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestRoundsGridBase
     */
    protected appDeName: string = 'build';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestRoundsGridBase
     */
    protected appDeLogicName: string = 'build';

    /**
     * 界面UI服务对象
     *
     * @type {BuildUIService}
     * @memberof TestRoundsBase
     */  
    public appUIService:BuildUIService = new BuildUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof TestRoundsBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof TestRoundsBase
     */
    protected localStorageTag: string = 'zt_build_testrounds_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof TestRoundsGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof TestRoundsGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof TestRoundsGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.build.testrounds_grid.columns.id',
            show: false,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'productname',
            label: '产品名称',
            langtag: 'entities.build.testrounds_grid.columns.productname',
            show: false,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'name',
            label: '名称编号',
            langtag: 'entities.build.testrounds_grid.columns.name',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'scmpath',
            label: '源代码地址',
            langtag: 'entities.build.testrounds_grid.columns.scmpath',
            show: false,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'filepath',
            label: '下载地址',
            langtag: 'entities.build.testrounds_grid.columns.filepath',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'builder',
            label: '构建者',
            langtag: 'entities.build.testrounds_grid.columns.builder',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'date',
            label: '打包日期',
            langtag: 'entities.build.testrounds_grid.columns.date',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof TestRoundsGridBase
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
     * @memberof TestRoundsGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof TestRoundsBase
     */
    public hasRowEdit: any = {
        'id':false,
        'productname':false,
        'name':false,
        'scmpath':false,
        'filepath':false,
        'builder':false,
        'date':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof TestRoundsBase
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
     * @memberof TestRoundsGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'builder',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        ]);
    }



}