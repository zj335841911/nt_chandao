<template>
<studio-view viewName="projectportalview" viewTitle="项目主页" class='appportalview project-portal-view'>
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
        @closeview="closeView($event)">
    </view_dashboard>
</studio-view>
</template>

<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, PortalViewBase } from '@/studio-core';



/**
 * 项目主页视图基类
 *
 * @export
 * @class ProjectPortalViewBase
 * @extends {PortalViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProjectPortalViewBase extends PortalViewBase {


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectPortalViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectPortalViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectPortalViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectPortalViewBase
     */
    protected model: any = {
        srfCaption: 'app.views.projectportalview.caption',
        srfTitle: 'app.views.projectportalview.title',
        srfSubTitle: 'app.views.projectportalview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectPortalViewBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectPortalViewBase
     */
    public engineInit(): void {
    }




}
</script>

<style lang='less'>
@import './project-portal-view.less';
</style>