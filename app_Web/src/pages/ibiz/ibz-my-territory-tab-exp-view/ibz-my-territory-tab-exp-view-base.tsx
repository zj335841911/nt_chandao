import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import IbzMyTerritoryAuthService from '@/authservice/ibz-my-territory/ibz-my-territory-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';

/**
 * 我的地盘视图基类
 *
 * @export
 * @class IbzMyTerritoryTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class IbzMyTerritoryTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected appDeMajor: string = 'realname';

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService;

    /**
     * 实体权限服务对象
     *
     * @type IbzMyTerritoryUIService
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof IbzMyTerritoryTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzmyterritory.views.tabexpview.caption',
        srfTitle: 'entities.ibzmyterritory.views.tabexpview.title',
        srfSubTitle: 'entities.ibzmyterritory.views.tabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '0f3dff62ef8bcb1662cc82e57a34c56b';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'ibzmyterritory',
            majorPSDEField: 'realname',
            isLoadDefault: true,
        });
    }


}