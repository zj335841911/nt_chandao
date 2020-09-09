import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import ProjectStatsService from '@/service/project-stats/project-stats-service';
import NotCloseProjectService from './not-close-project-grid-service';
import ProjectStatsUIService from '@/uiservice/project-stats/project-stats-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {NotCloseProjectGridBase}
 */
export class NotCloseProjectGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof NotCloseProjectGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {NotCloseProjectService}
     * @memberof NotCloseProjectGridBase
     */
    public service: NotCloseProjectService = new NotCloseProjectService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectStatsService}
     * @memberof NotCloseProjectGridBase
     */
    public appEntityService: ProjectStatsService = new ProjectStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof NotCloseProjectGridBase
     */
    protected appDeName: string = 'projectstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof NotCloseProjectGridBase
     */
    protected appDeLogicName: string = '项目统计';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectStatsUIService}
     * @memberof NotCloseProjectBase
     */  
    public appUIService:ProjectStatsUIService = new ProjectStatsUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof NotCloseProjectBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof NotCloseProjectBase
     */
    protected localStorageTag: string = 'ibz_projectstats_notcloseproject_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof NotCloseProjectGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof NotCloseProjectGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof NotCloseProjectGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof NotCloseProjectGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof NotCloseProjectGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '项目名称',
            langtag: 'entities.projectstats.notcloseproject_grid.columns.name',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'end',
            label: '截至日期',
            langtag: 'entities.projectstats.notcloseproject_grid.columns.end',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.projectstats.notcloseproject_grid.columns.status',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'totalestimate',
            label: '预计',
            langtag: 'entities.projectstats.notcloseproject_grid.columns.totalestimate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'totalconsumed',
            label: '消耗',
            langtag: 'entities.projectstats.notcloseproject_grid.columns.totalconsumed',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'totalleft',
            label: '剩余',
            langtag: 'entities.projectstats.notcloseproject_grid.columns.totalleft',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'totalwh',
            label: '总工时',
            langtag: 'entities.projectstats.notcloseproject_grid.columns.totalwh',
            show: false,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'progress',
            label: '进度',
            langtag: 'entities.projectstats.notcloseproject_grid.columns.progress',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof NotCloseProjectGridBase
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
     * @memberof NotCloseProjectGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '项目编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '项目编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof NotCloseProjectBase
     */
    public hasRowEdit: any = {
        'name':false,
        'end':false,
        'status':false,
        'totalestimate':false,
        'totalconsumed':false,
        'totalleft':false,
        'totalwh':false,
        'progress':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof NotCloseProjectBase
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
     * @memberof NotCloseProjectGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'status',
                srfkey: 'Project__status',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }



}