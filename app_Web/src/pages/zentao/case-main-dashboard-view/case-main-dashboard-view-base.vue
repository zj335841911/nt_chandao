
<template>
<studio-view viewName="casemaindashboardview" viewTitle="功能测试" class='deportalview case-main-dashboard-view'>
    <template slot='title'>
    <span class='caption-info'>{{$t(model.srfTitle)}}</span>
    </template>
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
import CaseService from '@/service/case/case-service';

import PortalViewEngine from '@engine/view/portal-view-engine';


/**
 * 功能测试视图基类
 *
 * @export
 * @class CaseMainDashboardViewBase
 * @extends {Vue}
 */
@Component({})
export default class CaseMainDashboardViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof CaseMainDashboardViewBase
     */
    protected appEntityService: CaseService = new CaseService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof CaseMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CaseMainDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'case' },
        'SRFPARENTKEY': { isRawValue: false, value: 'case' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CaseMainDashboardViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CaseMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.case.views.maindashboardview.caption',
        srfTitle: 'entities.case.views.maindashboardview.title',
        srfSubTitle: 'entities.case.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CaseMainDashboardViewBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };



    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CaseMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CaseMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'case',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}
</script>

<style lang='less'>
@import './case-main-dashboard-view.less';
</style>