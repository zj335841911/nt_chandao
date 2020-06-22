<template>
<studio-embed-view viewName="casestepmaingridview9_editmode" viewTitle="用例步骤" class='degridview9 case-step-main-grid-view9-edit-mode'>
    <template slot='title'>
    <span class='caption-info'>{{$t(model.srfTitle)}}</span>
    </template>
    <template slot="toolbar">
        <view-toolbar :model="toolBarModels" @item-click="toolbar_click"/>    </template>
    <view_grid 
        :viewState="viewState"  
        :viewparams="viewparams" 
        :context="context" 
        :isSingleSelect="isSingleSelect"
        :showBusyIndicator="true"
        :isOpenEdit="true"
        :gridRowActiveMode="gridRowActiveMode"
        @save="onSave"
        updateAction="UpdateTemp"
        removeAction="RemoveTemp"
        loaddraftAction="GetDraftTemp"
        loadAction="GetTemp"
        createAction="CreateTemp"
        fetchAction="FetchTempDefault"
        :newdata="newdata"
        :opendata="opendata"
        name="grid"  
        ref='grid' 
        @selectionchange="grid_selectionchange($event)"  
        @beforeload="grid_beforeload($event)"  
        @rowdblclick="grid_rowdblclick($event)"  
        @remove="grid_remove($event)"  
        @load="grid_load($event)"  
        @closeview="closeView($event)">
    </view_grid>
</studio-embed-view>
</template>


<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, GridView9Base } from '@/studio-core';
import CaseStepService from '@/service/case-step/case-step-service';

import GridView9Engine from '@engine/view/grid-view9-engine';

import CodeListService from "@service/app/codelist-service";


/**
 * 用例步骤视图基类
 *
 * @export
 * @class CaseStepMainGridView9_EditModeBase
 * @extends {GridView9Base}
 */
@Component({})
@VueLifeCycleProcessing()
export default class CaseStepMainGridView9_EditModeBase extends GridView9Base {

    /**
     * 实体服务对象
     *
     * @type {CaseStepService}
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    protected appEntityService: CaseStepService = new CaseStepService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof CaseStepMainGridView9_EditModeBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CaseStepMainGridView9_EditModeBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CaseStepMainGridView9_EditModeBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    protected model: any = {
        srfCaption: 'entities.casestep.views.maingridview9_editmode.caption',
        srfTitle: 'entities.casestep.views.maingridview9_editmode.title',
        srfSubTitle: 'entities.casestep.views.maingridview9_editmode.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_grid: { name: 'grid', type: 'GRID' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof CaseStepMainGridView9_EditMode
     */
    public toolBarModels: any = {
        deuiaction2: { name: 'deuiaction2', caption: '新建行','isShowCaption':true,'isShowIcon':true, tooltip: '新建行', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'NewRow', target: '' }, class: '' },

        deuiaction3: { name: 'deuiaction3', caption: '保存行','isShowCaption':true,'isShowIcon':true, tooltip: '保存行', iconcls: 'fa fa-save', icon: '', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'SaveRow', target: '' }, class: '' },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'ac71a1cfaecb07640c14f75b8f202b1e';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public engine: GridView9Engine = new GridView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            opendata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.opendata(args,fullargs, params, $event, xData);
            },
            newdata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.newdata(args,fullargs, params, $event, xData);
            },
            grid: this.$refs.grid,
            keyPSDEField: 'casestep',
            majorPSDEField: 'expect',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction2')) {
            this.toolbar_deuiaction2_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.toolbar_deuiaction3_click(null, '', $event2);
        }
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
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
        xData = this.$refs.grid;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.NewRow(datas, contextJO,paramJO,  $event, xData,this,"CaseStep");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.grid;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.SaveRow(datas, contextJO,paramJO,  $event, xData,this,"CaseStep");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof CaseStepMainGridView9_EditMode
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
     * @memberof CaseStepMainGridView9_EditMode
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 新建行
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public NewRow(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        const data: any = {};
        if (_this.newRow && _this.newRow instanceof Function) {
            _this.newRow([{ ...data }], params, $event, xData);
        } else if(xData.newRow && xData.newRow instanceof Function) {
            xData.newRow([{ ...data }], params, $event, xData);
        }else{
            _this.$Notice.error({ title: '错误', desc: 'newRow 视图处理逻辑不存在，请添加!' });
        }
    }
    /**
     * 保存行
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    public SaveRow(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        // 界面行为容器对象 _this
        const _this: any = this;
        if (xData && xData.save instanceof Function) {
            xData.save();
        } else if (_this.save && _this.save instanceof Function) {
            _this.save();
        }
    }

    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    protected isSingleSelect: boolean = true;

    /**
     * 表格行数据默认激活模式
     * 0 不激活
     * 1 单击激活
     * 2 双击激活
     *
     * @protected
     * @type {(0 | 1 | 2)}
     * @memberof CaseStepMainGridView9_EditModeBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}
</script>

<style lang='less'>
@import './case-step-main-grid-view9-edit-mode.less';
</style>