
<template>
<studio-view viewName="productmaindashboardview" viewTitle="产品数据看板视图" class='deportalview product-main-dashboard-view'>
    <view_dashboard 
                    :viewState="viewState"  
                    :viewparams="viewparams" 
                    :context="JSON.parse(JSON.stringify(context))" 
                    :isEnableCustomized = "false"
                    name="dashboard"  
                    ref='dashboard' 
                    @load="dashboard_load($event)"  
                    @closeview="closeView($event)">
                </view_dashboard>
</studio-view>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import ProductService from '@/service/product/product-service';

import PortalViewEngine from '@engine/view/portal-view-engine';


/**
 * 产品数据看板视图视图基类
 *
 * @export
 * @class ProductMainDashboardViewBase
 * @extends {Vue}
 */
@Component({})
export default class ProductMainDashboardViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductMainDashboardViewBase
     */
    protected appEntityService: ProductService = new ProductService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductMainDashboardViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductMainDashboardViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.maindashboardview.caption',
        srfTitle: 'entities.product.views.maindashboardview.title',
        srfSubTitle: 'entities.product.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductMainDashboardViewBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };



    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}
</script>

<style lang='less'>
@import './product-main-dashboard-view.less';
</style>