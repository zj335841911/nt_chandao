import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import MainLinkTestService from './main-link-test-grid-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainLinkTestGridBase}
 */
export class MainLinkTestGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainLinkTestGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainLinkTestService}
     * @memberof MainLinkTestGridBase
     */
    public service: MainLinkTestService = new MainLinkTestService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof MainLinkTestGridBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainLinkTestGridBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainLinkTestGridBase
     */
    protected appDeLogicName: string = '测试用例';

    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof MainLinkTestBase
     */  
    public appUIService:CaseUIService = new CaseUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainLinkTestBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainLinkTestBase
     */
    protected localStorageTag: string = 'zt_case_mainlinktest_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainLinkTestGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainLinkTestGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainLinkTestGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.case.mainlinktest_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'version',
            label: '版本',
            langtag: 'entities.case.mainlinktest_grid.columns.version',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.mainlinktest_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.mainlinktest_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'type',
            label: '用例类型',
            langtag: 'entities.case.mainlinktest_grid.columns.type',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.case.mainlinktest_grid.columns.openedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lastrunner',
            label: '执行人',
            langtag: 'entities.case.mainlinktest_grid.columns.lastrunner',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lastrundate',
            label: '执行时间',
            langtag: 'entities.case.mainlinktest_grid.columns.lastrundate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'lastrunresult',
            label: '结果',
            langtag: 'entities.case.mainlinktest_grid.columns.lastrunresult',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'status1',
            label: '状态',
            langtag: 'entities.case.mainlinktest_grid.columns.status1',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainLinkTestGridBase
     */
    public getGridRowModel(){
        return {
          product: new FormItemModel(),
          id: new FormItemModel(),
          srfkey: new FormItemModel(),
          version: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainLinkTestGridBase
     */
    public rules: any = {
        product: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属产品 值不能为空', trigger: 'blur' },
        ],
        id: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'blur' },
        ],
        version: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '版本 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '版本 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainLinkTestBase
     */
    public hasRowEdit: any = {
        'id':true,
        'version':true,
        'pri':false,
        'title':false,
        'type':false,
        'openedby':false,
        'lastrunner':false,
        'lastrundate':false,
        'lastrunresult':false,
        'status1':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainLinkTestBase
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
     * @memberof MainLinkTestGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'version',
                srfkey: 'CurCaseVersion',
                codelistType : 'DYNAMIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'pri',
                srfkey: 'Testcase__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'type',
                srfkey: 'Testcase__type',
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
                name: 'lastrunner',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'lastrunresult',
                srfkey: 'Testcase__result',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'status1',
                srfkey: 'TestCaseStatusGrid',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }



}