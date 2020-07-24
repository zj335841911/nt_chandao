import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import StoryRelatedService from './story-related-grid-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {StoryRelatedGridBase}
 */
export class StoryRelatedGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof StoryRelatedGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {StoryRelatedService}
     * @memberof StoryRelatedGridBase
     */
    public service: StoryRelatedService = new StoryRelatedService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof StoryRelatedGridBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryRelatedGridBase
     */
    protected appDeName: string = 'bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof StoryRelatedBase
     */  
    public appUIService:BugUIService = new BugUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof StoryRelatedBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof StoryRelatedBase
     */
    protected localStorageTag: string = 'zt_bug_storyrelated_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof StoryRelatedGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof StoryRelatedGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof StoryRelatedGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof StoryRelatedGridBase
     */
    public limit: number = 500;

    /**
     * 是否显示标题
     *
     * @type {boolean}
     * @memberof StoryRelatedGridBase
     */
    public isHideHeader: boolean = true;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof StoryRelatedGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.bug.storyrelated_grid.columns.id',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'title',
            label: 'Bug标题',
            langtag: 'entities.bug.storyrelated_grid.columns.title',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof StoryRelatedGridBase
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
     * @memberof StoryRelatedGridBase
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
     * @memberof StoryRelatedBase
     */
    public hasRowEdit: any = {
        'id':false,
        'title':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof StoryRelatedBase
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
     * @memberof StoryRelatedGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }

}