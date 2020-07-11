import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import TestModuleService from '@/service/test-module/test-module-service';
import MainBranchService from './main-branch-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {MainBranchGridBase}
 */
export class MainBranchGridBase extends GridControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainBranchGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainBranchService}
     * @memberof MainBranchGridBase
     */
    public service: MainBranchService = new MainBranchService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestModuleService}
     * @memberof MainBranchGridBase
     */
    public appEntityService: TestModuleService = new TestModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainBranchGridBase
     */
    protected appDeName: string = 'testmodule';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u158caa9_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Remove(datas, contextJO,paramJO,  $event, xData,this,"TestModule");
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
     * @memberof TestModuleGridViewBranchBase
     */
    public Remove(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (!xData || !(xData.remove instanceof Function)) {
            return ;
        }
        xData.remove(args);
    }


    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'ibz_testmodule_mainbranch_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MainBranchGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 是否显示标题
     *
     * @type {boolean}
     * @memberof MainBranchGridBase
     */
    public isHideHeader: boolean = true;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainBranchGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.testmodule.mainbranch_grid.columns.name',
            show: true,
            util: 'PX'
        },
        {
            name: 'branch',
            label: '平台',
            langtag: 'entities.testmodule.mainbranch_grid.columns.branch',
            show: true,
            util: 'PX'
        },
        {
            name: 'short',
            label: '简称',
            langtag: 'entities.testmodule.mainbranch_grid.columns.short',
            show: true,
            util: 'PX'
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.testmodule.mainbranch_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX'
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainBranchGridBase
     */
    public getGridRowModel(){
        return {
          short: new FormItemModel(),
          name: new FormItemModel(),
          parent: new FormItemModel(),
          branch: new FormItemModel(),
          type: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainBranchGridBase
     */
    public rules: any = {
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
        branch: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '平台 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '平台 值不能为空', trigger: 'blur' },
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

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainBranchBase
     */
    public hasRowEdit: any = {
        'name':true,
        'branch':true,
        'short':true,
        'uagridcolumn1':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainBranchBase
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
     * @memberof MainBranchGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'branch',
                srfkey: 'ProductBranch_Cache',
                codelistType : 'DYNAMIC',
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
     * @memberof MainBranchGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('Remove', tag)) {
            this.grid_uagridcolumn1_u158caa9_click(row, tag, $event);
        }
    }

    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof MainBranchGridBase
     */
    public createDefault(row: any): void {
        if (row.hasOwnProperty('parent')) {
            row['parent'] = this.viewparams['srfparentkey'];
        }
        if (row.hasOwnProperty('branch')) {
            row['branch'] = this.viewparams['srfparentkey'];
        }
        if (row.hasOwnProperty('type')) {
            row['type'] = this.viewparams['moduletype'];
        }
    }
}