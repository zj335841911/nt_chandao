import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import IbizproIndexService from '@/service/ibizpro-index/ibizpro-index-service';
import IndexMobService from './index-mob-list-service';
import IbizproIndexUIService from '@/uiservice/ibizpro-index/ibizpro-index-ui-service';

/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {IndexMobListBase}
 */
export class IndexMobListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof IndexMobListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {IndexMobService}
     * @memberof IndexMobListBase
     */
    public service: IndexMobService = new IndexMobService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbizproIndexService}
     * @memberof IndexMobListBase
     */
    public appEntityService: IbizproIndexService = new IbizproIndexService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IndexMobListBase
     */
    protected appDeName: string = 'ibizproindex';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof IndexMobListBase
     */
    protected appDeLogicName: string = '索引检索';

    /**
     * 界面UI服务对象
     *
     * @type {IbizproIndexUIService}
     * @memberof IndexMobBase
     */  
    public appUIService: IbizproIndexUIService = new IbizproIndexUIService(this.$store);

    

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof IndexMobListBase
     */
    public minorSortDir: string = '';




}