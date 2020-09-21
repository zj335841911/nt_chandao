/**
 * 实体权限服务注册中心
 *
 * @export
 * @class AuthServiceRegister
 */
export class AuthServiceRegister {

    /**
     * 所有实体权限服务Map
     *
     * @protected
     * @type {*}
     * @memberof AuthServiceRegister
     */
    protected allAuthService: Map<string, () => Promise<any>> = new Map();

    /**
     * 已加载实体权限服务Map缓存
     *
     * @protected
     * @type {Map<string, any>}
     * @memberof AuthServiceRegister
     */
    protected serviceCache: Map<string, any> = new Map();

    /**
     * Creates an instance of AuthServiceRegister.
     * @memberof AuthServiceRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof AuthServiceRegister
     */
    protected init(): void {
                this.allAuthService.set('productplan', () => import('@/authservice/product-plan/product-plan-auth-service'));
        this.allAuthService.set('projectproduct', () => import('@/authservice/project-product/project-product-auth-service'));
        this.allAuthService.set('case', () => import('@/authservice/case/case-auth-service'));
        this.allAuthService.set('ibztaskteam', () => import('@/authservice/ibztask-team/ibztask-team-auth-service'));
        this.allAuthService.set('product', () => import('@/authservice/product/product-auth-service'));
        this.allAuthService.set('taskteam', () => import('@/authservice/task-team/task-team-auth-service'));
        this.allAuthService.set('file', () => import('@/authservice/file/file-auth-service'));
        this.allAuthService.set('ibzprostorymodule', () => import('@/authservice/ibzpro-story-module/ibzpro-story-module-auth-service'));
        this.allAuthService.set('ibzlibcasesteps', () => import('@/authservice/ibz-lib-casesteps/ibz-lib-casesteps-auth-service'));
        this.allAuthService.set('ibzlib', () => import('@/authservice/ibz-lib/ibz-lib-auth-service'));
        this.allAuthService.set('suitecase', () => import('@/authservice/suite-case/suite-case-auth-service'));
        this.allAuthService.set('burn', () => import('@/authservice/burn/burn-auth-service'));
        this.allAuthService.set('substory', () => import('@/authservice/sub-story/sub-story-auth-service'));
        this.allAuthService.set('subproductplan', () => import('@/authservice/sub-product-plan/sub-product-plan-auth-service'));
        this.allAuthService.set('storyspec', () => import('@/authservice/story-spec/story-spec-auth-service'));
        this.allAuthService.set('usertpl', () => import('@/authservice/user-tpl/user-tpl-auth-service'));
        this.allAuthService.set('ibzfavorites', () => import('@/authservice/ibz-favorites/ibz-favorites-auth-service'));
        this.allAuthService.set('branch', () => import('@/authservice/branch/branch-auth-service'));
        this.allAuthService.set('productstats', () => import('@/authservice/product-stats/product-stats-auth-service'));
        this.allAuthService.set('ibzprojectmember', () => import('@/authservice/ibz-project-member/ibz-project-member-auth-service'));
        this.allAuthService.set('action', () => import('@/authservice/action/action-auth-service'));
        this.allAuthService.set('group', () => import('@/authservice/group/group-auth-service'));
        this.allAuthService.set('ibzproproduct', () => import('@/authservice/ibzpro-product/ibzpro-product-auth-service'));
        this.allAuthService.set('casestep', () => import('@/authservice/case-step/case-step-auth-service'));
        this.allAuthService.set('dept', () => import('@/authservice/dept/dept-auth-service'));
        this.allAuthService.set('company', () => import('@/authservice/company/company-auth-service'));
        this.allAuthService.set('ibzcasestep', () => import('@/authservice/ibzcase-step/ibzcase-step-auth-service'));
        this.allAuthService.set('taskestimate', () => import('@/authservice/task-estimate/task-estimate-auth-service'));
        this.allAuthService.set('story', () => import('@/authservice/story/story-auth-service'));
        this.allAuthService.set('todo', () => import('@/authservice/todo/todo-auth-service'));
        this.allAuthService.set('ibzlibmodule', () => import('@/authservice/ibz-lib-module/ibz-lib-module-auth-service'));
        this.allAuthService.set('subtask', () => import('@/authservice/sub-task/sub-task-auth-service'));
        this.allAuthService.set('ibzlibcasesteptmp', () => import('@/authservice/ibz-lib-case-step-tmp/ibz-lib-case-step-tmp-auth-service'));
        this.allAuthService.set('project', () => import('@/authservice/project/project-auth-service'));
        this.allAuthService.set('history', () => import('@/authservice/history/history-auth-service'));
        this.allAuthService.set('user', () => import('@/authservice/user/user-auth-service'));
        this.allAuthService.set('doclib', () => import('@/authservice/doc-lib/doc-lib-auth-service'));
        this.allAuthService.set('productmodule', () => import('@/authservice/product-module/product-module-auth-service'));
        this.allAuthService.set('module', () => import('@/authservice/module/module-auth-service'));
        this.allAuthService.set('testmodule', () => import('@/authservice/test-module/test-module-auth-service'));
        this.allAuthService.set('productlife', () => import('@/authservice/product-life/product-life-auth-service'));
        this.allAuthService.set('task', () => import('@/authservice/task/task-auth-service'));
        this.allAuthService.set('build', () => import('@/authservice/build/build-auth-service'));
        this.allAuthService.set('testresult', () => import('@/authservice/test-result/test-result-auth-service'));
        this.allAuthService.set('testsuite', () => import('@/authservice/test-suite/test-suite-auth-service'));
        this.allAuthService.set('ibzprostory', () => import('@/authservice/ibzpro-story/ibzpro-story-auth-service'));
        this.allAuthService.set('projectteam', () => import('@/authservice/project-team/project-team-auth-service'));
        this.allAuthService.set('testtask', () => import('@/authservice/test-task/test-task-auth-service'));
        this.allAuthService.set('ibztaskestimate', () => import('@/authservice/ibztask-estimate/ibztask-estimate-auth-service'));
        this.allAuthService.set('productline', () => import('@/authservice/product-line/product-line-auth-service'));
        this.allAuthService.set('pssyssfpub', () => import('@/authservice/pssys-sfpub/pssys-sfpub-auth-service'));
        this.allAuthService.set('testreport', () => import('@/authservice/test-report/test-report-auth-service'));
        this.allAuthService.set('projectstats', () => import('@/authservice/project-stats/project-stats-auth-service'));
        this.allAuthService.set('testrun', () => import('@/authservice/test-run/test-run-auth-service'));
        this.allAuthService.set('ibzmyterritory', () => import('@/authservice/ibz-my-territory/ibz-my-territory-auth-service'));
        this.allAuthService.set('bug', () => import('@/authservice/bug/bug-auth-service'));
        this.allAuthService.set('projectmodule', () => import('@/authservice/project-module/project-module-auth-service'));
        this.allAuthService.set('ibzdoc', () => import('@/authservice/ibz-doc/ibz-doc-auth-service'));
        this.allAuthService.set('pssysapp', () => import('@/authservice/pssys-app/pssys-app-auth-service'));
        this.allAuthService.set('ibzcase', () => import('@/authservice/ibz-case/ibz-case-auth-service'));
        this.allAuthService.set('pssystemdbcfg', () => import('@/authservice/pssystem-dbcfg/pssystem-dbcfg-auth-service'));
        this.allAuthService.set('release', () => import('@/authservice/release/release-auth-service'));
        this.allAuthService.set('dynadashboard', () => import('@/authservice/dyna-dashboard/dyna-dashboard-auth-service'));
    }

    /**
     * 加载实体权限服务
     *
     * @protected
     * @param {string} serviceName
     * @returns {Promise<any>}
     * @memberof AuthServiceRegister
     */
    protected async loadService(serviceName: string): Promise<any> {
        const service = this.allAuthService.get(serviceName);
        if (service) {
            return service();
        }
    }

    /**
     * 获取应用实体权限服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof AuthServiceRegister
     */
    public async getService(name: string): Promise<any> {
        if (this.serviceCache.has(name)) {
            return this.serviceCache.get(name);
        }
        const authService: any = await this.loadService(name);
        if (authService && authService.default) {
            const instance: any = new authService.default();
            this.serviceCache.set(name, instance);
            return instance;
        }
    }

}
export const authServiceRegister: AuthServiceRegister = new AuthServiceRegister();