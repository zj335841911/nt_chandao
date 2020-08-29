import { ServiceConstructorBase } from '@/ibiz-core/service/service-constructor-base';
/**
 * 实体权限服务注册中心
 *
 * @export
 * @class AuthServiceConstructor
 */
export class AuthServiceConstructor extends ServiceConstructorBase {

    /**
     * 初始化
     *
     * @protected
     * @memberof AuthServiceConstructor
     */
    protected init(): void {
        this.allService.set('user', () => import('@/app-core/auth-service/user/user-auth-service'));
        this.allService.set('ibzfavorites', () => import('@/app-core/auth-service/ibz-favorites/ibz-favorites-auth-service'));
        this.allService.set('projectteam', () => import('@/app-core/auth-service/project-team/project-team-auth-service'));
        this.allService.set('build', () => import('@/app-core/auth-service/build/build-auth-service'));
        this.allService.set('task', () => import('@/app-core/auth-service/task/task-auth-service'));
        this.allService.set('product', () => import('@/app-core/auth-service/product/product-auth-service'));
        this.allService.set('action', () => import('@/app-core/auth-service/action/action-auth-service'));
        this.allService.set('casestep', () => import('@/app-core/auth-service/case-step/case-step-auth-service'));
        this.allService.set('release', () => import('@/app-core/auth-service/release/release-auth-service'));
        this.allService.set('taskteam', () => import('@/app-core/auth-service/task-team/task-team-auth-service'));
        this.allService.set('project', () => import('@/app-core/auth-service/project/project-auth-service'));
        this.allService.set('todo', () => import('@/app-core/auth-service/todo/todo-auth-service'));
        this.allService.set('story', () => import('@/app-core/auth-service/story/story-auth-service'));
        this.allService.set('ibzmyterritory', () => import('@/app-core/auth-service/ibz-my-territory/ibz-my-territory-auth-service'));
        this.allService.set('case', () => import('@/app-core/auth-service/case/case-auth-service'));
        this.allService.set('productplan', () => import('@/app-core/auth-service/product-plan/product-plan-auth-service'));
        this.allService.set('projectstats', () => import('@/app-core/auth-service/project-stats/project-stats-auth-service'));
        this.allService.set('bug', () => import('@/app-core/auth-service/bug/bug-auth-service'));
        this.allService.set('productstats', () => import('@/app-core/auth-service/product-stats/product-stats-auth-service'));
        this.allService.set('testtask', () => import('@/app-core/auth-service/test-task/test-task-auth-service'));
        this.allService.set('testsuite', () => import('@/app-core/auth-service/test-suite/test-suite-auth-service'));
    }


}
export const authServiceConstructor: AuthServiceConstructor = new AuthServiceConstructor();