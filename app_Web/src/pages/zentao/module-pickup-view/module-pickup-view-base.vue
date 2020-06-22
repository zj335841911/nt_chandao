<template>
<studio-view viewName="modulepickupview" viewTitle="模块选择" class='depickupview module-pickup-view'>
    <div class="content-container pickup-view">
                <view_pickupviewpanel 
                    :viewState="viewState"  
                    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
                    :context="JSON.parse(JSON.stringify(context))" 
                    :isSingleSelect="isSingleSelect"
                    :selectedData="selectedData"
                    :isShowButton="isShowButton"
                    name="pickupviewpanel"  
                    ref='pickupviewpanel' 
                    @selectionchange="pickupviewpanel_selectionchange($event)"  
                    @activated="pickupviewpanel_activated($event)"  
                    @load="pickupviewpanel_load($event)"  
                    @closeview="closeView($event)">
                </view_pickupviewpanel>
            <card v-if="isShowButton" :dis-hover="true" :bordered="false" class="footer">
                <row :style="{ textAlign: 'right' }">
                    <i-button type="primary" :disabled="this.viewSelections.length > 0 ? false : true" @click="onClickOk">{{this.containerModel.view_okbtn.text}}</i-button>
                        &nbsp;&nbsp;
                    <i-button @click="onClickCancel">{{this.containerModel.view_cancelbtn.text}}</i-button>
                </row>
            </card>
        </div>
</studio-view>
</template>

<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, PickupViewBase } from '@/studio-core';
import ModuleService from '@/service/module/module-service';

import PickupViewEngine from '@engine/view/pickup-view-engine';


/**
 * 模块选择视图基类
 *
 * @export
 * @class ModulePickupViewBase
 * @extends {PickupViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ModulePickupViewBase extends PickupViewBase {

    /**
     * 实体服务对象
     *
     * @type {ModuleService}
     * @memberof ModulePickupViewBase
     */
    protected appEntityService: ModuleService = new ModuleService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ModulePickupViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ModulePickupViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ModulePickupViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ModulePickupViewBase
     */
    protected model: any = {
        srfCaption: 'entities.module.views.pickupview.caption',
        srfTitle: 'entities.module.views.pickupview.title',
        srfSubTitle: 'entities.module.views.pickupview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ModulePickupViewBase
     */
    protected containerModel: any = {
        view_pickupviewpanel: { name: 'pickupviewpanel', type: 'PICKUPVIEWPANEL' },
        view_okbtn: { name: 'okbtn', type: 'button', text: '确定', disabled: true },
        view_cancelbtn: { name: 'cancelbtn', type: 'button', text: '取消', disabled: false },
        view_leftbtn: { name: 'leftbtn', type: 'button', text: '左移', disabled: true },
        view_rightbtn: { name: 'rightbtn', type: 'button', text: '右移', disabled: true },
        view_allleftbtn: { name: 'allleftbtn', type: 'button', text: '全部左移', disabled: true },
        view_allrightbtn: { name: 'allrightbtn', type: 'button', text: '全部右移', disabled: true },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'cb6c278fd7205b3de3fc041816d15dd8';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ModulePickupViewBase
     */
    public engine: PickupViewEngine = new PickupViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ModulePickupViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'module',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ModulePickupViewBase
     */
    public pickupviewpanel_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ModulePickupViewBase
     */
    public pickupviewpanel_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'activated', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ModulePickupViewBase
     */
    public pickupviewpanel_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }


}
</script>

<style lang='less'>
@import './module-pickup-view.less';
</style>