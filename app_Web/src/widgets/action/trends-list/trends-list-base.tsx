import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControllerBase } from '@/studio-core';
import ActionService from '@/service/action/action-service';
import TrendsService from './trends-list-service';
import ActionUIService from '@/uiservice/action/action-ui-service';


/**
 * list部件基类
 *
 * @export
 * @class ListControllerBase
 * @extends {TrendsListBase}
 */
export class TrendsListBase extends ListControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TrendsListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {TrendsService}
     * @memberof TrendsListBase
     */
    public service: TrendsService = new TrendsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof TrendsListBase
     */
    public appEntityService: ActionService = new ActionService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TrendsListBase
     */
    protected appDeName: string = 'action';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof TrendsListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof TrendsListBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof TrendsListBase
     */
    public minorSortPSDEF: string = 'date';
}