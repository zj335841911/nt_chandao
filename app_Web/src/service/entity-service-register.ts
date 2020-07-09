/**
 * 实体数据服务注册中心
 *
 * @export
 * @class EntityServiceRegister
 */
export class EntityServiceRegister {

    /**
     * 所有实体数据服务Map
     *
     * @protected
     * @type {*}
     * @memberof EntityServiceRegister
     */
    protected allEntityService: Map<string, () => Promise<any>> = new Map();

    /**
     * 已加载实体数据服务Map缓存
     *
     * @protected
     * @type {Map<string, any>}
     * @memberof EntityServiceRegister
     */
    protected serviceCache: Map<string, any> = new Map();

    /**
     * Creates an instance of EntityServiceRegister.
     * @memberof EntityServiceRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof EntityServiceRegister
     */
    protected init(): void {
                this.allEntityService.set('productplan', () => import('@/service/product-plan/product-plan-service'));
        this.allEntityService.set('projectproduct', () => import('@/service/project-product/project-product-service'));
        this.allEntityService.set('case', () => import('@/service/case/case-service'));
        this.allEntityService.set('product', () => import('@/service/product/product-service'));
        this.allEntityService.set('file', () => import('@/service/file/file-service'));
        this.allEntityService.set('suitecase', () => import('@/service/suite-case/suite-case-service'));
        this.allEntityService.set('burn', () => import('@/service/burn/burn-service'));
        this.allEntityService.set('subproductplan', () => import('@/service/sub-product-plan/sub-product-plan-service'));
        this.allEntityService.set('storyspec', () => import('@/service/story-spec/story-spec-service'));
        this.allEntityService.set('branch', () => import('@/service/branch/branch-service'));
        this.allEntityService.set('productstats', () => import('@/service/product-stats/product-stats-service'));
        this.allEntityService.set('action', () => import('@/service/action/action-service'));
        this.allEntityService.set('group', () => import('@/service/group/group-service'));
        this.allEntityService.set('casestep', () => import('@/service/case-step/case-step-service'));
        this.allEntityService.set('dept', () => import('@/service/dept/dept-service'));
        this.allEntityService.set('company', () => import('@/service/company/company-service'));
        this.allEntityService.set('story', () => import('@/service/story/story-service'));
        this.allEntityService.set('subtask', () => import('@/service/sub-task/sub-task-service'));
        this.allEntityService.set('project', () => import('@/service/project/project-service'));
        this.allEntityService.set('history', () => import('@/service/history/history-service'));
        this.allEntityService.set('user', () => import('@/service/user/user-service'));
        this.allEntityService.set('productmodule', () => import('@/service/product-module/product-module-service'));
        this.allEntityService.set('module', () => import('@/service/module/module-service'));
        this.allEntityService.set('testmodule', () => import('@/service/test-module/test-module-service'));
        this.allEntityService.set('productlife', () => import('@/service/product-life/product-life-service'));
        this.allEntityService.set('task', () => import('@/service/task/task-service'));
        this.allEntityService.set('build', () => import('@/service/build/build-service'));
        this.allEntityService.set('testresult', () => import('@/service/test-result/test-result-service'));
        this.allEntityService.set('testsuite', () => import('@/service/test-suite/test-suite-service'));
        this.allEntityService.set('projectteam', () => import('@/service/project-team/project-team-service'));
        this.allEntityService.set('testtask', () => import('@/service/test-task/test-task-service'));
        this.allEntityService.set('testreport', () => import('@/service/test-report/test-report-service'));
        this.allEntityService.set('projectstats', () => import('@/service/project-stats/project-stats-service'));
        this.allEntityService.set('testrun', () => import('@/service/test-run/test-run-service'));
        this.allEntityService.set('bug', () => import('@/service/bug/bug-service'));
        this.allEntityService.set('projectmodule', () => import('@/service/project-module/project-module-service'));
        this.allEntityService.set('ibzdoc', () => import('@/service/ibz-doc/ibz-doc-service'));
        this.allEntityService.set('release', () => import('@/service/release/release-service'));
    }

    /**
     * 加载实体数据服务
     *
     * @protected
     * @param {string} serviceName
     * @returns {Promise<any>}
     * @memberof EntityServiceRegister
     */
    protected async loadService(serviceName: string): Promise<any> {
        const service = this.allEntityService.get(serviceName);
        if (service) {
            return service();
        }
    }

    /**
     * 获取应用实体数据服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof EntityServiceRegister
     */
    public async getService(name: string): Promise<any> {
        if (this.serviceCache.has(name)) {
            return this.serviceCache.get(name);
        }
        const entityService: any = await this.loadService(name);
        if (entityService && entityService.default) {
            const instance: any = new entityService.default();
            this.serviceCache.set(name, instance);
            return instance;
        }
    }

}
export const entityServiceRegister: EntityServiceRegister = new EntityServiceRegister();