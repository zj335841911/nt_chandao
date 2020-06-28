import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControllerBase } from '@/studio-core';
import ProjectProductService from '@/service/project-product/project-product-service';
import DEFAULTService from './default-list-service';


/**
 * list部件基类
 *
 * @export
 * @class ListControllerBase
 * @extends {DEFAULTListBase}
 */
export class DEFAULTListBase extends ListControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {DEFAULTService}
     * @memberof DEFAULTListBase
     */
    public service: DEFAULTService = new DEFAULTService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectProductService}
     * @memberof DEFAULTListBase
     */
    public appEntityService: ProjectProductService = new ProjectProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DEFAULTListBase
     */
    protected appDeName: string = 'projectproduct';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof DEFAULTListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof DEFAULTListBase
     */
    public minorSortDir: string = '';
}