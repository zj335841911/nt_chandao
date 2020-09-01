import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, SearchFormControlBase } from '@/studio-core';
import ProjectTeamService from '@/service/project-team/project-team-service';
import DefaultService from './default-searchform-service';
import ProjectTeamUIService from '@/uiservice/project-team/project-team-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {DefaultSearchFormBase}
 */
export class DefaultSearchFormBase extends SearchFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {DefaultService}
     * @memberof DefaultSearchFormBase
     */
    public service: DefaultService = new DefaultService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectTeamService}
     * @memberof DefaultSearchFormBase
     */
    public appEntityService: ProjectTeamService = new ProjectTeamService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected appDeName: string = 'projectteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected appDeLogicName: string = '项目团队';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectTeamUIService}
     * @memberof DefaultBase
     */  
    public appUIService:ProjectTeamUIService = new ProjectTeamUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DefaultSearchFormBase
     */
    public data: any = {
        n_dept_eq: null,
        n_managemembers_eq: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DefaultSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '常规条件', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        n_dept_eq: new FormItemModel({ caption: '选择部门', detailType: 'FORMITEM', name: 'n_dept_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_managemembers_eq: new FormItemModel({ caption: '复制团队', detailType: 'FORMITEM', name: 'n_managemembers_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };
}