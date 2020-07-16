import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import IBZTaskTeamService from '@/service/ibztask-team/ibztask-team-service';
import MainEditRowService from './main-edit-row-grid-service';
import IBZTaskTeamUIService from '@/uiservice/ibztask-team/ibztask-team-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {MainEditRowGridBase}
 */
export class MainEditRowGridBase extends GridControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainEditRowGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainEditRowService}
     * @memberof MainEditRowGridBase
     */
    public service: MainEditRowService = new MainEditRowService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IBZTaskTeamService}
     * @memberof MainEditRowGridBase
     */
    public appEntityService: IBZTaskTeamService = new IBZTaskTeamService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditRowGridBase
     */
    protected appDeName: string = 'ibztaskteam';

    /**
     * 界面UI服务对象
     *
     * @type {IBZTaskTeamUIService}
     * @memberof MainEditRowBase
     */  
    public appUIService:IBZTaskTeamUIService = new IBZTaskTeamUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainEditRowBase
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
    protected localStorageTag: string = 'ibz_taskteamtemp_maineditrow_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MainEditRowGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainEditRowGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainEditRowGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MainEditRowGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainEditRowGridBase
     */
    public allColumns: any[] = [
        {
            name: 'account',
            label: '用户',
            langtag: 'entities.ibztaskteam.maineditrow_grid.columns.account',
            show: true,
            util: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'estimate',
            label: '预计',
            langtag: 'entities.ibztaskteam.maineditrow_grid.columns.estimate',
            show: true,
            util: 'PX',
            isEnableRowEdit: true,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainEditRowGridBase
     */
    public getGridRowModel(){
        return {
          root: new FormItemModel(),
          account: new FormItemModel(),
          type: new FormItemModel(),
          estimate: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditRowGridBase
     */
    public rules: any = {
        root: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
        account: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用户 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用户 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '团队类型 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '团队类型 值不能为空', trigger: 'blur' },
        ],
        estimate: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'blur' },
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
     * @memberof MainEditRowBase
     */
    public hasRowEdit: any = {
        'account':true,
        'estimate':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainEditRowBase
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
     * @memberof MainEditRowGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'account',
                srfkey: 'UserRealNameProject',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        ]);
    }

}