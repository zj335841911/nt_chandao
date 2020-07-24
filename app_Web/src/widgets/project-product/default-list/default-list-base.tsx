import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControlBase } from '@/studio-core';
import ProjectProductService from '@/service/project-product/project-product-service';
import DEFAULTService from './default-list-service';
import ProjectProductUIService from '@/uiservice/project-product/project-product-ui-service';


/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {DEFAULTListBase}
 */
export class DEFAULTListBase extends ListControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DEFAULTListBase
     */
    protected controlType: string = 'LIST';

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

    /**
     * this引用
     *
     * @type {number}
     * @memberof DEFAULTBase
     */
    public thisRef: any = this;
}