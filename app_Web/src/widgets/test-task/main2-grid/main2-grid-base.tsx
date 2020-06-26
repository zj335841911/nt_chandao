import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import Main2Service from './main2-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main2GridBase}
 */
export class Main2GridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {Main2Service}
     * @memberof Main2GridBase
     */
    public service: Main2Service = new Main2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof Main2GridBase
     */
    public appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main2GridBase
     */
    protected appDeName: string = 'testtask';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main2GridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main2GridBase
     */
    public minorSortDir: string = '';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main2GridBase
     */
    public limit: number = 500;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main2GridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.testtask.main2_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'productname',
            label: '产品',
            langtag: 'entities.testtask.main2_grid.columns.productname',
            show: true,
            util: 'PX'
        },
        {
            name: 'name',
            label: '名称',
            langtag: 'entities.testtask.main2_grid.columns.name',
            show: true,
            util: 'PX'
        },
        {
            name: 'projecttname',
            label: '项目',
            langtag: 'entities.testtask.main2_grid.columns.projecttname',
            show: true,
            util: 'PX'
        },
        {
            name: 'build',
            label: '版本',
            langtag: 'entities.testtask.main2_grid.columns.build',
            show: true,
            util: 'PX'
        },
        {
            name: 'begin',
            label: '开始日期',
            langtag: 'entities.testtask.main2_grid.columns.begin',
            show: true,
            util: 'PX'
        },
        {
            name: 'end',
            label: '结束日期',
            langtag: 'entities.testtask.main2_grid.columns.end',
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
     * @memberof Main2GridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }

    /**
     * 设置列状态
     *
     * @memberof Main2GridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_testtask_main2_grid');
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
     * @memberof Main2GridBase
     */
    public onColChange() {
        localStorage.setItem('zt_testtask_main2_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof Main2GridBase
     */
    public createDefault(row: any): void {
    }
}