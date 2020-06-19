<template>
<studio-embed-view viewName="productstatstesteditview9" viewTitle="产品统计编辑视图" class='deeditview9 product-stats-test-edit-view9'>
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
</studio-embed-view>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import ProductStatsService from '@/service/product-stats/product-stats-service';

import EditView9Engine from '@engine/view/edit-view9-engine';


/**
 * 产品统计编辑视图视图基类
 *
 * @export
 * @class ProductStatsTestEditView9Base
 * @extends {Vue}
 */
@Component({})
export default class ProductStatsTestEditView9Base extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof ProductStatsTestEditView9Base
     */
    protected appEntityService: ProductStatsService = new ProductStatsService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductStatsTestEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductStatsTestEditView9Base
	 */
    protected customViewNavContexts: any = {
        'PRODUCTSTATS': { isRawValue: false, value: 'product' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductStatsTestEditView9Base
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductStatsTestEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.productstats.views.testeditview9.caption',
        srfTitle: 'entities.productstats.views.testeditview9.title',
        srfSubTitle: 'entities.productstats.views.testeditview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductStatsTestEditView9Base
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };




    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductStatsTestEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductStatsTestEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'productstats',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsTestEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsTestEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsTestEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


    /**
    * meditview9状态下发变量
    *
    * @memberof IBZSAM02MobEditView
    */
    @Prop() public panelState ?:Subject<ViewState>;





}
</script>

<style lang='less'>
@import './product-stats-test-edit-view9.less';
</style>