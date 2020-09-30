import CaseService from '@/app-core/service/case/case-service';
import CaseAuthService from '@/app-core/auth-service/case/case-auth-service';
import EntityUIActionBase from '@/utils/ui-service-base/entity-ui-action-base';
import { Util, Loading } from '@/ibiz-core/utils';
import { Notice } from '@/utils';
import { Environment } from '@/environments/environment';
/**
 * 测试用例UI服务对象基类
 *
 * @export
 * @class CaseUIActionBase
 * @extends {UIActionBase}
 */
export default class CaseUIActionBase extends EntityUIActionBase {

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
    public mainStateFields:Array<any> = ['status1','lastrunresult1','isfavorites'];

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
        super();
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
        this.allViewMap.set('MOBMDATAVIEW:',{viewname:'mobmdview',srfappde:'cases'});
        this.allViewMap.set('MOBEDITVIEW:',{viewname:'mobeditview',srfappde:'cases'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  CaseUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('blocked__blocked__0','blocked__blocked__0');
        this.allDeMainStateMap.set('blocked__blocked__1','blocked__blocked__1');
        this.allDeMainStateMap.set('blocked__fail__0','blocked__fail__0');
        this.allDeMainStateMap.set('blocked__fail__1','blocked__fail__1');
        this.allDeMainStateMap.set('blocked__n/a__0','blocked__n/a__0');
        this.allDeMainStateMap.set('blocked__n/a__1','blocked__n/a__1');
        this.allDeMainStateMap.set('blocked__no__0','blocked__no__0');
        this.allDeMainStateMap.set('blocked__no__1','blocked__no__1');
        this.allDeMainStateMap.set('blocked__pass__0','blocked__pass__0');
        this.allDeMainStateMap.set('blocked__pass__1','blocked__pass__1');
        this.allDeMainStateMap.set('casechange__blocked__0','casechange__blocked__0');
        this.allDeMainStateMap.set('casechange__blocked__1','casechange__blocked__1');
        this.allDeMainStateMap.set('casechange__fail__0','casechange__fail__0');
        this.allDeMainStateMap.set('casechange__fail__1','casechange__fail__1');
        this.allDeMainStateMap.set('casechange__n/a__0','casechange__n/a__0');
        this.allDeMainStateMap.set('casechange__n/a__1','casechange__n/a__1');
        this.allDeMainStateMap.set('casechange__no__0','casechange__no__0');
        this.allDeMainStateMap.set('casechange__no__1','casechange__no__1');
        this.allDeMainStateMap.set('casechange__pass__0','casechange__pass__0');
        this.allDeMainStateMap.set('casechange__pass__1','casechange__pass__1');
        this.allDeMainStateMap.set('done__blocked__0','done__blocked__0');
        this.allDeMainStateMap.set('done__blocked__1','done__blocked__1');
        this.allDeMainStateMap.set('done__fail__0','done__fail__0');
        this.allDeMainStateMap.set('done__fail__1','done__fail__1');
        this.allDeMainStateMap.set('done__n/a__0','done__n/a__0');
        this.allDeMainStateMap.set('done__n/a__1','done__n/a__1');
        this.allDeMainStateMap.set('done__no__0','done__no__0');
        this.allDeMainStateMap.set('done__no__1','done__no__1');
        this.allDeMainStateMap.set('done__pass__0','done__pass__0');
        this.allDeMainStateMap.set('done__pass__1','done__pass__1');
        this.allDeMainStateMap.set('investigate__blocked__0','investigate__blocked__0');
        this.allDeMainStateMap.set('investigate__blocked__1','investigate__blocked__1');
        this.allDeMainStateMap.set('investigate__fail__0','investigate__fail__0');
        this.allDeMainStateMap.set('investigate__fail__1','investigate__fail__1');
        this.allDeMainStateMap.set('investigate__n/a__0','investigate__n/a__0');
        this.allDeMainStateMap.set('investigate__n/a__1','investigate__n/a__1');
        this.allDeMainStateMap.set('investigate__no__0','investigate__no__0');
        this.allDeMainStateMap.set('investigate__no__1','investigate__no__1');
        this.allDeMainStateMap.set('investigate__pass__0','investigate__pass__0');
        this.allDeMainStateMap.set('investigate__pass__1','investigate__pass__1');
        this.allDeMainStateMap.set('normal__blocked__0','normal__blocked__0');
        this.allDeMainStateMap.set('normal__blocked__1','normal__blocked__1');
        this.allDeMainStateMap.set('normal__fail__0','normal__fail__0');
        this.allDeMainStateMap.set('normal__fail__1','normal__fail__1');
        this.allDeMainStateMap.set('normal__n/a__0','normal__n/a__0');
        this.allDeMainStateMap.set('normal__n/a__1','normal__n/a__1');
        this.allDeMainStateMap.set('normal__no__0','normal__no__0');
        this.allDeMainStateMap.set('normal__no__1','normal__no__1');
        this.allDeMainStateMap.set('normal__pass__0','normal__pass__0');
        this.allDeMainStateMap.set('normal__pass__1','normal__pass__1');
        this.allDeMainStateMap.set('storychange__blocked__0','storychange__blocked__0');
        this.allDeMainStateMap.set('storychange__blocked__1','storychange__blocked__1');
        this.allDeMainStateMap.set('storychange__fail__0','storychange__fail__0');
        this.allDeMainStateMap.set('storychange__fail__1','storychange__fail__1');
        this.allDeMainStateMap.set('storychange__n/a__0','storychange__n/a__0');
        this.allDeMainStateMap.set('storychange__n/a__1','storychange__n/a__1');
        this.allDeMainStateMap.set('storychange__no__0','storychange__no__0');
        this.allDeMainStateMap.set('storychange__no__1','storychange__no__1');
        this.allDeMainStateMap.set('storychange__pass__0','storychange__pass__0');
        this.allDeMainStateMap.set('storychange__pass__1','storychange__pass__1');
        this.allDeMainStateMap.set('wait__blocked__0','wait__blocked__0');
        this.allDeMainStateMap.set('wait__blocked__1','wait__blocked__1');
        this.allDeMainStateMap.set('wait__fail__0','wait__fail__0');
        this.allDeMainStateMap.set('wait__fail__1','wait__fail__1');
        this.allDeMainStateMap.set('wait__n/a__0','wait__n/a__0');
        this.allDeMainStateMap.set('wait__n/a__1','wait__n/a__1');
        this.allDeMainStateMap.set('wait__no__0','wait__no__0');
        this.allDeMainStateMap.set('wait__no__1','wait__no__1');
        this.allDeMainStateMap.set('wait__pass__0','wait__pass__0');
        this.allDeMainStateMap.set('wait__pass__1','wait__pass__1');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  CaseUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('blocked__blocked__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__blocked__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__fail__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__fail__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__n/a__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__n/a__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__no__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__no__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__pass__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__pass__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__blocked__0',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_CASERUN_BUT':1,'SRFUR__CASE_EDIT_BUT':1,'SRFUR__CASE_UNLINK_BUT':1,'SRFUR__CASE_FAVOR_BUT':1,'SRFUR__CASE_RUN_BUT':1,'SRFUR__CASE_RESULT_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,'SRFUR__CASE_CASERESULT_BUT':1,'SRFUR__CASE_CASETOBUG_BUT':1,'SRFUR__CASE_DELETE_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('casechange__blocked__1',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_EDIT_BUT':1,'SRFUR__CASE_UNLINK_BUT':1,'SRFUR__CASE_CASETOBUG_BUT':1,'SRFUR__CASE_CASERESULT_BUT':1,'SRFUR__CASE_RUN_BUT':1,'SRFUR__CASE_DELETE_BUT':1,'SRFUR__CASE_NFAVOR_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_RESULT_BUT':1,'SRFUR__CASE_CASERUN_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('casechange__fail__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__fail__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__n/a__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__n/a__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__no__0',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_CASETOBUG_BUT':1,'SRFUR__CASE_CASERUN_BUT':1,'SRFUR__CASE_FAVOR_BUT':1,'SRFUR__CASE_EDIT_BUT':1,'SRFUR__CASE_CASERESULT_BUT':1,'SRFUR__CASE_DELETE_BUT':1,'SRFUR__CASE_RUN_BUT':1,'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_RESULT_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,'SRFUR__CASE_UNLINK_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('casechange__no__1',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_CONFIRM_BUT':1,'SRFUR__CASE_NFAVOR_BUT':1,'SRFUR__CASE_DELETE_BUT':1,'SRFUR__CASE_EDIT_BUT':1,'SRFUR__CASE_CASERUN_BUT':1,'SRFUR__CASE_RUN_BUT':1,'SRFUR__CASE_UNLINK_BUT':1,'SRFUR__CASE_RESULT_BUT':1,'SRFUR__CASE_CASERESULT_BUT':1,'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_CASETOBUG_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('casechange__pass__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_RUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__pass__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__blocked__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__blocked__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__fail__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__fail__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__n/a__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__n/a__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__no__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__no__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__pass__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__pass__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__blocked__0',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_CASECOF_BUT':1,'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_FAVOR_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('investigate__blocked__1',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_NFAVOR_BUT':1,'SRFUR__CASE_CASECOF_BUT':1,'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('investigate__fail__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__fail__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__n/a__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__n/a__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__no__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__no__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__pass__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__pass__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__blocked__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__blocked__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__fail__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__fail__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__n/a__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__n/a__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__no__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__no__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__pass__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__pass__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__blocked__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_RESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__blocked__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__fail__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__fail__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__n/a__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__n/a__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_RUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__no__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__no__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__pass__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__pass__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__blocked__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__blocked__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__fail__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__fail__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__n/a__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__n/a__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__no__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__no__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__pass__0',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_FAVOR_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__pass__1',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_NFAVOR_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
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