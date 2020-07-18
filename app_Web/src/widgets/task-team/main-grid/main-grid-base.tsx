import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import TaskTeamService from '@/service/task-team/task-team-service';
import MainService from './main-grid-service';
import TaskTeamUIService from '@/uiservice/task-team/task-team-ui-service';
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
     * @type {TaskTeamService}
     * @memberof MainGridBase
     */
    public appEntityService: TaskTeamService = new TaskTeamService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'taskteam';

    /**
     * 界面UI服务对象
     *
     * @type {TaskTeamUIService}
     * @memberof MainBase
     */  
    public appUIService:TaskTeamUIService = new TaskTeamUIService(this.$store);

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
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_taskteam_main_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MainGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MainGridBase
     */
    public limit: number = 1000;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'account',
            label: '团队',
            langtag: 'entities.taskteam.main_grid.columns.account',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'estimate',
            label: '最初预计',
            langtag: 'entities.taskteam.main_grid.columns.estimate',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'consumed',
            label: '总计消耗',
            langtag: 'entities.taskteam.main_grid.columns.consumed',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'left',
            label: '预计剩余',
            langtag: 'entities.taskteam.main_grid.columns.left',
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
        'account':false,
        'estimate':false,
        'consumed':false,
        'left':false,
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
                name: 'account',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        ]);
    }

}