import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import BasisMainInfoService from './basis-main-info-form-service';
import UserYearWorkStatsUIService from '@/uiservice/user-year-work-stats/user-year-work-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {BasisMainInfoEditFormBase}
 */
export class BasisMainInfoEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof BasisMainInfoEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {BasisMainInfoService}
     * @memberof BasisMainInfoEditFormBase
     */
    public service: BasisMainInfoService = new BasisMainInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof BasisMainInfoEditFormBase
     */
    public appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BasisMainInfoEditFormBase
     */
    protected appDeName: string = 'useryearworkstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof BasisMainInfoEditFormBase
     */
    protected appDeLogicName: string = '用户年度工作内容统计';

    /**
     * 界面UI服务对象
     *
     * @type {UserYearWorkStatsUIService}
     * @memberof BasisMainInfoBase
     */  
    public appUIService:UserYearWorkStatsUIService = new UserYearWorkStatsUIService(this.$store);

    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof BasisMainInfoEditFormBase
     */
    protected drCount: number = 3;

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof BasisMainInfoEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        title: null,
        curyear: null,
        judgerole: null,
        id: null,
        useryearworkstats:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof BasisMainInfoEditFormBase
     */
    public rules: any = {
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof BasisMainInfoBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof BasisMainInfoEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '用户年度工作内容统计基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel1: new FormGroupPanelModel({ caption: '研发', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel2: new FormGroupPanelModel({ caption: '测试', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart3: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel3: new FormGroupPanelModel({ caption: '产品经理', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '用户编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfmajortext: new FormItemModel({ caption: '标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        title: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        curyear: new FormItemModel({ caption: '年度', detailType: 'FORMITEM', name: 'curyear', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        judgerole: new FormItemModel({ caption: '判断角色', detailType: 'FORMITEM', name: 'judgerole', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '用户编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

    };

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof BasisMainInfoEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): Promise<void> {
                


        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'dev')) {
                ret = true;
            }
            this.detailsModel.grouppanel1.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'qa')) {
                ret = true;
            }
            this.detailsModel.grouppanel2.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'po')) {
                ret = true;
            }
            this.detailsModel.grouppanel3.setVisible(ret);
        }













        if (Object.is(name, 'curyear')) {
            const details: string[] = ['title'];
            this.updateFormItems('UpdateTitleByYear', this.data, details, true);
        }
    }
}