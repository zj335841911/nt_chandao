import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import IbzLibModuleService from '@/service/ibz-lib-module/ibz-lib-module-service';
import MainService from './main-grid-service';
import IbzLibModuleUIService from '@/uiservice/ibz-lib-module/ibz-lib-module-ui-service';
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
     * @type {IbzLibModuleService}
     * @memberof MainGridBase
     */
    public appEntityService: IbzLibModuleService = new IbzLibModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'ibzlibmodule';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeLogicName: string = '用例库模块';

    /**
     * 界面UI服务对象
     *
     * @type {IbzLibModuleUIService}
     * @memberof MainBase
     */  
    public appUIService:IbzLibModuleUIService = new IbzLibModuleUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_ua405f96_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Remove(datas, contextJO,paramJO,  $event, xData,this,"IbzLibModule");
    }

    /**
     * 删除
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof IbzLibModuleGridViewBase
     */
    public Remove(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (!xData || !(xData.remove instanceof Function)) {
            return ;
        }
        xData.remove(args);
    }



    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainBase
     */  
    public ActionModel: any = {
        Remove: { name: 'Remove',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALDELETE', actiontarget: 'MULTIKEY'}
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof MainBase
     */  
    public majorInfoColName:string = "name";


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainBase
     */
    protected localStorageTag: string = 'ibz_libmodule_main_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.ibzlibmodule.main_grid.columns.name',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'short',
            label: '简称',
            langtag: 'entities.ibzlibmodule.main_grid.columns.short',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.ibzlibmodule.main_grid.columns.uagridcolumn1',
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
          id: new FormItemModel(),
          short: new FormItemModel(),
          name: new FormItemModel(),
          parent: new FormItemModel(),
          type: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 是否启用分组
     *
     * @type {boolean}
     * @memberof MainBase
     */
    public isEnableGroup:boolean = false;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof MainBase
     */
    public groupAppField:string ="";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof MainBase
     */
    public groupMode:string ="NONE";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof MainBase
     */
    public codelistTag: string = "";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof MainBase
     */
    public codelistType: string = "";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainGridBase
     */
    public rules() {
        return {
        id: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'blur' },
        ],
        short: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '简称 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '简称 值不能为空', trigger: 'blur' },
        ],
        name: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '名称 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '名称 值不能为空', trigger: 'blur' },
        ],
        parent: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型（story） 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型（story） 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainBase
     */
    public hasRowEdit: any = {
        'name':true,
        'short':true,
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
        if(Object.is('Remove', tag)) {
            this.grid_uagridcolumn1_ua405f96_click(row, tag, $event);
        }
    }

    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof MainBase
     */
    public createDefault(row: any){                    
        if (row.hasOwnProperty('parent')) {
            row['parent'] = this.viewparams['srfparentkey'];
        }
        if (row.hasOwnProperty('type')) {
            row['type'] = 'caselib';
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
     * 分组方法
     * 
     * @memberof MainBase
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
     * @memberof MainBase
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
            if(children && children.length === 0){
                children = [
                    {
                        groupById: Number((i+1)*100+(i+1) * 1),
                        group: '',
                        name:'',
                        short:'',
                        Remove:{
                            visabled: false
                        },
                    }
                ]
            }
            const tree: any ={
                groupById: Number((i+1)*100),
                group: group.label,
                name:'',
                short:'',
                Remove:{
                    visabled: false
                },
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
            short:'',
            Remove:{
                visabled: false
            },
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
     * @memberof MainBase
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
                short:'',
                Remove:{
                    visabled: false
                },
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