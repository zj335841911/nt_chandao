import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import MainEditService from './main-edit-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {MainEditEditFormBase}
 */
export class MainEditEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainEditEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {MainEditService}
     * @memberof MainEditEditFormBase
     */
    public service: MainEditService = new MainEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof MainEditEditFormBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditEditFormBase
     */
    protected appDeName: string = 'task';

    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof MainEditEditFormBase
     */
    protected drCount: number = 0;

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainEditEditFormBase
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
        id: null,
        name: null,
        desc: null,
        comment: null,
        files: null,
        projectname: null,
        project: null,
        modulename: null,
        storyname: null,
        story: null,
        parentname: null,
        parent: null,
        assignedto: null,
        type: null,
        status: null,
        pri: null,
        mailto: null,
        eststarted: null,
        deadline: null,
        estimate: null,
        consumed: null,
        left: null,
        openedby: null,
        realstarted: null,
        finishedby: null,
        finisheddate: null,
        canceledby: null,
        canceleddate: null,
        closedby: null,
        closedreason: null,
        closeddate: null,
        module: null,
        task:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditEditFormBase
     */
    public rules: any = {
        name: [
            { required: true, type: 'string', message: '任务名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '任务名称 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEditEditFormBase
     */
    public detailsModel: any = {
        grouppanel6: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        grouppanel7: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        druipart1: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        grouppanel2: !!!!模版产生代码错误:----
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
        grouppanel1: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        grouppanel4: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        grouppanel5: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        grouppanel3: !!!!模版产生代码错误:----
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
        id: !!!!模版产生代码错误:----
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
        desc: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        comment: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        files: !!!!模版产生代码错误:----
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
        modulename: !!!!模版产生代码错误:----
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
        story: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        parentname: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        parent: !!!!模版产生代码错误:----
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
        type: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        status: !!!!模版产生代码错误:----
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
        mailto: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        eststarted: !!!!模版产生代码错误:----
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
        estimate: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        consumed: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        left: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        openedby: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        realstarted: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        finishedby: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        finisheddate: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        canceledby: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        canceleddate: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        closedby: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        closedreason: !!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${controlled}  [in template "TEMPLCODE_zh_CN" at line 2, column 290]
----
        closeddate: !!!!模版产生代码错误:----
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