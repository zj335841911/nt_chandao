import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import Main_ReportSubService from './main-report-sub-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main_ReportSubGridBase}
 */
export class Main_ReportSubGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {Main_ReportSubService}
     * @memberof Main_ReportSubGridBase
     */
    public service: Main_ReportSubService = new Main_ReportSubService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof Main_ReportSubGridBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_ReportSubGridBase
     */
    protected appDeName: string = 'story';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_story_main_reportsub_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main_ReportSubGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main_ReportSubGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_ReportSubGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.story.main_reportsub_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.story.main_reportsub_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: '需求名称',
            langtag: 'entities.story.main_reportsub_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.story.main_reportsub_grid.columns.openedby',
            show: true,
            util: 'PX'
        },
        {
            name: 'assignedto',
            label: '指派',
            langtag: 'entities.story.main_reportsub_grid.columns.assignedto',
            show: true,
            util: 'PX'
        },
        {
            name: 'estimate',
            label: '预计',
            langtag: 'entities.story.main_reportsub_grid.columns.estimate',
            show: true,
            util: 'PX'
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.story.main_reportsub_grid.columns.status',
            show: true,
            util: 'PX'
        },
        {
            name: 'stage',
            label: '阶段',
            langtag: 'entities.story.main_reportsub_grid.columns.stage',
            show: true,
            util: 'PX'
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof Main_ReportSubGridBase
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
     * @memberof Main_ReportSubGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
    }

}