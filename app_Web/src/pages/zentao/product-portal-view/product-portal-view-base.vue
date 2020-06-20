<template>
<studio-view viewName="productportalview" viewTitle="产品主页" class='appportalview product-portal-view'>
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
 * 产品主页视图基类
 *
 * @export
 * @class ProductPortalViewBase
 * @extends {PortalViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProductPortalViewBase extends PortalViewBase {


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductPortalViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductPortalViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductPortalViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductPortalViewBase
     */
    protected model: any = {
        srfCaption: 'app.views.productportalview.caption',
        srfTitle: 'app.views.productportalview.title',
        srfSubTitle: 'app.views.productportalview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductPortalViewBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductPortalViewBase
     */
    public engineInit(): void {
    }




}
</script>

<style lang='less'>
@import './product-portal-view.less';
</style>