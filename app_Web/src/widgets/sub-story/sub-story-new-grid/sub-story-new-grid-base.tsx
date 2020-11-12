import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import SubStoryService from '@/service/sub-story/sub-story-service';
import SubStoryNewService from './sub-story-new-grid-service';
import SubStoryUIService from '@/uiservice/sub-story/sub-story-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {SubStoryNewGridBase}
 */
export class SubStoryNewGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof SubStoryNewGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {SubStoryNewService}
     * @memberof SubStoryNewGridBase
     */
    public service: SubStoryNewService = new SubStoryNewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SubStoryService}
     * @memberof SubStoryNewGridBase
     */
    public appEntityService: SubStoryService = new SubStoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SubStoryNewGridBase
     */
    protected appDeName: string = 'substory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof SubStoryNewGridBase
     */
    protected appDeLogicName: string = '子需求';

    /**
     * 界面UI服务对象
     *
     * @type {SubStoryUIService}
     * @memberof SubStoryNewBase
     */  
    public appUIService:SubStoryUIService = new SubStoryUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof SubStoryNewBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof SubStoryNewBase
     */  
    public majorInfoColName:string = "title";


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof SubStoryNewBase
     */
    protected localStorageTag: string = 'ibz_substory_substorynew_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof SubStoryNewGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof SubStoryNewGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof SubStoryNewGridBase
     */
    public limit: number = 60;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof SubStoryNewGridBase
     */
    public allColumns: any[] = [
        {
            name: 'modulename',
            label: '所属模块名称',
            langtag: 'entities.substory.substorynew_grid.columns.modulename',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'plan',
            label: '所属计划',
            langtag: 'entities.substory.substorynew_grid.columns.plan',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'title',
            label: '需求名称',
            langtag: 'entities.substory.substorynew_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'spec',
            label: '需求描述',
            langtag: 'entities.substory.substorynew_grid.columns.spec',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'pri',
            label: '优先级',
            langtag: 'entities.substory.substorynew_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'estimate',
            label: '预计工时',
            langtag: 'entities.substory.substorynew_grid.columns.estimate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'neednotreview',
            label: '需要评审',
            langtag: 'entities.substory.substorynew_grid.columns.neednotreview',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'product',
            label: '所属产品',
            langtag: 'entities.substory.substorynew_grid.columns.product',
            show: false,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'parent',
            label: '父需求',
            langtag: 'entities.substory.substorynew_grid.columns.parent',
            show: false,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof SubStoryNewGridBase
     */
    public getGridRowModel(){
        return {
          product: new FormItemModel(),
          neednotreview: new FormItemModel(),
          spec: new FormItemModel(),
          modulename: new FormItemModel(),
          module: new FormItemModel(),
          pri: new FormItemModel(),
          title: new FormItemModel(),
          plan: new FormItemModel(),
          parent: new FormItemModel(),
          estimate: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 是否启用分组
     *
     * @type {boolean}
     * @memberof SubStoryNewBase
     */
    public isEnableGroup:boolean = false;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof SubStoryNewBase
     */
    public groupAppField:string ="";

    /**
     * 分组属性代码表标识
     *
     * @type {string}
     * @memberof SubStoryNewBase
     */
    public groupAppFieldCodelistTag:string ="";

    /**
     * 分组属性代码表类型
     * 
     * @type {string}
     * @memberof SubStoryNewBase
     */
    public groupAppFieldCodelistType: string = "";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof SubStoryNewBase
     */
    public groupMode:string ="NONE";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof SubStoryNewBase
     */
    public codelistTag: string = "";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof SubStoryNewBase
     */
    public codelistType: string = "";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof SubStoryNewGridBase
     */
    public rules() {
        return {
        product: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属产品 值不能为空', trigger: 'blur' },
        ],
        neednotreview: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需要评审 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需要评审 值不能为空', trigger: 'blur' },
        ],
        spec: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求描述 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求描述 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属模块名称 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属模块名称 值不能为空', trigger: 'blur' },
        ],
        module: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '值不能为空', trigger: 'blur' },
        ],
        pri: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '优先级 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '优先级 值不能为空', trigger: 'blur' },
        ],
        title: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求名称 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '需求名称 值不能为空', trigger: 'blur' },
        ],
        plan: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属计划 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属计划 值不能为空', trigger: 'blur' },
        ],
        parent: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '父需求 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '父需求 值不能为空', trigger: 'blur' },
        ],
        estimate: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计工时 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计工时 值不能为空', trigger: 'blur' },
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
     * @memberof SubStoryNewBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof SubStoryNewBase
     */
    public hasRowEdit: any = {
        'modulename':true,
        'plan':true,
        'title':true,
        'spec':true,
        'pri':true,
        'estimate':true,
        'neednotreview':true,
        'product':true,
        'parent':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof SubStoryNewBase
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
     * @memberof SubStoryNewGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'plan',
                srfkey: 'CurProductPlan',
                codelistType : 'DYNAMIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'pri',
                srfkey: 'Story__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'neednotreview',
                srfkey: 'YesNo2',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof SubStoryNewBase
     */
    public createDefault(row: any){                    
        if (row.hasOwnProperty('product')) {
            row['product'] = this.viewparams['product'];
        }
        if (row.hasOwnProperty('parent')) {
            row['parent'] = this.viewparams['parent'];
        }
    }


    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof SubStoryNewBase
     */
    public updateDefault(row: any){                    
    }

	/**
     * 分组方法
     * 
     * @memberof SubStoryNewBase
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
     * @memberof SubStoryNewBase
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
                modulename:'',
                plan:'',
                title:'',
                spec:'',
                pri:'',
                estimate:'',
                neednotreview:'',
                product:'',
                parent:'',
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
            modulename:'',
            plan:'',
            title:'',
            spec:'',
            pri:'',
            estimate:'',
            neednotreview:'',
            product:'',
            parent:'',
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
     * @memberof SubStoryNewBase
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
                modulename:'',
                plan:'',
                title:'',
                spec:'',
                pri:'',
                estimate:'',
                neednotreview:'',
                product:'',
                parent:'',
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
     * @memberof SubStoryNewBase
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

    /**
     * 保存行，批量保存、
     * @memberof SubStoryNewBase
     */
    public async save() {
        if (!await this.validateAll()) {
            if(this.errorMessages && this.errorMessages.length > 0) {
                this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: this.errorMessages[0] });
            } else {
                this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: (this.$t('app.commonWords.rulesException') as string) });
            }
            return [];
        }
        let action = "saveBatch";
        let _context = JSON.parse(JSON.stringify(this.context));
        let result: Array<any> = [];
        for(const item of this.items){
            let { data: Data,context: Context } = this.service.handleRequestData(action, _context, item, true);
            if (Object.is(item.rowDataState, 'create')){
                Data.id = null;
            }
            result.push(Data);
        }
        const post: Promise<any> = this.appEntityService.saveBatch(_context, result, true);
        post.then((response:any) =>{
            if (response && response.status === 200) {
                this.$Notice.success({ 
                    title: (this.$t('app.commonWords.saveSuccess') as string),
                    duration: 3
                });
                this.closeView(response.data);
            }
        }).catch((error: any) =>{
            this.$Notice.error({
                title: (this.$t('app.commonWords.wrong') as string),
                desc: error.data.message,
                duration: 3
            });
            console.error(error);
        })
    }


}