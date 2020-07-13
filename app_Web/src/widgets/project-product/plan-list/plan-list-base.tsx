import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControllerBase } from '@/studio-core';
import ProjectProductService from '@/service/project-product/project-product-service';
import PlanService from './plan-list-service';
import ProjectProductUIService from '@/uiservice/project-product/project-product-ui-service';


/**
 * list部件基类
 *
 * @export
 * @class ListControllerBase
 * @extends {PlanListBase}
 */
export class PlanListBase extends ListControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof PlanListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {PlanService}
     * @memberof PlanListBase
     */
    public service: PlanService = new PlanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectProductService}
     * @memberof PlanListBase
     */
    public appEntityService: ProjectProductService = new ProjectProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof PlanListBase
     */
    protected appDeName: string = 'projectproduct';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof PlanListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PlanListBase
     */
    public minorSortDir: string = '';
}