import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import CalendarMainService from './calendar-main-form-service';
import TestTaskUIService from '@/uiservice/test-task/test-task-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {CalendarMainEditFormBase}
 */
export class CalendarMainEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CalendarMainEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {CalendarMainService}
     * @memberof CalendarMainEditFormBase
     */
    public service: CalendarMainService = new CalendarMainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof CalendarMainEditFormBase
     */
    public appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarMainEditFormBase
     */
    protected appDeName: string = 'testtask';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarMainEditFormBase
     */
    protected appDeLogicName: string = '测试版本';

    /**
     * 界面UI服务对象
     *
     * @type {TestTaskUIService}
     * @memberof CalendarMainBase
     */  
    public appUIService:TestTaskUIService = new TestTaskUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button1_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_StartDash(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button2_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_CloseDash(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button3_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_BlockDash(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button4_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_EditEdit(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button5_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_Look(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof CalendarMainEditFormBase
     */
    protected drCount: number = 1;

    /**
     * 主键表单项名称
     *
     * @protected
     * @type {number}
     * @memberof CalendarMainEditFormBase
     */
    protected formKeyItemName: string = 'id';
    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof CalendarMainEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        id: null,
        status: null,
        name: null,
        pri: null,
        begin: null,
        end: null,
        desc: null,
        testtask:null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof CalendarMainEditFormBase
     */
    public majorMessageField: string = "name";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CalendarMainEditFormBase
     */
    public rules():any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CalendarMainBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof CalendarMainEditFormBase
     */
    public detailsModel: any = {
        button1: new FormButtonModel({ caption: '开始', detailType: 'BUTTON', name: 'button1', visible: true, isShowCaption: false, form: this, showMoreMode: 0,disabled: false, uiaction: { type: 'DEUIACTION', 
 tag: 'StartDash',actiontarget: 'SINGLEKEY',noprivdisplaymode:2,dataaccaction:'SRFUR__TESTT_START_BUT',visible: true,disabled: false} }),

        button2: new FormButtonModel({ caption: '关闭', detailType: 'BUTTON', name: 'button2', visible: true, isShowCaption: false, form: this, showMoreMode: 0,disabled: false, uiaction: { type: 'DEUIACTION', 
 tag: 'CloseDash',actiontarget: 'SINGLEKEY',noprivdisplaymode:2,dataaccaction:'SRFUR__TESTT_CLOSED_BUT',visible: true,disabled: false} }),

        button3: new FormButtonModel({ caption: '阻塞', detailType: 'BUTTON', name: 'button3', visible: true, isShowCaption: false, form: this, showMoreMode: 0,disabled: false, uiaction: { type: 'DEUIACTION', 
 tag: 'BlockDash',actiontarget: 'SINGLEKEY',noprivdisplaymode:2,dataaccaction:'SRFUR__TESTT_BLOCK_BUT',visible: true,disabled: false} }),

        button4: new FormButtonModel({ caption: '编辑', detailType: 'BUTTON', name: 'button4', visible: true, isShowCaption: false, form: this, showMoreMode: 0,disabled: false, uiaction: { type: 'DEUIACTION', 
 tag: 'EditEdit',actiontarget: 'SINGLEKEY',noprivdisplaymode:1,dataaccaction:'SRFUR__TESTT_EDIT_BUT',visible: true,disabled: false} }),

        button5: new FormButtonModel({ caption: '查看', detailType: 'BUTTON', name: 'button5', visible: true, isShowCaption: false, form: this, showMoreMode: 0,disabled: false, uiaction: { type: 'DEUIACTION', 
 tag: 'Look',actiontarget: 'SINGLEKEY',noprivdisplaymode:2,visible: true,disabled: false} }),

        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.testtask.calendarmain_form', extractMode: 'ITEM', details: [] } }),

        grouppanel3: new FormGroupPanelModel({ caption: '描述', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.testtask.calendarmain_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel4: new FormGroupPanelModel({ caption: '历史记录', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.testtask.calendarmain_form', extractMode: 'ITEM', details: [] } }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.testtask.calendarmain_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 0 }),

        status: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        begin: new FormItemModel({ caption: '开始日期', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        end: new FormItemModel({ caption: '结束日期', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        desc: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

    };

	/**
	 * 表单 开始 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button1_click($event: any): void {
        this.form_button1_click(null, null, $event);

    }

	/**
	 * 表单 关闭 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button2_click($event: any): void {
        this.form_button2_click(null, null, $event);

    }

	/**
	 * 表单 阻塞 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button3_click($event: any): void {
        this.form_button3_click(null, null, $event);

    }

	/**
	 * 表单 编辑 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button4_click($event: any): void {
        this.form_button4_click(null, null, $event);

    }

	/**
	 * 表单 查看 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button5_click($event: any): void {
        this.form_button5_click(null, null, $event);

    }
}