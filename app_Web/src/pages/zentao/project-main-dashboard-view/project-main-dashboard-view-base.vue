<template>
<studio-view viewName="projectmaindashboardview" viewTitle="项目数据看板视图" class='deportalview project-main-dashboard-view'>
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
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, DashboardViewBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';

import PortalViewEngine from '@engine/view/portal-view-engine';


/**
 * 项目数据看板视图视图基类
 *
 * @export
 * @class ProjectMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProjectMainDashboardViewBase extends DashboardViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectMainDashboardViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectMainDashboardViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectMainDashboardViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.maindashboardview.caption',
        srfTitle: 'entities.project.views.maindashboardview.title',
        srfSubTitle: 'entities.project.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectMainDashboardViewBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}
</script>

<style lang='less'>
@import './project-main-dashboard-view.less';
</style>