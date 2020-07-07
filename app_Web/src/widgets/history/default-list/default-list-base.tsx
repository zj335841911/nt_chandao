import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControllerBase } from '@/studio-core';
import HistoryService from '@/service/history/history-service';
import DEFAULTService from './default-list-service';


/**
 * history部件基类
 *
 * @export
 * @class ListControllerBase
 * @extends {DEFAULTListBase}
 */
export class DEFAULTListBase extends ListControllerBase {

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
     * @type {HistoryService}
     * @memberof DEFAULTListBase
     */
    public appEntityService: HistoryService = new HistoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DEFAULTListBase
     */
    protected appDeName: string = 'history';

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
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof DEFAULTListBase
     */
    public minorSortPSDEF: string = 'id';
}