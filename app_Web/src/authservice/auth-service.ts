import store from '@/store';
/**
 * 实体权限服务
 *
 * @export
 * @class AuthService
 */
export default class AuthService {

    /**
     * Vue 状态管理器
     *
     * @public
     * @type {(any | null)}
     * @memberof AuthService
     */
    public $store: any;

    /**
     * 系统操作标识映射统一资源Map
     *
     * @public
     * @type {Map<string,any>}
     * @memberof AuthService
     */
    public sysOPPrivsMap:Map<string,any> = new  Map();

    /**
     * 默认操作标识
     *
     * @public
     * @type {(any)}
     * @memberof AuthService
     */
    public defaultOPPrivs: any = {CREATE: 1,DELETE: 1,DENY: 1,NONE: 1,READ: 1,SRFUR__BUG_ACTIVATE_BUT: 1,SRFUR__BUG_ASSIGNTO_BUT: 1,SRFUR__BUG_CLOSE_BUT: 1,SRFUR__BUG_CONFIRM_BUT: 1,SRFUR__BUG_CREATECASE_BUT: 1,SRFUR__BUG_CREATE_BUT: 1,SRFUR__BUG_DELETE_BUT: 1,SRFUR__BUG_RESOLVE_BUT: 1,SRFUR__CASE_CASECOF_BUT: 1,SRFUR__CASE_CASERESULT_BUT: 1,SRFUR__CASE_CASERUN_BUT: 1,SRFUR__CASE_CASETOBUG_BUT: 1,SRFUR__CASE_CONFIRM_BUT: 1,SRFUR__CASE_EDIT_BUT: 1,SRFUR__CASE_RESULT_BUT: 1,SRFUR__CASE_RUN_BUT: 1,SRFUR__CASE_TOBUG_BUT: 1,SRFUR__CASE_UNLINK_BUT: 1,SRFUR__PROD_CLOSED_BUT: 1,SRFUR__PROD_CREATE_BUT: 1,SRFUR__PROD_DELETE_BUT: 1,SRFUR__PROD_EDIT_BUT: 1,SRFUR__PROD_UPDATE_BUT: 1,SRFUR__PROJT_TM_BUT: 1,SRFUR__PROJ_ACTIVATION_BUT: 1,SRFUR__PROJ_CLOSED_BUT: 1,SRFUR__PROJ_CREATE_BUT: 1,SRFUR__PROJ_DELAY_BUT: 1,SRFUR__PROJ_DELETE_BUT: 1,SRFUR__PROJ_EDIT_BUT: 1,SRFUR__PROJ_MANAGE_BUT: 1,SRFUR__PROJ_START_BUT: 1,SRFUR__PROJ_SUSPEND_BUT: 1,SRFUR__PROP_CHILD_BUT: 1,SRFUR__PROP_CREATE_BUT: 1,SRFUR__PROP_DELETE_BUT: 1,SRFUR__PROP_EDIT_BUT: 1,SRFUR__PROP_LBUG_BUT: 1,SRFUR__PROP_LSTORY_BUT: 1,SRFUR__STORY_ACTIVE_BUT: 1,SRFUR__STORY_CHANGED_BUT: 1,SRFUR__STORY_CLOSED_BUT: 1,SRFUR__STORY_CREATE_BUT: 1,SRFUR__STORY_EDIT_BUT: 1,SRFUR__STORY_REVIEW_BUT: 1,SRFUR__TASK_ACTIVATION_BUT: 1,SRFUR__TASK_ASSIGN_BUT: 1,SRFUR__TASK_CANCEL_BUT: 1,SRFUR__TASK_CLOSE_BUT: 1,SRFUR__TASK_COMPLETE_BUT: 1,SRFUR__TASK_CREATE_BUT: 1,SRFUR__TASK_EDIT_BUT: 1,SRFUR__TASK_PAUSE_BUT: 1,SRFUR__TASK_PROCEED_BUT: 1,SRFUR__TASK_START_BUT: 1,SRFUR__TASK_SUBTASKS_BUT: 1,SRFUR__TESTSU_CREATE_BUT: 1,SRFUR__TESTSU_DELETE_BUT: 1,SRFUR__TESTSU_EDITSUITE_BUT: 1,SRFUR__TESTSU_LINKCASE_BUT: 1,SRFUR__TESTT_ACTIVITE_BUT: 1,SRFUR__TESTT_BLOCK_BUT: 1,SRFUR__TESTT_CLOSED_BUT: 1,SRFUR__TESTT_CREATE_BUT: 1,SRFUR__TESTT_DELETE_BUT: 1,SRFUR__TESTT_EDIT_BUT: 1,SRFUR__TESTT_LCASE_BUT: 1,SRFUR__TESTT_OPEN_BUT: 1,SRFUR__TESTT_START_BUT: 1,UPDATE: 1,WFSTART: 1}; 

    /**
     * Creates an instance of AuthService.
     * 
     * @param {*} [opts={}]
     * @memberof AuthService
     */
    constructor(opts: any = {}) {
        this.$store = store;
        this.registerSysOPPrivs();
    }

    /**
     * 获取状态管理器
     *
     * @returns {(any | null)}
     * @memberof AuthService
     */
    public getStore(): any {
        return this.$store;
    }

    /**
     * 获取计算统一资源之后的系统操作标识
     *
     * @returns {}
     * @memberof AuthService
     */
    public getSysOPPrivs(){
        let copySysOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(Object.keys(copySysOPPrivs).length === 0) return {};
        Object.keys(copySysOPPrivs).forEach((name:any) =>{
            if(this.sysOPPrivsMap.get(name)){
                copySysOPPrivs[name] = this.getResourcePermission(this.sysOPPrivsMap.get(name))?1:0;
            }
        })
        return copySysOPPrivs;
    }

    /**
     * 获取实体权限服务
     *
     * @param {string} name 实体名称
     * @returns {Promise<any>}
     * @memberof AuthService
     */
    public getService(name: string): Promise<any> {
        return (window as any)['authServiceRegister'].getService(name);
    }

    /**
     * 注册系统操作标识统一资源
     *
     * @param {string} name 实体名称
     * @returns {Promise<any>}
     * @memberof AuthService
     */ 
    public registerSysOPPrivs(){
        this.sysOPPrivsMap.set('SRFUR__BUG_ACTIVATE_BUT','BUG_ACTIVATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__BUG_ASSIGNTO_BUT','BUG_ASSIGNTO_BUT');
        this.sysOPPrivsMap.set('SRFUR__BUG_CLOSE_BUT','BUG_CLOSE_BUT');
        this.sysOPPrivsMap.set('SRFUR__BUG_CONFIRM_BUT','BUG_CONFIRM_BUT');
        this.sysOPPrivsMap.set('SRFUR__BUG_CREATECASE_BUT','BUG_CREATECASE_BUT');
        this.sysOPPrivsMap.set('SRFUR__BUG_CREATE_BUT','BUG_CREATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__BUG_DELETE_BUT','BUG_DELETE_BUT');
        this.sysOPPrivsMap.set('SRFUR__BUG_RESOLVE_BUT','BUG_RESOLVE_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_CASECOF_BUT','CASE_CASECOF_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_CASERESULT_BUT','CASE_CASERESULT_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_CASERUN_BUT','CASE_CASERUN_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_CASETOBUG_BUT','CASE_CASETOBUG_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_CONFIRM_BUT','CASE_CONFIRM_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_EDIT_BUT','CASE_EDIT_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_RESULT_BUT','CASE_RESULT_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_RUN_BUT','CASE_RUN_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_TOBUG_BUT','CASE_TOBUG_BUT');
        this.sysOPPrivsMap.set('SRFUR__CASE_UNLINK_BUT','CASE_UNLINK_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROD_CLOSED_BUT','PROD_CLOSED_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROD_CREATE_BUT','PROD_CREATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROD_DELETE_BUT','PROD_DELETE_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROD_EDIT_BUT','PROD_EDIT_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROD_UPDATE_BUT','PROD_UPDATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJT_TM_BUT','PROJT_TM_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJ_ACTIVATION_BUT','PROJ_ACTIVATION_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJ_CLOSED_BUT','PROJ_CLOSED_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJ_CREATE_BUT','PROJ_CREATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJ_DELAY_BUT','PROJ_DELAY_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJ_DELETE_BUT','PROJ_DELETE_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJ_EDIT_BUT','PROJ_EDIT_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJ_MANAGE_BUT','PROJ_MANAGE_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJ_START_BUT','PROJ_START_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROJ_SUSPEND_BUT','PROJ_SUSPEND_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROP_CHILD_BUT','PROP_CHILD_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROP_CREATE_BUT','PROP_CREATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROP_DELETE_BUT','PROP_DELETE_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROP_EDIT_BUT','PROP_EDIT_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROP_LBUG_BUT','PROP_LBUG_BUT');
        this.sysOPPrivsMap.set('SRFUR__PROP_LSTORY_BUT','PROP_LSTORY_BUT');
        this.sysOPPrivsMap.set('SRFUR__STORY_ACTIVE_BUT','STORY_ACTIVE_BUT');
        this.sysOPPrivsMap.set('SRFUR__STORY_CHANGED_BUT','STORY_CHANGED_BUT');
        this.sysOPPrivsMap.set('SRFUR__STORY_CLOSED_BUT','STORY_CLOSED_BUT');
        this.sysOPPrivsMap.set('SRFUR__STORY_CREATE_BUT','STORY_CREATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__STORY_EDIT_BUT','STORY_EDIT_BUT');
        this.sysOPPrivsMap.set('SRFUR__STORY_REVIEW_BUT','STORY_REVIEW_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_ACTIVATION_BUT','TASK_ACTIVATION_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_ASSIGN_BUT','TASK_ASSIGN_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_CANCEL_BUT','TASK_CANCEL_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_CLOSE_BUT','TASK_CLOSE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_COMPLETE_BUT','TASK_COMPLETE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_CREATE_BUT','TASK_CREATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_EDIT_BUT','TASK_EDIT_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_PAUSE_BUT','TASK_PAUSE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_PROCEED_BUT','TASK_PROCEED_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_START_BUT','TASK_START_BUT');
        this.sysOPPrivsMap.set('SRFUR__TASK_SUBTASKS_BUT','TASK_SUBTASKS_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTSU_CREATE_BUT','TESTSU_CREATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTSU_DELETE_BUT','TESTSU_DELETE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTSU_EDITSUITE_BUT','TESTSU_EDITSUITE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTSU_LINKCASE_BUT','TESTSU_LINKCASE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTT_ACTIVITE_BUT','TESTT_ACTIVITE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTT_BLOCK_BUT','TESTT_BLOCK_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTT_CLOSED_BUT','TESTT_CLOSED_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTT_CREATE_BUT','TESTT_CREATE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTT_DELETE_BUT','TESTT_DELETE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTT_EDIT_BUT','TESTT_EDIT_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTT_LCASE_BUT','TESTT_LCASE_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTT_OPEN_BUT','TESTT_OPEN_BUT');
        this.sysOPPrivsMap.set('SRFUR__TESTT_START_BUT','TESTT_START_BUT');
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {string} name 实体名称
     * @returns {any}
     * @memberof AuthService
     */
    public getOPPrivs(data: any): any {
        return null;
    }

    /**
     * 根据菜单项获取菜单权限
     *
     * @param {*} item 菜单标识
     * @returns {boolean}
     * @memberof AuthService
     */
    public getMenusPermission(item: any): boolean {
        return this.$store.getters['authresource/getAuthMenu'](item);
    }

    /**
     * 根据统一资源标识获取统一资源权限
     *
     * @param {*} tag 统一资源标识
     * @returns {boolean}
     * @memberof AuthService
     */
    public getResourcePermission(tag: any): boolean {
        return this.$store.getters['authresource/getResourceData'](tag);
    }

}