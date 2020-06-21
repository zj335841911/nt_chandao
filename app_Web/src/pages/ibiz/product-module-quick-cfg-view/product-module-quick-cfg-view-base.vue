<template>
<studio-view viewName="productmodulequickcfgview" viewTitle="需求模块" class='deoptview product-module-quick-cfg-view'>
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
import ProductModuleService from '@/service/product-module/product-module-service';

import OptionViewEngine from '@engine/view/option-view-engine';


/**
 * 需求模块视图基类
 *
 * @export
 * @class ProductModuleQuickCfgViewBase
 * @extends {OptionViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class ProductModuleQuickCfgViewBase extends OptionViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProductModuleService}
     * @memberof ProductModuleQuickCfgViewBase
     */
    protected appEntityService: ProductModuleService = new ProductModuleService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductModuleQuickCfgViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductModuleQuickCfgViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductModuleQuickCfgViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleQuickCfgViewBase
     */
    protected model: any = {
        srfCaption: 'entities.productmodule.views.quickcfgview.caption',
        srfTitle: 'entities.productmodule.views.quickcfgview.title',
        srfSubTitle: 'entities.productmodule.views.quickcfgview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleQuickCfgViewBase
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
     * @memberof ProductModuleQuickCfgViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductModuleQuickCfgViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'productmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleQuickCfgViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleQuickCfgViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleQuickCfgViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}
</script>

<style lang='less'>
@import './product-module-quick-cfg-view.less';
</style>