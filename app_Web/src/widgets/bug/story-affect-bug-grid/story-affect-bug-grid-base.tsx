import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import StoryAffectBugService from './story-affect-bug-grid-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {StoryAffectBugGridBase}
 */
export class StoryAffectBugGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof StoryAffectBugGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {StoryAffectBugService}
     * @memberof StoryAffectBugGridBase
     */
    public service: StoryAffectBugService = new StoryAffectBugService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof StoryAffectBugGridBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryAffectBugGridBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof StoryAffectBugGridBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof StoryAffectBugBase
     */  
    public appUIService:BugUIService = new BugUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof StoryAffectBugBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof StoryAffectBugBase
     */
    protected localStorageTag: string = 'zt_bug_storyaffectbug_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof StoryAffectBugGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof StoryAffectBugGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof StoryAffectBugGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof StoryAffectBugGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof StoryAffectBugGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof StoryAffectBugGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.bug.storyaffectbug_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'title',
            label: 'Bug标题',
            langtag: 'entities.bug.storyaffectbug_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.bug.storyaffectbug_grid.columns.status',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'openedby',
            label: '由谁创建',
            langtag: 'entities.bug.storyaffectbug_grid.columns.openedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'resolvedby',
            label: '解决者',
            langtag: 'entities.bug.storyaffectbug_grid.columns.resolvedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'resolution',
            label: '解决方案',
            langtag: 'entities.bug.storyaffectbug_grid.columns.resolution',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lasteditedby',
            label: '最后修改者',
            langtag: 'entities.bug.storyaffectbug_grid.columns.lasteditedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof StoryAffectBugGridBase
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
     * @memberof StoryAffectBugGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'Bug编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'Bug编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof StoryAffectBugBase
     */
    public hasRowEdit: any = {
        'id':false,
        'title':false,
        'status':false,
        'openedby':false,
        'resolvedby':false,
        'resolution':false,
        'lasteditedby':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof StoryAffectBugBase
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
     * @memberof StoryAffectBugGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'status',
                srfkey: 'Bug__status',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'openedby',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'resolvedby',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'resolution',
                srfkey: 'Bug__resolution',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'lasteditedby',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        ]);
    }

}