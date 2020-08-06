import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import TestSidebarService from './test-sidebar-list-service';
import ProductUIService from '@/uiservice/product/product-ui-service';


/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {TestSidebarListBase}
 */
export class TestSidebarListBase extends ListControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestSidebarListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {TestSidebarService}
     * @memberof TestSidebarListBase
     */
    public service: TestSidebarService = new TestSidebarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof TestSidebarListBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestSidebarListBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestSidebarListBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof TestSidebarListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof TestSidebarListBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof TestSidebarListBase
     */
    public minorSortPSDEF: string = 'id';
}