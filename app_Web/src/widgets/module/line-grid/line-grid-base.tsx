import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import ModuleService from '@/service/module/module-service';
import LineService from './line-grid-service';
import ModuleUIService from '@/uiservice/module/module-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {LineGridBase}
 */
export class LineGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof LineGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {LineService}
     * @memberof LineGridBase
     */
    public service: LineService = new LineService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ModuleService}
     * @memberof LineGridBase
     */
    public appEntityService: ModuleService = new ModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof LineGridBase
     */
    protected appDeName: string = 'module';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof LineGridBase
     */
    protected appDeLogicName: string = '模块';

    /**
     * 界面UI服务对象
     *
     * @type {ModuleUIService}
     * @memberof LineBase
     */  
    public appUIService:ModuleUIService = new ModuleUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof LineBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof LineBase
     */
    protected localStorageTag: string = 'zt_module_line_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof LineGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.module.line_grid.columns.name',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: true,
        },
        {
            name: 'short',
            label: '简称',
            langtag: 'entities.module.line_grid.columns.short',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof LineGridBase
     */
    public getGridRowModel(){
        return {
          short: new FormItemModel(),
          name: new FormItemModel(),
          type: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof LineGridBase
     */
    public rules: any = {
        short: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '简称 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '简称 值不能为空', trigger: 'blur' },
        ],
        name: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '名称 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '名称 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof LineBase
     */
    public hasRowEdit: any = {
        'name':true,
        'short':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof LineBase
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
     * @memberof LineGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof LineGridBase
     */
    public createDefault(row: any): void {
        if (row.hasOwnProperty('type')) {
            row['type'] = 'line';
        }
    }


}