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
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControllerBase
     */
    protected localStorageTag: string = 'zt_story_pickupgrid_grid';

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

}