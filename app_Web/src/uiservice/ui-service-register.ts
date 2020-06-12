/**
 * UI服务注册中心
 *
 * @export
 * @class UIServiceRegister
 */
export class UIServiceRegister {

    /**
     * 所有UI实体服务Map
     *
     * @protected
     * @type {*}
     * @memberof UIServiceRegister
     */
    protected allUIService: Map<string, () => Promise<any>> = new Map();

    /**
     * 已加载UI实体服务Map缓存
     *
     * @protected
     * @type {Map<string, any>}
     * @memberof UIServiceRegister
     */
    protected serviceCache: Map<string, any> = new Map();

    /**
     * Creates an instance of UIServiceRegister.
     * @memberof UIServiceRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof UIServiceRegister
     */
    protected init(): void {
                this.allUIService.set('productplan', () => import('@/uiservice/product-plan/product-plan-ui-service'));
        this.allUIService.set('projectproduct', () => import('@/uiservice/project-product/project-product-ui-service'));
        this.allUIService.set('case', () => import('@/uiservice/case/case-ui-service'));
        this.allUIService.set('product', () => import('@/uiservice/product/product-ui-service'));
        this.allUIService.set('burn', () => import('@/uiservice/burn/burn-ui-service'));
        this.allUIService.set('subproductplan', () => import('@/uiservice/sub-product-plan/sub-product-plan-ui-service'));
        this.allUIService.set('storyspec', () => import('@/uiservice/story-spec/story-spec-ui-service'));
        this.allUIService.set('branch', () => import('@/uiservice/branch/branch-ui-service'));
        this.allUIService.set('productstats', () => import('@/uiservice/product-stats/product-stats-ui-service'));
        this.allUIService.set('action', () => import('@/uiservice/action/action-ui-service'));
        this.allUIService.set('group', () => import('@/uiservice/group/group-ui-service'));
        this.allUIService.set('casestep', () => import('@/uiservice/case-step/case-step-ui-service'));
        this.allUIService.set('dept', () => import('@/uiservice/dept/dept-ui-service'));
        this.allUIService.set('company', () => import('@/uiservice/company/company-ui-service'));
        this.allUIService.set('story', () => import('@/uiservice/story/story-ui-service'));
        this.allUIService.set('subtask', () => import('@/uiservice/sub-task/sub-task-ui-service'));
        this.allUIService.set('project', () => import('@/uiservice/project/project-ui-service'));
        this.allUIService.set('history', () => import('@/uiservice/history/history-ui-service'));
        this.allUIService.set('user', () => import('@/uiservice/user/user-ui-service'));
        this.allUIService.set('productmodule', () => import('@/uiservice/product-module/product-module-ui-service'));
        this.allUIService.set('module', () => import('@/uiservice/module/module-ui-service'));
        this.allUIService.set('productlife', () => import('@/uiservice/product-life/product-life-ui-service'));
        this.allUIService.set('task', () => import('@/uiservice/task/task-ui-service'));
        this.allUIService.set('build', () => import('@/uiservice/build/build-ui-service'));
        this.allUIService.set('testtask', () => import('@/uiservice/test-task/test-task-ui-service'));
        this.allUIService.set('projectstats', () => import('@/uiservice/project-stats/project-stats-ui-service'));
        this.allUIService.set('bug', () => import('@/uiservice/bug/bug-ui-service'));
        this.allUIService.set('projectmodule', () => import('@/uiservice/project-module/project-module-ui-service'));
        this.allUIService.set('ibzdoc', () => import('@/uiservice/ibz-doc/ibz-doc-ui-service'));
        this.allUIService.set('release', () => import('@/uiservice/release/release-ui-service'));
    }

    /**
     * 加载服务实体
     *
     * @protected
     * @param {string} serviceName
     * @returns {Promise<any>}
     * @memberof UIServiceRegister
     */
    protected async loadService(serviceName: string): Promise<any> {
        const service = this.allUIService.get(serviceName);
        if (service) {
            return service();
        }
    }

    /**
     * 获取应用实体服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof UIServiceRegister
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
export const uiServiceRegister: UIServiceRegister = new UIServiceRegister();