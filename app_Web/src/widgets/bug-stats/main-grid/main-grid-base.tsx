import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import BugStatsService from '@/service/bug-stats/bug-stats-service';
import MainService from './main-grid-service';
import BugStatsUIService from '@/uiservice/bug-stats/bug-stats-ui-service';
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
     * @type {BugStatsService}
     * @memberof MainGridBase
     */
    public appEntityService: BugStatsService = new BugStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'bugstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeLogicName: string = 'Bug统计';

    /**
     * 界面UI服务对象
     *
     * @type {BugStatsUIService}
     * @memberof MainBase
     */  
    public appUIService:BugStatsUIService = new BugStatsUIService(this.$store);

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
    protected localStorageTag: string = 'ibz_bugstats_main_grid';

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof MainGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MainGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'openedby',
            label: '由谁创建',
            langtag: 'entities.bugstats.main_grid.columns.openedby',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'bugwjj',
            label: '未解决',
            langtag: 'entities.bugstats.main_grid.columns.bugwjj',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugbydesign',
            label: '设计如此',
            langtag: 'entities.bugstats.main_grid.columns.bugbydesign',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugduplicate',
            label: '重复Bug',
            langtag: 'entities.bugstats.main_grid.columns.bugduplicate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugexternal',
            label: '外部原因',
            langtag: 'entities.bugstats.main_grid.columns.bugexternal',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugfixed',
            label: '已解决',
            langtag: 'entities.bugstats.main_grid.columns.bugfixed',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugnotrepro',
            label: '无法重现',
            langtag: 'entities.bugstats.main_grid.columns.bugnotrepro',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugpostponed',
            label: '延期处理',
            langtag: 'entities.bugstats.main_grid.columns.bugpostponed',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugwillnotfix',
            label: '不予解决',
            langtag: 'entities.bugstats.main_grid.columns.bugwillnotfix',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugtostory',
            label: '转为需求',
            langtag: 'entities.bugstats.main_grid.columns.bugtostory',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugefficient',
            label: '有效率',
            langtag: 'entities.bugstats.main_grid.columns.bugefficient',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'bugtotal',
            label: '总计',
            langtag: 'entities.bugstats.main_grid.columns.bugtotal',
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
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '标识 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '标识 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainBase
     */
    public hasRowEdit: any = {
        'openedby':false,
        'bugwjj':false,
        'bugbydesign':false,
        'bugduplicate':false,
        'bugexternal':false,
        'bugfixed':false,
        'bugnotrepro':false,
        'bugpostponed':false,
        'bugwillnotfix':false,
        'bugtostory':false,
        'bugefficient':false,
        'bugtotal':false,
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
                name: 'openedby',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        ]);
    }



}