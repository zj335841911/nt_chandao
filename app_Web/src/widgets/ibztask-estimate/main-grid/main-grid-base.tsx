import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import IBZTaskEstimateService from '@/service/ibztask-estimate/ibztask-estimate-service';
import MainService from './main-grid-service';
import IBZTaskEstimateUIService from '@/uiservice/ibztask-estimate/ibztask-estimate-ui-service';
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
     * @type {IBZTaskEstimateService}
     * @memberof MainGridBase
     */
    public appEntityService: IBZTaskEstimateService = new IBZTaskEstimateService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'ibztaskestimate';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeLogicName: string = '任务预计';

    /**
     * 界面UI服务对象
     *
     * @type {IBZTaskEstimateUIService}
     * @memberof MainBase
     */  
    public appUIService:IBZTaskEstimateUIService = new IBZTaskEstimateUIService(this.$store);

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControlBase
     */
    protected localStorageTag: string = 'ibz_taskestimate_main_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'dates',
            property: 'dates',
            label: '日期',
            langtag: 'entities.ibztaskestimate.main_grid.columns.dates',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'consumed',
            property: 'consumed',
            label: '总计消耗',
            langtag: 'entities.ibztaskestimate.main_grid.columns.consumed',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'left',
            property: 'left',
            label: '预计剩余',
            langtag: 'entities.ibztaskestimate.main_grid.columns.left',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'work',
            property: 'work',
            label: '备注',
            langtag: 'entities.ibztaskestimate.main_grid.columns.work',
            show: true,
            util: 'PX',
            width: 100,
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
          work: new FormItemModel(),
          consumed: new FormItemModel(),
          dates: new FormItemModel(),
          left: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainGridBase
     */
    public rules: any = {
        id: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'blur' },
        ],
        work: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '备注 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '备注 值不能为空', trigger: 'blur' },
        ],
        consumed: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '总计消耗 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '总计消耗 值不能为空', trigger: 'blur' },
        ],
        dates: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '日期 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '日期 值不能为空', trigger: 'blur' },
        ],
        left: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计剩余 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计剩余 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainBase
     */
    public hasRowEdit: any = {
        'dates':true,
        'consumed':true,
        'left':true,
        'work':true,
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
     * 添加数据
     * @param {*}  row 行数据
     * @memberof Main
     */
    public add({ row, index }: { row: any, index: number }, func: Function) {
        if(!this.loaddraftAction){
            this.$Notice.error({ title: '错误', desc: 'CaseStepMainGridView9_EditMode视图表格loaddraftAction参数未配置' });
            return;
        }
        let _this = this;
        let param: any = {};
        Object.assign(param,{viewparams:this.viewparams});
        let post: Promise<any> = this.service.loadDraft(this.loaddraftAction, JSON.parse(JSON.stringify(this.context)), param, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }
            const data = response.data;
            this.createDefault(data);
            data.rowDataState = "create";
            if(row.type) {
                if(Object.is(row.type.toLowerCase(), 'group') || Object.is(row.type.toLowerCase(), 'item')) {
                    data.type = 'item';
                } else {
                    data.type = 'step';
                }
            }
            if(func instanceof Function) {
                func(data);
            }
            _this.gridItemsModel.push(_this.getGridRowModel());
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 保存
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [$event]
     * @param {*} [xData]
     * @returns
     * @memberof Main
     */
    public async save(args: any[], params?: any, $event?: any, xData?: any) {
        for (const item of this.items) {
            if(Object.is(item.rowDataState, 'create')) {
                continue;
            }
            let _removeAction = this.removeAction;
            let _keys = item.srfkey;
            const _context: any = JSON.parse(JSON.stringify(this.context));
            await this.service.delete(_removeAction, Object.assign(_context, { [this.appDeName]: _keys }), Object.assign({ [this.appDeName]: _keys }, { viewparams: this.viewparams }), this.showBusyIndicator);
        }
        let successItems: any = [];
        for (const item of this.items) {
            const _context: any = JSON.parse(JSON.stringify(this.context));
            let { data: Data,context: Context } = this.service.handleRequestData(this.createAction, _context, item, true);
            if (Object.is(item.rowDataState, 'create')) {
                Data.id = null;
                Data.task = null;
            }
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[this.createAction] && _appEntityService[this.createAction] instanceof Function) {
                result = _appEntityService[this.createAction](Context,Data, this.showBusyIndicator);
            }else{
                result =this.appEntityService.Create(Context,Data, this.showBusyIndicator);
            }
            result.then((response) => {
                this.service.handleResponse(this.createAction, response);
                successItems.push(JSON.parse(JSON.stringify(response.data)));
            })
        }
        this.$emit('save', successItems);
    }
}