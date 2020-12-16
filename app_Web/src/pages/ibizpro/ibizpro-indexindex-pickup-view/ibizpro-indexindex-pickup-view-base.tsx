import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { PickupViewBase } from '@/studio-core';
import IBIZPRO_INDEXService from '@/service/ibizpro-index/ibizpro-index-service';
import IBIZPRO_INDEXAuthService from '@/authservice/ibizpro-index/ibizpro-index-auth-service';
import PickupViewEngine from '@engine/view/pickup-view-engine';
import IBIZPRO_INDEXUIService from '@/uiservice/ibizpro-index/ibizpro-index-ui-service';

/**
 * 索引检索数据选择视图视图基类
 *
 * @export
 * @class IBIZPRO_INDEXIndexPickupViewBase
 * @extends {PickupViewBase}
 */
export class IBIZPRO_INDEXIndexPickupViewBase extends PickupViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    protected appDeName: string = 'ibizpro_index';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    protected appDeKey: string = 'indexid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    protected appDeMajor: string = 'indexname';

    /**
     * 实体服务对象
     *
     * @type {IBIZPRO_INDEXService}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    protected appEntityService: IBIZPRO_INDEXService = new IBIZPRO_INDEXService;

    /**
     * 实体权限服务对象
     *
     * @type IBIZPRO_INDEXUIService
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    public appUIService: IBIZPRO_INDEXUIService = new IBIZPRO_INDEXUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizpro_index.views.indexpickupview.caption',
        srfTitle: 'entities.ibizpro_index.views.indexpickupview.title',
        srfSubTitle: 'entities.ibizpro_index.views.indexpickupview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    protected containerModel: any = {
        view_pickupviewpanel: {
            name: 'pickupviewpanel',
            type: 'PICKUPVIEWPANEL',
        },
        view_okbtn: {
            name: 'okbtn',
            type: 'button',
            text: '确定',
            disabled: true,
        },
        view_cancelbtn: {
            name: 'cancelbtn',
            type: 'button',
            text: '取消',
            disabled: false,
        },
        view_leftbtn: {
            name: 'leftbtn',
            type: 'button',
            text: '左移',
            disabled: true,
        },
        view_rightbtn: {
            name: 'rightbtn',
            type: 'button',
            text: '右移',
            disabled: true,},
        view_allleftbtn: {
            name: 'allleftbtn',
            type: 'button',
            text: '全部左移',
            disabled: true,
        },
        view_allrightbtn: {
            name: 'allrightbtn',
            type: 'button',
            text: '全部右移',
            disabled: true,
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
	protected viewtag: string = '31dc3f821fafa9e92cc28d217373a67b';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */ 
    protected viewName: string = 'IBIZPRO_INDEXIndexPickupView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    public engine: PickupViewEngine = new PickupViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'ibizpro_index',
            majorPSDEField: 'indexname',
            isLoadDefault: true,
        });
    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    public pickupviewpanel_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    public pickupviewpanel_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'activated', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBIZPRO_INDEXIndexPickupViewBase
     */
    public pickupviewpanel_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }


}