import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import MainService from './main-grid-service';
import ProductPlanUIService from '@/uiservice/product-plan/product-plan-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {MainGridBase}
 */
export class MainGridBase extends GridControllerBase {

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
     * @type {ProductPlanService}
     * @memberof MainGridBase
     */
    public appEntityService: ProductPlanService = new ProductPlanService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'productplan';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_actions_uaa449c7_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:ProductPlanUIService  = new ProductPlanUIService();
        curUIService.ProductPlan_RelationStory(datas,contextJO, paramJO,  $event, xData,this,"ProductPlan");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_actions_uae31417_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:ProductPlanUIService  = new ProductPlanUIService();
        curUIService.ProductPlan_RelationBug(datas,contextJO, paramJO,  $event, xData,this,"ProductPlan");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_actions_u663d352_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:ProductPlanUIService  = new ProductPlanUIService();
        curUIService.ProductPlan_NewSubPlan(datas,contextJO, paramJO,  $event, xData,this,"ProductPlan");
    }

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainGridBase
     */
    public minorSortDir: string = '';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: '编号',
            langtag: 'entities.productplan.main_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: '名称',
            langtag: 'entities.productplan.main_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'begin',
            label: '开始日期',
            langtag: 'entities.productplan.main_grid.columns.begin',
            show: true,
            util: 'PX'
        },
        {
            name: 'end',
            label: '结束日期',
            langtag: 'entities.productplan.main_grid.columns.end',
            show: true,
            util: 'PX'
        },
        {
            name: 'actions',
            label: '操作',
            langtag: 'entities.productplan.main_grid.columns.actions',
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
     * @memberof MainGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
        if(Object.is('RelationStory', tag)) {
            this.grid_actions_uaa449c7_click(row, tag, $event);
        }
        if(Object.is('RelationBug', tag)) {
            this.grid_actions_uae31417_click(row, tag, $event);
        }
        if(Object.is('NewSubPlan', tag)) {
            this.grid_actions_u663d352_click(row, tag, $event);
        }
    }

    /**
     * 设置列状态
     *
     * @memberof MainGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_productplan_main_grid');
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
     * @memberof MainGridBase
     */
    public onColChange() {
        localStorage.setItem('zt_productplan_main_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof MainGridBase
     */
    public createDefault(row: any): void {
    }
}