import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import PickupGirdService from './pickup-gird-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {PickupGirdGridBase}
 */
export class PickupGirdGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {PickupGirdService}
     * @memberof PickupGirdGridBase
     */
    public service: PickupGirdService = new PickupGirdService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof PickupGirdGridBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof PickupGirdGridBase
     */
    protected appDeName: string = 'bug';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PickupGirdGridBase
     */
    public minorSortDir: string = '';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof PickupGirdGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'Bug编号',
            langtag: 'entities.bug.pickupgird_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.bug.pickupgird_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'confirmed',
            label: '是否确认',
            langtag: 'entities.bug.pickupgird_grid.columns.confirmed',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: 'Bug标题',
            langtag: 'entities.bug.pickupgird_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'status',
            label: 'Bug状态',
            langtag: 'entities.bug.pickupgird_grid.columns.status',
            show: true,
            util: 'PX'
        },
        {
            name: 'openedby',
            label: '由谁创建',
            langtag: 'entities.bug.pickupgird_grid.columns.openedby',
            show: true,
            util: 'PX'
        },
        {
            name: 'openeddate',
            label: '创建日期',
            langtag: 'entities.bug.pickupgird_grid.columns.openeddate',
            show: true,
            util: 'PX'
        },
        {
            name: 'assignedto',
            label: '指派给',
            langtag: 'entities.bug.pickupgird_grid.columns.assignedto',
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
     * @memberof PickupGirdGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }

    /**
     * 设置列状态
     *
     * @memberof PickupGirdGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_bug_pickupgird_grid');
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
     * @memberof PickupGirdGridBase
     */
    public onColChange() {
        localStorage.setItem('zt_bug_pickupgird_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof PickupGirdGridBase
     */
    public createDefault(row: any): void {
    }
}