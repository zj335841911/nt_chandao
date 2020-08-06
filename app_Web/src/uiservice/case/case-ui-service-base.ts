import { Environment } from '@/environments/environment';
import { UIActionTool,Util } from '@/utils';
import UIService from '../ui-service';
import { Subject } from 'rxjs';
import CaseService from '@/service/case/case-service';
import CaseAuthService from '@/authservice/case/case-auth-service';

/**
 * 测试用例UI服务对象基类
 *
 * @export
 * @class CaseUIServiceBase
 */
export default class CaseUIServiceBase extends UIService {

    /**
     * 是否支持工作流
     * 
     * @memberof  CaseUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  CaseUIServiceBase
     */
    public dataService:CaseService = new CaseService();

    /**
     * 所有关联视图
     * 
     * @memberof  CaseUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  CaseUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  CaseUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  CaseUIServiceBase
     */  
    public mainStateFields:Array<any> = ['status1'];

    /**
     * 主状态集合Map
     * 
     * @memberof  CaseUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  CaseUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  CaseUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseUIServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
        this.authService = new CaseAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  CaseUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set('EDITVIEW:',{viewname:'editview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'linkcasegridview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'optionview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'gridview9_my',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'curtesttaskgridview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'maingridview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'maininfoeditview9',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'mainnewview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'gridview9_storyrelated',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'batchnewgridview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'maindashboardview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'cursuitgridview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'gridview9',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'maineditview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'mainmynewgridview',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'maindetaileditview9',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'gridview9_mecretae',srfappde:'cases'});
        this.allViewMap.set(':',{viewname:'mainmygridview',srfappde:'cases'});
        this.allViewMap.set('MDATAVIEW:',{viewname:'gridview',srfappde:'cases'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  CaseUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('blocked','blocked');
        this.allDeMainStateMap.set('casechange','casechange');
        this.allDeMainStateMap.set('done','done');
        this.allDeMainStateMap.set('investigate','investigate');
        this.allDeMainStateMap.set('normal','normal');
        this.allDeMainStateMap.set('storychange','storychange');
        this.allDeMainStateMap.set('wait','wait');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  CaseUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('blocked',{'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':1,'EDIT':1,'READ':0,'RESULT':1,'RUN':1,'TOBUG':0,'UNLINK':1,'UPDATE':1});
        this.allDeMainStateOPPrivsMap.set('casechange',{'CASECOF':1,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0});
        this.allDeMainStateOPPrivsMap.set('done',{'CASECOF':0,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':1,'UPDATE':0});
        this.allDeMainStateOPPrivsMap.set('investigate',{'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':1,'EDIT':1,'READ':0,'RESULT':1,'RUN':1,'TOBUG':0,'UNLINK':1,'UPDATE':1});
        this.allDeMainStateOPPrivsMap.set('normal',{'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':1,'EDIT':1,'READ':0,'RESULT':1,'RUN':1,'TOBUG':0,'UNLINK':1,'UPDATE':1});
        this.allDeMainStateOPPrivsMap.set('storychange',{'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':1,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0});
        this.allDeMainStateOPPrivsMap.set('wait',{'CASECOF':0,'CASERESULT':1,'CASERUN':1,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':1,'UPDATE':0});
    }

    /**
     * 执行
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_Execute(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        let deResParameters: any[] = [];
        if(context.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'cases', parameterName: 'case' },
        ];
            const openPopupModal = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appmodal.openModal(view, context, data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'case-option-view', 
                height: 600, 
                width: 800,  
                title: actionContext.$t('entities.case.views.optionview.title'),
            };
            openPopupModal(view, data);
    }

    /**
     * 移除
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_unlinkCase(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(context,{TASK:"%task%"});
        Object.assign(params,{task:"%task%"});
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        // 直接调实体服务需要转换的数据
        if(context && context.srfsessionid){
          context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        const backend = () => {
            const curService:CaseService =  new CaseService();
            curService.UnlinkCase(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '移除成功！' });

                const _this: any = actionContext;
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
                return response;
            }).catch((response: any) => {
                if (!response || !response.status || !response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: '系统异常！' });
                    return;
                }
                if (response.status === 401) {
                    return;
                }
                return response;
            });
        };
        backend();
    }

    /**
     * 确认用例变动
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_confirmChange(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        // 直接调实体服务需要转换的数据
        if(context && context.srfsessionid){
          context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        const backend = () => {
            const curService:CaseService =  new CaseService();
            curService.ConfirmChange(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '确认用例变动成功！' });

                const _this: any = actionContext;
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
                return response;
            }).catch((response: any) => {
                if (!response || !response.status || !response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: '系统异常！' });
                    return;
                }
                if (response.status === 401) {
                    return;
                }
                return response;
            });
        };
        backend();
    }

    /**
     * 确认
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_confirmstorychange(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        // 直接调实体服务需要转换的数据
        if(context && context.srfsessionid){
          context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        const backend = () => {
            const curService:CaseService =  new CaseService();
            curService.Confirmstorychange(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '确认成功！' });

                const _this: any = actionContext;
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
                return response;
            }).catch((response: any) => {
                if (!response || !response.status || !response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: '系统异常！' });
                    return;
                }
                if (response.status === 401) {
                    return;
                }
                return response;
            });
        };
        backend();
    }

    /**
     * 结果
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_CASEOpenTestRunResultView(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        let deResParameters: any[] = [];
        if(context.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'cases', parameterName: 'case' },
        ];
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'case-main-dashboard-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.case.views.maindashboardview.title'),
                placement: 'DRAWER_TOP',
            };
            openDrawer(view, data);
    }

    /**
     * 执行
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_CaseExecute(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        let deResParameters: any[] = [];
        if(context.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'cases', parameterName: 'case' },
        ];
            const openPopupModal = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appmodal.openModal(view, context, data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'case-option-view', 
                height: 600, 
                width: 800,  
                title: actionContext.$t('entities.case.views.optionview.title'),
            };
            openPopupModal(view, data);
    }

    /**
     * 批量新建用例
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_BatchNew(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        let deResParameters: any[] = [];
        if(context.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'cases', parameterName: 'case' },
        ];
            const openPopupModal = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appmodal.openModal(view, context, data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'case-batch-new-grid-view', 
                height: 700, 
                width: 1200,  
                title: actionContext.$t('entities.case.views.batchnewgridview.title'),
            };
            openPopupModal(view, data);
    }

    /**
     * 结果
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_OpenTestRunResultView(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        let deResParameters: any[] = [];
        if(context.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'cases', parameterName: 'case' },
        ];
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'case-main-dashboard-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.case.views.maindashboardview.title'),
                placement: 'DRAWER_TOP',
            };
            openDrawer(view, data);
    }

    /**
     * 编辑
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_MainEdit(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        let deResParameters: any[] = [];
        if(context.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'cases', parameterName: 'case' },
        ];
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    if (_this.Refresh && _this.Refresh instanceof Function) {
                        _this.Refresh(result.datas[0],context,params, $event, xData,actionContext);
                    }
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'case-main-edit-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.case.views.maineditview.title'),
                placement: 'DRAWER_TOP',
            };
            openDrawer(view, data);
    }

    /**
     * 保存
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_linkCase(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'MULTIKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        // 直接调实体服务需要转换的数据
        if(context && context.srfsessionid){
          context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        const backend = () => {
            const curService:CaseService =  new CaseService();
            curService.LinkCase(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '保存成功！' });

                const _this: any = actionContext;
                return response;
            }).catch((response: any) => {
                if (!response || !response.status || !response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: '系统异常！' });
                    return;
                }
                if (response.status === 401) {
                    return;
                }
                return response;
            });
        };
        backend();
    }

    /**
     * 转Bug
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Case_NewBugByCaseResult(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { case: '%case%' });
        Object.assign(params, { id: '%case%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        let deResParameters: any[] = [];
        if(context.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'cases', parameterName: 'case' },
        ];
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'case-main-dashboard-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.case.views.maindashboardview.title'),
                placement: 'DRAWER_TOP',
            };
            openDrawer(view, data);
    }


    /**
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  CaseUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({case:srfkey});
        const curData:any = result.data;
        //判断当前数据模式,默认为true，todo
        const iRealDEModel:boolean = true;

        let bDataInWF:boolean = false;
		let bWFMode:any = false;
		// 计算数据模式
		if (this.isEnableWorkflow) {
			bDataInWF = await this.dataService.testDataInWF({stateValue:this.stateValue,stateField:this.stateField},curData);
			if (bDataInWF) {
				bDataInWF = true;
				bWFMode = await this.dataService.testUserExistWorklist(null,curData);
			}
        }
        let strPDTViewParam:string = await this.getDESDDEViewPDTParam(curData, bDataInWF, bWFMode);
        //若不是当前数据模式，处理strPDTViewParam，todo

        //查找视图

        //返回视图
        return this.allViewMap.get(strPDTViewParam);
    }

    /**
	 * 获取实际的数据类型
     * 
     * @memberof  CaseUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  CaseUIServiceBase
     */
    public async getDESDDEViewPDTParam(curData:any, bDataInWF:boolean, bWFMode:boolean){
        let strPDTParam:string = '';
		if (bDataInWF) {
			// 判断数据是否在流程中
        }
        //多表单，todo
        const isEnableMultiForm:boolean = false;
        const multiFormDEField:string|null =null;

        if (isEnableMultiForm && multiFormDEField) {
			const objFormValue:string = curData[multiFormDEField];
			if(!Environment.isAppMode){
				return 'MOBEDITVIEW'+objFormValue;
			}
			return 'EDITVIEW'+objFormValue;
        }
		if(!Environment.isAppMode){
            if(this.getDEMainStateTag(curData)){
                return `MOBEDITVIEW:MSTAG:${ this.getDEMainStateTag(curData)}`;
            }
			return 'MOBEDITVIEW:';
        }
        if(this.getDEMainStateTag(curData)){
            return `EDITVIEW:MSTAG:${ this.getDEMainStateTag(curData)}`;
        }
		return 'EDITVIEW:';
    }

    /**
     * 获取数据对象的主状态标识
     * 
     * @param curData 当前数据
     * @memberof  CaseUIServiceBase
     */  
    public getDEMainStateTag(curData:any){
        if(this.mainStateFields.length === 0) return null;

        this.mainStateFields.forEach((singleMainField:any) =>{
            if(!(singleMainField in curData)){
                console.warn(`当前数据对象不包含属性${singleMainField}，可能会发生错误`);
            }
        })
        for (let i = 0; i <= 1; i++) {
            let strTag:string = (curData[this.mainStateFields[0]])?(i == 0) ? curData[this.mainStateFields[0]] : "":"";
            if (this.mainStateFields.length >= 2) {
                for (let j = 0; j <= 1; j++) {
                    let strTag2:string = (curData[this.mainStateFields[1]])?`${strTag}__${(j == 0) ? curData[this.mainStateFields[1]] : ""}`:strTag;
                    if (this.mainStateFields.length >= 3) {
                        for (let k = 0; k <= 1; k++) {
                            let strTag3:string = (curData[this.mainStateFields[2]])?`${strTag2}__${(k == 0) ? curData[this.mainStateFields[2]] : ""}`:strTag2;
                            // 判断是否存在
                            return this.allDeMainStateMap.get(strTag3);
                        }
                    }else{
                        return this.allDeMainStateMap.get(strTag2);
                    }
                }
            }else{
                return this.allDeMainStateMap.get(strTag);
            }
        }
        return null;
    }

    /**
    * 获取数据对象当前操作标识
    * 
    * @param data 当前数据
    * @memberof  CaseUIServiceBase
    */  
   public getDEMainStateOPPrivs(data:any){
        if(this.getDEMainStateTag(data)){
            return this.allDeMainStateOPPrivsMap.get((this.getDEMainStateTag(data) as string));
        }else{
            return null;
        }
   }

    /**
    * 获取数据对象所有的操作标识
    * 
    * @param data 当前数据
    * @memberof  CaseUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}