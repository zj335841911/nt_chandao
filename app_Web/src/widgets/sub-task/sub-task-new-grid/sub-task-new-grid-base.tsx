import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import SubTaskService from '@/service/sub-task/sub-task-service';
import SubTaskNewService from './sub-task-new-grid-service';
import SubTaskUIService from '@/uiservice/sub-task/sub-task-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {SubTaskNewGridBase}
 */
export class SubTaskNewGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {SubTaskNewService}
     * @memberof SubTaskNewGridBase
     */
    public service: SubTaskNewService = new SubTaskNewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SubTaskService}
     * @memberof SubTaskNewGridBase
     */
    public appEntityService: SubTaskService = new SubTaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    protected appDeName: string = 'subtask';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    protected appDeLogicName: string = '子任务';

    /**
     * 界面UI服务对象
     *
     * @type {SubTaskUIService}
     * @memberof SubTaskNewBase
     */  
    public appUIService:SubTaskUIService = new SubTaskUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof SubTaskNewBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof SubTaskNewBase
     */  
    public majorInfoColName:string = "name";


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof SubTaskNewBase
     */
    protected localStorageTag: string = 'ibz_subtask_subtasknew_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof SubTaskNewGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof SubTaskNewGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof SubTaskNewGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof SubTaskNewGridBase
     */
    public allColumns: any[] = [
        {
            name: 'modulename',
            label: '所属模块',
            langtag: 'entities.subtask.subtasknew_grid.columns.modulename',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'storyname',
            label: '相关需求',
            langtag: 'entities.subtask.subtasknew_grid.columns.storyname',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'name',
            label: '任务名称',
            langtag: 'entities.subtask.subtasknew_grid.columns.name',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'type',
            label: '任务类型',
            langtag: 'entities.subtask.subtasknew_grid.columns.type',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'assignedto',
            label: '指派给',
            langtag: 'entities.subtask.subtasknew_grid.columns.assignedto',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'estimate',
            label: '预计',
            langtag: 'entities.subtask.subtasknew_grid.columns.estimate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'eststarted',
            label: '预计开始',
            langtag: 'entities.subtask.subtasknew_grid.columns.eststarted',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'deadline',
            label: '截止日期',
            langtag: 'entities.subtask.subtasknew_grid.columns.deadline',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'desc',
            label: '任务描述',
            langtag: 'entities.subtask.subtasknew_grid.columns.desc',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
        {
            name: 'pri',
            label: '优先级',
            langtag: 'entities.subtask.subtasknew_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: true,
            enableCond: 3 ,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof SubTaskNewGridBase
     */
    public getGridRowModel(){
        return {
          module: new FormItemModel(),
          desc: new FormItemModel(),
          isleaf: new FormItemModel(),
          parent: new FormItemModel(),
          storyname: new FormItemModel(),
          type: new FormItemModel(),
          estimate: new FormItemModel(),
          srfkey: new FormItemModel(),
          project: new FormItemModel(),
          modulename: new FormItemModel(),
          assignedto: new FormItemModel(),
          story: new FormItemModel(),
          pri: new FormItemModel(),
          name: new FormItemModel(),
          allmodules: new FormItemModel(),
          eststarted: new FormItemModel(),
          left: new FormItemModel(),
          deadline: new FormItemModel(),
        }
    }

    /**
     * 是否启用分组
     *
     * @type {boolean}
     * @memberof SubTaskNewBase
     */
    public isEnableGroup:boolean = false;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof SubTaskNewBase
     */
    public groupAppField:string ="";

    /**
     * 分组属性代码表标识
     *
     * @type {string}
     * @memberof SubTaskNewBase
     */
    public groupAppFieldCodelistTag:string ="";

    /**
     * 分组属性代码表类型
     * 
     * @type {string}
     * @memberof SubTaskNewBase
     */
    public groupAppFieldCodelistType: string = "";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof SubTaskNewBase
     */
    public groupMode:string ="NONE";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof SubTaskNewBase
     */
    public codelistTag: string = "";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof SubTaskNewBase
     */
    public codelistType: string = "";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof SubTaskNewGridBase
     */
    public rules() {
        return {
        module: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'id 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务描述 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务描述 值不能为空', trigger: 'blur' },
        ],
        isleaf: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '是否子任务 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '是否子任务 值不能为空', trigger: 'blur' },
        ],
        parent: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '父任务 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '父任务 值不能为空', trigger: 'blur' },
        ],
        storyname: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务类型 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务类型 值不能为空', trigger: 'blur' },
        ],
        estimate: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'blur' },
            {validator:(rule:any, value:any, callback:any)=>{return this.verifyDeRules("estimate",this.deRules,"AND",value).isPast},message: "预计消耗大于等于0", trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
        project: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属项目 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        assignedto: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '指派给 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '指派给 值不能为空', trigger: 'blur' },
        ],
        story: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '优先级 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '优先级 值不能为空', trigger: 'blur' },
        ],
        name: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务名称 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '任务名称 值不能为空', trigger: 'blur' },
            {validator:(rule:any, value:any, callback:any)=>{return this.verifyDeRules("name",this.deRules,"AND",value).isPast},message: "任务名称不大于10", trigger: 'blur' },
        ],
        allmodules: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所有模块 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '所有模块 值不能为空', trigger: 'blur' },
        ],
        eststarted: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计开始 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计开始 值不能为空', trigger: 'blur' },
        ],
        left: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'blur' },
        ],
        deadline: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '截止日期 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '截止日期 值不能为空', trigger: 'blur' },
            {validator:(rule:any, value:any, callback:any)=>{return this.verifyDeRules("deadline",this.deRules,"AND",value).isPast},message: "截至日期必须大于等于预计开始", trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof SubTaskNewBase
     */
    public deRules:any = {
                estimate:[
                  {
                      type:"VALUERANGE2",
                      condOP:"",
                      ruleInfo:"预计消耗大于等于0", 
                      isKeyCond:false,
                      isNotMode:false,
                      minValue:0,
                      deName:"estimate",
                      isIncludeMaxValue:false,
                      isIncludeMinValue:true,
                  },
                ],
                deadline:[
                  {
                      type:"GROUP",
                      condOP:"OR",
                      ruleInfo:"截至日期必须大于等于预计开始", 
                      isKeyCond:false,
                      isNotMode:false,
                      group:[
                  {
                      type:"SIMPLE",
                      condOP:"ISNULL",
                      ruleInfo:"", 
                      isKeyCond:false,
                      isNotMode:false,
                      deName:"eststarted",
                  },
                  {
                      type:"SIMPLE",
                      condOP:"GTANDEQ",
                      ruleInfo:"截至日期必须大于等于预计开始", 
                      isKeyCond:false,
                      paramValue:"ESTSTARTED",
                      paramType:"ENTITYFIELD",
                      isNotMode:false,
                      deName:"deadline",
                  },
                        ]
                  },
                ],
                name:[
                  {
                      type:"STRINGLENGTH",
                      condOP:"",
                      ruleInfo:"任务名称不大于10", 
                      isKeyCond:false,
                      isNotMode:false,
                      maxValue:100,
                      deName:"name",
                      isIncludeMaxValue:true,
                      isIncludeMinValue:false,
                  },
                ],
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof SubTaskNewBase
     */
    public hasRowEdit: any = {
        'modulename':true,
        'storyname':true,
        'name':true,
        'type':true,
        'assignedto':true,
        'estimate':true,
        'eststarted':true,
        'deadline':true,
        'desc':true,
        'pri':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof SubTaskNewBase
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
     * @memberof SubTaskNewGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'type',
                srfkey: 'Task__type',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'assignedto',
                srfkey: 'UserRealNameProject',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'pri',
                srfkey: 'Task__pri',
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
     * @memberof SubTaskNewBase
     */
    public createDefault(row: any){                    
        if (row.hasOwnProperty('isleaf')) {
            row['isleaf'] = '1';
        }
        if (row.hasOwnProperty('parent')) {
            row['parent'] = this.viewparams['srfparentkey'];
        }
        if (row.hasOwnProperty('project')) {
            row['project'] = this.viewparams['project'];
        }
        if (row.hasOwnProperty('allmodules')) {
            row['allmodules'] = '1';
        }
    }


    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof SubTaskNewBase
     */
    public updateDefault(row: any){                    
    }

	/**
     * 分组方法
     * 
     * @memberof SubTaskNewBase
     */
    public group(){
        if(Object.is(this.groupMode,"AUTO")){
            this.drawGroup();
        }else if(Object.is(this.groupMode,"CODELIST")){
            this.drawCodelistGroup();
        }
    }

    /**
     * 获取表格分组相关代码表
     * 
     * @param {string}  codelistType 代码表类型
     * @param {string}  codelistTag 代码表标识
     * @memberof SubTaskNewBase
     */
    public getGroupCodelist(codelistType: string,codelistTag:string){
        let codelist: Array<any> = [];
        // 动态代码表
        if (Object.is(codelistType, "DYNAMIC")) {
            this.codeListService.getItems(codelistTag).then((res: any)=>{
                codelist = res;
            }).catch((error: any) => {
                
            });
        // 静态代码表
        } else if(Object.is(codelistType, "STATIC")){
            codelist = this.$store.getters.getCodeListItems(codelistTag);
        }
        return codelist;
    }

    /**
     * 根据分组代码表绘制分组列表
     * 
     * @memberof SubTaskNewBase
     */
    public drawCodelistGroup(){
        if(!this.isEnableGroup) return;
        // 分组
        let allGroup: Array<any> = [];
        let allGroupField: Array<any> =[];
        let groupTree:Array<any> = [];
        allGroup = this.getGroupCodelist(this.codelistType,this.codelistTag);
        allGroupField = this.getGroupCodelist(this.groupAppFieldCodelistType,this.groupAppFieldCodelistTag);
        if(allGroup.length == 0){
            console.warn("分组数据无效");
        }
        allGroup.forEach((group: any,i: number)=>{
            let children:Array<any> = [];
            this.items.forEach((item: any,j: number)=>{
                if(allGroupField && allGroupField.length > 0){
                    const arr:Array<any> = allGroupField.filter((field:any)=>{return field.value == item[this.groupAppField]});
                    if(Object.is(group.label,arr[0].label)){
                        item.groupById = Number((i+1) * 100 + (i+1) * 1);
                        item.group = '';
                        children.push(item);
                    }
                }else if(Object.is(group.label,item[this.groupAppField])){
                    item.groupById = Number((i+1) * 100 + (i+1) * 1);
                    item.group = '';
                    children.push(item);
                }
            });
            const tree: any ={
                groupById: Number((i+1)*100),
                group: group.label,
                modulename:'',
                storyname:'',
                name:'',
                type:'',
                assignedto:'',
                estimate:'',
                eststarted:'',
                deadline:'',
                desc:'',
                pri:'',
                children: children
            }
            groupTree.push(tree);
        });
        let child:Array<any> = [];
        this.items.forEach((item: any,index: number)=>{
            let i: number = 0;
            if(allGroupField && allGroupField.length > 0){
                const arr:Array<any> = allGroupField.filter((field:any)=>{return field.value == item[this.groupAppField]});
                i = allGroup.findIndex((group: any)=>Object.is(group.label,arr[0].label));
            }else{
                i = allGroup.findIndex((group: any)=>Object.is(group.label,item[this.groupAppField]));
            }
            if(i < 0){
                item.groupById = Number((allGroup.length+1) * 100 + (index+1) * 1);
                item.group = '';
                child.push(item);
            }
        })
        const Tree: any = {
            groupById: Number((allGroup.length+1)*100),
            group: '其他',
            modulename:'',
            storyname:'',
            name:'',
            type:'',
            assignedto:'',
            estimate:'',
            eststarted:'',
            deadline:'',
            desc:'',
            pri:'',
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
     * @memberof SubTaskNewBase
     */
    public drawGroup(){
        if(!this.isEnableGroup) return;
        // 分组
        let allGroup: Array<any> = [];
        let allGroupField: Array<any> =[];
        allGroupField = this.getGroupCodelist(this.groupAppFieldCodelistType,this.groupAppFieldCodelistTag);
        this.items.forEach((item: any)=>{
            if(item.hasOwnProperty(this.groupAppField)){
                if(allGroupField && allGroupField.length > 0){
                    const arr:Array<any> = allGroupField.filter((field:any)=>{return field.value == item[this.groupAppField]});
                    allGroup.push(arr[0].label);
                }else{
                    allGroup.push(item[this.groupAppField]);
                }
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
                if(allGroupField && allGroupField.length > 0){
                    const arr:Array<any> = allGroupField.filter((field:any)=>{return field.value == item[this.groupAppField]});
                    if(Object.is(group,arr[0].label)){
                        item.groupById = Number((groupIndex+1) * 100 + (groupIndex+1) * 1);
                        item.group = '';
                        children.push(item);
                    }
                }else if(Object.is(group,item[this.groupAppField])){
                    item.groupById = Number((groupIndex+1) * 100 + (groupIndex+1) * 1);
                    item.group = '';
                    children.push(item);
                }
            });
            group = group ? group : '其他';
            const tree: any ={
                groupById: Number((groupIndex+1)*100),
                group: group,
                modulename:'',
                storyname:'',
                name:'',
                type:'',
                assignedto:'',
                estimate:'',
                eststarted:'',
                deadline:'',
                desc:'',
                pri:'',
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
     * @memberof SubTaskNewBase
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
     * @memberof SubTaskNewBase
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