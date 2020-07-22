import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControllerBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import WelcomeService from './welcome-list-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';


/**
 * list部件基类
 *
 * @export
 * @class ListControllerBase
 * @extends {WelcomeListBase}
 */
export class WelcomeListBase extends ListControllerBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof WelcomeListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {WelcomeService}
     * @memberof WelcomeListBase
     */
    public service: WelcomeService = new WelcomeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof WelcomeListBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof WelcomeListBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof WelcomeListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof WelcomeListBase
     */
    public minorSortDir: string = '';
}