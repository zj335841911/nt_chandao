import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import ProjectTeamService from '@/service/project-team/project-team-service';
import Main_EditRowService from './main-edit-row-grid-service';
import ProjectTeamUIService from '@/uiservice/project-team/project-team-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {Main_EditRowGridBase}
 */
export class Main_EditRowGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof Main_EditRowGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {Main_EditRowService}
     * @memberof Main_EditRowGridBase
     */
    public service: Main_EditRowService = new Main_EditRowService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectTeamService}
     * @memberof Main_EditRowGridBase
     */
    public appEntityService: ProjectTeamService = new ProjectTeamService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_EditRowGridBase
     */
    protected appDeName: string = 'projectteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof Main_EditRowGridBase
     */
    protected appDeLogicName: string = '项目团队';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectTeamUIService}
     * @memberof Main_EditRowBase
     */  
    public appUIService:ProjectTeamUIService = new ProjectTeamUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof Main_EditRowBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof Main_EditRowBase
     */
    protected localStorageTag: string = 'ibz_projectteam_main_editrow_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main_EditRowGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main_EditRowGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof Main_EditRowGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main_EditRowGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_EditRowGridBase
     */
    public allColumns: any[] = [
        {
            name: 'account',
            label: '用户',
            langtag: 'entities.projectteam.main_editrow_grid.columns.account',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'role',
            label: '角色',
            langtag: 'entities.projectteam.main_editrow_grid.columns.role',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: true,
        },
        {
            name: 'days',
            label: '可用工日',
            langtag: 'entities.projectteam.main_editrow_grid.columns.days',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'hours',
            label: '可用工时/天',
            langtag: 'entities.projectteam.main_editrow_grid.columns.hours',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
        {
            name: 'limited',
            label: '受限用户',
            langtag: 'entities.projectteam.main_editrow_grid.columns.limited',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof Main_EditRowGridBase
     */
    public getGridRowModel(){
        return {
          limited: new FormItemModel(),
          days: new FormItemModel(),
          hours: new FormItemModel(),
          role: new FormItemModel(),
          account: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main_EditRowGridBase
     */
    public rules: any = {
        limited: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '受限用户 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '受限用户 值不能为空', trigger: 'blur' },
        ],
        days: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '可用工日 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '可用工日 值不能为空', trigger: 'blur' },
        ],
        hours: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '可用工时/天 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '可用工时/天 值不能为空', trigger: 'blur' },
        ],
        role: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '角色 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '角色 值不能为空', trigger: 'blur' },
        ],
        account: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用户 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用户 值不能为空', trigger: 'blur' },
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
     * @memberof Main_EditRowBase
     */
    public hasRowEdit: any = {
        'account':true,
        'role':true,
        'days':true,
        'hours':true,
        'limited':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof Main_EditRowBase
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
     * @memberof Main_EditRowGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'account',
                srfkey: 'RealNameProjectM',
                codelistType : 'DYNAMIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'limited',
                srfkey: 'YesNo3',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }


    /**
     * 表格编辑项值变化
     *
     * @public
     * @param row 行数据
     * @param property 列编辑项名
     * @param row 列编辑项值
     * @returns {void}
     * @memberof Main_EditRowGridBase
     */
    public gridEditItemChange(row: any, property: string, value: any, rowIndex: number): void {
        super.gridEditItemChange(row, property, value, rowIndex);
        if(Object.is(property, 'account')){
            const details: string[] = ['role'];
            this.updateGridEditItem('GetUserRole', row, details, true);
        }
    }

    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof Main_EditRowGridBase
     */
    public createDefault(row: any): void {
        if (row.hasOwnProperty('limited')) {
            row['limited'] = 'no';
        }
        if (row.hasOwnProperty('days')) {
            row['days'] = 45;
        }
        if (row.hasOwnProperty('hours')) {
            row['hours'] = 7;
        }
    }
}