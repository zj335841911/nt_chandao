import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControllerBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import SidebarService from './sidebar-list-service';
import ProductUIService from '@/uiservice/product/product-ui-service';


/**
 * list部件基类
 *
 * @export
 * @class ListControllerBase
 * @extends {SidebarListBase}
 */
export class SidebarListBase extends ListControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof SidebarListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {SidebarService}
     * @memberof SidebarListBase
     */
    public service: SidebarService = new SidebarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof SidebarListBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SidebarListBase
     */
    protected appDeName: string = 'product';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof SidebarListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof SidebarListBase
     */
    public minorSortDir: string = '';
}