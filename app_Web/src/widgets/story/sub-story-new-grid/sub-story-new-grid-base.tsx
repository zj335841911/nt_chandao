import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import SubStoryNewService from './sub-story-new-grid-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {SubStoryNewGridBase}
 */
export class SubStoryNewGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof SubStoryNewGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {SubStoryNewService}
     * @memberof SubStoryNewGridBase
     */
    public service: SubStoryNewService = new SubStoryNewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof SubStoryNewGridBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SubStoryNewGridBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof SubStoryNewGridBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof SubStoryNewBase
     */  
    public appUIService:StoryUIService = new StoryUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof SubStoryNewBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof SubStoryNewBase
     */
    protected localStorageTag: string = 'zt_story_substorynew_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof SubStoryNewGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof SubStoryNewGridBase
     */
    public limit: number = 60;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof SubStoryNewGridBase
     */
    public allColumns: any[] = [
        {
            name: 'modulename',
            label: '所属模块名称',
            langtag: 'entities.story.substorynew_grid.columns.modulename',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'plan',
            label: '所属计划',
            langtag: 'entities.story.substorynew_grid.columns.plan',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'title',
            label: '需求名称',
            langtag: 'entities.story.substorynew_grid.columns.title',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'spec',
            label: '需求描述',
            langtag: 'entities.story.substorynew_grid.columns.spec',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'pri',
            label: '优先级',
            langtag: 'entities.story.substorynew_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'estimate',
            label: '预计工时',
            langtag: 'entities.story.substorynew_grid.columns.estimate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'neednotreview',
            label: '需要评审',
            langtag: 'entities.story.substorynew_grid.columns.neednotreview',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'product',
            label: '所属产品',
            langtag: 'entities.story.substorynew_grid.columns.product',
            show: false,
            unit: 'PX',
            isEnableRowEdit: true,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof SubStoryNewGridBase
     */
    public getGridRowModel(){
        return {
          product: new FormItemModel(),
          neednotreview: new FormItemModel(),
          spec: new FormItemModel(),
          modulename: new FormItemModel(),
          module: new FormItemModel(),
          pri: new FormItemModel(),
          title: new FormItemModel(),
          plan: new FormItemModel(),
          estimate: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof SubStoryNewGridBase
     */
    public rules: any = {
        product: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属产品 值不能为空', trigger: 'blur' },
        ],
        neednotreview: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需要评审 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需要评审 值不能为空', trigger: 'blur' },
        ],
        spec: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求描述 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求描述 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属模块名称 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属模块名称 值不能为空', trigger: 'blur' },
        ],
        module: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '值不能为空', trigger: 'blur' },
        ],
        pri: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '优先级 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '优先级 值不能为空', trigger: 'blur' },
        ],
        title: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求名称 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求名称 值不能为空', trigger: 'blur' },
        ],
        plan: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属计划 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属计划 值不能为空', trigger: 'blur' },
        ],
        estimate: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计工时 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计工时 值不能为空', trigger: 'blur' },
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
     * @memberof SubStoryNewBase
     */
    public hasRowEdit: any = {
        'modulename':true,
        'plan':true,
        'title':true,
        'spec':true,
        'pri':true,
        'estimate':true,
        'neednotreview':true,
        'product':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof SubStoryNewBase
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
     * @memberof SubStoryNewGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'plan',
                srfkey: 'CurProductPlan',
                codelistType : 'DYNAMIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'pri',
                srfkey: 'Story__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'neednotreview',
                srfkey: 'YesNo2',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }

}