import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import IBZ_PROJECTTEAMService from '@/service/ibz-projectteam/ibz-projectteam-service';
import Main_EditRowService from './main-edit-row-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main_EditRowGridBase}
 */
export class Main_EditRowGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {Main_EditRowService}
     * @memberof Main_EditRowGridBase
     */
    public service: Main_EditRowService = new Main_EditRowService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IBZ_PROJECTTEAMService}
     * @memberof Main_EditRowGridBase
     */
    public appEntityService: IBZ_PROJECTTEAMService = new IBZ_PROJECTTEAMService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_EditRowGridBase
     */
    protected appDeName: string = 'ibz_projectteam';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'ibz_projectteam_main_editrow_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_EditRowGridBase
     */
    public allColumns: any[] = [
        {
            name: 'account',
            label: '用户',
            langtag: 'entities.ibz_projectteam.main_editrow_grid.columns.account',
            show: true,
            util: 'PX'
        },
        {
            name: 'role',
            label: '角色',
            langtag: 'entities.ibz_projectteam.main_editrow_grid.columns.role',
            show: true,
            util: 'STAR'
        },
        {
            name: 'days',
            label: '可用工日',
            langtag: 'entities.ibz_projectteam.main_editrow_grid.columns.days',
            show: true,
            util: 'PX'
        },
        {
            name: 'hours',
            label: '可用工时/天',
            langtag: 'entities.ibz_projectteam.main_editrow_grid.columns.hours',
            show: true,
            util: 'PX'
        },
        {
            name: 'limited',
            label: '受限用户',
            langtag: 'entities.ibz_projectteam.main_editrow_grid.columns.limited',
            show: true,
            util: 'PX'
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof Main_EditRowGridBase
     */
    public getGridRowModel(){
        return {
          limited: new FormItemModel(),
          days: new FormItemModel(),
          hours: new FormItemModel(),
          role: new FormItemModel(),
          account: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main_EditRowGridBase
     */
    public rules: any = {
        limited: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '受限用户 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '受限用户 值不能为空', trigger: 'blur' },
        ],
        days: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '可用工日 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '可用工日 值不能为空', trigger: 'blur' },
        ],
        hours: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '可用工时/天 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '可用工时/天 值不能为空', trigger: 'blur' },
        ],
        role: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '角色 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '角色 值不能为空', trigger: 'blur' },
        ],
        account: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用户 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用户 值不能为空', trigger: 'blur' },
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
     * @memberof Main_EditRowBase
     */
    public hasRowEdit: any = {
        'account':true,
        'role':true,
        'days':true,
        'hours':true,
        'limited':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof Main_EditRowBase
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
     * @memberof Main_EditRowGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'account',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'limited',
                srfkey: 'YesNo3',
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
     * @memberof Main_EditRowGridBase
     */
    public createDefault(row: any): void {
        if (row.hasOwnProperty('days')) {
            row['days'] = 0;
        }
        if (row.hasOwnProperty('hours')) {
            row['hours'] = 0;
        }
    }
}