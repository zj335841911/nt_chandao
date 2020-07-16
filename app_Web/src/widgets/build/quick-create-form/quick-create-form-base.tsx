import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
import QuickCreateService from './quick-create-form-service';
import BuildUIService from '@/uiservice/build/build-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {QuickCreateEditFormBase}
 */
export class QuickCreateEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof QuickCreateEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {QuickCreateService}
     * @memberof QuickCreateEditFormBase
     */
    public service: QuickCreateService = new QuickCreateService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof QuickCreateEditFormBase
     */
    public appEntityService: BuildService = new BuildService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof QuickCreateEditFormBase
     */
    protected appDeName: string = 'build';

    /**
     * 界面UI服务对象
     *
     * @type {BuildUIService}
     * @memberof QuickCreateEditFormBase
     */  
    public appUIService:BuildUIService = new BuildUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof QuickCreateEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        project: null,
        productname: null,
        name: null,
        builder: null,
        date: null,
        scmpath: null,
        filepath: null,
        desc: null,
        id: null,
        product: null,
        build:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof QuickCreateEditFormBase
     */
    public rules: any = {
        name: [
            { required: true, type: 'string', message: '名称编号 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '名称编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof QuickCreateEditFormBase
     */
    public detailsModel: any = {
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.build.quickcreate_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.build.quickcreate_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '名称编号', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        productname: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '名称编号', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        builder: new FormItemModel({ caption: '构建者', detailType: 'FORMITEM', name: 'builder', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        date: new FormItemModel({ caption: '打包日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        scmpath: new FormItemModel({ caption: '源代码地址', detailType: 'FORMITEM', name: 'scmpath', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        filepath: new FormItemModel({ caption: '下载地址', detailType: 'FORMITEM', name: 'filepath', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        desc: new FormItemModel({ caption: '描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        product: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

    };

    /**
     * 新建默认值
     * @memberof QuickCreateEditFormBase
     */
    public createDefault(){                    
        if (this.data.hasOwnProperty('builder')) {
            this.data['builder'] = this.viewparams['srfloginname'];
        }
    }
}