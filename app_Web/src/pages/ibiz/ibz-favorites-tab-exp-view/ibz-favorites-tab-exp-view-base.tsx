import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import IbzFavoritesService from '@/service/ibz-favorites/ibz-favorites-service';
import IbzFavoritesAuthService from '@/authservice/ibz-favorites/ibz-favorites-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import IbzFavoritesUIService from '@/uiservice/ibz-favorites/ibz-favorites-ui-service';

/**
 * 收藏分页导航视图视图基类
 *
 * @export
 * @class IbzFavoritesTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class IbzFavoritesTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected appDeName: string = 'ibzfavorites';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected appDeKey: string = 'ibz_favoritesid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected appDeMajor: string = 'ibz_favoritesname';

    /**
     * 实体服务对象
     *
     * @type {IbzFavoritesService}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected appEntityService: IbzFavoritesService = new IbzFavoritesService;

    /**
     * 实体权限服务对象
     *
     * @type IbzFavoritesUIService
     * @memberof IbzFavoritesTabExpViewBase
     */
    public appUIService: IbzFavoritesUIService = new IbzFavoritesUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof IbzFavoritesTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzfavorites.views.tabexpview.caption',
        srfTitle: 'entities.ibzfavorites.views.tabexpview.title',
        srfSubTitle: 'entities.ibzfavorites.views.tabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzFavoritesTabExpViewBase
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
	protected viewtag: string = '0bd16cd21ee2e8951fb8a86599ac1510';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzFavoritesTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzFavoritesTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'ibzfavorites',
            majorPSDEField: 'ibzfavoritesname',
            isLoadDefault: true,
        });
    }


}