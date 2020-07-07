import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import BranchService from '@/service/branch/branch-service';
import PlatformManagementService from './platform-management-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {PlatformManagementGridBase}
 */
export class PlatformManagementGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {PlatformManagementService}
     * @memberof PlatformManagementGridBase
     */
    public service: PlatformManagementService = new PlatformManagementService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BranchService}
     * @memberof PlatformManagementGridBase
     */
    public appEntityService: BranchService = new BranchService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof PlatformManagementGridBase
     */
    protected appDeName: string = 'branch';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_branch_platformmanagement_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof PlatformManagementGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: '编号',
            langtag: 'entities.branch.platformmanagement_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.branch.platformmanagement_grid.columns.name',
            show: true,
            util: 'STAR'
        },
        {
            name: 'order',
            label: '排序',
            langtag: 'entities.branch.platformmanagement_grid.columns.order',
            show: true,
            util: 'PX'
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof PlatformManagementGridBase
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
     * @memberof PlatformManagementGridBase
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
     * @memberof PlatformManagementBase
     */
    public hasRowEdit: any = {
        'id':false,
        'name':false,
        'order':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof PlatformManagementBase
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
     * @memberof PlatformManagementGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }

}