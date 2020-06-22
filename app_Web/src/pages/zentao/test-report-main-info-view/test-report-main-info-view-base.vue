<template>
<studio-view viewName="testreportmaininfoview" viewTitle="测试报告编辑视图" class='deeditview test-report-main-info-view'>
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
import TestReportService from '@/service/test-report/test-report-service';

import EditViewEngine from '@engine/view/edit-view-engine';


/**
 * 测试报告编辑视图视图基类
 *
 * @export
 * @class TestReportMainInfoViewBase
 * @extends {EditViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class TestReportMainInfoViewBase extends EditViewBase {

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof TestReportMainInfoViewBase
     */
    protected appEntityService: TestReportService = new TestReportService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestReportMainInfoViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestReportMainInfoViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testreport.views.maininfoview.caption',
        srfTitle: 'entities.testreport.views.maininfoview.title',
        srfSubTitle: 'entities.testreport.views.maininfoview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestReportMainInfoViewBase
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
	protected viewtag: string = '3d56b0e37a56b9be1a28589c04f573fa';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestReportMainInfoViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestReportMainInfoViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'testreport',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportMainInfoViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportMainInfoViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportMainInfoViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}
</script>

<style lang='less'>
@import './test-report-main-info-view.less';
</style>