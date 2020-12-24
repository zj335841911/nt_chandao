import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import SysUserService from '@/service/sys-user/sys-user-service';
import ChangePasswordService from './change-password-form-service';
import SysUserUIService from '@/uiservice/sys-user/sys-user-ui-service';
import {
    FormButtonModel,
    FormPageModel,
    FormItemModel,
    FormDRUIPartModel,
    FormPartModel,
    FormGroupPanelModel,
    FormIFrameModel,
    FormRowItemModel,
    FormTabPageModel,
    FormTabPanelModel,
    FormUserControlModel,
} from '@/model/form-detail';

/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {ChangePasswordEditFormBase}
 */
export class ChangePasswordEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ChangePasswordEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {ChangePasswordService}
     * @memberof ChangePasswordEditFormBase
     */
    public service: ChangePasswordService = new ChangePasswordService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SysUserService}
     * @memberof ChangePasswordEditFormBase
     */
    public appEntityService: SysUserService = new SysUserService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ChangePasswordEditFormBase
     */
    protected appDeName: string = 'sysuser';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ChangePasswordEditFormBase
     */
    protected appDeLogicName: string = '系统用户';

    /**
     * 界面UI服务对象
     *
     * @type {SysUserUIService}
     * @memberof ChangePasswordBase
     */  
    public appUIService: SysUserUIService = new SysUserUIService(this.$store);

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
        const curUIService:SysUserUIService  = new SysUserUIService();
        curUIService.SysUser_ChangePassword(datas,contextJO, paramJO,  $event, xData,this,"SysUser");
    }

    /**
     * 返回
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof SysUserChangePasswordEditViewBase
     */
    public Exit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        this.closeView(args);
        if(window.parent){
            window.parent.postMessage([{ ...args }],'*');
        }
    }


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ChangePasswordEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        username: null,
        originalpassword: null,
        newpassword: null,
        repeatpassword: null,
        userid: null,
        sysuser: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof ChangePasswordEditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ChangePasswordEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ChangePasswordBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ChangePasswordEditFormBase
     */
    public detailsModel: any = {
        button1: new FormButtonModel({
    caption: '修改密码', detailType: 'BUTTON', name: 'button1', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'ChangePassword',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        visible: true,
        disabled: false,
        }
}),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfkey: new FormItemModel({
    caption: '用户标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfmajortext: new FormItemModel({
    caption: '用户姓名', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srftempmode: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfuf: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfdeid: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfsourcekey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        username: new FormItemModel({
    caption: '用户名', detailType: 'FORMITEM', name: 'username', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        originalpassword: new FormItemModel({
    caption: '原密码', detailType: 'FORMITEM', name: 'originalpassword', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        newpassword: new FormItemModel({
    caption: '新密码', detailType: 'FORMITEM', name: 'newpassword', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        repeatpassword: new FormItemModel({
    caption: '重复密码', detailType: 'FORMITEM', name: 'repeatpassword', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        userid: new FormItemModel({
    caption: '用户标识', detailType: 'FORMITEM', name: 'userid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

    };

	/**
	 * 表单 修改密码 事件
	 *
	 * @memberof @memberof ChangePasswordEditFormBase
	 */
    public button1_click($event: any): void {
        this.form_button1_click(null, null, $event);

    }

    /**
     * 新建默认值
     * @memberof ChangePasswordEditFormBase
     */
    public createDefault() {                    
        if (this.data.hasOwnProperty('username')) {
            this.data['username'] = this.context['srfloginname'];
        }
    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof ChangePasswordBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}