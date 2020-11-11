import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import Main_DataExportService from './main-data-export-grid-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {Main_DataExportGridBase}
 */
export class Main_DataExportGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof Main_DataExportGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {Main_DataExportService}
     * @memberof Main_DataExportGridBase
     */
    public service: Main_DataExportService = new Main_DataExportService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof Main_DataExportGridBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_DataExportGridBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof Main_DataExportGridBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof Main_DataExportBase
     */  
    public appUIService:BugUIService = new BugUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof Main_DataExportBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof Main_DataExportBase
     */  
    public majorInfoColName:string = "title";

    /**
     * 列主键属性名称
     *
     * @type {string}
     * @memberof Main_DataExportGridBase
     */
    public columnKeyName: string = "id";

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof Main_DataExportBase
     */
    protected localStorageTag: string = 'zt_bug_main_dataexport_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main_DataExportGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof Main_DataExportGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_DataExportGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.bug.main_dataexport_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.bug.main_dataexport_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'confirmed',
            label: '确认',
            langtag: 'entities.bug.main_dataexport_grid.columns.confirmed',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'title',
            label: 'Bug标题',
            langtag: 'entities.bug.main_dataexport_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'status',
            label: 'Bug状态',
            langtag: 'entities.bug.main_dataexport_grid.columns.status',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'openedby',
            label: '由谁创建',
            langtag: 'entities.bug.main_dataexport_grid.columns.openedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'openeddate',
            label: '创建日期',
            langtag: 'entities.bug.main_dataexport_grid.columns.openeddate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'assignedto',
            label: '指派给',
            langtag: 'entities.bug.main_dataexport_grid.columns.assignedto',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'resolution',
            label: '方案',
            langtag: 'entities.bug.main_dataexport_grid.columns.resolution',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'lastediteddate',
            label: '修改日期',
            langtag: 'entities.bug.main_dataexport_grid.columns.lastediteddate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'activateddate',
            label: '激活日期',
            langtag: 'entities.bug.main_dataexport_grid.columns.activateddate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'isfavorites',
            label: '是否收藏',
            langtag: 'entities.bug.main_dataexport_grid.columns.isfavorites',
            show: false,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'product',
            label: '所属产品',
            langtag: 'entities.bug.main_dataexport_grid.columns.product',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'projectname',
            label: '项目',
            langtag: 'entities.bug.main_dataexport_grid.columns.projectname',
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
     * @memberof Main_DataExportGridBase
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
     * @memberof Main_DataExportBase
     */
    public isEnableGroup:boolean = false;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof Main_DataExportBase
     */
    public groupAppField:string ="";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof Main_DataExportBase
     */
    public groupMode:string ="NONE";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof Main_DataExportBase
     */
    public codelistTag: string = "";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof Main_DataExportBase
     */
    public codelistType: string = "";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main_DataExportGridBase
     */
    public rules() {
        return {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'Bug编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'Bug编号 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main_DataExportBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof Main_DataExportBase
     */
    public hasRowEdit: any = {
        'id':false,
        'pri':false,
        'confirmed':false,
        'title':false,
        'status':false,
        'openedby':false,
        'openeddate':false,
        'assignedto':false,
        'resolution':false,
        'lastediteddate':false,
        'activateddate':false,
        'isfavorites':false,
        'product':false,
        'projectname':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof Main_DataExportBase
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
     * @memberof Main_DataExportGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'pri',
                srfkey: 'Bug__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'confirmed',
                srfkey: 'YesNo2',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'status',
                srfkey: 'Bug__status',
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
                name: 'assignedto',
                srfkey: 'UserRealNameW',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'resolution',
                srfkey: 'Bug__resolution',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }


    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof Main_DataExportBase
     */
    public updateDefault(row: any){                    
    }

	/**
     * 分组方法
     * 
     * @memberof Main_DataExportBase
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
     * @memberof Main_DataExportBase
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
                pri:'',
                confirmed:'',
                title:'',
                status:'',
                openedby:'',
                openeddate:'',
                assignedto:'',
                resolution:'',
                lastediteddate:'',
                activateddate:'',
                isfavorites:'',
                product:'',
                projectname:'',
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
            pri:'',
            confirmed:'',
            title:'',
            status:'',
            openedby:'',
            openeddate:'',
            assignedto:'',
            resolution:'',
            lastediteddate:'',
            activateddate:'',
            isfavorites:'',
            product:'',
            projectname:'',
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
     * @memberof Main_DataExportBase
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
                pri:'',
                confirmed:'',
                title:'',
                status:'',
                openedby:'',
                openeddate:'',
                assignedto:'',
                resolution:'',
                lastediteddate:'',
                activateddate:'',
                isfavorites:'',
                product:'',
                projectname:'',
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
     * @memberof Main_DataExportBase
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