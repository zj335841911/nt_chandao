import { Environment } from '@/environments/environment';
import { UIActionTool,Util } from '@/utils';
import UIService from '../ui-service';
import { Subject } from 'rxjs';
import BugService from '@/service/bug/bug-service';

/**
 * BugUI服务对象基类
 *
 * @export
 * @class BugUIServiceBase
 */
export default class BugUIServiceBase extends UIService {

    /**
     * 是否支持工作流
     * 
     * @memberof  BugUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  BugUIServiceBase
     */
    public dataService:BugService = new BugService();

    /**
     * 所有关联视图
     * 
     * @memberof  BugUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  BugUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  BugUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  BugUIServiceBase
     */  
    public mainStateFields:Array<any> = [];

    /**
     * 主状态集合Map
     * 
     * @memberof  BugUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * Creates an instance of  BugUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  BugUIServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
        this.initViewMap();
        this.initDeMainStateMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  BugUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set(':',{viewname:'plansubgridview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'buildsubgridview_new',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'maineditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'maindashboardview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'pickupgridview',srfappde:'bugs'});
        this.allViewMap.set('MPICKUPVIEW:',{viewname:'mpickupview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'buglifeeditview9',srfappde:'bugs'});
        this.allViewMap.set('EDITVIEW:',{viewname:'editview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'testreportsubgridview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'releasesubgridview_done',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'stepsinfoeditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'confirmview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'gridview9_assignedtome',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'releasesubgridview_undone',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'resolveview',srfappde:'bugs'});
        this.allViewMap.set('MDATAVIEW:',{viewname:'gridview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'gridview9_storyrelated',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'closeview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'dashboardmaineditview9',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'buildsubgridview_done',srfappde:'bugs'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  BugUIServiceBase
     */  
    public initDeMainStateMap(){
    }

    /**
     * 关闭
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
    public async Bug_CloseBug(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { bug: '%bug%' });
        Object.assign(params, { id: '%bug%' });
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
            { pathName: 'bugs', parameterName: 'bug' },
        ];
            const openPopupModal = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appmodal.openModal(view, context, data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    if(window.opener){
                        window.opener.postMessage({status:'OK',identification:'WF'},Environment.uniteAddress);
                        window.close();
                    }
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'bug-close-view', 
                height: 600, 
                width: 800,  
                title: actionContext.$t('entities.bug.views.closeview.title'),
            };
            openPopupModal(view, data);
    }

    /**
     * 关联Bug
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
    public async Bug_PlanRelationBug(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
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
            { pathName: 'bugs', parameterName: 'bug' },
        ];
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    if(window.opener){
                        window.opener.postMessage({status:'OK',identification:'WF'},Environment.uniteAddress);
                        window.close();
                    }
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'bug-mpickup-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.bug.views.mpickupview.title'),
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
    public async Bug_MainEdit(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { bug: '%bug%' });
        Object.assign(params, { id: '%bug%' });
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
            { pathName: 'bugs', parameterName: 'bug' },
        ];
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    if(window.opener){
                        window.opener.postMessage({status:'OK',identification:'WF'},Environment.uniteAddress);
                        window.close();
                    }
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'bug-main-edit-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.bug.views.maineditview.title'),
                placement: 'DRAWER_TOP',
            };
            openDrawer(view, data);
    }

    /**
     * 移除关联
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
    public async Bug_UnlinkBug(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let confirmResult:boolean = await new Promise((resolve: any, reject: any) => {
          actionContext.$Modal.confirm({
              title: '警告',
              content: '是否移除关联Bug',
              onOk: () => {resolve(true);},
              onCancel: () => {resolve(false);}
          });
        });
        if(!confirmResult){
            return;
        }
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { bug: '%bug%' });
        Object.assign(params, { id: '%bug%' });
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
            const curService:BugService =  new BugService();
            curService.UnlinkBug(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '移除成功' });

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
    public async Bug_ConfirmBug(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { bug: '%bug%' });
        Object.assign(params, { id: '%bug%' });
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
            { pathName: 'bugs', parameterName: 'bug' },
        ];
            const openPopupModal = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appmodal.openModal(view, context, data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    if(window.opener){
                        window.opener.postMessage({status:'OK',identification:'WF'},Environment.uniteAddress);
                        window.close();
                    }
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'bug-confirm-view', 
                height: 600, 
                width: 800,  
                title: actionContext.$t('entities.bug.views.confirmview.title'),
            };
            openPopupModal(view, data);
    }

    /**
     * 解决
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
    public async Bug_ResolveBug(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { bug: '%bug%' });
        Object.assign(params, { id: '%bug%' });
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
            { pathName: 'bugs', parameterName: 'bug' },
        ];
            const openPopupModal = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appmodal.openModal(view, context, data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    if(window.opener){
                        window.opener.postMessage({status:'OK',identification:'WF'},Environment.uniteAddress);
                        window.close();
                    }
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'bug-resolve-view', 
                height: 600, 
                width: 800,  
                title: actionContext.$t('entities.bug.views.resolveview.title'),
            };
            openPopupModal(view, data);
    }


    /**
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  BugUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({bug:srfkey});
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
     * @memberof  BugUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  BugUIServiceBase
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
                return `MOBEDITVIEW:MSTAG:${ await this.getDEMainStateTag(curData)}`;
            }
			return 'MOBEDITVIEW:';
        }
        if(this.getDEMainStateTag(curData)){
            return `EDITVIEW:MSTAG:${ await this.getDEMainStateTag(curData)}`;
        }
		return 'EDITVIEW:';
    }

    /**
     * 获取数据对象的主状态标识
     * 
     * @param curData 当前数据
     * @memberof  BugUIServiceBase
     */  
    public async getDEMainStateTag(curData:any){
        if(this.mainStateFields.length === 0) return null;

        this.mainStateFields.forEach((singleMainField:any) =>{
            if(!(singleMainField in curData)){
                console.error(`当前数据对象不包含属性singleMainField，可能会发生错误`);
            }
        })

        let strTag:String = "";
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

}