<template>
<studio-view viewName="taskopentaskview" viewTitle="开始任务" class='deoptview task-open-task-view'>
    <template slot='title'>
    <span class='caption-info'>{{$t(model.srfTitle)}}</span>
    </template>
    <view_form 
                    :viewState="viewState"  
                    :viewparams="viewparams" 
                    :context="context" 
                    :autosave="false" 
                    :viewtag="viewtag"
                    :showBusyIndicator="true"
                    updateAction="Start"
                    removeAction="Remove"
                    loaddraftAction="GetDraft"
                    loadAction="Get"
                    createAction="Start"
                    WFSubmitAction=""
                    WFStartAction=""
                    style='' 
                    name="form"  
                    ref='form' 
                    @save="form_save($event)"  
                    @remove="form_remove($event)"  
                    @load="form_load($event)"  
                    @closeview="closeView($event)">
                </view_form>
    <template slot="footer">
        <div class="option-view-footer-actions">
            <i-button type='primary' @click="onClickOk">{{ containerModel.view_okbtn.text }}</i-button>
            &nbsp;&nbsp;
            <i-button @click="onClickCancel">{{ containerModel.view_cancelbtn.text }}</i-button>
        </div>
    </template>
</studio-view>
</template>

<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, OptionViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';

import OptionViewEngine from '@engine/view/option-view-engine';


/**
 * 开始任务视图基类
 *
 * @export
 * @class TaskOpenTaskViewBase
 * @extends {OptionViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class TaskOpenTaskViewBase extends OptionViewBase {

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskOpenTaskViewBase
     */
    protected appEntityService: TaskService = new TaskService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TaskOpenTaskViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskOpenTaskViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'task' },
        'SRFPARENTKEY': { isRawValue: false, value: 'task' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskOpenTaskViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskOpenTaskViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.opentaskview.caption',
        srfTitle: 'entities.task.views.opentaskview.title',
        srfSubTitle: 'entities.task.views.opentaskview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskOpenTaskViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
        view_okbtn: { name: 'okbtn', type: 'button', text: '确定', disabled: true },
        view_cancelbtn: { name: 'cancelbtn', type: 'button', text: '取消', disabled: false },
        view_leftbtn: { name: 'leftbtn', type: 'button', text: '左移', disabled: true },
        view_rightbtn: { name: 'rightbtn', type: 'button', text: '右移', disabled: true },
        view_allleftbtn: { name: 'allleftbtn', type: 'button', text: '全部左移', disabled: true },
        view_allrightbtn: { name: 'allrightbtn', type: 'button', text: '全部右移', disabled: true },
    };


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskOpenTaskViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskOpenTaskViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskOpenTaskViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskOpenTaskViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskOpenTaskViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}
</script>

<style lang='less'>
@import './task-open-task-view.less';
</style>