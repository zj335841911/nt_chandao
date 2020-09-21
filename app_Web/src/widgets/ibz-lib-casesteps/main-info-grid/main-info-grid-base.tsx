import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import IbzLibCasestepsService from '@/service/ibz-lib-casesteps/ibz-lib-casesteps-service';
import MainInfoService from './main-info-grid-service';
import IbzLibCasestepsUIService from '@/uiservice/ibz-lib-casesteps/ibz-lib-casesteps-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainInfoGridBase}
 */
export class MainInfoGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainInfoGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainInfoService}
     * @memberof MainInfoGridBase
     */
    public service: MainInfoService = new MainInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzLibCasestepsService}
     * @memberof MainInfoGridBase
     */
    public appEntityService: IbzLibCasestepsService = new IbzLibCasestepsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoGridBase
     */
    protected appDeName: string = 'ibzlibcasesteps';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoGridBase
     */
    protected appDeLogicName: string = '用例库用例步骤';

    /**
     * 界面UI服务对象
     *
     * @type {IbzLibCasestepsUIService}
     * @memberof MainInfoBase
     */  
    public appUIService:IbzLibCasestepsUIService = new IbzLibCasestepsUIService(this.$store);

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControlBase
     */
    protected localStorageTag: string = 'ibz_libcasesteps_maininfo_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainInfoGridBase
     */
    public allColumns: any[] = [
        {
            name: 'case',
            property: 'case',
            label: '用例编号',
            langtag: 'entities.ibzlibcasesteps.maininfo_grid.columns.case',
            show: false,
            util: 'PX',
            width: 100,
        },
        {
            name: 'desc',
            property: 'desc',
            label: '步骤',
            langtag: 'entities.ibzlibcasesteps.maininfo_grid.columns.desc',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'expect',
            property: 'expect',
            label: '预期',
            langtag: 'entities.ibzlibcasesteps.maininfo_grid.columns.expect',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'type',
            property: 'type',
            label: '类型',
            langtag: 'entities.ibzlibcasesteps.maininfo_grid.columns.type',
            show: false,
            util: 'PX',
            width: 100,
            codelistId: 'Casestep__type'
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainInfoGridBase
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
     * @memberof MainInfoGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainInfoBase
     */
    public hasRowEdit: any = {
        'case':false,
        'desc':false,
        'expect':false,
        'type':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainInfoBase
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
     * @memberof MainInfoGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
        ]);
    }

    /**
     * 添加数据
     * @param {*}  row 行数据
     * @memberof MainInfo
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
     * @memberof MainInfo
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
                Data.ibizcase = null;
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