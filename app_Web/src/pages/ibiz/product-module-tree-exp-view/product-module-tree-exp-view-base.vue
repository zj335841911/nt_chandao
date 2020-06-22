<template>
<studio-view viewName="productmoduletreeexpview" viewTitle="需求模块树导航视图" class='detreeexpview product-module-tree-exp-view'>
    <view_treeexpbar 
                    :viewState="viewState"  
                    :viewparams="viewparams" 
                    :context="context" 
                    :viewUID="viewUID"
                    name="treeexpbar"  
                    ref='treeexpbar' 
                    @selectionchange="treeexpbar_selectionchange($event)"  
                    @activated="treeexpbar_activated($event)"  
                    @load="treeexpbar_load($event)"  
                    @closeview="closeView($event)">
                </view_treeexpbar>
</studio-view>
</template>

<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, TreeExpViewBase } from '@/studio-core';
import ProductModuleService from '@/service/product-module/product-module-service';

import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';


/**
 * 需求模块树导航视图视图基类
 *
 * @export
 * @class ProductModuleTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProductModuleTreeExpViewBase extends TreeExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProductModuleService}
     * @memberof ProductModuleTreeExpViewBase
     */
    protected appEntityService: ProductModuleService = new ProductModuleService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductModuleTreeExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductModuleTreeExpViewBase
	 */
    protected customViewNavContexts: any = {
        'MODULETYPE': { isRawValue: true, value: 'story' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.productmodule.views.treeexpview.caption',
        srfTitle: 'entities.productmodule.views.treeexpview.title',
        srfSubTitle: 'entities.productmodule.views.treeexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: { name: 'treeexpbar', type: 'TREEEXPBAR' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductModuleTreeExpView
     */
    public treeexpviewtreeexpbar_toolbarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: '修复','isShowCaption':true,'isShowIcon':true, tooltip: '修复', iconcls: 'fa fa-wrench', icon: '', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'Fix', target: 'NONE' }, class: '' },

        deuiaction2: { name: 'deuiaction2', caption: '刷新','isShowCaption':true,'isShowIcon':true, tooltip: '刷新', iconcls: 'fa fa-refresh', icon: '', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'RefreshAll', target: '' }, class: '' },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '84104216ff9049079f9442c9cbd54342';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductModuleTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductModuleTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'productmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleTreeExpViewBase
     */
    public treeexpbar_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductModuleTreeExpView
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
     * @memberof ProductModuleTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof ProductModuleTreeExpView
     */
    public viewUID: string = 'ibiz-product-module-tree-exp-view';


}
</script>

<style lang='less'>
@import './product-module-tree-exp-view.less';
</style>