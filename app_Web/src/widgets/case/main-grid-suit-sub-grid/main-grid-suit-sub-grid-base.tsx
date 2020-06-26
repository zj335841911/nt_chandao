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
     * 排序方向
     *
     * @type {string}
     * @memberof MainGrid_SuitSubGridBase
     */
    public minorSortDir: string = '';

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


    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof MainGrid_SuitSubGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
        if(Object.is('OpenTestRunResultView', tag)) {
            this.grid_uagridcolumn1_uc27cc64_click(row, tag, $event);
        }
        if(Object.is('Execute', tag)) {
            this.grid_uagridcolumn1_u8fd0327_click(row, tag, $event);
        }
    }

    /**
     * 设置列状态
     *
     * @memberof MainGrid_SuitSubGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_case_maingrid_suitsub_grid');
		if (_data) {
			let columns = JSON.parse(_data);
			columns.forEach((col: any) => {
				let column = this.allColumns.find((item) => Object.is(col.name, item.name));
				if (column) {
					Object.assign(column, col);
				}
			});
		}
    }

    /**
     * 列变化
     *
     * @memberof MainGrid_SuitSubGridBase
     */
    public onColChange() {
        localStorage.setItem('zt_case_maingrid_suitsub_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof MainGrid_SuitSubGridBase
     */
    public createDefault(row: any): void {
    }
}