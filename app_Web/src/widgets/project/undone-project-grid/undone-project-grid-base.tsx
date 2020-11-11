import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import UndoneProjectService from './undone-project-grid-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {UndoneProjectGridBase}
 */
export class UndoneProjectGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof UndoneProjectGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {UndoneProjectService}
     * @memberof UndoneProjectGridBase
     */
    public service: UndoneProjectService = new UndoneProjectService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof UndoneProjectGridBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UndoneProjectGridBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof UndoneProjectGridBase
     */
    protected appDeLogicName: string = '项目';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof UndoneProjectBase
     */  
    public appUIService:ProjectUIService = new ProjectUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof UndoneProjectBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof UndoneProjectBase
     */  
    public majorInfoColName:string = "name";


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof UndoneProjectBase
     */
    protected localStorageTag: string = 'zt_project_undoneproject_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof UndoneProjectGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof UndoneProjectGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof UndoneProjectGridBase
     */
    public minorSortPSDEF: string = 'openeddate';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof UndoneProjectGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '项目名称',
            langtag: 'entities.project.undoneproject_grid.columns.name',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'doclibcnt',
            label: '文档数量',
            langtag: 'entities.project.undoneproject_grid.columns.doclibcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'openedby',
            label: '由谁添加',
            langtag: 'entities.project.undoneproject_grid.columns.openedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'openeddate',
            label: '添加时间',
            langtag: 'entities.project.undoneproject_grid.columns.openeddate',
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
     * @memberof UndoneProjectGridBase
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
     * @memberof UndoneProjectBase
     */
    public isEnableGroup:boolean = false;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof UndoneProjectBase
     */
    public groupAppField:string ="";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof UndoneProjectBase
     */
    public groupMode:string ="NONE";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof UndoneProjectBase
     */
    public codelistTag: string = "";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof UndoneProjectBase
     */
    public codelistType: string = "";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof UndoneProjectGridBase
     */
    public rules() {
        return {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '项目编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '项目编号 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof UndoneProjectBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof UndoneProjectBase
     */
    public hasRowEdit: any = {
        'name':false,
        'doclibcnt':false,
        'openedby':false,
        'openeddate':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof UndoneProjectBase
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
     * @memberof UndoneProjectGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
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


    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof UndoneProjectBase
     */
    public updateDefault(row: any){                    
    }

	/**
     * 分组方法
     * 
     * @memberof UndoneProjectBase
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
     * @memberof UndoneProjectBase
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
                name:'',
                doclibcnt:'',
                openedby:'',
                openeddate:'',
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
            name:'',
            doclibcnt:'',
            openedby:'',
            openeddate:'',
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
     * @memberof UndoneProjectBase
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
                name:'',
                doclibcnt:'',
                openedby:'',
                openeddate:'',
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
     * @memberof UndoneProjectBase
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