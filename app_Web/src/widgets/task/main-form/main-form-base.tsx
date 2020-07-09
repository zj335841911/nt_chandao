import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import MainService from './main-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {MainEditFormBase}
 */
export class MainEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainEditFormBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof MainEditFormBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'task';

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public data: any = {
        srfupdatedate: null,
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        projectname: null,
        project: null,
        type: null,
        modulename: null,
        formitem: null,
        assignedto: null,
        formitem1: null,
        story: null,
        storyname: null,
        name: null,
        pri: null,
        estimate: null,
        desc: null,
        estsarted: null,
        deadline: null,
        formitemex1: null,
        mailto: null,
        id: null,
        module: null,
        task:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public rules: any = {
        projectname: [
            { required: true, type: 'string', message: '所属项目 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: true, type: 'string', message: '任务类型 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '任务类型 值不能为空', trigger: 'blur' },
        ],
        name: [
            { required: true, type: 'string', message: '任务名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '任务名称 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public detailsModel: any = {
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
        srfupdatedate: !!!!模版产生代码错误:----
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
        projectname: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        project: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        type: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        modulename: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        formitem: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        assignedto: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        formitem1: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        story: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        storyname: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        name: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        pri: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        estimate: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        desc: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        estsarted: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        deadline: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        formitemex1: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        mailto: !!!!模版产生代码错误:----
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
        module: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
    };
}