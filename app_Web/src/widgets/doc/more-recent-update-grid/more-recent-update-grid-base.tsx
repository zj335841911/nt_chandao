import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import DocService from '@/service/doc/doc-service';
import MoreRecentUpdateService from './more-recent-update-grid-service';
import DocUIService from '@/uiservice/doc/doc-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MoreRecentUpdateGridBase}
 */
export class MoreRecentUpdateGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MoreRecentUpdateGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MoreRecentUpdateService}
     * @memberof MoreRecentUpdateGridBase
     */
    public service: MoreRecentUpdateService = new MoreRecentUpdateService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocService}
     * @memberof MoreRecentUpdateGridBase
     */
    public appEntityService: DocService = new DocService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MoreRecentUpdateGridBase
     */
    protected appDeName: string = 'doc';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MoreRecentUpdateGridBase
     */
    protected appDeLogicName: string = '文档';

    /**
     * 界面UI服务对象
     *
     * @type {DocUIService}
     * @memberof MoreRecentUpdateBase
     */  
    public appUIService:DocUIService = new DocUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_title_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_Look(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u83c9087_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_Edit(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u8cfb23b_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_Delete(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MoreRecentUpdateBase
     */  
    public ActionModel: any = {
        Look: { name: 'Look',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: '', actiontarget: 'SINGLEKEY'},
        Edit: { name: 'Edit',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: '', actiontarget: 'SINGLEKEY'},
        Delete: { name: 'Delete',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: '', actiontarget: 'SINGLEKEY'}
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof MoreRecentUpdateBase
     */  
    public majorInfoColName:string = "title";

    /**
     * 列主键属性名称
     *
     * @type {string}
     * @memberof MoreRecentUpdateGridBase
     */
    public columnKeyName: string = "id";

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MoreRecentUpdateBase
     */
    protected localStorageTag: string = 'zt_doc_morerecentupdate_grid';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MoreRecentUpdateGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MoreRecentUpdateGridBase
     */
    public minorSortPSDEF: string = 'editeddate';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MoreRecentUpdateGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: '文档编号',
            langtag: 'entities.doc.morerecentupdate_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'title',
            label: '文档标题',
            langtag: 'entities.doc.morerecentupdate_grid.columns.title',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'addedby',
            label: '由谁添加',
            langtag: 'entities.doc.morerecentupdate_grid.columns.addedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'addeddate',
            label: '添加时间',
            langtag: 'entities.doc.morerecentupdate_grid.columns.addeddate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'editedby',
            label: '由谁更新',
            langtag: 'entities.doc.morerecentupdate_grid.columns.editedby',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'editeddate',
            label: '更新时间',
            langtag: 'entities.doc.morerecentupdate_grid.columns.editeddate',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
            enableCond: 3 ,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.doc.morerecentupdate_grid.columns.uagridcolumn1',
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
     * @memberof MoreRecentUpdateGridBase
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
     * @memberof MoreRecentUpdateGridBase
     */
    public rules() {
        return {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '文档编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '文档编号 值不能为空', trigger: 'blur' },
        ],
    }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MoreRecentUpdateBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MoreRecentUpdateBase
     */
    public hasRowEdit: any = {
        'id':false,
        'title':false,
        'addedby':false,
        'addeddate':false,
        'editedby':false,
        'editeddate':false,
        'uagridcolumn1':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MoreRecentUpdateBase
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
     * @memberof MoreRecentUpdateGridBase
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
     * @memberof MoreRecentUpdateGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('Look', tag)) {
            this.grid_title_click(row, tag, $event);
        }
        if(Object.is('Edit', tag)) {
            this.grid_uagridcolumn1_u83c9087_click(row, tag, $event);
        }
        if(Object.is('Delete', tag)) {
            this.grid_uagridcolumn1_u8cfb23b_click(row, tag, $event);
        }
    }

    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof MoreRecentUpdateBase
     */
    public updateDefault(row: any){                    
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof MoreRecentUpdateBase
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