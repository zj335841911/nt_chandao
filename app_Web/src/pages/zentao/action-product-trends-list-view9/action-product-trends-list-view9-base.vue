
<template>
<studio-embed-view viewName="actionproducttrendslistview9" viewTitle="产品动态" class='delistview9 action-product-trends-list-view9'>
    <view_list 
        :viewState="viewState"  
        :viewparams="viewparams" 
        :context="context" 
        createAction="Create"
        removeAction="Remove"
        updateAction="Update"
        fetchAction="FetchProductTrends"
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
import ActionService from '@/service/action/action-service';

import ListView9Engine from '@engine/view/list-view9-engine';

import CodeListService from "@service/app/codelist-service";


/**
 * 产品动态视图基类
 *
 * @export
 * @class ActionProductTrendsListView9Base
 * @extends {ListView9Base}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ActionProductTrendsListView9Base extends ListView9Base {

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof ActionProductTrendsListView9Base
     */
    protected appEntityService: ActionService = new ActionService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ActionProductTrendsListView9Base
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ActionProductTrendsListView9Base
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ActionProductTrendsListView9Base
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ActionProductTrendsListView9Base
     */
    protected model: any = {
        srfCaption: 'entities.action.views.producttrendslistview9.caption',
        srfTitle: 'entities.action.views.producttrendslistview9.title',
        srfSubTitle: 'entities.action.views.producttrendslistview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ActionProductTrendsListView9Base
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
	protected viewtag: string = '97af408e6a6cb088c824cacd1807f353';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ActionProductTrendsListView9Base
     */
    public engine: ListView9Engine = new ListView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ActionProductTrendsListView9Base
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
            keyPSDEField: 'action',
            majorPSDEField: 'comment',
            isLoadDefault: true,
        });
    }

    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
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
     * @memberof ActionProductTrendsListView9
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        if(args[0].srfsourcekey){
            data.srfsourcekey = args[0].srfsourcekey;
        }
        let tempContext = JSON.parse(JSON.stringify(this.context));
        delete tempContext.action;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'actions', parameterName: 'action' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const _data: any = { w: (new Date().getTime()) };
            Object.assign(_data, data);
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, _data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ActionProductTrendsListView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'actions', parameterName: 'action' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


}
</script>

<style lang='less'>
@import './action-product-trends-list-view9.less';
</style>