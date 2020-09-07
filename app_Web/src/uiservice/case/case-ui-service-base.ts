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
    public mainStateFields:Array<any> = ['status1','lastrunresult'];

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
        this.allViewMap.set('EDITVIEW:',{viewname:'editview',srfappde:'cases',component:'case-edit-view'});
        this.allViewMap.set(':',{viewname:'linkcasegridview',srfappde:'cases',component:'case-link-case-grid-view'});
        this.allViewMap.set(':',{viewname:'optionview',srfappde:'cases',component:'case-option-view'});
        this.allViewMap.set(':',{viewname:'gridview9_my',srfappde:'cases',component:'case-grid-view9-my'});
        this.allViewMap.set(':',{viewname:'gridview9_storyaffect',srfappde:'cases',component:'case-grid-view9-storyaffect'});
        this.allViewMap.set(':',{viewname:'curtesttaskgridview',srfappde:'cases',component:'case-cur-test-task-grid-view'});
        this.allViewMap.set(':',{viewname:'tobugeditview',srfappde:'cases',component:'case-to-bug-edit-view'});
        this.allViewMap.set(':',{viewname:'maingridview',srfappde:'cases',component:'case-main-grid-view'});
        this.allViewMap.set(':',{viewname:'testmaindashboardview',srfappde:'cases',component:'case-test-main-dashboard-view'});
        this.allViewMap.set(':',{viewname:'maininfoeditview9',srfappde:'cases',component:'case-main-info-edit-view9'});
        this.allViewMap.set(':',{viewname:'testmaindetaileditview9',srfappde:'cases',component:'case-test-main-detail-edit-view9'});
        this.allViewMap.set(':',{viewname:'mainnewview',srfappde:'cases',component:'case-main-new-view'});
        this.allViewMap.set(':',{viewname:'gridview9_storyrelated',srfappde:'cases',component:'case-grid-view9-story-related'});
        this.allViewMap.set(':',{viewname:'batchnewgridview',srfappde:'cases',component:'case-batch-new-grid-view'});
        this.allViewMap.set(':',{viewname:'testoptionview',srfappde:'cases',component:'case-test-option-view'});
        this.allViewMap.set(':',{viewname:'exceditview',srfappde:'cases',component:'case-exc-edit-view'});
        this.allViewMap.set(':',{viewname:'maindashboardview',srfappde:'cases',component:'case-main-dashboard-view'});
        this.allViewMap.set(':',{viewname:'cursuitgridview',srfappde:'cases',component:'case-cur-suit-grid-view'});
        this.allViewMap.set(':',{viewname:'gridview9',srfappde:'cases',component:'case-grid-view9'});
        this.allViewMap.set(':',{viewname:'maineditview',srfappde:'cases',component:'case-main-edit-view'});
        this.allViewMap.set(':',{viewname:'mainmynewgridview',srfappde:'cases',component:'case-main-my-new-grid-view'});
        this.allViewMap.set(':',{viewname:'maindetaileditview9',srfappde:'cases',component:'case-main-detail-edit-view9'});
        this.allViewMap.set(':',{viewname:'gridview9_mecretae',srfappde:'cases',component:'case-grid-view9-me-cretae'});
        this.allViewMap.set(':',{viewname:'mainmygridview',srfappde:'cases',component:'case-main-my-grid-view'});
        this.allViewMap.set(':',{viewname:'suitelinkcasegridview',srfappde:'cases',component:'casesuite-link-case-grid-view'});
        this.allViewMap.set(':',{viewname:'testtaskexceditview',srfappde:'cases',component:'case-test-task-exc-edit-view'});
        this.allViewMap.set('MDATAVIEW:',{viewname:'gridview',srfappde:'cases',component:'case-grid-view'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  CaseUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('blocked','blocked');
        this.allDeMainStateMap.set('blocked__blocked','blocked__blocked');
        this.allDeMainStateMap.set('blocked__fail','blocked__fail');
        this.allDeMainStateMap.set('blocked__n/a','blocked__n/a');
        this.allDeMainStateMap.set('blocked__pass','blocked__pass');
        this.allDeMainStateMap.set('casechange','casechange');
        this.allDeMainStateMap.set('casechange__blocked','casechange__blocked');
        this.allDeMainStateMap.set('casechange__fail','casechange__fail');
        this.allDeMainStateMap.set('casechange__n/a','casechange__n/a');
        this.allDeMainStateMap.set('casechange__pass','casechange__pass');
        this.allDeMainStateMap.set('done','done');
        this.allDeMainStateMap.set('done__blocked','done__blocked');
        this.allDeMainStateMap.set('done__fail','done__fail');
        this.allDeMainStateMap.set('done__n/a','done__n/a');
        this.allDeMainStateMap.set('done__pass','done__pass');
        this.allDeMainStateMap.set('investigate','investigate');
        this.allDeMainStateMap.set('investigate__blocked','investigate__blocked');
        this.allDeMainStateMap.set('investigate__fail','investigate__fail');
        this.allDeMainStateMap.set('investigate__n/a','investigate__n/a');
        this.allDeMainStateMap.set('investigate__pass','investigate__pass');
        this.allDeMainStateMap.set('normal','normal');
        this.allDeMainStateMap.set('normal__blocked','normal__blocked');
        this.allDeMainStateMap.set('normal__fail','normal__fail');
        this.allDeMainStateMap.set('normal__n/a','normal__n/a');
        this.allDeMainStateMap.set('normal__pass','normal__pass');
        this.allDeMainStateMap.set('storychange','storychange');
        this.allDeMainStateMap.set('storychange__blocked','storychange__blocked');
        this.allDeMainStateMap.set('storychange__fail','storychange__fail');
        this.allDeMainStateMap.set('storychange__n/a','storychange__n/a');
        this.allDeMainStateMap.set('storychange__pass','storychange__pass');
        this.allDeMainStateMap.set('wait','wait');
        this.allDeMainStateMap.set('wait__blocked','wait__blocked');
        this.allDeMainStateMap.set('wait__fail','wait__fail');
        this.allDeMainStateMap.set('wait__n/a','wait__n/a');
        this.allDeMainStateMap.set('wait__pass','wait__pass');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  CaseUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_RUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__blocked',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_CASERUN_BUT':1,'SRFUR__CASE_EDIT_BUT':1,'SRFUR__CASE_UNLINK_BUT':1,'SRFUR__CASE_RUN_BUT':1,'SRFUR__CASE_RESULT_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,'SRFUR__CASE_CASERESULT_BUT':1,'SRFUR__CASE_CASETOBUG_BUT':1,'SRFUR__CASE_DELETE_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('casechange__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_RUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_RESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'EDIT':1,'RESULT':1,'RUN':1,'UNLINK':1,'UPDATE':1,'DELETE':1,}));
        this.allDeMainStateOPPrivsMap.set('investigate__blocked',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_CASECOF_BUT':1,'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_CASERESULT_BUT':1,'SRFUR__CASE_CASERUN_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,'SRFUR__CASE_CASETOBUG_BUT':1,'SRFUR__CASE_DELETE_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('investigate__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_DELETE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_RUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_EDIT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_RUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_RUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_DELETE_BUT':0,'SRFUR__CASE_RESULT_BUT':0,}));
    }

    /**
     * 删除
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
    public async Case_delete(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let confirmResult:boolean = await new Promise((resolve: any, reject: any) => {
          actionContext.$Modal.confirm({
              title: '警告',
              content: '确认要删除，删除操作将不可恢复？',
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
              actionContext.closeView(null);
        const backend = () => {
            const curService:CaseService =  new CaseService();
            curService.Remove(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '已删除' });

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
                height: 850, 
                width: 1350,  
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
            curService.UnlinkCases(context,data, true).then((response: any) => {
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
    public async Case_MainEditCz(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
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
                        _this.Refresh(result.datas,context,params, $event, xData,actionContext);
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
     * 关联用例
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
    public async Case_LinkCaseC(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(context,{TASK:"%task%"});
        Object.assign(params,{task:"%task%"});
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
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    if (xData && xData.refresh && xData.refresh instanceof Function) {
                        xData.refresh(args);
                    }
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'case-link-case-grid-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.case.views.linkcasegridview.title'),
                placement: 'DRAWER_TOP',
            };
            openDrawer(view, data);
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
    public async Case_NewBugByCaseResultCz(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
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
                viewname: 'case-to-bug-edit-view', 
                height: 850, 
                width: 1350,  
                title: actionContext.$t('entities.case.views.tobugeditview.title'),
            };
            openPopupModal(view, data);
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
                viewname: 'case-test-task-exc-edit-view', 
                height: 850, 
                width: 1350,  
                title: actionContext.$t('entities.case.views.testtaskexceditview.title'),
            };
            openPopupModal(view, data);
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
                viewname: 'case-test-option-view', 
                height: 850, 
                width: 1350,  
                title: actionContext.$t('entities.case.views.testoptionview.title'),
            };
            openPopupModal(view, data);
    }

    /**
     * 概况
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
    public async Case_Edits(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
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
                viewname: 'case-test-main-dashboard-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.case.views.testmaindashboardview.title'),
                placement: 'DRAWER_TOP',
            };
            openDrawer(view, data);
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
    public async Case_suitelinkCase(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(context,{IDS:"%id%",SUITE:"%suite%",VERSIONS:"%version%"});
        Object.assign(params,{versions:"%version%",ids:"%id%",suite:"%suite%"});
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
              actionContext.closeView(null);
        const backend = () => {
            const curService:CaseService =  new CaseService();
            curService.TestsuitelinkCase(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '保存成功！' });

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
                viewname: 'case-exc-edit-view', 
                height: 850, 
                width: 1350,  
                title: actionContext.$t('entities.case.views.exceditview.title'),
            };
            openPopupModal(view, data);
    }

    /**
     * 删除
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
    public async Case_deleteCz(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let confirmResult:boolean = await new Promise((resolve: any, reject: any) => {
          actionContext.$Modal.confirm({
              title: '警告',
              content: '确认要删除，删除操作将不可恢复？',
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
              actionContext.closeView(null);
        const backend = () => {
            const curService:CaseService =  new CaseService();
            curService.Remove(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '已删除' });

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
    public async Case_unlinkSuiteCase(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(context,{SUITE:"%suite%"});
        Object.assign(params,{suite:"%suite%"});
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
            curService.UnlinkSuiteCases(context,data, true).then((response: any) => {
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
                        _this.Refresh(result.datas,context,params, $event, xData,actionContext);
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
    public async Case_OpenTestRunResultViewCz(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
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
                viewname: 'case-exc-edit-view', 
                height: 850, 
                width: 1350,  
                title: actionContext.$t('entities.case.views.exceditview.title'),
            };
            openPopupModal(view, data);
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
    public async Case_ExecuteCz(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
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
                height: 850, 
                width: 1350,  
                title: actionContext.$t('entities.case.views.optionview.title'),
            };
            openPopupModal(view, data);
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
        Object.assign(context,{IDS:"%id%",TASK:"%task%",VERSIONS:"%version%"});
        Object.assign(params,{versions:"%version%",ids:"%id%",task:"%task%"});
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
              actionContext.closeView(null);
        const backend = () => {
            const curService:CaseService =  new CaseService();
            curService.LinkCase(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '保存成功！' });

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
     * 新建
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
    public async Case_Create(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
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
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    if (xData && xData.refresh && xData.refresh instanceof Function) {
                        xData.refresh(args);
                    }
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'case-main-new-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.case.views.mainnewview.title'),
                placement: 'DRAWER_RIGHT',
            };
            openDrawer(view, data);
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
                viewname: 'case-to-bug-edit-view', 
                height: 850, 
                width: 1350,  
                title: actionContext.$t('entities.case.views.tobugeditview.title'),
            };
            openPopupModal(view, data);
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