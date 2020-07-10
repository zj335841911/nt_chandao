import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import IBZCaseStepService from '@/service/ibzcase-step/ibzcase-step-service';
import Main_RowEditService from './main-row-edit-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main_RowEditGridBase}
 */
export class Main_RowEditGridBase extends GridControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof Main_RowEditGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {Main_RowEditService}
     * @memberof Main_RowEditGridBase
     */
    public service: Main_RowEditService = new Main_RowEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IBZCaseStepService}
     * @memberof Main_RowEditGridBase
     */
    public appEntityService: IBZCaseStepService = new IBZCaseStepService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_RowEditGridBase
     */
    protected appDeName: string = 'ibzcasestep';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'ibz_casestep_main_rowedit_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main_RowEditGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main_RowEditGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_RowEditGridBase
     */
    public allColumns: any[] = [
        {
            name: 'desc',
            label: '步骤',
            langtag: 'entities.ibzcasestep.main_rowedit_grid.columns.desc',
            show: true,
            util: 'PX',
            render: (val: any) => {
                return this.renderColValue('desc', val);
            }
        },
        {
            name: 'type',
            label: '类型',
            langtag: 'entities.ibzcasestep.main_rowedit_grid.columns.type',
            show: false,
            util: 'PX',
            codelistId: 'Casestep__type',
            render: (val: any) => {
                return this.renderColValue('type', val);
            }
        },
        {
            name: 'expect',
            label: '预期',
            langtag: 'entities.ibzcasestep.main_rowedit_grid.columns.expect',
            show: true,
            util: 'STAR',
            render: (val: any) => {
                return this.renderColValue('expect', val);
            }
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof Main_RowEditGridBase
     */
    public getGridRowModel(){
        return {
          expect: new FormItemModel(),
          desc: new FormItemModel(),
          type: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main_RowEditGridBase
     */
    public rules: any = {
        expect: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预期 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预期 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '步骤 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '步骤 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型 值不能为空', trigger: 'blur' },
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
     * @memberof Main_RowEditBase
     */
    public hasRowEdit: any = {
        'desc':true,
        'type':true,
        'expect':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof Main_RowEditBase
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
     * @memberof Main_RowEditGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }

}