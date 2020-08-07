import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import CaseStepService from '@/service/case-step/case-step-service';
import MainRService from './main-r-grid-service';
import CaseStepUIService from '@/uiservice/case-step/case-step-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainRGridBase}
 */
export class MainRGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainRGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainRService}
     * @memberof MainRGridBase
     */
    public service: MainRService = new MainRService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseStepService}
     * @memberof MainRGridBase
     */
    public appEntityService: CaseStepService = new CaseStepService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainRGridBase
     */
    protected appDeName: string = 'casestep';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainRGridBase
     */
    protected appDeLogicName: string = '用例步骤';

    /**
     * 界面UI服务对象
     *
     * @type {CaseStepUIService}
     * @memberof MainRBase
     */  
    public appUIService:CaseStepUIService = new CaseStepUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainRBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainRBase
     */
    protected localStorageTag: string = 'zt_casestep_mainr_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MainRGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainRGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainRGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MainRGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainRGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: '编号',
            langtag: 'entities.casestep.mainr_grid.columns.id',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'desc',
            label: '步骤',
            langtag: 'entities.casestep.mainr_grid.columns.desc',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'type',
            label: '类型',
            langtag: 'entities.casestep.mainr_grid.columns.type',
            show: false,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'expect',
            label: '预期',
            langtag: 'entities.casestep.mainr_grid.columns.expect',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'steps',
            label: '测试结果',
            langtag: 'entities.casestep.mainr_grid.columns.steps',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'reals',
            label: '实际情况',
            langtag: 'entities.casestep.mainr_grid.columns.reals',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainRGridBase
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
     * @memberof MainRGridBase
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
     * @memberof MainRBase
     */
    public hasRowEdit: any = {
        'id':false,
        'desc':false,
        'type':false,
        'expect':false,
        'steps':false,
        'reals':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainRBase
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
     * @memberof MainRGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'steps',
                srfkey: 'Testresult__result',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }

}