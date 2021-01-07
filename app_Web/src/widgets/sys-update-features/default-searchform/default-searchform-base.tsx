import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import SysUpdateFeaturesService from '@/service/sys-update-features/sys-update-features-service';
import DefaultService from './default-searchform-service';
import SysUpdateFeaturesUIService from '@/uiservice/sys-update-features/sys-update-features-ui-service';
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
     * @type {SysUpdateFeaturesService}
     * @memberof DefaultSearchFormBase
     */
    public appEntityService: SysUpdateFeaturesService = new SysUpdateFeaturesService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected appDeName: string = 'sysupdatefeatures';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected appDeLogicName: string = '系统更新功能';

    /**
     * 界面UI服务对象
     *
     * @type {SysUpdateFeaturesUIService}
     * @memberof DefaultBase
     */  
    public appUIService: SysUpdateFeaturesUIService = new SysUpdateFeaturesUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DefaultSearchFormBase
     */
    public data: any = {
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
    };

    /**
     * 新建默认值
     * @memberof DefaultBase
     */
    public createDefault(){                    
    }
}