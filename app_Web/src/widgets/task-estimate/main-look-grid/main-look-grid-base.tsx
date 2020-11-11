import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import TaskEstimateService from '@/service/task-estimate/task-estimate-service';
import MainLookService from './main-look-grid-service';
import TaskEstimateUIService from '@/uiservice/task-estimate/task-estimate-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainLookGridBase}
 */
export class MainLookGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainLookGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainLookService}
     * @memberof MainLookGridBase
     */
    public service: MainLookService = new MainLookService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskEstimateService}
     * @memberof MainLookGridBase
     */
    public appEntityService: TaskEstimateService = new TaskEstimateService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainLookGridBase
     */
    protected appDeName: string = 'taskestimate';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainLookGridBase
     */
    protected appDeLogicName: string = '任务预计';

    /**
     * 界面UI服务对象
     *
     * @type {TaskEstimateUIService}
     * @memberof MainLookBase
     */  
    public appUIService:TaskEstimateUIService = new TaskEstimateUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainLookBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof MainLookBase
     */  
    public majorInfoColName:string = "id";

    /**
     * 列主键属性名称
     *
     * @type {string}
     * @memberof MainLookGridBase
     */
    public columnKeyName: string = "id";

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainLookBase
     */
    protected localStorageTag: string = 'zt_taskestimate_mainlook_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MainLookGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof MainLookGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MainLookGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainLookGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.taskestimate.mainlook_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 0 ,
        },
        {
            name: 'dates',
            label: '日期',
            langtag: 'entities.taskestimate.mainlook_grid.columns.dates',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'consumed',
            label: '总计消耗',
            langtag: 'entities.taskestimate.mainlook_grid.columns.consumed',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'left',
            label: '预计剩余',
            langtag: 'entities.taskestimate.mainlook_grid.columns.left',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'work',
            label: '备注',
            langtag: 'entities.taskestimate.mainlook_grid.columns.work',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainLookGridBase
     */
    public getGridRowModel(){
        return {
          id: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 是否启用分组
     *
     * @type {boolean}
     * @memberof MainLookBase
     */
    public isEnableGroup:boolean = false;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof MainLookBase
     */
    public groupAppField:string ="";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof MainLookBase
     */
    public groupMode:string ="NONE";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof MainLookBase
     */
    public codelistTag: string = "";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof MainLookBase
     */
    public codelistType: string = "";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainLookGridBase
     */
    public rules() {
        return {
        id: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainLookBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainLookBase
     */
    public hasRowEdit: any = {
        'id':false,
        'dates':false,
        'consumed':false,
        'left':false,
        'work':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainLookBase
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
     * @memberof MainLookGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }


    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof MainLookBase
     */
    public updateDefault(row: any){                    
    }

	/**
     * 分组方法
     * 
     * @memberof MainLookBase
     */
    public group(){
        if(Object.is(this.groupMode,"AUTO")){
            this.drawGroup();
        }else if(Object.is(this.groupMode,"CODELIST")){
            this.drawCodelistGroup();
        }
    }

    /**
     * 根据分组代码表绘制分组列表
     * 
     * @memberof MainLookBase
     */
    public async drawCodelistGroup(){
        if(!this.isEnableGroup) return;
        // 分组
        let allGroup: Array<any> = [];
        let groupTree:Array<any> = [];
        // 动态代码表
        if (Object.is(this.codelistType, "DYNAMIC")) {
            allGroup = await this.codeListService.getItems(this.codelistTag);
        // 静态代码表
        } else if(Object.is(this.codelistType, "STATIC")){
            allGroup = this.$store.getters.getCodeListItems(this.codelistTag);
        }
        if(allGroup.length == 0){
            console.warn("分组数据无效");
        }
        allGroup.forEach((group: any,i: number)=>{
            let children:Array<any> = [];
            this.items.forEach((item: any,j: number)=>{
                if(Object.is(group.label,item[this.groupAppField])){
                    item.groupById = Number((i+1) * 100 + (i+1) * 1);
                    item.group = '';
                    children.push(item);
                }
            });
            const tree: any ={
                groupById: Number((i+1)*100),
                group: group.label,
                id:'',
                dates:'',
                consumed:'',
                left:'',
                work:'',
                children: children
            }
            groupTree.push(tree);
        });
        let child:Array<any> = [];
        this.items.forEach((item: any,index: number)=>{
            let i = allGroup.findIndex((group: any)=>Object.is(group.label,item[this.groupAppField]));
            if(i < 0){
                item.groupById = Number((allGroup.length+1) * 100 + (index+1) * 1);
                item.group = '';
                child.push(item);
            }
        })
        const Tree: any = {
            groupById: Number((allGroup.length+1)*100),
            group: this.$t('app.gridpage.other'),
            id:'',
            dates:'',
            consumed:'',
            left:'',
            work:'',
            children: child
        }
        if(child && child.length > 0){
            groupTree.push(Tree);
        }
        this.items = groupTree;
        if(this.actualIsOpenEdit) {
            for(let i = 0; i < this.items.length; i++) {
                this.gridItemsModel.push(this.getGridRowModel());
            }
        }
    }

    /**
     * 绘制分组
     * 
     * @memberof MainLookBase
     */
    public drawGroup(){
        if(!this.isEnableGroup) return;
        // 分组
        let allGroup: Array<any> = [];
        this.items.forEach((item: any)=>{
            if(item.hasOwnProperty(this.groupAppField)){
                allGroup.push(item[this.groupAppField]);
            }
        });
        let groupTree:Array<any> = [];
        allGroup = [...new Set(allGroup)];
        if(allGroup.length == 0){
            console.warn("分组数据无效");
        }
        // 组装数据
        allGroup.forEach((group: any, groupIndex: number)=>{
            let children:Array<any> = [];
            this.items.forEach((item: any,itemIndex: number)=>{
                if(Object.is(group,item[this.groupAppField])){
                    item.groupById = Number((groupIndex+1) * 100 + (itemIndex+1) * 1);
                    item.group = '';
                    children.push(item);
                }
            });
            group = group ? group : this.$t('app.gridpage.other');
            const tree: any ={
                groupById: Number((groupIndex+1)*100),
                group: group,
                id:'',
                dates:'',
                consumed:'',
                left:'',
                work:'',
                children: children,
            }
            groupTree.push(tree);
        });
        this.items = groupTree;
        if(this.actualIsOpenEdit) {
            for(let i = 0; i < this.items.length; i++) {
                this.gridItemsModel.push(this.getGridRowModel());
            }
        }
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof MainLookBase
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