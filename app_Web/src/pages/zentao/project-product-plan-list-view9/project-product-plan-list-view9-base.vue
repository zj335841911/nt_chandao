
<template>
<studio-embed-view viewName="projectproductplanlistview9" viewTitle="项目产品列表视图" class='delistview9 project-product-plan-list-view9'>
    <view_list 
        :viewState="viewState"  
        :viewparams="viewparams" 
        :context="context" 
        createAction="Create"
        removeAction="Remove"
        updateAction="Update"
        fetchAction="FetchRelationPlan"
        :showBusyIndicator="true"
        :newdata="newdata"
        :opendata="opendata"
        name="list"  
        ref='list' 
        @selectionchange="list_selectionchange($event)"  
        @beforeload="list_beforeload($event)"  
        @rowdblclick="list_rowdblclick($event)"  
        @remove="list_remove($event)"  
        @load="list_load($event)"  
        @closeview="closeView($event)">
    </view_list>
</studio-embed-view>
</template>


<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, ListView9Base } from '@/studio-core';
import ProjectProductService from '@/service/project-product/project-product-service';

import ListView9Engine from '@engine/view/list-view9-engine';

import CodeListService from "@service/app/codelist-service";


/**
 * 项目产品列表视图视图基类
 *
 * @export
 * @class ProjectProductPlanListView9Base
 * @extends {ListView9Base}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProjectProductPlanListView9Base extends ListView9Base {

    /**
     * 实体服务对象
     *
     * @type {ProjectProductService}
     * @memberof ProjectProductPlanListView9Base
     */
    protected appEntityService: ProjectProductService = new ProjectProductService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectProductPlanListView9Base
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectProductPlanListView9Base
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectProductPlanListView9Base
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectProductPlanListView9Base
     */
    protected model: any = {
        srfCaption: 'entities.projectproduct.views.planlistview9.caption',
        srfTitle: 'entities.projectproduct.views.planlistview9.title',
        srfSubTitle: 'entities.projectproduct.views.planlistview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectProductPlanListView9Base
     */
    protected containerModel: any = {
        view_list: { name: 'list', type: 'LIST' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '03c110360a714011ed9c30b8207d3703';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectProductPlanListView9Base
     */
    public engine: ListView9Engine = new ListView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectProductPlanListView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            list: this.$refs.list,
            opendata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.opendata(args,fullargs, params, $event, xData);
            },
            newdata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.newdata(args,fullargs, params, $event, xData);
            },
            keyPSDEField: 'projectproduct',
            isLoadDefault: true,
        });
    }

    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectProductPlanListView9Base
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectProductPlanListView9Base
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectProductPlanListView9Base
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectProductPlanListView9Base
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectProductPlanListView9Base
     */
    public list_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProjectProductPlanListView9
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProjectProductPlanListView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


}
</script>

<style lang='less'>
@import './project-product-plan-list-view9.less';
</style>