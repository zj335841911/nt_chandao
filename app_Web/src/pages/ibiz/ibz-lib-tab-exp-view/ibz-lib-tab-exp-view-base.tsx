import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import IbzLibService from '@/service/ibz-lib/ibz-lib-service';
import IbzLibAuthService from '@/authservice/ibz-lib/ibz-lib-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import IbzLibUIService from '@/uiservice/ibz-lib/ibz-lib-ui-service';

/**
 * 用例库分页导航视图视图基类
 *
 * @export
 * @class IbzLibTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class IbzLibTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibTabExpViewBase
     */
    protected appDeName: string = 'ibzlib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzLibTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzLibTabExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {IbzLibService}
     * @memberof IbzLibTabExpViewBase
     */
    protected appEntityService: IbzLibService = new IbzLibService;

    /**
     * 实体权限服务对象
     *
     * @type IbzLibUIService
     * @memberof IbzLibTabExpViewBase
     */
    public appUIService: IbzLibUIService = new IbzLibUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof IbzLibTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzLibTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzlib.views.tabexpview.caption',
        srfTitle: 'entities.ibzlib.views.tabexpview.title',
        srfSubTitle: 'entities.ibzlib.views.tabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzLibTabExpViewBase
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
	protected viewtag: string = 'ebf8f4c62f92ff24ff740558f12f7303';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzLibTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzLibTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'ibzlib',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}