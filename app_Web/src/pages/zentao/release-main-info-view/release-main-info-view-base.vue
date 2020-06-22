<template>
<studio-view viewName="releasemaininfoview" viewTitle="发布编辑视图" class='deeditview release-main-info-view'>
    <view_form 
                :viewState="viewState"  
                :viewparams="viewparams" 
                :context="context" 
                :autosave="false" 
                :viewtag="viewtag"
                :showBusyIndicator="true"
                updateAction="Update"
                removeAction="Remove"
                loaddraftAction="GetDraft"
                loadAction="Get"
                createAction="Create"
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
</studio-view>
</template>

<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, EditViewBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';

import EditViewEngine from '@engine/view/edit-view-engine';


/**
 * 发布编辑视图视图基类
 *
 * @export
 * @class ReleaseMainInfoViewBase
 * @extends {EditViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ReleaseMainInfoViewBase extends EditViewBase {

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof ReleaseMainInfoViewBase
     */
    protected appEntityService: ReleaseService = new ReleaseService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ReleaseMainInfoViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ReleaseMainInfoViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'release' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ReleaseMainInfoViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainInfoViewBase
     */
    protected model: any = {
        srfCaption: 'entities.release.views.maininfoview.caption',
        srfTitle: 'entities.release.views.maininfoview.title',
        srfSubTitle: 'entities.release.views.maininfoview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainInfoViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '983aa1b77ca021f30978523ddef010a0';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ReleaseMainInfoViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ReleaseMainInfoViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'release',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ReleaseMainInfoViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ReleaseMainInfoViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ReleaseMainInfoViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}
</script>

<style lang='less'>
@import './release-main-info-view.less';
</style>