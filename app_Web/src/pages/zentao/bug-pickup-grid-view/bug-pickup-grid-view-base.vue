<template>
<studio-view viewName="bugpickupgridview" viewTitle="bug选择表格视图" class='depickupgridview bug-pickup-grid-view'>
    <view_grid 
        :viewState="viewState"  
        :viewparams="viewparams" 
        :context="context" 
        :isSingleSelect="isSingleSelect"
        :selectedData="selectedData"
        :showBusyIndicator="true"
        updateAction=""
        removeAction="Remove"
        loaddraftAction=""
        loadAction=""
        createAction=""
        fetchAction="FetchDefault"
        name="grid"  
        ref='grid' 
        @selectionchange="grid_selectionchange($event)"  
        @beforeload="grid_beforeload($event)"  
        @rowdblclick="grid_rowdblclick($event)"  
        @load="grid_load($event)"  
        @closeview="closeView($event)">
    </view_grid>
</studio-view>
</template>

<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, PickupViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';

import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';


/**
 * bug选择表格视图视图基类
 *
 * @export
 * @class BugPickupGridViewBase
 * @extends {PickupViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class BugPickupGridViewBase extends PickupViewBase {

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugPickupGridViewBase
     */
    protected appEntityService: BugService = new BugService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof BugPickupGridViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BugPickupGridViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BugPickupGridViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.pickupgridview.caption',
        srfTitle: 'entities.bug.views.pickupgridview.title',
        srfSubTitle: 'entities.bug.views.pickupgridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridViewBase
     */
    protected containerModel: any = {
        view_grid: { name: 'grid', type: 'GRID' },
    };


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugPickupGridViewBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugPickupGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof BugPickupGridViewBase
     */
    protected isExpandSearchForm: boolean = true;


}
</script>

<style lang='less'>
@import './bug-pickup-grid-view.less';
</style>