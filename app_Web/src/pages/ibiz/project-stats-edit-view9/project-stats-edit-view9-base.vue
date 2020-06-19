<template>
<studio-embed-view viewName="projectstatseditview9" viewTitle="项目统计编辑视图" class='deeditview9 project-stats-edit-view9'>
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
import ProjectStatsService from '@/service/project-stats/project-stats-service';

import EditView9Engine from '@engine/view/edit-view9-engine';


/**
 * 项目统计编辑视图视图基类
 *
 * @export
 * @class ProjectStatsEditView9Base
 * @extends {Vue}
 */
@Component({})
export default class ProjectStatsEditView9Base extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ProjectStatsService}
     * @memberof ProjectStatsEditView9Base
     */
    protected appEntityService: ProjectStatsService = new ProjectStatsService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectStatsEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectStatsEditView9Base
	 */
    protected customViewNavContexts: any = {
        'PROJECTSTATS': { isRawValue: false, value: 'project' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectStatsEditView9Base
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectStatsEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.projectstats.views.editview9.caption',
        srfTitle: 'entities.projectstats.views.editview9.title',
        srfSubTitle: 'entities.projectstats.views.editview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectStatsEditView9Base
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };




    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectStatsEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectStatsEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'projectstats',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectStatsEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectStatsEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectStatsEditView9Base
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
@import './project-stats-edit-view9.less';
</style>