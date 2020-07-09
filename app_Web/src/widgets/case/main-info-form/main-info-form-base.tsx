import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import MainInfoService from './main-info-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {MainInfoEditFormBase}
 */
export class MainInfoEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainInfoEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {MainInfoService}
     * @memberof MainInfoEditFormBase
     */
    public service: MainInfoService = new MainInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof MainInfoEditFormBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoEditFormBase
     */
    protected appDeName: string = 'case';

    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof MainInfoEditFormBase
     */
    protected drCount: number = 0;

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainInfoEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        precondition: null,
        id: null,
        case:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainInfoEditFormBase
     */
    public rules: any = {
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainInfoEditFormBase
     */
    public detailsModel: any = {
        druipart1: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        group1: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        formpage1: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        srforikey: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        srfkey: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        srfmajortext: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        srftempmode: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        srfuf: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        srfdeid: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        srfsourcekey: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        precondition: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        id: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
    };

    /**
     * 表单逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MainInfoEditFormBase
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                










        if (Object.is(name, '') || Object.is(name, 'precondition')) {
            let ret = false;
            const _precondition = this.data.precondition;
            if (this.$verify.testCond(_precondition, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.precondition.setVisible(ret);
        }


    }
}