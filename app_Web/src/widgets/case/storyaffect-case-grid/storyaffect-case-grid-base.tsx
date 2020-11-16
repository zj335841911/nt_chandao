import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import StoryaffectCaseService from './storyaffect-case-grid-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {StoryaffectCaseGridBase}
 */
export class StoryaffectCaseGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {StoryaffectCaseService}
     * @memberof StoryaffectCaseGridBase
     */
    public service: StoryaffectCaseService = new StoryaffectCaseService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof StoryaffectCaseGridBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    protected appDeLogicName: string = '测试用例';

    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof StoryaffectCaseBase
     */  
    public appUIService:CaseUIService = new CaseUIService(this.$store);


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof StoryaffectCaseBase
     */  
    public ActionModel: any = {
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof StoryaffectCaseBase
     */  
    public majorInfoColName:string = "title";


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof StoryaffectCaseBase
     */
    protected localStorageTag: string = 'zt_case_storyaffectcase_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof StoryaffectCaseGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof StoryaffectCaseGridBase
     */
    public isNoSort: boolean = true;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof StoryaffectCaseGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof StoryaffectCaseGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof StoryaffectCaseGridBase
     */
    public allColumns: any[] = [
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.storyaffectcase_grid.columns.pri',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.storyaffectcase_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.case.storyaffectcase_grid.columns.status',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'openedby',
            label: '由谁创建',
            langtag: 'entities.case.storyaffectcase_grid.columns.openedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'lasteditedby',
            label: '最后修改者',
            langtag: 'entities.case.storyaffectcase_grid.columns.lasteditedby',
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
     * @memberof StoryaffectCaseGridBase
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
     * @memberof StoryaffectCaseBase
     */
    public isEnableGroup:boolean = false;

    /**
     * 分组属性
     *
     * @type {string}
     * @memberof StoryaffectCaseBase
     */
    public groupAppField:string ="";

    /**
     * 分组属性代码表标识
     *
     * @type {string}
     * @memberof StoryaffectCaseBase
     */
    public groupAppFieldCodelistTag:string ="";

    /**
     * 分组属性代码表类型
     * 
     * @type {string}
     * @memberof StoryaffectCaseBase
     */
    public groupAppFieldCodelistType: string = "";

    /**
     * 分组模式
     *
     * @type {string}
     * @memberof StoryaffectCaseBase
     */
    public groupMode:string ="NONE";

    /**
     * 分组代码表标识
     * 
     * @type {string}
     * @memberof StoryaffectCaseBase
     */
    public codelistTag: string = "";

    /**
     * 分组代码表类型
     * 
     * @type {string}
     * @memberof StoryaffectCaseBase
     */
    public codelistType: string = "";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof StoryaffectCaseGridBase
     */
    public rules() {
        return {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof StoryaffectCaseBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof StoryaffectCaseBase
     */
    public hasRowEdit: any = {
        'pri':false,
        'title':false,
        'status':false,
        'openedby':false,
        'lasteditedby':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof StoryaffectCaseBase
     */
    public getCellClassName(args: {row: any, column: any, rowIndex: number, columnIndex: number}): any {
        let className: string = '';
        if(args.column.property){
          let col = this.allColumns.find((item:any)=>{
              return Object.is(args.column.property,item.name);
          })
          if(col !== undefined){
              if(col.isEnableRowEdit && this.actualIsOpenEdit ){
                className += 'edit-cell ';
              }
          } else {
              className += 'info-cell';
          }
        }
        if(this.groupAppField && args.columnIndex === 0 && !this.isSingleSelect) {
            if(args.row.children && args.row.children.length > 0) {
                className += this.computeGroupRow(args.row.children, args.row);
            }
        }
        return className;
    }
    
    /**
     * 计算分组行checkbox选中样式
     *
     * @param {*} rows 当前分组行下的所有数据
     * @returns {*} currentRow 当前分组行
     * @memberof MainBase
     */
    public computeGroupRow(rows: any[], currentRow: any) {
        let count: number = 0;
        this.selections.forEach((select: any) => {
            rows.forEach((row: any) => {
                if(row.groupById === select.groupById) {
                    count++;
                }
            })
        })
        if(count === rows.length) {
            (this.$refs.multipleTable as any).toggleRowSelection(currentRow, true);
            return 'cell-select-all ';
        } else if(count !== 0 && count < rows.length) {
            return 'cell-indeterminate '
        } else if(count === 0) {
            (this.$refs.multipleTable as any).toggleRowSelection(currentRow, false);
            return '';
        }
    }

    /**
     * 导出数据格式化
     *
     * @param {*} filterVal
     * @param {*} jsonData
     * @param {any[]} [codelistColumns=[]]
     * @returns {Promise<any>}
     * @memberof StoryaffectCaseGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'pri',
                srfkey: 'Testcase__pri',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'status',
                srfkey: 'Testcase__status',
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
                name: 'lasteditedby',
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
     * @memberof StoryaffectCaseBase
     */
    public updateDefault(row: any){                    
    }

    /**
    * 合并分组行
    * 
    * @memberof StoryaffectCaseBase
    */
    public arraySpanMethod({row, column, rowIndex, columnIndex} : any) {
        let allColumns:Array<any> = ['pri','title','status','openedby','lasteditedby'];
        if(row && row.children) {
            if(columnIndex == (this.isSingleSelect ? 0:1)) {
                return [1, allColumns.length+1];
            } else if(columnIndex > (this.isSingleSelect ? 0:1)) {
                return [0,0];
            }
        }
    }

	/**
     * 分组方法
     * 
     * @memberof StoryaffectCaseBase
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
     * @memberof StoryaffectCaseBase
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
     * @memberof StoryaffectCaseBase
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
                        item.groupById = Number((i+1) * 100 + (j+1) * 1);
                        item.group = '';
                        children.push(item);
                    }
                }else if(Object.is(group.label,item[this.groupAppField])){
                    item.groupById = Number((i+1) * 100 + (j+1) * 1);
                    item.group = '';
                    children.push(item);
                }
            });
            const tree: any ={
                groupById: Number((i+1)*100),
                group: group.label,
                pri:'',
                title:'',
                status:'',
                openedby:'',
                lasteditedby:'',
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
            pri:'',
            title:'',
            status:'',
            openedby:'',
            lasteditedby:'',
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
     * @memberof StoryaffectCaseBase
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
                        item.groupById = Number((groupIndex+1) * 100 + (itemIndex+1) * 1);
                        item.group = '';
                        children.push(item);
                    }
                }else if(Object.is(group,item[this.groupAppField])){
                    item.groupById = Number((groupIndex+1) * 100 + (itemIndex+1) * 1);
                    item.group = '';
                    children.push(item);
                }
            });
            group = group ? group : '其他';
            const tree: any ={
                groupById: Number((groupIndex+1)*100),
                group: group,
                pri:'',
                title:'',
                status:'',
                openedby:'',
                lasteditedby:'',
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
     * @memberof StoryaffectCaseBase
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