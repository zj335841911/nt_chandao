import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import Main_BuildSubService from './main-build-sub-grid-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {Main_BuildSubGridBase}
 */
export class Main_BuildSubGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {Main_BuildSubService}
     * @memberof Main_BuildSubGridBase
     */
    public service: Main_BuildSubService = new Main_BuildSubService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof Main_BuildSubGridBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof Main_BuildSubBase
     */  
    public appUIService:BugUIService = new BugUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u5f3af70_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_ConfirmBug(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u424511e_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_ResolveBug(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u13bca5a_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_CloseBug(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_udb5e3af_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Copy(datas, contextJO,paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_uea0faba_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_MainEdit(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 拷贝
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof BugBuildSubGridView_New_9212Base
     */
    public Copy(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        if (args.length === 0) {
            return;
        }
        const _this: any = this;
        if (_this.newdata && _this.newdata instanceof Function) {
            const data: any = { };
            if (args.length > 0) {
                Object.assign(data, { bug: args[0].bug });
            }
            if(!params) params = {};
            Object.assign(params,{copymode:true});
            _this.newdata([{ ...data }], params, $event, xData);
        } else {
            Object.assign(this.viewparams,{copymode:true});
        }
    }


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof Main_BuildSubBase
     */  
    public ActionModel: any = {
        ConfirmBug: { name: 'ConfirmBug',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__BUG_CONFIRM_BUT', actiontarget: 'SINGLEKEY'},
        ResolveBug: { name: 'ResolveBug',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__BUG_RESOLVE_BUT', actiontarget: 'SINGLEKEY'},
        CloseBug: { name: 'CloseBug',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__BUG_CLOSE_BUT', actiontarget: 'SINGLEKEY'},
        Copy: { name: 'Copy',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALCREATE', actiontarget: 'SINGLEKEY'},
        MainEdit: { name: 'MainEdit',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__BUG_EDIT_BUT', actiontarget: 'SINGLEKEY'}
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof Main_BuildSubBase
     */  
    public majorInfoColName:string = "title";

    /**
     * 列主键属性名称
     *
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    public columnKeyName: string = "id";

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof Main_BuildSubBase
     */
    protected localStorageTag: string = 'zt_bug_main_buildsub_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_BuildSubGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.bug.main_buildsub_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.bug.main_buildsub_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'confirmed',
            label: '是否确认',
            langtag: 'entities.bug.main_buildsub_grid.columns.confirmed',
            show: false,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'title',
            label: 'Bug标题',
            langtag: 'entities.bug.main_buildsub_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'status',
            label: 'Bug状态',
            langtag: 'entities.bug.main_buildsub_grid.columns.status',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.bug.main_buildsub_grid.columns.openedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'assignedto',
            label: '指派',
            langtag: 'entities.bug.main_buildsub_grid.columns.assignedto',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'resolvedby',
            label: '解决者',
            langtag: 'entities.bug.main_buildsub_grid.columns.resolvedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'resolution',
            label: '方案',
            langtag: 'entities.bug.main_buildsub_grid.columns.resolution',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'uagridcolumn1',
            label: '操作列',
            langtag: 'entities.bug.main_buildsub_grid.columns.uagridcolumn1',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'isfavorites',
            label: '是否收藏',
            langtag: 'entities.bug.main_buildsub_grid.columns.isfavorites',
            show: false,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof Main_BuildSubGridBase
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
     * @memberof Main_BuildSubBase
     */
    public isEnableGroup:boolean = false;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof Main_BuildSubBase
     */
    public groupAppField:string ="";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof Main_BuildSubBase
     */
    public groupMode:string ="NONE";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof Main_BuildSubBase
     */
    public codelistTag: string = "";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof Main_BuildSubBase
     */
    public codelistType: string = "";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main_BuildSubGridBase
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
     * @memberof Main_BuildSubBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof Main_BuildSubBase
     */
    public hasRowEdit: any = {
        'id':false,
        'pri':false,
        'confirmed':false,
        'title':false,
        'status':false,
        'openedby':false,
        'assignedto':false,
        'resolvedby':false,
        'resolution':false,
        'uagridcolumn1':false,
        'isfavorites':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof Main_BuildSubBase
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
     * @memberof Main_BuildSubGridBase
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
                srfkey: 'BugUserRealName',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
            {
                name: 'resolvedby',
                srfkey: 'UserRealName',
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
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof Main_BuildSubGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('ConfirmBug', tag)) {
            this.grid_uagridcolumn1_u5f3af70_click(row, tag, $event);
        }
        if(Object.is('ResolveBug', tag)) {
            this.grid_uagridcolumn1_u424511e_click(row, tag, $event);
        }
        if(Object.is('CloseBug', tag)) {
            this.grid_uagridcolumn1_u13bca5a_click(row, tag, $event);
        }
        if(Object.is('Copy', tag)) {
            this.grid_uagridcolumn1_udb5e3af_click(row, tag, $event);
        }
        if(Object.is('MainEdit', tag)) {
            this.grid_uagridcolumn1_uea0faba_click(row, tag, $event);
        }
    }

    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof Main_BuildSubBase
     */
    public updateDefault(row: any){                    
    }

	/**
     * 分组方法
     * 
     * @memberof Main_BuildSubBase
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
     * @memberof Main_BuildSubBase
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
                assignedto:'',
                resolvedby:'',
                resolution:'',
                ConfirmBug:{
                    visabled: false
                },
                ResolveBug:{
                    visabled: false
                },
                CloseBug:{
                    visabled: false
                },
                Copy:{
                    visabled: false
                },
                MainEdit:{
                    visabled: false
                },
                isfavorites:'',
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
            assignedto:'',
            resolvedby:'',
            resolution:'',
            ConfirmBug:{
                visabled: false
            },
            ResolveBug:{
                visabled: false
            },
            CloseBug:{
                visabled: false
            },
            Copy:{
                visabled: false
            },
            MainEdit:{
                visabled: false
            },
            isfavorites:'',
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
     * @memberof Main_BuildSubBase
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
                assignedto:'',
                resolvedby:'',
                resolution:'',
                ConfirmBug:{
                    visabled: false
                },
                ResolveBug:{
                    visabled: false
                },
                CloseBug:{
                    visabled: false
                },
                Copy:{
                    visabled: false
                },
                MainEdit:{
                    visabled: false
                },
                isfavorites:'',
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
     * @memberof Main_BuildSubBase
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