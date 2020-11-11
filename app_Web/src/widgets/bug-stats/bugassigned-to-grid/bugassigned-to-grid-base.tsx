import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import BugStatsService from '@/service/bug-stats/bug-stats-service';
import BugassignedToService from './bugassigned-to-grid-service';
import BugStatsUIService from '@/uiservice/bug-stats/bug-stats-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {BugassignedToGridBase}
 */
export class BugassignedToGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof BugassignedToGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {BugassignedToService}
     * @memberof BugassignedToGridBase
     */
    public service: BugassignedToService = new BugassignedToService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugStatsService}
     * @memberof BugassignedToGridBase
     */
    public appEntityService: BugStatsService = new BugStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugassignedToGridBase
     */
    protected appDeName: string = 'bugstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof BugassignedToGridBase
     */
    protected appDeLogicName: string = 'Bug统计';

    /**
     * 界面UI服务对象
     *
     * @type {BugStatsUIService}
     * @memberof BugassignedToBase
     */  
    public appUIService:BugStatsUIService = new BugStatsUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof BugassignedToBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof BugassignedToBase
     */  
    public majorInfoColName:string = "";


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof BugassignedToBase
     */
    protected localStorageTag: string = 'ibz_bugstats_bugassignedto_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof BugassignedToGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof BugassignedToGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof BugassignedToGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof BugassignedToGridBase
     */
    public allColumns: any[] = [
        {
            name: 'assignedto',
            label: '姓名',
            langtag: 'entities.bugstats.bugassignedto_grid.columns.assignedto',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'productname',
            label: '产品',
            langtag: 'entities.bugstats.bugassignedto_grid.columns.productname',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'bugcnt',
            label: 'Bug',
            langtag: 'entities.bugstats.bugassignedto_grid.columns.bugcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'bugtotal',
            label: '总计',
            langtag: 'entities.bugstats.bugassignedto_grid.columns.bugtotal',
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
     * @memberof BugassignedToGridBase
     */
    public getGridRowModel(){
        return {
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 是否启用分组
     *
     * @type {boolean}
     * @memberof BugassignedToBase
     */
    public isEnableGroup:boolean = true;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof BugassignedToBase
     */
    public groupAppField:string ="assignedto";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof BugassignedToBase
     */
    public groupMode:string ="AUTO";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof BugassignedToBase
     */
    public codelistTag: string = "UserRealName";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof BugassignedToBase
     */
    public codelistType: string = "DYNAMIC";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof BugassignedToGridBase
     */
    public rules() {
        return {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '标识 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '标识 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof BugassignedToBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof BugassignedToBase
     */
    public hasRowEdit: any = {
        'assignedto':false,
        'productname':false,
        'bugcnt':false,
        'bugtotal':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof BugassignedToBase
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
     * @memberof BugassignedToGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'assignedto',
                srfkey: 'UserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        ]);
    }


    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof BugassignedToBase
     */
    public updateDefault(row: any){                    
    }

	/**
     * 分组方法
     * 
     * @memberof BugassignedToBase
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
     * @memberof BugassignedToBase
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
                assignedto:'',
                productname:'',
                bugcnt:'',
                bugtotal:'',
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
            assignedto:'',
            productname:'',
            bugcnt:'',
            bugtotal:'',
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
     * @memberof BugassignedToBase
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
                assignedto:'',
                productname:'',
                bugcnt:'',
                bugtotal:'',
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
     * @memberof BugassignedToBase
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