<template>
<studio-view viewName="projectpickupgridview" viewTitle="project选择表格视图" class='depickupgridview project-pickup-grid-view'>
    <template slot='title'>
    <span class='caption-info'>{{$t(model.srfTitle)}}</span>
    </template>
    <template slot="searchForm">
                <view_searchform 
            :viewState="viewState"  
            :viewparams="viewparams" 
            :context="context" 
            :showBusyIndicator="true"
            v-show="isExpandSearchForm"
            loaddraftAction="FilterGetDraft"
            loadAction="FilterGet"
        
            name="searchform"  
            ref='searchform' 
            @save="searchform_save($event)"  
            @search="searchform_search($event)"  
            @load="searchform_load($event)"  
            @closeview="closeView($event)">
        </view_searchform>
    </template>
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
import ProjectService from '@/service/project/project-service';

import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';


/**
 * project选择表格视图视图基类
 *
 * @export
 * @class ProjectPickupGridViewBase
 * @extends {PickupViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProjectPickupGridViewBase extends PickupViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectPickupGridViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectPickupGridViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectPickupGridViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectPickupGridViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectPickupGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.pickupgridview.caption',
        srfTitle: 'entities.project.views.pickupgridview.title',
        srfSubTitle: 'entities.project.views.pickupgridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectPickupGridViewBase
     */
    protected containerModel: any = {
        view_grid: { name: 'grid', type: 'GRID' },
        view_searchform: { name: 'searchform', type: 'SEARCHFORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '3b346aee2b79b7b6b59bc870b4c67f72';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectPickupGridViewBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectPickupGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            searchform: this.$refs.searchform,
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPickupGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPickupGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPickupGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPickupGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPickupGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPickupGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPickupGridViewBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof ProjectPickupGridViewBase
     */
    protected isExpandSearchForm: boolean = true;


}
</script>

<style lang='less'>
@import './project-pickup-grid-view.less';
</style>