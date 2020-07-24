import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import TabExpViewtabexppanelService from './tab-exp-viewtabexppanel-tabexppanel-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';


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
     * @type {IbzMyTerritoryService}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'ibzmyterritory';
    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof TabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
        tabviewpanel5:  false ,
        tabviewpanel6:  false ,
        tabviewpanel2:  false ,
        tabviewpanel7:  false ,
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
        if (this.context.ibzmyterritory) {
            Object.assign(this.context, { srfparentdename: 'IbzMyTerritory', srfparentkey: this.context.ibzmyterritory });
        }
        super.ctrlCreated();
    }
}