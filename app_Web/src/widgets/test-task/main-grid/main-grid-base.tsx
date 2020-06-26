import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import MainService from './main-grid-service';
import TestTaskUIService from '@/uiservice/test-task/test-task-ui-service';
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
     * @type {TestTaskService}
     * @memberof MainGridBase
     */
    public appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'testtask';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u6b02f33_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_LinkCase(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u9008f43_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_OpenInfoView(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u43e90ce_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Edit(datas, contextJO,paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u4d10156_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Remove(datas, contextJO,paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 编辑
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TestTaskGridViewBase
     */
    public Edit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        if (args.length === 0) {
            return;
        }
        const _this: any = this;
        if (_this.opendata && _this.opendata instanceof Function) {
            const data: any = { };
            if (args.length > 0) {
                Object.assign(data, { testtask: args[0].testtask })
            }
            _this.opendata([{ ...data }], params, $event, xData);
        } else {
            _this.$Notice.error({ title: '错误', desc: 'opendata 视图处理逻辑不存在，请添加!' });
        }
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
     * @memberof TestTaskGridViewBase
     */
    public Remove(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (!xData || !(xData.remove instanceof Function)) {
            return ;
        }
        xData.remove(args);
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
            label: 'ID',
            langtag: 'entities.testtask.main_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.testtask.main_grid.columns.name',
            show: true,
            util: 'STAR'
        },
        {
            name: 'productname',
            label: '产品',
            langtag: 'entities.testtask.main_grid.columns.productname',
            show: true,
            util: 'PX'
        },
        {
            name: 'projecttname',
            label: '项目',
            langtag: 'entities.testtask.main_grid.columns.projecttname',
            show: true,
            util: 'PX'
        },
        {
            name: 'build',
            label: '版本',
            langtag: 'entities.testtask.main_grid.columns.build',
            show: true,
            util: 'PX'
        },
        {
            name: 'owner',
            label: '负责人',
            langtag: 'entities.testtask.main_grid.columns.owner',
            show: true,
            util: 'PX'
        },
        {
            name: 'begin',
            label: '开始日期',
            langtag: 'entities.testtask.main_grid.columns.begin',
            show: true,
            util: 'PX'
        },
        {
            name: 'end',
            label: '结束日期',
            langtag: 'entities.testtask.main_grid.columns.end',
            show: true,
            util: 'PX'
        },
        {
            name: 'status',
            label: '当前状态',
            langtag: 'entities.testtask.main_grid.columns.status',
            show: true,
            util: 'PX'
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.testtask.main_grid.columns.uagridcolumn1',
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
        if(Object.is('LinkCase', tag)) {
            this.grid_uagridcolumn1_u6b02f33_click(row, tag, $event);
        }
        if(Object.is('OpenInfoView', tag)) {
            this.grid_uagridcolumn1_u9008f43_click(row, tag, $event);
        }
        if(Object.is('Edit', tag)) {
            this.grid_uagridcolumn1_u43e90ce_click(row, tag, $event);
        }
        if(Object.is('Remove', tag)) {
            this.grid_uagridcolumn1_u4d10156_click(row, tag, $event);
        }
    }

    /**
     * 设置列状态
     *
     * @memberof MainGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_testtask_main_grid');
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
        localStorage.setItem('zt_testtask_main_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof MainGridBase
     */
    public createDefault(row: any): void {
    }
}