import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import CaseStepService from '@/service/case-step/case-step-service';
import Main_RowEdit_CarryOutService from './main-row-edit-carry-out-grid-service';
import CaseStepUIService from '@/uiservice/case-step/case-step-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {Main_RowEdit_CarryOutGridBase}
 */
export class Main_RowEdit_CarryOutGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {Main_RowEdit_CarryOutService}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public service: Main_RowEdit_CarryOutService = new Main_RowEdit_CarryOutService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseStepService}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public appEntityService: CaseStepService = new CaseStepService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    protected appDeName: string = 'casestep';

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControlBase
     */
    protected localStorageTag: string = 'zt_casestep_main_rowedit_carryout_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public allColumns: any[] = [
        {
            name: 'desc',
            property: 'desc',
            label: '步骤',
            langtag: 'entities.casestep.main_rowedit_carryout_grid.columns.desc',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'expect',
            property: 'expect',
            label: '预期',
            langtag: 'entities.casestep.main_rowedit_carryout_grid.columns.expect',
            show: true,
            util: 'STAR',
            width: -1,
        },
        {
            name: 'steps',
            property: 'steps',
            label: '测试结果',
            langtag: 'entities.casestep.main_rowedit_carryout_grid.columns.steps',
            show: true,
            util: 'PX',
            width: 100,
            codelistId: 'Testresult__result'
        },
        {
            name: 'reals',
            property: 'reals',
            label: '实际情况',
            langtag: 'entities.casestep.main_rowedit_carryout_grid.columns.reals',
            show: true,
            util: 'PX',
            width: 200,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public getGridRowModel(){
        return {
          expect: new FormItemModel(),
          desc: new FormItemModel(),
          steps: new FormItemModel(),
          type: new FormItemModel(),
          srfkey: new FormItemModel(),
          reals: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public rules: any = {
        expect: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预期 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预期 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '步骤 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '步骤 值不能为空', trigger: 'blur' },
        ],
        steps: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '测试结果 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '测试结果 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
        reals: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '实际情况 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '实际情况 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof Main_RowEdit_CarryOutBase
     */
    public hasRowEdit: any = {
        'desc':true,
        'expect':true,
        'steps':true,
        'reals':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof Main_RowEdit_CarryOutBase
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
     * @memberof Main_RowEdit_CarryOutGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'steps',
                srfkey: 'Testresult__result',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }

    /**
     * 添加数据
     * @param {*}  row 行数据
     * @memberof Main_RowEdit_CarryOut
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
     * @memberof Main_RowEdit_CarryOut
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
            }
            Object.assign(Data, { viewparams: this.viewparams });
            let response = await this.service.add(this.createAction, JSON.parse(JSON.stringify(this.context)), Data, this.showBusyIndicator);
            successItems.push(JSON.parse(JSON.stringify(response.data)));
        }
        this.$emit('save', successItems);
    }
}