import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import ProjectTeamService from '@/service/project-team/project-team-service';
import MainService from './main-grid-service';
import ProjectTeamUIService from '@/uiservice/project-team/project-team-ui-service';
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
     * @type {ProjectTeamService}
     * @memberof MainGridBase
     */
    public appEntityService: ProjectTeamService = new ProjectTeamService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'projectteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeLogicName: string = '项目团队';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectTeamUIService}
     * @memberof MainBase
     */  
    public appUIService:ProjectTeamUIService = new ProjectTeamUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ubcb9fff_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProjectTeamUIService  = new ProjectTeamUIService();
        curUIService.ProjectTeam_RemoveMember(datas,contextJO, paramJO,  $event, xData,this,"ProjectTeam");
    }


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainBase
     */  
    public ActionModel: any = {
        RemoveMember: { name: 'RemoveMember',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__PROJT_TM_BUT', actiontarget: 'SINGLEKEY'}
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof MainBase
     */  
    public majorInfoColName:string = "account";

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainBase
     */
    protected localStorageTag: string = 'ibz_projectteam_main_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'account',
            label: '用户',
            langtag: 'entities.projectteam.main_grid.columns.account',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'role',
            label: '角色',
            langtag: 'entities.projectteam.main_grid.columns.role',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'join',
            label: '加盟日',
            langtag: 'entities.projectteam.main_grid.columns.join',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'days',
            label: '可用工日',
            langtag: 'entities.projectteam.main_grid.columns.days',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'hours',
            label: '可用工时/天',
            langtag: 'entities.projectteam.main_grid.columns.hours',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'total',
            label: '总计可用',
            langtag: 'entities.projectteam.main_grid.columns.total',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'limited',
            label: '受限用户',
            langtag: 'entities.projectteam.main_grid.columns.limited',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.projectteam.main_grid.columns.uagridcolumn1',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
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
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainBase
     */
    public hasRowEdit: any = {
        'account':false,
        'role':false,
        'join':false,
        'days':false,
        'hours':false,
        'total':false,
        'limited':false,
        'uagridcolumn1':false,
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
     * 是否为实体导出对象
     *
     * @protected
     * @type {boolean}
     * @memberof MainGridBase
     */
    protected isDeExport: boolean = true;

    /**
     * 所有导出列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allExportColumns: any[] = [
        {
            name: 'account',
            label: '用户',
            langtag: 'entities.projectteam.main_grid.exportColumns.account',
            show: true,
        },
        {
            name: 'role',
            label: '角色',
            langtag: 'entities.projectteam.main_grid.exportColumns.role',
            show: true,
        },
        {
            name: 'join',
            label: '加盟日',
            langtag: 'entities.projectteam.main_grid.exportColumns.join',
            show: true,
        },
        {
            name: 'days',
            label: '可用工日',
            langtag: 'entities.projectteam.main_grid.exportColumns.days',
            show: true,
        },
        {
            name: 'hours',
            label: '可用工时/天',
            langtag: 'entities.projectteam.main_grid.exportColumns.hours',
            show: true,
        },
        {
            name: 'total',
            label: '总计可用',
            langtag: 'entities.projectteam.main_grid.exportColumns.total',
            show: true,
        },
        {
            name: 'limited',
            label: '受限用户',
            langtag: 'entities.projectteam.main_grid.exportColumns.limited',
            show: true,
        },
    ]

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
        ]);
    }


    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof MainGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('RemoveMember', tag)) {
            this.grid_uagridcolumn1_ubcb9fff_click(row, tag, $event);
        }
    }

    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof MainBase
     */
    public updateDefault(row: any){                    
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof MainBase
     */
    public computeDefaultValueWithParam(action:string,param:string,data:any){
        if(Object.is(action,"UPDATE")){
            const nativeData:any = this.service.getCopynativeData();
            if(nativeData && (nativeData instanceof Array) && nativeData.length >0){
                let targetData:any = nativeData.find((item:any) =>{
                    return item.id === data.srfkey;
                })
                if(targetData){
                    return targetData[param]?targetData[param]:null;
                }else{
                    return null;
                }
            }else{
                return null;
            }
        }else{
           return this.service.getRemoteCopyData()[param]?this.service.getRemoteCopyData()[param]:null;
        }
    }


}