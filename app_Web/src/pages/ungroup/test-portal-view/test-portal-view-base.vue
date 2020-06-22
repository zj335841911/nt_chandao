<template>
<studio-view viewName="testportalview" viewTitle="测试主页" class='appportalview test-portal-view'>
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
 * 测试主页视图基类
 *
 * @export
 * @class TestPortalViewBase
 * @extends {PortalViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class TestPortalViewBase extends PortalViewBase {


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestPortalViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestPortalViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestPortalViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestPortalViewBase
     */
    protected model: any = {
        srfCaption: 'app.views.testportalview.caption',
        srfTitle: 'app.views.testportalview.title',
        srfSubTitle: 'app.views.testportalview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestPortalViewBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'D1283E46-401A-4CFD-A7A1-BF5B90197463';


    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestPortalViewBase
     */
    public engineInit(): void {
    }




}
</script>

<style lang='less'>
@import './test-portal-view.less';
</style>