import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import PickupGridService from './pickup-grid-grid-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {PickupGridGridBase}
 */
export class PickupGridGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof PickupGridGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {PickupGridService}
     * @memberof PickupGridGridBase
     */
    public service: PickupGridService = new PickupGridService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof PickupGridGridBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof PickupGridGridBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof PickupGridGridBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof PickupGridBase
     */  
    public appUIService:StoryUIService = new StoryUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof PickupGridBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof PickupGridBase
     */
    protected localStorageTag: string = 'zt_story_pickupgrid_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PickupGridGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof PickupGridGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof PickupGridGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.story.pickupgrid_grid.columns.id',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.story.pickupgrid_grid.columns.pri',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'plan',
            label: '所属计划',
            langtag: 'entities.story.pickupgrid_grid.columns.plan',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'modulename',
            label: '所属模块名称',
            langtag: 'entities.story.pickupgrid_grid.columns.modulename',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'title',
            label: '需求名称',
            langtag: 'entities.story.pickupgrid_grid.columns.title',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.story.pickupgrid_grid.columns.openedby',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'assignedto',
            label: '指派',
            langtag: 'entities.story.pickupgrid_grid.columns.assignedto',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'estimate',
            label: '预计',
            langtag: 'entities.story.pickupgrid_grid.columns.estimate',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.story.pickupgrid_grid.columns.status',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'stage',
            label: '阶段',
            langtag: 'entities.story.pickupgrid_grid.columns.stage',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof PickupGridGridBase
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
     * @memberof PickupGridGridBase
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
     * @memberof PickupGridBase
     */
    public hasRowEdit: any = {
        'id':false,
        'pri':false,
        'plan':false,
        'modulename':false,
        'title':false,
        'openedby':false,
        'assignedto':false,
        'estimate':false,
        'status':false,
        'stage':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof PickupGridBase
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
     * @memberof PickupGridGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'pri',
                srfkey: 'Story__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'plan',
                srfkey: 'CurProductPlan',
                codelistType : 'DYNAMIC',
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
                name: 'assignedto',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'status',
                srfkey: 'Story__status',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'stage',
                srfkey: 'Story__stage',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }

}