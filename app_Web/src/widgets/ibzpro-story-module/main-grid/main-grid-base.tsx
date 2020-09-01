import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import IBZProStoryModuleService from '@/service/ibzpro-story-module/ibzpro-story-module-service';
import MainService from './main-grid-service';
import IBZProStoryModuleUIService from '@/uiservice/ibzpro-story-module/ibzpro-story-module-ui-service';
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
     * @type {IBZProStoryModuleService}
     * @memberof MainGridBase
     */
    public appEntityService: IBZProStoryModuleService = new IBZProStoryModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'ibzprostorymodule';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeLogicName: string = '需求模块';

    /**
     * 界面UI服务对象
     *
     * @type {IBZProStoryModuleUIService}
     * @memberof MainBase
     */  
    public appUIService:IBZProStoryModuleUIService = new IBZProStoryModuleUIService(this.$store);

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
    protected localStorageTag: string = 'ibzpro_storymodule_main_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'product',
            label: '产品（开发系统）标识',
            langtag: 'entities.ibzprostorymodule.main_grid.columns.product',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'pmsstorymodule',
            label: 'id',
            langtag: 'entities.ibzprostorymodule.main_grid.columns.pmsstorymodule',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'ibzpro_storymodulename',
            label: '需求模块名称',
            langtag: 'entities.ibzprostorymodule.main_grid.columns.ibzpro_storymodulename',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'updateman',
            label: '更新人',
            langtag: 'entities.ibzprostorymodule.main_grid.columns.updateman',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'updatedate',
            label: '更新时间',
            langtag: 'entities.ibzprostorymodule.main_grid.columns.updatedate',
            show: true,
            unit: 'PX',
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
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求模块标识 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求模块标识 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainBase
     */
    public hasRowEdit: any = {
        'product':false,
        'pmsstorymodule':false,
        'ibzpro_storymodulename':false,
        'updateman':false,
        'updatedate':false,
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
                name: 'updateman',
                srfkey: 'SysOperator',
                codelistType : 'DYNAMIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }

}