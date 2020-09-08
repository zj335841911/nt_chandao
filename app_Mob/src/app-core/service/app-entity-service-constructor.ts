import { ServiceConstructorBase } from '@/ibiz-core/service/service-constructor-base';

/**
 * 应用实体服务
 *
 * @export
 * @class AppEntityServiceConstructor
 * @extends {ServiceConstructorBase}
 */
export class AppEntityServiceConstructor extends ServiceConstructorBase {

    /**
     * 初始化
     *
     * @protected
     * @memberof AppEntityServiceConstructor
     */
    protected init(): void {
        this.allService.set('branch', () => import('@/app-core/service/branch/branch-service'));
        this.allService.set('user', () => import('@/app-core/service/user/user-service'));
        this.allService.set('ibzfavorites', () => import('@/app-core/service/ibz-favorites/ibz-favorites-service'));
        this.allService.set('projectteam', () => import('@/app-core/service/project-team/project-team-service'));
        this.allService.set('build', () => import('@/app-core/service/build/build-service'));
        this.allService.set('task', () => import('@/app-core/service/task/task-service'));
        this.allService.set('module', () => import('@/app-core/service/module/module-service'));
        this.allService.set('product', () => import('@/app-core/service/product/product-service'));
        this.allService.set('dynadashboard', () => import('@/app-core/service/dyna-dashboard/dyna-dashboard-service'));
        this.allService.set('action', () => import('@/app-core/service/action/action-service'));
        this.allService.set('casestep', () => import('@/app-core/service/case-step/case-step-service'));
        this.allService.set('productline', () => import('@/app-core/service/product-line/product-line-service'));
        this.allService.set('release', () => import('@/app-core/service/release/release-service'));
        this.allService.set('taskteam', () => import('@/app-core/service/task-team/task-team-service'));
        this.allService.set('productmodule', () => import('@/app-core/service/product-module/product-module-service'));
        this.allService.set('project', () => import('@/app-core/service/project/project-service'));
        this.allService.set('todo', () => import('@/app-core/service/todo/todo-service'));
        this.allService.set('story', () => import('@/app-core/service/story/story-service'));
        this.allService.set('ibzmyterritory', () => import('@/app-core/service/ibz-my-territory/ibz-my-territory-service'));
        this.allService.set('case', () => import('@/app-core/service/case/case-service'));
        this.allService.set('testmodule', () => import('@/app-core/service/test-module/test-module-service'));
        this.allService.set('productplan', () => import('@/app-core/service/product-plan/product-plan-service'));
        this.allService.set('projectstats', () => import('@/app-core/service/project-stats/project-stats-service'));
        this.allService.set('bug', () => import('@/app-core/service/bug/bug-service'));
        this.allService.set('projectmodule', () => import('@/app-core/service/project-module/project-module-service'));
        this.allService.set('productstats', () => import('@/app-core/service/product-stats/product-stats-service'));
        this.allService.set('testtask', () => import('@/app-core/service/test-task/test-task-service'));
        this.allService.set('testsuite', () => import('@/app-core/service/test-suite/test-suite-service'));
    }

}

/**
 * 应用实体服务构造器
 */
export const appEntityServiceConstructor: AppEntityServiceConstructor = new AppEntityServiceConstructor();