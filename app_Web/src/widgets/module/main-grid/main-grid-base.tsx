import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import ModuleService from '@/service/module/module-service';
import MainService from './main-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {MainGridBase}
 */
export class MainGridBase extends GridControllerBase {

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
     * @type {ModuleService}
     * @memberof MainGridBase
     */
    public appEntityService: ModuleService = new ModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'module';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_module_main_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '模块名称',
            langtag: 'entities.module.main_grid.columns.name',
            show: true,
            util: 'PX'
        },
        {
            name: 'parentname',
            label: '上级模块',
            langtag: 'entities.module.main_grid.columns.parentname',
            show: true,
            util: 'PX'
        },
        {
            name: 'grade',
            label: '级别',
            langtag: 'entities.module.main_grid.columns.grade',
            show: true,
            util: 'PX'
        },
        {
            name: 'order',
            label: '排序',
            langtag: 'entities.module.main_grid.columns.order',
            show: true,
            util: 'PX'
        },
        {
            name: 'owner',
            label: '负责人',
            langtag: 'entities.module.main_grid.columns.owner',
            show: true,
            util: 'PX'
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
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainBase
     */
    public hasRowEdit: any = {
        'name':false,
        'parentname':false,
        'grade':false,
        'order':false,
        'owner':false,
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


}