import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import DefaultService from './default-searchform-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


/**
 * searchform部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {DefaultSearchFormBase}
 */
export class DefaultSearchFormBase extends MainControlBase {

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
     * @type {ProductService}
     * @memberof DefaultSearchFormBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected appDeName: string = 'product';

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DefaultBase
     */
    public data: any = {
        n_acl_eq: null,
        n_line_eq: null,
        n_linename_like: null,
        n_linename_eq: null,
        n_name_like: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DefaultBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '常规条件', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        n_acl_eq: new FormItemModel({ caption: '访问控制(等于(=))', detailType: 'FORMITEM', name: 'n_acl_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_line_eq: new FormItemModel({ caption: '产品线(等于(=))', detailType: 'FORMITEM', name: 'n_line_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_linename_like: new FormItemModel({ caption: '产品线(文本包含(%))', detailType: 'FORMITEM', name: 'n_linename_like', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_linename_eq: new FormItemModel({ caption: '产品线(等于(=))', detailType: 'FORMITEM', name: 'n_linename_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_name_like: new FormItemModel({ caption: '产品名称(文本包含(%))', detailType: 'FORMITEM', name: 'n_name_like', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 监控表单属性 n_acl_eq 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DefaultBase
     */
    @Watch('data.n_acl_eq')
    onN_acl_eqChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'n_acl_eq', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 n_line_eq 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DefaultBase
     */
    @Watch('data.n_line_eq')
    onN_line_eqChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'n_line_eq', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 n_linename_like 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DefaultBase
     */
    @Watch('data.n_linename_like')
    onN_linename_likeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'n_linename_like', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 n_linename_eq 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DefaultBase
     */
    @Watch('data.n_linename_eq')
    onN_linename_eqChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'n_linename_eq', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 n_name_like 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DefaultBase
     */
    @Watch('data.n_name_like')
    onN_name_likeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'n_name_like', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof DefaultBase
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
     * 表单逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof DefaultBase
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                






    }

    /**
     * 表单值变化
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof DefaultBase
     */
    public formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 表单加载完成
     *
     * @public
     * @param {*} [data={}]
     * @memberof DefaultBase
     */
    public onFormLoad(data: any = {}): void {
        this.setFormEnableCond(data);
        this.fillForm(data);
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }


    /**
     * 分组界面行为事件
     *
     * @param {*} $event
     * @memberof DefaultBase
     */
    public groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item:any = $event.item;
    }

}