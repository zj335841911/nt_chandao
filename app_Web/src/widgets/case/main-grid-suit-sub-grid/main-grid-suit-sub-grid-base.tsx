import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import MainGrid_SuitSubService from './main-grid-suit-sub-grid-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {MainGrid_SuitSubGridBase}
 */
export class MainGrid_SuitSubGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainGrid_SuitSubService}
     * @memberof MainGrid_SuitSubGridBase
     */
    public service: MainGrid_SuitSubService = new MainGrid_SuitSubService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof MainGrid_SuitSubGridBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGrid_SuitSubGridBase
     */
    protected appDeName: string = 'case';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_uc27cc64_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_OpenTestRunResultView(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u8fd0327_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_Execute(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_case_maingrid_suitsub_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGrid_SuitSubGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'id',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'type',
            label: '用例类型',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.type',
            show: true,
            util: 'PX'
        },
        {
            name: 'lastrunresult',
            label: '结果',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.lastrunresult',
            show: true,
            util: 'PX'
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.status',
            show: true,
            util: 'PX'
        },
        {
            name: 'tobugcnt',
            label: 'B',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.tobugcnt',
            show: true,
            util: 'PX'
        },
        {
            name: 'resultcnt',
            label: 'R',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.resultcnt',
            show: true,
            util: 'PX'
        },
        {
            name: 'casesteps',
            label: 'S',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.casesteps',
            show: true,
            util: 'PX'
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.case.maingrid_suitsub_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX'
        },
    ]

}