import TaskService from '@/app-core/service/task/task-service';
import TaskAuthService from '@/app-core/auth-service/task/task-auth-service';
import EntityUIActionBase from '@/utils/ui-service-base/entity-ui-action-base';
import { Util, Loading } from '@/ibiz-core/utils';
import { Notice } from '@/utils';
import { Environment } from '@/environments/environment';
/**
 * 任务UI服务对象基类
 *
 * @export
 * @class TaskUIActionBase
 * @extends {UIActionBase}
 */
export default class TaskUIActionBase extends EntityUIActionBase {

    /**
     * 是否支持工作流
     * 
     * @memberof  TaskUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  TaskUIServiceBase
     */
    public dataService:TaskService = new TaskService();

    /**
     * 所有关联视图
     * 
     * @memberof  TaskUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  TaskUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  TaskUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  TaskUIServiceBase
     */  
    public mainStateFields:Array<any> = ['status','isfavorites'];

    /**
     * 主状态集合Map
     * 
     * @memberof  TaskUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  TaskUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  TaskUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskUIServiceBase
     */
    constructor(opts: any = {}) {
        super();
        this.authService = new TaskAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  TaskUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set(':',{viewname:'mobmdview',srfappde:'tasks'});
        this.allViewMap.set('MOBEDITVIEW:',{viewname:'mobeditview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'stopmoboptionview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'cancelmoboptionview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'closemoboptionview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'mobpickupmdview',srfappde:'tasks'});
        this.allViewMap.set('MOBPICKUPVIEW:',{viewname:'mobpickupview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'startmoboptionview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'favoritemobmdview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'commoboptionview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'assmobmdview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'moboptionview',srfappde:'tasks'});
        this.allViewMap.set(':',{viewname:'newmobeditview',srfappde:'tasks'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  TaskUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('cancel__0','cancel__0');
        this.allDeMainStateMap.set('cancel__1','cancel__1');
        this.allDeMainStateMap.set('closed__0','closed__0');
        this.allDeMainStateMap.set('closed__1','closed__1');
        this.allDeMainStateMap.set('doing__0','doing__0');
        this.allDeMainStateMap.set('doing__1','doing__1');
        this.allDeMainStateMap.set('done__0','done__0');
        this.allDeMainStateMap.set('done__1','done__1');
        this.allDeMainStateMap.set('pause__0','pause__0');
        this.allDeMainStateMap.set('pause__1','pause__1');
        this.allDeMainStateMap.set('wait__0','wait__0');
        this.allDeMainStateMap.set('wait__1','wait__1');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  TaskUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('cancel__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('cancel__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,}));
    }

    /**
     * 取消收藏
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_TaskNFavoritesMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { task: '%task%' });
        Object.assign(paramJO, { id: '%task%' });
        Object.assign(paramJO, { name: '%name%' });
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('task');
            const response: any = await curUIService.TaskNFavorites(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('取消收藏成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 更多
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_MyFavMore(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'favoritemobmdview', parameterName: 'favoritemobmdview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
    }

    /**
     * 完成
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_DoneTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { task: '%task%' });
        Object.assign(paramJO, { id: '%task%' });
        Object.assign(paramJO, { name: '%name%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'commoboptionview', parameterName: 'commoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 开始
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_StartTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { task: '%task%' });
        Object.assign(paramJO, { id: '%task%' });
        Object.assign(paramJO, { name: '%name%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'startmoboptionview', parameterName: 'startmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
    }

    /**
     * 删除
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_deleteMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '确认要删除，删除操作将不可恢复？');
        if (!state) {
            return Promise.reject();
        }
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { task: '%task%' });
        Object.assign(paramJO, { id: '%task%' });
        Object.assign(paramJO, { name: '%name%' });
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
              container.closeView(null);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('task');
            const response: any = await curUIService.Remove(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('已删除');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 关闭
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_CloseTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { task: '%task%' });
        Object.assign(paramJO, { id: '%task%' });
        Object.assign(paramJO, { name: '%name%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 取消
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_CancelTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { task: '%task%' });
        Object.assign(paramJO, { id: '%task%' });
        Object.assign(paramJO, { name: '%name%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'cancelmoboptionview', parameterName: 'cancelmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 收藏
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_TaskFavoritesMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { task: '%task%' });
        Object.assign(paramJO, { id: '%task%' });
        Object.assign(paramJO, { name: '%name%' });
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('task');
            const response: any = await curUIService.TaskFavorites(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('收藏成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 指派
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_AssignTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { task: '%task%' });
        Object.assign(paramJO, { id: '%task%' });
        Object.assign(paramJO, { name: '%name%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'moboptionview', parameterName: 'moboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 新建
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_CreateMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 暂停
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof TaskUIService
     */
    public async Task_PauseTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { task: '%task%' });
        Object.assign(paramJO, { id: '%task%' });
        Object.assign(paramJO, { name: '%name%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'stopmoboptionview', parameterName: 'stopmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }


    /**
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  TaskUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({task:srfkey});
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
     * @memberof  TaskUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  TaskUIServiceBase
     */
    public async getDESDDEViewPDTParam(curData:any, bDataInWF:boolean, bWFMode:boolean){
        let strPDTParam:string = '';
		if (bDataInWF) {
			// 判断数据是否在流程中
        }
        //多表单，todo
        const multiFormDEField:string|null =null;

        if (multiFormDEField) {
			const objFormValue:string = curData[multiFormDEField];
			if(!Environment.isAppMode){
				return 'MOBEDITVIEW:'+objFormValue;
			}
			return 'EDITVIEW:'+objFormValue;
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
     * @memberof  TaskUIServiceBase
     */  
    public getDEMainStateTag(curData:any){
        if(this.mainStateFields.length === 0) return null;

        this.mainStateFields.forEach((singleMainField:any) =>{
            if(!(singleMainField in curData)){
                console.warn(`当前数据对象不包含属性${singleMainField}，可能会发生错误`);
            }
        })
        for (let i = 0; i <= 1; i++) {
            let strTag:string = (curData[this.mainStateFields[0]] != null && curData[this.mainStateFields[0]] !== "")?(i == 0) ? curData[this.mainStateFields[0]] : "":"";
            if (this.mainStateFields.length >= 2) {
                for (let j = 0; j <= 1; j++) {
                    let strTag2:string = (curData[this.mainStateFields[1]] != null && curData[this.mainStateFields[1]] !== "")?`${strTag}__${(j == 0) ? curData[this.mainStateFields[1]] : ""}`:strTag;
                    if (this.mainStateFields.length >= 3) {
                        for (let k = 0; k <= 1; k++) {
                            let strTag3:string = (curData[this.mainStateFields[2]] != null && curData[this.mainStateFields[2]] !== "")?`${strTag2}__${(k == 0) ? curData[this.mainStateFields[2]] : ""}`:strTag2;
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
    * @memberof  TaskUIServiceBase
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
    * @memberof  TaskUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}