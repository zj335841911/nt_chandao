<template>
<studio-view viewName="projectmoduletreeexpview" viewTitle="任务模块树导航视图" class='detreeexpview project-module-tree-exp-view'>
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
import ProjectModuleService from '@/service/project-module/project-module-service';

import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';


/**
 * 任务模块树导航视图视图基类
 *
 * @export
 * @class ProjectModuleTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProjectModuleTreeExpViewBase extends TreeExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProjectModuleService}
     * @memberof ProjectModuleTreeExpViewBase
     */
    protected appEntityService: ProjectModuleService = new ProjectModuleService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectModuleTreeExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectModuleTreeExpViewBase
	 */
    protected customViewNavContexts: any = {
        'MODULETYPE': { isRawValue: true, value: 'task' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectModuleTreeExpViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectModuleTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.projectmodule.views.treeexpview.caption',
        srfTitle: 'entities.projectmodule.views.treeexpview.title',
        srfSubTitle: 'entities.projectmodule.views.treeexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectModuleTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: { name: 'treeexpbar', type: 'TREEEXPBAR' },
    };



    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectModuleTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectModuleTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'projectmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleTreeExpViewBase
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
     * @memberof ProjectModuleTreeExpView
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
     * @memberof ProjectModuleTreeExpView
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
     * @memberof ProjectModuleTreeExpView
     */
    public viewUID: string = 'ibiz-project-module-tree-exp-view';

}
</script>

<style lang='less'>
@import './project-module-tree-exp-view.less';
</style>