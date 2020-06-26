import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import Main_BuildSubService from './main-build-sub-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {Main_BuildSubGridBase}
 */
export class Main_BuildSubGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {Main_BuildSubService}
     * @memberof Main_BuildSubGridBase
     */
    public service: Main_BuildSubService = new Main_BuildSubService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof Main_BuildSubGridBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    protected appDeName: string = 'story';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof Main_BuildSubGridBase
     */
    public minorSortDir: string = '';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_BuildSubGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.story.main_buildsub_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.story.main_buildsub_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: '需求名称',
            langtag: 'entities.story.main_buildsub_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'modulename',
            label: '所属模块名称',
            langtag: 'entities.story.main_buildsub_grid.columns.modulename',
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
     * @memberof Main_BuildSubGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }

    /**
     * 设置列状态
     *
     * @memberof Main_BuildSubGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_story_main_buildsub_grid');
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
     * @memberof Main_BuildSubGridBase
     */
    public onColChange() {
        localStorage.setItem('zt_story_main_buildsub_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof Main_BuildSubGridBase
     */
    public createDefault(row: any): void {
    }
}