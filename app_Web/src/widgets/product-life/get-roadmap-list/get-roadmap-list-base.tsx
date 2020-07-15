import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControllerBase } from '@/studio-core';
import ProductLifeService from '@/service/product-life/product-life-service';
import GetRoadmapService from './get-roadmap-list-service';
import ProductLifeUIService from '@/uiservice/product-life/product-life-ui-service';


/**
 * list2部件基类
 *
 * @export
 * @class ListControllerBase
 * @extends {GetRoadmapListBase}
 */
export class GetRoadmapListBase extends ListControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof GetRoadmapListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {GetRoadmapService}
     * @memberof GetRoadmapListBase
     */
    public service: GetRoadmapService = new GetRoadmapService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductLifeService}
     * @memberof GetRoadmapListBase
     */
    public appEntityService: ProductLifeService = new ProductLifeService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof GetRoadmapListBase
     */
    protected appDeName: string = 'productlife';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof GetRoadmapListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof GetRoadmapListBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof GetRoadmapListBase
     */
    public minorSortPSDEF: string = 'year';
}