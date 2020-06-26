import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import Main_ReportSubService from './main-report-sub-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main_ReportSubGridBase}
 */
export class Main_ReportSubGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {Main_ReportSubService}
     * @memberof Main_ReportSubGridBase
     */
    public service: Main_ReportSubService = new Main_ReportSubService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof Main_ReportSubGridBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_ReportSubGridBase
     */
    protected appDeName: string = 'bug';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main_ReportSubGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main_ReportSubGridBase
     */
    public minorSortDir: string = '';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main_ReportSubGridBase
     */
    public limit: number = 500;
false;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_ReportSubGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.bug.main_reportsub_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.bug.main_reportsub_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: 'Bug标题',
            langtag: 'entities.bug.main_reportsub_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'openedby',
            label: '创建',
            langtag: 'entities.bug.main_reportsub_grid.columns.openedby',
            show: true,
            util: 'PX'
        },
        {
            name: 'resolvedby',
            label: '解决者',
            langtag: 'entities.bug.main_reportsub_grid.columns.resolvedby',
            show: true,
            util: 'PX'
        },
        {
            name: 'resolveddate',
            label: '解决日期',
            langtag: 'entities.bug.main_reportsub_grid.columns.resolveddate',
            show: true,
            util: 'PX'
        },
        {
            name: 'status',
            label: 'Bug状态',
            langtag: 'entities.bug.main_reportsub_grid.columns.status',
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
     * @memberof Main_ReportSubGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }

    /**
     * 设置列状态
     *
     * @memberof Main_ReportSubGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_bug_main_reportsub_grid');
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
     * @memberof Main_ReportSubGridBase
     */
    public onColChange() {
        localStorage.setItem('zt_bug_main_reportsub_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof Main_ReportSubGridBase
     */
    public createDefault(row: any): void {
    }
}