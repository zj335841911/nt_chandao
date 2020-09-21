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
    public mainStateFields:Array<any> = ['status1','lastrunresult1'];

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
        this.allDeMainStateMap.set('blocked__blocked','blocked__blocked');
        this.allDeMainStateMap.set('blocked__fail','blocked__fail');
        this.allDeMainStateMap.set('blocked__n/a','blocked__n/a');
        this.allDeMainStateMap.set('blocked__no','blocked__no');
        this.allDeMainStateMap.set('blocked__pass','blocked__pass');
        this.allDeMainStateMap.set('casechange__blocked','casechange__blocked');
        this.allDeMainStateMap.set('casechange__fail','casechange__fail');
        this.allDeMainStateMap.set('casechange__n/a','casechange__n/a');
        this.allDeMainStateMap.set('casechange__no','casechange__no');
        this.allDeMainStateMap.set('casechange__pass','casechange__pass');
        this.allDeMainStateMap.set('done__blocked','done__blocked');
        this.allDeMainStateMap.set('done__fail','done__fail');
        this.allDeMainStateMap.set('done__n/a','done__n/a');
        this.allDeMainStateMap.set('done__no','done__no');
        this.allDeMainStateMap.set('done__pass','done__pass');
        this.allDeMainStateMap.set('investigate__blocked','investigate__blocked');
        this.allDeMainStateMap.set('investigate__fail','investigate__fail');
        this.allDeMainStateMap.set('investigate__n/a','investigate__n/a');
        this.allDeMainStateMap.set('investigate__no','investigate__no');
        this.allDeMainStateMap.set('investigate__pass','investigate__pass');
        this.allDeMainStateMap.set('normal__blocked','normal__blocked');
        this.allDeMainStateMap.set('normal__fail','normal__fail');
        this.allDeMainStateMap.set('normal__n/a','normal__n/a');
        this.allDeMainStateMap.set('normal__no','normal__no');
        this.allDeMainStateMap.set('normal__pass','normal__pass');
        this.allDeMainStateMap.set('storychange__blocked','storychange__blocked');
        this.allDeMainStateMap.set('storychange__fail','storychange__fail');
        this.allDeMainStateMap.set('storychange__n/a','storychange__n/a');
        this.allDeMainStateMap.set('storychange__no','storychange__no');
        this.allDeMainStateMap.set('storychange__pass','storychange__pass');
        this.allDeMainStateMap.set('wait__blocked','wait__blocked');
        this.allDeMainStateMap.set('wait__fail','wait__fail');
        this.allDeMainStateMap.set('wait__n/a','wait__n/a');
        this.allDeMainStateMap.set('wait__no','wait__no');
        this.allDeMainStateMap.set('wait__pass','wait__pass');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  CaseUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('blocked__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__no',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('blocked__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__blocked',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_CASERUN_BUT':1,'SRFUR__CASE_EDIT_BUT':1,'SRFUR__CASE_UNLINK_BUT':1,'SRFUR__CASE_RUN_BUT':1,'SRFUR__CASE_RESULT_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,'SRFUR__CASE_CASERESULT_BUT':1,'SRFUR__CASE_CASETOBUG_BUT':1,'SRFUR__CASE_DELETE_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('casechange__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('casechange__no',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_CASETOBUG_BUT':1,'SRFUR__CASE_CASERUN_BUT':1,'SRFUR__CASE_EDIT_BUT':1,'SRFUR__CASE_CASERESULT_BUT':1,'SRFUR__CASE_DELETE_BUT':1,'SRFUR__CASE_RUN_BUT':1,'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_RESULT_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,'SRFUR__CASE_UNLINK_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('casechange__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_RUN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__no',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__blocked',Object.assign({'CASECOF':0,'CASERESULT':0,'CASERUN':0,'CASETOBUG':0,'CONFIRM':0,'CREATE':0,'DELETE':0,'EDIT':0,'READ':0,'RESULT':0,'RUN':0,'TOBUG':0,'UNLINK':0,'UPDATE':0},{'SRFUR__CASE_CASECOF_BUT':1,'SRFUR__CASE_TOBUG_BUT':1,'SRFUR__CASE_CONFIRM_BUT':1,}));
        this.allDeMainStateOPPrivsMap.set('investigate__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__no',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('investigate__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__no',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('normal__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__no',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASERUN_BUT':0,'SRFUR__CASE_RESULT_BUT':0,'SRFUR__CASE_RUN_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASETOBUG_BUT':0,'SRFUR__CASE_EDIT_BUT':0,'SRFUR__CASE_CASERESULT_BUT':0,'SRFUR__CASE_UNLINK_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__blocked',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__fail',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__n/a',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__no',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CASECOF_BUT':0,'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__pass',Object.assign({'CASECOF':1,'CASERESULT':1,'CASERUN':1,'CASETOBUG':1,'CONFIRM':1,'CREATE':1,'DELETE':1,'EDIT':1,'READ':1,'RESULT':1,'RUN':1,'TOBUG':1,'UNLINK':1,'UPDATE':1},{'SRFUR__CASE_CONFIRM_BUT':0,'SRFUR__CASE_TOBUG_BUT':0,'SRFUR__CASE_CASECOF_BUT':0,}));
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