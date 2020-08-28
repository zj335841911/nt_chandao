import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import IbzFavoritesService from '@/service/ibz-favorites/ibz-favorites-service';
import TabExpViewtabexppanelService from './tab-exp-viewtabexppanel-tabexppanel-service';
import IbzFavoritesUIService from '@/uiservice/ibz-favorites/ibz-favorites-ui-service';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {TabExpViewtabexppanelTabexppanelBase}
 */
export class TabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {TabExpViewtabexppanelService}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    public service: TabExpViewtabexppanelService = new TabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzFavoritesService}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: IbzFavoritesService = new IbzFavoritesService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'ibzfavorites';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '收藏';

    /**
     * 界面UI服务对象
     *
     * @type {IbzFavoritesUIService}
     * @memberof TabExpViewtabexppanelBase
     */  
    public appUIService:IbzFavoritesUIService = new IbzFavoritesUIService(this.$store);
    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof TabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanel
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof TabExpViewtabexppanel
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.ibzfavorites) {
            Object.assign(this.context, { srfparentdename: 'IbzFavorites', srfparentkey: this.context.ibzfavorites });
        }
        super.ctrlCreated();
    }
}