<template>
<studio-view viewName="taskkanbanview" viewTitle="任务看板视图" class='dekanbanview task-kanban-view'>
    <template slot='title'>
    <span class='caption-info'>{{$t(model.srfTitle)}}</span>
    </template>
    <template slot="toolbar">
                <view-toolbar :model="toolBarModels" @item-click="toolbar_click"/>    </template>
    <view_kanban 
                    :viewState="viewState"  
                    :viewparams="viewparams" 
                    :context="context" 
                    createAction="Create"
                    removeAction="Remove"
                    updateAction="Update"
                    fetchAction="FetchDefault"
                    updateGroupAction="Update"
                    :showBusyIndicator="true" 
                    name="kanban"  
                    ref='kanban' 
                    @selectionchange="kanban_selectionchange($event)"  
                    @beforeload="kanban_beforeload($event)"  
                    @rowdblclick="kanban_rowdblclick($event)"  
                    @remove="kanban_remove($event)"  
                    @load="kanban_load($event)"  
                    @closeview="closeView($event)">
                </view_kanban>
</studio-view>
</template>


<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, KanBanViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';

import KanBanViewEngine from '@engine/view/kan-ban-view-engine';

import CodeListService from "@service/app/codelist-service";


/**
 * 任务看板视图视图基类
 *
 * @export
 * @class TaskKanbanViewBase
 * @extends {KanBanViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class TaskKanbanViewBase extends KanBanViewBase {

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskKanbanViewBase
     */
    protected appEntityService: TaskService = new TaskService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TaskKanbanViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskKanbanViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskKanbanViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskKanbanViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.kanbanview.caption',
        srfTitle: 'entities.task.views.kanbanview.title',
        srfSubTitle: 'entities.task.views.kanbanview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskKanbanViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_kanban: { name: 'kanban', type: 'KANBAN' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof TaskKanbanView
     */
    public toolBarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: '新建','isShowCaption':true,'isShowIcon':true, tooltip: '新建', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'New', target: '' }, class: '' },

        seperator1: {  name: 'seperator1', type: 'SEPERATOR', visabled: true, dataaccaction: '', uiaction: { } },
        deuiaction2: { name: 'deuiaction2', caption: '刷新','isShowCaption':true,'isShowIcon':true, tooltip: '刷新', iconcls: 'fa fa-refresh', icon: '', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'Refresh', target: '' }, class: '' },

    };



    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskKanbanViewBase
     */
    public engine: KanBanViewEngine = new KanBanViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskKanbanViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            kanban: this.$refs.kanban,
            opendata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.opendata(args,fullargs, params, $event, xData);
            },
            newdata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.newdata(args,fullargs, params, $event, xData);
            },
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskKanbanViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.toolbar_deuiaction1_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.toolbar_deuiaction2_click(null, '', $event2);
        }
    }

    /**
     * kanban 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskKanbanViewBase
     */
    public kanban_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'selectionchange', $event);
    }

    /**
     * kanban 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskKanbanViewBase
     */
    public kanban_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'beforeload', $event);
    }

    /**
     * kanban 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskKanbanViewBase
     */
    public kanban_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'rowdblclick', $event);
    }

    /**
     * kanban 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskKanbanViewBase
     */
    public kanban_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'remove', $event);
    }

    /**
     * kanban 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskKanbanViewBase
     */
    public kanban_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'load', $event);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.kanban;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.New(datas, contextJO,paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.kanban;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.Refresh(datas, contextJO,paramJO,  $event, xData,this,"Task");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskKanbanView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        if(args[0].srfsourcekey){
            data.srfsourcekey = args[0].srfsourcekey;
        }
        let tempContext = JSON.parse(JSON.stringify(this.context));
        delete tempContext.task;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.project && true){
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'task-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.task.views.editview.title'),
            placement: 'DRAWER_RIGHT',
        };
        openDrawer(view, data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskKanbanView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.project && true){
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'task-main-dashboard-view', 
            height: 0, 
            width: 1360,  
            title: this.$t('entities.task.views.maindashboardview.title'),
            placement: 'DRAWER_TOP',
        };
        openDrawer(view, data);
    }


    /**
     * 新建
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TaskKanbanViewBase
     */
    public New(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
         const _this: any = this;
        if (_this.newdata && _this.newdata instanceof Function) {
            const data: any = {};
            _this.newdata([{ ...data }],[{ ...data }], params, $event, xData);
        } else {
            _this.$Notice.error({ title: '错误', desc: 'newdata 视图处理逻辑不存在，请添加!' });
        }
    }
    /**
     * 刷新
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TaskKanbanViewBase
     */
    public Refresh(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.refresh && xData.refresh instanceof Function) {
            xData.refresh(args);
        } else if (_this.refresh && _this.refresh instanceof Function) {
            _this.refresh(args);
        }
    }

    /**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof TaskKanbanView
     */
    protected viewUID: string = 'zentao-task-kanban-view';
}
</script>

<style lang='less'>
@import './task-kanban-view.less';
</style>