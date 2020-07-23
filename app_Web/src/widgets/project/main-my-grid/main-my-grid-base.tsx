import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import MainMyService from './main-my-grid-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {MainMyGridBase}
 */
export class MainMyGridBase extends GridControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainMyGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainMyService}
     * @memberof MainMyGridBase
     */
    public service: MainMyService = new MainMyService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof MainMyGridBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainMyGridBase
     */
    protected appDeName: string = 'project';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof MainMyBase
     */  
    public appUIService:ProjectUIService = new ProjectUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainMyBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_project_mainmy_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainMyGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainMyGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainMyGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.project.mainmy_grid.columns.id',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'code',
            label: '项目代号',
            langtag: 'entities.project.mainmy_grid.columns.code',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'name',
            label: '项目名称',
            langtag: 'entities.project.mainmy_grid.columns.name',
            show: true,
            util: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'begin',
            label: '开始时间',
            langtag: 'entities.project.mainmy_grid.columns.begin',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'end',
            label: '结束日期',
            langtag: 'entities.project.mainmy_grid.columns.end',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'status',
            label: '项目状态',
            langtag: 'entities.project.mainmy_grid.columns.status',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'role',
            label: '角色',
            langtag: 'entities.project.mainmy_grid.columns.role',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'join',
            label: '加盟日',
            langtag: 'entities.project.mainmy_grid.columns.join',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'hours',
            label: '可用工时/天',
            langtag: 'entities.project.mainmy_grid.columns.hours',
            show: true,
            util: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainMyGridBase
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
     * @memberof MainMyGridBase
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
     * @memberof MainMyBase
     */
    public hasRowEdit: any = {
        'id':false,
        'code':false,
        'name':false,
        'begin':false,
        'end':false,
        'status':false,
        'role':false,
        'join':false,
        'hours':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainMyBase
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
     * @memberof MainMyGridBase
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