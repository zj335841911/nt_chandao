import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import StoryaffectCaseService from './storyaffect-case-grid-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {StoryaffectCaseGridBase}
 */
export class StoryaffectCaseGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {StoryaffectCaseService}
     * @memberof StoryaffectCaseGridBase
     */
    public service: StoryaffectCaseService = new StoryaffectCaseService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof StoryaffectCaseGridBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    protected appDeLogicName: string = '测试用例';

    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof StoryaffectCaseBase
     */  
    public appUIService:CaseUIService = new CaseUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof StoryaffectCaseBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof StoryaffectCaseBase
     */
    protected localStorageTag: string = 'zt_case_storyaffectcase_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof StoryaffectCaseGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof StoryaffectCaseGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof StoryaffectCaseGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof StoryaffectCaseGridBase
     */
    public allColumns: any[] = [
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.storyaffectcase_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.storyaffectcase_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.case.storyaffectcase_grid.columns.status',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'openedby',
            label: '由谁创建',
            langtag: 'entities.case.storyaffectcase_grid.columns.openedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lasteditedby',
            label: '最后修改者',
            langtag: 'entities.case.storyaffectcase_grid.columns.lasteditedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof StoryaffectCaseGridBase
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
     * @memberof StoryaffectCaseGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof StoryaffectCaseBase
     */
    public hasRowEdit: any = {
        'pri':false,
        'title':false,
        'status':false,
        'openedby':false,
        'lasteditedby':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof StoryaffectCaseBase
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
     * @memberof StoryaffectCaseGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'pri',
                srfkey: 'Testcase__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'status',
                srfkey: 'Testcase__status',
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
        ]);
    }



}