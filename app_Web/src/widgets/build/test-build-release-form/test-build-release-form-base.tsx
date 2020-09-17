import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
import TestBuildReleaseService from './test-build-release-form-service';
import BuildUIService from '@/uiservice/build/build-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {TestBuildReleaseEditFormBase}
 */
export class TestBuildReleaseEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestBuildReleaseEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {TestBuildReleaseService}
     * @memberof TestBuildReleaseEditFormBase
     */
    public service: TestBuildReleaseService = new TestBuildReleaseService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof TestBuildReleaseEditFormBase
     */
    public appEntityService: BuildService = new BuildService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestBuildReleaseEditFormBase
     */
    protected appDeName: string = 'build';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestBuildReleaseEditFormBase
     */
    protected appDeLogicName: string = 'build';

    /**
     * 界面UI服务对象
     *
     * @type {BuildUIService}
     * @memberof TestBuildReleaseBase
     */  
    public appUIService:BuildUIService = new BuildUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof TestBuildReleaseEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        releasetype: null,
        backgroundid: null,
        sqlid: null,
        frontapplication: null,
        rebuild: null,
        id: null,
        build:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof TestBuildReleaseEditFormBase
     */
    public rules: any = {
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof TestBuildReleaseBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof TestBuildReleaseEditFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '名称编号', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        releasetype: new FormItemModel({ caption: '运行模式', detailType: 'FORMITEM', name: 'releasetype', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        backgroundid: new FormItemModel({ caption: '后台体系', detailType: 'FORMITEM', name: 'backgroundid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        sqlid: new FormItemModel({ caption: '运行数据库', detailType: 'FORMITEM', name: 'sqlid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        frontapplication: new FormItemModel({ caption: '系统应用', detailType: 'FORMITEM', name: 'frontapplication', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        rebuild: new FormItemModel({ caption: '重新构建', detailType: 'FORMITEM', name: 'rebuild', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

    };
}