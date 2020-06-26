import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import PickupGridService from './pickup-grid-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {PickupGridGridBase}
 */
export class PickupGridGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {PickupGridService}
     * @memberof PickupGridGridBase
     */
    public service: PickupGridService = new PickupGridService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof PickupGridGridBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof PickupGridGridBase
     */
    protected appDeName: string = 'story';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PickupGridGridBase
     */
    public minorSortDir: string = '';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof PickupGridGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.story.pickupgrid_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.story.pickupgrid_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: '需求名称',
            langtag: 'entities.story.pickupgrid_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'modulename',
            label: '所属模块名称',
            langtag: 'entities.story.pickupgrid_grid.columns.modulename',
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
     * @memberof PickupGridGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }

    /**
     * 设置列状态
     *
     * @memberof PickupGridGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_story_pickupgrid_grid');
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
     * @memberof PickupGridGridBase
     */
    public onColChange() {
        localStorage.setItem('zt_story_pickupgrid_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof PickupGridGridBase
     */
    public createDefault(row: any): void {
    }
}