<template>
<studio-view viewName="productlistexpview" viewTitle="产品列表导航视图" class='delistexpview product-list-exp-view'>
    <view_listexpbar 
        :viewState="viewState"  
        :viewparams="viewparams" 
        :context="context" 
        :showBusyIndicator="true" 
        :viewUID="viewUID"
        :newdata="newdata"
        :opendata="opendata"
        name="listexpbar"  
        ref='listexpbar' 
        @selectionchange="listexpbar_selectionchange($event)"  
        @activated="listexpbar_activated($event)"  
        @load="listexpbar_load($event)"  
        @closeview="closeView($event)">
    </view_listexpbar>
</studio-view>
</template>

<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, ListExpViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';

import ListExpViewEngine from '@engine/view/list-exp-view-engine';


/**
 * 产品列表导航视图视图基类
 *
 * @export
 * @class ProductListExpViewBase
 * @extends {ListExpViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProductListExpViewBase extends ListExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductListExpViewBase
     */
    protected appEntityService: ProductService = new ProductService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductListExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductListExpViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductListExpViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductListExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.listexpview.caption',
        srfTitle: 'entities.product.views.listexpview.title',
        srfSubTitle: 'entities.product.views.listexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductListExpViewBase
     */
    protected containerModel: any = {
        view_listexpbar: { name: 'listexpbar', type: 'LISTEXPBAR' },
    };




    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductListExpViewBase
     */
    public engine: ListExpViewEngine = new ListExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductListExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            listexpbar: this.$refs.listexpbar,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * listexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductListExpViewBase
     */
    public listexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'selectionchange', $event);
    }

    /**
     * listexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductListExpViewBase
     */
    public listexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'activated', $event);
    }

    /**
     * listexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductListExpViewBase
     */
    public listexpbar_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('listexpbar', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductListExpView
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
     * @memberof ProductListExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }




}
</script>

<style lang='less'>
@import './product-list-exp-view.less';
</style>