<template>
<studio-view viewName="projecttasktreeexpview" viewTitle="项目任务导航视图" class='detreeexpview project-task-tree-exp-view'>
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
import ProjectService from '@/service/project/project-service';

import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';


/**
 * 项目任务导航视图视图基类
 *
 * @export
 * @class ProjectTaskTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProjectTaskTreeExpViewBase extends TreeExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectTaskTreeExpViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectTaskTreeExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectTaskTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.tasktreeexpview.caption',
        srfTitle: 'entities.project.views.tasktreeexpview.title',
        srfSubTitle: 'entities.project.views.tasktreeexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectTaskTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: { name: 'treeexpbar', type: 'TREEEXPBAR' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '103bc77ad54de2476db1d4e9c788cd4e';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectTaskTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectTaskTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectTaskTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectTaskTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectTaskTreeExpViewBase
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
     * @memberof ProjectTaskTreeExpView
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
     * @memberof ProjectTaskTreeExpView
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
     * @memberof ProjectTaskTreeExpView
     */
    public viewUID: string = 'zentao-project-task-tree-exp-view';


}
</script>

<style lang='less'>
@import './project-task-tree-exp-view.less';
</style>